/*! For license information please see e76a9683.84d34fd9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[61144],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),f=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=f(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=f(t),y=o,d=s["".concat(p,".").concat(y)]||s[y]||l[y]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=t[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},797443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"core-plugin-api.typestoapirefs",title:"TypesToApiRefs",description:"API reference for TypesToApiRefs"},c=void 0,p={unversionedId:"reference/core-plugin-api.typestoapirefs",id:"reference/core-plugin-api.typestoapirefs",title:"TypesToApiRefs",description:"API reference for TypesToApiRefs",source:"@site/../docs/reference/core-plugin-api.typestoapirefs.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.typestoapirefs",permalink:"/docs/reference/core-plugin-api.typestoapirefs",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.typestoapirefs.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.typestoapirefs",title:"TypesToApiRefs",description:"API reference for TypesToApiRefs"}},f={},u=[],s={toc:u};function l(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api.typestoapirefs"}),(0,n.kt)("inlineCode",{parentName:"a"},"TypesToApiRefs"))),(0,n.kt)("p",null,"Wraps a type with API properties into a type holding their respective ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api.apiref"}),"ApiRef"),"s."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type TypesToApiRefs<T> = {\n    [key in keyof T]: ApiRef<T[key]>;\n};\n")),(0,n.kt)("b",null,"References:")," [ApiRef](/docs/reference/core-plugin-api.apiref)")}l.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,p=o(e),f=1;f<arguments.length;f++){for(var u in i=Object(arguments[f]))t.call(i,u)&&(p[u]=i[u]);if(r){c=r(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(p[c[s]]=i[c[s]])}}return p}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var i=60109,c=60110,p=60112;var f=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),c=s("react.context"),p=s("react.forward_ref"),s("react.suspense"),f=s("react.memo"),u=s("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var h=v.prototype=new g;h.constructor=v,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var f=Array(p),u=0;u<p;u++)f[u]=arguments[u+2];a.children=f}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return i=i(p=e),e=""===n?"."+_(p,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(T,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),r.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var u=n+_(c=e[f],f);p+=S(c,r,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),f=0;!(c=e.next()).done;)p+=S(c=c.value,r,t,u=n+_(c,f++),i);else if("object"===c)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function A(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function R(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function x(){var e=E.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);