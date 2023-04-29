"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={slug:"forge-119-410",title:"Forge 1.19 41.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour",1.19]},i=void 0,l={permalink:"/news/forge-119-410",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2022-06-07-forge-119-410.md",source:"@site/news/2022-06-07-forge-119-410.md",title:"Forge 1.19 41.0",description:"Minecraft 1.19 \xe0 peine sortie, Forge n'en a pas attendu plus pour sortir sa mise \xe0 jour 1.19-41.0.0. Quelques nouveaut\xe9s y sont pr\xe9sentes.",date:"2022-06-07T00:00:00.000Z",formattedDate:"7 juin 2022",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.19",permalink:"/news/tags/1-19"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-119-410",title:"Forge 1.19 41.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19"]},prevItem:{title:"Forge 1.19 41.1",permalink:"/news/forge-119-411"},nextItem:{title:"Forge 1.18.2 40.1",permalink:"/news/forge-1182-401"}},s={authorsImageUrls:[void 0]},u=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Changements",id:"changements",level:3},{value:"Suppressions",id:"suppressions",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Minecraft 1.19 \xe0 peine sortie, Forge n'en a pas attendu plus pour sortir sa mise \xe0 jour 1.19-41.0.0. Quelques nouveaut\xe9s y sont pr\xe9sentes."),(0,a.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remplacement de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"BiomeLoadingEvent")," par ce qui est appel\xe9 les biomes modifiers (m\xeame principe que les loot modifiers mais pour les biomes)"),(0,a.kt)("li",{parentName:"ul"},"Ajout d'un nouvel \xe9v\xe9nement, ",(0,a.kt)("inlineCode",{parentName:"li"},"PlayLevelSoundEvent")," (rempla\xe7ant de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"PlaySoundAtEntityEvent"),")")),(0,a.kt)("h3",{id:"changements"},"Changements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les fonctions de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientPlayerNetworkEvent.LoggedOutEvent")," sont d\xe9sormais marqu\xe9es comme ",(0,a.kt)("em",{parentName:"li"},"nullables")),(0,a.kt)("li",{parentName:"ul"},"L'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundLoadEvent ")," est renomm\xe9 en ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundEngineLoadEvent")),(0,a.kt)("li",{parentName:"ul"},"D\xe9placement des ",(0,a.kt)("em",{parentName:"li"},"hooks")," de ",(0,a.kt)("inlineCode",{parentName:"li"},"RenderBlockOverlayEvent")," vers ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient")),(0,a.kt)("li",{parentName:"ul"},"Mise \xe0 jour vers ",(0,a.kt)("a",{parentName:"li",href:"https://docs.gradle.org/7.4.2/release-notes.html"},"Gradle 7.4.2")),(0,a.kt)("li",{parentName:"ul"},"Utilisation de ",(0,a.kt)("inlineCode",{parentName:"li"},"SLF4J")," plut\xf4t que ",(0,a.kt)("inlineCode",{parentName:"li"},"Log4j")),(0,a.kt)("li",{parentName:"ul"},"L'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundLoadEvent")," se d\xe9clenche d\xe9sormais sur le canal d'\xe9v\xe9nements des mods")),(0,a.kt)("h3",{id:"suppressions"},"Suppressions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suppression de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundSetupEvent")),(0,a.kt)("li",{parentName:"ul"},"Suppression de l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"li"},"EntityEvent.CanUpdate")),(0,a.kt)("li",{parentName:"ul"},"Suppression de la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeWorldPresetScreens")),(0,a.kt)("li",{parentName:"ul"},"Suppression de l'interface ",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeRegistryEntry"))))}m.isMDXComponent=!0}}]);