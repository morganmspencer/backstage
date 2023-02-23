/*! For license information please see ef2080ac.e0d25c78.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[570065],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},620943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0"},s=void 0,l={unversionedId:"releases/v1.8.0",id:"releases/v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0",source:"@site/../docs/releases/v1.8.0.md",sourceDirName:"releases",slug:"/releases/v1.8.0",permalink:"/docs/releases/v1.8.0",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.8.0.md",tags:[],version:"current",frontMatter:{id:"v1.8.0",title:"v1.8.0",description:"Backstage Release v1.8.0"},sidebar:"releases",previous:{title:"v1.9.0",permalink:"/docs/releases/v1.9.0"},next:{title:"v1.7.0",permalink:"/docs/releases/v1.7.0"}},c={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Node 16 and 18",id:"node-16-and-18",level:3},{value:"Events",id:"events",level:3},{value:"Gitea",id:"gitea",level:3},{value:"Azure Sites",id:"azure-sites",level:3},{value:"Scaffolder Metrics",id:"scaffolder-metrics",level:3},{value:"<code>@backstage/backend-common</code>",id:"backstagebackend-common",level:3},{value:"Recharts",id:"recharts",level:3},{value:"<code>GitHub</code> to <code>Github</code>",id:"github-to-github",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}],p={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are the release notes for the v1.8.0 release of ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/"}),"Backstage"),"."),(0,a.kt)("p",null,"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."),(0,a.kt)("h2",n({},{id:"highlights"}),"Highlights"),(0,a.kt)("h3",n({},{id:"node-16-and-18"}),"Node 16 and 18"),(0,a.kt)("p",null,"The project was updated to support and build against Node versions 16 and 18, after 18 had been elevated to ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/nodejs/release#release-schedule"}),"active LTS"),". This means that support for Node 14 has been dropped in accordance with ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/docs/overview/versioning-policy#nodejs-releases"}),"our versioning policy"),"."),(0,a.kt)("p",null,"We would like to call out one particular change in Node 18 that may affect adopters. The way that it binds interfaces internally when listening for incoming connections has changed such that it may prefer e.g. an IPv6 interface that you did not intend to use. This might make it seem like the backend is unreachable from the outside in some circumstances. Because of this, you may want to change your configuration to say something along the lines of ",(0,a.kt)("inlineCode",{parentName:"p"},"listen: ':7007'")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," section to ensure that it listens on all interfaces."),(0,a.kt)("h3",n({},{id:"events"}),"Events"),(0,a.kt)("p",null,"An early version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," plugin ecosystem has been added. This allows events such as webhooks and similar to be received and propagated by a Backstage backend, and plugins can then react to those events. One early use case for this plugin is to start powering catalog updates."),(0,a.kt)("p",null,"This is early days, so bear in mind that interfaces and implementations may still be subject to change. But do check it out, and let us know what you think!"),(0,a.kt)("p",null,"Contributed by ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/pjungermann"}),"@pjungermann")," in ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/13931"}),"#13931")),(0,a.kt)("h3",n({},{id:"gitea"}),"Gitea"),(0,a.kt)("p",null,"There is now support for ",(0,a.kt)("a",n({parentName:"p"},{href:"https://gitea.io"}),"Gitea")," as a general SCM integration. Please check out ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/docs/integrations/gitea/locations"}),"the docs")," for how to get started."),(0,a.kt)("p",null,"Contributed by ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/atoko"}),"@atoko")," in ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/14056"}),"#14056")),(0,a.kt)("h3",n({},{id:"azure-sites"}),"Azure Sites"),(0,a.kt)("p",null,"There's a new Azure Sites (Apps & Functions) plugin. It lets you view the current status of the site, and quickly jump to the site's Overview or Log Stream pages. Please check out ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/azure-sites"}),"the plugin README")," for more information."),(0,a.kt)("p",null,"Contributed by ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/wesley-pattison"}),"@wesley-pattison")," in ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/13634"}),"#13634")),(0,a.kt)("h3",n({},{id:"scaffolder-metrics"}),"Scaffolder Metrics"),(0,a.kt)("p",null,"The scaffolder backend now emits default Prometheus metrics that track job execution."),(0,a.kt)("p",null,"Contributed by ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/spencerrichardhenry"}),"@spencerrichardhenry")," in ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/13815"}),"#13815")),(0,a.kt)("h3",n({},{id:"backstagebackend-common"}),(0,a.kt)("inlineCode",{parentName:"h3"},"@backstage/backend-common")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UrlReader")," interface has been updated to require that ",(0,a.kt)("inlineCode",{parentName:"p"},"readUrl")," is implemented. The ",(0,a.kt)("inlineCode",{parentName:"p"},"readUrl")," method has previously been optional to implement, but a warning used to be logged when calling its predecessor ",(0,a.kt)("inlineCode",{parentName:"p"},"read"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," method is now deprecated and will be removed in a future release, and if you made custom URL readers you will have to implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"readUrl")," method on them."),(0,a.kt)("h3",n({},{id:"recharts"}),"Recharts"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"recharts")," library that powers the graphing functionality in some plugins was upgraded across the repository to version 2. Please let us know if you run into any new issues with graphing in plugins such as Bitrise, CICD statistics, code coverage, cost insights, GIT release manager, or XCmetrics."),(0,a.kt)("h3",n({},{id:"github-to-github"}),(0,a.kt)("inlineCode",{parentName:"h3"},"GitHub")," to ",(0,a.kt)("inlineCode",{parentName:"h3"},"Github")),(0,a.kt)("p",null,"We are pursuing an effort to standardize the naming of exported GitHub related symbols. After an upgrade of Backstage, you may therefore see errors related to not finding components and types whose names start with \u201cGitHub\u201d. As an example, if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHubIssuesPage")," from the GitHub Issues plugin, you now need to import and use it as ",(0,a.kt)("inlineCode",{parentName:"p"},"GithubIssuesPage")," instead."),(0,a.kt)("h2",n({},{id:"security-fixes"}),"Security Fixes"),(0,a.kt)("p",null,"This release does not contain any security fixes."),(0,a.kt)("h2",n({},{id:"upgrade-path"}),"Upgrade path"),(0,a.kt)("p",null,"We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated"}),"keeping Backstage updated"),"."),(0,a.kt)("h2",n({},{id:"links-and-references"}),"Links and References"),(0,a.kt)("p",null,"Below you can find a list of links and references to help you learn about and start using this new release."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/"}),"Backstage official website"),", ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/docs/"}),"documentation"),", and ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/docs/getting-started/"}),"getting started guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/backstage/backstage"}),"GitHub repository")),(0,a.kt)("li",{parentName:"ul"},"Backstage's ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/docs/overview/versioning-policy"}),"versioning and support policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://discord.gg/backstage-687207715902193673"}),"Community Discord")," for discussions and support"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.8.0-changelog.md"}),"Changelog")),(0,a.kt)("li",{parentName:"ul"},"Backstage ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/demos"}),"Demos"),", ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/blog"}),"Blog"),", ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/docs/overview/roadmap"}),"Roadmap")," and ",(0,a.kt)("a",n({parentName:"li"},{href:"https://backstage.io/plugins"}),"Plugins"))),(0,a.kt)("p",null,"Sign up for our ",(0,a.kt)("a",n({parentName:"p"},{href:"https://mailchi.mp/spotify/backstage-community"}),"newsletter")," if you want to be informed about what is happening in the world of Backstage."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var i,s,l=n(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)a.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,r)=>{var a=r(862525),n=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;n=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function k(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var y=b.prototype=new k;y.constructor=b,a(y,m.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:n,type:e,key:i,ref:s,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return i=i(l=e),e=""===a?"."+P(l,0):a,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+P(s=e[c],c);l+=S(s,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,r,u=a+P(s,c++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,r){if(null==e)return e;var a=[],n=0;return S(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function E(){var e=_.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,r)=>{r(541535)}}]);