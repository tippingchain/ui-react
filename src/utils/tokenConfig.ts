/**
 * Multi-chain token configuration for TippingChain
 * Defines supported tokens across all chains with metadata
 */

export interface TokenConfig {
  symbol: string;
  name: string;
  decimals: number;
  address?: string; // undefined for native tokens
  icon: string; // emoji or icon identifier
  color: string; // color theme for UI
  isStable?: boolean; // for stablecoins
  popular?: boolean; // for highlighting popular tokens
}

export interface ChainTokens {
  chainId: number;
  chainName: string;
  native: TokenConfig;
  tokens: TokenConfig[];
}

// Native token configurations
export const NATIVE_TOKENS: Record<number, TokenConfig> = {
  1: { symbol: 'ETH', name: 'Ethereum', decimals: 18, icon: '💎', color: '#627EEA' },
  137: { symbol: 'MATIC', name: 'Polygon', decimals: 18, icon: '🟣', color: '#8247E5' },
  10: { symbol: 'ETH', name: 'Ethereum (Optimism)', decimals: 18, icon: '🔴', color: '#FF0420' },
  56: { symbol: 'BNB', name: 'BNB Chain', decimals: 18, icon: '🟨', color: '#F3BA2F' },
  2741: { symbol: 'ETH', name: 'Ethereum (Abstract)', decimals: 18, icon: '🌀', color: '#00D2FF' },
  43114: { symbol: 'AVAX', name: 'Avalanche', decimals: 18, icon: '🏔️', color: '#E84142' },
  8453: { symbol: 'ETH', name: 'Ethereum (Base)', decimals: 18, icon: '🔵', color: '#0052FF' },
  42161: { symbol: 'ETH', name: 'Ethereum (Arbitrum)', decimals: 18, icon: '🔷', color: '#28A0F0' },
  167000: { symbol: 'ETH', name: 'Ethereum (Taiko)', decimals: 18, icon: '🎌', color: '#FA4F00' },
  33139: { symbol: 'APE', name: 'ApeChain', decimals: 18, icon: '🐒', color: '#FFD700' },
  // Testnets
  17000: { symbol: 'ETH', name: 'Ethereum (Holesky)', decimals: 18, icon: '🧪', color: '#627EEA' },
  80002: { symbol: 'MATIC', name: 'Polygon (Amoy)', decimals: 18, icon: '🧪', color: '#8247E5' },
  33111: { symbol: 'APE', name: 'ApeChain (Curtis)', decimals: 18, icon: '🧪', color: '#FFD700' },
};

