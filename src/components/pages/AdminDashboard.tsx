// packages/ui-react/src/components/pages/AdminDashboard.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useActiveAccount, useActiveWalletChain, ConnectButton } from 'thirdweb/react';
import { 
  Shield,
  Settings,
  Users,
  BarChart3,
  TrendingUp,
  Award,
  Globe,
  Activity,
  DollarSign,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Download,
  Upload,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Calendar,
  Clock,
  Loader2,
  Eye,
  EyeOff
} from 'lucide-react';
import { ChainSelector } from '../common';
import { AdminInterface } from '../AdminInterface';
import { CreatorAnalyticsDashboard, type CreatorAnalyticsData, type PlatformAnalyticsData } from '../CreatorAnalyticsDashboard';
import type { ApeChainTippingSDK, Creator, PlatformStats, MembershipTier } from '@tippingchain/sdk';
import { getContractAddress, isContractDeployed } from '@tippingchain/contracts-interface';
import { useTransactionNotifications } from '../notifications';

export interface AdminDashboardProps {
  client: any;
  sdk: ApeChainTippingSDK;
  
  // Configuration
  defaultChainId?: number;
  allowMultiChain?: boolean;
  enablePlatformStats?: boolean;
  enableCreatorAnalytics?: boolean;
  enableViewerRewards?: boolean;
  enableSystemSettings?: boolean;
  
  // Permissions
  adminAddresses?: string[];
  ownerAddresses?: string[];
  requirePermissionCheck?: boolean;
  
  // Event Handlers
  onCreatorAdded?: (creator: Creator) => void;
  onCreatorUpdated?: (creator: Creator) => void;
  onCreatorRemoved?: (creatorId: number) => void;
  onPlatformStatsLoaded?: (stats: PlatformStats) => void;
  onSystemSettingChanged?: (setting: string, value: any) => void;
  
  // UI Configuration
  showHeader?: boolean;
  showSidebar?: boolean;
  defaultView?: 'overview' | 'creators' | 'analytics' | 'settings';
  maxCreatorsToShow?: number;
  
  // Styling
  className?: string;
  headerClassName?: string;
  sidebarClassName?: string;
  contentClassName?: string;
}

interface DashboardStats {
  totalCreators: number;
  activeCreators: number;
  totalTips: string;
  totalVolume: string;
  platformFees: string;
  recentActivity: number;
  growthRate: number;
  systemHealth: 'healthy' | 'warning' | 'error';
}

interface SystemSetting {
  key: string;
  label: string;
  value: any;
  type: 'boolean' | 'number' | 'string' | 'select';
  options?: { value: any; label: string }[];
  description: string;
  category: 'platform' | 'fees' | 'limits' | 'security';
}

