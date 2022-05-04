"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[6103],{4118:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(3366),r=n(7294),l=n(6010),i=n(3746),o=n(9960),s=n(5999),c="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",v="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:g},e.title))})))))}var p=n(3102);function h(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return r.createElement(p.Zo,{component:h,props:e})}var E=n(7524);function N(e){var t=e.sidebar,n=(0,E.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(b,{sidebar:t}):r.createElement(f,{sidebar:t}):null}var _=["sidebar","toc","children"];function L(e){var t=e.sidebar,n=e.toc,o=e.children,s=(0,a.Z)(e,_),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},6244:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294),r=n(6010),l=n(5999),i=n(9960),o=n(4996),s=n(8824),c=n(8780),m=n(5290),u=n(6753),d="blogPostTitle_rzP5",v="blogPostData_Zg1s",g="blogPostDetailsFull_h6_j",f=n(62);function p(e){return e.href?a.createElement(i.Z,e):a.createElement(a.Fragment,null,e.children)}function h(e){var t=e.author,n=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(p,{href:s,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(p,{href:s,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var b="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?E:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?N:b),key:t},a.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}function L(e){var t,n,p=(n=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,b=e.children,E=e.frontMatter,N=e.assets,L=e.metadata,Z=e.truncated,k=e.isBlogPostPage,x=void 0!==k&&k,P=L.date,y=L.formattedDate,C=L.permalink,H=L.tags,I=L.readingTime,w=L.title,A=L.editUrl,T=L.authors,M=null!=(t=N.image)?t:E.image,O=!x&&Z,R=H.length>0,F=x?"h1":"h2";return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(F,{className:d,itemProp:"headline"},x?w:a.createElement(i.Z,{itemProp:"url",to:C},w)),a.createElement("div",{className:(0,r.Z)(v,"margin-vert--md")},a.createElement("time",{dateTime:P,itemProp:"datePublished"},y),void 0!==I&&a.createElement(a.Fragment,null," \xb7 ",p(I))),a.createElement(_,{authors:T,assets:N})),M&&a.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),a.createElement("div",{id:x?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,b)),(R||Z)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",x&&g)},R&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},a.createElement(f.Z,{tags:H})),x&&A&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:A})),O&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},a.createElement(i.Z,{to:L.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(4118),l=n(6244),i=n(7462),o=n(5999),s=n(1750);function c(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(s.Z,(0,i.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(s.Z,(0,i.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=n(833),u=n(5281),d=n(1575),v=n(6010);function g(e){var t,n=e.content,r=n.assets,l=n.metadata,i=l.title,o=l.description,s=l.date,c=l.tags,u=l.authors,d=l.frontMatter,v=d.keywords,g=null!=(t=r.image)?t:d.image;return a.createElement(m.d,{title:i,description:o,keywords:v,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,m=o.prevItem,u=o.frontMatter,v=u.hide_table_of_contents,g=u.toc_min_heading_level,f=u.toc_max_heading_level;return a.createElement(r.Z,{sidebar:n,toc:!v&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(l.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},a.createElement(t,null)),(s||m)&&a.createElement(c,{nextItem:s,prevItem:m}))}function p(e){return a.createElement(m.FG,{className:(0,v.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},a.createElement(g,e),a.createElement(f,e))}},1575:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),i=n(6010),o=n(721),s="tableOfContents_cNA8",c=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294);function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var o=l.memo(i),s=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,s);n>=0?t[n].children.push(l):a.push(l)})),a}function m(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=m({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var u=n(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function v(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function g(){var e=(0,l.useRef)(0),t=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),n=g();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=v(o,{anchorTopOffset:n.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,s=e.linkClassName,d=void 0===s?"table-of-contents__link":s,v=e.linkActiveClassName,g=void 0===v?void 0:v,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,u.L)(),_=null!=h?h:N.tableOfContents.minHeadingLevel,L=null!=b?b:N.tableOfContents.maxHeadingLevel,Z=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return m({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:_,maxHeadingLevel:L});return f((0,l.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:_,maxHeadingLevel:L}}),[d,g,_,L])),l.createElement(o,(0,a.Z)({toc:Z,className:i,linkClassName:d},E))}},8824:function(e,t,n){n.d(t,{c:function(){return c}});var a=n(7294),r=n(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,n}),[e])}function c(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);