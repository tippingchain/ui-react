// src/hooks/useTransactionMonitor.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  TransactionStatus, 
  TransactionReceipt, 
  TransactionStatusUpdate 
} from '@tippingchain/sdk';
import { useNotifications } from '../components/notifications';

export interface TransactionMonitorState {
  status: TransactionStatus;
  receipt: TransactionReceipt | null;
  error: string | null;
  isLoading: boolean;
  progress: number; // 0-100
}

export interface UseTransactionMonitorOptions {
  enableNotifications?: boolean;
  autoStart?: boolean;
  onStatusChange?: (update: TransactionStatusUpdate) => void;
  onComplete?: (receipt: TransactionReceipt) => void;
  onError?: (error: string) => void;
}

export const useTransactionMonitor = (
  transactionHash: string | null,
  chainId: number | null,
  sdk: any, // ApeChainTippingSDK instance
  options: UseTransactionMonitorOptions = {}
) => {
  const {
    enableNotifications = true,
    autoStart = true,
    onStatusChange,
    onComplete,
    onError
  } = options;

  const [state, setState] = useState<TransactionMonitorState>({
    status: 'pending',
    receipt: null,
    error: null,
    isLoading: false,
    progress: 0
  });

  const { updateNotification } = useNotifications();
  const watchPromiseRef = useRef<Promise<TransactionStatusUpdate> | null>(null);
  const notificationIdRef = useRef<string | null>(null);

  // Calculate progress based on status
  const getProgressFromStatus = useCallback((status: TransactionStatus): number => {
    switch (status) {
      case 'pending': return 25;
      case 'confirmed': return 100;
      case 'failed': return 0;
      case 'dropped': return 0;
      case 'replaced': return 50;
      case 'not_found': return 0;
      default: return 0;
    }
  }, []);

  // Start monitoring a transaction
  const startMonitoring = useCallback(async (
    txHash: string,
    chainId: number,
    notificationId?: string
  ) => {
    if (!sdk?.transactionStatus) {
      console.error('SDK transaction status service not available');
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));
    notificationIdRef.current = notificationId || null;

    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }

      // Start watching transaction with callback
      watchPromiseRef.current = sdk.transactionStatus.watchTransactionWithCallback(
        txHash,
        chain,
        (update: TransactionStatusUpdate) => {
          const progress = getProgressFromStatus(update.status);
          
          setState(prev => ({
            ...prev,
            status: update.status,
            receipt: update.receipt || null,
            error: update.error || null,
            progress
          }));

          // Update notification if enabled
          if (enableNotifications && notificationIdRef.current) {
            let title = '';
            let message = '';
            let type: 'success' | 'error' | 'pending' = 'pending';

            switch (update.status) {
              case 'confirmed':
                type = 'success';
                title = 'Transaction Confirmed! ✅';
                message = `Transaction completed successfully`;
                break;
              case 'failed':
                type = 'error';
                title = 'Transaction Failed';
                message = update.error || 'Transaction failed';
                break;
              case 'pending':
                title = 'Transaction Pending';
                message = `Waiting for confirmation...`;
                break;
              default:
                title = `Transaction ${update.status}`;
                message = `Status: ${update.status}`;
            }

            updateNotification(notificationIdRef.current, {
              type,
              title,
              message,
              transactionHash: txHash,
              chainId,
              duration: type === 'success' || type === 'error' ? 6000 : 0
            });
          }

          // Call custom callbacks
          onStatusChange?.(update);
          
          if (update.status === 'confirmed' && update.receipt) {
            onComplete?.(update.receipt);
          } else if (update.status === 'failed') {
            onError?.(update.error || 'Transaction failed');
          }
        }
      );

      const result = await watchPromiseRef.current;
      setState(prev => ({ ...prev, isLoading: false }));
      
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setState(prev => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
        status: 'failed'
      }));
      onError?.(errorMessage);
    }
  }, [sdk, enableNotifications, getProgressFromStatus, updateNotification, onStatusChange, onComplete, onError]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    if (transactionHash && chainId && sdk?.transactionStatus) {
      sdk.transactionStatus.cancelWatch(transactionHash, chainId);
    }
    watchPromiseRef.current = null;
    setState(prev => ({ ...prev, isLoading: false }));
  }, [transactionHash, chainId, sdk]);

  // Auto-start monitoring when transaction hash and chain ID are provided
  useEffect(() => {
    if (autoStart && transactionHash && chainId && sdk) {
      startMonitoring(transactionHash, chainId);
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      stopMonitoring();
    };
  }, [transactionHash, chainId, autoStart, sdk, startMonitoring, stopMonitoring]);

  // Manual control functions
  const monitor = useCallback((
    txHash: string,
    chain: number,
    notificationId?: string
  ) => {
    return startMonitoring(txHash, chain, notificationId);
  }, [startMonitoring]);

  const reset = useCallback(() => {
    setState({
      status: 'pending',
      receipt: null,
      error: null,
      isLoading: false,
      progress: 0
    });
    notificationIdRef.current = null;
  }, []);

  return {
    // State
    ...state,
    
    // Control functions
    monitor,
    stopMonitoring,
    reset,
    
    // Status helpers
    isPending: state.status === 'pending',
    isConfirmed: state.status === 'confirmed',
    isFailed: state.status === 'failed',
    isComplete: state.status === 'confirmed' || state.status === 'failed'
  };
};