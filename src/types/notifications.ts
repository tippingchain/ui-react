// src/types/notifications.ts

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'pending';
  title: string;
  message?: string;
  transactionHash?: string;
  chainId?: number;
  duration?: number; // Auto-dismiss after this many milliseconds (0 = no auto-dismiss)
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => string;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  updateNotification: (id: string, updates: Partial<Notification>) => void;
}

export interface NotificationProviderProps {
  children: React.ReactNode;
  maxNotifications?: number;
  defaultPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  className?: string;
}

export interface NotificationToastProps {
  notification: Notification;
  onRemove: (id: string) => void;
  position?: NotificationProviderProps['defaultPosition'];
  getExplorerUrl?: (chainId: number, txHash: string) => string | null;
}

// Chain Explorer URL mapping
export interface ChainExplorerUrls {
  [chainId: number]: {
    name: string;
    baseUrl: string;
    txPath: string;
  };
}

// Transaction notification helpers
export interface TransactionNotificationOptions {
  tokenSymbol: string;
  tokenAddress?: string;
  spenderAddress?: string;
  amount?: string;
  chainId: number;
  transactionHash?: string;
  creatorId?: number;
  creatorWallet?: string;
  membershipTier?: number;
  estimatedUsdValue?: string;
  platformFee?: string;
}

export type NotificationHelpers = {
  // Approval notifications
  notifyApprovalPending: (options: TransactionNotificationOptions) => Promise<string>;
  notifyApprovalSuccess: (tokenSymbol: string, transactionHash?: string, chainId?: number) => string;
  notifyApprovalError: (tokenSymbol: string, error: string) => string;
  
  // Tip notifications  
  notifyTipPending: (options: TransactionNotificationOptions) => Promise<string>;
  notifyTipSuccess: (
    amount: string,
    tokenSymbol: string,
    creatorId: number,
    estimatedUsdc?: string,
    transactionHash?: string,
    chainId?: number
  ) => string;
  notifyTipError: (amount: string, tokenSymbol: string, creatorId: number, error: string) => string;
  
  // Creator management notifications
  notifyCreatorAdded: (
    creatorId: number,
    wallet: string,
    membershipTier: number,
    chainId: number,
    transactionHash?: string
  ) => Promise<string>;
  notifyCreatorError: (error: string) => string;
  
  // General notifications
  notifyBalanceRefresh: () => string;
  notifyNetworkSwitch: (networkName: string) => string;
  
  // Update existing notifications
  updateNotificationStatus: (
    notificationId: string,
    type: 'success' | 'error',
    title: string,
    message?: string,
    transactionHash?: string
  ) => void;
};