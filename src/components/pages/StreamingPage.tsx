// packages/ui-react/src/components/pages/StreamingPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useActiveWalletChain, useActiveAccount, ConnectButton } from 'thirdweb/react';
import { 
  Play, 
  Pause, 
  Users, 
  Eye, 
  Heart, 
  DollarSign, 
  CheckCircle, 
  AlertCircle,
  Settings,
  Share2,
  Volume2,
  VolumeX,
  Maximize2,
  MoreVertical
} from 'lucide-react';
import { ChainSelector } from '../common';
import { MultiTokenTippingInterface } from '../MultiTokenTippingInterface';
import type { ApeChainTippingSDK, TipResult } from '@tippingchain/sdk';

export interface StreamingPageProps {
  client: any;
  sdk: ApeChainTippingSDK;
  
  // Stream Configuration
  creatorId: number;
  creatorWallet: string;
  creatorName?: string;
  creatorAvatar?: string;
  streamTitle?: string;
  streamDescription?: string;
  
  // Demo Configuration (optional)
  demoTipperWallet?: string;
  allowedTipperWallets?: string[];
  
  // UI Configuration
  defaultChainId?: number;
  enableChat?: boolean;
  enableViewerCount?: boolean;
  enableLikeButton?: boolean;
  enableShareButton?: boolean;
  enableFullscreen?: boolean;
  
  // Video Stream Configuration
  videoUrl?: string;
  thumbnailUrl?: string;
  isLiveStream?: boolean;
  enableVideoControls?: boolean;
  
  // Event Handlers
  onTipSuccess?: (result: TipResult) => void;
  onTipError?: (error: string) => void;
  onViewerCountChange?: (count: number) => void;
  onStreamStatusChange?: (status: 'playing' | 'paused' | 'stopped') => void;
  
  // Styling
  className?: string;
  streamPlayerClassName?: string;
  tippingPanelClassName?: string;
}

interface Message {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
  result?: TipResult;
  timestamp?: number;
}

