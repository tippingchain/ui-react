import React, { useState, useEffect } from 'react';
import { ApeChainTippingSDK } from '@tippingchain/sdk';
// Import ThirdwebClient if available, otherwise use any as a workaround for type issues
// import { ThirdwebClient } from 'thirdweb';

interface AdminContractControlsProps {
  sdkConfig: { client: any; sdk: ApeChainTippingSDK };
  chainId: number;
  onOperationSuccess?: (operation: string, result: any) => void;
  onOperationError?: (operation: string, error: any) => void;
  className?: string;
}

export const AdminContractControls: React.FC<AdminContractControlsProps> = ({
  sdkConfig,
  chainId,
  onOperationSuccess,
  onOperationError,
  className = '',
}) => {
  const { sdk } = sdkConfig;
  const [isPaused, setIsPaused] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [relayerAddress, setRelayerAddress] = useState<string>('');
  const [emergencyWithdrawAmount, setEmergencyWithdrawAmount] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchContractState = async () => {
      try {
        // Use a method that exists or handle dynamically if SDK is updated
        // const paused = await sdk.isPaused(chainId);
        // setIsPaused(paused);
        // For now, assume it's not paused as a placeholder
        setIsPaused(false);
      } catch (error) {
        console.error('Error fetching contract state:', error);
        setErrorMessage('Failed to load contract state. Please try again.');
      }
    };

    fetchContractState();
  }, [sdk, chainId]);

  const handlePause = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      // Placeholder for pause functionality
      // const result = await sdk.pause(chainId);
      setIsPaused(true);
      if (onOperationSuccess) onOperationSuccess('pause', { message: 'Paused (placeholder)' });
    } catch (error) {
      console.error('Error pausing contract:', error);
      setErrorMessage('Failed to pause contract. Please check console for details.');
      if (onOperationError) onOperationError('pause', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnpause = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      // Placeholder for unpause functionality
      // const result = await sdk.unpause(chainId);
      setIsPaused(false);
      if (onOperationSuccess) onOperationSuccess('unpause', { message: 'Unpaused (placeholder)' });
    } catch (error) {
      console.error('Error unpausing contract:', error);
      setErrorMessage('Failed to unpause contract. Please check console for details.');
      if (onOperationError) onOperationError('unpause', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRelayer = async () => {
    if (!relayerAddress) {
      setErrorMessage('Please enter a valid relayer address.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    try {
      // Placeholder for adding relayer functionality
      // const result = await sdk.addAuthorizedRelayer(chainId, relayerAddress);
      if (onOperationSuccess) onOperationSuccess('addRelayer', { message: 'Relayer added (placeholder)' });
      setRelayerAddress('');
    } catch (error) {
      console.error('Error adding relayer:', error);
      setErrorMessage('Failed to add relayer. Please check console for details.');
      if (onOperationError) onOperationError('addRelayer', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveRelayer = async () => {
    if (!relayerAddress) {
      setErrorMessage('Please enter a valid relayer address.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    try {
      // Placeholder for removing relayer functionality
      // const result = await sdk.removeAuthorizedRelayer(chainId, relayerAddress);
      if (onOperationSuccess) onOperationSuccess('removeRelayer', { message: 'Relayer removed (placeholder)' });
      setRelayerAddress('');
    } catch (error) {
      console.error('Error removing relayer:', error);
      setErrorMessage('Failed to remove relayer. Please check console for details.');
      if (onOperationError) onOperationError('removeRelayer', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmergencyWithdraw = async () => {
    if (!emergencyWithdrawAmount) {
      setErrorMessage('Please enter a valid amount for emergency withdrawal.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    try {
      // Placeholder for emergency withdraw functionality
      // const amount = BigInt(emergencyWithdrawAmount);
      // const result = await sdk.emergencyWithdraw(chainId, amount);
      if (onOperationSuccess) onOperationSuccess('emergencyWithdraw', { message: 'Emergency withdraw (placeholder)' });
      setEmergencyWithdrawAmount('');
    } catch (error) {
      console.error('Error during emergency withdrawal:', error);
      setErrorMessage('Failed to perform emergency withdrawal. Please check console for details.');
      if (onOperationError) onOperationError('emergencyWithdraw', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Admin Contract Controls</h2>
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contract State</h3>
          <p className="mb-2">Current State: <span className={isPaused ? 'text-red-500' : 'text-green-500'}>
            {isPaused === null ? 'Loading...' : isPaused ? 'Paused' : 'Active'}
          </span></p>
          <div className="flex gap-2">
            <button
              onClick={handlePause}
              disabled={isLoading || isPaused === true}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Pause
            </button>
            <button
              onClick={handleUnpause}
              disabled={isLoading || isPaused === false}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Unpause
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Relayer Management</h3>
          <input
            type="text"
            value={relayerAddress}
            onChange={(e) => setRelayerAddress(e.target.value)}
            placeholder="Enter relayer address"
            className="border rounded p-2 w-full mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddRelayer}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Add Relayer
            </button>
            <button
              onClick={handleRemoveRelayer}
              disabled={isLoading}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Remove Relayer
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Emergency Operations</h3>
          <input
            type="text"
            value={emergencyWithdrawAmount}
            onChange={(e) => setEmergencyWithdrawAmount(e.target.value)}
            placeholder="Enter amount for emergency withdrawal"
            className="border rounded p-2 w-full mb-2"
          />
          <button
            onClick={handleEmergencyWithdraw}
            disabled={isLoading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Emergency Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};