// Chain-specific token configurations
export const CHAIN_TOKENS: ChainTokens[] = [
  {
    chainId: 1, // Ethereum
    chainName: 'Ethereum',
    native: NATIVE_TOKENS[1],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0xA0b86a33E6045c56d65F4E7E7334E1d2b7aC9f15', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD', decimals: 6, address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', icon: '💚', color: '#26A17B', isStable: true, popular: true },
      { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18, address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 137, // Polygon
    chainName: 'Polygon',
    native: NATIVE_TOKENS[137],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin (PoS)', decimals: 6, address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD (PoS)', decimals: 6, address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', icon: '💚', color: '#26A17B', isStable: true, popular: true },
      { symbol: 'DAI', name: 'Dai Stablecoin (PoS)', decimals: 18, address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum (PoS)', decimals: 18, address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', icon: '🌊', color: '#627EEA' },
      { symbol: 'WMATIC', name: 'Wrapped Matic', decimals: 18, address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', icon: '🟣', color: '#8247E5' },
    ]
  },
  {
    chainId: 10, // Optimism
    chainName: 'Optimism',
    native: NATIVE_TOKENS[10],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD', decimals: 6, address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', icon: '💚', color: '#26A17B', isStable: true },
      { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18, address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0x4200000000000000000000000000000000000006', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 56, // BSC
    chainName: 'BNB Chain',
    native: NATIVE_TOKENS[56],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 18, address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD', decimals: 18, address: '0x55d398326f99059fF775485246999027B3197955', icon: '💚', color: '#26A17B', isStable: true, popular: true },
      { symbol: 'BUSD', name: 'Binance USD', decimals: 18, address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', icon: '🟨', color: '#F0B90B', isStable: true },
      { symbol: 'DAI', name: 'Dai Token', decimals: 18, address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WBNB', name: 'Wrapped BNB', decimals: 18, address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', icon: '🟨', color: '#F3BA2F' },
    ]
  },
  {
    chainId: 2741, // Abstract
    chainName: 'Abstract',
    native: NATIVE_TOKENS[2741],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x036CbD53842c5426634e7929541eC2318f3dCF7e', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0x4200000000000000000000000000000000000006', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 43114, // Avalanche
    chainName: 'Avalanche',
    native: NATIVE_TOKENS[43114],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD', decimals: 6, address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', icon: '💚', color: '#26A17B', isStable: true },
      { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18, address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WAVAX', name: 'Wrapped AVAX', decimals: 18, address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', icon: '🏔️', color: '#E84142', popular: true },
    ]
  },
  {
    chainId: 8453, // Base
    chainName: 'Base',
    native: NATIVE_TOKENS[8453],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'DAI', name: 'Dai', decimals: 18, address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0x4200000000000000000000000000000000000006', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 42161, // Arbitrum
    chainName: 'Arbitrum One',
    native: NATIVE_TOKENS[42161],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'USDT', name: 'Tether USD', decimals: 6, address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', icon: '💚', color: '#26A17B', isStable: true },
      { symbol: 'DAI', name: 'Dai Stablecoin', decimals: 18, address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', icon: '🟡', color: '#F5AC37', isStable: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 167000, // Taiko
    chainName: 'Taiko',
    native: NATIVE_TOKENS[167000],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x07d83526730c7438048D55A4fc0b850e14612bb1', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'WETH', name: 'Wrapped Ethereum', decimals: 18, address: '0xA51894664A773981C6C112C43ce576f315d5b1B6', icon: '🌊', color: '#627EEA', popular: true },
    ]
  },
  {
    chainId: 33139, // ApeChain (destination chain)
    chainName: 'ApeChain',
    native: NATIVE_TOKENS[33139],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin', decimals: 6, address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      { symbol: 'WAPE', name: 'Wrapped APE', decimals: 18, address: '0x48b62137EdfA95a428D35C09E44256a739F6B557', icon: '🐒', color: '#FFD700' },
    ]
  },
  // Testnets
  {
    chainId: 17000, // Holesky (Ethereum testnet)
    chainName: 'Ethereum Holesky',
    native: NATIVE_TOKENS[17000],
    tokens: [
      // USDC token on Holesky testnet - verified address
      { symbol: 'USDC', name: 'USD Coin (Holesky)', decimals: 6, address: '0x57978Bfe465ad9B1c0bf80f6C1539d300705EA50', icon: '💵', color: '#2775CA', isStable: true, popular: true },
    ]
  },
  {
    chainId: 80002, // Amoy (Polygon testnet)
    chainName: 'Polygon Amoy',
    native: NATIVE_TOKENS[80002],
    tokens: [
      { symbol: 'USDC', name: 'USD Coin (Test)', decimals: 6, address: '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582', icon: '🧪', color: '#2775CA', isStable: true },
    ]
  },
  {
    chainId: 33111, // Curtis (ApeChain testnet)
    chainName: 'ApeChain Curtis',
    native: NATIVE_TOKENS[33111],
    tokens: [
      // USDC token on Curtis testnet - verified address
      { symbol: 'USDC', name: 'USD Coin (Curtis)', decimals: 6, address: '0xE0356B8aD7811dC3e4d61cFD6ac7653e0D31b096', icon: '💵', color: '#2775CA', isStable: true, popular: true },
      
      // ApeCoin ERC-20 token on Curtis testnet
      { symbol: 'APE', name: 'ApeCoin (Curtis)', decimals: 18, address: '0xE0C1FBc6655e15eB5D6cED91a002694df4024c3F', icon: '🐒', color: '#FFD700', popular: true },
    ]
  },
];

/**
 * Get all tokens (including native) for a specific chain
 */
export const getAllTokensForChain = (chainId: number): TokenConfig[] => {
  const chainConfig = CHAIN_TOKENS.find(chain => chain.chainId === chainId);
  if (!chainConfig) {
    return [];
  }
  
  return [chainConfig.native, ...chainConfig.tokens];
};

/**
 * Get only ERC20 tokens for a specific chain (excluding native)
 */
export const getTokensForChain = (chainId: number): TokenConfig[] => {
  const chainConfig = CHAIN_TOKENS.find(chain => chain.chainId === chainId);
  return chainConfig ? chainConfig.tokens : [];
};

/**
 * Get native token for a specific chain
 */
export const getNativeToken = (chainId: number): TokenConfig | null => {
  const chainConfig = CHAIN_TOKENS.find(chain => chain.chainId === chainId);
  return chainConfig ? chainConfig.native : null;
};

/**
 * Check if a token is the native token for the chain
 */
export const isNativeToken = (token: TokenConfig): boolean => {
  return !token.address;
};

/**
 * Format token amount for display
 */
export const formatTokenAmount = (amount: string, decimals: number): string => {
  const num = parseFloat(amount);
  if (num === 0) return '0';
  
  // For amounts less than 0.001, show more decimal places
  if (num < 0.001) {
    return num.toFixed(6);
  }
  
  // For stablecoins (6 decimals), show 2 decimal places
  if (decimals === 6) {
    return num.toFixed(2);
  }
  
  // For other tokens, show 4 decimal places
  return num.toFixed(4);
};

/**
 * Get chain name from chain ID
 */
export const getChainNameFromId = (chainId: number): string => {
  const chainConfig = CHAIN_TOKENS.find(chain => chain.chainId === chainId);
  return chainConfig ? chainConfig.chainName : `Chain ${chainId}`;
};

/**
 * Find token by symbol and chain
 */
export const findTokenBySymbol = (chainId: number, symbol: string): TokenConfig | null => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.find(token => token.symbol === symbol) || null;
};

/**
 * Get popular tokens for a chain
 */
export const getPopularTokens = (chainId: number): TokenConfig[] => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.filter(token => token.popular);
};

/**
 * Get stablecoins for a chain
 */
export const getStablecoins = (chainId: number): TokenConfig[] => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.filter(token => token.isStable);
};