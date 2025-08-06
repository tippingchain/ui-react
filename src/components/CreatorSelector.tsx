// packages/ui/src/components/CreatorSelector.tsx
import React, { useState, useEffect } from 'react';
import { Search, User, Users } from 'lucide-react';
import { formatTokenAmount, truncateAddress } from '../utils/helpers';
import type { CreatorSelectorProps } from '../types';
import type { Creator } from '@tippingchain/sdk';

export const CreatorSelector: React.FC<CreatorSelectorProps> = ({
  sdkConfig,
  chainId,
  onCreatorSelect,
  selectedCreatorId,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [topCreators, setTopCreators] = useState<Creator[]>([]);
  const [searchResults, setSearchResults] = useState<Creator[]>([]);
  const [isLoadingTop, setIsLoadingTop] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  // Load top creators on mount
  useEffect(() => {
    const loadTopCreators = async () => {
      setIsLoadingTop(true);
      try {
        const creators = await sdkConfig.sdk.getTopCreators(10, chainId);
        setTopCreators(creators);
      } catch (error) {
        console.error('Failed to load top creators:', error);
      } finally {
        setIsLoadingTop(false);
      }
    };

    loadTopCreators();
  }, [sdkConfig.sdk, chainId]);

  // Search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const performSearch = async () => {
      setIsSearching(true);
      try {
        // Check if search term is a creator ID (number)
        if (/^\d+$/.test(searchTerm)) {
          const creatorId = parseInt(searchTerm);
          const creator = await sdkConfig.sdk.getCreator(creatorId, chainId);
          setSearchResults([creator]);
        }
        // Check if search term looks like a wallet address
        else if (/^0x[a-fA-F0-9]{40}$/.test(searchTerm)) {
          const creator = await sdkConfig.sdk.getCreatorByWallet(searchTerm, chainId);
          setSearchResults(creator ? [creator] : []);
        }
        // Otherwise search in top creators by wallet substring
        else {
          const filtered = topCreators.filter(creator => 
            creator.wallet.toLowerCase().includes(searchTerm.toLowerCase()) ||
            creator.id.toString().includes(searchTerm)
          );
          setSearchResults(filtered);
        }
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, sdkConfig.sdk, chainId, topCreators]);

  const CreatorCard: React.FC<{ creator: Creator; isSelected?: boolean }> = ({ creator, isSelected }) => (
    <div
      onClick={() => onCreatorSelect(creator)}
      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
        isSelected 
          ? 'border-orange-500 bg-orange-50' 
          : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <User className="w-4 h-4 text-orange-600" />
          </div>
          <div>
            <div className="font-medium text-gray-800">ID #{creator.id}</div>
            <div className="text-xs text-gray-500">{truncateAddress(creator.wallet)}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-orange-600">
            {formatTokenAmount(creator.totalTips || '0')}
          </div>
          <div className="text-xs text-gray-500">{creator.tipCount || 0} tips</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <Users className="w-6 h-6 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Select Creator</h3>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by Creator ID or wallet address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="animate-spin h-4 w-4 text-orange-600" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {searchTerm ? (
          // Search results
          searchResults.length > 0 ? (
            <div>
              <div className="text-sm text-gray-600 mb-2">Search Results</div>
              {searchResults.map(creator => (
                <CreatorCard 
                  key={creator.id} 
                  creator={creator} 
                  isSelected={creator.id === selectedCreatorId} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              {isSearching ? 'Searching...' : 'No creators found'}
            </div>
          )
        ) : (
          // Top creators
          isLoadingTop ? (
            <div className="text-center py-4">
              <svg className="animate-spin h-6 w-6 text-orange-600 mx-auto" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <div className="text-gray-600 mt-2">Loading top creators...</div>
            </div>
          ) : topCreators.length > 0 ? (
            <div>
              <div className="text-sm text-gray-600 mb-2">Top Creators</div>
              {topCreators.map(creator => (
                <CreatorCard 
                  key={creator.id} 
                  creator={creator} 
                  isSelected={creator.id === selectedCreatorId} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              No creators found on this chain
            </div>
          )
        )}
      </div>

      {/* Info */}
      <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded mt-4">
        💡 You can search by Creator ID (e.g., "1") or wallet address to find specific creators.
      </div>
    </div>
  );
};