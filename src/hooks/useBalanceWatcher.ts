// src/hooks/useBalanceWatcher.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { BalanceUpdate } from '@tippingchain/sdk';
import { useNotifications } from '../components/notifications';

export interface BalanceWatcherState {
  balance: string;
  previousBalance: string | null;
  isRefreshing: boolean;
  lastUpdated: Date | null;
  error: string | null;
}

export interface UseBalanceWatcherOptions {
  enableNotifications?: boolean;
  autoStart?: boolean;
  pollInterval?: number;
  onBalanceChange?: (update: BalanceUpdate) => void;
  onError?: (error: string) => void;
  notifyOnIncrease?: boolean;
  notifyOnDecrease?: boolean;
}

export const useBalanceWatcher = (
  address: string | null,
  chainId: number | null,
  tokenAddress: string | null | undefined, // undefined for native token
  sdk: any, // ApeChainTippingSDK instance
  options: UseBalanceWatcherOptions = {}
) => {
  const {
    enableNotifications = false, // Only notify on significant changes
    autoStart = true,
    pollInterval = 10000,
    onBalanceChange,
    onError,
    notifyOnIncrease = true,
    notifyOnDecrease = false
  } = options;

  const [state, setState] = useState<BalanceWatcherState>({
    balance: '0',
    previousBalance: null,
    isRefreshing: false,
    lastUpdated: null,
    error: null
  });

  const { addNotification } = useNotifications();
  const watcherKeyRef = useRef<string | null>(null);
  const isWatchingRef = useRef(false);

  // Format balance for display
  const formatBalance = useCallback((balance: string, decimals: number = 18): string => {
    try {
      const balanceBigInt = BigInt(balance);
      const divisor = BigInt(10 ** decimals);
      const wholePart = balanceBigInt / divisor;
      const fractionalPart = balanceBigInt % divisor;
      
      if (fractionalPart === BigInt(0)) {
        return wholePart.toString();
      }
      
      const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
      const trimmedFractional = fractionalStr.replace(/0+$/, '');
      
      return `${wholePart}.${trimmedFractional}`;
    } catch (error) {
      console.error('Error formatting balance:', error);
      return '0';
    }
  }, []);

  // Check if balance changed significantly
  const isSignificantChange = useCallback((
    oldBalance: string,
    newBalance: string,
    threshold: number = 0.01 // 1% change threshold
  ): boolean => {
    try {
      const oldBal = parseFloat(oldBalance);
      const newBal = parseFloat(newBalance);
      
      if (oldBal === 0) return newBal > 0;
      
      const changePercent = Math.abs((newBal - oldBal) / oldBal);
      return changePercent >= threshold;
    } catch {
      return oldBalance !== newBalance;
    }
  }, []);

  // Start watching balance
  const startWatching = useCallback(async () => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      console.warn('Missing required parameters for balance watching');
      return;
    }

    if (isWatchingRef.current) {
      console.warn('Already watching balance');
      return;
    }

    setState(prev => ({ ...prev, error: null }));
    
    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }

      isWatchingRef.current = true;

      // Set up balance watcher with callback
      watcherKeyRef.current = sdk.balanceWatcher.watchBalance(
        address,
        chain,
        tokenAddress,
        (update: BalanceUpdate) => {
          const formattedBalance = formatBalance(update.balance);
          const formattedPrevious = update.previousBalance ? formatBalance(update.previousBalance) : null;

          setState(prev => ({
            ...prev,
            balance: formattedBalance,
            previousBalance: formattedPrevious,
            lastUpdated: new Date(update.timestamp),
            isRefreshing: false
          }));

          // Handle notifications
          if (enableNotifications && update.previousBalance) {
            const balanceIncreased = BigInt(update.balance) > BigInt(update.previousBalance);
            const balanceDecreased = BigInt(update.balance) < BigInt(update.previousBalance);
            const shouldNotify = (balanceIncreased && notifyOnIncrease) || 
                               (balanceDecreased && notifyOnDecrease);

            if (shouldNotify && isSignificantChange(update.previousBalance, update.balance)) {
              const changeAmount = formatBalance(
                (BigInt(update.balance) - BigInt(update.previousBalance)).toString()
              );
              
              const tokenSymbol = tokenAddress ? 'Token' : 'ETH'; // Could be enhanced with token info
              const changeType = balanceIncreased ? 'increased' : 'decreased';
              const emoji = balanceIncreased ? '📈' : '📉';
              
              addNotification({
                type: balanceIncreased ? 'success' : 'info',
                title: `Balance ${changeType} ${emoji}`,
                message: `${tokenSymbol} balance changed by ${changeAmount}`,
                duration: 5000
              });
            }
          }

          // Call custom callback
          onBalanceChange?.(update);
        },
        { pollInterval }
      );

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setState(prev => ({ ...prev, error: errorMessage }));
      isWatchingRef.current = false;
      onError?.(errorMessage);
    }
  }, [
    address,
    chainId,
    tokenAddress,
    sdk,
    pollInterval,
    enableNotifications,
    notifyOnIncrease,
    notifyOnDecrease,
    formatBalance,
    isSignificantChange,
    addNotification,
    onBalanceChange,
    onError
  ]);

  // Stop watching balance
  const stopWatching = useCallback(() => {
    if (watcherKeyRef.current && sdk?.balanceWatcher) {
      sdk.balanceWatcher.cancelBalanceWatch(watcherKeyRef.current);
      watcherKeyRef.current = null;
    }
    isWatchingRef.current = false;
    setState(prev => ({ ...prev, isRefreshing: false }));
  }, [sdk]);

  // Manual refresh balance
  const refreshBalance = useCallback(async () => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      return;
    }

    setState(prev => ({ ...prev, isRefreshing: true, error: null }));

    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }

      const newBalance = await sdk.balanceWatcher.getBalance(
        address,
        chain,
        tokenAddress,
        false // Force fresh fetch, don't use cache
      );

      const formattedBalance = formatBalance(newBalance);
      setState(prev => ({
        ...prev,
        balance: formattedBalance,
        previousBalance: prev.balance,
        lastUpdated: new Date(),
        isRefreshing: false
      }));

      return formattedBalance;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setState(prev => ({ 
        ...prev, 
        error: errorMessage, 
        isRefreshing: false 
      }));
      onError?.(errorMessage);
      throw error;
    }
  }, [address, chainId, tokenAddress, sdk, formatBalance, onError]);

  // Refresh balance after transaction
  const refreshAfterTransaction = useCallback(async (
    transactionHash: string,
    maxWaitTime: number = 30000
  ) => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      return;
    }

    setState(prev => ({ ...prev, isRefreshing: true }));

    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }

      const update = await sdk.balanceWatcher.refreshBalanceAfterTransaction(
        transactionHash,
        address,
        chain,
        tokenAddress,
        maxWaitTime
      );

      const formattedBalance = formatBalance(update.balance);
      const formattedPrevious = update.previousBalance ? formatBalance(update.previousBalance) : null;

      setState(prev => ({
        ...prev,
        balance: formattedBalance,
        previousBalance: formattedPrevious,
        lastUpdated: new Date(update.timestamp),
        isRefreshing: false
      }));

      return update;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to refresh balance';
      setState(prev => ({ 
        ...prev, 
        error: errorMessage, 
        isRefreshing: false 
      }));
      onError?.(errorMessage);
      throw error;
    }
  }, [address, chainId, tokenAddress, sdk, formatBalance, onError]);

  // Auto-start watching when parameters are available
  useEffect(() => {
    if (autoStart && address && chainId !== null && sdk) {
      startWatching();
    }

    return () => {
      stopWatching();
    };
  }, [address, chainId, autoStart, sdk, startWatching, stopWatching]);

  // Reset state when key parameters change
  useEffect(() => {
    setState({
      balance: '0',
      previousBalance: null,
      isRefreshing: false,
      lastUpdated: null,
      error: null
    });
  }, [address, chainId, tokenAddress]);

  return {
    // State
    ...state,
    
    // Control functions
    startWatching,
    stopWatching,
    refreshBalance,
    refreshAfterTransaction,
    
    // Status helpers
    isWatching: isWatchingRef.current,
    hasBalance: parseFloat(state.balance) > 0,
    balanceChanged: state.previousBalance !== null && state.balance !== state.previousBalance,
    
    // Formatted values
    formattedBalance: state.balance,
    balanceFloat: parseFloat(state.balance)
  };
};