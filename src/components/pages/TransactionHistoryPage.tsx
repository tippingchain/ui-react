// packages/ui-react/src/components/pages/TransactionHistoryPage.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useActiveAccount, ConnectButton } from 'thirdweb/react';
import { 
  History, 
  Download, 
  Calendar, 
  BarChart3,
  TrendingUp,
  AlertCircle,
  FileText,
  Settings,
  Filter,
  Search,
  RefreshCw,
  Eye,
  EyeOff,
  Share2,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  DollarSign
} from 'lucide-react';
import { TransactionHistory } from '../TransactionHistory';
import { createTransactionHistoryService } from '../../utils/transactionHistoryService';
import type { TransactionStats, TransactionHistoryItem, TransactionFilters } from '../../types/transactionHistory';
import type { ApeChainTippingSDK } from '@tippingchain/sdk';

export interface TransactionHistoryPageProps {
  client: any;
  sdk?: ApeChainTippingSDK;
  
  // Configuration
  enableExport?: boolean;
  enableFiltering?: boolean;
  enableStats?: boolean;
  enableRecentActivity?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number; // in seconds
  
  // Display Options
  maxTransactionsToShow?: number;
  defaultTimeRange?: '24h' | '7d' | '30d' | '90d' | 'all';
  showAdvancedFilters?: boolean;
  showChartAnalytics?: boolean;
  
  // Event Handlers
  onTransactionSelect?: (transaction: TransactionHistoryItem) => void;
  onDataExport?: (data: TransactionHistoryItem[], format: string) => void;
  onStatsUpdate?: (stats: TransactionStats) => void;
  
  // Styling
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  statsCardClassName?: string;
}

interface ExportFormat {
  id: string;
  label: string;
  description: string;
  fileExtension: string;
  mimeType: string;
}

const EXPORT_FORMATS: ExportFormat[] = [
  {
    id: 'csv',
    label: 'CSV (Excel)',
    description: 'Comma-separated values for spreadsheet applications',
    fileExtension: 'csv',
    mimeType: 'text/csv'
  },
  {
    id: 'json',
    label: 'JSON',
    description: 'JavaScript Object Notation with full metadata',
    fileExtension: 'json',
    mimeType: 'application/json'
  },
  {
    id: 'pdf',
    label: 'PDF Report',
    description: 'Formatted report with statistics and transaction list',
    fileExtension: 'pdf',
    mimeType: 'application/pdf'
  }
];

