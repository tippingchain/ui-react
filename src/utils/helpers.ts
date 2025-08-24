import type { ChainInfo, FeeBreakdown } from '../types';

/**
 * Format token amount for display
 */
export function formatTokenAmount(amount: string | number, decimals: number = 4): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return '0';
  
  if (num < 0.0001) return '< 0.0001';
  if (num < 1) return num.toFixed(decimals);
  if (num < 1000) return num.toFixed(2);
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`;
  return `${(num / 1000000).toFixed(1)}M`;
}

/**
 * Get chain name from chain ID  
 */
export function getChainName(chainId: number): string {
  const chainMap: Record<number, ChainInfo> = {
    // Mainnet chains
    1: { id: 1, name: 'Ethereum', nativeCurrency: 'ETH' },
    137: { id: 137, name: 'Polygon', nativeCurrency: 'MATIC' },
    10: { id: 10, name: 'Optimism', nativeCurrency: 'ETH' },
    56: { id: 56, name: 'BSC', nativeCurrency: 'BNB' },
    2741: { id: 2741, name: 'Abstract', nativeCurrency: 'ETH' },
    43114: { id: 43114, name: 'Avalanche', nativeCurrency: 'AVAX' },
    8453: { id: 8453, name: 'Base', nativeCurrency: 'ETH' },
    42161: { id: 42161, name: 'Arbitrum', nativeCurrency: 'ETH' },
    167000: { id: 167000, name: 'Taiko', nativeCurrency: 'ETH' },
    33139: { id: 33139, name: 'ApeChain', nativeCurrency: 'APE' },
    // Testnet chains
    17000: { id: 17000, name: 'Ethereum Holesky', nativeCurrency: 'ETH' },
    80002: { id: 80002, name: 'Polygon Amoy', nativeCurrency: 'MATIC' },
    33111: { id: 33111, name: 'ApeChain Curtis', nativeCurrency: 'APE' },
  };
  
  return chainMap[chainId]?.name || 'Unknown';
}

/**
 * Get native currency symbol for chain
 */
export function getNativeCurrency(chainId: number): string {
  const chainMap: Record<number, ChainInfo> = {
    // Mainnet chains
    1: { id: 1, name: 'Ethereum', nativeCurrency: 'ETH' },
    137: { id: 137, name: 'Polygon', nativeCurrency: 'MATIC' },
    10: { id: 10, name: 'Optimism', nativeCurrency: 'ETH' },
    56: { id: 56, name: 'BSC', nativeCurrency: 'BNB' },
    2741: { id: 2741, name: 'Abstract', nativeCurrency: 'ETH' },
    43114: { id: 43114, name: 'Avalanche', nativeCurrency: 'AVAX' },
    8453: { id: 8453, name: 'Base', nativeCurrency: 'ETH' },
    42161: { id: 42161, name: 'Arbitrum', nativeCurrency: 'ETH' },
    167000: { id: 167000, name: 'Taiko', nativeCurrency: 'ETH' },
    33139: { id: 33139, name: 'ApeChain', nativeCurrency: 'APE' },
    // Testnet chains  
    17000: { id: 17000, name: 'Ethereum Holesky', nativeCurrency: 'ETH' },
    80002: { id: 80002, name: 'Polygon Amoy', nativeCurrency: 'MATIC' },
    33111: { id: 33111, name: 'ApeChain Curtis', nativeCurrency: 'APE' },
  };
  
  return chainMap[chainId]?.nativeCurrency || 'TOKEN';
}

/**
 * Calculate fee breakdown for creator tips (dynamic tier-based)
 * @param totalAmount Total tip amount
 * @param creatorTier Creator's membership tier (0-3, defaults to TIER_1)
 */
export function calculateFeeBreakdown(totalAmount: string, creatorTier: number = 0): FeeBreakdown {
  const total = parseFloat(totalAmount);
  if (isNaN(total)) {
    return {
      creatorAmount: '0',
      platformAmount: '0',
      totalAmount: '0',
      creatorPercentage: 60, // Default Tier 1
      platformPercentage: 5,
    };
  }

  // Platform always takes 5%
  const platformAmount = total * 0.05;
  const remaining = total * 0.95;
  
  // Creator/business split depends on tier:
  // Tier 1 (0): 60/40, Tier 2 (1): 70/30, Tier 3 (2): 80/20, Tier 4 (3): 90/10
  const creatorPercentages = [60, 70, 80, 90];
  const creatorPercent = creatorPercentages[creatorTier] || 60;
  const creatorAmount = remaining * (creatorPercent / 100);

  return {
    creatorAmount: creatorAmount.toString(),
    platformAmount: platformAmount.toString(),
    totalAmount: total.toString(),
    creatorPercentage: creatorPercent,
    platformPercentage: 5,
  };
}

/**
 * Calculate viewer reward fee breakdown (1% platform fee)
 */
export function calculateViewerRewardFees(totalAmount: string): { viewerAmount: string; platformFee: string } {
  const total = parseFloat(totalAmount);
  if (isNaN(total)) {
    return { viewerAmount: '0', platformFee: '0' };
  }
  
  const platformFee = total * 0.01; // 1% platform fee
  const viewerAmount = total * 0.99;
  
  return {
    viewerAmount: viewerAmount.toString(),
    platformFee: platformFee.toString()
  };
}

/**
 * Debounce function for quote requests
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined;
  
  return (...args: Parameters<T>) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Validate Ethereum address
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Truncate address for display
 */
export function truncateAddress(address: string, chars: number = 4): string {
  if (!isValidAddress(address)) return address;
  return `${address.slice(0, 2 + chars)}...${address.slice(-chars)}`;
}

/**
 * Get token options for a specific chain
 */
export function getTokenOptions(chainId: number) {
  const commonTokens = {
    // Mainnet chains
    1: [ // Ethereum
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6 },
      { symbol: 'USDT', name: 'Tether', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 },
    ],
    137: [ // Polygon
      { symbol: 'MATIC', name: 'Polygon', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', decimals: 6 },
      { symbol: 'USDT', name: 'Tether', address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', decimals: 6 },
    ],
    10: [ // Optimism
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', decimals: 6 },
      { symbol: 'USDT', name: 'Tether', address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', decimals: 6 },
    ],
    56: [ // BSC
      { symbol: 'BNB', name: 'BNB', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', decimals: 18 },
      { symbol: 'USDT', name: 'Tether', address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18 },
    ],
    2741: [ // Abstract
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
    ],
    43114: [ // Avalanche
      { symbol: 'AVAX', name: 'Avalanche', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', decimals: 6 },
    ],
    8453: [ // Base
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', decimals: 6 },
    ],
    42161: [ // Arbitrum
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', decimals: 6 },
    ],
    167000: [ // Taiko
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
    ],
    33139: [ // ApeChain
      { symbol: 'APE', name: 'ApeCoin', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin', address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', decimals: 6 },
    ],
    // Testnet chains
    17000: [ // Ethereum Holesky
      { symbol: 'ETH', name: 'Ethereum', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin (Holesky)', address: '0x57978Bfe465ad9B1c0bf80f6C1539d300705EA50', decimals: 6 },
    ],
    80002: [ // Polygon Amoy
      { symbol: 'MATIC', name: 'Polygon', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin (Test)', address: '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582', decimals: 6 },
    ],
    33111: [ // ApeChain Curtis
      { symbol: 'APE', name: 'ApeCoin', decimals: 18 },
      { symbol: 'USDC', name: 'USD Coin (Curtis)', address: '0xE0356B8aD7811dC3e4d61cFD6ac7653e0D31b096', decimals: 6 },
    ],
  };

  return commonTokens[chainId as keyof typeof commonTokens] || [
    { symbol: 'TOKEN', name: 'Native Token', decimals: 18 }
  ];
}