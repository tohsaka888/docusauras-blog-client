"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9345],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1442:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),l=["components"],c={},i=void 0,s={unversionedId:"less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26",id:"less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26",isDocsHomePage:!1,title:"\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26",description:"(\u4e0d\u8981\u548c CSS @namespace \u6216 namespace selectors \u6df7\u6dc6\u4e86)\u3002",source:"@site/docs/less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26.md",sourceDirName:"less",slug:"/less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26",permalink:"/docusauras-blog-client/docs/less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/less/\u547d\u540d\u7a7a\u95f4\u548c\u8bbf\u95ee\u7b26.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf",permalink:"/docusauras-blog-client/docs/less/\u53d8\u91cf"},next:{title:"\u5bfc\u5165",permalink:"/docusauras-blog-client/docs/less/\u5bfc\u5165"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(\u4e0d\u8981\u548c ",(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-namespace/"},"CSS ",(0,a.kt)("inlineCode",{parentName:"a"},"@namespace"))," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-selectors/#typenmsp"},"namespace selectors")," \u6df7\u6dc6\u4e86)\u3002"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u51fa\u4e8e\u7ec4\u7ec7\u7ed3\u6784\u6216\u4ec5\u4ec5\u662f\u4e3a\u4e86\u63d0\u4f9b\u4e00\u4e9b\u5c01\u88c5\u7684\u76ee\u7684\uff0c\u4f60\u5e0c\u671b\u5bf9\u6df7\u5408\uff08mixins\uff09\u8fdb\u884c\u5206\u7ec4\u3002\u4f60\u53ef\u4ee5\u7528 Less \u66f4\u76f4\u89c2\u5730\u5b9e\u73b0\u8fd9\u4e00\u9700\u6c42\u3002\u5047\u8bbe\u4f60\u5e0c\u671b\u5c06\u4e00\u4e9b\u6df7\u5408\uff08mixins\uff09\u548c\u53d8\u91cf\u7f6e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"#bundle")," \u4e4b\u4e0b\uff0c\u4e3a\u4e86\u4ee5\u540e\u65b9\u4fbf\u91cd\u7528\u6216\u5206\u53d1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-less"},"#bundle() {\n  .button {\n    display: block;\n    border: 1px solid black;\n    background-color: grey;\n    &:hover {\n      background-color: white;\n    }\n  }\n  .tab { ... }\n  .citation { ... }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},".button")," \u7c7b\u6df7\u5408\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"#header a")," \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-less"},"#header a {\n  color: orange;\n  #bundle.button();  // \u8fd8\u53ef\u4ee5\u4e66\u5199\u4e3a #bundle > .button \u5f62\u5f0f\n}\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4e0d\u5e0c\u671b\u5b83\u4eec\u51fa\u73b0\u5728\u8f93\u51fa\u7684 CSS \u4e2d\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"#bundle .tab"),"\uff0c\u8bf7\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," \u9644\u52a0\u5230\u547d\u540d\u7a7a\u95f4\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"#bundle()"),"\uff09\u540e\u9762\u3002"))}d.isMDXComponent=!0}}]);