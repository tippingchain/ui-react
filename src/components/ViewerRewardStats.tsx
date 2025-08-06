import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { TrendingUp, Users, Award, RefreshCw } from 'lucide-react';
import { SUPPORTED_CHAINS } from '@tippingchain/sdk';

interface ViewerRewardStatsProps {
  sdkConfig: { client: any; sdk: any };
  address?: string; // Optional address to check, defaults to connected wallet
  className?: string;
  theme?: 'light' | 'dark';
  autoRefresh?: boolean;
  refreshInterval?: number; // in seconds
}

interface Stats {
  totalRewardsGiven: string;
  totalRewardsReceived: string;
  rewardCount: number;
  usdcBalance?: string;
  platformStats?: {
    totalRewards: string;
    rewardsEnabled: boolean;
    platformFeeRate: number;
  };
  loading: boolean;
  error?: string;
}

export const ViewerRewardStats: React.FC<ViewerRewardStatsProps> = ({
  sdkConfig,
  address,
  className = '',
  theme = 'light',
  autoRefresh = false,
  refreshInterval = 30
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  
  const [stats, setStats] = useState<Stats>({
    totalRewardsGiven: '0',
    totalRewardsReceived: '0',
    rewardCount: 0,
    loading: true
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const isDark = theme === 'dark';
  const chainId = activeChain?.id || SUPPORTED_CHAINS.POLYGON;
  const targetAddress = address || account?.address;

  const fetchStats = async () => {
    if (!targetAddress || !sdkConfig.sdk) return;

    try {
      setIsRefreshing(true);
      
      // Fetch user stats
      const userStats = await sdkConfig.sdk.getViewerRewardStats(targetAddress, chainId);
      
      // Fetch platform stats
      const platformStats = await sdkConfig.sdk.getViewerRewardsPlatformStats(chainId);
      
      // Fetch USDC balance on ApeChain
      let usdcBalance = '0';
      try {
        usdcBalance = await sdkConfig.sdk.getViewerUsdcBalanceOnApeChain(targetAddress);
      } catch (err) {
        console.log('Could not fetch USDC balance on ApeChain');
      }
      
      setStats({
        ...userStats,
        usdcBalance,
        platformStats,
        loading: false
      });
    } catch (err) {
      console.error('Failed to fetch viewer reward stats:', err);
      setStats(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load statistics'
      }));
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();

    if (autoRefresh && refreshInterval > 0) {
      const interval = setInterval(fetchStats, refreshInterval * 1000);
      return () => clearInterval(interval);
    }
  }, [targetAddress, chainId, autoRefresh, refreshInterval]);

  const formatAmount = (wei: string) => {
    const ether = parseFloat(wei) / 1e18;
    if (ether === 0) return '0';
    if (ether < 0.001) return '< 0.001';
    if (ether < 1) return ether.toFixed(3);
    if (ether < 1000) return ether.toFixed(2);
    return ether.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const formatUsdc = (microUsdc: string) => {
    const usdc = parseFloat(microUsdc) / 1e6;
    if (usdc === 0) return '0.00';
    if (usdc < 0.01) return '< 0.01';
    return usdc.toFixed(2);
  };

  const nativeSymbol = activeChain?.nativeCurrency?.symbol || 'MATIC';

  if (!targetAddress) {
    return (
      <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Connect wallet to view statistics
        </p>
      </div>
    );
  }

  if (stats.loading && !isRefreshing) {
    return (
      <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
        <div className="flex items-center justify-center space-x-2">
          <RefreshCw className="w-5 h-5 animate-spin text-orange-500" />
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-600'} mr-2`} />
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Viewer Reward Statistics
          </h2>
        </div>
        <button
          onClick={fetchStats}
          disabled={isRefreshing}
          className={`p-2 rounded-md transition-colors ${
            isRefreshing
              ? 'opacity-50 cursor-not-allowed'
              : isDark
                ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          title="Refresh statistics"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {stats.error ? (
        <div className={`text-center py-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {stats.error}
        </div>
      ) : (
        <>
          {/* USDC Balance on ApeChain */}
          {stats.usdcBalance && parseFloat(stats.usdcBalance) > 0 && (
            <div className={`mb-4 p-4 rounded-lg ${isDark ? 'bg-orange-900/20 border border-orange-700' : 'bg-orange-50 border border-orange-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>
                    USDC Balance on ApeChain
                  </p>
                  <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${formatUsdc(stats.usdcBalance)}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${isDark ? 'bg-orange-800/30' : 'bg-orange-100'}`}>
                  <Award className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                </div>
              </div>
            </div>
          )}

          {/* User Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center mb-2">
                <Award className={`w-4 h-4 ${isDark ? 'text-green-400' : 'text-green-600'} mr-2`} />
                <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Rewards Given
                </h3>
              </div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {formatAmount(stats.totalRewardsGiven)}
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                {nativeSymbol}
              </p>
            </div>

            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center mb-2">
                <Award className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Rewards Received
                </h3>
              </div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {formatAmount(stats.totalRewardsReceived)}
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                {nativeSymbol}
              </p>
            </div>

            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center mb-2">
                <Users className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
                <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Total Rewards
                </h3>
              </div>
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stats.rewardCount}
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                Transactions
              </p>
            </div>
          </div>

          {/* Platform Statistics */}
          {stats.platformStats && (
            <div className={`border-t pt-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Platform Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Platform Rewards
                  </span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {formatAmount(stats.platformStats.totalRewards)} {nativeSymbol}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Platform Fee
                  </span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stats.platformStats.platformFeeRate / 100}%
                  </span>
                </div>
              </div>
              {!stats.platformStats.rewardsEnabled && (
                <div className={`mt-3 p-2 rounded text-sm text-center ${
                  isDark ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-50 text-yellow-700'
                }`}>
                  Viewer rewards are currently disabled on this chain
                </div>
              )}
            </div>
          )}

          {/* Address being viewed */}
          {address && address !== account?.address && (
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Viewing statistics for: {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};