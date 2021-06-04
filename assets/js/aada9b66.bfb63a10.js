(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},111:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(112);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var b=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+b:b}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},112:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(106)),i=r(111),c=["components"],u={slug:"/setup/network-configuration",sidebar_label:"PoC Network \ud658\uacbd\uc124\uc815",sidebar_position:1},l={unversionedId:"Setup/Network-configuration",id:"Setup/Network-configuration",isDocsHomePage:!1,title:"Network-configuration",description:"Waton PoC Network \uc124\uc815",source:"@site/docs/Setup/Network-configuration.md",sourceDirName:"Setup",slug:"/setup/network-configuration",permalink:"/WIZnet-ASG-PoC-Docs/setup/network-configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Setup/Network-configuration.md",version:"current",sidebar_label:"PoC Network \ud658\uacbd\uc124\uc815",sidebarPosition:1,frontMatter:{slug:"/setup/network-configuration",sidebar_label:"PoC Network \ud658\uacbd\uc124\uc815",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Web Service Overview",permalink:"/WIZnet-ASG-PoC-Docs/"},next:{title:"WIZ750SR-Waton",permalink:"/WIZnet-ASG-PoC-Docs/setup/wiz750sr-waton"}},b=[{value:"Waton PoC Network \uc124\uc815",id:"waton-poc-network-\uc124\uc815",children:[]},{value:"Local Network \ud658\uacbd\uc124\uc815",id:"local-network-\ud658\uacbd\uc124\uc815",children:[]},{value:"Global Network \ud658\uacbd\uc124\uc815",id:"global-network-\ud658\uacbd\uc124\uc815",children:[]},{value:"NEXT",id:"next",children:[]}],p={toc:b};function s(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"waton-poc-network-\uc124\uc815"},"Waton PoC Network \uc124\uc815"),Object(a.b)("p",null,"Waton PoC \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574\uc11c\ub294 \uba3c\uc800 Network \ud658\uacbd\uc744 \uc124\uc815\ud574\uc57c \ud55c\ub2e4. Waton PoC Network\ub294 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 Battery Bank \uc7a5\ube44\uc758 WIZ750SR-Waton\uc774 \uc18d\ud55c ",Object(a.b)("inlineCode",{parentName:"p"},"Local Network"),"\uc640 ASG210\uc774 ASG DM\uc11c\ube44\uc2a4\uc640 \ud1b5\uc2e0\ud558\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"Global Network"),"\ub85c \uad6c\ubd84\ub41c\ub2e4. ASG210\uc758 Security System\uc740 \ub450 \ub124\ud2b8\uc6cc\ud06c\uac04\uc758 \ub370\uc774\ud130 \uc804\uc1a1\uc758 \ubcf4\uc548\uc744 \ucc45\uc784\uc9c4\ub2e4."),Object(a.b)("img",{alt:"asgdm-network-configuration",src:Object(i.a)("/img/asgdm/ASGDM_network.png")}),Object(a.b)("h2",{id:"local-network-\ud658\uacbd\uc124\uc815"},"Local Network \ud658\uacbd\uc124\uc815"),Object(a.b)("p",null,"Local Network\ub294 WIZ750SR-Waton\uacfc ASG210\uac04\uc758 Ethernet \uae30\ubc18 \ud1b5\uc2e0\ub9dd\uc744 \uad6c\ucd95\ud558\ub294\ub370 \uc788\ub2e4. Ethernet \uae30\ubc18 \ud1b5\uc2e0\ub9dd\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 ",Object(a.b)("inlineCode",{parentName:"p"},"Network Hub"),"\ub97c \ud1b5\ud574 WIZ750SR-Waton \uc7a5\ube44\uc640 ASG210\uc744 Ethernet \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. \uadf8\ub9ac\uace0 ",Object(a.b)("inlineCode",{parentName:"p"},"\uc0ac\uc6a9\uc790 PC"),"\ub97c \ub3d9\uc77c\ud55c ",Object(a.b)("inlineCode",{parentName:"p"},"Network Hub"),"\uc5d0 \uc5f0\uacb0\ud568\uc73c\ub85c\uc368 ",Object(a.b)("inlineCode",{parentName:"p"},"PC Tool"),"\uc744 \ud1b5\ud574 WIZ750SR-Waton\uacfc ASG210\uc758 \uac01\uac01\uc758 Local Network \uc815\ubcf4\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("p",null,"\uc544\ub798 \ub9c1\ud06c\ub97c \ud1b5\ud574 \uc138\ubd80 Local Network \ud658\uacbd\uc124\uc815 \ubc29\ubc95\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),Object(a.b)("h4",{id:"1-wiz750sr-waton-local-network-\ud658\uacbd\uc124\uc815"},Object(a.b)("a",{parentName:"h4",href:"/setup/wiz750sr-waton"},"1. WIZ750SR-Waton Local Network \ud658\uacbd\uc124\uc815")),Object(a.b)("h4",{id:"2-asg210-local-network-\ud658\uacbd\uc124\uc815"},Object(a.b)("a",{parentName:"h4",href:"/setup/asg210-setup"},"2. ASG210 Local Network \ud658\uacbd\uc124\uc815")),Object(a.b)("img",{alt:"asgdm-local-network-configuration",src:Object(i.a)("/img/asgdm/ASGDM_network_local.png")}),Object(a.b)("h2",{id:"global-network-\ud658\uacbd\uc124\uc815"},"Global Network \ud658\uacbd\uc124\uc815"),Object(a.b)("p",null,"Global Network\uc640 \uc5f0\uacb0\ub418\ub294 ASG210\uc758 Ethernet port\ub294 ",Object(a.b)("em",{parentName:"p"},"DHCP"),"\ub97c \uae30\ubcf8\uc73c\ub85c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790\ub294 Global Network Router\uc5d0 ASG210\uc758 ",Object(a.b)("inlineCode",{parentName:"p"},"WAN")," \ud3ec\ud2b8\ub97c \uc5f0\uacb0\ud558\uba74 \ub41c\ub2e4. WAN \ud3ec\ud2b8\ub97c \ud1b5\ud574 ASG DM\uacfc \uc5f0\uacb0\ub418\ub294 \uac83\uc740 \uc544\ub798\uc758 ",Object(a.b)("inlineCode",{parentName:"p"},"CLOUD")," led status \ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \ub610\ub294 ",Object(a.b)("inlineCode",{parentName:"p"},"ASG DM"),"\uc5d0\uc11c ASG210\uc758 \uc5f0\uacb0\uc0c1\ud0dc\ub97c \ud1b5\ud574 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4."),Object(a.b)("img",{alt:"asgdm-global-network-configuration",src:Object(i.a)("/img/asgdm/ASGDM_network_global.png")}),Object(a.b)("h2",{id:"next"},"NEXT"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/setup/wiz750sr-waton"},"WIZ750SR-Waton Local Network \ud658\uacbd\uc124\uc815")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/setup/asg210-setup"},"ASG210 Local Network \ud658\uacbd\uc124\uc815")))}s.isMDXComponent=!0}}]);