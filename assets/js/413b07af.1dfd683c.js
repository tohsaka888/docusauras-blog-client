"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[700],{3905:function(e,n,t){t.d(n,{Zo:function(){return v},kt:function(){return s}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},v=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,v=p(e,["components","mdxType","originalType","parentName"]),m=u(t),s=r,c=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return t?a.createElement(c,i(i({ref:n},v),{},{components:t})):a.createElement(c,i({ref:n},v))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2472:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return v},default:function(){return m}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),i=["components"],p={},o=void 0,u={unversionedId:"vue/\u6761\u4ef6\u6e32\u67d3",id:"vue/\u6761\u4ef6\u6e32\u67d3",isDocsHomePage:!1,title:"\u6761\u4ef6\u6e32\u67d3",description:"v-if",source:"@site/docs/vue/\u6761\u4ef6\u6e32\u67d3.md",sourceDirName:"vue",slug:"/vue/\u6761\u4ef6\u6e32\u67d3",permalink:"/docusauras-blog-client/docs/vue/\u6761\u4ef6\u6e32\u67d3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/vue/\u6761\u4ef6\u6e32\u67d3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6307\u4ee4",permalink:"/docusauras-blog-client/docs/vue/\u6307\u4ee4"},next:{title:"\u6a21\u677f\u8bed\u6cd5",permalink:"/docusauras-blog-client/docs/vue/\u6a21\u677f\u8bed\u6cd5"}},v=[{value:"<code>v-if</code>",id:"v-if",children:[],level:2},{value:"\u5728template\u5143\u7d20\u4e0a\u4f7f\u7528<code>v-if</code>\u6761\u4ef6\u6e32\u67d3\u5206\u7ec4",id:"\u5728template\u5143\u7d20\u4e0a\u4f7f\u7528v-if\u6761\u4ef6\u6e32\u67d3\u5206\u7ec4",children:[],level:2},{value:"<code>v-else</code>",id:"v-else",children:[],level:2},{value:"v-else-if",id:"v-else-if",children:[],level:2},{value:"\u7528 key \u7ba1\u7406\u53ef\u590d\u7528\u7684\u5143\u7d20",id:"\u7528-key-\u7ba1\u7406\u53ef\u590d\u7528\u7684\u5143\u7d20",children:[],level:2},{value:"<code>v-show</code>",id:"v-show",children:[],level:2},{value:"v-if \u4e0e v-for \u4e00\u8d77\u4f7f\u7528",id:"v-if-\u4e0e-v-for-\u4e00\u8d77\u4f7f\u7528",children:[],level:2}],d={toc:v};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"v-if"},(0,l.kt)("inlineCode",{parentName:"h2"},"v-if")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u6307\u4ee4\u7528\u4e8e\u6761\u4ef6\u6027\u5730\u6e32\u67d3\u4e00\u5757\u5185\u5bb9\u3002\u8fd9\u5757\u5185\u5bb9\u53ea\u4f1a\u5728\u6307\u4ee4\u7684\u8868\u8fbe\u5f0f\u8fd4\u56de truthy \u503c\u7684\u65f6\u5019\u88ab\u6e32\u67d3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<h1 v-if="awesome">Vue is awesome!</h1>\n')),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-else")," \u6dfb\u52a0\u4e00\u4e2a\u201celse \u5757\u201d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<h1 v-if="awesome">Vue is awesome!</h1>\n<h1 v-else>Oh no \ud83d\ude22</h1>\n')),(0,l.kt)("h2",{id:"\u5728template\u5143\u7d20\u4e0a\u4f7f\u7528v-if\u6761\u4ef6\u6e32\u67d3\u5206\u7ec4"},"\u5728template\u5143\u7d20\u4e0a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"v-if"),"\u6761\u4ef6\u6e32\u67d3\u5206\u7ec4"),(0,l.kt)("p",null,"\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u662f\u4e00\u4e2a\u6307\u4ee4\uff0c\u6240\u4ee5\u5fc5\u987b\u5c06\u5b83\u6dfb\u52a0\u5230\u4e00\u4e2a\u5143\u7d20\u4e0a\u3002\u4f46\u662f\u5982\u679c\u60f3\u5207\u6362\u591a\u4e2a\u5143\u7d20\u5462\uff1f\u6b64\u65f6\u53ef\u4ee5\u628a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"<template>")," \u5143\u7d20\u5f53\u505a\u4e0d\u53ef\u89c1\u7684\u5305\u88f9\u5143\u7d20\uff0c\u5e76\u5728\u4e0a\u9762\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if"),"\u3002\u6700\u7ec8\u7684\u6e32\u67d3\u7ed3\u679c\u5c06\u4e0d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"<template>")," \u5143\u7d20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template v-if="ok">\n  <h1>Title</h1>\n  <p>Paragraph 1</p>\n  <p>Paragraph 2</p>\n</template>\n')),(0,l.kt)("h2",{id:"v-else"},(0,l.kt)("inlineCode",{parentName:"h2"},"v-else")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-else")," \u6307\u4ee4\u6765\u8868\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u7684\u201celse \u5757\u201d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<div v-if="Math.random() > 0.5">\n  Now you see me\n</div>\n<div v-else>\n  Now you don\'t\n</div>\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v-else")," \u5143\u7d20\u5fc5\u987b",(0,l.kt)("strong",{parentName:"p"},"\u7d27\u8ddf"),"\u5728\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-else-if")," \u7684\u5143\u7d20\u7684\u540e\u9762\uff0c\u5426\u5219\u5b83\u5c06\u4e0d\u4f1a\u88ab\u8bc6\u522b\u3002"),(0,l.kt)("h2",{id:"v-else-if"},(0,l.kt)("a",{parentName:"h2",href:"https://cn.vuejs.org/v2/guide/conditional.html#v-else-if"},(0,l.kt)("inlineCode",{parentName:"a"},"v-else-if"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v-else-if"),"\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5145\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u7684\u201celse-if \u5757\u201d\uff0c\u53ef\u4ee5\u8fde\u7eed\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"<div v-if=\"type === 'A'\">\n  A\n</div>\n<div v-else-if=\"type === 'B'\">\n  B\n</div>\n<div v-else-if=\"type === 'C'\">\n  C\n</div>\n<div v-else>\n  Not A/B/C\n</div>\n")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"v-else"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v-else-if")," \u4e5f\u5fc5\u987b",(0,l.kt)("strong",{parentName:"p"},"\u7d27\u8ddf"),"\u5728\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-else-if")," \u7684\u5143\u7d20\u4e4b\u540e\u3002"),(0,l.kt)("h2",{id:"\u7528-key-\u7ba1\u7406\u53ef\u590d\u7528\u7684\u5143\u7d20"},(0,l.kt)("a",{parentName:"h2",href:"https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0"},"\u7528 ",(0,l.kt)("inlineCode",{parentName:"a"},"key")," \u7ba1\u7406\u53ef\u590d\u7528\u7684\u5143\u7d20")),(0,l.kt)("p",null,"Vue \u4f1a\u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u6e32\u67d3\u5143\u7d20\uff0c\u901a\u5e38\u4f1a\u590d\u7528\u5df2\u6709\u5143\u7d20\u800c\u4e0d\u662f\u4ece\u5934\u5f00\u59cb\u6e32\u67d3\u3002\u8fd9\u4e48\u505a\u9664\u4e86\u4f7f Vue \u53d8\u5f97\u975e\u5e38\u5feb\u4e4b\u5916\uff0c\u8fd8\u6709\u5176\u5b83\u4e00\u4e9b\u597d\u5904\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5141\u8bb8\u7528\u6237\u5728\u4e0d\u540c\u7684\u767b\u5f55\u65b9\u5f0f\u4e4b\u95f4\u5207\u6362\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template v-if="loginType === \'username\'">\n  <label>Username</label>\n  <input placeholder="Enter your username">\n</template>\n<template v-else>\n  <label>Email</label>\n  <input placeholder="Enter your email address">\n</template>\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u5207\u6362 ",(0,l.kt)("inlineCode",{parentName:"p"},"loginType")," \u5c06\u4e0d\u4f1a\u6e05\u9664\u7528\u6237\u5df2\u7ecf\u8f93\u5165\u7684\u5185\u5bb9\u3002\u56e0\u4e3a\u4e24\u4e2a\u6a21\u677f\u4f7f\u7528\u4e86\u76f8\u540c\u7684\u5143\u7d20\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<input>")," \u4e0d\u4f1a\u88ab\u66ff\u6362\u6389\u2014\u2014\u4ec5\u4ec5\u662f\u66ff\u6362\u4e86\u5b83\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"placeholder"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u4e5f\u4e0d\u603b\u662f\u7b26\u5408\u5b9e\u9645\u9700\u6c42\uff0c\u6240\u4ee5 Vue \u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u5f0f\u6765\u8868\u8fbe\u201c\u8fd9\u4e24\u4e2a\u5143\u7d20\u662f\u5b8c\u5168\u72ec\u7acb\u7684\uff0c\u4e0d\u8981\u590d\u7528\u5b83\u4eec\u201d\u3002\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u5177\u6709\u552f\u4e00\u503c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," attribute \u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template v-if="loginType === \'username\'">\n  <label>Username</label>\n  <input placeholder="Enter your username" key="username-input">\n</template>\n<template v-else>\n  <label>Email</label>\n  <input placeholder="Enter your email address" key="email-input">\n</template>\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<label>")," \u5143\u7d20\u4ecd\u7136\u4f1a\u88ab\u9ad8\u6548\u5730\u590d\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," attribute\u3002"),(0,l.kt)("h2",{id:"v-show"},(0,l.kt)("inlineCode",{parentName:"h2"},"v-show")),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u7528\u4e8e\u6839\u636e\u6761\u4ef6\u5c55\u793a\u5143\u7d20\u7684\u9009\u9879\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"v-show")," \u6307\u4ee4\u3002\u7528\u6cd5\u5927\u81f4\u4e00\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<h1 v-show="ok">Hello!</h1>\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u662f\u201c\u771f\u6b63\u201d\u7684\u6761\u4ef6\u6e32\u67d3\uff0c\u56e0\u4e3a\u5b83\u4f1a\u786e\u4fdd\u5728\u5207\u6362\u8fc7\u7a0b\u4e2d\u6761\u4ef6\u5757\u5185\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u548c\u5b50\u7ec4\u4ef6\u9002\u5f53\u5730\u88ab\u9500\u6bc1\u548c\u91cd\u5efa\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u4e5f\u662f",(0,l.kt)("strong",{parentName:"p"},"\u60f0\u6027\u7684"),"\uff1a\u5982\u679c\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u6761\u4ef6\u4e3a\u5047\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a\u2014\u2014\u76f4\u5230\u6761\u4ef6\u7b2c\u4e00\u6b21\u53d8\u4e3a\u771f\u65f6\uff0c\u624d\u4f1a\u5f00\u59cb\u6e32\u67d3\u6761\u4ef6\u5757\u3002"),(0,l.kt)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v-show")," \u5c31\u7b80\u5355\u5f97\u591a\u2014\u2014\u4e0d\u7ba1\u521d\u59cb\u6761\u4ef6\u662f\u4ec0\u4e48\uff0c\u5143\u7d20\u603b\u662f\u4f1a\u88ab\u6e32\u67d3\uff0c\u5e76\u4e14\u53ea\u662f\u7b80\u5355\u5730\u57fa\u4e8e CSS \u8fdb\u884c\u5207\u6362\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u6709\u66f4\u9ad8\u7684\u5207\u6362\u5f00\u9500\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"v-show")," \u6709\u66f4\u9ad8\u7684\u521d\u59cb\u6e32\u67d3\u5f00\u9500\u3002\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u975e\u5e38\u9891\u7e41\u5730\u5207\u6362\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-show")," \u8f83\u597d\uff1b\u5982\u679c\u5728\u8fd0\u884c\u65f6\u6761\u4ef6\u5f88\u5c11\u6539\u53d8\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u8f83\u597d\u3002"),(0,l.kt)("h2",{id:"v-if-\u4e0e-v-for-\u4e00\u8d77\u4f7f\u7528"},(0,l.kt)("a",{parentName:"h2",href:"https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8"},(0,l.kt)("inlineCode",{parentName:"a"},"v-if")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"a"},"v-for")," \u4e00\u8d77\u4f7f\u7528")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350"),"\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"v-for"),"\u3002\u8bf7\u67e5\u9605",(0,l.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81"},"\u98ce\u683c\u6307\u5357"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"v-for")," \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v-for")," \u5177\u6709\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-if")," \u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002\u8bf7\u67e5\u9605",(0,l.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if"},"\u5217\u8868\u6e32\u67d3\u6307\u5357"),"\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f"))}m.isMDXComponent=!0}}]);