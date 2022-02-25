"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7765],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1,title:"Introduction",description:"Qu'est ce que les data generators ?",tags:["data generators","introduction"]},l=void 0,u={unversionedId:"data/intro",id:"version-1.17/data/intro",title:"Introduction",description:"Qu'est ce que les data generators ?",source:"@site/versioned_docs/version-1.17/data/intro.md",sourceDirName:"data",slug:"/data/intro",permalink:"/docs/1.17/data/intro",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/versioned_docs/version-1.17/data/intro.md",tags:[{label:"data generators",permalink:"/docs/1.17/tags/data-generators"},{label:"introduction",permalink:"/docs/1.17/tags/introduction"}],version:"1.17",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",description:"Qu'est ce que les data generators ?",tags:["data generators","introduction"]},sidebar:"tutorialSidebar",previous:{title:"Data Generators",permalink:"/docs/1.17/category/data-generators"},next:{title:"Recettes",permalink:"/docs/1.17/data/recipe"}},c={},p=[{value:"GatherDataEvent",id:"gatherdataevent",level:2},{value:"&quot;build.gradle&quot;",id:"buildgradle",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depuis la 1.8, Minecraft voit de plus en plus de ses fonctionnalit\xe9s mises sous forme de\njson. Par exemple : les mod\xe8les de blocs/items, les loot tables, les recettes, etc...\nEt vous devez savoir comme il est p\xe9nible d'\xe9crire du json \xe0 la main. C'est un probl\xe8me\nque m\xeame Mojang eut et suite \xe0 cela, les d\xe9veloppeurs du jeu mirent \xe0 disposition du\ncode permettant de g\xe9n\xe9rer (presque) automatiquement tous ces jsons."),(0,i.kt)("p",null,"Ce sont les ",(0,i.kt)("strong",{parentName:"p"},"Data Generators"),"."),(0,i.kt)("p",null,"Dans cet article nous verrons simplement les pr\xe9requis pour utiliser ces dits g\xe9n\xe9rateurs.\nNous ne verrons pas l'ensemble des g\xe9n\xe9rateurs dans cette m\xeame section. Cependant, une\nsection sera d\xe9di\xe9e pour l'ensemble des g\xe9n\xe9rateurs disponibles !"),(0,i.kt)("h2",{id:"gatherdataevent"},"GatherDataEvent"),(0,i.kt)("p",null,"Un event a \xe9t\xe9 cr\xe9\xe9 expr\xe8s par Forge pour que l'on puisse utiliser les g\xe9n\xe9rateurs.\nNous allons cr\xe9er une classe sp\xe9cifique pour a\xe9rer notre code et \xe9viter de surcharger\nnotre classe principale (ce choix est p\xfbrement personnel, \xe0 vous de choisir ce qui\nvous convient le mieux)"),(0,i.kt)("p",null,"Dans un nouveau package ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", on va cr\xe9er une classe ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGen")," et y \xe9crire :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)\npublic class DataGen {\n\n    public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);\n\n    @SubscribeEvent\n    public static void dataGen(GatherDataEvent e)\n    {\n        DataGenerator generator = e.getGenerator();\n    }\n}\n")),(0,i.kt)("p",null,"Allons-y pas \xe0 pas pour les explications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)\n")),(0,i.kt)("p",null,"Tout d'abord, nous avons l'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@Mod.EventBusSubscriber")," qui permets de signaler\n\xe0 Forge la pr\xe9sence de notre classe et que cette derni\xe8re \xe9coute des \xe9v\xe8nements.\nUtiliser cette annotation nous permet d'enregistrer tous les m\xe9thodes statiques de notre\nclasse ayant un event de Forge en param\xe8tre et l'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@SubscribeEvent"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);\n")),(0,i.kt)("p",null,"Ici, je cr\xe9e une variable de type ",(0,i.kt)("inlineCode",{parentName:"p"},"ExistingFileHelper")," qui me servira pour mes diff\xe9rents\ng\xe9n\xe9rateurs \xe0 l'avenir. Initialement, les g\xe9n\xe9rateurs v\xe9rifient que certains fichiers existent\nlorsqu'on g\xe9n\xe9re un asset. Par exemple, pour les mod\xe8les d'item, si la texture n'est pas\npr\xe9sente dans les fichiers du mod, le g\xe9n\xe9rateur renvoie une erreur. Cette fonctionnalit\xe9\npeut \xeatre utile dans certains cas, mais dans le n\xf4tre, ignorer ses v\xe9rifications\nnous facilitera le travail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void dataGen(final GatherDataEvent e)\n{\n    DataGenerator generator = e.getGenerator();\n}\n")),(0,i.kt)("p",null,"Enfin, on termine par la m\xe9thode qui nous int\xe9resse le plus, celle qui contiendra tous\nnos g\xe9n\xe9rateurs."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Veillez bien \xe0 ce que l'annotation @SubscribeEvent soit pr\xe9sente, et \xe0 ce que la m\xe9thode\nsoit statique !"))),(0,i.kt)("p",null,"Il nous faut \xe9galement un param\xe8tre de type ",(0,i.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," qui est l'event cl\xe9 comme\npr\xe9cis\xe9 plus haut."),(0,i.kt)("p",null,"Derni\xe8re chose, on cr\xe9e une variable de type ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGenerator")," faisant r\xe9f\xe9rence au g\xe9n\xe9rateur\nde l'event que l'on gardera bien au chaud pour les diff\xe9rents g\xe9n\xe9rateurs."),(0,i.kt)("h2",{id:"buildgradle"},'"build.gradle"'),(0,i.kt)("p",null,"Il reste un petit d\xe9tail pour \xe9viter tout probl\xe8me dans votre ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle"),".\nRendez vous vers la ligne 99. Vous devriez rep\xe9rer cette ligne :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"args '--mod', 'testmod', '--all', '--output', file('src/generated/resources/'), '--existing', file('src/main/resources/')\n")),(0,i.kt)("p",null,"La seule chose \xe0 changer est la deuxi\xe8me paire de guillemets o\xf9 vous devez ins\xe9rer\nvotre modid. Dans mon cas c'est ",(0,i.kt)("inlineCode",{parentName:"p"},"testmod"),"."),(0,i.kt)("p",null,"Une fois cela fait, relancez la t\xe2che gradle ",(0,i.kt)("inlineCode",{parentName:"p"},"genIntellijRuns")," si vous \xeates sur IntelliJ\nou bien ",(0,i.kt)("inlineCode",{parentName:"p"},"genEclipseRuns")," si vous \xeates sur Eclipse."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"D\xe9sormais pour v\xe9rifier si tout fonctionne bien, vous pouvez ins\xe9rer un ",(0,i.kt)("em",{parentName:"p"},"print")," dans la\nm\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"dataGen")," et ex\xe9cuter la configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"runData")," dans votre IDE pour voir si votre\nmessage s'affiche bien."))))}m.isMDXComponent=!0}}]);