"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[3751],{3578:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(3746),l=n(5155),c=n(833),u=n(5281),o=n(3306),s=n(4739),i=n(6010);function m(e){var t=e.tags,n=(0,l.M)();return r.createElement(c.FG,{className:(0,i.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},r.createElement(c.d,{title:n}),r.createElement(s.Z,{tag:"doc_tags_list"}),r.createElement(a.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,n),r.createElement(o.Z,{tags:t}))))))}},7774:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(9960),c="tag_hD8n",u="tagRegular_D6E_",o="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,a.Z)(c,s?o:u)},n,s&&r.createElement("span",null,s))}},3306:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(7774),l=n(5155),c="tag_Shcx";function u(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(a.Z,e))}))),r.createElement("hr",null))}function o(e){var t=e.tags,n=(0,l.P)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))}},5155:function(e,t,n){n.d(t,{M:function(){return a},P:function(){return l}});var r=n(5999),a=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);