export const StreamingPage: React.FC<StreamingPageProps> = ({
  client,
  sdk,
  creatorId,
  creatorWallet,
  creatorName = 'TippingChain Creator',
  creatorAvatar,
  streamTitle = 'Live Stream - Creator Tip Demo',
  streamDescription = 'Building the future of creator monetization',
  demoTipperWallet,
  allowedTipperWallets = [],
  defaultChainId = 8453,
  enableChat = false,
  enableViewerCount = true,
  enableLikeButton = true,
  enableShareButton = true,
  enableFullscreen = true,
  videoUrl,
  thumbnailUrl,
  isLiveStream = true,
  enableVideoControls = true,
  onTipSuccess,
  onTipError,
  onViewerCountChange,
  onStreamStatusChange,
  className = '',
  streamPlayerClassName = '',
  tippingPanelClassName = ''
}) => {
  const activeChain = useActiveWalletChain();
  const account = useActiveAccount();
  
  // Stream state
  const [selectedChainId, setSelectedChainId] = useState<number>(defaultChainId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewerCount, setViewerCount] = useState(1247);
  const [likeCount, setLikeCount] = useState(234);
  const [isLiked, setIsLiked] = useState(false);
  
  // Message state
  const [tipMessage, setTipMessage] = useState<Message | null>(null);
  
  // Access control
  const allowedTippers = demoTipperWallet ? [demoTipperWallet, ...allowedTipperWallets] : allowedTipperWallets;
  const isAuthorizedTipper = !allowedTippers.length || 
    allowedTippers.some(wallet => wallet.toLowerCase() === account?.address?.toLowerCase());

  // Update selectedChainId based on active chain
  useEffect(() => {
    if (activeChain && !selectedChainId) {
      setSelectedChainId(activeChain.id);
    }
  }, [activeChain, selectedChainId]);

  // Simulate viewer count changes
  useEffect(() => {
    if (!enableViewerCount) return;
    
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 5) - 2;
        const clampedCount = Math.max(1, newCount);
        onViewerCountChange?.(clampedCount);
        return clampedCount;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [enableViewerCount, onViewerCountChange]);

  const handlePlayPause = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    onStreamStatusChange?.(newPlayingState ? 'playing' : 'paused');
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleLikeToggle = () => {
    if (!enableLikeButton) return;
    
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (!enableShareButton) return;
    
    try {
      await navigator.share({
        title: streamTitle,
        text: streamDescription,
        url: window.location.href
      });
    } catch (error) {
      // Fallback to clipboard
      await navigator.clipboard.writeText(window.location.href);
      showMessage('success', 'Stream link copied to clipboard!');
    }
  };

  const handleFullscreen = () => {
    if (!enableFullscreen) return;
    setIsFullscreen(!isFullscreen);
  };

  const showMessage = (type: Message['type'], text: string, result?: TipResult) => {
    setTipMessage({ type, text, result, timestamp: Date.now() });
    setTimeout(() => setTipMessage(null), 5000);
  };

  const handleTipSuccess = (result: TipResult) => {
    const message = `Tip sent successfully! Transaction: ${result.sourceTransactionHash?.slice(0, 10)}...`;
    showMessage('success', message, result);
    onTipSuccess?.(result);
  };

  const handleTipError = (error: string) => {
    showMessage('error', `Tip failed: ${error}`);
    onTipError?.(error);
  };

  const renderCreatorAvatar = () => {
    if (creatorAvatar) {
      return (
        <img 
          src={creatorAvatar} 
          alt={creatorName}
          className="w-full h-full object-cover rounded-full"
        />
      );
    }
    
    return (
      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-white">
          {creatorName.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>
    );
  };

  const renderAccessControlAlert = () => {
    if (!account) {
      return (
        <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="flex-shrink-0">
                <DollarSign className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Connect Wallet:</strong> Connect your wallet to tip this creator
                </p>
                {demoTipperWallet && (
                  <p className="text-xs text-yellow-600 mt-1 font-mono">
                    Demo Tipper: {demoTipperWallet}
                  </p>
                )}
              </div>
            </div>
            <ConnectButton client={client} theme="light" />
          </div>
        </div>
      );
    }

    if (allowedTippers.length > 0 && !isAuthorizedTipper) {
      return (
        <div className="mb-6 bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <DollarSign className="h-5 w-5 text-orange-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                <strong>Restricted Access:</strong> This is a demo with limited wallet access
              </p>
              <p className="text-xs text-orange-600 mt-1">
                Expected: <span className="font-mono">{allowedTippers[0]}</span>
              </p>
              <p className="text-xs text-orange-600">
                Connected: <span className="font-mono">{account.address}</span>
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (isAuthorizedTipper) {
      return (
        <div className="mb-6 bg-green-100 border-l-4 border-green-500 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <DollarSign className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                <strong>Ready to Tip!</strong> You're connected and can send tips to this creator
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderTipMessage = () => {
    if (!tipMessage) return null;

    return (
      <div className={`mt-6 p-4 rounded-lg border flex items-center space-x-3 ${
        tipMessage.type === 'success' 
          ? 'bg-green-50 border-green-200 text-green-800'
          : tipMessage.type === 'error'
          ? 'bg-red-50 border-red-200 text-red-800'
          : tipMessage.type === 'warning'
          ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
          : 'bg-blue-50 border-blue-200 text-blue-800'
      }`}>
        {tipMessage.type === 'success' ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
        )}
        <div className="flex-1">
          <p className="font-medium">{tipMessage.text}</p>
          {tipMessage.result && tipMessage.result.estimatedUsdcAmount && (
            <p className="text-sm mt-1">
              Estimated USDC value: ~${tipMessage.result.estimatedUsdcAmount}
              {tipMessage.result.relayId && ` • Relay ID: ${tipMessage.result.relayId}`}
            </p>
          )}
        </div>
        <button
          onClick={() => setTipMessage(null)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gray-900 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🔴 {streamTitle}
          </h1>
          <p className="text-xl text-gray-300">
            {streamDescription}
          </p>
        </div>

        {/* Access Control Alerts */}
        {renderAccessControlAlert()}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Stream Section */}
          <div className="lg:col-span-2">
            <div className={`bg-black rounded-lg overflow-hidden shadow-2xl ${streamPlayerClassName}`}>
              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                
                {/* Mock Video Content */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    {renderCreatorAvatar()}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{creatorName}</h3>
                  <p className="text-gray-300 mb-4">{streamDescription}</p>
                  
                  {/* Play/Pause Button */}
                  {enableVideoControls && (
                    <button
                      onClick={handlePlayPause}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-200"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  )}
                </div>

                {/* Live Badge */}
                {isLiveStream && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </div>
                )}

                {/* Viewer Count */}
                {enableViewerCount && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {viewerCount.toLocaleString()}
                  </div>
                )}

                {/* Video Controls Overlay */}
                {enableVideoControls && (
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <button
                      onClick={handleMuteToggle}
                      className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    
                    {enableFullscreen && (
                      <button
                        onClick={handleFullscreen}
                        className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Stream Info Bar */}
              <div className="bg-gray-800 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10">
                        {renderCreatorAvatar()}
                      </div>
                      <div>
                        <h4 className="font-semibold">{creatorName}</h4>
                        <p className="text-xs text-gray-400 font-mono">
                          {creatorWallet.slice(0, 8)}...{creatorWallet.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {enableLikeButton && (
                      <button
                        onClick={handleLikeToggle}
                        className={`flex items-center transition-colors ${
                          isLiked ? 'text-red-500' : 'text-gray-300 hover:text-red-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm">{likeCount}</span>
                      </button>
                    )}
                    
                    {enableViewerCount && (
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{viewerCount}</span>
                      </div>
                    )}
                    
                    {enableShareButton && (
                      <button
                        onClick={handleShare}
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    )}
                    
                    <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">
                    🚀 Live demo of TippingChain v2.0 - Multi-chain tipping with USDC payouts on ApeChain
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tipping Interface */}
          <div className={`bg-white rounded-lg shadow-lg p-6 ${tippingPanelClassName}`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">💰 Send Tip to Creator</h2>
            
            {/* Creator Info */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-2">Target Creator</h3>
              <div className="text-sm space-y-1">
                <p className="text-gray-600">
                  Creator ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">#{creatorId}</span>
                </p>
                <p className="text-gray-600">Name: <span className="font-medium">{creatorName}</span></p>
                <p className="text-gray-600">Wallet:</p>
                <p className="font-mono text-xs bg-gray-100 p-2 rounded break-all">{creatorWallet}</p>
                <p className="text-green-600 text-xs">✓ Registered & Active</p>
              </div>
            </div>
            
            {/* Chain Selection */}
            <div className="mb-6">
              <ChainSelector
                value={selectedChainId}
                onChange={(chainId) => setSelectedChainId(chainId)}
                label="Select Source Chain"
                className="w-full"
              />
              {selectedChainId && (
                <p className="text-sm text-gray-500 mt-2">
                  Connected to: {activeChain?.name || 'Not connected'}
                </p>
              )}
            </div>

            {/* Multi-Token Tipping Component */}
            {isAuthorizedTipper ? (
              <MultiTokenTippingInterface
                creatorId={creatorId}
                client={client}
                sdk={sdk}
                onTipSuccess={handleTipSuccess}
                onTipError={handleTipError}
              />
            ) : (
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium mb-2">Multi-Token Tipping Interface Locked</p>
                <p className="text-sm text-gray-500">
                  {allowedTippers.length > 0 
                    ? 'Connect with an authorized wallet to unlock tipping functionality'
                    : 'Connect your wallet to unlock tipping functionality'
                  }
                </p>
              </div>
            )}

            {/* Tip Message */}
            {renderTipMessage()}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How TippingChain Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Token</h3>
              <p className="text-gray-600">
                Tip with native tokens or ERC20s (USDC, DAI, WETH) on 9 supported blockchains - see real-time balances and token info
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto Cross-Chain Bridge</h3>
              <p className="text-gray-600">
                Integrated Relay.link automatically bridges your tip and converts it to stable USDC - no extra steps needed
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creator Gets Paid</h3>
              <p className="text-gray-600">
                Creator receives stable USDC on ApeChain after 5% platform fee and tier-based revenue sharing
              </p>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Stream Configuration</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creator:</span>
                <span className="font-mono text-gray-900">
                  {creatorWallet.slice(0, 10)}...{creatorWallet.slice(-8)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Creator ID:</span>
                <span className="font-mono text-gray-900">#{creatorId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stream Type:</span>
                <span className="text-gray-900">{isLiveStream ? 'Live Stream' : 'Video'}</span>
              </div>
              {enableViewerCount && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Viewers:</span>
                  <span className="text-gray-900">{viewerCount.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};