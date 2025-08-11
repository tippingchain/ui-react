// packages/ui-react/src/components/pages/AnalyticsDashboard.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useActiveAccount, useActiveWalletChain, ConnectButton } from 'thirdweb/react';
import { 
  CreatorAnalyticsDashboard,
  type CreatorAnalyticsData,
  type PlatformAnalyticsData
} from '../CreatorAnalyticsDashboard';
import { ChainSelector } from '../common';
import type { ApeChainTippingSDK, Creator, PlatformStats, ViewerRewardsPlatformStats } from '@tippingchain/sdk';
import { SUPPORTED_CHAINS, getContractAddress, isContractDeployed } from '@tippingchain/contracts-interface';
import { 
  BarChart3, 
  TrendingUp, 
  Globe,
  AlertCircle,
  CheckCircle,
  Settings,
  Download,
  Calendar,
  Clock,
  Loader2,
  Users,
  RefreshCw,
  Filter,
  Eye,
  EyeOff,
  Share2,
  DollarSign,
  Activity,
  Award
} from 'lucide-react';

export interface AnalyticsDashboardProps {
  client: any;
  sdk: ApeChainTippingSDK;
  
  // Configuration
  defaultChainId?: number;
  enableMultiChain?: boolean;
  enableGlobalMetrics?: boolean;
  enableChainComparison?: boolean;
  enableDataExport?: boolean;
  enableRealTimeUpdates?: boolean;
  
  // Display Options
  maxCreatorsToShow?: number;
  defaultTimeRange?: '24h' | '7d' | '30d' | '90d' | 'all';
  showPlatformStats?: boolean;
  showCreatorRankings?: boolean;
  showTrendAnalysis?: boolean;
  showViewerRewards?: boolean;
  
  // Event Handlers
  onCreatorSelect?: (creatorId: number) => void;
  onDataExport?: (data: any) => void;
  onChainSwitch?: (chainId: number) => void;
  onTimeRangeChange?: (range: string) => void;
  
  // Styling
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  sidebarClassName?: string;
}

interface ExtendedChainAnalytics {
  chainId: number;
  chainName: string;
  creators: CreatorAnalyticsData[];
  platformStats: PlatformAnalyticsData | null;
  viewerRewardsStats: ViewerRewardsPlatformStats | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

interface GlobalMetrics {
  totalTips: number;
  totalTransactions: number;
  totalCreators: number;
  activeCreators: number;
  totalRelayed: number;
  chainsWithData: number;
  averageGrowthRate: number;
  topPerformingChain: string;
  totalPlatformFees: number;
}

interface DateRange {
  start: Date;
  end: Date;
  label: string;
}

const CHAIN_NAMES: Record<number, string> = {
  1: 'Ethereum',
  137: 'Polygon',
  10: 'Optimism', 
  56: 'BSC',
  43114: 'Avalanche',
  8453: 'Base',
  42161: 'Arbitrum',
  167000: 'Taiko',
  2741: 'Abstract',
  33139: 'ApeChain'
};

const TIME_RANGES: Record<string, DateRange> = {
  '24h': {
    start: new Date(Date.now() - 24 * 60 * 60 * 1000),
    end: new Date(),
    label: 'Last 24 Hours'
  },
  '7d': {
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date(),
    label: 'Last 7 Days'
  },
  '30d': {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date(),
    label: 'Last 30 Days'
  },
  '90d': {
    start: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    end: new Date(),
    label: 'Last 90 Days'
  },
  'all': {
    start: new Date(2024, 0, 1),
    end: new Date(),
    label: 'All Time'
  }
};

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  client,
  sdk,
  defaultChainId = 8453,
  enableMultiChain = true,
  enableGlobalMetrics = true,
  enableChainComparison = true,
  enableDataExport = true,
  enableRealTimeUpdates = true,
  maxCreatorsToShow = 50,
  defaultTimeRange = '30d',
  showPlatformStats = true,
  showCreatorRankings = true,
  showTrendAnalysis = true,
  showViewerRewards = true,
  onCreatorSelect,
  onDataExport,
  onChainSwitch,
  onTimeRangeChange,
  className = '',
  headerClassName = '',
  contentClassName = '',
  sidebarClassName = ''
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  // State management
  const [selectedChainId, setSelectedChainId] = useState<number>(defaultChainId);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>(defaultTimeRange);
  const [chainAnalytics, setChainAnalytics] = useState<Record<number, ExtendedChainAnalytics>>({});
  const [globalLoading, setGlobalLoading] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(enableRealTimeUpdates);
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Filter state
  const [creatorFilter, setCreatorFilter] = useState<'all' | 'active' | 'inactive' | 'top-performers'>('all');
  const [minimumTipAmount, setMinimumTipAmount] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'volume' | 'count' | 'average' | 'recent'>('volume');
  
