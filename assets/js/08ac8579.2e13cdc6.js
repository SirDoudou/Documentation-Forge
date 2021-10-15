"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[3431],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3611:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],o={sidebar_position:1,title:"Access Transformer",description:"Comment utiliser les access transformers ?",tags:["avanc\xe9"]},l=void 0,c={unversionedId:"advanced/access-transformer",id:"advanced/access-transformer",isDocsHomePage:!1,title:"Access Transformer",description:"Comment utiliser les access transformers ?",source:"@site/docs/advanced/access-transformer.md",sourceDirName:"advanced",slug:"/advanced/access-transformer",permalink:"/docs/advanced/access-transformer",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/advanced/access-transformer.md",tags:[{label:"avanc\xe9",permalink:"/docs/tags/avance"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Access Transformer",description:"Comment utiliser les access transformers ?",tags:["avanc\xe9"]},sidebar:"tutorialSidebar",previous:{title:"Recettes",permalink:"/docs/data/recipe_data_generator"},next:{title:"Dist Executor",permalink:"/docs/advanced/dist-executor"}},u=[{value:"Ajout du fichier pour les AT&#39;s",id:"ajout-du-fichier-pour-les-ats",children:[],level:2},{value:"Commentaires",id:"commentaires",children:[],level:2},{value:"Les modifieurs d&#39;acc\xe8s",id:"les-modifieurs-dacc\xe8s",children:[],level:2},{value:"Obtenir les access transformers",id:"obtenir-les-access-transformers",children:[],level:2},{value:"Exemples",id:"exemples",children:[],level:2}],d={toc:u};function p(e){var r=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les ",(0,a.kt)("inlineCode",{parentName:"p"},"access transformers")," (ou AT) permettent de modifier l'accessibilit\xe9  et la visibilit\xe9 des variables, m\xe9thodes et classes des librairies (retirer le ",(0,a.kt)("inlineCode",{parentName:"p"},"final"),", changer l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),", etc...)."),(0,a.kt)("h2",{id:"ajout-du-fichier-pour-les-ats"},"Ajout du fichier pour les AT's"),(0,a.kt)("p",null,"Pour sp\xe9cifier \xe0 ForgeGradle que le mod utilisera les access transformers, vous devez ajouter cette ligne dans le build.gradle (la cat\xe9gorie ",(0,a.kt)("inlineCode",{parentName:"p"},"minecraft")," est normalement d\xe9j\xe0 pr\xe9sente dans votre fichier) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"minecraft {\n    accessTransformer = file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n")),(0,a.kt)("p",null,"Apr\xe8s cela, vous devrez cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"accesstransformer.cfg")," au niveau du chemin sp\xe9cifi\xe9."),(0,a.kt)("p",null,"Pour appliquer les ",(0,a.kt)("inlineCode",{parentName:"p"},"access trasnformers")," apr\xe8s une modification du fichier, vous devrez rafraichir le projet gradle."),(0,a.kt)("h2",{id:"commentaires"},"Commentaires"),(0,a.kt)("p",null,"Tous les textes succ\xe9dant un ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," avant la fin de la ligne seront transcrits comme des commentaires et ne seront pas pris en compte."),(0,a.kt)("h2",{id:"les-modifieurs-dacc\xe8s"},"Les modifieurs d'acc\xe8s"),(0,a.kt)("p",null,"Les modificateurs d'acc\xe8s sp\xe9cifient vers quelle nouvelle visibilit\xe9 la cible donn\xe9e sera transform\xe9e. Par ordre d\xe9croissant de visibilit\xe9 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public")," - visible pour toutes les classes \xe0 l'int\xe9rieur et \xe0 l'ext\xe9rieur de son package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protected")," - visible uniquement pour les classes \xe0 l'int\xe9rieur du package et les sous-classes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," - visible uniquement pour les classes \xe0 l'int\xe9rieur du package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private")," - visible uniquement \xe0 l'int\xe9rieur de la classe")),(0,a.kt)("p",null,"Le modificateur sp\xe9cial +f et -f peut \xeatre ajout\xe9 aux modificateurs mentionn\xe9s plus haut afin d'ajouter ou de supprimer l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"final"),"."),(0,a.kt)("h2",{id:"obtenir-les-access-transformers"},"Obtenir les access transformers"),(0,a.kt)("p",null,"Pour obtenir les access transformers, vous pouvez rejoindre le ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/UvedJ9m"},"discord")," de Forge, vous rendre dans le channel bot-commands et utiliser ces 3 commandes (ceci concerne les mappings officiels) :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!mojf")," suivi du nom de la variable (et cela peut \xeatre pr\xe9c\xe9d\xe9 du nom de la classe suivie d'un point pour plus de pr\xe9cisions, ex : ",(0,a.kt)("inlineCode",{parentName:"li"},"Block.harvestLevel"),") pour obtenir la ligne d'access transformer correspondante."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!mojm")," suivi du nom de la fonction (et cela peut \xeatre pr\xe9c\xe9d\xe9 du nom de la classe suivie d'un point pour plus de pr\xe9cisions, ex : ",(0,a.kt)("inlineCode",{parentName:"li"},"Block.asBlock"),") pour obtenir la ligne d'access transformer correspondante."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!mojc")," suivi du nom de la classe pour obtenir la ligne d'access transformer correspondante.")),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# D\xe9finis la visibilit\xe9 de la m\xe9thode en public\npublic net.minecraft.data.loot.BlockLoot m_124254_(Lnet/minecraft/world/level/block/Block;Lnet/minecraft/world/item/Item;)Lnet/minecraft/world/level/storage/loot/LootTable$Builder; # createStemDrops\n\n# D\xe9finis la visibilit\xe9 de la variable en protected\nprotected net.minecraft.client.gui.Gui f_168670_ # LINE_HEIGHT\n\n# D\xe9finis la visibilit\xe9 de la classe en protected\nprotected net.minecraft.client.gui.screens.MenuScreens\n")))}p.isMDXComponent=!0}}]);