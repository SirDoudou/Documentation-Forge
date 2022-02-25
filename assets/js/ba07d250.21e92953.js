"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[7682],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?n.createElement(v,l(l({ref:a},u),{},{components:t})):n.createElement(v,l({ref:a},u))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9894:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={sidebar_position:3,title:"Capabilities",description:"Comment utiliser les capabilities ?",tags:["avanc\xe9"]},p=void 0,s={unversionedId:"advanced/capabilities",id:"advanced/capabilities",title:"Capabilities",description:"Comment utiliser les capabilities ?",source:"@site/docs/advanced/capabilities.md",sourceDirName:"advanced",slug:"/advanced/capabilities",permalink:"/docs/advanced/capabilities",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/advanced/capabilities.md",tags:[{label:"avanc\xe9",permalink:"/docs/tags/avance"}],version:"current",lastUpdatedBy:"Mireole",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Capabilities",description:"Comment utiliser les capabilities ?",tags:["avanc\xe9"]},sidebar:"tutorialSidebar",previous:{title:"Dist Executor",permalink:"/docs/advanced/dist-executor"}},u={},c=[{value:"Utiliser une Capability",id:"utiliser-une-capability",level:2},{value:"Attacher une Capability",id:"attacher-une-capability",level:3},{value:"R\xe9cup\xe9rer l&#39;instance d&#39;une capability",id:"r\xe9cup\xe9rer-linstance-dune-capability",level:4},{value:"Attacher une Capability",id:"attacher-une-capability-1",level:4},{value:"R\xe9cup\xe9rer la Capability",id:"r\xe9cup\xe9rer-la-capability",level:3},{value:"Sauvegarder la Capability",id:"sauvegarder-la-capability",level:3},{value:"Cr\xe9er une Capability",id:"cr\xe9er-une-capability",level:3},{value:"L&#39;interface de la Capability",id:"linterface-de-la-capability",level:4},{value:"Les impl\xe9mentations de l&#39;interface de votre Capability",id:"les-impl\xe9mentations-de-linterface-de-votre-capability",level:4},{value:"Cr\xe9er la classe contenant l&#39;instance de la Capability",id:"cr\xe9er-la-classe-contenant-linstance-de-la-capability",level:4},{value:"Enregistrer la Capability",id:"enregistrer-la-capability",level:4}],d={toc:c};function m(e){var a=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les ",(0,r.kt)("inlineCode",{parentName:"p"},"capabilities")," sont un syst\xe8me mis \xe0 disposition par Forge permettant de stocker des donn\xe9es sur des ",(0,r.kt)("strong",{parentName:"p"},"BlockEntities"),"(TileEntities), des ",(0,r.kt)("strong",{parentName:"p"},"Entities"),", des ",(0,r.kt)("strong",{parentName:"p"},"ItemStacks"),", des ",(0,r.kt)("strong",{parentName:"p"},"Levels"),"(Worlds) et des ",(0,r.kt)("strong",{parentName:"p"},"LevelChunks"),"(Chunks)."),(0,r.kt)("h2",{id:"utiliser-une-capability"},"Utiliser une Capability"),(0,r.kt)("p",null,"Forge fournit par d\xe9faut trois capabilities : ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemHandler"),", qui permet de stocker des items, ",(0,r.kt)("inlineCode",{parentName:"p"},"IFluidHandler"),", qui permet de stocker des liquides et enfin ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),", qui permet de stocker de l'\xe9nergie."),(0,r.kt)("p",null,"Une capability poss\xe8de au minimum normalement trois classes : l'interface(Exemple : ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemHandler"),"), l'(les) impl\xe9mentation(s) par d\xe9faut de la capability(Exemple : ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStackHandler"),") et enfin la classe qui contient l'instance de la capability et qui sert \xe0 l'enregistrer(Exemple : ",(0,r.kt)("inlineCode",{parentName:"p"},"CapabilityItemHandler"),")."),(0,r.kt)("p",null,"Pour les utiliser, il faut d'abord les attacher \xe0 la ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Level"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"LevelChunk")," de votre choix. "),(0,r.kt)("h3",{id:"attacher-une-capability"},"Attacher une Capability"),(0,r.kt)("h4",{id:"r\xe9cup\xe9rer-linstance-dune-capability"},"R\xe9cup\xe9rer l'instance d'une capability"),(0,r.kt)("p",null,"Pour attacher une capability, il faut d\xe9j\xe0 poss\xe9der son unique instance. Pour cela, vous pouvez l'obtenir soit dans la classe qui la contient par d\xe9faut, soit en obtenant une autre r\xe9f\xe9rence de la m\xeame instance en utilisant ",(0,r.kt)("inlineCode",{parentName:"p"},"CapabilityManager#get")," comme ceci:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static Capability<VotreInterface> VOTRE_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});\n")),(0,r.kt)("p",null,"O\xf9 VotreInterface est l'interface de votre capability et VOTRE_CAPABILITY est le nom que vous voulez donner \xe0 votre variable(appelez-la comme vous voulez)"),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static Capability<IEnergyStorage> ENERGY_STORAGE =  CapabilityManager.get(new CapabilityToken<>(){});\n")),(0,r.kt)("h4",{id:"attacher-une-capability-1"},"Attacher une Capability"),(0,r.kt)("p",null,"Pour attacher une Capability, il faut passer par l'\xe9v\xe8nement ",(0,r.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Entity>")," pour les ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<BlockEntity>")," pour les ",(0,r.kt)("inlineCode",{parentName:"li"},"BlockEntity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<ItemStack>")," pour les ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemStack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Level>")," pour les ",(0,r.kt)("inlineCode",{parentName:"li"},"Level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<LevelChunk>")," pour les ",(0,r.kt)("inlineCode",{parentName:"li"},"LevelChunk"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il n'existe d'\xe9v\xe8nement que pour ces cinq-l\xe0. Par exemple, si vous voulez attacher une Capability \xe0 un joueur sp\xe9cifiquement, ",(0,r.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent<Player>")," ne marchera pas. \xc0 la place, il faut utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent<Entity>")," et v\xe9rifier si ",(0,r.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent#getObject"),"(l'entit\xe9) est une instance de Player."))),(0,r.kt)("p",null,"Vous devrez avoir une impl\xe9mentation de votre capability(utilisez celle par d\xe9faut ou cr\xe9ez la v\xf4tre, voir ",(0,r.kt)("a",{parentName:"p",href:"#les-impl%C3%A9mentations-de-linterface-de-votre-capability"},"ici"),")."),(0,r.kt)("p",null,"Il vous faudra \xe9galement une ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),' qui sera la "cl\xe9" de votre capability et qui sera utilis\xe9e pour \xe9viter que la m\xeame capability soit ajout\xe9e deux fois ou que d\'autres erreurs du style se produisent.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Votre cl\xe9 peut \xeatre n'importe quelle ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),", mais elle doit \xeatre unique."),(0,r.kt)("p",{parentName:"div"},"Vous pouvez, par exemple, cr\xe9er une ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," \xe0 partir de votre modid et du nom de la Capability que vous ajoutez comme ceci :"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ResourceLocation VOTRE_CLE = new ResourceLocation(VOTRE_MODID, NOM_DE_LA_CAPABILITY)\n")))),(0,r.kt)("p",null,"Pour finir, il vous faudra une impl\xe9mentation de ",(0,r.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider")," qui retourne avec la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"getCapability")," un ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional")," de la capability(un Provider)"),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class EnergyStorageProvider implements ICapabilityProvider {\n    private final LazyOptional<IEnergyStorage> energyStorageOptional;\n\n    public EnergyStorageProvider(){\n        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre impl\xe9mentation de l'interface de la capability\n    }\n\n    @Nonnull\n    @Override\n    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {\n        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);\n    }\n    \n}\n")),(0,r.kt)("p",null,"Pensez bien \xe0 remplacer ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," par l'interface de votre capability, ",(0,r.kt)("inlineCode",{parentName:"p"},"new EnergyStorage()")," par l'impl\xe9mentation de votre capability et ",(0,r.kt)("inlineCode",{parentName:"p"},"CapabilityEnergy.ENERGY")," par l'unique instance de la capability(regardez ",(0,r.kt)("a",{parentName:"p",href:"#r%C3%A9cup%C3%A9rer-linstance-dune-capability"},"ici")," pour savoir comment l'obtenir)"),(0,r.kt)("p",null,"Exemples :"),(0,r.kt)("p",null,"Attacher la Capability ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," avec le Provider fait plus haut \xe0 tous les ",(0,r.kt)("inlineCode",{parentName:"p"},"LevelChunk")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void attachToChunks(AttachCapabilitiesEvent<LevelChunks> event)\n{\n    event.addCapability(VOTRE_CLE, new EnergyStorageProvider());\n}\n")),(0,r.kt)("p",null,"Attacher la Capability ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," avec le Provider fait plus haut \xe0 des ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void attachToEntities(AttachCapabilitiesEvent<Entity> event)\n{\n    if(event.getObject() instanceof Player){\n        event.addCapability(VOTRE_CLE, new EnergyStorageProvider());\n    }\n}\n")),(0,r.kt)("p",null,"(pensez bien \xe0 remplacer VOTRE_CLE par la ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," servant de cl\xe9 que vous avez cr\xe9\xe9e plus haut et ",(0,r.kt)("inlineCode",{parentName:"p"},"new EnergyStorageProvider()")," par votre provider)"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Attacher les Capabilities par d\xe9faut de Forge(voir ",(0,r.kt)("a",{parentName:"p",href:"#utiliser-une-capability"},"ici"),") \xe0 des classes vanilla peut causer certains probl\xe8mes. Par exemple, attacher un ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemHandler")," \xe0 un joueur ne marchera pas, car si vous essayez de le r\xe9cup\xe9rer en passant par le joueur, vous obtiendrez un ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemHandler")," qui correspond \xe0 l'inventaire du m\xeame joueur. Si vous souhaitez tout de m\xeame utiliser les Capabilities de Forge, il faut alors cr\xe9er une nouvelle Capability qui extend celle que vous souhaitez attacher(voir ",(0,r.kt)("a",{parentName:"p",href:"#cr%C3%A9er-une-capability"},"ici"),")."))),(0,r.kt)("h3",{id:"r\xe9cup\xe9rer-la-capability"},"R\xe9cup\xe9rer la Capability"),(0,r.kt)("p",null,"Une fois que la Capability est bien attach\xe9e, pour l'utiliser, il faut la r\xe9cup\xe9rer ! Pour cela, reprenons l'exemple de la Capability ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," attach\xe9e \xe0 un joueur :"),(0,r.kt)("p",null,"Pour la r\xe9cup\xe9rer, il faut d'abord obtenir la classe sur laquelle vous avez attach\xe9 la Capability (une instance de ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")," dans notre cas). Une fois cela fait (je n'explique pas comment faire, car cela d\xe9pend de sur quoi vous avez attach\xe9 la Capability), il faut utiliser dans notre cas(celui du joueur) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LazyOptional<IEnergyStorage> energyStorageLazyOptional = player.getCapability(CapabilityEnergy.ENERGY);\n")),(0,r.kt)("p",null,"Encore une fois, remplacez bien ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," par l'interface de votre Capability, ",(0,r.kt)("inlineCode",{parentName:"p"},"CapabilityEnergy.ENERGY")," par l'instance de votre Capability et nommez la variable comme vous voulez."),(0,r.kt)("p",null,"Nous avons maintenant un ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional")," de notre Capability."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Qu'est-ce qu'un ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional")," ?"),(0,r.kt)("p",{parentName:"div"},"C'est une classe cr\xe9\xe9e par Forge et qui est similaire \xe0 la classe Optional (tapez java Optional sur google si vous ne savez pas ce que c'est). Si vous voulez en savoir plus, regardez dans la classe elle-m\xeame, c'est assez bien document\xe9."))),(0,r.kt)("p",null,"Maintenant que vous poss\xe9dez votre ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional"),", vous pouvez faire ce que vous voulez avec."),(0,r.kt)("p",null,"Vous pouvez utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional#isPresent")," pour savoir si votre Capability est pr\xe9sente, ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional#ifPresent")," pour ex\xe9cuter un ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer")," si la capability est pr\xe9sente, et d'autres comme ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional#orElse"),". Pour plus d'informations, je vous invite \xe0 regarder dans la class ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional"),", sur ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html"},"cette page")," ou \xe0 rechercher sur Internet."),(0,r.kt)("p",null,"Exemples (si l'on utilise la Capability ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"lazyOptional.ifPresent(cap -> cap.receiveEnergy(500, false));\n\nIEnergyStorage energyStorage = lazyOptional.orElse(new EnergyStorage(10000));\nenergyStorage.extractEnergy(500, false);\n")),(0,r.kt)("h3",{id:"sauvegarder-la-capability"},"Sauvegarder la Capability"),(0,r.kt)("p",null,"Si vous avez fait quelques tests par vous-m\xeames, vous avez s\xfbrement remarqu\xe9 que la Capability n'est pas sauvegard\xe9e : c'est normal."),(0,r.kt)("p",null,"Pour sauvegarder sa Capability, il faut modifier votre Provider comme ceci :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tout d'abord, il faut savoir quel type de donn\xe9es vous voulez sauvegarder et trouver le ",(0,r.kt)("inlineCode",{parentName:"li"},"Tag"),"(anciennement ",(0,r.kt)("inlineCode",{parentName:"li"},"NBT"),") correspondant : ",(0,r.kt)("inlineCode",{parentName:"li"},"IntTag")," si vous souhaitez sauvegarder un ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"StringTag")," pour un ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),", ou encore ",(0,r.kt)("inlineCode",{parentName:"li"},"CompoundTag")," pour stocker diff\xe9rents types de donn\xe9es. Il en existe beaucoup d'autres, je vous invite donc \xe0 regarder le package ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"net.minecraft.nbt"))," pour la liste compl\xe8te."),(0,r.kt)("li",{parentName:"ul"},"Ensuite, changez votre classe pour impl\xe9menter ",(0,r.kt)("inlineCode",{parentName:"li"},"ICapabilitySerializable<VotreTag>"),"(remplacez VotreTag par le ",(0,r.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez choisi) au lieu de ",(0,r.kt)("inlineCode",{parentName:"li"},"ICapabilityProvider"),". Cela devrait g\xe9n\xe9rer une erreur, c'est normal."),(0,r.kt)("li",{parentName:"ul"},"Ajoutez la fonction ",(0,r.kt)("inlineCode",{parentName:"li"},"serializeNBT")," qui retourne le ",(0,r.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez d\xe9cid\xe9 d'utiliser que vous aurez pr\xe9alablement set avec les donn\xe9es que vous voulez sauvegarder"),(0,r.kt)("li",{parentName:"ul"},"Finalement, ajoutez la fonction ",(0,r.kt)("inlineCode",{parentName:"li"},"deserializeNBT")," qui a pour argument le ",(0,r.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez d\xe9cid\xe9 d'utiliser et que vous pouvez r\xe9cup\xe9rer pour l'utiliser")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"La plupart des impl\xe9mentations par d\xe9faut des Capabilities fournies par Forge(regardez les classes qui impl\xe9mentent l'interface de la Capability de votre choix) poss\xe8dent des fonctions permettant de s\xe9rialiser et de d\xe9s\xe9rialiser des ",(0,r.kt)("inlineCode",{parentName:"p"},"Tag"),". Si elles existent, il est donc pr\xe9f\xe9rable de les utiliser dans les fonctions correspondantes de votre Provider."))),(0,r.kt)("p",null,"Voici ce que cela donne si l'on reprend le Provider cr\xe9\xe9 plus haut :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class EnergyStorageProvider implements ICapabilitySerializable<IntTag> {\n    private final LazyOptional<IEnergyStorage> energyStorageOptional;\n\n    public EnergyStorageProvider(){\n        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre impl\xe9mentation de l\'interface de la capability\n    }\n\n    @Nonnull\n    @Override\n    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {\n        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);\n    }\n\n    @Override\n    public IntTag serializeNBT() {\n        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast(); //Cette ligne sert \xe0 transformer le LazyOptional qui contient un IEnergyStorage en LazyOptional qui contient un EnergyStorage. Si vous faites ceci, soyez bien s\xfbrs que votre LazyOptional du d\xe9but contienne forc\xe9ment une instance de la classe que vous castez, sinon vous aurez une erreur\n        return (IntTag) energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to serialize the capability : the capability is not present")).serializeNBT();\n    }\n\n    @Override\n    public void deserializeNBT(IntTag nbt) {\n        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast();\n        energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to deserialize the capability : the capability is not present")).deserializeNBT(nbt);\n    }\n    \n}\n')),(0,r.kt)("h3",{id:"cr\xe9er-une-capability"},"Cr\xe9er une Capability"),(0,r.kt)("p",null,"Si aucune des Capabilities fournies par Forge ne vous convient, vous pouvez cr\xe9er la v\xf4tre."),(0,r.kt)("p",null,"Pour ce faire, vous allez devoir cr\xe9er plusieurs classes : l'interface de la Capability, une ou plusieurs impl\xe9mentations et enfin une classe qui va contenir l'instance de la Capability."),(0,r.kt)("h4",{id:"linterface-de-la-capability"},"L'interface de la Capability"),(0,r.kt)("p",null,"Cette partie est relativement simple et d\xe9pend beaucoup de l'usage que vous voulez faire de votre Capability. Cr\xe9ez juste les fonctions dont vous avez besoin."),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface ILightCapability {\n\n    /**\n     * Used to get the amount of light stored\n     * @return the amount of light stored\n     */\n    int getLight();\n\n    /**\n     * Used to define the light stored\n     * @param light the new amount of light\n     */\n    void setLight(int light);\n\n    /**\n     * Used to add an amount of light to the storage\n     * @param light the amount of light to be added to the storage\n     */\n    default void receiveLight(int light){\n        setLight(getLight() + light);\n    }\n\n    /**\n     * Used to remove an amount of light to the storage\n     * @param light the amount of light to be removed from the storage\n     */\n    default void extractLight(int light){\n        setLight(getLight() - light);\n    }\n\n}\n")),(0,r.kt)("h4",{id:"les-impl\xe9mentations-de-linterface-de-votre-capability"},"Les impl\xe9mentations de l'interface de votre Capability"),(0,r.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 l'interface de sa Capability, il faut aussi cr\xe9er des impl\xe9mentations de cette m\xeame interface : ce seront elles qui seront utilis\xe9es en temps r\xe9el par le biais des ",(0,r.kt)("inlineCode",{parentName:"p"},"LazyOptional")," lorsque vous r\xe9cup\xe9rez votre Capability."),(0,r.kt)("p",null,'La seule "r\xe8gle" est qu\'il faut que vous impl\xe9mentiez votre interface, et vous pouvez aussi faire comme Forge et rajouter des fonctions pour s\xe9rialiser et d\xe9s\xe9rialiser les donn\xe9es contenues dans la classe, pour rendre le code plus facile \xe0 comprendre et \xe0 \xe9diter si vous utilisez plusieurs Provider par exemple.'),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class LightStorage implements ILightCapability{\n    private final int maxLight;\n    private int light;\n    \n    public LightStorage(int maxLight){\n        this.maxLight = maxLight;\n    }\n    \n    @Override\n    public int getLight() {\n        return light;\n    }\n\n    @Override\n    public void setLight(int light) {\n        light = Math.min(light, maxLight); //Un peu de code pour emp\xeacher le niveau de lumi\xe8re ("light") de d\xe9passer la valeur maximale d\xe9finie dans le constructeur ou d\'\xeatre en dessous de 0\n        light = Math.max(light, 0);\n        this.light = light;\n    }\n\n    public Tag serializeNBT(){\n        return IntTag.valueOf(getLight());\n    }\n\n    public void deserializeNBT(Tag nbt){\n        if(nbt instanceof IntTag){\n            setLight(((IntTag) nbt).getAsInt());\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"cr\xe9er-la-classe-contenant-linstance-de-la-capability"},"Cr\xe9er la classe contenant l'instance de la Capability"),(0,r.kt)("p",null,"Il faut maintenant cr\xe9er une classe qui contiendra l'instance par d\xe9faut de votre Capability(il s'agit en fait d'une instance de la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"Capability"),")"),(0,r.kt)("p",null,"Le code pour la r\xe9cup\xe9rer est exactement le m\xeame qu'",(0,r.kt)("a",{parentName:"p",href:"#r%C3%A9cup%C3%A9rer-linstance-dune-capability"},"ici"),", il faut juste mettre \xe7a dans une classe."),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class LightCapability {\n    public static Capability<ILightCapability> LIGHT_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});\n}\n")),(0,r.kt)("h4",{id:"enregistrer-la-capability"},"Enregistrer la Capability"),(0,r.kt)("p",null,"Finalement, il faut enregistrer sa Capability \xe0 l'aide de la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," de l'event ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterCapabilitiesEvent")," pour que Forge sache qu'elle existe."),(0,r.kt)("p",null,"N'oubliez pas de faire attention \xe0 ce que la classe dans laquelle vous mettez l'event soit bien \"abonn\xe9e\" aux flux d'events !"),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic void registerCaps(RegisterCapabilitiesEvent event) {\n    event.register(ILightCapability.class);\n}\n")))}m.isMDXComponent=!0}}]);