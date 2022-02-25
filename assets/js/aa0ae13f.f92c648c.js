"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[434],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5,title:"Exporter le mod",description:"Comment exporter le mod ?",tags:["bases"]},l=void 0,p={unversionedId:"bases/exportation",id:"bases/exportation",title:"Exporter le mod",description:"Comment exporter le mod ?",source:"@site/docs/bases/exportation.md",sourceDirName:"bases",slug:"/bases/exportation",permalink:"/docs/bases/exportation",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/bases/exportation.md",tags:[{label:"bases",permalink:"/docs/tags/bases"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Exporter le mod",description:"Comment exporter le mod ?",tags:["bases"]},sidebar:"tutorialSidebar",previous:{title:"Tags",permalink:"/docs/bases/resources/tags"},next:{title:"Enregistrement",permalink:"/docs/category/register"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration du build.gradle",id:"configuration-du-buildgradle",level:2},{value:"Version",id:"version",level:3},{value:"Group",id:"group",level:3},{value:"Nom de l&#39;archive",id:"nom-de-larchive",level:3},{value:"Exportation",id:"exportation",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Exporter le mod ou le compiler est n\xe9cessaire si vous voulez partager votre mod,\nou m\xeame jouer avec dans un modpack ou sur un serveur avec vos amis. Vous avez besoin\ndu ",(0,o.kt)("em",{parentName:"p"},".jar"),", et c'est ce qu'on va chercher \xe0 obtenir dans cette section.",(0,o.kt)("br",{parentName:"p"}),"\n","Pour cela on va configurer certaines choses dans le ",(0,o.kt)("em",{parentName:"p"},"build.gradle"),"."),(0,o.kt)("h2",{id:"configuration-du-buildgradle"},"Configuration du build.gradle"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Vous pouvez trouver le ",(0,o.kt)("em",{parentName:"p"},"build.gradle")," dans votre dossier principal"))),(0,o.kt)("p",null,"Proche de la ligne 15, vous trouverez trois param\xe8tres qui vont nous int\xe9resser :\n",(0,o.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"group")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"archivesBaseName"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"version = '1.0'\ngroup = 'fr.zom.testmod'\narchivesBaseName = 'TestMod'\n")),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("p",null,"Tout d'abord, nous avons la version de notre mod. Le param\xe8tre est assez clair.\nIl sert tout simplement \xe0 sp\xe9cifier la version de votre mod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"version = '1.0'\n")),(0,o.kt)("p",null,"Ici la version de mon mod est 1.0. N'oubliez pas les guillemets !"),(0,o.kt)("h3",{id:"group"},"Group"),(0,o.kt)("p",null,"On passe maintenant au group qui est le package contenant l'ensemble\nde votre code dans le dossier ",(0,o.kt)("em",{parentName:"p"},"src/main/java"),".",(0,o.kt)("br",{parentName:"p"}),"\n","(C'est souvent le package o\xf9 votre classe principale est situ\xe9e.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"group = 'fr.zom.testmod'\n")),(0,o.kt)("p",null,"Pour ma part voici le chemin des sources de mon mod."),(0,o.kt)("h3",{id:"nom-de-larchive"},"Nom de l'archive"),(0,o.kt)("p",null,"Enfin, dernier param\xe8tre qui sera le nom que vous donnez au ",(0,o.kt)("em",{parentName:"p"},".jar")," quand vous l'exporterez."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"archivesBaseName = 'TestMod'\n")),(0,o.kt)("p",null,"Le nom complet du ",(0,o.kt)("em",{parentName:"p"},".jar")," sera le nom que vous mettez juste ici accompagn\xe9 de la version\nqu'on a chang\xe9 plus haut."),(0,o.kt)("h2",{id:"exportation"},"Exportation"),(0,o.kt)("p",null,"Pour exporter votre mod, rien de plus simple, dans votre IDE, il vous suffit de lancer\nla t\xe2che gradle ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),", ou dans la console ",(0,o.kt)("inlineCode",{parentName:"p"},"gradlew build"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Veillez \xe0 ne laisser aucune erreur dans votre code lorsque vous exporter votre mod\nautrement le build ne fonctionnera pas !"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Pour retrouver le ",(0,o.kt)("em",{parentName:"p"},".jar")," g\xe9n\xe9r\xe9, rendez vous dans votre dossier principal, puis dans\n",(0,o.kt)("inlineCode",{parentName:"p"},"build/libs")," et vous trouverez par exemple : ",(0,o.kt)("inlineCode",{parentName:"p"},"TestMod-1.0.jar"),"."))))}m.isMDXComponent=!0}}]);