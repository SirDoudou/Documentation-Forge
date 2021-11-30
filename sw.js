(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1a4932013eaffb6e669322a1ae0add38","url":"404.html"},{"revision":"f1a07053c099f128422ee3888442a3cc","url":"assets/css/styles.0bf58541.css"},{"revision":"9949f85551262c02f35b6b5726a7a944","url":"assets/js/01a85c17.2a54647d.js"},{"revision":"c2eb74ac41a0bd10302075ed4b1dac31","url":"assets/js/01db9603.c55409cd.js"},{"revision":"64646a5ee63c10b838ec9b9106b298f5","url":"assets/js/06dd7867.9f44cde9.js"},{"revision":"f03da435de120aec4565b8f9d35f64a9","url":"assets/js/08ac8579.945352fb.js"},{"revision":"b90e509e24da89bc152fbe5fda07dfe1","url":"assets/js/0c94138f.83f37099.js"},{"revision":"02071b507a0da66d1c551fa9c8c119e8","url":"assets/js/0e384e19.d1089351.js"},{"revision":"7143b424ccfb5ddf01d10ef61abc1fb6","url":"assets/js/172ac131.095c46d9.js"},{"revision":"ed91a275031c1a5015d37ab936601be5","url":"assets/js/17896441.4fea7ad1.js"},{"revision":"54f25a601d3493eb49852b9b95042fa6","url":"assets/js/18007095.0089d7bb.js"},{"revision":"a2fb46f2a486aae7e6f20ca2da009b6e","url":"assets/js/1be78505.a4512595.js"},{"revision":"259817a0fed1ef96e8e494af0968dcc0","url":"assets/js/1fc8cea4.a810a8ac.js"},{"revision":"c54422f9417dc2e08aa0d90a48fa93ed","url":"assets/js/24584499.ac712733.js"},{"revision":"5245ecbdae18eedc417a034b1642cbbc","url":"assets/js/293f897f.108b58cd.js"},{"revision":"8fa8f793604221507772159bc014f9a4","url":"assets/js/32d144c9.4c9eb3af.js"},{"revision":"d6008ad613611bbb1dca870eb9c2823f","url":"assets/js/3720c009.60f18c11.js"},{"revision":"17ebc37025caf8f2a04f25ef7a965880","url":"assets/js/3829.256c2134.js"},{"revision":"08e865090e199b35ec5c9430e985f3c0","url":"assets/js/40227597.0d0a8fb5.js"},{"revision":"03893baaf423be79406c505a88955996","url":"assets/js/4608.30f546f6.js"},{"revision":"2fdb79e8b59138e94db8f490c14c181d","url":"assets/js/4814.b73503fb.js"},{"revision":"29fca9def3ab002ceab2fe966a54260f","url":"assets/js/4852ba84.97c6f2ac.js"},{"revision":"f49e1176222a20f280c44048f5ffa359","url":"assets/js/4a39d1ec.1793350e.js"},{"revision":"43404e441c461c5b3b7679baf6007941","url":"assets/js/4f806ca3.a200b195.js"},{"revision":"631f498774aba01eebee44c2c825740c","url":"assets/js/5131.4ac603b6.js"},{"revision":"3ab357c55a2b6f5ea112624811d7373d","url":"assets/js/55960ee5.21125d94.js"},{"revision":"68c5b9019fd797a61fd15f4e82c29993","url":"assets/js/5bd2bc16.c5f5aa8e.js"},{"revision":"cbb3d565c8f6e43f5c47582651435c05","url":"assets/js/6444.c97cd83b.js"},{"revision":"d59e316aa9214fa6f14bcc08db32e788","url":"assets/js/6875c492.64655292.js"},{"revision":"893ad1f69ae9c7bf77500c251e08963c","url":"assets/js/72c8f5ae.64d67566.js"},{"revision":"b9bbaa057844784e325bd65decce95ca","url":"assets/js/7f9d7439.1d8364a7.js"},{"revision":"9026d6e407d9389f789b1df793e80393","url":"assets/js/80f5e4fa.34f0c16c.js"},{"revision":"3354905d6458f069a919c6ad05dd5cdb","url":"assets/js/814f3328.b2c58156.js"},{"revision":"4180157189193bf69ee26a97d7873d92","url":"assets/js/82a0cd4c.6d941fe3.js"},{"revision":"ab562e576137a13b601ee1b51837cb51","url":"assets/js/88c6804c.3cae24f0.js"},{"revision":"d91e4381d6725a6af369ea96ba2307aa","url":"assets/js/8b0f4364.7e774083.js"},{"revision":"315554c7bf3a94cf8e819d9f513e184c","url":"assets/js/8c7972ff.10850125.js"},{"revision":"dee56a64258b13cc2b53ed2114564f78","url":"assets/js/923.2d0ddb4f.js"},{"revision":"f455426f74c0b3f5f25362f4bd445d61","url":"assets/js/935f2afb.9cfe66b1.js"},{"revision":"f6cfd163cff627e4d932297a45f007d3","url":"assets/js/9429132a.f24f14fe.js"},{"revision":"1d38f1a49efff6f576bcfccb53d1b93f","url":"assets/js/95c2e7b4.97ede8e2.js"},{"revision":"54cc3f6cc231f2b4a3e5dd0801e5d1b8","url":"assets/js/971286d5.bdd70455.js"},{"revision":"db2d14f8f3f428602c8f8fc0417b083c","url":"assets/js/9e4087bc.633c1a84.js"},{"revision":"8a0f2c291c9687a38887d1dd8099d94b","url":"assets/js/9e94c6cd.1ba7659a.js"},{"revision":"a47ffb796e8df1bf836b60adbb2a00d0","url":"assets/js/a6aa9e1f.c211c8da.js"},{"revision":"0c7dcb1b2e9fa8f4970a3af536551cfc","url":"assets/js/a98860cd.611471bf.js"},{"revision":"c936862f06093910fcd614f73c7902c5","url":"assets/js/aa0ae13f.61287c35.js"},{"revision":"8118d7dd76d46466fb02e0e5ae0c26af","url":"assets/js/b11ca90c.5c43a7cc.js"},{"revision":"c871f80564c5008e7954273602a583d6","url":"assets/js/bc1b9aeb.afbeeda7.js"},{"revision":"c58e3a05a6afe1d83a3927163faec5a5","url":"assets/js/bc88f846.e878703c.js"},{"revision":"52fe9c2f4a939f3888fb6e6cb4a14384","url":"assets/js/c4f5d8e4.2deb8d82.js"},{"revision":"7a045292192d7e053672538c4b532a58","url":"assets/js/ccc49370.fb28aeb2.js"},{"revision":"2254bf410a196324196e0276744a7125","url":"assets/js/ce3ccfd5.8c228b41.js"},{"revision":"665f4d245dc829da7e2d50a92839d289","url":"assets/js/d64cf8f8.50e4e435.js"},{"revision":"c66dd41cc54d182cf86ade713fb4e45d","url":"assets/js/dca7ddc3.00c0fadd.js"},{"revision":"5c5f1d2ab76d77da0107e06f442c1307","url":"assets/js/df203c0f.208ea0ab.js"},{"revision":"f21ef2da30b22a0d8df349b8c112c532","url":"assets/js/e240f1d8.62df8320.js"},{"revision":"f554a978b643be874efc578a41a42da2","url":"assets/js/e2ee8b79.a981d567.js"},{"revision":"770a8a7f91d7507b9c9e4ca35d7a447f","url":"assets/js/e4ffd996.9d152976.js"},{"revision":"fe85128ea2c24bdf322a5fcaddc9ed1d","url":"assets/js/f8b9f4f8.7c50e063.js"},{"revision":"a2f97202877f16578942a92251662bdd","url":"assets/js/main.ae75a2a1.js"},{"revision":"6520b864e5358feccfb2a89ff8a6643b","url":"assets/js/runtime~main.ad22f35a.js"},{"revision":"7f84d36cfc59326d9e33f3d396389b77","url":"docs/advanced/access-transformer/index.html"},{"revision":"4684da800ad9c60daa03c0ff0929cf97","url":"docs/advanced/dist-executor/index.html"},{"revision":"b5fb0a89ea407506a30f999460c5306c","url":"docs/bases/base_du_mod/index.html"},{"revision":"b82f6fb728f357b972d6807210adbb98","url":"docs/bases/exportation/index.html"},{"revision":"1005f3a6663cce13a428207defc622b4","url":"docs/bases/installation/index.html"},{"revision":"552fa27968a11617371535862dcdfb28","url":"docs/bases/mods_toml/index.html"},{"revision":"6ea5c89e57b99140f8fedf26b36b56b7","url":"docs/blocs/basic/index.html"},{"revision":"051578c270ff7a13f5e993cecb871985","url":"docs/blocs/properties/index.html"},{"revision":"f5cc09694c44e2e21eb9da121bf1d9e8","url":"docs/data/intro/index.html"},{"revision":"a436ff6ae40df7ee514534a7ba261daf","url":"docs/data/lang/index.html"},{"revision":"1531a00f3faa58396964fe96236139fc","url":"docs/data/recipe/index.html"},{"revision":"51390e090da90984f9f8aaf2e2ebd396","url":"docs/intro/index.html"},{"revision":"a127815d56d2570505157f009a1e1eff","url":"docs/items/basic/index.html"},{"revision":"997a4681177c4716d0b7cd0cd88e1c93","url":"docs/items/colored/index.html"},{"revision":"e2de2c44669848ecda8729a73483823f","url":"docs/items/creative-tab/index.html"},{"revision":"5fc14afb1c9eec4902f963bb38746bfb","url":"docs/items/properties/index.html"},{"revision":"3cd06659e8d34139c7c192eb17061645","url":"docs/register/deferred/index.html"},{"revision":"1d949253aaa437298213a6b6493e053a","url":"docs/tags/avance/index.html"},{"revision":"24010bb83c937997c2c833a88adf5c86","url":"docs/tags/bases/index.html"},{"revision":"c912061a761ef968f45de4d24075cf1b","url":"docs/tags/blocs/index.html"},{"revision":"fc3c87759c69c682ddd93f3badec2a9f","url":"docs/tags/color/index.html"},{"revision":"e6fae1de7a973e340198c58a7beddf99","url":"docs/tags/data-generators/index.html"},{"revision":"11bc80925315c9411459e124aa7cc6fa","url":"docs/tags/enregistrement/index.html"},{"revision":"250dc5a880e352640d947df16276d59a","url":"docs/tags/index.html"},{"revision":"8194c493f1aca263b629abcfb608683c","url":"docs/tags/introduction/index.html"},{"revision":"275f415cadc8a1328d020e4cc08550a2","url":"docs/tags/items/index.html"},{"revision":"a1493babc59fed0e26c60b9e05484f93","url":"docs/tags/proprietes/index.html"},{"revision":"d27fc58acc85b0dc06955a744bec9b04","url":"index.html"},{"revision":"ed551f1a0440858f073b67854edd7464","url":"manifest.json"},{"revision":"58646a8040b7bbc7d2eb02024055a4b7","url":"news/archive/index.html"},{"revision":"d3e1c628444a0d5dd12bd3d4431911a4","url":"news/forge-116-362/index.html"},{"revision":"ccb9a688f11e076e700b1f491520aa83","url":"news/forge-117-370/index.html"},{"revision":"4745083ec2fd8b19bf6f16c406a49c06","url":"news/forge-117-371/index.html"},{"revision":"eaedf0f3aed3f9b055cbda5b6252e7f6","url":"news/index.html"},{"revision":"6aac24df9c06abe3a0a8ef71e37988c5","url":"news/tags/1-16-5/index.html"},{"revision":"24b01a14b28de2173e86f764fdb3db38","url":"news/tags/1-17-1/index.html"},{"revision":"376b41a8321760ae9730e61f998daf98","url":"news/tags/forge/index.html"},{"revision":"9c75fad80ff9f3e4c384a2fe48917665","url":"news/tags/index.html"},{"revision":"7262a17efedf88ab5d82e8e1cfeef30b","url":"news/tags/update/index.html"},{"revision":"e9878e603800e2916fb6f6711f24dc9b","url":"assets/images/colored_item-89a6d6f4e12086ace4f25db3a1bb002b.png"},{"revision":"e9878e603800e2916fb6f6711f24dc9b","url":"img/docs/colored_item.png"},{"revision":"88e78a62a091bba22ba8d8f4563d5070","url":"img/docs/exemple_craft_shaped.png"},{"revision":"59997f5229d5d5b38bbaac98d596ea41","url":"img/favicon.ico"},{"revision":"8d636572dafed78ac1aeb163ee116aa4","url":"img/icons/icon-128x128.png"},{"revision":"caafa06a8b3770cbfa8a14977612e6c1","url":"img/icons/icon-256x256.png"},{"revision":"26c9e9a5b20f4add80ca1fae7c08566e","url":"img/icons/icon-512x512.png"},{"revision":"e96a9a5d0ba709b54de2e9b25a65ed32","url":"img/icons/icon-64x64.png"},{"revision":"842ea3a3a6ee2f3e2cc7f0ddbff3627e","url":"img/le_moddeur_ultime.jpg"},{"revision":"2807337cf671833e2751019cfa6dd6dd","url":"img/logo.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();