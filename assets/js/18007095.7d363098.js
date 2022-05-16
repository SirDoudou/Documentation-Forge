"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[8215],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,o(o({ref:e},u),{},{components:n})):r.createElement(b,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3113:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2,title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",tags:["blocs","propri\xe9t\xe9s"]},p=void 0,s={unversionedId:"blocs/properties",id:"blocs/properties",title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",source:"@site/docs/blocs/properties.md",sourceDirName:"blocs",slug:"/blocs/properties",permalink:"/docs/blocs/properties",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/blocs/properties.md",tags:[{label:"blocs",permalink:"/docs/tags/blocs"},{label:"propri\xe9t\xe9s",permalink:"/docs/tags/proprietes"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Propri\xe9t\xe9s des blocs",description:"Quelles sont les propri\xe9t\xe9s d'un bloc ?",tags:["blocs","propri\xe9t\xe9s"]},sidebar:"tutorialSidebar",previous:{title:"Bloc basique",permalink:"/docs/blocs/basic"},next:{title:"Outils",permalink:"/docs/category/blocs/tools"}},u={},c=[],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"noCollission"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ne comporte pas de collision.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"noOcclusion"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc est capable d'occulter d'autres blocs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"friction"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit la friction du bloc (comme le bloc de glace).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speedFactor"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le facteur de vitesse du bloc (comme le bloc de miel).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jumpFactor"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le facteur permettant de sauter une fois sur le bloc (comme le bloc de miel).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sound"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le type de son jou\xe9 par le bloc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lightLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le niveau de lumi\xe8re \xe9mise par le bloc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strength"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit la r\xe9sistance aux explosions ainsi que le temps de destruction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instabreak"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc soit cassable instantan\xe9ment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randomTicks"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc doit ex\xe9cuter des bouts de code d\xe9finit tout les ticks de mani\xe8re al\xe9atoire (comme les plantes).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dynamicShape"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ait une forme dynamique ou non.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"noDrops"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc ne comporte aucuns ",(0,l.kt)("em",{parentName:"td"},"drops")," une fois celui-ci cass\xe9.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropsLike"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit les ",(0,l.kt)("em",{parentName:"td"},"loots")," du bloc comme celui sp\xe9cifi\xe9.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lootFrom"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit les ",(0,l.kt)("em",{parentName:"td"},"loots")," du bloc comme celui sp\xe9cifi\xe9.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"air"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc soit consid\xe9r\xe9 par le jeu comme de l'air.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isValidSpawn"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le bloc comme \xe9tant valide pour l'apparition du joueur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isRedstoneConductor"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc permet de conduire de la redstone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isSuffocating"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc fait suffoquer le joueur ou non si celui-ci se trouve la t\xeate coinc\xe9e \xe0 l'interieur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isViewBlocking"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc bloque la vue du joueur ou non.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emissiveRendering"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le bloc poss\xe8de un rendu \xe9missif ou non (comme le bloc de magma).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requiresCorrectToolForDrops"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le fait que le bloc doit \xeatre cass\xe9 avec l'outil adapt\xe9 pour pouvoir ",(0,l.kt)("em",{parentName:"td"},"drop")," des objets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit la couleur du bloc sur une map Minecraft.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyTime"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit le temps n\xe9cessaire pour casser le bloc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"explosionResistance"),(0,l.kt)("td",{parentName:"tr",align:null},"D\xe9finit la r\xe9sistance du bloc aux explosions.")))))}m.isMDXComponent=!0}}]);