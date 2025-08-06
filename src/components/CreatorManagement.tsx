// packages/ui/src/components/CreatorManagement.tsx
import React, { useState, useEffect } from 'react';
import { UserPlus, Edit3, BarChart3, AlertCircle } from 'lucide-react';
import { formatTokenAmount, truncateAddress, isValidAddress } from '../utils/helpers';
import type { CreatorManagementProps } from '../types';
import type { Creator, PlatformStats } from '@tippingchain/sdk';

export const CreatorManagement: React.FC<CreatorManagementProps> = ({
  sdkConfig,
  chainId,
  onCreatorAdded,
  className = ''
}) => {
  const [newCreatorWallet, setNewCreatorWallet] = useState('');
  const [isAddingCreator, setIsAddingCreator] = useState(false);
  const [platformStats, setPlatformStats] = useState<PlatformStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [recentCreators, setRecentCreators] = useState<Creator[]>([]);
  
  // Wallet update states
  const [editingCreatorId, setEditingCreatorId] = useState<number | null>(null);
  const [newWalletAddress, setNewWalletAddress] = useState('');
  const [isUpdatingWallet, setIsUpdatingWallet] = useState(false);

  // Load platform stats and recent creators
  useEffect(() => {
    const loadData = async () => {
      setIsLoadingStats(true);
      try {
        const [stats, creators] = await Promise.all([
          sdkConfig.sdk.getPlatformStats(chainId),
          sdkConfig.sdk.getTopCreators(5, chainId)
        ]);
        setPlatformStats(stats);
        setRecentCreators(creators);
      } catch (error) {
        console.error('Failed to load platform data:', error);
      } finally {
        setIsLoadingStats(false);
      }
    };

    loadData();
  }, [sdkConfig.sdk, chainId]);

  const handleAddCreator = async () => {
    if (!newCreatorWallet.trim() || !isValidAddress(newCreatorWallet)) {
      alert('Please enter a valid wallet address');
      return;
    }

    setIsAddingCreator(true);
    try {
      const creatorId = await sdkConfig.sdk.addCreator({
        creatorWallet: newCreatorWallet,
        chainId: chainId,
        tier: 1 // Default to tier 1 for new creators
      });
      
      alert(`✅ Creator added successfully with ID: ${creatorId}`);
      setNewCreatorWallet('');
      onCreatorAdded?.(creatorId);
      
      // Refresh data
      const [stats, creators] = await Promise.all([
        sdkConfig.sdk.getPlatformStats(chainId),
        sdkConfig.sdk.getTopCreators(5, chainId)
      ]);
      setPlatformStats(stats);
      setRecentCreators(creators);
      
    } catch (error) {
      console.error('Failed to add creator:', error);
      alert(`❌ Failed to add creator: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsAddingCreator(false);
    }
  };

  const handleUpdateWallet = async () => {
    if (!editingCreatorId || !newWalletAddress.trim() || !isValidAddress(newWalletAddress)) {
      alert('Please enter a valid wallet address');
      return;
    }

    setIsUpdatingWallet(true);
    try {
      await sdkConfig.sdk.updateCreatorWallet(editingCreatorId, newWalletAddress, chainId);
      alert('✅ Creator wallet updated successfully!');
      
      setEditingCreatorId(null);
      setNewWalletAddress('');
      
      // Refresh recent creators
      const creators = await sdkConfig.sdk.getTopCreators(5, chainId);
      setRecentCreators(creators);
      
    } catch (error) {
      console.error('Failed to update wallet:', error);
      alert(`❌ Failed to update wallet: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsUpdatingWallet(false);
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center mb-6">
        <UserPlus className="w-6 h-6 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Creator Management</h3>
      </div>

      {/* Platform Stats */}
      {isLoadingStats ? (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ) : platformStats && (
        <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <BarChart3 className="w-5 h-5 text-orange-600 mr-2" />
            <span className="font-medium text-gray-800">Platform Statistics</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Active Creators</div>
              <div className="font-bold text-orange-600 text-lg">{platformStats.activeCreators}</div>
            </div>
            <div>
              <div className="text-gray-600">Total Tips</div>
              <div className="font-bold text-purple-600 text-lg">{formatTokenAmount(platformStats.totalTips)}</div>
            </div>
            <div>
              <div className="text-gray-600">Tip Count</div>
              <div className="font-medium text-gray-800">{platformStats.totalCount.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-gray-600">Auto Relay</div>
              <div className={`font-medium ${platformStats.autoRelayEnabled ? 'text-green-600' : 'text-red-600'}`}>
                {platformStats.autoRelayEnabled ? 'Enabled' : 'Disabled'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Creator */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-800 mb-3">Add New Creator</h4>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="0x... Creator wallet address"
            value={newCreatorWallet}
            onChange={(e) => setNewCreatorWallet(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button
            onClick={handleAddCreator}
            disabled={isAddingCreator || !newCreatorWallet.trim()}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isAddingCreator || !newCreatorWallet.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            {isAddingCreator ? (
              <span className="flex items-center">
                <svg className="animate-spin h-4 w-4 mr-1" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Adding...
              </span>
            ) : (
              'Add Creator'
            )}
          </button>
        </div>
        {newCreatorWallet && !isValidAddress(newCreatorWallet) && (
          <div className="flex items-center mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4 mr-1" />
            Please enter a valid Ethereum address
          </div>
        )}
      </div>

      {/* Recent Creators */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-3">Recent Creators</h4>
        {recentCreators.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No creators found. Add the first creator above!
          </div>
        ) : (
          <div className="space-y-3">
            {recentCreators.map(creator => (
              <div key={creator.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">ID #{creator.id}</div>
                  <div className="text-sm text-gray-600">{truncateAddress(creator.wallet)}</div>
                  <div className="text-xs text-gray-500">
                    {formatTokenAmount(creator.totalTips || '0')} tokens • {creator.tipCount || 0} tips
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setEditingCreatorId(creator.id);
                      setNewWalletAddress('');
                    }}
                    className="p-1 text-gray-400 hover:text-orange-600 transition-colors"
                    title="Update wallet address"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Wallet Update Modal */}
      {editingCreatorId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h4 className="font-medium text-gray-800 mb-4">Update Creator Wallet</h4>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Creator ID #{editingCreatorId}</div>
              <input
                type="text"
                placeholder="0x... New wallet address"
                value={newWalletAddress}
                onChange={(e) => setNewWalletAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {newWalletAddress && !isValidAddress(newWalletAddress) && (
                <div className="flex items-center mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Please enter a valid Ethereum address
                </div>
              )}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setEditingCreatorId(null);
                  setNewWalletAddress('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateWallet}
                disabled={isUpdatingWallet || !isValidAddress(newWalletAddress)}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                  isUpdatingWallet || !isValidAddress(newWalletAddress)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                {isUpdatingWallet ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded mt-4">
        🔧 Creator Management allows you to add new creators and update wallet addresses for lost wallet recovery.
      </div>
    </div>
  );
};