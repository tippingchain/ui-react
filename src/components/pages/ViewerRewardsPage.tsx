// packages/ui-react/src/components/pages/ViewerRewardsPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain, ConnectButton } from 'thirdweb/react';
import { ChainSelector } from '../common';
import { Award, Users, DollarSign, TrendingUp, Gift, Eye, CheckCircle, Clock, X, Loader2, RefreshCw, Settings, Download, Upload, Search, Filter } from 'lucide-react';
import type { ApeChainTippingSDK } from '@tippingchain/sdk';

export interface ViewerRewardsPageProps {
  client: any;
  sdk: ApeChainTippingSDK;
  
  // Configuration
  defaultChainId?: number;
  demoCreatorWallet?: string;
  allowedCreatorWallets?: string[];
  defaultAllocationAmount?: number;
  maxViewersPerBatch?: number;
  
  // Features
  enableBatchRewards?: boolean;
  enableIndividualRewards?: boolean;
  enableViewerRegistration?: boolean;
  enableClaimInterface?: boolean;
  enableRewardHistory?: boolean;
  
  // Demo Data
  mockViewers?: ViewerData[];
  useMockData?: boolean;
  
  // Event Handlers
  onRewardSent?: (viewerIds: number[], amount: number, totalCost: number) => void;
  onRewardClaimed?: (viewerId: number, amount: number) => void;
  onViewerRegistered?: (viewer: ViewerData) => void;
  
  // Styling
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  tabNavClassName?: string;
}

export interface ViewerData {
  id: number;
  username?: string;
  wallet: string;
  thirdwebId?: string;
  status: 'eligible' | 'claimed' | 'pending' | 'ineligible';
  registrationDate?: Date;
  totalRewardsReceived?: string;
  rewardCount?: number;
  lastRewardDate?: Date;
  creatorId?: number;
  metadata?: Record<string, any>;
}

interface RewardTransaction {
  id: string;
  timestamp: Date;
  creatorId: number;
  creatorWallet: string;
  viewerIds: number[];
  amountPerViewer: number;
  totalAmount: number;
  platformFee: number;
  status: 'pending' | 'completed' | 'failed';
  transactionHash?: string;
  relayId?: string;
}

interface RewardStats {
  totalAllocated: number;
  totalClaimed: number;
  pendingRewards: number;
  uniqueViewers: number;
  averageReward: number;
  platformFeesCollected: number;
}

