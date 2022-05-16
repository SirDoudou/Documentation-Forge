"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7241],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?l.createElement(b,o(o({ref:t},u),{},{components:n})):l.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"Bloc basique",description:"Comment cr\xe9er un bloc basique ?",tags:["blocs"]},i=void 0,c={unversionedId:"blocs/basic",id:"blocs/basic",title:"Bloc basique",description:"Comment cr\xe9er un bloc basique ?",source:"@site/docs/blocs/basic.md",sourceDirName:"blocs",slug:"/blocs/basic",permalink:"/docs/blocs/basic",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/blocs/basic.md",tags:[{label:"blocs",permalink:"/docs/tags/blocs"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Bloc basique",description:"Comment cr\xe9er un bloc basique ?",tags:["blocs"]},sidebar:"tutorialSidebar",previous:{title:"Blocs",permalink:"/docs/category/blocs"},next:{title:"Propri\xe9t\xe9s des blocs",permalink:"/docs/blocs/properties"}},u={},d=[{value:"Type d&#39;enregistrement",id:"type-denregistrement",level:2},{value:"DeferredRegister",id:"deferredregister",level:3},{value:"Enregistrer le bloc",id:"enregistrer-le-bloc",level:2},{value:"Sans classe custom",id:"sans-classe-custom",level:3},{value:"Avec classe custom",id:"avec-classe-custom",level:3},{value:"Ressources",id:"ressources",level:2},{value:"Blockstate",id:"blockstate",level:3},{value:"Mod\xe8les et texture",id:"mod\xe8les-et-texture",level:3},{value:"Mod\xe8le du bloc",id:"mod\xe8le-du-bloc",level:4},{value:"Mod\xe8le de l&#39;item",id:"mod\xe8le-de-litem",level:4},{value:"Texture",id:"texture",level:4},{value:"Traductions",id:"traductions",level:3},{value:"Datas",id:"datas",level:2},{value:"Loot Tables",id:"loot-tables",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-denregistrement"},"Type d'enregistrement"),(0,r.kt)("p",null,"Pour que le bloc soit reconnu par le jeu, il nous faut l'enregistrer, et pour cela deux choix s'offrent \xe0 nous. Soit les events, soit les DeferredRegister."),(0,r.kt)("h3",{id:"deferredregister"},"DeferredRegister"),(0,r.kt)("p",null,"Veuillez-vous referrer \xe0 la ",(0,r.kt)("a",{parentName:"p",href:"../register/deferred"},"page sur ce sujet"),"."),(0,r.kt)("h2",{id:"enregistrer-le-bloc"},"Enregistrer le bloc"),(0,r.kt)("p",null,"Maintenant que l'un des types d'enregistrement a \xe9t\xe9 vu, il ne nous reste plus qu'\xe0 enregistrer le bloc et ici deux types sont possibles, enregistrer le bloc avec une classe custom ou sans."),(0,r.kt)("h3",{id:"sans-classe-custom"},"Sans classe custom"),(0,r.kt)("p",null,"Cette mani\xe8re nous permet d'enregistrer un bloc, mais celui-ci sera tr\xe8s basique (c'est-\xe0-dire qu'on ne pourra pas d\xe9finir une action lors d'un clic sur le bloc, ou m\xeame lors de sa destruction)."),(0,r.kt)("p",null,"Ainsi pour faire l'enregistrement, ajoutez une variable comme celle-ci dans la classe contenant le DeferredRegister :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Block> MON_BLOC = BLOCKS.register("mon_bloc", () -> new Block(Block.Properties.of(Material.STONE, MaterialColor.STONE)));\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tous les noms de classes, de variables et de m\xe9thodes sont personnalisables comme vous le souhaitez, et cela, tout au long du ",(0,r.kt)("em",{parentName:"p"},"tutoriel"),"."))),(0,r.kt)("p",null,"Si vous souhaitez en savoir un peu plus sur les diff\xe9rentes propri\xe9t\xe9s disponibles pour les blocs, voici une ",(0,r.kt)("a",{parentName:"p",href:"./properties"},"page d\xe9di\xe9e \xe0 ceci"),"."),(0,r.kt)("h3",{id:"avec-classe-custom"},"Avec classe custom"),(0,r.kt)("p",null,"Ici cette mani\xe8re nous permettra plus tard, d'ajouter des comportements au bloc (nous ne verrons cela que dans un prochain chapitre).\nPour cela, vous devez tout d'abord cr\xe9er une classe custom \xe9tendue de la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"Block"),", ce qui nous donne une classe du type :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MonBloc extends Block {\n    public MonBloc(Properties properties) {\n        super(properties);\n    }\n}\n")),(0,r.kt)("p",null,"Ainsi nous pourrons enregistrer le bloc comme dans la technique sans classe custom sauf que nous ferons un ",(0,r.kt)("inlineCode",{parentName:"p"},"new MobBloc")," et non ",(0,r.kt)("inlineCode",{parentName:"p"},"new Block"),", ce qui donne une variable du type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Block> MON_BLOC = BLOCKS.register("mon_bloc", () -> new MonBloc(Block.Properties.of(Material.STONE, MaterialColor.STONE)));\n')),(0,r.kt)("h2",{id:"ressources"},"Ressources"),(0,r.kt)("p",null,"Maintenant que notre bloc est ajout\xe9, il faut lui donner une blockstate, un mod\xe8le, une texture, un nom qui d\xe9pendra de la langue ainsi qu'une loottable qui permettra de d\xe9finir les loots."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title='Arborescence basique des ressources pour un mod'",title:"'Arborescence",basique:!0,des:!0,ressources:!0,pour:!0,un:!0,"mod'":!0},"assets\n\u2514\u2500\u2500 modid\n    \u251c\u2500\u2500 blockstates\n    \u251c\u2500\u2500 lang\n    \u251c\u2500\u2500 models\n    \u2502     \u251c\u2500\u2500 block\n    \u2502     \u2514\u2500\u2500 item\n    \u2514\u2500\u2500 textures\n          \u251c\u2500\u2500 block\n          \u2514\u2500\u2500 item\n")),(0,r.kt)("h3",{id:"blockstate"},"Blockstate"),(0,r.kt)("p",null,"Une blockstate dans Minecraft est un moyen de d\xe9finir l'apparence d'un bloc selon des param\xe8tres appel\xe9s ",(0,r.kt)("strong",{parentName:"p"},"blockstates"),". Ici notre bloc \xe9tant basique, celui-ci n'en comporte pas ce qui nous am\xe8ne \xe0 une blockstate du type :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "variants": {\n    "": {\n      "model": "modid:block/mon_bloc"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Ici le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"mod\xe8le")," d\xe9finit le chemin vers le mod\xe8le du bloc contenu dans le dossier models."),(0,r.kt)("h3",{id:"mod\xe8les-et-texture"},"Mod\xe8les et texture"),(0,r.kt)("p",null,"Pour un bloc, son mod\xe8le permet de d\xe9finir sa forme ainsi que les textures qui lui seront appliqu\xe9es."),(0,r.kt)("h4",{id:"mod\xe8le-du-bloc"},"Mod\xe8le du bloc"),(0,r.kt)("p",null,"Ici nous appliquerons un mod\xe8le au bloc assimilable au bloc de diamant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "minecraft:block/cube_all",\n  "textures": {\n    "all": "modid:block/mon_bloc"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parent")," correspond au mod\xe8le maitre que le bloc va utiliser."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"textures")," correspond aux textures appliqu\xe9es au bloc."),(0,r.kt)("h4",{id:"mod\xe8le-de-litem"},"Mod\xe8le de l'item"),(0,r.kt)("p",null,"Le bloc dans l'inventaire \xe9tant consid\xe9r\xe9 comme un item, il nous faut aussi lui donner un mod\xe8le, ici, cela sera encore une fois assimilable au mod\xe8le item du bloc de diamant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent": "modid:block/mon_bloc"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ici le mod\xe8le de l'item va aller chercher celui du bloc (celui-ci \xe9tant param\xe9tr\xe9 pour avoir le rendu qu'on conna\xeet dans l'inventaire)."))),(0,r.kt)("h4",{id:"texture"},"Texture"),(0,r.kt)("p",null,"Comme sp\xe9cifi\xe9 dans le mod\xe8le, la texture se situera dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"textures/block")," et aura comme nom ",(0,r.kt)("inlineCode",{parentName:"p"},"mon_bloc.png")," (l'extension est importante)."),(0,r.kt)("h3",{id:"traductions"},"Traductions"),(0,r.kt)("p",null,"Un bloc \xe0 sa cr\xe9ation se voie attribuer de mani\xe8re syst\xe9matique un nom d\xe9localis\xe9. La raison \xe9tant que celui-ci permet de traduire le nom du bloc dans toutes les langues support\xe9es par le jeu."),(0,r.kt)("p",null,"Ici le bloc ne comportera qu'un nom traduit en anglais (en_us) qui est la langue de base du jeu (en cas de traduction manquante dans une autre langue, le jeu appliquera cette traduction), mais voici toutes les ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},"langues")," disponible dans le jeu avec leurs codes respectifs."),(0,r.kt)("p",null,"Les fichiers de langue sont situ\xe9s dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"lang")," des ressources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=en_us.json",title:"en_us.json"},'{\n  "block.modid.mon_bloc": "My Block"\n}\n')),(0,r.kt)("h2",{id:"datas"},"Datas"),(0,r.kt)("p",null,"Les datas dans Minecraft correspondes \xe0 des ressources cot\xe9 serveur comme les recettes, les tags, les structures et m\xeames les loot tables n\xe9cessaires aux blocs."),(0,r.kt)("h3",{id:"loot-tables"},"Loot Tables"),(0,r.kt)("p",null,"Ici nous appliquerons une ",(0,r.kt)("em",{parentName:"p"},"loot table")," similaire \xe0 celle du bloc de diamant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:block",\n  "pools": [\n    {\n      "rolls": 1.0,\n      "bonus_rolls": 0.0,\n      "entries": [\n        {\n          "type": "minecraft:item",\n          "name": "modid:mon_bloc"\n        }\n      ],\n      "conditions": [\n        {\n          "condition": "minecraft:survives_explosion"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Quelques explications s'imposent :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," d\xe9finit le type de loot table (block, chest, etc...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pools")," d\xe9finit les listes d'item disponibles avec le nombre d'items \xe0 s\xe9lectionner ainsi que les items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conditions")," d\xe9finit les conditions qui doivent \xeatre respect\xe9es pour que le bloc ",(0,r.kt)("em",{parentName:"li"},"drop")," quelque chose.")))}m.isMDXComponent=!0}}]);