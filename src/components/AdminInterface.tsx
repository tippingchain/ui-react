// packages/ui-react/src/components/AdminInterface.tsx
import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain, ConnectButton } from 'thirdweb/react';
import { 
  Plus, 
  Edit, 
  Users, 
  BarChart3, 
  Wallet, 
  CheckCircle, 
  XCircle, 
  Award, 
  Gift, 
  Star, 
  Settings, 
  Shield, 
  AlertCircle, 
  Loader2,
  RefreshCw,
  Activity,
  TrendingUp
} from 'lucide-react';
import { ChainSelector } from './common';
import type { ApeChainTippingSDK, CreatorRegistration, PlatformStats, MembershipTier } from '@tippingchain/sdk';
import { getContractAddress, isContractDeployed } from '@tippingchain/contracts-interface';
import { getTokensForChain } from '../utils/tokenConfig';
import { useTransactionNotifications } from './notifications';

export interface AdminInterfaceProps {
  client: any;
  sdk: ApeChainTippingSDK;
  onCreatorAdded?: (creator: Creator) => void;
  onCreatorUpdated?: (creator: Creator) => void;
  onPlatformStatsLoaded?: (stats: PlatformStats) => void;
  className?: string;
  defaultChainId?: number;
  showChainSelector?: boolean;
  showPlatformStats?: boolean;
  maxCreatorsToShow?: number;
}

interface Creator {
  id: number;
  wallet: string;
  tier: number;
  active: boolean;
  totalTips: string;
  tipCount: number;
}

interface Message {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
  timestamp?: number;
}

const TIER_INFO = {
  1: { name: 'Tier 1', split: '60/40', description: '60% Creator / 40% Business', color: 'bg-gray-100' },
  2: { name: 'Tier 2', split: '70/30', description: '70% Creator / 30% Business', color: 'bg-blue-100' },
  3: { name: 'Tier 3', split: '80/20', description: '80% Creator / 20% Business', color: 'bg-purple-100' },
  4: { name: 'Tier 4', split: '90/10', description: '90% Creator / 10% Business', color: 'bg-green-100' },
};

