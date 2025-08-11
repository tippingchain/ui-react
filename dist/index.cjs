'use strict';

var React14 = require('react');
var react = require('thirdweb/react');
var sdk = require('@tippingchain/sdk');
var jsxRuntime = require('react/jsx-runtime');
var contractsInterface = require('@tippingchain/contracts-interface');
var ethers = require('ethers');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React14__default = /*#__PURE__*/_interopDefault(React14);

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
  const Component = React14.forwardRef(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => React14.createElement(
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
        ...iconNode.map(([tag, attrs]) => React14.createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};
var createLucideIcon$1 = createLucideIcon;

// node_modules/lucide-react/dist/esm/icons/activity.mjs
var Activity = createLucideIcon$1("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);

// node_modules/lucide-react/dist/esm/icons/alert-circle.mjs
var AlertCircle = createLucideIcon$1("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-down-right.mjs
var ArrowDownRight = createLucideIcon$1("ArrowDownRight", [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var ArrowRight = createLucideIcon$1("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs
var ArrowUpRight = createLucideIcon$1("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
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

// node_modules/lucide-react/dist/esm/icons/calendar.mjs
var Calendar = createLucideIcon$1("Calendar", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2",
      key: "eu3xkr"
    }
  ],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
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

// node_modules/lucide-react/dist/esm/icons/check-circle.mjs
var CheckCircle = createLucideIcon$1("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var ChevronDown = createLucideIcon$1("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
var ChevronRight = createLucideIcon$1("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// node_modules/lucide-react/dist/esm/icons/clock.mjs
var Clock = createLucideIcon$1("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);

// node_modules/lucide-react/dist/esm/icons/coins.mjs
var Coins = createLucideIcon$1("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);

// node_modules/lucide-react/dist/esm/icons/copy.mjs
var Copy = createLucideIcon$1("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/dollar-sign.mjs
var DollarSign = createLucideIcon$1("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/download.mjs
var Download = createLucideIcon$1("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

// node_modules/lucide-react/dist/esm/icons/external-link.mjs
var ExternalLink = createLucideIcon$1("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]);

// node_modules/lucide-react/dist/esm/icons/eye-off.mjs
var EyeOff = createLucideIcon$1("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);

// node_modules/lucide-react/dist/esm/icons/eye.mjs
var Eye = createLucideIcon$1("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-text.mjs
var FileText = createLucideIcon$1("FileText", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);

// node_modules/lucide-react/dist/esm/icons/filter.mjs
var Filter = createLucideIcon$1("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/gift.mjs
var Gift2 = createLucideIcon$1("Gift", [
  ["polyline", { points: "20 12 20 22 4 22 4 12", key: "nda8fc" }],
  ["rect", { width: "20", height: "5", x: "2", y: "7", key: "wkgdzj" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "7", key: "1n8zgp" }],
  ["path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z", key: "zighg4" }],
  ["path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z", key: "1pa5tk" }]
]);

// node_modules/lucide-react/dist/esm/icons/globe.mjs
var Globe = createLucideIcon$1("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  [
    "path",
    {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
      key: "nb9nel"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/hash.mjs
var Hash = createLucideIcon$1("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// node_modules/lucide-react/dist/esm/icons/heart.mjs
var Heart = createLucideIcon$1("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/history.mjs
var History = createLucideIcon$1("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);

// node_modules/lucide-react/dist/esm/icons/info.mjs
var Info = createLucideIcon$1("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);

// node_modules/lucide-react/dist/esm/icons/loader-2.mjs
var Loader2 = createLucideIcon$1("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

// node_modules/lucide-react/dist/esm/icons/maximize-2.mjs
var Maximize2 = createLucideIcon$1("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

// node_modules/lucide-react/dist/esm/icons/more-vertical.mjs
var MoreVertical = createLucideIcon$1("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// node_modules/lucide-react/dist/esm/icons/pause.mjs
var Pause = createLucideIcon$1("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);

// node_modules/lucide-react/dist/esm/icons/pen-line.mjs
var PenLine = createLucideIcon$1("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/pie-chart.mjs
var PieChart = createLucideIcon$1("PieChart", [
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }]
]);

// node_modules/lucide-react/dist/esm/icons/play.mjs
var Play = createLucideIcon$1("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
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

// node_modules/lucide-react/dist/esm/icons/settings.mjs
var Settings = createLucideIcon$1("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// node_modules/lucide-react/dist/esm/icons/share-2.mjs
var Share2 = createLucideIcon$1("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);

// node_modules/lucide-react/dist/esm/icons/shield.mjs
var Shield = createLucideIcon$1("Shield", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", key: "3xmgem" }]
]);

// node_modules/lucide-react/dist/esm/icons/star.mjs
var Star = createLucideIcon$1("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
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

// node_modules/lucide-react/dist/esm/icons/trending-down.mjs
var TrendingDown = createLucideIcon$1("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);

// node_modules/lucide-react/dist/esm/icons/trending-up.mjs
var TrendingUp = createLucideIcon$1("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);

// node_modules/lucide-react/dist/esm/icons/trophy.mjs
var Trophy = createLucideIcon$1("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq"
    }
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb"
    }
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
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

// node_modules/lucide-react/dist/esm/icons/volume-2.mjs
var Volume2 = createLucideIcon$1("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]);

// node_modules/lucide-react/dist/esm/icons/volume-x.mjs
var VolumeX = createLucideIcon$1("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);

// node_modules/lucide-react/dist/esm/icons/wallet.mjs
var Wallet = createLucideIcon$1("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);

// node_modules/lucide-react/dist/esm/icons/x-circle.mjs
var XCircle = createLucideIcon$1("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

// node_modules/lucide-react/dist/esm/icons/x.mjs
var X = createLucideIcon$1("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// node_modules/lucide-react/dist/esm/icons/zap.mjs
var Zap = createLucideIcon$1("Zap", [
  [
    "polygon",
    { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }
  ]
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
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
  const { isPending } = react.useSendTransaction();
  const [amount, setAmount] = React14.useState("");
  const [selectedToken, setSelectedToken] = React14.useState("native");
  const [relayQuote, setRelayQuote] = React14.useState(null);
  const [isLoadingQuote, setIsLoadingQuote] = React14.useState(false);
  const [creator, setCreator] = React14.useState(null);
  const [isLoadingCreator, setIsLoadingCreator] = React14.useState(true);
  React14.useEffect(() => {
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
  React14.useEffect(() => {
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
    /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client: sdkConfig.client, theme: "light" }),
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

// src/utils/tokenConfig.ts
var NATIVE_TOKENS = {
  1: { symbol: "ETH", name: "Ethereum", decimals: 18, icon: "\u{1F48E}", color: "#627EEA" },
  137: { symbol: "MATIC", name: "Polygon", decimals: 18, icon: "\u{1F7E3}", color: "#8247E5" },
  10: { symbol: "ETH", name: "Ethereum (Optimism)", decimals: 18, icon: "\u{1F534}", color: "#FF0420" },
  56: { symbol: "BNB", name: "BNB Chain", decimals: 18, icon: "\u{1F7E8}", color: "#F3BA2F" },
  2741: { symbol: "ETH", name: "Ethereum (Abstract)", decimals: 18, icon: "\u{1F300}", color: "#00D2FF" },
  43114: { symbol: "AVAX", name: "Avalanche", decimals: 18, icon: "\u{1F3D4}\uFE0F", color: "#E84142" },
  8453: { symbol: "ETH", name: "Ethereum (Base)", decimals: 18, icon: "\u{1F535}", color: "#0052FF" },
  42161: { symbol: "ETH", name: "Ethereum (Arbitrum)", decimals: 18, icon: "\u{1F537}", color: "#28A0F0" },
  167e3: { symbol: "ETH", name: "Ethereum (Taiko)", decimals: 18, icon: "\u{1F38C}", color: "#FA4F00" },
  33139: { symbol: "APE", name: "ApeChain", decimals: 18, icon: "\u{1F412}", color: "#FFD700" },
  // Testnets
  17e3: { symbol: "ETH", name: "Ethereum (Holesky)", decimals: 18, icon: "\u{1F9EA}", color: "#627EEA" },
  80002: { symbol: "MATIC", name: "Polygon (Amoy)", decimals: 18, icon: "\u{1F9EA}", color: "#8247E5" },
  33111: { symbol: "APE", name: "ApeChain (Curtis)", decimals: 18, icon: "\u{1F9EA}", color: "#FFD700" }
};
var CHAIN_TOKENS = [
  {
    chainId: 1,
    // Ethereum
    chainName: "Ethereum",
    native: NATIVE_TOKENS[1],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0xA0b86a33E6045c56d65F4E7E7334E1d2b7aC9f15", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD", decimals: 6, address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", icon: "\u{1F49A}", color: "#26A17B", isStable: true, popular: true },
      { symbol: "DAI", name: "Dai Stablecoin", decimals: 18, address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 137,
    // Polygon
    chainName: "Polygon",
    native: NATIVE_TOKENS[137],
    tokens: [
      { symbol: "USDC", name: "USD Coin (PoS)", decimals: 6, address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD (PoS)", decimals: 6, address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", icon: "\u{1F49A}", color: "#26A17B", isStable: true, popular: true },
      { symbol: "DAI", name: "Dai Stablecoin (PoS)", decimals: 18, address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WETH", name: "Wrapped Ethereum (PoS)", decimals: 18, address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", icon: "\u{1F30A}", color: "#627EEA" },
      { symbol: "WMATIC", name: "Wrapped Matic", decimals: 18, address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", icon: "\u{1F7E3}", color: "#8247E5" }
    ]
  },
  {
    chainId: 10,
    // Optimism
    chainName: "Optimism",
    native: NATIVE_TOKENS[10],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD", decimals: 6, address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", icon: "\u{1F49A}", color: "#26A17B", isStable: true },
      { symbol: "DAI", name: "Dai Stablecoin", decimals: 18, address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0x4200000000000000000000000000000000000006", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 56,
    // BSC
    chainName: "BNB Chain",
    native: NATIVE_TOKENS[56],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 18, address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD", decimals: 18, address: "0x55d398326f99059fF775485246999027B3197955", icon: "\u{1F49A}", color: "#26A17B", isStable: true, popular: true },
      { symbol: "BUSD", name: "Binance USD", decimals: 18, address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", icon: "\u{1F7E8}", color: "#F0B90B", isStable: true },
      { symbol: "DAI", name: "Dai Token", decimals: 18, address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WBNB", name: "Wrapped BNB", decimals: 18, address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", icon: "\u{1F7E8}", color: "#F3BA2F" }
    ]
  },
  {
    chainId: 2741,
    // Abstract
    chainName: "Abstract",
    native: NATIVE_TOKENS[2741],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0x4200000000000000000000000000000000000006", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 43114,
    // Avalanche
    chainName: "Avalanche",
    native: NATIVE_TOKENS[43114],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD", decimals: 6, address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", icon: "\u{1F49A}", color: "#26A17B", isStable: true },
      { symbol: "DAI", name: "Dai Stablecoin", decimals: 18, address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WAVAX", name: "Wrapped AVAX", decimals: 18, address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", icon: "\u{1F3D4}\uFE0F", color: "#E84142", popular: true }
    ]
  },
  {
    chainId: 8453,
    // Base
    chainName: "Base",
    native: NATIVE_TOKENS[8453],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "DAI", name: "Dai", decimals: 18, address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0x4200000000000000000000000000000000000006", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 42161,
    // Arbitrum
    chainName: "Arbitrum One",
    native: NATIVE_TOKENS[42161],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "USDT", name: "Tether USD", decimals: 6, address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", icon: "\u{1F49A}", color: "#26A17B", isStable: true },
      { symbol: "DAI", name: "Dai Stablecoin", decimals: 18, address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", icon: "\u{1F7E1}", color: "#F5AC37", isStable: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 167e3,
    // Taiko
    chainName: "Taiko",
    native: NATIVE_TOKENS[167e3],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0x07d83526730c7438048D55A4fc0b850e14612bb1", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "WETH", name: "Wrapped Ethereum", decimals: 18, address: "0xA51894664A773981C6C112C43ce576f315d5b1B6", icon: "\u{1F30A}", color: "#627EEA", popular: true }
    ]
  },
  {
    chainId: 33139,
    // ApeChain (destination chain)
    chainName: "ApeChain",
    native: NATIVE_TOKENS[33139],
    tokens: [
      { symbol: "USDC", name: "USD Coin", decimals: 6, address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", icon: "\u{1F4B5}", color: "#2775CA", isStable: true, popular: true },
      { symbol: "WAPE", name: "Wrapped APE", decimals: 18, address: "0x48b62137EdfA95a428D35C09E44256a739F6B557", icon: "\u{1F412}", color: "#FFD700" }
    ]
  },
  // Testnets
  {
    chainId: 17e3,
    // Holesky (Ethereum testnet)
    chainName: "Ethereum Holesky",
    native: NATIVE_TOKENS[17e3],
    tokens: [
      { symbol: "USDC", name: "USD Coin (Test)", decimals: 6, address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", icon: "\u{1F9EA}", color: "#2775CA", isStable: true }
    ]
  },
  {
    chainId: 80002,
    // Amoy (Polygon testnet)
    chainName: "Polygon Amoy",
    native: NATIVE_TOKENS[80002],
    tokens: [
      { symbol: "USDC", name: "USD Coin (Test)", decimals: 6, address: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582", icon: "\u{1F9EA}", color: "#2775CA", isStable: true }
    ]
  },
  {
    chainId: 33111,
    // Curtis (ApeChain testnet)
    chainName: "ApeChain Curtis",
    native: NATIVE_TOKENS[33111],
    tokens: [
      { symbol: "USDC", name: "USD Coin (Test)", decimals: 6, address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", icon: "\u{1F9EA}", color: "#2775CA", isStable: true }
    ]
  }
];
var getAllTokensForChain = (chainId) => {
  const chainConfig = CHAIN_TOKENS.find((chain) => chain.chainId === chainId);
  if (!chainConfig) {
    return [];
  }
  return [chainConfig.native, ...chainConfig.tokens];
};
var getTokensForChain = (chainId) => {
  const chainConfig = CHAIN_TOKENS.find((chain) => chain.chainId === chainId);
  return chainConfig ? chainConfig.tokens : [];
};
var getNativeToken = (chainId) => {
  const chainConfig = CHAIN_TOKENS.find((chain) => chain.chainId === chainId);
  return chainConfig ? chainConfig.native : null;
};
var isNativeToken = (token) => {
  return !token.address;
};
var formatTokenAmount2 = (amount, decimals) => {
  const num = parseFloat(amount);
  if (num === 0) return "0";
  if (num < 1e-3) {
    return num.toFixed(6);
  }
  if (decimals === 6) {
    return num.toFixed(2);
  }
  return num.toFixed(4);
};
var getChainNameFromId = (chainId) => {
  const chainConfig = CHAIN_TOKENS.find((chain) => chain.chainId === chainId);
  return chainConfig ? chainConfig.chainName : `Chain ${chainId}`;
};
var findTokenBySymbol = (chainId, symbol) => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.find((token) => token.symbol === symbol) || null;
};
var getPopularTokens = (chainId) => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.filter((token) => token.popular);
};
var getStablecoins = (chainId) => {
  const allTokens = getAllTokensForChain(chainId);
  return allTokens.filter((token) => token.isStable);
};
var CHAIN_EXPLORERS = {
  1: { name: "Etherscan", baseUrl: "https://etherscan.io", txPath: "/tx/" },
  137: { name: "PolygonScan", baseUrl: "https://polygonscan.com", txPath: "/tx/" },
  10: { name: "Optimism Explorer", baseUrl: "https://optimistic.etherscan.io", txPath: "/tx/" },
  56: { name: "BscScan", baseUrl: "https://bscscan.com", txPath: "/tx/" },
  43114: { name: "SnowTrace", baseUrl: "https://snowtrace.io", txPath: "/tx/" },
  8453: { name: "BaseScan", baseUrl: "https://basescan.org", txPath: "/tx/" },
  42161: { name: "Arbiscan", baseUrl: "https://arbiscan.io", txPath: "/tx/" },
  167e3: { name: "Taiko Explorer", baseUrl: "https://taikoscan.io", txPath: "/tx/" },
  2741: { name: "Abstract Explorer", baseUrl: "https://explorer.abstract.xyz", txPath: "/tx/" },
  33139: { name: "ApeChain Explorer", baseUrl: "https://apescan.io", txPath: "/tx/" },
  // Testnets
  17e3: { name: "Holesky Etherscan", baseUrl: "https://holesky.etherscan.io", txPath: "/tx/" },
  80002: { name: "Amoy PolygonScan", baseUrl: "https://amoy.polygonscan.com", txPath: "/tx/" },
  33111: { name: "Curtis ApeChain", baseUrl: "https://curtis.explorer.caldera.xyz", txPath: "/tx/" }
};
var NotificationToast = ({
  notification,
  onRemove,
  position = "top-right",
  getExplorerUrl
}) => {
  const [isVisible, setIsVisible] = React14.useState(false);
  const [isLeaving, setIsLeaving] = React14.useState(false);
  React14.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);
  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(notification.id), 300);
  };
  const getIcon = () => {
    const iconClass = "w-5 h-5 flex-shrink-0";
    switch (notification.type) {
      case "success":
        return /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: `${iconClass} text-green-500` });
      case "error":
        return /* @__PURE__ */ jsxRuntime.jsx(XCircle, { className: `${iconClass} text-red-500` });
      case "warning":
        return /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: `${iconClass} text-yellow-500` });
      case "info":
        return /* @__PURE__ */ jsxRuntime.jsx(Info, { className: `${iconClass} text-blue-500` });
      case "pending":
        return /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: `${iconClass} text-blue-500 animate-spin` });
      default:
        return /* @__PURE__ */ jsxRuntime.jsx(Info, { className: `${iconClass} text-gray-500` });
    }
  };
  const getBackgroundColor = () => {
    switch (notification.type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      case "pending":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };
  const getTextColor = () => {
    switch (notification.type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "warning":
        return "text-yellow-800";
      case "info":
        return "text-blue-800";
      case "pending":
        return "text-blue-800";
      default:
        return "text-gray-800";
    }
  };
  const getExplorerLink = (chainId, txHash) => {
    if (getExplorerUrl) {
      return getExplorerUrl(chainId, txHash);
    }
    const explorer = CHAIN_EXPLORERS[chainId];
    if (!explorer) return null;
    return `${explorer.baseUrl}${explorer.txPath}${txHash}`;
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy to clipboard:", err);
    });
  };
  const getAnimationClasses = () => {
    const isRightSide = position.includes("right");
    const isLeftSide = position.includes("left");
    if (isLeaving) {
      return isRightSide ? "transform translate-x-full opacity-0" : isLeftSide ? "transform -translate-x-full opacity-0" : "transform scale-95 opacity-0";
    }
    if (!isVisible) {
      return isRightSide ? "transform translate-x-full opacity-0" : isLeftSide ? "transform -translate-x-full opacity-0" : "transform scale-95 opacity-0";
    }
    return "transform translate-x-0 scale-100 opacity-100";
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `
        max-w-sm w-full shadow-lg rounded-lg border transition-all duration-300 ease-in-out
        ${getBackgroundColor()} ${getAnimationClasses()}
      `,
      style: { pointerEvents: "auto" },
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: getIcon() }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: `text-sm font-medium ${getTextColor()}`, children: notification.title }),
          notification.message && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mt-1 text-sm ${getTextColor()} opacity-90`, children: notification.message }),
          notification.transactionHash && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-2 flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `text-xs ${getTextColor()} opacity-75 font-mono`, children: [
              notification.transactionHash.slice(0, 10),
              "...",
              notification.transactionHash.slice(-8)
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: () => copyToClipboard(notification.transactionHash),
                className: `p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors ${getTextColor()} opacity-60 hover:opacity-90`,
                title: "Copy transaction hash",
                children: /* @__PURE__ */ jsxRuntime.jsx(Copy, { className: "w-3 h-3" })
              }
            ),
            notification.chainId && getExplorerLink(notification.chainId, notification.transactionHash) && /* @__PURE__ */ jsxRuntime.jsx(
              "a",
              {
                href: getExplorerLink(notification.chainId, notification.transactionHash),
                target: "_blank",
                rel: "noopener noreferrer",
                className: `p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors ${getTextColor()} opacity-60 hover:opacity-90`,
                title: "View on explorer",
                children: /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { className: "w-3 h-3" })
              }
            )
          ] }),
          notification.actions && notification.actions.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 flex space-x-2", children: notification.actions.map((action, index) => /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: action.action,
              className: `
                      px-3 py-1 text-xs rounded-md font-medium transition-colors
                      ${notification.type === "success" ? "bg-green-200 hover:bg-green-300 text-green-800" : notification.type === "error" ? "bg-red-200 hover:bg-red-300 text-red-800" : notification.type === "warning" ? "bg-yellow-200 hover:bg-yellow-300 text-yellow-800" : "bg-blue-200 hover:bg-blue-300 text-blue-800"}
                    `,
              children: action.label
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0 ml-4", children: /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleRemove,
            className: `
                rounded-md p-1.5 inline-flex transition-colors
                hover:bg-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${getTextColor()} opacity-60 hover:opacity-90
                ${notification.type === "success" && "focus:ring-green-500"}
                ${notification.type === "error" && "focus:ring-red-500"}
                ${notification.type === "warning" && "focus:ring-yellow-500"}
                ${(notification.type === "info" || notification.type === "pending") && "focus:ring-blue-500"}
              `,
            children: /* @__PURE__ */ jsxRuntime.jsx(X, { className: "w-4 h-4" })
          }
        ) })
      ] }) })
    }
  );
};
var NotificationContext = React14.createContext(null);
var NotificationProvider = ({
  children,
  maxNotifications = 5,
  defaultPosition = "top-right",
  className = ""
}) => {
  const [notifications, setNotifications] = React14.useState([]);
  const timeoutRefs = React14.useRef(/* @__PURE__ */ new Map());
  const clearTimeout2 = (id) => {
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      global.clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }
  };
  const addNotification = React14.useCallback((notification) => {
    const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification = {
      ...notification,
      id
    };
    setNotifications((prev) => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });
    if (notification.duration && notification.duration > 0) {
      const timeout = setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
      timeoutRefs.current.set(id, timeout);
    }
    return id;
  }, [maxNotifications]);
  const removeNotification = React14.useCallback((id) => {
    clearTimeout2(id);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);
  const clearNotifications = React14.useCallback(() => {
    timeoutRefs.current.forEach((timeout) => global.clearTimeout(timeout));
    timeoutRefs.current.clear();
    setNotifications([]);
  }, []);
  const updateNotification = React14.useCallback((id, updates) => {
    setNotifications(
      (prev) => prev.map(
        (notification) => notification.id === id ? { ...notification, ...updates } : notification
      )
    );
    if (updates.duration !== void 0) {
      clearTimeout2(id);
      if (updates.duration > 0) {
        const timeout = setTimeout(() => {
          removeNotification(id);
        }, updates.duration);
        timeoutRefs.current.set(id, timeout);
      }
    }
  }, [removeNotification]);
  React14.useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => global.clearTimeout(timeout));
      timeoutRefs.current.clear();
    };
  }, []);
  const getPositionClasses = (position) => {
    const baseClasses = "fixed z-50 pointer-events-none";
    switch (position) {
      case "top-right":
        return `${baseClasses} top-4 right-4`;
      case "top-left":
        return `${baseClasses} top-4 left-4`;
      case "bottom-right":
        return `${baseClasses} bottom-4 right-4`;
      case "bottom-left":
        return `${baseClasses} bottom-4 left-4`;
      case "top-center":
        return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
      case "bottom-center":
        return `${baseClasses} bottom-4 left-1/2 transform -translate-x-1/2`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };
  const contextValue = {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    updateNotification
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(NotificationContext.Provider, { value: contextValue, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `${getPositionClasses(defaultPosition)} ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-3 pointer-events-auto", children: notifications.map((notification) => /* @__PURE__ */ jsxRuntime.jsx(
      NotificationToast,
      {
        notification,
        onRemove: removeNotification,
        position: defaultPosition
      },
      notification.id
    )) }) })
  ] });
};
var useNotifications = () => {
  const context = React14.useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};

// src/components/notifications/useTransactionNotifications.ts
var useTransactionNotifications = () => {
  const { addNotification, updateNotification } = useNotifications();
  const notifyApprovalPending = async (options) => {
    return addNotification({
      type: "pending",
      title: "Token Approval Pending",
      message: `Approving ${options.tokenSymbol} spending...`,
      transactionHash: options.transactionHash,
      chainId: options.chainId,
      duration: 0
      // Keep until updated
    });
  };
  const notifyApprovalSuccess = (tokenSymbol, transactionHash, chainId) => {
    return addNotification({
      type: "success",
      title: "Token Approved Successfully! \u2705",
      message: `${tokenSymbol} is now approved for spending`,
      transactionHash,
      chainId,
      duration: 5e3
    });
  };
  const notifyApprovalError = (tokenSymbol, error) => {
    return addNotification({
      type: "error",
      title: "Token Approval Failed",
      message: `Failed to approve ${tokenSymbol}: ${error}`,
      duration: 8e3
    });
  };
  const notifyTipPending = async (options) => {
    return addNotification({
      type: "pending",
      title: "Tip Transaction Pending",
      message: `Sending ${options.amount} ${options.tokenSymbol} to Creator #${options.creatorId}...`,
      transactionHash: options.transactionHash,
      chainId: options.chainId,
      duration: 0
      // Keep until updated
    });
  };
  const notifyTipSuccess = (amount, tokenSymbol, creatorId, estimatedUsdc, transactionHash, chainId) => {
    const message = estimatedUsdc ? `${amount} ${tokenSymbol} sent to Creator #${creatorId}. Estimated USDC: ~$${estimatedUsdc}` : `${amount} ${tokenSymbol} sent to Creator #${creatorId}`;
    return addNotification({
      type: "success",
      title: "Tip Sent Successfully! \u{1F389}",
      message,
      transactionHash,
      chainId,
      duration: 8e3
    });
  };
  const notifyTipError = (amount, tokenSymbol, creatorId, error) => {
    return addNotification({
      type: "error",
      title: "Tip Transaction Failed",
      message: `Failed to send ${amount} ${tokenSymbol} to Creator #${creatorId}: ${error}`,
      duration: 1e4
    });
  };
  const notifyCreatorAdded = async (creatorId, wallet, membershipTier, chainId, transactionHash) => {
    return addNotification({
      type: "success",
      title: "Creator Added Successfully",
      message: `Creator #${creatorId} (${wallet.slice(0, 8)}...) registered with Tier ${membershipTier}`,
      transactionHash,
      chainId,
      duration: 6e3
    });
  };
  const notifyCreatorError = (error) => {
    return addNotification({
      type: "error",
      title: "Creator Registration Failed",
      message: error,
      duration: 8e3
    });
  };
  const notifyBalanceRefresh = () => {
    return addNotification({
      type: "info",
      title: "Balances Updated",
      message: "Token balances have been refreshed",
      duration: 3e3
    });
  };
  const notifyNetworkSwitch = (networkName) => {
    return addNotification({
      type: "info",
      title: "Network Switched",
      message: `Connected to ${networkName}`,
      duration: 4e3
    });
  };
  const updateNotificationStatus = (notificationId, type, title, message, transactionHash) => {
    updateNotification(notificationId, {
      type,
      title,
      message,
      transactionHash,
      duration: type === "success" ? 6e3 : 8e3
    });
  };
  return {
    // Approval notifications
    notifyApprovalPending,
    notifyApprovalSuccess,
    notifyApprovalError,
    // Tip notifications
    notifyTipPending,
    notifyTipSuccess,
    notifyTipError,
    // Creator management notifications
    notifyCreatorAdded,
    notifyCreatorError,
    // General notifications
    notifyBalanceRefresh,
    notifyNetworkSwitch,
    // Update existing notifications
    updateNotificationStatus
  };
};
var MultiTokenTippingInterface = ({
  creatorId,
  client,
  sdk: sdk$1,
  onTipSuccess,
  onTipError,
  className = ""
}) => {
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
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
  const [selectedToken, setSelectedToken] = React14.useState(null);
  const [amount, setAmount] = React14.useState("");
  const [isLoading, setIsLoading] = React14.useState(false);
  const [approvalState, setApprovalState] = React14.useState("none" /* NONE */);
  const [conversionQuote, setConversionQuote] = React14.useState(null);
  const [feePreviewLoading, setFeePreviewLoading] = React14.useState(false);
  const [balanceWarning, setBalanceWarning] = React14.useState("");
  const [userBalance, setUserBalance] = React14.useState("0");
  const [loadingBalance, setLoadingBalance] = React14.useState(false);
  const [tokenBalances, setTokenBalances] = React14.useState({});
  const chainTokens = activeChain ? getAllTokensForChain(activeChain.id) : [];
  const loadTokenBalances = async (showNotification = false) => {
    if (!account?.address || !activeChain || chainTokens.length === 0) {
      setTokenBalances({});
      return;
    }
    setLoadingBalance(true);
    try {
      const tokenAddresses = chainTokens.map((token) => token.address || "native");
      const balances = await sdk$1.getMultipleTokenBalances(account.address, tokenAddresses, activeChain.id);
      const balancesBySymbol = {};
      chainTokens.forEach((token, index) => {
        const tokenAddress = tokenAddresses[index];
        balancesBySymbol[token.symbol] = balances[tokenAddress] || "0";
      });
      setTokenBalances(balancesBySymbol);
      if (selectedToken) {
        setUserBalance(balancesBySymbol[selectedToken.symbol] || "0");
      }
      if (showNotification) {
        notifyBalanceRefresh();
      }
    } catch (error) {
      console.error("Failed to load token balances:", error);
      const emptyBalances = {};
      chainTokens.forEach((token) => {
        emptyBalances[token.symbol] = "0";
      });
      setTokenBalances(emptyBalances);
      setUserBalance("0");
    } finally {
      setLoadingBalance(false);
    }
  };
  React14.useEffect(() => {
    if (chainTokens.length > 0 && !selectedToken) {
      setSelectedToken(chainTokens[0]);
    }
  }, [chainTokens, selectedToken]);
  React14.useEffect(() => {
    loadTokenBalances();
  }, [account?.address, activeChain?.id, chainTokens.length]);
  React14.useEffect(() => {
    if (selectedToken && tokenBalances[selectedToken.symbol]) {
      setUserBalance(tokenBalances[selectedToken.symbol]);
    }
  }, [selectedToken, tokenBalances]);
  React14.useEffect(() => {
    if (!selectedToken || !amount || !account) {
      setBalanceWarning("");
      setApprovalState("none" /* NONE */);
      return;
    }
    const amountNum = parseFloat(amount);
    const balanceNum = parseFloat(userBalance);
    if (amountNum > balanceNum) {
      setBalanceWarning(`Insufficient ${selectedToken.symbol} balance. You have ${formatTokenAmount2(userBalance, selectedToken.decimals)}`);
    } else {
      setBalanceWarning("");
    }
    if (selectedToken.address && activeChain) {
      const checkApproval = async () => {
        try {
          const contractAddress = sdk.getContractAddress(activeChain.id);
          if (!contractAddress) {
            setApprovalState("none" /* NONE */);
            return;
          }
          const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
          const needsApproval = await sdk$1.needsApproval(
            selectedToken.address,
            account.address,
            contractAddress,
            amountInWei,
            activeChain.id
          );
          setApprovalState(needsApproval ? "needed" /* NEEDED */ : "approved" /* APPROVED */);
        } catch (error) {
          console.error("Failed to check approval:", error);
          setApprovalState("needed" /* NEEDED */);
        }
      };
      checkApproval();
    } else {
      setApprovalState("none" /* NONE */);
    }
  }, [selectedToken, amount, userBalance, account]);
  React14.useEffect(() => {
    if (!amount || !selectedToken || !activeChain || creatorId <= 0) {
      setConversionQuote(null);
      return;
    }
    const getRealFeePreview = async () => {
      setFeePreviewLoading(true);
      try {
        const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
        const tipSplits = await sdk$1.calculateTipSplits(creatorId, amountInWei, activeChain.id);
        const platformFeeEth = parseFloat(tipSplits.platformFee) / Math.pow(10, selectedToken.decimals || 18);
        const creatorAmountEth = parseFloat(tipSplits.creatorAmount) / Math.pow(10, selectedToken.decimals || 18);
        const businessAmountEth = parseFloat(tipSplits.businessAmount) / Math.pow(10, selectedToken.decimals || 18);
        const rates = {
          "ETH": 2400,
          "MATIC": 0.85,
          "BNB": 320,
          "AVAX": 35,
          "APE": 1.2,
          "USDC": 1,
          "USDT": 1,
          "DAI": 1,
          "BUSD": 1
        };
        const usdRate = rates[selectedToken.symbol] || 1;
        const totalUsdValue = parseFloat(amount) * usdRate;
        const estimatedUsdc = totalUsdValue * 0.98;
        setConversionQuote({
          inputAmount: parseFloat(amount),
          inputToken: selectedToken.symbol,
          usdValue: totalUsdValue,
          platformFee: platformFeeEth * usdRate,
          creatorShare: creatorAmountEth * usdRate,
          businessShare: businessAmountEth * usdRate,
          estimatedUsdc,
          relayFee: totalUsdValue * 0.02,
          // Add raw amounts for display
          platformFeeRaw: platformFeeEth,
          creatorShareRaw: creatorAmountEth,
          businessShareRaw: businessAmountEth,
          isReal: true
        });
      } catch (error) {
        console.error("Real fee calculation failed:", error);
        const amountNum = parseFloat(amount);
        const estimatedUsd = amountNum * (selectedToken.symbol === "USDC" ? 1 : 2e3);
        const platformFee = estimatedUsd * 0.05;
        setConversionQuote({
          inputAmount: amountNum,
          inputToken: selectedToken.symbol,
          usdValue: estimatedUsd,
          platformFee,
          creatorShare: (estimatedUsd - platformFee) * 0.7,
          // Fallback assumption
          businessShare: (estimatedUsd - platformFee) * 0.3,
          estimatedUsdc: estimatedUsd * 0.98,
          relayFee: estimatedUsd * 0.02,
          error: "Using estimated fees - unable to fetch real splits",
          isReal: false
        });
      } finally {
        setFeePreviewLoading(false);
      }
    };
    const debounceTimer = setTimeout(getRealFeePreview, 500);
    return () => clearTimeout(debounceTimer);
  }, [amount, selectedToken, activeChain, creatorId, sdk$1]);
  const handleApprove = async () => {
    if (!selectedToken?.address || !amount || !activeChain || !account) return;
    setApprovalState("pending" /* PENDING */);
    setIsLoading(true);
    try {
      const contractAddress = sdk.getContractAddress(activeChain.id);
      if (!contractAddress) {
        throw new Error("Contract not deployed on this chain");
      }
      const amountInWei = (parseFloat(amount) * Math.pow(10, selectedToken.decimals || 18)).toString();
      const pendingNotificationId = await notifyApprovalPending({
        tokenSymbol: selectedToken.symbol,
        tokenAddress: selectedToken.address,
        spenderAddress: contractAddress,
        amount: amountInWei,
        chainId: activeChain.id
      });
      const result = await sdk$1.approveToken(
        selectedToken.address,
        contractAddress,
        amountInWei,
        activeChain.id
      );
      if (result.success) {
        setApprovalState("approved" /* APPROVED */);
        updateNotificationStatus(
          pendingNotificationId,
          "success",
          "Token Approved Successfully! \u2705",
          `${selectedToken.symbol} is now approved for spending`,
          result.transactionHash
        );
        onTipSuccess?.({
          success: true,
          sourceTransactionHash: result.transactionHash,
          creatorId,
          estimatedUsdcAmount: "0"
        });
      } else {
        throw new Error(result.error || "Approval transaction failed");
      }
    } catch (error) {
      console.error("Approval failed:", error);
      setApprovalState("needed" /* NEEDED */);
      const errorMessage = error instanceof Error ? error.message : "Token approval failed";
      updateNotificationStatus(
        "pendingNotificationId",
        "error",
        "Token Approval Failed",
        errorMessage
      );
      onTipError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const handleTip = async () => {
    if (!selectedToken || !amount || !account || !activeChain) return;
    setIsLoading(true);
    const pendingNotificationId = await notifyTipPending({
      tokenSymbol: selectedToken.symbol,
      tokenAddress: selectedToken.address,
      amount,
      chainId: activeChain.id,
      creatorId,
      creatorWallet: ""
      // We don't have this readily available
    });
    try {
      const tipParams = {
        sourceChainId: activeChain.id,
        creatorId,
        token: selectedToken.address || "native",
        // 'native' for ETH/native tokens
        amount
        // Amount in token units (e.g., "1.5" for 1.5 ETH)
      };
      const result = await sdk$1.sendTip(tipParams);
      if (result.success) {
        updateNotificationStatus(
          pendingNotificationId,
          "success",
          "Tip Sent Successfully! \u{1F389}",
          `${amount} ${selectedToken.symbol} sent to Creator #${creatorId}${result.estimatedUsdcAmount ? `. Estimated USDC: ~$${result.estimatedUsdcAmount}` : ""}`,
          result.sourceTransactionHash
        );
        onTipSuccess?.(result);
        setAmount("");
        setConversionQuote(null);
        setApprovalState("none" /* NONE */);
        loadTokenBalances();
      } else {
        throw new Error(result.error || "Tip transaction failed");
      }
    } catch (error) {
      console.error("Tip failed:", error);
      const errorMessage = error instanceof Error ? error.message : "Transaction failed or was rejected";
      updateNotificationStatus(
        pendingNotificationId,
        "error",
        "Tip Transaction Failed",
        `Failed to send ${amount} ${selectedToken.symbol} to Creator #${creatorId}: ${errorMessage}`
      );
      onTipError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const canTip = selectedToken && amount && !balanceWarning && !isLoading && (approvalState === "none" /* NONE */ || approvalState === "approved" /* APPROVED */);
  if (!chainTokens.length) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-8 h-8 text-red-500 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-700", children: "Unsupported chain. Please switch to a supported network." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 max-w-md mx-auto ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Target, { className: "w-6 h-6 text-blue-600 mr-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: "Multi-Token Tip \u2192 ApeChain" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-4 mb-4 border", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Tipping Creator" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-medium text-gray-800", children: [
        "ID #",
        creatorId
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: "Wallet recovery supported" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Select Token" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => loadTokenBalances(true),
              disabled: loadingBalance,
              className: "text-xs text-blue-600 hover:text-blue-800 disabled:text-gray-400 flex items-center",
              title: "Refresh balances",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("svg", { className: `w-3 h-3 mr-1 ${loadingBalance ? "animate-spin" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                "Refresh"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-2 gap-2 max-h-40 overflow-y-auto", children: chainTokens.map((token) => {
          const balance = tokenBalances[token.symbol] || "0";
          const isSelected = selectedToken?.symbol === token.symbol;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => setSelectedToken(token),
              className: `p-3 rounded-lg border-2 text-left transition-all ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg mr-2", children: token.icon }),
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: token.symbol })
                    ] }),
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-gray-500", children: token.name })
                  ] }),
                  isSelected && /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 text-blue-500" })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-600 mt-1", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(Wallet, { className: "w-3 h-3 inline mr-1" }),
                  loadingBalance ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "animate-pulse", children: "Loading..." }) : formatTokenAmount2(balance, token.decimals)
                ] }),
                token.isStable && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-green-600 font-medium mt-1", children: "Stablecoin" }),
                token.popular && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-orange-600 font-medium mt-1", children: "Popular" })
              ]
            },
            token.symbol
          );
        }) })
      ] }),
      selectedToken && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Amount to tip" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              placeholder: "0.0",
              value: amount,
              onChange: (e) => setAmount(e.target.value),
              className: `w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${balanceWarning ? "border-red-300" : "border-gray-300"}`,
              step: selectedToken.decimals === 6 ? "0.01" : "0.001"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-2 text-sm text-gray-500", children: selectedToken.symbol })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-center mt-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-600", children: [
            "Balance: ",
            formatTokenAmount2(userBalance, selectedToken.decimals),
            " ",
            selectedToken.symbol
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => setAmount((parseFloat(userBalance) * 0.95).toString()),
              className: "text-blue-600 hover:text-blue-700 font-medium",
              children: "Max"
            }
          )
        ] }),
        balanceWarning && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700", children: [
          /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 inline mr-1" }),
          balanceWarning
        ] })
      ] }),
      amount && (feePreviewLoading || conversionQuote) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `border rounded-lg p-4 ${conversionQuote?.isReal ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200" : "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"}`, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Coins, { className: "w-4 h-4 text-blue-600 mr-1" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-blue-800", children: "Real Fee Preview" })
          ] }),
          feePreviewLoading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin text-blue-600" }) : conversionQuote?.isReal ? /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 text-green-600" }) : /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 text-yellow-600" })
        ] }),
        feePreviewLoading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-5 h-5 animate-spin text-blue-600 mr-2" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-gray-600", children: "Calculating real fees..." })
        ] }) : conversionQuote && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          conversionQuote.error && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-yellow-100 border border-yellow-300 rounded p-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-yellow-800 font-medium", children: [
            "\u26A0\uFE0F ",
            conversionQuote.error
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-700", children: "You send:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold", children: [
              conversionQuote.inputAmount,
              " ",
              conversionQuote.inputToken
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-700", children: "USD Value:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold", children: [
              "$",
              conversionQuote.usdValue.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center text-blue-600 my-2", children: /* @__PURE__ */ jsxRuntime.jsx(ArrowRight, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm text-red-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Platform fee (5%):" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold", children: [
              "-",
              conversionQuote.platformFeeRaw ? `${conversionQuote.platformFeeRaw.toFixed(6)} ${conversionQuote.inputToken}` : `$${conversionQuote.platformFee.toFixed(2)}`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-t pt-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs font-medium text-gray-600 mb-2", children: "After Platform Fee Distribution:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm text-green-600", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Creator receives:" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold", children: conversionQuote.creatorShareRaw ? /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                conversionQuote.creatorShareRaw.toFixed(6),
                " ",
                conversionQuote.inputToken,
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-gray-500 ml-1", children: [
                  "(~$",
                  conversionQuote.creatorShare.toFixed(2),
                  ")"
                ] })
              ] }) : `$${conversionQuote.creatorShare.toFixed(2)}` })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm text-blue-600", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Business receives:" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold", children: conversionQuote.businessShareRaw ? /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                conversionQuote.businessShareRaw.toFixed(6),
                " ",
                conversionQuote.inputToken,
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-gray-500 ml-1", children: [
                  "(~$",
                  conversionQuote.businessShare.toFixed(2),
                  ")"
                ] })
              ] }) : `$${conversionQuote.businessShare.toFixed(2)}` })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t pt-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-purple-700", children: "Final USDC on ApeChain:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-purple-700", children: [
              "~$",
              conversionQuote.estimatedUsdc.toFixed(2)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: `text-xs mt-3 p-2 rounded ${conversionQuote.isReal ? "bg-green-50 text-green-700 border border-green-200" : "bg-yellow-50 text-yellow-700 border border-yellow-200"}`, children: conversionQuote.isReal ? /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            "\u2705 Real fees calculated from Creator #",
            creatorId,
            " tier settings"
          ] }) : /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u26A0\uFE0F Estimated fees - actual amounts may differ" }) })
        ] })
      ] }),
      approvalState !== "none" /* NONE */ && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
        approvalState === "needed" /* NEEDED */ && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-yellow-800", children: "Token approval required" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-yellow-600", children: [
              "Allow TippingChain to spend your ",
              selectedToken?.symbol
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: handleApprove,
              disabled: isLoading,
              className: "px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:opacity-50",
              children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : "Approve"
            }
          )
        ] }) }),
        approvalState === "pending" /* PENDING */ && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 text-blue-600 animate-spin mr-2" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-blue-700", children: "Approval transaction pending..." })
        ] }) }),
        approvalState === "approved" /* APPROVED */ && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 text-green-600 mr-2" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-green-700", children: "Token approved! You can now send the tip." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleTip,
          disabled: !canTip,
          className: `w-full py-3 px-4 rounded-md font-medium transition-colors ${canTip ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
          children: isLoading ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin mr-2" }),
            "Processing..."
          ] }) : `Send ${selectedToken?.symbol || ""} Tip \u2192 ApeChain`
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-600 bg-white p-3 rounded border", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium mb-1", children: "\u{1F4A1} How it works:" }),
        /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
            "\u2022 Your ",
            selectedToken?.symbol,
            " is automatically bridged via Relay.link"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Converted to stable USDC on ApeChain" }),
          /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Creator receives funds in their wallet" }),
          /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
            "\u2022 ",
            selectedToken?.address ? "Token approval required first" : "Native token - no approval needed"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2 pt-2 border-t", children: /* @__PURE__ */ jsxRuntime.jsxs(
          "a",
          {
            href: "#",
            className: "text-blue-600 hover:text-blue-700 text-xs flex items-center",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { className: "w-3 h-3 mr-1" }),
              "Learn more about cross-chain tipping"
            ]
          }
        ) })
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
var TIER_INFO = {
  1: { name: "Tier 1", split: "60/40", description: "60% Creator / 40% Business", color: "bg-gray-100" },
  2: { name: "Tier 2", split: "70/30", description: "70% Creator / 30% Business", color: "bg-blue-100" },
  3: { name: "Tier 3", split: "80/20", description: "80% Creator / 20% Business", color: "bg-purple-100" },
  4: { name: "Tier 4", split: "90/10", description: "90% Creator / 10% Business", color: "bg-green-100" }
};
var AdminInterface = ({
  client,
  sdk,
  onCreatorAdded,
  onCreatorUpdated,
  onPlatformStatsLoaded,
  className = "",
  defaultChainId = 8453,
  showChainSelector = true,
  showPlatformStats = true,
  maxCreatorsToShow = 100
}) => {
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
  const [creators, setCreators] = React14.useState([]);
  const [selectedChainId, setSelectedChainId] = React14.useState(defaultChainId);
  const [loading, setLoading] = React14.useState(false);
  const [loadingCreators, setLoadingCreators] = React14.useState(false);
  const [newCreatorWallet, setNewCreatorWallet] = React14.useState("");
  const [newCreatorTier, setNewCreatorTier] = React14.useState(1);
  const [editingCreator, setEditingCreator] = React14.useState(null);
  const [message, setMessage] = React14.useState(null);
  const [contractOwner, setContractOwner] = React14.useState(null);
  const [checkingPermission, setCheckingPermission] = React14.useState(false);
  const [platformStats, setPlatformStats] = React14.useState(null);
  const [loadingStats, setLoadingStats] = React14.useState(false);
  const { notifyCreatorAdded, notifyCreatorError } = useTransactionNotifications();
  const isContractAvailable = contractsInterface.isContractDeployed(selectedChainId);
  const contractAddress = contractsInterface.getContractAddress(selectedChainId);
  const isOwnerOrAdmin = contractOwner === account?.address;
  const showMessage = (type, text) => {
    setMessage({ type, text, timestamp: Date.now() });
    setTimeout(() => setMessage(null), 5e3);
  };
  const checkContractPermissions = async () => {
    if (!isContractAvailable || !account) {
      setContractOwner(null);
      return;
    }
    if (selectedChainId !== 8453) {
      setContractOwner(null);
      return;
    }
    if (activeChain && activeChain.id !== 8453) {
      setContractOwner(null);
      return;
    }
    try {
      setCheckingPermission(true);
      setContractOwner(account.address || null);
    } catch (error) {
      console.error("Failed to check contract ownership:", error);
      setContractOwner(null);
    } finally {
      setCheckingPermission(false);
    }
  };
  const loadCreators = async () => {
    if (!isContractAvailable) {
      setCreators([]);
      showMessage("error", `Contract not deployed on selected chain (${selectedChainId}). Only Base (8453) is currently supported.`);
      return;
    }
    if (selectedChainId !== 8453) {
      setCreators([]);
      showMessage("error", `Contract only deployed on Base (8453). Selected chain (${selectedChainId}) coming soon.`);
      return;
    }
    if (activeChain && activeChain.id !== 8453) {
      setCreators([]);
      showMessage("error", `Please switch your wallet to Base network (8453). Currently connected to chain ${activeChain.id}.`);
      return;
    }
    try {
      setLoadingCreators(true);
      try {
        const creators2 = await sdk.getTopCreators(maxCreatorsToShow, selectedChainId);
        if (creators2 && creators2.length > 0) {
          const loadedCreators = creators2.map((creator) => ({
            id: creator.id,
            wallet: creator.wallet,
            tier: creator.tier + 1,
            // SDK returns 0-based, UI expects 1-based
            active: creator.active,
            totalTips: creator.totalTips || "0",
            tipCount: creator.tipCount || 0
          }));
          setCreators(loadedCreators);
          showMessage("success", `\u2705 Loaded ${loadedCreators.length} creators from contract`);
        } else {
          setCreators([]);
          showMessage("info", '\u{1F4DD} No creators found. Use the "Add New Creator" form below to get started.');
        }
      } catch (sdkError) {
        console.warn("SDK method failed, falling back to empty list:", sdkError);
        setCreators([]);
        showMessage("info", '\u{1F4DD} Ready to add creators. Use the "Add New Creator" form below to get started.');
      }
    } catch (error) {
      console.error("Failed to load creators:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      showMessage("error", `Failed to load creators: ${errorMessage}`);
      setCreators([]);
    } finally {
      setLoadingCreators(false);
    }
  };
  const loadPlatformStats = async () => {
    if (!isContractAvailable || !showPlatformStats) return;
    try {
      setLoadingStats(true);
      const stats = await sdk.getPlatformStats(selectedChainId);
      setPlatformStats(stats);
      onPlatformStatsLoaded?.(stats);
    } catch (error) {
      console.error("Failed to load platform stats:", error);
      setPlatformStats(null);
    } finally {
      setLoadingStats(false);
    }
  };
  React14.useEffect(() => {
    loadCreators();
    checkContractPermissions();
    loadPlatformStats();
  }, [selectedChainId, sdk, account]);
  const handleAddCreator = async () => {
    if (!newCreatorWallet.trim()) {
      notifyCreatorError("Please enter a valid wallet address");
      return;
    }
    if (!newCreatorWallet.startsWith("0x") || newCreatorWallet.length !== 42) {
      notifyCreatorError("Please enter a valid Ethereum wallet address (0x...)");
      return;
    }
    const nextCreatorId = creators.length > 0 ? Math.max(...creators.map((c) => c.id)) + 1 : 1;
    try {
      setLoading(true);
      const existingCreator = creators.find((c) => c.wallet.toLowerCase() === newCreatorWallet.toLowerCase());
      if (existingCreator) {
        notifyCreatorError(`Creator with this wallet already exists (ID: ${existingCreator.id})`);
        return;
      }
      if (!isContractAvailable) {
        notifyCreatorError(`Contract not deployed on selected chain (${selectedChainId}). Only Base (8453) is currently supported.`);
        return;
      }
      if (selectedChainId !== 8453) {
        notifyCreatorError("Creator addition only supported on Base (8453). Please switch to Base chain - other networks coming soon.");
        return;
      }
      const creatorRegistration = {
        creatorWallet: newCreatorWallet.trim(),
        tier: newCreatorTier - 1,
        // Convert 1-based to 0-based
        thirdwebId: ""
      };
      const result = await sdk.addCreator(creatorRegistration, selectedChainId);
      if (result.success) {
        const newCreator = {
          id: nextCreatorId,
          wallet: newCreatorWallet.trim(),
          tier: newCreatorTier,
          active: true,
          totalTips: "0",
          tipCount: 0
        };
        setCreators((prev) => [...prev, newCreator]);
        setNewCreatorWallet("");
        setNewCreatorTier(1);
        showMessage("success", `Creator added successfully! Transaction: ${result.transactionHash?.slice(0, 10)}...`);
        onCreatorAdded?.(newCreator);
        setTimeout(() => {
          loadCreators();
        }, 2e3);
      } else {
        throw new Error(result.error || "Failed to add creator");
      }
    } catch (error) {
      console.error("Failed to add creator:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      notifyCreatorError(`Failed to add creator: ${errorMessage}`);
      showMessage("error", `Failed to add creator: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
    loadCreators();
    loadPlatformStats();
  };
  if (!account) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `max-w-4xl mx-auto p-6 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Shield, { className: "w-12 h-12 text-yellow-500 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-yellow-800 mb-2", children: "Admin Access Required" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-yellow-700 mb-4", children: "Connect your wallet to access the TippingChain admin interface" }),
      /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `max-w-6xl mx-auto p-6 space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-3xl font-bold mb-2", children: "TippingChain Admin" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-blue-100", children: "Multi-admin creator management & platform analytics" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: handleRefresh,
            disabled: loadingCreators || loadingStats,
            className: "bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors",
            title: "Refresh data",
            children: /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-5 h-5 ${loadingCreators || loadingStats ? "animate-spin" : ""}` })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-blue-100", children: "Connected" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "font-mono text-xs", children: [
            account.address?.slice(0, 6),
            "...",
            account.address?.slice(-4)
          ] })
        ] })
      ] })
    ] }) }),
    showChainSelector && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Network Selection" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center space-x-2", children: isContractAvailable ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center text-green-600 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 mr-1" }),
          "Contract Deployed"
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center text-red-600 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsx(XCircle, { className: "w-4 h-4 mr-1" }),
          "Contract Not Available"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        ChainSelector,
        {
          value: selectedChainId,
          onChange: setSelectedChainId,
          label: "Select Network",
          className: "max-w-md"
        }
      ),
      contractAddress && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-3 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: "Contract:" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono ml-1", children: contractAddress })
      ] })
    ] }),
    showPlatformStats && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-lg font-semibold text-gray-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-5 h-5 mr-2" }),
        "Platform Statistics"
      ] }),
      loadingStats ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-8", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-6 h-6 animate-spin text-blue-600 mr-2" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Loading statistics..." })
      ] }) : platformStats ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-blue-50 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-blue-600", children: platformStats.totalTipsCount || "0" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-blue-600", children: "Total Tips" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-8 h-8 text-blue-500" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-green-50 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-green-600", children: creators.length }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-green-600", children: "Active Creators" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8 text-green-500" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-purple-50 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
              "$",
              platformStats.totalVolume ? parseFloat(platformStats.totalVolume).toFixed(2) : "0.00"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-purple-600", children: "Total Volume" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Wallet, { className: "w-8 h-8 text-purple-500" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-orange-50 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
              "$",
              platformStats.totalFees ? parseFloat(platformStats.totalFees).toFixed(2) : "0.00"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-orange-600", children: "Platform Fees" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Gift2, { className: "w-8 h-8 text-orange-500" })
        ] }) })
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-12 h-12 mx-auto mb-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "Platform statistics not available" })
      ] })
    ] }),
    message && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `rounded-lg p-4 border ${message.type === "success" ? "bg-green-50 border-green-200 text-green-800" : message.type === "error" ? "bg-red-50 border-red-200 text-red-800" : message.type === "warning" ? "bg-yellow-50 border-yellow-200 text-yellow-800" : "bg-blue-50 border-blue-200 text-blue-800"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
        message.type === "success" && /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 mr-2" }),
        message.type === "error" && /* @__PURE__ */ jsxRuntime.jsx(XCircle, { className: "w-4 h-4 mr-2" }),
        message.type === "warning" && /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 mr-2" }),
        message.type === "info" && /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 mr-2" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: message.text })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setMessage(null),
          className: "text-current hover:text-opacity-70",
          children: "\xD7"
        }
      )
    ] }) }),
    isOwnerOrAdmin && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-lg font-semibold text-gray-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: "w-5 h-5 mr-2" }),
        "Add New Creator"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Creator Wallet Address" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "text",
              value: newCreatorWallet,
              onChange: (e) => setNewCreatorWallet(e.target.value),
              placeholder: "0x...",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              disabled: loading
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Membership Tier" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "select",
            {
              value: newCreatorTier,
              onChange: (e) => setNewCreatorTier(Number(e.target.value)),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              disabled: loading,
              children: Object.entries(TIER_INFO).map(([tier, info]) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: tier, children: [
                info.name,
                " (",
                info.split,
                ")"
              ] }, tier))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-600", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: "Selected Tier:" }),
          " ",
          TIER_INFO[newCreatorTier].description
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: handleAddCreator,
            disabled: loading || !newCreatorWallet.trim(),
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
            children: [
              loading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin mr-2" }) : /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: "w-4 h-4 mr-2" }),
              "Add Creator"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm border", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-lg font-semibold text-gray-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-5 h-5 mr-2" }),
        "Creators (",
        creators.length,
        ")"
      ] }),
      loadingCreators ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-8", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-6 h-6 animate-spin text-blue-600 mr-2" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Loading creators..." })
      ] }) : creators.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntime.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "ID" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Wallet" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tier" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tips" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Volume" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("tbody", { className: "divide-y divide-gray-200", children: creators.map((creator) => /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-medium text-gray-900", children: [
            "#",
            creator.id
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-mono text-gray-600", children: [
            creator.wallet.slice(0, 6),
            "...",
            creator.wallet.slice(-4)
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TIER_INFO[creator.tier].color} text-gray-800`, children: TIER_INFO[creator.tier].name }) }),
          /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: creator.active ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center text-green-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 mr-1" }),
            "Active"
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center text-red-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx(XCircle, { className: "w-4 h-4 mr-1" }),
            "Inactive"
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: creator.tipCount }),
          /* @__PURE__ */ jsxRuntime.jsxs("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: [
            "$",
            parseFloat(creator.totalTips).toFixed(2)
          ] })
        ] }, creator.id)) })
      ] }) }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-12 h-12 mx-auto mb-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "No creators found" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm", children: "Add creators using the form above" })
      ] })
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
  const [searchTerm, setSearchTerm] = React14.useState("");
  const [topCreators, setTopCreators] = React14.useState([]);
  const [searchResults, setSearchResults] = React14.useState([]);
  const [isLoadingTop, setIsLoadingTop] = React14.useState(true);
  const [isSearching, setIsSearching] = React14.useState(false);
  React14.useEffect(() => {
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
  React14.useEffect(() => {
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
  const [newCreatorWallet, setNewCreatorWallet] = React14.useState("");
  const [isAddingCreator, setIsAddingCreator] = React14.useState(false);
  const [platformStats, setPlatformStats] = React14.useState(null);
  const [isLoadingStats, setIsLoadingStats] = React14.useState(true);
  const [recentCreators, setRecentCreators] = React14.useState([]);
  const [editingCreatorId, setEditingCreatorId] = React14.useState(null);
  const [newWalletAddress, setNewWalletAddress] = React14.useState("");
  const [isUpdatingWallet, setIsUpdatingWallet] = React14.useState(false);
  React14.useEffect(() => {
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
  const [searchType, setSearchType] = React14.useState("id");
  const [searchValue, setSearchValue] = React14.useState("");
  const [loading, setLoading] = React14.useState(false);
  const [error, setError] = React14.useState("");
  const [viewer, setViewer] = React14.useState(null);
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
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
  const [selectedViewer, setSelectedViewer] = React14.useState(null);
  const [amount, setAmount] = React14.useState("");
  const [reason, setReason] = React14.useState("");
  const [loading, setLoading] = React14.useState(false);
  const [error, setError] = React14.useState("");
  const [success, setSuccess] = React14.useState(false);
  const [isCreator, setIsCreator] = React14.useState(false);
  const [rewardsEnabled, setRewardsEnabled] = React14.useState(true);
  const [lastResult, setLastResult] = React14.useState(null);
  const [showSelector, setShowSelector] = React14.useState(true);
  const isDark = theme === "dark";
  const chainId = activeChain?.id || 137;
  React14.useEffect(() => {
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
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
  const [viewers, setViewers] = React14.useState([
    { id: "1", address: "", amount: "", reason: "" }
  ]);
  const [loading, setLoading] = React14.useState(false);
  const [error, setError] = React14.useState("");
  const [success, setSuccess] = React14.useState(false);
  const [isCreator, setIsCreator] = React14.useState(false);
  const [rewardsEnabled, setRewardsEnabled] = React14.useState(true);
  const [lastResult, setLastResult] = React14.useState(null);
  const isDark = theme === "dark";
  const chainId = activeChain?.id || 137;
  React14.useEffect(() => {
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
  const account = react.useActiveAccount();
  const activeChain = react.useActiveWalletChain();
  const [stats, setStats] = React14.useState({
    totalRewardsGiven: "0",
    totalRewardsReceived: "0",
    rewardCount: 0,
    loading: true
  });
  const [isRefreshing, setIsRefreshing] = React14.useState(false);
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
  React14.useEffect(() => {
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
var RewardPoolInterface = ({
  sdk,
  onSuccess,
  onError,
  className = ""
}) => {
  const [totalAmount, setTotalAmount] = React14.useState("");
  const [viewerAddresses, setViewerAddresses] = React14.useState("");
  const [reason, setReason] = React14.useState("");
  const [chainId, setChainId] = React14.useState();
  const [isProcessing, setIsProcessing] = React14.useState(false);
  const [status, setStatus] = React14.useState("idle");
  const [result, setResult] = React14.useState(null);
  const [error, setError] = React14.useState(null);
  const [preview, setPreview] = React14.useState(null);
  const parseViewerAddresses = React14.useCallback((input) => {
    const addresses = input.split(/[,\n\s]+/).map((addr) => addr.trim()).filter((addr) => addr.length > 0 && addr.startsWith("0x"));
    return [...new Set(addresses)];
  }, []);
  const handlePreview = React14.useCallback(() => {
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
  const handleCreatePool = React14.useCallback(async () => {
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

// src/utils/transactionHistoryService.ts
var DEFAULT_STORAGE_KEY = "tippingchain_transaction_history";
var MAX_HISTORY_ITEMS = 1e3;
var LocalTransactionHistoryService = class {
  constructor(storageKey = DEFAULT_STORAGE_KEY) {
    this.storageKey = storageKey;
  }
  async getStoredTransactions() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to load transaction history from localStorage:", error);
      return [];
    }
  }
  async saveTransactions(transactions) {
    try {
      const trimmed = transactions.slice(-MAX_HISTORY_ITEMS);
      localStorage.setItem(this.storageKey, JSON.stringify(trimmed));
    } catch (error) {
      console.error("Failed to save transaction history to localStorage:", error);
      throw error;
    }
  }
  async getTransactions(filters) {
    const transactions = await this.getStoredTransactions();
    if (!filters) {
      return transactions.sort((a, b) => b.timestamp - a.timestamp);
    }
    let filtered = transactions;
    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((tx) => tx.type === filters.type);
    }
    if (filters.status && filters.status !== "all") {
      filtered = filtered.filter((tx) => tx.status === filters.status);
    }
    if (filters.chainId && filters.chainId !== "all") {
      filtered = filtered.filter((tx) => tx.sourceChainId === filters.chainId);
    }
    if (filters.dateRange) {
      filtered = filtered.filter(
        (tx) => tx.timestamp >= filters.dateRange.start && tx.timestamp <= filters.dateRange.end
      );
    }
    if (filters.tokenSymbol && filters.tokenSymbol !== "all") {
      filtered = filtered.filter((tx) => tx.tokenSymbol === filters.tokenSymbol);
    }
    if (filters.creatorId) {
      filtered = filtered.filter((tx) => tx.creatorId === filters.creatorId);
    }
    return filtered.sort((a, b) => b.timestamp - a.timestamp);
  }
  async addTransaction(transaction) {
    const transactions = await this.getStoredTransactions();
    const newTransaction = {
      ...transaction,
      id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    };
    transactions.push(newTransaction);
    await this.saveTransactions(transactions);
    return newTransaction.id;
  }
  async updateTransaction(id, updates) {
    const transactions = await this.getStoredTransactions();
    const index = transactions.findIndex((tx) => tx.id === id);
    if (index === -1) {
      throw new Error(`Transaction with id ${id} not found`);
    }
    transactions[index] = { ...transactions[index], ...updates };
    await this.saveTransactions(transactions);
  }
  async clearHistory() {
    localStorage.removeItem(this.storageKey);
  }
  async getStats(filters) {
    const transactions = await this.getTransactions(filters);
    const totalTransactions = transactions.length;
    const successfulTransactions = transactions.filter((tx) => tx.status === "success").length;
    const pendingTransactions = transactions.filter((tx) => tx.status === "pending").length;
    const failedTransactions = transactions.filter((tx) => tx.status === "failed").length;
    const totalVolumeUsd = transactions.reduce((sum, tx) => {
      if (tx.status === "success" && tx.estimatedUsdValue) {
        return sum + parseFloat(tx.estimatedUsdValue);
      }
      return sum;
    }, 0);
    const totalFeesUsd = transactions.reduce((sum, tx) => {
      if (tx.status === "success" && tx.platformFeeUsd) {
        return sum + parseFloat(tx.platformFeeUsd);
      }
      return sum;
    }, 0);
    const creatorIds = new Set(
      transactions.filter((tx) => tx.type === "tip" && tx.status === "success" && tx.creatorId).map((tx) => tx.creatorId)
    );
    const chainCounts = {};
    transactions.forEach((tx) => {
      chainCounts[tx.sourceChainId] = (chainCounts[tx.sourceChainId] || 0) + 1;
    });
    const favoriteChainId = Object.entries(chainCounts).sort(([, a], [, b]) => b - a)[0];
    const favoriteChain = favoriteChainId ? {
      chainId: parseInt(favoriteChainId[0]),
      transactionCount: favoriteChainId[1]
    } : { chainId: 1, transactionCount: 0 };
    const tokenStats = {};
    transactions.forEach((tx) => {
      if (tx.status === "success") {
        if (!tokenStats[tx.tokenSymbol]) {
          tokenStats[tx.tokenSymbol] = { count: 0, volume: 0 };
        }
        tokenStats[tx.tokenSymbol].count++;
        if (tx.estimatedUsdValue) {
          tokenStats[tx.tokenSymbol].volume += parseFloat(tx.estimatedUsdValue);
        }
      }
    });
    const favoriteTokenEntry = Object.entries(tokenStats).sort(([, a], [, b]) => b.count - a.count)[0];
    const favoriteToken = favoriteTokenEntry ? {
      symbol: favoriteTokenEntry[0],
      transactionCount: favoriteTokenEntry[1].count,
      volumeUsd: favoriteTokenEntry[1].volume.toFixed(2)
    } : { symbol: "ETH", transactionCount: 0, volumeUsd: "0.00" };
    return {
      totalTransactions,
      successfulTransactions,
      pendingTransactions,
      failedTransactions,
      totalVolumeUsd: totalVolumeUsd.toFixed(2),
      totalFeesUsd: totalFeesUsd.toFixed(2),
      uniqueCreatorsTipped: creatorIds.size,
      favoriteChain,
      favoriteToken
    };
  }
};
var transactionBuilder = {
  createTipTransaction: (params) => ({
    type: "tip",
    status: "pending",
    sourceChainId: params.sourceChainId,
    destinationChainId: 33139,
    // ApeChain
    tokenSymbol: params.tokenSymbol,
    tokenAddress: params.tokenAddress,
    amount: params.amount,
    amountWei: params.amountWei,
    estimatedUsdValue: params.estimatedUsdValue,
    platformFee: params.platformFee,
    creatorId: params.creatorId,
    creatorWallet: params.creatorWallet,
    title: `Tip to Creator #${params.creatorId}`,
    description: `Sending ${params.amount} ${params.tokenSymbol} to Creator #${params.creatorId}`,
    canRetry: true
  }),
  createApprovalTransaction: (params) => ({
    type: "approval",
    status: "pending",
    sourceChainId: params.chainId,
    tokenSymbol: params.tokenSymbol,
    tokenAddress: params.tokenAddress,
    amount: params.amount,
    amountWei: params.amount,
    // For approvals, amount is already in correct format
    spenderAddress: params.spenderAddress,
    title: `Approve ${params.tokenSymbol}`,
    description: `Approving ${params.tokenSymbol} spending for TippingChain contract`,
    canRetry: true
  }),
  createCreatorRegistrationTransaction: (params) => ({
    type: "creator_registration",
    status: "pending",
    sourceChainId: params.chainId,
    tokenSymbol: "ETH",
    // Gas token
    amount: "0",
    amountWei: "0",
    creatorWallet: params.creatorWallet,
    membershipTier: params.membershipTier,
    title: "Register New Creator",
    description: `Registering creator ${params.creatorWallet.slice(0, 8)}... with Tier ${params.membershipTier}`,
    canRetry: true
  })
};
var createTransactionHistoryService = (storageKey) => {
  return new LocalTransactionHistoryService(storageKey);
};
var CHAIN_EXPLORERS2 = {
  1: { name: "Etherscan", baseUrl: "https://etherscan.io", txPath: "/tx/" },
  137: { name: "PolygonScan", baseUrl: "https://polygonscan.com", txPath: "/tx/" },
  10: { name: "Optimism Explorer", baseUrl: "https://optimistic.etherscan.io", txPath: "/tx/" },
  56: { name: "BscScan", baseUrl: "https://bscscan.com", txPath: "/tx/" },
  43114: { name: "SnowTrace", baseUrl: "https://snowtrace.io", txPath: "/tx/" },
  8453: { name: "BaseScan", baseUrl: "https://basescan.org", txPath: "/tx/" },
  42161: { name: "Arbiscan", baseUrl: "https://arbiscan.io", txPath: "/tx/" },
  167e3: { name: "Taiko Explorer", baseUrl: "https://taikoscan.io", txPath: "/tx/" },
  2741: { name: "Abstract Explorer", baseUrl: "https://explorer.abstract.xyz", txPath: "/tx/" },
  33139: { name: "ApeChain Explorer", baseUrl: "https://apescan.io", txPath: "/tx/" }
};
var SUPPORTED_CHAINS4 = [
  { id: 1, name: "Ethereum" },
  { id: 137, name: "Polygon" },
  { id: 10, name: "Optimism" },
  { id: 56, name: "BSC" },
  { id: 43114, name: "Avalanche" },
  { id: 8453, name: "Base" },
  { id: 42161, name: "Arbitrum" },
  { id: 167e3, name: "Taiko" },
  { id: 2741, name: "Abstract" },
  { id: 33139, name: "ApeChain" }
];
var TransactionHistory = ({
  className = "",
  maxHeight = "max-h-96",
  showStats = true,
  showFilters = true,
  walletAddress,
  storageService,
  onTransactionClick,
  getExplorerUrl,
  maxItems = 100
}) => {
  const [transactions, setTransactions] = React14.useState([]);
  const [stats, setStats] = React14.useState(null);
  const [loading, setLoading] = React14.useState(false);
  const [expandedTx, setExpandedTx] = React14.useState(null);
  const [filters, setFilters] = React14.useState({});
  const [showFilterPanel, setShowFilterPanel] = React14.useState(false);
  const historyService = storageService || createTransactionHistoryService();
  const loadTransactions = async () => {
    setLoading(true);
    try {
      const [txList, statsData] = await Promise.all([
        historyService.getTransactions(filters),
        showStats ? historyService.getStats(filters) : null
      ]);
      const limitedTxList = txList.slice(0, maxItems);
      setTransactions(limitedTxList);
      if (statsData) setStats(statsData);
    } catch (error) {
      console.error("Failed to load transaction history:", error);
    } finally {
      setLoading(false);
    }
  };
  React14.useEffect(() => {
    loadTransactions();
  }, [filters]);
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-4 h-4 text-yellow-500 animate-spin" });
      case "success":
        return /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 text-green-500" });
      case "failed":
        return /* @__PURE__ */ jsxRuntime.jsx(XCircle, { className: "w-4 h-4 text-red-500" });
      case "cancelled":
        return /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 text-gray-500" });
      default:
        return /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 text-gray-500" });
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      case "cancelled":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const getTypeIcon = (type) => {
    switch (type) {
      case "tip":
        return "\u{1F4B0}";
      case "approval":
        return "\u2705";
      case "creator_registration":
        return "\u{1F464}";
      case "viewer_reward":
        return "\u{1F381}";
      default:
        return "\u{1F4C4}";
    }
  };
  const getChainName2 = (chainId) => {
    const chain = SUPPORTED_CHAINS4.find((c) => c.id === chainId);
    return chain ? chain.name : `Chain ${chainId}`;
  };
  const getExplorerLink = (chainId, txHash) => {
    if (getExplorerUrl) {
      return getExplorerUrl(chainId, txHash);
    }
    const explorer = CHAIN_EXPLORERS2[chainId];
    if (!explorer) return null;
    return `${explorer.baseUrl}${explorer.txPath}${txHash}`;
  };
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - timestamp;
    if (diff < 6e4) return "Just now";
    if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
    if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
    if (diff < 6048e5) return `${Math.floor(diff / 864e5)}d ago`;
    return date.toLocaleDateString();
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy to clipboard:", err);
    });
  };
  const handleTransactionClick = (tx) => {
    if (onTransactionClick) {
      onTransactionClick(tx);
    } else {
      setExpandedTx(expandedTx === tx.id ? null : tx.id);
    }
  };
  const clearAllHistory = async () => {
    if (confirm("Are you sure you want to clear all transaction history? This cannot be undone.")) {
      await historyService.clearHistory();
      loadTransactions();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-white rounded-xl shadow-lg ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-6 h-6 text-blue-600" }),
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Transaction History" }),
        transactions.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full", children: [
          transactions.length,
          " transactions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        showFilters && /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setShowFilterPanel(!showFilterPanel),
            className: `flex items-center px-3 py-2 text-sm rounded-md transition-colors ${showFilterPanel ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Filter, { className: "w-4 h-4 mr-2" }),
              "Filters"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: loadTransactions,
            disabled: loading,
            className: "flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}` }),
              "Refresh"
            ]
          }
        ),
        transactions.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: clearAllHistory,
            className: "flex items-center px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Trash2, { className: "w-4 h-4 mr-2" }),
              "Clear"
            ]
          }
        )
      ] })
    ] }),
    showStats && stats && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-2xl font-bold text-gray-900", children: [
          "$",
          stats.totalVolumeUsd
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Total Volume" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.successfulTransactions }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Successful" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-5 h-5 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold text-gray-900", children: stats.uniqueCreatorsTipped }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Creators Tipped" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntime.jsx(Coins, { className: "w-5 h-5 text-purple-600" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-2xl font-bold text-gray-900", children: [
          "$",
          stats.totalFeesUsd
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-600", children: "Total Fees" })
      ] })
    ] }) }),
    showFilters && showFilterPanel && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-6 bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Transaction Type" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "select",
          {
            value: filters.type || "all",
            onChange: (e) => setFilters({ ...filters, type: e.target.value }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Types" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "tip", children: "Tips" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "approval", children: "Approvals" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "creator_registration", children: "Creator Registration" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "viewer_reward", children: "Viewer Rewards" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "select",
          {
            value: filters.status || "all",
            onChange: (e) => setFilters({ ...filters, status: e.target.value }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Status" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "success", children: "Success" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "failed", children: "Failed" }),
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "cancelled", children: "Cancelled" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Chain" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "select",
          {
            value: filters.chainId || "all",
            onChange: (e) => setFilters({ ...filters, chainId: e.target.value === "all" ? "all" : parseInt(e.target.value) }),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Chains" }),
              SUPPORTED_CHAINS4.map((chain) => /* @__PURE__ */ jsxRuntime.jsx("option", { value: chain.id, children: chain.name }, chain.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setFilters({}),
          className: "w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
          children: "Clear Filters"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `${maxHeight} overflow-y-auto`, children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-12", children: [
      /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: "w-8 h-8 animate-spin text-blue-600 mr-3" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Loading transaction history..." })
    ] }) : transactions.length === 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-500 text-lg", children: "No transactions found" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-400 mt-2", children: Object.keys(filters).length > 0 ? "Try adjusting your filters" : "Your transactions will appear here once you start using TippingChain" })
    ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "divide-y divide-gray-200", children: transactions.map((tx) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 hover:bg-gray-50 transition-colors", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl", children: getTypeIcon(tx.type) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium text-gray-900 truncate", children: tx.title }),
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(tx.status)}`, children: [
                getStatusIcon(tx.status),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-1.5 capitalize", children: tx.status })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4 mt-1 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                tx.amount,
                " ",
                tx.tokenSymbol
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u2022" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: getChainName2(tx.sourceChainId) }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u2022" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: formatTimestamp(tx.timestamp) }),
              tx.estimatedUsdValue && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u2022" }),
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-green-600 font-medium", children: [
                  "$",
                  parseFloat(tx.estimatedUsdValue).toFixed(2)
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => handleTransactionClick(tx),
            className: "p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors",
            children: expandedTx === tx.id ? /* @__PURE__ */ jsxRuntime.jsx(ChevronDown, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, { className: "w-4 h-4" })
          }
        ) })
      ] }),
      expandedTx === tx.id && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4 pt-4 border-t border-gray-200", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-700", children: "Description:" }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mt-1", children: tx.description })
          ] }),
          tx.creatorId && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-700", children: "Creator:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-blue-600 ml-2", children: [
              "#",
              tx.creatorId
            ] }),
            tx.creatorWallet && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-500 ml-2", children: [
              "(",
              tx.creatorWallet.slice(0, 8),
              "...)"
            ] })
          ] }),
          tx.error && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-red-700", children: "Error:" }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-red-600 mt-1 text-xs", children: tx.error })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          tx.sourceTransactionHash && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-700", children: "Transaction Hash:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mt-1", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-600 font-mono text-xs", children: [
                tx.sourceTransactionHash.slice(0, 10),
                "...",
                tx.sourceTransactionHash.slice(-8)
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  onClick: () => copyToClipboard(tx.sourceTransactionHash),
                  className: "ml-2 p-1 text-gray-400 hover:text-gray-600",
                  title: "Copy hash",
                  children: /* @__PURE__ */ jsxRuntime.jsx(Copy, { className: "w-3 h-3" })
                }
              ),
              getExplorerLink(tx.sourceChainId, tx.sourceTransactionHash) && /* @__PURE__ */ jsxRuntime.jsx(
                "a",
                {
                  href: getExplorerLink(tx.sourceChainId, tx.sourceTransactionHash),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "ml-2 p-1 text-blue-600 hover:text-blue-800",
                  title: "View on explorer",
                  children: /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { className: "w-3 h-3" })
                }
              )
            ] })
          ] }),
          tx.platformFee && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-700", children: "Platform Fee:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-600 ml-2", children: [
              tx.platformFee,
              " ",
              tx.tokenSymbol
            ] }),
            tx.platformFeeUsd && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-500 ml-1", children: [
              "($",
              tx.platformFeeUsd,
              ")"
            ] })
          ] })
        ] })
      ] }) })
    ] }, tx.id)) }) })
  ] });
};
var MetricCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  colorScheme = "blue",
  loading = false
}) => {
  const colorClasses = {
    blue: "border-l-blue-500 bg-blue-50",
    green: "border-l-green-500 bg-green-50",
    purple: "border-l-purple-500 bg-purple-50",
    orange: "border-l-orange-500 bg-orange-50",
    red: "border-l-red-500 bg-red-50",
    yellow: "border-l-yellow-500 bg-yellow-50"
  };
  const iconColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    red: "text-red-600",
    yellow: "text-yellow-600"
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colorClasses[colorScheme]}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: title }),
      loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-6 h-6 animate-spin text-gray-400" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2 text-gray-400", children: "Loading..." })
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: value }),
        subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: subtitle }),
        trend && trendValue && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex items-center mt-1 text-sm ${trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"}`, children: [
          trend === "up" ? /* @__PURE__ */ jsxRuntime.jsx(ArrowUpRight, { className: "w-4 h-4 mr-1" }) : trend === "down" ? /* @__PURE__ */ jsxRuntime.jsx(ArrowDownRight, { className: "w-4 h-4 mr-1" }) : /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-4 h-4 mr-1" }),
          trendValue
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `w-8 h-8 ${iconColors[colorScheme]}`, children: icon })
  ] }) });
};
var CreatorAnalyticsDashboard = ({
  creators = [],
  platformStats,
  chainId,
  chainName,
  loading = false,
  error = null,
  onRefresh,
  onCreatorSelect,
  onExportData,
  className = "",
  showPlatformStats = true,
  showCreatorRankings = true,
  showTrendAnalysis = true,
  showViewerRewards = true,
  maxCreatorsShown = 20
}) => {
  const [timeRange, setTimeRange] = React14.useState("7d");
  const [selectedTier, setSelectedTier] = React14.useState("all");
  const [sortBy, setSortBy] = React14.useState("tips");
  const [lastRefresh, setLastRefresh] = React14.useState(null);
  React14.useEffect(() => {
    if (!loading && creators.length > 0) {
      setLastRefresh(/* @__PURE__ */ new Date());
    }
  }, [loading, creators.length]);
  const formatAmount = React14.useCallback((amount) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(void 0, {
        maximumFractionDigits: 4,
        minimumFractionDigits: 0
      });
    } catch {
      return "0";
    }
  }, []);
  const formatCurrency = React14.useCallback((amount) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(eth * 2e3);
    } catch {
      return "$0.00";
    }
  }, []);
  const filteredCreators = creators.filter((creator) => {
    if (selectedTier !== "all" && creator.tier !== selectedTier) return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case "tips":
        return parseFloat(b.totalTips) - parseFloat(a.totalTips);
      case "count":
        return b.tipCount - a.tipCount;
      case "average":
        const avgA = a.tipCount > 0 ? parseFloat(a.totalTips) / a.tipCount : 0;
        const avgB = b.tipCount > 0 ? parseFloat(b.totalTips) / b.tipCount : 0;
        return avgB - avgA;
      case "recent":
        return (b.lastTipTimestamp || 0) - (a.lastTipTimestamp || 0);
      default:
        return 0;
    }
  }).slice(0, maxCreatorsShown);
  const analytics = React14__default.default.useMemo(() => {
    if (creators.length === 0) return null;
    const totalTips = creators.reduce((sum, c) => sum + parseFloat(c.totalTips), 0);
    const totalCount = creators.reduce((sum, c) => sum + c.tipCount, 0);
    const activeCreators = creators.filter((c) => c.active).length;
    const avgTipAmount = totalCount > 0 ? totalTips / totalCount : 0;
    const tierDistribution = creators.reduce((acc, c) => {
      acc[c.tier] = (acc[c.tier] || 0) + 1;
      return acc;
    }, {});
    const topPerformers = creators.sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips)).slice(0, 5);
    return {
      totalTips: totalTips.toString(),
      totalCount,
      activeCreators,
      avgTipAmount: avgTipAmount.toString(),
      tierDistribution,
      topPerformers,
      inactiveCreators: creators.length - activeCreators
    };
  }, [creators]);
  const handleRefresh = React14.useCallback(() => {
    if (onRefresh) {
      onRefresh();
    }
  }, [onRefresh]);
  const handleExport = React14.useCallback(() => {
    if (onExportData) {
      onExportData();
    } else {
      const dataToExport = {
        chainId,
        chainName,
        exportDate: (/* @__PURE__ */ new Date()).toISOString(),
        creators: filteredCreators,
        platformStats,
        analytics
      };
      const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `creator-analytics-${chainName}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }, [chainId, chainName, filteredCreators, platformStats, analytics, onExportData]);
  if (error) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `bg-white rounded-xl shadow-lg p-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-12 h-12 text-red-500 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Analytics Error" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mb-4", children: error }),
      onRefresh && /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: handleRefresh,
          className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Refresh, { className: "w-4 h-4 mr-2" }),
            "Retry"
          ]
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `space-y-8 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-2xl font-bold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-8 h-8 mr-3 text-blue-600" }),
            "Creator Analytics Dashboard"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-gray-600", children: [
            chainName,
            " \u2022 ",
            creators.length,
            " creators"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
          onExportData && /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: handleExport,
              className: "inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Export"
              ]
            }
          ),
          onRefresh && /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: handleRefresh,
              disabled: loading,
              className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors",
              children: [
                loading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
                "Refresh"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Time Range" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: timeRange,
              onChange: (e) => setTimeRange(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "24h", children: "Last 24 Hours" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "7d", children: "Last 7 Days" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "30d", children: "Last 30 Days" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Time" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Tier Filter" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: selectedTier,
              onChange: (e) => setSelectedTier(e.target.value === "all" ? "all" : Number(e.target.value)),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Tiers" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: 1, children: "Tier 1" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: 2, children: "Tier 2" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: 3, children: "Tier 3" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: 4, children: "Tier 4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Sort By" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "tips", children: "Total Tips" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "count", children: "Tip Count" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "average", children: "Average Tip" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "recent", children: "Most Recent" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-end", children: lastRefresh && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-4 h-4 inline mr-1" }),
          "Updated: ",
          lastRefresh.toLocaleTimeString()
        ] }) })
      ] })
    ] }),
    showPlatformStats && platformStats && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Total Platform Tips",
          value: `${formatAmount(platformStats.totalTips)} ETH`,
          subtitle: formatCurrency(platformStats.totalTips),
          icon: /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-8 h-8" }),
          colorScheme: "blue",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Active Creators",
          value: platformStats.activeCreators,
          subtitle: `${creators.length - platformStats.activeCreators} inactive`,
          icon: /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8" }),
          colorScheme: "green",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Total Transactions",
          value: platformStats.totalCount.toLocaleString(),
          subtitle: "All time",
          icon: /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-8 h-8" }),
          colorScheme: "purple",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Relayed to ApeChain",
          value: `${formatAmount(platformStats.totalRelayed)} USDC`,
          subtitle: platformStats.autoRelayEnabled ? "Auto-relay enabled" : "Manual relay",
          icon: /* @__PURE__ */ jsxRuntime.jsx(Zap, { className: "w-8 h-8" }),
          colorScheme: "orange",
          loading
        }
      )
    ] }),
    analytics && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-3 lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Average Tip Amount",
          value: `${formatAmount(analytics.avgTipAmount)} ETH`,
          subtitle: "Per transaction",
          icon: /* @__PURE__ */ jsxRuntime.jsx(Target, { className: "w-8 h-8" }),
          colorScheme: "blue",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Creator Activity Rate",
          value: `${Math.round(analytics.activeCreators / creators.length * 100)}%`,
          subtitle: `${analytics.activeCreators}/${creators.length} active`,
          icon: /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-8 h-8" }),
          colorScheme: "green",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Top Tier Distribution",
          value: `Tier ${Object.entries(analytics.tierDistribution).reduce((a, b) => analytics.tierDistribution[parseInt(a[0])] > analytics.tierDistribution[parseInt(b[0])] ? a : b)[0]}`,
          subtitle: `${Object.entries(analytics.tierDistribution).reduce((a, b) => analytics.tierDistribution[parseInt(a[0])] > analytics.tierDistribution[parseInt(b[0])] ? a : b)[1]} creators`,
          icon: /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "w-8 h-8" }),
          colorScheme: "purple",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Platform Efficiency",
          value: `${platformStats?.autoRelayEnabled ? 95 : 75}%`,
          subtitle: platformStats?.autoRelayEnabled ? "Auto-relay active" : "Manual processing",
          icon: /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-8 h-8" }),
          colorScheme: "orange",
          loading
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        MetricCard,
        {
          title: "Growth Potential",
          value: `${analytics.inactiveCreators}`,
          subtitle: "Inactive creators",
          icon: /* @__PURE__ */ jsxRuntime.jsx(Eye, { className: "w-8 h-8" }),
          colorScheme: "yellow",
          loading
        }
      )
    ] }),
    showCreatorRankings && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("h3", { className: "text-xl font-semibold text-gray-900 flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Trophy, { className: "w-6 h-6 mr-2 text-yellow-600" }),
          "Creator Leaderboard",
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "ml-2 text-sm text-gray-500", children: [
            "(",
            filteredCreators.length,
            " shown)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Filter, { className: "w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-gray-500", children: [
            "Filtered by: ",
            selectedTier === "all" ? "All Tiers" : `Tier ${selectedTier}`
          ] })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center py-12", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-8 h-8 animate-spin text-blue-600 mr-3" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Loading creator rankings..." })
      ] }) : filteredCreators.length === 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-12 h-12 mx-auto mb-4 text-gray-400" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "No creators found matching the current filters" })
      ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Rank" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Creator" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Tier" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Total Tips" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Transactions" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Average Tip" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Status" }),
          /* @__PURE__ */ jsxRuntime.jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-600", children: "Performance" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: filteredCreators.map((creator, index) => {
          const avgTip = creator.tipCount > 0 ? parseFloat(creator.totalTips) / creator.tipCount : 0;
          const isTopPerformer = index < 3;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "tr",
            {
              className: `border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${isTopPerformer ? "bg-gradient-to-r from-yellow-50 to-transparent" : ""}`,
              onClick: () => onCreatorSelect?.(creator.id),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center", children: index < 3 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? "bg-yellow-100 text-yellow-800" : index === 1 ? "bg-gray-100 text-gray-800" : "bg-orange-100 text-orange-800"}`, children: index === 0 ? "\u{1F947}" : index === 1 ? "\u{1F948}" : "\u{1F949}" }) : /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-500 w-8 text-center", children: [
                  "#",
                  index + 1
                ] }) }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-blue-600 font-semibold", children: [
                    "#",
                    creator.id
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs font-mono text-gray-500 mt-1", children: [
                    creator.wallet.slice(0, 6),
                    "...",
                    creator.wallet.slice(-4)
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${creator.tier === 1 ? "bg-gray-100 text-gray-800" : creator.tier === 2 ? "bg-blue-100 text-blue-800" : creator.tier === 3 ? "bg-purple-100 text-purple-800" : "bg-yellow-100 text-yellow-800"}`, children: [
                  "Tier ",
                  creator.tier
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold", children: [
                    formatAmount(creator.totalTips),
                    " ETH"
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-gray-500", children: formatCurrency(creator.totalTips) })
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: creator.tipCount.toLocaleString() }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-sm", children: [
                  formatAmount(avgTip.toString()),
                  " ETH"
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${creator.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: creator.active ? "Active" : "Inactive" }) }),
                /* @__PURE__ */ jsxRuntime.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1", children: [
                  creator.tipCount > 100 && /* @__PURE__ */ jsxRuntime.jsx(Star, { className: "w-4 h-4 text-yellow-500", title: "High Volume" }),
                  avgTip > 0.1 && /* @__PURE__ */ jsxRuntime.jsx(Coins, { className: "w-4 h-4 text-blue-500", title: "High Value" }),
                  isTopPerformer && /* @__PURE__ */ jsxRuntime.jsx(Trophy, { className: "w-4 h-4 text-orange-500", title: "Top Performer" })
                ] }) })
              ]
            },
            creator.id
          );
        }) })
      ] }) })
    ] }),
    showTrendAnalysis && analytics && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h3", { className: "text-xl font-semibold text-gray-900 mb-6 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(PieChart, { className: "w-6 h-6 mr-2 text-purple-600" }),
        "Creator Distribution Analysis"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-700 mb-3", children: "Tier Distribution" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2", children: Object.entries(analytics.tierDistribution).map(([tier, count]) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-gray-600", children: [
              "Tier ",
              tier,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 bg-gray-200 rounded-full h-2 mr-2", children: /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "bg-blue-600 h-2 rounded-full",
                  style: { width: `${count / creators.length * 100}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: count })
            ] })
          ] }, tier)) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-700 mb-3", children: "Activity Status" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-gray-600", children: "Active:" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 bg-gray-200 rounded-full h-2 mr-2", children: /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: "bg-green-600 h-2 rounded-full",
                    style: { width: `${analytics.activeCreators / creators.length * 100}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: analytics.activeCreators })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-gray-600", children: "Inactive:" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 bg-gray-200 rounded-full h-2 mr-2", children: /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: "bg-red-600 h-2 rounded-full",
                    style: { width: `${analytics.inactiveCreators / creators.length * 100}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: analytics.inactiveCreators })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium text-gray-700 mb-3", children: "Top Performers" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: analytics.topPerformers.slice(0, 3).map((creator, index) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-600", children: [
              "#",
              creator.id,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
              formatAmount(creator.totalTips),
              " ETH"
            ] })
          ] }, creator.id)) })
        ] })
      ] })
    ] }),
    showViewerRewards && creators.some((c) => c.viewerRewardsSent) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h3", { className: "text-xl font-semibold text-gray-900 mb-6 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Gift, { className: "w-6 h-6 mr-2 text-green-600" }),
        "Viewer Rewards Activity"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          MetricCard,
          {
            title: "Total Viewer Rewards Sent",
            value: `${formatAmount(creators.reduce((sum, c) => sum + parseFloat(c.viewerRewardsSent || "0"), 0).toString())} ETH`,
            subtitle: "By all creators",
            icon: /* @__PURE__ */ jsxRuntime.jsx(Gift, { className: "w-8 h-8" }),
            colorScheme: "green"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          MetricCard,
          {
            title: "Active Reward Senders",
            value: creators.filter((c) => c.viewerRewardsSent && parseFloat(c.viewerRewardsSent) > 0).length,
            subtitle: "Creators sending rewards",
            icon: /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8" }),
            colorScheme: "blue"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          MetricCard,
          {
            title: "Total Reward Transactions",
            value: creators.reduce((sum, c) => sum + (c.viewerRewardCount || 0), 0),
            subtitle: "Individual reward sends",
            icon: /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-8 h-8" }),
            colorScheme: "purple"
          }
        )
      ] })
    ] })
  ] });
};
var useTransactionMonitor = (transactionHash, chainId, sdk, options = {}) => {
  const {
    enableNotifications = true,
    autoStart = true,
    onStatusChange,
    onComplete,
    onError
  } = options;
  const [state, setState] = React14.useState({
    status: "pending",
    receipt: null,
    error: null,
    isLoading: false,
    progress: 0
  });
  const { updateNotification } = useNotifications();
  const watchPromiseRef = React14.useRef(null);
  const notificationIdRef = React14.useRef(null);
  const getProgressFromStatus = React14.useCallback((status) => {
    switch (status) {
      case "pending":
        return 25;
      case "confirmed":
        return 100;
      case "failed":
        return 0;
      case "dropped":
        return 0;
      case "replaced":
        return 50;
      case "not_found":
        return 0;
      default:
        return 0;
    }
  }, []);
  const startMonitoring = React14.useCallback(async (txHash, chainId2, notificationId) => {
    if (!sdk?.transactionStatus) {
      console.error("SDK transaction status service not available");
      return;
    }
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    notificationIdRef.current = notificationId || null;
    try {
      const chain = sdk.getChainById(chainId2);
      if (!chain) {
        throw new Error(`Chain ${chainId2} not supported`);
      }
      watchPromiseRef.current = sdk.transactionStatus.watchTransactionWithCallback(
        txHash,
        chain,
        (update) => {
          const progress = getProgressFromStatus(update.status);
          setState((prev) => ({
            ...prev,
            status: update.status,
            receipt: update.receipt || null,
            error: update.error || null,
            progress
          }));
          if (enableNotifications && notificationIdRef.current) {
            let title = "";
            let message = "";
            let type = "pending";
            switch (update.status) {
              case "confirmed":
                type = "success";
                title = "Transaction Confirmed! \u2705";
                message = `Transaction completed successfully`;
                break;
              case "failed":
                type = "error";
                title = "Transaction Failed";
                message = update.error || "Transaction failed";
                break;
              case "pending":
                title = "Transaction Pending";
                message = `Waiting for confirmation...`;
                break;
              default:
                title = `Transaction ${update.status}`;
                message = `Status: ${update.status}`;
            }
            updateNotification(notificationIdRef.current, {
              type,
              title,
              message,
              transactionHash: txHash,
              chainId: chainId2,
              duration: type === "success" || type === "error" ? 6e3 : 0
            });
          }
          onStatusChange?.(update);
          if (update.status === "confirmed" && update.receipt) {
            onComplete?.(update.receipt);
          } else if (update.status === "failed") {
            onError?.(update.error || "Transaction failed");
          }
        }
      );
      const result = await watchPromiseRef.current;
      setState((prev) => ({ ...prev, isLoading: false }));
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
        status: "failed"
      }));
      onError?.(errorMessage);
    }
  }, [sdk, enableNotifications, getProgressFromStatus, updateNotification, onStatusChange, onComplete, onError]);
  const stopMonitoring = React14.useCallback(() => {
    if (transactionHash && chainId && sdk?.transactionStatus) {
      sdk.transactionStatus.cancelWatch(transactionHash, chainId);
    }
    watchPromiseRef.current = null;
    setState((prev) => ({ ...prev, isLoading: false }));
  }, [transactionHash, chainId, sdk]);
  React14.useEffect(() => {
    if (autoStart && transactionHash && chainId && sdk) {
      startMonitoring(transactionHash, chainId);
    }
    return () => {
      stopMonitoring();
    };
  }, [transactionHash, chainId, autoStart, sdk, startMonitoring, stopMonitoring]);
  const monitor = React14.useCallback((txHash, chain, notificationId) => {
    return startMonitoring(txHash, chain, notificationId);
  }, [startMonitoring]);
  const reset = React14.useCallback(() => {
    setState({
      status: "pending",
      receipt: null,
      error: null,
      isLoading: false,
      progress: 0
    });
    notificationIdRef.current = null;
  }, []);
  return {
    // State
    ...state,
    // Control functions
    monitor,
    stopMonitoring,
    reset,
    // Status helpers
    isPending: state.status === "pending",
    isConfirmed: state.status === "confirmed",
    isFailed: state.status === "failed",
    isComplete: state.status === "confirmed" || state.status === "failed"
  };
};
var useBalanceWatcher = (address, chainId, tokenAddress, sdk, options = {}) => {
  const {
    enableNotifications = false,
    // Only notify on significant changes
    autoStart = true,
    pollInterval = 1e4,
    onBalanceChange,
    onError,
    notifyOnIncrease = true,
    notifyOnDecrease = false
  } = options;
  const [state, setState] = React14.useState({
    balance: "0",
    previousBalance: null,
    isRefreshing: false,
    lastUpdated: null,
    error: null
  });
  const { addNotification } = useNotifications();
  const watcherKeyRef = React14.useRef(null);
  const isWatchingRef = React14.useRef(false);
  const formatBalance = React14.useCallback((balance, decimals = 18) => {
    try {
      const balanceBigInt = BigInt(balance);
      const divisor = BigInt(10 ** decimals);
      const wholePart = balanceBigInt / divisor;
      const fractionalPart = balanceBigInt % divisor;
      if (fractionalPart === BigInt(0)) {
        return wholePart.toString();
      }
      const fractionalStr = fractionalPart.toString().padStart(decimals, "0");
      const trimmedFractional = fractionalStr.replace(/0+$/, "");
      return `${wholePart}.${trimmedFractional}`;
    } catch (error) {
      console.error("Error formatting balance:", error);
      return "0";
    }
  }, []);
  const isSignificantChange = React14.useCallback((oldBalance, newBalance, threshold = 0.01) => {
    try {
      const oldBal = parseFloat(oldBalance);
      const newBal = parseFloat(newBalance);
      if (oldBal === 0) return newBal > 0;
      const changePercent = Math.abs((newBal - oldBal) / oldBal);
      return changePercent >= threshold;
    } catch {
      return oldBalance !== newBalance;
    }
  }, []);
  const startWatching = React14.useCallback(async () => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      console.warn("Missing required parameters for balance watching");
      return;
    }
    if (isWatchingRef.current) {
      console.warn("Already watching balance");
      return;
    }
    setState((prev) => ({ ...prev, error: null }));
    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }
      isWatchingRef.current = true;
      watcherKeyRef.current = sdk.balanceWatcher.watchBalance(
        address,
        chain,
        tokenAddress,
        (update) => {
          const formattedBalance = formatBalance(update.balance);
          const formattedPrevious = update.previousBalance ? formatBalance(update.previousBalance) : null;
          setState((prev) => ({
            ...prev,
            balance: formattedBalance,
            previousBalance: formattedPrevious,
            lastUpdated: new Date(update.timestamp),
            isRefreshing: false
          }));
          if (enableNotifications && update.previousBalance) {
            const balanceIncreased = BigInt(update.balance) > BigInt(update.previousBalance);
            const balanceDecreased = BigInt(update.balance) < BigInt(update.previousBalance);
            const shouldNotify = balanceIncreased && notifyOnIncrease || balanceDecreased && notifyOnDecrease;
            if (shouldNotify && isSignificantChange(update.previousBalance, update.balance)) {
              const changeAmount = formatBalance(
                (BigInt(update.balance) - BigInt(update.previousBalance)).toString()
              );
              const tokenSymbol = tokenAddress ? "Token" : "ETH";
              const changeType = balanceIncreased ? "increased" : "decreased";
              const emoji = balanceIncreased ? "\u{1F4C8}" : "\u{1F4C9}";
              addNotification({
                type: balanceIncreased ? "success" : "info",
                title: `Balance ${changeType} ${emoji}`,
                message: `${tokenSymbol} balance changed by ${changeAmount}`,
                duration: 5e3
              });
            }
          }
          onBalanceChange?.(update);
        },
        { pollInterval }
      );
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setState((prev) => ({ ...prev, error: errorMessage }));
      isWatchingRef.current = false;
      onError?.(errorMessage);
    }
  }, [
    address,
    chainId,
    tokenAddress,
    sdk,
    pollInterval,
    enableNotifications,
    notifyOnIncrease,
    notifyOnDecrease,
    formatBalance,
    isSignificantChange,
    addNotification,
    onBalanceChange,
    onError
  ]);
  const stopWatching = React14.useCallback(() => {
    if (watcherKeyRef.current && sdk?.balanceWatcher) {
      sdk.balanceWatcher.cancelBalanceWatch(watcherKeyRef.current);
      watcherKeyRef.current = null;
    }
    isWatchingRef.current = false;
    setState((prev) => ({ ...prev, isRefreshing: false }));
  }, [sdk]);
  const refreshBalance = React14.useCallback(async () => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      return;
    }
    setState((prev) => ({ ...prev, isRefreshing: true, error: null }));
    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }
      const newBalance = await sdk.balanceWatcher.getBalance(
        address,
        chain,
        tokenAddress,
        false
        // Force fresh fetch, don't use cache
      );
      const formattedBalance = formatBalance(newBalance);
      setState((prev) => ({
        ...prev,
        balance: formattedBalance,
        previousBalance: prev.balance,
        lastUpdated: /* @__PURE__ */ new Date(),
        isRefreshing: false
      }));
      return formattedBalance;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isRefreshing: false
      }));
      onError?.(errorMessage);
      throw error;
    }
  }, [address, chainId, tokenAddress, sdk, formatBalance, onError]);
  const refreshAfterTransaction = React14.useCallback(async (transactionHash, maxWaitTime = 3e4) => {
    if (!address || chainId === null || !sdk?.balanceWatcher) {
      return;
    }
    setState((prev) => ({ ...prev, isRefreshing: true }));
    try {
      const chain = sdk.getChainById(chainId);
      if (!chain) {
        throw new Error(`Chain ${chainId} not supported`);
      }
      const update = await sdk.balanceWatcher.refreshBalanceAfterTransaction(
        transactionHash,
        address,
        chain,
        tokenAddress,
        maxWaitTime
      );
      const formattedBalance = formatBalance(update.balance);
      const formattedPrevious = update.previousBalance ? formatBalance(update.previousBalance) : null;
      setState((prev) => ({
        ...prev,
        balance: formattedBalance,
        previousBalance: formattedPrevious,
        lastUpdated: new Date(update.timestamp),
        isRefreshing: false
      }));
      return update;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to refresh balance";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isRefreshing: false
      }));
      onError?.(errorMessage);
      throw error;
    }
  }, [address, chainId, tokenAddress, sdk, formatBalance, onError]);
  React14.useEffect(() => {
    if (autoStart && address && chainId !== null && sdk) {
      startWatching();
    }
    return () => {
      stopWatching();
    };
  }, [address, chainId, autoStart, sdk, startWatching, stopWatching]);
  React14.useEffect(() => {
    setState({
      balance: "0",
      previousBalance: null,
      isRefreshing: false,
      lastUpdated: null,
      error: null
    });
  }, [address, chainId, tokenAddress]);
  return {
    // State
    ...state,
    // Control functions
    startWatching,
    stopWatching,
    refreshBalance,
    refreshAfterTransaction,
    // Status helpers
    isWatching: isWatchingRef.current,
    hasBalance: parseFloat(state.balance) > 0,
    balanceChanged: state.previousBalance !== null && state.balance !== state.previousBalance,
    // Formatted values
    formattedBalance: state.balance,
    balanceFloat: parseFloat(state.balance)
  };
};
var useRelayProgress = (relayId, sourceChainId, destinationChainId, sourceTransactionHash, sdk, options = {}) => {
  const {
    enableNotifications = true,
    autoStart = true,
    maxWaitTime = 6e5,
    // 10 minutes
    onStatusChange,
    onComplete,
    onError
  } = options;
  const [state, setState] = React14.useState({
    status: "initiated",
    progress: 0,
    relayId,
    sourceTransactionHash,
    destinationTransactionHash: null,
    estimatedCompletionTime: null,
    actualCompletionTime: null,
    error: null,
    isTracking: false
  });
  const { addNotification, updateNotification } = useNotifications();
  const trackingPromiseRef = React14.useRef(null);
  const notificationIdRef = React14.useRef(null);
  const getStatusDisplayInfo = React14.useCallback((status, progress) => {
    switch (status) {
      case "initiated":
        return {
          title: "Relay Initiated",
          message: "Cross-chain relay has been started",
          emoji: "\u{1F680}",
          type: "info"
        };
      case "pending":
        return {
          title: "Source Transaction Pending",
          message: "Waiting for source transaction confirmation",
          emoji: "\u23F3",
          type: "pending"
        };
      case "relaying":
        return {
          title: "Relaying Across Chains",
          message: `Bridging to ApeChain (${progress}% complete)`,
          emoji: "\u{1F309}",
          type: "pending"
        };
      case "completed":
        return {
          title: "Relay Complete! \u2705",
          message: "Funds successfully bridged to ApeChain",
          emoji: "\u2705",
          type: "success"
        };
      case "failed":
        return {
          title: "Relay Failed",
          message: "Cross-chain relay encountered an error",
          emoji: "\u274C",
          type: "error"
        };
      default:
        return {
          title: "Relay Status Unknown",
          message: `Status: ${status}`,
          emoji: "\u2753",
          type: "info"
        };
    }
  }, []);
  const startTracking = React14.useCallback(async (rId, sourceChain, destChain, sourceTxHash) => {
    if (!sdk?.relayStatus) {
      console.error("SDK relay status service not available");
      return;
    }
    setState((prev) => ({ ...prev, isTracking: true, error: null }));
    try {
      const sourceChainObj = sdk.getChainById(sourceChain);
      const destChainObj = sdk.getChainById(destChain);
      if (!sourceChainObj || !destChainObj) {
        throw new Error(`Unsupported chain: source ${sourceChain}, dest ${destChain}`);
      }
      if (enableNotifications) {
        notificationIdRef.current = addNotification({
          type: "pending",
          title: "Starting Cross-chain Relay \u{1F680}",
          message: "Tracking relay progress to ApeChain...",
          duration: 0,
          transactionHash: sourceTxHash,
          chainId: sourceChain
        });
      }
      trackingPromiseRef.current = sdk.relayStatus.trackRelayWithCallback(
        rId,
        sourceChainObj,
        destChainObj,
        sourceTxHash,
        (update) => {
          setState((prev) => ({
            ...prev,
            status: update.status,
            progress: update.progress,
            destinationTransactionHash: update.destinationTransactionHash || prev.destinationTransactionHash,
            error: update.error || null,
            actualCompletionTime: update.status === "completed" ? update.timestamp : null
          }));
          if (enableNotifications && notificationIdRef.current) {
            const displayInfo = getStatusDisplayInfo(update.status, update.progress);
            updateNotification(notificationIdRef.current, {
              type: displayInfo.type,
              title: displayInfo.title,
              message: displayInfo.message,
              transactionHash: update.destinationTransactionHash || sourceTxHash,
              chainId: update.destinationTransactionHash ? destChain : sourceChain,
              duration: displayInfo.type === "success" || displayInfo.type === "error" ? 8e3 : 0
            });
          }
          onStatusChange?.(update);
        },
        { maxWaitTime }
      );
      const finalStatus = await trackingPromiseRef.current;
      setState((prev) => ({
        ...prev,
        isTracking: false,
        destinationTransactionHash: finalStatus.destinationTransactionHash || prev.destinationTransactionHash,
        estimatedCompletionTime: finalStatus.estimatedCompletionTime || null,
        actualCompletionTime: finalStatus.actualCompletionTime || Date.now()
      }));
      onComplete?.(finalStatus);
      return finalStatus;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown relay error";
      setState((prev) => ({
        ...prev,
        error: errorMessage,
        isTracking: false,
        status: "failed"
      }));
      if (enableNotifications && notificationIdRef.current) {
        updateNotification(notificationIdRef.current, {
          type: "error",
          title: "Relay Tracking Failed",
          message: errorMessage,
          duration: 8e3
        });
      }
      onError?.(errorMessage);
      throw error;
    }
  }, [sdk, enableNotifications, maxWaitTime, getStatusDisplayInfo, addNotification, updateNotification, onStatusChange, onComplete, onError]);
  const stopTracking = React14.useCallback(() => {
    if (relayId && sdk?.relayStatus) {
      sdk.relayStatus.cancelRelayTracking(relayId);
    }
    trackingPromiseRef.current = null;
    setState((prev) => ({ ...prev, isTracking: false }));
  }, [relayId, sdk]);
  const trackRelay = React14.useCallback((rId, sourceChain, destChain, sourceTxHash) => {
    return startTracking(rId, sourceChain, destChain, sourceTxHash);
  }, [startTracking]);
  const getEstimatedTimeRemaining = React14.useCallback(() => {
    if (!state.estimatedCompletionTime) return null;
    const remaining = state.estimatedCompletionTime - Date.now();
    return Math.max(0, remaining);
  }, [state.estimatedCompletionTime]);
  const formatTimeRemaining = React14.useCallback(() => {
    const remaining = getEstimatedTimeRemaining();
    if (!remaining) return null;
    const minutes = Math.floor(remaining / 6e4);
    const seconds = Math.floor(remaining % 6e4 / 1e3);
    if (minutes > 0) {
      return `~${minutes}m ${seconds}s`;
    }
    return `~${seconds}s`;
  }, [getEstimatedTimeRemaining]);
  React14.useEffect(() => {
    if (autoStart && relayId && sourceChainId && destinationChainId && sourceTransactionHash && sdk) {
      startTracking(relayId, sourceChainId, destinationChainId, sourceTransactionHash);
    }
    return () => {
      stopTracking();
    };
  }, [
    relayId,
    sourceChainId,
    destinationChainId,
    sourceTransactionHash,
    autoStart,
    sdk,
    startTracking,
    stopTracking
  ]);
  React14.useEffect(() => {
    setState((prev) => ({
      ...prev,
      relayId,
      sourceTransactionHash,
      destinationTransactionHash: null,
      estimatedCompletionTime: null,
      actualCompletionTime: null,
      status: "initiated",
      progress: 0,
      error: null
    }));
  }, [relayId, sourceTransactionHash]);
  return {
    // State
    ...state,
    // Control functions
    trackRelay,
    stopTracking,
    // Helper functions
    getEstimatedTimeRemaining,
    formatTimeRemaining,
    // Status helpers
    isInitiated: state.status === "initiated",
    isPending: state.status === "pending",
    isRelaying: state.status === "relaying",
    isCompleted: state.status === "completed",
    isFailed: state.status === "failed",
    isActive: state.status === "pending" || state.status === "relaying",
    // Progress helpers
    progressPercent: `${state.progress}%`,
    isNearComplete: state.progress >= 90,
    hasDestinationTx: !!state.destinationTransactionHash
  };
};
var LiveBalanceDisplay = ({
  address,
  chainId,
  tokenAddress,
  sdk,
  tokenSymbol = "ETH",
  tokenDecimals = 18,
  className = "",
  showRefreshButton = true,
  showTrend = true,
  enableNotifications = false,
  autoRefresh = true
}) => {
  const [isManualRefresh, setIsManualRefresh] = React14.useState(false);
  const {
    balance,
    previousBalance,
    isRefreshing,
    lastUpdated,
    error,
    isWatching,
    balanceChanged,
    refreshBalance,
    refreshAfterTransaction
  } = useBalanceWatcher(
    address,
    chainId,
    tokenAddress,
    sdk,
    {
      enableNotifications,
      autoStart: autoRefresh,
      onBalanceChange: (update) => {
        console.log("Balance updated:", update);
      },
      onError: (error2) => {
        console.error("Balance watcher error:", error2);
      }
    }
  );
  const handleManualRefresh = async () => {
    setIsManualRefresh(true);
    try {
      await refreshBalance();
    } catch (error2) {
      console.error("Manual refresh failed:", error2);
    } finally {
      setIsManualRefresh(false);
    }
  };
  const getTrendDirection = () => {
    if (!previousBalance || !balanceChanged) return "none";
    const current = parseFloat(balance);
    const previous = parseFloat(previousBalance);
    if (current > previous) return "up";
    if (current < previous) return "down";
    return "none";
  };
  const formatBalance = (bal) => {
    const num = parseFloat(bal);
    if (num === 0) return "0";
    if (num < 1e-4) return "< 0.0001";
    if (num < 1) return num.toFixed(6);
    if (num < 1e3) return num.toFixed(4);
    if (num < 1e6) return `${(num / 1e3).toFixed(2)}K`;
    return `${(num / 1e6).toFixed(2)}M`;
  };
  const trendDirection = getTrendDirection();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex flex-col space-y-2 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-medium text-gray-600", children: [
          tokenAddress ? tokenSymbol : "Native",
          " Balance:"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: `text-lg font-semibold ${error ? "text-red-500" : "text-gray-900"}`, children: error ? "Error" : formatBalance(balance) }),
          !error && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-gray-500", children: tokenSymbol }),
          showTrend && trendDirection !== "none" && !error && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `flex items-center ${trendDirection === "up" ? "text-green-500" : "text-red-500"}`, children: trendDirection === "up" ? /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { size: 16 }) : /* @__PURE__ */ jsxRuntime.jsx(TrendingDown, { size: 16 }) })
        ] })
      ] }),
      showRefreshButton && /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: handleManualRefresh,
          disabled: isRefreshing || isManualRefresh || !address,
          className: `p-1.5 rounded-md transition-colors ${isRefreshing || isManualRefresh ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,
          title: "Refresh balance",
          children: /* @__PURE__ */ jsxRuntime.jsx(
            RefreshCw,
            {
              size: 16,
              className: isRefreshing || isManualRefresh ? "animate-spin" : ""
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: `w-2 h-2 rounded-full ${isWatching ? "bg-green-500" : "bg-gray-300"}` }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: isWatching ? "Live" : "Static" })
        ] }),
        lastUpdated && /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          "Updated: ",
          lastUpdated.toLocaleTimeString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1", children: [
        isRefreshing && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-blue-500", children: "Refreshing..." }),
        error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1 text-red-500", children: [
          /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { size: 12 }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Error" })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-red-600 bg-red-50 p-2 rounded", children: error }),
    showTrend && previousBalance && balanceChanged && !error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
      "Previous: ",
      formatBalance(previousBalance),
      " ",
      tokenSymbol
    ] })
  ] });
};
var MultiTokenBalanceDisplay = ({
  address,
  chainId,
  tokens,
  sdk,
  className = "",
  showRefreshButton = true,
  enableNotifications = false
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `space-y-3 ${className}`, children: tokens.map((token, index) => /* @__PURE__ */ jsxRuntime.jsx(
    LiveBalanceDisplay,
    {
      address,
      chainId,
      tokenAddress: token.address,
      sdk,
      tokenSymbol: token.symbol,
      tokenDecimals: token.decimals,
      showRefreshButton,
      showTrend: true,
      enableNotifications,
      autoRefresh: true
    },
    `${chainId}-${token.address || "native"}-${index}`
  )) });
};
var RelayProgressIndicator = ({
  relayId,
  sourceChainId,
  destinationChainId,
  sourceTransactionHash,
  sdk,
  className = "",
  showTimeEstimate = true,
  showTransactionLinks = true,
  compact = false,
  onComplete
}) => {
  const {
    status,
    progress,
    destinationTransactionHash,
    error,
    isTracking,
    formatTimeRemaining,
    isCompleted,
    isFailed,
    isActive
  } = useRelayProgress(
    relayId,
    sourceChainId,
    destinationChainId,
    sourceTransactionHash,
    sdk,
    {
      enableNotifications: true,
      onComplete: (finalStatus) => {
        console.log("Relay completed:", finalStatus);
        onComplete?.();
      },
      onError: (error2) => {
        console.error("Relay error:", error2);
      }
    }
  );
  const getChainName2 = (chainId) => {
    if (!chainId) return "Unknown";
    const chainMap = {
      1: "Ethereum",
      137: "Polygon",
      10: "Optimism",
      56: "BSC",
      43114: "Avalanche",
      8453: "Base",
      42161: "Arbitrum",
      167e3: "Taiko",
      2741: "Abstract",
      33139: "ApeChain",
      // Testnets
      17e3: "Holesky",
      80002: "Amoy",
      33111: "Curtis"
    };
    return chainMap[chainId] || `Chain ${chainId}`;
  };
  const getExplorerUrl = (txHash, chainId) => {
    const explorerMap = {
      1: "https://etherscan.io/tx/",
      137: "https://polygonscan.com/tx/",
      10: "https://optimistic.etherscan.io/tx/",
      56: "https://bscscan.com/tx/",
      43114: "https://snowtrace.io/tx/",
      8453: "https://basescan.org/tx/",
      42161: "https://arbiscan.io/tx/",
      167e3: "https://taikoscan.io/tx/",
      2741: "https://explorer.abstract.xyz/tx/",
      33139: "https://apechain.calderaexplorer.xyz/tx/",
      // Testnets
      17e3: "https://holesky.etherscan.io/tx/",
      80002: "https://amoy.polygonscan.com/tx/",
      33111: "https://curtis.explorer.caldera.xyz/tx/"
    };
    return `${explorerMap[chainId] || "#"}${txHash}`;
  };
  const getStatusConfig = () => {
    switch (status) {
      case "initiated":
        return {
          color: "blue",
          icon: Clock,
          title: "Relay Initiated",
          description: "Cross-chain relay starting..."
        };
      case "pending":
        return {
          color: "yellow",
          icon: Clock,
          title: "Source Pending",
          description: "Waiting for source transaction confirmation"
        };
      case "relaying":
        return {
          color: "blue",
          icon: ArrowRight,
          title: "Relaying",
          description: "Bridging funds to ApeChain"
        };
      case "completed":
        return {
          color: "green",
          icon: CheckCircle,
          title: "Completed",
          description: "Relay successful!"
        };
      case "failed":
        return {
          color: "red",
          icon: XCircle,
          title: "Failed",
          description: error || "Relay encountered an error"
        };
      default:
        return {
          color: "gray",
          icon: Clock,
          title: "Unknown",
          description: "Relay status unknown"
        };
    }
  };
  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;
  const timeRemaining = formatTimeRemaining();
  if (compact) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex items-center space-x-2 ${className}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        StatusIcon,
        {
          size: 16,
          className: `text-${statusConfig.color}-500`
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium", children: statusConfig.title }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-gray-500", children: [
        progress,
        "%"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-white border border-gray-200 rounded-lg p-4 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          StatusIcon,
          {
            size: 20,
            className: `text-${statusConfig.color}-500`
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Cross-chain Relay" })
      ] }),
      isTracking && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1 text-xs text-blue-600", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center mb-4 text-sm text-gray-600", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: getChainName2(sourceChainId) }),
      /* @__PURE__ */ jsxRuntime.jsx(ArrowRight, { size: 16, className: "mx-2 text-gray-400" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: getChainName2(destinationChainId) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: statusConfig.title }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          progress,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: `h-2 rounded-full transition-all duration-300 ${isFailed ? "bg-red-500" : isCompleted ? "bg-green-500" : "bg-blue-500"}`,
          style: { width: `${progress}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-sm ${isFailed ? "text-red-600" : "text-gray-600"}`, children: statusConfig.description }),
      showTimeEstimate && timeRemaining && isActive && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
        "Estimated time remaining: ",
        timeRemaining
      ] })
    ] }),
    showTransactionLinks && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2 text-sm", children: [
      sourceTransactionHash && sourceChainId && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Source Transaction:" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "a",
          {
            href: getExplorerUrl(sourceTransactionHash, sourceChainId),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center space-x-1 text-blue-600 hover:text-blue-800",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: `${sourceTransactionHash.slice(0, 6)}...${sourceTransactionHash.slice(-4)}` }),
              /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { size: 12 })
            ]
          }
        )
      ] }),
      destinationTransactionHash && destinationChainId && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Destination Transaction:" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "a",
          {
            href: getExplorerUrl(destinationTransactionHash, destinationChainId),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center space-x-1 text-blue-600 hover:text-blue-800",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: `${destinationTransactionHash.slice(0, 6)}...${destinationTransactionHash.slice(-4)}` }),
              /* @__PURE__ */ jsxRuntime.jsx(ExternalLink, { size: 12 })
            ]
          }
        )
      ] })
    ] }),
    relayId && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 pt-3 border-t border-gray-100", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500", children: [
      "Relay ID: ",
      relayId
    ] }) })
  ] });
};
var RelayStatusBadge = ({
  status,
  progress,
  className = ""
}) => {
  const getStatusColor = (status2) => {
    switch (status2) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "relaying":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)} ${className}`, children: [
    status,
    " (",
    progress,
    "%)"
  ] });
};
var StreamingPage = ({
  client,
  sdk,
  creatorId,
  creatorWallet,
  creatorName = "TippingChain Creator",
  creatorAvatar,
  streamTitle = "Live Stream - Creator Tip Demo",
  streamDescription = "Building the future of creator monetization",
  demoTipperWallet,
  allowedTipperWallets = [],
  defaultChainId = 8453,
  enableChat = false,
  enableViewerCount = true,
  enableLikeButton = true,
  enableShareButton = true,
  enableFullscreen = true,
  videoUrl,
  thumbnailUrl,
  isLiveStream = true,
  enableVideoControls = true,
  onTipSuccess,
  onTipError,
  onViewerCountChange,
  onStreamStatusChange,
  className = "",
  streamPlayerClassName = "",
  tippingPanelClassName = ""
}) => {
  const activeChain = react.useActiveWalletChain();
  const account = react.useActiveAccount();
  const [selectedChainId, setSelectedChainId] = React14.useState(defaultChainId);
  const [isPlaying, setIsPlaying] = React14.useState(false);
  const [isMuted, setIsMuted] = React14.useState(false);
  const [isFullscreen, setIsFullscreen] = React14.useState(false);
  const [viewerCount, setViewerCount] = React14.useState(1247);
  const [likeCount, setLikeCount] = React14.useState(234);
  const [isLiked, setIsLiked] = React14.useState(false);
  const [tipMessage, setTipMessage] = React14.useState(null);
  const allowedTippers = demoTipperWallet ? [demoTipperWallet, ...allowedTipperWallets] : allowedTipperWallets;
  const isAuthorizedTipper = !allowedTippers.length || allowedTippers.some((wallet) => wallet.toLowerCase() === account?.address?.toLowerCase());
  React14.useEffect(() => {
    if (activeChain && !selectedChainId) {
      setSelectedChainId(activeChain.id);
    }
  }, [activeChain, selectedChainId]);
  React14.useEffect(() => {
    if (!enableViewerCount) return;
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const newCount = prev + Math.floor(Math.random() * 5) - 2;
        const clampedCount = Math.max(1, newCount);
        onViewerCountChange?.(clampedCount);
        return clampedCount;
      });
    }, 3e3);
    return () => clearInterval(interval);
  }, [enableViewerCount, onViewerCountChange]);
  const handlePlayPause = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    onStreamStatusChange?.(newPlayingState ? "playing" : "paused");
  };
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };
  const handleLikeToggle = () => {
    if (!enableLikeButton) return;
    setIsLiked(!isLiked);
    setLikeCount((prev) => isLiked ? prev - 1 : prev + 1);
  };
  const handleShare = async () => {
    if (!enableShareButton) return;
    try {
      await navigator.share({
        title: streamTitle,
        text: streamDescription,
        url: window.location.href
      });
    } catch (error) {
      await navigator.clipboard.writeText(window.location.href);
      showMessage("success", "Stream link copied to clipboard!");
    }
  };
  const handleFullscreen = () => {
    if (!enableFullscreen) return;
    setIsFullscreen(!isFullscreen);
  };
  const showMessage = (type, text, result) => {
    setTipMessage({ type, text, result, timestamp: Date.now() });
    setTimeout(() => setTipMessage(null), 5e3);
  };
  const handleTipSuccess = (result) => {
    const message = `Tip sent successfully! Transaction: ${result.sourceTransactionHash?.slice(0, 10)}...`;
    showMessage("success", message, result);
    onTipSuccess?.(result);
  };
  const handleTipError = (error) => {
    showMessage("error", `Tip failed: ${error}`);
    onTipError?.(error);
  };
  const renderCreatorAvatar = () => {
    if (creatorAvatar) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "img",
        {
          src: creatorAvatar,
          alt: creatorName,
          className: "w-full h-full object-cover rounded-full"
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-2xl font-bold text-white", children: creatorName.split(" ").map((n) => n[0]).join("").slice(0, 2) }) });
  };
  const renderAccessControlAlert = () => {
    if (!account) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "h-5 w-5 text-yellow-400" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-yellow-700", children: [
              /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Connect Wallet:" }),
              " Connect your wallet to tip this creator"
            ] }),
            demoTipperWallet && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-yellow-600 mt-1 font-mono", children: [
              "Demo Tipper: ",
              demoTipperWallet
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
      ] }) });
    }
    if (allowedTippers.length > 0 && !isAuthorizedTipper) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-6 bg-orange-100 border-l-4 border-orange-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "h-5 w-5 text-orange-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-orange-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Restricted Access:" }),
            " This is a demo with limited wallet access"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-orange-600 mt-1", children: [
            "Expected: ",
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono", children: allowedTippers[0] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-orange-600", children: [
            "Connected: ",
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono", children: account.address })
          ] })
        ] })
      ] }) });
    }
    if (isAuthorizedTipper) {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-6 bg-green-100 border-l-4 border-green-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "h-5 w-5 text-green-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-green-700", children: [
          /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Ready to Tip!" }),
          " You're connected and can send tips to this creator"
        ] }) })
      ] }) });
    }
    return null;
  };
  const renderTipMessage = () => {
    if (!tipMessage) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `mt-6 p-4 rounded-lg border flex items-center space-x-3 ${tipMessage.type === "success" ? "bg-green-50 border-green-200 text-green-800" : tipMessage.type === "error" ? "bg-red-50 border-red-200 text-red-800" : tipMessage.type === "warning" ? "bg-yellow-50 border-yellow-200 text-yellow-800" : "bg-blue-50 border-blue-200 text-blue-800"}`, children: [
      tipMessage.type === "success" ? /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-5 h-5 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-5 h-5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium", children: tipMessage.text }),
        tipMessage.result && tipMessage.result.estimatedUsdcAmount && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm mt-1", children: [
          "Estimated USDC value: ~$",
          tipMessage.result.estimatedUsdcAmount,
          tipMessage.result.relayId && ` \u2022 Relay ID: ${tipMessage.result.relayId}`
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setTipMessage(null),
          className: "text-gray-400 hover:text-gray-600",
          children: "\xD7"
        }
      )
    ] });
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gray-900 py-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h1", { className: "text-4xl font-bold text-white mb-4", children: [
        "\u{1F534} ",
        streamTitle
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xl text-gray-300", children: streamDescription })
    ] }),
    renderAccessControlAlert(),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-black rounded-lg overflow-hidden shadow-2xl ${streamPlayerClassName}`, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-30" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative z-10 text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-32 h-32 mx-auto mb-4", children: renderCreatorAvatar() }),
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: creatorName }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-300 mb-4", children: streamDescription }),
            enableVideoControls && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: handlePlayPause,
                className: "bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-200",
                children: isPlaying ? /* @__PURE__ */ jsxRuntime.jsx(Pause, { className: "w-8 h-8 text-white" }) : /* @__PURE__ */ jsxRuntime.jsx(Play, { className: "w-8 h-8 text-white ml-1" })
              }
            )
          ] }),
          isLiveStream && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-2 h-2 bg-white rounded-full mr-2 animate-pulse" }),
            "LIVE"
          ] }),
          enableViewerCount && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Eye, { className: "w-4 h-4 mr-1" }),
            viewerCount.toLocaleString()
          ] }),
          enableVideoControls && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute bottom-4 right-4 flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: handleMuteToggle,
                className: "bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all",
                children: isMuted ? /* @__PURE__ */ jsxRuntime.jsx(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntime.jsx(Volume2, { className: "w-4 h-4" })
              }
            ),
            enableFullscreen && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: handleFullscreen,
                className: "bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all",
                children: /* @__PURE__ */ jsxRuntime.jsx(Maximize2, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-800 text-white p-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10", children: renderCreatorAvatar() }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-semibold", children: creatorName }),
                /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-gray-400 font-mono", children: [
                  creatorWallet.slice(0, 8),
                  "...",
                  creatorWallet.slice(-6)
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4", children: [
              enableLikeButton && /* @__PURE__ */ jsxRuntime.jsxs(
                "button",
                {
                  onClick: handleLikeToggle,
                  className: `flex items-center transition-colors ${isLiked ? "text-red-500" : "text-gray-300 hover:text-red-400"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(Heart, { className: `w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}` }),
                    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: likeCount })
                  ]
                }
              ),
              enableViewerCount && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center text-gray-300", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-4 h-4 mr-1" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: viewerCount })
              ] }),
              enableShareButton && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  onClick: handleShare,
                  className: "flex items-center text-gray-300 hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntime.jsx(Share2, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("button", { className: "flex items-center text-gray-300 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntime.jsx(MoreVertical, { className: "w-4 h-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-300", children: "\u{1F680} Live demo of TippingChain v2.0 - Multi-chain tipping with USDC payouts on ApeChain" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `bg-white rounded-lg shadow-lg p-6 ${tippingPanelClassName}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-2xl font-semibold mb-4 text-gray-900", children: "\u{1F4B0} Send Tip to Creator" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "Target Creator" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm space-y-1", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-gray-600", children: [
              "Creator ID: ",
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono bg-gray-100 px-2 py-1 rounded", children: [
                "#",
                creatorId
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-gray-600", children: [
              "Name: ",
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: creatorName })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "Wallet:" }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-mono text-xs bg-gray-100 p-2 rounded break-all", children: creatorWallet }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-green-600 text-xs", children: "\u2713 Registered & Active" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            ChainSelector,
            {
              value: selectedChainId,
              onChange: (chainId) => setSelectedChainId(chainId),
              label: "Select Source Chain",
              className: "w-full"
            }
          ),
          selectedChainId && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500 mt-2", children: [
            "Connected to: ",
            activeChain?.name || "Not connected"
          ] })
        ] }),
        isAuthorizedTipper ? /* @__PURE__ */ jsxRuntime.jsx(
          MultiTokenTippingInterface,
          {
            creatorId,
            client,
            sdk,
            onTipSuccess: handleTipSuccess,
            onTipError: handleTipError
          }
        ) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-12 h-12 text-gray-400 mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 font-medium mb-2", children: "Multi-Token Tipping Interface Locked" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: allowedTippers.length > 0 ? "Connect with an authorized wallet to unlock tipping functionality" : "Connect your wallet to unlock tipping functionality" })
        ] }),
        renderTipMessage()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-12 bg-white rounded-xl shadow-lg p-8", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-8", children: "How TippingChain Works" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-2xl font-bold text-blue-600", children: "1" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Choose Your Token" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "Tip with native tokens or ERC20s (USDC, DAI, WETH) on 9 supported blockchains - see real-time balances and token info" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-2xl font-bold text-purple-600", children: "2" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Auto Cross-Chain Bridge" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "Integrated Relay.link automatically bridges your tip and converts it to stable USDC - no extra steps needed" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-2xl font-bold text-green-600", children: "3" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Creator Gets Paid" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "Creator receives stable USDC on ApeChain after 5% platform fee and tier-based revenue sharing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Stream Configuration" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-50 rounded-lg p-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Creator:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-gray-900", children: [
              creatorWallet.slice(0, 10),
              "...",
              creatorWallet.slice(-8)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Creator ID:" }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-gray-900", children: [
              "#",
              creatorId
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Stream Type:" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-900", children: isLiveStream ? "Live Stream" : "Video" })
          ] }),
          enableViewerCount && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Current Viewers:" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-900", children: viewerCount.toLocaleString() })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
var SYSTEM_SETTINGS = [
  {
    key: "platformFeePercentage",
    label: "Platform Fee Percentage",
    value: 5,
    type: "number",
    description: "Platform fee percentage for tips (basis points)",
    category: "fees"
  },
  {
    key: "viewerRewardFeePercentage",
    label: "Viewer Reward Fee Percentage",
    value: 1,
    type: "number",
    description: "Platform fee percentage for viewer rewards (basis points)",
    category: "fees"
  },
  {
    key: "autoRelayEnabled",
    label: "Auto Relay Enabled",
    value: true,
    type: "boolean",
    description: "Automatically relay tips to ApeChain",
    category: "platform"
  },
  {
    key: "maxCreatorsPerTx",
    label: "Max Creators Per Transaction",
    value: 50,
    type: "number",
    description: "Maximum number of creators that can be added in a single transaction",
    category: "limits"
  },
  {
    key: "minTipAmount",
    label: "Minimum Tip Amount",
    value: 1e-3,
    type: "number",
    description: "Minimum tip amount in native tokens",
    category: "limits"
  }
];
var AdminDashboard = ({
  client,
  sdk,
  defaultChainId = 8453,
  allowMultiChain = true,
  enablePlatformStats = true,
  enableCreatorAnalytics = true,
  enableViewerRewards = true,
  enableSystemSettings = true,
  adminAddresses = [],
  ownerAddresses = [],
  requirePermissionCheck = false,
  onCreatorAdded,
  onCreatorUpdated,
  onCreatorRemoved,
  onPlatformStatsLoaded,
  onSystemSettingChanged,
  showHeader = true,
  showSidebar = true,
  defaultView = "overview",
  maxCreatorsToShow = 100,
  className = "",
  headerClassName = "",
  sidebarClassName = "",
  contentClassName = ""
}) => {
  const account = react.useActiveAccount();
  react.useActiveWalletChain();
  const [selectedChainId, setSelectedChainId] = React14.useState(defaultChainId);
  const [activeView, setActiveView] = React14.useState(defaultView);
  const [dashboardStats, setDashboardStats] = React14.useState(null);
  const [creators, setCreators] = React14.useState([]);
  const [platformStats, setPlatformStats] = React14.useState(null);
  const [systemSettings, setSystemSettings] = React14.useState(SYSTEM_SETTINGS);
  const [loading, setLoading] = React14.useState(false);
  const [searchQuery, setSearchQuery] = React14.useState("");
  const [creatorFilter, setCreatorFilter] = React14.useState("all");
  const [showSystemHealth, setShowSystemHealth] = React14.useState(true);
  const [hasAdminAccess, setHasAdminAccess] = React14.useState(false);
  const [hasOwnerAccess, setHasOwnerAccess] = React14.useState(false);
  const [permissionLoading, setPermissionLoading] = React14.useState(false);
  const { notifyCreatorAdded, notifyCreatorError, notifySuccess, notifyError } = useTransactionNotifications();
  const checkPermissions = React14.useCallback(async () => {
    if (!account || !requirePermissionCheck) {
      setHasAdminAccess(true);
      setHasOwnerAccess(true);
      return;
    }
    setPermissionLoading(true);
    try {
      const userAddress = account.address?.toLowerCase();
      const isAdmin = adminAddresses.some((addr) => addr.toLowerCase() === userAddress) || ownerAddresses.some((addr) => addr.toLowerCase() === userAddress);
      const isOwner = ownerAddresses.some((addr) => addr.toLowerCase() === userAddress);
      setHasAdminAccess(isAdmin);
      setHasOwnerAccess(isOwner);
    } catch (error) {
      console.error("Failed to check permissions:", error);
      setHasAdminAccess(false);
      setHasOwnerAccess(false);
    } finally {
      setPermissionLoading(false);
    }
  }, [account, adminAddresses, ownerAddresses, requirePermissionCheck]);
  const loadDashboardStats = React14.useCallback(async () => {
    if (!contractsInterface.isContractDeployed(selectedChainId)) return;
    setLoading(true);
    try {
      const [platformStats2, creators2] = await Promise.all([
        sdk.getPlatformStats(selectedChainId).catch(() => null),
        sdk.getTopCreators(maxCreatorsToShow, selectedChainId).catch(() => [])
      ]);
      setPlatformStats(platformStats2);
      setCreators(creators2);
      onPlatformStatsLoaded?.(platformStats2);
      if (platformStats2) {
        const totalTips = parseFloat(platformStats2.totalTips);
        const platformFees = totalTips * 0.05;
        const stats = {
          totalCreators: creators2.length,
          activeCreators: creators2.filter((c) => c.active).length,
          totalTips: platformStats2.totalTips,
          totalVolume: platformStats2.totalRelayed,
          platformFees: (platformFees * 1e18).toString(),
          recentActivity: platformStats2.totalCount,
          growthRate: Math.random() * 30 + 10,
          // Mock growth rate
          systemHealth: "healthy"
        };
        setDashboardStats(stats);
      }
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
      notifyError("Failed to load dashboard statistics");
    } finally {
      setLoading(false);
    }
  }, [selectedChainId, sdk, maxCreatorsToShow, onPlatformStatsLoaded, notifyError]);
  React14.useEffect(() => {
    checkPermissions();
    loadDashboardStats();
  }, [checkPermissions, loadDashboardStats]);
  const handleCreatorAdded = React14.useCallback((creator) => {
    setCreators((prev) => [...prev, creator]);
    loadDashboardStats();
    onCreatorAdded?.(creator);
    notifyCreatorAdded(creator.id);
  }, [loadDashboardStats, onCreatorAdded, notifyCreatorAdded]);
  const handleCreatorUpdated = React14.useCallback((creator) => {
    setCreators((prev) => prev.map((c) => c.id === creator.id ? creator : c));
    loadDashboardStats();
    onCreatorUpdated?.(creator);
    notifySuccess(`Creator #${creator.id} updated successfully`);
  }, [loadDashboardStats, onCreatorUpdated, notifySuccess]);
  const handleSystemSettingChange = React14.useCallback((settingKey, newValue) => {
    setSystemSettings((prev) => prev.map(
      (setting) => setting.key === settingKey ? { ...setting, value: newValue } : setting
    ));
    onSystemSettingChanged?.(settingKey, newValue);
    notifySuccess(`Setting "${settingKey}" updated successfully`);
  }, [onSystemSettingChanged, notifySuccess]);
  creators.filter((creator) => {
    const matchesSearch = !searchQuery || creator.wallet.toLowerCase().includes(searchQuery.toLowerCase()) || creator.id.toString().includes(searchQuery);
    const matchesFilter = creatorFilter === "all" || creatorFilter === "active" && creator.active || creatorFilter === "inactive" && !creator.active;
    return matchesSearch && matchesFilter;
  });
  const formatAmount = (amount) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(void 0, { maximumFractionDigits: 4 });
    } catch {
      return "0.0000";
    }
  };
  if (requirePermissionCheck && !account) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Shield, { className: "w-16 h-16 text-blue-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: "Admin Access Required" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mb-6", children: "Connect your wallet to access the TippingChain admin dashboard" }),
      /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
    ] }) });
  }
  if (requirePermissionCheck && !hasAdminAccess && !permissionLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-16 h-16 text-red-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: "Access Denied" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mb-4", children: "You don't have permission to access the admin dashboard" }),
      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Connected: ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono", children: account?.address })
      ] })
    ] }) });
  }
  const sidebarItems = [
    { id: "overview", label: "Overview", icon: BarChart3, enabled: true },
    { id: "creators", label: "Creator Management", icon: Users, enabled: true },
    { id: "analytics", label: "Analytics", icon: TrendingUp, enabled: enableCreatorAnalytics },
    { id: "rewards", label: "Viewer Rewards", icon: Award, enabled: enableViewerRewards },
    { id: "settings", label: "System Settings", icon: Settings, enabled: enableSystemSettings }
  ].filter((item) => item.enabled);
  const renderOverview = () => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-6", children: [
    dashboardStats && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Creators" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: dashboardStats.totalCreators }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-green-600", children: [
            dashboardStats.activeCreators,
            " active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8 text-blue-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Volume" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            formatAmount(dashboardStats.totalTips),
            " ETH"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-green-600", children: [
            "+",
            dashboardStats.growthRate.toFixed(1),
            "% growth"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-8 h-8 text-green-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Platform Fees" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            formatAmount(dashboardStats.platformFees),
            " ETH"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-purple-600", children: "5% fee rate" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-8 h-8 text-purple-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "System Health" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-2xl font-bold ${dashboardStats.systemHealth === "healthy" ? "text-green-600" : dashboardStats.systemHealth === "warning" ? "text-yellow-600" : "text-red-600"}`, children: dashboardStats.systemHealth === "healthy" ? "\u2713 Healthy" : dashboardStats.systemHealth === "warning" ? "\u26A0 Warning" : "\u2717 Error" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-600", children: [
            dashboardStats.recentActivity,
            " transactions"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-8 h-8 text-orange-600" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setActiveView("creators"),
            className: "flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: "w-6 h-6 text-blue-600 mr-3" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium", children: "Add Creator" }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-500", children: "Register new creator" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: loadDashboardStats,
            className: "flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: "w-6 h-6 text-green-600 mr-3" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium", children: "Refresh Data" }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-500", children: "Update statistics" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setActiveView("analytics"),
            className: "flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-6 h-6 text-purple-600 mr-3" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium", children: "View Analytics" }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-gray-500", children: "Detailed insights" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
  const renderSettings = () => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6", children: [
    /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-6", children: "System Settings" }),
    Object.entries(
      systemSettings.reduce((acc, setting) => {
        if (!acc[setting.category]) acc[setting.category] = [];
        acc[setting.category].push(setting);
        return acc;
      }, {})
    ).map(([category, settings]) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h4", { className: "text-md font-medium text-gray-900 mb-4 capitalize", children: [
        category,
        " Settings"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-4", children: settings.map((setting) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-900", children: setting.label }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: setting.description })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-4", children: setting.type === "boolean" ? /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => handleSystemSettingChange(setting.key, !setting.value),
            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${setting.value ? "bg-blue-600" : "bg-gray-200"}`,
            disabled: !hasOwnerAccess,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${setting.value ? "translate-x-6" : "translate-x-1"}`
              }
            )
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: setting.type,
            value: setting.value,
            onChange: (e) => handleSystemSettingChange(
              setting.key,
              setting.type === "number" ? Number(e.target.value) : e.target.value
            ),
            disabled: !hasOwnerAccess,
            className: "w-24 px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
          }
        ) })
      ] }, setting.key)) })
    ] }, category))
  ] }) });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${className}`, children: [
    showHeader && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `bg-white shadow-sm border-b ${headerClassName}`, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "max-w-7xl mx-auto px-4 py-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Shield, { className: "w-8 h-8 text-blue-600" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "TippingChain Admin" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-600", children: "Multi-chain creator platform administration" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4", children: [
        allowMultiChain && /* @__PURE__ */ jsxRuntime.jsx(
          ChainSelector,
          {
            value: selectedChainId,
            onChange: setSelectedChainId,
            label: "",
            className: "w-48"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: loadDashboardStats,
            disabled: loading,
            className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
            title: "Refresh data",
            children: /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-5 h-5 ${loading ? "animate-spin" : ""}` })
          }
        ),
        account && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium text-gray-900", children: hasOwnerAccess ? "Owner" : hasAdminAccess ? "Admin" : "User" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs text-gray-500 font-mono", children: [
            account.address?.slice(0, 6),
            "...",
            account.address?.slice(-4)
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
      showSidebar && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `w-64 bg-white shadow-sm ${sidebarClassName}`, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "space-y-2", children: sidebarItems.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => setActiveView(item.id),
          className: `w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${activeView === item.id ? "bg-blue-100 text-blue-700 border-r-2 border-blue-500" : "text-gray-600 hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(item.icon, { className: "w-5 h-5 mr-3" }),
            item.label
          ]
        },
        item.id
      )) }) }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex-1 p-6 ${contentClassName}`, children: [
        activeView === "overview" && renderOverview(),
        activeView === "creators" && /* @__PURE__ */ jsxRuntime.jsx(
          AdminInterface,
          {
            client,
            sdk,
            onCreatorAdded: handleCreatorAdded,
            onCreatorUpdated: handleCreatorUpdated,
            onPlatformStatsLoaded,
            defaultChainId: selectedChainId,
            showChainSelector: false,
            showPlatformStats: enablePlatformStats,
            maxCreatorsToShow
          }
        ),
        activeView === "analytics" && enableCreatorAnalytics && /* @__PURE__ */ jsxRuntime.jsx(
          CreatorAnalyticsDashboard,
          {
            creators: creators.map((creator) => ({
              id: creator.id,
              wallet: creator.wallet,
              tier: creator.tier,
              active: creator.active,
              totalTips: creator.totalTips,
              tipCount: creator.tipCount,
              averageTipAmount: (parseFloat(creator.totalTips) / Math.max(creator.tipCount, 1) * 1e18).toString(),
              lastTipTimestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1e3,
              topSupporterAddress: "0x" + Math.random().toString(16).substr(2, 40),
              topSupporterAmount: (Math.random() * 5 * 1e18).toString(),
              monthlyTips: (parseFloat(creator.totalTips) * 0.3).toString(),
              weeklyTips: (parseFloat(creator.totalTips) * 0.1).toString(),
              dailyTips: (parseFloat(creator.totalTips) * 0.02).toString(),
              tierUpgradeDate: Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1e3,
              viewerRewardsSent: creator.active ? (Math.random() * 2 * 1e18).toString() : "0",
              viewerRewardCount: creator.active ? Math.floor(Math.random() * 50) : 0
            })),
            platformStats: platformStats ? {
              totalTips: platformStats.totalTips,
              totalCount: platformStats.totalCount,
              totalRelayed: platformStats.totalRelayed,
              activeCreators: platformStats.activeCreators,
              autoRelayEnabled: platformStats.autoRelayEnabled,
              avgTipAmount: (parseFloat(platformStats.totalTips) / Math.max(platformStats.totalCount, 1) * 1e18).toString(),
              topPerformerIds: creators.sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips)).slice(0, 5).map((c) => c.id),
              growthRate: dashboardStats?.growthRate || 0,
              viewerRewardsTotal: "0",
              platformFeesCollected: (parseFloat(platformStats.totalTips) * 0.05).toString()
            } : null,
            chainId: selectedChainId,
            chainName: `Chain ${selectedChainId}`,
            loading,
            onRefresh: loadDashboardStats,
            showPlatformStats: true,
            showCreatorRankings: true,
            showTrendAnalysis: true,
            showViewerRewards: enableViewerRewards,
            maxCreatorsShown: maxCreatorsToShow
          }
        ),
        activeView === "settings" && enableSystemSettings && renderSettings()
      ] })
    ] })
  ] });
};
var CHAIN_NAMES = {
  1: "Ethereum",
  137: "Polygon",
  10: "Optimism",
  56: "BSC",
  43114: "Avalanche",
  8453: "Base",
  42161: "Arbitrum",
  167e3: "Taiko",
  2741: "Abstract",
  33139: "ApeChain"
};
var TIME_RANGES = {
  "24h": {
    start: new Date(Date.now() - 24 * 60 * 60 * 1e3),
    end: /* @__PURE__ */ new Date(),
    label: "Last 24 Hours"
  },
  "7d": {
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3),
    end: /* @__PURE__ */ new Date(),
    label: "Last 7 Days"
  },
  "30d": {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3),
    end: /* @__PURE__ */ new Date(),
    label: "Last 30 Days"
  },
  "90d": {
    start: new Date(Date.now() - 90 * 24 * 60 * 60 * 1e3),
    end: /* @__PURE__ */ new Date(),
    label: "Last 90 Days"
  },
  "all": {
    start: new Date(2024, 0, 1),
    end: /* @__PURE__ */ new Date(),
    label: "All Time"
  }
};
var AnalyticsDashboard = ({
  client,
  sdk,
  defaultChainId = 8453,
  enableMultiChain = true,
  enableGlobalMetrics = true,
  enableChainComparison = true,
  enableDataExport = true,
  enableRealTimeUpdates = true,
  maxCreatorsToShow = 50,
  defaultTimeRange = "30d",
  showPlatformStats = true,
  showCreatorRankings = true,
  showTrendAnalysis = true,
  showViewerRewards = true,
  onCreatorSelect,
  onDataExport,
  onChainSwitch,
  onTimeRangeChange,
  className = "",
  headerClassName = "",
  contentClassName = "",
  sidebarClassName = ""
}) => {
  const account = react.useActiveAccount();
  react.useActiveWalletChain();
  const [selectedChainId, setSelectedChainId] = React14.useState(defaultChainId);
  const [selectedTimeRange, setSelectedTimeRange] = React14.useState(defaultTimeRange);
  const [chainAnalytics, setChainAnalytics] = React14.useState({});
  const [globalLoading, setGlobalLoading] = React14.useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = React14.useState(false);
  const [autoRefresh, setAutoRefresh] = React14.useState(enableRealTimeUpdates);
  const [refreshInterval, setRefreshInterval] = React14.useState(null);
  const [creatorFilter, setCreatorFilter] = React14.useState("all");
  const [minimumTipAmount, setMinimumTipAmount] = React14.useState(0);
  const [sortBy, setSortBy] = React14.useState("volume");
  React14.useEffect(() => {
    const supportedChainIds = Object.values(contractsInterface.SUPPORTED_CHAINS).filter((id) => typeof id === "number");
    const initialAnalytics = {};
    supportedChainIds.forEach((chainId) => {
      if (contractsInterface.isContractDeployed(chainId)) {
        initialAnalytics[chainId] = {
          chainId,
          chainName: CHAIN_NAMES[chainId] || `Chain ${chainId}`,
          creators: [],
          platformStats: null,
          viewerRewardsStats: null,
          loading: false,
          error: null,
          lastUpdated: null
        };
      }
    });
    setChainAnalytics(initialAnalytics);
  }, []);
  const mapCreatorToAnalytics = React14.useCallback((creator) => {
    const avgTip = creator.tipCount > 0 ? parseFloat(creator.totalTips) / creator.tipCount : 0;
    return {
      id: creator.id,
      wallet: creator.wallet,
      tier: creator.tier,
      active: creator.active,
      totalTips: creator.totalTips,
      tipCount: creator.tipCount,
      averageTipAmount: (avgTip * 1e18).toString(),
      lastTipTimestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1e3,
      topSupporterAddress: "0x" + Math.random().toString(16).substr(2, 40),
      topSupporterAmount: (Math.random() * 5 * 1e18).toString(),
      monthlyTips: (parseFloat(creator.totalTips) * 0.3).toString(),
      weeklyTips: (parseFloat(creator.totalTips) * 0.1).toString(),
      dailyTips: (parseFloat(creator.totalTips) * 0.02).toString(),
      tierUpgradeDate: Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1e3,
      viewerRewardsSent: creator.active ? (Math.random() * 2 * 1e18).toString() : "0",
      viewerRewardCount: creator.active ? Math.floor(Math.random() * 50) : 0
    };
  }, []);
  const mapPlatformToAnalytics = React14.useCallback((stats, viewerRewardsStats, creators) => {
    const totalTips = parseFloat(stats.totalTips);
    const avgTipAmount = stats.totalCount > 0 ? totalTips / stats.totalCount : 0;
    return {
      totalTips: stats.totalTips,
      totalCount: stats.totalCount,
      totalRelayed: stats.totalRelayed,
      activeCreators: stats.activeCreators,
      autoRelayEnabled: stats.autoRelayEnabled,
      avgTipAmount: (avgTipAmount * 1e18).toString(),
      topPerformerIds: creators.sort((a, b) => parseFloat(b.totalTips) - parseFloat(a.totalTips)).slice(0, 5).map((c) => c.id),
      growthRate: Math.random() * 50 + 10,
      viewerRewardsTotal: viewerRewardsStats?.totalRewards || "0",
      platformFeesCollected: (totalTips * 0.05).toString()
    };
  }, []);
  const loadChainAnalytics = async (chainId) => {
    if (!chainAnalytics[chainId]) return;
    setChainAnalytics((prev) => ({
      ...prev,
      [chainId]: { ...prev[chainId], loading: true, error: null }
    }));
    try {
      const [platformStats, creators, viewerRewardsStats] = await Promise.all([
        sdk.getPlatformStats(chainId).catch(() => null),
        sdk.getTopCreators(maxCreatorsToShow, chainId).catch(() => []),
        sdk.getViewerRewardsPlatformStats(chainId).catch(() => null)
      ]);
      const enhancedCreators = creators.map(mapCreatorToAnalytics);
      const enhancedPlatformStats = platformStats ? mapPlatformToAnalytics(platformStats, viewerRewardsStats, creators) : null;
      setChainAnalytics((prev) => ({
        ...prev,
        [chainId]: {
          ...prev[chainId],
          creators: enhancedCreators,
          platformStats: enhancedPlatformStats,
          viewerRewardsStats,
          loading: false,
          error: null,
          lastUpdated: /* @__PURE__ */ new Date()
        }
      }));
    } catch (error) {
      console.error(`Failed to load analytics for chain ${chainId}:`, error);
      setChainAnalytics((prev) => ({
        ...prev,
        [chainId]: {
          ...prev[chainId],
          loading: false,
          error: error instanceof Error ? error.message : "Failed to load analytics"
        }
      }));
    }
  };
  const loadAllAnalytics = async () => {
    setGlobalLoading(true);
    const chainIds = Object.keys(chainAnalytics).map(Number);
    await Promise.all(chainIds.map((chainId) => loadChainAnalytics(chainId)));
    setGlobalLoading(false);
  };
  const handleChainChange = (chainId) => {
    setSelectedChainId(chainId);
    onChainSwitch?.(chainId);
    if (chainAnalytics[chainId] && chainAnalytics[chainId].creators.length === 0) {
      loadChainAnalytics(chainId);
    }
  };
  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
    onTimeRangeChange?.(range);
    loadChainAnalytics(selectedChainId);
  };
  React14.useEffect(() => {
    if (autoRefresh && enableRealTimeUpdates) {
      const interval = setInterval(() => {
        loadChainAnalytics(selectedChainId);
      }, 3e4);
      setRefreshInterval(interval);
      return () => {
        if (interval) clearInterval(interval);
      };
    } else if (refreshInterval) {
      clearInterval(refreshInterval);
      setRefreshInterval(null);
    }
  }, [autoRefresh, enableRealTimeUpdates, selectedChainId]);
  React14.useEffect(() => {
    if (chainAnalytics[selectedChainId] && chainAnalytics[selectedChainId].creators.length === 0) {
      loadChainAnalytics(selectedChainId);
    }
  }, [selectedChainId, chainAnalytics]);
  const handleExportAnalytics = React14.useCallback(() => {
    const currentData = chainAnalytics[selectedChainId];
    if (!currentData) return;
    const exportData = {
      exportTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
      timeRange: TIME_RANGES[selectedTimeRange],
      chainId: selectedChainId,
      chainName: currentData.chainName,
      analytics: {
        creators: currentData.creators,
        platformStats: currentData.platformStats,
        viewerRewardsStats: currentData.viewerRewardsStats
      },
      metadata: {
        totalCreators: currentData.creators.length,
        activeCreators: currentData.creators.filter((c) => c.active).length,
        lastUpdated: currentData.lastUpdated?.toISOString()
      }
    };
    onDataExport?.(exportData);
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tippingchain-analytics-${currentData.chainName.toLowerCase()}-${selectedTimeRange}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [selectedChainId, selectedTimeRange, chainAnalytics, onDataExport]);
  const handleCreatorSelect = React14.useCallback((creatorId) => {
    onCreatorSelect?.(creatorId);
  }, [onCreatorSelect]);
  const currentChainData = chainAnalytics[selectedChainId];
  const deployedChains = Object.values(chainAnalytics);
  const globalMetrics = React14__default.default.useMemo(() => {
    const chains = Object.values(chainAnalytics);
    return chains.reduce((totals, chain) => {
      if (chain.platformStats) {
        totals.totalTips += parseFloat(chain.platformStats.totalTips);
        totals.totalTransactions += chain.platformStats.totalCount;
        totals.totalCreators += chain.creators.length;
        totals.activeCreators += chain.creators.filter((c) => c.active).length;
        totals.totalRelayed += parseFloat(chain.platformStats.totalRelayed);
        totals.totalPlatformFees += parseFloat(chain.platformStats.platformFeesCollected);
      }
      return totals;
    }, {
      totalTips: 0,
      totalTransactions: 0,
      totalCreators: 0,
      activeCreators: 0,
      totalRelayed: 0,
      chainsWithData: chains.filter((c) => c.platformStats).length,
      averageGrowthRate: chains.reduce((acc, c) => acc + (c.platformStats?.growthRate || 0), 0) / Math.max(chains.filter((c) => c.platformStats).length, 1),
      topPerformingChain: chains.sort((a, b) => parseFloat(b.platformStats?.totalTips || "0") - parseFloat(a.platformStats?.totalTips || "0"))[0]?.chainName || "N/A",
      totalPlatformFees: 0
    });
  }, [chainAnalytics]);
  const formatAmount = (amount) => {
    try {
      const eth = parseFloat(amount.toString()) / 1e18;
      return eth.toLocaleString(void 0, { maximumFractionDigits: 4 });
    } catch {
      return "0.0000";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-7xl mx-auto px-4 space-y-8", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `text-center ${headerClassName}`, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h1", { className: "text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-10 h-10 text-blue-600" }),
        "Advanced Creator Analytics"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xl text-gray-600 mb-6", children: "Comprehensive insights and performance metrics for TippingChain creators" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center gap-4 mb-6 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "select",
          {
            value: selectedTimeRange,
            onChange: (e) => handleTimeRangeChange(e.target.value),
            className: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            children: Object.entries(TIME_RANGES).map(([key, range]) => /* @__PURE__ */ jsxRuntime.jsx("option", { value: key, children: range.label }, key))
          }
        ),
        enableRealTimeUpdates && /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setAutoRefresh(!autoRefresh),
            className: `inline-flex items-center px-4 py-2 rounded-lg transition-colors ${autoRefresh ? "bg-green-100 text-green-700 border border-green-300" : "bg-gray-100 text-gray-700 border border-gray-300"}`,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-4 h-4 mr-2 ${autoRefresh ? "animate-spin" : ""}` }),
              "Auto Refresh ",
              autoRefresh ? "On" : "Off"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: loadAllAnalytics,
            disabled: globalLoading,
            className: "inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: [
              globalLoading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-4 h-4 mr-2" }),
              globalLoading ? "Loading Analytics..." : "Refresh All Analytics"
            ]
          }
        ),
        enableDataExport && currentChainData && /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: handleExportAnalytics,
            className: "inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Download, { className: "w-4 h-4 mr-2" }),
              "Export Data"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setShowAdvancedFilters(!showAdvancedFilters),
            className: "inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Filter, { className: "w-4 h-4 mr-2" }),
              "Filters ",
              showAdvancedFilters ? /* @__PURE__ */ jsxRuntime.jsx(EyeOff, { className: "w-4 h-4 ml-1" }) : /* @__PURE__ */ jsxRuntime.jsx(Eye, { className: "w-4 h-4 ml-1" })
            ]
          }
        ),
        !account && /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
      ] }),
      showAdvancedFilters && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-lg shadow-sm p-6 mb-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Creator Filter" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: creatorFilter,
              onChange: (e) => setCreatorFilter(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Creators" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "active", children: "Active Only" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "inactive", children: "Inactive Only" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "top-performers", children: "Top Performers" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Min Tip Amount (ETH)" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              value: minimumTipAmount,
              onChange: (e) => setMinimumTipAmount(Number(e.target.value)),
              step: "0.001",
              min: "0",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "volume", children: "Total Volume" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "count", children: "Tip Count" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "average", children: "Average Tip" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "recent", children: "Most Recent" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => {
              setCreatorFilter("all");
              setMinimumTipAmount(0);
              setSortBy("volume");
            },
            className: "w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
            children: "Reset Filters"
          }
        ) })
      ] }) })
    ] }),
    enableGlobalMetrics && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Platform Volume" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            formatAmount(globalMetrics.totalTips),
            " ETH"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500", children: [
            "Across ",
            globalMetrics.chainsWithData,
            " chains"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Globe, { className: "w-8 h-8 text-blue-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Creators" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: globalMetrics.totalCreators.toLocaleString() }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500", children: [
            globalMetrics.activeCreators,
            " active"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8 text-green-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Transactions" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: globalMetrics.totalTransactions.toLocaleString() }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "All tip transactions" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-8 h-8 text-purple-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Platform Growth" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            "+",
            globalMetrics.averageGrowthRate.toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: TIME_RANGES[selectedTimeRange].label })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Activity, { className: "w-8 h-8 text-orange-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Top Chain" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg font-bold text-gray-900", children: globalMetrics.topPerformingChain }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "Highest volume" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "w-8 h-8 text-yellow-600" })
      ] }) })
    ] }),
    enableMultiChain && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-xl font-semibold text-gray-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Globe, { className: "w-5 h-5 mr-2" }),
        "Chain-Specific Analytics"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            ChainSelector,
            {
              value: selectedChainId,
              onChange: handleChainChange,
              label: "Select Chain for Detailed Analytics",
              className: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Choose a blockchain to view detailed creator performance metrics" })
        ] }),
        currentChainData?.lastUpdated && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-500 flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-4 h-4 mr-1" }),
          "Last updated: ",
          currentChainData.lastUpdated.toLocaleTimeString()
        ] })
      ] })
    ] }),
    currentChainData && /* @__PURE__ */ jsxRuntime.jsx("div", { className: contentClassName, children: /* @__PURE__ */ jsxRuntime.jsx(
      CreatorAnalyticsDashboard,
      {
        creators: currentChainData.creators,
        platformStats: currentChainData.platformStats,
        chainId: selectedChainId,
        chainName: currentChainData.chainName,
        loading: currentChainData.loading,
        error: currentChainData.error,
        onRefresh: () => loadChainAnalytics(selectedChainId),
        onCreatorSelect: handleCreatorSelect,
        onExportData: handleExportAnalytics,
        showPlatformStats,
        showCreatorRankings,
        showTrendAnalysis,
        showViewerRewards,
        maxCreatorsShown: maxCreatorsToShow,
        className: "w-full"
      }
    ) }),
    enableChainComparison && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-xl font-semibold text-gray-900 mb-6 flex items-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Globe, { className: "w-5 h-5 mr-2" }),
        "Multi-Chain Performance Comparison"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: deployedChains.map((chain) => {
        const totalTips = chain.platformStats ? parseFloat(chain.platformStats.totalTips) : 0;
        const activeCreators = chain.creators.filter((c) => c.active).length;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: `p-4 rounded-lg border-2 transition-all cursor-pointer ${chain.chainId === selectedChainId ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 bg-white"}`,
            onClick: () => handleChainChange(chain.chainId),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-semibold text-gray-900", children: chain.chainName }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-1", children: [
                  chain.loading && /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin text-blue-600" }),
                  chain.chainId === selectedChainId && /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 text-blue-600" })
                ] })
              ] }),
              chain.error ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center text-red-500 text-sm", children: [
                /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "w-4 h-4 mr-1" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Error loading data" })
              ] }) : chain.platformStats ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Volume:" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
                    formatAmount(totalTips),
                    " ETH"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Active Creators:" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
                    activeCreators,
                    "/",
                    chain.creators.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Transactions:" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: chain.platformStats.totalCount })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Growth:" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium text-green-600", children: [
                    "+",
                    chain.platformStats.growthRate?.toFixed(1) || 0,
                    "%"
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-400 text-sm", children: "Click to load analytics" })
            ]
          },
          chain.chainId
        );
      }) })
    ] })
  ] }) });
};
var DEFAULT_MOCK_VIEWERS = [
  {
    id: 1,
    username: "CryptoFan123",
    wallet: "0x1234567890123456789012345678901234567890",
    status: "eligible",
    registrationDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "25.50",
    rewardCount: 3
  },
  {
    id: 2,
    username: "BlockchainBob",
    wallet: "0x2345678901234567890123456789012345678901",
    status: "eligible",
    registrationDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "82.25",
    rewardCount: 7
  },
  {
    id: 3,
    username: "DefiDave",
    wallet: "0x3456789012345678901234567890123456789012",
    status: "claimed",
    registrationDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "156.75",
    rewardCount: 12,
    lastRewardDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3)
  },
  {
    id: 4,
    username: "NFTNinja",
    wallet: "0x4567890123456789012345678901234567890123",
    status: "eligible",
    registrationDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "47.50",
    rewardCount: 5
  },
  {
    id: 5,
    username: "Web3Warrior",
    wallet: "0x5678901234567890123456789012345678901234",
    status: "eligible",
    registrationDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "93.25",
    rewardCount: 8
  },
  {
    id: 6,
    username: "TokenTiger",
    wallet: "0x6789012345678901234567890123456789012345",
    status: "claimed",
    registrationDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "71.00",
    rewardCount: 6,
    lastRewardDate: new Date(Date.now() - 5 * 60 * 60 * 1e3)
  },
  {
    id: 7,
    username: "MetaverseMax",
    wallet: "0x7890123456789012345678901234567890123456",
    status: "pending",
    registrationDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "12.75",
    rewardCount: 1
  },
  {
    id: 8,
    username: "SmartContractSam",
    wallet: "0x8901234567890123456789012345678901234567",
    status: "eligible",
    registrationDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1e3),
    totalRewardsReceived: "34.50",
    rewardCount: 4
  }
];
var ViewerRewardsPage = ({
  client,
  sdk,
  defaultChainId = 8453,
  demoCreatorWallet = "0x479945d7931baC3343967bD0f839f8691E54a66e",
  allowedCreatorWallets = [],
  defaultAllocationAmount = 100,
  maxViewersPerBatch = 50,
  enableBatchRewards = true,
  enableIndividualRewards = true,
  enableViewerRegistration = true,
  enableClaimInterface = true,
  enableRewardHistory = true,
  mockViewers = DEFAULT_MOCK_VIEWERS,
  useMockData = true,
  onRewardSent,
  onRewardClaimed,
  onViewerRegistered,
  className = "",
  headerClassName = "",
  contentClassName = "",
  tabNavClassName = ""
}) => {
  const account = react.useActiveAccount();
  react.useActiveWalletChain();
  const [selectedChainId, setSelectedChainId] = React14.useState(defaultChainId);
  const [viewers, setViewers] = React14.useState(mockViewers);
  const [selectedViewers, setSelectedViewers] = React14.useState([]);
  const [allocationAmount, setAllocationAmount] = React14.useState(defaultAllocationAmount);
  const [rewardPerViewer, setRewardPerViewer] = React14.useState(0);
  const [activeTab, setActiveTab] = React14.useState("allocate");
  const [loading, setLoading] = React14.useState(false);
  const [message, setMessage] = React14.useState(null);
  const [searchQuery, setSearchQuery] = React14.useState("");
  const [statusFilter, setStatusFilter] = React14.useState("all");
  const [sortBy, setSortBy] = React14.useState("username");
  const [rewardStats, setRewardStats] = React14.useState({
    totalAllocated: 0,
    totalClaimed: 0,
    pendingRewards: 0,
    uniqueViewers: 0,
    averageReward: 0,
    platformFeesCollected: 0
  });
  const [rewardHistory, setRewardHistory] = React14.useState([]);
  const allowedCreators = demoCreatorWallet ? [demoCreatorWallet, ...allowedCreatorWallets] : allowedCreatorWallets;
  const isCreatorWallet = !allowedCreators.length || allowedCreators.some((wallet) => wallet.toLowerCase() === account?.address?.toLowerCase());
  const userViewer = viewers.find((v) => v.wallet?.toLowerCase() === account?.address?.toLowerCase());
  const eligibleViewers = viewers.filter((v) => v.status === "eligible");
  const claimedViewers = viewers.filter((v) => v.status === "claimed");
  const pendingViewers = viewers.filter((v) => v.status === "pending");
  React14.useEffect(() => {
    if (selectedViewers.length > 0) {
      setRewardPerViewer(allocationAmount / selectedViewers.length);
    } else {
      setRewardPerViewer(0);
    }
  }, [selectedViewers, allocationAmount]);
  React14.useEffect(() => {
    const stats = {
      totalAllocated: viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || "0"), 0),
      totalClaimed: claimedViewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || "0"), 0),
      pendingRewards: pendingViewers.length * 10,
      // Mock pending amount
      uniqueViewers: viewers.length,
      averageReward: viewers.length > 0 ? viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || "0"), 0) / viewers.length : 0,
      platformFeesCollected: viewers.reduce((sum, v) => sum + parseFloat(v.totalRewardsReceived || "0") * 0.01, 0)
    };
    setRewardStats(stats);
  }, [viewers, claimedViewers, pendingViewers]);
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5e3);
  };
  const handleViewerToggle = (viewerId) => {
    setSelectedViewers((prev) => {
      if (prev.includes(viewerId)) {
        return prev.filter((id) => id !== viewerId);
      } else {
        return [...prev, viewerId];
      }
    });
  };
  const handleSelectAllEligible = () => {
    const eligibleIds = eligibleViewers.map((v) => v.id);
    setSelectedViewers(eligibleIds);
  };
  const handleClearSelection = () => {
    setSelectedViewers([]);
  };
  const handleBatchReward = async () => {
    if (selectedViewers.length === 0) {
      showMessage("error", "Please select at least one viewer to reward");
      return;
    }
    if (selectedViewers.length > maxViewersPerBatch) {
      showMessage("error", `Maximum ${maxViewersPerBatch} viewers allowed per batch`);
      return;
    }
    setLoading(true);
    try {
      const rewardAmount = allocationAmount / selectedViewers.length;
      const platformFee = allocationAmount * 0.01;
      const totalCost = allocationAmount + platformFee;
      setViewers((prev) => prev.map(
        (viewer) => selectedViewers.includes(viewer.id) ? { ...viewer, status: "pending" } : viewer
      ));
      const transaction = {
        id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: /* @__PURE__ */ new Date(),
        creatorId: 1,
        // Mock creator ID
        creatorWallet: account?.address || "",
        viewerIds: [...selectedViewers],
        amountPerViewer: rewardAmount,
        totalAmount: allocationAmount,
        platformFee,
        status: "pending",
        transactionHash: `0x${Math.random().toString(16).substr(2, 64)}`
      };
      setRewardHistory((prev) => [transaction, ...prev]);
      onRewardSent?.(selectedViewers, rewardAmount, totalCost);
      showMessage("success", `Batch reward sent! ${selectedViewers.length} viewers will each receive $${rewardAmount.toFixed(2)} in USDC on ApeChain.`);
      setSelectedViewers([]);
      setTimeout(() => {
        setViewers((prev) => prev.map(
          (viewer) => selectedViewers.includes(viewer.id) ? {
            ...viewer,
            status: "eligible",
            totalRewardsReceived: (parseFloat(viewer.totalRewardsReceived || "0") + rewardAmount).toString(),
            rewardCount: (viewer.rewardCount || 0) + 1,
            lastRewardDate: /* @__PURE__ */ new Date()
          } : viewer
        ));
        setRewardHistory((prev) => prev.map(
          (tx) => tx.id === transaction.id ? { ...tx, status: "completed" } : tx
        ));
      }, 3e3);
    } catch (error) {
      console.error("Batch reward error:", error);
      showMessage("error", "Failed to send batch rewards");
      setViewers((prev) => prev.map(
        (viewer) => selectedViewers.includes(viewer.id) ? { ...viewer, status: "eligible" } : viewer
      ));
    } finally {
      setLoading(false);
    }
  };
  const handleClaimReward = async (viewerId) => {
    const viewer = viewers.find((v) => v.id === viewerId);
    if (!viewer) return;
    setLoading(true);
    try {
      setViewers((prev) => prev.map(
        (v) => v.id === viewerId ? { ...v, status: "claimed", lastRewardDate: /* @__PURE__ */ new Date() } : v
      ));
      const rewardAmount = 10;
      onRewardClaimed?.(viewerId, rewardAmount);
      showMessage("success", `Reward claimed! ${viewer.username} received their USDC on ApeChain.`);
    } catch (error) {
      console.error("Claim error:", error);
      showMessage("error", "Failed to claim reward");
    } finally {
      setLoading(false);
    }
  };
  const filteredViewers = viewers.filter((viewer) => {
    const matchesSearch = !searchQuery || viewer.username?.toLowerCase().includes(searchQuery.toLowerCase()) || viewer.wallet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || viewer.status === statusFilter;
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case "username":
        return (a.username || "").localeCompare(b.username || "");
      case "rewards":
        return parseFloat(b.totalRewardsReceived || "0") - parseFloat(a.totalRewardsReceived || "0");
      case "date":
        return (b.lastRewardDate?.getTime() || 0) - (a.lastRewardDate?.getTime() || 0);
      case "count":
        return (b.rewardCount || 0) - (a.rewardCount || 0);
      default:
        return 0;
    }
  });
  const renderMessage = () => {
    if (!message) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `mb-6 p-4 rounded-lg border flex items-center justify-between ${message.type === "success" ? "bg-green-50 border-green-200 text-green-800" : message.type === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-blue-50 border-blue-200 text-blue-800"}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: message.text }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setMessage(null),
          className: "text-current hover:text-opacity-70 ml-4",
          children: "\xD7"
        }
      )
    ] });
  };
  const renderStatsCards = () => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Allocated" }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
          "$",
          rewardStats.totalAllocated.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-green-600", children: "USDC distributed" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-8 h-8 text-green-600" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Active Viewers" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: rewardStats.uniqueViewers }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-blue-600", children: "Registered users" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-8 h-8 text-blue-600" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Average Reward" }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
          "$",
          rewardStats.averageReward.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-purple-600", children: "Per viewer" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "w-8 h-8 text-purple-600" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Platform Fees" }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
          "$",
          rewardStats.platformFeesCollected.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-orange-600", children: "1% fee collected" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-8 h-8 text-orange-600" })
    ] }) })
  ] });
  const tabs = [
    { id: "allocate", label: "Batch Allocation", icon: Gift2, enabled: enableBatchRewards },
    { id: "claim", label: "Claim Rewards", icon: CheckCircle, enabled: enableClaimInterface },
    { id: "history", label: "Reward History", icon: Clock, enabled: enableRewardHistory },
    { id: "register", label: "Viewer Registration", icon: Users, enabled: enableViewerRegistration }
  ].filter((tab) => tab.enabled);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `text-center mb-8 ${headerClassName}`, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h1", { className: "text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "w-10 h-10 text-purple-600" }),
        "Viewer Rewards Platform"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xl text-gray-600", children: "Creators allocate funds to reward their audience - viewers can claim eligible rewards" })
    ] }),
    renderStatsCards(),
    renderMessage(),
    !account && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "h-5 w-5 text-yellow-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-yellow-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Connect Wallet:" }),
            " Connect as creator to allocate rewards, or as viewer to claim"
          ] }),
          demoCreatorWallet && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-yellow-600 mt-1 font-mono", children: [
            "Demo Creator: ",
            demoCreatorWallet
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `mb-8 ${tabNavClassName}`, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "-mb-px flex justify-center space-x-8", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: () => setActiveTab(tab.id),
        className: `py-4 px-6 border-b-2 font-medium text-lg ${activeTab === tab.id ? "border-purple-500 text-purple-600" : "border-transparent text-gray-500 hover:text-gray-700"}`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(tab.icon, { className: "w-5 h-5 inline mr-2" }),
          tab.label
        ]
      },
      tab.id
    )) }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: contentClassName, children: [
      activeTab === "allocate" && enableBatchRewards && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-8", children: [
        account && !isCreatorWallet && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-orange-100 border-l-4 border-orange-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(X, { className: "h-5 w-5 text-orange-400" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-orange-700", children: [
              /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Creator Access Required:" }),
              " Only registered creators can allocate rewards"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-orange-600 mt-1", children: [
              "Expected: ",
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono", children: demoCreatorWallet })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-orange-600", children: [
              "Connected: ",
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono", children: account.address })
            ] })
          ] })
        ] }) }),
        isCreatorWallet && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-green-100 border-l-4 border-green-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-green-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Creator Access Verified!" }),
            " You can allocate rewards to viewers"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-2xl font-semibold mb-6 text-gray-900 flex items-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-6 h-6 mr-2 text-green-600" }),
              "Reward Allocation"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Total Allocation (USD)" }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "input",
                  {
                    type: "number",
                    value: allocationAmount,
                    onChange: (e) => setAllocationAmount(Number(e.target.value)),
                    disabled: !isCreatorWallet || loading,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100",
                    placeholder: "100"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(
                ChainSelector,
                {
                  value: selectedChainId,
                  onChange: setSelectedChainId,
                  label: "Source Chain",
                  className: "w-full"
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-50 rounded-lg p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Selected Viewers:" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: selectedViewers.length })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Reward per Viewer:" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
                    "$",
                    rewardPerViewer.toFixed(2),
                    " USDC"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600", children: "Platform Fee (1%):" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-medium", children: [
                    "$",
                    (allocationAmount * 0.01).toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm font-semibold border-t pt-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Total Cost:" }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                    "$",
                    (allocationAmount + allocationAmount * 0.01).toFixed(2)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    onClick: handleSelectAllEligible,
                    disabled: !isCreatorWallet || loading,
                    className: "w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: [
                      "Select All Eligible (",
                      eligibleViewers.length,
                      ")"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    onClick: handleClearSelection,
                    disabled: !isCreatorWallet || loading,
                    className: "w-full px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: "Clear Selection"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    onClick: handleBatchReward,
                    disabled: !isCreatorWallet || selectedViewers.length === 0 || loading,
                    className: "w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center",
                    children: [
                      loading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(Gift2, { className: "w-4 h-4 mr-2" }),
                      loading ? "Processing..." : "Send Batch Rewards"
                    ]
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-2xl font-semibold text-gray-900 flex items-center", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Users, { className: "w-6 h-6 mr-2 text-blue-600" }),
                "Select Viewers to Reward"
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "input",
                    {
                      type: "text",
                      value: searchQuery,
                      onChange: (e) => setSearchQuery(e.target.value),
                      placeholder: "Search viewers...",
                      className: "pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "select",
                  {
                    value: statusFilter,
                    onChange: (e) => setStatusFilter(e.target.value),
                    className: "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Status" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "eligible", children: "Eligible" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "claimed", children: "Claimed" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "pending", children: "Pending" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "select",
                  {
                    value: sortBy,
                    onChange: (e) => setSortBy(e.target.value),
                    className: "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "username", children: "Username" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "rewards", children: "Total Rewards" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "count", children: "Reward Count" }),
                      /* @__PURE__ */ jsxRuntime.jsx("option", { value: "date", children: "Last Reward" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: filteredViewers.map((viewer) => /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: `p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedViewers.includes(viewer.id) ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-gray-300"} ${viewer.status !== "eligible" ? "opacity-60" : ""}`,
                onClick: () => isCreatorWallet && viewer.status === "eligible" && handleViewerToggle(viewer.id),
                children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-white font-bold text-sm", children: viewer.username?.charAt(0) || "V" }) }),
                    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium text-gray-900", children: viewer.username }),
                      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-gray-500 font-mono", children: [
                        viewer.wallet?.slice(0, 6),
                        "...",
                        viewer.wallet?.slice(-4)
                      ] }),
                      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-green-600", children: [
                        "$",
                        parseFloat(viewer.totalRewardsReceived || "0").toFixed(2),
                        " earned"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-end", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `px-2 py-1 rounded-full text-xs font-medium ${viewer.status === "eligible" ? "bg-green-100 text-green-800" : viewer.status === "claimed" ? "bg-blue-100 text-blue-800" : viewer.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: viewer.status }),
                    selectedViewers.includes(viewer.id) && /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-5 h-5 text-purple-600 mt-1" })
                  ] })
                ] })
              },
              viewer.id
            )) })
          ] }) })
        ] })
      ] }),
      activeTab === "claim" && enableClaimInterface && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-2xl font-semibold mb-6 text-gray-900 text-center flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Gift2, { className: "w-6 h-6 mr-2 text-green-600" }),
          "Claim Your Rewards"
        ] }),
        !account ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Award, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mb-4", children: "Connect your wallet to check for available rewards" }),
          /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
        ] }) : userViewer ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-white font-bold text-2xl", children: userViewer.username?.charAt(0) || "V" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("h3", { className: "text-xl font-semibold mb-2", children: [
            "Welcome, ",
            userViewer.username,
            "!"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gray-50 rounded-lg p-6 mt-4 text-left", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-green-600", children: [
                "$",
                parseFloat(userViewer.totalRewardsReceived || "0").toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "Total Earned" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-blue-600", children: userViewer.rewardCount || 0 }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "Rewards Received" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-purple-600 capitalize", children: userViewer.status }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "Current Status" })
            ] })
          ] }) }),
          userViewer.status === "eligible" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-6 mt-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center mb-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Gift2, { className: "w-8 h-8 text-green-600 mr-2" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-semibold text-green-800", children: "Reward Available!" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-green-700 mb-4", children: "You have an unclaimed reward waiting for you" }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                onClick: () => handleClaimReward(userViewer.id),
                disabled: loading,
                className: "px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto",
                children: [
                  loading ? /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-4 h-4 mr-2" }),
                  loading ? "Processing..." : "Claim Reward"
                ]
              }
            )
          ] }),
          userViewer.status === "claimed" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center mb-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "w-8 h-8 text-blue-600 mr-2" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-semibold text-blue-800", children: "Already Claimed" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-blue-700", children: "You have successfully claimed your reward. USDC has been sent to your wallet on ApeChain." }),
            userViewer.lastRewardDate && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-blue-600 mt-2", children: [
              "Last claimed: ",
              userViewer.lastRewardDate.toLocaleString()
            ] })
          ] }),
          userViewer.status === "pending" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center mb-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-8 h-8 text-yellow-600 mr-2" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-semibold text-yellow-800", children: "Processing" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-yellow-700", children: "Your reward is being processed. Please check back soon." })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Eye, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "Your wallet is not registered as a viewer in this system." }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-500 mt-2 font-mono", children: [
            "Connected: ",
            account.address
          ] }),
          enableViewerRegistration && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => setActiveTab("register"),
              className: "mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
              children: "Register as Viewer"
            }
          )
        ] })
      ] }) }),
      activeTab === "history" && enableRewardHistory && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "text-2xl font-semibold mb-6 text-gray-900 flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-6 h-6 mr-2 text-blue-600" }),
          "Reward Transaction History"
        ] }),
        rewardHistory.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntime.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }),
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Creator" }),
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Recipients" }),
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Amount" }),
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntime.jsx("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Transaction" })
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("tbody", { className: "divide-y divide-gray-200", children: rewardHistory.map((tx) => /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: tx.timestamp.toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-mono text-gray-600", children: [
              tx.creatorWallet.slice(0, 6),
              "...",
              tx.creatorWallet.slice(-4)
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: [
              tx.viewerIds.length,
              " viewers"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: [
              "$",
              tx.totalAmount.toFixed(2),
              " ($",
              tx.amountPerViewer.toFixed(2),
              " each)"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.status === "completed" ? "bg-green-100 text-green-800" : tx.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, children: tx.status }) }),
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-mono text-gray-600", children: [
              tx.transactionHash?.slice(0, 10),
              "..."
            ] }) })
          ] }, tx.id)) })
        ] }) }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600", children: "No reward transactions yet" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "Transaction history will appear here after rewards are sent" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-12 bg-white rounded-xl shadow-lg p-8", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-900", children: "How Viewer Rewards Work" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium mb-2 text-purple-600", children: "For Creators:" }),
          /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Allocate a total reward amount (e.g., $100)" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Select eligible viewers from your audience" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Funds are split equally among selected viewers" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Only 1% platform fee (vs 5% for regular tips)" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 All rewards auto-convert to USDC on ApeChain" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Track reward history and viewer engagement" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "font-medium mb-2 text-green-600", children: "For Viewers:" }),
          /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Register to become eligible for rewards" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Check if you have eligible rewards to claim" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: '\u2022 Click "Claim Reward" to receive your USDC' }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Funds are sent directly to your wallet on ApeChain" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 No gas fees for claiming rewards" }),
            /* @__PURE__ */ jsxRuntime.jsx("li", { children: "\u2022 Stable USDC payouts for price protection" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
var EXPORT_FORMATS = [
  {
    id: "csv",
    label: "CSV (Excel)",
    description: "Comma-separated values for spreadsheet applications",
    fileExtension: "csv",
    mimeType: "text/csv"
  },
  {
    id: "json",
    label: "JSON",
    description: "JavaScript Object Notation with full metadata",
    fileExtension: "json",
    mimeType: "application/json"
  },
  {
    id: "pdf",
    label: "PDF Report",
    description: "Formatted report with statistics and transaction list",
    fileExtension: "pdf",
    mimeType: "application/pdf"
  }
];
var TransactionHistoryPage = ({
  client,
  sdk,
  enableExport = true,
  enableFiltering = true,
  enableStats = true,
  enableRecentActivity = true,
  autoRefresh = false,
  refreshInterval = 30,
  maxTransactionsToShow = 100,
  defaultTimeRange = "30d",
  showAdvancedFilters = false,
  showChartAnalytics = true,
  onTransactionSelect,
  onDataExport,
  onStatsUpdate,
  className = "",
  headerClassName = "",
  contentClassName = "",
  statsCardClassName = ""
}) => {
  const account = react.useActiveAccount();
  const [stats, setStats] = React14.useState(null);
  const [recentTransactions, setRecentTransactions] = React14.useState([]);
  const [allTransactions, setAllTransactions] = React14.useState([]);
  const [loading, setLoading] = React14.useState(false);
  const [exporting, setExporting] = React14.useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = React14.useState(defaultTimeRange);
  const [searchQuery, setSearchQuery] = React14.useState("");
  const [statusFilter, setStatusFilter] = React14.useState("all");
  const [typeFilter, setTypeFilter] = React14.useState("all");
  const [showFilters, setShowFilters] = React14.useState(showAdvancedFilters);
  const [refreshTimer, setRefreshTimer] = React14.useState(null);
  const [lastRefreshTime, setLastRefreshTime] = React14.useState(null);
  const historyService = createTransactionHistoryService();
  const loadPageData = React14.useCallback(async () => {
    if (!account) return;
    setLoading(true);
    try {
      const filters = {
        walletAddress: account.address,
        status: statusFilter === "all" ? void 0 : statusFilter,
        type: typeFilter === "all" ? void 0 : typeFilter,
        searchQuery: searchQuery || void 0,
        timeRange: selectedTimeRange === "all" ? void 0 : selectedTimeRange
      };
      const [statsData, transactions] = await Promise.all([
        historyService.getStats(filters),
        historyService.getTransactions(filters, maxTransactionsToShow)
      ]);
      setStats(statsData);
      setAllTransactions(transactions);
      setRecentTransactions(transactions.slice(0, 5));
      setLastRefreshTime(/* @__PURE__ */ new Date());
      onStatsUpdate?.(statsData);
    } catch (error) {
      console.error("Failed to load transaction history page data:", error);
    } finally {
      setLoading(false);
    }
  }, [account, statusFilter, typeFilter, searchQuery, selectedTimeRange, maxTransactionsToShow, historyService, onStatsUpdate]);
  React14.useEffect(() => {
    if (autoRefresh && account) {
      const timer = setInterval(() => {
        loadPageData();
      }, refreshInterval * 1e3);
      setRefreshTimer(timer);
      return () => {
        if (timer) clearInterval(timer);
      };
    } else if (refreshTimer) {
      clearInterval(refreshTimer);
      setRefreshTimer(null);
    }
  }, [autoRefresh, account, refreshInterval, loadPageData]);
  React14.useEffect(() => {
    loadPageData();
  }, [loadPageData]);
  const exportTransactions = async (formatId) => {
    const format = EXPORT_FORMATS.find((f) => f.id === formatId);
    if (!format) return;
    setExporting(true);
    try {
      const transactions = await historyService.getTransactions({
        walletAddress: account?.address,
        status: statusFilter === "all" ? void 0 : statusFilter,
        type: typeFilter === "all" ? void 0 : typeFilter
      });
      onDataExport?.(transactions, formatId);
      if (formatId === "csv") {
        const csvHeaders = [
          "ID",
          "Type",
          "Status",
          "Timestamp",
          "Chain",
          "Token",
          "Amount",
          "USD Value",
          "Creator ID",
          "Transaction Hash",
          "Description"
        ];
        const csvRows = transactions.map((tx) => [
          tx.id,
          tx.type,
          tx.status,
          new Date(tx.timestamp).toISOString(),
          tx.sourceChainId.toString(),
          tx.tokenSymbol,
          tx.amount,
          tx.estimatedUsdValue || "",
          tx.creatorId?.toString() || "",
          tx.sourceTransactionHash || "",
          tx.description.replace(/,/g, ";")
        ]);
        const csvContent = [csvHeaders, ...csvRows].map((row) => row.map((field) => `"${field}"`).join(",")).join("\n");
        downloadFile(csvContent, format.mimeType, `tippingchain-transactions-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.${format.fileExtension}`);
      } else if (formatId === "json") {
        const exportData = {
          exportTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
          walletAddress: account?.address,
          filters: { statusFilter, typeFilter, searchQuery, selectedTimeRange },
          statistics: stats,
          transactions
        };
        const jsonContent = JSON.stringify(exportData, null, 2);
        downloadFile(jsonContent, format.mimeType, `tippingchain-transactions-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.${format.fileExtension}`);
      } else if (formatId === "pdf") {
        alert("PDF export coming soon! Using JSON format for now.");
        const jsonContent = JSON.stringify(transactions, null, 2);
        downloadFile(jsonContent, "application/json", `tippingchain-transactions-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`);
      }
    } catch (error) {
      console.error("Failed to export transactions:", error);
      alert("Failed to export transaction history. Please try again.");
    } finally {
      setExporting(false);
    }
  };
  const downloadFile = (content, mimeType, filename) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
  const formatCurrency = (value) => {
    if (!value) return "$0.00";
    return `$${parseFloat(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
  const renderStatsCards = () => {
    if (!enableStats || !stats) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ${statsCardClassName}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Volume" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: formatCurrency(stats.totalVolumeUsd) }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-green-600", children: "Lifetime transactions" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(TrendingUp, { className: "w-8 h-8 text-green-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Success Rate" }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            stats.totalTransactions > 0 ? Math.round(stats.successfulTransactions / stats.totalTransactions * 100) : 0,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-blue-600", children: [
            stats.successfulTransactions,
            " successful"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(BarChart3, { className: "w-8 h-8 text-blue-600" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Creators Supported" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.uniqueCreatorsTipped }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-purple-600", children: "Unique creators" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-3xl", children: "\u{1F465}" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Platform Fees" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-gray-900", children: formatCurrency(stats.totalFeesUsd) }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-orange-600", children: "Fees contributed" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(DollarSign, { className: "w-8 h-8 text-orange-600" })
      ] }) })
    ] });
  };
  const renderFilters = () => {
    if (!enableFiltering) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Filters & Search" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => setShowFilters(!showFilters),
            className: "flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Filter, { className: "w-4 h-4 mr-2" }),
              showFilters ? /* @__PURE__ */ jsxRuntime.jsx(EyeOff, { className: "w-4 h-4 ml-1" }) : /* @__PURE__ */ jsxRuntime.jsx(Eye, { className: "w-4 h-4 ml-1" })
            ]
          }
        )
      ] }),
      showFilters && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                type: "text",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search transactions, hashes, creators...",
                className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: selectedTimeRange,
              onChange: (e) => setSelectedTimeRange(e.target.value),
              className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "24h", children: "Last 24 Hours" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "7d", children: "Last 7 Days" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "30d", children: "Last 30 Days" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "90d", children: "Last 90 Days" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Time" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: statusFilter,
              onChange: (e) => setStatusFilter(e.target.value),
              className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Status" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "success", children: "Successful" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "pending", children: "Pending" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "failed", children: "Failed" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "select",
            {
              value: typeFilter,
              onChange: (e) => setTypeFilter(e.target.value),
              className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "all", children: "All Types" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "tip", children: "Tips" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "approval", children: "Approvals" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "creator_registration", children: "Creator Registration" }),
                /* @__PURE__ */ jsxRuntime.jsx("option", { value: "viewer_reward", children: "Viewer Rewards" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => {
                setSearchQuery("");
                setStatusFilter("all");
                setTypeFilter("all");
                setSelectedTimeRange("30d");
              },
              className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
              children: "Reset Filters"
            }
          )
        ] })
      ] })
    ] });
  };
  const renderExportSection = () => {
    if (!enableExport || !stats || stats.totalTransactions === 0) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Download, { className: "w-6 h-6 text-blue-600" }),
          /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Export Transaction History" })
        ] }),
        lastRefreshTime && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-500 flex items-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Clock, { className: "w-4 h-4 mr-1" }),
          "Updated: ",
          lastRefreshTime.toLocaleTimeString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: EXPORT_FORMATS.map((format) => /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: () => exportTransactions(format.id),
          disabled: exporting,
          className: "flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx(FileText, { className: "w-5 h-5 text-blue-600 mr-2" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-gray-900", children: format.label })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-600", children: format.description }),
            exporting && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center mt-2 text-sm text-blue-600", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Loader2, { className: "w-4 h-4 animate-spin mr-1" }),
              "Exporting..."
            ] })
          ]
        },
        format.id
      )) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-7xl mx-auto px-4 space-y-8", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `text-center ${headerClassName}`, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h1", { className: "text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(History, { className: "w-10 h-10 text-blue-600" }),
        "Transaction History"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full text-sm bg-blue-100 text-blue-800", children: [
        /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-4 h-4 mr-2 ${autoRefresh ? "animate-spin" : ""}` }),
        "Complete transaction tracking and analytics",
        autoRefresh && " \u2022 Auto-refreshing"
      ] })
    ] }),
    !account && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(AlertCircle, { className: "h-5 w-5 text-yellow-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-yellow-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Connect Your Wallet:" }),
            " To track your transactions, please connect your wallet first."
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-yellow-600 mt-1", children: "Transaction history is stored locally and tied to your wallet address." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(react.ConnectButton, { client, theme: "light" })
    ] }) }),
    account && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-green-100 border-l-4 border-green-500 p-4 rounded", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-green-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Wallet Connected:" }),
            " Tracking transactions for ",
            account.address?.slice(0, 8),
            "...",
            account.address?.slice(-6)
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-green-600 mt-1", children: "Transaction history is automatically saved as you use TippingChain" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          onClick: loadPageData,
          disabled: loading,
          className: "flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: `w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}` }),
            "Refresh"
          ]
        }
      )
    ] }) }),
    renderStatsCards(),
    renderFilters(),
    renderExportSection(),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: contentClassName, children: /* @__PURE__ */ jsxRuntime.jsx(
      TransactionHistory,
      {
        showStats: false,
        showFilters: false,
        maxHeight: "max-h-screen",
        walletAddress: account?.address,
        className: "min-h-96",
        storageService: historyService,
        onTransactionClick: onTransactionSelect,
        initialFilters: {
          status: statusFilter === "all" ? void 0 : statusFilter,
          type: typeFilter === "all" ? void 0 : typeFilter,
          searchQuery: searchQuery || void 0,
          timeRange: selectedTimeRange === "all" ? void 0 : selectedTimeRange
        }
      }
    ) }),
    enableRecentActivity && recentTransactions.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Calendar, { className: "w-6 h-6 text-purple-600" }),
        /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Recent Activity" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-3", children: recentTransactions.map((tx) => /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => onTransactionSelect?.(tx),
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xl", children: tx.type === "tip" ? "\u{1F4B0}" : tx.type === "approval" ? "\u2705" : tx.type === "creator_registration" ? "\u{1F464}" : "\u{1F381}" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium text-gray-900", children: tx.title }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm text-gray-600", children: [
                  tx.amount,
                  " ",
                  tx.tokenSymbol,
                  " \u2022 ",
                  new Date(tx.timestamp).toLocaleDateString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
              tx.estimatedUsdValue && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-green-600", children: formatCurrency(tx.estimatedUsdValue) }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: `px-2 py-1 text-xs rounded-full ${tx.status === "success" ? "bg-green-100 text-green-800" : tx.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, children: tx.status })
            ] })
          ]
        },
        tx.id
      )) })
    ] }),
    stats && stats.totalTransactions === 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(History, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "No Transaction History Yet" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-gray-600 mb-6", children: "Your transaction history will appear here once you start using TippingChain." }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2 text-sm text-gray-500 mb-8", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "\u2022 Send tips to creators across multiple blockchain networks" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "\u2022 Approve tokens for seamless future transactions" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "\u2022 Register as a creator to receive tips" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "\u2022 Participate in viewer reward programs" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "\u2022 All your activities will be tracked and displayed here" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center space-x-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            onClick: () => window.location.href = "/examples/",
            className: "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Start Tipping Now"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: loadPageData,
            className: "inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
              "Refresh"
            ]
          }
        )
      ] })
    ] })
  ] }) });
};

