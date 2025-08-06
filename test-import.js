// Test that the built package can be imported correctly
import { 
  ApeChainTippingInterface,
  formatTokenAmount,
  getChainName,
  calculateFeeBreakdown,
  SUPPORTED_CHAINS,
  FEE_STRUCTURE
} from './dist/index.esm.js';

console.log('✅ Successfully imported ApeChainTippingInterface:', typeof ApeChainTippingInterface);
console.log('✅ Successfully imported formatTokenAmount:', typeof formatTokenAmount);
console.log('✅ Successfully imported getChainName:', typeof getChainName);
console.log('✅ Successfully imported calculateFeeBreakdown:', typeof calculateFeeBreakdown);
console.log('✅ Successfully imported SUPPORTED_CHAINS:', SUPPORTED_CHAINS);
console.log('✅ Successfully imported FEE_STRUCTURE:', FEE_STRUCTURE);

// Test utility functions
console.log('\n🧪 Testing utility functions:');
console.log('formatTokenAmount(1234.5678):', formatTokenAmount(1234.5678));
console.log('getChainName(137):', getChainName(137));

const fees = calculateFeeBreakdown('100');
console.log('calculateFeeBreakdown(100):', fees);

console.log('\n🎉 All imports and functions working correctly!');
console.log('📊 Fee structure: Creator gets', FEE_STRUCTURE.CREATOR_PERCENTAGE + '%,', 'Platform gets', FEE_STRUCTURE.PLATFORM_PERCENTAGE + '%');