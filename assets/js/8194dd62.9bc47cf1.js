"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1334],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,title:"Mods.toml",description:"Comment g\xe9rer le mods.toml ?",tags:["bases"]},s=void 0,d={unversionedId:"bases/mods_toml",id:"version-1.17/bases/mods_toml",title:"Mods.toml",description:"Comment g\xe9rer le mods.toml ?",source:"@site/versioned_docs/version-1.17/bases/mods_toml.md",sourceDirName:"bases",slug:"/bases/mods_toml",permalink:"/docs/1.17/bases/mods_toml",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/versioned_docs/version-1.17/bases/mods_toml.md",tags:[{label:"bases",permalink:"/docs/1.17/tags/bases"}],version:"1.17",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mods.toml",description:"Comment g\xe9rer le mods.toml ?",tags:["bases"]},sidebar:"tutorialSidebar",previous:{title:"Base du mod",permalink:"/docs/1.17/bases/base_du_mod"},next:{title:"Exporter le mod",permalink:"/docs/1.17/bases/exportation"}},m={},p=[],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le fichier mods.toml (contenu dans le dossier ",(0,o.kt)("strong",{parentName:"p"},"resources"),") d\xe9finit les m\xe9tadonn\xe9es de votre mod. Ses informations peuvent \xeatre consult\xe9es par les utilisateurs depuis l'\xe9cran principal du jeu, via le bouton \"Mods\". Un seul fichier d'information peut d\xe9crire plusieurs mods."),(0,o.kt)("p",null,"G\xe9n\xe9ralement, il est structur\xe9 comme ceci :"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Le champ ",(0,o.kt)("strong",{parentName:"p"},"license")," du fichier mods.toml est obligatoire. S'il n'est pas fourni, une erreur se produira. Consultez les licences disponibles \xe0 l'adresse ",(0,o.kt)("a",{parentName:"p",href:"https://choosealicense.com/"},"https://choosealicense.com/"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'modLoader="javafml"\nloaderVersion="[37,)"\nlicense="All rights reserved"\n[[mods]]\n\nmodId="monmod"\nversion="0.0.1"\ndisplayName="Mon mod"\nupdateJSONURL="https://masuperurl.fr/updates.json"\ndisplayURL="https://masuperurl.fr/monmod"\nlogoFile="monmod.png"\ncredits="Mon mod est en Java, merci !"\nauthors="Toute la communaut\xe9"\ndescription=\'\'\'\nCette description peut \xeatre tr\xe8s longue\net en plusieurs lignes !\n\'\'\'\n\n[[dependencies.monmod]]\n    modId="forge"\n    mandatory=true\n    versionRange="[37,)"\n    ordering="NONE"\n    side="BOTH"\n\n[[dependencies.monmod]]\n    modId="minecraft"\n    mandatory=true\n    versionRange="[1.17.1,1.18)"\n    ordering="NONE"\n    side="BOTH"\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Propri\xe9t\xe9"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modid"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Le modid du mod (doit correspondre avec celui de la classe principale).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"version"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"La version du mod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"displayName"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Le nom affich\xe9 pour le mod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"updateJSONURL"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"L'URL vers le fichier JSON servant au ",(0,o.kt)("em",{parentName:"td"},"syst\xe8me d'update checker")," de Forge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"displayURL"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Le lien de la page du mod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"logoFile"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Le nom du fichier correspondant au logo du mod (celui-ci doit \xeatre plac\xe9 dans le dossier ",(0,o.kt)("strong",{parentName:"td"},"resources"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"credits"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Une chaine de caract\xe8re qui contient les remerciements que vous souhaitez mentionner.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authors"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Les auteurs du mod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"description"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"La description du mod")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dependencies"),(0,o.kt)("td",{parentName:"tr",align:null},"List"),(0,o.kt)("td",{parentName:"tr",align:null},"La liste des d\xe9pendances du mod")))))}c.isMDXComponent=!0}}]);