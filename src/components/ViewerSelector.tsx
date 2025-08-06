import React, { useState, useEffect } from 'react';
import { Search, User, Hash, Wallet } from 'lucide-react';
import type { ViewerInfo } from '@tippingchain/sdk';

interface ViewerSelectorProps {
  sdkConfig: { client: any; sdk: any };
  onSelect: (viewer: ViewerInfo | { address: string }) => void;
  className?: string;
  theme?: 'light' | 'dark';
  allowDirectAddress?: boolean;
  chainId?: number;
  placeholder?: string;
}

type SearchType = 'id' | 'thirdweb' | 'address';

export const ViewerSelector: React.FC<ViewerSelectorProps> = ({
  sdkConfig,
  onSelect,
  className = '',
  theme = 'light',
  allowDirectAddress = true,
  chainId = 137, // Default to Polygon
  placeholder = 'Search for viewer...'
}) => {
  const [searchType, setSearchType] = useState<SearchType>('id');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [viewer, setViewer] = useState<ViewerInfo | null>(null);

  const isDark = theme === 'dark';

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setError('Please enter a value to search');
      return;
    }

    setLoading(true);
    setError('');
    setViewer(null);

    try {
      let result: ViewerInfo | null = null;

      switch (searchType) {
        case 'id':
          const viewerId = parseInt(searchValue);
          if (isNaN(viewerId)) {
            throw new Error('Invalid viewer ID');
          }
          result = await sdkConfig.sdk.getViewer(viewerId, chainId);
          break;

        case 'thirdweb':
          result = await sdkConfig.sdk.getViewerByThirdwebId(searchValue, chainId);
          break;

        case 'address':
          if (!searchValue.match(/^0x[a-fA-F0-9]{40}$/)) {
            throw new Error('Invalid wallet address');
          }
          result = await sdkConfig.sdk.getViewerByWallet(searchValue, chainId);
          break;
      }

      if (result) {
        setViewer(result);
      } else if (searchType === 'address' && allowDirectAddress) {
        // Allow direct address usage even if not registered
        setViewer(null); // Clear any previous viewer
        onSelect({ address: searchValue });
        return;
      } else {
        setError('Viewer not found');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to search for viewer');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectViewer = () => {
    if (viewer) {
      onSelect(viewer);
    } else if (searchType === 'address' && allowDirectAddress && searchValue) {
      onSelect({ address: searchValue });
    }
  };

  const getPlaceholder = () => {
    switch (searchType) {
      case 'id':
        return 'Enter viewer ID (e.g., 123)';
      case 'thirdweb':
        return 'Enter thirdweb account ID';
      case 'address':
        return 'Enter wallet address (0x...)';
      default:
        return placeholder;
    }
  };

  return (
    <div className={`${className}`}>
      <div className="flex space-x-2 mb-3">
        <button
          onClick={() => setSearchType('id')}
          className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
            searchType === 'id'
              ? isDark
                ? 'bg-orange-600 text-white'
                : 'bg-orange-600 text-white'
              : isDark
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Hash className="w-3 h-3" />
          <span>ID</span>
        </button>

        <button
          onClick={() => setSearchType('thirdweb')}
          className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
            searchType === 'thirdweb'
              ? isDark
                ? 'bg-orange-600 text-white'
                : 'bg-orange-600 text-white'
              : isDark
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <User className="w-3 h-3" />
          <span>Thirdweb</span>
        </button>

        {allowDirectAddress && (
          <button
            onClick={() => setSearchType('address')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
              searchType === 'address'
                ? isDark
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-600 text-white'
                : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Wallet className="w-3 h-3" />
            <span>Address</span>
          </button>
        )}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={getPlaceholder()}
          className={`flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
              : 'border-gray-300'
          }`}
          disabled={loading}
        />

        <button
          onClick={handleSearch}
          disabled={loading || !searchValue.trim()}
          className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center space-x-2 ${
            loading || !searchValue.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isDark
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-orange-600 text-white hover:bg-orange-700'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>

      {error && (
        <p className={`mt-2 text-sm ${isDark ? 'text-red-400' : 'text-red-600'}`}>
          {error}
        </p>
      )}

      {viewer && (
        <div className={`mt-3 p-3 rounded-lg border ${
          isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Viewer #{viewer.id}
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {viewer.wallet.slice(0, 6)}...{viewer.wallet.slice(-4)}
              </p>
              {viewer.totalReceived !== '0' && (
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total received: {(parseFloat(viewer.totalReceived) / 1e18).toFixed(4)} MATIC
                </p>
              )}
            </div>
            <button
              onClick={handleSelectViewer}
              className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
                isDark
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              Select
            </button>
          </div>
        </div>
      )}

      {searchType === 'address' && allowDirectAddress && searchValue && !viewer && !loading && !error && (
        <div className={`mt-3 p-3 rounded-lg border ${
          isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
        }`}>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
            This address is not registered as a viewer. You can still send rewards directly.
          </p>
          <button
            onClick={handleSelectViewer}
            className={`w-full px-3 py-1 text-sm rounded-md font-medium transition-colors ${
              isDark
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            Use Direct Address
          </button>
        </div>
      )}
    </div>
  );
};