"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5862],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","update",1.18]},u=void 0,s={permalink:"/news/forge-118-380",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/news/2021-12-01-forge-118-380.md",source:"@site/news/2021-12-01-forge-118-380.md",title:"Forge 1.18 38.0",description:"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout).",date:"2021-12-01T00:00:00.000Z",formattedDate:"1 d\xe9cembre 2021",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"update",permalink:"/news/tags/update"},{label:"1.18",permalink:"/news/tags/1-18"}],truncated:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","update","1.18"]},nextItem:{title:"Forge 1.17.1 37.1",permalink:"/news/forge-117-371"}},p={authorsImageUrls:[void 0]},c=[{value:"Changements",id:"changements",children:[],level:2},{value:"Suppressions",id:"suppressions",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout)."),(0,l.kt)("p",null,"Lien de l'annonce de Forge : ",(0,l.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/"},"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/")),(0,l.kt)("h2",{id:"changements"},"Changements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"99% du paquet fmllegacy. La plupart des classes ont simplement \xe9t\xe9 d\xe9plac\xe9es de x.y.fmllegacy.z vers x.y.z"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de Gui -> Screen (GuiOpenEvent -> ScreenOpenEvent, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"GuiScreenEvent -> ScreenEvent, GuiOverlayDebugForge -> ForgeDebugScreenOverlay"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de GameMode -> GameType (ClientPlayerChangeGameModeEvent -> ClientPlayerChangedGameTypeEvent, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de MatrixStack -> PoseStack (DrawSelectionEvent.matrix -> DrawSelectionEvent.poseStack, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de KeyBinding -> KeyMapping (ClickInputEvent.keyBinding -> ClickInputEvent.keyMapping, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de World -> Level"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de WorldType -> WorldPreset (ForgeHooksClient.getDefaultWorldType -> ForgeHooksClient.getDefaultWorldPreset, par exemple"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de NBT -> Tag (BlockSnapshot.getNbt -> BlockSnapshot.getTag, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"Toutes les instances de Container -> Menu (IForgeContainerType -> IForgeMenuType, par exemple)"),(0,l.kt)("li",{parentName:"ul"},"PlaySoundEvent.sound -> PlaySoundEvent.originalSound"),(0,l.kt)("li",{parentName:"ul"},"PlaySoundEvent.result -> PlaySoundEvent.sound"),(0,l.kt)("li",{parentName:"ul"},"SoundEvent.manager -> SoundEvent.engine"),(0,l.kt)("li",{parentName:"ul"},"SoundEvent.soundSourceEvent.source -> SoundEvent.soundSourceEvent.canal"),(0,l.kt)("li",{parentName:"ul"},"FOVUpdateEvent -> FOVModifierEvent"),(0,l.kt)("li",{parentName:"ul"},"EntityViewRenderEvent.FOVModiier -> EntityViewRenderEvent.FieldOfView"),(0,l.kt)("li",{parentName:"ul"},"InputUpdateEvent -> MovementInputUpdateEvent"),(0,l.kt)("li",{parentName:"ul"},"InitScreenEvent.{...Widget...} -> {...Listener...}"),(0,l.kt)("li",{parentName:"ul"},"ForgeItemTagsProvider.func_240521_a_Colored -> copyColored"),(0,l.kt)("li",{parentName:"ul"},"MobSpawnInfoBuilder -> MobSpawnSettingBuilder"),(0,l.kt)("li",{parentName:"ul"},"BasicTrade -> BasicItemListing"),(0,l.kt)("li",{parentName:"ul"},"ModelLoader -> ForgeModelBakery"),(0,l.kt)("li",{parentName:"ul"},"ForgeWorldTypeScreens -> ForgeWorldPresetEditors"),(0,l.kt)("li",{parentName:"ul"},"StackList -> MultItemValue")),(0,l.kt)("h2",{id:"suppressions"},"Suppressions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Toute l'API d'animation"),(0,l.kt)("li",{parentName:"ul"},"IForgeTextureAtlasSprite"),(0,l.kt)("li",{parentName:"ul"},"IForgeItem.{showDurabiityBar, getDurabilityForDisplay, getRGBDurabilityForDisplay}"),(0,l.kt)("li",{parentName:"ul"},"ForgeHooksClient.refreshResources"),(0,l.kt)("li",{parentName:"ul"},"ModelBuilder.gui3d"),(0,l.kt)("li",{parentName:"ul"},"BlockInfo.{updateShift, getShx, getShy, getShz}"),(0,l.kt)("li",{parentName:"ul"},"CapabilityInject"),(0,l.kt)("li",{parentName:"ul"},"CapabilityManager.register"),(0,l.kt)("li",{parentName:"ul"},"ConditionalAdvancement.processConditions"),(0,l.kt)("li",{parentName:"ul"},"IForgeItem.isShield"),(0,l.kt)("li",{parentName:"ul"},"IForgeStructureFeature.{getDefaultSpawnList, getDefaultCreatureSpawnList}"),(0,l.kt)("li",{parentName:"ul"},"Classe des constantes de la forge"),(0,l.kt)("li",{parentName:"ul"},"VanillaResourceType"),(0,l.kt)("li",{parentName:"ul"},"ForgeHooksClient.worldRenderPass (+ accesseur)"),(0,l.kt)("li",{parentName:"ul"},"ForgeHooksClient.{preDraw, postDraw, getColorIndex}"),(0,l.kt)("li",{parentName:"ul"},"ScrollPanel.drawBackground (+ accesseur)"),(0,l.kt)("li",{parentName:"ul"},"Screen.{RenderToolTip, RenderComponentToolTip} (+ accesseur)"),(0,l.kt)("li",{parentName:"ul"},"ResourceManager.getResourceType"),(0,l.kt)("li",{parentName:"ul"},"LootPool.bonusRolls"),(0,l.kt)("li",{parentName:"ul"},"ForgeConfig - selectiveResourceReload"),(0,l.kt)("li",{parentName:"ul"},"PotionEvent.PotionAddedEvent"),(0,l.kt)("li",{parentName:"ul"},"ClientHooks"),(0,l.kt)("li",{parentName:"ul"},"ModFileResourcePack"),(0,l.kt)("li",{parentName:"ul"},"ResourcePackLoader.getResourcePackFor"),(0,l.kt)("li",{parentName:"ul"},"ResourcePackLoader.IPackInfoFinder"),(0,l.kt)("li",{parentName:"ul"},"ServerLifecycleHooks.buildPackFinder"),(0,l.kt)("li",{parentName:"ul"},"IResourceType"),(0,l.kt)("li",{parentName:"ul"},"ReloadRequirements"),(0,l.kt)("li",{parentName:"ul"},"CommandSetDimension")))}d.isMDXComponent=!0}}]);