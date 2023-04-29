"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5217],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29882:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2,title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",tags:["blocs","propri\xe9t\xe9s"]},i=void 0,o={unversionedId:"blocs/properties",id:"version-1.18.x/blocs/properties",title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",source:"@site/versioned_docs/version-1.18.x/blocs/properties.mdx",sourceDirName:"blocs",slug:"/blocs/properties",permalink:"/1.18.x/blocs/properties",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/blocs/properties.mdx",tags:[{label:"blocs",permalink:"/1.18.x/tags/blocs"},{label:"propri\xe9t\xe9s",permalink:"/1.18.x/tags/proprietes"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",tags:["blocs","propri\xe9t\xe9s"]},sidebar:"tutorialSidebar",previous:{title:"Bloc basique",permalink:"/1.18.x/blocs/basic"},next:{title:"Outils",permalink:"/1.18.x/category/blocs/tools"}},p={},s=[],u={toc:s};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"noCollission"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ne comporte pas de collision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"noOcclusion"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc est capable d'occulter d'autres blocs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"friction"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la friction du bloc (comme le bloc de glace).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"speedFactor"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le facteur de vitesse du bloc (comme le bloc de miel).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jumpFactor"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le facteur permettant de sauter une fois sur le bloc (comme le bloc de miel).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sound"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le type de son jou\xe9 par le bloc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lightLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le niveau de lumi\xe8re \xe9mise par le bloc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strength"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la r\xe9sistance aux explosions ainsi que le temps de destruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instabreak"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc soit cassable instantan\xe9ment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"randomTicks"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc doit ex\xe9cuter des bouts de code d\xe9finit tout les ticks de mani\xe8re al\xe9atoire (comme les plantes).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dynamicShape"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ait une forme dynamique ou non.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"noDrops"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ne comporte aucuns ",(0,a.kt)("em",{parentName:"td"},"drops")," une fois celui-ci cass\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dropsLike"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit les ",(0,a.kt)("em",{parentName:"td"},"loots")," du bloc comme celui sp\xe9cifi\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lootFrom"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit les ",(0,a.kt)("em",{parentName:"td"},"loots")," du bloc comme celui sp\xe9cifi\xe9.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"air"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc soit consid\xe9r\xe9 par le jeu comme de l'air.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isValidSpawn"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le bloc comme \xe9tant valide pour l'apparition du joueur.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isRedstoneConductor"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc permet de conduire de la redstone.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isSuffocating"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc fait suffoquer le joueur ou non si celui-ci se trouve la t\xeate coinc\xe9e \xe0 l'interieur.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isViewBlocking"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc bloque la vue du joueur ou non.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"emissiveRendering"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc poss\xe8de un rendu \xe9missif ou non (comme le bloc de magma).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requiresCorrectToolForDrops"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc doit \xeatre cass\xe9 avec l'outil adapt\xe9 pour pouvoir ",(0,a.kt)("em",{parentName:"td"},"drop")," des objets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"color"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la couleur du bloc sur une map Minecraft.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"destroyTime"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit le temps n\xe9cessaire pour casser le bloc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"explosionResistance"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la r\xe9sistance du bloc aux explosions.")))))}c.isMDXComponent=!0}}]);