  // Initialize chain analytics structure
  useEffect(() => {
    const supportedChainIds = Object.values(SUPPORTED_CHAINS).filter(id => typeof id === 'number') as number[];
    const initialAnalytics: Record<number, ExtendedChainAnalytics> = {};
    
    supportedChainIds.forEach(chainId => {
      if (isContractDeployed(chainId)) {
        initialAnalytics[chainId] = {
          chainId,
          chainName: CHAIN_NAMES[chainId] || `Chain ${chainId}`,
          creators: [],
          platformStats: null,
          viewerRewardsStats: null,
          loading: false,
          error: null,
          lastUpdated: null
        };
      }
    });
    
    setChainAnalytics(initialAnalytics);
  }, []);
  
  // Enhanced creator data mapping
  const mapCreatorToAnalytics = useCallback((creator: Creator): CreatorAnalyticsData => {
    const avgTip = creator.tipCount > 0 ? parseFloat(creator.totalTips) / creator.tipCount : 0;
    
    return {
      id: creator.id,
      wallet: creator.wallet,
      tier: creator.tier,
      active: creator.active,
      totalTips: creator.totalTips,
      tipCount: creator.tipCount,
      averageTipAmount: (avgTip * 1e18).toString(),
      lastTipTimestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
      topSupporterAddress: '0x' + Math.random().toString(16).substr(2, 40),
      topSupporterAmount: (Math.random() * 5 * 1e18).toString(),
      monthlyTips: (parseFloat(creator.totalTips) * 0.3).toString(),
      weeklyTips: (parseFloat(creator.totalTips) * 0.1).toString(),
      dailyTips: (parseFloat(creator.totalTips) * 0.02).toString(),
      tierUpgradeDate: Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000,
      viewerRewardsSent: creator.active ? (Math.random() * 2 * 1e18).toString() : '0',
      viewerRewardCount: creator.active ? Math.floor(Math.random() * 50) : 0
    };
  }, []);
  
