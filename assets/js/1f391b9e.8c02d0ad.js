(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3085],{7979:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),a=r(6010),l=r(341),o=r(3905),c=r(4159),s=r(571),i=r(9306),m="mdxPageWrapper_3qD3";var u=function(e){var t=e.content,r=t.frontMatter,u=t.metadata,f=r.title,d=r.description,v=r.wrapperClassName,E=r.hide_table_of_contents,_=u.permalink;return n.createElement(l.Z,{title:f,description:d,permalink:_,wrapperClassName:null!=v?v:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,a.Z)("row",m)},n.createElement("div",{className:(0,a.Z)("col",!E&&"col--8")},n.createElement(o.Zo,{components:c.Z},n.createElement(t,null))),!E&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(s.Z,{toc:t.toc})))))}},571:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010);var l=function(e,t,r){var a=(0,n.useState)(void 0),l=a[0],o=a[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=r}));if(t){if(t.getBoundingClientRect().top>=r){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var a=0,c=!1,s=document.getElementsByClassName(e);a<s.length&&!c;){var i=s[a],m=i.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),i.classList.add(t),o(i),c=!0),a+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},o="tableOfContents_35-E",c="table-of-contents__link";function s(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),n.createElement("div",{className:(0,a.Z)(o,"thin-scrollbar")},n.createElement(s,{toc:t}))}},6197:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(2122),a=r(9756),l=r(7294),o=r(6010),c=r(6742),s=r(9306),i=r(4996),m=r(3919),u="footerLogoLink_qW4Z",f=r(8465),d=r(8617),v=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,u=(0,a.Z)(e,v),f=(0,i.Z)(t),E=(0,i.Z)(r,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,n.Z)({className:"footer__link-item"},r?{href:s?E:r}:{to:f},u),r&&!(0,m.Z)(r)?l.createElement("span",null,o,l.createElement(d.Z,null)):o)}var _=function(e){var t=e.sources,r=e.alt;return l.createElement(f.Z,{className:"footer__logo",alt:r,sources:t})};var p=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,n=t.links,a=void 0===n?[]:n,m=t.logo,f=void 0===m?{}:m,d={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},a&&a.length>0&&l.createElement("div",{className:"row footer__links"},a.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(f||r)&&l.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},f.href?l.createElement(c.Z,{href:f.href,className:u},l.createElement(_,{alt:f.alt,sources:d})):l.createElement(_,{alt:f.alt,sources:d})),r?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);