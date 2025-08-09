// src/components/notifications/NotificationToast.tsx
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  Clock, 
  X,
  ExternalLink,
  Copy
} from 'lucide-react';
import { NotificationToastProps, ChainExplorerUrls } from '../../types/notifications';

// Chain explorer URLs for transaction links
const CHAIN_EXPLORERS: ChainExplorerUrls = {
  1: { name: 'Etherscan', baseUrl: 'https://etherscan.io', txPath: '/tx/' },
  137: { name: 'PolygonScan', baseUrl: 'https://polygonscan.com', txPath: '/tx/' },
  10: { name: 'Optimism Explorer', baseUrl: 'https://optimistic.etherscan.io', txPath: '/tx/' },
  56: { name: 'BscScan', baseUrl: 'https://bscscan.com', txPath: '/tx/' },
  43114: { name: 'SnowTrace', baseUrl: 'https://snowtrace.io', txPath: '/tx/' },
  8453: { name: 'BaseScan', baseUrl: 'https://basescan.org', txPath: '/tx/' },
  42161: { name: 'Arbiscan', baseUrl: 'https://arbiscan.io', txPath: '/tx/' },
  167000: { name: 'Taiko Explorer', baseUrl: 'https://taikoscan.io', txPath: '/tx/' },
  2741: { name: 'Abstract Explorer', baseUrl: 'https://explorer.abstract.xyz', txPath: '/tx/' },
  33139: { name: 'ApeChain Explorer', baseUrl: 'https://apescan.io', txPath: '/tx/' },
  // Testnets
  17000: { name: 'Holesky Etherscan', baseUrl: 'https://holesky.etherscan.io', txPath: '/tx/' },
  80002: { name: 'Amoy PolygonScan', baseUrl: 'https://amoy.polygonscan.com', txPath: '/tx/' },
  33111: { name: 'Curtis ApeChain', baseUrl: 'https://curtis.explorer.caldera.xyz', txPath: '/tx/' },
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification,
  onRemove,
  position = 'top-right',
  getExplorerUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Animation entrance effect
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(notification.id), 300);
  };

  const getIcon = () => {
    const iconClass = "w-5 h-5 flex-shrink-0";
    switch (notification.type) {
      case 'success':
        return <CheckCircle className={`${iconClass} text-green-500`} />;
      case 'error':
        return <XCircle className={`${iconClass} text-red-500`} />;
      case 'warning':
        return <AlertCircle className={`${iconClass} text-yellow-500`} />;
      case 'info':
        return <Info className={`${iconClass} text-blue-500`} />;
      case 'pending':
        return <Clock className={`${iconClass} text-blue-500 animate-spin`} />;
      default:
        return <Info className={`${iconClass} text-gray-500`} />;
    }
  };

  const getBackgroundColor = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'pending':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getTextColor = () => {
    switch (notification.type) {
      case 'success':
        return 'text-green-800';
      case 'error':
        return 'text-red-800';
      case 'warning':
        return 'text-yellow-800';
      case 'info':
        return 'text-blue-800';
      case 'pending':
        return 'text-blue-800';
      default:
        return 'text-gray-800';
    }
  };

  const getExplorerLink = (chainId: number, txHash: string): string | null => {
    if (getExplorerUrl) {
      return getExplorerUrl(chainId, txHash);
    }
    
    const explorer = CHAIN_EXPLORERS[chainId];
    if (!explorer) return null;
    return `${explorer.baseUrl}${explorer.txPath}${txHash}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Failed to copy to clipboard:', err);
    });
  };

  const getAnimationClasses = () => {
    const isRightSide = position.includes('right');
    const isLeftSide = position.includes('left');
    
    if (isLeaving) {
      return isRightSide 
        ? 'transform translate-x-full opacity-0' 
        : isLeftSide 
        ? 'transform -translate-x-full opacity-0'
        : 'transform scale-95 opacity-0';
    }
    
    if (!isVisible) {
      return isRightSide 
        ? 'transform translate-x-full opacity-0' 
        : isLeftSide 
        ? 'transform -translate-x-full opacity-0'
        : 'transform scale-95 opacity-0';
    }
    
    return 'transform translate-x-0 scale-100 opacity-100';
  };

  return (
    <div
      className={`
        max-w-sm w-full shadow-lg rounded-lg border transition-all duration-300 ease-in-out
        ${getBackgroundColor()} ${getAnimationClasses()}
      `}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          
          <div className="ml-3 flex-1">
            <div className={`text-sm font-medium ${getTextColor()}`}>
              {notification.title}
            </div>
            
            {notification.message && (
              <div className={`mt-1 text-sm ${getTextColor()} opacity-90`}>
                {notification.message}
              </div>
            )}
            
            {/* Transaction Hash */}
            {notification.transactionHash && (
              <div className="mt-2 flex items-center space-x-2">
                <span className={`text-xs ${getTextColor()} opacity-75 font-mono`}>
                  {notification.transactionHash.slice(0, 10)}...{notification.transactionHash.slice(-8)}
                </span>
                
                <button
                  onClick={() => copyToClipboard(notification.transactionHash!)}
                  className={`p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors ${getTextColor()} opacity-60 hover:opacity-90`}
                  title="Copy transaction hash"
                >
                  <Copy className="w-3 h-3" />
                </button>
                
                {notification.chainId && getExplorerLink(notification.chainId, notification.transactionHash) && (
                  <a
                    href={getExplorerLink(notification.chainId, notification.transactionHash)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors ${getTextColor()} opacity-60 hover:opacity-90`}
                    title="View on explorer"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
            
            {/* Action Buttons */}
            {notification.actions && notification.actions.length > 0 && (
              <div className="mt-3 flex space-x-2">
                {notification.actions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`
                      px-3 py-1 text-xs rounded-md font-medium transition-colors
                      ${notification.type === 'success' 
                        ? 'bg-green-200 hover:bg-green-300 text-green-800'
                        : notification.type === 'error'
                        ? 'bg-red-200 hover:bg-red-300 text-red-800'
                        : notification.type === 'warning'
                        ? 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800'
                        : 'bg-blue-200 hover:bg-blue-300 text-blue-800'
                      }
                    `}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex-shrink-0 ml-4">
            <button
              onClick={handleRemove}
              className={`
                rounded-md p-1.5 inline-flex transition-colors
                hover:bg-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${getTextColor()} opacity-60 hover:opacity-90
                ${notification.type === 'success' && 'focus:ring-green-500'}
                ${notification.type === 'error' && 'focus:ring-red-500'}
                ${notification.type === 'warning' && 'focus:ring-yellow-500'}
                ${(notification.type === 'info' || notification.type === 'pending') && 'focus:ring-blue-500'}
              `}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};