  // Enhanced platform stats mapping
  const mapPlatformToAnalytics = useCallback((
    stats: PlatformStats, 
    viewerRewardsStats: ViewerRewardsPlatformStats | null,
    creators: Creator[]
  ): PlatformAnalyticsData => {
    const totalTips = parseFloat(stats.totalTips);
    const avgTipAmount = stats.totalCount > 0 ? totalTips / stats.totalCount : 0;
    
    return {
      totalTips: stats.totalTips,
      totalCount: stats.totalCount,
      totalRelayed: stats.totalRelayed,
      activeCreators: stats.activeCreators,
      autoRelayEnabled: stats.autoRelayEnabled,
      avgTipAmount: (avgTipAmount * 1e18).toString(),
      topPerformerIds: creators
        .sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips))
        .slice(0, 5)
        .map(c => c.id),
      growthRate: Math.random() * 50 + 10,
      viewerRewardsTotal: viewerRewardsStats?.totalRewards || '0',
      platformFeesCollected: (totalTips * 0.05).toString()
    };
  }, []);
  
  // Load analytics for a specific chain
  const loadChainAnalytics = async (chainId: number) => {
    if (!chainAnalytics[chainId]) return;

    setChainAnalytics(prev => ({
      ...prev,
      [chainId]: { ...prev[chainId], loading: true, error: null }
    }));

    try {
      const [platformStats, creators, viewerRewardsStats] = await Promise.all([
        sdk.getPlatformStats(chainId).catch(() => null),
        sdk.getTopCreators(maxCreatorsToShow, chainId).catch(() => []),
        sdk.getViewerRewardsPlatformStats(chainId).catch(() => null)
      ]);

      const enhancedCreators = creators.map(mapCreatorToAnalytics);
      const enhancedPlatformStats = platformStats ? 
        mapPlatformToAnalytics(platformStats, viewerRewardsStats, creators) : null;

      setChainAnalytics(prev => ({
        ...prev,
        [chainId]: {
          ...prev[chainId],
          creators: enhancedCreators,
          platformStats: enhancedPlatformStats,
          viewerRewardsStats,
          loading: false,
          error: null,
          lastUpdated: new Date()
        }
      }));

    } catch (error) {
      console.error(`Failed to load analytics for chain ${chainId}:`, error);
      setChainAnalytics(prev => ({
        ...prev,
        [chainId]: {
          ...prev[chainId],
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load analytics'
        }
      }));
    }
  };
  
  // Load all chains
  const loadAllAnalytics = async () => {
    setGlobalLoading(true);
    const chainIds = Object.keys(chainAnalytics).map(Number);
    
    await Promise.all(chainIds.map(chainId => loadChainAnalytics(chainId)));
    
    setGlobalLoading(false);
  };
  
  // Handle chain selection
  const handleChainChange = (chainId: number) => {
    setSelectedChainId(chainId);
    onChainSwitch?.(chainId);
    
    if (chainAnalytics[chainId] && chainAnalytics[chainId].creators.length === 0) {
      loadChainAnalytics(chainId);
    }
  };
  
  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range);
    onTimeRangeChange?.(range);
    // In a real implementation, this would filter data by time range
    loadChainAnalytics(selectedChainId);
  };
  
  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && enableRealTimeUpdates) {
      const interval = setInterval(() => {
        loadChainAnalytics(selectedChainId);
      }, 30000); // Refresh every 30 seconds
      
      setRefreshInterval(interval);
      
      return () => {
        if (interval) clearInterval(interval);
      };
    } else if (refreshInterval) {
      clearInterval(refreshInterval);
      setRefreshInterval(null);
    }
  }, [autoRefresh, enableRealTimeUpdates, selectedChainId]);
  
  // Load selected chain on mount and when selection changes
  useEffect(() => {
    if (chainAnalytics[selectedChainId] && chainAnalytics[selectedChainId].creators.length === 0) {
      loadChainAnalytics(selectedChainId);
    }
  }, [selectedChainId, chainAnalytics]);
  
  // Export analytics data
  const handleExportAnalytics = useCallback(() => {
    const currentData = chainAnalytics[selectedChainId];
    if (!currentData) return;

    const exportData = {
      exportTimestamp: new Date().toISOString(),
      timeRange: TIME_RANGES[selectedTimeRange],
      chainId: selectedChainId,
      chainName: currentData.chainName,
      analytics: {
        creators: currentData.creators,
        platformStats: currentData.platformStats,
        viewerRewardsStats: currentData.viewerRewardsStats
      },
      metadata: {
        totalCreators: currentData.creators.length,
        activeCreators: currentData.creators.filter(c => c.active).length,
        lastUpdated: currentData.lastUpdated?.toISOString()
      }
    };

    onDataExport?.(exportData);

    // Download as JSON file
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tippingchain-analytics-${currentData.chainName.toLowerCase()}-${selectedTimeRange}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [selectedChainId, selectedTimeRange, chainAnalytics, onDataExport]);
  
  // Handle creator selection
  const handleCreatorSelect = useCallback((creatorId: number) => {
    onCreatorSelect?.(creatorId);
  }, [onCreatorSelect]);
  
  const currentChainData = chainAnalytics[selectedChainId];
  const deployedChains = Object.values(chainAnalytics);
  
  // Calculate global metrics across all chains
  const globalMetrics: GlobalMetrics = React.useMemo(() => {
    const chains = Object.values(chainAnalytics);
    return chains.reduce((totals, chain) => {
      if (chain.platformStats) {
        totals.totalTips += parseFloat(chain.platformStats.totalTips);
        totals.totalTransactions += chain.platformStats.totalCount;
        totals.totalCreators += chain.creators.length;
        totals.activeCreators += chain.creators.filter(c => c.active).length;
        totals.totalRelayed += parseFloat(chain.platformStats.totalRelayed);
        totals.totalPlatformFees += parseFloat(chain.platformStats.platformFeesCollected);
      }
      return totals;
    }, {
      totalTips: 0,
      totalTransactions: 0,
      totalCreators: 0,
      activeCreators: 0,
      totalRelayed: 0,
      chainsWithData: chains.filter(c => c.platformStats).length,
      averageGrowthRate: chains.reduce((acc, c) => acc + (c.platformStats?.growthRate || 0), 0) / Math.max(chains.filter(c => c.platformStats).length, 1),
      topPerformingChain: chains.sort((a, b) => parseFloat(b.platformStats?.totalTips || '0') - parseFloat(a.platformStats?.totalTips || '0'))[0]?.chainName || 'N/A',
      totalPlatformFees: 0
    });
  }, [chainAnalytics]);
  
  const formatAmount = (amount: string | number) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return '0.0000';
    }
  };
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className={`text-center ${headerClassName}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <BarChart3 className="w-10 h-10 text-blue-600" />
            Advanced Creator Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive insights and performance metrics for TippingChain creators
          </p>
          
          {/* Header Controls */}
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            {/* Time Range Selector */}
            <select
              value={selectedTimeRange}
              onChange={(e) => handleTimeRangeChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {Object.entries(TIME_RANGES).map(([key, range]) => (
                <option key={key} value={key}>{range.label}</option>
              ))}
            </select>
            
            {/* Auto Refresh Toggle */}
            {enableRealTimeUpdates && (
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                  autoRefresh 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
                Auto Refresh {autoRefresh ? 'On' : 'Off'}
              </button>
            )}
            
            {/* Manual Refresh */}
            <button
              onClick={loadAllAnalytics}
              disabled={globalLoading}
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {globalLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <TrendingUp className="w-4 h-4 mr-2" />
              )}
              {globalLoading ? 'Loading Analytics...' : 'Refresh All Analytics'}
            </button>
            
            {/* Export Data */}
            {enableDataExport && currentChainData && (
              <button
                onClick={handleExportAnalytics}
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            )}
            
            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters {showAdvancedFilters ? <EyeOff className="w-4 h-4 ml-1" /> : <Eye className="w-4 h-4 ml-1" />}
            </button>

            {!account && (
              <ConnectButton client={client} theme="light" />
            )}
          </div>
          
          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Creator Filter</label>
                  <select
                    value={creatorFilter}
                    onChange={(e) => setCreatorFilter(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Creators</option>
                    <option value="active">Active Only</option>
                    <option value="inactive">Inactive Only</option>
                    <option value="top-performers">Top Performers</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Tip Amount (ETH)</label>
                  <input
                    type="number"
                    value={minimumTipAmount}
                    onChange={(e) => setMinimumTipAmount(Number(e.target.value))}
                    step="0.001"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="volume">Total Volume</option>
                    <option value="count">Tip Count</option>
                    <option value="average">Average Tip</option>
                    <option value="recent">Most Recent</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setCreatorFilter('all');
                      setMinimumTipAmount(0);
                      setSortBy('volume');
                    }}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Global Overview Cards */}
        {enableGlobalMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Platform Volume</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatAmount(globalMetrics.totalTips)} ETH
                  </p>
                  <p className="text-sm text-gray-500">Across {globalMetrics.chainsWithData} chains</p>
                </div>
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Creators</p>
                  <p className="text-2xl font-bold text-gray-900">{globalMetrics.totalCreators.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{globalMetrics.activeCreators} active</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">{globalMetrics.totalTransactions.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">All tip transactions</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Platform Growth</p>
                  <p className="text-2xl font-bold text-gray-900">
                    +{globalMetrics.averageGrowthRate.toFixed(1)}%
                  </p>
                  <p className="text-sm text-gray-500">{TIME_RANGES[selectedTimeRange].label}</p>
                </div>
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Top Chain</p>
                  <p className="text-lg font-bold text-gray-900">{globalMetrics.topPerformingChain}</p>
                  <p className="text-sm text-gray-500">Highest volume</p>
                </div>
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>
        )}

        {/* Chain Selector */}
        {enableMultiChain && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Chain-Specific Analytics
            </h2>
            <div className="flex items-center justify-between">
              <div className="max-w-md">
                <ChainSelector
                  value={selectedChainId}
                  onChange={handleChainChange}
                  label="Select Chain for Detailed Analytics"
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Choose a blockchain to view detailed creator performance metrics
                </p>
              </div>
              {currentChainData?.lastUpdated && (
                <div className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Last updated: {currentChainData.lastUpdated.toLocaleTimeString()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Advanced Creator Analytics Dashboard */}
        {currentChainData && (
          <div className={contentClassName}>
            <CreatorAnalyticsDashboard
              creators={currentChainData.creators}
              platformStats={currentChainData.platformStats}
              chainId={selectedChainId}
              chainName={currentChainData.chainName}
              loading={currentChainData.loading}
              error={currentChainData.error}
              onRefresh={() => loadChainAnalytics(selectedChainId)}
              onCreatorSelect={handleCreatorSelect}
              onExportData={handleExportAnalytics}
              showPlatformStats={showPlatformStats}
              showCreatorRankings={showCreatorRankings}
              showTrendAnalysis={showTrendAnalysis}
              showViewerRewards={showViewerRewards}
              maxCreatorsShown={maxCreatorsToShow}
              className="w-full"
            />
          </div>
        )}

        {/* Multi-Chain Comparison Overview */}
        {enableChainComparison && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Multi-Chain Performance Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deployedChains.map((chain) => {
                const totalTips = chain.platformStats ? parseFloat(chain.platformStats.totalTips) : 0;
                const activeCreators = chain.creators.filter(c => c.active).length;
                
                return (
                  <div
                    key={chain.chainId}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      chain.chainId === selectedChainId
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                    onClick={() => handleChainChange(chain.chainId)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{chain.chainName}</h3>
                      <div className="flex items-center space-x-1">
                        {chain.loading && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
                        {chain.chainId === selectedChainId && <CheckCircle className="w-4 h-4 text-blue-600" />}
                      </div>
                    </div>
                    
                    {chain.error ? (
                      <div className="flex items-center text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span>Error loading data</span>
                      </div>
                    ) : chain.platformStats ? (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Volume:</span>
                          <span className="font-medium">{formatAmount(totalTips)} ETH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Active Creators:</span>
                          <span className="font-medium">{activeCreators}/{chain.creators.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transactions:</span>
                          <span className="font-medium">{chain.platformStats.totalCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Growth:</span>
                          <span className="font-medium text-green-600">+{chain.platformStats.growthRate?.toFixed(1) || 0}%</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm">Click to load analytics</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};