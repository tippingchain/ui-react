'use strict';

var react = require('react');
var react$1 = require('thirdweb/react');
var sdk = require('@tippingchain/sdk');
var jsxRuntime = require('react/jsx-runtime');
var ethers = require('ethers');
var contractsInterface = require('@tippingchain/contracts-interface');

// node_modules/lucide-react/dist/esm/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var createLucideIcon = (iconName, iconNode) => {
  const Component = react.forwardRef(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => react.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: `lucide lucide-${toKebabCase(iconName)}`,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => react.createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};
var createLucideIcon$1 = createLucideIcon;

// node_modules/lucide-react/dist/esm/icons/alert-circle.mjs
var AlertCircle = createLucideIcon$1("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var ArrowRight = createLucideIcon$1("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

// node_modules/lucide-react/dist/esm/icons/award.mjs
var Award = createLucideIcon$1("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);

// node_modules/lucide-react/dist/esm/icons/bar-chart-3.mjs
var BarChart3 = createLucideIcon$1("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);

// node_modules/lucide-react/dist/esm/icons/check-circle-2.mjs
var CheckCircle2 = createLucideIcon$1("CheckCircle2", [
  [
    "path",
    {
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
      key: "14v8dr"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// node_modules/lucide-react/dist/esm/icons/coins.mjs
var Coins = createLucideIcon$1("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);

// node_modules/lucide-react/dist/esm/icons/hash.mjs
var Hash = createLucideIcon$1("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// node_modules/lucide-react/dist/esm/icons/loader-2.mjs
var Loader2 = createLucideIcon$1("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

// node_modules/lucide-react/dist/esm/icons/pen-line.mjs
var PenLine = createLucideIcon$1("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/plus.mjs
var Plus = createLucideIcon$1("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs
var RefreshCw = createLucideIcon$1("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);

// node_modules/lucide-react/dist/esm/icons/search.mjs
var Search = createLucideIcon$1("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// node_modules/lucide-react/dist/esm/icons/send.mjs
var Send = createLucideIcon$1("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);

// node_modules/lucide-react/dist/esm/icons/target.mjs
var Target = createLucideIcon$1("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

// node_modules/lucide-react/dist/esm/icons/trash-2.mjs
var Trash2 = createLucideIcon$1("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

// node_modules/lucide-react/dist/esm/icons/trending-up.mjs
var TrendingUp = createLucideIcon$1("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);

// node_modules/lucide-react/dist/esm/icons/user-plus.mjs
var UserPlus = createLucideIcon$1("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);

// node_modules/lucide-react/dist/esm/icons/user.mjs
var User = createLucideIcon$1("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);

// node_modules/lucide-react/dist/esm/icons/users.mjs
var Users = createLucideIcon$1("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);

// node_modules/lucide-react/dist/esm/icons/wallet.mjs
var Wallet = createLucideIcon$1("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);

// src/utils/helpers.ts
function formatTokenAmount(amount, decimals = 4) {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) return "0";
  if (num < 1e-4) return "< 0.0001";
  if (num < 1) return num.toFixed(decimals);
  if (num < 1e3) return num.toFixed(2);
  if (num < 1e6) return `${(num / 1e3).toFixed(1)}K`;
  return `${(num / 1e6).toFixed(1)}M`;
}
function getChainName(chainId) {
  const chainMap = {
    // Mainnet chains
    1: { id: 1, name: "Ethereum", nativeCurrency: "ETH" },
    137: { id: 137, name: "Polygon", nativeCurrency: "MATIC" },
    10: { id: 10, name: "Optimism", nativeCurrency: "ETH" },
    56: { id: 56, name: "BSC", nativeCurrency: "BNB" },
    2741: { id: 2741, name: "Abstract", nativeCurrency: "ETH" },
    43114: { id: 43114, name: "Avalanche", nativeCurrency: "AVAX" },
    8453: { id: 8453, name: "Base", nativeCurrency: "ETH" },
    42161: { id: 42161, name: "Arbitrum", nativeCurrency: "ETH" },
    167e3: { id: 167e3, name: "Taiko", nativeCurrency: "ETH" },
    33139: { id: 33139, name: "ApeChain", nativeCurrency: "APE" },
    // Testnet chains
    17e3: { id: 17e3, name: "Ethereum Holesky", nativeCurrency: "ETH" },
    80002: { id: 80002, name: "Polygon Amoy", nativeCurrency: "MATIC" },
    33111: { id: 33111, name: "ApeChain Curtis", nativeCurrency: "APE" }
  };
  return chainMap[chainId]?.name || "Unknown";
}
function getNativeCurrency(chainId) {
  const chainMap = {
    // Mainnet chains
    1: { id: 1, name: "Ethereum", nativeCurrency: "ETH" },
    137: { id: 137, name: "Polygon", nativeCurrency: "MATIC" },
    10: { id: 10, name: "Optimism", nativeCurrency: "ETH" },
    56: { id: 56, name: "BSC", nativeCurrency: "BNB" },
    2741: { id: 2741, name: "Abstract", nativeCurrency: "ETH" },
    43114: { id: 43114, name: "Avalanche", nativeCurrency: "AVAX" },
    8453: { id: 8453, name: "Base", nativeCurrency: "ETH" },
    42161: { id: 42161, name: "Arbitrum", nativeCurrency: "ETH" },
    167e3: { id: 167e3, name: "Taiko", nativeCurrency: "ETH" },
    33139: { id: 33139, name: "ApeChain", nativeCurrency: "APE" },
    // Testnet chains  
    17e3: { id: 17e3, name: "Ethereum Holesky", nativeCurrency: "ETH" },
    80002: { id: 80002, name: "Polygon Amoy", nativeCurrency: "MATIC" },
    33111: { id: 33111, name: "ApeChain Curtis", nativeCurrency: "APE" }
  };
  return chainMap[chainId]?.nativeCurrency || "TOKEN";
}
function calculateFeeBreakdown(totalAmount, creatorTier = 0) {
  const total = parseFloat(totalAmount);
  if (isNaN(total)) {
    return {
      creatorAmount: "0",
      platformAmount: "0",
      totalAmount: "0",
      creatorPercentage: 60,
      // Default Tier 1
      platformPercentage: 5
    };
  }
  const platformAmount = total * 0.05;
  const remaining = total * 0.95;
  const creatorPercentages = [60, 70, 80, 90];
  const creatorPercent = creatorPercentages[creatorTier] || 60;
  const creatorAmount = remaining * (creatorPercent / 100);
  return {
    creatorAmount: creatorAmount.toString(),
    platformAmount: platformAmount.toString(),
    totalAmount: total.toString(),
    creatorPercentage: creatorPercent,
    platformPercentage: 5
  };
}
function calculateViewerRewardFees(totalAmount) {
  const total = parseFloat(totalAmount);
  if (isNaN(total)) {
    return { viewerAmount: "0", platformFee: "0" };
  }
  const platformFee = total * 0.01;
  const viewerAmount = total * 0.99;
  return {
    viewerAmount: viewerAmount.toString(),
    platformFee: platformFee.toString()
  };
}
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function isValidAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
function truncateAddress(address, chars = 4) {
  if (!isValidAddress(address)) return address;
  return `${address.slice(0, 2 + chars)}...${address.slice(-chars)}`;
}
function getTokenOptions(chainId) {
  const commonTokens = {
    // Mainnet chains
    1: [
      // Ethereum
      { symbol: "ETH", name: "Ethereum", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6 },
      { symbol: "USDT", name: "Tether", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6 }
    ],
    137: [
      // Polygon
      { symbol: "MATIC", name: "Polygon", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", decimals: 6 },
      { symbol: "USDT", name: "Tether", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", decimals: 6 }
    ],
    10: [
      // Optimism
      { symbol: "ETH", name: "Ethereum", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", decimals: 6 },
      { symbol: "USDT", name: "Tether", address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", decimals: 6 }
    ],
    56: [
      // BSC
      { symbol: "BNB", name: "BNB", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", decimals: 18 },
      { symbol: "USDT", name: "Tether", address: "0x55d398326f99059fF775485246999027B3197955", decimals: 18 }
    ],
    2741: [
      // Abstract
      { symbol: "ETH", name: "Ethereum", decimals: 18 }
    ],
    43114: [
      // Avalanche
      { symbol: "AVAX", name: "Avalanche", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", decimals: 6 }
    ],
    8453: [
      // Base
      { symbol: "ETH", name: "Ethereum", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6 }
    ],
    42161: [
      // Arbitrum
      { symbol: "ETH", name: "Ethereum", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6 }
    ],
    167e3: [
      // Taiko
      { symbol: "ETH", name: "Ethereum", decimals: 18 }
    ],
    33139: [
      // ApeChain
      { symbol: "APE", name: "ApeCoin", decimals: 18 },
      { symbol: "USDC", name: "USD Coin", address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", decimals: 6 }
    ],
    // Testnet chains
    17e3: [
      // Ethereum Holesky
      { symbol: "ETH", name: "Ethereum", decimals: 18 }
    ],
    80002: [
      // Polygon Amoy
      { symbol: "MATIC", name: "Polygon", decimals: 18 }
    ],
    33111: [
      // ApeChain Curtis
      { symbol: "APE", name: "ApeCoin", decimals: 18 }
    ]
  };
  return commonTokens[chainId] || [
    { symbol: "TOKEN", name: "Native Token", decimals: 18 }
  ];
}
var ApeChainTippingInterface = ({
  creatorId,
  streamId: _streamId,
  sdkConfig,
  className = "",
  theme: _theme = "light",
  showCreatorInfo = true,
  onTipSuccess,
  onTipError
}) => {
  const account = react$1.useActiveAccount();
  const activeChain = react$1.useActiveWalletChain();
  const { isPending } = react$1.useSendTransaction();
  const [amount, setAmount] = react.useState("");
  const [selectedToken, setSelectedToken] = react.useState("native");
  const [relayQuote, setRelayQuote] = react.useState(null);
  const [isLoadingQuote, setIsLoadingQuote] = react.useState(false);
  const [creator, setCreator] = react.useState(null);
  const [isLoadingCreator, setIsLoadingCreator] = react.useState(true);
  react.useEffect(() => {
    const loadCreator = async () => {
      if (!activeChain) return;
      setIsLoadingCreator(true);
      try {
        const creatorData = await sdkConfig.sdk.getCreator(creatorId, activeChain.id);
        setCreator(creatorData);
      } catch (error) {
        console.error("Failed to load creator:", error);
        onTipError?.("Failed to load creator information");
      } finally {
        setIsLoadingCreator(false);
      }
    };
    loadCreator();
  }, [creatorId, activeChain, sdkConfig.sdk, onTipError]);
  react.useEffect(() => {
    if (!amount || !activeChain || !creator) return;
    const getQuote = async () => {
      setIsLoadingQuote(true);
      try {
        const relayService = sdkConfig.sdk["relayService"];
        if (relayService && relayService.getQuote) {
          const quote = await relayService.getQuote({
            fromChainId: activeChain.id,
            fromToken: selectedToken === "native" ? "native" : selectedToken,
            toChainId: sdk.SUPPORTED_CHAINS.APECHAIN,
            toToken: sdk.CONTRACT_CONSTANTS.APECHAIN_USDC,
            amount: (parseFloat(amount) * 1e18).toString()
            // Convert to wei
          });
          setRelayQuote({
            estimatedUsdc: quote.estimatedOutput,
            fees: quote.fees,
            estimatedTime: quote.estimatedTime
          });
        } else {
          const estimatedUsdc = (parseFloat(amount) * 0.8).toString();
          setRelayQuote({
            estimatedUsdc,
            fees: "0.1",
            estimatedTime: 300
          });
        }
      } catch (error) {
        console.error("Quote failed:", error);
        const estimatedUsdc = (parseFloat(amount) * 0.8).toString();
        setRelayQuote({
          estimatedUsdc,
          fees: "0.1",
          estimatedTime: 300
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
        creatorId,
        // NEW: Use creator ID instead of addresses
        token: selectedToken === "native" ? "native" : selectedToken,
        amount
      });
      if (result.success) {
        const successMessage = `Tip sent! Creator will receive ~${relayQuote?.estimatedUsdc} USDC on ApeChain`;
        alert(successMessage);
        onTipSuccess?.(result);
        setAmount("");
        setRelayQuote(null);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Tip failed:", error);
      const errorMessage = error instanceof Error ? error.message : "Tip failed. Please try again.";
      alert(errorMessage);
      onTipError?.(errorMessage);
    }
  };
  if (isLoadingCreator) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-8", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-8 w-8 text-orange-600", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2 text-gray-600", children: "Loading creator..." })
    ] }) });
  }
  if (!creator) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-6 max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-red-600 font-medium", children: "Creator not found" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-600 mt-1", children: [
        "Creator ID ",
        creatorId,
        " not found on this chain"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Target, { className: "w-6 h-6 text-orange-600 mr-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: "Tip \u2192 ApeChain" })
    ] }),
    showCreatorInfo && creator && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-lg p-4 mb-4 border", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Tipping Creator" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-medium text-gray-800", children: [
          "ID #",
          creator.id
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
          creator.wallet.slice(0, 6),
          "...",
          creator.wallet.slice(-4)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Total Tips" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-medium text-orange-600", children: [
          formatTokenAmount(creator.totalTips || "0"),
          " tokens"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
          creator.tipCount || 0,
          " tips"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(react$1.ConnectButton, { client: sdkConfig.client, theme: "light" }),
    account && activeChain && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-3 border", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Tipping from:" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium text-gray-800", children: getChainName(activeChain?.id || 0) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Amount" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              placeholder: "0.0",
              value: amount,
              onChange: (e) => setAmount(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-24", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Token" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: selectedToken,
              onChange: (e) => setSelectedToken(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "native", children: "Native" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "USDC", children: "USDC" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "USDT", children: "USDT" })
              ]
            }
          )
        ] })
      ] }),
      amount && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Coins, { className: "w-4 h-4 text-orange-600 mr-1" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-orange-800", children: "Auto-conversion to USDC on ApeChain" })
        ] }),
        isLoadingQuote ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Calculating..." }) : relayQuote ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "You send:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
              amount,
              " ",
              selectedToken === "native" ? getNativeCurrency(activeChain?.id || 0) : selectedToken
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center text-orange-600", children: /* @__PURE__ */ jsxRuntime.jsx(ArrowRight, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Platform fee (5%):" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium text-gray-600", children: [
              "~",
              formatTokenAmount(parseFloat(relayQuote.estimatedUsdc || "0") * 0.05),
              " USDC"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Creator/Business gets:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium text-orange-600", children: [
              "~",
              formatTokenAmount(parseFloat(relayQuote.estimatedUsdc || "0") * 0.95),
              " USDC (95%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500 mt-1", children: "* Split between creator/business depends on membership tier" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-red-600", children: "Unable to get conversion quote" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleTip,
          disabled: !amount || isPending || !relayQuote,
          className: `w-full py-3 px-4 rounded-md font-medium transition-colors ${!amount || isPending || !relayQuote ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-orange-600 to-purple-600 text-white hover:from-orange-700 hover:to-purple-700"}`,
          children: isPending ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-4 w-4 mr-2", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
              /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Processing..."
          ] }) : `Send Tip \u2192 ApeChain`
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-600 bg-gray-50 p-3 rounded", children: "\u{1F4B0} All tips are automatically converted to USDC and sent to ApeChain where creators can withdraw them." })
    ] })
  ] });
};
var CreatorSelector = ({
  sdkConfig,
  chainId,
  onCreatorSelect,
  selectedCreatorId,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = react.useState("");
  const [topCreators, setTopCreators] = react.useState([]);
  const [searchResults, setSearchResults] = react.useState([]);
  const [isLoadingTop, setIsLoadingTop] = react.useState(true);
  const [isSearching, setIsSearching] = react.useState(false);
  react.useEffect(() => {
    const loadTopCreators = async () => {
      setIsLoadingTop(true);
      try {
        const creators = await sdkConfig.sdk.getTopCreators(10, chainId);
        setTopCreators(creators);
      } catch (error) {
        console.error("Failed to load top creators:", error);
      } finally {
        setIsLoadingTop(false);
      }
    };
    loadTopCreators();
  }, [sdkConfig.sdk, chainId]);
  react.useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    const performSearch = async () => {
      setIsSearching(true);
      try {
        if (/^\d+$/.test(searchTerm)) {
          const creatorId = parseInt(searchTerm);
          const creator = await sdkConfig.sdk.getCreator(creatorId, chainId);
          setSearchResults([creator]);
        } else if (/^0x[a-fA-F0-9]{40}$/.test(searchTerm)) {
          const creator = await sdkConfig.sdk.getCreatorByWallet(searchTerm, chainId);
          setSearchResults(creator ? [creator] : []);
        } else {
          const filtered = topCreators.filter(
            (creator) => creator.wallet.toLowerCase().includes(searchTerm.toLowerCase()) || creator.id.toString().includes(searchTerm)
          );
          setSearchResults(filtered);
        }
      } catch (error) {
        console.error("Search failed:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };
    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, sdkConfig.sdk, chainId, topCreators]);
  const CreatorCard = ({ creator, isSelected }) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick: () => onCreatorSelect(creator),
      className: `p-3 border rounded-lg cursor-pointer transition-colors ${isSelected ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-orange-300 hover:bg-orange-25"}`,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3", children: /* @__PURE__ */ jsxRuntime.jsx(User, { className: "w-4 h-4 text-orange-600" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-medium text-gray-800", children: [
              "ID #",
              creator.id
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: truncateAddress(creator.wallet) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-orange-600", children: formatTokenAmount(creator.totalTips || "0") }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
            creator.tipCount || 0,
            " tips"
          ] })
        ] })
      ] })
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-6 h-6 text-orange-600 mr-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: "Select Creator" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search by Creator ID or wallet address...",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        }
      ),
      isSearching && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-4 w-4 text-orange-600", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: searchTerm ? (
      // Search results
      searchResults.length > 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600 mb-2", children: "Search Results" }),
        searchResults.map((creator) => /* @__PURE__ */ jsxRuntime.jsx(
          CreatorCard,
          {
            creator,
            isSelected: creator.id === selectedCreatorId
          },
          creator.id
        ))
      ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-center py-4 text-gray-500", children: isSearching ? "Searching..." : "No creators found" })
    ) : (
      // Top creators
      isLoadingTop ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-6 w-6 text-orange-600 mx-auto", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
          /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-600 mt-2", children: "Loading top creators..." })
      ] }) : topCreators.length > 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600 mb-2", children: "Top Creators" }),
        topCreators.map((creator) => /* @__PURE__ */ jsxRuntime.jsx(
          CreatorCard,
          {
            creator,
            isSelected: creator.id === selectedCreatorId
          },
          creator.id
        ))
      ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-center py-4 text-gray-500", children: "No creators found on this chain" })
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-600 bg-gray-50 p-3 rounded mt-4", children: '\u{1F4A1} You can search by Creator ID (e.g., "1") or wallet address to find specific creators.' })
  ] });
};
var CreatorManagement = ({
  sdkConfig,
  chainId,
  onCreatorAdded,
  className = ""
}) => {
  const [newCreatorWallet, setNewCreatorWallet] = react.useState("");
  const [isAddingCreator, setIsAddingCreator] = react.useState(false);
  const [platformStats, setPlatformStats] = react.useState(null);
  const [isLoadingStats, setIsLoadingStats] = react.useState(true);
  const [recentCreators, setRecentCreators] = react.useState([]);
  const [editingCreatorId, setEditingCreatorId] = react.useState(null);
  const [newWalletAddress, setNewWalletAddress] = react.useState("");
  const [isUpdatingWallet, setIsUpdatingWallet] = react.useState(false);
  react.useEffect(() => {
    const loadData = async () => {
      setIsLoadingStats(true);
      try {
        const [stats, creators] = await Promise.all([
          sdkConfig.sdk.getPlatformStats(chainId),
          sdkConfig.sdk.getTopCreators(5, chainId)
        ]);
        setPlatformStats(stats);
        setRecentCreators(creators);
      } catch (error) {
        console.error("Failed to load platform data:", error);
      } finally {
        setIsLoadingStats(false);
      }
    };
    loadData();
  }, [sdkConfig.sdk, chainId]);
  const handleAddCreator = async () => {
    if (!newCreatorWallet.trim() || !isValidAddress(newCreatorWallet)) {
      alert("Please enter a valid wallet address");
      return;
    }
    setIsAddingCreator(true);
    try {
      const creatorId = await sdkConfig.sdk.addCreator({
        creatorWallet: newCreatorWallet,
        chainId,
        tier: 1
        // Default to tier 1 for new creators
      });
      alert(`\u2705 Creator added successfully with ID: ${creatorId}`);
      setNewCreatorWallet("");
      onCreatorAdded?.(creatorId);
      const [stats, creators] = await Promise.all([
        sdkConfig.sdk.getPlatformStats(chainId),
        sdkConfig.sdk.getTopCreators(5, chainId)
      ]);
      setPlatformStats(stats);
      setRecentCreators(creators);
    } catch (error) {
      console.error("Failed to add creator:", error);
      alert(`\u274C Failed to add creator: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsAddingCreator(false);
    }
  };
  const handleUpdateWallet = async () => {
    if (!editingCreatorId || !newWalletAddress.trim() || !isValidAddress(newWalletAddress)) {
      alert("Please enter a valid wallet address");
      return;
    }
    setIsUpdatingWallet(true);
    try {
      await sdkConfig.sdk.updateCreatorWallet(editingCreatorId, newWalletAddress, chainId);
      alert("\u2705 Creator wallet updated successfully!");
      setEditingCreatorId(null);
      setNewWalletAddress("");
      const creators = await sdkConfig.sdk.getTopCreators(5, chainId);
      setRecentCreators(creators);
    } catch (error) {
      console.error("Failed to update wallet:", error);
      alert(`\u274C Failed to update wallet: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsUpdatingWallet(false);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx(UserPlus, { className: "w-6 h-6 text-orange-600 mr-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: "Creator Management" })
    ] }),
    isLoadingStats ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gray-50 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 bg-gray-300 rounded w-1/4 mb-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 bg-gray-300 rounded w-1/2" })
    ] }) }) : platformStats && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-5 h-5 text-orange-600 mr-2" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-800", children: "Platform Statistics" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-600", children: "Active Creators" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-bold text-orange-600 text-lg", children: platformStats.activeCreators })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-600", children: "Total Tips" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-bold text-purple-600 text-lg", children: formatTokenAmount(platformStats.totalTips) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-600", children: "Tip Count" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium text-gray-800", children: platformStats.totalCount.toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-gray-600", children: "Auto Relay" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: `font-medium ${platformStats.autoRelayEnabled ? "text-green-600" : "text-red-600"}`, children: platformStats.autoRelayEnabled ? "Enabled" : "Disabled" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border border-gray-200 rounded-lg p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-800 mb-3", children: "Add New Creator" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "text",
            placeholder: "0x... Creator wallet address",
            value: newCreatorWallet,
            onChange: (e) => setNewCreatorWallet(e.target.value),
            className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleAddCreator,
            disabled: isAddingCreator || !newCreatorWallet.trim(),
            className: `px-4 py-2 rounded-md font-medium transition-colors ${isAddingCreator || !newCreatorWallet.trim() ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-700"}`,
            children: isAddingCreator ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "animate-spin h-4 w-4 mr-1", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                /* @__PURE__ */ jsxRuntime.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
              ] }),
              "Adding..."
            ] }) : "Add Creator"
          }
        )
      ] }),
      newCreatorWallet && !isValidAddress(newCreatorWallet) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mt-2 text-red-600 text-sm", children: [
        /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 mr-1" }),
        "Please enter a valid Ethereum address"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-800 mb-3", children: "Recent Creators" }),
      recentCreators.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-center py-4 text-gray-500", children: "No creators found. Add the first creator above!" }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-3", children: recentCreators.map((creator) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-medium text-gray-800", children: [
            "ID #",
            creator.id
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: truncateAddress(creator.wallet) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
            formatTokenAmount(creator.totalTips || "0"),
            " tokens \u2022 ",
            creator.tipCount || 0,
            " tips"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => {
              setEditingCreatorId(creator.id);
              setNewWalletAddress("");
            },
            className: "p-1 text-gray-400 hover:text-orange-600 transition-colors",
            title: "Update wallet address",
            children: /* @__PURE__ */ jsxRuntime.jsx(PenLine, { className: "w-4 h-4" })
          }
        ) })
      ] }, creator.id)) })
    ] }),
    editingCreatorId !== null && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-6 w-full max-w-md mx-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-800 mb-4", children: "Update Creator Wallet" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-600 mb-2", children: [
          "Creator ID #",
          editingCreatorId
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "text",
            placeholder: "0x... New wallet address",
            value: newWalletAddress,
            onChange: (e) => setNewWalletAddress(e.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          }
        ),
        newWalletAddress && !isValidAddress(newWalletAddress) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mt-2 text-red-600 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 mr-1" }),
          "Please enter a valid Ethereum address"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => {
              setEditingCreatorId(null);
              setNewWalletAddress("");
            },
            className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleUpdateWallet,
            disabled: isUpdatingWallet || !isValidAddress(newWalletAddress),
            className: `flex-1 px-4 py-2 rounded-md font-medium transition-colors ${isUpdatingWallet || !isValidAddress(newWalletAddress) ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-700"}`,
            children: isUpdatingWallet ? "Updating..." : "Update"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-600 bg-blue-50 p-3 rounded mt-4", children: "\u{1F527} Creator Management allows you to add new creators and update wallet addresses for lost wallet recovery." })
  ] });
};
var ViewerSelector = ({
  sdkConfig,
  onSelect,
  className = "",
  theme = "light",
  allowDirectAddress = true,
  chainId = 137,
  // Default to Polygon
  placeholder = "Search for viewer..."
}) => {
  const [searchType, setSearchType] = react.useState("id");
  const [searchValue, setSearchValue] = react.useState("");
  const [loading, setLoading] = react.useState(false);
  const [error, setError] = react.useState("");
  const [viewer, setViewer] = react.useState(null);
  const isDark = theme === "dark";
  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setError("Please enter a value to search");
      return;
    }
    setLoading(true);
    setError("");
    setViewer(null);
    try {
      let result = null;
      switch (searchType) {
        case "id":
          const viewerId = parseInt(searchValue);
          if (isNaN(viewerId)) {
            throw new Error("Invalid viewer ID");
          }
          result = await sdkConfig.sdk.getViewer(viewerId, chainId);
          break;
        case "thirdweb":
          result = await sdkConfig.sdk.getViewerByThirdwebId(searchValue, chainId);
          break;
        case "address":
          if (!searchValue.match(/^0x[a-fA-F0-9]{40}$/)) {
            throw new Error("Invalid wallet address");
          }
          result = await sdkConfig.sdk.getViewerByWallet(searchValue, chainId);
          break;
      }
      if (result) {
        setViewer(result);
      } else if (searchType === "address" && allowDirectAddress) {
        setViewer(null);
        onSelect({ address: searchValue });
        return;
      } else {
        setError("Viewer not found");
      }
    } catch (err) {
      setError(err.message || "Failed to search for viewer");
    } finally {
      setLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSelectViewer = () => {
    if (viewer) {
      onSelect(viewer);
    } else if (searchType === "address" && allowDirectAddress && searchValue) {
      onSelect({ address: searchValue });
    }
  };
  const getPlaceholder = () => {
    switch (searchType) {
      case "id":
        return "Enter viewer ID (e.g., 123)";
      case "thirdweb":
        return "Enter thirdweb account ID";
      case "address":
        return "Enter wallet address (0x...)";
      default:
        return placeholder;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setSearchType("id"),
          className: `flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${searchType === "id" ? isDark ? "bg-orange-600 text-white" : "bg-orange-600 text-white" : isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Hash, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "ID" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setSearchType("thirdweb"),
          className: `flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${searchType === "thirdweb" ? isDark ? "bg-orange-600 text-white" : "bg-orange-600 text-white" : isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(User, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Thirdweb" })
          ]
        }
      ),
      allowDirectAddress && /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setSearchType("address"),
          className: `flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${searchType === "address" ? isDark ? "bg-orange-600 text-white" : "bg-orange-600 text-white" : isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Wallet, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Address" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          type: "text",
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value),
          onKeyPress: handleKeyPress,
          placeholder: getPlaceholder(),
          className: `flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300"}`,
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: handleSearch,
          disabled: loading || !searchValue.trim(),
          className: `px-4 py-2 rounded-md font-medium transition-colors flex items-center space-x-2 ${loading || !searchValue.trim() ? "bg-gray-300 text-gray-500 cursor-not-allowed" : isDark ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Search, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Search" })
          ]
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: `mt-2 text-sm ${isDark ? "text-red-400" : "text-red-600"}`, children: error }),
    viewer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mt-3 p-3 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`, children: [
          "Viewer #",
          viewer.id
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
          viewer.wallet.slice(0, 6),
          "...",
          viewer.wallet.slice(-4)
        ] }),
        viewer.totalReceived !== "0" && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
          "Total received: ",
          (parseFloat(viewer.totalReceived) / 1e18).toFixed(4),
          " MATIC"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleSelectViewer,
          className: `px-3 py-1 text-sm rounded-md font-medium transition-colors ${isDark ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`,
          children: "Select"
        }
      )
    ] }) }),
    searchType === "address" && allowDirectAddress && searchValue && !viewer && !loading && !error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `mt-3 p-3 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"} mb-2`, children: "This address is not registered as a viewer. You can still send rewards directly." }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleSelectViewer,
          className: `w-full px-3 py-1 text-sm rounded-md font-medium transition-colors ${isDark ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`,
          children: "Use Direct Address"
        }
      )
    ] })
  ] });
};
var ViewerRewardInterface = ({
  sdkConfig,
  creatorId,
  className = "",
  onRewardSent,
  theme = "light"
}) => {
  const account = react$1.useActiveAccount();
  const activeChain = react$1.useActiveWalletChain();
  const [selectedViewer, setSelectedViewer] = react.useState(null);
  const [amount, setAmount] = react.useState("");
  const [reason, setReason] = react.useState("");
  const [loading, setLoading] = react.useState(false);
  const [error, setError] = react.useState("");
  const [success, setSuccess] = react.useState(false);
  const [isCreator, setIsCreator] = react.useState(false);
  const [rewardsEnabled, setRewardsEnabled] = react.useState(true);
  const [lastResult, setLastResult] = react.useState(null);
  const [showSelector, setShowSelector] = react.useState(true);
  const isDark = theme === "dark";
  const chainId = activeChain?.id || 137;
  react.useEffect(() => {
    const checkCreatorStatus = async () => {
      if (!account?.address || !sdkConfig.sdk) return;
      try {
        const creatorIdFromWallet = await sdkConfig.sdk.getCreatorByWallet(
          account.address,
          chainId
        );
        setIsCreator(creatorIdFromWallet > 0);
        const enabled = await sdkConfig.sdk.areViewerRewardsEnabled(chainId);
        setRewardsEnabled(enabled);
      } catch (err) {
        console.error("Failed to check creator status:", err);
      }
    };
    checkCreatorStatus();
  }, [account, chainId, sdkConfig.sdk]);
  const handleSendReward = async () => {
    if (!account) {
      setError("Please connect your wallet");
      return;
    }
    if (!isCreator) {
      setError("Only creators can send viewer rewards");
      return;
    }
    if (!selectedViewer || !amount) {
      setError("Please select a viewer and enter an amount");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const rewardParams = {
        amount: (parseFloat(amount) * 1e18).toString(),
        // Convert to wei
        reason,
        token: "native",
        chainId
      };
      if ("id" in selectedViewer) {
        rewardParams.viewerId = selectedViewer.id;
      } else {
        rewardParams.viewerAddress = selectedViewer.address;
      }
      const result = await sdkConfig.sdk.rewardViewer(rewardParams);
      if (result.success) {
        setSuccess(true);
        setLastResult(result);
        setSelectedViewer(null);
        setAmount("");
        setReason("");
        setShowSelector(true);
        if (onRewardSent) {
          onRewardSent(result);
        }
        setTimeout(() => {
          setSuccess(false);
          setLastResult(null);
        }, 7e3);
      } else {
        setError(result.error || "Failed to send reward");
      }
    } catch (err) {
      setError(err.message || "Failed to send reward");
    } finally {
      setLoading(false);
    }
  };
  const calculateFees = () => {
    if (!amount || isNaN(parseFloat(amount))) return { fee: "0", viewer: "0" };
    const amountNum = parseFloat(amount);
    const fee = amountNum * 0.01;
    const viewer = amountNum * 0.99;
    return {
      fee: fee.toFixed(6),
      viewer: viewer.toFixed(6)
    };
  };
  const fees = calculateFees();
  const nativeSymbol = activeChain?.nativeCurrency?.symbol || "MATIC";
  if (!rewardsEnabled) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 text-yellow-600", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium", children: "Viewer rewards are currently disabled" })
    ] }) });
  }
  if (!isCreator && account) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 text-gray-500", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { children: "Only registered creators can send viewer rewards" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Send, { className: `w-6 h-6 ${isDark ? "text-orange-400" : "text-orange-600"} mr-2` }),
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: `text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`, children: "Reward Viewer" })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 text-red-600 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-700 text-sm", children: error })
    ] }),
    success && lastResult && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4 p-3 bg-green-50 border border-green-200 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-green-700 text-sm font-medium", children: "Reward sent successfully!" })
      ] }),
      lastResult.estimatedUsdcAmount && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-green-600 text-xs ml-6", children: [
        "Viewer will receive ~",
        (parseFloat(lastResult.estimatedUsdcAmount) / 1e6).toFixed(2),
        " USDC on ApeChain"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
      showSelector && !selectedViewer ? /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Select Viewer" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ViewerSelector,
          {
            sdkConfig,
            onSelect: (viewer) => {
              setSelectedViewer(viewer);
              setShowSelector(false);
              setError("");
            },
            theme,
            chainId
          }
        )
      ] }) : selectedViewer && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: `block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Selected Viewer" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: `p-3 rounded-md border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { children: "id" in selectedViewer ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`, children: [
              "Viewer #",
              selectedViewer.id
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
              selectedViewer.wallet.slice(0, 6),
              "...",
              selectedViewer.wallet.slice(-4)
            ] })
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-sm font-mono ${isDark ? "text-white" : "text-gray-900"}`, children: [
            selectedViewer.address.slice(0, 6),
            "...",
            selectedViewer.address.slice(-4)
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => {
                setSelectedViewer(null);
                setShowSelector(true);
              },
              className: `text-sm px-2 py-1 rounded ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"}`,
              children: "Change"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("label", { className: `block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: [
          "Amount (",
          nativeSymbol,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "number",
            step: "0.001",
            placeholder: "0.1",
            value: amount,
            onChange: (e) => setAmount(e.target.value),
            className: `w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300"}`,
            disabled: loading
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: `block text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Reason (Optional)" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "text",
            placeholder: "Great question!",
            value: reason,
            onChange: (e) => setReason(e.target.value),
            maxLength: 100,
            className: `w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300"}`,
            disabled: loading
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
          reason.length,
          "/100 characters"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-lg p-4 text-sm ${isDark ? "bg-gray-700" : "bg-gray-50"}`, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Platform Fee (1%)" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-gray-200" : "text-gray-900"}`, children: [
            fees.fee,
            " ",
            nativeSymbol
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Viewer Receives" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-green-400" : "text-green-600"}`, children: [
            fees.viewer,
            " ",
            nativeSymbol
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: `pt-2 mt-2 border-t ${isDark ? "border-gray-600" : "border-gray-300"}`, children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "\u{1F4B0} Rewards are automatically converted to USDC and sent to ApeChain" }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleSendReward,
          disabled: loading || !account || !isCreator,
          className: `w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${loading || !account || !isCreator ? "bg-gray-300 text-gray-500 cursor-not-allowed" : isDark ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`,
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Sending..." })
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Send, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Send Reward" })
          ] })
        }
      ),
      !account && /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-center text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "Connect your wallet to send rewards" })
    ] })
  ] });
};
var BatchViewerReward = ({
  sdkConfig,
  creatorId,
  className = "",
  onBatchSent,
  theme = "light",
  maxViewers = 50
}) => {
  const account = react$1.useActiveAccount();
  const activeChain = react$1.useActiveWalletChain();
  const [viewers, setViewers] = react.useState([
    { id: "1", address: "", amount: "", reason: "" }
  ]);
  const [loading, setLoading] = react.useState(false);
  const [error, setError] = react.useState("");
  const [success, setSuccess] = react.useState(false);
  const [isCreator, setIsCreator] = react.useState(false);
  const [rewardsEnabled, setRewardsEnabled] = react.useState(true);
  const [lastResult, setLastResult] = react.useState(null);
  const isDark = theme === "dark";
  const chainId = activeChain?.id || 137;
  react.useEffect(() => {
    const checkCreatorStatus = async () => {
      if (!account?.address || !sdkConfig.sdk) return;
      try {
        const creatorIdFromWallet = await sdkConfig.sdk.getCreatorByWallet(
          account.address,
          chainId
        );
        setIsCreator(creatorIdFromWallet > 0);
        const enabled = await sdkConfig.sdk.areViewerRewardsEnabled(chainId);
        setRewardsEnabled(enabled);
      } catch (err) {
        console.error("Failed to check creator status:", err);
      }
    };
    checkCreatorStatus();
  }, [account, chainId, sdkConfig.sdk]);
  const addViewer = () => {
    if (viewers.length >= maxViewers) {
      setError(`Maximum ${maxViewers} viewers allowed per batch`);
      return;
    }
    const newId = (Math.max(...viewers.map((v) => parseInt(v.id))) + 1).toString();
    setViewers([...viewers, { id: newId, address: "", amount: "", reason: "" }]);
  };
  const removeViewer = (id) => {
    if (viewers.length <= 1) return;
    setViewers(viewers.filter((v) => v.id !== id));
  };
  const updateViewer = (id, field, value) => {
    setViewers(viewers.map((v) => v.id === id ? { ...v, [field]: value } : v));
  };
  const validateViewers = () => {
    for (const viewer of viewers) {
      if (!viewer.address || !viewer.amount) {
        setError("Please fill in all required fields (address and amount)");
        return false;
      }
      if (!viewer.address.match(/^0x[a-fA-F0-9]{40}$/)) {
        setError(`Invalid wallet address: ${viewer.address}`);
        return false;
      }
      const amount = parseFloat(viewer.amount);
      if (isNaN(amount) || amount <= 0) {
        setError(`Invalid amount for ${viewer.address}`);
        return false;
      }
    }
    const addresses = viewers.map((v) => v.address.toLowerCase());
    const uniqueAddresses = new Set(addresses);
    if (addresses.length !== uniqueAddresses.size) {
      setError("Duplicate addresses found");
      return false;
    }
    return true;
  };
  const handleSendBatch = async () => {
    if (!account) {
      setError("Please connect your wallet");
      return;
    }
    if (!isCreator) {
      setError("Only creators can send viewer rewards");
      return;
    }
    if (!validateViewers()) {
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const viewerData = viewers.map((v) => ({
        address: v.address,
        amount: (parseFloat(v.amount) * 1e18).toString(),
        // Convert to wei
        reason: v.reason
      }));
      const result = await sdkConfig.sdk.batchRewardViewers({
        viewers: viewerData,
        chainId
      });
      if (result.success) {
        setSuccess(true);
        setLastResult(result);
        setViewers([{ id: "1", address: "", amount: "", reason: "" }]);
        if (onBatchSent) {
          onBatchSent(result);
        }
        setTimeout(() => {
          setSuccess(false);
          setLastResult(null);
        }, 7e3);
      } else {
        setError(result.error || "Failed to send batch rewards");
      }
    } catch (err) {
      setError(err.message || "Failed to send batch rewards");
    } finally {
      setLoading(false);
    }
  };
  const calculateTotals = () => {
    const total = viewers.reduce((sum, v) => {
      const amount = parseFloat(v.amount) || 0;
      return sum + amount;
    }, 0);
    const fee = total * 0.01;
    const toViewers = total * 0.99;
    return {
      total: total.toFixed(6),
      fee: fee.toFixed(6),
      toViewers: toViewers.toFixed(6)
    };
  };
  const totals = calculateTotals();
  const nativeSymbol = activeChain?.nativeCurrency?.symbol || "MATIC";
  if (!rewardsEnabled) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 text-yellow-600", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium", children: "Viewer rewards are currently disabled" })
    ] }) });
  }
  if (!isCreator && account) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 text-gray-500", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { children: "Only registered creators can send viewer rewards" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: `w-6 h-6 ${isDark ? "text-orange-400" : "text-orange-600"} mr-2` }),
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: `text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`, children: "Batch Reward Viewers" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
        viewers.length,
        "/",
        maxViewers,
        " viewers"
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 text-red-600 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-700 text-sm", children: error })
    ] }),
    success && lastResult && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4 p-3 bg-green-50 border border-green-200 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-green-700 text-sm font-medium", children: "Batch rewards sent successfully!" })
      ] }),
      lastResult.estimatedUsdcAmount && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-green-600 text-xs ml-6", children: [
        "Viewers will receive ~",
        (parseFloat(lastResult.estimatedUsdcAmount) / 1e6).toFixed(2),
        " USDC total on ApeChain"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-3 mb-4", children: viewers.map((viewer, index) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: `p-4 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("label", { className: `block text-xs font-medium mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Viewer Address" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                type: "text",
                placeholder: "0x...",
                value: viewer.address,
                onChange: (e) => updateViewer(viewer.id, "address", e.target.value),
                className: `w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400" : "bg-white border-gray-300"}`,
                disabled: loading
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("label", { className: `block text-xs font-medium mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
              "Amount (",
              nativeSymbol,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                type: "number",
                step: "0.001",
                placeholder: "0.1",
                value: viewer.amount,
                onChange: (e) => updateViewer(viewer.id, "amount", e.target.value),
                className: `w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400" : "bg-white border-gray-300"}`,
                disabled: loading
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: `block text-xs font-medium mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Reason (Optional)" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "text",
              placeholder: "Great contribution!",
              value: viewer.reason,
              onChange: (e) => updateViewer(viewer.id, "reason", e.target.value),
              maxLength: 100,
              className: `w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${isDark ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400" : "bg-white border-gray-300"}`,
              disabled: loading
            }
          )
        ] })
      ] }),
      viewers.length > 1 && /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => removeViewer(viewer.id),
          disabled: loading,
          className: `p-2 rounded-md transition-colors ${loading ? "opacity-50 cursor-not-allowed" : isDark ? "text-gray-400 hover:text-red-400 hover:bg-gray-600" : "text-gray-400 hover:text-red-600 hover:bg-gray-100"}`,
          children: /* @__PURE__ */ jsxRuntime.jsx(Trash2, { className: "w-4 h-4" })
        }
      )
    ] }) }, viewer.id)) }),
    viewers.length < maxViewers && /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: addViewer,
        disabled: loading,
        className: `w-full py-2 mb-4 border-2 border-dashed rounded-lg flex items-center justify-center space-x-2 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : isDark ? "border-gray-600 text-gray-400 hover:border-orange-600 hover:text-orange-400" : "border-gray-300 text-gray-500 hover:border-orange-500 hover:text-orange-600"}`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: "Add Viewer" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-lg p-4 text-sm mb-4 ${isDark ? "bg-gray-700" : "bg-gray-50"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Total Amount" }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-gray-200" : "text-gray-900"}`, children: [
          totals.total,
          " ",
          nativeSymbol
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Platform Fee (1%)" }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-gray-200" : "text-gray-900"}`, children: [
          totals.fee,
          " ",
          nativeSymbol
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-2 border-t border-gray-300 dark:border-gray-600", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Viewers Receive" }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-green-400" : "text-green-600"}`, children: [
          totals.toViewers,
          " ",
          nativeSymbol
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-2 border-t border-gray-300 dark:border-gray-600", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "\u{1F4B0} Rewards are automatically converted to USDC and sent to ApeChain" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        onClick: handleSendBatch,
        disabled: loading || !account || !isCreator || viewers.length === 0,
        className: `w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${loading || !account || !isCreator || viewers.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : isDark ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-orange-600 text-white hover:bg-orange-700"}`,
        children: loading ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Sending..." })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Send Batch Rewards" })
        ] })
      }
    ),
    !account && /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-center text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "Connect your wallet to send rewards" })
  ] });
};
var ViewerRewardStats = ({
  sdkConfig,
  address,
  className = "",
  theme = "light",
  autoRefresh = false,
  refreshInterval = 30
}) => {
  const account = react$1.useActiveAccount();
  const activeChain = react$1.useActiveWalletChain();
  const [stats, setStats] = react.useState({
    totalRewardsGiven: "0",
    totalRewardsReceived: "0",
    rewardCount: 0,
    loading: true
  });
  const [isRefreshing, setIsRefreshing] = react.useState(false);
  const isDark = theme === "dark";
  const chainId = activeChain?.id || sdk.SUPPORTED_CHAINS.POLYGON;
  const targetAddress = address || account?.address;
  const fetchStats = async () => {
    if (!targetAddress || !sdkConfig.sdk) return;
    try {
      setIsRefreshing(true);
      const userStats = await sdkConfig.sdk.getViewerRewardStats(targetAddress, chainId);
      const platformStats = await sdkConfig.sdk.getViewerRewardsPlatformStats(chainId);
      let usdcBalance = "0";
      try {
        usdcBalance = await sdkConfig.sdk.getViewerUsdcBalanceOnApeChain(targetAddress);
      } catch (err) {
        console.log("Could not fetch USDC balance on ApeChain");
      }
      setStats({
        ...userStats,
        usdcBalance,
        platformStats,
        loading: false
      });
    } catch (err) {
      console.error("Failed to fetch viewer reward stats:", err);
      setStats((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load statistics"
      }));
    } finally {
      setIsRefreshing(false);
    }
  };
  react.useEffect(() => {
    fetchStats();
    if (autoRefresh && refreshInterval > 0) {
      const interval = setInterval(fetchStats, refreshInterval * 1e3);
      return () => clearInterval(interval);
    }
  }, [targetAddress, chainId, autoRefresh, refreshInterval]);
  const formatAmount = (wei) => {
    const ether = parseFloat(wei) / 1e18;
    if (ether === 0) return "0";
    if (ether < 1e-3) return "< 0.001";
    if (ether < 1) return ether.toFixed(3);
    if (ether < 1e3) return ether.toFixed(2);
    return ether.toLocaleString(void 0, { maximumFractionDigits: 2 });
  };
  const formatUsdc = (microUsdc) => {
    const usdc = parseFloat(microUsdc) / 1e6;
    if (usdc === 0) return "0.00";
    if (usdc < 0.01) return "< 0.01";
    return usdc.toFixed(2);
  };
  const nativeSymbol = activeChain?.nativeCurrency?.symbol || "MATIC";
  if (!targetAddress) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-center ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "Connect wallet to view statistics" }) });
  }
  if (stats.loading && !isRefreshing) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: "w-5 h-5 animate-spin text-orange-500" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: isDark ? "text-gray-400" : "text-gray-500", children: "Loading statistics..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-xl shadow-lg p-6 ${isDark ? "bg-gray-800" : "bg-white"} ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: `w-6 h-6 ${isDark ? "text-orange-400" : "text-orange-600"} mr-2` }),
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: `text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`, children: "Viewer Reward Statistics" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: fetchStats,
          disabled: isRefreshing,
          className: `p-2 rounded-md transition-colors ${isRefreshing ? "opacity-50 cursor-not-allowed" : isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`,
          title: "Refresh statistics",
          children: /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-4 h-4 ${isRefreshing ? "animate-spin" : ""}` })
        }
      )
    ] }),
    stats.error ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: `text-center py-4 ${isDark ? "text-gray-400" : "text-gray-500"}`, children: stats.error }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      stats.usdcBalance && parseFloat(stats.usdcBalance) > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mb-4 p-4 rounded-lg ${isDark ? "bg-orange-900/20 border border-orange-700" : "bg-orange-50 border border-orange-200"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-sm font-medium ${isDark ? "text-orange-400" : "text-orange-700"}`, children: "USDC Balance on ApeChain" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: [
            "$",
            formatUsdc(stats.usdcBalance)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: `p-3 rounded-full ${isDark ? "bg-orange-800/30" : "bg-orange-100"}`, children: /* @__PURE__ */ jsxRuntime.jsx(Award, { className: `w-6 h-6 ${isDark ? "text-orange-400" : "text-orange-600"}` }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-lg p-4 ${isDark ? "bg-gray-700" : "bg-gray-50"}`, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Award, { className: `w-4 h-4 ${isDark ? "text-green-400" : "text-green-600"} mr-2` }),
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Rewards Given" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatAmount(stats.totalRewardsGiven) }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"} mt-1`, children: nativeSymbol })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-lg p-4 ${isDark ? "bg-gray-700" : "bg-gray-50"}`, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Award, { className: `w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"} mr-2` }),
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Rewards Received" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatAmount(stats.totalRewardsReceived) }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"} mt-1`, children: nativeSymbol })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-lg p-4 ${isDark ? "bg-gray-700" : "bg-gray-50"}`, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Users, { className: `w-4 h-4 ${isDark ? "text-purple-400" : "text-purple-600"} mr-2` }),
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Total Rewards" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: stats.rewardCount }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"} mt-1`, children: "Transactions" })
        ] })
      ] }),
      stats.platformStats && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `border-t pt-4 ${isDark ? "border-gray-700" : "border-gray-200"}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: `text-sm font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Platform Overview" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: `text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "Total Platform Rewards" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-white" : "text-gray-900"}`, children: [
              formatAmount(stats.platformStats.totalRewards),
              " ",
              nativeSymbol
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: `text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`, children: "Platform Fee" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `font-medium ${isDark ? "text-white" : "text-gray-900"}`, children: [
              stats.platformStats.platformFeeRate / 100,
              "%"
            ] })
          ] })
        ] }),
        !stats.platformStats.rewardsEnabled && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mt-3 p-2 rounded text-sm text-center ${isDark ? "bg-yellow-900/50 text-yellow-400" : "bg-yellow-50 text-yellow-700"}`, children: "Viewer rewards are currently disabled on this chain" })
      ] }),
      address && address !== account?.address && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mt-4 pt-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
        "Viewing statistics for: ",
        address.slice(0, 6),
        "...",
        address.slice(-4)
      ] }) })
    ] })
  ] });
};
var TransactionStatusMessage = ({
  status,
  error,
  successMessage = "Transaction completed successfully!",
  processingMessage = "Processing transaction...",
  className = ""
}) => {
  if (status === "idle") return null;
  const statusStyles = {
    processing: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `rounded-lg p-4 border ${statusStyles[status]} ${className}`, children: [
    status === "processing" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-current" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: processingMessage })
    ] }),
    status === "success" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-green-600", children: "\u2713" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { children: successMessage })
    ] }),
    status === "error" && error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-red-600", children: "\u2717" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium", children: "Transaction failed" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm mt-1", children: error.message })
      ] })
    ] })
  ] });
};
var ChainSelector = ({
  value,
  onChange,
  label = "Select Chain",
  excludeChains = [contractsInterface.SUPPORTED_CHAINS.APECHAIN],
  // Exclude ApeChain by default as it's destination only
  className = "",
  disabled = false
}) => {
  const chainOptions = Object.entries(contractsInterface.SUPPORTED_CHAINS).filter(([_, chainId]) => !excludeChains.includes(chainId)).map(([key, chainId]) => {
    const config = contractsInterface.NETWORK_CONFIGS[chainId];
    return {
      id: chainId,
      name: config?.name || key,
      symbol: config?.nativeCurrency.symbol || "ETH"
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium mb-1", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "select",
      {
        value: value || "",
        onChange: (e) => onChange(Number(e.target.value)),
        className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", children: "Select a chain" }),
          chainOptions.map((chain) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: chain.id, children: [
            chain.name,
            " (",
            chain.symbol,
            ")"
          ] }, chain.id))
        ]
      }
    )
  ] });
};
var Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: `
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled || loading ? disabledStyles : ""}
        ${className}
      `,
      disabled: disabled || loading,
      ...props,
      children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-current" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Processing..." })
      ] }) : children
    }
  );
};
var RewardPoolInterface = ({
  sdk,
  onSuccess,
  onError,
  className = ""
}) => {
  const [totalAmount, setTotalAmount] = react.useState("");
  const [viewerAddresses, setViewerAddresses] = react.useState("");
  const [reason, setReason] = react.useState("");
  const [chainId, setChainId] = react.useState();
  const [isProcessing, setIsProcessing] = react.useState(false);
  const [status, setStatus] = react.useState("idle");
  const [result, setResult] = react.useState(null);
  const [error, setError] = react.useState(null);
  const [preview, setPreview] = react.useState(null);
  const parseViewerAddresses = react.useCallback((input) => {
    const addresses = input.split(/[,\n\s]+/).map((addr) => addr.trim()).filter((addr) => addr.length > 0 && addr.startsWith("0x"));
    return [...new Set(addresses)];
  }, []);
  const handlePreview = react.useCallback(() => {
    try {
      const addresses = parseViewerAddresses(viewerAddresses);
      if (addresses.length === 0) {
        setError(new Error("No valid addresses found"));
        return;
      }
      if (!totalAmount || parseFloat(totalAmount) <= 0) {
        setError(new Error("Please enter a valid amount"));
        return;
      }
      const amountWei = ethers.ethers.parseEther(totalAmount).toString();
      const calculation = sdk.calculateRewardPoolDistribution(amountWei, addresses.length);
      setPreview(calculation);
      setError(null);
    } catch (err) {
      setError(new Error(err.message || "Failed to calculate preview"));
      setPreview(null);
    }
  }, [totalAmount, viewerAddresses, sdk]);
  const handleCreatePool = react.useCallback(async () => {
    if (!totalAmount || !viewerAddresses) {
      setError(new Error("Please fill in all required fields"));
      return;
    }
    const addresses = parseViewerAddresses(viewerAddresses);
    if (addresses.length === 0) {
      setError(new Error("No valid addresses found"));
      return;
    }
    setIsProcessing(true);
    setStatus("processing");
    setError(null);
    setResult(null);
    try {
      const params = {
        totalAmount: ethers.ethers.parseEther(totalAmount).toString(),
        viewerAddresses: addresses,
        reason: reason || void 0,
        chainId
      };
      const poolResult = await sdk.createRewardPool(params);
      if (poolResult.success) {
        setStatus("success");
        setResult(poolResult);
        onSuccess?.(poolResult);
        setTotalAmount("");
        setViewerAddresses("");
        setReason("");
        setPreview(null);
      } else {
        throw new Error(poolResult.error || "Failed to create reward pool");
      }
    } catch (err) {
      setStatus("error");
      setError(err);
      onError?.(err);
    } finally {
      setIsProcessing(false);
    }
  }, [totalAmount, viewerAddresses, reason, chainId, sdk, onSuccess, onError, parseViewerAddresses]);
  const formatAmount = (wei) => {
    try {
      return ethers.ethers.formatEther(wei);
    } catch {
      return "0";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Create Reward Pool" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Distribute funds equally among multiple viewers. Platform takes 1% fee, remainder is split evenly." })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium mb-1", children: "Total Amount to Distribute" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "number",
            value: totalAmount,
            onChange: (e) => setTotalAmount(e.target.value),
            placeholder: "0.0",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            min: "0",
            step: "0.01",
            disabled: isProcessing
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium mb-1", children: "Viewer Addresses" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "textarea",
          {
            value: viewerAddresses,
            onChange: (e) => setViewerAddresses(e.target.value),
            placeholder: "Enter addresses separated by commas or new lines\n0x123..., 0x456...\n0x789...",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            rows: 5,
            disabled: isProcessing
          }
        ),
        viewerAddresses && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
          parseViewerAddresses(viewerAddresses).length,
          " unique addresses found"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium mb-1", children: "Reason (optional)" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "text",
            value: reason,
            onChange: (e) => setReason(e.target.value),
            placeholder: "Community reward, event prize, etc.",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            disabled: isProcessing
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        ChainSelector,
        {
          value: chainId,
          onChange: setChainId,
          label: "Select Chain"
        }
      )
    ] }),
    preview && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg space-y-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium", children: "Distribution Preview" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm space-y-1", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Total Amount:" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono", children: [
            formatAmount(preview.totalAmount),
            " tokens"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Platform Fee (1%):" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-red-600", children: [
            "-",
            formatAmount(preview.platformFee),
            " tokens"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Distributable Amount:" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono", children: [
            formatAmount(preview.distributableAmount),
            " tokens"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between font-semibold", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            "Per Viewer (",
            preview.viewerCount,
            " viewers):"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-green-600", children: [
            formatAmount(preview.perViewerAmount),
            " tokens"
          ] })
        ] }),
        preview.batchCount > 1 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500 mt-2", children: [
          "Will be processed in ",
          preview.batchCount,
          " batches (50 viewers per batch)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          onClick: handlePreview,
          variant: "secondary",
          disabled: isProcessing || !totalAmount || !viewerAddresses,
          children: "Preview Distribution"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          onClick: handleCreatePool,
          disabled: isProcessing || !totalAmount || !viewerAddresses,
          loading: isProcessing,
          children: "Create Pool & Distribute"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      TransactionStatusMessage,
      {
        status,
        error,
        successMessage: result ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { children: [
            "Successfully distributed ",
            formatAmount(result.totalDistributed),
            " tokens to ",
            result.viewerCount,
            " viewers!"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm", children: [
            "Each viewer received: ",
            formatAmount(result.perViewerAmount),
            " tokens",
            result.estimatedUsdcPerViewer && ` (~${parseFloat(result.estimatedUsdcPerViewer) / 1e6} USDC on ApeChain)`
          ] }),
          result.transactions.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs space-y-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx("p", { children: "Transaction hashes:" }),
            result.transactions.map((hash, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-mono truncate", children: [
              "Batch ",
              i + 1,
              ": ",
              hash
            ] }, hash))
          ] })
        ] }) : void 0
      }
    )
  ] });
};

// src/index.ts
var UI_VERSION = "2.0.0";
var FEE_STRUCTURE = {
  PLATFORM_PERCENTAGE: 5,
  // Platform always takes 5% for tips
  VIEWER_REWARD_PLATFORM_PERCENTAGE: 1
  // Platform takes 1% for viewer rewards
  // Creator/business split depends on creator's membership tier (60/40, 70/30, 80/20, 90/10)
};

exports.ApeChainTippingInterface = ApeChainTippingInterface;
exports.BatchViewerReward = BatchViewerReward;
exports.Button = Button;
exports.ChainSelector = ChainSelector;
exports.CreatorManagement = CreatorManagement;
exports.CreatorSelector = CreatorSelector;
exports.FEE_STRUCTURE = FEE_STRUCTURE;
exports.RewardPoolInterface = RewardPoolInterface;
exports.TransactionStatusMessage = TransactionStatusMessage;
exports.UI_VERSION = UI_VERSION;
exports.ViewerRewardInterface = ViewerRewardInterface;
exports.ViewerRewardStats = ViewerRewardStats;
exports.ViewerSelector = ViewerSelector;
exports.calculateFeeBreakdown = calculateFeeBreakdown;
exports.calculateViewerRewardFees = calculateViewerRewardFees;
exports.debounce = debounce;
exports.formatTokenAmount = formatTokenAmount;
exports.getChainName = getChainName;
exports.getNativeCurrency = getNativeCurrency;
exports.getTokenOptions = getTokenOptions;
exports.isValidAddress = isValidAddress;
exports.truncateAddress = truncateAddress;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map