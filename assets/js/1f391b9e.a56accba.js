(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{119:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(106);var c=function(e,t,n){var r=Object(a.useState)(void 0),l=r[0],c=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var i=o[r],m=i.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===d&&(l&&l.classList.remove(t),i.classList.add(t),c(i),s=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},s=n(57),o=n.n(s),i="table-of-contents__link";function m(e){var t=e.toc,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:t}))}},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(112),c=n(105),s=n(118),o=n(119),i=n(104);t.default=function(e){var t=e.content,n=t.frontMatter,a=t.metadata,m=n.title,d=n.description,u=n.wrapperClassName,f=n.hide_table_of_contents,v=a.permalink;return r.a.createElement(l.a,{title:m,description:d,permalink:v,wrapperClassName:null!=u?u:i.ThemeClassNames.wrapper.mdxPages,pageClassName:i.ThemeClassNames.page.mdxPage},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{components:s.a},r.a.createElement(t,null)))),!f&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{toc:t.toc})))))))}}}]);