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

// Common component exports
export { ChainSelector, TransactionStatusMessage, Button } from './components/common';

// Constants
export const UI_VERSION = '2.0.0';

// NOTE: Fee structure is now dynamic based on creator tiers
// Use CONTRACT_CONSTANTS from @tippingchain/contracts-interface for current values
export const FEE_STRUCTURE = {
  PLATFORM_PERCENTAGE: 5, // Platform always takes 5% for tips
  VIEWER_REWARD_PLATFORM_PERCENTAGE: 1, // Platform takes 1% for viewer rewards
  // Creator/business split depends on creator's membership tier (60/40, 70/30, 80/20, 90/10)
} as const;