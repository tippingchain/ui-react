import type { ApeChainTippingSDK, Creator, TipResult } from '@tippingchain/sdk';
import type { ThirdwebClient } from 'thirdweb';

export interface ApeChainTippingProps {
  creatorId: number; // NEW: Use creator ID instead of addresses
  streamId?: string; // Optional stream ID
  sdkConfig: {
    client: ThirdwebClient;
    sdk: ApeChainTippingSDK;
  };
  className?: string;
  theme?: 'light' | 'dark';
  showCreatorInfo?: boolean; // Show creator info in UI
  onTipSuccess?: (result: TipResult) => void; // Callback for successful tip
  onTipError?: (error: string) => void; // Callback for tip error
}

// NEW: Creator search/selection component props
export interface CreatorSelectorProps {
  sdkConfig: {
    client: ThirdwebClient;
    sdk: ApeChainTippingSDK;
  };
  chainId: number;
  onCreatorSelect: (creator: Creator) => void;
  selectedCreatorId?: number;
  className?: string;
}

// NEW: Creator management component props
export interface CreatorManagementProps {
  sdkConfig: {
    client: ThirdwebClient;
    sdk: ApeChainTippingSDK;
  };
  chainId: number;
  onCreatorAdded?: (creatorId: number) => void;
  className?: string;
}

export interface TipState {
  amount: string;
  selectedToken: string;
  isLoadingQuote: boolean;
  relayQuote: RelayQuote | null;
}

export interface RelayQuote {
  estimatedUsdc: string;
  fees: string;
  estimatedTime: number;
  fromToken: string;
  toToken: string;
  route?: unknown;
}

export interface ChainInfo {
  id: number;
  name: string;
  nativeCurrency: string;
}

export interface TokenOption {
  symbol: string;
  name: string;
  address?: string;
  decimals: number;
}

export interface FeeBreakdown {
  creatorAmount: string;
  platformAmount: string;
  totalAmount: string;
  creatorPercentage: number;
  platformPercentage: number;
}