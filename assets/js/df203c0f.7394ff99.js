"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var c=a(7294),l=a(6698),s=a(6742),r=a(941),n=a(4973);function o(e){var t=e.doc;return c.createElement("article",{className:"margin-vert--lg"},c.createElement(s.Z,{to:t.permalink},c.createElement("h2",null,t.title)),t.description&&c.createElement("p",null,t.description))}function g(e){var t,a=e.tag,g=(t=(0,r.c2)().selectMessage,function(e){return t(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:g(a.docs.length),tagName:a.name});return c.createElement(l.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},c.createElement("div",{className:"container margin-vert--lg"},c.createElement("div",{className:"row"},c.createElement("main",{className:"col col--8 col--offset-2"},c.createElement("header",{className:"margin-bottom--xl"},c.createElement("h1",null,i),c.createElement(s.Z,{href:a.allTagsPath},c.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return c.createElement(o,{key:e.id,doc:e})})))))))}}}]);