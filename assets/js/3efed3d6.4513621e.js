/*! For license information please see 3efed3d6.4513621e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[416457],{778083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(824246),o=n(511151);const s={id:"backend-test-utils.testbackendoptions.extensionpoints",title:"TestBackendOptions.extensionPoints",description:"API reference for TestBackendOptions.extensionPoints"},i=void 0,c={unversionedId:"reference/backend-test-utils.testbackendoptions.extensionpoints",id:"reference/backend-test-utils.testbackendoptions.extensionpoints",title:"TestBackendOptions.extensionPoints",description:"API reference for TestBackendOptions.extensionPoints",source:"@site/../docs/reference/backend-test-utils.testbackendoptions.extensionpoints.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.testbackendoptions.extensionpoints",permalink:"/docs/reference/backend-test-utils.testbackendoptions.extensionpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.testbackendoptions.extensionpoints.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.testbackendoptions.extensionpoints",title:"TestBackendOptions.extensionPoints",description:"API reference for TestBackendOptions.extensionPoints"}},u={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testbackendoptions",children:(0,r.jsx)(t.code,{children:"TestBackendOptions"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testbackendoptions.extensionpoints",children:(0,r.jsx)(t.code,{children:"extensionPoints"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.b,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"extensionPoints?: readonly [\n        ...{\n            [index in keyof TExtensionPoints]: [\n                ExtensionPoint<TExtensionPoints[index]>,\n                Partial<TExtensionPoints[index]>\n            ];\n        }\n    ];\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var a in s=Object(arguments[u]))n.call(s,a)&&(c[a]=s[a]);if(t){i=t(s);for(var f=0;f<i.length;f++)r.call(s,i[f])&&(c[i[f]]=s[i[f]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:i.current}}t.jsx=a,t.jsxs=a},541535:(e,t,n)=>{var r=n(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,u=60112;t.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function v(){}function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var k=m.prototype=new v;k.constructor=m,r(k,b.prototype),k.isPureReactComponent=!0;var _={current:null},x=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,s={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!g.hasOwnProperty(r)&&(s[r]=t[r]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===s[r]&&(s[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:c,props:s,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case s:u=!0}}if(u)return i=i(u=e),e=""===r?"."+w(u,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=r+w(c=e[a],a);u+=E(c,t,n,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)u+=E(c=c.value,t,n,f=r+w(c,a++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var s=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)x.call(t,f)&&!g.hasOwnProperty(f)&&(s[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)s.children=n;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];s.children=a}return{$$typeof:o,type:e.type,key:i,ref:c,props:s,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var r=n(667294);const o=r.createContext({});function s(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:s(e),r.createElement(o.Provider,{value:c},t)}}}]);