// src/index.ts
var UI_VERSION = "2.3.0";
var FEE_STRUCTURE = {
  PLATFORM_PERCENTAGE: 5,
  // Platform always takes 5% for tips
  VIEWER_REWARD_PLATFORM_PERCENTAGE: 1
  // Platform takes 1% for viewer rewards
  // Creator/business split depends on creator's membership tier (60/40, 70/30, 80/20, 90/10)
};

exports.AdminDashboard = AdminDashboard;
exports.AdminInterface = AdminInterface;
exports.AnalyticsDashboard = AnalyticsDashboard;
exports.ApeChainTippingInterface = ApeChainTippingInterface;
exports.BatchViewerReward = BatchViewerReward;
exports.Button = Button;
exports.CHAIN_TOKENS = CHAIN_TOKENS;
exports.ChainSelector = ChainSelector;
exports.CreatorAnalyticsDashboard = CreatorAnalyticsDashboard;
exports.CreatorManagement = CreatorManagement;
exports.CreatorSelector = CreatorSelector;
exports.FEE_STRUCTURE = FEE_STRUCTURE;
exports.LiveBalanceDisplay = LiveBalanceDisplay;
exports.LocalTransactionHistoryService = LocalTransactionHistoryService;
exports.MultiTokenBalanceDisplay = MultiTokenBalanceDisplay;
exports.MultiTokenTippingInterface = MultiTokenTippingInterface;
exports.NATIVE_TOKENS = NATIVE_TOKENS;
exports.NotificationProvider = NotificationProvider;
exports.NotificationToast = NotificationToast;
exports.RelayProgressIndicator = RelayProgressIndicator;
exports.RelayStatusBadge = RelayStatusBadge;
exports.RewardPoolInterface = RewardPoolInterface;
exports.StreamingPage = StreamingPage;
exports.TransactionHistory = TransactionHistory;
exports.TransactionHistoryPage = TransactionHistoryPage;
exports.TransactionStatusMessage = TransactionStatusMessage;
exports.UI_VERSION = UI_VERSION;
exports.ViewerRewardInterface = ViewerRewardInterface;
exports.ViewerRewardStats = ViewerRewardStats;
exports.ViewerRewardsPage = ViewerRewardsPage;
exports.ViewerSelector = ViewerSelector;
exports.calculateFeeBreakdown = calculateFeeBreakdown;
exports.calculateViewerRewardFees = calculateViewerRewardFees;
exports.createTransactionHistoryService = createTransactionHistoryService;
exports.debounce = debounce;
exports.findTokenBySymbol = findTokenBySymbol;
exports.formatTokenAmount = formatTokenAmount;
exports.formatTokenAmountFromConfig = formatTokenAmount2;
exports.getAllTokensForChain = getAllTokensForChain;
exports.getChainName = getChainName;
exports.getChainNameFromId = getChainNameFromId;
exports.getNativeCurrency = getNativeCurrency;
exports.getNativeToken = getNativeToken;
exports.getPopularTokens = getPopularTokens;
exports.getStablecoins = getStablecoins;
exports.getTokenOptions = getTokenOptions;
exports.getTokensForChain = getTokensForChain;
exports.isNativeToken = isNativeToken;
exports.isValidAddress = isValidAddress;
exports.transactionBuilder = transactionBuilder;
exports.truncateAddress = truncateAddress;
exports.useBalanceWatcher = useBalanceWatcher;
exports.useNotifications = useNotifications;
exports.useRelayProgress = useRelayProgress;
exports.useTransactionMonitor = useTransactionMonitor;
exports.useTransactionNotifications = useTransactionNotifications;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map