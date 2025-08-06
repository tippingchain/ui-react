# @tippingchain/ui-react

React UI components for TippingChain v2.0 - a unified multi-chain tipping platform with integrated Relay.link bridging, creator registry, and viewer rewards. Beautiful, responsive components with dynamic tier-based fee structures and testnet support.

## Version 2.0 Updates

- ✨ **Integrated Architecture**: Components work with v2.0 SDK and integrated Relay.link contracts
- 🧪 **Testnet Support**: Holesky (Ethereum) and Amoy (Polygon) testnet compatibility
- 📊 **Dynamic Fees**: Components now show tier-based creator/business splits (60/40, 70/30, 80/20, 90/10)
- 💰 **Accurate Fee Display**: 5% platform fee for tips, 1% for viewer rewards
- 🎯 **Enhanced Viewer Rewards**: Batch rewards, pool distribution, improved UI/UX

## Features

- 🎯 **Easy Tipping**: Tip creators using simple creator IDs with dynamic fee display
- 🎁 **Viewer Rewards**: Full batch rewards, pool distribution, and individual rewards
- 🔍 **Creator Search**: Search by ID, wallet address, or thirdweb ID
- ⚙️ **Admin Tools**: Creator management with wallet recovery and tier updates
- 📊 **Analytics**: Platform statistics and top creator displays
- 🔑 **Thirdweb Integration**: Full support for thirdweb account IDs and smart accounts
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS
- 🌐 **Multi-chain**: Support for 9 source chains + testnets → ApeChain (USDC)
- 💵 **Stable Payouts**: All tips and rewards converted to USDC for price stability
- 🏗️ **Simplified Architecture**: No separate bridge contracts needed (integrated Relay.link)

## Installation

```bash
npm install @tippingchain/ui-react @tippingchain/sdk thirdweb
```

## Components

### ApeChainTippingInterface

Main tipping component that handles the tip flow with creator ID.

```tsx
import { ApeChainTippingInterface } from '@tippingchain/ui-react';

<ApeChainTippingInterface
  creatorId={1} // Use creator ID instead of wallet
  sdkConfig={{ client, sdk }}
  showCreatorInfo={true}
  onTipSuccess={(result) => console.log('Success!', result)}
  onTipError={(error) => console.log('Error:', error)}
/>
```

### ViewerRewardInterface

Component for creators to send rewards to individual viewers.

```tsx
import { ViewerRewardInterface } from '@tippingchain/ui-react';

<ViewerRewardInterface
  sdkConfig={{ client, sdk }}
  creatorId={1}
  onRewardSent={(result) => console.log('Reward sent!', result)}
/>
```

### BatchViewerReward

Component for batch rewarding multiple viewers efficiently.

```tsx
import { BatchViewerReward } from '@tippingchain/ui-react';

<BatchViewerReward
  sdkConfig={{ client, sdk }}
  onBatchSent={(result) => console.log('Batch sent!', result)}
/>
```

### ViewerSelector

Component for searching and selecting viewers by ID, address, or thirdweb ID.

```tsx
import { ViewerSelector } from '@tippingchain/ui-react';

<ViewerSelector
  sdkConfig={{ client, sdk }}
  onViewerSelect={(viewer) => setSelectedViewer(viewer)}
  selectedViewerId={selectedViewer?.id}
/>
```

### ChainSelector

Component for selecting source chains for tipping.

```tsx
import { ChainSelector } from '@tippingchain/ui-react';

<ChainSelector
  value={selectedChainId}
  onChange={(chainId) => setSelectedChainId(chainId)}
  label="Select Network"
  excludeChains={[33139]} // Exclude ApeChain (destination only)
/>
```

### CreatorSelector

Component for searching and selecting creators.

```tsx
import { CreatorSelector } from '@tippingchain/ui-react';

<CreatorSelector
  sdkConfig={{ client, sdk }}
  chainId={137} // Polygon
  onCreatorSelect={(creator) => setSelectedCreator(creator)}
  selectedCreatorId={selectedCreator?.id}
/>
```

### CreatorManagement

Admin component for managing creators and platform analytics.

```tsx
import { CreatorManagement } from '@tippingchain/ui-react';

<CreatorManagement
  sdkConfig={{ client, sdk }}
  chainId={137}
  onCreatorAdded={(creatorId) => console.log('Added:', creatorId)}
/>
```

## Quick Start

### 1. Setup SDK and Client

```tsx
import { createThirdwebClient } from 'thirdweb';
import { ApeChainTippingSDK } from '@tippingchain/sdk';

const client = createThirdwebClient({ 
  clientId: "your-thirdweb-client-id" 
});

const sdk = new ApeChainTippingSDK({
  clientId: "your-thirdweb-client-id",
  environment: "production",
  // Contract addresses are automatically loaded from @tippingchain/contracts-interface
});

const sdkConfig = { client, sdk };
```

