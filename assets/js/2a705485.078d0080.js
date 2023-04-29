"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2,title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",tags:["items","propri\xe9t\xe9s"]},l=void 0,o={unversionedId:"items/properties",id:"items/properties",title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",source:"@site/docs/items/properties.mdx",sourceDirName:"items",slug:"/items/properties",permalink:"/items/properties",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/items/properties.mdx",tags:[{label:"items",permalink:"/tags/items"},{label:"propri\xe9t\xe9s",permalink:"/tags/proprietes"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",tags:["items","propri\xe9t\xe9s"]},sidebar:"documentationSidebar",previous:{title:"Item basique",permalink:"/items/basic"},next:{title:"Item color\xe9",permalink:"/items/colored"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"food"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit les propri\xe9t\xe9s de nourriture de l'item")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stacksTo"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la taille maximale d'empilement de l'item")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultDurability"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la duret\xe9 par default de l'item")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"durability"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la duret\xe9 maximale de l'item")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"craftRemainder"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit un item qui restera une fois un craft effectu\xe9 avec l'item en tant qu'ingr\xe9dient (comme par exemple le seau de lait donnant un seau vide une fois le craft du gateau effectu\xe9)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rarity"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la raret\xe9 de l'item (ce qui change entre autres la couleur du nom de l'item)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fireResistant"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si l'item est r\xe9sistant ou non \xe0 toute source de feu ou de lave")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setNoRepair"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit l'item comme non r\xe9parable m\xeame si celui-ci est endommag\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requiredFeatures"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le pack de ",(0,a.kt)("em",{parentName:"td"},"features")," n\xe9cessaire pour que l'item soit accessible en jeu")))))}u.isMDXComponent=!0}}]);