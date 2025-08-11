# @tippingchain/ui-react

React UI components for TippingChain v2.0 - a unified multi-chain tipping platform with integrated Relay.link bridging, creator registry, and viewer rewards. Beautiful, responsive components with dynamic tier-based fee structures and testnet support.

## Version 2.0 Updates

- ✨ **Integrated Architecture**: Components work with v2.0 SDK and integrated Relay.link contracts
- 🏗️ **Page-Level Components**: Complete page components (StreamingPage, AdminDashboard, AnalyticsDashboard, ViewerRewardsPage, TransactionHistoryPage)
- 🔐 **Admin Role System**: CreatorManagement component supports multi-admin creator management
- 🧪 **Testnet Support**: Holesky (Ethereum) and Amoy (Polygon) testnet compatibility
- 📊 **Dynamic Fees**: Components now show tier-based creator/business splits (60/40, 70/30, 80/20, 90/10)
- 💰 **Accurate Fee Display**: 5% platform fee for tips, 1% for viewer rewards
- 🎯 **Enhanced Viewer Rewards**: Batch rewards, pool distribution, improved UI/UX
- 📦 **Dependency Alignment**: Examples package now heavily dependent on ui-react components (88% code reduction)

## Features

- 🎯 **Easy Tipping**: Tip creators using simple creator IDs with dynamic fee display
- 🎁 **Viewer Rewards**: Full batch rewards, pool distribution, and individual rewards
- 🔍 **Creator Search**: Search by ID, wallet address, or thirdweb ID
- ⚙️ **Admin Tools**: Multi-admin creator management with wallet recovery and tier updates
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

### Page-Level Components (v2.0)

Complete page components ready for production use in TippingChain applications.

#### StreamingPage

Full-featured streaming page with integrated tipping interface, video player, and viewer engagement features.

```tsx
import { StreamingPage } from '@tippingchain/ui-react';

<StreamingPage
  client={client}
  sdk={sdk}
  creatorId={1}
  creatorWallet="0x479945d7931baC3343967bD0f839f8691E54a66e"
  creatorName="Creator Name"
  streamTitle="🔴 Live Stream"
  streamDescription="Watch and tip your favorite creator"
  enableViewerCount={true}
  enableLikeButton={true}
  isLiveStream={true}
  onTipSuccess={(result) => console.log('Tip successful!', result)}
  onTipError={(error) => console.log('Tip error:', error)}
/>
```

#### AdminDashboard

Comprehensive admin interface with sidebar navigation, creator management, and platform analytics.

```tsx
import { AdminDashboard } from '@tippingchain/ui-react';

<AdminDashboard
  client={client}
  sdk={sdk}
  defaultChainId={8453}
  enablePlatformStats={true}
  enableCreatorAnalytics={true}
  adminAddresses={['0xadmin1', '0xadmin2']}
  requirePermissionCheck={true}
  defaultView="overview"
/>
```

#### AnalyticsDashboard

Advanced analytics interface with global metrics, multi-chain comparison, and data export capabilities.

```tsx
import { AnalyticsDashboard } from '@tippingchain/ui-react';

<AnalyticsDashboard
  client={client}
  sdk={sdk}
  enableMultiChain={true}
  enableGlobalMetrics={true}
  enableChainComparison={true}
  enableDataExport={true}
  enableRealTimeUpdates={true}
  maxCreatorsToShow={50}
  defaultTimeRange="30d"
  onDataExport={(data) => console.log('Exporting data:', data)}
/>
```

#### ViewerRewardsPage

Complete viewer rewards platform with allocation, claiming, and history tracking.

```tsx
import { ViewerRewardsPage } from '@tippingchain/ui-react';

<ViewerRewardsPage
  client={client}
  sdk={sdk}
  demoCreatorWallet="0x479945d7931baC3343967bD0f839f8691E54a66e"
  defaultAllocationAmount={100}
  maxViewersPerBatch={50}
  enableBatchRewards={true}
  enableClaimInterface={true}
  enableRewardHistory={true}
  onRewardSent={(viewerIds, amount, totalCost) => 
    console.log(`Rewarded ${viewerIds.length} viewers: $${amount} each`)
  }
/>
```

#### TransactionHistoryPage

Full transaction tracking interface with comprehensive filtering and export capabilities.

