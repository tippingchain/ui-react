// Jest setup file for UI package
import '@testing-library/jest-dom';

// Mock thirdweb
jest.mock('thirdweb/react', () => ({
  ConnectButton: jest.fn(() => null),
  useActiveAccount: jest.fn(() => null),
  useSendTransaction: jest.fn(() => ({ mutate: jest.fn(), isPending: false })),
  useActiveWalletChain: jest.fn(() => ({ id: 137, name: 'Polygon' })),
}));

// Mock SDK
jest.mock('@tippingchain/sdk', () => ({
  ApeChainTippingSDK: jest.fn(),
  ApeChainRelayService: jest.fn(),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Coins: () => null,
  ArrowRight: () => null,
  Target: () => null,
}));

// Global test utilities
global.fetch = jest.fn();

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});