"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8610],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(102),l=a(7294),n=a(6010),s=a(4581),m=a(9960),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,r.Z)(e,f),i=t&&t.items.length>0;return l.createElement(s.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7294),l=a(6010),n=a(3905),s=a(5999),m=a(9960),o=a(4996),i=a(2822),c=a(2461),u=a(6753),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(62),f="image_1yU8";var E=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:f,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},v="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",v),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var _=function(e){var t,a,f,E,v=(f=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,o.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,L=P.date,U=P.formattedDate,M=P.permalink,I=P.tags,x=P.readingTime,B=P.title,C=P.editUrl,R=P.authors,A=null!=(t=k.image)?t:Z.image,D=!w&&T,H=I.length>0;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=w?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},w?B:r.createElement(m.Z,{itemProp:"url",to:M},B)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},U),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",v(x))),r.createElement(b,{authors:R,assets:k}))),A&&r.createElement("meta",{itemProp:"image",content:_(A,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},N)),(H||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},H&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(h.Z,{tags:I})),w&&C&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:C})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},r.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+B},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),l=a(9960),n=a(8665),s=a(8561),m=a(5999),o=a(2822);function i(e){var t,a=e.metadata,i=e.items,c=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return r.createElement(n.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:u},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),l=a(5999),n=a(3117),s=a(102),m=a(6010),o="iconEdit_2_ui",i=["className"],c=function(e){var t=e.className,a=(0,s.Z)(e,i);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(2822);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(9960),s="tag_1Okp",m="tagRegular_3MiF",o="tagWithCount_1HU1";var i=function(e){var t,a=e.permalink,i=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[m]=!c,t[o]=c,t))},i,c&&r.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(5999),s=a(7774),m="tags_2ga9",o="tag_11ep";function i(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(s.Z,{name:t,permalink:a}))}))))}},2838:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3117),l=a(102),n=a(7294),s=a(6010),m=a(9960),o=a(2822),i=a(4996),c=a(3919),u="footerLogoLink_qW4Z",d=a(9750),g=a(541),p=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,a=e.href,s=e.label,o=e.prependBaseUrlToHref,u=(0,l.Z)(e,p),d=(0,i.Z)(t),h=(0,i.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(m.Z,(0,r.Z)({className:"footer__link-item"},a?{href:o?h:a}:{to:d},u),a&&!(0,c.Z)(a)?n.createElement("span",null,s,n.createElement(g.Z,null)):s)}var f=function(e){var t=e.sources,a=e.alt;return n.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};var E=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,c=t.logo,d=void 0===c?{}:c,g={light:(0,i.Z)(d.src),dark:(0,i.Z)(d.srcDark||d.src)};return e?n.createElement("div",null,n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(h,e))}))):null)}))),(d||a)&&n.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},d.href?n.createElement(m.Z,{href:d.href,className:u},n.createElement(f,{alt:d.alt,sources:g})):n.createElement(f,{alt:d.alt,sources:g})),a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)))):null}}}]);