```tsx
import { TransactionHistoryPage } from '@tippingchain/ui-react';

<TransactionHistoryPage
  client={client}
  sdk={sdk}
  enableExport={true}
  enableFiltering={true}
  enableStats={true}
  autoRefresh={false}
  maxTransactionsToShow={100}
  defaultTimeRange="30d"
  onTransactionSelect={(transaction) => console.log('Selected:', transaction)}
  onDataExport={(data, format) => console.log(`Exporting ${data.length} transactions as ${format}`)}
/>
```

### Individual Components

#### ApeChainTippingInterface

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

Admin component for managing creators and platform analytics. Supports both contract owner and designated admins.

```tsx
import { CreatorManagement } from '@tippingchain/ui-react';

<CreatorManagement
  sdkConfig={{ client, sdk }}
  chainId={137}
  onCreatorAdded={(creatorId) => console.log('Added:', creatorId)}
  // Component automatically detects if connected wallet has admin permissions
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

### Page Component Props

#### StreamingPage

| Prop | Type | Description |
|------|------|-------------|
| `client` | `any` | Thirdweb client instance |
| `sdk` | `ApeChainTippingSDK` | TippingChain SDK instance |
| `creatorId` | `number` | Creator ID for tipping |
| `creatorWallet` | `string` | Creator's wallet address |
| `creatorName?` | `string` | Display name for creator |
| `streamTitle?` | `string` | Title of the live stream |
| `streamDescription?` | `string` | Description of the stream |
| `demoTipperWallet?` | `string` | Demo tipper wallet for testing |
| `allowedTipperWallets?` | `string[]` | Restricted tipper addresses |
| `defaultChainId?` | `number` | Default source chain ID |
| `enableChat?` | `boolean` | Enable chat functionality |
| `enableViewerCount?` | `boolean` | Show viewer count |
| `enableLikeButton?` | `boolean` | Show like button |
| `enableShareButton?` | `boolean` | Show share button |
| `enableFullscreen?` | `boolean` | Enable fullscreen video |
| `isLiveStream?` | `boolean` | Whether stream is live |
| `enableVideoControls?` | `boolean` | Show video controls |
| `onTipSuccess?` | `(result) => void` | Tip success callback |
| `onTipError?` | `(error) => void` | Tip error callback |
| `onViewerCountChange?` | `(count) => void` | Viewer count change callback |
| `onStreamStatusChange?` | `(status) => void` | Stream status change callback |

#### AdminDashboard

| Prop | Type | Description |
|------|------|-------------|
| `client` | `any` | Thirdweb client instance |
| `sdk` | `ApeChainTippingSDK` | TippingChain SDK instance |
| `defaultChainId?` | `number` | Default chain for operations |
| `allowMultiChain?` | `boolean` | Enable multi-chain operations |
| `enablePlatformStats?` | `boolean` | Show platform statistics |
| `enableCreatorAnalytics?` | `boolean` | Show creator analytics |
| `adminAddresses?` | `string[]` | Authorized admin addresses |
| `ownerAddresses?` | `string[]` | Contract owner addresses |
| `requirePermissionCheck?` | `boolean` | Check admin permissions |
| `showHeader?` | `boolean` | Display page header |
| `showSidebar?` | `boolean` | Display sidebar navigation |
| `defaultView?` | `'overview' \| 'creators' \| 'analytics' \| 'settings'` | Default view |

#### AnalyticsDashboard

| Prop | Type | Description |
|------|------|-------------|
| `client` | `any` | Thirdweb client instance |
| `sdk` | `ApeChainTippingSDK` | TippingChain SDK instance |
| `defaultChainId?` | `number` | Default chain for analytics |
| `enableMultiChain?` | `boolean` | Enable multi-chain comparison |
| `enableGlobalMetrics?` | `boolean` | Show global platform metrics |
| `enableChainComparison?` | `boolean` | Enable chain comparison |
| `enableDataExport?` | `boolean` | Enable data export functionality |
| `enableRealTimeUpdates?` | `boolean` | Enable real-time data updates |
| `maxCreatorsToShow?` | `number` | Maximum creators in leaderboard |
| `defaultTimeRange?` | `'24h' \| '7d' \| '30d' \| '90d' \| 'all'` | Default time range |
| `onCreatorSelect?` | `(creatorId) => void` | Creator selection callback |
| `onDataExport?` | `(data) => void` | Data export callback |

#### ViewerRewardsPage

| Prop | Type | Description |
|------|------|-------------|
| `client` | `any` | Thirdweb client instance |
| `sdk` | `ApeChainTippingSDK` | TippingChain SDK instance |
| `demoCreatorWallet?` | `string` | Demo creator wallet address |
| `allowedCreatorWallets?` | `string[]` | Restricted creator addresses |
| `defaultAllocationAmount?` | `number` | Default reward amount |
| `maxViewersPerBatch?` | `number` | Maximum viewers per batch |
| `enableBatchRewards?` | `boolean` | Enable batch reward functionality |
| `enableIndividualRewards?` | `boolean` | Enable individual rewards |
| `enableViewerRegistration?` | `boolean` | Enable viewer registration |
| `enableClaimInterface?` | `boolean` | Enable reward claiming interface |
| `enableRewardHistory?` | `boolean` | Show reward history |
| `mockViewers?` | `ViewerData[]` | Mock viewer data for testing |
| `useMockData?` | `boolean` | Use mock data instead of live data |
| `onRewardSent?` | `(viewerIds, amount, totalCost) => void` | Reward sent callback |
| `onRewardClaimed?` | `(viewerId, amount) => void` | Reward claimed callback |
| `onViewerRegistered?` | `(viewer) => void` | Viewer registration callback |

#### TransactionHistoryPage

| Prop | Type | Description |
|------|------|-------------|
| `client` | `any` | Thirdweb client instance |
| `sdk?` | `ApeChainTippingSDK` | TippingChain SDK instance (optional) |
| `enableExport?` | `boolean` | Enable data export functionality |
| `enableFiltering?` | `boolean` | Enable advanced filtering |
| `enableStats?` | `boolean` | Show transaction statistics |
| `enableRecentActivity?` | `boolean` | Show recent activity section |
| `autoRefresh?` | `boolean` | Auto-refresh transaction data |
| `refreshInterval?` | `number` | Refresh interval in seconds |
| `maxTransactionsToShow?` | `number` | Maximum transactions to display |
| `defaultTimeRange?` | `'24h' \| '7d' \| '30d' \| '90d' \| 'all'` | Default time range |
| `showAdvancedFilters?` | `boolean` | Show advanced filter options |
| `showChartAnalytics?` | `boolean` | Show analytics charts |
| `onTransactionSelect?` | `(transaction) => void` | Transaction selection callback |
| `onDataExport?` | `(data, format) => void` | Data export callback |
| `onStatsUpdate?` | `(stats) => void` | Statistics update callback |

### Individual Component Props

#### ApeChainTippingInterface

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

## Architecture Benefits

### Dependency Alignment (v2.0)
The page-level components enable a clean architecture where consuming applications become heavily dependent on ui-react:

**Before v2.0**: Each application implemented UI logic separately
**After v2.0**: Applications configure page components with minimal code

**Example Code Reduction**:
```typescript
// Before: ~349 lines of custom UI logic
// After: 57 lines using StreamingPage component (84% reduction)