export const TransactionHistoryPage: React.FC<TransactionHistoryPageProps> = ({
  client,
  sdk,
  enableExport = true,
  enableFiltering = true,
  enableStats = true,
  enableRecentActivity = true,
  autoRefresh = false,
  refreshInterval = 30,
  maxTransactionsToShow = 100,
  defaultTimeRange = '30d',
  showAdvancedFilters = false,
  showChartAnalytics = true,
  onTransactionSelect,
  onDataExport,
  onStatsUpdate,
  className = '',
  headerClassName = '',
  contentClassName = '',
  statsCardClassName = ''
}) => {
  const account = useActiveAccount();
  
  // State management
  const [stats, setStats] = useState<TransactionStats | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<TransactionHistoryItem[]>([]);
  const [allTransactions, setAllTransactions] = useState<TransactionHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState(defaultTimeRange);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'pending' | 'failed'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'tip' | 'approval' | 'creator_registration' | 'viewer_reward'>('all');
  const [showFilters, setShowFilters] = useState(showAdvancedFilters);
  const [refreshTimer, setRefreshTimer] = useState<NodeJS.Timeout | null>(null);
  const [lastRefreshTime, setLastRefreshTime] = useState<Date | null>(null);

  // Create transaction history service
  const historyService = createTransactionHistoryService();

  // Load page data
  const loadPageData = useCallback(async () => {
    if (!account) return;
    
    setLoading(true);
    try {
      // Build filters based on current state
      const filters: TransactionFilters = {
        walletAddress: account.address,
        status: statusFilter === 'all' ? undefined : statusFilter,
        type: typeFilter === 'all' ? undefined : typeFilter,
        searchQuery: searchQuery || undefined,
        timeRange: selectedTimeRange === 'all' ? undefined : selectedTimeRange
      };

      const [statsData, transactions] = await Promise.all([
        historyService.getStats(filters),
        historyService.getTransactions(filters, maxTransactionsToShow)
      ]);
      
      setStats(statsData);
      setAllTransactions(transactions);
      setRecentTransactions(transactions.slice(0, 5));
      setLastRefreshTime(new Date());
      
      // Call event handlers
      onStatsUpdate?.(statsData);
      
    } catch (error) {
      console.error('Failed to load transaction history page data:', error);
    } finally {
      setLoading(false);
    }
  }, [account, statusFilter, typeFilter, searchQuery, selectedTimeRange, maxTransactionsToShow, historyService, onStatsUpdate]);

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh && account) {
      const timer = setInterval(() => {
        loadPageData();
      }, refreshInterval * 1000);
      
      setRefreshTimer(timer);
      
      return () => {
        if (timer) clearInterval(timer);
      };
    } else if (refreshTimer) {
      clearInterval(refreshTimer);
      setRefreshTimer(null);
    }
  }, [autoRefresh, account, refreshInterval, loadPageData]);

  // Load data when dependencies change
  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  // Export transactions
  const exportTransactions = async (formatId: string) => {
    const format = EXPORT_FORMATS.find(f => f.id === formatId);
    if (!format) return;

    setExporting(true);
    try {
      const transactions = await historyService.getTransactions({
        walletAddress: account?.address,
        status: statusFilter === 'all' ? undefined : statusFilter,
        type: typeFilter === 'all' ? undefined : typeFilter
      });

      // Call event handler
      onDataExport?.(transactions, formatId);

      if (formatId === 'csv') {
        const csvHeaders = [
          'ID', 'Type', 'Status', 'Timestamp', 'Chain', 'Token', 'Amount', 
          'USD Value', 'Creator ID', 'Transaction Hash', 'Description'
        ];
        
        const csvRows = transactions.map(tx => [
          tx.id,
          tx.type,
          tx.status,
          new Date(tx.timestamp).toISOString(),
          tx.sourceChainId.toString(),
          tx.tokenSymbol,
          tx.amount,
          tx.estimatedUsdValue || '',
          tx.creatorId?.toString() || '',
          tx.sourceTransactionHash || '',
          tx.description.replace(/,/g, ';')
        ]);
        
        const csvContent = [csvHeaders, ...csvRows]
          .map(row => row.map(field => `"${field}"`).join(','))
          .join('\n');
        
        downloadFile(csvContent, format.mimeType, `tippingchain-transactions-${new Date().toISOString().split('T')[0]}.${format.fileExtension}`);
        
      } else if (formatId === 'json') {
        const exportData = {
          exportTimestamp: new Date().toISOString(),
          walletAddress: account?.address,
          filters: { statusFilter, typeFilter, searchQuery, selectedTimeRange },
          statistics: stats,
          transactions: transactions
        };
        
        const jsonContent = JSON.stringify(exportData, null, 2);
        downloadFile(jsonContent, format.mimeType, `tippingchain-transactions-${new Date().toISOString().split('T')[0]}.${format.fileExtension}`);
        
      } else if (formatId === 'pdf') {
        // For PDF, we'd typically use a library like jsPDF
        // For now, we'll just download as JSON with PDF filename
        alert('PDF export coming soon! Using JSON format for now.');
        const jsonContent = JSON.stringify(transactions, null, 2);
        downloadFile(jsonContent, 'application/json', `tippingchain-transactions-${new Date().toISOString().split('T')[0]}.json`);
      }
      
    } catch (error) {
      console.error('Failed to export transactions:', error);
      alert('Failed to export transaction history. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  // Utility function to download files
  const downloadFile = (content: string, mimeType: string, filename: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Format currency
  const formatCurrency = (value: string | undefined) => {
    if (!value) return '$0.00';
    return `$${parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Render statistics cards
  const renderStatsCards = () => {
    if (!enableStats || !stats) return null;

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ${statsCardClassName}`}>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Volume</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalVolumeUsd)}</p>
              <p className="text-sm text-green-600">Lifetime transactions</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalTransactions > 0 
                  ? Math.round((stats.successfulTransactions / stats.totalTransactions) * 100)
                  : 0}%
              </p>
              <p className="text-sm text-blue-600">{stats.successfulTransactions} successful</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Creators Supported</p>
              <p className="text-2xl font-bold text-gray-900">{stats.uniqueCreatorsTipped}</p>
              <p className="text-sm text-purple-600">Unique creators</p>
            </div>
            <div className="text-3xl">👥</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Platform Fees</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalFeesUsd)}</p>
              <p className="text-sm text-orange-600">Fees contributed</p>
            </div>
            <DollarSign className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>
    );
  };

  // Render filters
  const renderFilters = () => {
    if (!enableFiltering) return null;

    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Filters & Search</h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? <EyeOff className="w-4 h-4 ml-1" /> : <Eye className="w-4 h-4 ml-1" />}
          </button>
        </div>

        {showFilters && (
          <div className="space-y-4">
            {/* Search and Time Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search transactions, hashes, creators..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>

            {/* Status and Type Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="success">Successful</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="tip">Tips</option>
                <option value="approval">Approvals</option>
                <option value="creator_registration">Creator Registration</option>
                <option value="viewer_reward">Viewer Rewards</option>
              </select>
              
              <button
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                  setTypeFilter('all');
                  setSelectedTimeRange('30d');
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render export section
  const renderExportSection = () => {
    if (!enableExport || !stats || stats.totalTransactions === 0) return null;

    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Download className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Export Transaction History</h2>
          </div>
          {lastRefreshTime && (
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Updated: {lastRefreshTime.toLocaleTimeString()}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EXPORT_FORMATS.map((format) => (
            <button
              key={format.id}
              onClick={() => exportTransactions(format.id)}
              disabled={exporting}
              className="flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center mb-2">
                <FileText className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900">{format.label}</span>
              </div>
              <p className="text-sm text-gray-600">{format.description}</p>
              {exporting && (
                <div className="flex items-center mt-2 text-sm text-blue-600">
                  <Loader2 className="w-4 h-4 animate-spin mr-1" />
                  Exporting...
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className={`text-center ${headerClassName}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <History className="w-10 h-10 text-blue-600" />
            Transaction History
          </h1>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-blue-100 text-blue-800">
            <RefreshCw className={`w-4 h-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
            Complete transaction tracking and analytics
            {autoRefresh && ' • Auto-refreshing'}
          </div>
        </div>

        {/* Wallet Connection Alert */}
        {!account && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Connect Your Wallet:</strong> To track your transactions, please connect your wallet first.
                  </p>
                  <p className="text-xs text-yellow-600 mt-1">
                    Transaction history is stored locally and tied to your wallet address.
                  </p>
                </div>
              </div>
              <ConnectButton client={client} theme="light" />
            </div>
          </div>
        )}

        {/* Connected Wallet Info */}
        {account && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>Wallet Connected:</strong> Tracking transactions for {account.address?.slice(0, 8)}...{account.address?.slice(-6)}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Transaction history is automatically saved as you use TippingChain
                  </p>
                </div>
              </div>
              <button
                onClick={loadPageData}
                disabled={loading}
                className="flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-4 h-4 mr-1 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          </div>
        )}

        {/* Statistics Cards */}
        {renderStatsCards()}

        {/* Filters */}
        {renderFilters()}

        {/* Export Section */}
        {renderExportSection()}

        {/* Main Transaction History Component */}
        <div className={contentClassName}>
          <TransactionHistory
            showStats={false} // We show stats above instead
            showFilters={false} // We show filters above instead
            maxHeight="max-h-screen" // Allow full height since this is a dedicated page
            walletAddress={account?.address}
            className="min-h-96"
            storageService={historyService}
            onTransactionClick={onTransactionSelect}
            initialFilters={{
              status: statusFilter === 'all' ? undefined : statusFilter,
              type: typeFilter === 'all' ? undefined : typeFilter,
              searchQuery: searchQuery || undefined,
              timeRange: selectedTimeRange === 'all' ? undefined : selectedTimeRange
            }}
          />
        </div>

        {/* Recent Activity Summary */}
        {enableRecentActivity && recentTransactions.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => onTransactionSelect?.(tx)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{
                      tx.type === 'tip' ? '💰' : 
                      tx.type === 'approval' ? '✅' : 
                      tx.type === 'creator_registration' ? '👤' : '🎁'
                    }</span>
                    <div>
                      <div className="font-medium text-gray-900">{tx.title}</div>
                      <div className="text-sm text-gray-600">
                        {tx.amount} {tx.tokenSymbol} • {new Date(tx.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {tx.estimatedUsdValue && (
                      <span className="text-sm font-medium text-green-600">
                        {formatCurrency(tx.estimatedUsdValue)}
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tx.status === 'success' ? 'bg-green-100 text-green-800' :
                      tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State for New Users */}
        {stats && stats.totalTransactions === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Transaction History Yet</h3>
            <p className="text-gray-600 mb-6">
              Your transaction history will appear here once you start using TippingChain.
            </p>
            <div className="space-y-2 text-sm text-gray-500 mb-8">
              <p>• Send tips to creators across multiple blockchain networks</p>
              <p>• Approve tokens for seamless future transactions</p>
              <p>• Register as a creator to receive tips</p>
              <p>• Participate in viewer reward programs</p>
              <p>• All your activities will be tracked and displayed here</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => window.location.href = '/examples/'}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Tipping Now
              </button>
              <button
                onClick={loadPageData}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};