// Mock viewer data for demo
const DEFAULT_MOCK_VIEWERS: ViewerData[] = [
  { 
    id: 1, 
    username: 'CryptoFan123', 
    wallet: '0x1234567890123456789012345678901234567890', 
    status: 'eligible',
    registrationDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '25.50',
    rewardCount: 3
  },
  { 
    id: 2, 
    username: 'BlockchainBob', 
    wallet: '0x2345678901234567890123456789012345678901', 
    status: 'eligible',
    registrationDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '82.25',
    rewardCount: 7
  },
  { 
    id: 3, 
    username: 'DefiDave', 
    wallet: '0x3456789012345678901234567890123456789012', 
    status: 'claimed',
    registrationDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '156.75',
    rewardCount: 12,
    lastRewardDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  },
  { 
    id: 4, 
    username: 'NFTNinja', 
    wallet: '0x4567890123456789012345678901234567890123', 
    status: 'eligible',
    registrationDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '47.50',
    rewardCount: 5
  },
  { 
    id: 5, 
    username: 'Web3Warrior', 
    wallet: '0x5678901234567890123456789012345678901234', 
    status: 'eligible',
    registrationDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '93.25',
    rewardCount: 8
  },
  { 
    id: 6, 
    username: 'TokenTiger', 
    wallet: '0x6789012345678901234567890123456789012345', 
    status: 'claimed',
    registrationDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '71.00',
    rewardCount: 6,
    lastRewardDate: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  { 
    id: 7, 
    username: 'MetaverseMax', 
    wallet: '0x7890123456789012345678901234567890123456', 
    status: 'pending',
    registrationDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '12.75',
    rewardCount: 1
  },
  { 
    id: 8, 
    username: 'SmartContractSam', 
    wallet: '0x8901234567890123456789012345678901234567', 
    status: 'eligible',
    registrationDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
    totalRewardsReceived: '34.50',
    rewardCount: 4
  }
];

export const ViewerRewardsPage: React.FC<ViewerRewardsPageProps> = ({
  client,
  sdk,
  defaultChainId = 8453,
  demoCreatorWallet = '0x479945d7931baC3343967bD0f839f8691E54a66e',
  allowedCreatorWallets = [],
  defaultAllocationAmount = 100,
  maxViewersPerBatch = 50,
  enableBatchRewards = true,
  enableIndividualRewards = true,
  enableViewerRegistration = true,
  enableClaimInterface = true,
  enableRewardHistory = true,
  mockViewers = DEFAULT_MOCK_VIEWERS,
  useMockData = true,
  onRewardSent,
  onRewardClaimed,
  onViewerRegistered,
  className = '',
  headerClassName = '',
  contentClassName = '',
  tabNavClassName = ''
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  // State management
  const [selectedChainId, setSelectedChainId] = useState<number>(defaultChainId);
  const [viewers, setViewers] = useState<ViewerData[]>(mockViewers);
  const [selectedViewers, setSelectedViewers] = useState<number[]>([]);
  const [allocationAmount, setAllocationAmount] = useState(defaultAllocationAmount);
  const [rewardPerViewer, setRewardPerViewer] = useState(0);
  const [activeTab, setActiveTab] = useState<'allocate' | 'claim' | 'history' | 'register'>('allocate');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  
  // Filtering and search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | ViewerData['status']>('all');
  const [sortBy, setSortBy] = useState<'username' | 'rewards' | 'date' | 'count'>('username');
  
  // Reward statistics
  const [rewardStats, setRewardStats] = useState<RewardStats>({
    totalAllocated: 0,
    totalClaimed: 0,
    pendingRewards: 0,
    uniqueViewers: 0,
    averageReward: 0,
    platformFeesCollected: 0
  });
  
  // Transaction history
  const [rewardHistory, setRewardHistory] = useState<RewardTransaction[]>([]);
  
  // Access control
  const allowedCreators = demoCreatorWallet ? [demoCreatorWallet, ...allowedCreatorWallets] : allowedCreatorWallets;
  const isCreatorWallet = !allowedCreators.length || 
    allowedCreators.some(wallet => wallet.toLowerCase() === account?.address?.toLowerCase());
  const userViewer = viewers.find(v => v.wallet?.toLowerCase() === account?.address?.toLowerCase());
  
  // Derived data
  const eligibleViewers = viewers.filter(v => v.status === 'eligible');
  const claimedViewers = viewers.filter(v => v.status === 'claimed');
  const pendingViewers = viewers.filter(v => v.status === 'pending');
  
  // Calculate reward per viewer
  useEffect(() => {
    if (selectedViewers.length > 0) {
      setRewardPerViewer(allocationAmount / selectedViewers.length);
    } else {
      setRewardPerViewer(0);
    }
  }, [selectedViewers, allocationAmount]);
  
  // Calculate statistics
  useEffect(() => {
    const stats: RewardStats = {
      totalAllocated: viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || '0'), 0),
      totalClaimed: claimedViewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || '0'), 0),
      pendingRewards: pendingViewers.length * 10, // Mock pending amount
      uniqueViewers: viewers.length,
      averageReward: viewers.length > 0 ? viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || '0'), 0) / viewers.length : 0,
      platformFeesCollected: viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || '0') * 0.01, 0)
    };
    setRewardStats(stats);
  }, [viewers, claimedViewers, pendingViewers]);
  
  // Show message helper
  const showMessage = (type: 'success' | 'error' | 'info', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };
  
  // Handle viewer selection
  const handleViewerToggle = (viewerId: number) => {
    setSelectedViewers(prev => {
      if (prev.includes(viewerId)) {
        return prev.filter(id => id !== viewerId);
      } else {
        return [...prev, viewerId];
      }
    });
  };
  
  // Handle batch operations
  const handleSelectAllEligible = () => {
    const eligibleIds = eligibleViewers.map(v => v.id);
    setSelectedViewers(eligibleIds);
  };
  
  const handleClearSelection = () => {
    setSelectedViewers([]);
  };
  
  // Handle batch reward
  const handleBatchReward = async () => {
    if (selectedViewers.length === 0) {
      showMessage('error', 'Please select at least one viewer to reward');
      return;
    }
    
    if (selectedViewers.length > maxViewersPerBatch) {
      showMessage('error', `Maximum ${maxViewersPerBatch} viewers allowed per batch`);
      return;
    }

    setLoading(true);
    
    try {
      const rewardAmount = allocationAmount / selectedViewers.length;
      const platformFee = allocationAmount * 0.01;
      const totalCost = allocationAmount + platformFee;
      
      // Update viewer statuses to 'pending'
      setViewers(prev => prev.map(viewer => 
        selectedViewers.includes(viewer.id) 
          ? { ...viewer, status: 'pending' as const }
          : viewer
      ));
      
      // Create transaction record
      const transaction: RewardTransaction = {
        id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        creatorId: 1, // Mock creator ID
        creatorWallet: account?.address || '',
        viewerIds: [...selectedViewers],
        amountPerViewer: rewardAmount,
        totalAmount: allocationAmount,
        platformFee: platformFee,
        status: 'pending',
        transactionHash: `0x${Math.random().toString(16).substr(2, 64)}`
      };
      
      setRewardHistory(prev => [transaction, ...prev]);
      
      // Call event handler
      onRewardSent?.(selectedViewers, rewardAmount, totalCost);
      
      showMessage('success', `Batch reward sent! ${selectedViewers.length} viewers will each receive $${rewardAmount.toFixed(2)} in USDC on ApeChain.`);
      
      // Reset selection
      setSelectedViewers([]);

      // Simulate processing time - after 3 seconds, mark as eligible for claiming
      setTimeout(() => {
        setViewers(prev => prev.map(viewer => 
          selectedViewers.includes(viewer.id) 
            ? { 
                ...viewer, 
                status: 'eligible' as const,
                totalRewardsReceived: (parseFloat(viewer.totalRewardsReceived || '0') + rewardAmount).toString(),
                rewardCount: (viewer.rewardCount || 0) + 1,
                lastRewardDate: new Date()
              }
            : viewer
        ));
        
        // Update transaction status
        setRewardHistory(prev => prev.map(tx => 
          tx.id === transaction.id ? { ...tx, status: 'completed' as const } : tx
        ));
      }, 3000);

    } catch (error) {
      console.error('Batch reward error:', error);
      showMessage('error', 'Failed to send batch rewards');
      
      // Revert viewer statuses
      setViewers(prev => prev.map(viewer => 
        selectedViewers.includes(viewer.id) 
          ? { ...viewer, status: 'eligible' as const }
          : viewer
      ));
    } finally {
      setLoading(false);
    }
  };
  
  // Handle claim reward
  const handleClaimReward = async (viewerId: number) => {
    const viewer = viewers.find(v => v.id === viewerId);
    if (!viewer) return;
    
    setLoading(true);
    
    try {
      setViewers(prev => prev.map(v => 
        v.id === viewerId 
          ? { ...v, status: 'claimed' as const, lastRewardDate: new Date() }
          : v
      ));

      const rewardAmount = 10; // Mock reward amount
      onRewardClaimed?.(viewerId, rewardAmount);
      showMessage('success', `Reward claimed! ${viewer.username} received their USDC on ApeChain.`);
    } catch (error) {
      console.error('Claim error:', error);
      showMessage('error', 'Failed to claim reward');
    } finally {
      setLoading(false);
    }
  };
  
  // Filter and sort viewers
  const filteredViewers = viewers
    .filter(viewer => {
      const matchesSearch = !searchQuery || 
        viewer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        viewer.wallet.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || viewer.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'username':
          return (a.username || '').localeCompare(b.username || '');
        case 'rewards':
          return parseFloat(b.totalRewardsReceived || '0') - parseFloat(a.totalRewardsReceived || '0');
        case 'date':
          return (b.lastRewardDate?.getTime() || 0) - (a.lastRewardDate?.getTime() || 0);
        case 'count':
          return (b.rewardCount || 0) - (a.rewardCount || 0);
        default:
          return 0;
      }
    });
  
  // Render message component
  const renderMessage = () => {
    if (!message) return null;
    
    return (
      <div className={`mb-6 p-4 rounded-lg border flex items-center justify-between ${
        message.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
        message.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
        'bg-blue-50 border-blue-200 text-blue-800'
      }`}>
        <span>{message.text}</span>
        <button
          onClick={() => setMessage(null)}
          className="text-current hover:text-opacity-70 ml-4"
        >
          ×
        </button>
      </div>
    );
  };
  
  // Render statistics cards
  const renderStatsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Allocated</p>
            <p className="text-2xl font-bold text-gray-900">${rewardStats.totalAllocated.toFixed(2)}</p>
            <p className="text-sm text-green-600">USDC distributed</p>
          </div>
          <DollarSign className="w-8 h-8 text-green-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Viewers</p>
            <p className="text-2xl font-bold text-gray-900">{rewardStats.uniqueViewers}</p>
            <p className="text-sm text-blue-600">Registered users</p>
          </div>
          <Users className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Average Reward</p>
            <p className="text-2xl font-bold text-gray-900">${rewardStats.averageReward.toFixed(2)}</p>
            <p className="text-sm text-purple-600">Per viewer</p>
          </div>
          <Award className="w-8 h-8 text-purple-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Platform Fees</p>
            <p className="text-2xl font-bold text-gray-900">${rewardStats.platformFeesCollected.toFixed(2)}</p>
            <p className="text-sm text-orange-600">1% fee collected</p>
          </div>
          <TrendingUp className="w-8 h-8 text-orange-600" />
        </div>
      </div>
    </div>
  );
  
  // Main tabs
  const tabs = [
    { id: 'allocate', label: 'Batch Allocation', icon: Gift, enabled: enableBatchRewards },
    { id: 'claim', label: 'Claim Rewards', icon: CheckCircle, enabled: enableClaimInterface },
    { id: 'history', label: 'Reward History', icon: Clock, enabled: enableRewardHistory },
    { id: 'register', label: 'Viewer Registration', icon: Users, enabled: enableViewerRegistration }
  ].filter(tab => tab.enabled);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-8 ${headerClassName}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-purple-600" />
            Viewer Rewards Platform
          </h1>
          <p className="text-xl text-gray-600">
            Creators allocate funds to reward their audience - viewers can claim eligible rewards
          </p>
        </div>

        {/* Statistics Cards */}
        {renderStatsCards()}

        {/* Messages */}
        {renderMessage()}

        {/* Wallet Connection Alerts */}
        {!account && (
          <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Award className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Connect Wallet:</strong> Connect as creator to allocate rewards, or as viewer to claim
                  </p>
                  {demoCreatorWallet && (
                    <p className="text-xs text-yellow-600 mt-1 font-mono">
                      Demo Creator: {demoCreatorWallet}
                    </p>
                  )}
                </div>
              </div>
              <ConnectButton client={client} theme="light" />
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className={`mb-8 ${tabNavClassName}`}>
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-6 border-b-2 font-medium text-lg ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5 inline mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className={contentClassName}>
          {/* Batch Allocation Tab */}
          {activeTab === 'allocate' && enableBatchRewards && (
            <div className="space-y-8">
              {/* Creator Access Check */}
              {account && !isCreatorWallet && (
                <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <X className="h-5 w-5 text-orange-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        <strong>Creator Access Required:</strong> Only registered creators can allocate rewards
                      </p>
                      <p className="text-xs text-orange-600 mt-1">
                        Expected: <span className="font-mono">{demoCreatorWallet}</span>
                      </p>
                      <p className="text-xs text-orange-600">
                        Connected: <span className="font-mono">{account.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Creator Interface */}
              {isCreatorWallet && (
                <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>Creator Access Verified!</strong> You can allocate rewards to viewers
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Allocation Panel */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
                      <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                      Reward Allocation
                    </h2>

                    <div className="space-y-6">
                      {/* Allocation Amount */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Total Allocation (USD)
                        </label>
                        <input
                          type="number"
                          value={allocationAmount}
                          onChange={(e) => setAllocationAmount(Number(e.target.value))}
                          disabled={!isCreatorWallet || loading}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                          placeholder="100"
                        />
                      </div>

                      {/* Chain Selection */}
                      <div>
                        <ChainSelector
                          value={selectedChainId}
                          onChange={setSelectedChainId}
                          label="Source Chain"
                          className="w-full"
                        />
                      </div>

                      {/* Statistics */}
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Selected Viewers:</span>
                          <span className="font-medium">{selectedViewers.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Reward per Viewer:</span>
                          <span className="font-medium">${rewardPerViewer.toFixed(2)} USDC</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Platform Fee (1%):</span>
                          <span className="font-medium">${(allocationAmount * 0.01).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-semibold border-t pt-2">
                          <span>Total Cost:</span>
                          <span>${(allocationAmount + allocationAmount * 0.01).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button
                          onClick={handleSelectAllEligible}
                          disabled={!isCreatorWallet || loading}
                          className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Select All Eligible ({eligibleViewers.length})
                        </button>
                        
                        <button
                          onClick={handleClearSelection}
                          disabled={!isCreatorWallet || loading}
                          className="w-full px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Clear Selection
                        </button>

                        <button
                          onClick={handleBatchReward}
                          disabled={!isCreatorWallet || selectedViewers.length === 0 || loading}
                          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center"
                        >
                          {loading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Gift className="w-4 h-4 mr-2" />
                          )}
                          {loading ? 'Processing...' : 'Send Batch Rewards'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Viewer Selection */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                        <Users className="w-6 h-6 mr-2 text-blue-600" />
                        Select Viewers to Reward
                      </h2>
                      
                      {/* Search and Filter Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search viewers..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                          />
                        </div>
                        
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value as any)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                        >
                          <option value="all">All Status</option>
                          <option value="eligible">Eligible</option>
                          <option value="claimed">Claimed</option>
                          <option value="pending">Pending</option>
                        </select>
                        
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as any)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                        >
                          <option value="username">Username</option>
                          <option value="rewards">Total Rewards</option>
                          <option value="count">Reward Count</option>
                          <option value="date">Last Reward</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {filteredViewers.map((viewer) => (
                        <div
                          key={viewer.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedViewers.includes(viewer.id)
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          } ${viewer.status !== 'eligible' ? 'opacity-60' : ''}`}
                          onClick={() => isCreatorWallet && viewer.status === 'eligible' && handleViewerToggle(viewer.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                  {viewer.username?.charAt(0) || 'V'}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{viewer.username}</p>
                                <p className="text-xs text-gray-500 font-mono">
                                  {viewer.wallet?.slice(0, 6)}...{viewer.wallet?.slice(-4)}
                                </p>
                                <p className="text-xs text-green-600">
                                  ${parseFloat(viewer.totalRewardsReceived || '0').toFixed(2)} earned
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                viewer.status === 'eligible' ? 'bg-green-100 text-green-800' :
                                viewer.status === 'claimed' ? 'bg-blue-100 text-blue-800' :
                                viewer.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {viewer.status}
                              </div>
                              {selectedViewers.includes(viewer.id) && (
                                <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Claim Tab */}
          {activeTab === 'claim' && enableClaimInterface && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center flex items-center justify-center">
                  <Gift className="w-6 h-6 mr-2 text-green-600" />
                  Claim Your Rewards
                </h2>

                {!account ? (
                  <div className="text-center py-8">
                    <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Connect your wallet to check for available rewards</p>
                    <ConnectButton client={client} theme="light" />
                  </div>
                ) : userViewer ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {userViewer.username?.charAt(0) || 'V'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Welcome, {userViewer.username}!</h3>
                    
                    {/* User reward status display */}
                    <div className="bg-gray-50 rounded-lg p-6 mt-4 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">
                            ${parseFloat(userViewer.totalRewardsReceived || '0').toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">Total Earned</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{userViewer.rewardCount || 0}</p>
                          <p className="text-sm text-gray-500">Rewards Received</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-600 capitalize">{userViewer.status}</p>
                          <p className="text-sm text-gray-500">Current Status</p>
                        </div>
                      </div>
                    </div>
                    
                    {userViewer.status === 'eligible' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
                        <div className="flex items-center justify-center mb-4">
                          <Gift className="w-8 h-8 text-green-600 mr-2" />
                          <span className="text-lg font-semibold text-green-800">Reward Available!</span>
                        </div>
                        <p className="text-green-700 mb-4">
                          You have an unclaimed reward waiting for you
                        </p>
                        <button
                          onClick={() => handleClaimReward(userViewer.id)}
                          disabled={loading}
                          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                        >
                          {loading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <CheckCircle className="w-4 h-4 mr-2" />
                          )}
                          {loading ? 'Processing...' : 'Claim Reward'}
                        </button>
                      </div>
                    )}
                    
                    {userViewer.status === 'claimed' && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                        <div className="flex items-center justify-center mb-2">
                          <CheckCircle className="w-8 h-8 text-blue-600 mr-2" />
                          <span className="text-lg font-semibold text-blue-800">Already Claimed</span>
                        </div>
                        <p className="text-blue-700">
                          You have successfully claimed your reward. USDC has been sent to your wallet on ApeChain.
                        </p>
                        {userViewer.lastRewardDate && (
                          <p className="text-sm text-blue-600 mt-2">
                            Last claimed: {userViewer.lastRewardDate.toLocaleString()}
                          </p>
                        )}
                      </div>
                    )}
                    
                    {userViewer.status === 'pending' && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="w-8 h-8 text-yellow-600 mr-2" />
                          <span className="text-lg font-semibold text-yellow-800">Processing</span>
                        </div>
                        <p className="text-yellow-700">
                          Your reward is being processed. Please check back soon.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Your wallet is not registered as a viewer in this system.
                    </p>
                    <p className="text-sm text-gray-500 mt-2 font-mono">
                      Connected: {account.address}
                    </p>
                    {enableViewerRegistration && (
                      <button
                        onClick={() => setActiveTab('register')}
                        className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      >
                        Register as Viewer
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Reward History Tab */}
          {activeTab === 'history' && enableRewardHistory && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Reward Transaction History
              </h2>
              
              {rewardHistory.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creator</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {rewardHistory.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {tx.timestamp.toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="text-sm font-mono text-gray-600">
                              {tx.creatorWallet.slice(0, 6)}...{tx.creatorWallet.slice(-4)}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {tx.viewerIds.length} viewers
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${tx.totalAmount.toFixed(2)} (${tx.amountPerViewer.toFixed(2)} each)
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              tx.status === 'completed' ? 'bg-green-100 text-green-800' :
                              tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {tx.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="text-sm font-mono text-gray-600">
                              {tx.transactionHash?.slice(0, 10)}...
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No reward transactions yet</p>
                  <p className="text-sm text-gray-500">Transaction history will appear here after rewards are sent</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">How Viewer Rewards Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2 text-purple-600">For Creators:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Allocate a total reward amount (e.g., $100)</li>
                <li>• Select eligible viewers from your audience</li>
                <li>• Funds are split equally among selected viewers</li>
                <li>• Only 1% platform fee (vs 5% for regular tips)</li>
                <li>• All rewards auto-convert to USDC on ApeChain</li>
                <li>• Track reward history and viewer engagement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-green-600">For Viewers:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Register to become eligible for rewards</li>
                <li>• Check if you have eligible rewards to claim</li>
                <li>• Click "Claim Reward" to receive your USDC</li>
                <li>• Funds are sent directly to your wallet on ApeChain</li>
                <li>• No gas fees for claiming rewards</li>
                <li>• Stable USDC payouts for price protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};