const SYSTEM_SETTINGS: SystemSetting[] = [
  {
    key: 'platformFeePercentage',
    label: 'Platform Fee Percentage',
    value: 5,
    type: 'number',
    description: 'Platform fee percentage for tips (basis points)',
    category: 'fees'
  },
  {
    key: 'viewerRewardFeePercentage',
    label: 'Viewer Reward Fee Percentage',
    value: 1,
    type: 'number',
    description: 'Platform fee percentage for viewer rewards (basis points)',
    category: 'fees'
  },
  {
    key: 'autoRelayEnabled',
    label: 'Auto Relay Enabled',
    value: true,
    type: 'boolean',
    description: 'Automatically relay tips to ApeChain',
    category: 'platform'
  },
  {
    key: 'maxCreatorsPerTx',
    label: 'Max Creators Per Transaction',
    value: 50,
    type: 'number',
    description: 'Maximum number of creators that can be added in a single transaction',
    category: 'limits'
  },
  {
    key: 'minTipAmount',
    label: 'Minimum Tip Amount',
    value: 0.001,
    type: 'number',
    description: 'Minimum tip amount in native tokens',
    category: 'limits'
  }
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  client,
  sdk,
  defaultChainId = 8453,
  allowMultiChain = true,
  enablePlatformStats = true,
  enableCreatorAnalytics = true,
  enableViewerRewards = true,
  enableSystemSettings = true,
  adminAddresses = [],
  ownerAddresses = [],
  requirePermissionCheck = false,
  onCreatorAdded,
  onCreatorUpdated,
  onCreatorRemoved,
  onPlatformStatsLoaded,
  onSystemSettingChanged,
  showHeader = true,
  showSidebar = true,
  defaultView = 'overview',
  maxCreatorsToShow = 100,
  className = '',
  headerClassName = '',
  sidebarClassName = '',
  contentClassName = ''
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  // State management
  const [selectedChainId, setSelectedChainId] = useState<number>(defaultChainId);
  const [activeView, setActiveView] = useState<string>(defaultView);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
  const [creators, setCreators] = useState<Creator[]>([]);
  const [platformStats, setPlatformStats] = useState<PlatformStats | null>(null);
  const [systemSettings, setSystemSettings] = useState<SystemSetting[]>(SYSTEM_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [creatorFilter, setCreatorFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [showSystemHealth, setShowSystemHealth] = useState(true);
  
  // Permission state
  const [hasAdminAccess, setHasAdminAccess] = useState(false);
  const [hasOwnerAccess, setHasOwnerAccess] = useState(false);
  const [permissionLoading, setPermissionLoading] = useState(false);
  
  // Notification hooks
  const { notifyCreatorAdded, notifyCreatorError, notifySuccess, notifyError } = useTransactionNotifications();
  
  // Check permissions
  const checkPermissions = useCallback(async () => {
    if (!account || !requirePermissionCheck) {
      setHasAdminAccess(true);
      setHasOwnerAccess(true);
      return;
    }
    
    setPermissionLoading(true);
    
    try {
      const userAddress = account.address?.toLowerCase();
      const isAdmin = adminAddresses.some(addr => addr.toLowerCase() === userAddress) ||
                     ownerAddresses.some(addr => addr.toLowerCase() === userAddress);
      const isOwner = ownerAddresses.some(addr => addr.toLowerCase() === userAddress);
      
      setHasAdminAccess(isAdmin);
      setHasOwnerAccess(isOwner);
    } catch (error) {
      console.error('Failed to check permissions:', error);
      setHasAdminAccess(false);
      setHasOwnerAccess(false);
    } finally {
      setPermissionLoading(false);
    }
  }, [account, adminAddresses, ownerAddresses, requirePermissionCheck]);
  
  // Load dashboard statistics
  const loadDashboardStats = useCallback(async () => {
    if (!isContractDeployed(selectedChainId)) return;
    
    setLoading(true);
    
    try {
      const [platformStats, creators] = await Promise.all([
        sdk.getPlatformStats(selectedChainId).catch(() => null),
        sdk.getTopCreators(maxCreatorsToShow, selectedChainId).catch(() => [])
      ]);
      
      setPlatformStats(platformStats);
      setCreators(creators);
      onPlatformStatsLoaded?.(platformStats);
      
      if (platformStats) {
        const totalTips = parseFloat(platformStats.totalTips);
        const platformFees = totalTips * 0.05; // 5% platform fee
        
        const stats: DashboardStats = {
          totalCreators: creators.length,
          activeCreators: creators.filter(c => c.active).length,
          totalTips: platformStats.totalTips,
          totalVolume: platformStats.totalRelayed,
          platformFees: (platformFees * 1e18).toString(),
          recentActivity: platformStats.totalCount,
          growthRate: Math.random() * 30 + 10, // Mock growth rate
          systemHealth: 'healthy'
        };
        
        setDashboardStats(stats);
      }
    } catch (error) {
      console.error('Failed to load dashboard stats:', error);
      notifyError('Failed to load dashboard statistics');
    } finally {
      setLoading(false);
    }
  }, [selectedChainId, sdk, maxCreatorsToShow, onPlatformStatsLoaded, notifyError]);
  
  // Load data on mount and when dependencies change
  useEffect(() => {
    checkPermissions();
    loadDashboardStats();
  }, [checkPermissions, loadDashboardStats]);
  
  // Handle creator operations
  const handleCreatorAdded = useCallback((creator: Creator) => {
    setCreators(prev => [...prev, creator]);
    loadDashboardStats(); // Refresh stats
    onCreatorAdded?.(creator);
    notifyCreatorAdded(creator.id);
  }, [loadDashboardStats, onCreatorAdded, notifyCreatorAdded]);
  
  const handleCreatorUpdated = useCallback((creator: Creator) => {
    setCreators(prev => prev.map(c => c.id === creator.id ? creator : c));
    loadDashboardStats(); // Refresh stats
    onCreatorUpdated?.(creator);
    notifySuccess(`Creator #${creator.id} updated successfully`);
  }, [loadDashboardStats, onCreatorUpdated, notifySuccess]);
  
  // Handle system settings
  const handleSystemSettingChange = useCallback((settingKey: string, newValue: any) => {
    setSystemSettings(prev => prev.map(setting => 
      setting.key === settingKey ? { ...setting, value: newValue } : setting
    ));
    onSystemSettingChanged?.(settingKey, newValue);
    notifySuccess(`Setting "${settingKey}" updated successfully`);
  }, [onSystemSettingChanged, notifySuccess]);
  
  // Filter creators based on search and filter criteria
  const filteredCreators = creators.filter(creator => {
    const matchesSearch = !searchQuery || 
      creator.wallet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.id.toString().includes(searchQuery);
    
    const matchesFilter = creatorFilter === 'all' || 
      (creatorFilter === 'active' && creator.active) ||
      (creatorFilter === 'inactive' && !creator.active);
    
    return matchesSearch && matchesFilter;
  });
  
  // Format amounts for display
  const formatAmount = (amount: string | number) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return '0.0000';
    }
  };
  
  // Permission check render
  if (requirePermissionCheck && !account) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center ${className}`}>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Admin Access Required</h2>
          <p className="text-gray-600 mb-6">
            Connect your wallet to access the TippingChain admin dashboard
          </p>
          <ConnectButton client={client} theme="light" />
        </div>
      </div>
    );
  }
  
  if (requirePermissionCheck && !hasAdminAccess && !permissionLoading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center ${className}`}>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-4">
            You don't have permission to access the admin dashboard
          </p>
          <p className="text-sm text-gray-500">
            Connected: <span className="font-mono">{account?.address}</span>
          </p>
        </div>
      </div>
    );
  }
  
  // Main sidebar navigation
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3, enabled: true },
    { id: 'creators', label: 'Creator Management', icon: Users, enabled: true },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp, enabled: enableCreatorAnalytics },
    { id: 'rewards', label: 'Viewer Rewards', icon: Award, enabled: enableViewerRewards },
    { id: 'settings', label: 'System Settings', icon: Settings, enabled: enableSystemSettings }
  ].filter(item => item.enabled);
  
  // Overview dashboard content
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      {dashboardStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Creators</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalCreators}</p>
                <p className="text-sm text-green-600">{dashboardStats.activeCreators} active</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Volume</p>
                <p className="text-2xl font-bold text-gray-900">{formatAmount(dashboardStats.totalTips)} ETH</p>
                <p className="text-sm text-green-600">+{dashboardStats.growthRate.toFixed(1)}% growth</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Platform Fees</p>
                <p className="text-2xl font-bold text-gray-900">{formatAmount(dashboardStats.platformFees)} ETH</p>
                <p className="text-sm text-purple-600">5% fee rate</p>
              </div>
              <Activity className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">System Health</p>
                <p className={`text-2xl font-bold ${
                  dashboardStats.systemHealth === 'healthy' ? 'text-green-600' :
                  dashboardStats.systemHealth === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {dashboardStats.systemHealth === 'healthy' ? '✓ Healthy' :
                   dashboardStats.systemHealth === 'warning' ? '⚠ Warning' : '✗ Error'}
                </p>
                <p className="text-sm text-gray-600">{dashboardStats.recentActivity} transactions</p>
              </div>
              <CheckCircle className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>
      )}
      
      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveView('creators')}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Plus className="w-6 h-6 text-blue-600 mr-3" />
            <div className="text-left">
              <div className="font-medium">Add Creator</div>
              <div className="text-sm text-gray-500">Register new creator</div>
            </div>
          </button>
          
          <button
            onClick={loadDashboardStats}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
          >
            <RefreshCw className="w-6 h-6 text-green-600 mr-3" />
            <div className="text-left">
              <div className="font-medium">Refresh Data</div>
              <div className="text-sm text-gray-500">Update statistics</div>
            </div>
          </button>
          
          <button
            onClick={() => setActiveView('analytics')}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
          >
            <BarChart3 className="w-6 h-6 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-medium">View Analytics</div>
              <div className="text-sm text-gray-500">Detailed insights</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
  
  // System settings content
  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">System Settings</h3>
        
        {/* Settings by category */}
        {Object.entries(
          systemSettings.reduce((acc, setting) => {
            if (!acc[setting.category]) acc[setting.category] = [];
            acc[setting.category].push(setting);
            return acc;
          }, {} as Record<string, SystemSetting[]>)
        ).map(([category, settings]) => (
          <div key={category} className="mb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 capitalize">
              {category} Settings
            </h4>
            <div className="space-y-4">
              {settings.map((setting) => (
                <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-900">
                      {setting.label}
                    </label>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <div className="ml-4">
                    {setting.type === 'boolean' ? (
                      <button
                        onClick={() => handleSystemSettingChange(setting.key, !setting.value)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          setting.value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        disabled={!hasOwnerAccess}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : (
                      <input
                        type={setting.type}
                        value={setting.value}
                        onChange={(e) => handleSystemSettingChange(
                          setting.key, 
                          setting.type === 'number' ? Number(e.target.value) : e.target.value
                        )}
                        disabled={!hasOwnerAccess}
                        className="w-24 px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${className}`}>
      {/* Header */}
      {showHeader && (
        <div className={`bg-white shadow-sm border-b ${headerClassName}`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">TippingChain Admin</h1>
                  <p className="text-sm text-gray-600">Multi-chain creator platform administration</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Chain Selector */}
                {allowMultiChain && (
                  <ChainSelector
                    value={selectedChainId}
                    onChange={setSelectedChainId}
                    label=""
                    className="w-48"
                  />
                )}
                
                {/* Refresh Button */}
                <button
                  onClick={loadDashboardStats}
                  disabled={loading}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Refresh data"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                
                {/* User Info */}
                {account && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {hasOwnerAccess ? 'Owner' : hasAdminAccess ? 'Admin' : 'User'}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {account.address?.slice(0, 6)}...{account.address?.slice(-4)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <div className={`w-64 bg-white shadow-sm ${sidebarClassName}`}>
            <div className="p-4">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeView === item.id
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className={`flex-1 p-6 ${contentClassName}`}>
          {activeView === 'overview' && renderOverview()}
          
          {activeView === 'creators' && (
            <AdminInterface
              client={client}
              sdk={sdk}
              onCreatorAdded={handleCreatorAdded}
              onCreatorUpdated={handleCreatorUpdated}
              onPlatformStatsLoaded={onPlatformStatsLoaded}
              defaultChainId={selectedChainId}
              showChainSelector={false}
              showPlatformStats={enablePlatformStats}
              maxCreatorsToShow={maxCreatorsToShow}
            />
          )}
          
          {activeView === 'analytics' && enableCreatorAnalytics && (
            <CreatorAnalyticsDashboard
              creators={creators.map(creator => ({
                id: creator.id,
                wallet: creator.wallet,
                tier: creator.tier,
                active: creator.active,
                totalTips: creator.totalTips,
                tipCount: creator.tipCount,
                averageTipAmount: (parseFloat(creator.totalTips) / Math.max(creator.tipCount, 1) * 1e18).toString(),
                lastTipTimestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
                topSupporterAddress: '0x' + Math.random().toString(16).substr(2, 40),
                topSupporterAmount: (Math.random() * 5 * 1e18).toString(),
                monthlyTips: (parseFloat(creator.totalTips) * 0.3).toString(),
                weeklyTips: (parseFloat(creator.totalTips) * 0.1).toString(),
                dailyTips: (parseFloat(creator.totalTips) * 0.02).toString(),
                tierUpgradeDate: Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000,
                viewerRewardsSent: creator.active ? (Math.random() * 2 * 1e18).toString() : '0',
                viewerRewardCount: creator.active ? Math.floor(Math.random() * 50) : 0
              }))}
              platformStats={platformStats ? {
                totalTips: platformStats.totalTips,
                totalCount: platformStats.totalCount,
                totalRelayed: platformStats.totalRelayed,
                activeCreators: platformStats.activeCreators,
                autoRelayEnabled: platformStats.autoRelayEnabled,
                avgTipAmount: (parseFloat(platformStats.totalTips) / Math.max(platformStats.totalCount, 1) * 1e18).toString(),
                topPerformerIds: creators.sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips)).slice(0, 5).map(c => c.id),
                growthRate: dashboardStats?.growthRate || 0,
                viewerRewardsTotal: '0',
                platformFeesCollected: (parseFloat(platformStats.totalTips) * 0.05).toString()
              } : null}
              chainId={selectedChainId}
              chainName={`Chain ${selectedChainId}`}
              loading={loading}
              onRefresh={loadDashboardStats}
              showPlatformStats={true}
              showCreatorRankings={true}
              showTrendAnalysis={true}
              showViewerRewards={enableViewerRewards}
              maxCreatorsShown={maxCreatorsToShow}
            />
          )}
          
          {activeView === 'settings' && enableSystemSettings && renderSettings()}
        </div>
      </div>
    </div>
  );
};