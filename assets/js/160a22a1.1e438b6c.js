"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7427],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7798:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:1,title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",tags:["enregistrement"]},s=void 0,u={unversionedId:"register/deferred",id:"version-1.17/register/deferred",title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",source:"@site/versioned_docs/version-1.17/register/deferred.md",sourceDirName:"register",slug:"/register/deferred",permalink:"/docs/1.17/register/deferred",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/versioned_docs/version-1.17/register/deferred.md",tags:[{label:"enregistrement",permalink:"/docs/1.17/tags/enregistrement"}],version:"1.17",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deferred Register",description:"Comment utiliser les Deferred Registers ?",tags:["enregistrement"]},sidebar:"tutorialSidebar",previous:{title:"Enregistrement",permalink:"/docs/1.17/category/register"},next:{title:"Items",permalink:"/docs/1.17/category/items"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pour cr\xe9er un Deferred Register, il nous faut tout d'abord ajouter une variable dans une classe o\xf9 nous enregistrerons tous les \xe9l\xe9ments concern\xe9s (comme les items, les blocs, etc...) comme celle-ci :"),(0,i.kt)("h1",{id:"cr\xe9er-le-deferred-register"},"Cr\xe9er le Deferred Register"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final DeferredRegister<Item> NOM_VARIABLE = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");\n')),(0,i.kt)("p",null,"Quelques explications :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La classe r\xe9f\xe9renc\xe9e entre les chevrons doit correspondre au type d\xe9finit par le premier argument."),(0,i.kt)("li",{parentName:"ul"},"Le premier argument permet de d\xe9finir le type d'\xe9l\xe9ment que nous allons pouvoir enregistrer (ici, cela sera pour les items). Il en existe different types :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BLOCKS"),(0,i.kt)("li",{parentName:"ul"},"FLUIDS"),(0,i.kt)("li",{parentName:"ul"},"ITEMS"),(0,i.kt)("li",{parentName:"ul"},"MOB_EFFECTS"),(0,i.kt)("li",{parentName:"ul"},"SOUND_EVENTS"),(0,i.kt)("li",{parentName:"ul"},"POTIONS"),(0,i.kt)("li",{parentName:"ul"},"ENCHANTMENTS"),(0,i.kt)("li",{parentName:"ul"},"ENTITIES"),(0,i.kt)("li",{parentName:"ul"},"BLOCK_ENTITIES"),(0,i.kt)("li",{parentName:"ul"},"PARTICLE_TYPES"),(0,i.kt)("li",{parentName:"ul"},"CONTAINERS"),(0,i.kt)("li",{parentName:"ul"},"PAINTING_TYPES"),(0,i.kt)("li",{parentName:"ul"},"RECIPE_SERIALIZERS"),(0,i.kt)("li",{parentName:"ul"},"ATTRIBUTES"),(0,i.kt)("li",{parentName:"ul"},"STAT_TYPES"),(0,i.kt)("li",{parentName:"ul"},"PROFESSIONS"),(0,i.kt)("li",{parentName:"ul"},"POI_TYPES"),(0,i.kt)("li",{parentName:"ul"},"MEMORY_MODULE_TYPES"),(0,i.kt)("li",{parentName:"ul"},"SENSOR_TYPES"),(0,i.kt)("li",{parentName:"ul"},"SCHEDULES"),(0,i.kt)("li",{parentName:"ul"},"ACTIVITIES"),(0,i.kt)("li",{parentName:"ul"},"WORLD_CARVERS"),(0,i.kt)("li",{parentName:"ul"},"SURFACE_BUILDERS"),(0,i.kt)("li",{parentName:"ul"},"FEATURES"),(0,i.kt)("li",{parentName:"ul"},"DECORATORS"),(0,i.kt)("li",{parentName:"ul"},"CHUNK_STATUS"),(0,i.kt)("li",{parentName:"ul"},"STRUCTURE_FEATURES"),(0,i.kt)("li",{parentName:"ul"},"BLOCK_STATE_PROVIDER_TYPES"),(0,i.kt)("li",{parentName:"ul"},"BLOCK_PLACER_TYPES"),(0,i.kt)("li",{parentName:"ul"},"FOLIAGE_PLACER_TYPES"),(0,i.kt)("li",{parentName:"ul"},"TREE_DECORATOR_TYPES"),(0,i.kt)("li",{parentName:"ul"},"BIOMES"),(0,i.kt)("li",{parentName:"ul"},"DATA_SERIALIZERS"),(0,i.kt)("li",{parentName:"ul"},"LOOT_MODIFIER_SERIALIZERS"),(0,i.kt)("li",{parentName:"ul"},"WORLD_TYPES"))),(0,i.kt)("li",{parentName:"ul"},"Le deuxi\xe8me quant \xe0 lui est le modid sous lequel votre \xe9l\xe9ment sera enregistr\xe9 (il est pr\xe9f\xe9rable de mettre le modid de votre mod).")),(0,i.kt)("p",null,"Il ne reste plus qu'\xe0 faire comprendre au jeu que le Deferred Register existe et pour cela il faudra disposer ce bout de code dans le constructeur de votre classe principale."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Classe.NOM_VARIABLE.register(FMLJavaModLoadingContext.get().getModEventBus());\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tous les noms de classes, de variables et de m\xe9thodes sont personnalisables comme vous le souhaitez, et cela, tout au long du tutoriel."))),(0,i.kt)("p",null,"Voil\xe0 maintenant le jeu pourra reconnaitre le Deferred Register. Il ne reste plus qu'\xe0 enregistrer des \xe9l\xe9ments du type de celui-ci"))}d.isMDXComponent=!0}}]);