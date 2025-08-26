// packages/ui-react/src/components/MultiTokenTippingInterface.tsx
import React, { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { 
  Coins, 
  ArrowRight, 
  Target, 
  AlertCircle, 
  CheckCircle, 
  Loader2,
  Wallet,
  ExternalLink
} from 'lucide-react';
import { 
  getAllTokensForChain, 
  formatTokenAmount, 
  isNativeToken,
  TokenConfig 
} from '../utils/tokenConfig';
import type { ApeChainTippingSDK, TipParams, TipResult } from '@tippingchain/sdk';
import { getContractAddress } from '@tippingchain/sdk';
import { useTransactionNotifications } from './notifications';

export interface MultiTokenTippingInterfaceProps {
  creatorId: number;
  client: any;
  sdk: ApeChainTippingSDK;
  onTipSuccess?: (result: TipResult) => void;
  onTipError?: (error: string) => void;
  className?: string;
}

enum ApprovalState {
  NONE = 'none',
  NEEDED = 'needed',
  PENDING = 'pending',
  APPROVED = 'approved'
}

export const MultiTokenTippingInterface: React.FC<MultiTokenTippingInterfaceProps> = ({
  creatorId,
  client,
  sdk,
  onTipSuccess,
  onTipError,
  className = ''
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const {
    notifyApprovalPending,
    notifyApprovalSuccess,
    notifyApprovalError,
    notifyTipPending,
    notifyTipSuccess,
    notifyTipError,
    notifyBalanceRefresh,
    updateNotificationStatus
  } = useTransactionNotifications();
  
  const [selectedToken, setSelectedToken] = useState<TokenConfig | null>(null);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [approvalState, setApprovalState] = useState<ApprovalState>(ApprovalState.NONE);
  const [conversionQuote, setConversionQuote] = useState<any>(null);
  const [feePreviewLoading, setFeePreviewLoading] = useState<boolean>(false);
  const [balanceWarning, setBalanceWarning] = useState<string>('');
  const [userBalance, setUserBalance] = useState<string>('0');
  const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
  const [tokenBalances, setTokenBalances] = useState<Record<string, string>>({});
  const [inputMode, setInputMode] = useState<'token' | 'usd'>('token');
  const [usdAmount, setUsdAmount] = useState('');
  const [tokenPrice, setTokenPrice] = useState<number>(0);
  
  const chainTokens = activeChain ? getAllTokensForChain(activeChain.id) : [];
  

  // Load all token balances for the current chain
  const loadTokenBalances = async (showNotification = false) => {
    if (!account?.address || !activeChain || chainTokens.length === 0) {
      setTokenBalances({});
      return;
    }

    setLoadingBalance(true);
    try {
      // Get token addresses for balance checking
      const tokenAddresses = chainTokens.map(token => token.address || 'native');
            
      // Load all balances in parallel using the new SDK method
      const balances = await sdk.getMultipleTokenBalances(account.address, tokenAddresses, activeChain.id);
      
      // Map balances to token symbols for easier lookup
      const balancesBySymbol: Record<string, string> = {};
      chainTokens.forEach((token, index) => {
        const tokenAddress = tokenAddresses[index];
        balancesBySymbol[token.symbol] = balances[tokenAddress] || '0';
      });
      
      setTokenBalances(balancesBySymbol);
      
      // Update the selected token balance
      if (selectedToken) {
        setUserBalance(balancesBySymbol[selectedToken.symbol] || '0');
      }
      
      // Show notification if it's a manual refresh
      if (showNotification) {
        notifyBalanceRefresh();
      }
      
    } catch (error) {
      console.error('Failed to load token balances:', error);
      // Set all balances to 0 on error
      const emptyBalances: Record<string, string> = {};
      chainTokens.forEach(token => {
        emptyBalances[token.symbol] = '0';
      });
      setTokenBalances(emptyBalances);
      setUserBalance('0');
    } finally {
      setLoadingBalance(false);
    }
  };

  // Set default token (native) when chain changes
  useEffect(() => {
    if (chainTokens.length > 0 && !selectedToken) {
      setSelectedToken(chainTokens[0]); // First token is always native
    }
  }, [chainTokens, selectedToken]);

  // Load all token balances when account or chain changes
  useEffect(() => {
    loadTokenBalances();
  }, [account?.address, activeChain?.id, chainTokens.length]);

  // Update selected token balance when token selection changes
  useEffect(() => {
    if (selectedToken && tokenBalances[selectedToken.symbol]) {
      setUserBalance(tokenBalances[selectedToken.symbol]);
    }
  }, [selectedToken, tokenBalances]);

  // Check balance and approval when token/amount changes
  useEffect(() => {
    if (!selectedToken || !amount || !account) {
      setBalanceWarning('');
      setApprovalState(ApprovalState.NONE);
      return;
    }

    const amountNum = parseFloat(amount);
    const balanceNum = parseFloat(userBalance) / Math.pow(10, selectedToken.decimals || 18);
    
    // Check balance
    if (amountNum > balanceNum) {
      setBalanceWarning(`Insufficient ${selectedToken.symbol} balance. You have ${formatTokenAmount(balanceNum, 4)}`);
    } else {
      setBalanceWarning('');
    }

    // Check if approval is needed for ERC20 tokens
    if (selectedToken.address && activeChain) { // ERC20 token
      // Real approval check using SDK
      const checkApproval = async () => {
        try {
          const contractAddress = getContractAddress(activeChain.id);
          if (!contractAddress) {
            setApprovalState(ApprovalState.NONE);
            return;
          }

          const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
          const needsApproval = await sdk.needsApproval(
            selectedToken.address,
            account.address,
            contractAddress,
            amountInWei,
            activeChain.id
          );
          
          setApprovalState(needsApproval ? ApprovalState.NEEDED : ApprovalState.APPROVED);
        } catch (error) {
          console.error('Failed to check approval:', error);
          // Default to needing approval on error
          setApprovalState(ApprovalState.NEEDED);
        }
      };
      
      checkApproval();
    } else { // Native token
      setApprovalState(ApprovalState.NONE);
    }
  }, [selectedToken, amount, userBalance, account]);

  // Get real fee preview using SDK
  useEffect(() => {
    if (!amount || !selectedToken || !activeChain || creatorId <= 0) {
      setConversionQuote(null);
      return;
    }

    const getRealFeePreview = async () => {
      setFeePreviewLoading(true);
      try {
        const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
        
        // Get real tip splits from SDK
        const tipSplits = await sdk.calculateTipSplits(creatorId, amountInWei, activeChain.id);
        
        // Convert wei amounts back to readable format
        const platformFeeEth = parseFloat(tipSplits.platformFee) / Math.pow(10, selectedToken.decimals || 18);
        const creatorAmountEth = parseFloat(tipSplits.creatorAmount) / Math.pow(10, selectedToken.decimals || 18);
        const businessAmountEth = parseFloat(tipSplits.businessAmount) / Math.pow(10, selectedToken.decimals || 18);
        
        // Get current token price (using the same rates)
        const rates: Record<string, number> = {
          'ETH': 2400, 'MATIC': 0.85, 'BNB': 320, 'AVAX': 35, 'APE': 1.2,
          'USDC': 1, 'USDT': 1, 'DAI': 1, 'BUSD': 1
        };
        setTokenPrice(rates[selectedToken.symbol] || 1);
        const usdRate = rates[selectedToken.symbol] || 1;
        const totalUsdValue = parseFloat(amount) * usdRate;
        const estimatedUsdc = totalUsdValue * 0.98; // Rough estimate after relay fees
        
        setConversionQuote({
          inputAmount: parseFloat(amount),
          inputToken: selectedToken.symbol,
          usdValue: totalUsdValue,
          platformFee: platformFeeEth * usdRate,
          creatorShare: creatorAmountEth * usdRate,
          businessShare: businessAmountEth * usdRate,
          estimatedUsdc: estimatedUsdc,
          relayFee: totalUsdValue * 0.02,
          // Add raw amounts for display
          platformFeeRaw: platformFeeEth,
          creatorShareRaw: creatorAmountEth,
          businessShareRaw: businessAmountEth,
          isReal: true
        });
      } catch (error) {
        console.error('Real fee calculation failed:', error);
        // Fallback to basic calculation if SDK call fails
        const amountNum = parseFloat(amount);
        const estimatedUsd = amountNum * (selectedToken.symbol === 'USDC' ? 1 : 2000);
        const platformFee = estimatedUsd * 0.05;
        
        setConversionQuote({
          inputAmount: amountNum,
          inputToken: selectedToken.symbol,
          usdValue: estimatedUsd,
          platformFee: platformFee,
          creatorShare: (estimatedUsd - platformFee) * 0.7, // Fallback assumption
          businessShare: (estimatedUsd - platformFee) * 0.3,
          estimatedUsdc: estimatedUsd * 0.98,
          relayFee: estimatedUsd * 0.02,
          error: 'Using estimated fees - unable to fetch real splits',
          isReal: false
        });
      } finally {
        setFeePreviewLoading(false);
      }
    };

    const debounceTimer = setTimeout(getRealFeePreview, 500);
    return () => clearTimeout(debounceTimer);
  }, [amount, selectedToken, activeChain, creatorId, sdk]);

  const handleApprove = async () => {
    if (!selectedToken?.address || !amount || !activeChain || !account) return;
    
    setApprovalState(ApprovalState.PENDING);
    setIsLoading(true);
    
    try {
      // Get the contract address for the current chain
      const contractAddress = getContractAddress(activeChain.id);
      if (!contractAddress) {
        throw new Error('Contract not deployed on this chain');
      }

      // Convert amount to wei for approval
      const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
      
      // Show pending notification with simple parameters
      const pendingNotificationId = await notifyApprovalPending({
        tokenSymbol: selectedToken.symbol,
        tokenAddress: selectedToken.address,
        spenderAddress: contractAddress,
        amount: amountInWei,
        chainId: activeChain.id,
      });
      
      // Execute real approval transaction via SDK
      const result = await sdk.approveToken(
        selectedToken.address,
        contractAddress,
        amountInWei,
        activeChain.id
      );
      
      if (result.success) {
        setApprovalState(ApprovalState.APPROVED);
        
        // Update pending notification to success
        updateNotificationStatus(
          pendingNotificationId,
          'success',
          'Token Approved Successfully! ✅',
          `${selectedToken.symbol} is now approved for spending`,
          result.transactionHash
        );
        
        // Also show success via traditional callback if provided
        onTipSuccess?.({ 
          success: true, 
          sourceTransactionHash: result.transactionHash,
          creatorId: creatorId,
          estimatedUsdcAmount: '0' 
        } as TipResult);
      } else {
        throw new Error(result.error || 'Approval transaction failed');
      }
      
    } catch (error) {
      console.error('Approval failed:', error);
      setApprovalState(ApprovalState.NEEDED);
      const errorMessage = error instanceof Error ? error.message : 'Token approval failed';
      
      // Update pending notification to error
      updateNotificationStatus(
        'pendingNotificationId',
        'error',
        'Token Approval Failed',
        errorMessage
      );
      
      // Also notify via traditional callback if provided
      onTipError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTip = async () => {
    if (!selectedToken || !amount || !account || !activeChain) return;
    
    setIsLoading(true);
    
    // Show pending notification  
    const pendingNotificationId = await notifyTipPending({
      tokenSymbol: selectedToken.symbol,
      tokenAddress: selectedToken.address,
      amount: amount,
      chainId: activeChain.id,
      creatorId: creatorId,
      creatorWallet: '', // We don't have this readily available
    });
    
    try {
      // Prepare tip parameters - convert amount to wei
      const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
      const tipParams: TipParams = {
        sourceChainId: activeChain.id,
        creatorId: creatorId,
        token: selectedToken.address || 'native', // 'native' for ETH/native tokens
        amount: amountInWei // Amount in wei for contract compatibility
      };
      
      // Send the tip via SDK
      const result = await sdk.sendTip(tipParams);
      
      if (result.success) {
        // Update pending notification to success
        updateNotificationStatus(
          pendingNotificationId,
          'success',
          'Tip Sent Successfully! 🎉',
          `${amount} ${selectedToken.symbol} sent to Creator #${creatorId}${result.estimatedUsdcAmount ? `. Estimated USDC: ~$${result.estimatedUsdcAmount}` : ''}`,
          result.sourceTransactionHash
        );
        
        // Traditional callback
        onTipSuccess?.(result);
        
        // Reset form
        setAmount('');
        setConversionQuote(null);
        setApprovalState(ApprovalState.NONE);
        
        // Refresh balances after successful tip
        loadTokenBalances();
      } else {
        throw new Error(result.error || 'Tip transaction failed');
      }
      
    } catch (error) {
      console.error('Tip failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Transaction failed or was rejected';
      
      // Update pending notification to error
      updateNotificationStatus(
        pendingNotificationId,
        'error',
        'Tip Transaction Failed',
        `Failed to send ${amount} ${selectedToken.symbol} to Creator #${creatorId}: ${errorMessage}`
      );
      
      // Traditional callback
      onTipError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const canTip = selectedToken && 
    amount && 
    !balanceWarning && 
    !isLoading &&
    (approvalState === ApprovalState.NONE || approvalState === ApprovalState.APPROVED);

  if (!chainTokens.length) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`}>
        <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
        <p className="text-red-700">Unsupported chain. Please switch to a supported network.</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto ${className}`}>
      <div className="flex items-center mb-4">
        <Target className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">
          Multi-Token → ApeChain
        </h3>
      </div>

      {/* Creator Info */}
      <div className="bg-white rounded-lg p-4 mb-4 border">
        <div className="font-medium text-gray-800">Creator ID #{creatorId}</div>
      </div>

      {/* Token Selection */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Token
            </label>
            <button
              onClick={() => loadTokenBalances(true)}
              disabled={loadingBalance}
              className="text-xs text-blue-600 hover:text-blue-800 disabled:text-gray-400 flex items-center"
              title="Refresh balances"
            >
              <svg className={`w-3 h-3 mr-1 ${loadingBalance ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
            {chainTokens.map((token) => {
              const rawBalance = tokenBalances[token.symbol] || '0';
              const balance = parseFloat(rawBalance) / Math.pow(10, token.decimals);
              const isSelected = selectedToken?.symbol === token.symbol;
              
              return (
                <button
                  key={token.symbol}
                  onClick={() => setSelectedToken(token)}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{token.icon}</span>
                        <span className="font-medium">{token.symbol}</span>
                      </div>
                      <div className="text-xs text-gray-500">{token.name}</div>
                    </div>
                    {isSelected && <CheckCircle className="w-4 h-4 text-blue-500" />}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    <Wallet className="w-3 h-3 inline mr-1" />
                    {loadingBalance ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      formatTokenAmount(balance.toString(), token.decimals)
                    )}
                  </div>
                  {token.isStable && (
                    <div className="text-xs text-green-600 font-medium mt-1">
                      Stablecoin
                    </div>
                  )}
                  {token.popular && (
                    <div className="text-xs text-orange-600 font-medium mt-1">
                      Popular
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Amount Input with USD/Token Toggle */}
        {selectedToken && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Amount to tip
              </label>
              <div className="flex items-center bg-gray-100 rounded-md p-1">
                <button
                  onClick={() => {
                    setInputMode('token');
                    if (usdAmount && tokenPrice > 0) {
                      setAmount((parseFloat(usdAmount) / tokenPrice).toFixed(6));
                    }
                  }}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    inputMode === 'token'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {selectedToken.symbol}
                </button>
                <button
                  onClick={() => {
                    setInputMode('usd');
                    if (amount && tokenPrice > 0) {
                      setUsdAmount((parseFloat(amount) * tokenPrice).toFixed(2));
                    }
                  }}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    inputMode === 'usd'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
            <div className="relative">
              {inputMode === 'token' ? (
                <>
                  <input
                    type="number"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      if (e.target.value && tokenPrice > 0) {
                        setUsdAmount((parseFloat(e.target.value) * tokenPrice).toFixed(2));
                      } else {
                        setUsdAmount('');
                      }
                    }}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      balanceWarning ? 'border-red-300' : 'border-gray-300'
                    }`}
                    step={selectedToken.decimals === 6 ? '0.01' : '0.001'}
                  />
                  <div className="absolute right-3 top-2 text-sm text-gray-500">
                    {selectedToken.symbol}
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={usdAmount}
                    onChange={(e) => {
                      setUsdAmount(e.target.value);
                      if (e.target.value && tokenPrice > 0) {
                        setAmount((parseFloat(e.target.value) / tokenPrice).toFixed(6));
                      } else {
                        setAmount('');
                      }
                    }}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      balanceWarning ? 'border-red-300' : 'border-gray-300'
                    }`}
                    step="0.01"
                  />
                  <div className="absolute right-3 top-2 text-sm text-gray-500">
                    USD
                  </div>
                </>
              )}
            </div>
            
            {/* Real-time Conversion Display */}
            {amount && tokenPrice > 0 && (
              <div className="mt-1 text-xs text-gray-500 text-center">
                {inputMode === 'token' ? (
                  <span>
                    {amount} {selectedToken.symbol} ≈ ${(parseFloat(amount) * tokenPrice).toFixed(2)} USD
                  </span>
                ) : (
                  <span>
                    ${usdAmount} USD ≈ {(parseFloat(usdAmount || '0') / tokenPrice).toFixed(6)} {selectedToken.symbol}
                  </span>
                )}
              </div>
            )}
            
            {/* Balance Display */}
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-gray-600">
                Balance: {formatTokenAmount(parseFloat(userBalance) / Math.pow(10, selectedToken.decimals || 18), 4)} {selectedToken.symbol}
                {tokenPrice > 0 && (
                  <span className="text-gray-400 ml-1">
                    (≈${((parseFloat(userBalance) / Math.pow(10, selectedToken.decimals || 18)) * tokenPrice).toFixed(2)})
                  </span>
                )}
              </span>
              <button 
                onClick={() => {
                  const maxTokenAmount = ((parseFloat(userBalance) / Math.pow(10, selectedToken.decimals || 18)) * 0.95);
                  setAmount(maxTokenAmount.toString());
                  if (tokenPrice > 0) {
                    setUsdAmount((maxTokenAmount * tokenPrice).toFixed(2));
                  }
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Max
              </button>
            </div>
            
            {/* Balance Warning */}
            {balanceWarning && (
              <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                {balanceWarning}
              </div>
            )}
          </div>
        )}

        {/* Enhanced Fee Preview */}
        {amount && (feePreviewLoading || conversionQuote) && (
          <div className={`border rounded-lg p-4 ${
            conversionQuote?.isReal 
              ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
              : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Coins className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-blue-800">
                  Real Fee Preview
                </span>
              </div>
              {feePreviewLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              ) : conversionQuote?.isReal ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-yellow-600" />
              )}
            </div>

            {feePreviewLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-5 h-5 animate-spin text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Calculating real fees...</span>
              </div>
            ) : conversionQuote && (
              <div className="space-y-3">
                {/* Error Warning */}
                {conversionQuote.error && (
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-2">
                    <div className="text-xs text-yellow-800 font-medium">
                      ⚠️ {conversionQuote.error}
                    </div>
                  </div>
                )}
                
                {/* Input Amount */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">You send:</span>
                  <span className="font-semibold">
                    {conversionQuote.inputAmount} {conversionQuote.inputToken}
                  </span>
                </div>
                
                {/* USD Value */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">USD Value:</span>
                  <span className="font-semibold">
                    ${conversionQuote.usdValue.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-center text-blue-600 my-2">
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Platform Fee */}
                <div className="flex justify-between text-sm text-red-600">
                  <span>Platform fee (5%):</span>
                  <span className="font-semibold">
                    -{conversionQuote.platformFeeRaw ? `${conversionQuote.platformFeeRaw.toFixed(6)} ${conversionQuote.inputToken}` : `$${conversionQuote.platformFee.toFixed(2)}`}
                  </span>
                </div>

                {/* Creator/Business Split */}
                <div className="border-t pt-2 space-y-2">
                  <div className="text-xs font-medium text-gray-600 mb-2">
                    After Platform Fee Distribution:
                  </div>
                  
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Creator receives:</span>
                    <span className="font-semibold">
                      {conversionQuote.creatorShareRaw ? (
                        <span>
                          {conversionQuote.creatorShareRaw.toFixed(6)} {conversionQuote.inputToken}
                          <span className="text-xs text-gray-500 ml-1">
                            (~${conversionQuote.creatorShare.toFixed(2)})
                          </span>
                        </span>
                      ) : (
                        `$${conversionQuote.creatorShare.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-blue-600">
                    <span>Business receives:</span>
                    <span className="font-semibold">
                      {conversionQuote.businessShareRaw ? (
                        <span>
                          {conversionQuote.businessShareRaw.toFixed(6)} {conversionQuote.inputToken}
                          <span className="text-xs text-gray-500 ml-1">
                            (~${conversionQuote.businessShare.toFixed(2)})
                          </span>
                        </span>
                      ) : (
                        `$${conversionQuote.businessShare.toFixed(2)}`
                      )}
                    </span>
                  </div>
                </div>

                {/* Final USDC Estimate */}
                <div className="border-t pt-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-purple-700">Final USDC on ApeChain:</span>
                    <span className="text-purple-700">
                      ~${conversionQuote.estimatedUsdc.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className={`text-xs mt-3 p-2 rounded ${
                  conversionQuote.isReal 
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                }`}>
                  {conversionQuote.isReal ? (
                    <span>✅ Real fees calculated from Creator #{creatorId} tier settings</span>
                  ) : (
                    <span>⚠️ Estimated fees - actual amounts may differ</span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Approval Step */}
        {approvalState !== ApprovalState.NONE && (
          <div className="space-y-2">
            {approvalState === ApprovalState.NEEDED && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-yellow-800">
                      Token approval required
                    </div>
                    <div className="text-xs text-yellow-600">
                      Allow TippingChain to spend your {selectedToken?.symbol}
                    </div>
                  </div>
                  <button
                    onClick={handleApprove}
                    disabled={isLoading}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      'Approve'
                    )}
                  </button>
                </div>
              </div>
            )}
            
            {approvalState === ApprovalState.PENDING && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin mr-2" />
                  <span className="text-sm text-blue-700">
                    Approval transaction pending...
                  </span>
                </div>
              </div>
            )}
            
            {approvalState === ApprovalState.APPROVED && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-700">
                    Token approved! You can now send the tip.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tip Button */}
        <button 
          onClick={handleTip}
          disabled={!canTip}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            canTip
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Processing...
            </span>
          ) : (
            `Send ${selectedToken?.symbol || ''} Tip → ApeChain`
          )}
        </button>
      </div>
    </div>
  );
};