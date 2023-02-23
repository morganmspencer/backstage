/*! For license information please see f4586f53.7d399b81.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[978791],{603905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),y=a,d=u["".concat(p,".").concat(y)]||u[y]||f[y]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},614165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});t(827378);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()"},c=void 0,p={unversionedId:"reference/core-app-api.apifactoryregistry.register",id:"reference/core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()",source:"@site/../docs/reference/core-app-api.apifactoryregistry.register.md",sourceDirName:"reference",slug:"/reference/core-app-api.apifactoryregistry.register",permalink:"/docs/reference/core-app-api.apifactoryregistry.register",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.apifactoryregistry.register.md",tags:[],version:"current",frontMatter:{id:"core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}],u={toc:s};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/core-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-app-api"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/core-app-api.apifactoryregistry"}),(0,n.kt)("inlineCode",{parentName:"a"},"ApiFactoryRegistry"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/core-app-api.apifactoryregistry.register"}),(0,n.kt)("inlineCode",{parentName:"a"},"register"))),(0,n.kt)("p",null,"Register a new API factory. Returns true if the factory was added to the registry."),(0,n.kt)("p",null,"A factory will not be added to the registry if there is already an existing factory with the same or higher priority."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"register<Api, Impl extends Api, Deps extends {\n        [name in string]: unknown;\n    }>(scope: ApiFactoryScope, factory: ApiFactory<Api, Impl, Deps>): boolean;\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"scope"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/core-app-api.apifactoryscope"}),"ApiFactoryScope")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"factory"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/core-plugin-api.apifactory"}),"ApiFactory"),"<","Api, Impl, Deps",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"boolean"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,p=a(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]))t.call(i,s)&&(p[s]=i[s]);if(r){c=r(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(p[c[u]]=i[c[u]])}}return p}},541535:(e,r,t)=>{var n=t(862525),a=60103,o=60106;var i=60109,c=60110,p=60112;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}function b(){}function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=h.prototype=new b;v.constructor=h,n(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var p=arguments.length-2;if(1===p)o.children=t;else if(1<p){for(var l=Array(p),s=0;s<p;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===o[n]&&(o[n]=p[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function A(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case o:p=!0}}if(p)return i=i(p=e),e=""===n?"."+A(p,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),r.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+A(c=e[l],l);p+=S(c,r,t,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(c=e.next()).done;)p+=S(c=c.value,r,t,s=n+A(c,l++),i);else if("object"===c)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function _(e,r,t){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);