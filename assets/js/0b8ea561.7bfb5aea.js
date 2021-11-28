"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4792],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8202:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],p={},l=void 0,c={unversionedId:"JavaScript\u9762\u8bd5\u9898/Promise",id:"JavaScript\u9762\u8bd5\u9898/Promise",isDocsHomePage:!1,title:"Promise",description:"Promise \u5bf9\u8c61\u7528\u4e8e\u8868\u793a\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u6700\u7ec8\u5b8c\u6210 (\u6216\u5931\u8d25)\u53ca\u5176\u7ed3\u679c\u503c\u3002",source:"@site/docs/JavaScript\u9762\u8bd5\u9898/Promise.md",sourceDirName:"JavaScript\u9762\u8bd5\u9898",slug:"/JavaScript\u9762\u8bd5\u9898/Promise",permalink:"/docusauras-blog-client/docs/JavaScript\u9762\u8bd5\u9898/Promise",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/JavaScript\u9762\u8bd5\u9898/Promise.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Loop",permalink:"/docusauras-blog-client/docs/JavaScript\u9762\u8bd5\u9898/Event Loop"},next:{title:"async,await,Promise",permalink:"/docusauras-blog-client/docs/JavaScript\u9762\u8bd5\u9898/async,await,Promise"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[],level:2},{value:"Promise()\u6784\u9020\u5668",id:"promise\u6784\u9020\u5668",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Promise")," \u5bf9\u8c61\u7528\u4e8e\u8868\u793a\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u6700\u7ec8\u5b8c\u6210 (\u6216\u5931\u8d25)\u53ca\u5176\u7ed3\u679c\u503c\u3002"),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," \u5fc5\u7136\u5904\u4e8e\u4ee5\u4e0b\u51e0\u79cd\u72b6\u6001\u4e4b\u4e00\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u5f85\u5b9a\uff08pending\uff09"),": \u521d\u59cb\u72b6\u6001\uff0c\u65e2\u6ca1\u6709\u88ab\u5151\u73b0\uff0c\u4e5f\u6ca1\u6709\u88ab\u62d2\u7edd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u5df2\u5151\u73b0\uff08fulfilled\uff09"),": \u610f\u5473\u7740\u64cd\u4f5c\u6210\u529f\u5b8c\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u5df2\u62d2\u7edd\uff08rejected\uff09"),": \u610f\u5473\u7740\u64cd\u4f5c\u5931\u8d25\u3002")),(0,i.kt)("p",null,"\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.prototype.then")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.prototype.catch")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f promise\uff0c \u6240\u4ee5\u5b83\u4eec\u53ef\u4ee5\u88ab\u94fe\u5f0f\u8c03\u7528\u3002"),(0,i.kt)("h2",{id:"promise\u6784\u9020\u5668"},"Promise()\u6784\u9020\u5668"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Promise"))," \u6784\u9020\u5668\u4e3b\u8981\u7528\u4e8e\u5305\u88c5\u4e0d\u652f\u6301promise\uff08\u8fd4\u56de\u503c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff09\u7684\u51fd\u6570\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"executor")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u53cc\u53c2\u51fd\u6570\uff0c\u53c2\u6570\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"resolve\u548creject"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\u7684\u5b9e\u73b0\u4f1a\u7acb\u5373\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\uff0c\u5e76\u4f20\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"resolve\u548creject"),"\u51fd\u6570\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"\u6784\u9020\u5668\u5c06\u4f1a\u5728\u8fd4\u56de\u65b0\u5bf9\u8c61\u4e4b\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\uff09\u3002\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"resolve"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),"\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u5b83\u4eec\u5206\u522b\u5bf9promise\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"resolve"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\u901a\u5e38\u4f1a\u89e6\u53d1\u4e00\u4e9b\u5f02\u6b65\u8fd0\u7b97\uff0c\u4e00\u65e6\u8fd0\u7b97\u6210\u529f\u5b8c\u6210\uff0c\u5219",(0,i.kt)("inlineCode",{parentName:"p"},"resolve"),"\u6389\u8fd9\u4e2apromise\uff0c\u5982\u679c\u51fa\u9519\u5219",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),"\u6389\u3002\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\u51fd\u6570\u6267\u884c\u65f6\u629b\u51fa\u5f02\u5e38\uff0cpromise\u72b6\u6001\u4f1a\u53d8\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"rejected"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\u7684\u8fd4\u56de\u503c\u4e5f\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tips")),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u521b\u5efaPromise\u5bf9\u8c61\u91cc\u7684\u4ee3\u7801\u662f\u540c\u6b65\u7684\uff0c\u4e0d\u662f\u5f02\u6b65\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise = new Promise((resolve, reject) => {\n  console.log("\u6b64\u5904\u4ee3\u7801\u662f\u540c\u6b65\u7684\uff0c\u4e0d\u662f\u5f02\u6b65\u7684");            \n  resolve("OK");\n  reject("Error");\n});\n\npromise\n  .then((value) => {\n    console.log(value);     //\u8fd9\u4e9b\u624d\u662f\u5f02\u6b65\u7684\uff0c\u5e76\u4e14\u662f\u5fae\u4efb\u52a1\n  })\n  .catch((e) => {\n    console.log(e);\n  });\n')))}m.isMDXComponent=!0}}]);