### 2. Complete App Example

```tsx
import React, { useState } from 'react';
import { 
  ApeChainTippingInterface, 
  CreatorSelector, 
  CreatorManagement,
  ViewerRewardInterface,
  BatchViewerReward 
} from '@tippingchain/ui-react';

export const TippingApp = () => {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isCreatorView, setIsCreatorView] = useState(false);
  
  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex gap-2">
        <button onClick={() => setIsCreatorView(false)}>Viewer Mode</button>
        <button onClick={() => setIsCreatorView(true)}>Creator Mode</button>
      </div>

      {!isCreatorView ? (
        // Viewer Mode - Tipping creators
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CreatorSelector
            sdkConfig={sdkConfig}
            chainId={137}
            onCreatorSelect={setSelectedCreator}
          />
          
          {selectedCreator && (
            <ApeChainTippingInterface
              creatorId={selectedCreator.id}
              sdkConfig={sdkConfig}
              onTipSuccess={(result) => alert('Tip sent!')}
            />
          )}
        </div>
      ) : (
        // Creator Mode - Rewarding viewers
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ViewerRewardInterface
            sdkConfig={sdkConfig}
            creatorId={1} // Your creator ID
            onRewardSent={(result) => alert('Reward sent!')}
          />
          
          <BatchViewerReward
            sdkConfig={sdkConfig}
            onBatchSent={(result) => alert('Batch sent!')}
          />
        </div>
      )}
      
      {/* Admin Panel */}
      <CreatorManagement
        sdkConfig={sdkConfig}
        chainId={137}
      />
    </div>
  );
};
```

## Component Props

### ApeChainTippingInterface

| Prop | Type | Description |
|------|------|-------------|
| `creatorId` | `number` | Creator ID to tip |
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `showCreatorInfo?` | `boolean` | Show creator details in UI (default: true) |
| `onTipSuccess?` | `(result) => void` | Callback for successful tips |
| `onTipError?` | `(error) => void` | Callback for tip errors |
| `className?` | `string` | Additional CSS classes |
| `theme?` | `'light' \| 'dark'` | UI theme |

### ViewerRewardInterface

| Prop | Type | Description |
|------|------|-------------|
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `creatorId` | `number` | Creator ID sending rewards |
| `onRewardSent?` | `(result) => void` | Callback for successful rewards |
| `className?` | `string` | Additional CSS classes |

### BatchViewerReward

| Prop | Type | Description |
|------|------|-------------|
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `onBatchSent?` | `(result) => void` | Callback for successful batch |
| `className?` | `string` | Additional CSS classes |

### ViewerSelector

| Prop | Type | Description |
|------|------|-------------|
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `onViewerSelect` | `(viewer) => void` | Callback when viewer is selected |
| `selectedViewerId?` | `number` | Currently selected viewer ID |
| `allowUnregistered?` | `boolean` | Allow direct address input (default: true) |
| `className?` | `string` | Additional CSS classes |

### CreatorSelector

| Prop | Type | Description |
|------|------|-------------|
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `chainId` | `number` | Chain ID to search creators on |
| `onCreatorSelect` | `(creator) => void` | Callback when creator is selected |
| `selectedCreatorId?` | `number` | Currently selected creator ID |
| `className?` | `string` | Additional CSS classes |

### CreatorManagement

| Prop | Type | Description |
|------|------|-------------|
| `sdkConfig` | `{ client, sdk }` | Thirdweb client and SDK instance |
| `chainId` | `number` | Chain ID for creator management |
| `onCreatorAdded?` | `(creatorId) => void` | Callback when creator is added |
| `className?` | `string` | Additional CSS classes |

## Styling

Components use Tailwind CSS for styling. Make sure to include Tailwind in your project:

```bash
npm install tailwindcss
```

Or include the pre-built CSS:

```tsx
import '@tippingchain/ui-react/dist/styles.css';
```

## Supported Chains

### Source Chains
- Ethereum (1) - ETH
- Polygon (137) - MATIC
- Optimism (10) - ETH
- BSC (56) - BNB
- Abstract (2741) - ETH
- Avalanche (43114) - AVAX
- Base (8453) - ETH
- Arbitrum (42161) - ETH
- Taiko (167000) - ETH

### Destination Chain
- ApeChain (33139) - APE - Where USDC payouts occur

## Fee Structure

### Creator Tips
- **Platform Fee**: 5% to TippingChain Treasury
- **Remaining 95%** split based on creator's membership tier:
  - **Tier 1**: 60/40 (creator/business)
  - **Tier 2**: 70/30 (creator/business)
  - **Tier 3**: 80/20 (creator/business)
  - **Tier 4**: 90/10 (creator/business)

### Viewer Rewards
- **Platform Fee**: 1% to TippingChain Treasury
- **Viewer receives**: 99% of reward amount
- All rewards are automatically converted to USDC and sent on ApeChain

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled