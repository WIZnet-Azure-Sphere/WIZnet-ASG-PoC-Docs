(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},112:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(16),a=r(113);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},113:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(109)),i=r(112),c=["components"],s={slug:"/services/data-storage",title:"DATA Storage",date:new Date("2021-06-01T00:00:00.000Z"),sidebar_position:5},u={unversionedId:"Services/Data_storage",id:"Services/Data_storage",isDocsHomePage:!1,title:"DATA Storage",description:"DATA Storage \ub780",source:"@site/docs/Services/Data_storage.md",sourceDirName:"Services",slug:"/services/data-storage",permalink:"/WIZnet-ASG-PoC-Docs/services/data-storage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Services/Data_storage.md",version:"current",sidebarPosition:5,frontMatter:{slug:"/services/data-storage",title:"DATA Storage",date:"2021-06-01T00:00:00.000Z",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Battery Bank \ub300\uc2dc\ubcf4\ub4dc",permalink:"/WIZnet-ASG-PoC-Docs/services/bank-dashboard"},next:{title:"FOTA",permalink:"/WIZnet-ASG-PoC-Docs/service/fota"}},l=[{value:"DATA Storage \ub780",id:"data-storage-\ub780",children:[{value:"ASG210 DATA \uac80\uc0c9",id:"asg210-data-\uac80\uc0c9",children:[]},{value:"DATA Table",id:"data-table",children:[]}]},{value:"NEXT",id:"next",children:[]}],d={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-storage-\ub780"},"DATA Storage \ub780"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DATA Storage"),"\ub294 ASG210\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc800\uc7a5 \ubc0f \ud655\uc778\ud560 \uc218 \uc788\ub294 \uc0ac\uc6a9\uc790 \uc11c\ube44\uc2a4\uc774\ub2e4. \ub370\uc774\ud130\uc758 \ud615\ud0dc\ub294 Dashboard\uc5d0\uc11c \ubcf4\uc5ec\uc9c0\ub294 \ud574\uc11d\ub41c \ub370\uc774\ud130\uac00 \uc544\ub2cc ",Object(o.b)("inlineCode",{parentName:"p"},"Low DATA"),"\ud615\ud0dc\ub85c \ubcf4\uad00\ub41c\ub2e4. \ud604\uc7ac\ub294 \uc601\uad6c\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"asg210-data-\uac80\uc0c9"},"ASG210 DATA \uac80\uc0c9"),Object(o.b)("p",null,"\uc0c1\ub2e8\uc758 \ud544\ud130\uc5d0\uc11c \uadf8\ub8f9\uc758 \ud2b9\uc815 ASG210\uc744 \uc120\ud0dd\ud558\uc5ec ",Object(o.b)("inlineCode",{parentName:"p"},"SEARCH DATA"),"\ub97c \ud1b5\ud574 \ud574\ub2f9 ASG210\uc5d0 \uc804\uc1a1\ub418\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c ",Object(o.b)("inlineCode",{parentName:"p"},"DATA Table"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("img",{alt:"Search ASG210 DATA",src:Object(i.a)("/img/asgdm/web-service-storage-search.png")}),Object(o.b)("h3",{id:"data-table"},"DATA Table"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DATA Table"),"\uc740 \uc0ac\uc6a9\uc790\uac00 \uc9c0\uc815\ud55c ASG210\uc758 \uc774\ub984\uacfc \uc2e4\uc81c DATA\ub97c \uc804\uc1a1\ud55c Node \ub514\ubc14\uc774\uc2a4\uc778 WIZ750SR-Waton\uc758 MAC \uc8fc\uc18c\ub97c \ud3ec\ud568\ud55c \uc2e4\uc81c Low DATA\ub97c \ubcf4\uc5ec\uc900\ub2e4. \ubaa8\ub4e0 \uc218\uc2e0\ub41c Low DATA\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"Enqueued Time"),"\uacfc \ub9e4\uce6d\ub418\uc5b4 \uc0ac\uc6a9\uc790\ub294 \ub370\uc774\ud130\uc758 \uc218\uc2e0 \uc2dc\uac04\uc744 \ucd94\uc801\ud560 \uc218 \uc788\ub2e4."),Object(o.b)("img",{alt:"Low DATA",src:Object(i.a)("/img/asgdm/web-service-storage-data.png")}),Object(o.b)("h2",{id:"next"},"NEXT"))}b.isMDXComponent=!0}}]);