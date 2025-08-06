import React, { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import type { 
  ApeChainTippingSDK, 
  RewardPoolParams, 
  RewardPoolResult,
  RewardPoolCalculation 
} from '@tippingchain/sdk';
import { TransactionStatusMessage } from '../common/TransactionStatusMessage';
import { ChainSelector } from '../common/ChainSelector';
import { Button } from '../common/Button';

interface RewardPoolInterfaceProps {
  sdk: ApeChainTippingSDK;
  onSuccess?: (result: RewardPoolResult) => void;
  onError?: (error: Error) => void;
  className?: string;
}

export const RewardPoolInterface: React.FC<RewardPoolInterfaceProps> = ({
  sdk,
  onSuccess,
  onError,
  className = ''
}) => {
  const [totalAmount, setTotalAmount] = useState('');
  const [viewerAddresses, setViewerAddresses] = useState('');
  const [reason, setReason] = useState('');
  const [chainId, setChainId] = useState<number | undefined>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<RewardPoolResult | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [preview, setPreview] = useState<RewardPoolCalculation | null>(null);

  const parseViewerAddresses = useCallback((input: string): string[] => {
    // Split by commas, newlines, or spaces
    const addresses = input
      .split(/[,\n\s]+/)
      .map(addr => addr.trim())
      .filter(addr => addr.length > 0 && addr.startsWith('0x'));
    
    // Remove duplicates
    return [...new Set(addresses)];
  }, []);

  const handlePreview = useCallback(() => {
    try {
      const addresses = parseViewerAddresses(viewerAddresses);
      
      if (addresses.length === 0) {
        setError(new Error('No valid addresses found'));
        return;
      }

      if (!totalAmount || parseFloat(totalAmount) <= 0) {
        setError(new Error('Please enter a valid amount'));
        return;
      }

      const amountWei = ethers.parseEther(totalAmount).toString();
      const calculation = sdk.calculateRewardPoolDistribution(amountWei, addresses.length);
      setPreview(calculation);
      setError(null);
    } catch (err: any) {
      setError(new Error(err.message || 'Failed to calculate preview'));
      setPreview(null);
    }
  }, [totalAmount, viewerAddresses, sdk]);

  const handleCreatePool = useCallback(async () => {
    if (!totalAmount || !viewerAddresses) {
      setError(new Error('Please fill in all required fields'));
      return;
    }

    const addresses = parseViewerAddresses(viewerAddresses);
    
    if (addresses.length === 0) {
      setError(new Error('No valid addresses found'));
      return;
    }

    setIsProcessing(true);
    setStatus('processing');
    setError(null);
    setResult(null);

    try {
      const params: RewardPoolParams = {
        totalAmount: ethers.parseEther(totalAmount).toString(),
        viewerAddresses: addresses,
        reason: reason || undefined,
        chainId
      };

      const poolResult = await sdk.createRewardPool(params);
      
      if (poolResult.success) {
        setStatus('success');
        setResult(poolResult);
        onSuccess?.(poolResult);
        
        // Reset form
        setTotalAmount('');
        setViewerAddresses('');
        setReason('');
        setPreview(null);
      } else {
        throw new Error(poolResult.error || 'Failed to create reward pool');
      }
    } catch (err: any) {
      setStatus('error');
      setError(err);
      onError?.(err);
    } finally {
      setIsProcessing(false);
    }
  }, [totalAmount, viewerAddresses, reason, chainId, sdk, onSuccess, onError, parseViewerAddresses]);

  const formatAmount = (wei: string): string => {
    try {
      return ethers.formatEther(wei);
    } catch {
      return '0';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Create Reward Pool</h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribute funds equally among multiple viewers. Platform takes 1% fee, remainder is split evenly.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Total Amount to Distribute
          </label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="0.0"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
            disabled={isProcessing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Viewer Addresses
          </label>
          <textarea
            value={viewerAddresses}
            onChange={(e) => setViewerAddresses(e.target.value)}
            placeholder="Enter addresses separated by commas or new lines&#10;0x123..., 0x456...&#10;0x789..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={5}
            disabled={isProcessing}
          />
          {viewerAddresses && (
            <p className="text-sm text-gray-500 mt-1">
              {parseViewerAddresses(viewerAddresses).length} unique addresses found
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Reason (optional)
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Community reward, event prize, etc."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            disabled={isProcessing}
          />
        </div>

        <ChainSelector
          value={chainId}
          onChange={setChainId}
          label="Select Chain"
        />
      </div>

      {/* Preview Section */}
      {preview && (
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <h4 className="font-medium">Distribution Preview</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="font-mono">{formatAmount(preview.totalAmount)} tokens</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee (1%):</span>
              <span className="font-mono text-red-600">-{formatAmount(preview.platformFee)} tokens</span>
            </div>
            <div className="flex justify-between">
              <span>Distributable Amount:</span>
              <span className="font-mono">{formatAmount(preview.distributableAmount)} tokens</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Per Viewer ({preview.viewerCount} viewers):</span>
              <span className="font-mono text-green-600">{formatAmount(preview.perViewerAmount)} tokens</span>
            </div>
            {preview.batchCount > 1 && (
              <div className="text-xs text-gray-500 mt-2">
                Will be processed in {preview.batchCount} batches (50 viewers per batch)
              </div>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handlePreview}
          variant="secondary"
          disabled={isProcessing || !totalAmount || !viewerAddresses}
        >
          Preview Distribution
        </Button>
        <Button
          onClick={handleCreatePool}
          disabled={isProcessing || !totalAmount || !viewerAddresses}
          loading={isProcessing}
        >
          Create Pool & Distribute
        </Button>
      </div>

      {/* Status Messages */}
      <TransactionStatusMessage
        status={status}
        error={error}
        successMessage={
          result ? (
            <div className="space-y-2">
              <p>Successfully distributed {formatAmount(result.totalDistributed)} tokens to {result.viewerCount} viewers!</p>
              <p className="text-sm">
                Each viewer received: {formatAmount(result.perViewerAmount)} tokens
                {result.estimatedUsdcPerViewer && ` (~${parseFloat(result.estimatedUsdcPerViewer) / 1e6} USDC on ApeChain)`}
              </p>
              {result.transactions.length > 0 && (
                <div className="text-xs space-y-1">
                  <p>Transaction hashes:</p>
                  {result.transactions.map((hash, i) => (
                    <div key={hash} className="font-mono truncate">
                      Batch {i + 1}: {hash}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : undefined
        }
      />
    </div>
  );
};