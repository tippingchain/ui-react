import React, { useState, useEffect } from 'react';
import { ApeChainTippingSDK } from '@tippingchain/sdk';

interface AdvancedStatsDashboardProps {
  sdkConfig: { client: any; sdk: ApeChainTippingSDK };
  chainId: number;
  onDataLoadError?: (error: any) => void;
  className?: string;
}

export const AdvancedStatsDashboard: React.FC<AdvancedStatsDashboardProps> = ({
  sdkConfig,
  chainId,
  onDataLoadError,
  className = '',
}) => {
  const { sdk } = sdkConfig;
  const [stats, setStats] = useState<any>(null);
  const [activeCreators, setActiveCreators] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        // Placeholder for fetching advanced stats
        // const apeChainStats = await sdk.getApeChainStats(chainId);
        // setStats(apeChainStats);
        // const creators = await sdk.getAllActiveCreators(chainId);
        // setActiveCreators(creators);
        // For now, use placeholder data
        setStats({ totalTips: 100, totalRewards: 50, totalValue: 10000 });
        setActiveCreators([{ id: 1, name: 'Creator 1' }, { id: 2, name: 'Creator 2' }]);
      } catch (error) {
        console.error('Error fetching advanced stats:', error);
        setErrorMessage('Failed to load advanced statistics. Please check console for details.');
        if (onDataLoadError) onDataLoadError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [sdk, chainId, onDataLoadError]);

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Advanced Statistics Dashboard</h2>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      {isLoading ? (
        <div className="text-center py-10">Loading statistics...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Tips</h3>
            <p className="text-3xl font-bold">{stats?.totalTips || 0}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Rewards</h3>
            <p className="text-3xl font-bold">{stats?.totalRewards || 0}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Value (USDC)</h3>
            <p className="text-3xl font-bold">${stats?.totalValue || 0}</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-2">Active Creators</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">ID</th>
                    <th className="py-2 px-4 border-b text-left">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCreators.length > 0 ? (
                    activeCreators.map((creator) => (
                      <tr key={creator.id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b">{creator.id}</td>
                        <td className="py-2 px-4 border-b">{creator.name}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="py-2 px-4 text-center text-gray-500">
                        No active creators found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
