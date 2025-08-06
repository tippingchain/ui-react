import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { Users, Loader2, AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import type { ViewerRewardResult } from '@tippingchain/sdk';

interface ViewerEntry {
  id: string;
  address: string;
  amount: string;
  reason: string;
}

interface BatchViewerRewardProps {
  sdkConfig: { client: any; sdk: any };
  creatorId?: number;
  className?: string;
  onBatchSent?: (result: ViewerRewardResult) => void;
  theme?: 'light' | 'dark';
  maxViewers?: number;
}

export const BatchViewerReward: React.FC<BatchViewerRewardProps> = ({
  sdkConfig,
  creatorId,
  className = '',
  onBatchSent,
  theme = 'light',
  maxViewers = 50
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  const [viewers, setViewers] = useState<ViewerEntry[]>([
    { id: '1', address: '', amount: '', reason: '' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [rewardsEnabled, setRewardsEnabled] = useState(true);
  const [lastResult, setLastResult] = useState<ViewerRewardResult | null>(null);

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

  const addViewer = () => {
    if (viewers.length >= maxViewers) {
      setError(`Maximum ${maxViewers} viewers allowed per batch`);
      return;
    }
    
    const newId = (Math.max(...viewers.map(v => parseInt(v.id))) + 1).toString();
    setViewers([...viewers, { id: newId, address: '', amount: '', reason: '' }]);
  };

  const removeViewer = (id: string) => {
    if (viewers.length <= 1) return;
    setViewers(viewers.filter(v => v.id !== id));
  };

  const updateViewer = (id: string, field: keyof ViewerEntry, value: string) => {
    setViewers(viewers.map(v => v.id === id ? { ...v, [field]: value } : v));
  };

  const validateViewers = (): boolean => {
    // Check for empty fields
    for (const viewer of viewers) {
      if (!viewer.address || !viewer.amount) {
        setError('Please fill in all required fields (address and amount)');
        return false;
      }
      
      // Basic address validation
      if (!viewer.address.match(/^0x[a-fA-F0-9]{40}$/)) {
        setError(`Invalid wallet address: ${viewer.address}`);
        return false;
      }
      
      // Amount validation
      const amount = parseFloat(viewer.amount);
      if (isNaN(amount) || amount <= 0) {
        setError(`Invalid amount for ${viewer.address}`);
        return false;
      }
    }
    
    // Check for duplicate addresses
    const addresses = viewers.map(v => v.address.toLowerCase());
    const uniqueAddresses = new Set(addresses);
    if (addresses.length !== uniqueAddresses.size) {
      setError('Duplicate addresses found');
      return false;
    }
    
    return true;
  };

  const handleSendBatch = async () => {
    if (!account) {
      setError('Please connect your wallet');
      return;
    }

    if (!isCreator) {
      setError('Only creators can send viewer rewards');
      return;
    }

    if (!validateViewers()) {
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const viewerData = viewers.map(v => ({
        address: v.address,
        amount: (parseFloat(v.amount) * 1e18).toString(), // Convert to wei
        reason: v.reason
      }));

      const result = await sdkConfig.sdk.batchRewardViewers({
        viewers: viewerData,
        chainId
      });

      if (result.success) {
        setSuccess(true);
        // Store result for display
        setLastResult(result);
        // Clear form
        setViewers([{ id: '1', address: '', amount: '', reason: '' }]);
        
        if (onBatchSent) {
          onBatchSent(result);
        }

        // Clear success message after 7 seconds
        setTimeout(() => {
          setSuccess(false);
          setLastResult(null);
        }, 7000);
      } else {
        setError(result.error || 'Failed to send batch rewards');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send batch rewards');
    } finally {
      setLoading(false);
    }
  };

  // Calculate total fees
  const calculateTotals = () => {
    const total = viewers.reduce((sum, v) => {
      const amount = parseFloat(v.amount) || 0;
      return sum + amount;
    }, 0);
    
    const fee = total * 0.01; // 1% platform fee
    const toViewers = total * 0.99;
    
    return {
      total: total.toFixed(6),
      fee: fee.toFixed(6),
      toViewers: toViewers.toFixed(6)
    };
  };

  const totals = calculateTotals();
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-600'} mr-2`} />
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Batch Reward Viewers
          </h2>
        </div>
        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {viewers.length}/{maxViewers} viewers
        </span>
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
            <p className="text-green-700 text-sm font-medium">Batch rewards sent successfully!</p>
          </div>
          {lastResult.estimatedUsdcAmount && (
            <p className="text-green-600 text-xs ml-6">
              Viewers will receive ~{(parseFloat(lastResult.estimatedUsdcAmount) / 1e6).toFixed(2)} USDC total on ApeChain
            </p>
          )}
        </div>
      )}

      <div className="space-y-3 mb-4">
        {viewers.map((viewer, index) => (
          <div key={viewer.id} className={`p-4 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-start space-x-3">
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Viewer Address
                    </label>
                    <input
                      type="text"
                      placeholder="0x..."
                      value={viewer.address}
                      onChange={(e) => updateViewer(viewer.id, 'address', e.target.value)}
                      className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                        isDark 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300'
                      }`}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Amount ({nativeSymbol})
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      placeholder="0.1"
                      value={viewer.amount}
                      onChange={(e) => updateViewer(viewer.id, 'amount', e.target.value)}
                      className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                        isDark 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300'
                      }`}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Reason (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Great contribution!"
                    value={viewer.reason}
                    onChange={(e) => updateViewer(viewer.id, 'reason', e.target.value)}
                    maxLength={100}
                    className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      isDark 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300'
                    }`}
                    disabled={loading}
                  />
                </div>
              </div>
              {viewers.length > 1 && (
                <button
                  onClick={() => removeViewer(viewer.id)}
                  disabled={loading}
                  className={`p-2 rounded-md transition-colors ${
                    loading
                      ? 'opacity-50 cursor-not-allowed'
                      : isDark
                        ? 'text-gray-400 hover:text-red-400 hover:bg-gray-600'
                        : 'text-gray-400 hover:text-red-600 hover:bg-gray-100'
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {viewers.length < maxViewers && (
        <button
          onClick={addViewer}
          disabled={loading}
          className={`w-full py-2 mb-4 border-2 border-dashed rounded-lg flex items-center justify-center space-x-2 transition-colors ${
            loading
              ? 'opacity-50 cursor-not-allowed'
              : isDark
                ? 'border-gray-600 text-gray-400 hover:border-orange-600 hover:text-orange-400'
                : 'border-gray-300 text-gray-500 hover:border-orange-500 hover:text-orange-600'
          }`}
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Add Viewer</span>
        </button>
      )}

      <div className={`rounded-lg p-4 text-sm mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Amount</span>
            <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              {totals.total} {nativeSymbol}
            </span>
          </div>
          <div className="flex justify-between">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Platform Fee (1%)</span>
            <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              {totals.fee} {nativeSymbol}
            </span>
          </div>
          <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Viewers Receive</span>
              <span className={`font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {totals.toViewers} {nativeSymbol}
              </span>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              💰 Rewards are automatically converted to USDC and sent to ApeChain
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleSendBatch}
        disabled={loading || !account || !isCreator || viewers.length === 0}
        className={`w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
          loading || !account || !isCreator || viewers.length === 0
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
            <Users className="w-4 h-4" />
            <span>Send Batch Rewards</span>
          </>
        )}
      </button>

      {!account && (
        <p className={`text-center text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Connect your wallet to send rewards
        </p>
      )}
    </div>
  );
};