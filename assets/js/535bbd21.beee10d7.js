"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3439],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||p;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(3117),r=n(102),p=(n(7294),n(3905)),l=["components"],o={},i="Webpack",c={unversionedId:"webpack/webpack",id:"webpack/webpack",isDocsHomePage:!1,title:"Webpack",description:"\u6982\u5ff5",source:"@site/docs/webpack/webpack.md",sourceDirName:"webpack",slug:"/webpack/webpack",permalink:"/docusauras-blog-client/docs/webpack/webpack",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/webpack/webpack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u5c5e\u6027\u548c\u76d1\u542c\u5668",permalink:"/docusauras-blog-client/docs/vue/\u8ba1\u7b97\u5c5e\u6027\u548c\u76d1\u542c\u5668"},next:{title:"websocket",permalink:"/docusauras-blog-client/docs/websocket/websocket"}},u=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[{value:"\u5165\u53e3",id:"\u5165\u53e3",children:[],level:3},{value:"\u51fa\u53e3",id:"\u51fa\u53e3",children:[],level:3},{value:"Loader",id:"loader",children:[],level:3},{value:"Plugins",id:"plugins",children:[],level:3},{value:"\u6a21\u5f0f",id:"\u6a21\u5f0f",children:[],level:3}],level:2}],k={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"webpack"},"Webpack"),(0,p.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,p.kt)("p",null,"\u672c\u8d28\u4e0a\uff0c",(0,p.kt)("em",{parentName:"p"},"webpack")," \u662f\u4e00\u4e2a\u73b0\u4ee3 JavaScript \u5e94\u7528\u7a0b\u5e8f\u7684",(0,p.kt)("em",{parentName:"p"},"\u9759\u6001\u6a21\u5757\u6253\u5305\u5668(module bundler)"),"\u3002\u5f53 webpack \u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5b83\u4f1a\u9012\u5f52\u5730\u6784\u5efa\u4e00\u4e2a",(0,p.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u5173\u7cfb\u56fe(dependency graph)"),"\uff0c\u5176\u4e2d\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u6bcf\u4e2a\u6a21\u5757\uff0c\u7136\u540e\u5c06\u6240\u6709\u8fd9\u4e9b\u6a21\u5757\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,p.kt)("em",{parentName:"p"},"bundle"),"\u3002"),(0,p.kt)("h3",{id:"\u5165\u53e3"},"\u5165\u53e3"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5165\u53e3\u8d77\u70b9(entry point)"),"\u6307\u793a webpack \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8",(0,p.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u56fe"),"\u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0cwebpack \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9\uff08\u76f4\u63a5\u548c\u95f4\u63a5\uff09\u4f9d\u8d56\u7684\u3002\u6bcf\u4e2a\u4f9d\u8d56\u9879\u968f\u5373\u88ab\u5904\u7406\uff0c\u6700\u540e\u8f93\u51fa\u5230\u79f0\u4e4b\u4e3a ",(0,p.kt)("em",{parentName:"p"},"bundles")," \u7684\u6587\u4ef6\u4e2d\u3002"),(0,p.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/configuration"},"webpack \u914d\u7f6e"),"\u4e2d\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"entry")," \u5c5e\u6027\uff0c\u6765\u6307\u5b9a\u4e00\u4e2a\u5165\u53e3\u8d77\u70b9\uff08\u6216\u591a\u4e2a\u5165\u53e3\u8d77\u70b9\uff09\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"./src"),"\u3002"),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"entry")," \u914d\u7f6e\u7684\u6700\u7b80\u5355\u4f8b\u5b50\uff1a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n")),(0,p.kt)("h3",{id:"\u51fa\u53e3"},"\u51fa\u53e3"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"output")," \u5c5e\u6027\u544a\u8bc9 webpack \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 ",(0,p.kt)("em",{parentName:"p"},"bundles"),"\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"./dist"),"\u3002\u57fa\u672c\u4e0a\uff0c\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7ed3\u6784\uff0c\u90fd\u4f1a\u88ab\u7f16\u8bd1\u5230\u4f60\u6307\u5b9a\u7684\u8f93\u51fa\u8def\u5f84\u7684\u6587\u4ef6\u5939\u4e2d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"output")," \u5b57\u6bb5\uff0c\u6765\u914d\u7f6e\u8fd9\u4e9b\u5904\u7406\u8fc7\u7a0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\n\nmodule.exports = {\n  entry: './path/to/my/entry/file.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'my-first-webpack.bundle.js'\n  }\n};\n")),(0,p.kt)("h3",{id:"loader"},"Loader"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"loader")," \u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u90a3\u4e9b\u975e JavaScript \u6587\u4ef6\uff08webpack \u81ea\u8eab\u53ea\u7406\u89e3 JavaScript\uff09\u3002loader \u53ef\u4ee5\u5c06\u6240\u6709\u7c7b\u578b\u7684\u6587\u4ef6\u8f6c\u6362\u4e3a webpack \u80fd\u591f\u5904\u7406\u7684\u6709\u6548",(0,p.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/concepts/modules"},"\u6a21\u5757"),"\uff0c\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5229\u7528 webpack \u7684\u6253\u5305\u80fd\u529b\uff0c\u5bf9\u5b83\u4eec\u8fdb\u884c\u5904\u7406\u3002"),(0,p.kt)("p",null,"\u672c\u8d28\u4e0a\uff0cwebpack loader \u5c06\u6240\u6709\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u8f6c\u6362\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7684\u4f9d\u8d56\u56fe\uff08\u548c\u6700\u7ec8\u7684 bundle\uff09\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u7684\u6a21\u5757\u3002"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff0cloader \u80fd\u591f")," ",(0,p.kt)("inlineCode",{parentName:"p"},"import")," ",(0,p.kt)("em",{parentName:"p"},"\u5bfc\u5165\u4efb\u4f55\u7c7b\u578b\u7684\u6a21\u5757\uff08\u4f8b\u5982")," ",(0,p.kt)("inlineCode",{parentName:"p"},".css")," ",(0,p.kt)("em",{parentName:"p"},"\u6587\u4ef6\uff09\uff0c\u8fd9\u662f webpack \u7279\u6709\u7684\u529f\u80fd\uff0c\u5176\u4ed6\u6253\u5305\u7a0b\u5e8f\u6216\u4efb\u52a1\u6267\u884c\u5668\u7684\u53ef\u80fd\u5e76\u4e0d\u652f\u6301\u3002\u6211\u4eec\u8ba4\u4e3a\u8fd9\u79cd\u8bed\u8a00\u6269\u5c55\u662f\u6709\u5f88\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u4f7f\u5f00\u53d1\u4eba\u5458\u521b\u5efa\u51fa\u66f4\u51c6\u786e\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002")),(0,p.kt)("p",null,"\u5728\u66f4\u9ad8\u5c42\u9762\uff0c\u5728 webpack \u7684\u914d\u7f6e\u4e2d ",(0,p.kt)("strong",{parentName:"p"},"loader")," \u6709\u4e24\u4e2a\u76ee\u6807\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"test")," \u5c5e\u6027\uff0c\u7528\u4e8e\u6807\u8bc6\u51fa\u5e94\u8be5\u88ab\u5bf9\u5e94\u7684 loader \u8fdb\u884c\u8f6c\u6362\u7684\u67d0\u4e2a\u6216\u67d0\u4e9b\u6587\u4ef6\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"use")," \u5c5e\u6027\uff0c\u8868\u793a\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a loader\u3002")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\n\nconst config = {\n  output: {\n    filename: 'my-first-webpack.bundle.js'\n  },\n  module: {\n    rules: [\n      { test: /\\.txt$/, use: 'raw-loader' }\n    ]\n  }\n};\n\nmodule.exports = config;\n")),(0,p.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u4e2d\uff0c\u5bf9\u4e00\u4e2a\u5355\u72ec\u7684 module \u5bf9\u8c61\u5b9a\u4e49\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"rules")," \u5c5e\u6027\uff0c\u91cc\u9762\u5305\u542b\u4e24\u4e2a\u5fc5\u987b\u5c5e\u6027\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"test")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"use"),"\u3002\u8fd9\u544a\u8bc9 webpack \u7f16\u8bd1\u5668(compiler) \u5982\u4e0b\u4fe1\u606f\uff1a"),(0,p.kt)("p",null,"\u5f53\u4f60\u78b0\u5230\u300c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"require()"),"/",(0,p.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\u4e2d\u88ab\u89e3\u6790\u4e3a '.txt' \u7684\u8def\u5f84\u300d\u65f6\uff0c\u5728\u4f60\u5bf9\u5b83\u6253\u5305\u4e4b\u524d\uff0c\u5148",(0,p.kt)("strong",{parentName:"p"},"\u4f7f\u7528")," ",(0,p.kt)("inlineCode",{parentName:"p"},"raw-loader")," \u8f6c\u6362\u4e00\u4e0b\u3002"),(0,p.kt)("p",null,"*\u91cd\u8981\u7684\u662f\u8981\u8bb0\u5f97\uff0c",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("em",{parentName:"strong"},"\u5728 webpack \u914d\u7f6e\u4e2d\u5b9a\u4e49 loader \u65f6\uff0c\u8981\u5b9a\u4e49\u5728 ",(0,p.kt)("inlineCode",{parentName:"em"},"module.rules")," \u4e2d\uff0c\u800c\u4e0d\u662f ",(0,p.kt)("inlineCode",{parentName:"em"},"rules"))),"\u3002\u7136\u800c\uff0c\u5728\u5b9a\u4e49\u9519\u8bef\u65f6 webpack \u4f1a\u7ed9\u51fa\u4e25\u91cd\u7684\u8b66\u544a\u3002\u4e3a\u4e86\u4f7f\u4f60\u53d7\u76ca\u4e8e\u6b64\uff0c\u5982\u679c\u6ca1\u6709\u6309\u7167\u6b63\u786e\u65b9\u5f0f\u53bb\u505a\uff0cwebpack \u4f1a\u201c\u7ed9\u51fa\u4e25\u91cd\u7684\u8b66\u544a\u201d*"),(0,p.kt)("h3",{id:"plugins"},"Plugins"),(0,p.kt)("p",null,"loader \u88ab\u7528\u4e8e\u8f6c\u6362\u67d0\u4e9b\u7c7b\u578b\u7684\u6a21\u5757\uff0c\u800c\u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u63d2\u4ef6\u7684\u8303\u56f4\u5305\u62ec\uff0c\u4ece\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29\uff0c\u4e00\u76f4\u5230\u91cd\u65b0\u5b9a\u4e49\u73af\u5883\u4e2d\u7684\u53d8\u91cf\u3002",(0,p.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/api/plugins"},"\u63d2\u4ef6\u63a5\u53e3"),"\u529f\u80fd\u6781\u5176\u5f3a\u5927\uff0c\u53ef\u4ee5\u7528\u6765\u5904\u7406\u5404\u79cd\u5404\u6837\u7684\u4efb\u52a1\u3002"),(0,p.kt)("p",null,"\u60f3\u8981\u4f7f\u7528\u4e00\u4e2a\u63d2\u4ef6\uff0c\u4f60\u53ea\u9700\u8981 ",(0,p.kt)("inlineCode",{parentName:"p"},"require()")," \u5b83\uff0c\u7136\u540e\u628a\u5b83\u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"plugins")," \u6570\u7ec4\u4e2d\u3002\u591a\u6570\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u9009\u9879(option)\u81ea\u5b9a\u4e49\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u56e0\u4e3a\u4e0d\u540c\u76ee\u7684\u800c\u591a\u6b21\u4f7f\u7528\u540c\u4e00\u4e2a\u63d2\u4ef6\uff0c\u8fd9\u65f6\u9700\u8981\u901a\u8fc7\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"new")," \u64cd\u4f5c\u7b26\u6765\u521b\u5efa\u5b83\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\nconst webpack = require('webpack'); // \u7528\u4e8e\u8bbf\u95ee\u5185\u7f6e\u63d2\u4ef6\n\nconst config = {\n  module: {\n    rules: [\n      { test: /\\.txt$/, use: 'raw-loader' }\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({template: './src/index.html'})\n  ]\n};\n\nmodule.exports = config;\n")),(0,p.kt)("p",null,"webpack \u63d0\u4f9b\u8bb8\u591a\u5f00\u7bb1\u53ef\u7528\u7684\u63d2\u4ef6\uff01\u67e5\u9605\u6211\u4eec\u7684",(0,p.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/plugins"},"\u63d2\u4ef6\u5217\u8868"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,p.kt)("h3",{id:"\u6a21\u5f0f"},"\u6a21\u5f0f"),(0,p.kt)("p",null,"\u901a\u8fc7\u9009\u62e9 ",(0,p.kt)("inlineCode",{parentName:"p"},"development")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"production")," \u4e4b\u4e2d\u7684\u4e00\u4e2a\uff0c\u6765\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"mode")," \u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u542f\u7528\u76f8\u5e94\u6a21\u5f0f\u4e0b\u7684 webpack \u5185\u7f6e\u7684\u4f18\u5316"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  mode: 'production'\n};\n")))}s.isMDXComponent=!0}}]);