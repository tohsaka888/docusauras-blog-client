"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4126],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8130:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],s={},i=void 0,l={unversionedId:"less/\u4f5c\u7528\u57df",id:"less/\u4f5c\u7528\u57df",isDocsHomePage:!1,title:"\u4f5c\u7528\u57df",description:"Less \u4e2d\u7684\u4f5c\u7528\u57df\u4e0e CSS \u4e2d\u7684\u4f5c\u7528\u57df\u975e\u5e38\u7c7b\u4f3c\u3002\u9996\u5148\u5728\u672c\u5730\u67e5\u627e\u53d8\u91cf\u548c\u6df7\u5408\uff08mixins\uff09\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u4ece\u201c\u7236\u201d\u7ea7\u4f5c\u7528\u57df\u7ee7\u627f\u3002",source:"@site/docs/less/\u4f5c\u7528\u57df.md",sourceDirName:"less",slug:"/less/\u4f5c\u7528\u57df",permalink:"/docusauras-blog-client/docs/less/\u4f5c\u7528\u57df",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/less/\u4f5c\u7528\u57df.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"express",permalink:"/docusauras-blog-client/docs/express/express"},next:{title:"\u51fd\u6570",permalink:"/docusauras-blog-client/docs/less/\u51fd\u6570"}},u=[],p={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Less \u4e2d\u7684\u4f5c\u7528\u57df\u4e0e CSS \u4e2d\u7684\u4f5c\u7528\u57df\u975e\u5e38\u7c7b\u4f3c\u3002\u9996\u5148\u5728\u672c\u5730\u67e5\u627e\u53d8\u91cf\u548c\u6df7\u5408\uff08mixins\uff09\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u4ece\u201c\u7236\u201d\u7ea7\u4f5c\u7528\u57df\u7ee7\u627f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-less"},"@var: red;\n\n#page {\n  @var: white;\n  #header {\n    color: @var; // white\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0e CSS \u81ea\u5b9a\u4e49\u5c5e\u6027\u4e00\u6837\uff0c\u6df7\u5408\uff08mixin\uff09\u548c\u53d8\u91cf\u7684\u5b9a\u4e49\u4e0d\u5fc5\u5728\u5f15\u7528\u4e4b\u524d\u4e8b\u5148\u5b9a\u4e49\u3002\u56e0\u6b64\uff0c\u4e0b\u9762\u7684 Less \u4ee3\u7801\u793a\u4f8b\u548c\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u662f\u76f8\u540c\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-less"},"@var: red;\n\n#page {\n  #header {\n    color: @var; // white\n  }\n  @var: white;\n}\n")))}f.isMDXComponent=!0}}]);