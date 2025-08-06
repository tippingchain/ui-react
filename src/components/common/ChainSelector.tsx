import React from 'react';
import { SUPPORTED_CHAINS, NETWORK_CONFIGS } from '@tippingchain/contracts-interface';

interface ChainSelectorProps {
  value?: number;
  onChange: (chainId: number) => void;
  label?: string;
  excludeChains?: number[];
  className?: string;
  disabled?: boolean;
}

export const ChainSelector: React.FC<ChainSelectorProps> = ({
  value,
  onChange,
  label = 'Select Chain',
  excludeChains = [SUPPORTED_CHAINS.APECHAIN], // Exclude ApeChain by default as it's destination only
  className = '',
  disabled = false
}) => {
  const chainOptions = Object.entries(SUPPORTED_CHAINS)
    .filter(([_, chainId]) => !excludeChains.includes(chainId))
    .map(([key, chainId]) => {
      const config = NETWORK_CONFIGS[chainId];
      return {
        id: chainId,
        name: config?.name || key,
        symbol: config?.nativeCurrency.symbol || 'ETH'
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <select
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        disabled={disabled}
      >
        <option value="">Select a chain</option>
        {chainOptions.map((chain) => (
          <option key={chain.id} value={chain.id}>
            {chain.name} ({chain.symbol})
          </option>
        ))}
      </select>
    </div>
  );
};