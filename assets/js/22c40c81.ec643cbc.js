(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},109:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(110);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},110:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),a=(r(0),r(105)),i=r(109),c=["components"],u={slug:"/setup/asg210-setup",sidebar_label:"ASG210 Local Network \ud658\uacbd\uc124\uc815",sidebar_position:3},s={unversionedId:"Setup/ASG210-Configuration",id:"Setup/ASG210-Configuration",isDocsHomePage:!1,title:"ASG210-Configuration",description:"ASG210 Setup",source:"@site/docs/Setup/ASG210-Configuration.md",sourceDirName:"Setup",slug:"/setup/asg210-setup",permalink:"/WIZnet-ASG-PoC-Docs/setup/asg210-setup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Setup/ASG210-Configuration.md",version:"current",sidebar_label:"ASG210 Local Network \ud658\uacbd\uc124\uc815",sidebarPosition:3,frontMatter:{slug:"/setup/asg210-setup",sidebar_label:"ASG210 Local Network \ud658\uacbd\uc124\uc815",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"WIZ750SR-Waton",permalink:"/WIZnet-ASG-PoC-Docs/setup/wiz750sr-waton"},next:{title:"Device Management",permalink:"/WIZnet-ASG-PoC-Docs/DeviceManagement"}},l=[{value:"ASG210 Setup",id:"asg210-setup",children:[]},{value:"ASG210 \ub3d9\uc791 \uc0c1\ud0dc \ud655\uc778",id:"asg210-\ub3d9\uc791-\uc0c1\ud0dc-\ud655\uc778",children:[]},{value:"ASG210 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815",id:"asg210-\ub124\ud2b8\uc6cc\ud06c-\uc124\uc815",children:[{value:"1. \ub85c\uceec \ub124\ud2b8\uc6cc\ud06c \uc124\uc815 \ubc29\ubc95",id:"1-\ub85c\uceec-\ub124\ud2b8\uc6cc\ud06c-\uc124\uc815-\ubc29\ubc95",children:[]}]},{value:"NEXT",id:"next",children:[]}],p={toc:l};function f(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"asg210-setup"},"ASG210 Setup"),Object(a.b)("h2",{id:"asg210-\ub3d9\uc791-\uc0c1\ud0dc-\ud655\uc778"},"ASG210 \ub3d9\uc791 \uc0c1\ud0dc \ud655\uc778"),Object(a.b)("h2",{id:"asg210-\ub124\ud2b8\uc6cc\ud06c-\uc124\uc815"},"ASG210 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815"),Object(a.b)("p",null,"Local Network\uc640 \uc5f0\uacb0\ub418\ub294 ASG210\uc758 Ethernet port\ub294 Static \ub610\ub294 DHCP\ub85c \uc124\uc815\uc774 \uac00\ub2a5\ud558\uba70, \uae30\ubcf8\uc124\uc815\uc740 DHCP\ub85c \ub418\uc5b4 \uc788\ub2e4. Local Network Hub\uc5d0\uc11c DHCP\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\ub294 PC Tool\uc744 \ud1b5\ud574 ASG210\uc758 Local Network\ub97c Static \uc635\uc165\uc744 \ud1b5\ud574 WIZ750SR-Waton\uacfc \ub3d9\uc77c\ud55c Network \ub300\uc5ed\uc744 \ub9de\ucdb0\uc918\uc57c \ud55c\ub2e4."),Object(a.b)("h3",{id:"1-\ub85c\uceec-\ub124\ud2b8\uc6cc\ud06c-\uc124\uc815-\ubc29\ubc95"},"1. \ub85c\uceec \ub124\ud2b8\uc6cc\ud06c \uc124\uc815 \ubc29\ubc95"),Object(a.b)("p",null,"WIZnet\uc774 \ubc30\ud3ec\ud55c ASG210 PC Tool\uc744 \uc2e4\ud589\uc2dc\ud0a4\uace0 Device Search\ubc84\ud2bc\uc744 \ud1b5\ud574 PC\uc640 \uc5f0\uacb0\ub41c ASG210\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\ub2e4. \uac80\uc0c9\ub41c ASG210\uc744 \uc120\ud0dd\ud558\uace0 Network configuration \uba54\ub274\uc5d0\uc11c Local Network \ud1b5\uc2e0\uc744 \uc704\ud55c Network \uc815\ubcf4\ub97c \uc124\uc815\ud55c\ub2e4."),Object(a.b)("img",{alt:"asg210-local-network-setup",src:Object(i.a)("/img/asgdm/asg210-network.png")}),Object(a.b)("h2",{id:"next"},"NEXT"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/wiz750sr-waton"},"WIZ750SR-Waton Local Network \ud658\uacbd\uc124\uc815")))}f.isMDXComponent=!0}}]);