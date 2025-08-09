// src/components/realtime/LiveBalanceDisplay.tsx
import React, { useState } from 'react';
import { RefreshCw, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { useBalanceWatcher } from '../../hooks';

export interface LiveBalanceDisplayProps {
  address: string | null;
  chainId: number | null;
  tokenAddress?: string | null; // undefined for native token
  sdk: any; // ApeChainTippingSDK instance
  tokenSymbol?: string;
  tokenDecimals?: number;
  className?: string;
  showRefreshButton?: boolean;
  showTrend?: boolean;
  enableNotifications?: boolean;
  autoRefresh?: boolean;
}

export const LiveBalanceDisplay: React.FC<LiveBalanceDisplayProps> = ({
  address,
  chainId,
  tokenAddress,
  sdk,
  tokenSymbol = 'ETH',
  tokenDecimals = 18,
  className = '',
  showRefreshButton = true,
  showTrend = true,
  enableNotifications = false,
  autoRefresh = true
}) => {
  const [isManualRefresh, setIsManualRefresh] = useState(false);

  const {
    balance,
    previousBalance,
    isRefreshing,
    lastUpdated,
    error,
    isWatching,
    balanceChanged,
    refreshBalance,
    refreshAfterTransaction
  } = useBalanceWatcher(
    address,
    chainId,
    tokenAddress,
    sdk,
    {
      enableNotifications,
      autoStart: autoRefresh,
      onBalanceChange: (update) => {
        console.log('Balance updated:', update);
      },
      onError: (error) => {
        console.error('Balance watcher error:', error);
      }
    }
  );

  const handleManualRefresh = async () => {
    setIsManualRefresh(true);
    try {
      await refreshBalance();
    } catch (error) {
      console.error('Manual refresh failed:', error);
    } finally {
      setIsManualRefresh(false);
    }
  };

  const getTrendDirection = (): 'up' | 'down' | 'none' => {
    if (!previousBalance || !balanceChanged) return 'none';
    
    const current = parseFloat(balance);
    const previous = parseFloat(previousBalance);
    
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'none';
  };

  const formatBalance = (bal: string): string => {
    const num = parseFloat(bal);
    if (num === 0) return '0';
    if (num < 0.0001) return '< 0.0001';
    if (num < 1) return num.toFixed(6);
    if (num < 1000) return num.toFixed(4);
    if (num < 1000000) return `${(num / 1000).toFixed(2)}K`;
    return `${(num / 1000000).toFixed(2)}M`;
  };

  const trendDirection = getTrendDirection();

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {/* Balance Display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">
            {tokenAddress ? tokenSymbol : 'Native'} Balance:
          </span>
          
          {/* Balance Value with Trend */}
          <div className="flex items-center space-x-1">
            <span className={`text-lg font-semibold ${
              error ? 'text-red-500' : 'text-gray-900'
            }`}>
              {error ? 'Error' : formatBalance(balance)}
            </span>
            
            {!error && (
              <span className="text-sm text-gray-500">
                {tokenSymbol}
              </span>
            )}
            
            {/* Trend Indicator */}
            {showTrend && trendDirection !== 'none' && !error && (
              <div className={`flex items-center ${
                trendDirection === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {trendDirection === 'up' ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Refresh Button */}
        {showRefreshButton && (
          <button
            onClick={handleManualRefresh}
            disabled={isRefreshing || isManualRefresh || !address}
            className={`p-1.5 rounded-md transition-colors ${
              isRefreshing || isManualRefresh
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title="Refresh balance"
          >
            <RefreshCw 
              size={16} 
              className={isRefreshing || isManualRefresh ? 'animate-spin' : ''} 
            />
          </button>
        )}
      </div>

      {/* Status Indicators */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          {/* Watching Status */}
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${
              isWatching ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            <span>{isWatching ? 'Live' : 'Static'}</span>
          </div>
          
          {/* Last Updated */}
          {lastUpdated && (
            <span>
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
        </div>

        {/* Loading/Error State */}
        <div className="flex items-center space-x-1">
          {isRefreshing && (
            <span className="text-blue-500">Refreshing...</span>
          )}
          
          {error && (
            <div className="flex items-center space-x-1 text-red-500">
              <AlertCircle size={12} />
              <span>Error</span>
            </div>
          )}
        </div>
      </div>

      {/* Error Details */}
      {error && (
        <div className="text-xs text-red-600 bg-red-50 p-2 rounded">
          {error}
        </div>
      )}

      {/* Previous Balance Info */}
      {showTrend && previousBalance && balanceChanged && !error && (
        <div className="text-xs text-gray-500">
          Previous: {formatBalance(previousBalance)} {tokenSymbol}
        </div>
      )}
    </div>
  );
};

// Additional utility component for multiple token balances
export interface MultiTokenBalanceDisplayProps {
  address: string | null;
  chainId: number | null;
  tokens: Array<{
    address?: string;
    symbol: string;
    decimals?: number;
  }>;
  sdk: any;
  className?: string;
  showRefreshButton?: boolean;
  enableNotifications?: boolean;
}

export const MultiTokenBalanceDisplay: React.FC<MultiTokenBalanceDisplayProps> = ({
  address,
  chainId,
  tokens,
  sdk,
  className = '',
  showRefreshButton = true,
  enableNotifications = false
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {tokens.map((token, index) => (
        <LiveBalanceDisplay
          key={`${chainId}-${token.address || 'native'}-${index}`}
          address={address}
          chainId={chainId}
          tokenAddress={token.address}
          sdk={sdk}
          tokenSymbol={token.symbol}
          tokenDecimals={token.decimals}
          showRefreshButton={showRefreshButton}
          showTrend={true}
          enableNotifications={enableNotifications}
          autoRefresh={true}
        />
      ))}
    </div>
  );
};