<StreamingPage
  client={client}
  sdk={sdk}
  creatorId={1}
  creatorWallet="0x479945d7931baC3343967bD0f839f8691E54a66e"
  // Simple configuration instead of complex implementation
/>
```

### Benefits:
- **📦 Code Reduction**: 80-90% reduction in application code
- **🔧 Maintainability**: Single source of truth for UI logic
- **🎨 Consistency**: Uniform styling and behavior across applications
- **🚀 Faster Development**: Complete pages in minutes, not hours
- **🧪 Better Testing**: UI logic tested in one place, apps test configuration

### Component Hierarchy:
```
Page Components (StreamingPage, AdminDashboard, etc.)
├── Individual Components (ApeChainTippingInterface, ViewerRewardInterface, etc.)
├── Common Components (ChainSelector, CreatorSelector, etc.)
└── Utility Components (RelayStatusBadge, NotificationProvider, etc.)
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Testing Integration

The ui-react package is designed to work seamlessly with testing frameworks:

```typescript
// Mock page components for testing
vi.mock('@tippingchain/ui-react', () => ({
  StreamingPage: vi.fn(() => React.createElement('div', { 'data-testid': 'streaming-page' })),
  AdminDashboard: vi.fn(() => React.createElement('div', { 'data-testid': 'admin-dashboard' }))
}));
```

For complete testing examples, see the [TippingChain Examples Testing Documentation](https://github.com/tippingchain/examples/blob/main/TESTING.md).