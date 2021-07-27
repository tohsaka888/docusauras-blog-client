(self.webpackChunkblog=self.webpackChunkblog||[]).push([[929],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,f=d["".concat(l,".").concat(m)]||d[m]||i[m]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9916:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(2122),s=t(9756),o=(t(7294),t(3905)),a=["components"],p={},l="express",u={unversionedId:"express/express",id:"express/express",isDocsHomePage:!1,title:"express",description:"\u5feb\u901f\u751f\u6210\u5668",source:"@site/docs/express/express.md",sourceDirName:"express",slug:"/express/express",permalink:"/docusauras-blog-client/docs/express/express",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/express/express.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docusauras-blog-client/docs/TypeScript/TypeScript"},next:{title:"\u4f5c\u7528\u57df",permalink:"/docusauras-blog-client/docs/less/\u4f5c\u7528\u57df"}},c=[{value:"\u5feb\u901f\u751f\u6210\u5668",id:"\u5feb\u901f\u751f\u6210\u5668",children:[]},{value:"\u5904\u7406GET\u8bf7\u6c42",id:"\u5904\u7406get\u8bf7\u6c42",children:[]},{value:"\u5904\u7406POST\u8bf7\u6c42",id:"\u5904\u7406post\u8bf7\u6c42",children:[{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",children:[]}]},{value:"\u8de8\u57df",id:"\u8de8\u57df",children:[]},{value:"Router",id:"router",children:[]},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",children:[]}],i={toc:c};function d(e){var r=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"express"},"express"),(0,o.kt)("h2",{id:"\u5feb\u901f\u751f\u6210\u5668"},"\u5feb\u901f\u751f\u6210\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npx express-generator && yarn install\n")),(0,o.kt)("h2",{id:"\u5904\u7406get\u8bf7\u6c42"},"\u5904\u7406GET\u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/' , (req, res) => {       //req-\u8bf7\u6c42 res-\u7ed3\u679c\n    res.send(\"Hello,World~\");       //\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u7ed3\u679c\n})\n")),(0,o.kt)("h2",{id:"\u5904\u7406post\u8bf7\u6c42"},"\u5904\u7406POST\u8bf7\u6c42"),(0,o.kt)("h3",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u6269\u5c55express\u6269\u5c55\u529f\u80fd\uff0c\u8bf7\u6c42\u524d\uff0c\u76f8\u5e94\u524d\u505a\u7279\u5b9a\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"express\u5904\u7406POST\u8bf7\u6c42\u9700\u8981\u7528\u5230\u89e3\u6790json\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'app.use(express.json());                //\u4f7f\u7528json\u4e2d\u95f4\u4ef6\n\napp.post(\'/login\' , (req, res) => {     \n    console.log("\u6536\u5230\u8bf7\u6c42\u4f53", req.body);\n    res.status(201).send("ok");\n})\n')),(0,o.kt)("h2",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab")," (",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/CORS"},"CORS"),") \uff08\u6216\u901a\u4fd7\u5730\u8bd1\u4e3a\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u662f\u4e00\u79cd\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTP"},"HTTP")," \u5934\u7684\u673a\u5236\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u5141\u8bb8\u670d\u52a1\u5668\u6807\u793a\u9664\u4e86\u5b83\u81ea\u5df1\u4ee5\u5916\u7684\u5176\u5b83",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},"origin"),'\uff08\u57df\uff0c\u534f\u8bae\u548c\u7aef\u53e3\uff09\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u53ef\u4ee5\u8bbf\u95ee\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u3002\u8de8\u6e90\u8d44\u6e90\u5171\u4eab\u8fd8\u901a\u8fc7\u4e00\u79cd\u673a\u5236\u6765\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u4f1a\u5141\u8bb8\u8981\u53d1\u9001\u7684\u771f\u5b9e\u8bf7\u6c42\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u4e00\u4e2a\u5230\u670d\u52a1\u5668\u6258\u7ba1\u7684\u8de8\u6e90\u8d44\u6e90\u7684"\u9884\u68c0"\u8bf7\u6c42\u3002\u5728\u9884\u68c0\u4e2d\uff0c\u6d4f\u89c8\u5668\u53d1\u9001\u7684\u5934\u4e2d\u6807\u793a\u6709HTTP\u65b9\u6cd5\u548c\u771f\u5b9e\u8bf7\u6c42\u4e2d\u4f1a\u7528\u5230\u7684\u5934\u3002'),(0,o.kt)("p",null,"express\u5904\u7406\u8de8\u57df\u8bf7\u6c42\u9700\u8981\u4f7f\u7528\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u4e2d\u95f4\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"yarn add cors\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var cors = require("cors");\napp.use("cors");\n')),(0,o.kt)("h2",{id:"router"},"Router"),(0,o.kt)("p",null,"router\u672c\u8eab\u7c7b\u4f3c\u4e0e\u4e2d\u95f4\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528app.use()\u6765\u8bbf\u4f7f\u7528router\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/* App.js\u4e2d\u5b9a\u4e49\u548c\u4f7f\u7528router */\nvar userRouter = require('./routers/users.js');\napp.use('/users', userRouter);\n\n/* users.js\u4e2drouter\u7684\u8be6\u7ec6\u64cd\u4f5c */\nvar express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function(req, res, next) {      //\u6b64\u65f6\u8bf7\u6c42\u7684\u8def\u5f84\u76f8\u5f53\u4e0eapp.get('/users', ...)\n  res.send('respond with a resource');\n});\n\nrouter.post('/login', (req, res) => {           //\u6b64\u65f6\u8bf7\u6c42\u7684\u8def\u5f84\u76f8\u5f53\u4e8eapp.post('/users/login', ...)\n  console.log(\"\u6536\u5230\u8bf7\u6c42\u4f53\uff1a\", req.body);\n  res.status(201).send(\"users ok\");\n});\n\nmodule.exports = router;\n\n")),(0,o.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tohsaka888/expressExample"},"\u70b9\u51fb\u6211\u67e5\u770b\u5b9e\u4f8b")))}d.isMDXComponent=!0}}]);