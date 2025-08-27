// packages/ui/src/components/ApeChainTippingInterface.tsx
import React, { useState, useEffect } from 'react';
import { ConnectButton, useActiveAccount, useSendTransaction, useActiveWalletChain } from "thirdweb/react";
import { Coins, ArrowRight, Target } from 'lucide-react';
import { formatTokenAmount, getChainName, getNativeCurrency } from '../utils/helpers';
import type { ApeChainTippingProps } from '../types';
import type { Creator, TipResult } from '@tippingchain/sdk';
import { SUPPORTED_CHAINS, CONTRACT_CONSTANTS } from '@tippingchain/sdk';

export const ApeChainTippingInterface: React.FC<ApeChainTippingProps> = ({
  creatorId,
  streamId: _streamId,
  sdkConfig,
  className = '',
  theme: _theme = 'light',
  showCreatorInfo = true,
  onTipSuccess,
  onTipError
}) => {
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const { isPending } = useSendTransaction();
  
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('native');
  const [relayQuote, setRelayQuote] = useState<any | null>(null);
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  const [creator, setCreator] = useState<Creator | null>(null);
  const [isLoadingCreator, setIsLoadingCreator] = useState(true);

  // Load creator information
  useEffect(() => {
    const loadCreator = async () => {
      if (!activeChain) return;
      
      setIsLoadingCreator(true);
      try {
        const creatorData = await sdkConfig.sdk.getCreator(creatorId, activeChain.id);
        setCreator(creatorData);
      } catch (error) {
        console.error('Failed to load creator:', error);
        onTipError?.('Failed to load creator information');
      } finally {
        setIsLoadingCreator(false);
      }
    };

    loadCreator();
  }, [creatorId, activeChain, sdkConfig.sdk, onTipError]);

  // Get relay quote when amount changes
  useEffect(() => {
    if (!amount || !activeChain || !creator) return;

    const getQuote = async () => {
      setIsLoadingQuote(true);
      try {
        // Use SDK's relay service to get real quote
        const relayService = sdkConfig.sdk['relayService']; // Access internal relay service
        if (relayService && relayService.getQuote) {
          const quote = await relayService.getQuote({
            fromChainId: activeChain.id,
            fromToken: selectedToken === 'native' ? 'native' : selectedToken,
            toChainId: SUPPORTED_CHAINS.APECHAIN,
            toToken: CONTRACT_CONSTANTS.APECHAIN_USDC,
            amount: (parseFloat(amount) * 1e18).toString() // Convert to wei
          });
          
          setRelayQuote({
            estimatedUsdc: quote.estimatedOutput,
            fees: quote.fees,
            estimatedTime: quote.estimatedTime,
          });
        } else {
          // Fallback to estimation
          const estimatedUsdc = (parseFloat(amount) * 0.8).toString(); // Rough estimate
          setRelayQuote({
            estimatedUsdc,
            fees: '0.1',
            estimatedTime: 300,
          });
        }
      } catch (error) {
        console.error('Quote failed:', error);
        // Fallback to estimation
        const estimatedUsdc = (parseFloat(amount) * 0.8).toString();
        setRelayQuote({
          estimatedUsdc,
          fees: '0.1',
          estimatedTime: 300,
        });
      } finally {
        setIsLoadingQuote(false);
      }
    };

    const debounceTimer = setTimeout(getQuote, 500);
    return () => clearTimeout(debounceTimer);
  }, [amount, selectedToken, activeChain, creator, sdkConfig.sdk]);

  const handleTip = async () => {
    if (!account || !amount || !activeChain || !creator) return;

    try {
      const result = await sdkConfig.sdk.sendTip({
        sourceChainId: activeChain.id,
        creatorId: creatorId, // NEW: Use creator ID instead of addresses
        token: selectedToken === 'native' ? 'native' : selectedToken,
        amount: amount,
        userAddress: account?.address, // User's wallet address for relay API
      });

      if (result.success) {
        const successMessage = `Tip sent! Creator will receive ~${relayQuote?.estimatedUsdc} USDC on ApeChain`;
        alert(successMessage);
        onTipSuccess?.(result as TipResult);
        setAmount('');
        setRelayQuote(null);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Tip failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Tip failed. Please try again.';
      alert(errorMessage);
      onTipError?.(errorMessage);
    }
  };


  if (isLoadingCreator) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center py-8">
          <svg className="animate-spin h-8 w-8 text-orange-600" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          <span className="ml-2 text-gray-600">Loading creator...</span>
        </div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <div className="text-center py-4">
          <div className="text-red-600 font-medium">Creator not found</div>
          <div className="text-sm text-gray-600 mt-1">Creator ID {creatorId} not found on this chain</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto ${className}`}>
      <div className="flex items-center mb-4">
        <Target className="w-6 h-6 text-orange-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">
          Tip → ApeChain
        </h3>
      </div>

      {/* Creator Info */}
      {showCreatorInfo && creator && (
        <div className="bg-white rounded-lg p-4 mb-4 border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Tipping Creator</div>
              <div className="font-medium text-gray-800">ID #{creator.id}</div>
              <div className="text-xs text-gray-500">{creator.wallet.slice(0, 6)}...{creator.wallet.slice(-4)}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Total Tips</div>
              <div className="font-medium text-orange-600">{formatTokenAmount(creator.totalTips || '0')} tokens</div>
              <div className="text-xs text-gray-500">{creator.tipCount || 0} tips</div>
            </div>
          </div>
        </div>
      )}

      <ConnectButton client={sdkConfig.client} theme="light" />

      {account && activeChain && (
        <div className="mt-4 space-y-4">
          {/* Current Chain Display */}
          <div className="bg-white rounded-lg p-3 border">
            <div className="text-sm text-gray-600">Tipping from:</div>
            <div className="font-medium text-gray-800">{getChainName(activeChain?.id || 0)}</div>
          </div>

          {/* Amount Input */}
          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="w-24">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Token
              </label>
              <select 
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              >
                <option value="native">Native</option>
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>

          {/* Conversion Preview */}
          {amount && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Coins className="w-4 h-4 text-orange-600 mr-1" />
                <span className="text-sm font-medium text-orange-800">
                  Auto-conversion to USDC on ApeChain
                </span>
              </div>
              
              {isLoadingQuote ? (
                <div className="text-sm text-gray-600">Calculating...</div>
              ) : relayQuote ? (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>You send:</span>
                    <span className="font-medium">{amount} {selectedToken === 'native' ? getNativeCurrency(activeChain?.id || 0) : selectedToken}</span>
                  </div>
                  <div className="flex items-center justify-center text-orange-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Platform fee (5%):</span>
                    <span className="font-medium text-gray-600">
                      ~{formatTokenAmount(parseFloat(relayQuote.estimatedUsdc || '0') * 0.05)} USDC
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Creator/Business gets:</span>
                    <span className="font-medium text-orange-600">
                      ~{formatTokenAmount(parseFloat(relayQuote.estimatedUsdc || '0') * 0.95)} USDC (95%)
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    * Split between creator/business depends on membership tier
                  </div>
                </div>
              ) : (
                <div className="text-sm text-red-600">Unable to get conversion quote</div>
              )}
            </div>
          )}

          {/* Tip Button */}
          <button 
            onClick={handleTip}
            disabled={!amount || isPending || !relayQuote}
            className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
              !amount || isPending || !relayQuote
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-600 to-purple-600 text-white hover:from-orange-700 hover:to-purple-700'
            }`}
          >
            {isPending ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Processing...
              </span>
            ) : (
              `Send Tip → ApeChain`
            )}
          </button>

          {/* Info */}
          <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
            💰 All tips are automatically converted to USDC and sent to ApeChain where creators can withdraw them.
          </div>
        </div>
      )}
    </div>
  );
};