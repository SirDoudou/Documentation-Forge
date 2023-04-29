"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42446:(e,t,n)=>{n.r(t),n.d(t,{EventList:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l=JSON.parse('{"W":[{"title":"\xc9v\xe9nements concernants les blocs","events":[{"name":"BlockEvent.BlockToolModificationEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche lorsque le joueur clique sur un bloc avec un outil en main pour changer l\'\xe9tat du bloc (utilis\xe9 par exemple pour d\xe9terminer si une hache peut retirer les \xe9corces d\'une b\xfbche).","cancelable":true},{"name":"BlockEvent.BreakEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand un bloc est cass\xe9.","cancelable":true},{"name":"BlockEvent.CreateFluidSourceEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche pour permettre de v\xe9rifier si un bloc qui n\'est pas une source peut se transform\xe9e en cette derni\xe8re.","cancelable":false},{"name":"BlockEvent.CropGrowEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand une culture grandi.","cancelable":false},{"name":"BlockEvent.EntityMultiPlaceEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand le fait de poser un bloc provoque la cr\xe9ation de multiples blocs (comme par exemple avec les lits).","cancelable":true},{"name":"BlockEvent.EntityPlaceEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand un bloc est plac\xe9.","cancelable":true},{"name":"BlockEvent.FarmlandTrampleEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche lorsqu\'une terre labour\xe9e est pi\xe9tin\xe9e (re-transform\xe9e en terre).","cancelable":true},{"name":"BlockEvent.FluidPlaceBlockEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche lorsqu\'un liquide place un bloc (comme pour un g\xe9n\xe9rateur de pierres ou du feu allum\xe9 par de la lave \xe0 proximit\xe9).","cancelable":true},{"name":"BlockEvent.NeighborNotifyEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand une mise \xe0 jour physique se produit sur un bloc.","cancelable":true},{"name":"BlockEvent.PortalSpawnEvent","description":"Cet \xe9v\xe9nement se d\xe9clenche quand un portail du Nether est sur le point d\'apparaitre.","cancelable":true}]}]}'),a={title:"Liste des \xe9v\xe9nements",description:"Quelles sont les \xe9v\xe9nements disponibles avec Forge ?",hide_table_of_contents:!0,tags:["\xe9v\xe9nements"]},c=void 0,s={unversionedId:"events/list",id:"events/list",title:"Liste des \xe9v\xe9nements",description:"Quelles sont les \xe9v\xe9nements disponibles avec Forge ?",source:"@site/docs/events/list.mdx",sourceDirName:"events",slug:"/events/list",permalink:"/events/list",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/events/list.mdx",tags:[{label:"\xe9v\xe9nements",permalink:"/tags/evenements"}],version:"current",lastUpdatedBy:"Mysterious_Dev",frontMatter:{title:"Liste des \xe9v\xe9nements",description:"Quelles sont les \xe9v\xe9nements disponibles avec Forge ?",hide_table_of_contents:!0,tags:["\xe9v\xe9nements"]},sidebar:"documentationSidebar",previous:{title:"\xc9v\xe9nements",permalink:"/category/events"},next:{title:"Items",permalink:"/category/items"}},i={},u=[];function p(){return(0,o.kt)("div",null,l.W.map(((e,t)=>(0,o.kt)("div",null,(0,o.kt)("h2",{id:e.title.toLowerCase().replaceAll(" ","-")},e.title),e.events.map(((e,t)=>(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("strong",null,e.name)),(0,o.kt)("div",null,(0,o.kt)("p",null,e.description),(0,o.kt)("strong",null,"Annulable : ",!0===e.cancelable?"\u2714":"\u274c")))))))))}const d={toc:u,EventList:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Ceci est une liste non exhaustive des \xe9v\xe9nements disponibles avec ",(0,o.kt)("a",{parentName:"p",href:"http://minecraftforge.net/"},"Minecraft Forge"),". Il vous est cependant possible de contribuer \xe0 cette liste. Pour cela vous pouvez proposer une modification de ce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/blob/master/static/file/events.json"},"fichier"),".")),(0,o.kt)(p,{mdxType:"EventList"}))}m.isMDXComponent=!0}}]);