export const AdminInterface: React.FC<AdminInterfaceProps> = ({
  client,
  sdk,
  onCreatorAdded,
  onCreatorUpdated,
  onPlatformStatsLoaded,
  className = '',
  defaultChainId = 8453,
  showChainSelector = true,
  showPlatformStats = true,
  maxCreatorsToShow = 100
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  // State management
  const [creators, setCreators] = useState<Creator[]>([]);
  const [selectedChainId, setSelectedChainId] = useState<number>(defaultChainId);
  const [loading, setLoading] = useState(false);
  const [loadingCreators, setLoadingCreators] = useState(false);
  const [newCreatorWallet, setNewCreatorWallet] = useState('');
  const [newCreatorTier, setNewCreatorTier] = useState(1);
  const [editingCreator, setEditingCreator] = useState<{ id: number; wallet: string; tier: number } | null>(null);
  const [message, setMessage] = useState<Message | null>(null);
  const [contractOwner, setContractOwner] = useState<string | null>(null);
  const [checkingPermission, setCheckingPermission] = useState(false);
  const [platformStats, setPlatformStats] = useState<PlatformStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(false);

  // Notification hooks
  const { notifyCreatorAdded, notifyCreatorError } = useTransactionNotifications();

  // Computed values
  const isContractAvailable = isContractDeployed(selectedChainId);
  const contractAddress = getContractAddress(selectedChainId);
  const isOwnerOrAdmin = contractOwner === account?.address;

  const showMessage = (type: Message['type'], text: string) => {
    setMessage({ type, text, timestamp: Date.now() });
    setTimeout(() => setMessage(null), 5000);
  };

  const checkContractPermissions = async () => {
    if (!isContractAvailable || !account) {
      setContractOwner(null);
      return;
    }

    if (selectedChainId !== 8453) {
      setContractOwner(null);
      return;
    }

    if (activeChain && activeChain.id !== 8453) {
      setContractOwner(null);
      return;
    }

    try {
      setCheckingPermission(true);
      
      // For now, assume current user has admin privileges
      // In production, this would check contract owner and admin roles
      setContractOwner(account.address || null);
      
    } catch (error) {
      console.error('Failed to check contract ownership:', error);
      setContractOwner(null);
    } finally {
      setCheckingPermission(false);
    }
  };

  const loadCreators = async () => {
    if (!isContractAvailable) {
      setCreators([]);
      showMessage('error', `Contract not deployed on selected chain (${selectedChainId}). Only Base (8453) is currently supported.`);
      return;
    }

    if (selectedChainId !== 8453) {
      setCreators([]);
      showMessage('error', `Contract only deployed on Base (8453). Selected chain (${selectedChainId}) coming soon.`);
      return;
    }

    if (activeChain && activeChain.id !== 8453) {
      setCreators([]);
      showMessage('error', `Please switch your wallet to Base network (8453). Currently connected to chain ${activeChain.id}.`);
      return;
    }

    try {
      setLoadingCreators(true);
            
      try {
        const creators = await sdk.getTopCreators(maxCreatorsToShow, selectedChainId);
        
        if (creators && creators.length > 0) {
          const loadedCreators: Creator[] = creators.map((creator) => ({
            id: creator.id,
            wallet: creator.wallet,
            tier: creator.tier + 1, // SDK returns 0-based, UI expects 1-based
            active: creator.active,
            totalTips: creator.totalTips || '0',
            tipCount: creator.tipCount || 0
          }));
          
          setCreators(loadedCreators);
          showMessage('success', `✅ Loaded ${loadedCreators.length} creators from contract`);
        } else {
          setCreators([]);
          showMessage('info', '📝 No creators found. Use the "Add New Creator" form below to get started.');
        }
        
      } catch (sdkError) {
        console.warn('SDK method failed, falling back to empty list:', sdkError);
        setCreators([]);
        showMessage('info', '📝 Ready to add creators. Use the "Add New Creator" form below to get started.');
      }
      
    } catch (error) {
      console.error('Failed to load creators:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      showMessage('error', `Failed to load creators: ${errorMessage}`);
      setCreators([]);
    } finally {
      setLoadingCreators(false);
    }
  };

  const loadPlatformStats = async () => {
    if (!isContractAvailable || !showPlatformStats) return;

    try {
      setLoadingStats(true);
      const stats = await sdk.getPlatformStats(selectedChainId);
      setPlatformStats(stats);
      onPlatformStatsLoaded?.(stats);
    } catch (error) {
      console.error('Failed to load platform stats:', error);
      setPlatformStats(null);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    loadCreators();
    checkContractPermissions();
    loadPlatformStats();
  }, [selectedChainId, sdk, account]);

  const handleAddCreator = async () => {
    if (!newCreatorWallet.trim()) {
      notifyCreatorError('Please enter a valid wallet address');
      return;
    }

    if (!newCreatorWallet.startsWith('0x') || newCreatorWallet.length !== 42) {
      notifyCreatorError('Please enter a valid Ethereum wallet address (0x...)');
      return;
    }

    const nextCreatorId = creators.length > 0 ? Math.max(...creators.map(c => c.id)) + 1 : 1;

    try {
      setLoading(true);
      
      const existingCreator = creators.find(c => c.wallet.toLowerCase() === newCreatorWallet.toLowerCase());
      if (existingCreator) {
        notifyCreatorError(`Creator with this wallet already exists (ID: ${existingCreator.id})`);
        return;
      }

      if (!isContractAvailable) {
        notifyCreatorError(`Contract not deployed on selected chain (${selectedChainId}). Only Base (8453) is currently supported.`);
        return;
      }
      
      if (selectedChainId !== 8453) {
        notifyCreatorError('Creator addition only supported on Base (8453). Please switch to Base chain - other networks coming soon.');
        return;
      }

      const creatorRegistration: CreatorRegistration = {
        creatorWallet: newCreatorWallet.trim(),
        tier: (newCreatorTier - 1) as MembershipTier, // Convert 1-based to 0-based
        thirdwebId: ''
      };

      const result = await sdk.addCreator(creatorRegistration, selectedChainId);
      
      if (result.success) {
        const newCreator: Creator = {
          id: nextCreatorId,
          wallet: newCreatorWallet.trim(),
          tier: newCreatorTier,
          active: true,
          totalTips: '0',
          tipCount: 0
        };

        setCreators(prev => [...prev, newCreator]);
        setNewCreatorWallet('');
        setNewCreatorTier(1);
        
        showMessage('success', `Creator added successfully! Transaction: ${result.transactionHash?.slice(0, 10)}...`);
        onCreatorAdded?.(newCreator);
        
        // Refresh creators after delay
        setTimeout(() => {
          loadCreators();
        }, 2000);
        
      } else {
        throw new Error(result.error || 'Failed to add creator');
      }
      
    } catch (error) {
      console.error('Failed to add creator:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      notifyCreatorError(`Failed to add creator: ${errorMessage}`);
      showMessage('error', `Failed to add creator: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadCreators();
    loadPlatformStats();
  };

  if (!account) {
    return (
      <div className={`max-w-4xl mx-auto p-6 ${className}`}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Admin Access Required</h2>
          <p className="text-yellow-700 mb-4">
            Connect your wallet to access the TippingChain admin interface
          </p>
          <ConnectButton client={client} theme="light" />
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-6xl mx-auto p-6 space-y-6 ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">TippingChain Admin</h1>
            <p className="text-blue-100">Multi-admin creator management & platform analytics</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              disabled={loadingCreators || loadingStats}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors"
              title="Refresh data"
            >
              <RefreshCw className={`w-5 h-5 ${(loadingCreators || loadingStats) ? 'animate-spin' : ''}`} />
            </button>
            <div className="text-right">
              <div className="text-sm text-blue-100">Connected</div>
              <div className="font-mono text-xs">{account.address?.slice(0, 6)}...{account.address?.slice(-4)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chain Selection */}
      {showChainSelector && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Network Selection</h2>
            <div className="flex items-center space-x-2">
              {isContractAvailable ? (
                <span className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Contract Deployed
                </span>
              ) : (
                <span className="flex items-center text-red-600 text-sm">
                  <XCircle className="w-4 h-4 mr-1" />
                  Contract Not Available
                </span>
              )}
            </div>
          </div>
          <ChainSelector
            value={selectedChainId}
            onChange={setSelectedChainId}
            label="Select Network"
            className="max-w-md"
          />
          {contractAddress && (
            <div className="mt-3 text-sm text-gray-600">
              <span className="font-medium">Contract:</span> 
              <span className="font-mono ml-1">{contractAddress}</span>
            </div>
          )}
        </div>
      )}

      {/* Platform Statistics */}
      {showPlatformStats && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Platform Statistics
          </h2>
          
          {loadingStats ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-blue-600 mr-2" />
              <span className="text-gray-600">Loading statistics...</span>
            </div>
          ) : platformStats ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {platformStats.totalTipsCount || '0'}
                    </div>
                    <div className="text-sm text-blue-600">Total Tips</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {creators.length}
                    </div>
                    <div className="text-sm text-green-600">Active Creators</div>
                  </div>
                  <Users className="w-8 h-8 text-green-500" />
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      ${platformStats.totalVolume ? parseFloat(platformStats.totalVolume).toFixed(2) : '0.00'}
                    </div>
                    <div className="text-sm text-purple-600">Total Volume</div>
                  </div>
                  <Wallet className="w-8 h-8 text-purple-500" />
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${platformStats.totalFees ? parseFloat(platformStats.totalFees).toFixed(2) : '0.00'}
                    </div>
                    <div className="text-sm text-orange-600">Platform Fees</div>
                  </div>
                  <Gift className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Activity className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Platform statistics not available</p>
            </div>
          )}
        </div>
      )}

      {/* Messages */}
      {message && (
        <div className={`rounded-lg p-4 border ${
          message.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
          message.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
          message.type === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' :
          'bg-blue-50 border-blue-200 text-blue-800'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {message.type === 'success' && <CheckCircle className="w-4 h-4 mr-2" />}
              {message.type === 'error' && <XCircle className="w-4 h-4 mr-2" />}
              {message.type === 'warning' && <AlertCircle className="w-4 h-4 mr-2" />}
              {message.type === 'info' && <AlertCircle className="w-4 h-4 mr-2" />}
              <span>{message.text}</span>
            </div>
            <button
              onClick={() => setMessage(null)}
              className="text-current hover:text-opacity-70"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Add Creator Form */}
      {isOwnerOrAdmin && (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add New Creator
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Creator Wallet Address
              </label>
              <input
                type="text"
                value={newCreatorWallet}
                onChange={(e) => setNewCreatorWallet(e.target.value)}
                placeholder="0x..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Membership Tier
              </label>
              <select
                value={newCreatorTier}
                onChange={(e) => setNewCreatorTier(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              >
                {Object.entries(TIER_INFO).map(([tier, info]) => (
                  <option key={tier} value={tier}>
                    {info.name} ({info.split})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Selected Tier:</span> {TIER_INFO[newCreatorTier as keyof typeof TIER_INFO].description}
            </div>
            <button
              onClick={handleAddCreator}
              disabled={loading || !newCreatorWallet.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Plus className="w-4 h-4 mr-2" />
              )}
              Add Creator
            </button>
          </div>
        </div>
      )}

      {/* Creators List */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Creators ({creators.length})
        </h2>
        
        {loadingCreators ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600 mr-2" />
            <span className="text-gray-600">Loading creators...</span>
          </div>
        ) : creators.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tips</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {creators.map((creator) => (
                  <tr key={creator.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">#{creator.id}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono text-gray-600">
                        {creator.wallet.slice(0, 6)}...{creator.wallet.slice(-4)}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        TIER_INFO[creator.tier as keyof typeof TIER_INFO].color
                      } text-gray-800`}>
                        {TIER_INFO[creator.tier as keyof typeof TIER_INFO].name}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {creator.active ? (
                        <span className="inline-flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-red-600">
                          <XCircle className="w-4 h-4 mr-1" />
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {creator.tipCount}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${parseFloat(creator.totalTips).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>No creators found</p>
            <p className="text-sm">Add creators using the form above</p>
          </div>
        )}
      </div>
    </div>
  );
};