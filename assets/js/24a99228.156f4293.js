"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[288],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["bases","ressources"]},u=void 0,o={unversionedId:"bases/resources/recipe",id:"bases/resources/recipe",title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",source:"@site/docs/bases/resources/recipe.md",sourceDirName:"bases/resources",slug:"/bases/resources/recipe",permalink:"/docs/bases/resources/recipe",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/bases/resources/recipe.md",tags:[{label:"bases",permalink:"/docs/tags/bases"},{label:"ressources",permalink:"/docs/tags/ressources"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["bases","ressources"]},sidebar:"tutorialSidebar",previous:{title:"Traductions",permalink:"/docs/bases/resources/lang"},next:{title:"Tags",permalink:"/docs/bases/resources/tags"}},d={},s=[{value:"Recette de base structur\xe9e",id:"recette-de-base-structur\xe9e",level:2},{value:"Recette de base non structur\xe9e",id:"recette-de-base-non-structur\xe9e",level:2},{value:"Recette du fourneau",id:"recette-du-fourneau",level:2},{value:"Recette du haut fourneau",id:"recette-du-haut-fourneau",level:2},{value:"Recette du fumoir",id:"recette-du-fumoir",level:2},{value:"Recette du tailleur de pierre",id:"recette-du-tailleur-de-pierre",level:2},{value:"Recette du feu de camp",id:"recette-du-feu-de-camp",level:2},{value:"Recette de la table de forgeron",id:"recette-de-la-table-de-forgeron",level:2}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"recette-de-base-structur\xe9e"},"Recette de base structur\xe9e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shaped",\n  "pattern": [\n    "###",\n    "###",\n    "###"\n  ],\n  "key": {\n    "#": {\n      "item": "minecraft:diamond"\n    }\n  },\n  "result": {\n    "item": "minecraft:diamond_block"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shaped"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Forme de la recette dans la table de craft (les symboles correspondants \xe0 ceux d\xe9finis dans le champ ",(0,l.kt)("inlineCode",{parentName:"td"},"key"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"Definitions des symboles comme des objets utilis\xe9s dans la recette (ici le symbole ",(0,l.kt)("inlineCode",{parentName:"td"},"#")," correspond au diamant)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,l.kt)("h2",{id:"recette-de-base-non-structur\xe9e"},"Recette de base non structur\xe9e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shapeless",\n  "ingredients": [\n    {\n      "item": "minecraft:diamond_block"\n    }\n  ],\n  "result": {\n    "item": "minecraft:diamond",\n    "count": 9\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shapeless"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (applicable dans n'importe quel ordre)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,l.kt)("h2",{id:"recette-du-fourneau"},"Recette du fourneau"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smelting",\n  "ingredient": {\n    "item": "minecraft:cobblestone"\n  },\n  "result": "minecraft:stone",\n  "experience": 0.1,\n  "cookingtime": 200\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smelting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-haut-fourneau"},"Recette du haut fourneau"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:blasting",\n  "group": "iron_ingot",\n  "ingredient": {\n    "item": "minecraft:iron_ore"\n  },\n  "result": "minecraft:iron_ingot",\n  "experience": 0.7,\n  "cookingtime": 100\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:blasting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-fumoir"},"Recette du fumoir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smoking",\n  "ingredient": {\n    "item": "minecraft:beef"\n  },\n  "result": "minecraft:cooked_beef",\n  "experience": 0.35,\n  "cookingtime": 100\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smoking"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-tailleur-de-pierre"},"Recette du tailleur de pierre"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:stonecutting",\n  "ingredient": {\n    "item": "minecraft:stone"\n  },\n  "result": "minecraft:stone_slab",\n  "count": 2\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:stonecutting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredient"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut au bloc qui doit \xeatre taill\xe9)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"Nombre d'item resultant")))),(0,l.kt)("h2",{id:"recette-du-feu-de-camp"},"Recette du feu de camp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:campfire_cooking",\n  "ingredient": {\n    "item": "minecraft:potato"\n  },\n  "result": "minecraft:baked_potato",\n  "experience": 0.35,\n  "cookingtime": 600\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:campfire_cooking"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-de-la-table-de-forgeron"},"Recette de la table de forgeron"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smithing",\n  "base": {\n    "item": "minecraft:diamond_axe"\n  },\n  "addition": {\n    "item": "minecraft:netherite_ingot"\n  },\n  "result": {\n    "item": "minecraft:netherite_axe"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smithing"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"Item devant \xeatre am\xe9lior\xe9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Second item n\xe9cessaire \xe0 l'am\xe9lioration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))))}c.isMDXComponent=!0}}]);