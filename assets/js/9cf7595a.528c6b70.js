(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var c=a(0),n=a.n(c);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(a),m=c,O=u["".concat(b,".").concat(m)]||u[m]||d[m]||r;return a?n.a.createElement(O,l(l({ref:t},p),{},{components:a})):n.a.createElement(O,l({ref:t},p))}));function O(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,b=new Array(r);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:c,b[1]=l;for(var p=2;p<r;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},112:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return b}));var c=a(16),n=a(113);function r(){var e=Object(c.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,c){var r=void 0===c?{}:c,b=r.forcePrependBaseUrl,l=void 0!==b&&b,o=r.absolute,p=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(l)return t+a;var i=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+i:i}(r,a,e,t)}}}function b(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},113:function(e,t,a){"use strict";function c(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!c(e)}a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return n}))},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var c=a(3),n=a(7),r=(a(0),a(109)),b=a(112),l=["components"],o={slug:"/service/fota",title:"FOTA",date:new Date("2021-05-10T00:00:00.000Z"),sidebar_position:6},p={unversionedId:"Services/FOTA",id:"Services/FOTA",isDocsHomePage:!1,title:"FOTA",description:"FOTA \uc11c\ube44\uc2a4",source:"@site/docs/Services/FOTA.md",sourceDirName:"Services",slug:"/service/fota",permalink:"/WIZnet-ASG-PoC-Docs/service/fota",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Services/FOTA.md",version:"current",sidebarPosition:6,frontMatter:{slug:"/service/fota",title:"FOTA",date:"2021-05-10T00:00:00.000Z",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"DATA Storage",permalink:"/WIZnet-ASG-PoC-Docs/services/data-storage"}},i=[{value:"FOTA \uc11c\ube44\uc2a4",id:"fota-\uc11c\ube44\uc2a4",children:[]},{value:"FOTA \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc",id:"fota-\uc0ac\uc6a9\uc790-\uac00\uc774\ub4dc",children:[{value:"1. Select Device Group",id:"1-select-device-group",children:[]},{value:"2. Upload Imagepackage",id:"2-upload-imagepackage",children:[]},{value:"3. Create a Deployment",id:"3-create-a-deployment",children:[]},{value:"4. Check the Deployment",id:"4-check-the-deployment",children:[]},{value:"5. Update ASG Device",id:"5-update-asg-device",children:[]},{value:"6. Update Node Device",id:"6-update-node-device",children:[]}]},{value:"Select Device Group",id:"select-device-group",children:[]},{value:"Upload Imagepackage",id:"upload-imagepackage",children:[{value:"Image ID \ubc0f Component ID \ud655\uc778",id:"image-id-\ubc0f-component-id-\ud655\uc778",children:[]}]},{value:"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd",id:"\ub514\ubc14\uc774\uc2a4-\uadf8\ub8f9-\uc120\ud0dd",children:[]},{value:"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc",id:"\uc774\ubbf8\uc9c0-\ud328\ud0a4\uc9c0-\uc5c5\ub85c\ub4dc",children:[]},{value:"\ubc30\ud3ec \uc0dd\uc131",id:"\ubc30\ud3ec-\uc0dd\uc131",children:[]},{value:"\ubc30\ud3ec \ub9ac\uc2a4\ud2b8 \ud655\uc778",id:"\ubc30\ud3ec-\ub9ac\uc2a4\ud2b8-\ud655\uc778",children:[]},{value:"Create a Deployment",id:"create-a-deployment",children:[]},{value:"Check the Deployment",id:"check-the-deployment",children:[]},{value:"Update ASG Device",id:"update-asg-device",children:[]},{value:"Update Node Device",id:"update-node-device",children:[]}],u={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,l);return Object(r.b)("wrapper",Object(c.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"fota-\uc11c\ube44\uc2a4"},"FOTA \uc11c\ube44\uc2a4"),Object(r.b)("p",null,"FOTA(Firmware Over The Air)\ub294 \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ubc30\ud3ec\ud558\ub294 \uc11c\ube44\uc2a4\ub2e4. ASG DM\uc740 MS Azure \uc11c\ube44\uc2a4\uc911 \ud558\ub098\uc778 Azure Sphere Security Service(AS3)\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Public API\ub97c \ud1b5\ud574 ASG210\uc758 OTA\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Azure Sphere Security Service(AS3)\ub294 \uc720\uc9c0 \uad00\ub9ac \ubc0f \uc5c5\ub370\uc774\ud2b8 \ub4f1\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 Azure Sphere \uce69\uacfc \ud1b5\uc2e0\ud558\ub294 \ud074\ub77c\uc6b0\ub4dc \uae30\ubc18\uc758 \uc11c\ube44\uc2a4")),Object(r.b)("h2",{id:"fota-\uc0ac\uc6a9\uc790-\uac00\uc774\ub4dc"},"FOTA \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"),Object(r.b)("p",null,"Azure Sphere\uc758 OTA\ub294 \uc778\uc99d\ub41c \ubcf4\uc548 \uc5f0\uacb0\uc744 \ud1b5\ud574\uc11c\ub9cc \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\ub418\uc5b4 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uc6d0\uaca9 \uc11c\ube44\uc2a4\uc640 \uc5c5\ub370\uc774\ud2b8\ub97c \uac00\ub2a5\ud558\uac8c \ud558\uace0, \uc9c0\uc18d\uc801\uc774\uace0 \uc548\uc815\uc801\uc778 \uc6b4\uc601\uc744 \ubcf4\uc7a5\ud55c\ub2e4. ASG DM\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c FOTA \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc0ac\uc6a9\uc790 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uba70, \uc9c4\ud589 \uacfc\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),Object(r.b)("img",{alt:"FOTA 6Steps",src:Object(b.a)("/img/asgdm/web-service-fota-steps.png")}),Object(r.b)("h3",{id:"1-select-device-group"},"1. Select Device Group"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"FOTA\ub97c \uc9c4\ud589\ud560 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd")),Object(r.b)("h3",{id:"2-upload-imagepackage"},"2. Upload Imagepackage"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Image Package \ud30c\uc77c \uc5c5\ub85c\ub4dc",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ASG210\uc758 Multi-Core \uc0ac\uc6a9 \uc2dc, 2\uac1c \uc774\uc0c1\uc758 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc \ud544\uc694(RTApp, HLApp)"))),Object(r.b)("li",{parentName:"ul"},"Ethernet\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \ubcc4\ub3c4\uc758 Board config image package \uc5c5\ub85c\ub4dc")),Object(r.b)("h3",{id:"3-create-a-deployment"},"3. Create a Deployment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0\uc758 \ubc30\ud3ec \uc0dd\uc131 "),Object(r.b)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ubc30\ud3ec\ub41c \uc774\ubbf8\uc9c0\uac00 \ub514\ubc14\uc774\uc2a4\ub85c \uc5c5\ub370\uc774\ud2b8")),Object(r.b)("h3",{id:"4-check-the-deployment"},"4. Check the Deployment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub9ac\uc2a4\ud2b8\ub97c \ud1b5\ud55c \ubc30\ud3ec \ud788\uc2a4\ud1a0\ub9ac \ud655\uc778")),Object(r.b)("h3",{id:"5-update-asg-device"},"5. Update ASG Device"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ASG210 \ub514\ubc14\uc774\uc2a4\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8 \uc9c4\ud589(\uc7a5\uce58\uac00 Cloud\uc5d0 \uc5f0\uacb0\ub41c \uc0c1\ud0dc\uc778\uc9c0 \ud655\uc778)",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"ASG210\uc774 \ud574\ub2f9 \uadf8\ub8f9\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uadf8\ub8f9\uc744 \uc124\uc815\ud558\uace0 ASG210\uc758 Restart\uc744 \uc218\ud589")))),Object(r.b)("h3",{id:"6-update-node-device"},"6. Update Node Device"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ASG210\uc5d0 \uc5f0\uacb0\ub41c WIZ750SR-Waton \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \uc5c5\ub370\uc774\ud2b8",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\uc5c5\ub370\uc774\ud2b8 \ubc29\ubc95\uc740 RTApp Image package \ucef4\ud30c\uc77c\ub7ec\uc2dc WIZ750SR-Waton\uc758 Firmware\ub97c \ud568\uaed8 \ucef4\ud30c\uc77c\ud55c\ub2e4.")))),Object(r.b)("h2",{id:"select-device-group"},"Select Device Group"),Object(r.b)("p",null,"FOTA \uccab\ubc88\uc9f8 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ud38c\uc6e8\uc5b4\ub97c \ubc30\ud3ec\ud560 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc744 \uc120\ud0dd\ud55c\ub2e4. ASG210 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0\ub294 \uc5ec\ub7ec\ub300\uc758 ASG210\uc744 \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\uc73c\uba70 FOTA \uc11c\ube44\uc2a4\ub294 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc744 \ud1b5\ud574 \ud55c\ubc88\uc5d0 \uadf8\ub8f9\uc5d0 \uc18d\ud55c \ubaa8\ub4e0 ASG210\uc758 \ud38c\uc6e8\uc5b4\ub97c \uc77c\uad04 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub2e4. \uac01\uac01\uc758 ASG210\uc740 \uc0ac\uc6a9\uc790 \uc124\uc815\uc5d0 \uc758\ud574 \ud558\ub098\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc18d\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ASG210\uc740 \ud558\ub098 \uc774\uc0c1\uc758 \uadf8\ub8f9\uc5d0 \uc18d\ud560 \uc218 \uc5c6\uc73c\uba70 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \uc124\uc815\ub41c \uadf8\ub8f9\uc5d0 \uc9c0\uc815\ub41c\ub2e4.")),Object(r.b)("img",{alt:"FOTA Step1",src:Object(b.a)("/img/asgdm/web-service-fota-step1.png")}),Object(r.b)("h2",{id:"upload-imagepackage"},"Upload Imagepackage"),Object(r.b)("p",null,"\uc120\ud0dd\ub41c AGS210\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \ubc30\ud3ec\ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc \ud55c\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc\uc2dc \uc774\ubbf8\uc9c0 \ubc30\ud3ec\uae4c\uc9c0 \ud55c\ubc88\uc5d0 \uc774\ub8e8\uc5b4 \uc9c4\ub2e4. \ub2e4\ub9cc, ",Object(r.b)("inlineCode",{parentName:"p"},"Just Upload selected file")," \uc635\uc158\uc744 \ud1b5\ud574 \uc5c5\ub85c\ub4dc \uc774\ud6c4 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ubc30\ud3ec\ud560 \uc218 \uc788\ub2e4. \ucd94\uac00\ub85c \ubc30\ud3ec \uc0dd\uc131 \uc2dc ",Object(r.b)("inlineCode",{parentName:"p"},"Image ID"),"\uc640 ",Object(r.b)("inlineCode",{parentName:"p"},"Component ID"),"\uac00 \ud544\uc694\ud558\ubbc0\ub85c \uc0ac\uc6a9\uc790\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc0dd\uc131\uc2dc, \uac01 Image ID \ubc0f Component ID\ub97c \uc800\uc7a5\ud558\uace0 \uc788\uc5b4\uc57c \ud55c\ub2e4."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub294 \uc774\ubbf8\uc9c0, \uadf8\ub9ac\uace0 \uc774\ubbf8\uc9c0\uc640 \uad00\ub828\ub41c \uba54\ud0c0\ub370\uc774\ud130\uac00 \uacb0\ud569\ub41c \ud328\ud0a4\uc9c0 \ud30c\uc77c\uc774\ub2e4. \ubc30\ud3ec \uc2dc \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud55c\ub2e4.")),Object(r.b)("img",{alt:"FOTA Step2",src:Object(b.a)("/img/asgdm/web-service-fota-step2.png")}),Object(r.b)("p",null,"<<<<<<< HEAD"),Object(r.b)("h3",{id:"image-id-\ubc0f-component-id-\ud655\uc778"},"Image ID \ubc0f Component ID \ud655\uc778"),Object(r.b)("h1",{id:"image-id\uc640-component-id-\ub294-asg210-application-\ube4c\ub4dc-\uacb0\uacfc-\ub85c\uadf8\uc5d0-\ud45c\uc2dc\ub418\uba70-\uc774\ubbf8-\uc0dd\uc131\ub41c-\uc774\ubbf8\uc9c0-\ud30c\uc77c\uc758-\uc815\ubcf4\ub97c-\ud655\uc778\ud558\uae30-\uc704\ud574\uc11c\ub294-azure-sphere-developer-command-prompt\uc5d0\uc11c-\uc544\ub798-\uba85\ub839\uc744-\uc218\ud589\ud55c\ub2e4"},"Image ID\uc640 Component ID \ub294 ASG210 Application \ube4c\ub4dc \uacb0\uacfc \ub85c\uadf8\uc5d0 \ud45c\uc2dc\ub418\uba70 \uc774\ubbf8 \uc0dd\uc131\ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c\ub294 ",Object(r.b)("inlineCode",{parentName:"h1"},"Azure Sphere Developer command prompt"),"\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc744 \uc218\ud589\ud55c\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"5. ASG \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ASG \ub514\ubc14\uc774\uc2a4\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc7a5\uce58\ub294 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\uc7a5\uce58\uac00 \uc120\ud0dd\ub41c \uadf8\ub8f9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba74 \uadf8\ub8f9\uc744 \uc124\uc815\ud558\uace0 Restart \uba85\ub839\uc744 \ubcf4\ub0c5\ub2c8\ub2e4.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"6. Node \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8 (\uc0ac\uc6a9 \uc2dc)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ASG210\uc5d0 \uc5f0\uacb0\ub41c Node \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ud604\uc7ac WIZ750SR \ub514\ubc14\uc774\uc2a4 \ud38c\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),Object(r.b)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uadf8\ub8f9-\uc120\ud0dd"},"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd"),Object(r.b)("p",null,"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc740 \ub3d9\uc77c\ud55c \uc81c\ud488 \uc720\ud615\uc758 \ub514\ubc14\uc774\uc2a4 \ubaa8\uc74c\uc785\ub2c8\ub2e4. \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc744 \uc9c0\uc815\ud558\uc5ec \uc5ec\ub7ec \ub514\ubc14\uc774\uc2a4\uc5d0 \ub3d9\uc77c\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc77c\uad04 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("p",null,"\uac01 \ub514\ubc14\uc774\uc2a4\ub294 \ud558\ub098\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc18d\ud558\uba70, \ud558\ub098\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc740 \ud558\ub098\uc758 \uc81c\ud488(Product)\uc5d0 \uc18d\ud569\ub2c8\ub2e4. "),Object(r.b)("h2",{id:"\uc774\ubbf8\uc9c0-\ud328\ud0a4\uc9c0-\uc5c5\ub85c\ub4dc"},"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub294 \uc774\ubbf8\uc9c0, \uadf8\ub9ac\uace0 \uc774\ubbf8\uc9c0\uc640 \uad00\ub828\ub41c \uba54\ud0c0\ub370\uc774\ud130\uac00 \uacb0\ud569\ub41c \ud328\ud0a4\uc9c0 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ubc30\ud3ec \uc2dc \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),Object(r.b)("p",null,"\ubc30\ud3ec\ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc5c5\ub85c\ub4dc \ud569\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\ubc30\ud3ec \uc0dd\uc131 \uc2dc \uc774\ubbf8\uc9c0 ID\uac00 \ud544\uc694"),"\ud558\ubbc0\ub85c, \uc0ac\uc6a9\uc790\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc0dd\uc131\ud560 \ub54c \uac01 \uc774\ubbf8\uc9c0\uc758 ID\ub97c \uba54\ubaa8\ud574 \ub450\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Image ID")),Object(r.b)("p",null,"\uc774\ubbf8\uc9c0 ID\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ube4c\ub4dc \uacb0\uacfc\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),Object(r.b)("p",null,"\uc774\ubbf8 \uc0dd\uc131\ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \uc815\ubcf4\ub97c \ubcf4\ub824\uba74 ",Object(r.b)("inlineCode",{parentName:"p"},"Azure Sphere Developer command prompt"),"\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc744 \ud1b5\ud574 \ud655\uc778\ud569\ub2c8\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"95e3c02a9e16ebdd661923f63205f6d10a5e7241")))))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"azsphere image-package show -f <file path>\n")),Object(r.b)("p",null,"<<<<<<< HEAD"),Object(r.b)("h1",{id:"img-altfota-prompt-srcusebaseurlimgasgdmweb-service-fota-step2-promptpng-"},Object(r.b)("img",{alt:"FOTA Prompt",src:Object(b.a)("/img/asgdm/web-service-fota-step2-prompt.png")})),Object(r.b)("p",null,"\uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599800286024_image.png",alt:null})),Object(r.b)("h2",{id:"\ubc30\ud3ec-\uc0dd\uc131"},"\ubc30\ud3ec \uc0dd\uc131"),Object(r.b)("p",null,"\ubc30\ud3ec(Deployment)\ub780 \ub514\ubc14\uc774\uc2a4\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc138\ud2b8\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),Object(r.b)("p",null,"\uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud558\ub098\uc758 \ubc30\ud3ec\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),Object(r.b)("p",null,"\ubc30\ud3ec\uc5d0 \ud3ec\ud568\uc2dc\ud0ac \uc774\ubbf8\uc9c0 ID\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),Object(r.b)("p",null,"Azure Sphere\uc758 \ubc30\ud3ec\uc5d0\ub294 \uc774\ubbf8\uc9c0\ub97c 4\uac1c\uae4c\uc9c0 \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"High-level app (for A7 core)"),Object(r.b)("li",{parentName:"ul"},"Real-time app 1 (for M4 core 1)"),Object(r.b)("li",{parentName:"ul"},"Real-time app 2 (for M4 core 2)"),Object(r.b)("li",{parentName:"ul"},"Board configuration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ethernet \uc0ac\uc6a9 \uc2dc \ud544\uc694")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"ASG210\uc758 2 port ethernet application\uc740 A7 \ubc0f M4 core\uc640 Ethernet \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c \ucd1d 3\uac1c\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud574 \ubc30\ud3ec\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Create Deployment")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ubc30\ud3ec\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(r.b)("h2",{id:"\ubc30\ud3ec-\ub9ac\uc2a4\ud2b8-\ud655\uc778"},"\ubc30\ud3ec \ub9ac\uc2a4\ud2b8 \ud655\uc778"),Object(r.b)("p",null,"\uc0dd\uc131\ub41c \ubc30\ud3ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"95e3c02a9e16ebdd661923f63205f6d10a5e7241")))))))),Object(r.b)("h2",{id:"create-a-deployment"},"Create a Deployment"),Object(r.b)("p",null,"\ubc30\ud3ec(Deployment)\ub780 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc138\ud2b8\ub97c \uc758\ubbf8\ud558\uba70 Upload Imagepackage \ub2e8\uacc4\uc5d0\uc11c \uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub4e4\uc744 \ubb36\uc5b4\uc11c \ubc30\ud3ec\ud55c\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc5c5\ub85c\ub4dc\ud55c Image Package \ud30c\uc77c\uacfc \ub9e4\uce6d\ub418\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"Image ID"),"\ub97c \uc785\ub825\ud558\uace0 ",Object(r.b)("inlineCode",{parentName:"p"},"Create Deployment")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ubc30\ud3ec\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Azure Sphere\ub294 \ubc30\ud3ec\uc2dc \ucd5c\ub300 4\uac1c\uc758 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\ub2e4."),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"High-level app (for A7 core)"),Object(r.b)("li",{parentName:"ul"},"Real-time app 1 (for M4 core 1)"),Object(r.b)("li",{parentName:"ul"},"Real-time app 2 (for M4 core 2)"),Object(r.b)("li",{parentName:"ul"},"Board configuration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ethernet \uc0ac\uc6a9 \uc2dc \ud544\uc694"))))),Object(r.b)("img",{alt:"FOTA Step3",src:Object(b.a)("/img/asgdm/web-service-fota-step3.png")}),Object(r.b)("h2",{id:"check-the-deployment"},"Check the Deployment"),Object(r.b)("p",null,"\uc0ac\uc6a9\uc790\ub294 \uc9c0\uae08\uae4c\uc9c0 \ud574\ub2f9 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \ubc30\ud3ec\ub41c \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc815\ubcf4 \ubc0f \uc2dc\uac04 \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Deployment Id: \ubc30\ud3ec\uc758 \uace0\uc720 ID\uc785\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Deployed Images: \ubc30\ud3ec\uc5d0 \ud3ec\ud568\ub41c \uc774\ubbf8\uc9c0 \ub9ac\uc2a4\ud2b8\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"Deployment Date: \ubc30\ud3ec\uac00 \uc0dd\uc131\ub41c \uc2dc\uac04\uc785\ub2c8\ub2e4."))),Object(r.b)("img",{alt:"FOTA Step4",src:Object(b.a)("/img/asgdm/web-service-fota-step4.png")}),Object(r.b)("h2",{id:"update-asg-device"},"Update ASG Device"),Object(r.b)("p",null,"\uc120\ud0dd\ud55c \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \ubc30\ud3ec\uac00 \uc644\ub8cc\ub418\uba74 MS AS3 \uc11c\ube44\uc2a4\uc5d0 \uc758\ud574 \uc790\ub3d9\uc801\uc73c\ub85c \ud574\ub2f9 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc18d\ud55c ASG210\uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"24\uc2dc\uac04 \uc774\ub0b4"),"\uc5d0 \ubc30\ud3ec\ub41c Firmware\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub2e4. \uadf8\ub7ec\ub098 \uc0ac\uc6a9\uc790\uac00 \uc989\uc2dc \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"Update ASG Device")," \ub2e8\uacc4\uc5d0\uc11c \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc758 ASG210\uc744 \uc120\ud0dd\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8 \uc2dc\uac04\uc5d0 \uc0c1\uad00\uc5c6\uc774 ",Object(r.b)("inlineCode",{parentName:"p"},"Firmware\ub97c \uc989\uc2dc \uc5c5\ub370\uc774\ud2b8"),"\ud560 \uc218 \uc788\ub2e4. \uc774 \uacbd\uc6b0, \ub514\ubc14\uc774\uc2a4\uac00 \uc0c8 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\uae30 \uc704\ud574\uc11c\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud"),"\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc5b4\uc57c \ud55c\ub2e4."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\uae30\ubcf8\uc801\uc73c\ub85c \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc774\ubbf8\uc9c0\ub97c \ubc30\ud3ec\ud558\uba74 \ud574\ub2f9 \uadf8\ub8f9\uc758 ASG210\uc740 24\uc2dc\uac04 \uc774\ub0b4\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub41c\ub2e4.")),Object(r.b)("img",{alt:"FOTA Step5",src:Object(b.a)("/img/asgdm/web-service-fota-step5.png")}),Object(r.b)("h2",{id:"update-node-device"},"Update Node Device"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Update ASG Device"),"\uc5d0\uc11c \uc120\ud0dd\ub41c ASG210\uacfc \uc5f0\uacb0\ub41c WIZ750SR-Waton(Node)\uc758 \ud38c\uc6e8\uc5b4 \ubc84\uc804\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c\uc758  \uc5c5\ub370\uc774\ud2b8\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\ub2e4. ",Object(r.b)("inlineCode",{parentName:"p"},"Current Version"),"\uc740 \ud604\uc7ac WIZ750SR-Waton\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ud38c\uc6e8\uc5b4\uc758 \ubc84\uc804\uc744 \ub098\ud0c0\ub0b4\uace0 ",Object(r.b)("inlineCode",{parentName:"p"},"Available Version"),"\uc740 MS AS3\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub41c WIZ750SR-Waton\uc758 \ubc84\uc804\uc744 \ub098\ud0c0\ub0b8\ub2e4. Available Version\uc774 Current Version\ubcf4\ub2e4 \uc0c1\uc704 \ubc84\uc804\uc77c \uacbd\uc6b0 \uc0ac\uc6a9\uc790\ub294 WIZ750SR-Waton\uc758 \ud38c\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud560 \uc218 \uc788\ub2e4."),Object(r.b)("img",{alt:"FOTA Step6",src:Object(b.a)("/img/asgdm/web-service-fota-step6.png")}))}d.isMDXComponent=!0}}]);