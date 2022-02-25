"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1211],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8240:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],s={sidebar_position:1,title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",tags:["blocs","tools"]},a=void 0,c={unversionedId:"blocs/tools/types",id:"blocs/tools/types",title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",source:"@site/docs/blocs/tools/types.md",sourceDirName:"blocs/tools",slug:"/blocs/tools/types",permalink:"/docs/blocs/tools/types",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/blocs/tools/types.md",tags:[{label:"blocs",permalink:"/docs/tags/blocs"},{label:"tools",permalink:"/docs/tags/tools"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",tags:["blocs","tools"]},sidebar:"tutorialSidebar",previous:{title:"Tiers",permalink:"/docs/blocs/tools/tiers"},next:{title:"Mod\xe8les",permalink:"/docs/category/models"}},u={},p=[{value:"Types d&#39;outil de base",id:"types-doutil-de-base",level:2},{value:"Types d&#39;outil customs",id:"types-doutil-customs",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depuis la 1.17, le type d'outil n\xe9cessaire pour r\xe9colter un bloc est d\xe9fini par un tag attribu\xe9 le contenant."),(0,i.kt)("h2",{id:"types-doutil-de-base"},"Types d'outil de base"),(0,i.kt)("p",null,"Si vous souhaitez que votre bloc soit r\xe9coltable \xe0 la main, il n'est pas n\xe9cessaire de l'ajouter dans un tag. Dans le cas contraire, assurez-vous d'ajouter votre bloc au(x) tag(s) our qu'ainsi votre bloc puisse se miner plus rapidement avec les outils associ\xe9s (et si la ",(0,i.kt)("a",{parentName:"p",href:"../properties"},"propri\xe9t\xe9")," ",(0,i.kt)("inlineCode",{parentName:"p"},"requiresToolForDrops()")," est d\xe9finie, cela impliquera que les outils sp\xe9cifi\xe9s seront les seuls pour r\xe9colter le butin du bloc) :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hache : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/axe")),(0,i.kt)("li",{parentName:"ul"},"Pioche : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/pickaxe")),(0,i.kt)("li",{parentName:"ul"},"Pelle : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/shovel")),(0,i.kt)("li",{parentName:"ul"},"Houe : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/hoe"))),(0,i.kt)("h2",{id:"types-doutil-customs"},"Types d'outil customs"),(0,i.kt)("p",null,"Pour cr\xe9er un type custom, il vous suffit de cr\xe9er un tag (qui sera contenu dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"data/modid/tags/blocks"),") ainsi que sa variable associ\xe9e comme celle-ci :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final Tag.Named<Block> MON_TOOL_TYPE = BlockTags.bind("modid:mon_tool_type");\n')),(0,i.kt)("p",null,"Il vous suffira ensuite d'utiliser ce tag dans l'appel ",(0,i.kt)("inlineCode",{parentName:"p"},"super()")," du constructeur de votre classe h\xe9riti\xe8re de ",(0,i.kt)("inlineCode",{parentName:"p"},"DiggerItem"),"."))}m.isMDXComponent=!0}}]);