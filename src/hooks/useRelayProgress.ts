// src/hooks/useRelayProgress.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { RelayStatus, RelayUpdate } from '@tippingchain/sdk';
import { useNotifications } from '../components/notifications';

export interface RelayProgressState {
  status: RelayStatus['status'];
  progress: number; // 0-100
  relayId: string | null;
  sourceTransactionHash: string | null;
  destinationTransactionHash: string | null;
  estimatedCompletionTime: number | null;
  actualCompletionTime: number | null;
  error: string | null;
  isTracking: boolean;
}

export interface UseRelayProgressOptions {
  enableNotifications?: boolean;
  autoStart?: boolean;
  maxWaitTime?: number;
  onStatusChange?: (update: RelayUpdate) => void;
  onComplete?: (status: RelayStatus) => void;
  onError?: (error: string) => void;
}

export const useRelayProgress = (
  relayId: string | null,
  sourceChainId: number | null,
  destinationChainId: number | null,
  sourceTransactionHash: string | null,
  sdk: any, // ApeChainTippingSDK instance
  options: UseRelayProgressOptions = {}
) => {
  const {
    enableNotifications = true,
    autoStart = true,
    maxWaitTime = 600000, // 10 minutes
    onStatusChange,
    onComplete,
    onError
  } = options;

  const [state, setState] = useState<RelayProgressState>({
    status: 'initiated',
    progress: 0,
    relayId,
    sourceTransactionHash,
    destinationTransactionHash: null,
    estimatedCompletionTime: null,
    actualCompletionTime: null,
    error: null,
    isTracking: false
  });

  const { addNotification, updateNotification } = useNotifications();
  const trackingPromiseRef = useRef<Promise<RelayStatus> | null>(null);
  const notificationIdRef = useRef<string | null>(null);

  // Get status display info
  const getStatusDisplayInfo = useCallback((status: RelayStatus['status'], progress: number) => {
    switch (status) {
      case 'initiated':
        return { 
          title: 'Relay Initiated', 
          message: 'Cross-chain relay has been started', 
          emoji: '🚀',
          type: 'info' as const
        };
      case 'pending':
        return { 
          title: 'Source Transaction Pending', 
          message: 'Waiting for source transaction confirmation', 
          emoji: '⏳',
          type: 'pending' as const
        };
      case 'relaying':
        return { 
          title: 'Relaying Across Chains', 
          message: `Bridging to ApeChain (${progress}% complete)`, 
          emoji: '🌉',
          type: 'pending' as const
        };
      case 'completed':
        return { 
          title: 'Relay Complete! ✅', 
          message: 'Funds successfully bridged to ApeChain', 
          emoji: '✅',
          type: 'success' as const
        };
      case 'failed':
        return { 
          title: 'Relay Failed', 
          message: 'Cross-chain relay encountered an error', 
          emoji: '❌',
          type: 'error' as const
        };
      default:
        return { 
          title: 'Relay Status Unknown', 
          message: `Status: ${status}`, 
          emoji: '❓',
          type: 'info' as const
        };
    }
  }, []);

  // Start tracking relay progress
  const startTracking = useCallback(async (
    rId: string,
    sourceChain: number,
    destChain: number,
    sourceTxHash: string
  ) => {
    if (!sdk?.relayStatus) {
      console.error('SDK relay status service not available');
      return;
    }

    setState(prev => ({ ...prev, isTracking: true, error: null }));

    try {
      const sourceChainObj = sdk.getChainById(sourceChain);
      const destChainObj = sdk.getChainById(destChain);

      if (!sourceChainObj || !destChainObj) {
        throw new Error(`Unsupported chain: source ${sourceChain}, dest ${destChain}`);
      }

      // Create initial notification
      if (enableNotifications) {
        notificationIdRef.current = addNotification({
          type: 'pending',
          title: 'Starting Cross-chain Relay 🚀',
          message: 'Tracking relay progress to ApeChain...',
          duration: 0,
          transactionHash: sourceTxHash,
          chainId: sourceChain
        });
      }

      // Start tracking with callback
      trackingPromiseRef.current = sdk.relayStatus.trackRelayWithCallback(
        rId,
        sourceChainObj,
        destChainObj,
        sourceTxHash,
        (update: RelayUpdate) => {
          setState(prev => ({
            ...prev,
            status: update.status,
            progress: update.progress,
            destinationTransactionHash: update.destinationTransactionHash || prev.destinationTransactionHash,
            error: update.error || null,
            actualCompletionTime: update.status === 'completed' ? update.timestamp : null
          }));

          // Update notification
          if (enableNotifications && notificationIdRef.current) {
            const displayInfo = getStatusDisplayInfo(update.status, update.progress);
            
            updateNotification(notificationIdRef.current, {
              type: displayInfo.type,
              title: displayInfo.title,
              message: displayInfo.message,
              transactionHash: update.destinationTransactionHash || sourceTxHash,
              chainId: update.destinationTransactionHash ? destChain : sourceChain,
              duration: displayInfo.type === 'success' || displayInfo.type === 'error' ? 8000 : 0
            });
          }

          // Call custom callback
          onStatusChange?.(update);
        },
        { maxWaitTime }
      );

      const finalStatus = await trackingPromiseRef.current;
      
      setState(prev => ({
        ...prev,
        isTracking: false,
        destinationTransactionHash: finalStatus.destinationTransactionHash || prev.destinationTransactionHash,
        estimatedCompletionTime: finalStatus.estimatedCompletionTime || null,
        actualCompletionTime: finalStatus.actualCompletionTime || Date.now()
      }));

      // Call completion callback
      onComplete?.(finalStatus);
      
      return finalStatus;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown relay error';
      setState(prev => ({
        ...prev,
        error: errorMessage,
        isTracking: false,
        status: 'failed'
      }));
      
      // Update notification with error
      if (enableNotifications && notificationIdRef.current) {
        updateNotification(notificationIdRef.current, {
          type: 'error',
          title: 'Relay Tracking Failed',
          message: errorMessage,
          duration: 8000
        });
      }
      
      onError?.(errorMessage);
      throw error;
    }
  }, [sdk, enableNotifications, maxWaitTime, getStatusDisplayInfo, addNotification, updateNotification, onStatusChange, onComplete, onError]);

  // Stop tracking
  const stopTracking = useCallback(() => {
    if (relayId && sdk?.relayStatus) {
      sdk.relayStatus.cancelRelayTracking(relayId);
    }
    trackingPromiseRef.current = null;
    setState(prev => ({ ...prev, isTracking: false }));
  }, [relayId, sdk]);

  // Manual track function
  const trackRelay = useCallback((
    rId: string,
    sourceChain: number,
    destChain: number,
    sourceTxHash: string
  ) => {
    return startTracking(rId, sourceChain, destChain, sourceTxHash);
  }, [startTracking]);

  // Get estimated time remaining
  const getEstimatedTimeRemaining = useCallback((): number | null => {
    if (!state.estimatedCompletionTime) return null;
    
    const remaining = state.estimatedCompletionTime - Date.now();
    return Math.max(0, remaining);
  }, [state.estimatedCompletionTime]);

  // Format time remaining
  const formatTimeRemaining = useCallback((): string | null => {
    const remaining = getEstimatedTimeRemaining();
    if (!remaining) return null;
    
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    
    if (minutes > 0) {
      return `~${minutes}m ${seconds}s`;
    }
    return `~${seconds}s`;
  }, [getEstimatedTimeRemaining]);

  // Auto-start tracking when parameters are available
  useEffect(() => {
    if (
      autoStart && 
      relayId && 
      sourceChainId && 
      destinationChainId && 
      sourceTransactionHash && 
      sdk
    ) {
      startTracking(relayId, sourceChainId, destinationChainId, sourceTransactionHash);
    }

    return () => {
      stopTracking();
    };
  }, [
    relayId, 
    sourceChainId, 
    destinationChainId, 
    sourceTransactionHash, 
    autoStart, 
    sdk, 
    startTracking, 
    stopTracking
  ]);

  // Reset state when key parameters change
  useEffect(() => {
    setState(prev => ({
      ...prev,
      relayId,
      sourceTransactionHash,
      destinationTransactionHash: null,
      estimatedCompletionTime: null,
      actualCompletionTime: null,
      status: 'initiated',
      progress: 0,
      error: null
    }));
  }, [relayId, sourceTransactionHash]);

  return {
    // State
    ...state,
    
    // Control functions
    trackRelay,
    stopTracking,
    
    // Helper functions
    getEstimatedTimeRemaining,
    formatTimeRemaining,
    
    // Status helpers
    isInitiated: state.status === 'initiated',
    isPending: state.status === 'pending',
    isRelaying: state.status === 'relaying',
    isCompleted: state.status === 'completed',
    isFailed: state.status === 'failed',
    isActive: state.status === 'pending' || state.status === 'relaying',
    
    // Progress helpers
    progressPercent: `${state.progress}%`,
    isNearComplete: state.progress >= 90,
    hasDestinationTx: !!state.destinationTransactionHash
  };
};