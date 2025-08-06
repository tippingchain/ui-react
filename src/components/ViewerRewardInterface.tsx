import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { ViewerRewardResult, ViewerInfo } from '@tippingchain/sdk';
import { ViewerSelector } from './ViewerSelector';

interface ViewerRewardInterfaceProps {
  sdkConfig: { client: any; sdk: any };
  creatorId?: number;
  className?: string;
  onRewardSent?: (result: ViewerRewardResult) => void;
  theme?: 'light' | 'dark';
}

export const ViewerRewardInterface: React.FC<ViewerRewardInterfaceProps> = ({
  sdkConfig,
  creatorId,
  className = '',
  onRewardSent,
  theme = 'light'
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  const [selectedViewer, setSelectedViewer] = useState<ViewerInfo | { address: string } | null>(null);
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [rewardsEnabled, setRewardsEnabled] = useState(true);
  const [lastResult, setLastResult] = useState<ViewerRewardResult | null>(null);
  const [showSelector, setShowSelector] = useState(true);

  const isDark = theme === 'dark';
  const chainId = activeChain?.id || 137; // Default to Polygon

  // Check if user is a creator and if rewards are enabled
  useEffect(() => {
    const checkCreatorStatus = async () => {
      if (!account?.address || !sdkConfig.sdk) return;
      
      try {
        const creatorIdFromWallet = await sdkConfig.sdk.getCreatorByWallet(
          account.address,
          chainId
        );
        setIsCreator(creatorIdFromWallet > 0);

        // Check if viewer rewards are enabled
        const enabled = await sdkConfig.sdk.areViewerRewardsEnabled(chainId);
        setRewardsEnabled(enabled);
      } catch (err) {
        console.error('Failed to check creator status:', err);
      }
    };

    checkCreatorStatus();
  }, [account, chainId, sdkConfig.sdk]);

  const handleSendReward = async () => {
    if (!account) {
      setError('Please connect your wallet');
      return;
    }

    if (!isCreator) {
      setError('Only creators can send viewer rewards');
      return;
    }

    if (!selectedViewer || !amount) {
      setError('Please select a viewer and enter an amount');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const rewardParams: any = {
        amount: (parseFloat(amount) * 1e18).toString(), // Convert to wei
        reason,
        token: 'native',
        chainId
      };

      // Add appropriate identifier based on viewer type
      if ('id' in selectedViewer) {
        rewardParams.viewerId = selectedViewer.id;
      } else {
        rewardParams.viewerAddress = selectedViewer.address;
      }

      const result = await sdkConfig.sdk.rewardViewer(rewardParams);

      if (result.success) {
        setSuccess(true);
        // Store result for display
        setLastResult(result);
        // Clear form
        setSelectedViewer(null);
        setAmount('');
        setReason('');
        setShowSelector(true);
        
        if (onRewardSent) {
          onRewardSent(result);
        }

        // Clear success message after 7 seconds
        setTimeout(() => {
          setSuccess(false);
          setLastResult(null);
        }, 7000);
      } else {
        setError(result.error || 'Failed to send reward');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send reward');
    } finally {
      setLoading(false);
    }
  };

  // Calculate fees
  const calculateFees = () => {
    if (!amount || isNaN(parseFloat(amount))) return { fee: '0', viewer: '0' };
    const amountNum = parseFloat(amount);
    const fee = amountNum * 0.01; // 1% platform fee
    const viewer = amountNum * 0.99;
    return {
      fee: fee.toFixed(6),
      viewer: viewer.toFixed(6)
    };
  };

  const fees = calculateFees();
  const nativeSymbol = activeChain?.nativeCurrency?.symbol || 'MATIC';

  if (!rewardsEnabled) {
    return (
      <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
        <div className="flex items-center space-x-2 text-yellow-600">
          <AlertCircle className="w-5 h-5" />
          <p className="font-medium">Viewer rewards are currently disabled</p>
        </div>
      </div>
    );
  }

  if (!isCreator && account) {
    return (
      <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
        <div className="flex items-center space-x-2 text-gray-500">
          <AlertCircle className="w-5 h-5" />
          <p>Only registered creators can send viewer rewards</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
      <div className="flex items-center mb-6">
        <Send className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-600'} mr-2`} />
        <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Reward Viewer
        </h2>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {success && lastResult && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm font-medium">Reward sent successfully!</p>
          </div>
          {lastResult.estimatedUsdcAmount && (
            <p className="text-green-600 text-xs ml-6">
              Viewer will receive ~{(parseFloat(lastResult.estimatedUsdcAmount) / 1e6).toFixed(2)} USDC on ApeChain
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {showSelector && !selectedViewer ? (
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Select Viewer
            </label>
            <ViewerSelector
              sdkConfig={sdkConfig}
              onSelect={(viewer) => {
                setSelectedViewer(viewer);
                setShowSelector(false);
                setError('');
              }}
              theme={theme}
              chainId={chainId}
            />
          </div>
        ) : selectedViewer && (
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Selected Viewer
            </label>
            <div className={`p-3 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  {'id' in selectedViewer ? (
                    <>
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Viewer #{selectedViewer.id}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {selectedViewer.wallet.slice(0, 6)}...{selectedViewer.wallet.slice(-4)}
                      </p>
                    </>
                  ) : (
                    <p className={`text-sm font-mono ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {selectedViewer.address.slice(0, 6)}...{selectedViewer.address.slice(-4)}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedViewer(null);
                    setShowSelector(true);
                  }}
                  className={`text-sm px-2 py-1 rounded ${
                    isDark
                      ? 'text-gray-400 hover:text-white hover:bg-gray-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Amount ({nativeSymbol})
          </label>
          <input
            type="number"
            step="0.001"
            placeholder="0.1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'border-gray-300'
            }`}
            disabled={loading}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Reason (Optional)
          </label>
          <input
            type="text"
            placeholder="Great question!"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={100}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'border-gray-300'
            }`}
            disabled={loading}
          />
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {reason.length}/100 characters
          </p>
        </div>

        <div className={`rounded-lg p-4 text-sm ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex justify-between mb-1">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Platform Fee (1%)</span>
            <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              {fees.fee} {nativeSymbol}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Viewer Receives</span>
            <span className={`font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              {fees.viewer} {nativeSymbol}
            </span>
          </div>
          <div className={`pt-2 mt-2 border-t ${isDark ? 'border-gray-600' : 'border-gray-300'}`}>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              💰 Rewards are automatically converted to USDC and sent to ApeChain
            </p>
          </div>
        </div>

        <button
          onClick={handleSendReward}
          disabled={loading || !account || !isCreator}
          className={`w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
            loading || !account || !isCreator
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isDark
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-orange-600 text-white hover:bg-orange-700'
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Reward</span>
            </>
          )}
        </button>

        {!account && (
          <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Connect your wallet to send rewards
          </p>
        )}
      </div>
    </div>
  );
};