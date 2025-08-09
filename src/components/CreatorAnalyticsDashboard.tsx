// src/components/CreatorAnalyticsDashboard.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Trophy,
  Zap,
  Globe,
  Target,
  PieChart,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
  AlertCircle,
  CheckCircle,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Star,
  Award,
  Coins,
  TrendingDown
} from 'lucide-react';

export interface CreatorAnalyticsData {
  id: number;
  wallet: string;
  tier: number;
  active: boolean;
  totalTips: string;
  tipCount: number;
  // Extended analytics data
  averageTipAmount?: string;
  lastTipTimestamp?: number;
  topSupporterAddress?: string;
  topSupporterAmount?: string;
  monthlyTips?: string;
  weeklyTips?: string;
  dailyTips?: string;
  tierUpgradeDate?: number;
  viewerRewardsSent?: string;
  viewerRewardCount?: number;
}

export interface PlatformAnalyticsData {
  totalTips: string;
  totalCount: number;
  totalRelayed: string;
  activeCreators: number;
  autoRelayEnabled: boolean;
  // Extended platform metrics
  avgTipAmount?: string;
  topPerformerIds?: number[];
  growthRate?: number;
  viewerRewardsTotal?: string;
  platformFeesCollected?: string;
}

export interface CreatorAnalyticsDashboardProps {
  creators: CreatorAnalyticsData[];
  platformStats?: PlatformAnalyticsData;
  chainId: number;
  chainName: string;
  loading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
  onCreatorSelect?: (creatorId: number) => void;
  onExportData?: () => void;
  className?: string;
  showPlatformStats?: boolean;
  showCreatorRankings?: boolean;
  showTrendAnalysis?: boolean;
  showViewerRewards?: boolean;
  maxCreatorsShown?: number;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow';
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  colorScheme = 'blue',
  loading = false
}) => {
  const colorClasses = {
    blue: 'border-l-blue-500 bg-blue-50',
    green: 'border-l-green-500 bg-green-50',
    purple: 'border-l-purple-500 bg-purple-50',
    orange: 'border-l-orange-500 bg-orange-50',
    red: 'border-l-red-500 bg-red-50',
    yellow: 'border-l-yellow-500 bg-yellow-50'
  };

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600'
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${colorClasses[colorScheme]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          {loading ? (
            <div className="flex items-center mt-2">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-gray-400">Loading...</span>
            </div>
          ) : (
            <>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
              {trend && trendValue && (
                <div className={`flex items-center mt-1 text-sm ${
                  trend === 'up' ? 'text-green-600' :
                  trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> :
                   trend === 'down' ? <ArrowDownRight className="w-4 h-4 mr-1" /> :
                   <Activity className="w-4 h-4 mr-1" />}
                  {trendValue}
                </div>
              )}
            </>
          )}
        </div>
        <div className={`w-8 h-8 ${iconColors[colorScheme]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export const CreatorAnalyticsDashboard: React.FC<CreatorAnalyticsDashboardProps> = ({
  creators = [],
  platformStats,
  chainId,
  chainName,
  loading = false,
  error = null,
  onRefresh,
  onCreatorSelect,
  onExportData,
  className = '',
  showPlatformStats = true,
  showCreatorRankings = true,
  showTrendAnalysis = true,
  showViewerRewards = true,
  maxCreatorsShown = 20
}) => {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | 'all'>('7d');
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'tips' | 'count' | 'average' | 'recent'>('tips');
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  // Update last refresh when data loads
  useEffect(() => {
    if (!loading && creators.length > 0) {
      setLastRefresh(new Date());
    }
  }, [loading, creators.length]);

  // Format amounts
  const formatAmount = useCallback((amount: string | number) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(undefined, { 
        maximumFractionDigits: 4,
        minimumFractionDigits: 0
      });
    } catch {
      return '0';
    }
  }, []);

  const formatCurrency = useCallback((amount: string | number) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(eth * 2000); // Rough ETH to USD conversion for display
    } catch {
      return '$0.00';
    }
  }, []);

  // Filter and sort creators
  const filteredCreators = creators
    .filter(creator => {
      if (selectedTier !== 'all' && creator.tier !== selectedTier) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'tips':
          return parseFloat(b.totalTips) - parseFloat(a.totalTips);
        case 'count':
          return b.tipCount - a.tipCount;
        case 'average':
          const avgA = a.tipCount > 0 ? parseFloat(a.totalTips) / a.tipCount : 0;
          const avgB = b.tipCount > 0 ? parseFloat(b.totalTips) / b.tipCount : 0;
          return avgB - avgA;
        case 'recent':
          return (b.lastTipTimestamp || 0) - (a.lastTipTimestamp || 0);
        default:
          return 0;
      }
    })
    .slice(0, maxCreatorsShown);

  // Calculate analytics metrics
  const analytics = React.useMemo(() => {
    if (creators.length === 0) return null;

    const totalTips = creators.reduce((sum, c) => sum + parseFloat(c.totalTips), 0);
    const totalCount = creators.reduce((sum, c) => sum + c.tipCount, 0);
    const activeCreators = creators.filter(c => c.active).length;
    const avgTipAmount = totalCount > 0 ? totalTips / totalCount : 0;

    // Tier distribution
    const tierDistribution = creators.reduce((acc, c) => {
      acc[c.tier] = (acc[c.tier] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    // Top performers
    const topPerformers = creators
      .sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips))
      .slice(0, 5);

    return {
      totalTips: totalTips.toString(),
      totalCount,
      activeCreators,
      avgTipAmount: avgTipAmount.toString(),
      tierDistribution,
      topPerformers,
      inactiveCreators: creators.length - activeCreators
    };
  }, [creators]);

  const handleRefresh = useCallback(() => {
    if (onRefresh) {
      onRefresh();
    }
  }, [onRefresh]);

  const handleExport = useCallback(() => {
    if (onExportData) {
      onExportData();
    } else {
      // Default export functionality
      const dataToExport = {
        chainId,
        chainName,
        exportDate: new Date().toISOString(),
        creators: filteredCreators,
        platformStats,
        analytics
      };
      
      const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `creator-analytics-${chainName}-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }, [chainId, chainName, filteredCreators, platformStats, analytics, onExportData]);

  if (error) {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Error</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          {onRefresh && (
            <button
              onClick={handleRefresh}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Refresh className="w-4 h-4 mr-2" />
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="w-8 h-8 mr-3 text-blue-600" />
              Creator Analytics Dashboard
            </h2>
            <p className="text-gray-600">{chainName} • {creators.length} creators</p>
          </div>
          <div className="flex items-center space-x-3">
            {onExportData && (
              <button
                onClick={handleExport}
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            )}
            {onRefresh && (
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Refresh
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Range</label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="all">All Time</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tier Filter</label>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Tiers</option>
              <option value={1}>Tier 1</option>
              <option value={2}>Tier 2</option>
              <option value={3}>Tier 3</option>
              <option value={4}>Tier 4</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="tips">Total Tips</option>
              <option value="count">Tip Count</option>
              <option value="average">Average Tip</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
          <div className="flex items-end">
            {lastRefresh && (
              <div className="text-sm text-gray-500">
                <Clock className="w-4 h-4 inline mr-1" />
                Updated: {lastRefresh.toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Platform Overview Metrics */}
      {showPlatformStats && platformStats && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Platform Tips"
            value={`${formatAmount(platformStats.totalTips)} ETH`}
            subtitle={formatCurrency(platformStats.totalTips)}
            icon={<DollarSign className="w-8 h-8" />}
            colorScheme="blue"
            loading={loading}
          />
          <MetricCard
            title="Active Creators"
            value={platformStats.activeCreators}
            subtitle={`${creators.length - platformStats.activeCreators} inactive`}
            icon={<Users className="w-8 h-8" />}
            colorScheme="green"
            loading={loading}
          />
          <MetricCard
            title="Total Transactions"
            value={platformStats.totalCount.toLocaleString()}
            subtitle="All time"
            icon={<Activity className="w-8 h-8" />}
            colorScheme="purple"
            loading={loading}
          />
          <MetricCard
            title="Relayed to ApeChain"
            value={`${formatAmount(platformStats.totalRelayed)} USDC`}
            subtitle={platformStats.autoRelayEnabled ? "Auto-relay enabled" : "Manual relay"}
            icon={<Zap className="w-8 h-8" />}
            colorScheme="orange"
            loading={loading}
          />
        </div>
      )}

      {/* Creator Performance Analytics */}
      {analytics && (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <MetricCard
            title="Average Tip Amount"
            value={`${formatAmount(analytics.avgTipAmount)} ETH`}
            subtitle="Per transaction"
            icon={<Target className="w-8 h-8" />}
            colorScheme="blue"
            loading={loading}
          />
          <MetricCard
            title="Creator Activity Rate"
            value={`${Math.round((analytics.activeCreators / creators.length) * 100)}%`}
            subtitle={`${analytics.activeCreators}/${creators.length} active`}
            icon={<CheckCircle className="w-8 h-8" />}
            colorScheme="green"
            loading={loading}
          />
          <MetricCard
            title="Top Tier Distribution"
            value={`Tier ${Object.entries(analytics.tierDistribution).reduce((a, b) => analytics.tierDistribution[parseInt(a[0])] > analytics.tierDistribution[parseInt(b[0])] ? a : b)[0]}`}
            subtitle={`${Object.entries(analytics.tierDistribution).reduce((a, b) => analytics.tierDistribution[parseInt(a[0])] > analytics.tierDistribution[parseInt(b[0])] ? a : b)[1]} creators`}
            icon={<Award className="w-8 h-8" />}
            colorScheme="purple"
            loading={loading}
          />
          <MetricCard
            title="Platform Efficiency"
            value={`${(platformStats?.autoRelayEnabled ? 95 : 75)}%`}
            subtitle={platformStats?.autoRelayEnabled ? "Auto-relay active" : "Manual processing"}
            icon={<TrendingUp className="w-8 h-8" />}
            colorScheme="orange"
            loading={loading}
          />
          <MetricCard
            title="Growth Potential"
            value={`${analytics.inactiveCreators}`}
            subtitle="Inactive creators"
            icon={<Eye className="w-8 h-8" />}
            colorScheme="yellow"
            loading={loading}
          />
        </div>
      )}

      {/* Top Creators Leaderboard */}
      {showCreatorRankings && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
              Creator Leaderboard
              <span className="ml-2 text-sm text-gray-500">({filteredCreators.length} shown)</span>
            </h3>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Filtered by: {selectedTier === 'all' ? 'All Tiers' : `Tier ${selectedTier}`}</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-3" />
              <span className="text-gray-600">Loading creator rankings...</span>
            </div>
          ) : filteredCreators.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>No creators found matching the current filters</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Rank</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Creator</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Tier</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Total Tips</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Transactions</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Average Tip</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCreators.map((creator, index) => {
                    const avgTip = creator.tipCount > 0 ? parseFloat(creator.totalTips) / creator.tipCount : 0;
                    const isTopPerformer = index < 3;
                    
                    return (
                      <tr 
                        key={creator.id} 
                        className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          isTopPerformer ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                        }`}
                        onClick={() => onCreatorSelect?.(creator.id)}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {index < 3 ? (
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                index === 0 ? 'bg-yellow-100 text-yellow-800' :
                                index === 1 ? 'bg-gray-100 text-gray-800' :
                                'bg-orange-100 text-orange-800'
                              }`}>
                                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                              </div>
                            ) : (
                              <span className="text-gray-500 w-8 text-center">#{index + 1}</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <span className="font-mono text-blue-600 font-semibold">#{creator.id}</span>
                            <p className="text-xs font-mono text-gray-500 mt-1">
                              {creator.wallet.slice(0, 6)}...{creator.wallet.slice(-4)}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            creator.tier === 1 ? 'bg-gray-100 text-gray-800' :
                            creator.tier === 2 ? 'bg-blue-100 text-blue-800' :
                            creator.tier === 3 ? 'bg-purple-100 text-purple-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            Tier {creator.tier}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <span className="font-semibold">{formatAmount(creator.totalTips)} ETH</span>
                            <p className="text-xs text-gray-500">{formatCurrency(creator.totalTips)}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium">{creator.tipCount.toLocaleString()}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-mono text-sm">{formatAmount(avgTip.toString())} ETH</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            creator.active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {creator.active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1">
                            {creator.tipCount > 100 && <Star className="w-4 h-4 text-yellow-500" title="High Volume" />}
                            {avgTip > 0.1 && <Coins className="w-4 h-4 text-blue-500" title="High Value" />}
                            {isTopPerformer && <Trophy className="w-4 h-4 text-orange-500" title="Top Performer" />}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Tier Distribution Chart Placeholder */}
      {showTrendAnalysis && analytics && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <PieChart className="w-6 h-6 mr-2 text-purple-600" />
            Creator Distribution Analysis
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier Distribution */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Tier Distribution</h4>
              <div className="space-y-2">
                {Object.entries(analytics.tierDistribution).map(([tier, count]) => (
                  <div key={tier} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tier {tier}:</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(count / creators.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Status */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Activity Status</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active:</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(analytics.activeCreators / creators.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{analytics.activeCreators}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Inactive:</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: `${(analytics.inactiveCreators / creators.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{analytics.inactiveCreators}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performers Summary */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">Top Performers</h4>
              <div className="space-y-1">
                {analytics.topPerformers.slice(0, 3).map((creator, index) => (
                  <div key={creator.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">#{creator.id}:</span>
                    <span className="font-medium">{formatAmount(creator.totalTips)} ETH</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Viewer Rewards Section (if applicable) */}
      {showViewerRewards && creators.some(c => c.viewerRewardsSent) && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Gift className="w-6 h-6 mr-2 text-green-600" />
            Viewer Rewards Activity
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard
              title="Total Viewer Rewards Sent"
              value={`${formatAmount(creators.reduce((sum, c) => sum + parseFloat(c.viewerRewardsSent || '0'), 0).toString())} ETH`}
              subtitle="By all creators"
              icon={<Gift className="w-8 h-8" />}
              colorScheme="green"
            />
            <MetricCard
              title="Active Reward Senders"
              value={creators.filter(c => c.viewerRewardsSent && parseFloat(c.viewerRewardsSent) > 0).length}
              subtitle="Creators sending rewards"
              icon={<Users className="w-8 h-8" />}
              colorScheme="blue"
            />
            <MetricCard
              title="Total Reward Transactions"
              value={creators.reduce((sum, c) => sum + (c.viewerRewardCount || 0), 0)}
              subtitle="Individual reward sends"
              icon={<Activity className="w-8 h-8" />}
              colorScheme="purple"
            />
          </div>
        </div>
      )}
    </div>
  );
};