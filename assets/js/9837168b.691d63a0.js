(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7178],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),v=a,d=m["".concat(i,".").concat(v)]||m[v]||s[v]||l;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),u=["components"],o={},i=void 0,c={unversionedId:"vue/\u6307\u4ee4",id:"vue/\u6307\u4ee4",isDocsHomePage:!1,title:"\u6307\u4ee4",description:"\u6307\u4ee4 (Directives) \u662f\u5e26\u6709 v- \u524d\u7f00\u7684\u7279\u6b8a attribute\u3002\u6307\u4ee4 attribute \u7684\u503c\u9884\u671f\u662f\u5355\u4e2a JavaScript \u8868\u8fbe\u5f0f (v-for \u662f\u4f8b\u5916\u60c5\u51b5\uff0c\u7a0d\u540e\u6211\u4eec\u518d\u8ba8\u8bba)\u3002\u6307\u4ee4\u7684\u804c\u8d23\u662f\uff0c\u5f53\u8868\u8fbe\u5f0f\u7684\u503c\u6539\u53d8\u65f6\uff0c\u5c06\u5176\u4ea7\u751f\u7684\u8fde\u5e26\u5f71\u54cd\uff0c\u54cd\u5e94\u5f0f\u5730\u4f5c\u7528\u4e8e DOM\u3002\u56de\u987e\u6211\u4eec\u5728\u4ecb\u7ecd\u4e2d\u770b\u5230\u7684\u4f8b\u5b50\uff1a",source:"@site/docs/vue/\u6307\u4ee4.md",sourceDirName:"vue",slug:"/vue/\u6307\u4ee4",permalink:"/docusauras-blog-client/docs/vue/\u6307\u4ee4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/vue/\u6307\u4ee4.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5217\u8868\u6e32\u67d3",permalink:"/docusauras-blog-client/docs/vue/\u5217\u8868\u6e32\u67d3"},next:{title:"\u6761\u4ef6\u6e32\u67d3",permalink:"/docusauras-blog-client/docs/vue/\u6761\u4ef6\u6e32\u67d3"}},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u52a8\u6001\u53c2\u6570",id:"\u52a8\u6001\u53c2\u6570",children:[{value:"\u5bf9\u52a8\u6001\u53c2\u6570\u7684\u503c\u7684\u7ea6\u675f",id:"\u5bf9\u52a8\u6001\u53c2\u6570\u7684\u503c\u7684\u7ea6\u675f",children:[]},{value:"\u5bf9\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u7ea6\u675f",id:"\u5bf9\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u7ea6\u675f",children:[]}]},{value:"\u4fee\u9970\u7b26",id:"\u4fee\u9970\u7b26",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6307\u4ee4 (Directives) \u662f\u5e26\u6709 v- \u524d\u7f00\u7684\u7279\u6b8a attribute\u3002\u6307\u4ee4 attribute \u7684\u503c\u9884\u671f\u662f\u5355\u4e2a JavaScript \u8868\u8fbe\u5f0f (v-for \u662f\u4f8b\u5916\u60c5\u51b5\uff0c\u7a0d\u540e\u6211\u4eec\u518d\u8ba8\u8bba)\u3002\u6307\u4ee4\u7684\u804c\u8d23\u662f\uff0c\u5f53\u8868\u8fbe\u5f0f\u7684\u503c\u6539\u53d8\u65f6\uff0c\u5c06\u5176\u4ea7\u751f\u7684\u8fde\u5e26\u5f71\u54cd\uff0c\u54cd\u5e94\u5f0f\u5730\u4f5c\u7528\u4e8e DOM\u3002\u56de\u987e\u6211\u4eec\u5728\u4ecb\u7ecd\u4e2d\u770b\u5230\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<p v-if="seen">\u73b0\u5728\u4f60\u770b\u5230\u6211\u4e86</p>\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0cv-if \u6307\u4ee4\u5c06\u6839\u636e\u8868\u8fbe\u5f0f seen \u7684\u503c\u7684\u771f\u5047\u6765\u63d2\u5165/\u79fb\u9664 p \u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,"\u4e00\u4e9b\u6307\u4ee4\u80fd\u591f\u63a5\u6536\u4e00\u4e2a\u201c\u53c2\u6570\u201d\uff0c\u5728\u6307\u4ee4\u540d\u79f0\u4e4b\u540e\u4ee5\u5192\u53f7\u8868\u793a\u3002\u4f8b\u5982\uff0cv-bind \u6307\u4ee4\u53ef\u4ee5\u7528\u4e8e\u54cd\u5e94\u5f0f\u5730\u66f4\u65b0 HTML attribute\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<a v-bind:href="url">...</a>\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc href \u662f\u53c2\u6570\uff0c\u544a\u77e5 v-bind \u6307\u4ee4\u5c06\u8be5\u5143\u7d20\u7684 href attribute \u4e0e\u8868\u8fbe\u5f0f url \u7684\u503c\u7ed1\u5b9a\u3002"),(0,l.kt)("p",null,"\u5bf9\u6bd4React\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f v-on \u6307\u4ee4\uff0c\u5b83\u7528\u4e8e\u76d1\u542c DOM \u4e8b\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<a v-on:click="doSomething">...</a>\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u53c2\u6570\u662f\u76d1\u542c\u7684\u4e8b\u4ef6\u540d\u3002\u6211\u4eec\u4e5f\u4f1a\u66f4\u8be6\u7ec6\u5730\u8ba8\u8bba\u4e8b\u4ef6\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u5bf9\u6bd4React\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,l.kt)("h2",{id:"\u52a8\u6001\u53c2\u6570"},"\u52a8\u6001\u53c2\u6570"),(0,l.kt)("p",null,"\u4ece 2.6.0 \u5f00\u59cb\uff0c\u53ef\u4ee5\u7528\u65b9\u62ec\u53f7\u62ec\u8d77\u6765\u7684 JavaScript \u8868\u8fbe\u5f0f\u4f5c\u4e3a\u4e00\u4e2a\u6307\u4ee4\u7684\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'\x3c!--\n\u6ce8\u610f\uff0c\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u5199\u6cd5\u5b58\u5728\u4e00\u4e9b\u7ea6\u675f\uff0c\u5982\u4e4b\u540e\u7684\u201c\u5bf9\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u7ea6\u675f\u201d\u7ae0\u8282\u6240\u8ff0\u3002\n--\x3e\n<a v-bind:[attributeName]="url"> ... </a>\n')),(0,l.kt)("p",null,'\u8fd9\u91cc\u7684 attributeName \u4f1a\u88ab\u4f5c\u4e3a\u4e00\u4e2a JavaScript \u8868\u8fbe\u5f0f\u8fdb\u884c\u52a8\u6001\u6c42\u503c\uff0c\u6c42\u5f97\u7684\u503c\u5c06\u4f1a\u4f5c\u4e3a\u6700\u7ec8\u7684\u53c2\u6570\u6765\u4f7f\u7528\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684 Vue \u5b9e\u4f8b\u6709\u4e00\u4e2a data property attributeName\uff0c\u5176\u503c\u4e3a "href"\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7ed1\u5b9a\u5c06\u7b49\u4ef7\u4e8e ',(0,l.kt)("inlineCode",{parentName:"p"},"v-bind:href"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u6bd4React\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,l.kt)("p",null,"\u540c\u6837\u5730\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u53c2\u6570\u4e3a\u4e00\u4e2a\u52a8\u6001\u7684\u4e8b\u4ef6\u540d\u7ed1\u5b9a\u5904\u7406\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<a v-on:[eventName]="doSomething"> ... </a>\n')),(0,l.kt)("p",null,'\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u5f53 eventName \u7684\u503c\u4e3a "focus" \u65f6\uff0c',(0,l.kt)("inlineCode",{parentName:"p"},"v-on:[eventName] "),"\t\u5c06\u7b49\u4ef7\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"}," v-on:focus"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,l.kt)("h3",{id:"\u5bf9\u52a8\u6001\u53c2\u6570\u7684\u503c\u7684\u7ea6\u675f"},"\u5bf9\u52a8\u6001\u53c2\u6570\u7684\u503c\u7684\u7ea6\u675f"),(0,l.kt)("p",null,"\u52a8\u6001\u53c2\u6570\u9884\u671f\u4f1a\u6c42\u51fa\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5f02\u5e38\u60c5\u51b5\u4e0b\u503c\u4e3a null\u3002\u8fd9\u4e2a\u7279\u6b8a\u7684 null \u503c\u53ef\u4ee5\u88ab\u663e\u6027\u5730\u7528\u4e8e\u79fb\u9664\u7ed1\u5b9a\u3002\u4efb\u4f55\u5176\u5b83\u975e\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u503c\u90fd\u5c06\u4f1a\u89e6\u53d1\u4e00\u4e2a\u8b66\u544a\u3002"),(0,l.kt)("h3",{id:"\u5bf9\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u7ea6\u675f"},"\u5bf9\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u7684\u7ea6\u675f"),(0,l.kt)("p",null,"\u52a8\u6001\u53c2\u6570\u8868\u8fbe\u5f0f\u6709\u4e00\u4e9b\u8bed\u6cd5\u7ea6\u675f\uff0c\u56e0\u4e3a\u67d0\u4e9b\u5b57\u7b26\uff0c\u5982\u7a7a\u683c\u548c\u5f15\u53f7\uff0c\u653e\u5728 HTML attribute \u540d\u91cc\u662f\u65e0\u6548\u7684\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"\x3c!-- \u8fd9\u4f1a\u89e6\u53d1\u4e00\u4e2a\u7f16\u8bd1\u8b66\u544a --\x3e\n<a v-bind:['foo' + bar]=\"value\"> ... </a>\n")),(0,l.kt)("p",null,"\u53d8\u901a\u7684\u529e\u6cd5\u662f\u4f7f\u7528\u6ca1\u6709\u7a7a\u683c\u6216\u5f15\u53f7\u7684\u8868\u8fbe\u5f0f\uff0c\u6216\u7528\u8ba1\u7b97\u5c5e\u6027\u66ff\u4ee3\u8fd9\u79cd\u590d\u6742\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("p",null,"\u5728 DOM \u4e2d\u4f7f\u7528\u6a21\u677f\u65f6 (\u76f4\u63a5\u5728\u4e00\u4e2a HTML \u6587\u4ef6\u91cc\u64b0\u5199\u6a21\u677f)\uff0c\u8fd8\u9700\u8981\u907f\u514d\u4f7f\u7528\u5927\u5199\u5b57\u7b26\u6765\u547d\u540d\u952e\u540d\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u4f1a\u628a attribute \u540d\u5168\u90e8\u5f3a\u5236\u8f6c\u4e3a\u5c0f\u5199\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'\x3c!--\n\u5728 DOM \u4e2d\u4f7f\u7528\u6a21\u677f\u65f6\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u88ab\u8f6c\u6362\u4e3a `v-bind:[someattr]`\u3002\n\u9664\u975e\u5728\u5b9e\u4f8b\u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a\u201csomeattr\u201d\u7684 property\uff0c\u5426\u5219\u4ee3\u7801\u4e0d\u4f1a\u5de5\u4f5c\u3002\n--\x3e\n<a v-bind:[someAttr]="value"> ... </a>\n')),(0,l.kt)("h2",{id:"\u4fee\u9970\u7b26"},"\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u4fee\u9970\u7b26 (modifier) \u662f\u4ee5\u534a\u89d2\u53e5\u53f7 . \u6307\u660e\u7684\u7279\u6b8a\u540e\u7f00\uff0c\u7528\u4e8e\u6307\u51fa\u4e00\u4e2a\u6307\u4ee4\u5e94\u8be5\u4ee5\u7279\u6b8a\u65b9\u5f0f\u7ed1\u5b9a\u3002\u4f8b\u5982\uff0c.prevent \u4fee\u9970\u7b26\u544a\u8bc9 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-on")," \u6307\u4ee4\u5bf9\u4e8e\u89e6\u53d1\u7684\u4e8b\u4ef6\u8c03\u7528 event.preventDefault()\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<form v-on:submit.prevent="onSubmit">...</form>\n')))}m.isMDXComponent=!0}}]);