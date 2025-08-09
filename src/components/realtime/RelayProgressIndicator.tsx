// src/components/realtime/RelayProgressIndicator.tsx
import React from 'react';
import { Clock, CheckCircle, XCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useRelayProgress } from '../../hooks';

export interface RelayProgressIndicatorProps {
  relayId: string | null;
  sourceChainId: number | null;
  destinationChainId: number | null;
  sourceTransactionHash: string | null;
  sdk: any; // ApeChainTippingSDK instance
  className?: string;
  showTimeEstimate?: boolean;
  showTransactionLinks?: boolean;
  compact?: boolean;
  onComplete?: () => void;
}

export const RelayProgressIndicator: React.FC<RelayProgressIndicatorProps> = ({
  relayId,
  sourceChainId,
  destinationChainId,
  sourceTransactionHash,
  sdk,
  className = '',
  showTimeEstimate = true,
  showTransactionLinks = true,
  compact = false,
  onComplete
}) => {
  const {
    status,
    progress,
    destinationTransactionHash,
    error,
    isTracking,
    formatTimeRemaining,
    isCompleted,
    isFailed,
    isActive
  } = useRelayProgress(
    relayId,
    sourceChainId,
    destinationChainId,
    sourceTransactionHash,
    sdk,
    {
      enableNotifications: true,
      onComplete: (finalStatus) => {
        console.log('Relay completed:', finalStatus);
        onComplete?.();
      },
      onError: (error) => {
        console.error('Relay error:', error);
      }
    }
  );

  // Get chain names
  const getChainName = (chainId: number | null): string => {
    if (!chainId) return 'Unknown';
    
    const chainMap: { [key: number]: string } = {
      1: 'Ethereum',
      137: 'Polygon',
      10: 'Optimism',
      56: 'BSC',
      43114: 'Avalanche',
      8453: 'Base',
      42161: 'Arbitrum',
      167000: 'Taiko',
      2741: 'Abstract',
      33139: 'ApeChain',
      // Testnets
      17000: 'Holesky',
      80002: 'Amoy',
      33111: 'Curtis'
    };
    
    return chainMap[chainId] || `Chain ${chainId}`;
  };

  // Get explorer URL
  const getExplorerUrl = (txHash: string, chainId: number): string => {
    const explorerMap: { [key: number]: string } = {
      1: 'https://etherscan.io/tx/',
      137: 'https://polygonscan.com/tx/',
      10: 'https://optimistic.etherscan.io/tx/',
      56: 'https://bscscan.com/tx/',
      43114: 'https://snowtrace.io/tx/',
      8453: 'https://basescan.org/tx/',
      42161: 'https://arbiscan.io/tx/',
      167000: 'https://taikoscan.io/tx/',
      2741: 'https://explorer.abstract.xyz/tx/',
      33139: 'https://apechain.calderaexplorer.xyz/tx/',
      // Testnets
      17000: 'https://holesky.etherscan.io/tx/',
      80002: 'https://amoy.polygonscan.com/tx/',
      33111: 'https://curtis.explorer.caldera.xyz/tx/'
    };
    
    return `${explorerMap[chainId] || '#'}${txHash}`;
  };

  // Status configuration
  const getStatusConfig = () => {
    switch (status) {
      case 'initiated':
        return {
          color: 'blue',
          icon: Clock,
          title: 'Relay Initiated',
          description: 'Cross-chain relay starting...'
        };
      case 'pending':
        return {
          color: 'yellow',
          icon: Clock,
          title: 'Source Pending',
          description: 'Waiting for source transaction confirmation'
        };
      case 'relaying':
        return {
          color: 'blue',
          icon: ArrowRight,
          title: 'Relaying',
          description: 'Bridging funds to ApeChain'
        };
      case 'completed':
        return {
          color: 'green',
          icon: CheckCircle,
          title: 'Completed',
          description: 'Relay successful!'
        };
      case 'failed':
        return {
          color: 'red',
          icon: XCircle,
          title: 'Failed',
          description: error || 'Relay encountered an error'
        };
      default:
        return {
          color: 'gray',
          icon: Clock,
          title: 'Unknown',
          description: 'Relay status unknown'
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;
  const timeRemaining = formatTimeRemaining();

  if (compact) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <StatusIcon 
          size={16} 
          className={`text-${statusConfig.color}-500`} 
        />
        <span className="text-sm font-medium">
          {statusConfig.title}
        </span>
        <span className="text-xs text-gray-500">
          {progress}%
        </span>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <StatusIcon 
            size={20} 
            className={`text-${statusConfig.color}-500`} 
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Cross-chain Relay
          </h3>
        </div>
        
        {isTracking && (
          <div className="flex items-center space-x-1 text-xs text-blue-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Live</span>
          </div>
        )}
      </div>

      {/* Route */}
      <div className="flex items-center justify-center mb-4 text-sm text-gray-600">
        <span className="font-medium">{getChainName(sourceChainId)}</span>
        <ArrowRight size={16} className="mx-2 text-gray-400" />
        <span className="font-medium">{getChainName(destinationChainId)}</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{statusConfig.title}</span>
          <span>{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              isFailed 
                ? 'bg-red-500' 
                : isCompleted 
                  ? 'bg-green-500' 
                  : 'bg-blue-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Status Description */}
      <div className="mb-3">
        <p className={`text-sm ${
          isFailed ? 'text-red-600' : 'text-gray-600'
        }`}>
          {statusConfig.description}
        </p>
        
        {showTimeEstimate && timeRemaining && isActive && (
          <p className="text-xs text-gray-500 mt-1">
            Estimated time remaining: {timeRemaining}
          </p>
        )}
      </div>

      {/* Transaction Links */}
      {showTransactionLinks && (
        <div className="space-y-2 text-sm">
          {/* Source Transaction */}
          {sourceTransactionHash && sourceChainId && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Source Transaction:</span>
              <a
                href={getExplorerUrl(sourceTransactionHash, sourceChainId)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              >
                <span>{`${sourceTransactionHash.slice(0, 6)}...${sourceTransactionHash.slice(-4)}`}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}
          
          {/* Destination Transaction */}
          {destinationTransactionHash && destinationChainId && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Destination Transaction:</span>
              <a
                href={getExplorerUrl(destinationTransactionHash, destinationChainId)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              >
                <span>{`${destinationTransactionHash.slice(0, 6)}...${destinationTransactionHash.slice(-4)}`}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Relay ID (for debugging) */}
      {relayId && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            Relay ID: {relayId}
          </div>
        </div>
      )}
    </div>
  );
};

// Simplified version for inline use
export interface RelayStatusBadgeProps {
  status: string;
  progress: number;
  className?: string;
}

export const RelayStatusBadge: React.FC<RelayStatusBadgeProps> = ({
  status,
  progress,
  className = ''
}) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'relaying': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)} ${className}`}>
      {status} ({progress}%)
    </span>
  );
};