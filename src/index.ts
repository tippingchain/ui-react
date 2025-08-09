// Main component exports
export { ApeChainTippingInterface } from './components/ApeChainTippingInterface';
export { CreatorSelector } from './components/CreatorSelector';
export { CreatorManagement } from './components/CreatorManagement';

// Viewer Reward component exports
export { ViewerRewardInterface } from './components/ViewerRewardInterface';
export { BatchViewerReward } from './components/BatchViewerReward';
export { ViewerRewardStats } from './components/ViewerRewardStats';
export { ViewerSelector } from './components/ViewerSelector';
export { RewardPoolInterface } from './components/viewer-rewards';

// Transaction History component exports
export { TransactionHistory } from './components/TransactionHistory';

// Creator Analytics Dashboard component exports
export { 
  CreatorAnalyticsDashboard,
  type CreatorAnalyticsData,
  type PlatformAnalyticsData,
  type CreatorAnalyticsDashboardProps
} from './components/CreatorAnalyticsDashboard';

// Notification system exports
export { 
  NotificationProvider, 
  useNotifications, 
  NotificationToast,
  useTransactionNotifications 
} from './components/notifications';

// Real-time component exports
export {
  LiveBalanceDisplay,
  MultiTokenBalanceDisplay,
  RelayProgressIndicator,
  RelayStatusBadge,
  type LiveBalanceDisplayProps,
  type MultiTokenBalanceDisplayProps,
  type RelayProgressIndicatorProps,
  type RelayStatusBadgeProps
} from './components/realtime';

// Real-time hook exports
export {
  useTransactionMonitor,
  useBalanceWatcher,
  useRelayProgress,
  type TransactionMonitorState,
  type UseTransactionMonitorOptions,
  type BalanceWatcherState,
  type UseBalanceWatcherOptions,
  type RelayProgressState,
  type UseRelayProgressOptions
} from './hooks';

// Type exports
export type {
  ApeChainTippingProps,
  CreatorSelectorProps,
  CreatorManagementProps,
  TipState,
  RelayQuote,
  ChainInfo,
  TokenOption,
  FeeBreakdown,
} from './types';

// Notification types
export type {
  Notification,
  NotificationContextType,
  NotificationProviderProps,
  NotificationToastProps,
  TransactionNotificationOptions,
  NotificationHelpers,
} from './types/notifications';

// Transaction History types
export type {
  TransactionHistoryItem,
  TransactionFilters,
  TransactionStats,
  TransactionHistoryStorage,
  TransactionHistoryProps,
  TransactionStatsProps,
  TransactionFilterProps,
  TransactionExportProps,
  TransactionBuilder,
} from './types/transactionHistory';

// Utility exports
export {
  formatTokenAmount,
  getChainName,
  getNativeCurrency,
  calculateFeeBreakdown,
  calculateViewerRewardFees,
  debounce,
  isValidAddress,
  truncateAddress,
  getTokenOptions,
} from './utils/helpers';

// Transaction History utilities
export {
  LocalTransactionHistoryService,
  createTransactionHistoryService,
  transactionBuilder,
} from './utils/transactionHistoryService';

// Common component exports
export { ChainSelector, TransactionStatusMessage, Button } from './components/common';

// Constants  
export const UI_VERSION = '2.3.0';

// NOTE: Fee structure is now dynamic based on creator tiers
// Use CONTRACT_CONSTANTS from @tippingchain/contracts-interface for current values
export const FEE_STRUCTURE = {
  PLATFORM_PERCENTAGE: 5, // Platform always takes 5% for tips
  VIEWER_REWARD_PLATFORM_PERCENTAGE: 1, // Platform takes 1% for viewer rewards
  // Creator/business split depends on creator's membership tier (60/40, 70/30, 80/20, 90/10)
} as const;