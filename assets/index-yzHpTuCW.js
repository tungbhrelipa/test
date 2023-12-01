(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function gy(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var my={exports:{}},Cd={},wy={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=Symbol.for("react.element"),L4=Symbol.for("react.portal"),F4=Symbol.for("react.fragment"),j4=Symbol.for("react.strict_mode"),W4=Symbol.for("react.profiler"),z4=Symbol.for("react.provider"),H4=Symbol.for("react.context"),V4=Symbol.for("react.forward_ref"),q4=Symbol.for("react.suspense"),G4=Symbol.for("react.memo"),K4=Symbol.for("react.lazy"),Xg=Symbol.iterator;function Z4(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,by={};function Is(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||yy}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xy(){}xy.prototype=Is.prototype;function Up(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||yy}var Lp=Up.prototype=new xy;Lp.constructor=Up;vy(Lp,Is.prototype);Lp.isPureReactComponent=!0;var em=Array.isArray,Cy=Object.prototype.hasOwnProperty,Fp={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function _y(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Cy.call(e,r)&&!Ey.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vl,type:t,key:o,ref:s,props:i,_owner:Fp.current}}function Q4(t,e){return{$$typeof:Vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vl}function Y4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tm=/\/+/g;function Of(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y4(""+t.key):e.toString(36)}function qu(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Vl:case L4:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Of(s,0):r,em(i)?(n="",t!=null&&(n=t.replace(tm,"$&/")+"/"),qu(i,e,n,"",function(u){return u})):i!=null&&(jp(i)&&(i=Q4(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",em(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Of(o,a);s+=qu(o,e,n,l,i)}else if(l=Z4(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Of(o,a++),s+=qu(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function wu(t,e,n){if(t==null)return t;var r=[],i=0;return qu(t,r,"","",function(o){return e.call(n,o,i++)}),r}function J4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},Gu={transition:null},X4={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Gu,ReactCurrentOwner:Fp};Ee.Children={map:wu,forEach:function(t,e,n){wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wu(t,function(){e++}),e},toArray:function(t){return wu(t,function(e){return e})||[]},only:function(t){if(!jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Is;Ee.Fragment=F4;Ee.Profiler=W4;Ee.PureComponent=Up;Ee.StrictMode=j4;Ee.Suspense=q4;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X4;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vy({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cy.call(e,l)&&!Ey.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vl,type:t.type,key:i,ref:o,props:r,_owner:s}};Ee.createContext=function(t){return t={$$typeof:H4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:z4,_context:t},t.Consumer=t};Ee.createElement=_y;Ee.createFactory=function(t){var e=_y.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:V4,render:t}};Ee.isValidElement=jp;Ee.lazy=function(t){return{$$typeof:K4,_payload:{_status:-1,_result:t},_init:J4}};Ee.memo=function(t,e){return{$$typeof:G4,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Gu.transition;Gu.transition={};try{t()}finally{Gu.transition=e}};Ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ee.useCallback=function(t,e){return Ut.current.useCallback(t,e)};Ee.useContext=function(t){return Ut.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return Ut.current.useEffect(t,e)};Ee.useId=function(){return Ut.current.useId()};Ee.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return Ut.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};Ee.useRef=function(t){return Ut.current.useRef(t)};Ee.useState=function(t){return Ut.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return Ut.current.useTransition()};Ee.version="18.2.0";wy.exports=Ee;var Xe=wy.exports;const e6=Hl(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t6=Xe,n6=Symbol.for("react.element"),r6=Symbol.for("react.fragment"),i6=Object.prototype.hasOwnProperty,o6=t6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s6={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)i6.call(e,r)&&!s6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:n6,type:t,key:o,ref:s,props:i,_owner:o6.current}}Cd.Fragment=r6;Cd.jsx=Sy;Cd.jsxs=Sy;my.exports=Cd;var tn=my.exports,L0={},$y={exports:{}},ln={},Py={exports:{}},Ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var W=I.length;I.push(j);e:for(;0<W;){var V=W-1>>>1,Z=I[V];if(0<i(Z,j))I[V]=j,I[W]=Z,W=V;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],W=I.pop();if(W!==j){I[0]=W;e:for(var V=0,Z=I.length,q=Z>>>1;V<q;){var ee=2*(V+1)-1,ie=I[ee],ae=ee+1,ue=I[ae];if(0>i(ie,W))ae<Z&&0>i(ue,ie)?(I[V]=ue,I[ae]=W,V=ae):(I[V]=ie,I[ee]=W,V=ee);else if(ae<Z&&0>i(ue,W))I[V]=ue,I[ae]=W,V=ae;else break e}}return j}function i(I,j){var W=I.sortIndex-j.sortIndex;return W!==0?W:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,w=!1,y=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function x(I){if(C=!1,v(I),!y)if(n(l)!==null)y=!0,U(E);else{var j=n(u);j!==null&&L(x,j.startTime-I)}}function E(I,j){y=!1,C&&(C=!1,b(P),P=-1),w=!0;var W=p;try{for(v(j),f=n(l);f!==null&&(!(f.expirationTime>j)||I&&!M());){var V=f.callback;if(typeof V=="function"){f.callback=null,p=f.priorityLevel;var Z=V(f.expirationTime<=j);j=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&r(l),v(j)}else r(l);f=n(l)}if(f!==null)var q=!0;else{var ee=n(u);ee!==null&&L(x,ee.startTime-j),q=!1}return q}finally{f=null,p=W,w=!1}}var S=!1,d=null,P=-1,O=5,T=-1;function M(){return!(t.unstable_now()-T<O)}function Y(){if(d!==null){var I=t.unstable_now();T=I;var j=!0;try{j=d(!0,I)}finally{j?X():(S=!1,d=null)}}else S=!1}var X;if(typeof g=="function")X=function(){g(Y)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,F=z.port2;z.port1.onmessage=Y,X=function(){F.postMessage(null)}}else X=function(){_(Y,0)};function U(I){d=I,S||(S=!0,X())}function L(I,j){P=_(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||w||(y=!0,U(E))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var W=p;p=j;try{return I()}finally{p=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=p;p=I;try{return j()}finally{p=W}},t.unstable_scheduleCallback=function(I,j,W){var V=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?V+W:V):W=V,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=W+Z,I={id:c++,callback:j,priorityLevel:I,startTime:W,expirationTime:Z,sortIndex:-1},W>V?(I.sortIndex=W,e(u,I),n(l)===null&&I===n(u)&&(C?(b(P),P=-1):C=!0,L(x,W-V))):(I.sortIndex=Z,e(l,I),y||w||(y=!0,U(E))),I},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(I){var j=p;return function(){var W=p;p=j;try{return I.apply(this,arguments)}finally{p=W}}}})(Ay);Py.exports=Ay;var a6=Py.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=Xe,an=a6;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ky=new Set,Wa={};function ho(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(Wa[t]=e,t=0;t<e.length;t++)ky.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),F0=Object.prototype.hasOwnProperty,l6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},rm={};function u6(t){return F0.call(rm,t)?!0:F0.call(nm,t)?!1:l6.test(t)?rm[t]=!0:(nm[t]=!0,!1)}function c6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d6(t,e,n,r){if(e===null||typeof e>"u"||c6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wp=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wp,zp);Ct[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wp,zp);Ct[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wp,zp);Ct[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hp(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d6(e,n,i,r)&&(n=null),r||i===null?u6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yu=Symbol.for("react.element"),Io=Symbol.for("react.portal"),No=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),Oy=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),z0=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),Iy=Symbol.for("react.offscreen"),im=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Object.assign,Tf;function ga(t){if(Tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tf=e&&e[1]||""}return`
`+Tf+t}var If=!1;function Nf(t,e){if(!t||If)return"";If=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{If=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function f6(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Nf(t.type,!1),t;case 11:return t=Nf(t.type.render,!1),t;case 1:return t=Nf(t.type,!0),t;default:return""}}function H0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case No:return"Fragment";case Io:return"Portal";case j0:return"Profiler";case Vp:return"StrictMode";case W0:return"Suspense";case z0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ty:return(t.displayName||"Context")+".Consumer";case Oy:return(t._context.displayName||"Context")+".Provider";case qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gp:return e=t.displayName||null,e!==null?e:H0(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return H0(t(e))}catch{}}return null}function h6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H0(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p6(t){var e=Ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vu(t){t._valueTracker||(t._valueTracker=p6(t))}function Ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ny(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function V0(t,e){var n=e.checked;return Ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function My(t,e){e=e.checked,e!=null&&Hp(t,"checked",e,!1)}function q0(t,e){My(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?G0(t,e.type,n):e.hasOwnProperty("defaultValue")&&G0(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function G0(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Go(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function K0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ma(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function By(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Z0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bu,Ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bu=bu||document.createElement("div"),bu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g6=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){g6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m6=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Q0(t,e){if(e){if(m6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Y0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J0=null;function Kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var X0=null,Ko=null,Zo=null;function um(t){if(t=Kl(t)){if(typeof X0!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Pd(e),X0(t.stateNode,t.type,e))}}function Wy(t){Ko?Zo?Zo.push(t):Zo=[t]:Ko=t}function zy(){if(Ko){var t=Ko,e=Zo;if(Zo=Ko=null,um(t),e)for(t=0;t<e.length;t++)um(e[t])}}function Hy(t,e){return t(e)}function Vy(){}var Rf=!1;function qy(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return Hy(t,e,n)}finally{Rf=!1,(Ko!==null||Zo!==null)&&(Vy(),zy())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Pd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var eh=!1;if(yr)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{eh=!1}function w6(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Sa=!1,hc=null,pc=!1,th=null,y6={onError:function(t){Sa=!0,hc=t}};function v6(t,e,n,r,i,o,s,a,l){Sa=!1,hc=null,w6.apply(y6,arguments)}function b6(t,e,n,r,i,o,s,a,l){if(v6.apply(this,arguments),Sa){if(Sa){var u=hc;Sa=!1,hc=null}else throw Error(H(198));pc||(pc=!0,th=u)}}function po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cm(t){if(po(t)!==t)throw Error(H(188))}function x6(t){var e=t.alternate;if(!e){if(e=po(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cm(i),t;if(o===r)return cm(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function Ky(t){return t=x6(t),t!==null?Zy(t):null}function Zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zy(t);if(e!==null)return e;t=t.sibling}return null}var Qy=an.unstable_scheduleCallback,dm=an.unstable_cancelCallback,C6=an.unstable_shouldYield,E6=an.unstable_requestPaint,Ye=an.unstable_now,_6=an.unstable_getCurrentPriorityLevel,Zp=an.unstable_ImmediatePriority,Yy=an.unstable_UserBlockingPriority,gc=an.unstable_NormalPriority,S6=an.unstable_LowPriority,Jy=an.unstable_IdlePriority,Ed=null,Xn=null;function $6(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Ed,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:D6,P6=Math.log,A6=Math.LN2;function D6(t){return t>>>=0,t===0?32:31-(P6(t)/A6|0)|0}var xu=64,Cu=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wa(a):(o&=s,o!==0&&(r=wa(o)))}else s=n&~i,s!==0?r=wa(s):o!==0&&(r=wa(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mn(e),i=1<<n,r|=t[n],e&=~i;return r}function k6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Mn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=k6(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xy(){var t=xu;return xu<<=1,!(xu&4194240)&&(xu=64),t}function Mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mn(e),t[e]=n}function T6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tv,Yp,nv,rv,iv,rh=!1,Eu=[],Qr=null,Yr=null,Jr=null,Va=new Map,qa=new Map,Wr=[],I6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Xs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Kl(e),e!==null&&Yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function N6(t,e,n,r,i){switch(e){case"focusin":return Qr=Xs(Qr,t,e,n,r,i),!0;case"dragenter":return Yr=Xs(Yr,t,e,n,r,i),!0;case"mouseover":return Jr=Xs(Jr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Va.set(o,Xs(Va.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qa.set(o,Xs(qa.get(o)||null,t,e,n,r,i)),!0}return!1}function ov(t){var e=Fi(t.target);if(e!==null){var n=po(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,iv(t.priority,function(){nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);J0=r,n.target.dispatchEvent(r),J0=null}else return e=Kl(n),e!==null&&Yp(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){Ku(t)&&n.delete(e)}function R6(){rh=!1,Qr!==null&&Ku(Qr)&&(Qr=null),Yr!==null&&Ku(Yr)&&(Yr=null),Jr!==null&&Ku(Jr)&&(Jr=null),Va.forEach(hm),qa.forEach(hm)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,R6)))}function Ga(t){function e(i){return ea(i,t)}if(0<Eu.length){ea(Eu[0],t);for(var n=1;n<Eu.length;n++){var r=Eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qr!==null&&ea(Qr,t),Yr!==null&&ea(Yr,t),Jr!==null&&ea(Jr,t),Va.forEach(e),qa.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&Wr.shift()}var Qo=Ar.ReactCurrentBatchConfig,wc=!0;function M6(t,e,n,r){var i=ke,o=Qo.transition;Qo.transition=null;try{ke=1,Jp(t,e,n,r)}finally{ke=i,Qo.transition=o}}function B6(t,e,n,r){var i=ke,o=Qo.transition;Qo.transition=null;try{ke=4,Jp(t,e,n,r)}finally{ke=i,Qo.transition=o}}function Jp(t,e,n,r){if(wc){var i=ih(t,e,n,r);if(i===null)qf(t,e,r,yc,n),fm(t,r);else if(N6(i,t,e,n,r))r.stopPropagation();else if(fm(t,r),e&4&&-1<I6.indexOf(t)){for(;i!==null;){var o=Kl(i);if(o!==null&&tv(o),o=ih(t,e,n,r),o===null&&qf(t,e,r,yc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qf(t,e,r,null,n)}}var yc=null;function ih(t,e,n,r){if(yc=null,t=Kp(r),t=Fi(t),t!==null)if(e=po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_6()){case Zp:return 1;case Yy:return 4;case gc:case S6:return 16;case Jy:return 536870912;default:return 16}default:return 16}}var Gr=null,Xp=null,Zu=null;function av(){if(Zu)return Zu;var t,e=Xp,n=e.length,r,i="value"in Gr?Gr.value:Gr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Zu=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function pm(){return!1}function un(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_u:pm,this.isPropagationStopped=pm,this}return Ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},e1=un(Ns),Gl=Ge({},Ns,{view:0,detail:0}),U6=un(Gl),Bf,Uf,ta,_d=Ge({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:t1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Bf=t.screenX-ta.screenX,Uf=t.screenY-ta.screenY):Uf=Bf=0,ta=t),Bf)},movementY:function(t){return"movementY"in t?t.movementY:Uf}}),gm=un(_d),L6=Ge({},_d,{dataTransfer:0}),F6=un(L6),j6=Ge({},Gl,{relatedTarget:0}),Lf=un(j6),W6=Ge({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),z6=un(W6),H6=Ge({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V6=un(H6),q6=Ge({},Ns,{data:0}),mm=un(q6),G6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z6[t])?!!e[t]:!1}function t1(){return Q6}var Y6=Ge({},Gl,{key:function(t){if(t.key){var e=G6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:t1,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J6=un(Y6),X6=Ge({},_d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=un(X6),e8=Ge({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:t1}),t8=un(e8),n8=Ge({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),r8=un(n8),i8=Ge({},_d,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o8=un(i8),s8=[9,13,27,32],n1=yr&&"CompositionEvent"in window,$a=null;yr&&"documentMode"in document&&($a=document.documentMode);var a8=yr&&"TextEvent"in window&&!$a,lv=yr&&(!n1||$a&&8<$a&&11>=$a),ym=" ",vm=!1;function uv(t,e){switch(t){case"keyup":return s8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function l8(t,e){switch(t){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(vm=!0,ym);case"textInput":return t=e.data,t===ym&&vm?null:t;default:return null}}function u8(t,e){if(Ro)return t==="compositionend"||!n1&&uv(t,e)?(t=av(),Zu=Xp=Gr=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lv&&e.locale!=="ko"?null:e.data;default:return null}}var c8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c8[t.type]:e==="textarea"}function dv(t,e,n,r){Wy(r),e=vc(e,"onChange"),0<e.length&&(n=new e1("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pa=null,Ka=null;function d8(t){Cv(t,0)}function Sd(t){var e=Uo(t);if(Ry(e))return t}function f8(t,e){if(t==="change")return e}var fv=!1;if(yr){var Ff;if(yr){var jf="oninput"in document;if(!jf){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),jf=typeof xm.oninput=="function"}Ff=jf}else Ff=!1;fv=Ff&&(!document.documentMode||9<document.documentMode)}function Cm(){Pa&&(Pa.detachEvent("onpropertychange",hv),Ka=Pa=null)}function hv(t){if(t.propertyName==="value"&&Sd(Ka)){var e=[];dv(e,Ka,t,Kp(t)),qy(d8,e)}}function h8(t,e,n){t==="focusin"?(Cm(),Pa=e,Ka=n,Pa.attachEvent("onpropertychange",hv)):t==="focusout"&&Cm()}function p8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sd(Ka)}function g8(t,e){if(t==="click")return Sd(e)}function m8(t,e){if(t==="input"||t==="change")return Sd(e)}function w8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:w8;function Za(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!F0.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=Em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Em(n)}}function pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function r1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y8(t){var e=gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pv(n.ownerDocument.documentElement,n)){if(r!==null&&r1(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=_m(n,o);var s=_m(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v8=yr&&"documentMode"in document&&11>=document.documentMode,Mo=null,oh=null,Aa=null,sh=!1;function Sm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||Mo==null||Mo!==fc(r)||(r=Mo,"selectionStart"in r&&r1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Za(Aa,r)||(Aa=r,r=vc(oh,"onSelect"),0<r.length&&(e=new e1("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mo)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bo={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},Wf={},mv={};yr&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function $d(t){if(Wf[t])return Wf[t];if(!Bo[t])return t;var e=Bo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return Wf[t]=e[n];return t}var wv=$d("animationend"),yv=$d("animationiteration"),vv=$d("animationstart"),bv=$d("transitionend"),xv=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){xv.set(t,e),ho(e,[t])}for(var zf=0;zf<$m.length;zf++){var Hf=$m[zf],b8=Hf.toLowerCase(),x8=Hf[0].toUpperCase()+Hf.slice(1);bi(b8,"on"+x8)}bi(wv,"onAnimationEnd");bi(yv,"onAnimationIteration");bi(vv,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(bv,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C8=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Pm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,b6(r,e,void 0,t),t.currentTarget=null}function Cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Pm(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Pm(i,a,u),o=l}}}if(pc)throw t=th,pc=!1,th=null,t}function Le(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(Ev(e,t,2,!1),n.add(r))}function Vf(t,e,n){var r=0;e&&(r|=4),Ev(n,t,r,e)}var $u="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[$u]){t[$u]=!0,ky.forEach(function(n){n!=="selectionchange"&&(C8.has(n)||Vf(n,!1,t),Vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$u]||(e[$u]=!0,Vf("selectionchange",!1,e))}}function Ev(t,e,n,r){switch(sv(e)){case 1:var i=M6;break;case 4:i=B6;break;default:i=Jp}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Fi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qy(function(){var u=o,c=Kp(n),f=[];e:{var p=xv.get(t);if(p!==void 0){var w=e1,y=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":w=J6;break;case"focusin":y="focus",w=Lf;break;case"focusout":y="blur",w=Lf;break;case"beforeblur":case"afterblur":w=Lf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=F6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=t8;break;case wv:case yv:case vv:w=z6;break;case bv:w=r8;break;case"scroll":w=U6;break;case"wheel":w=o8;break;case"copy":case"cut":case"paste":w=V6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wm}var C=(e&4)!==0,_=!C&&t==="scroll",b=C?p!==null?p+"Capture":null:p;C=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,b!==null&&(x=Ha(g,b),x!=null&&C.push(Ya(g,x,v)))),_)break;g=g.return}0<C.length&&(p=new w(p,y,null,n,c),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==J0&&(y=n.relatedTarget||n.fromElement)&&(Fi(y)||y[vr]))break e;if((w||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Fi(y):null,y!==null&&(_=po(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(C=gm,x="onMouseLeave",b="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(C=wm,x="onPointerLeave",b="onPointerEnter",g="pointer"),_=w==null?p:Uo(w),v=y==null?p:Uo(y),p=new C(x,g+"leave",w,n,c),p.target=_,p.relatedTarget=v,x=null,Fi(c)===u&&(C=new C(b,g+"enter",y,n,c),C.target=v,C.relatedTarget=_,x=C),_=x,w&&y)t:{for(C=w,b=y,g=0,v=C;v;v=Eo(v))g++;for(v=0,x=b;x;x=Eo(x))v++;for(;0<g-v;)C=Eo(C),g--;for(;0<v-g;)b=Eo(b),v--;for(;g--;){if(C===b||b!==null&&C===b.alternate)break t;C=Eo(C),b=Eo(b)}C=null}else C=null;w!==null&&Am(f,p,w,C,!1),y!==null&&_!==null&&Am(f,_,y,C,!0)}}e:{if(p=u?Uo(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=f8;else if(bm(p))if(fv)E=m8;else{E=p8;var S=h8}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=g8);if(E&&(E=E(t,u))){dv(f,E,n,c);break e}S&&S(t,p,u),t==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&G0(p,"number",p.value)}switch(S=u?Uo(u):window,t){case"focusin":(bm(S)||S.contentEditable==="true")&&(Mo=S,oh=u,Aa=null);break;case"focusout":Aa=oh=Mo=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,Sm(f,n,c);break;case"selectionchange":if(v8)break;case"keydown":case"keyup":Sm(f,n,c)}var d;if(n1)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ro?uv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(lv&&n.locale!=="ko"&&(Ro||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ro&&(d=av()):(Gr=c,Xp="value"in Gr?Gr.value:Gr.textContent,Ro=!0)),S=vc(u,P),0<S.length&&(P=new mm(P,t,null,n,c),f.push({event:P,listeners:S}),d?P.data=d:(d=cv(n),d!==null&&(P.data=d)))),(d=a8?l8(t,n):u8(t,n))&&(u=vc(u,"onBeforeInput"),0<u.length&&(c=new mm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=d))}Cv(f,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ha(t,n),o!=null&&r.unshift(Ya(t,o,i)),o=Ha(t,e),o!=null&&r.push(Ya(t,o,i))),t=t.return}return r}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ha(n,o),l!=null&&s.unshift(Ya(n,l,a))):i||(l=Ha(n,o),l!=null&&s.push(Ya(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var E8=/\r\n?/g,_8=/\u0000|\uFFFD/g;function Dm(t){return(typeof t=="string"?t:""+t).replace(E8,`
`).replace(_8,"")}function Pu(t,e,n){if(e=Dm(e),Dm(t)!==e&&n)throw Error(H(425))}function bc(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,S8=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,$8=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(t){return km.resolve(null).then(t).catch(P8)}:ch;function P8(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Rs,Ja="__reactProps$"+Rs,vr="__reactContainer$"+Rs,dh="__reactEvents$"+Rs,A8="__reactListeners$"+Rs,D8="__reactHandles$"+Rs;function Fi(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Om(t);t!==null;){if(n=t[Yn])return n;t=Om(t)}return e}t=n,n=t.parentNode}return null}function Kl(t){return t=t[Yn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Pd(t){return t[Ja]||null}var fh=[],Lo=-1;function xi(t){return{current:t}}function Fe(t){0>Lo||(t.current=fh[Lo],fh[Lo]=null,Lo--)}function Be(t,e){Lo++,fh[Lo]=t.current,t.current=e}var di={},kt=xi(di),Vt=xi(!1),Ji=di;function rs(t,e){var n=t.type.contextTypes;if(!n)return di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function xc(){Fe(Vt),Fe(kt)}function Tm(t,e,n){if(kt.current!==di)throw Error(H(168));Be(kt,e),Be(Vt,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,h6(t)||"Unknown",i));return Ge({},n,r)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||di,Ji=kt.current,Be(kt,t),Be(Vt,Vt.current),!0}function Im(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=_v(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Fe(Vt),Fe(kt),Be(kt,t)):Fe(Vt),Be(Vt,n)}var hr=null,Ad=!1,Kf=!1;function Sv(t){hr===null?hr=[t]:hr.push(t)}function k8(t){Ad=!0,Sv(t)}function Ci(){if(!Kf&&hr!==null){Kf=!0;var t=0,e=ke;try{var n=hr;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hr=null,Ad=!1}catch(i){throw hr!==null&&(hr=hr.slice(t+1)),Qy(Zp,Ci),i}finally{ke=e,Kf=!1}}return null}var Fo=[],jo=0,Ec=null,_c=0,gn=[],mn=0,Xi=null,pr=1,gr="";function Mi(t,e){Fo[jo++]=_c,Fo[jo++]=Ec,Ec=t,_c=e}function $v(t,e,n){gn[mn++]=pr,gn[mn++]=gr,gn[mn++]=Xi,Xi=t;var r=pr;t=gr;var i=32-Mn(r)-1;r&=~(1<<i),n+=1;var o=32-Mn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pr=1<<32-Mn(e)+i|n<<i|r,gr=o+t}else pr=1<<o|n<<i|r,gr=t}function i1(t){t.return!==null&&(Mi(t,1),$v(t,1,0))}function o1(t){for(;t===Ec;)Ec=Fo[--jo],Fo[jo]=null,_c=Fo[--jo],Fo[jo]=null;for(;t===Xi;)Xi=gn[--mn],gn[mn]=null,gr=gn[--mn],gn[mn]=null,pr=gn[--mn],gn[mn]=null}var sn=null,rn=null,ze=!1,Nn=null;function Pv(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,rn=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:pr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,rn=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(ze){var e=rn;if(e){var n=e;if(!Nm(t,e)){if(hh(t))throw Error(H(418));e=Xr(n.nextSibling);var r=sn;e&&Nm(t,e)?Pv(r,n):(t.flags=t.flags&-4097|2,ze=!1,sn=t)}}else{if(hh(t))throw Error(H(418));t.flags=t.flags&-4097|2,ze=!1,sn=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Au(t){if(t!==sn)return!1;if(!ze)return Rm(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=rn)){if(hh(t))throw Av(),Error(H(418));for(;e;)Pv(t,e),e=Xr(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=sn?Xr(t.stateNode.nextSibling):null;return!0}function Av(){for(var t=rn;t;)t=Xr(t.nextSibling)}function is(){rn=sn=null,ze=!1}function s1(t){Nn===null?Nn=[t]:Nn.push(t)}var O8=Ar.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=Ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Sc=xi(null),$c=null,Wo=null,a1=null;function l1(){a1=Wo=$c=null}function u1(t){var e=Sc.current;Fe(Sc),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yo(t,e){$c=t,a1=Wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(a1!==t)if(t={context:t,memoizedValue:e,next:null},Wo===null){if($c===null)throw Error(H(308));Wo=t,$c.dependencies={lanes:0,firstContext:t}}else Wo=Wo.next=t;return e}var ji=null;function c1(t){ji===null?ji=[t]:ji.push(t)}function Dv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,c1(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lr=!1;function d1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,c1(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qp(t,n)}}function Mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;Lr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,C=a;switch(p=e,w=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){f=y.call(w,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(w,f,p):y,p==null)break e;f=Ge({},f,p);break e;case 2:Lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=w,l=f):c=c.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);to|=s,t.lanes=s,t.memoizedState=f}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Ov=new Dy.Component().refs;function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dd={isMounted:function(t){return(t=t._reactInternals)?po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=ni(t),o=mr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ei(t,o,i),e!==null&&(Bn(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=ni(t),o=mr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ei(t,o,i),e!==null&&(Bn(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=ni(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(Bn(e,t,r,n),Yu(e,t,r))}};function Um(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Za(n,r)||!Za(i,o):!0}function Tv(t,e,n){var r=!1,i=di,o=e.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(i=qt(e)?Ji:kt.current,r=e.contextTypes,o=(r=r!=null)?rs(t,i):di),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Lm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dd.enqueueReplaceState(e,e.state,null)}function wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ov,d1(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Cn(o):(o=qt(e)?Ji:kt.current,i.context=rs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dd.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Ov&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Du(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fm(t){var e=t._init;return e(t._payload)}function Iv(t){function e(b,g){if(t){var v=b.deletions;v===null?(b.deletions=[g],b.flags|=16):v.push(g)}}function n(b,g){if(!t)return null;for(;g!==null;)e(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function i(b,g){return b=ri(b,g),b.index=0,b.sibling=null,b}function o(b,g,v){return b.index=v,t?(v=b.alternate,v!==null?(v=v.index,v<g?(b.flags|=2,g):v):(b.flags|=2,g)):(b.flags|=1048576,g)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,g,v,x){return g===null||g.tag!==6?(g=t0(v,b.mode,x),g.return=b,g):(g=i(g,v),g.return=b,g)}function l(b,g,v,x){var E=v.type;return E===No?c(b,g,v.props.children,x,v.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ur&&Fm(E)===g.type)?(x=i(g,v.props),x.ref=na(b,g,v),x.return=b,x):(x=rc(v.type,v.key,v.props,null,b.mode,x),x.ref=na(b,g,v),x.return=b,x)}function u(b,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=n0(v,b.mode,x),g.return=b,g):(g=i(g,v.children||[]),g.return=b,g)}function c(b,g,v,x,E){return g===null||g.tag!==7?(g=Ki(v,b.mode,x,E),g.return=b,g):(g=i(g,v),g.return=b,g)}function f(b,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=t0(""+g,b.mode,v),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yu:return v=rc(g.type,g.key,g.props,null,b.mode,v),v.ref=na(b,null,g),v.return=b,v;case Io:return g=n0(g,b.mode,v),g.return=b,g;case Ur:var x=g._init;return f(b,x(g._payload),v)}if(ma(g)||Ys(g))return g=Ki(g,b.mode,v,null),g.return=b,g;Du(b,g)}return null}function p(b,g,v,x){var E=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(b,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yu:return v.key===E?l(b,g,v,x):null;case Io:return v.key===E?u(b,g,v,x):null;case Ur:return E=v._init,p(b,g,E(v._payload),x)}if(ma(v)||Ys(v))return E!==null?null:c(b,g,v,x,null);Du(b,v)}return null}function w(b,g,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(v)||null,a(g,b,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yu:return b=b.get(x.key===null?v:x.key)||null,l(g,b,x,E);case Io:return b=b.get(x.key===null?v:x.key)||null,u(g,b,x,E);case Ur:var S=x._init;return w(b,g,v,S(x._payload),E)}if(ma(x)||Ys(x))return b=b.get(v)||null,c(g,b,x,E,null);Du(g,x)}return null}function y(b,g,v,x){for(var E=null,S=null,d=g,P=g=0,O=null;d!==null&&P<v.length;P++){d.index>P?(O=d,d=null):O=d.sibling;var T=p(b,d,v[P],x);if(T===null){d===null&&(d=O);break}t&&d&&T.alternate===null&&e(b,d),g=o(T,g,P),S===null?E=T:S.sibling=T,S=T,d=O}if(P===v.length)return n(b,d),ze&&Mi(b,P),E;if(d===null){for(;P<v.length;P++)d=f(b,v[P],x),d!==null&&(g=o(d,g,P),S===null?E=d:S.sibling=d,S=d);return ze&&Mi(b,P),E}for(d=r(b,d);P<v.length;P++)O=w(d,b,P,v[P],x),O!==null&&(t&&O.alternate!==null&&d.delete(O.key===null?P:O.key),g=o(O,g,P),S===null?E=O:S.sibling=O,S=O);return t&&d.forEach(function(M){return e(b,M)}),ze&&Mi(b,P),E}function C(b,g,v,x){var E=Ys(v);if(typeof E!="function")throw Error(H(150));if(v=E.call(v),v==null)throw Error(H(151));for(var S=E=null,d=g,P=g=0,O=null,T=v.next();d!==null&&!T.done;P++,T=v.next()){d.index>P?(O=d,d=null):O=d.sibling;var M=p(b,d,T.value,x);if(M===null){d===null&&(d=O);break}t&&d&&M.alternate===null&&e(b,d),g=o(M,g,P),S===null?E=M:S.sibling=M,S=M,d=O}if(T.done)return n(b,d),ze&&Mi(b,P),E;if(d===null){for(;!T.done;P++,T=v.next())T=f(b,T.value,x),T!==null&&(g=o(T,g,P),S===null?E=T:S.sibling=T,S=T);return ze&&Mi(b,P),E}for(d=r(b,d);!T.done;P++,T=v.next())T=w(d,b,P,T.value,x),T!==null&&(t&&T.alternate!==null&&d.delete(T.key===null?P:T.key),g=o(T,g,P),S===null?E=T:S.sibling=T,S=T);return t&&d.forEach(function(Y){return e(b,Y)}),ze&&Mi(b,P),E}function _(b,g,v,x){if(typeof v=="object"&&v!==null&&v.type===No&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case yu:e:{for(var E=v.key,S=g;S!==null;){if(S.key===E){if(E=v.type,E===No){if(S.tag===7){n(b,S.sibling),g=i(S,v.props.children),g.return=b,b=g;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ur&&Fm(E)===S.type){n(b,S.sibling),g=i(S,v.props),g.ref=na(b,S,v),g.return=b,b=g;break e}n(b,S);break}else e(b,S);S=S.sibling}v.type===No?(g=Ki(v.props.children,b.mode,x,v.key),g.return=b,b=g):(x=rc(v.type,v.key,v.props,null,b.mode,x),x.ref=na(b,g,v),x.return=b,b=x)}return s(b);case Io:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(b,g.sibling),g=i(g,v.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else e(b,g);g=g.sibling}g=n0(v,b.mode,x),g.return=b,b=g}return s(b);case Ur:return S=v._init,_(b,g,S(v._payload),x)}if(ma(v))return y(b,g,v,x);if(Ys(v))return C(b,g,v,x);Du(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(b,g.sibling),g=i(g,v),g.return=b,b=g):(n(b,g),g=t0(v,b.mode,x),g.return=b,b=g),s(b)):n(b,g)}return _}var os=Iv(!0),Nv=Iv(!1),Zl={},er=xi(Zl),Xa=xi(Zl),el=xi(Zl);function Wi(t){if(t===Zl)throw Error(H(174));return t}function f1(t,e){switch(Be(el,e),Be(Xa,t),Be(er,Zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Z0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Z0(e,t)}Fe(er),Be(er,e)}function ss(){Fe(er),Fe(Xa),Fe(el)}function Rv(t){Wi(el.current);var e=Wi(er.current),n=Z0(e,t.type);e!==n&&(Be(Xa,t),Be(er,n))}function h1(t){Xa.current===t&&(Fe(er),Fe(Xa))}var He=xi(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zf=[];function p1(){for(var t=0;t<Zf.length;t++)Zf[t]._workInProgressVersionPrimary=null;Zf.length=0}var Ju=Ar.ReactCurrentDispatcher,Qf=Ar.ReactCurrentBatchConfig,eo=0,qe=null,at=null,gt=null,Dc=!1,Da=!1,tl=0,T8=0;function _t(){throw Error(H(321))}function g1(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function m1(t,e,n,r,i,o){if(eo=o,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ju.current=t===null||t.memoizedState===null?M8:B8,t=n(r,i),Da){o=0;do{if(Da=!1,tl=0,25<=o)throw Error(H(301));o+=1,gt=at=null,e.updateQueue=null,Ju.current=U8,t=n(r,i)}while(Da)}if(Ju.current=kc,e=at!==null&&at.next!==null,eo=0,gt=at=qe=null,Dc=!1,e)throw Error(H(300));return t}function w1(){var t=tl!==0;return tl=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?qe.memoizedState=gt=t:gt=gt.next=t,gt}function En(){if(at===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=gt===null?qe.memoizedState:gt.next;if(e!==null)gt=e,at=t;else{if(t===null)throw Error(H(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},gt===null?qe.memoizedState=gt=t:gt=gt.next=t}return gt}function nl(t,e){return typeof e=="function"?e(t):e}function Yf(t){var e=En(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((eo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,qe.lanes|=c,to|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ln(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,qe.lanes|=o,to|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jf(t){var e=En(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ln(o,e.memoizedState)||(zt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Mv(){}function Bv(t,e){var n=qe,r=En(),i=e(),o=!Ln(r.memoizedState,i);if(o&&(r.memoizedState=i,zt=!0),r=r.queue,y1(Fv.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,rl(9,Lv.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(H(349));eo&30||Uv(n,e,i)}return i}function Uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lv(t,e,n,r){e.value=n,e.getSnapshot=r,jv(e)&&Wv(t)}function Fv(t,e,n){return n(function(){jv(e)&&Wv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function Wv(t){var e=br(t,1);e!==null&&Bn(e,t,1,-1)}function jm(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=R8.bind(null,qe,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zv(){return En().memoizedState}function Xu(t,e,n,r){var i=Qn();qe.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function kd(t,e,n,r){var i=En();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&g1(r,s.deps)){i.memoizedState=rl(e,n,o,r);return}}qe.flags|=t,i.memoizedState=rl(1|e,n,o,r)}function Wm(t,e){return Xu(8390656,8,t,e)}function y1(t,e){return kd(2048,8,t,e)}function Hv(t,e){return kd(4,2,t,e)}function Vv(t,e){return kd(4,4,t,e)}function qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gv(t,e,n){return n=n!=null?n.concat([t]):null,kd(4,4,qv.bind(null,e,t),n)}function v1(){}function Kv(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&g1(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zv(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&g1(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qv(t,e,n){return eo&21?(Ln(n,e)||(n=Xy(),qe.lanes|=n,to|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function I8(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=Qf.transition;Qf.transition={};try{t(!1),e()}finally{ke=n,Qf.transition=r}}function Yv(){return En().memoizedState}function N8(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(t))Xv(e,n);else if(n=Dv(t,e,n,r),n!==null){var i=Rt();Bn(n,t,r,i),e3(n,e,r)}}function R8(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(t))Xv(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,s)){var l=e.interleaved;l===null?(i.next=i,c1(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Dv(t,e,i,r),n!==null&&(i=Rt(),Bn(n,t,r,i),e3(n,e,r))}}function Jv(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function Xv(t,e){Da=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e3(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qp(t,n)}}var kc={readContext:Cn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},M8={readContext:Cn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4194308,4,qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=N8.bind(null,qe,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:jm,useDebugValue:v1,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=jm(!1),e=t[0];return t=I8.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=qe,i=Qn();if(ze){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),yt===null)throw Error(H(349));eo&30||Uv(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Wm(Fv.bind(null,r,o,t),[t]),r.flags|=2048,rl(9,Lv.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Qn(),e=yt.identifierPrefix;if(ze){var n=gr,r=pr;n=(r&~(1<<32-Mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T8++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},B8={readContext:Cn,useCallback:Kv,useContext:Cn,useEffect:y1,useImperativeHandle:Gv,useInsertionEffect:Hv,useLayoutEffect:Vv,useMemo:Zv,useReducer:Yf,useRef:zv,useState:function(){return Yf(nl)},useDebugValue:v1,useDeferredValue:function(t){var e=En();return Qv(e,at.memoizedState,t)},useTransition:function(){var t=Yf(nl)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Bv,useId:Yv,unstable_isNewReconciler:!1},U8={readContext:Cn,useCallback:Kv,useContext:Cn,useEffect:y1,useImperativeHandle:Gv,useInsertionEffect:Hv,useLayoutEffect:Vv,useMemo:Zv,useReducer:Jf,useRef:zv,useState:function(){return Jf(nl)},useDebugValue:v1,useDeferredValue:function(t){var e=En();return at===null?e.memoizedState=t:Qv(e,at.memoizedState,t)},useTransition:function(){var t=Jf(nl)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mv,useSyncExternalStore:Bv,useId:Yv,unstable_isNewReconciler:!1};function as(t,e){try{var n="",r=e;do n+=f6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Xf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L8=typeof WeakMap=="function"?WeakMap:Map;function t3(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tc||(Tc=!0,Ah=r),yh(t,e)},n}function n3(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new L8;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=X8.bind(null,t,e,n),e.then(t,t))}function Hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var F8=Ar.ReactCurrentOwner,zt=!1;function Tt(t,e,n,r){e.child=t===null?Nv(e,null,n,r):os(e,t.child,n,r)}function qm(t,e,n,r,i){n=n.render;var o=e.ref;return Yo(e,i),r=m1(t,e,n,r,o,i),n=w1(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(ze&&n&&i1(e),e.flags|=1,Tt(t,e,r,i),e.child)}function Gm(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!P1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,r3(t,e,o,r,i)):(t=rc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(s,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=ri(o,r),t.ref=e.ref,t.return=e,e.child=t}function r3(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Za(o,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,xr(t,e,i)}return vh(t,e,n,r,i)}function i3(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Ho,nn),nn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(Ho,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Be(Ho,nn),nn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Be(Ho,nn),nn|=r;return Tt(t,e,i,n),e.child}function o3(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var o=qt(n)?Ji:kt.current;return o=rs(e,o),Yo(e,i),n=m1(t,e,n,r,o,i),r=w1(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(ze&&r&&i1(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Km(t,e,n,r,i){if(qt(n)){var o=!0;Cc(e)}else o=!1;if(Yo(e,i),e.stateNode===null)ec(t,e),Tv(e,n,r),wh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=qt(n)?Ji:kt.current,u=rs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Lm(e,s,r,u),Lr=!1;var p=e.memoizedState;s.state=p,Pc(e,r,s,i),l=e.memoizedState,a!==r||p!==l||Vt.current||Lr?(typeof c=="function"&&(mh(e,n,c,r),l=e.memoizedState),(a=Lr||Um(e,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,kv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),s.props=u,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=qt(n)?Ji:kt.current,l=rs(e,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Lm(e,s,r,l),Lr=!1,p=e.memoizedState,s.state=p,Pc(e,r,s,i);var y=e.memoizedState;a!==f||p!==y||Vt.current||Lr?(typeof w=="function"&&(mh(e,n,w,r),y=e.memoizedState),(u=Lr||Um(e,n,u,r,p,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return bh(t,e,n,r,o,i)}function bh(t,e,n,r,i,o){o3(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Im(e,n,!1),xr(t,e,o);r=e.stateNode,F8.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=os(e,t.child,null,o),e.child=os(e,null,a,o)):Tt(t,e,a,o),e.memoizedState=r.state,i&&Im(e,n,!0),e.child}function s3(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),f1(t,e.containerInfo)}function Zm(t,e,n,r,i){return is(),s1(i),e.flags|=256,Tt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function a3(t,e,n){var r=e.pendingProps,i=He.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(He,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Id(s,r,0,null),t=Ki(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ch(n),e.memoizedState=xh,t):b1(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return j8(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ri(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ri(a,o):(o=Ki(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ch(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return o=t.child,t=o.sibling,r=ri(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function b1(t,e){return e=Id({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ku(t,e,n,r){return r!==null&&s1(r),os(e,t.child,null,n),t=b1(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j8(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Xf(Error(H(422))),ku(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Id({mode:"visible",children:r.children},i,0,null),o=Ki(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&os(e,t.child,null,s),e.child.memoizedState=Ch(s),e.memoizedState=xh,o);if(!(e.mode&1))return ku(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=Xf(o,r,void 0),ku(t,e,s,r)}if(a=(s&t.childLanes)!==0,zt||a){if(r=yt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,br(t,i),Bn(r,t,i,-1))}return $1(),r=Xf(Error(H(421))),ku(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ex.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,rn=Xr(i.nextSibling),sn=e,ze=!0,Nn=null,t!==null&&(gn[mn++]=pr,gn[mn++]=gr,gn[mn++]=Xi,pr=t.id,gr=t.overflow,Xi=e),e=b1(e,r.children),e.flags|=4096,e)}function Qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gh(t.return,e,n)}function e0(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function l3(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Tt(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),e0(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}e0(e,!0,n,null,o);break;case"together":e0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),to|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W8(t,e,n){switch(e.tag){case 3:s3(e),is();break;case 5:Rv(e);break;case 1:qt(e.type)&&Cc(e);break;case 4:f1(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Be(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Be(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?a3(t,e,n):(Be(He,He.current&1),t=xr(t,e,n),t!==null?t.sibling:null);Be(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return l3(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,i3(t,e,n)}return xr(t,e,n)}var u3,Eh,c3,d3;u3=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};c3=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(er.current);var o=null;switch(n){case"input":i=V0(t,i),r=V0(t,r),o=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),o=[];break;case"textarea":i=K0(t,i),r=K0(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bc)}Q0(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Le("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};d3=function(t,e,n,r){n!==r&&(e.flags|=4)};function ra(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z8(t,e,n){var r=e.pendingProps;switch(o1(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return qt(e.type)&&xc(),St(e),null;case 3:return r=e.stateNode,ss(),Fe(Vt),Fe(kt),p1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Oh(Nn),Nn=null))),Eh(t,e),St(e),null;case 5:h1(e);var i=Wi(el.current);if(n=e.type,t!==null&&e.stateNode!=null)c3(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return St(e),null}if(t=Wi(er.current),Au(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Yn]=e,r[Ja]=o,t=(e.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<ya.length;i++)Le(ya[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":om(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":am(r,o),Le("invalid",r)}Q0(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):Wa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Le("scroll",r)}switch(n){case"input":vu(r),sm(r,o,!0);break;case"textarea":vu(r),lm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Yn]=e,t[Ja]=r,u3(t,e,!1,!1),e.stateNode=t;e:{switch(s=Y0(n,r),n){case"dialog":Le("cancel",t),Le("close",t),i=r;break;case"iframe":case"object":case"embed":Le("load",t),i=r;break;case"video":case"audio":for(i=0;i<ya.length;i++)Le(ya[i],t);i=r;break;case"source":Le("error",t),i=r;break;case"img":case"image":case"link":Le("error",t),Le("load",t),i=r;break;case"details":Le("toggle",t),i=r;break;case"input":om(t,r),i=V0(t,r),Le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Le("invalid",t);break;case"textarea":am(t,r),i=K0(t,r),Le("invalid",t);break;default:i=r}Q0(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?jy(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ly(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Le("scroll",t):l!=null&&Hp(t,o,l,s))}switch(n){case"input":vu(t),sm(t,r,!1);break;case"textarea":vu(t),lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Go(t,!!r.multiple,o,!1):r.defaultValue!=null&&Go(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)d3(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Wi(el.current),Wi(er.current),Au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(o=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return St(e),null;case 13:if(Fe(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&rn!==null&&e.mode&1&&!(e.flags&128))Av(),is(),e.flags|=98560,o=!1;else if(o=Au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Yn]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),o=!1}else Nn!==null&&(Oh(Nn),Nn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?lt===0&&(lt=3):$1())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return ss(),Eh(t,e),t===null&&Qa(e.stateNode.containerInfo),St(e),null;case 10:return u1(e.type._context),St(e),null;case 17:return qt(e.type)&&xc(),St(e),null;case 19:if(Fe(He),o=e.memoizedState,o===null)return St(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ra(o,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,ra(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(He,He.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ye()>ls&&(e.flags|=128,r=!0,ra(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ac(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ze)return St(e),null}else 2*Ye()-o.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,ra(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ye(),e.sibling=null,n=He.current,Be(He,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return S1(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function H8(t,e){switch(o1(e),e.tag){case 1:return qt(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),Fe(Vt),Fe(kt),p1(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return h1(e),null;case 13:if(Fe(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Fe(He),null;case 4:return ss(),null;case 10:return u1(e.type._context),null;case 22:case 23:return S1(),null;case 24:return null;default:return null}}var Ou=!1,At=!1,V8=typeof WeakSet=="function"?WeakSet:Set,ne=null;function zo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(t,e,r)}else n.current=null}function _h(t,e,n){try{n()}catch(r){Ze(t,e,r)}}var Ym=!1;function q8(t,e){if(ah=wc,t=gv(),r1(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,p=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},wc=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,_=y.memoizedState,b=e.stateNode,g=b.getSnapshotBeforeUpdate(e.elementType===e.type?C:On(e.type,C),_);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){Ze(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return y=Ym,Ym=!1,y}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&_h(e,n,o)}i=i.next}while(i!==r)}}function Od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f3(t){var e=t.alternate;e!==null&&(t.alternate=null,f3(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Ja],delete e[dh],delete e[A8],delete e[D8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h3(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h3(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var bt=null,In=!1;function Rr(t,e,n){for(n=n.child;n!==null;)p3(t,e,n),n=n.sibling}function p3(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Ed,n)}catch{}switch(n.tag){case 5:At||zo(n,e);case 6:var r=bt,i=In;bt=null,Rr(t,e,n),bt=r,In=i,bt!==null&&(In?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(In?(t=bt,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),Ga(t)):Gf(bt,n.stateNode));break;case 4:r=bt,i=In,bt=n.stateNode.containerInfo,In=!0,Rr(t,e,n),bt=r,In=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_h(n,e,s),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!At&&(zo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ze(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Rr(t,e,n),At=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V8),e.forEach(function(r){var i=tx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,In=!1;break e;case 3:bt=a.stateNode.containerInfo,In=!0;break e;case 4:bt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(bt===null)throw Error(H(160));p3(o,s,i),bt=null,In=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g3(e,t),e=e.sibling}function g3(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Vn(t),r&4){try{ka(3,t,t.return),Od(3,t)}catch(C){Ze(t,t.return,C)}try{ka(5,t,t.return)}catch(C){Ze(t,t.return,C)}}break;case 1:Dn(e,t),Vn(t),r&512&&n!==null&&zo(n,n.return);break;case 5:if(Dn(e,t),Vn(t),r&512&&n!==null&&zo(n,n.return),t.flags&32){var i=t.stateNode;try{za(i,"")}catch(C){Ze(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&My(i,o),Y0(a,s);var u=Y0(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?jy(i,f):c==="dangerouslySetInnerHTML"?Ly(i,f):c==="children"?za(i,f):Hp(i,c,f,u)}switch(a){case"input":q0(i,o);break;case"textarea":By(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Go(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Go(i,!!o.multiple,o.defaultValue,!0):Go(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ja]=o}catch(C){Ze(t,t.return,C)}}break;case 6:if(Dn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){Ze(t,t.return,C)}}break;case 3:if(Dn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(C){Ze(t,t.return,C)}break;case 4:Dn(e,t),Vn(t);break;case 13:Dn(e,t),Vn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(E1=Ye())),r&4&&Xm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||c,Dn(e,t),At=u):Dn(e,t),Vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ne=t,c=t.child;c!==null;){for(f=ne=c;ne!==null;){switch(p=ne,w=p.child,p.tag){case 0:case 11:case 14:case 15:ka(4,p,p.return);break;case 1:zo(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(C){Ze(r,n,C)}}break;case 5:zo(p,p.return);break;case 22:if(p.memoizedState!==null){tw(f);continue}}w!==null?(w.return=p,ne=w):tw(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fy("display",s))}catch(C){Ze(t,t.return,C)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){Ze(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Vn(t),r&4&&Xm(t);break;case 21:break;default:Dn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h3(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(za(i,""),r.flags&=-33);var o=Jm(t);Ph(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jm(t);$h(t,a,s);break;default:throw Error(H(161))}}catch(l){Ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G8(t,e,n){ne=t,m3(t)}function m3(t,e,n){for(var r=(t.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ou;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=Ou;var u=At;if(Ou=s,(At=l)&&!u)for(ne=i;ne!==null;)s=ne,l=s.child,s.tag===22&&s.memoizedState!==null?nw(i):l!==null?(l.return=s,ne=l):nw(i);for(;o!==null;)ne=o,m3(o),o=o.sibling;ne=i,Ou=a,At=u}ew(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):ew(t)}}function ew(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||Od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Bm(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}At||e.flags&512&&Sh(e)}catch(p){Ze(e,e.return,p)}}if(e===t){ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,ne=n;break}ne=e.return}}function tw(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ne=n;break}ne=e.return}}function nw(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Od(4,e)}catch(l){Ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ze(e,i,l)}}var o=e.return;try{Sh(e)}catch(l){Ze(e,o,l)}break;case 5:var s=e.return;try{Sh(e)}catch(l){Ze(e,s,l)}}}catch(l){Ze(e,e.return,l)}if(e===t){ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ne=a;break}ne=e.return}}var K8=Math.ceil,Oc=Ar.ReactCurrentDispatcher,x1=Ar.ReactCurrentOwner,xn=Ar.ReactCurrentBatchConfig,Se=0,yt=null,it=null,xt=0,nn=0,Ho=xi(0),lt=0,il=null,to=0,Td=0,C1=0,Oa=null,Wt=null,E1=0,ls=1/0,fr=null,Tc=!1,Ah=null,ti=null,Tu=!1,Kr=null,Ic=0,Ta=0,Dh=null,tc=-1,nc=0;function Rt(){return Se&6?Ye():tc!==-1?tc:tc=Ye()}function ni(t){return t.mode&1?Se&2&&xt!==0?xt&-xt:O8.transition!==null?(nc===0&&(nc=Xy()),nc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:sv(t.type)),t):1}function Bn(t,e,n,r){if(50<Ta)throw Ta=0,Dh=null,Error(H(185));ql(t,n,r),(!(Se&2)||t!==yt)&&(t===yt&&(!(Se&2)&&(Td|=n),lt===4&&zr(t,xt)),Gt(t,r),n===1&&Se===0&&!(e.mode&1)&&(ls=Ye()+500,Ad&&Ci()))}function Gt(t,e){var n=t.callbackNode;O6(t,e);var r=mc(t,t===yt?xt:0);if(r===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?k8(rw.bind(null,t)):Sv(rw.bind(null,t)),$8(function(){!(Se&6)&&Ci()}),n=null;else{switch(ev(r)){case 1:n=Zp;break;case 4:n=Yy;break;case 16:n=gc;break;case 536870912:n=Jy;break;default:n=gc}n=_3(n,w3.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w3(t,e){if(tc=-1,nc=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(Jo()&&t.callbackNode!==n)return null;var r=mc(t,t===yt?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nc(t,r);else{e=r;var i=Se;Se|=2;var o=v3();(yt!==t||xt!==e)&&(fr=null,ls=Ye()+500,Gi(t,e));do try{Y8();break}catch(a){y3(t,a)}while(!0);l1(),Oc.current=o,Se=i,it!==null?e=0:(yt=null,xt=0,e=lt)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=kh(t,i))),e===1)throw n=il,Gi(t,0),zr(t,r),Gt(t,Ye()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Z8(i)&&(e=Nc(t,r),e===2&&(o=nh(t),o!==0&&(r=o,e=kh(t,o))),e===1))throw n=il,Gi(t,0),zr(t,r),Gt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Bi(t,Wt,fr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=E1+500-Ye(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(Bi.bind(null,t,Wt,fr),e);break}Bi(t,Wt,fr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Mn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K8(r/1960))-r,10<r){t.timeoutHandle=ch(Bi.bind(null,t,Wt,fr),r);break}Bi(t,Wt,fr);break;case 5:Bi(t,Wt,fr);break;default:throw Error(H(329))}}}return Gt(t,Ye()),t.callbackNode===n?w3.bind(null,t):null}function kh(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Oh(e)),t}function Oh(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function Z8(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ln(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~C1,e&=~Td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),r=1<<n;t[n]=-1,e&=~r}}function rw(t){if(Se&6)throw Error(H(327));Jo();var e=mc(t,0);if(!(e&1))return Gt(t,Ye()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=il,Gi(t,0),zr(t,e),Gt(t,Ye()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bi(t,Wt,fr),Gt(t,Ye()),null}function _1(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(ls=Ye()+500,Ad&&Ci())}}function no(t){Kr!==null&&Kr.tag===0&&!(Se&6)&&Jo();var e=Se;Se|=1;var n=xn.transition,r=ke;try{if(xn.transition=null,ke=1,t)return t()}finally{ke=r,xn.transition=n,Se=e,!(Se&6)&&Ci()}}function S1(){nn=Ho.current,Fe(Ho)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,S8(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(o1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xc();break;case 3:ss(),Fe(Vt),Fe(kt),p1();break;case 5:h1(r);break;case 4:ss();break;case 13:Fe(He);break;case 19:Fe(He);break;case 10:u1(r.type._context);break;case 22:case 23:S1()}n=n.return}if(yt=t,it=t=ri(t.current,null),xt=nn=e,lt=0,il=null,C1=Td=to=0,Wt=Oa=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ji=null}return t}function y3(t,e){do{var n=it;try{if(l1(),Ju.current=kc,Dc){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(eo=0,gt=at=qe=null,Da=!1,tl=0,x1.current=null,n===null||n.return===null){lt=1,il=e,it=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Hm(s);if(w!==null){w.flags&=-257,Vm(w,s,a,o,e),w.mode&1&&zm(o,u,e),e=w,l=u;var y=e.updateQueue;if(y===null){var C=new Set;C.add(l),e.updateQueue=C}else y.add(l);break e}else{if(!(e&1)){zm(o,u,e),$1();break e}l=Error(H(426))}}else if(ze&&a.mode&1){var _=Hm(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Vm(_,s,a,o,e),s1(as(l,a));break e}}o=l=as(l,a),lt!==4&&(lt=2),Oa===null?Oa=[o]:Oa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=t3(o,l,e);Mm(o,b);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ti===null||!ti.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=n3(o,a,e);Mm(o,x);break e}}o=o.return}while(o!==null)}x3(n)}catch(E){e=E,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function v3(){var t=Oc.current;return Oc.current=kc,t===null?kc:t}function $1(){(lt===0||lt===3||lt===2)&&(lt=4),yt===null||!(to&268435455)&&!(Td&268435455)||zr(yt,xt)}function Nc(t,e){var n=Se;Se|=2;var r=v3();(yt!==t||xt!==e)&&(fr=null,Gi(t,e));do try{Q8();break}catch(i){y3(t,i)}while(!0);if(l1(),Se=n,Oc.current=r,it!==null)throw Error(H(261));return yt=null,xt=0,lt}function Q8(){for(;it!==null;)b3(it)}function Y8(){for(;it!==null&&!C6();)b3(it)}function b3(t){var e=E3(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?x3(t):it=e,x1.current=null}function x3(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H8(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,it=null;return}}else if(n=z8(n,e,nn),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);lt===0&&(lt=5)}function Bi(t,e,n){var r=ke,i=xn.transition;try{xn.transition=null,ke=1,J8(t,e,n,r)}finally{xn.transition=i,ke=r}return null}function J8(t,e,n,r){do Jo();while(Kr!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(T6(t,o),t===yt&&(it=yt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,_3(gc,function(){return Jo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xn.transition,xn.transition=null;var s=ke;ke=1;var a=Se;Se|=4,x1.current=null,q8(t,n),g3(n,t),y8(lh),wc=!!ah,lh=ah=null,t.current=n,G8(n),E6(),Se=a,ke=s,xn.transition=o}else t.current=n;if(Tu&&(Tu=!1,Kr=t,Ic=i),o=t.pendingLanes,o===0&&(ti=null),$6(n.stateNode),Gt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tc)throw Tc=!1,t=Ah,Ah=null,t;return Ic&1&&t.tag!==0&&Jo(),o=t.pendingLanes,o&1?t===Dh?Ta++:(Ta=0,Dh=t):Ta=0,Ci(),null}function Jo(){if(Kr!==null){var t=ev(Ic),e=xn.transition,n=ke;try{if(xn.transition=null,ke=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,Ic=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,ne=t.current;ne!==null;){var o=ne,s=o.child;if(ne.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ne=u;ne!==null;){var c=ne;switch(c.tag){case 0:case 11:case 15:ka(8,c,o)}var f=c.child;if(f!==null)f.return=c,ne=f;else for(;ne!==null;){c=ne;var p=c.sibling,w=c.return;if(f3(c),c===u){ne=null;break}if(p!==null){p.return=w,ne=p;break}ne=w}}}var y=o.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var _=C.sibling;C.sibling=null,C=_}while(C!==null)}}ne=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ne=s;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ka(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,ne=b;break e}ne=o.return}}var g=t.current;for(ne=g;ne!==null;){s=ne;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ne=v;else e:for(s=g;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Od(9,a)}}catch(E){Ze(a,a.return,E)}if(a===s){ne=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ne=x;break e}ne=a.return}}if(Se=i,Ci(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Ed,t)}catch{}r=!0}return r}finally{ke=n,xn.transition=e}}return!1}function iw(t,e,n){e=as(n,e),e=t3(t,e,1),t=ei(t,e,1),e=Rt(),t!==null&&(ql(t,1,e),Gt(t,e))}function Ze(t,e,n){if(t.tag===3)iw(t,t,n);else for(;e!==null;){if(e.tag===3){iw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=as(n,t),t=n3(e,t,1),e=ei(e,t,1),t=Rt(),e!==null&&(ql(e,1,t),Gt(e,t));break}}e=e.return}}function X8(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(xt&n)===n&&(lt===4||lt===3&&(xt&130023424)===xt&&500>Ye()-E1?Gi(t,0):C1|=n),Gt(t,e)}function C3(t,e){e===0&&(t.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var n=Rt();t=br(t,e),t!==null&&(ql(t,e,n),Gt(t,n))}function ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C3(t,n)}function tx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),C3(t,n)}var E3;E3=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,W8(t,e,n);zt=!!(t.flags&131072)}else zt=!1,ze&&e.flags&1048576&&$v(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ec(t,e),t=e.pendingProps;var i=rs(e,kt.current);Yo(e,n),i=m1(null,e,r,t,i,n);var o=w1();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(o=!0,Cc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,d1(e),i.updater=Dd,e.stateNode=i,i._reactInternals=e,wh(e,r,t,n),e=bh(null,e,r,!0,o,n)):(e.tag=0,ze&&o&&i1(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rx(r),t=On(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=Km(null,e,r,t,n);break e;case 11:e=qm(null,e,r,t,n);break e;case 14:e=Gm(null,e,r,On(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Km(t,e,r,i,n);case 3:e:{if(s3(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,kv(t,e),Pc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=as(Error(H(423)),e),e=Zm(t,e,r,n,i);break e}else if(r!==i){i=as(Error(H(424)),e),e=Zm(t,e,r,n,i);break e}else for(rn=Xr(e.stateNode.containerInfo.firstChild),sn=e,ze=!0,Nn=null,n=Nv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=xr(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&ph(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,uh(r,i)?s=null:o!==null&&uh(r,o)&&(e.flags|=32),o3(t,e),Tt(t,e,s,n),e.child;case 6:return t===null&&ph(e),null;case 13:return a3(t,e,n);case 4:return f1(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),qm(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Be(Sc,r._currentValue),r._currentValue=s,o!==null)if(Ln(o.value,s)){if(o.children===i.children&&!Vt.current){e=xr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yo(e,n),i=Cn(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),Gm(t,e,r,i,n);case 15:return r3(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),ec(t,e),e.tag=1,qt(r)?(t=!0,Cc(e)):t=!1,Yo(e,n),Tv(e,r,i),wh(e,r,i,n),bh(null,e,r,!0,t,n);case 19:return l3(t,e,n);case 22:return i3(t,e,n)}throw Error(H(156,e.tag))};function _3(t,e){return Qy(t,e)}function nx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new nx(t,e,n,r)}function P1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return P1(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qp)return 11;if(t===Gp)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")P1(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case No:return Ki(n.children,i,o,e);case Vp:s=8,i|=8;break;case j0:return t=wn(12,n,e,i|2),t.elementType=j0,t.lanes=o,t;case W0:return t=wn(13,n,e,i),t.elementType=W0,t.lanes=o,t;case z0:return t=wn(19,n,e,i),t.elementType=z0,t.lanes=o,t;case Iy:return Id(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oy:s=10;break e;case Ty:s=9;break e;case qp:s=11;break e;case Gp:s=14;break e;case Ur:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=wn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Ki(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Id(t,e,n,r){return t=wn(22,t,r,e),t.elementType=Iy,t.lanes=n,t.stateNode={isHidden:!1},t}function t0(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function n0(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ix(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mf(0),this.expirationTimes=Mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function A1(t,e,n,r,i,o,s,a,l){return t=new ix(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},d1(o),t}function ox(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S3(t){if(!t)return di;t=t._reactInternals;e:{if(po(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(qt(n))return _v(t,n,e)}return e}function $3(t,e,n,r,i,o,s,a,l){return t=A1(n,r,!0,t,i,o,s,a,l),t.context=S3(null),n=t.current,r=Rt(),i=ni(n),o=mr(r,i),o.callback=e??null,ei(n,o,i),t.current.lanes=i,ql(t,i,r),Gt(t,r),t}function Nd(t,e,n,r){var i=e.current,o=Rt(),s=ni(i);return n=S3(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,s),t!==null&&(Bn(t,i,s,o),Yu(t,i,s)),s}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ow(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function D1(t,e){ow(t,e),(t=t.alternate)&&ow(t,e)}function sx(){return null}var P3=typeof reportError=="function"?reportError:function(t){console.error(t)};function k1(t){this._internalRoot=t}Rd.prototype.render=k1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Nd(t,e,null,null)};Rd.prototype.unmount=k1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;no(function(){Nd(null,t,null,null)}),e[vr]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&ov(t)}};function O1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function ax(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Rc(s);o.call(u)}}var s=$3(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=s,t[vr]=s.current,Qa(t.nodeType===8?t.parentNode:t),no(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=A1(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=l,t[vr]=l.current,Qa(t.nodeType===8?t.parentNode:t),no(function(){Nd(e,l,n,r)}),l}function Bd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Rc(s);a.call(l)}}Nd(e,s,t,i)}else s=ax(n,e,t,i,r);return Rc(s)}tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Qp(e,n|1),Gt(e,Ye()),!(Se&6)&&(ls=Ye()+500,Ci()))}break;case 13:no(function(){var r=br(t,1);if(r!==null){var i=Rt();Bn(r,t,1,i)}}),D1(t,1)}};Yp=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=Rt();Bn(e,t,134217728,n)}D1(t,134217728)}};nv=function(t){if(t.tag===13){var e=ni(t),n=br(t,e);if(n!==null){var r=Rt();Bn(n,t,e,r)}D1(t,e)}};rv=function(){return ke};iv=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};X0=function(t,e,n){switch(e){case"input":if(q0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pd(r);if(!i)throw Error(H(90));Ry(r),q0(r,i)}}}break;case"textarea":By(t,n);break;case"select":e=n.value,e!=null&&Go(t,!!n.multiple,e,!1)}};Hy=_1;Vy=no;var lx={usingClientEntryPoint:!1,Events:[Kl,Uo,Pd,Wy,zy,_1]},ia={findFiberByHostInstance:Fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ux={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Ed=Iu.inject(ux),Xn=Iu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O1(e))throw Error(H(200));return ox(t,e,null,n)};ln.createRoot=function(t,e){if(!O1(t))throw Error(H(299));var n=!1,r="",i=P3;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=A1(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new k1(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return no(t)};ln.hydrate=function(t,e,n){if(!Md(e))throw Error(H(200));return Bd(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!O1(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=P3;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=$3(e,null,t,1,n??null,i,!1,o,s),t[vr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rd(e)};ln.render=function(t,e,n){if(!Md(e))throw Error(H(200));return Bd(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!Md(t))throw Error(H(40));return t._reactRootContainer?(no(function(){Bd(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};ln.unstable_batchedUpdates=_1;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Md(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Bd(t,e,n,!1,r)};ln.version="18.2.0-next-9e3b772b8-20220608";function A3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A3)}catch(t){console.error(t)}}A3(),$y.exports=ln;var cx=$y.exports,aw=cx;L0.createRoot=aw.createRoot,L0.hydrateRoot=aw.hydrateRoot;let Ae;function dx(t){t&&(Ae=t)}function fx(){if(!Ae)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');function t(s){Ae==null||Ae.setThemeMode(s)}function e(s){Ae==null||Ae.setThemeVariables(s)}const[n,r]=Xe.useState(Ae.getThemeMode()),[i,o]=Xe.useState(Ae.getThemeVariables());return Xe.useEffect(()=>{const s=Ae==null?void 0:Ae.subscribeTheme(a=>{r(a.themeMode),o(a.themeVariables)});return()=>{s==null||s()}},[]),{themeMode:n,themeVariables:i,setThemeMode:t,setThemeVariables:e}}function hx(){if(!Ae)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(n){await(Ae==null?void 0:Ae.open(n))}async function e(){await(Ae==null?void 0:Ae.close())}return{open:t,close:e}}function px(){if(!Ae)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');const[t,e]=Xe.useState(Ae.getState());return Xe.useEffect(()=>{const n=Ae==null?void 0:Ae.subscribeState(r=>{e({...r})});return()=>{n==null||n()}},[]),t}function gx(){if(!Ae)throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');const[t,e]=Xe.useState(Ae.getEvent());return Xe.useEffect(()=>{const n=Ae==null?void 0:Ae.subscribeEvents(r=>{e({...r})});return()=>{n==null||n()}},[]),t}function D3(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}const mx="1.19.10",wx=t=>t,Ud=t=>t,yx=()=>`viem@${mx}`;class G extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:yx()});const r=n.cause instanceof G?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof G&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return k3(this,e)}}function k3(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?k3(t.cause,e):e?null:t}class vx extends G{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class bx extends G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class xx extends G{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function tr(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function ut(t){return tr(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function Zi(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class O3 extends G{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class T3 extends G{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Ms(t,{dir:e,size:n=32}={}){return typeof t=="string"?ii(t,{dir:e,size:n}):Cx(t,{dir:e,size:n})}function ii(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new T3({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function Cx(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new T3({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const Ex=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Dr(t,e={}){return typeof t=="number"||typeof t=="bigint"?he(t,e):typeof t=="string"?T1(t,e):typeof t=="boolean"?I3(t,e):ol(t,e)}function I3(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(Ei(n,{size:e.size}),Ms(n,{size:e.size})):n}function ol(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=Ex[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(Ei(r,{size:e.size}),Ms(r,{dir:"right",size:e.size})):r}function he(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new vx({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Ms(a,{size:r}):a}const _x=new TextEncoder;function T1(t,e={}){const n=_x.encode(t);return ol(n,e)}const Sx=new TextEncoder;function fi(t,e={}){return typeof t=="number"||typeof t=="bigint"?Px(t,e):typeof t=="boolean"?$x(t,e):tr(t)?I1(t,e):wr(t,e)}function $x(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(Ei(n,{size:e.size}),Ms(n,{size:e.size})):n}const ur={zero:48,nine:57,A:65,F:70,a:97,f:102};function lw(t){if(t>=ur.zero&&t<=ur.nine)return t-ur.zero;if(t>=ur.A&&t<=ur.F)return t-(ur.A-10);if(t>=ur.a&&t<=ur.f)return t-(ur.a-10)}function I1(t,e={}){let n=t;e.size&&(Ei(n,{size:e.size}),n=Ms(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=lw(r.charCodeAt(a++)),u=lw(r.charCodeAt(a++));if(l===void 0||u===void 0)throw new G(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+u}return o}function Px(t,e){const n=he(t,e);return I1(n)}function wr(t,e={}){const n=Sx.encode(t);return typeof e.size=="number"?(Ei(n,{size:e.size}),Ms(n,{dir:"right",size:e.size})):n}function Ei(t,{size:e}){if(ut(t)>e)throw new xx({givenSize:ut(t),maxSize:e})}function Ld(t,e={}){const{signed:n}=e;e.size&&Ei(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function Ax(t,e={}){let n=t;if(e.size&&(Ei(n,{size:e.size}),n=Zi(n)),Zi(n)==="0x00")return!1;if(Zi(n)==="0x01")return!0;throw new bx(n)}function Dt(t,e={}){return Number(Ld(t,e))}function N3(t,e={}){let n=I1(t);return e.size&&(Ei(n,{size:e.size}),n=Zi(n,{dir:"right"})),new TextDecoder().decode(n)}const R3={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function M3(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Dt(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Dt(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?R3[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function B3(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:M3(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function Fn(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const Dx={"0x0":"reverted","0x1":"success"};function kx(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>Fn(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Dt(t.transactionIndex):null,status:t.status?Dx[t.status]:null,type:t.type?R3[t.type]||t.type:null}}const Ox={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Fd(t){return{...t,gas:typeof t.gas<"u"?he(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?he(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?he(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?he(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?he(t.nonce):void 0,type:typeof t.type<"u"?Ox[t.type]:void 0,value:typeof t.value<"u"?he(t.value):void 0}}class sl extends G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Th extends G{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Tx extends G{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class Ix extends G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class U3 extends G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const Nx={gwei:9,wei:18},Rx={ether:-9,wei:9},Mx={ether:-18,gwei:-9};function Mc(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function Kt(t,e="wei"){return Mc(t,Rx[e])}class Vo extends G{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Vo,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Vo,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Bc extends G{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Kt(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Bc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Ih extends G{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Kt(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Ih,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Nh extends G{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Nh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Rh extends G{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Rh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Mh extends G{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Mh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Bh extends G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Bh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Uh extends G{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Uh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Lh extends G{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Lh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Fh extends G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Fh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Uc extends G{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Kt(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Kt(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Uc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class jd extends G{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const Bx=/^0x[a-fA-F0-9]{40}$/;function us(t){return Bx.test(t)}function Cr(t){return typeof t[0]=="string"?N1(t):Ux(t)}function Ux(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function N1(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function Lx(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const uw=/^tuple(?<array>(\[(\d*)\])*)$/;function jh(t){let e=t.type;if(uw.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let i=0;i<n;i++){const o=t.components[i];e+=jh(o),i<n-1&&(e+=", ")}const r=Lx(uw,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,jh({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function oa(t){let e="";const n=t.length;for(let r=0;r<n;r++){const i=t[r];e+=jh(i),r!==n-1&&(e+=", ")}return e}function Fx(t){return t.type==="function"?`function ${t.name}(${oa(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${oa(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${oa(t.inputs)})`:t.type==="error"?`error ${t.name}(${oa(t.inputs)})`:t.type==="constructor"?`constructor(${oa(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function le(t,e,n){return r=>{var i;return((i=t[e.name||n])==null?void 0:i.call(t,r))??e(t,r)}}function go(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new Xx(t.type);return`${t.name}(${Wd(t.inputs,{includeName:e})})`}function Wd(t,{includeName:e=!1}={}){return t?t.map(n=>jx(n,{includeName:e})).join(e?", ":","):""}function jx(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Wd(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class Wx extends G{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class cw extends G{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class R1 extends G{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Wd(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class zd extends G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class zx extends G{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Hx extends G{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${ut(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Vx extends G{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class L3 extends G{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class qx extends G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class Gx extends G{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class dw extends G{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Lc extends G{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Kx extends G{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Zx extends G{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class ro extends G{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Wd(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Bs extends G{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${go(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class Qx extends G{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Yx extends G{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class Jx extends G{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class Xx extends G{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class eC extends G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function tC(t){let e=!0,n="",r=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}i+=a,n+=a}}if(!o)throw new G("Unable to normalize signature.");return i}const F3=t=>{const e=typeof t=="string"?t:Fx(t);return tC(e)},nC=t=>F3(t);function fw(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function j3(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function hw(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function rC(t,e){j3(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Nu=BigInt(2**32-1),pw=BigInt(32);function iC(t,e=!1){return e?{h:Number(t&Nu),l:Number(t>>pw&Nu)}:{h:Number(t>>pw&Nu)|0,l:Number(t&Nu)|0}}function oC(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=iC(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const sC=(t,e,n)=>t<<n|e>>>32-n,aC=(t,e,n)=>e<<n|t>>>32-n,lC=(t,e,n)=>e<<n-32|t>>>64-n,uC=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const cC=t=>t instanceof Uint8Array,dC=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),fC=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!fC)throw new Error("Non little-endian hardware is not supported");function hC(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function W3(t){if(typeof t=="string"&&(t=hC(t)),!cC(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class pC{clone(){return this._cloneInto()}}function gC(t){const e=r=>t().update(W3(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[z3,H3,V3]=[[],[],[]],mC=BigInt(0),sa=BigInt(1),wC=BigInt(2),yC=BigInt(7),vC=BigInt(256),bC=BigInt(113);for(let t=0,e=sa,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],z3.push(2*(5*r+n)),H3.push((t+1)*(t+2)/2%64);let i=mC;for(let o=0;o<7;o++)e=(e<<sa^(e>>yC)*bC)%vC,e&wC&&(i^=sa<<(sa<<BigInt(o))-sa);V3.push(i)}const[xC,CC]=oC(V3,!0),gw=(t,e,n)=>n>32?lC(t,e,n):sC(t,e,n),mw=(t,e,n)=>n>32?uC(t,e,n):aC(t,e,n);function EC(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,u=n[l],c=n[l+1],f=gw(u,c,1)^n[a],p=mw(u,c,1)^n[a+1];for(let w=0;w<50;w+=10)t[s+w]^=f,t[s+w+1]^=p}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=H3[s],l=gw(i,o,a),u=mw(i,o,a),c=z3[s];i=t[c],o=t[c+1],t[c]=l,t[c+1]=u}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=xC[r],t[1]^=CC[r]}n.fill(0)}class M1 extends pC{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,fw(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=dC(this.state)}keccak(){EC(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){hw(this);const{blockLen:n,state:r}=this;e=W3(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){hw(this,!1),j3(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return fw(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(rC(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new M1(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const _C=(t,e,n)=>gC(()=>new M1(e,t,n)),SC=_C(1,136,256/8);function Nt(t,e){const n=e||"hex",r=SC(tr(t,{strict:!1})?fi(t):t);return n==="bytes"?r:Dr(r)}const $C=t=>Nt(fi(t)),B1=t=>$C(nC(t));function ot(t,e,n,{strict:r}={}){return tr(t,{strict:!1})?AC(t,e,n,{strict:r}):PC(t,e,n,{strict:r})}function q3(t,e){if(typeof e=="number"&&e>0&&e>ut(t)-1)throw new O3({offset:e,position:"start",size:ut(t)})}function G3(t,e,n){if(typeof e=="number"&&typeof n=="number"&&ut(t)!==n-e)throw new O3({offset:n,position:"end",size:ut(t)})}function PC(t,e,n,{strict:r}={}){q3(t,e);const i=t.slice(e,n);return r&&G3(i,e,n),i}function AC(t,e,n,{strict:r}={}){q3(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&G3(i,e,n),i}function Ql(t,e){if(t.length!==e.length)throw new Vx({expectedLength:t.length,givenLength:e.length});const n=DC({params:t,values:e}),r=L1(n);return r.length===0?"0x":r}function DC({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(U1({param:t[r],value:e[r]}));return n}function U1({param:t,value:e}){const n=Hd(t.type);if(n){const[r,i]=n;return OC(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return MC(e,{param:t});if(t.type==="address")return kC(e);if(t.type==="bool")return IC(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return NC(e,{signed:r})}if(t.type.startsWith("bytes"))return TC(e,{param:t});if(t.type==="string")return RC(e);throw new Qx(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function L1(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=ut(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(he(e+i,{size:32})),r.push(a),i+=ut(a)):n.push(a)}return Cr([...n,...r])}function kC(t){if(!us(t))throw new sl({address:t});return{dynamic:!1,encoded:ii(t.toLowerCase())}}function OC(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new Jx(t);if(!r&&t.length!==e)throw new zx({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=U1({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=L1(o);if(r){const a=he(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?Cr([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Cr(o.map(({encoded:s})=>s))}}function TC(t,{param:e}){const[,n]=e.type.split("bytes"),r=ut(t);if(!n){let i=t;return r%32!==0&&(i=ii(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:Cr([ii(he(r,{size:32})),i])}}if(r!==parseInt(n))throw new Hx({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:ii(t,{dir:"right"})}}function IC(t){return{dynamic:!1,encoded:ii(I3(t))}}function NC(t,{signed:e}){return{dynamic:!1,encoded:he(t,{size:32,signed:e})}}function RC(t){const e=T1(t),n=Math.ceil(ut(e)/32),r=[];for(let i=0;i<n;i++)r.push(ii(ot(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Cr([ii(he(ut(e),{size:32})),...r])}}function MC(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=U1({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?L1(r):Cr(r.map(({encoded:i})=>i))}}function Hd(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const BC=t=>Nt(fi(t)),F1=t=>ot(BC(F3(t)),0,4);function Yl({abi:t,args:e=[],name:n}){const r=tr(n,{strict:!1}),i=t.filter(o=>r?o.type==="function"?F1(o)===n:o.type==="event"?B1(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((a,l)=>{const u="inputs"in o&&o.inputs[l];return u?Wh(a,u):!1}))return o}return i[0]}}function Wh(t,e){const n=typeof t,r=e.type;switch(r){case"address":return us(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>Wh(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>Wh(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Jl({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=Yl({abi:t,args:n,name:e}),!r))throw new dw(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new dw(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=go(r),o=B1(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(c=>"indexed"in c&&c.indexed),u=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(c=>n[c.name]))??[]:[];u.length>0&&(s=(l==null?void 0:l.map((c,f)=>Array.isArray(u[f])?u[f].map((p,w)=>ww({param:c,value:u[f][w]})):u[f]?ww({param:c,value:u[f]}):null))??[])}return[o,...s]}function ww({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Nt(fi(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new eC(t.type);return Ql([t],[e])}function Vd(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function K3(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=Vd(t,{method:"eth_newFilter"}),u=i?Jl({abi:n,args:r,eventName:i}):void 0,c=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?he(o):o,toBlock:typeof a=="bigint"?he(a):a,topics:u}]});return{abi:n,args:r,eventName:i,id:c,request:l(c),strict:s,type:"event"}}function $n(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function _i({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=Yl({abi:t,args:e,name:n}),!r))throw new Lc(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Lc(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=go(r),o=F1(i),s="inputs"in r&&r.inputs?Ql(r.inputs,e??[]):void 0;return N1([o,s??"0x"])}const Z3={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},UC={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},LC={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function j1(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Nt(wr(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Un(t,e){if(!us(t))throw new sl({address:t});return j1(t,e)}function qd(t,e){if(e==="0x"&&t.length>0)throw new zd;if(ut(e)&&ut(e)<32)throw new R1({data:e,params:t,size:ut(e)});return FC({data:e,params:t})}function FC({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=ut(t))throw new R1({data:t,params:e,size:ut(t)});const o=e[i],{consumed:s,value:a}=Xo({data:t,param:o,position:r});n.push(a),r+=s}return n}function Xo({data:t,param:e,position:n}){const r=Hd(e.type);if(r){const[o,s]=r;return WC(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return GC(t,{param:e,position:n});if(e.type==="string")return qC(t,{position:n});if(e.type.startsWith("bytes"))return HC(t,{param:e,position:n});const i=ot(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return VC(i,{param:e});if(e.type==="address")return jC(i);if(e.type==="bool")return zC(i);throw new Yx(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function jC(t){return{consumed:32,value:j1(ot(t,-20))}}function WC(t,{param:e,length:n,position:r}){if(!n){const s=Dt(ot(t,r,r+32,{strict:!0})),a=Dt(ot(t,s,s+32,{strict:!0}));let l=0;const u=[];for(let c=0;c<a;++c){const f=Xo({data:ot(t,s+32),param:e,position:l});l+=f.consumed,u.push(f.value)}return{value:u,consumed:32}}if(Fc(e)){const s=Hd(e.type),a=!(s!=null&&s[0]);let l=0;const u=[];for(let c=0;c<n;++c){const f=Dt(ot(t,r,r+32,{strict:!0})),p=Xo({data:ot(t,f),param:e,position:a?l:c*32});l+=p.consumed,u.push(p.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=Xo({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function zC(t){return{consumed:32,value:Ax(t)}}function HC(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=Dt(ot(t,n,n+32,{strict:!0})),a=Dt(ot(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:ot(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:ot(t,n,n+parseInt(i),{strict:!0})}}function VC(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Ld(t,{signed:n}):Dt(t,{signed:n})}}function qC(t,{position:e}){const n=Dt(ot(t,e,e+32,{strict:!0})),r=Dt(ot(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:N3(Zi(ot(t,n+32,n+32+r,{strict:!0})))}}function GC(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(Fc(e)){const s=Dt(ot(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],u=Xo({data:ot(t,s),param:l,position:o});o+=u.consumed,i[r?a:l==null?void 0:l.name]=u.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=Xo({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function Fc(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(Fc);const n=Hd(t.type);return!!(n&&Fc({...t,type:n[1]}))}function KC({abi:t,data:e}){const n=ot(e,0,4);if(n==="0x")throw new zd;const i=[...t||[],UC,LC].find(o=>o.type==="error"&&n===F1(go(o)));if(!i)throw new L3(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?qd(i.inputs,ot(e,4)):void 0,errorName:i.name}}const Mt=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function Q3({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Mt(e[o]):e[o]}`).join(", ")})`}function W1(t,e="wei"){return Mc(t,Nx[e])}function Xl(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class ZC extends G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class QC extends G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Xl(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class YC extends G{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){var y;const w=Xl({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:f,value:typeof p<"u"&&`${W1(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Kt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Kt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Kt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class Y3 extends G{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class J3 extends G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class JC extends G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class X3 extends G{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){var C;const w=n?$n(n):void 0,y=Xl({from:w==null?void 0:w.address,to:f,value:typeof p<"u"&&`${W1(p)} ${((C=i==null?void 0:i.nativeCurrency)==null?void 0:C.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Kt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Kt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Kt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class z1 extends G{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=Yl({abi:n,args:r,name:s}),u=l?Q3({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,c=l?go(l,{includeName:!0}):void 0,f=Xl({address:i&&wx(i),function:c,args:u&&u!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${u}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class zh extends G{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=KC({abi:e,data:n});const{abiItem:c,errorName:f,args:p}=s;if(f==="Error")l=p[0];else if(f==="Panic"){const[w]=p;l=Z3[w]}else{const w=c?go(c,{includeName:!0}):void 0,y=c&&p?Q3({abiItem:c,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",y&&y!=="()"?`       ${[...Array((f==null?void 0:f.length)??0).keys()].map(()=>" ").join("")}${y}`:""]}}catch(c){o=c}else i&&(l=i);let u;o instanceof L3&&(u=o.signature,a=[`Unable to decode signature "${u}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`]),super(l&&l!=="execution reverted"||u?[`The contract function "${r}" reverted with the following ${u?"signature":"reason"}:`,l||u].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=u}}class XC extends G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class H1 extends G{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Ia extends G{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Ud(o)}`,e&&`Request body: ${Mt(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class e7 extends G{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Ud(r)}`,`Request body: ${Mt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class V1 extends G{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Ud(r)}`,`Request body: ${Mt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class Hh extends G{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Ud(n)}`,`Request body: ${Mt(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const t7=-1;class Yt extends G{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof V1?e.code:n??t7}}class Us extends Yt{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class al extends Yt{constructor(e){super(e,{code:al.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(al,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class ll extends Yt{constructor(e){super(e,{code:ll.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(ll,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class ul extends Yt{constructor(e){super(e,{code:ul.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(ul,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class cl extends Yt{constructor(e){super(e,{code:cl.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(cl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class cs extends Yt{constructor(e){super(e,{code:cs.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(cs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class io extends Yt{constructor(e){super(e,{code:io.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(io,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class dl extends Yt{constructor(e){super(e,{code:dl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(dl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class ds extends Yt{constructor(e){super(e,{code:ds.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(ds,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class fl extends Yt{constructor(e){super(e,{code:fl.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(fl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class hl extends Yt{constructor(e){super(e,{code:hl.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(hl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class pl extends Yt{constructor(e){super(e,{code:pl.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(pl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class gl extends Yt{constructor(e){super(e,{code:gl.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(gl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Ht extends Us{constructor(e){super(e,{code:Ht.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Ht,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ml extends Us{constructor(e){super(e,{code:ml.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(ml,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class wl extends Us{constructor(e){super(e,{code:wl.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(wl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class yl extends Us{constructor(e){super(e,{code:yl.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class vl extends Us{constructor(e){super(e,{code:vl.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(vl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Er extends Us{constructor(e){super(e,{code:Er.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Er,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class n7 extends Yt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const r7=3;function bl(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:u,shortMessage:c}=t instanceof H1?t:t instanceof G?t.walk(p=>"data"in p)||t.walk():{},f=t instanceof zd?new XC({functionName:o}):[r7,cs.code].includes(a)&&(l||u||c)?new zh({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:c??u}):t;return new z1(f,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Ls extends G{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class i7 extends G{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p}){var y;const w=Xl({from:n==null?void 0:n.address,to:f,value:typeof p<"u"&&`${W1(p)} ${((y=i==null?void 0:i.nativeCurrency)==null?void 0:y.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Kt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Kt(l)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Kt(u)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function q1(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===Vo.code);return r instanceof G?new Vo({cause:t,message:r.details}):Vo.nodeMessage.test(n)?new Vo({cause:t,message:t.details}):Bc.nodeMessage.test(n)?new Bc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Ih.nodeMessage.test(n)?new Ih({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Nh.nodeMessage.test(n)?new Nh({cause:t,nonce:e==null?void 0:e.nonce}):Rh.nodeMessage.test(n)?new Rh({cause:t,nonce:e==null?void 0:e.nonce}):Mh.nodeMessage.test(n)?new Mh({cause:t,nonce:e==null?void 0:e.nonce}):Bh.nodeMessage.test(n)?new Bh({cause:t}):Uh.nodeMessage.test(n)?new Uh({cause:t,gas:e==null?void 0:e.gas}):Lh.nodeMessage.test(n)?new Lh({cause:t,gas:e==null?void 0:e.gas}):Fh.nodeMessage.test(n)?new Fh({cause:t}):Uc.nodeMessage.test(n)?new Uc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new jd({cause:t})}function o7(t,{docsPath:e,...n}){const r=(()=>{const i=q1(t,n);return i instanceof jd?t:i})();return new i7(r,{docsPath:e,...n})}function G1(t,{format:e}){if(!e)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in t&&(n[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=e(t||{});return r(i),n}function eu(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?$n(e):void 0;if(s&&!us(s.address))throw new sl({address:s.address});if(o&&!us(o))throw new sl({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new ZC;if(r&&r>2n**256n-1n)throw new Bc({maxFeePerGas:r});if(i&&r&&i>r)throw new Uc({maxFeePerGas:r,maxPriorityFeePerGas:i})}class s7 extends G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class K1 extends G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class a7 extends G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Kt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class e5 extends G{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function hi(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var c,f,p;const o=r??"latest",s=i??!1,a=n!==void 0?he(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new e5({blockHash:e,blockNumber:n});return(((p=(f=(c=t.chain)==null?void 0:c.formatters)==null?void 0:f.block)==null?void 0:p.format)||B3)(l)}async function Z1(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function l7(t,e){return t5(t,e)}async function t5(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await le(t,hi,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:t,request:i})}if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return Ld(l)}catch{const[l,u]=await Promise.all([n?Promise.resolve(n):le(t,hi,"getBlock")({}),le(t,Z1,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new K1;const c=u-l.baseFeePerGas;return c<0n?0n:c}}async function u7(t,e){return Vh(t,e)}async function Vh(t,e){var p,w;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var y,C;return typeof((y=r==null?void 0:r.fees)==null?void 0:y.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((C=r==null?void 0:r.fees)==null?void 0:C.baseFeeMultiplier)??1.2})();if(s<1)throw new s7;const l=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),u=y=>y*BigInt(Math.ceil(s*l))/BigInt(l),c=n||await le(t,hi,"getBlock")({});if(typeof((w=r==null?void 0:r.fees)==null?void 0:w.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:u,request:i,type:o});if(o==="eip1559"){if(typeof c.baseFeePerGas!="bigint")throw new K1;const y=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await t5(t,{block:c,chain:r,request:i}),C=u(c.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??C+y,maxPriorityFeePerGas:y}}return{gasPrice:(i==null?void 0:i.gasPrice)??u(await le(t,Z1,"getGasPrice")({}))}}async function n5(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?he(r):n]});return Dt(i)}function c7(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new QC({transaction:t})}async function Gd(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Ls;const a=$n(n),l=await le(t,hi,"getBlock")({blockTag:"latest"}),u={...e,from:a.address};if(typeof o>"u"&&(u.nonce=await le(t,n5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{u.type=c7(u)}catch{u.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(u.type==="eip1559"){const{maxFeePerGas:c,maxPriorityFeePerGas:f}=await Vh(t,{block:l,chain:r,request:u});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<f)throw new a7({maxPriorityFeePerGas:f});u.maxPriorityFeePerGas=f,u.maxFeePerGas=c}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new K1;const{gasPrice:c}=await Vh(t,{block:l,chain:r,request:u,type:"legacy"});u.gasPrice=c}return typeof i>"u"&&(u.gas=await le(t,Q1,"estimateGas")({...u,account:{address:a.address,type:"json-rpc"}})),eu(u),u}async function Q1(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Ls({docsPath:"/docs/actions/public/estimateGas"});const r=$n(n);try{const{accessList:a,blockNumber:l,blockTag:u,data:c,gas:f,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:C,to:_,value:b,...g}=r.type==="local"?await Gd(t,e):e,x=(l?he(l):void 0)||u;eu(e);const E=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,d=(E||Fd)({...G1(g,{format:E}),from:r.address,accessList:a,data:c,gas:f,gasPrice:p,maxFeePerGas:w,maxPriorityFeePerGas:y,nonce:C,to:_,value:b}),P=await t.request({method:"eth_estimateGas",params:x?[d,x]:[d]});return BigInt(P)}catch(a){throw o7(a,{...e,account:r,chain:t.chain})}}async function d7(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=_i({abi:e,args:r,functionName:i});try{return await le(t,Q1,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?$n(o.account):void 0;throw bl(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const yw="/docs/contract/decodeEventLog";function tu({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new qx({docsPath:yw});const a=t.find(y=>y.type==="event"&&o===B1(go(y)));if(!(a&&"name"in a)||a.type!=="event")throw new Gx(o,{docsPath:yw});const{name:l,inputs:u}=a,c=u==null?void 0:u.some(y=>!("name"in y&&y.name));let f=c?[]:{};const p=u.filter(y=>"indexed"in y&&y.indexed);for(let y=0;y<p.length;y++){const C=p[y],_=s[y];if(!_)throw new Bs({abiItem:a,param:C});f[C.name||y]=f7({param:C,value:_})}const w=u.filter(y=>!("indexed"in y&&y.indexed));if(w.length>0){if(e&&e!=="0x")try{const y=qd(w,e);if(y)if(c)f=[...f,...y];else for(let C=0;C<w.length;C++)f[w[C].name]=y[C]}catch(y){if(i)throw y instanceof R1?new ro({abiItem:a,data:y.data,params:y.params,size:y.size}):y}else if(i)throw new ro({abiItem:a,data:"0x",params:w,size:0})}return{eventName:l,args:Object.values(f).length>0?f:void 0}}function f7({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(qd([t],e)||[])[0]}async function Y1(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const u=l??!1,c=s??(o?[o]:void 0);let f=[];c&&(f=[c.flatMap(w=>Jl({abi:[w],eventName:w.name,args:a}))],o&&(f=f[0]));let p;return n?p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:n}]}):p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof r=="bigint"?he(r):r,toBlock:typeof i=="bigint"?he(i):i}]}),p.map(w=>{var y;try{const{eventName:C,args:_}=c?tu({abi:c,data:w.data,topics:w.topics,strict:u}):{eventName:void 0,args:void 0};return Fn(w,{args:_,eventName:C})}catch(C){let _,b;if(C instanceof ro||C instanceof Bs){if(u)return;_=C.abiItem.name,b=(y=C.abiItem.inputs)==null?void 0:y.some(g=>!("name"in g&&g.name))}return Fn(w,{args:b?[]:{},eventName:_})}}).filter(Boolean)}async function r5(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const u=o?Yl({abi:e,name:o}):void 0,c=u?void 0:e.filter(f=>f.type==="event");return le(t,Y1,"getLogs")({address:n,args:r,blockHash:i,event:u,events:c,fromBlock:s,toBlock:a,strict:l})}const r0="/docs/contract/decodeFunctionResult";function Fs({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=Yl({abi:t,args:e,name:n}),!i))throw new Lc(n,{docsPath:r0});if(i.type!=="function")throw new Lc(void 0,{docsPath:r0});if(!i.outputs)throw new Kx(i.name,{docsPath:r0});const o=qd(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const h7="modulepreload",p7=function(t){return"/"+t},vw={},fs=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=p7(o),o in vw)return;vw[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":h7,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},qh=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o5=[...i5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],g7=[...i5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],bw=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],xw=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],m7=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],w7="0x82ad56cb";function js({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new Th({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Th({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function y7(t,{docsPath:e,...n}){const r=(()=>{const i=q1(t,n);return i instanceof jd?t:i})();return new X3(r,{docsPath:e,...n})}const i0=new Map;function J1({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const c=l();s();const f=c.map(({args:p})=>p);f.length!==0&&t(f).then(p=>{var w;i&&Array.isArray(p)&&p.sort(i);for(let y=0;y<c.length;y++){const{pendingPromise:C}=c[y];(w=C.resolve)==null||w.call(C,[p[y],p])}}).catch(p=>{var w;for(let y=0;y<c.length;y++){const{pendingPromise:C}=c[y];(w=C.reject)==null||w.call(C,p)}})},s=()=>i0.delete(e),a=()=>l().map(({args:c})=>c),l=()=>i0.get(e)||[],u=c=>i0.set(e,[...l(),c]);return{flush:s,async schedule(c){const f={},p=new Promise((C,_)=>{f.resolve=C,f.reject=_});return(n==null?void 0:n([...a(),c]))&&o(),l().length>0?(u({args:c,pendingPromise:f}),p):(u({args:c,pendingPromise:f}),setTimeout(o,r),p)}}}async function Kd(t,e){var b,g,v,x;const{account:n=t.account,batch:r=!!((b=t.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:u,maxFeePerGas:c,maxPriorityFeePerGas:f,nonce:p,to:w,value:y,...C}=e,_=n?$n(n):void 0;try{eu(e);const S=(i?he(i):void 0)||o,d=(x=(v=(g=t.chain)==null?void 0:g.formatters)==null?void 0:v.transactionRequest)==null?void 0:x.format,O=(d||Fd)({...G1(C,{format:d}),from:_==null?void 0:_.address,accessList:s,data:a,gas:l,gasPrice:u,maxFeePerGas:c,maxPriorityFeePerGas:f,nonce:p,to:w,value:y});if(r&&v7({request:O}))try{return await b7(t,{...O,blockNumber:i,blockTag:o})}catch(M){if(!(M instanceof U3)&&!(M instanceof Th))throw M}const T=await t.request({method:"eth_call",params:S?[O,S]:[O]});return T==="0x"?{data:void 0}:{data:T}}catch(E){const S=x7(E),{offchainLookup:d,offchainLookupSignature:P}=await fs(()=>import("./ccip-ipVqAZuB.js"),__vite__mapDeps([]));if((S==null?void 0:S.slice(0,10))===P&&w)return{data:await d(t,{data:S,to:w})};throw y7(E,{...e,account:_,chain:t.chain})}}function v7({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(w7)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function b7(t,e){var C;const{batchSize:n=1024,wait:r=0}=typeof((C=t.batch)==null?void 0:C.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let u=a;if(!u){if(!t.chain)throw new U3;u=js({blockNumber:i,chain:t.chain,contract:"multicall3"})}const f=(i?he(i):void 0)||o,{schedule:p}=J1({id:`${t.uid}.${f}`,wait:r,shouldSplitBatch(_){return _.reduce((g,{data:v})=>g+(v.length-2),0)>n*2},fn:async _=>{const b=_.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),g=_i({abi:qh,args:[b],functionName:"aggregate3"}),v=await t.request({method:"eth_call",params:[{data:g,to:u},f]});return Fs({abi:qh,args:[b],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:w,success:y}]=await p({data:s,to:l});if(!y)throw new H1({data:w});return w==="0x"?{data:void 0}:{data:w}}function x7(t){if(!(t instanceof G))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function pi(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=_i({abi:e,args:r,functionName:i});try{const{data:a}=await le(t,Kd,"call")({data:s,to:n,...o});return Fs({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw bl(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function C7(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?$n(s.account):void 0,l=_i({abi:e,args:r,functionName:o});try{const{data:u}=await le(t,Kd,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:Fs({abi:e,args:r,functionName:o,data:u||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(u){throw bl(u,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const o0=new Map,Cw=new Map;let E7=0;function Ws(t,e,n){const r=++E7,i=()=>o0.get(t)||[],o=()=>{const c=i();o0.set(t,c.filter(f=>f.id!==r))},s=()=>{const c=Cw.get(t);i().length===1&&c&&c(),o()},a=i();if(o0.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const c in e)l[c]=(...f)=>{var w,y;const p=i();if(p.length!==0)for(const C of p)(y=(w=C.fns)[c])==null||y.call(w,...f)};const u=n(l);return typeof u=="function"&&Cw.set(t,u),s}async function jc(t){return new Promise(e=>setTimeout(e,t))}function nu(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await jc(l);const u=async()=>{i&&(await t({unpoll:o}),await jc(r),u())};u()})(),o}const _7=new Map,S7=new Map;function $7(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,_7),r=e(t,S7);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function P7(t,{cacheKey:e,cacheTime:n=1/0}){const r=$7(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const A7=t=>`blockNumber.${t}`;async function ru(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await P7(()=>t.request({method:"eth_blockNumber"}),{cacheKey:A7(t.uid),cacheTime:n??e});return BigInt(r)}async function Zd(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?tu({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Fn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof ro||s instanceof Bs){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Fn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function Qd(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function D7(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:u=t.pollingInterval,strict:c}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const y=Mt(["watchContractEvent",n,r,i,t.uid,o,u]),C=c??!1;return Ws(y,{onLogs:a,onError:s},_=>{let b,g,v=!1;const x=nu(async()=>{var E;if(!v){try{g=await le(t,K3,"createContractEventFilter")({abi:e,address:n,args:r,eventName:o,strict:C})}catch{}v=!0;return}try{let S;if(g)S=await le(t,Zd,"getFilterChanges")({filter:g});else{const d=await le(t,ru,"getBlockNumber")({});b&&b!==d?S=await le(t,r5,"getContractEvents")({abi:e,address:n,args:r,eventName:o,fromBlock:b+1n,toBlock:d,strict:C}):S=[],b=d}if(S.length===0)return;if(i)_.onLogs(S);else for(const d of S)_.onLogs([d])}catch(S){g&&S instanceof io&&(v=!1),(E=_.onError)==null||E.call(_,S)}},{emitOnBegin:!0,interval:u});return async()=>{g&&await le(t,Qd,"uninstallFilter")({filter:g}),x()}})})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{const _=o?Jl({abi:e,eventName:o,args:r}):[],{unsubscribe:b}=await t.transport.subscribe({params:["logs",{address:n,topics:_}],onData(g){var x;if(!y)return;const v=g.result;try{const{eventName:E,args:S}=tu({abi:e,data:v.data,topics:v.topics,strict:c}),d=Fn(v,{args:S,eventName:E});a([d])}catch(E){let S,d;if(E instanceof ro||E instanceof Bs){if(c)return;S=E.abiItem.name,d=(x=E.abiItem.inputs)==null?void 0:x.some(O=>!("name"in O&&O.name))}const P=Fn(v,{args:d?[]:{},eventName:S});a([P])}},onError(g){s==null||s(g)}});C=b,y||C()}catch(_){s==null||s(_)}})(),C})()}function s5({chain:t,currentChainId:e}){if(!t)throw new Ix;if(e!==t.id)throw new Tx({chain:t,currentChainId:e})}function k7(t,{docsPath:e,...n}){const r=(()=>{const i=q1(t,n);return i instanceof jd?t:i})();return new YC(r,{docsPath:e,...n})}async function xl(t){const e=await t.request({method:"eth_chainId"});return Dt(e)}async function X1(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function eg(t,e){var C,_,b,g;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p,...w}=e;if(!n)throw new Ls({docsPath:"/docs/actions/wallet/sendTransaction"});const y=$n(n);try{eu(e);let v;if(r!==null&&(v=await le(t,xl,"getChainId")({}),s5({currentChainId:v,chain:r})),y.type==="local"){const d=await le(t,Gd,"prepareTransactionRequest")({account:y,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p,...w});v||(v=await le(t,xl,"getChainId")({}));const P=(C=r==null?void 0:r.serializers)==null?void 0:C.transaction,O=await y.signTransaction({...d,chainId:v},{serializer:P});return await le(t,X1,"sendRawTransaction")({serializedTransaction:O})}const x=(g=(b=(_=t.chain)==null?void 0:_.formatters)==null?void 0:b.transactionRequest)==null?void 0:g.format,S=(x||Fd)({...G1(w,{format:x}),accessList:i,data:o,from:y.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:c,to:f,value:p});return await t.request({method:"eth_sendTransaction",params:[S]})}catch(v){throw k7(v,{...e,account:y,chain:e.chain||void 0})}}async function O7(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=_i({abi:e,args:r,functionName:o});return await le(t,eg,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function T7(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:he(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Gh=256;let Ru=Gh,Mu;function I7(t=11){if(!Mu||Ru+t>Gh*2){Mu="",Ru=0;for(let e=0;e<Gh;e++)Mu+=(256+Math.random()*256|0).toString(16).substring(1)}return Mu.substring(Ru,Ru+++t)}function a5(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?$n(t.account):void 0,{config:u,request:c,value:f}=t.transport({chain:a,pollingInterval:o}),p={...u,...f},w={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:c,transport:p,type:s,uid:I7()};function y(C){return _=>{const b=_(C);for(const v in w)delete b[v];const g={...C,...b};return Object.assign(g,{extend:y(g)})}}return Object.assign(w,{extend:y(w)})}function Kh(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:u})=>{const c=typeof e=="function"?e({count:a,error:u}):e;c&&await jc(c),s({count:a+1})};try{const u=await t();i(u)}catch(u){if(a<n&&await r({count:a,error:u}))return l({error:u});o(u)}};s()})}const l5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Ia&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function N7(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>Kh(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case al.code:throw new al(o);case ll.code:throw new ll(o);case ul.code:throw new ul(o);case cl.code:throw new cl(o);case cs.code:throw new cs(o);case io.code:throw new io(o);case dl.code:throw new dl(o);case ds.code:throw new ds(o);case fl.code:throw new fl(o);case hl.code:throw new hl(o);case pl.code:throw new pl(o);case gl.code:throw new gl(o);case Ht.code:throw new Ht(o);case ml.code:throw new ml(o);case wl.code:throw new wl(o);case yl.code:throw new yl(o);case vl.code:throw new vl(o);case Er.code:throw new Er(o);case 5e3:throw new Ht(o);default:throw i instanceof G?i:new n7(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Ia){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!l5(i)})}function Yd({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:N7(n,{retryCount:r,retryDelay:i}),value:a}}function tg(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>Yd({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function Ew(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:u})=>{let c=t,f=()=>{};const p=Yd({key:n,name:r,async request({method:w,params:y}){const C=async(_=0)=>{const b=c[_]({chain:a,retryCount:0,timeout:u});try{const g=await b.request({method:w,params:y});return f({method:w,params:y,response:g,transport:b,status:"success"}),g}catch(g){if(f({error:g,method:w,params:y,transport:b,status:"error"}),l5(g)||_===c.length-1)throw g;return C(_+1)}};return C()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:w=>f=w,transports:c.map(w=>w({chain:a,retryCount:0}))});if(i){const w=typeof i=="object"?i:{};R7({chain:a,interval:w.interval??l,onTransports:y=>c=y,sampleCount:w.sampleCount,timeout:w.timeout,transports:c,weights:w.weights})}return p}}function R7({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,u=[],c=async()=>{const f=await Promise.all(o.map(async y=>{const C=y({chain:t,retryCount:0,timeout:i}),_=Date.now();let b,g;try{await C.request({method:"net_listening"}),g=1}catch{g=0}finally{b=Date.now()}return{latency:b-_,success:g}}));u.push(f),u.length>r&&u.shift();const p=Math.max(...u.map(y=>Math.max(...y.map(({latency:C})=>C)))),w=o.map((y,C)=>{const _=u.map(E=>E[C].latency),g=1-_.reduce((E,S)=>E+S,0)/_.length/p,v=u.map(E=>E[C].success),x=v.reduce((E,S)=>E+S,0)/v.length;return x===0?[0,C]:[l*g+a*x,C]}).sort((y,C)=>C[0]-y[0]);n(w.map(([,y])=>o[y])),await jc(e),c()};c()}class u5 extends G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function M7(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const _w=M7();function c5(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let Zh=0;async function B7(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await c5(async({signal:c})=>await fetch(t,{...n,body:Array.isArray(e)?Mt(e.map(p=>({jsonrpc:"2.0",id:p.id??Zh++,...p}))):Mt({jsonrpc:"2.0",id:e.id??Zh++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?c:void 0)}),{errorInstance:new Hh({body:e,url:t}),timeout:r,signal:!0});let u;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?u=await l.json():u=await l.text(),!l.ok)throw new Ia({body:e,details:Mt(u.error)||l.statusText,headers:l.headers,status:l.status,url:t});return u}catch(l){throw l instanceof Ia||l instanceof Hh?l:new Ia({body:e,details:l.message,url:t})}}const s0=new Map;async function a0(t){let e=s0.get(t);if(e)return e;const{schedule:n}=J1({id:t,fn:async()=>{const o=new _w(t),s=new Map,a=new Map,l=({data:c})=>{const f=JSON.parse(c),p=f.method==="eth_subscription",w=p?f.params.subscription:f.id,y=p?a:s,C=y.get(w);C&&C({data:c}),p||y.delete(w)},u=()=>{s0.delete(t),o.removeEventListener("close",u),o.removeEventListener("message",l)};return o.addEventListener("close",u),o.addEventListener("message",l),o.readyState===_w.CONNECTING&&await new Promise((c,f)=>{o&&(o.onopen=c,o.onerror=f)}),e=Object.assign(o,{requests:s,subscriptions:a}),s0.set(t,e),[e]}}),[r,[i]]=await n();return i}function U7(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new e7({body:e,url:t.url,details:"Socket is closed."});const r=Zh++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function L7(t,{body:e,timeout:n=1e4}){return c5(()=>new Promise(r=>es.webSocket(t,{body:e,onResponse:r})),{errorInstance:new Hh({body:e,url:t.url}),timeout:n})}const es={http:B7,webSocket:U7,webSocketAsync:L7};function F7(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:u})=>{const{batchSize:c=1e3,wait:f=0}=typeof n=="object"?n:{},p=e.retryCount??l,w=u??e.timeout??1e4,y=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!y)throw new u5;return Yd({key:i,name:o,async request({method:C,params:_}){const b={method:C,params:_},{schedule:g}=J1({id:`${t}`,wait:f,shouldSplitBatch(S){return S.length>c},fn:S=>es.http(y,{body:S,fetchOptions:r,timeout:w}),sort:(S,d)=>S.id-d.id}),v=async S=>n?g(S):[await es.http(y,{body:S,fetchOptions:r,timeout:w})],[{error:x,result:E}]=await v(b);if(x)throw new V1({body:b,error:x,url:y});return E},retryCount:p,retryDelay:s,timeout:w,type:"http"},{fetchOptions:r,url:t})}}function ng(t,e){var r,i,o;if(!(t instanceof G))return!1;const n=t.walk(s=>s instanceof zh);return n instanceof zh?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===Z3[50]):!1}function d5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return tr(e)?e:null}function ic(t){let e=new Uint8Array(32).fill(0);if(!t)return ol(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=d5(n[r]),o=i?fi(i):Nt(wr(n[r]),"bytes");e=Nt(Cr([e,o]),"bytes")}return ol(e)}function j7(t){return`[${t.slice(2)}]`}function W7(t){const e=new Uint8Array(32).fill(0);return t?d5(t)||Nt(wr(t)):ol(e)}function Jd(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(wr(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=wr(i[o]);s.byteLength>255&&(s=wr(j7(W7(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function z7(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=js({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=_i({abi:xw,functionName:"addr",...r!=null?{args:[ic(i),BigInt(r)]}:{args:[ic(i)]}}),l=await le(t,pi,"readContract")({address:s,abi:o5,functionName:"resolve",args:[Dr(Jd(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const u=Fs({abi:xw,args:r!=null?[ic(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return u==="0x"||Zi(u)==="0x00"?null:u}catch(a){if(ng(a,"resolve"))return null;throw a}}class H7 extends G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class aa extends G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class rg extends G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class V7 extends G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const q7=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,G7=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,K7=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Z7=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Q7(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Sw(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function f5({uri:t,gatewayUrls:e}){const n=K7.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Sw(e==null?void 0:e.ipfs,"https://ipfs.io"),i=Sw(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(q7),{protocol:s,subpath:a,target:l,subtarget:u=""}=(o==null?void 0:o.groups)||{},c=s==="ipns:/"||a==="ipns/",f=s==="ipfs:/"||a==="ipfs/"||G7.test(t);if(t.startsWith("http")&&!c&&!f){let w=t;return e!=null&&e.arweave&&(w=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((c||f)&&l)return{uri:`${r}/${c?"ipns":"ipfs"}/${l}${u}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${u||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(Z7,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new rg({uri:t})}function h5(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new H7({data:t});return t.image||t.image_url||t.image_data}async function Y7({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await ig({gatewayUrls:t,uri:h5(n)})}catch{throw new rg({uri:e})}}async function ig({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=f5({uri:e,gatewayUrls:t});if(r||await Q7(n))return n;throw new rg({uri:e})}function J7(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new aa({reason:"Only EIP-155 supported"});if(!s)throw new aa({reason:"Chain ID not found"});if(!l)throw new aa({reason:"Contract address not found"});if(!i)throw new aa({reason:"Token ID not found"});if(!a)throw new aa({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function X7(t,{nft:e}){if(e.namespace==="erc721")return pi(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return pi(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new V7({namespace:e.namespace})}async function eE(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?tE(t,{gatewayUrls:e,record:n}):ig({uri:n,gatewayUrls:e})}async function tE(t,{gatewayUrls:e,record:n}){const r=J7(n),i=await X7(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=f5({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const u=a?atob(o.replace("data:application/json;base64,","")):o,c=JSON.parse(u);return ig({uri:h5(c),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),Y7({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function p5(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=js({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await le(t,pi,"readContract")({address:s,abi:o5,functionName:"resolve",args:[Dr(Jd(r)),_i({abi:bw,functionName:"text",args:[ic(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=Fs({abi:bw,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(ng(a,"resolve"))return null;throw a}}async function nE(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await le(t,p5,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await eE(t,{record:s,gatewayUrls:r})}catch{return null}}async function rE(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=js({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{return(await le(t,pi,"readContract")({address:o,abi:g7,functionName:"reverse",args:[Dr(Jd(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(ng(a,"reverse"))return null;throw a}}async function iE(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=js({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await le(t,pi,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Dr(Jd(r))],blockNumber:e,blockTag:n});return s}async function oE(t){const e=Vd(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function g5(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),u=Vd(t,{method:"eth_newFilter"});let c=[];l&&(c=[l.flatMap(p=>Jl({abi:[p],eventName:p.name,args:n}))],r&&(c=c[0]));const f=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?he(o):o,toBlock:typeof a=="bigint"?he(a):a,...c.length?{topics:c}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:f,request:u(f),strict:s,toBlock:a,type:"event"}}async function m5(t){const e=Vd(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function sE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?he(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function aE(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?he(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Dt(o)}async function lE(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?he(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function uE(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function cE(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?he(n):void 0,s=await t.request({method:"eth_feeHistory",params:[he(e),o||r,i]});return uE(s)}async function dE(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?tu({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Fn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof ro||s instanceof Bs){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Fn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const fE=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,hE=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function pE({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:C5({domain:i}),...r};x5({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(gE({domain:i,types:o})),n!=="EIP712Domain"&&s.push(w5({data:e,primaryType:n,types:o})),Nt(Cr(s))}function gE({domain:t,types:e}){return w5({data:t,primaryType:"EIP712Domain",types:e})}function w5({data:t,primaryType:e,types:n}){const r=y5({data:t,primaryType:e,types:n});return Nt(r)}function y5({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[mE({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=b5({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return Ql(r,i)}function mE({primaryType:t,types:e}){const n=Dr(wE({primaryType:t,types:e}));return Nt(n)}function wE({primaryType:t,types:e}){let n="";const r=v5({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function v5({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])v5({primaryType:o.type,types:e},n);return n}function b5({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},Nt(y5({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Nt(r)];if(n==="string")return[{type:"bytes32"},Nt(Dr(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>b5({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Nt(Ql(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function x5({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:u,type:c}=l,f=c,p=a[u],w=f.match(hE);if(w&&(typeof p=="number"||typeof p=="bigint")){const[_,b,g]=w;he(p,{signed:b==="int",size:parseInt(g)/8})}if(f==="address"&&typeof p=="string"&&!us(p))throw new sl({address:p});const y=f.match(fE);if(y){const[_,b]=y;if(b&&ut(p)!==parseInt(b))throw new Zx({expectedSize:parseInt(b),givenSize:ut(p)})}const C=i[f];C&&o(C,p)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function C5({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const l0="/docs/contract/encodeDeployData";function E5({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new Wx({docsPath:l0});if(!("inputs"in r))throw new cw({docsPath:l0});if(!r.inputs||r.inputs.length===0)throw new cw({docsPath:l0});const i=Ql(r.inputs,e);return N1([n,i])}const yE=`Ethereum Signed Message:
`;function vE(t,e){const n=typeof t=="string"?wr(t):t.raw instanceof Uint8Array?t.raw:fi(t.raw),r=wr(`${yE}${n.length}`);return Nt(Cr([r,n]),e)}function bE(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function xE(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Dt(t.nonce):void 0,storageProof:t.storageProof?bE(t.storageProof):void 0}}async function CE(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?he(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return xE(a)}async function EE(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?he(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function og(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var c,f,p;const s=r||"latest",a=n!==void 0?he(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,he(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,he(o)]})),!l)throw new Y3({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((p=(f=(c=t.chain)==null?void 0:c.formatters)==null?void 0:f.transaction)==null?void 0:p.format)||M3)(l)}async function _E(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([le(t,ru,"getBlockNumber")({}),e?le(t,og,"getBlockNumber")({hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function Qh(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new J3({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||kx)(n)}async function SE(t,e){var C;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((C=t.batch)==null?void 0:C.multicall)=="object"&&t.batch.multicall.batchSize||1024);let u=a;if(!u){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");u=js({blockNumber:i,chain:t.chain,contract:"multicall3"})}const c=[[]];let f=0,p=0;for(let _=0;_<s.length;_++){const{abi:b,address:g,args:v,functionName:x}=s[_];try{const E=_i({abi:b,args:v,functionName:x});p+=(E.length-2)/2,l>0&&p>l&&c[f].length>0&&(f++,p=(E.length-2)/2,c[f]=[]),c[f]=[...c[f],{allowFailure:!0,callData:E,target:g}]}catch(E){const S=bl(E,{abi:b,address:g,args:v,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw S;c[f]=[...c[f],{allowFailure:!0,callData:"0x",target:g}]}}const w=await Promise.allSettled(c.map(_=>le(t,pi,"readContract")({abi:qh,address:u,args:[_],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),y=[];for(let _=0;_<w.length;_++){const b=w[_];if(b.status==="rejected"){if(!n)throw b.reason;for(let v=0;v<c[_].length;v++)y.push({status:"failure",error:b.reason,result:void 0});continue}const g=b.value;for(let v=0;v<g.length;v++){const{returnData:x,success:E}=g[v],{callData:S}=c[_][v],{abi:d,address:P,functionName:O,args:T}=s[y.length];try{if(S==="0x")throw new zd;if(!E)throw new H1({data:x});const M=Fs({abi:d,args:T,data:x,functionName:O});y.push(n?{result:M,status:"success"}:M)}catch(M){const Y=bl(M,{abi:d,address:P,args:T,docsPath:"/docs/contract/multicall",functionName:O});if(!n)throw Y;y.push({error:Y,result:void 0,status:"failure"})}}}if(y.length!==s.length)throw new G("multicall results mismatch");return y}const $E="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function PE(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function AE(t,e){const n=tr(t)?fi(t):t,r=tr(e)?fi(e):e;return PE(n,r)}async function _5(t,{address:e,hash:n,signature:r,...i}){const o=tr(r)?r:Dr(r);try{const{data:s}=await le(t,Kd,"call")({data:E5({abi:m7,args:[e,n,o],bytecode:$E}),...i});return AE(s??"0x0","0x1")}catch(s){if(s instanceof X3)return!1;throw s}}async function DE(t,{address:e,message:n,signature:r,...i}){const o=vE(n);return _5(t,{address:e,hash:o,signature:r,...i})}async function kE(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=pE({message:r,primaryType:i,types:o,domain:s});return _5(t,{address:e,hash:l,signature:n,...a})}function S5(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const f=Mt(["watchBlockNumber",t.uid,e,n,s]);return Ws(f,{onBlockNumber:r,onError:i},p=>nu(async()=>{var w;try{const y=await le(t,ru,"getBlockNumber")({cacheTime:0});if(l){if(y===l)return;if(y-l>1&&n)for(let C=l+1n;C<y;C++)p.onBlockNumber(C,l),l=C}(!l||y>l)&&(p.onBlockNumber(y,l),l=y)}catch(y){(w=p.onError)==null||w.call(p,y)}},{emitOnBegin:e,interval:s}))})():(()=>{let f=!0,p=()=>f=!1;return(async()=>{try{const{unsubscribe:w}=await t.transport.subscribe({params:["newHeads"],onData(y){var _;if(!f)return;const C=Ld((_=y.result)==null?void 0:_.number);r(C,l),l=C},onError(y){i==null||i(y)}});p=w,f||p()}catch(w){i==null||i(w)}})(),p})()}async function OE(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=Mt(["waitForTransactionReceipt",t.uid,n]);let a,l,u,c=!1;return new Promise((f,p)=>{o&&setTimeout(()=>p(new JC({hash:n})),o);const w=Ws(s,{onReplaced:r,resolve:f,reject:p},y=>{const C=le(t,S5,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(_){if(c)return;let b=_;const g=v=>{C(),v(),w()};try{if(u){if(e>1&&(!u.blockNumber||b-u.blockNumber+1n<e))return;g(()=>y.resolve(u));return}if(a||(c=!0,await Kh(async()=>{a=await le(t,og,"getTransaction")({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:v})=>~~(1<<v)*200,retryCount:6}),c=!1),u=await le(t,Qh,"getTransactionReceipt")({hash:n}),e>1&&(!u.blockNumber||b-u.blockNumber+1n<e))return;g(()=>y.resolve(u))}catch(v){if(a&&(v instanceof Y3||v instanceof J3))try{l=a,c=!0;const x=await Kh(()=>le(t,hi,"getBlock")({blockNumber:b,includeTransactions:!0}),{delay:({count:d})=>~~(1<<d)*200,retryCount:6,shouldRetry:({error:d})=>d instanceof e5});c=!1;const E=x.transactions.find(({from:d,nonce:P})=>d===l.from&&P===l.nonce);if(!E||(u=await le(t,Qh,"getTransactionReceipt")({hash:E.hash}),e>1&&(!u.blockNumber||b-u.blockNumber+1n<e)))return;let S="replaced";E.to===l.to&&E.value===l.value?S="repriced":E.from===E.to&&E.value===0n&&(S="cancelled"),g(()=>{var d;(d=y.onReplaced)==null||d.call(y,{reason:S,replacedTransaction:l,transaction:E,transactionReceipt:u}),y.resolve(u)})}catch(x){g(()=>y.reject(x))}else g(()=>y.reject(v))}}})})})}function TE(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const u=typeof a<"u"?a:t.transport.type!=="webSocket",c=s??!1;let f;return u?(()=>{const y=Mt(["watchBlocks",t.uid,n,r,c,l]);return Ws(y,{onBlock:i,onError:o},C=>nu(async()=>{var _;try{const b=await le(t,hi,"getBlock")({blockTag:e,includeTransactions:c});if(b.number&&(f!=null&&f.number)){if(b.number===f.number)return;if(b.number-f.number>1&&n)for(let g=(f==null?void 0:f.number)+1n;g<b.number;g++){const v=await le(t,hi,"getBlock")({blockNumber:g,includeTransactions:c});C.onBlock(v,f),f=v}}(!(f!=null&&f.number)||e==="pending"&&!(b!=null&&b.number)||b.number&&b.number>f.number)&&(C.onBlock(b,f),f=b)}catch(b){(_=C.onError)==null||_.call(C,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let y=!0,C=()=>y=!1;return(async()=>{try{const{unsubscribe:_}=await t.transport.subscribe({params:["newHeads"],onData(b){var x,E,S;if(!y)return;const v=(((S=(E=(x=t.chain)==null?void 0:x.formatters)==null?void 0:E.block)==null?void 0:S.format)||B3)(b.result);i(v,f),f=v},onError(b){o==null||o(b)}});C=_,y||C()}catch(_){o==null||o(_)}})(),C})()}function IE(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:u=t.pollingInterval,strict:c}){const f=typeof l<"u"?l:t.transport.type!=="webSocket",p=c??!1;return f?(()=>{const C=Mt(["watchEvent",e,n,r,t.uid,i,u]);return Ws(C,{onLogs:a,onError:s},_=>{let b,g,v=!1;const x=nu(async()=>{var E;if(!v){try{g=await le(t,g5,"createEventFilter")({address:e,args:n,event:i,events:o,strict:p})}catch{}v=!0;return}try{let S;if(g)S=await le(t,Zd,"getFilterChanges")({filter:g});else{const d=await le(t,ru,"getBlockNumber")({});b&&b!==d?S=await le(t,Y1,"getLogs")({address:e,args:n,event:i,events:o,fromBlock:b+1n,toBlock:d}):S=[],b=d}if(S.length===0)return;if(r)_.onLogs(S);else for(const d of S)_.onLogs([d])}catch(S){g&&S instanceof io&&(v=!1),(E=_.onError)==null||E.call(_,S)}},{emitOnBegin:!0,interval:u});return async()=>{g&&await le(t,Qd,"uninstallFilter")({filter:g}),x()}})})():(()=>{let C=!0,_=()=>C=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let g=[];b&&(g=[b.flatMap(x=>Jl({abi:[x],eventName:x.name,args:n}))],i&&(g=g[0]));const{unsubscribe:v}=await t.transport.subscribe({params:["logs",{address:e,topics:g}],onData(x){var S;if(!C)return;const E=x.result;try{const{eventName:d,args:P}=tu({abi:b,data:E.data,topics:E.topics,strict:p}),O=Fn(E,{args:P,eventName:d});a([O])}catch(d){let P,O;if(d instanceof ro||d instanceof Bs){if(c)return;P=d.abiItem.name,O=(S=d.abiItem.inputs)==null?void 0:S.some(M=>!("name"in M&&M.name))}const T=Fn(E,{args:O?[]:{},eventName:P});a([T])}},onError(x){s==null||s(x)}});_=v,C||_()}catch(b){s==null||s(b)}})(),_})()}function NE(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const u=Mt(["watchPendingTransactions",t.uid,e,o]);return Ws(u,{onTransactions:r,onError:n},c=>{let f;const p=nu(async()=>{var w;try{if(!f)try{f=await le(t,m5,"createPendingTransactionFilter")({});return}catch(C){throw p(),C}const y=await le(t,Zd,"getFilterChanges")({filter:f});if(y.length===0)return;if(e)c.onTransactions(y);else for(const C of y)c.onTransactions([C])}catch(y){(w=c.onError)==null||w.call(c,y)}},{emitOnBegin:!0,interval:o});return async()=>{f&&await le(t,Qd,"uninstallFilter")({filter:f}),p()}})})():(()=>{let u=!0,c=()=>u=!1;return(async()=>{try{const{unsubscribe:f}=await t.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!u)return;const w=p.result;r([w])},onError(p){n==null||n(p)}});c=f,u||c()}catch(f){n==null||n(f)}})(),c})()}function RE(t){return{call:e=>Kd(t,e),createBlockFilter:()=>oE(t),createContractEventFilter:e=>K3(t,e),createEventFilter:e=>g5(t,e),createPendingTransactionFilter:()=>m5(t),estimateContractGas:e=>d7(t,e),estimateGas:e=>Q1(t,e),getBalance:e=>sE(t,e),getBlock:e=>hi(t,e),getBlockNumber:e=>ru(t,e),getBlockTransactionCount:e=>aE(t,e),getBytecode:e=>lE(t,e),getChainId:()=>xl(t),getContractEvents:e=>r5(t,e),getEnsAddress:e=>z7(t,e),getEnsAvatar:e=>nE(t,e),getEnsName:e=>rE(t,e),getEnsResolver:e=>iE(t,e),getEnsText:e=>p5(t,e),getFeeHistory:e=>cE(t,e),estimateFeesPerGas:e=>u7(t,e),getFilterChanges:e=>Zd(t,e),getFilterLogs:e=>dE(t,e),getGasPrice:()=>Z1(t),getLogs:e=>Y1(t,e),getProof:e=>CE(t,e),estimateMaxPriorityFeePerGas:e=>l7(t,e),getStorageAt:e=>EE(t,e),getTransaction:e=>og(t,e),getTransactionConfirmations:e=>_E(t,e),getTransactionCount:e=>n5(t,e),getTransactionReceipt:e=>Qh(t,e),multicall:e=>SE(t,e),prepareTransactionRequest:e=>Gd(t,e),readContract:e=>pi(t,e),sendRawTransaction:e=>X1(t,e),simulateContract:e=>C7(t,e),verifyMessage:e=>DE(t,e),verifyTypedData:e=>kE(t,e),uninstallFilter:e=>Qd(t,e),waitForTransactionReceipt:e=>OE(t,e),watchBlocks:e=>TE(t,e),watchBlockNumber:e=>S5(t,e),watchContractEvent:e=>D7(t,e),watchEvent:e=>IE(t,e),watchPendingTransactions:e=>NE(t,e)}}function $w(t){const{key:e="public",name:n="Public Client"}=t;return a5({...t,key:e,name:n,type:"publicClient"}).extend(RE)}function ME(t,{abi:e,args:n,bytecode:r,...i}){const o=E5({abi:e,args:n,bytecode:r});return eg(t,{...i,data:o})}async function BE(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>j1(r))}async function UE(t){return await t.request({method:"wallet_getPermissions"})}async function LE(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>Un(n))}async function FE(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function jE(t,{account:e=t.account,message:n}){if(!e)throw new Ls({docsPath:"/docs/actions/wallet/signMessage"});const r=$n(e);if(r.type==="local")return r.signMessage({message:n});const i=typeof n=="string"?T1(n):n.raw instanceof Uint8Array?Dr(n.raw):n.raw;return t.request({method:"personal_sign",params:[i,r.address]})}async function WE(t,e){var u,c,f,p;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Ls({docsPath:"/docs/actions/wallet/signTransaction"});const o=$n(n);eu({account:o,...e});const s=await le(t,xl,"getChainId")({});r!==null&&s5({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((u=t.chain)==null?void 0:u.formatters),l=((c=a==null?void 0:a.transactionRequest)==null?void 0:c.format)||Fd;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(f=t.chain)==null?void 0:f.serializers)==null?void 0:p.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:he(s),from:o.address}]})}async function zE(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Ls({docsPath:"/docs/actions/wallet/signTypedData"});const s=$n(e),a={EIP712Domain:C5({domain:n}),...o};if(x5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Mt({domain:n??{},primaryType:i,types:a,message:r},(u,c)=>tr(c)?c.toLowerCase():c);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function HE(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:he(e)}]})}async function VE(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function qE(t){return{addChain:e=>T7(t,e),deployContract:e=>ME(t,e),getAddresses:()=>BE(t),getChainId:()=>xl(t),getPermissions:()=>UE(t),prepareTransactionRequest:e=>Gd(t,e),requestAddresses:()=>LE(t),requestPermissions:e=>FE(t,e),sendRawTransaction:e=>X1(t,e),sendTransaction:e=>eg(t,e),signMessage:e=>jE(t,e),signTransaction:e=>WE(t,e),signTypedData:e=>zE(t,e),switchChain:e=>HE(t,e),watchAsset:e=>VE(t,e),writeContract:e=>O7(t,e)}}function sg(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return a5({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(qE)}function GE(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var f;const l=e.retryCount??s,u=a??e.timeout??1e4,c=t||((f=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:f[0]);if(!c)throw new u5;return Yd({key:n,name:r,async request({method:p,params:w}){const y={method:p,params:w},C=await a0(c),{error:_,result:b}=await es.webSocketAsync(C,{body:y,timeout:u});if(_)throw new V1({body:y,error:_,url:c});return b},retryCount:l,retryDelay:i,timeout:u,type:"webSocket"},{getSocket(){return a0(c)},async subscribe({params:p,onData:w,onError:y}){const C=await a0(c),{result:_}=await new Promise((b,g)=>es.webSocket(C,{body:{method:"eth_subscribe",params:p},onResponse(v){if(v.error){g(v.error),y==null||y(v.error);return}if(typeof v.id=="number"){b(v);return}v.method==="eth_subscription"&&w(v.params)}}));return{subscriptionId:_,async unsubscribe(){return new Promise(b=>es.webSocket(C,{body:{method:"eth_unsubscribe",params:[_]},onResponse:b}))}}}})}}const KE=D3({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),oc=D3({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var $5=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},Ui=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function Wc(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var P5={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function o(l,u,c,f,p){if(typeof c!="function")throw new TypeError("The listener must be a function");var w=new i(c,f||l,p),y=n?n+u:u;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],w]:l._events[y].push(w):(l._events[y]=w,l._eventsCount++),l}function s(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,f;if(this._eventsCount===0)return u;for(f in c=this._events)e.call(c,f)&&u.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,f=this._events[c];if(!f)return[];if(f.fn)return[f.fn];for(var p=0,w=f.length,y=new Array(w);p<w;p++)y[p]=f[p].fn;return y},a.prototype.listenerCount=function(u){var c=n?n+u:u,f=this._events[c];return f?f.fn?1:f.length:0},a.prototype.emit=function(u,c,f,p,w,y){var C=n?n+u:u;if(!this._events[C])return!1;var _=this._events[C],b=arguments.length,g,v;if(_.fn){switch(_.once&&this.removeListener(u,_.fn,void 0,!0),b){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,c),!0;case 3:return _.fn.call(_.context,c,f),!0;case 4:return _.fn.call(_.context,c,f,p),!0;case 5:return _.fn.call(_.context,c,f,p,w),!0;case 6:return _.fn.call(_.context,c,f,p,w,y),!0}for(v=1,g=new Array(b-1);v<b;v++)g[v-1]=arguments[v];_.fn.apply(_.context,g)}else{var x=_.length,E;for(v=0;v<x;v++)switch(_[v].once&&this.removeListener(u,_[v].fn,void 0,!0),b){case 1:_[v].fn.call(_[v].context);break;case 2:_[v].fn.call(_[v].context,c);break;case 3:_[v].fn.call(_[v].context,c,f);break;case 4:_[v].fn.call(_[v].context,c,f,p);break;default:if(!g)for(E=1,g=new Array(b-1);E<b;E++)g[E-1]=arguments[E];_[v].fn.apply(_[v].context,g)}}return!0},a.prototype.on=function(u,c,f){return o(this,u,c,f,!1)},a.prototype.once=function(u,c,f){return o(this,u,c,f,!0)},a.prototype.removeListener=function(u,c,f,p){var w=n?n+u:u;if(!this._events[w])return this;if(!c)return s(this,w),this;var y=this._events[w];if(y.fn)y.fn===c&&(!p||y.once)&&(!f||y.context===f)&&s(this,w);else{for(var C=0,_=[],b=y.length;C<b;C++)(y[C].fn!==c||p&&!y[C].once||f&&y[C].context!==f)&&_.push(y[C]);_.length?this._events[w]=_.length===1?_[0]:_:s(this,w)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&s(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(P5);var ZE=P5.exports;const QE=Hl(ZE);var ag=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},Te=(t,e,n)=>(ag(t,e,"read from private field"),n?n.call(t):e.get(t)),jt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Cl=(t,e,n,r)=>(ag(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),pt=(t,e,n)=>(ag(t,e,"access private method"),n),lg=class extends QE{constructor({chains:t=[oc,KE],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function YE(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var sc,ug=class extends lg{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",jt(this,sc,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Un(i[0])})},this.onChainChanged=i=>{const o=Wc(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=YE(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new Ui;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Un(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new Ht(n):n.code===-32002?new ds(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new Ui;const e=await t.request({method:"eth_accounts"});return Un(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new Ui;return t.request({method:"eth_chainId"}).then(Wc)}async getProvider(){const t=this.options.getProvider();return t&&Cl(this,sc,t),Te(this,sc)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return sg({account:n,chain:r,transport:tg(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Ui;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new Ui;const n=he(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new $5({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new Ht(new Error("User rejected switch after adding network."));return a}catch(l){throw new Ht(l)}throw this.isUserRejectedRequestError(s)?new Ht(s):new Er(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new Ui;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};sc=new WeakMap;var cg=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},u0=(t,e,n)=>(cg(t,e,"read from private field"),n?n.call(t):e.get(t)),c0=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Bu=(t,e,n,r)=>(cg(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),JE=(t,e,n)=>(cg(t,e,"access private method"),n),XE={VITE_PROJECT_ID:"c416b8362678f52843a0f754abf83b7e",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e9=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let u=s;if(a){const c=(l==null?void 0:l.equalityFn)||Object.is;let f=s(r.getState());u=p=>{const w=s(p);if(!c(f,w)){const y=f;a(f=w,y)}},l!=null&&l.fireImmediately&&a(f,f)}return i(u)},t(e,n,r)},t9=e9;function n9(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const El=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return El(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return El(r)(n)}}}},r9=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,b)=>({...b,..._}),...e},s=!1;const a=new Set,l=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(..._)},r,i);const c=El(o.serialize),f=()=>{const _=o.partialize({...r()});let b;const g=c({state:_,version:o.version}).then(v=>u.setItem(o.name,v)).catch(v=>{b=v});if(b)throw b;return g},p=i.setState;i.setState=(_,b)=>{p(_,b),f()};const w=t((..._)=>{n(..._),f()},r,i);let y;const C=()=>{var _;if(!u)return;s=!1,a.forEach(g=>g(r()));const b=((_=o.onRehydrateStorage)==null?void 0:_.call(o,r()))||void 0;return El(u.getItem.bind(u))(o.name).then(g=>{if(g)return o.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var v;return y=o.merge(g,(v=r())!=null?v:w),n(y,!0),f()}).then(()=>{b==null||b(y,void 0),s=!0,l.forEach(g=>g(y))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:_=>{o={...o,..._},_.getStorage&&(u=_.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>C(),hasHydrated:()=>s,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},C(),y||w},i9=(t,e)=>(n,r,i)=>{let o={storage:n9(()=>localStorage),partialize:C=>C,version:0,merge:(C,_)=>({..._,...C}),...e},s=!1;const a=new Set,l=new Set;let u=o.storage;if(!u)return t((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...C)},r,i);const c=()=>{const C=o.partialize({...r()});return u.setItem(o.name,{state:C,version:o.version})},f=i.setState;i.setState=(C,_)=>{f(C,_),c()};const p=t((...C)=>{n(...C),c()},r,i);let w;const y=()=>{var C,_;if(!u)return;s=!1,a.forEach(g=>{var v;return g((v=r())!=null?v:p)});const b=((_=o.onRehydrateStorage)==null?void 0:_.call(o,(C=r())!=null?C:p))||void 0;return El(u.getItem.bind(u))(o.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var v;return w=o.merge(g,(v=r())!=null?v:p),n(w,!0),c()}).then(()=>{b==null||b(w,void 0),w=r(),s=!0,l.forEach(g=>g(w))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:C=>{o={...o,...C},C.storage&&(u=C.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:C=>(a.add(C),()=>{a.delete(C)}),onFinishHydration:C=>(l.add(C),()=>{l.delete(C)})},o.skipHydration||y(),w||p},o9=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((XE?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),r9(t,e)):i9(t,e),s9=o9;var a9={VITE_PROJECT_ID:"c416b8362678f52843a0f754abf83b7e",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Pw=t=>{let e;const n=new Set,r=(l,u)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const f=e;e=u??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(p=>p(e,f))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(a9?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,i,a),a},l9=t=>t?Pw(t):Pw;function A5(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function u9(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const u={},c={};for(const f of t){let p=!1;for(const w of e){const y=w(f);y&&(p=!0,l.some(({id:C})=>C===f.id)||(l=[...l,y.chain]),u[f.id]=[...u[f.id]||[],...y.rpcUrls.http],y.rpcUrls.webSocket&&(c[f.id]=[...c[f.id]||[],...y.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:f})=>{const p=l.find(C=>C.id===f)??t[0],w=u[p.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${p.id}"`);const y=$w({batch:n,chain:p,transport:Ew(w.map(C=>F7(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})},webSocketPublicClient:({chainId:f})=>{const p=l.find(C=>C.id===f)??t[0],w=c[p.id];if(!w||!w[0])return;const y=$w({batch:n,chain:p,transport:Ew(w.map(C=>GE(C,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(y,{chains:l})}}}var c9=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},d9=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},f9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},h9=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},Yh=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>Yh(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:Yh(o,{find:e,replace:n})}),{}):t;function p9(t){const e=JSON.parse(t);return Yh(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Aw(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(Mx[t])}function Dw(t,e){return t.slice(0,e).join(".")||"."}function kw(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function g9(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const u=kw(i,this);u===0?i[i.length]=this:(i.splice(u),o.splice(u)),o[o.length]=a;const c=kw(i,l);if(c!==0)return r?e.call(this,a,l,Dw(o,c)):`[ref=${Dw(o,c)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function m9(t,e,n,r){return JSON.stringify(t,g9((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var D5={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function k5({deserialize:t=p9,key:e="wagmi",serialize:n=m9,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var Ow="store",Do,va,Jh,O5,w9=class{constructor({autoConnect:t=!1,connectors:e=[new ug],publicClient:n,storage:r=k5({storage:typeof window<"u"?window.localStorage:D5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var u,c;c0(this,Jh),this.publicClients=new Map,this.webSocketPublicClients=new Map,c0(this,Do,void 0),c0(this,va,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const f=r.getItem(Ow),p=(u=f==null?void 0:f.state)==null?void 0:u.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(c=p==null?void 0:p.chain)==null?void 0:c.id}catch{}const l=typeof e=="function"?e():e;l.forEach(f=>f.setStorage(r)),this.store=l9(t9(s9(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:Ow,storage:r,partialize:f=>{var p,w;return{...t&&{data:{account:(p=f==null?void 0:f.data)==null?void 0:p.account,chain:(w=f==null?void 0:f.data)==null?void 0:w.chain}},chains:f==null?void 0:f.chains}},version:2}))),this.storage=r,Bu(this,va,r==null?void 0:r.getItem("wallet")),JE(this,Jh,O5).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Bu(this,Do,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u0(this,Do))return;Bu(this,Do,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=u0(this,va)?[...this.connectors].sort(n=>n.id===u0(this,va)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Bu(this,Do,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};Do=new WeakMap;va=new WeakMap;Jh=new WeakSet;O5=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var u,c,f,p,w,y;(u=l==null?void 0:l.off)==null||u.call(l,"change",t),(c=l==null?void 0:l.off)==null||c.call(l,"disconnect",e),(f=l==null?void 0:l.off)==null||f.call(l,"error",n),a&&((p=a.on)==null||p.call(a,"change",t),(w=a.on)==null||w.call(a,"disconnect",e),(y=a.on)==null||y.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Xh;function y9(t){const e=new w9(t);return Xh=e,e}function kr(){if(!Xh)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Xh}async function Tw({chainId:t,connector:e}){const n=kr(),r=n.connector;if(r&&e.id===r.id)throw new d9;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function v9(){const t=kr();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var b9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],x9=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function zs({chainId:t}={}){const e=kr();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function C9({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=zs({chainId:t});if(!o.chains)throw new f9;if(t&&o.chain.id!==t)throw new c9({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function E9({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return zs({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function _9({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=zs(),s=t.reduce((c,f,p)=>{const w=f.chainId??o.chain.id;return{...c,[w]:[...c[w]||[],{contract:f,index:p}]}},{}),a=()=>Object.entries(s).map(([c,f])=>C9({allowFailure:i,chainId:parseInt(c),contracts:f.map(({contract:p})=>p),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),u=Object.values(s).flatMap(c=>c.map(({index:f})=>f));return l.reduce((c,f,p)=>(c&&(c[u[p]]=f),c),[])}catch(o){if(o instanceof z1)throw o;const s=()=>t.map(a=>E9({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function S9({address:t,chainId:e,formatUnits:n,token:r}){const i=kr(),o=zs({chainId:e});if(r){const u=async({abi:c})=>{const f={abi:c,address:r,chainId:e},[p,w,y]=await _9({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[t]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:w,formatted:Mc(p??"0",Aw(n??w)),symbol:y,value:p}};try{return await u({abi:b9})}catch(c){if(c instanceof z1){const{symbol:f,...p}=await u({abi:x9});return{symbol:N3(Zi(f,{dir:"right"})),...p}}throw c}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(u=>u.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Mc(a??"0",Aw(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function ep(){const{data:t,connector:e,status:n}=kr();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function tp(){var i,o,s,a;const t=kr(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function $9({chainId:t}){const{connector:e}=kr();if(!e)throw new Ui;if(!e.switchChain)throw new h9({connector:e});return e.switchChain(t)}function P9(t,{selector:e=n=>n}={}){const n=kr(),r=()=>t(ep());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:A5})}function A9(t,{selector:e=n=>n}={}){const n=kr(),r=()=>t(tp());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:A5})}async function D9({name:t,chainId:e}){const{normalize:n}=await fs(()=>import("./index-k-bZ9DmV.js"),__vite__mapDeps([]));return await zs({chainId:e}).getEnsAvatar({name:n(t)})}async function k9({address:t,chainId:e}){return zs({chainId:e}).getEnsName({address:Un(t)})}const O9=Symbol(),Iw=Object.getPrototypeOf,np=new WeakMap,T9=t=>t&&(np.has(t)?np.get(t):Iw(t)===Object.prototype||Iw(t)===Array.prototype),I9=t=>T9(t)&&t[O9]||null,Nw=(t,e=!0)=>{np.set(t,e)};var zc={VITE_PROJECT_ID:"c416b8362678f52843a0f754abf83b7e",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d0=t=>typeof t=="object"&&t!==null,Fr=new WeakMap,ba=new WeakSet,N9=(t=Object.is,e=(u,c)=>new Proxy(u,c),n=u=>d0(u)&&!ba.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),r=u=>{switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:throw u}},i=new WeakMap,o=(u,c,f=r)=>{const p=i.get(u);if((p==null?void 0:p[0])===c)return p[1];const w=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u));return Nw(w,!0),i.set(u,[c,w]),Reflect.ownKeys(u).forEach(y=>{if(Object.getOwnPropertyDescriptor(w,y))return;const C=Reflect.get(u,y),_={value:C,enumerable:!0,configurable:!0};if(ba.has(C))Nw(C,!1);else if(C instanceof Promise)delete _.value,_.get=()=>f(C);else if(Fr.has(C)){const[b,g]=Fr.get(C);_.value=o(b,g(),f)}Object.defineProperty(w,y,_)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],l=u=>{if(!d0(u))throw new Error("object required");const c=s.get(u);if(c)return c;let f=a[0];const p=new Set,w=(O,T=++a[0])=>{f!==T&&(f=T,p.forEach(M=>M(O,T)))};let y=a[1];const C=(O=++a[1])=>(y!==O&&!p.size&&(y=O,b.forEach(([T])=>{const M=T[1](O);M>f&&(f=M)})),f),_=O=>(T,M)=>{const Y=[...T];Y[1]=[O,...Y[1]],w(Y,M)},b=new Map,g=(O,T)=>{if((zc?"production":void 0)!=="production"&&b.has(O))throw new Error("prop listener already exists");if(p.size){const M=T[3](_(O));b.set(O,[T,M])}else b.set(O,[T])},v=O=>{var T;const M=b.get(O);M&&(b.delete(O),(T=M[1])==null||T.call(M))},x=O=>(p.add(O),p.size===1&&b.forEach(([M,Y],X)=>{if((zc?"production":void 0)!=="production"&&Y)throw new Error("remove already exists");const z=M[3](_(X));b.set(X,[M,z])}),()=>{p.delete(O),p.size===0&&b.forEach(([M,Y],X)=>{Y&&(Y(),b.set(X,[M]))})}),E=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),d=e(E,{deleteProperty(O,T){const M=Reflect.get(O,T);v(T);const Y=Reflect.deleteProperty(O,T);return Y&&w(["delete",[T],M]),Y},set(O,T,M,Y){const X=Reflect.has(O,T),z=Reflect.get(O,T,Y);if(X&&(t(z,M)||s.has(M)&&t(z,s.get(M))))return!0;v(T),d0(M)&&(M=I9(M)||M);let F=M;if(M instanceof Promise)M.then(U=>{M.status="fulfilled",M.value=U,w(["resolve",[T],U])}).catch(U=>{M.status="rejected",M.reason=U,w(["reject",[T],U])});else{!Fr.has(M)&&n(M)&&(F=l(M));const U=!ba.has(F)&&Fr.get(F);U&&g(T,U)}return Reflect.set(O,T,F,Y),w(["set",[T],M,z]),!0}});s.set(u,d);const P=[E,C,o,x];return Fr.set(d,P),Reflect.ownKeys(u).forEach(O=>{const T=Object.getOwnPropertyDescriptor(u,O);"value"in T&&(d[O]=u[O],delete T.value,delete T.writable),Object.defineProperty(E,O,T)}),d})=>[l,Fr,ba,t,e,n,r,i,o,s,a],[R9]=N9();function Ft(t={}){return R9(t)}function Si(t,e,n){const r=Fr.get(t);(zc?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let i;const o=[],s=r[3];let a=!1;const u=s(c=>{if(o.push(c),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,u()}}function LI(t,e){const n=Fr.get(t);(zc?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),e)}function _l(t){return ba.add(t),t}function zn(t,e,n,r){let i=t[e];return Si(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}var T5={exports:{}},I5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Xe;function M9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var B9=typeof Object.is=="function"?Object.is:M9,U9=hs.useState,L9=hs.useEffect,F9=hs.useLayoutEffect,j9=hs.useDebugValue;function W9(t,e){var n=e(),r=U9({inst:{value:n,getSnapshot:e}}),i=r[0].inst,o=r[1];return F9(function(){i.value=n,i.getSnapshot=e,f0(i)&&o({inst:i})},[t,n,e]),L9(function(){return f0(i)&&o({inst:i}),t(function(){f0(i)&&o({inst:i})})},[t]),j9(n),n}function f0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!B9(t,n)}catch{return!0}}function z9(t,e){return e()}var H9=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?z9:W9;I5.useSyncExternalStore=hs.useSyncExternalStore!==void 0?hs.useSyncExternalStore:H9;T5.exports=I5;var V9=T5.exports;const xa={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},oe={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=navigator.userAgent.toLowerCase();return oe.isMobile()&&t.includes("android")},isIos(){const t=navigator.userAgent.toLowerCase();return oe.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=xa.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=xa.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+xa.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(oe.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!oe.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,oe.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:"0.000"},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return xa.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return oe.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return oe.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return oe.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}},tt=Ft({isConnected:!1}),De={state:tt,subscribe(t){return Si(tt,()=>t(tt))},subscribeKey(t,e){return zn(tt,t,e)},setIsConnected(t){tt.isConnected=t},setCaipAddress(t){tt.caipAddress=t,tt.address=t?oe.getPlainAddress(t):void 0},setBalance(t,e){tt.balance=t,tt.balanceSymbol=e},setProfileName(t){tt.profileName=t},setProfileImage(t){tt.profileImage=t},setAddressExplorerUrl(t){tt.addressExplorerUrl=t},resetAccount(){tt.isConnected=!1,tt.caipAddress=void 0,tt.address=void 0,tt.balance=void 0,tt.balanceSymbol=void 0,tt.profileName=void 0,tt.profileImage=void 0,tt.addressExplorerUrl=void 0}};class dg{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const h0="WALLETCONNECT_DEEPLINK_CHOICE",Rw="@w3m/recent",Mw="@w3m/connected_wallet_image_url",yn={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(h0,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(h0);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(h0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=yn.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(Rw,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(Rw);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Mw,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Mw)}catch{console.info("Unable to set Connected Wallet Image Url")}}},Mr=Ft({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),oi={state:Mr,subscribeNetworkImages(t){return Si(Mr.networkImages,()=>t(Mr.networkImages))},subscribeKey(t,e){return zn(Mr,t,e)},setWalletImage(t,e){Mr.walletImages[t]=e},setNetworkImage(t,e){Mr.networkImages[t]=e},setConnectorImage(t,e){Mr.connectorImages[t]=e},setTokenImage(t,e){Mr.tokenImages[t]=e}},la=Ft({connectors:[]}),vn={state:la,subscribeKey(t,e){return zn(la,t,e)},setConnectors(t){la.connectors=t.map(e=>_l(e))},addConnector(t){la.connectors.push(_l(t))},getConnectors(){return la.connectors}},ua=Ft({open:!1,selectedNetworkId:void 0}),ps={state:ua,subscribe(t){return Si(ua,()=>t(ua))},set(t){Object.assign(ua,{...ua,...t})}},$t=Ft({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),We={state:$t,subscribeKey(t,e){return zn($t,t,e)},_getClient(){if(!$t._client)throw new Error("NetworkController client not set");return $t._client},setClient(t){$t._client=_l(t)},setCaipNetwork(t){$t.caipNetwork=t,ps.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){$t.caipNetwork=t,ps.set({selectedNetworkId:t==null?void 0:t.id}),$t.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){$t.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();$t.supportsAllNetworks=t.supportsAllNetworks,$t.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),$t.caipNetwork=t},resetNetwork(){$t.isDefaultCaipNetwork||($t.caipNetwork=void 0),$t.approvedCaipNetworkIds=void 0,$t.supportsAllNetworks=!0}},en=Ft({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),$e={state:en,subscribeKey(t,e){return zn(en,t,e)},setProjectId(t){en.projectId=t},setIncludeWalletIds(t){en.includeWalletIds=t},setExcludeWalletIds(t){en.excludeWalletIds=t},setFeaturedWalletIds(t){en.featuredWalletIds=t},setTokens(t){en.tokens=t},setTermsConditionsUrl(t){en.termsConditionsUrl=t},setPrivacyPolicyUrl(t){en.privacyPolicyUrl=t},setCustomWallets(t){en.customWallets=t},setEnableAnalytics(t){en.enableAnalytics=t},setSdkVersion(t){en.sdkVersion=t},setMetadata(t){en.metadata=t}},q9=oe.getApiUrl(),qn=new dg({baseUrl:q9}),G9="40",Bw="4",Ot=Ft({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Ce={state:Ot,subscribeKey(t,e){return zn(Ot,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=$e.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${qn.baseUrl}/getWalletImage/${t}`,n=await qn.getBlob({path:e,headers:Ce._getApiHeaders()});oi.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${qn.baseUrl}/public/getAssetImage/${t}`,n=await qn.getBlob({path:e,headers:Ce._getApiHeaders()});oi.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${qn.baseUrl}/public/getAssetImage/${t}`,n=await qn.getBlob({path:e,headers:Ce._getApiHeaders()});oi.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=We.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>Ce._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=vn.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>Ce._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=$e.state;if(t!=null&&t.length){const{data:e}=await qn.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):Bw,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Ce._fetchWalletImage(r))),Ot.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=$e.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await qn.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",entries:Bw,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=yn.getRecentWallets(),a=i.map(u=>u.image_id).filter(Boolean),l=s.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(u=>Ce._fetchWalletImage(u))),Ot.recommended=i,Ot.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=$e.state,i=[...Ot.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await qn.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:String(t),entries:G9,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Ce._fetchWalletImage(l)),oe.wait(300)]),Ot.wallets=[...Ot.wallets,...o],Ot.count=s>Ot.count?s:Ot.count,Ot.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=$e.state;Ot.search=[];const{data:r}=await qn.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>Ce._fetchWalletImage(o)),oe.wait(300)]),Ot.search=r},prefetch(){Ot.prefetchPromise=Promise.race([Promise.allSettled([Ce.fetchFeaturedWallets(),Ce.fetchRecommendedWallets(),Ce.fetchNetworkImages(),Ce.fetchConnectorImages()]),oe.wait(3e3)])}},K9=oe.getAnalyticsUrl(),Z9=new dg({baseUrl:K9}),Q9=["MODAL_CREATED"],_o=Ft({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Oe={state:_o,subscribe(t){return Si(_o,()=>t(_o))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=$e.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(Q9.includes(t.data.event)||typeof window>"u")return;await Z9.post({path:"/e",headers:Oe._getApiHeaders(),body:{eventId:oe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){_o.timestamp=Date.now(),_o.data=t,$e.state.enableAnalytics&&Oe._sendAnalyticsEvent(_o)}},vt=Ft({view:"Connect",history:["Connect"]}),pe={state:vt,subscribeKey(t,e){return zn(vt,t,e)},push(t,e){t!==vt.view&&(vt.view=t,vt.history.push(t),vt.data=e)},reset(t){vt.view=t,vt.history=[t]},replace(t){vt.history.length>1&&vt.history.at(-1)!==t&&(vt.view=t,vt.history[vt.history.length-1]=t)},goBack(){if(vt.history.length>1){vt.history.pop();const[t]=vt.history.slice(-1);t&&(vt.view=t)}}},Uu=Ft({open:!1}),wt={state:Uu,subscribeKey(t,e){return zn(Uu,t,e)},async open(t){await Ce.state.prefetchPromise,t!=null&&t.view?pe.reset(t.view):De.state.isConnected?pe.reset("Account"):pe.reset("Connect"),Uu.open=!0,ps.set({open:!0}),Oe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Uu.open=!1,ps.set({open:!1}),Oe.sendEvent({type:"track",event:"MODAL_CLOSE"})}},Y9=oe.getBlockchainApiUrl(),Uw=new dg({baseUrl:Y9}),N5={fetchIdentity({caipChainId:t,address:e}){return Uw.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:$e.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return Uw.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},cr=Ft({message:"",variant:"success",open:!1}),bn={state:cr,subscribeKey(t,e){return zn(cr,t,e)},showSuccess(t){cr.message=t,cr.variant="success",cr.open=!0},showError(t){cr.message=t,cr.variant="error",cr.open=!0},hide(){cr.open=!1}},nt=Ft({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),kn={state:nt,subscribe(t){return Si(nt,()=>t(nt))},async fetchTransactions(t){const{projectId:e}=$e.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");nt.loading=!0;try{const n=await N5.fetchTransactions({account:t,projectId:e,cursor:nt.next}),r=this.filterSpamTransactions(n.data),i=[...nt.transactions,...r];nt.loading=!1,nt.transactions=i,nt.transactionsByYear=this.groupTransactionsByYear(nt.transactionsByYear,r),nt.empty=i.length===0,nt.next=n.next?n.next:void 0}catch{Oe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:nt.next}}),bn.showError("Failed to fetch transactions"),nt.loading=!1,nt.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){nt.transactions=[],nt.transactionsByYear={},nt.loading=!1,nt.empty=!1,nt.next=void 0}},ht=Ft({wcError:!1,buffering:!1}),Pe={state:ht,subscribeKey(t,e){return zn(ht,t,e)},_getClient(){if(!ht._client)throw new Error("ConnectionController client not set");return ht._client},setClient(t){ht._client=_l(t)},connectWalletConnect(){ht.wcPromise=this._getClient().connectWalletConnect(t=>{ht.wcUri=t,ht.wcPairingExpiry=oe.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t))},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){ht.wcUri=void 0,ht.wcPairingExpiry=void 0,ht.wcPromise=void 0,ht.wcLinking=void 0,ht.recentWallet=void 0,kn.resetTransactions(),yn.deleteWalletConnectDeepLink()},setWcLinking(t){ht.wcLinking=t},setWcError(t){ht.wcError=t,ht.buffering=!1},setRecentWallet(t){ht.recentWallet=t},setBuffering(t){ht.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},fn=Ft({status:"uninitialized"}),Gn={state:fn,subscribeKey(t,e){return zn(fn,t,e)},subscribe(t){return Si(fn,()=>t(fn))},_getClient(){if(!fn._client)throw new Error("SIWEController client not set");return fn._client},setSIWEClient(t){fn._client=_l(t),fn.status="ready"},setNonce(t){fn.nonce=t},setStatus(t){fn.status=t},setMessage(t){fn.message=t},setSession(t){fn.session=t}},So=Ft({themeMode:"dark",themeVariables:{}}),hn={state:So,subscribe(t){return Si(So,()=>t(So))},setThemeMode(t){So.themeMode=t},setThemeVariables(t){So.themeVariables={...So.themeVariables,...t}}},rt={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return oi.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return oi.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return oi.state.connectorImages[t.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ac=globalThis,fg=ac.ShadowRoot&&(ac.ShadyCSS===void 0||ac.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R5=Symbol(),Lw=new WeakMap;let J9=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==R5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(fg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Lw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Lw.set(n,e))}return e}toString(){return this.cssText}};const X9=t=>new J9(typeof t=="string"?t:t+"",void 0,R5),e_=(t,e)=>{if(fg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=ac.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Fw=fg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return X9(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:t_,defineProperty:n_,getOwnPropertyDescriptor:r_,getOwnPropertyNames:i_,getOwnPropertySymbols:o_,getPrototypeOf:s_}=Object,si=globalThis,jw=si.trustedTypes,a_=jw?jw.emptyScript:"",p0=si.reactiveElementPolyfillSupport,Na=(t,e)=>t,Hc={toAttribute(t,e){switch(e){case Boolean:t=t?a_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},hg=(t,e)=>!t_(t,e),Ww={attribute:!0,type:String,converter:Hc,reflect:!1,hasChanged:hg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),si.litPropertyMetadata??(si.litPropertyMetadata=new WeakMap);let ca=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Ww){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&n_(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=r_(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ww}static _$Ei(){if(this.hasOwnProperty(Na("elementProperties")))return;const e=s_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Na("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Na("properties"))){const n=this.properties,r=[...i_(n),...o_(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Fw(i))}else e!==void 0&&n.push(Fw(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return e_(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Hc).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Hc;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??hg)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};ca.elementStyles=[],ca.shadowRootOptions={mode:"open"},ca[Na("elementProperties")]=new Map,ca[Na("finalized")]=new Map,p0==null||p0({ReactiveElement:ca}),(si.reactiveElementVersions??(si.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=globalThis,Vc=Ra.trustedTypes,zw=Vc?Vc.createPolicy("lit-html",{createHTML:t=>t}):void 0,M5="$lit$",Hr=`lit$${(Math.random()+"").slice(9)}$`,B5="?"+Hr,l_=`<${B5}>`,oo=document,qc=()=>oo.createComment(""),Sl=t=>t===null||typeof t!="object"&&typeof t!="function",U5=Array.isArray,u_=t=>U5(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",g0=`[ 	
\f\r]`,da=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hw=/-->/g,Vw=/>/g,Ti=RegExp(`>|${g0}(?:([^\\s"'>=/]+)(${g0}*=${g0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qw=/'/g,Gw=/"/g,L5=/^(?:script|style|textarea|title)$/i,gs=Symbol.for("lit-noChange"),Je=Symbol.for("lit-nothing"),Kw=new WeakMap,zi=oo.createTreeWalker(oo,129);function F5(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return zw!==void 0?zw.createHTML(e):e}const c_=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=da;for(let a=0;a<n;a++){const l=t[a];let u,c,f=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===da?c[1]==="!--"?s=Hw:c[1]!==void 0?s=Vw:c[2]!==void 0?(L5.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ti):c[3]!==void 0&&(s=Ti):s===Ti?c[0]===">"?(s=i??da,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?Ti:c[3]==='"'?Gw:qw):s===Gw||s===qw?s=Ti:s===Hw||s===Vw?s=da:(s=Ti,i=void 0);const w=s===Ti&&t[a+1].startsWith("/>")?" ":"";o+=s===da?l+l_:f>=0?(r.push(u),l.slice(0,f)+M5+l.slice(f)+Hr+w):l+Hr+(f===-2?a:w)}return[F5(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let rp=class j5{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[u,c]=c_(e,n);if(this.el=j5.createElement(u,r),zi.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=zi.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(M5)){const p=c[s++],w=i.getAttribute(f).split(Hr),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:y[2],strings:w,ctor:y[1]==="."?f_:y[1]==="?"?h_:y[1]==="@"?p_:Xd}),i.removeAttribute(f)}else f.startsWith(Hr)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(L5.test(i.tagName)){const f=i.textContent.split(Hr),p=f.length-1;if(p>0){i.textContent=Vc?Vc.emptyScript:"";for(let w=0;w<p;w++)i.append(f[w],qc()),zi.nextNode(),l.push({type:2,index:++o});i.append(f[p],qc())}}}else if(i.nodeType===8)if(i.data===B5)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Hr,f+1))!==-1;)l.push({type:7,index:o}),f+=Hr.length-1}o++}}static createElement(e,n){const r=oo.createElement("template");return r.innerHTML=e,r}};function ms(t,e,n=t,r){var s,a;if(e===gs)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Sl(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ms(t,i._$AS(t,e.values),i,r)),e}let d_=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??oo).importNode(n,!0);zi.currentNode=i;let o=zi.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new W5(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new g_(o,this,e)),this._$AV.push(u),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=zi.nextNode(),s++)}return zi.currentNode=oo,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},W5=class z5{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=Je,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ms(this,e,n),Sl(e)?e===Je||e==null||e===""?(this._$AH!==Je&&this._$AR(),this._$AH=Je):e!==this._$AH&&e!==gs&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):u_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Je&&Sl(this._$AH)?this._$AA.nextSibling.data=e:this.$(oo.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=rp.createElement(F5(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new d_(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=Kw.get(e.strings);return n===void 0&&Kw.set(e.strings,n=new rp(e)),n}T(e){U5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new z5(this.k(qc()),this.k(qc()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},Xd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=Je,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Je}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ms(this,e,n,0),s=!Sl(e)||e!==this._$AH&&e!==gs,s&&(this._$AH=e);else{const a=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=ms(this,a[r+l],n,l),u===gs&&(u=this._$AH[l]),s||(s=!Sl(u)||u!==this._$AH[l]),u===Je?e=Je:e!==Je&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.O(e)}O(e){e===Je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},f_=class extends Xd{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Je?void 0:e}},h_=class extends Xd{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Je)}},p_=class extends Xd{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ms(this,e,n,0)??Je)===gs)return;const r=this._$AH,i=e===Je&&r!==Je||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==Je&&(r===Je||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},g_=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ms(this,e)}};const m0=Ra.litHtmlPolyfillSupport;m0==null||m0(rp,W5),(Ra.litHtmlVersions??(Ra.litHtmlVersions=[])).push("3.1.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=globalThis,pg=lc.ShadowRoot&&(lc.ShadyCSS===void 0||lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gg=Symbol(),Zw=new WeakMap;let H5=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==gg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(pg&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Zw.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Zw.set(n,e))}return e}toString(){return this.cssText}};const Zn=t=>new H5(typeof t=="string"?t:t+"",void 0,gg),te=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new H5(n,t,gg)},m_=(t,e)=>{if(pg)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=lc.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Qw=pg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Zn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:w_,defineProperty:y_,getOwnPropertyDescriptor:v_,getOwnPropertyNames:b_,getOwnPropertySymbols:x_,getPrototypeOf:C_}=Object,ai=globalThis,Yw=ai.trustedTypes,E_=Yw?Yw.emptyScript:"",w0=ai.reactiveElementPolyfillSupport,Ma=(t,e)=>t,ip={toAttribute(t,e){switch(e){case Boolean:t=t?E_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},V5=(t,e)=>!w_(t,e),Jw={attribute:!0,type:String,converter:ip,reflect:!1,hasChanged:V5};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ai.litPropertyMetadata??(ai.litPropertyMetadata=new WeakMap);let ko=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Jw){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&y_(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=v_(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jw}static _$Ei(){if(this.hasOwnProperty(Ma("elementProperties")))return;const e=C_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ma("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ma("properties"))){const n=this.properties,r=[...b_(n),...x_(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Qw(i))}else e!==void 0&&n.push(Qw(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return m_(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ip).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ip;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??V5)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};ko.elementStyles=[],ko.shadowRootOptions={mode:"open"},ko[Ma("elementProperties")]=new Map,ko[Ma("finalized")]=new Map,w0==null||w0({ReactiveElement:ko}),(ai.reactiveElementVersions??(ai.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=globalThis,Gc=Ba.trustedTypes,Xw=Gc?Gc.createPolicy("lit-html",{createHTML:t=>t}):void 0,q5="$lit$",Vr=`lit$${(Math.random()+"").slice(9)}$`,G5="?"+Vr,__=`<${G5}>`,so=document,$l=()=>so.createComment(""),Pl=t=>t===null||typeof t!="object"&&typeof t!="function",K5=Array.isArray,S_=t=>K5(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",y0=`[ 	
\f\r]`,fa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,e2=/-->/g,t2=/>/g,Ii=RegExp(`>|${y0}(?:([^\\s"'>=/]+)(${y0}*=${y0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),n2=/'/g,r2=/"/g,Z5=/^(?:script|style|textarea|title)$/i,Q5=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),k=Q5(1),J=Q5(2),ws=Symbol.for("lit-noChange"),mt=Symbol.for("lit-nothing"),i2=new WeakMap,Hi=so.createTreeWalker(so,129);function Y5(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xw!==void 0?Xw.createHTML(e):e}const $_=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=fa;for(let a=0;a<n;a++){const l=t[a];let u,c,f=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===fa?c[1]==="!--"?s=e2:c[1]!==void 0?s=t2:c[2]!==void 0?(Z5.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ii):c[3]!==void 0&&(s=Ii):s===Ii?c[0]===">"?(s=i??fa,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?Ii:c[3]==='"'?r2:n2):s===r2||s===n2?s=Ii:s===e2||s===t2?s=fa:(s=Ii,i=void 0);const w=s===Ii&&t[a+1].startsWith("/>")?" ":"";o+=s===fa?l+__:f>=0?(r.push(u),l.slice(0,f)+q5+l.slice(f)+Vr+w):l+Vr+(f===-2?a:w)}return[Y5(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class Al{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[u,c]=$_(e,n);if(this.el=Al.createElement(u,r),Hi.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Hi.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(q5)){const p=c[s++],w=i.getAttribute(f).split(Vr),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:y[2],strings:w,ctor:y[1]==="."?A_:y[1]==="?"?D_:y[1]==="@"?k_:ef}),i.removeAttribute(f)}else f.startsWith(Vr)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(Z5.test(i.tagName)){const f=i.textContent.split(Vr),p=f.length-1;if(p>0){i.textContent=Gc?Gc.emptyScript:"";for(let w=0;w<p;w++)i.append(f[w],$l()),Hi.nextNode(),l.push({type:2,index:++o});i.append(f[p],$l())}}}else if(i.nodeType===8)if(i.data===G5)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Vr,f+1))!==-1;)l.push({type:7,index:o}),f+=Vr.length-1}o++}}static createElement(e,n){const r=so.createElement("template");return r.innerHTML=e,r}}function ys(t,e,n=t,r){var s,a;if(e===ws)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Pl(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=ys(t,i._$AS(t,e.values),i,r)),e}let P_=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??so).importNode(n,!0);Hi.currentNode=i;let o=Hi.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new mg(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new O_(o,this,e)),this._$AV.push(u),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Hi.nextNode(),s++)}return Hi.currentNode=so,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},mg=class J5{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=mt,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ys(this,e,n),Pl(e)?e===mt||e==null||e===""?(this._$AH!==mt&&this._$AR(),this._$AH=mt):e!==this._$AH&&e!==ws&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):S_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==mt&&Pl(this._$AH)?this._$AA.nextSibling.data=e:this.$(so.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Al.createElement(Y5(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new P_(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=i2.get(e.strings);return n===void 0&&i2.set(e.strings,n=new Al(e)),n}T(e){K5(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new J5(this.k($l()),this.k($l()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},ef=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=mt,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=mt}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=ys(this,e,n,0),s=!Pl(e)||e!==this._$AH&&e!==ws,s&&(this._$AH=e);else{const a=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=ys(this,a[r+l],n,l),u===ws&&(u=this._$AH[l]),s||(s=!Pl(u)||u!==this._$AH[l]),u===mt?e=mt:e!==mt&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.O(e)}O(e){e===mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},A_=class extends ef{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===mt?void 0:e}};class D_ extends ef{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==mt)}}class k_ extends ef{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=ys(this,e,n,0)??mt)===ws)return;const r=this._$AH,i=e===mt&&r!==mt||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==mt&&(r===mt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class O_{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ys(this,e)}}const v0=Ba.litHtmlPolyfillSupport;v0==null||v0(Al,mg),(Ba.litHtmlVersions??(Ba.litHtmlVersions=[])).push("3.1.0");const T_=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new mg(e.insertBefore($l(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Q=class extends ko{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=T_(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ws}};var hy;Q._$litElement$=!0,Q.finalized=!0,(hy=globalThis.litElementHydrateSupport)==null||hy.call(globalThis,{LitElement:Q});const b0=globalThis.litElementPolyfillSupport;b0==null||b0({LitElement:Q});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let Ua,li,ui;function I_(t,e){Ua=document.createElement("style"),li=document.createElement("style"),ui=document.createElement("style"),Ua.textContent=ts(t).core.cssText,li.textContent=ts(t).dark.cssText,ui.textContent=ts(t).light.cssText,document.head.appendChild(Ua),document.head.appendChild(li),document.head.appendChild(ui),X5(e)}function X5(t){li&&ui&&(t==="light"?(li.removeAttribute("media"),ui.media="enabled"):(ui.removeAttribute("media"),li.media="enabled"))}function N_(t){Ua&&li&&ui&&(Ua.textContent=ts(t).core.cssText,li.textContent=ts(t).dark.cssText,ui.textContent=ts(t).light.cssText)}function ts(t){return{core:te`
      :root {
        --w3m-color-mix-strength: ${Zn(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Zn((t==null?void 0:t["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Zn((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Zn((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Zn((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:te`
      :root {
        --w3m-color-mix: ${Zn((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Zn((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:te`
      :root {
        --w3m-color-mix: ${Zn((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Zn((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const de=te`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ct=te`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,wg=te`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function R_(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function M_(t,e){return customElements.get(t)||customElements.define(t,e),e}function K(t){return function(n){return typeof n=="function"?M_(t,n):R_(t,n)}}const B_=te`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var U_=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let op=class extends Q{render(){return k`<slot></slot>`}};op.styles=[de,B_];op=U_([K("wui-card")],op);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L_={attribute:!0,type:String,converter:Hc,reflect:!1,hasChanged:hg},F_=(t=L_,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function N(t){return(e,n)=>typeof n=="object"?F_(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(t){return N({...t,state:!0,attribute:!1})}const j_=te`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,W_=J`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,z_=J`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,H_=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V_=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,q_=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,G_=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,K_=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Z_=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q_=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Y_=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,J_=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,X_=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tS=J`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,nS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,rS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,iS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,oS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,sS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,aS=J` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,lS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,uS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,cS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,dS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,fS=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,hS=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,pS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,gS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,mS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,wS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,yS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,vS=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,bS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,xS=J`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,CS=J`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ES=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,_S=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,SS=J` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,$S=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,PS=J`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,AS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,DS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,kS=J`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,OS=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,TS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,IS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,NS=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,RS=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,MS=J`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,BS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,US=J`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,LS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var tf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const FS={allWallets:W_,appStore:z_,chromeStore:tS,apple:H_,arrowBottom:V_,arrowLeft:q_,arrowRight:G_,arrowTop:K_,browser:Z_,checkmark:Q_,chevronBottom:Y_,chevronLeft:J_,chevronRight:X_,chevronTop:eS,clock:nS,close:rS,compass:oS,coinPlaceholder:iS,copy:sS,cursor:aS,desktop:lS,disconnect:uS,discord:cS,etherscan:dS,extension:fS,externalLink:hS,facebook:pS,filters:gS,github:mS,google:wS,helpCircle:yS,infoCircle:vS,mail:bS,mobile:xS,networkPlaceholder:CS,nftPlaceholder:ES,off:_S,playStore:SS,qrCode:$S,refresh:PS,search:AS,swapHorizontal:DS,swapHorizontalBold:kS,swapVertical:OS,telegram:TS,twitch:IS,twitter:NS,twitterIcon:RS,wallet:BS,walletConnect:US,walletPlaceholder:MS,warningCircle:LS};let vs=class extends Q{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,k`${FS[this.name]}`}};vs.styles=[de,wg,j_];tf([N()],vs.prototype,"size",void 0);tf([N()],vs.prototype,"name",void 0);tf([N()],vs.prototype,"color",void 0);vs=tf([K("wui-icon")],vs);const jS=te`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var yg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dl=class extends Q{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return k`<img src=${this.src} alt=${this.alt} />`}};Dl.styles=[de,wg,jS];yg([N()],Dl.prototype,"src",void 0);yg([N()],Dl.prototype,"alt",void 0);Dl=yg([K("wui-image")],Dl);const WS=te`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var zS=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let sp=class extends Q{render(){return k`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};sp.styles=[de,WS];sp=zS([K("wui-loading-hexagon")],sp);const HS=te`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var vg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let kl=class extends Q{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,k`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};kl.styles=[de,HS];vg([N()],kl.prototype,"color",void 0);vg([N()],kl.prototype,"size",void 0);kl=vg([K("wui-loading-spinner")],kl);const VS=te`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var eb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kc=class extends Q{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return k`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Kc.styles=[de,VS];eb([N({type:Number})],Kc.prototype,"radius",void 0);Kc=eb([K("wui-loading-thumbnail")],Kc);const qS=te`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var nf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let bs=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,k`<slot></slot>`}};bs.styles=[qS];nf([N()],bs.prototype,"width",void 0);nf([N()],bs.prototype,"height",void 0);nf([N()],bs.prototype,"borderRadius",void 0);bs=nf([K("wui-shimmer")],bs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tb={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nb=t=>(...e)=>({_$litDirective$:t,values:e});let rb=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const GS=nb(class extends rb{constructor(t){var e;if(super(t),t.type!==tb.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.it)o in e||(n.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return gs}}),KS=te`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var rf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xs=class extends Q{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,k`<slot class=${GS(e)}></slot>`}};xs.styles=[de,KS];rf([N()],xs.prototype,"variant",void 0);rf([N()],xs.prototype,"color",void 0);rf([N()],xs.prototype,"align",void 0);xs=rf([K("wui-text")],xs);const ZS=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,QS=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,YS=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,JS=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,XS=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,e$=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,t$=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,n$=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,r$=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,i$=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,o$=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,s$=J`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,a$=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,l$=te`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var ib=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const u$={browser:ZS,dao:QS,defi:YS,defiAlt:JS,eth:XS,layers:e$,lock:t$,login:n$,network:r$,nft:i$,noun:o$,profile:s$,system:a$};let Zc=class extends Q{constructor(){super(...arguments),this.name="browser"}render(){return k`${u$[this.name]}`}};Zc.styles=[de,l$];ib([N()],Zc.prototype,"name",void 0);Zc=ib([K("wui-visual")],Zc);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=t=>t??Je,Re={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},c$=te`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var cn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bt=class extends Q{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Re.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};Bt.styles=[de,c$];cn([N()],Bt.prototype,"flexDirection",void 0);cn([N()],Bt.prototype,"flexWrap",void 0);cn([N()],Bt.prototype,"flexBasis",void 0);cn([N()],Bt.prototype,"flexGrow",void 0);cn([N()],Bt.prototype,"flexShrink",void 0);cn([N()],Bt.prototype,"alignItems",void 0);cn([N()],Bt.prototype,"justifyContent",void 0);cn([N()],Bt.prototype,"columnGap",void 0);cn([N()],Bt.prototype,"rowGap",void 0);cn([N()],Bt.prototype,"gap",void 0);cn([N()],Bt.prototype,"padding",void 0);cn([N()],Bt.prototype,"margin",void 0);Bt=cn([K("wui-flex")],Bt);const d$=te`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var of=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Cs=class extends Q{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return k`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",k`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Re.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Cs.styles=[de,d$];of([N()],Cs.prototype,"imageSrc",void 0);of([N()],Cs.prototype,"alt",void 0);of([N()],Cs.prototype,"address",void 0);Cs=of([K("wui-avatar")],Cs);const f$=te`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Or=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let jn=class extends Q{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||o?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,k` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};jn.styles=[de,ct,f$];Or([N()],jn.prototype,"size",void 0);Or([N()],jn.prototype,"backgroundColor",void 0);Or([N()],jn.prototype,"iconColor",void 0);Or([N()],jn.prototype,"iconSize",void 0);Or([N()],jn.prototype,"background",void 0);Or([N({type:Boolean})],jn.prototype,"border",void 0);Or([N()],jn.prototype,"borderColor",void 0);Or([N()],jn.prototype,"icon",void 0);jn=Or([K("wui-icon-box")],jn);const h$=te`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var mo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _r=class extends Q{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${ve(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Re.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?k`<wui-image src=${this.networkSrc}></wui-image>`:k`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return k`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};_r.styles=[de,ct,h$];mo([N()],_r.prototype,"networkSrc",void 0);mo([N()],_r.prototype,"avatarSrc",void 0);mo([N()],_r.prototype,"balance",void 0);mo([N({type:Boolean})],_r.prototype,"disabled",void 0);mo([N({type:Boolean})],_r.prototype,"isProfileName",void 0);mo([N()],_r.prototype,"address",void 0);_r=mo([K("wui-account-button")],_r);const p$=te`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var iu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ao=class extends Q{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),k` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?k`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:k`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ao.styles=[de,p$];iu([N()],ao.prototype,"size",void 0);iu([N()],ao.prototype,"name",void 0);iu([N()],ao.prototype,"imageSrc",void 0);iu([N()],ao.prototype,"walletIcon",void 0);ao=iu([K("wui-wallet-image")],ao);const g$=te`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var ob=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const x0=4;let Qc=class extends Q{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<x0;return k`${this.walletImages.slice(0,x0).map(({src:n,walletName:r})=>k`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${ve(r)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(x0-this.walletImages.length)].map(()=>k` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};Qc.styles=[de,g$];ob([N({type:Array})],Qc.prototype,"walletImages",void 0);Qc=ob([K("wui-all-wallets-image")],Qc);const m$=te`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Hs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gi=class extends Q{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return k`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}};gi.styles=[de,ct,m$];Hs([N()],gi.prototype,"size",void 0);Hs([N({type:Boolean})],gi.prototype,"disabled",void 0);Hs([N({type:Boolean})],gi.prototype,"fullWidth",void 0);Hs([N({type:Boolean})],gi.prototype,"loading",void 0);Hs([N()],gi.prototype,"variant",void 0);gi=Hs([K("wui-button")],gi);const sb=J`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,w$=te`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var ab=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yc=class extends Q{constructor(){super(...arguments),this.type="wallet"}render(){return k`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?k` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${sb}`:k`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Yc.styles=[de,ct,w$];ab([N()],Yc.prototype,"type",void 0);Yc=ab([K("wui-card-select-loader")],Yc);const y$=J`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,v$=te`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ou=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let lo=class extends Q{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,k`${this.templateVisual()} ${e?y$:sb}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:k`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};lo.styles=[de,v$];ou([N()],lo.prototype,"size",void 0);ou([N()],lo.prototype,"name",void 0);ou([N()],lo.prototype,"imageSrc",void 0);ou([N({type:Boolean})],lo.prototype,"selected",void 0);lo=ou([K("wui-network-image")],lo);const b$=te`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Vs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mi=class extends Q{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return k`
      <button data-selected=${ve(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?k`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ve(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:k`
      <wui-wallet-image size="md" imageSrc=${ve(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};mi.styles=[de,ct,b$];Vs([N()],mi.prototype,"name",void 0);Vs([N()],mi.prototype,"type",void 0);Vs([N()],mi.prototype,"imageSrc",void 0);Vs([N({type:Boolean})],mi.prototype,"disabled",void 0);Vs([N({type:Boolean})],mi.prototype,"selected",void 0);mi=Vs([K("wui-card-select")],mi);const x$=te`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var qs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wi=class extends Q{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return k`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Re.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:null}};wi.styles=[de,ct,x$];qs([N()],wi.prototype,"variant",void 0);qs([N()],wi.prototype,"imageSrc",void 0);qs([N({type:Boolean})],wi.prototype,"disabled",void 0);qs([N()],wi.prototype,"icon",void 0);qs([N()],wi.prototype,"href",void 0);wi=qs([K("wui-chip")],wi);const C$=te`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var bg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ol=class extends Q{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return k`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ol.styles=[de,ct,C$];bg([N()],Ol.prototype,"size",void 0);bg([N({type:Boolean})],Ol.prototype,"loading",void 0);Ol=bg([K("wui-connect-button")],Ol);const E$=te`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var sf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Es=class extends Q{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return k`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Es.styles=[de,ct,E$];sf([N({type:Boolean})],Es.prototype,"disabled",void 0);sf([N()],Es.prototype,"label",void 0);sf([N()],Es.prototype,"buttonLabel",void 0);Es=sf([K("wui-cta-button")],Es);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _$=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),La(i,e);return!0},Jc=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},lb=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),P$(e)}};function S$(t){this._$AN!==void 0?(Jc(this),this._$AM=t,lb(this)):this._$AM=t}function $$(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)La(r[o],!1),Jc(r[o]);else r!=null&&(La(r,!1),Jc(r));else La(this,t)}const P$=t=>{t.type==tb.CHILD&&(t._$AP??(t._$AP=$$),t._$AQ??(t._$AQ=S$))};class A$ extends rb{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),lb(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(La(this,e),Jc(this))}setValue(e){if(_$(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ub=()=>new D$;let D$=class{};const C0=new WeakMap,cb=nb(class extends A${render(t){return Je}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.ct=(r=t.options)==null?void 0:r.host,this.ot(this.lt=t.element)),Je}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let n=C0.get(e);n===void 0&&(n=new WeakMap,C0.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=C0.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),k$=te`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var wo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sr=class extends Q{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ub()}render(){const e=`wui-size-${this.size}`;return k` ${this.templateIcon()}
      <input
        ${cb(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${ve(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?k`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Sr.styles=[de,ct,k$];wo([N()],Sr.prototype,"size",void 0);wo([N()],Sr.prototype,"icon",void 0);wo([N({type:Boolean})],Sr.prototype,"disabled",void 0);wo([N()],Sr.prototype,"placeholder",void 0);wo([N()],Sr.prototype,"type",void 0);wo([N()],Sr.prototype,"keyHint",void 0);Sr=wo([K("wui-input-text")],Sr);const O$=te`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var db=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xc=class extends Q{render(){return k`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?k`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Xc.styles=[de,O$];db([N()],Xc.prototype,"errorMessage",void 0);Xc=db([K("wui-email-input")],Xc);const T$=te`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var su=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let uo=class extends Q{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};uo.styles=[de,ct,wg,T$];su([N()],uo.prototype,"size",void 0);su([N({type:Boolean})],uo.prototype,"disabled",void 0);su([N()],uo.prototype,"icon",void 0);su([N()],uo.prototype,"iconColor",void 0);uo=su([K("wui-icon-link")],uo);const I$=te`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var fb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ed=class extends Q{constructor(){super(...arguments),this.icon="copy"}render(){return k`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ed.styles=[de,ct,I$];fb([N()],ed.prototype,"icon",void 0);ed=fb([K("wui-input-element")],ed);const N$=te`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var hb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let td=class extends Q{constructor(){super(...arguments),this.disabled=!1}render(){return k`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};td.styles=[de,ct,N$];hb([N({type:Boolean})],td.prototype,"disabled",void 0);td=hb([K("wui-input-numeric")],td);const R$=te`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var xg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Tl=class extends Q{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Tl.styles=[de,ct,R$];xg([N({type:Boolean})],Tl.prototype,"disabled",void 0);xg([N()],Tl.prototype,"color",void 0);Tl=xg([K("wui-link")],Tl);const M$=te`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var sr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let _n=class extends Q{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return k`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ve(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return k`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return k`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return k`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}chevronTemplate(){return this.chevron?k`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};_n.styles=[de,ct,M$];sr([N()],_n.prototype,"icon",void 0);sr([N()],_n.prototype,"iconSize",void 0);sr([N()],_n.prototype,"variant",void 0);sr([N()],_n.prototype,"iconVariant",void 0);sr([N({type:Boolean})],_n.prototype,"disabled",void 0);sr([N()],_n.prototype,"imageSrc",void 0);sr([N()],_n.prototype,"alt",void 0);sr([N({type:Boolean})],_n.prototype,"chevron",void 0);sr([N({type:Boolean})],_n.prototype,"loading",void 0);_n=sr([K("wui-list-item")],_n);var ap;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(ap||(ap={}));const B$=te`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var yo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $r=class extends Q{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,k`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?k`<div class="swap-images-container">
        ${e!=null&&e.url?k`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?k`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?k`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?k`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:k`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?k`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};$r.styles=[B$];yo([N()],$r.prototype,"type",void 0);yo([N()],$r.prototype,"status",void 0);yo([N()],$r.prototype,"direction",void 0);yo([N()],$r.prototype,"onlyDirectionIcon",void 0);yo([N()],$r.prototype,"images",void 0);yo([N()],$r.prototype,"secondImage",void 0);$r=yo([K("wui-transaction-visual")],$r);const U$=te`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var $i=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nr=class extends Q{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return k`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${ap[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?k`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?k`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};nr.styles=[de,U$];$i([N()],nr.prototype,"type",void 0);$i([N()],nr.prototype,"descriptions",void 0);$i([N()],nr.prototype,"date",void 0);$i([N()],nr.prototype,"onlyDirectionIcon",void 0);$i([N()],nr.prototype,"status",void 0);$i([N()],nr.prototype,"direction",void 0);$i([N()],nr.prototype,"images",void 0);nr=$i([K("wui-transaction-list-item")],nr);const L$=te`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var F$=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let lp=class extends Q{render(){return k`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};lp.styles=[de,L$];lp=F$([K("wui-transaction-list-item-loader")],lp);const j$=te`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var pb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let nd=class extends Q{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,k`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};nd.styles=[de,j$];pb([N()],nd.prototype,"variant",void 0);nd=pb([K("wui-tag")],nd);const W$=te`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var ar=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Sn=class extends Q{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?k` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?k` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?k`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?k`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?k`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?k`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Sn.styles=[de,ct,W$];ar([N({type:Array})],Sn.prototype,"walletImages",void 0);ar([N()],Sn.prototype,"imageSrc",void 0);ar([N()],Sn.prototype,"name",void 0);ar([N()],Sn.prototype,"tagLabel",void 0);ar([N()],Sn.prototype,"tagVariant",void 0);ar([N()],Sn.prototype,"icon",void 0);ar([N()],Sn.prototype,"walletIcon",void 0);ar([N({type:Boolean})],Sn.prototype,"disabled",void 0);ar([N({type:Boolean})],Sn.prototype,"showAllWallets",void 0);Sn=ar([K("wui-list-wallet")],Sn);const z$=te`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var gb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rd=class extends Q{constructor(){super(...arguments),this.logo="google"}render(){return k`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rd.styles=[de,z$];gb([N()],rd.prototype,"logo",void 0);rd=gb([K("wui-logo")],rd);const H$=te`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Cg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Il=class extends Q{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Il.styles=[de,ct,H$];Cg([N()],Il.prototype,"logo",void 0);Cg([N({type:Boolean})],Il.prototype,"disabled",void 0);Il=Cg([K("wui-logo-select")],Il);const V$=te`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Eg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nl=class extends Q{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:k`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Nl.styles=[de,ct,V$];Eg([N()],Nl.prototype,"imageSrc",void 0);Eg([N({type:Boolean})],Nl.prototype,"disabled",void 0);Nl=Eg([K("wui-network-button")],Nl);const q$=te`
  :host {
    position: relative;
    display: block;
  }
`;var mb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let id=class extends Q{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return k`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,n)=>k`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):Re.isNumber(o)&&e.data?(i.value=e.data,this.focusInputField("next",n)):i.value=""}}handlePaste(e,n,r){const i=n[0];if(i&&Re.isNumber(i)){e.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}};id.styles=[de,q$];mb([N({type:Number})],id.prototype,"length",void 0);id=mb([K("wui-otp")],id);var au={},G$=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},wb={},dn={};let _g;const K$=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];dn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};dn.getSymbolTotalCodewords=function(e){return K$[e]};dn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};dn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');_g=e};dn.isKanjiModeEnabled=function(){return typeof _g<"u"};dn.toSJIS=function(e){return _g(e)};var af={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(af);function yb(){this.buffer=[],this.length=0}yb.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Z$=yb;function lu(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}lu.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};lu.prototype.get=function(t,e){return this.data[t*this.size+e]};lu.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};lu.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Q$=lu,vb={};(function(t){const e=dn.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(vb);var bb={};const Y$=dn.getSymbolSize,o2=7;bb.getPositions=function(e){const n=Y$(e);return[[0,0],[n-o2,0],[0,n-o2]]};var xb={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,u=null,c=null;for(let f=0;f<o;f++){a=l=0,u=c=null;for(let p=0;p<o;p++){let w=i.get(f,p);w===u?a++:(a>=5&&(s+=e.N1+(a-5)),u=w,a=1),w=i.get(p,f),w===c?l++:(l>=5&&(s+=e.N1+(l-5)),c=w,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const u=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let u=0;u<o;u++){a=l=0;for(let c=0;c<o;c++)a=a<<1&2047|i.get(u,c),c>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(c,u),c>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){o(u),t.applyMask(u,i);const c=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(u,i),c<l&&(l=c,a=u)}return a}})(xb);var lf={};const Zr=af,Lu=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Fu=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];lf.getBlocksCount=function(e,n){switch(n){case Zr.L:return Lu[(e-1)*4+0];case Zr.M:return Lu[(e-1)*4+1];case Zr.Q:return Lu[(e-1)*4+2];case Zr.H:return Lu[(e-1)*4+3];default:return}};lf.getTotalCodewordsCount=function(e,n){switch(n){case Zr.L:return Fu[(e-1)*4+0];case Zr.M:return Fu[(e-1)*4+1];case Zr.Q:return Fu[(e-1)*4+2];case Zr.H:return Fu[(e-1)*4+3];default:return}};var Cb={},uf={};const Fa=new Uint8Array(512),od=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Fa[n]=e,od[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Fa[n]=Fa[n-255]})();uf.log=function(e){if(e<1)throw new Error("log("+e+")");return od[e]};uf.exp=function(e){return Fa[e]};uf.mul=function(e,n){return e===0||n===0?0:Fa[od[e]+od[n]]};(function(t){const e=uf;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(Cb);const Eb=Cb;function Sg(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Sg.prototype.initialize=function(e){this.degree=e,this.genPoly=Eb.generateECPolynomial(this.degree)};Sg.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Eb.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var J$=Sg,_b={},Pi={},$g={};$g.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var lr={};const Sb="[0-9]+",X$="[A-Z $%*+\\-./:]+";let Rl="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Rl=Rl.replace(/u/g,"\\u");const eP="(?:(?![A-Z0-9 $%*+\\-./:]|"+Rl+`)(?:.|[\r
]))+`;lr.KANJI=new RegExp(Rl,"g");lr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");lr.BYTE=new RegExp(eP,"g");lr.NUMERIC=new RegExp(Sb,"g");lr.ALPHANUMERIC=new RegExp(X$,"g");const tP=new RegExp("^"+Rl+"$"),nP=new RegExp("^"+Sb+"$"),rP=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");lr.testKanji=function(e){return tP.test(e)};lr.testNumeric=function(e){return nP.test(e)};lr.testAlphanumeric=function(e){return rP.test(e)};(function(t){const e=$g,n=lr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(Pi);(function(t){const e=dn,n=lf,r=af,i=Pi,o=$g,s=7973,a=e.getBCHDigit(s);function l(p,w,y){for(let C=1;C<=40;C++)if(w<=t.getCapacity(C,y,p))return C}function u(p,w){return i.getCharCountIndicator(p,w)+4}function c(p,w){let y=0;return p.forEach(function(C){const _=u(C.mode,w);y+=_+C.getBitsLength()}),y}function f(p,w){for(let y=1;y<=40;y++)if(c(p,y)<=t.getCapacity(y,w,i.MIXED))return y}t.from=function(w,y){return o.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,C){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=i.BYTE);const _=e.getSymbolTotalCodewords(w),b=n.getTotalCodewordsCount(w,y),g=(_-b)*8;if(C===i.MIXED)return g;const v=g-u(C,w);switch(C){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},t.getBestVersionForData=function(w,y){let C;const _=r.from(y,r.M);if(Array.isArray(w)){if(w.length>1)return f(w,_);if(w.length===0)return 1;C=w[0]}else C=w;return l(C.mode,C.getLength(),_)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-a>=0;)y^=s<<e.getBCHDigit(y)-a;return w<<12|y}})(_b);var $b={};const up=dn,Pb=1335,iP=21522,s2=up.getBCHDigit(Pb);$b.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;up.getBCHDigit(i)-s2>=0;)i^=Pb<<up.getBCHDigit(i)-s2;return(r<<10|i)^iP};var Ab={};const oP=Pi;function _s(t){this.mode=oP.NUMERIC,this.data=t.toString()}_s.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};_s.prototype.getLength=function(){return this.data.length};_s.prototype.getBitsLength=function(){return _s.getBitsLength(this.data.length)};_s.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var sP=_s;const aP=Pi,E0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ss(t){this.mode=aP.ALPHANUMERIC,this.data=t}Ss.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Ss.prototype.getLength=function(){return this.data.length};Ss.prototype.getBitsLength=function(){return Ss.getBitsLength(this.data.length)};Ss.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=E0.indexOf(this.data[n])*45;r+=E0.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(E0.indexOf(this.data[n]),6)};var lP=Ss,uP=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const cP=uP,dP=Pi;function $s(t){this.mode=dP.BYTE,typeof t=="string"&&(t=cP(t)),this.data=new Uint8Array(t)}$s.getBitsLength=function(e){return e*8};$s.prototype.getLength=function(){return this.data.length};$s.prototype.getBitsLength=function(){return $s.getBitsLength(this.data.length)};$s.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var fP=$s;const hP=Pi,pP=dn;function Ps(t){this.mode=hP.KANJI,this.data=t}Ps.getBitsLength=function(e){return e*13};Ps.prototype.getLength=function(){return this.data.length};Ps.prototype.getBitsLength=function(){return Ps.getBitsLength(this.data.length)};Ps.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=pP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var gP=Ps,Db={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,u,c,f,p,w,y,C,_;!a.empty();){l=a.pop(),u=l.value,f=l.cost,p=n[u]||{};for(c in p)p.hasOwnProperty(c)&&(w=p[c],y=f+w,C=s[c],_=typeof s[c]>"u",(_||C>y)&&(s[c]=y,a.push(c,y),o[c]=u))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Db);var mP=Db.exports;(function(t){const e=Pi,n=sP,r=lP,i=fP,o=gP,s=lr,a=dn,l=mP;function u(b){return unescape(encodeURIComponent(b)).length}function c(b,g,v){const x=[];let E;for(;(E=b.exec(v))!==null;)x.push({data:E[0],index:E.index,mode:g,length:E[0].length});return x}function f(b){const g=c(s.NUMERIC,e.NUMERIC,b),v=c(s.ALPHANUMERIC,e.ALPHANUMERIC,b);let x,E;return a.isKanjiModeEnabled()?(x=c(s.BYTE,e.BYTE,b),E=c(s.KANJI,e.KANJI,b)):(x=c(s.BYTE_KANJI,e.BYTE,b),E=[]),g.concat(v,x,E).sort(function(d,P){return d.index-P.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function p(b,g){switch(g){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return r.getBitsLength(b);case e.KANJI:return o.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function w(b){return b.reduce(function(g,v){const x=g.length-1>=0?g[g.length-1]:null;return x&&x.mode===v.mode?(g[g.length-1].data+=v.data,g):(g.push(v),g)},[])}function y(b){const g=[];for(let v=0;v<b.length;v++){const x=b[v];switch(x.mode){case e.NUMERIC:g.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:g.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:g.push([x,{data:x.data,mode:e.BYTE,length:u(x.data)}]);break;case e.BYTE:g.push([{data:x.data,mode:e.BYTE,length:u(x.data)}])}}return g}function C(b,g){const v={},x={start:{}};let E=["start"];for(let S=0;S<b.length;S++){const d=b[S],P=[];for(let O=0;O<d.length;O++){const T=d[O],M=""+S+O;P.push(M),v[M]={node:T,lastCount:0},x[M]={};for(let Y=0;Y<E.length;Y++){const X=E[Y];v[X]&&v[X].node.mode===T.mode?(x[X][M]=p(v[X].lastCount+T.length,T.mode)-p(v[X].lastCount,T.mode),v[X].lastCount+=T.length):(v[X]&&(v[X].lastCount=T.length),x[X][M]=p(T.length,T.mode)+4+e.getCharCountIndicator(T.mode,g))}}E=P}for(let S=0;S<E.length;S++)x[E[S]].end=0;return{map:x,table:v}}function _(b,g){let v;const x=e.getBestModeForData(b);if(v=e.from(g,x),v!==e.BYTE&&v.bit<x.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(x));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new r(b);case e.KANJI:return new o(b);case e.BYTE:return new i(b)}}t.fromArray=function(g){return g.reduce(function(v,x){return typeof x=="string"?v.push(_(x,null)):x.data&&v.push(_(x.data,x.mode)),v},[])},t.fromString=function(g,v){const x=f(g,a.isKanjiModeEnabled()),E=y(x),S=C(E,v),d=l.find_path(S.map,"start","end"),P=[];for(let O=1;O<d.length-1;O++)P.push(S.table[d[O]].node);return t.fromArray(w(P))},t.rawSplit=function(g){return t.fromArray(f(g,a.isKanjiModeEnabled()))}})(Ab);const cf=dn,_0=af,wP=Z$,yP=Q$,vP=vb,bP=bb,cp=xb,dp=lf,xP=J$,sd=_b,CP=$b,EP=Pi,S0=Ab;function _P(t,e){const n=t.size,r=bP.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function SP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function $P(t,e){const n=vP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function PP(t,e){const n=t.size,r=sd.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function $0(t,e,n){const r=t.size,i=CP.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function AP(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let u=!1;s<e.length&&(u=(e[s]>>>o&1)===1),t.set(i,a-l,u),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function DP(t,e,n){const r=new wP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),EP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=cf.getSymbolTotalCodewords(t),o=dp.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return kP(r,t,e)}function kP(t,e,n){const r=cf.getSymbolTotalCodewords(e),i=dp.getTotalCodewordsCount(e,n),o=r-i,s=dp.getBlocksCount(e,n),a=r%s,l=s-a,u=Math.floor(r/s),c=Math.floor(o/s),f=c+1,p=u-c,w=new xP(p);let y=0;const C=new Array(s),_=new Array(s);let b=0;const g=new Uint8Array(t.buffer);for(let d=0;d<s;d++){const P=d<l?c:f;C[d]=g.slice(y,y+P),_[d]=w.encode(C[d]),y+=P,b=Math.max(b,P)}const v=new Uint8Array(r);let x=0,E,S;for(E=0;E<b;E++)for(S=0;S<s;S++)E<C[S].length&&(v[x++]=C[S][E]);for(E=0;E<p;E++)for(S=0;S<s;S++)v[x++]=_[S][E];return v}function OP(t,e,n,r){let i;if(Array.isArray(t))i=S0.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const c=S0.rawSplit(t);u=sd.getBestVersionForData(c,n)}i=S0.fromString(t,u||40)}else throw new Error("Invalid data");const o=sd.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=DP(e,n,i),a=cf.getSymbolSize(e),l=new yP(a);return _P(l,e),SP(l),$P(l,e),$0(l,n,0),e>=7&&PP(l,e),AP(l,s),isNaN(r)&&(r=cp.getBestMask(l,$0.bind(null,l,n))),cp.applyMask(r,l),$0(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}wb.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=_0.M,i,o;return typeof n<"u"&&(r=_0.from(n.errorCorrectionLevel,_0.M),i=sd.from(n.version),o=cp.from(n.maskPattern),n.toSJISFunc&&cf.setToSJISFunction(n.toSJISFunc)),OP(e,i,r,o)};var kb={},Pg={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),u=Math.floor((s+o.margin*2)*l),c=o.margin*l,f=[o.color.light,o.color.dark];for(let p=0;p<u;p++)for(let w=0;w<u;w++){let y=(p*u+w)*4,C=o.color.light;if(p>=c&&w>=c&&p<u-c&&w<u-c){const _=Math.floor((p-c)/l),b=Math.floor((w-c)/l);C=f[a[_*s+b]?1:0]}r[y++]=C.r,r[y++]=C.g,r[y++]=C.b,r[y]=C.a}}})(Pg);(function(t){const e=Pg;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=r()),l=e.getOptions(l);const c=e.getImageWidth(o.modules.size,l),f=u.getContext("2d"),p=f.createImageData(c,c);return e.qrToImageData(p.data,o,l),n(f,u,c),f.putImageData(p,0,0),u},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=t.render(o,s,l),c=l.type||"image/png",f=l.rendererOpts||{};return u.toDataURL(c,f.quality)}})(kb);var Ob={};const TP=Pg;function a2(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function P0(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function IP(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),u=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?P0("M",l+n,.5+u+n):P0("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=P0("h",s),s=0)):i++}return r}Ob.render=function(e,n,r){const i=TP.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+a2(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+a2(i.color.dark,"stroke")+' d="'+IP(s,o,i.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,p),p};const NP=G$,fp=wb,Tb=kb,RP=Ob;function Ag(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!NP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,u){try{const c=fp.create(n,r);l(t(c,e,r))}catch(c){u(c)}})}try{const l=fp.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}au.create=fp.create;au.toCanvas=Ag.bind(null,Tb.render);au.toDataURL=Ag.bind(null,Tb.renderToDataURL);au.toString=Ag.bind(null,function(t,e,n){return RP.render(t,n)});const MP=.1,l2=2.5,dr=7;function A0(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+MP}function BP(t,e){const n=Array.prototype.slice.call(au.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const UP={generate(t,e,n){const r="#141414",i="transparent",s=[],a=BP(t,"Q"),l=e/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:C,y:_})=>{const b=(a.length-dr)*l*C,g=(a.length-dr)*l*_,v=.45;for(let x=0;x<u.length;x+=1){const E=l*(dr-x*2);s.push(J`
            <rect
              fill=${x===2?r:i}
              width=${x===0?E-5:E}
              rx= ${x===0?(E-5)*v:E*v}
              ry= ${x===0?(E-5)*v:E*v}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?E-5:E}
              x= ${x===0?g+l*x+5/2:g+l*x}
              y= ${x===0?b+l*x+5/2:b+l*x}
            />
          `)}});const c=Math.floor((n+25)/l),f=a.length/2-c/2,p=a.length/2+c/2-1,w=[];a.forEach((C,_)=>{C.forEach((b,g)=>{if(a[_][g]&&!(_<dr&&g<dr||_>a.length-(dr+1)&&g<dr||_<dr&&g>a.length-(dr+1))&&!(_>f&&_<p&&g>f&&g<p)){const v=_*l+l/2,x=g*l+l/2;w.push([v,x])}})});const y={};return w.forEach(([C,_])=>{var b;y[C]?(b=y[C])==null||b.push(_):y[C]=[_]}),Object.entries(y).map(([C,_])=>{const b=_.filter(g=>_.every(v=>!A0(g,v,l)));return[Number(C),b]}).forEach(([C,_])=>{_.forEach(b=>{s.push(J`<circle cx=${C} cy=${b} fill=${r} r=${l/l2} />`)})}),Object.entries(y).filter(([C,_])=>_.length>1).map(([C,_])=>{const b=_.filter(g=>_.some(v=>A0(g,v,l)));return[Number(C),b]}).map(([C,_])=>{_.sort((g,v)=>g<v?-1:1);const b=[];for(const g of _){const v=b.find(x=>x.some(E=>A0(g,E,l)));v?v.push(g):b.push([g])}return[C,b.map(g=>[g[0],g[g.length-1]])]}).forEach(([C,_])=>{_.forEach(([b,g])=>{s.push(J`
              <line
                x1=${C}
                x2=${C}
                y1=${b}
                y2=${g}
                stroke=${r}
                stroke-width=${l/(l2/2)}
                stroke-linecap="round"
              />
            `)})}),s}},LP=te`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Gs=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yi=class extends Q{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,k`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return J`
      <svg height=${e} width=${e}>
        ${UP.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:k`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};yi.styles=[de,LP];Gs([N()],yi.prototype,"uri",void 0);Gs([N({type:Number})],yi.prototype,"size",void 0);Gs([N()],yi.prototype,"theme",void 0);Gs([N()],yi.prototype,"imageSrc",void 0);Gs([N()],yi.prototype,"alt",void 0);yi=Gs([K("wui-qr-code")],yi);const FP=te`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var jP=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let hp=class extends Q{constructor(){super(...arguments),this.inputComponentRef=ub()}render(){return k`
      <wui-input-text
        ${cb(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};hp.styles=[de,FP];hp=jP([K("wui-search-bar")],hp);const WP=te`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var uu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let co=class extends Q{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return k`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};co.styles=[de,WP];uu([N()],co.prototype,"backgroundColor",void 0);uu([N()],co.prototype,"iconColor",void 0);uu([N()],co.prototype,"icon",void 0);uu([N()],co.prototype,"message",void 0);co=uu([K("wui-snackbar")],co);const zP=te`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ai=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let rr=class extends Q{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return k`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};rr.styles=[de,ct,zP];Ai([N({type:Array})],rr.prototype,"tabs",void 0);Ai([N()],rr.prototype,"onTabChange",void 0);Ai([N({type:Array})],rr.prototype,"buttons",void 0);Ai([N({type:Boolean})],rr.prototype,"disabled",void 0);Ai([se()],rr.prototype,"activeTab",void 0);Ai([se()],rr.prototype,"localTabWidth",void 0);Ai([se()],rr.prototype,"isDense",void 0);rr=Ai([K("wui-tabs")],rr);const HP=te`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Dg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ml=class extends Q{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return k`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ml.styles=[de,ct,HP];Dg([N()],Ml.prototype,"placement",void 0);Dg([N()],Ml.prototype,"message",void 0);Ml=Dg([K("wui-tooltip")],Ml);const VP=te`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var df=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let As=class extends Q{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,k`${this.templateVisual()}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:k`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};As.styles=[de,VP];df([N()],As.prototype,"imageSrc",void 0);df([N()],As.prototype,"alt",void 0);df([N({type:Boolean})],As.prototype,"borderRadiusFull",void 0);As=df([K("wui-visual-thumbnail")],As);const qP=te`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Pn=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qt=class extends Q{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Re.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};Qt.styles=[de,qP];Pn([N()],Qt.prototype,"gridTemplateRows",void 0);Pn([N()],Qt.prototype,"gridTemplateColumns",void 0);Pn([N()],Qt.prototype,"justifyItems",void 0);Pn([N()],Qt.prototype,"alignItems",void 0);Pn([N()],Qt.prototype,"justifyContent",void 0);Pn([N()],Qt.prototype,"alignContent",void 0);Pn([N()],Qt.prototype,"columnGap",void 0);Pn([N()],Qt.prototype,"rowGap",void 0);Pn([N()],Qt.prototype,"gap",void 0);Pn([N()],Qt.prototype,"padding",void 0);Pn([N()],Qt.prototype,"margin",void 0);Qt=Pn([K("wui-grid")],Qt);const GP=te`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Ib=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ad=class extends Q{constructor(){super(...arguments),this.text=""}render(){return k`${this.template()}`}template(){return this.text?k`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ad.styles=[de,GP];Ib([N()],ad.prototype,"text",void 0);ad=Ib([K("wui-separator")],ad);var Nb={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Bp,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",u="day",c="week",f="month",p="quarter",w="year",y="date",C="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(z){var F=["th","st","nd","rd"],U=z%100;return"["+z+(F[(U-20)%10]||F[U]||F[0])+"]"}},v=function(z,F,U){var L=String(z);return!L||L.length>=F?z:""+Array(F+1-L.length).join(U)+z},x={s:v,z:function(z){var F=-z.utcOffset(),U=Math.abs(F),L=Math.floor(U/60),I=U%60;return(F<=0?"+":"-")+v(L,2,"0")+":"+v(I,2,"0")},m:function z(F,U){if(F.date()<U.date())return-z(U,F);var L=12*(U.year()-F.year())+(U.month()-F.month()),I=F.clone().add(L,f),j=U-I<0,W=F.clone().add(L+(j?-1:1),f);return+(-(L+(U-I)/(j?I-W:W-I))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:f,y:w,w:c,d:u,D:y,h:l,m:a,s,ms:o,Q:p}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},E="en",S={};S[E]=g;var d="$isDayjsObject",P=function(z){return z instanceof Y||!(!z||!z[d])},O=function z(F,U,L){var I;if(!F)return E;if(typeof F=="string"){var j=F.toLowerCase();S[j]&&(I=j),U&&(S[j]=U,I=j);var W=F.split("-");if(!I&&W.length>1)return z(W[0])}else{var V=F.name;S[V]=F,I=V}return!L&&I&&(E=I),I||!L&&E},T=function(z,F){if(P(z))return z.clone();var U=typeof F=="object"?F:{};return U.date=z,U.args=arguments,new Y(U)},M=x;M.l=O,M.i=P,M.w=function(z,F){return T(z,{locale:F.$L,utc:F.$u,x:F.$x,$offset:F.$offset})};var Y=function(){function z(U){this.$L=O(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[d]=!0}var F=z.prototype;return F.parse=function(U){this.$d=function(L){var I=L.date,j=L.utc;if(I===null)return new Date(NaN);if(M.u(I))return new Date;if(I instanceof Date)return new Date(I);if(typeof I=="string"&&!/Z$/i.test(I)){var W=I.match(_);if(W){var V=W[2]-1||0,Z=(W[7]||"0").substring(0,3);return j?new Date(Date.UTC(W[1],V,W[3]||1,W[4]||0,W[5]||0,W[6]||0,Z)):new Date(W[1],V,W[3]||1,W[4]||0,W[5]||0,W[6]||0,Z)}}return new Date(I)}(U),this.init()},F.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},F.$utils=function(){return M},F.isValid=function(){return this.$d.toString()!==C},F.isSame=function(U,L){var I=T(U);return this.startOf(L)<=I&&I<=this.endOf(L)},F.isAfter=function(U,L){return T(U)<this.startOf(L)},F.isBefore=function(U,L){return this.endOf(L)<T(U)},F.$g=function(U,L,I){return M.u(U)?this[L]:this.set(I,U)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(U,L){var I=this,j=!!M.u(L)||L,W=M.p(U),V=function(me,ce){var be=M.w(I.$u?Date.UTC(I.$y,ce,me):new Date(I.$y,ce,me),I);return j?be:be.endOf(u)},Z=function(me,ce){return M.w(I.toDate()[me].apply(I.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(ce)),I)},q=this.$W,ee=this.$M,ie=this.$D,ae="set"+(this.$u?"UTC":"");switch(W){case w:return j?V(1,0):V(31,11);case f:return j?V(1,ee):V(0,ee+1);case c:var ue=this.$locale().weekStart||0,fe=(q<ue?q+7:q)-ue;return V(j?ie-fe:ie+(6-fe),ee);case u:case y:return Z(ae+"Hours",0);case l:return Z(ae+"Minutes",1);case a:return Z(ae+"Seconds",2);case s:return Z(ae+"Milliseconds",3);default:return this.clone()}},F.endOf=function(U){return this.startOf(U,!1)},F.$set=function(U,L){var I,j=M.p(U),W="set"+(this.$u?"UTC":""),V=(I={},I[u]=W+"Date",I[y]=W+"Date",I[f]=W+"Month",I[w]=W+"FullYear",I[l]=W+"Hours",I[a]=W+"Minutes",I[s]=W+"Seconds",I[o]=W+"Milliseconds",I)[j],Z=j===u?this.$D+(L-this.$W):L;if(j===f||j===w){var q=this.clone().set(y,1);q.$d[V](Z),q.init(),this.$d=q.set(y,Math.min(this.$D,q.daysInMonth())).$d}else V&&this.$d[V](Z);return this.init(),this},F.set=function(U,L){return this.clone().$set(U,L)},F.get=function(U){return this[M.p(U)]()},F.add=function(U,L){var I,j=this;U=Number(U);var W=M.p(L),V=function(ee){var ie=T(j);return M.w(ie.date(ie.date()+Math.round(ee*U)),j)};if(W===f)return this.set(f,this.$M+U);if(W===w)return this.set(w,this.$y+U);if(W===u)return V(1);if(W===c)return V(7);var Z=(I={},I[a]=r,I[l]=i,I[s]=n,I)[W]||1,q=this.$d.getTime()+U*Z;return M.w(q,this)},F.subtract=function(U,L){return this.add(-1*U,L)},F.format=function(U){var L=this,I=this.$locale();if(!this.isValid())return I.invalidDate||C;var j=U||"YYYY-MM-DDTHH:mm:ssZ",W=M.z(this),V=this.$H,Z=this.$m,q=this.$M,ee=I.weekdays,ie=I.months,ae=I.meridiem,ue=function(ce,be,_e,xe){return ce&&(ce[be]||ce(L,j))||_e[be].slice(0,xe)},fe=function(ce){return M.s(V%12||12,ce,"0")},me=ae||function(ce,be,_e){var xe=ce<12?"AM":"PM";return _e?xe.toLowerCase():xe};return j.replace(b,function(ce,be){return be||function(_e){switch(_e){case"YY":return String(L.$y).slice(-2);case"YYYY":return M.s(L.$y,4,"0");case"M":return q+1;case"MM":return M.s(q+1,2,"0");case"MMM":return ue(I.monthsShort,q,ie,3);case"MMMM":return ue(ie,q);case"D":return L.$D;case"DD":return M.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return ue(I.weekdaysMin,L.$W,ee,2);case"ddd":return ue(I.weekdaysShort,L.$W,ee,3);case"dddd":return ee[L.$W];case"H":return String(V);case"HH":return M.s(V,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return me(V,Z,!0);case"A":return me(V,Z,!1);case"m":return String(Z);case"mm":return M.s(Z,2,"0");case"s":return String(L.$s);case"ss":return M.s(L.$s,2,"0");case"SSS":return M.s(L.$ms,3,"0");case"Z":return W}return null}(ce)||W.replace(":","")})},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(U,L,I){var j,W=this,V=M.p(L),Z=T(U),q=(Z.utcOffset()-this.utcOffset())*r,ee=this-Z,ie=function(){return M.m(W,Z)};switch(V){case w:j=ie()/12;break;case f:j=ie();break;case p:j=ie()/3;break;case c:j=(ee-q)/6048e5;break;case u:j=(ee-q)/864e5;break;case l:j=ee/i;break;case a:j=ee/r;break;case s:j=ee/n;break;default:j=ee}return I?j:M.a(j)},F.daysInMonth=function(){return this.endOf(f).$D},F.$locale=function(){return S[this.$L]},F.locale=function(U,L){if(!U)return this.$L;var I=this.clone(),j=O(U,L,!0);return j&&(I.$L=j),I},F.clone=function(){return M.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},z}(),X=Y.prototype;return T.prototype=X,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",u],["$M",f],["$y",w],["$D",y]].forEach(function(z){X[z[1]]=function(F){return this.$g(F,z[0],z[1])}}),T.extend=function(z,F){return z.$i||(z(F,Y,T),z.$i=!0),T},T.locale=O,T.isDayjs=P,T.unix=function(z){return T(1e3*z)},T.en=S[E],T.Ls=S,T.p={},T})})(Nb);var KP=Nb.exports;const Bl=Hl(KP);var Rb={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Bp,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(Rb);var ZP=Rb.exports;const QP=Hl(ZP);var Mb={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Bp,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(u,c,f,p){return o.fromToBase(u,c,f,p)}i.en.relativeTime=s,o.fromToBase=function(u,c,f,p,w){for(var y,C,_,b=f.$locale().relativeTime||s,g=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=g.length,x=0;x<v;x+=1){var E=g[x];E.d&&(y=p?i(u).diff(f,E.d,!0):f.diff(u,E.d,!0));var S=(n.rounding||Math.round)(Math.abs(y));if(_=y>0,S<=E.r||!E.r){S<=1&&x>0&&(E=g[x-1]);var d=b[E.l];w&&(S=w(""+S)),C=typeof d=="string"?d.replace("%d",S):d(S,c,E.l,_);break}}if(c)return C;var P=_?b.future:b.past;return typeof P=="function"?P(C):P.replace("%s",C)},o.to=function(u,c){return a(u,c,this,!0)},o.from=function(u,c){return a(u,c,this)};var l=function(u){return u.$u?i.utc():i()};o.toNow=function(u){return this.to(l(this),u)},o.fromNow=function(u){return this.from(l(this),u)}}})})(Mb);var YP=Mb.exports;const JP=Hl(YP);Bl.extend(JP);Bl.extend(QP);Bl.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Bb={getYear(t=new Date().toISOString()){return Bl(t).year()},getRelativeDateFromNow(t){return Bl(t).fromNow(!0)}},XP=3,eA=["receive","deposit","borrow","claim"],tA=["withdraw","repay","burn"],qo={getTransactionGroupTitle(t){const e=Bb.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:qo.getTransactionTransferTokenType(t),url:qo.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,l;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var f,p,w;const e=(f=t.metadata)==null?void 0:f.operationType,n=t.transfers,r=((p=t.transfers)==null?void 0:p.length)>0,i=((w=t.transfers)==null?void 0:w.length)>1,o=r&&(n==null?void 0:n.every(y=>!!y.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),u=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&o?(l=Re.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),u=Re.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,u]):[t.metadata.status];if(i)return n.map(y=>this.getTransferDescription(y));let c="";return eA.includes(e)?c="+":tA.includes(e)&&(c="-"),l=c.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(XP):null}};var Tr=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ir=class extends Q{constructor(){super(),this.unsubscribe=[],this.networkImages=oi.state.networkImages,this.disabled=!1,this.balance="show",this.address=De.state.address,this.balanceVal=De.state.balance,this.balanceSymbol=De.state.balanceSymbol,this.profileName=De.state.profileName,this.profileImage=De.state.profileImage,this.network=We.state.caipNetwork,this.unsubscribe.push(De.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),We.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return k`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${ve(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ve(e)}
        avatarSrc=${ve(this.profileImage)}
        balance=${n?oe.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){wt.open()}};Tr([N({type:Boolean})],ir.prototype,"disabled",void 0);Tr([N()],ir.prototype,"balance",void 0);Tr([se()],ir.prototype,"address",void 0);Tr([se()],ir.prototype,"balanceVal",void 0);Tr([se()],ir.prototype,"balanceSymbol",void 0);Tr([se()],ir.prototype,"profileName",void 0);Tr([se()],ir.prototype,"profileImage",void 0);Tr([se()],ir.prototype,"network",void 0);ir=Tr([K("w3m-account-button")],ir);var vo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vi=class extends Q{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=De.state.isConnected,this.unsubscribe.push(De.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?k`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ve(this.balance)}
          >
          </w3m-account-button>
        `:k`
          <w3m-connect-button
            size=${ve(this.size)}
            label=${ve(this.label)}
            loadingLabel=${ve(this.loadingLabel)}
          ></w3m-connect-button>
        `}};vo([N({type:Boolean})],vi.prototype,"disabled",void 0);vo([N()],vi.prototype,"balance",void 0);vo([N()],vi.prototype,"size",void 0);vo([N()],vi.prototype,"label",void 0);vo([N()],vi.prototype,"loadingLabel",void 0);vo([se()],vi.prototype,"isAccount",void 0);vi=vo([K("w3m-button")],vi);var cu=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ds=class extends Q{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=wt.state.open,this.unsubscribe.push(wt.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-connect-button
        size=${ve(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?wt.close():wt.open()}};cu([N()],Ds.prototype,"size",void 0);cu([N()],Ds.prototype,"label",void 0);cu([N()],Ds.prototype,"loadingLabel",void 0);cu([se()],Ds.prototype,"open",void 0);Ds=cu([K("w3m-connect-button")],Ds);const nA=te`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ub=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const u2="scroll-lock";let Ul=class extends Q{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=wt.state.open,this.initializeTheming(),Ce.prefetch(),this.unsubscribe.push(wt.subscribeKey("open",e=>e?this.onOpen():this.onClose())),Oe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?k`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&wt.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=hn.state,r=Re.getColorTheme(n);I_(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,bn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=u2,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${u2}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")wt.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}};Ul.styles=nA;Ub([se()],Ul.prototype,"open",void 0);Ul=Ub([K("w3m-modal")],Ul);const rA=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Ul}},Symbol.toStringTag,{value:"Module"}));var ff=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ll=class extends Q{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=We.state.caipNetwork,this.connected=De.state.isConnected,this.unsubscribe.push(We.subscribeKey("caipNetwork",e=>this.network=e),De.subscribeKey("isConnected",e=>this.connected=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return k`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${ve(rt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){wt.open({view:"Networks"})}};ff([N({type:Boolean})],Ll.prototype,"disabled",void 0);ff([se()],Ll.prototype,"network",void 0);ff([se()],Ll.prototype,"connected",void 0);Ll=ff([K("w3m-network-button")],Ll);const iA=te`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Lb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ld=class extends Q{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=pe.state.view,this.unsubscribe.push(pe.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return k`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return k`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return k`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return k`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return k`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return k`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return k`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return k`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return k`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return k`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return k`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return k`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return k`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return k`<w3m-transactions-view></w3m-transactions-view>`;default:return k`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=pe.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};ld.styles=iA;Lb([se()],ld.prototype,"view",void 0);ld=Lb([K("w3m-router")],ld);const oA=te`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Di=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let or=class extends Q{constructor(){super(),this.usubscribe=[],this.networkImages=oi.state.networkImages,this.address=De.state.address,this.profileImage=De.state.profileImage,this.profileName=De.state.profileName,this.balance=De.state.balance,this.balanceSymbol=De.state.balanceSymbol,this.network=We.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(De.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):wt.close()}),We.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return k`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ve(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Re.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Re.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${oe.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ve(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=De.state;return e?k`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=We.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),bn.showSuccess("Address copied"))}catch{bn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&pe.push("Networks")}onTransactions(){Oe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),pe.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Pe.disconnect(),Oe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),wt.close()}catch{Oe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),bn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=De.state;e&&oe.openHref(e,"_blank")}};or.styles=oA;Di([se()],or.prototype,"address",void 0);Di([se()],or.prototype,"profileImage",void 0);Di([se()],or.prototype,"profileName",void 0);Di([se()],or.prototype,"balance",void 0);Di([se()],or.prototype,"balanceSymbol",void 0);Di([se()],or.prototype,"network",void 0);Di([se()],or.prototype,"disconecting",void 0);or=Di([K("w3m-account-view")],or);var Fb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let pp=class extends Q{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=oe.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return k`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?k`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:k`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return oe.isMobile()?k`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){pe.push("ConnectingWalletConnect")}};Fb([se()],pp.prototype,"search",void 0);pp=Fb([K("w3m-all-wallets-view")],pp);const sA=te`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var jb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ud=class extends Q{constructor(){super(),this.unsubscribe=[],this.connectors=vn.state.connectors,this.unsubscribe.push(vn.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(oe.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?k`
      <wui-list-wallet
        imageSrc=${ve(rt.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=$e.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>k`
        <wui-list-wallet
          imageSrc=${ve(rt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:e}=Ce.state;return e.length?this.filterOutDuplicateWallets(e).map(r=>k`
        <wui-list-wallet
          imageSrc=${ve(rt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return yn.getRecentWallets().map(n=>k`
        <wui-list-wallet
          imageSrc=${ve(rt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:k`
        <wui-list-wallet
          imageSrc=${ve(rt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Pe.checkInstalled()?null:k`
        <wui-list-wallet
          imageSrc=${ve(rt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${ve(e?void 0:"installed")}
          tagVariant=${ve(e?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:k`
        <wui-list-wallet
          imageSrc=${ve(rt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=Math.floor(Ce.state.count/10)*10;return k`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=Ce.state,{customWallets:n,featuredWalletIds:r}=$e.state,{connectors:i}=vn.state,o=yn.getRecentWallets(),s=i.filter(c=>c.type==="ANNOUNCED");if(r||n||!e.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,l).map(c=>k`
        <wui-list-wallet
          imageSrc=${ve(rt.getWalletImage(c))}
          name=${(c==null?void 0:c.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(c)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?oe.isMobile()?pe.push("AllWallets"):pe.push("ConnectingWalletConnect"):pe.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=vn.state,i=yn.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Oe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),pe.push("AllWallets")}onConnectWallet(e){pe.push("ConnectingWalletConnect",{wallet:e})}};ud.styles=sA;jb([se()],ud.prototype,"connectors",void 0);ud=jb([K("w3m-connect-view")],ud);const aA=te`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var bo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class Jt extends Q{constructor(){var e,n,r,i;super(),this.wallet=(e=pe.state.data)==null?void 0:e.wallet,this.connector=(n=pe.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=rt.getWalletImage(this.wallet)??rt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Pe.state.wcUri,this.error=Pe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Pe.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Pe.subscribeKey("wcError",o=>this.error=o),Pe.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),k`
      <wui-flex
        data-error=${ve(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ve(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?k`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,n;this.buffering||(Pe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=hn.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(oe.copyToClopboard(this.uri),bn.showSuccess("Link copied"))}catch{bn.showError("Failed to copy")}}}Jt.styles=aA;bo([se()],Jt.prototype,"uri",void 0);bo([se()],Jt.prototype,"error",void 0);bo([se()],Jt.prototype,"ready",void 0);bo([se()],Jt.prototype,"showRetry",void 0);bo([se()],Jt.prototype,"buffering",void 0);bo([N({type:Boolean})],Jt.prototype,"isMobile",void 0);bo([N()],Jt.prototype,"onRetry",void 0);var lA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const uA={INJECTED:"browser",ANNOUNCED:"browser"};let c2=class extends Jt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:uA[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&yn.setConnectedWalletImageUrl(this.connector.imageUrl),await Pe.connectExternal(this.connector),wt.close(),Oe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Oe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};c2=lA([K("w3m-connecting-external-view")],c2);var cA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let d2=class extends Q{constructor(){var e,n;super(...arguments),this.dappUrl=(e=$e.state.metadata)==null?void 0:e.url,this.dappName=(n=$e.state.metadata)==null?void 0:n.name}render(){return k`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?k`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&oe.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){pe.goBack()}};d2=cA([K("w3m-connecting-siwe-view")],d2);var kg=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let cd=class extends Q{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=pe.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),xa.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),k`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Pe.state;if(e||oe.isPairingExpired(n)){if(Pe.connectWalletConnect(),this.wallet){const r=rt.getWalletImage(this.wallet);r&&yn.setConnectedWalletImageUrl(r)}else{const i=vn.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=rt.getConnectorImage(i);o&&yn.setConnectedWalletImageUrl(o)}await Pe.state.wcPromise,this.finalizeConnection(),wt.close()}}catch(n){Oe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Pe.setWcError(!0),oe.isAllowedRetry(this.lastRetry)&&(bn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Pe.state;e&&yn.setWalletConnectDeepLink(e),n&&yn.setWeb3ModalRecent(n),Oe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:y})=>y).filter(Boolean),a=o?[o]:s??[],l=a.length,u=e,c=r,f=Pe.checkInstalled(a),p=l&&f,w=n&&!oe.isMobile();p&&this.platforms.push("browser"),u&&this.platforms.push(oe.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!p&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return k`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return k`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return k`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return k`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return k`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?k`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};kg([se()],cd.prototype,"platform",void 0);kg([se()],cd.prototype,"platforms",void 0);cd=kg([K("w3m-connecting-wc-view")],cd);var dA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let f2=class extends Q{constructor(){var e;super(...arguments),this.wallet=(e=pe.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return k`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?k`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?k`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?k`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?k`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&oe.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};f2=dA([K("w3m-downloads-view")],f2);var fA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const hA="https://walletconnect.com/explorer";let h2=class extends Q{render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{oe.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=Ce.state,{customWallets:r}=$e.state;return[...n,...r??[],...e].slice(0,4).map(o=>k`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ve(rt.getWalletImage(o))}
          @click=${()=>{oe.openHref(o.homepage??hA,"_blank")}}
        ></wui-list-wallet>
      `)}};h2=fA([K("w3m-get-wallet-view")],h2);const pA=te`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var hf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ks=class extends Q{constructor(){var e;super(),this.network=(e=pe.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=We.state.caipNetwork,this.unsubscribe.push(We.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&pe.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return k`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ve(rt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:k`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await We.switchActiveNetwork(this.network),pe.goBack())}catch{this.error=!0}}};ks.styles=pA;hf([se()],ks.prototype,"showRetry",void 0);hf([se()],ks.prototype,"error",void 0);hf([se()],ks.prototype,"currentNetwork",void 0);ks=hf([K("w3m-network-switch-view")],ks);var Wb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let gp=class extends Q{constructor(){super(),this.unsubscribe=[],this.caipNetwork=We.state.caipNetwork,this.unsubscribe.push(We.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Oe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),pe.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=We.state,i=e,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return k`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${ve(rt.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=De.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=We.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?await We.switchActiveNetwork(e):i&&pe.push("SwitchNetwork",{network:e}):n||(We.setCaipNetwork(e),pe.push("Connect"))}};Wb([se()],gp.prototype,"caipNetwork",void 0);gp=Wb([K("w3m-networks-view")],gp);const gA=te`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var xo=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const ju="last-transaction",mA=7;let Pr=class extends Q{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=De.state.address,this.transactions=kn.state.transactions,this.transactionsByYear=kn.state.transactionsByYear,this.loading=kn.state.loading,this.empty=kn.state.empty,this.next=kn.state.next,this.unsubscribe.push(De.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,kn.resetTransactions(),kn.fetchTransactions(e.address))}),kn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&kn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const i=r===e.length-1,o=parseInt(n,10),s=qo.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?k`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:u,type:c}=this.getTransactionListItemProps(e),f=(u==null?void 0:u.length)>1;return(u==null?void 0:u.length)===2&&!s?k`
        <wui-transaction-list-item
          date=${r}
          direction=${o}
          id=${n&&this.next?ju:""}
          status=${l}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:f?u.map((w,y)=>{const C=qo.getTransferDescription(w),_=n&&y===u.length-1;return k` <wui-transaction-list-item
          date=${r}
          direction=${w.direction}
          id=${_&&this.next?ju:""}
          status=${l}
          type=${c}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[y]]}
          .descriptions=${[C]}
        ></wui-transaction-list-item>`}):k`
      <wui-transaction-list-item
        date=${r}
        direction=${o}
        id=${n&&this.next?ju:""}
        status=${l}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,i)=>{const o=n&&i===e.length-1;return k`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return k`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(mA).fill(k` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=$e.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(kn.fetchTransactions(this.address),Oe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ju}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var l,u,c,f,p;const n=Bb.getRelativeDateFromNow((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=qo.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(u=e==null?void 0:e.transfers)==null?void 0:u[0],s=!!o&&((c=e==null?void 0:e.transfers)==null?void 0:c.every(w=>!!w.nft_info)),a=qo.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(f=e.metadata)==null?void 0:f.status,transfers:i,type:(p=e.metadata)==null?void 0:p.operationType}}};Pr.styles=gA;xo([se()],Pr.prototype,"address",void 0);xo([se()],Pr.prototype,"transactions",void 0);xo([se()],Pr.prototype,"transactionsByYear",void 0);xo([se()],Pr.prototype,"loading",void 0);xo([se()],Pr.prototype,"empty",void 0);xo([se()],Pr.prototype,"next",void 0);Pr=xo([K("w3m-transactions-view")],Pr);var wA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const yA=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let p2=class extends Q{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${yA}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{oe.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};p2=wA([K("w3m-what-is-a-network-view")],p2);var vA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const bA=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let g2=class extends Q{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${bA}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Oe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),pe.push("GetWallet")}};g2=vA([K("w3m-what-is-a-wallet-view")],g2);const xA=te`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var du=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const m2="local-paginator";let fo=class extends Q{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ce.state.wallets.length,this.wallets=Ce.state.wallets,this.recommended=Ce.state.recommended,this.featured=Ce.state.featured,this.unsubscribe.push(Ce.subscribeKey("wallets",e=>this.wallets=e),Ce.subscribeKey("recommended",e=>this.recommended=e),Ce.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return k`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await Ce.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>k`
        <wui-card-select-loader type="wallet" id=${ve(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>k`
        <wui-card-select
          imageSrc=${ve(rt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=Ce.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,m2):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${m2}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=Ce.state;s.length<o&&Ce.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=vn.state,r=n.find(({explorerId:i})=>i===e.id);r?pe.push("ConnectingExternal",{connector:r}):pe.push("ConnectingWalletConnect",{wallet:e})}};fo.styles=xA;du([se()],fo.prototype,"initial",void 0);du([se()],fo.prototype,"wallets",void 0);du([se()],fo.prototype,"recommended",void 0);du([se()],fo.prototype,"featured",void 0);fo=du([K("w3m-all-wallets-list")],fo);const CA=te`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Og=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Fl=class extends Q{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?k`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Ce.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Ce.state;return e.length?k`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(n=>k`
            <wui-card-select
              imageSrc=${ve(rt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:k`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=vn.state,r=n.find(({explorerId:i})=>i===e.id);r?pe.push("ConnectingExternal",{connector:r}):pe.push("ConnectingWalletConnect",{wallet:e})}};Fl.styles=CA;Og([se()],Fl.prototype,"loading",void 0);Og([N()],Fl.prototype,"query",void 0);Fl=Og([K("w3m-all-wallets-search")],Fl);var pf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let jl=class extends Q{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return k`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};pf([N({type:Array})],jl.prototype,"platforms",void 0);pf([N()],jl.prototype,"onSelectPlatfrom",void 0);pf([se()],jl.prototype,"buffering",void 0);jl=pf([K("w3m-connecting-header")],jl);var EA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let w2=class extends Jt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=vn.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await Pe.connectExternal(n):r&&await Pe.connectExternal(r),wt.close(),Oe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Oe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};w2=EA([K("w3m-connecting-wc-browser")],w2);var _A=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let y2=class extends Jt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=oe.formatNativeUrl(n,this.uri);Pe.setWcLinking({name:r,href:o}),Pe.setRecentWallet(this.wallet),oe.openHref(i,"_self")}catch{this.error=!0}}};y2=_A([K("w3m-connecting-wc-desktop")],y2);var SA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let v2=class extends Jt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=oe.formatNativeUrl(n,this.uri);Pe.setWcLinking({name:r,href:o}),Pe.setRecentWallet(this.wallet),oe.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=oe.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Pe.setBuffering(!0),setTimeout(()=>{Pe.setBuffering(!1)},5e3))}};v2=SA([K("w3m-connecting-wc-mobile")],v2);const $A=te`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var PA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mp=class extends Jt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),k`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Pe.setWcLinking(void 0),Pe.setRecentWallet(this.wallet),k`<wui-qr-code
      size=${e}
      theme=${hn.state.themeMode}
      uri=${this.uri}
      imageSrc=${ve(rt.getWalletImage(this.wallet))}
      alt=${ve(n)}
    ></wui-qr-code>`}};mp.styles=$A;mp=PA([K("w3m-connecting-wc-qrcode")],mp);const AA=te`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var DA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wp=class extends Q{constructor(){var e;super(...arguments),this.dappImageUrl=(e=$e.state.metadata)==null?void 0:e.icons,this.walletImageUrl=yn.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return k`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};wp.styles=AA;wp=DA([K("w3m-connecting-siwe")],wp);var kA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let b2=class extends Q{constructor(){var e;if(super(),this.wallet=(e=pe.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ve(rt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};b2=kA([K("w3m-connecting-wc-unsupported")],b2);var OA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let x2=class extends Jt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Oe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=oe.formatUniversalUrl(n,this.uri);Pe.setWcLinking({name:r,href:o}),Pe.setRecentWallet(this.wallet),oe.openHref(i,"_blank")}catch{this.error=!0}}};x2=OA([K("w3m-connecting-wc-web")],x2);const TA=te`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var gf=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function C2(){var i,o,s,a,l,u;const t=(o=(i=pe.state.data)==null?void 0:i.connector)==null?void 0:o.name,e=(a=(s=pe.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(u=(l=pe.state.data)==null?void 0:l.network)==null?void 0:u.name,r=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads",Transactions:"Activity"}}let Os=class extends Q{constructor(){super(),this.unsubscribe=[],this.heading=C2()[pe.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(pe.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${wt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Oe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),pe.push("WhatIsAWallet")}titleTemplate(){return k`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=pe.state,n=e==="Connect";return this.showBack?k`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${pe.goBack}
      ></wui-icon-link>`:k`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?k`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=C2()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=pe.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Os.styles=[TA];gf([se()],Os.prototype,"heading",void 0);gf([se()],Os.prototype,"buffering",void 0);gf([se()],Os.prototype,"showBack",void 0);Os=gf([K("w3m-header")],Os);var zb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yp=class extends Q{constructor(){super(...arguments),this.data=[]}render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>k`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>k`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};zb([N({type:Array})],yp.prototype,"data",void 0);yp=zb([K("w3m-help-widget")],yp);const IA=te`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var NA=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vp=class extends Q{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=$e.state;return!e&&!n?null:k`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=$e.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=$e.state;return e?k`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=$e.state;return e?k`<a href=${e}>Privacy Policy</a>`:null}};vp.styles=[IA];vp=NA([K("w3m-legal-footer")],vp);const RA=te`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Hb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let dd=class extends Q{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=oe.isMobile(),a=oe.isIos(),l=oe.isAndroid(),u=[n,r,o,i].filter(Boolean).length>1,c=Re.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?k`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>pe.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&o?k`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?k`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?k`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};dd.styles=[RA];Hb([N({type:Object})],dd.prototype,"wallet",void 0);dd=Hb([K("w3m-mobile-download-links")],dd);const MA=te`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Vb=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const BA={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let fd=class extends Q{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=bn.state.open,this.unsubscribe.push(bn.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=bn.state,r=BA[n];return k`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>bn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};fd.styles=MA;Vb([se()],fd.prototype,"open",void 0);fd=Vb([K("w3m-snackbar")],fd);let E2=!1;class UA{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{De.setIsConnected(n)},this.setCaipAddress=n=>{De.setCaipAddress(n)},this.setBalance=(n,r)=>{De.setBalance(n,r)},this.setProfileName=n=>{De.setProfileName(n)},this.setProfileImage=n=>{De.setProfileImage(n)},this.resetAccount=()=>{De.resetAccount()},this.setCaipNetwork=n=>{We.setCaipNetwork(n)},this.getCaipNetwork=()=>We.state.caipNetwork,this.setRequestedCaipNetworks=n=>{We.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>We.getApprovedCaipNetworksData(),this.resetNetwork=()=>{We.resetNetwork()},this.setConnectors=n=>{vn.setConnectors(n)},this.addConnector=n=>{vn.addConnector(n)},this.getConnectors=()=>vn.getConnectors(),this.resetWcConnection=()=>{Pe.resetWcConnection()},this.fetchIdentity=n=>N5.fetchIdentity(n),this.setAddressExplorerUrl=n=>{De.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{Gn.setNonce(n)},this.setSIWESession=n=>{Gn.setSession(n)},this.setSIWEStatus=n=>{Gn.setStatus(n)},this.setSIWEMessage=n=>{Gn.setMessage(n)},this.getSIWENonce=()=>Gn.state.nonce,this.getSIWESession=()=>Gn.state.session,this.getSIWEStatus=()=>Gn.state.status,this.getSIWEMessage=()=>Gn.state.message,this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),wt.open(e)}async close(){await this.initOrContinue(),wt.close()}getThemeMode(){return hn.state.themeMode}getThemeVariables(){return hn.state.themeVariables}setThemeMode(e){hn.setThemeMode(e),X5(hn.state.themeMode)}setThemeVariables(e){hn.setThemeVariables(e),N_(hn.state.themeVariables)}subscribeTheme(e){return hn.subscribe(e)}getState(){return{...ps.state}}subscribeState(e){return ps.subscribe(e)}getEvent(){return{...Oe.state}}subscribeEvents(e){return Oe.subscribe(e)}subscribeSIWEState(e){return Gn.subscribe(e)}initControllers(e){We.setClient(e.networkControllerClient),We.setDefaultCaipNetwork(e.defaultChain),$e.setProjectId(e.projectId),$e.setIncludeWalletIds(e.includeWalletIds),$e.setExcludeWalletIds(e.excludeWalletIds),$e.setFeaturedWalletIds(e.featuredWalletIds),$e.setTokens(e.tokens),$e.setTermsConditionsUrl(e.termsConditionsUrl),$e.setPrivacyPolicyUrl(e.privacyPolicyUrl),$e.setCustomWallets(e.customWallets),$e.setEnableAnalytics(e.enableAnalytics),$e.setSdkVersion(e._sdkVersion),Pe.setClient(e.connectionControllerClient),e.siweControllerClient&&Gn.setSIWEClient(e.siweControllerClient),e.metadata&&$e.setMetadata(e.metadata),e.themeMode&&hn.setThemeMode(e.themeMode),e.themeVariables&&hn.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!E2&&oe.isClient()&&(E2=!0,this.initPromise=new Promise(async e=>{await Promise.all([fs(()=>import("./index-cMc1podc.js"),__vite__mapDeps([])),fs(()=>Promise.resolve().then(()=>rA),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const we={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.4.0"},Li={ConnectorExplorerIds:{[we.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[we.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[we.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[we.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[we.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[we.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[we.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[we.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[we.INJECTED_CONNECTOR_ID]:"Browser Wallet",[we.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[we.COINBASE_CONNECTOR_ID]:"Coinbase",[we.LEDGER_CONNECTOR_ID]:"Ledger",[we.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[we.INJECTED_CONNECTOR_ID]:"INJECTED",[we.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[we.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},$o={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${we.EIP155}:${n}`]=r}),e}};function LA(t){if(t)return{id:`${we.EIP155}:${t.id}`,name:t.name,imageId:Li.EIP155NetworkImageIds[t.id]}}const FA="wagmi.wallet";class jA extends UA{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(f=>f.id===we.WALLET_CONNECT_CONNECTOR_ID))throw new Error("web3modal:constructor - WalletConnectConnector is required");const u={switchCaipNetwork:async f=>{const p=$o.caipNetworkIdToNumber(f==null?void 0:f.id);p&&await $9({chainId:p})},async getApprovedCaipNetworksData(){var p,w,y,C;const f=localStorage.getItem(FA);if(f!=null&&f.includes(we.WALLET_CONNECT_CONNECTOR_ID)){const _=n.connectors.find(E=>E.id===we.WALLET_CONNECT_CONNECTOR_ID);if(!_)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const g=(w=(p=(await _.getProvider()).signer)==null?void 0:p.session)==null?void 0:w.namespaces,v=(y=g==null?void 0:g[we.EIP155])==null?void 0:y.methods,x=(C=g==null?void 0:g[we.EIP155])==null?void 0:C.chains;return{supportsAllNetworks:v==null?void 0:v.includes(we.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},c={connectWalletConnect:async f=>{var y;const p=n.connectors.find(C=>C.id===we.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",C=>{C.type==="display_uri"&&(f(C.data),p.removeAllListeners())});const w=$o.caipNetworkIdToNumber((y=this.getCaipNetwork())==null?void 0:y.id);await Tw({connector:p,chainId:w})},connectExternal:async({id:f,provider:p,info:w})=>{var _,b;const y=n.connectors.find(g=>g.id===f);if(!y)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&w&&y.id===we.EIP6963_CONNECTOR_ID&&((_=y.setEip6963Wallet)==null||_.call(y,{provider:p,info:w}));const C=$o.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await Tw({connector:y,chainId:C})},checkInstalled:f=>{const p=this.getConnectors().filter(y=>y.type==="ANNOUNCED"),w=this.getConnectors().find(y=>y.type==="INJECTED");return f?p.length&&f.some(C=>p.some(_=>{var b;return((b=_.info)==null?void 0:b.rdns)===C}))?!0:w&&window!=null&&window.ethereum?f.some(y=>{var C;return!!((C=window.ethereum)!=null&&C[String(y)])}):!1:!!window.ethereum},disconnect:v9};super({networkControllerClient:u,connectionControllerClient:c,siweControllerClient:r,defaultChain:LA(o),tokens:$o.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${we.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(n),this.listenConnectors(n),P9(()=>this.syncAccount()),A9(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:$o.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:$o.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${we.EIP155}:${r.id}`,name:r.name,imageId:Li.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=ep(),{chain:r}=tp();if(this.resetAccount(),n&&e&&r){const i=`${we.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=ep(),{chain:r}=tp();if(r){const l=String(r.id),u=`${we.EIP155}:${l}`;if(this.setCaipNetwork({id:u,name:r.name,imageId:Li.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const c=`${we.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(c),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const f=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(f)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${we.EIP155}:${oc.id}`,address:e});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await k9({address:e,chainId:oc.id});if(n){this.setProfileName(n);const r=await D9({name:n,chainId:oc.id});r&&this.setProfileImage(r)}}}async syncBalance(e,n){var i,o,s;const r=await S9({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;r!==we.EIP6963_CONNECTOR_ID&&n.push({id:r,explorerId:Li.ConnectorExplorerIds[r],imageId:Li.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Li.ConnectorNamesMap[r]??i,type:Li.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}eip6963EventHandler(e,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(u=>u.name===o.name)||(this.addConnector({id:we.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[we.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenConnectors(e){const n=e.connectors.find(r=>r.id===we.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(we.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(we.EIP6963_REQUEST_EVENT))}}}var Wu=function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},zu=function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},uc,Br;const D0="connectedRdns";class WA extends ug{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",uc.set(this,void 0),Br.set(this,void 0),Wu(this,uc,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return zu(this,Br,"f")&&((r=this.storage)==null||r.setItem(D0,zu(this,Br,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(D0),Wu(this,Br,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(D0);if(n){if(!e||n!==e.info.rdns)return!0;Wu(this,Br,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=zu(this,Br,"f"))==null?void 0:e.provider)??zu(this,uc,"f"))}setEip6963Wallet(e){Wu(this,Br,e,"f")}}uc=new WeakMap,Br=new WeakMap;var qb={},mf={};mf.byteLength=VA;mf.toByteArray=GA;mf.fromByteArray=QA;var Jn=[],pn=[],zA=typeof Uint8Array<"u"?Uint8Array:Array,k0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Po=0,HA=k0.length;Po<HA;++Po)Jn[Po]=k0[Po],pn[k0.charCodeAt(Po)]=Po;pn[45]=62;pn[95]=63;function Gb(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function VA(t){var e=Gb(t),n=e[0],r=e[1];return(n+r)*3/4-r}function qA(t,e,n){return(e+n)*3/4-n}function GA(t){var e,n=Gb(t),r=n[0],i=n[1],o=new zA(qA(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=pn[t.charCodeAt(l)]<<18|pn[t.charCodeAt(l+1)]<<12|pn[t.charCodeAt(l+2)]<<6|pn[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=pn[t.charCodeAt(l)]<<2|pn[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=pn[t.charCodeAt(l)]<<10|pn[t.charCodeAt(l+1)]<<4|pn[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function KA(t){return Jn[t>>18&63]+Jn[t>>12&63]+Jn[t>>6&63]+Jn[t&63]}function ZA(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(KA(r));return i.join("")}function QA(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(ZA(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push(Jn[e>>2]+Jn[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(Jn[e>>10]+Jn[e>>4&63]+Jn[e<<2&63]+"=")),i.join("")}var Tg={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Tg.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,u=l>>1,c=-7,f=n?i-1:0,p=n?-1:1,w=t[e+f];for(f+=p,o=w&(1<<-c)-1,w>>=-c,c+=a;c>0;o=o*256+t[e+f],f+=p,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=r;c>0;s=s*256+t[e+f],f+=p,c-=8);if(o===0)o=1-u;else{if(o===l)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-u}return(w?-1:1)*s*Math.pow(2,o-r)};Tg.write=function(t,e,n,r,i,o){var s,a,l,u=o*8-i-1,c=(1<<u)-1,f=c>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:o-1,y=r?1:-1,C=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+f>=1?e+=p/l:e+=p*Math.pow(2,1-f),e*l>=2&&(s++,l/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(e*l-1)*Math.pow(2,i),s=s+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+w]=a&255,w+=y,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[n+w]=s&255,w+=y,s/=256,u-=8);t[n+w-y]|=C*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=mf,n=Tg,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=g,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const $=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf($,h),$.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s($){if($>i)throw new RangeError('The value "'+$+'" is invalid for option "size"');const h=new Uint8Array($);return Object.setPrototypeOf(h,a.prototype),h}function a($,h,m){if(typeof $=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f($)}return l($,h,m)}a.poolSize=8192;function l($,h,m){if(typeof $=="string")return p($,h);if(ArrayBuffer.isView($))return y($);if($==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof $);if(Ie($,ArrayBuffer)||$&&Ie($.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ie($,SharedArrayBuffer)||$&&Ie($.buffer,SharedArrayBuffer)))return C($,h,m);if(typeof $=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const A=$.valueOf&&$.valueOf();if(A!=null&&A!==$)return a.from(A,h,m);const D=_($);if(D)return D;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof $[Symbol.toPrimitive]=="function")return a.from($[Symbol.toPrimitive]("string"),h,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof $)}a.from=function($,h,m){return l($,h,m)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function u($){if(typeof $!="number")throw new TypeError('"size" argument must be of type number');if($<0)throw new RangeError('The value "'+$+'" is invalid for option "size"')}function c($,h,m){return u($),$<=0?s($):h!==void 0?typeof m=="string"?s($).fill(h,m):s($).fill(h):s($)}a.alloc=function($,h,m){return c($,h,m)};function f($){return u($),s($<0?0:b($)|0)}a.allocUnsafe=function($){return f($)},a.allocUnsafeSlow=function($){return f($)};function p($,h){if((typeof h!="string"||h==="")&&(h="utf8"),!a.isEncoding(h))throw new TypeError("Unknown encoding: "+h);const m=v($,h)|0;let A=s(m);const D=A.write($,h);return D!==m&&(A=A.slice(0,D)),A}function w($){const h=$.length<0?0:b($.length)|0,m=s(h);for(let A=0;A<h;A+=1)m[A]=$[A]&255;return m}function y($){if(Ie($,Uint8Array)){const h=new Uint8Array($);return C(h.buffer,h.byteOffset,h.byteLength)}return w($)}function C($,h,m){if(h<0||$.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if($.byteLength<h+(m||0))throw new RangeError('"length" is outside of buffer bounds');let A;return h===void 0&&m===void 0?A=new Uint8Array($):m===void 0?A=new Uint8Array($,h):A=new Uint8Array($,h,m),Object.setPrototypeOf(A,a.prototype),A}function _($){if(a.isBuffer($)){const h=b($.length)|0,m=s(h);return m.length===0||$.copy(m,0,0,h),m}if($.length!==void 0)return typeof $.length!="number"||et($.length)?s(0):w($);if($.type==="Buffer"&&Array.isArray($.data))return w($.data)}function b($){if($>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return $|0}function g($){return+$!=$&&($=0),a.alloc(+$)}a.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==a.prototype},a.compare=function(h,m){if(Ie(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),Ie(m,Uint8Array)&&(m=a.from(m,m.offset,m.byteLength)),!a.isBuffer(h)||!a.isBuffer(m))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===m)return 0;let A=h.length,D=m.length;for(let R=0,B=Math.min(A,D);R<B;++R)if(h[R]!==m[R]){A=h[R],D=m[R];break}return A<D?-1:D<A?1:0},a.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(h,m){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return a.alloc(0);let A;if(m===void 0)for(m=0,A=0;A<h.length;++A)m+=h[A].length;const D=a.allocUnsafe(m);let R=0;for(A=0;A<h.length;++A){let B=h[A];if(Ie(B,Uint8Array))R+B.length>D.length?(a.isBuffer(B)||(B=a.from(B)),B.copy(D,R)):Uint8Array.prototype.set.call(D,B,R);else if(a.isBuffer(B))B.copy(D,R);else throw new TypeError('"list" argument must be an Array of Buffers');R+=B.length}return D};function v($,h){if(a.isBuffer($))return $.length;if(ArrayBuffer.isView($)||Ie($,ArrayBuffer))return $.byteLength;if(typeof $!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof $);const m=$.length,A=arguments.length>2&&arguments[2]===!0;if(!A&&m===0)return 0;let D=!1;for(;;)switch(h){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return Nr($).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m*2;case"hex":return m>>>1;case"base64":return st($).length;default:if(D)return A?-1:Nr($).length;h=(""+h).toLowerCase(),D=!0}}a.byteLength=v;function x($,h,m){let A=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((m===void 0||m>this.length)&&(m=this.length),m<=0)||(m>>>=0,h>>>=0,m<=h))return"";for($||($="utf8");;)switch($){case"hex":return j(this,h,m);case"utf8":case"utf-8":return z(this,h,m);case"ascii":return L(this,h,m);case"latin1":case"binary":return I(this,h,m);case"base64":return X(this,h,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,h,m);default:if(A)throw new TypeError("Unknown encoding: "+$);$=($+"").toLowerCase(),A=!0}}a.prototype._isBuffer=!0;function E($,h,m){const A=$[h];$[h]=$[m],$[m]=A}a.prototype.swap16=function(){const h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let m=0;m<h;m+=2)E(this,m,m+1);return this},a.prototype.swap32=function(){const h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let m=0;m<h;m+=4)E(this,m,m+3),E(this,m+1,m+2);return this},a.prototype.swap64=function(){const h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let m=0;m<h;m+=8)E(this,m,m+7),E(this,m+1,m+6),E(this,m+2,m+5),E(this,m+3,m+4);return this},a.prototype.toString=function(){const h=this.length;return h===0?"":arguments.length===0?z(this,0,h):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(h){if(!a.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:a.compare(this,h)===0},a.prototype.inspect=function(){let h="";const m=t.INSPECT_MAX_BYTES;return h=this.toString("hex",0,m).replace(/(.{2})/g,"$1 ").trim(),this.length>m&&(h+=" ... "),"<Buffer "+h+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(h,m,A,D,R){if(Ie(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(m===void 0&&(m=0),A===void 0&&(A=h?h.length:0),D===void 0&&(D=0),R===void 0&&(R=this.length),m<0||A>h.length||D<0||R>this.length)throw new RangeError("out of range index");if(D>=R&&m>=A)return 0;if(D>=R)return-1;if(m>=A)return 1;if(m>>>=0,A>>>=0,D>>>=0,R>>>=0,this===h)return 0;let B=R-D,re=A-m;const ye=Math.min(B,re),je=this.slice(D,R),Ke=h.slice(m,A);for(let Ne=0;Ne<ye;++Ne)if(je[Ne]!==Ke[Ne]){B=je[Ne],re=Ke[Ne];break}return B<re?-1:re<B?1:0};function S($,h,m,A,D){if($.length===0)return-1;if(typeof m=="string"?(A=m,m=0):m>2147483647?m=2147483647:m<-2147483648&&(m=-2147483648),m=+m,et(m)&&(m=D?0:$.length-1),m<0&&(m=$.length+m),m>=$.length){if(D)return-1;m=$.length-1}else if(m<0)if(D)m=0;else return-1;if(typeof h=="string"&&(h=a.from(h,A)),a.isBuffer(h))return h.length===0?-1:d($,h,m,A,D);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?D?Uint8Array.prototype.indexOf.call($,h,m):Uint8Array.prototype.lastIndexOf.call($,h,m):d($,[h],m,A,D);throw new TypeError("val must be string, number or Buffer")}function d($,h,m,A,D){let R=1,B=$.length,re=h.length;if(A!==void 0&&(A=String(A).toLowerCase(),A==="ucs2"||A==="ucs-2"||A==="utf16le"||A==="utf-16le")){if($.length<2||h.length<2)return-1;R=2,B/=2,re/=2,m/=2}function ye(Ke,Ne){return R===1?Ke[Ne]:Ke.readUInt16BE(Ne*R)}let je;if(D){let Ke=-1;for(je=m;je<B;je++)if(ye($,je)===ye(h,Ke===-1?0:je-Ke)){if(Ke===-1&&(Ke=je),je-Ke+1===re)return Ke*R}else Ke!==-1&&(je-=je-Ke),Ke=-1}else for(m+re>B&&(m=B-re),je=m;je>=0;je--){let Ke=!0;for(let Ne=0;Ne<re;Ne++)if(ye($,je+Ne)!==ye(h,Ne)){Ke=!1;break}if(Ke)return je}return-1}a.prototype.includes=function(h,m,A){return this.indexOf(h,m,A)!==-1},a.prototype.indexOf=function(h,m,A){return S(this,h,m,A,!0)},a.prototype.lastIndexOf=function(h,m,A){return S(this,h,m,A,!1)};function P($,h,m,A){m=Number(m)||0;const D=$.length-m;A?(A=Number(A),A>D&&(A=D)):A=D;const R=h.length;A>R/2&&(A=R/2);let B;for(B=0;B<A;++B){const re=parseInt(h.substr(B*2,2),16);if(et(re))return B;$[m+B]=re}return B}function O($,h,m,A){return Qe(Nr(h,$.length-m),$,m,A)}function T($,h,m,A){return Qe(Qs(h),$,m,A)}function M($,h,m,A){return Qe(st(h),$,m,A)}function Y($,h,m,A){return Qe(mu(h,$.length-m),$,m,A)}a.prototype.write=function(h,m,A,D){if(m===void 0)D="utf8",A=this.length,m=0;else if(A===void 0&&typeof m=="string")D=m,A=this.length,m=0;else if(isFinite(m))m=m>>>0,isFinite(A)?(A=A>>>0,D===void 0&&(D="utf8")):(D=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const R=this.length-m;if((A===void 0||A>R)&&(A=R),h.length>0&&(A<0||m<0)||m>this.length)throw new RangeError("Attempt to write outside buffer bounds");D||(D="utf8");let B=!1;for(;;)switch(D){case"hex":return P(this,h,m,A);case"utf8":case"utf-8":return O(this,h,m,A);case"ascii":case"latin1":case"binary":return T(this,h,m,A);case"base64":return M(this,h,m,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,h,m,A);default:if(B)throw new TypeError("Unknown encoding: "+D);D=(""+D).toLowerCase(),B=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function X($,h,m){return h===0&&m===$.length?e.fromByteArray($):e.fromByteArray($.slice(h,m))}function z($,h,m){m=Math.min($.length,m);const A=[];let D=h;for(;D<m;){const R=$[D];let B=null,re=R>239?4:R>223?3:R>191?2:1;if(D+re<=m){let ye,je,Ke,Ne;switch(re){case 1:R<128&&(B=R);break;case 2:ye=$[D+1],(ye&192)===128&&(Ne=(R&31)<<6|ye&63,Ne>127&&(B=Ne));break;case 3:ye=$[D+1],je=$[D+2],(ye&192)===128&&(je&192)===128&&(Ne=(R&15)<<12|(ye&63)<<6|je&63,Ne>2047&&(Ne<55296||Ne>57343)&&(B=Ne));break;case 4:ye=$[D+1],je=$[D+2],Ke=$[D+3],(ye&192)===128&&(je&192)===128&&(Ke&192)===128&&(Ne=(R&15)<<18|(ye&63)<<12|(je&63)<<6|Ke&63,Ne>65535&&Ne<1114112&&(B=Ne))}}B===null?(B=65533,re=1):B>65535&&(B-=65536,A.push(B>>>10&1023|55296),B=56320|B&1023),A.push(B),D+=re}return U(A)}const F=4096;function U($){const h=$.length;if(h<=F)return String.fromCharCode.apply(String,$);let m="",A=0;for(;A<h;)m+=String.fromCharCode.apply(String,$.slice(A,A+=F));return m}function L($,h,m){let A="";m=Math.min($.length,m);for(let D=h;D<m;++D)A+=String.fromCharCode($[D]&127);return A}function I($,h,m){let A="";m=Math.min($.length,m);for(let D=h;D<m;++D)A+=String.fromCharCode($[D]);return A}function j($,h,m){const A=$.length;(!h||h<0)&&(h=0),(!m||m<0||m>A)&&(m=A);let D="";for(let R=h;R<m;++R)D+=dt[$[R]];return D}function W($,h,m){const A=$.slice(h,m);let D="";for(let R=0;R<A.length-1;R+=2)D+=String.fromCharCode(A[R]+A[R+1]*256);return D}a.prototype.slice=function(h,m){const A=this.length;h=~~h,m=m===void 0?A:~~m,h<0?(h+=A,h<0&&(h=0)):h>A&&(h=A),m<0?(m+=A,m<0&&(m=0)):m>A&&(m=A),m<h&&(m=h);const D=this.subarray(h,m);return Object.setPrototypeOf(D,a.prototype),D};function V($,h,m){if($%1!==0||$<0)throw new RangeError("offset is not uint");if($+h>m)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(h,m,A){h=h>>>0,m=m>>>0,A||V(h,m,this.length);let D=this[h],R=1,B=0;for(;++B<m&&(R*=256);)D+=this[h+B]*R;return D},a.prototype.readUintBE=a.prototype.readUIntBE=function(h,m,A){h=h>>>0,m=m>>>0,A||V(h,m,this.length);let D=this[h+--m],R=1;for(;m>0&&(R*=256);)D+=this[h+--m]*R;return D},a.prototype.readUint8=a.prototype.readUInt8=function(h,m){return h=h>>>0,m||V(h,1,this.length),this[h]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(h,m){return h=h>>>0,m||V(h,2,this.length),this[h]|this[h+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(h,m){return h=h>>>0,m||V(h,2,this.length),this[h]<<8|this[h+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(h,m){return h=h>>>0,m||V(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(h,m){return h=h>>>0,m||V(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},a.prototype.readBigUInt64LE=Ue(function(h){h=h>>>0,xe(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Xt(h,this.length-8);const D=m+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24,R=this[++h]+this[++h]*2**8+this[++h]*2**16+A*2**24;return BigInt(D)+(BigInt(R)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ue(function(h){h=h>>>0,xe(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Xt(h,this.length-8);const D=m*2**24+this[++h]*2**16+this[++h]*2**8+this[++h],R=this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+A;return(BigInt(D)<<BigInt(32))+BigInt(R)}),a.prototype.readIntLE=function(h,m,A){h=h>>>0,m=m>>>0,A||V(h,m,this.length);let D=this[h],R=1,B=0;for(;++B<m&&(R*=256);)D+=this[h+B]*R;return R*=128,D>=R&&(D-=Math.pow(2,8*m)),D},a.prototype.readIntBE=function(h,m,A){h=h>>>0,m=m>>>0,A||V(h,m,this.length);let D=m,R=1,B=this[h+--D];for(;D>0&&(R*=256);)B+=this[h+--D]*R;return R*=128,B>=R&&(B-=Math.pow(2,8*m)),B},a.prototype.readInt8=function(h,m){return h=h>>>0,m||V(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},a.prototype.readInt16LE=function(h,m){h=h>>>0,m||V(h,2,this.length);const A=this[h]|this[h+1]<<8;return A&32768?A|4294901760:A},a.prototype.readInt16BE=function(h,m){h=h>>>0,m||V(h,2,this.length);const A=this[h+1]|this[h]<<8;return A&32768?A|4294901760:A},a.prototype.readInt32LE=function(h,m){return h=h>>>0,m||V(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},a.prototype.readInt32BE=function(h,m){return h=h>>>0,m||V(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},a.prototype.readBigInt64LE=Ue(function(h){h=h>>>0,xe(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Xt(h,this.length-8);const D=this[h+4]+this[h+5]*2**8+this[h+6]*2**16+(A<<24);return(BigInt(D)<<BigInt(32))+BigInt(m+this[++h]*2**8+this[++h]*2**16+this[++h]*2**24)}),a.prototype.readBigInt64BE=Ue(function(h){h=h>>>0,xe(h,"offset");const m=this[h],A=this[h+7];(m===void 0||A===void 0)&&Xt(h,this.length-8);const D=(m<<24)+this[++h]*2**16+this[++h]*2**8+this[++h];return(BigInt(D)<<BigInt(32))+BigInt(this[++h]*2**24+this[++h]*2**16+this[++h]*2**8+A)}),a.prototype.readFloatLE=function(h,m){return h=h>>>0,m||V(h,4,this.length),n.read(this,h,!0,23,4)},a.prototype.readFloatBE=function(h,m){return h=h>>>0,m||V(h,4,this.length),n.read(this,h,!1,23,4)},a.prototype.readDoubleLE=function(h,m){return h=h>>>0,m||V(h,8,this.length),n.read(this,h,!0,52,8)},a.prototype.readDoubleBE=function(h,m){return h=h>>>0,m||V(h,8,this.length),n.read(this,h,!1,52,8)};function Z($,h,m,A,D,R){if(!a.isBuffer($))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>D||h<R)throw new RangeError('"value" argument is out of bounds');if(m+A>$.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(h,m,A,D){if(h=+h,m=m>>>0,A=A>>>0,!D){const re=Math.pow(2,8*A)-1;Z(this,h,m,A,re,0)}let R=1,B=0;for(this[m]=h&255;++B<A&&(R*=256);)this[m+B]=h/R&255;return m+A},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(h,m,A,D){if(h=+h,m=m>>>0,A=A>>>0,!D){const re=Math.pow(2,8*A)-1;Z(this,h,m,A,re,0)}let R=A-1,B=1;for(this[m+R]=h&255;--R>=0&&(B*=256);)this[m+R]=h/B&255;return m+A},a.prototype.writeUint8=a.prototype.writeUInt8=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,1,255,0),this[m]=h&255,m+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,2,65535,0),this[m]=h&255,this[m+1]=h>>>8,m+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,2,65535,0),this[m]=h>>>8,this[m+1]=h&255,m+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,4,4294967295,0),this[m+3]=h>>>24,this[m+2]=h>>>16,this[m+1]=h>>>8,this[m]=h&255,m+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,4,4294967295,0),this[m]=h>>>24,this[m+1]=h>>>16,this[m+2]=h>>>8,this[m+3]=h&255,m+4};function q($,h,m,A,D){_e(h,A,D,$,m,7);let R=Number(h&BigInt(4294967295));$[m++]=R,R=R>>8,$[m++]=R,R=R>>8,$[m++]=R,R=R>>8,$[m++]=R;let B=Number(h>>BigInt(32)&BigInt(4294967295));return $[m++]=B,B=B>>8,$[m++]=B,B=B>>8,$[m++]=B,B=B>>8,$[m++]=B,m}function ee($,h,m,A,D){_e(h,A,D,$,m,7);let R=Number(h&BigInt(4294967295));$[m+7]=R,R=R>>8,$[m+6]=R,R=R>>8,$[m+5]=R,R=R>>8,$[m+4]=R;let B=Number(h>>BigInt(32)&BigInt(4294967295));return $[m+3]=B,B=B>>8,$[m+2]=B,B=B>>8,$[m+1]=B,B=B>>8,$[m]=B,m+8}a.prototype.writeBigUInt64LE=Ue(function(h,m=0){return q(this,h,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ue(function(h,m=0){return ee(this,h,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(h,m,A,D){if(h=+h,m=m>>>0,!D){const ye=Math.pow(2,8*A-1);Z(this,h,m,A,ye-1,-ye)}let R=0,B=1,re=0;for(this[m]=h&255;++R<A&&(B*=256);)h<0&&re===0&&this[m+R-1]!==0&&(re=1),this[m+R]=(h/B>>0)-re&255;return m+A},a.prototype.writeIntBE=function(h,m,A,D){if(h=+h,m=m>>>0,!D){const ye=Math.pow(2,8*A-1);Z(this,h,m,A,ye-1,-ye)}let R=A-1,B=1,re=0;for(this[m+R]=h&255;--R>=0&&(B*=256);)h<0&&re===0&&this[m+R+1]!==0&&(re=1),this[m+R]=(h/B>>0)-re&255;return m+A},a.prototype.writeInt8=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,1,127,-128),h<0&&(h=255+h+1),this[m]=h&255,m+1},a.prototype.writeInt16LE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,2,32767,-32768),this[m]=h&255,this[m+1]=h>>>8,m+2},a.prototype.writeInt16BE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,2,32767,-32768),this[m]=h>>>8,this[m+1]=h&255,m+2},a.prototype.writeInt32LE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,4,2147483647,-2147483648),this[m]=h&255,this[m+1]=h>>>8,this[m+2]=h>>>16,this[m+3]=h>>>24,m+4},a.prototype.writeInt32BE=function(h,m,A){return h=+h,m=m>>>0,A||Z(this,h,m,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[m]=h>>>24,this[m+1]=h>>>16,this[m+2]=h>>>8,this[m+3]=h&255,m+4},a.prototype.writeBigInt64LE=Ue(function(h,m=0){return q(this,h,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ue(function(h,m=0){return ee(this,h,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ie($,h,m,A,D,R){if(m+A>$.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("Index out of range")}function ae($,h,m,A,D){return h=+h,m=m>>>0,D||ie($,h,m,4),n.write($,h,m,A,23,4),m+4}a.prototype.writeFloatLE=function(h,m,A){return ae(this,h,m,!0,A)},a.prototype.writeFloatBE=function(h,m,A){return ae(this,h,m,!1,A)};function ue($,h,m,A,D){return h=+h,m=m>>>0,D||ie($,h,m,8),n.write($,h,m,A,52,8),m+8}a.prototype.writeDoubleLE=function(h,m,A){return ue(this,h,m,!0,A)},a.prototype.writeDoubleBE=function(h,m,A){return ue(this,h,m,!1,A)},a.prototype.copy=function(h,m,A,D){if(!a.isBuffer(h))throw new TypeError("argument should be a Buffer");if(A||(A=0),!D&&D!==0&&(D=this.length),m>=h.length&&(m=h.length),m||(m=0),D>0&&D<A&&(D=A),D===A||h.length===0||this.length===0)return 0;if(m<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(D<0)throw new RangeError("sourceEnd out of bounds");D>this.length&&(D=this.length),h.length-m<D-A&&(D=h.length-m+A);const R=D-A;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(m,A,D):Uint8Array.prototype.set.call(h,this.subarray(A,D),m),R},a.prototype.fill=function(h,m,A,D){if(typeof h=="string"){if(typeof m=="string"?(D=m,m=0,A=this.length):typeof A=="string"&&(D=A,A=this.length),D!==void 0&&typeof D!="string")throw new TypeError("encoding must be a string");if(typeof D=="string"&&!a.isEncoding(D))throw new TypeError("Unknown encoding: "+D);if(h.length===1){const B=h.charCodeAt(0);(D==="utf8"&&B<128||D==="latin1")&&(h=B)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(m<0||this.length<m||this.length<A)throw new RangeError("Out of range index");if(A<=m)return this;m=m>>>0,A=A===void 0?this.length:A>>>0,h||(h=0);let R;if(typeof h=="number")for(R=m;R<A;++R)this[R]=h;else{const B=a.isBuffer(h)?h:a.from(h,D),re=B.length;if(re===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(R=0;R<A-m;++R)this[R+m]=B[R%re]}return this};const fe={};function me($,h,m){fe[$]=class extends m{constructor(){super(),Object.defineProperty(this,"message",{value:h.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${$}]`,this.stack,delete this.name}get code(){return $}set code(D){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:D,writable:!0})}toString(){return`${this.name} [${$}]: ${this.message}`}}}me("ERR_BUFFER_OUT_OF_BOUNDS",function($){return $?`${$} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),me("ERR_INVALID_ARG_TYPE",function($,h){return`The "${$}" argument must be of type number. Received type ${typeof h}`},TypeError),me("ERR_OUT_OF_RANGE",function($,h,m){let A=`The value of "${$}" is out of range.`,D=m;return Number.isInteger(m)&&Math.abs(m)>2**32?D=ce(String(m)):typeof m=="bigint"&&(D=String(m),(m>BigInt(2)**BigInt(32)||m<-(BigInt(2)**BigInt(32)))&&(D=ce(D)),D+="n"),A+=` It must be ${h}. Received ${D}`,A},RangeError);function ce($){let h="",m=$.length;const A=$[0]==="-"?1:0;for(;m>=A+4;m-=3)h=`_${$.slice(m-3,m)}${h}`;return`${$.slice(0,m)}${h}`}function be($,h,m){xe(h,"offset"),($[h]===void 0||$[h+m]===void 0)&&Xt(h,$.length-(m+1))}function _e($,h,m,A,D,R){if($>m||$<h){const B=typeof h=="bigint"?"n":"";let re;throw R>3?h===0||h===BigInt(0)?re=`>= 0${B} and < 2${B} ** ${(R+1)*8}${B}`:re=`>= -(2${B} ** ${(R+1)*8-1}${B}) and < 2 ** ${(R+1)*8-1}${B}`:re=`>= ${h}${B} and <= ${m}${B}`,new fe.ERR_OUT_OF_RANGE("value",re,$)}be(A,D,R)}function xe($,h){if(typeof $!="number")throw new fe.ERR_INVALID_ARG_TYPE(h,"number",$)}function Xt($,h,m){throw Math.floor($)!==$?(xe($,m),new fe.ERR_OUT_OF_RANGE(m||"offset","an integer",$)):h<0?new fe.ERR_BUFFER_OUT_OF_BOUNDS:new fe.ERR_OUT_OF_RANGE(m||"offset",`>= ${m?1:0} and <= ${h}`,$)}const Ir=/[^+/0-9A-Za-z-_]/g;function Oi($){if($=$.split("=")[0],$=$.trim().replace(Ir,""),$.length<2)return"";for(;$.length%4!==0;)$=$+"=";return $}function Nr($,h){h=h||1/0;let m;const A=$.length;let D=null;const R=[];for(let B=0;B<A;++B){if(m=$.charCodeAt(B),m>55295&&m<57344){if(!D){if(m>56319){(h-=3)>-1&&R.push(239,191,189);continue}else if(B+1===A){(h-=3)>-1&&R.push(239,191,189);continue}D=m;continue}if(m<56320){(h-=3)>-1&&R.push(239,191,189),D=m;continue}m=(D-55296<<10|m-56320)+65536}else D&&(h-=3)>-1&&R.push(239,191,189);if(D=null,m<128){if((h-=1)<0)break;R.push(m)}else if(m<2048){if((h-=2)<0)break;R.push(m>>6|192,m&63|128)}else if(m<65536){if((h-=3)<0)break;R.push(m>>12|224,m>>6&63|128,m&63|128)}else if(m<1114112){if((h-=4)<0)break;R.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)}else throw new Error("Invalid code point")}return R}function Qs($){const h=[];for(let m=0;m<$.length;++m)h.push($.charCodeAt(m)&255);return h}function mu($,h){let m,A,D;const R=[];for(let B=0;B<$.length&&!((h-=2)<0);++B)m=$.charCodeAt(B),A=m>>8,D=m%256,R.push(D),R.push(A);return R}function st($){return e.toByteArray(Oi($))}function Qe($,h,m,A){let D;for(D=0;D<A&&!(D+m>=h.length||D>=$.length);++D)h[D+m]=$[D];return D}function Ie($,h){return $ instanceof h||$!=null&&$.constructor!=null&&$.constructor.name!=null&&$.constructor.name===h.name}function et($){return $!==$}const dt=function(){const $="0123456789abcdef",h=new Array(256);for(let m=0;m<16;++m){const A=m*16;for(let D=0;D<16;++D)h[A+D]=$[m]+$[D]}return h}();function Ue($){return typeof BigInt>"u"?ft:$}function ft(){throw new Error("BigInt not supported")}})(qb);var py;typeof window<"u"&&(window.Buffer||(window.Buffer=qb.Buffer),window.global||(window.global=window),window.process||(window.process={}),(py=window.process)!=null&&py.env||(window.process={env:{}}));function YA({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(t){const s=a=>{try{t.setItem(e,r(a));return}catch(l){return l}};return{persistClient:JA(a=>{let l=a,u=s(l),c=0;for(;u&&l;)c++,l=o==null?void 0:o({persistedClient:l,error:u,errorCount:c}),l&&(u=s(l))},n),restoreClient:()=>{const a=t.getItem(e);if(a)return i(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:_2,restoreClient:()=>{},removeClient:_2}}function JA(t,e=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{t(...r),n=null},e))}}function _2(){}class wf{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Ig=typeof window>"u"||"Deno"in window;function Tn(){}function XA(t,e){return typeof t=="function"?t(e):t}function eD(t){return typeof t=="number"&&t>=0&&t!==1/0}function tD(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Hu(t,e,n){return yf(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function jr(t,e,n){return yf(t)?[{...e,queryKey:t},n]:[t||{},e]}function S2(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(yf(s)){if(r){if(e.queryHash!==Ng(s,e.options))return!1}else if(!hd(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||o&&!o(e))}function $2(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:o}=t;if(yf(o)){if(!e.options.mutationKey)return!1;if(n){if(Vi(e.options.mutationKey)!==Vi(o))return!1}else if(!hd(e.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Ng(t,e){return((e==null?void 0:e.queryKeyHashFn)||Vi)(t)}function Vi(t){return JSON.stringify(t,(e,n)=>bp(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function hd(t,e){return Kb(t,e)}function Kb(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Kb(t[n],e[n])):!1}function Zb(t,e){if(t===e)return t;const n=P2(t)&&P2(e);if(n||bp(t)&&bp(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const u=n?l:i[l];s[u]=Zb(t[u],e[u]),s[u]===t[u]&&a++}return r===o&&a===r?t:s}return e}function P2(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function bp(t){if(!A2(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!A2(n)||!n.hasOwnProperty("isPrototypeOf"))}function A2(t){return Object.prototype.toString.call(t)==="[object Object]"}function yf(t){return Array.isArray(t)}function Qb(t){return new Promise(e=>{setTimeout(e,t)})}function D2(t){Qb(0).then(t)}function nD(){if(typeof AbortController=="function")return new AbortController}function rD(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Zb(t,e):e}class iD extends wf{constructor(){super(),this.setup=e=>{if(!Ig&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const xp=new iD,k2=["online","offline"];class oD extends wf{constructor(){super(),this.setup=e=>{if(!Ig&&window.addEventListener){const n=()=>e();return k2.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{k2.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const pd=new oD;function sD(t){return Math.min(1e3*2**t,3e4)}function Rg(t){return(t??"online")==="online"?pd.isOnline():!0}class Yb{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function O0(t){return t instanceof Yb}function Jb(t){let e=!1,n=0,r=!1,i,o,s;const a=new Promise((_,b)=>{o=_,s=b}),l=_=>{r||(w(new Yb(_)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},f=()=>!xp.isFocused()||t.networkMode!=="always"&&!pd.isOnline(),p=_=>{r||(r=!0,t.onSuccess==null||t.onSuccess(_),i==null||i(),o(_))},w=_=>{r||(r=!0,t.onError==null||t.onError(_),i==null||i(),s(_))},y=()=>new Promise(_=>{i=b=>{const g=r||!f();return g&&_(b),g},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),C=()=>{if(r)return;let _;try{_=t.fn()}catch(b){_=Promise.reject(b)}Promise.resolve(_).then(p).catch(b=>{var g,v;if(r)return;const x=(g=t.retry)!=null?g:3,E=(v=t.retryDelay)!=null?v:sD,S=typeof E=="function"?E(n,b):E,d=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(e||!d){w(b);return}n++,t.onFail==null||t.onFail(n,b),Qb(S).then(()=>{if(f())return y()}).then(()=>{e?w(b):C()})})};return Rg(t.networkMode)?C():y().then(C),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:u,continueRetry:c}}const Mg=console;function aD(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let f;e++;try{f=c()}finally{e--,e||a()}return f},o=c=>{e?t.push(c):D2(()=>{n(c)})},s=c=>(...f)=>{o(()=>{c(...f)})},a=()=>{const c=t;t=[],c.length&&D2(()=>{r(()=>{c.forEach(f=>{n(f)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const It=aD();class Xb{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),eD(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Ig?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class lD extends Xb{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Mg,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||uD(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=rD(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(Tn).catch(Tn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!tD(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const w=this.observers.find(y=>y.options.queryFn);w&&this.setOptions(w.options)}const s=nD(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(l(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var f;this.dispatch({type:"fetch",meta:(f=c.fetchOptions)==null?void 0:f.meta})}const p=w=>{if(O0(w)&&w.silent||this.dispatch({type:"error",error:w}),!O0(w)){var y,C,_,b;(y=(C=this.cache.config).onError)==null||y.call(C,w,this),(_=(b=this.cache.config).onSettled)==null||_.call(b,this.state.data,w,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Jb({fn:c.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:w=>{var y,C,_,b;if(typeof w>"u"){p(new Error(this.queryHash+" data is undefined"));return}this.setData(w),(y=(C=this.cache.config).onSuccess)==null||y.call(C,w,this),(_=(b=this.cache.config).onSettled)==null||_.call(b,w,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(w,y)=>{this.dispatch({type:"failed",failureCount:w,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,o;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Rg(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=e.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return O0(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),It.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function uD(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class cD extends wf{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:Ng(o,n);let a=this.get(s);return a||(a=new lD({cache:this,logger:e.getLogger(),queryKey:o,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){It.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=jr(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>S2(r,i))}findAll(e,n){const[r]=jr(e,n);return Object.keys(r).length>0?this.queries.filter(i=>S2(r,i)):this.queries}notify(e){It.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){It.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){It.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class dD extends Xb{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Mg,this.observers=[],this.state=e.state||fD(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var d;return this.retryer=Jb({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(P,O)=>{this.dispatch({type:"failed",failureCount:P,error:O})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(d=this.options.retry)!=null?d:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,u,c;if(!n){var f,p,w,y;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(p=this.mutationCache.config).onMutate)==null?void 0:f.call(p,this.state.variables,this));const P=await((w=(y=this.options).onMutate)==null?void 0:w.call(y,this.state.variables));P!==this.state.context&&this.dispatch({type:"loading",context:P,variables:this.state.variables})}const d=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,d,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,d,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,d,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(d){try{var C,_,b,g,v,x,E,S;throw await((C=(_=this.mutationCache.config).onError)==null?void 0:C.call(_,d,this.state.variables,this.state.context,this)),await((b=(g=this.options).onError)==null?void 0:b.call(g,d,this.state.variables,this.state.context)),await((v=(x=this.mutationCache.config).onSettled)==null?void 0:v.call(x,void 0,d,this.state.variables,this.state.context,this)),await((E=(S=this.options).onSettled)==null?void 0:E.call(S,void 0,d,this.state.variables,this.state.context)),d}finally{this.dispatch({type:"error",error:d})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Rg(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),It.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function fD(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class hD extends wf{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new dD({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){It.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>$2(e,n))}findAll(e){return this.mutations.filter(n=>$2(e,n))}notify(e){It.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return It.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(Tn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function pD(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,o,s;const a=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,l=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=l==null?void 0:l.pageParam,c=(l==null?void 0:l.direction)==="forward",f=(l==null?void 0:l.direction)==="backward",p=((o=t.state.data)==null?void 0:o.pages)||[],w=((s=t.state.data)==null?void 0:s.pageParams)||[];let y=w,C=!1;const _=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>{var d;if((d=t.signal)!=null&&d.aborted)C=!0;else{var P;(P=t.signal)==null||P.addEventListener("abort",()=>{C=!0})}return t.signal}})},b=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),g=(S,d,P,O)=>(y=O?[d,...y]:[...y,d],O?[P,...S]:[...S,P]),v=(S,d,P,O)=>{if(C)return Promise.reject("Cancelled");if(typeof P>"u"&&!d&&S.length)return Promise.resolve(S);const T={queryKey:t.queryKey,pageParam:P,meta:t.options.meta};_(T);const M=b(T);return Promise.resolve(M).then(X=>g(S,P,X,O))};let x;if(!p.length)x=v([]);else if(c){const S=typeof u<"u",d=S?u:O2(t.options,p);x=v(p,S,d)}else if(f){const S=typeof u<"u",d=S?u:gD(t.options,p);x=v(p,S,d,!0)}else{y=[];const S=typeof t.options.getNextPageParam>"u";x=(a&&p[0]?a(p[0],0,p):!0)?v([],S,w[0]):Promise.resolve(g([],w[0],p[0]));for(let P=1;P<p.length;P++)x=x.then(O=>{if(a&&p[P]?a(p[P],P,p):!0){const M=S?w[P]:O2(t.options,O);return v(O,S,M)}return Promise.resolve(g(O,w[P],p[P]))})}return x.then(S=>({pages:S,pageParams:y}))}}}}function O2(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function gD(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class mD{constructor(e={}){this.queryCache=e.queryCache||new cD,this.mutationCache=e.mutationCache||new hD,this.logger=e.logger||Mg,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=xp.subscribe(()=>{xp.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=pd.subscribe(()=>{pd.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=jr(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Hu(e,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),o=i==null?void 0:i.state.data,s=XA(n,o);if(typeof s>"u")return;const a=Hu(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(e,n,r){return It.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=jr(e,n),i=this.queryCache;It.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(e,n,r){const[i,o]=jr(e,n,r),s=this.queryCache,a={type:"active",...i};return It.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(e,n,r){const[i,o={}]=jr(e,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=It.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(Tn).catch(Tn)}invalidateQueries(e,n,r){const[i,o]=jr(e,n,r);return It.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(e,n,r){const[i,o]=jr(e,n,r),s=It.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var u;return l.fetch(void 0,{...o,cancelRefetch:(u=o==null?void 0:o.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(Tn);return o!=null&&o.throwOnError||(a=a.catch(Tn)),a}fetchQuery(e,n,r){const i=Hu(e,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(Tn).catch(Tn)}fetchInfiniteQuery(e,n,r){const i=Hu(e,n,r);return i.behavior=pD(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(Tn).catch(Tn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>Vi(e)===Vi(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>hd(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>Vi(e)===Vi(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>hd(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Ng(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function wD(t){return{mutationKey:t.options.mutationKey,state:t.state}}function yD(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function vD(t){return t.state.isPaused}function bD(t){return t.state.status==="success"}function xD(t,e={}){const n=[],r=[];if(e.dehydrateMutations!==!1){const i=e.shouldDehydrateMutation||vD;t.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(wD(o))})}if(e.dehydrateQueries!==!1){const i=e.shouldDehydrateQuery||bD;t.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(yD(o))})}return{mutations:n,queries:r}}function CD(t,e,n){if(typeof e!="object"||e===null)return;const r=t.getMutationCache(),i=t.getQueryCache(),o=e.mutations||[],s=e.queries||[];o.forEach(a=>{var l;r.build(t,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:u})=>{var c;const f=i.get(u);if(f){if(f.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:p,...w}=l;f.setState(w)}return}i.build(t,{...n==null||(c=n.defaultOptions)==null?void 0:c.queries,queryKey:a,queryHash:u},{...l,fetchStatus:"idle"})})}const T2=Xe.createContext(void 0),ED=Xe.createContext(!1);function _D(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=T2),window.ReactQueryClientContext):T2)}const SD=({client:t,children:e,context:n,contextSharing:r=!1})=>{Xe.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=_D(n,r);return Xe.createElement(ED.Provider,{value:!n&&r},Xe.createElement(i.Provider,{value:t},e))},$D=["added","removed","updated"];function I2(t){return $D.includes(t)}async function PD({queryClient:t,persister:e,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await e.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?e.removeClient():CD(t,o.clientState,i)}else e.removeClient()}catch{e.removeClient()}}async function N2({queryClient:t,persister:e,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:xD(t,r)};await e.persistClient(i)}function AD(t){const e=t.queryClient.getQueryCache().subscribe(r=>{I2(r.type)&&N2(t)}),n=t.queryClient.getMutationCache().subscribe(r=>{I2(r.type)&&N2(t)});return()=>{e(),n()}}function DD(t){let e=!1,n;const r=()=>{e=!0,n==null||n()},i=PD(t).then(()=>{e||(n=AD(t))});return[r,i]}var kD={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=Xe,OD=V9;function TD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ID=typeof Object.is=="function"?Object.is:TD,ND=OD.useSyncExternalStore,RD=vf.useRef,MD=vf.useEffect,BD=vf.useMemo,UD=vf.useDebugValue;kD.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=RD(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=BD(function(){function l(w){if(!u){if(u=!0,c=w,w=r(w),i!==void 0&&s.hasValue){var y=s.value;if(i(y,w))return f=y}return f=w}if(y=f,ID(c,w))return y;var C=r(w);return i!==void 0&&i(y,C)?y:(c=w,f=C)}var u=!1,c,f,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=ND(t,o[0],o[1]);return MD(function(){s.hasValue=!0,s.value=a},[a]),UD(a),a};function LD({queryClient:t=new mD({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=k5({storage:typeof window<"u"&&window.localStorage?window.localStorage:D5}),persister:n=typeof window<"u"?YA({key:"cache",storage:e,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=y9({...r,storage:e});return n&&DD({queryClient:t,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:t})}var FD=Xe.createContext(void 0),jD=Xe.createContext(void 0);function WD({children:t,config:e}){return Xe.createElement(FD.Provider,{children:Xe.createElement(SD,{children:t,client:e.queryClient,context:jD}),value:e})}var Ca,Oo,zD=class extends lg{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,jt(this,Ca,void 0),jt(this,Oo,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Un(n[0])})},this.onChainChanged=n=>{const r=Wc(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=Un(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new Ht(e):e}}async disconnect(){if(!Te(this,Oo))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Un(e[0])}async getChainId(){const t=await this.getProvider();return Wc(t.chainId)}async getProvider(){var t;if(!Te(this,Oo)){let e=(await fs(()=>import("./index-lKrfZi3q.js").then(s=>s.i),__vite__mapDeps([0,1]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),Cl(this,Ca,new e(this.options));const n=(t=Te(this,Ca).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Cl(this,Oo,Te(this,Ca).makeWeb3Provider(o,i))}return Te(this,Oo)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return sg({account:n,chain:r,transport:tg(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=he(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new $5({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Ht(s)}throw new Er(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};Ca=new WeakMap;Oo=new WeakMap;var Bg={},bf={},ge={},e4={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var u=a>>>16&65535,c=a&65535,f=l>>>16&65535,p=l&65535;return c*p+(u*p+c*f<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(e4);Object.defineProperty(ge,"__esModule",{value:!0});var t4=e4;function HD(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}ge.readInt16BE=HD;function VD(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}ge.readUint16BE=VD;function qD(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}ge.readInt16LE=qD;function GD(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}ge.readUint16LE=GD;function n4(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}ge.writeUint16BE=n4;ge.writeInt16BE=n4;function r4(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}ge.writeUint16LE=r4;ge.writeInt16LE=r4;function Cp(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}ge.readInt32BE=Cp;function Ep(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}ge.readUint32BE=Ep;function _p(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}ge.readInt32LE=_p;function Sp(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}ge.readUint32LE=Sp;function gd(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}ge.writeUint32BE=gd;ge.writeInt32BE=gd;function md(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}ge.writeUint32LE=md;ge.writeInt32LE=md;function KD(t,e){e===void 0&&(e=0);var n=Cp(t,e),r=Cp(t,e+4);return n*4294967296+r-(r>>31)*4294967296}ge.readInt64BE=KD;function ZD(t,e){e===void 0&&(e=0);var n=Ep(t,e),r=Ep(t,e+4);return n*4294967296+r}ge.readUint64BE=ZD;function QD(t,e){e===void 0&&(e=0);var n=_p(t,e),r=_p(t,e+4);return r*4294967296+n-(n>>31)*4294967296}ge.readInt64LE=QD;function YD(t,e){e===void 0&&(e=0);var n=Sp(t,e),r=Sp(t,e+4);return r*4294967296+n}ge.readUint64LE=YD;function i4(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),gd(t/4294967296>>>0,e,n),gd(t>>>0,e,n+4),e}ge.writeUint64BE=i4;ge.writeInt64BE=i4;function o4(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),md(t>>>0,e,n),md(t/4294967296>>>0,e,n+4),e}ge.writeUint64LE=o4;ge.writeInt64LE=o4;function JD(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}ge.readUintBE=JD;function XD(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}ge.readUintLE=XD;function ek(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!t4.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}ge.writeUintBE=ek;function tk(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!t4.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}ge.writeUintLE=tk;function nk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}ge.readFloat32BE=nk;function rk(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}ge.readFloat32LE=rk;function ik(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}ge.readFloat64BE=ik;function ok(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}ge.readFloat64LE=ok;function sk(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}ge.writeFloat32BE=sk;function ak(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}ge.writeFloat32LE=ak;function lk(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}ge.writeFloat64BE=lk;function uk(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}ge.writeFloat64LE=uk;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});function ck(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Hn.wipe=ck;Object.defineProperty(bf,"__esModule",{value:!0});var Pt=ge,$p=Hn,dk=20;function fk(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],u=n[11]<<24|n[10]<<16|n[9]<<8|n[8],c=n[15]<<24|n[14]<<16|n[13]<<8|n[12],f=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],w=n[27]<<24|n[26]<<16|n[25]<<8|n[24],y=n[31]<<24|n[30]<<16|n[29]<<8|n[28],C=e[3]<<24|e[2]<<16|e[1]<<8|e[0],_=e[7]<<24|e[6]<<16|e[5]<<8|e[4],b=e[11]<<24|e[10]<<16|e[9]<<8|e[8],g=e[15]<<24|e[14]<<16|e[13]<<8|e[12],v=r,x=i,E=o,S=s,d=a,P=l,O=u,T=c,M=f,Y=p,X=w,z=y,F=C,U=_,L=b,I=g,j=0;j<dk;j+=2)v=v+d|0,F^=v,F=F>>>16|F<<16,M=M+F|0,d^=M,d=d>>>20|d<<12,x=x+P|0,U^=x,U=U>>>16|U<<16,Y=Y+U|0,P^=Y,P=P>>>20|P<<12,E=E+O|0,L^=E,L=L>>>16|L<<16,X=X+L|0,O^=X,O=O>>>20|O<<12,S=S+T|0,I^=S,I=I>>>16|I<<16,z=z+I|0,T^=z,T=T>>>20|T<<12,E=E+O|0,L^=E,L=L>>>24|L<<8,X=X+L|0,O^=X,O=O>>>25|O<<7,S=S+T|0,I^=S,I=I>>>24|I<<8,z=z+I|0,T^=z,T=T>>>25|T<<7,x=x+P|0,U^=x,U=U>>>24|U<<8,Y=Y+U|0,P^=Y,P=P>>>25|P<<7,v=v+d|0,F^=v,F=F>>>24|F<<8,M=M+F|0,d^=M,d=d>>>25|d<<7,v=v+P|0,I^=v,I=I>>>16|I<<16,X=X+I|0,P^=X,P=P>>>20|P<<12,x=x+O|0,F^=x,F=F>>>16|F<<16,z=z+F|0,O^=z,O=O>>>20|O<<12,E=E+T|0,U^=E,U=U>>>16|U<<16,M=M+U|0,T^=M,T=T>>>20|T<<12,S=S+d|0,L^=S,L=L>>>16|L<<16,Y=Y+L|0,d^=Y,d=d>>>20|d<<12,E=E+T|0,U^=E,U=U>>>24|U<<8,M=M+U|0,T^=M,T=T>>>25|T<<7,S=S+d|0,L^=S,L=L>>>24|L<<8,Y=Y+L|0,d^=Y,d=d>>>25|d<<7,x=x+O|0,F^=x,F=F>>>24|F<<8,z=z+F|0,O^=z,O=O>>>25|O<<7,v=v+P|0,I^=v,I=I>>>24|I<<8,X=X+I|0,P^=X,P=P>>>25|P<<7;Pt.writeUint32LE(v+r|0,t,0),Pt.writeUint32LE(x+i|0,t,4),Pt.writeUint32LE(E+o|0,t,8),Pt.writeUint32LE(S+s|0,t,12),Pt.writeUint32LE(d+a|0,t,16),Pt.writeUint32LE(P+l|0,t,20),Pt.writeUint32LE(O+u|0,t,24),Pt.writeUint32LE(T+c|0,t,28),Pt.writeUint32LE(M+f|0,t,32),Pt.writeUint32LE(Y+p|0,t,36),Pt.writeUint32LE(X+w|0,t,40),Pt.writeUint32LE(z+y|0,t,44),Pt.writeUint32LE(F+C|0,t,48),Pt.writeUint32LE(U+_|0,t,52),Pt.writeUint32LE(L+b|0,t,56),Pt.writeUint32LE(I+g|0,t,60)}function s4(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){fk(a,o,t);for(var u=l;u<l+64&&u<n.length;u++)r[u]=n[u]^a[u-l];pk(o,0,s)}return $p.wipe(a),i===0&&$p.wipe(o),r}bf.streamXOR=s4;function hk(t,e,n,r){return r===void 0&&(r=0),$p.wipe(n),s4(t,e,n,n,r)}bf.stream=hk;function pk(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var a4={},ki={};Object.defineProperty(ki,"__esModule",{value:!0});function gk(t,e,n){return~(t-1)&e|t-1&n}ki.select=gk;function mk(t,e){return(t|0)-(e|0)-1>>>31&1}ki.lessOrEqual=mk;function l4(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}ki.compare=l4;function wk(t,e){return t.length===0||e.length===0?!1:l4(t,e)!==0}ki.equal=wk;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ki,n=Hn;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var u=a[2]|a[3]<<8;this._r[1]=(l>>>13|u<<3)&8191;var c=a[4]|a[5]<<8;this._r[2]=(u>>>10|c<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(c>>>7|f<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(f>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(p>>>14|w<<2)&8191;var y=a[12]|a[13]<<8;this._r[7]=(w>>>11|y<<5)&8065;var C=a[14]|a[15]<<8;this._r[8]=(y>>>8|C<<8)&8191,this._r[9]=C>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,u){for(var c=this._fin?0:2048,f=this._h[0],p=this._h[1],w=this._h[2],y=this._h[3],C=this._h[4],_=this._h[5],b=this._h[6],g=this._h[7],v=this._h[8],x=this._h[9],E=this._r[0],S=this._r[1],d=this._r[2],P=this._r[3],O=this._r[4],T=this._r[5],M=this._r[6],Y=this._r[7],X=this._r[8],z=this._r[9];u>=16;){var F=a[l+0]|a[l+1]<<8;f+=F&8191;var U=a[l+2]|a[l+3]<<8;p+=(F>>>13|U<<3)&8191;var L=a[l+4]|a[l+5]<<8;w+=(U>>>10|L<<6)&8191;var I=a[l+6]|a[l+7]<<8;y+=(L>>>7|I<<9)&8191;var j=a[l+8]|a[l+9]<<8;C+=(I>>>4|j<<12)&8191,_+=j>>>1&8191;var W=a[l+10]|a[l+11]<<8;b+=(j>>>14|W<<2)&8191;var V=a[l+12]|a[l+13]<<8;g+=(W>>>11|V<<5)&8191;var Z=a[l+14]|a[l+15]<<8;v+=(V>>>8|Z<<8)&8191,x+=Z>>>5|c;var q=0,ee=q;ee+=f*E,ee+=p*(5*z),ee+=w*(5*X),ee+=y*(5*Y),ee+=C*(5*M),q=ee>>>13,ee&=8191,ee+=_*(5*T),ee+=b*(5*O),ee+=g*(5*P),ee+=v*(5*d),ee+=x*(5*S),q+=ee>>>13,ee&=8191;var ie=q;ie+=f*S,ie+=p*E,ie+=w*(5*z),ie+=y*(5*X),ie+=C*(5*Y),q=ie>>>13,ie&=8191,ie+=_*(5*M),ie+=b*(5*T),ie+=g*(5*O),ie+=v*(5*P),ie+=x*(5*d),q+=ie>>>13,ie&=8191;var ae=q;ae+=f*d,ae+=p*S,ae+=w*E,ae+=y*(5*z),ae+=C*(5*X),q=ae>>>13,ae&=8191,ae+=_*(5*Y),ae+=b*(5*M),ae+=g*(5*T),ae+=v*(5*O),ae+=x*(5*P),q+=ae>>>13,ae&=8191;var ue=q;ue+=f*P,ue+=p*d,ue+=w*S,ue+=y*E,ue+=C*(5*z),q=ue>>>13,ue&=8191,ue+=_*(5*X),ue+=b*(5*Y),ue+=g*(5*M),ue+=v*(5*T),ue+=x*(5*O),q+=ue>>>13,ue&=8191;var fe=q;fe+=f*O,fe+=p*P,fe+=w*d,fe+=y*S,fe+=C*E,q=fe>>>13,fe&=8191,fe+=_*(5*z),fe+=b*(5*X),fe+=g*(5*Y),fe+=v*(5*M),fe+=x*(5*T),q+=fe>>>13,fe&=8191;var me=q;me+=f*T,me+=p*O,me+=w*P,me+=y*d,me+=C*S,q=me>>>13,me&=8191,me+=_*E,me+=b*(5*z),me+=g*(5*X),me+=v*(5*Y),me+=x*(5*M),q+=me>>>13,me&=8191;var ce=q;ce+=f*M,ce+=p*T,ce+=w*O,ce+=y*P,ce+=C*d,q=ce>>>13,ce&=8191,ce+=_*S,ce+=b*E,ce+=g*(5*z),ce+=v*(5*X),ce+=x*(5*Y),q+=ce>>>13,ce&=8191;var be=q;be+=f*Y,be+=p*M,be+=w*T,be+=y*O,be+=C*P,q=be>>>13,be&=8191,be+=_*d,be+=b*S,be+=g*E,be+=v*(5*z),be+=x*(5*X),q+=be>>>13,be&=8191;var _e=q;_e+=f*X,_e+=p*Y,_e+=w*M,_e+=y*T,_e+=C*O,q=_e>>>13,_e&=8191,_e+=_*P,_e+=b*d,_e+=g*S,_e+=v*E,_e+=x*(5*z),q+=_e>>>13,_e&=8191;var xe=q;xe+=f*z,xe+=p*X,xe+=w*Y,xe+=y*M,xe+=C*T,q=xe>>>13,xe&=8191,xe+=_*O,xe+=b*P,xe+=g*d,xe+=v*S,xe+=x*E,q+=xe>>>13,xe&=8191,q=(q<<2)+q|0,q=q+ee|0,ee=q&8191,q=q>>>13,ie+=q,f=ee,p=ie,w=ae,y=ue,C=fe,_=me,b=ce,g=be,v=_e,x=xe,l+=16,u-=16}this._h[0]=f,this._h[1]=p,this._h[2]=w,this._h[3]=y,this._h[4]=C,this._h[5]=_,this._h[6]=b,this._h[7]=g,this._h[8]=v,this._h[9]=x},s.prototype.finish=function(a,l){l===void 0&&(l=0);var u=new Uint16Array(10),c,f,p,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(c=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=c,c=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=c*5,c=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=c,c=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=c,u[0]=this._h[0]+5,c=u[0]>>>13,u[0]&=8191,w=1;w<10;w++)u[w]=this._h[w]+c,c=u[w]>>>13,u[w]&=8191;for(u[9]-=8192,f=(c^1)-1,w=0;w<10;w++)u[w]&=f;for(f=~f,w=0;w<10;w++)this._h[w]=this._h[w]&f|u[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,w=1;w<8;w++)p=(this._h[w]+this._pad[w]|0)+(p>>>16)|0,this._h[w]=p&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,u=a.length,c;if(this._leftover){c=16-this._leftover,c>u&&(c=u);for(var f=0;f<c;f++)this._buffer[this._leftover+f]=a[l+f];if(u-=c,l+=c,this._leftover+=c,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(u>=16&&(c=u-u%16,this._blocks(a,l,c),l+=c,u-=c),u){for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[l+f];this._leftover+=u}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var u=l.digest();return l.clean(),u}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(a4);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=bf,n=a4,r=Hn,i=ge,o=ki;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(u){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,u.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(u)}return l.prototype.seal=function(u,c,f,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(u,w.length-u.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var C=c.length+this.tagLength,_;if(p){if(p.length!==C)throw new Error("ChaCha20Poly1305: incorrect destination length");_=p}else _=new Uint8Array(C);return e.streamXOR(this._key,w,c,_,4),this._authenticate(_.subarray(_.length-this.tagLength,_.length),y,_.subarray(0,_.length-this.tagLength),f),r.wipe(w),_},l.prototype.open=function(u,c,f,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(c.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(u,w.length-u.length);var y=new Uint8Array(32);e.stream(this._key,w,y,4);var C=new Uint8Array(this.tagLength);if(this._authenticate(C,y,c.subarray(0,c.length-this.tagLength),f),!o.equal(C,c.subarray(c.length-this.tagLength,c.length)))return null;var _=c.length-this.tagLength,b;if(p){if(p.length!==_)throw new Error("ChaCha20Poly1305: incorrect destination length");b=p}else b=new Uint8Array(_);return e.streamXOR(this._key,w,c.subarray(0,c.length-this.tagLength),b,4),r.wipe(w),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(u,c,f,p){var w=new n.Poly1305(c);p&&(w.update(p),p.length%16>0&&w.update(s.subarray(p.length%16))),w.update(f),f.length%16>0&&w.update(s.subarray(f.length%16));var y=new Uint8Array(8);p&&i.writeUint64LE(p.length,y),w.update(y),i.writeUint64LE(f.length,y),w.update(y);for(var C=w.digest(),_=0;_<C.length;_++)u[_]=C[_];w.clean(),r.wipe(C),r.wipe(y)},l}();t.ChaCha20Poly1305=a})(Bg);var u4={},fu={},Ug={};Object.defineProperty(Ug,"__esModule",{value:!0});function yk(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}Ug.isSerializableHash=yk;Object.defineProperty(fu,"__esModule",{value:!0});var Kn=Ug,vk=ki,bk=Hn,c4=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Kn.isSerializableHash(this._inner)&&Kn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),bk.wipe(r)}return t.prototype.reset=function(){if(!Kn.isSerializableHash(this._inner)||!Kn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Kn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Kn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Kn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Kn.isSerializableHash(this._inner)||!Kn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Kn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();fu.HMAC=c4;function xk(t,e,n){var r=new c4(t,e);r.update(n);var i=r.digest();return r.clean(),i}fu.hmac=xk;fu.equal=vk.equal;Object.defineProperty(u4,"__esModule",{value:!0});var R2=fu,M2=Hn,Ck=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=R2.hmac(this._hash,r,n);this._hmac=new R2.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),M2.wipe(this._buffer),M2.wipe(this._counter),this._bufpos=0},t}(),Ek=u4.HKDF=Ck,xf={},Cf={},Ef={};Object.defineProperty(Ef,"__esModule",{value:!0});Ef.BrowserRandomSource=void 0;const B2=65536;class _k{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=B2)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,B2)));return n}}Ef.BrowserRandomSource=_k;function Sk(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _f={};const $k={},Pk=Object.freeze(Object.defineProperty({__proto__:null,default:$k},Symbol.toStringTag,{value:"Module"})),Ak=gy(Pk);Object.defineProperty(_f,"__esModule",{value:!0});_f.NodeRandomSource=void 0;const Dk=Hn;class kk{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof Sk<"u"){const e=Ak;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,Dk.wipe)(n),r}}_f.NodeRandomSource=kk;Object.defineProperty(Cf,"__esModule",{value:!0});Cf.SystemRandomSource=void 0;const Ok=Ef,Tk=_f;class Ik{constructor(){if(this.isAvailable=!1,this.name="",this._source=new Ok.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new Tk.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Cf.SystemRandomSource=Ik;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=Cf,n=ge,r=Hn;t.defaultRandomSource=new e.SystemRandomSource;function i(u,c=t.defaultRandomSource){return c.randomBytes(u)}t.randomBytes=i;function o(u=t.defaultRandomSource){const c=i(4,u),f=(0,n.readUint32LE)(c);return(0,r.wipe)(c),f}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(u,c=s,f=t.defaultRandomSource){if(c.length<2)throw new Error("randomString charset is too short");if(c.length>256)throw new Error("randomString charset is too long");let p="";const w=c.length,y=256-256%w;for(;u>0;){const C=i(Math.ceil(u*256/y),f);for(let _=0;_<C.length&&u>0;_++){const b=C[_];b<y&&(p+=c.charAt(b%w),u--)}(0,r.wipe)(C)}return p}t.randomString=a;function l(u,c=s,f=t.defaultRandomSource){const p=Math.ceil(u/(Math.log(c.length)/Math.LN2));return a(p,c,f)}t.randomStringForEntropy=l})(xf);var Sf={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ge,n=Hn;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,u){if(u===void 0&&(u=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var c=0;if(this._bytesHashed+=u,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&u>0;)this._buffer[this._bufferLength++]=l[c++],u--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(u>=this.blockSize&&(c=o(this._temp,this._state,l,c,u),u%=this.blockSize);u>0;)this._buffer[this._bufferLength++]=l[c++],u--;return this},a.prototype.finish=function(l){if(!this._finished){var u=this._bytesHashed,c=this._bufferLength,f=u/536870912|0,p=u<<3,w=u%64<56?64:128;this._buffer[c]=128;for(var y=c+1;y<w-8;y++)this._buffer[y]=0;e.writeUint32BE(f,this._buffer,w-8),e.writeUint32BE(p,this._buffer,w-4),o(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var y=0;y<this.digestLength/4;y++)e.writeUint32BE(this._state[y],l,y*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,u,c,f){for(;f>=64;){for(var p=l[0],w=l[1],y=l[2],C=l[3],_=l[4],b=l[5],g=l[6],v=l[7],x=0;x<16;x++){var E=c+x*4;a[x]=e.readUint32BE(u,E)}for(var x=16;x<64;x++){var S=a[x-2],d=(S>>>17|S<<15)^(S>>>19|S<<13)^S>>>10;S=a[x-15];var P=(S>>>7|S<<25)^(S>>>18|S<<14)^S>>>3;a[x]=(d+a[x-7]|0)+(P+a[x-16]|0)}for(var x=0;x<64;x++){var d=(((_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&b^~_&g)|0)+(v+(i[x]+a[x]|0)|0)|0,P=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&w^p&y^w&y)|0;v=g,g=b,b=_,_=C+d|0,C=y,y=w,w=p,p=d+P|0}l[0]+=p,l[1]+=w,l[2]+=y,l[3]+=C,l[4]+=_,l[5]+=b,l[6]+=g,l[7]+=v,c+=64,f-=64}return c}function s(a){var l=new r;l.update(a);var u=l.digest();return l.clean(),u}t.hash=s})(Sf);var Lg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=xf,n=Hn;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(x){const E=new Float64Array(16);if(x)for(let S=0;S<x.length;S++)E[S]=x[S];return E}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(x){let E=1;for(let S=0;S<16;S++){let d=x[S]+E+65535;E=Math.floor(d/65536),x[S]=d-E*65536}x[0]+=E-1+37*(E-1)}function a(x,E,S){const d=~(S-1);for(let P=0;P<16;P++){const O=d&(x[P]^E[P]);x[P]^=O,E[P]^=O}}function l(x,E){const S=r(),d=r();for(let P=0;P<16;P++)d[P]=E[P];s(d),s(d),s(d);for(let P=0;P<2;P++){S[0]=d[0]-65517;for(let T=1;T<15;T++)S[T]=d[T]-65535-(S[T-1]>>16&1),S[T-1]&=65535;S[15]=d[15]-32767-(S[14]>>16&1);const O=S[15]>>16&1;S[14]&=65535,a(d,S,1-O)}for(let P=0;P<16;P++)x[2*P]=d[P]&255,x[2*P+1]=d[P]>>8}function u(x,E){for(let S=0;S<16;S++)x[S]=E[2*S]+(E[2*S+1]<<8);x[15]&=32767}function c(x,E,S){for(let d=0;d<16;d++)x[d]=E[d]+S[d]}function f(x,E,S){for(let d=0;d<16;d++)x[d]=E[d]-S[d]}function p(x,E,S){let d,P,O=0,T=0,M=0,Y=0,X=0,z=0,F=0,U=0,L=0,I=0,j=0,W=0,V=0,Z=0,q=0,ee=0,ie=0,ae=0,ue=0,fe=0,me=0,ce=0,be=0,_e=0,xe=0,Xt=0,Ir=0,Oi=0,Nr=0,Qs=0,mu=0,st=S[0],Qe=S[1],Ie=S[2],et=S[3],dt=S[4],Ue=S[5],ft=S[6],$=S[7],h=S[8],m=S[9],A=S[10],D=S[11],R=S[12],B=S[13],re=S[14],ye=S[15];d=E[0],O+=d*st,T+=d*Qe,M+=d*Ie,Y+=d*et,X+=d*dt,z+=d*Ue,F+=d*ft,U+=d*$,L+=d*h,I+=d*m,j+=d*A,W+=d*D,V+=d*R,Z+=d*B,q+=d*re,ee+=d*ye,d=E[1],T+=d*st,M+=d*Qe,Y+=d*Ie,X+=d*et,z+=d*dt,F+=d*Ue,U+=d*ft,L+=d*$,I+=d*h,j+=d*m,W+=d*A,V+=d*D,Z+=d*R,q+=d*B,ee+=d*re,ie+=d*ye,d=E[2],M+=d*st,Y+=d*Qe,X+=d*Ie,z+=d*et,F+=d*dt,U+=d*Ue,L+=d*ft,I+=d*$,j+=d*h,W+=d*m,V+=d*A,Z+=d*D,q+=d*R,ee+=d*B,ie+=d*re,ae+=d*ye,d=E[3],Y+=d*st,X+=d*Qe,z+=d*Ie,F+=d*et,U+=d*dt,L+=d*Ue,I+=d*ft,j+=d*$,W+=d*h,V+=d*m,Z+=d*A,q+=d*D,ee+=d*R,ie+=d*B,ae+=d*re,ue+=d*ye,d=E[4],X+=d*st,z+=d*Qe,F+=d*Ie,U+=d*et,L+=d*dt,I+=d*Ue,j+=d*ft,W+=d*$,V+=d*h,Z+=d*m,q+=d*A,ee+=d*D,ie+=d*R,ae+=d*B,ue+=d*re,fe+=d*ye,d=E[5],z+=d*st,F+=d*Qe,U+=d*Ie,L+=d*et,I+=d*dt,j+=d*Ue,W+=d*ft,V+=d*$,Z+=d*h,q+=d*m,ee+=d*A,ie+=d*D,ae+=d*R,ue+=d*B,fe+=d*re,me+=d*ye,d=E[6],F+=d*st,U+=d*Qe,L+=d*Ie,I+=d*et,j+=d*dt,W+=d*Ue,V+=d*ft,Z+=d*$,q+=d*h,ee+=d*m,ie+=d*A,ae+=d*D,ue+=d*R,fe+=d*B,me+=d*re,ce+=d*ye,d=E[7],U+=d*st,L+=d*Qe,I+=d*Ie,j+=d*et,W+=d*dt,V+=d*Ue,Z+=d*ft,q+=d*$,ee+=d*h,ie+=d*m,ae+=d*A,ue+=d*D,fe+=d*R,me+=d*B,ce+=d*re,be+=d*ye,d=E[8],L+=d*st,I+=d*Qe,j+=d*Ie,W+=d*et,V+=d*dt,Z+=d*Ue,q+=d*ft,ee+=d*$,ie+=d*h,ae+=d*m,ue+=d*A,fe+=d*D,me+=d*R,ce+=d*B,be+=d*re,_e+=d*ye,d=E[9],I+=d*st,j+=d*Qe,W+=d*Ie,V+=d*et,Z+=d*dt,q+=d*Ue,ee+=d*ft,ie+=d*$,ae+=d*h,ue+=d*m,fe+=d*A,me+=d*D,ce+=d*R,be+=d*B,_e+=d*re,xe+=d*ye,d=E[10],j+=d*st,W+=d*Qe,V+=d*Ie,Z+=d*et,q+=d*dt,ee+=d*Ue,ie+=d*ft,ae+=d*$,ue+=d*h,fe+=d*m,me+=d*A,ce+=d*D,be+=d*R,_e+=d*B,xe+=d*re,Xt+=d*ye,d=E[11],W+=d*st,V+=d*Qe,Z+=d*Ie,q+=d*et,ee+=d*dt,ie+=d*Ue,ae+=d*ft,ue+=d*$,fe+=d*h,me+=d*m,ce+=d*A,be+=d*D,_e+=d*R,xe+=d*B,Xt+=d*re,Ir+=d*ye,d=E[12],V+=d*st,Z+=d*Qe,q+=d*Ie,ee+=d*et,ie+=d*dt,ae+=d*Ue,ue+=d*ft,fe+=d*$,me+=d*h,ce+=d*m,be+=d*A,_e+=d*D,xe+=d*R,Xt+=d*B,Ir+=d*re,Oi+=d*ye,d=E[13],Z+=d*st,q+=d*Qe,ee+=d*Ie,ie+=d*et,ae+=d*dt,ue+=d*Ue,fe+=d*ft,me+=d*$,ce+=d*h,be+=d*m,_e+=d*A,xe+=d*D,Xt+=d*R,Ir+=d*B,Oi+=d*re,Nr+=d*ye,d=E[14],q+=d*st,ee+=d*Qe,ie+=d*Ie,ae+=d*et,ue+=d*dt,fe+=d*Ue,me+=d*ft,ce+=d*$,be+=d*h,_e+=d*m,xe+=d*A,Xt+=d*D,Ir+=d*R,Oi+=d*B,Nr+=d*re,Qs+=d*ye,d=E[15],ee+=d*st,ie+=d*Qe,ae+=d*Ie,ue+=d*et,fe+=d*dt,me+=d*Ue,ce+=d*ft,be+=d*$,_e+=d*h,xe+=d*m,Xt+=d*A,Ir+=d*D,Oi+=d*R,Nr+=d*B,Qs+=d*re,mu+=d*ye,O+=38*ie,T+=38*ae,M+=38*ue,Y+=38*fe,X+=38*me,z+=38*ce,F+=38*be,U+=38*_e,L+=38*xe,I+=38*Xt,j+=38*Ir,W+=38*Oi,V+=38*Nr,Z+=38*Qs,q+=38*mu,P=1,d=O+P+65535,P=Math.floor(d/65536),O=d-P*65536,d=T+P+65535,P=Math.floor(d/65536),T=d-P*65536,d=M+P+65535,P=Math.floor(d/65536),M=d-P*65536,d=Y+P+65535,P=Math.floor(d/65536),Y=d-P*65536,d=X+P+65535,P=Math.floor(d/65536),X=d-P*65536,d=z+P+65535,P=Math.floor(d/65536),z=d-P*65536,d=F+P+65535,P=Math.floor(d/65536),F=d-P*65536,d=U+P+65535,P=Math.floor(d/65536),U=d-P*65536,d=L+P+65535,P=Math.floor(d/65536),L=d-P*65536,d=I+P+65535,P=Math.floor(d/65536),I=d-P*65536,d=j+P+65535,P=Math.floor(d/65536),j=d-P*65536,d=W+P+65535,P=Math.floor(d/65536),W=d-P*65536,d=V+P+65535,P=Math.floor(d/65536),V=d-P*65536,d=Z+P+65535,P=Math.floor(d/65536),Z=d-P*65536,d=q+P+65535,P=Math.floor(d/65536),q=d-P*65536,d=ee+P+65535,P=Math.floor(d/65536),ee=d-P*65536,O+=P-1+37*(P-1),P=1,d=O+P+65535,P=Math.floor(d/65536),O=d-P*65536,d=T+P+65535,P=Math.floor(d/65536),T=d-P*65536,d=M+P+65535,P=Math.floor(d/65536),M=d-P*65536,d=Y+P+65535,P=Math.floor(d/65536),Y=d-P*65536,d=X+P+65535,P=Math.floor(d/65536),X=d-P*65536,d=z+P+65535,P=Math.floor(d/65536),z=d-P*65536,d=F+P+65535,P=Math.floor(d/65536),F=d-P*65536,d=U+P+65535,P=Math.floor(d/65536),U=d-P*65536,d=L+P+65535,P=Math.floor(d/65536),L=d-P*65536,d=I+P+65535,P=Math.floor(d/65536),I=d-P*65536,d=j+P+65535,P=Math.floor(d/65536),j=d-P*65536,d=W+P+65535,P=Math.floor(d/65536),W=d-P*65536,d=V+P+65535,P=Math.floor(d/65536),V=d-P*65536,d=Z+P+65535,P=Math.floor(d/65536),Z=d-P*65536,d=q+P+65535,P=Math.floor(d/65536),q=d-P*65536,d=ee+P+65535,P=Math.floor(d/65536),ee=d-P*65536,O+=P-1+37*(P-1),x[0]=O,x[1]=T,x[2]=M,x[3]=Y,x[4]=X,x[5]=z,x[6]=F,x[7]=U,x[8]=L,x[9]=I,x[10]=j,x[11]=W,x[12]=V,x[13]=Z,x[14]=q,x[15]=ee}function w(x,E){p(x,E,E)}function y(x,E){const S=r();for(let d=0;d<16;d++)S[d]=E[d];for(let d=253;d>=0;d--)w(S,S),d!==2&&d!==4&&p(S,S,E);for(let d=0;d<16;d++)x[d]=S[d]}function C(x,E){const S=new Uint8Array(32),d=new Float64Array(80),P=r(),O=r(),T=r(),M=r(),Y=r(),X=r();for(let L=0;L<31;L++)S[L]=x[L];S[31]=x[31]&127|64,S[0]&=248,u(d,E);for(let L=0;L<16;L++)O[L]=d[L];P[0]=M[0]=1;for(let L=254;L>=0;--L){const I=S[L>>>3]>>>(L&7)&1;a(P,O,I),a(T,M,I),c(Y,P,T),f(P,P,T),c(T,O,M),f(O,O,M),w(M,Y),w(X,P),p(P,T,P),p(T,O,Y),c(Y,P,T),f(P,P,T),w(O,P),f(T,M,X),p(P,T,o),c(P,P,M),p(T,T,P),p(P,M,X),p(M,O,d),w(O,Y),a(P,O,I),a(T,M,I)}for(let L=0;L<16;L++)d[L+16]=P[L],d[L+32]=T[L],d[L+48]=O[L],d[L+64]=M[L];const z=d.subarray(32),F=d.subarray(16);y(z,z),p(F,F,z);const U=new Uint8Array(32);return l(U,F),U}t.scalarMult=C;function _(x){return C(x,i)}t.scalarMultBase=_;function b(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const E=new Uint8Array(x);return{publicKey:_(E),secretKey:E}}t.generateKeyPairFromSeed=b;function g(x){const E=(0,e.randomBytes)(32,x),S=b(E);return(0,n.wipe)(E),S}t.generateKeyPair=g;function v(x,E,S=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(E.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const d=C(x,E);if(S){let P=0;for(let O=0;O<d.length;O++)P|=d[O];if(P===0)throw new Error("X25519: invalid shared key")}return d}t.sharedKey=v})(Lg);function Fg(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function d4(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Fg(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function U2(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const n=d4(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return Fg(n)}function Nk(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),u=Math.log(a)/Math.log(256),c=Math.log(256)/Math.log(a);function f(y){if(y instanceof Uint8Array||(ArrayBuffer.isView(y)?y=new Uint8Array(y.buffer,y.byteOffset,y.byteLength):Array.isArray(y)&&(y=Uint8Array.from(y))),!(y instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(y.length===0)return"";for(var C=0,_=0,b=0,g=y.length;b!==g&&y[b]===0;)b++,C++;for(var v=(g-b)*c+1>>>0,x=new Uint8Array(v);b!==g;){for(var E=y[b],S=0,d=v-1;(E!==0||S<_)&&d!==-1;d--,S++)E+=256*x[d]>>>0,x[d]=E%a>>>0,E=E/a>>>0;if(E!==0)throw new Error("Non-zero carry");_=S,b++}for(var P=v-_;P!==v&&x[P]===0;)P++;for(var O=l.repeat(C);P<v;++P)O+=t.charAt(x[P]);return O}function p(y){if(typeof y!="string")throw new TypeError("Expected String");if(y.length===0)return new Uint8Array;var C=0;if(y[C]!==" "){for(var _=0,b=0;y[C]===l;)_++,C++;for(var g=(y.length-C)*u+1>>>0,v=new Uint8Array(g);y[C];){var x=n[y.charCodeAt(C)];if(x===255)return;for(var E=0,S=g-1;(x!==0||E<b)&&S!==-1;S--,E++)x+=a*v[S]>>>0,v[S]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");b=E,C++}if(y[C]!==" "){for(var d=g-b;d!==g&&v[d]===0;)d++;for(var P=new Uint8Array(_+(g-d)),O=_;d!==g;)P[O++]=v[d++];return P}}}function w(y){var C=p(y);if(C)return C;throw new Error(`Non-${e} character`)}return{encode:f,decodeUnsafe:p,decode:w}}var Rk=Nk,Mk=Rk;const Bk=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},Uk=t=>new TextEncoder().encode(t),Lk=t=>new TextDecoder().decode(t);class Fk{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class jk{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return f4(this,e)}}class Wk{constructor(e){this.decoders=e}or(e){return f4(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const f4=(t,e)=>new Wk({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class zk{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new Fk(e,n,r),this.decoder=new jk(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const $f=({name:t,prefix:e,encode:n,decode:r})=>new zk(t,e,n,r),hu=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=Mk(n,e);return $f({prefix:t,name:e,encode:r,decode:o=>Bk(i(o))})},Hk=(t,e,n,r)=>{const i={};for(let c=0;c<e.length;++c)i[e[c]]=c;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,u=0;for(let c=0;c<o;++c){const f=i[t[c]];if(f===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|f,a+=n,a>=8&&(a-=8,s[u++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},Vk=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Et=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>$f({prefix:e,name:t,encode(i){return Vk(i,r,n)},decode(i){return Hk(i,r,n,t)}}),qk=$f({prefix:"\0",name:"identity",encode:t=>Lk(t),decode:t=>Uk(t)}),Gk=Object.freeze(Object.defineProperty({__proto__:null,identity:qk},Symbol.toStringTag,{value:"Module"})),Kk=Et({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),Zk=Object.freeze(Object.defineProperty({__proto__:null,base2:Kk},Symbol.toStringTag,{value:"Module"})),Qk=Et({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),Yk=Object.freeze(Object.defineProperty({__proto__:null,base8:Qk},Symbol.toStringTag,{value:"Module"})),Jk=hu({prefix:"9",name:"base10",alphabet:"0123456789"}),Xk=Object.freeze(Object.defineProperty({__proto__:null,base10:Jk},Symbol.toStringTag,{value:"Module"})),eO=Et({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),tO=Et({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),nO=Object.freeze(Object.defineProperty({__proto__:null,base16:eO,base16upper:tO},Symbol.toStringTag,{value:"Module"})),rO=Et({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),iO=Et({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),oO=Et({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),sO=Et({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),aO=Et({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),lO=Et({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),uO=Et({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),cO=Et({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),dO=Et({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),fO=Object.freeze(Object.defineProperty({__proto__:null,base32:rO,base32hex:aO,base32hexpad:uO,base32hexpadupper:cO,base32hexupper:lO,base32pad:oO,base32padupper:sO,base32upper:iO,base32z:dO},Symbol.toStringTag,{value:"Module"})),hO=hu({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),pO=hu({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),gO=Object.freeze(Object.defineProperty({__proto__:null,base36:hO,base36upper:pO},Symbol.toStringTag,{value:"Module"})),mO=hu({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),wO=hu({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),yO=Object.freeze(Object.defineProperty({__proto__:null,base58btc:mO,base58flickr:wO},Symbol.toStringTag,{value:"Module"})),vO=Et({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),bO=Et({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),xO=Et({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),CO=Et({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),EO=Object.freeze(Object.defineProperty({__proto__:null,base64:vO,base64pad:bO,base64url:xO,base64urlpad:CO},Symbol.toStringTag,{value:"Module"})),h4=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),_O=h4.reduce((t,e,n)=>(t[n]=e,t),[]),SO=h4.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function $O(t){return t.reduce((e,n)=>(e+=_O[n],e),"")}function PO(t){const e=[];for(const n of t){const r=SO[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const AO=$f({prefix:"🚀",name:"base256emoji",encode:$O,decode:PO}),DO=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:AO},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const L2={...Gk,...Zk,...Yk,...Xk,...nO,...fO,...gO,...yO,...EO,...DO};function p4(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const F2=p4("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),T0=p4("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=d4(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),g4={utf8:F2,"utf-8":F2,hex:L2.base16,latin1:T0,ascii:T0,binary:T0,...L2};function Rn(t,e="utf8"){const n=g4[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Fg(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function Wn(t,e="utf8"){const n=g4[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var j2=function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},kO=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),OO=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),TO=function(){function t(e,n,r,i){this.name=e,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return t}(),IO=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),NO=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),RO=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,MO=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,W2=3,BO=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",RO]],z2=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function UO(t){return t?H2(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new NO:typeof navigator<"u"?H2(navigator.userAgent):jO()}function LO(t){return t!==""&&BO.reduce(function(e,n){var r=n[0],i=n[1];if(e)return e;var o=i.exec(t);return!!o&&[r,o]},!1)}function H2(t){var e=LO(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new IO;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<W2&&(i=j2(j2([],i,!0),WO(W2-i.length),!0)):i=[];var o=i.join("."),s=FO(t),a=MO.exec(t);return a&&a[1]?new TO(n,o,s,a[1]):new kO(n,o,s)}function FO(t){for(var e=0,n=z2.length;e<n;e++){var r=z2[e],i=r[0],o=r[1],s=o.exec(t);if(s)return i}return null}function jO(){var t=typeof process<"u"&&process.version;return t?new OO(process.version.slice(1)):null}function WO(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var Qi={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Pp=function(t,e){return Pp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Pp(t,e)};function zO(t,e){Pp(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ap=function(){return Ap=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ap.apply(this,arguments)};function HO(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VO(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function qO(t,e){return function(n,r){e(n,r,t)}}function GO(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function KO(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function ZO(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function QO(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function YO(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Dp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function m4(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function JO(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m4(arguments[e]));return t}function XO(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Wl(t){return this instanceof Wl?(this.v=t,this):new Wl(t)}function eT(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){r[p]&&(i[p]=function(w){return new Promise(function(y,C){o.push([p,w,y,C])>1||a(p,w)})})}function a(p,w){try{l(r[p](w))}catch(y){f(o[0][3],y)}}function l(p){p.value instanceof Wl?Promise.resolve(p.value.v).then(u,c):f(o[0][2],p)}function u(p){a("next",p)}function c(p){a("throw",p)}function f(p,w){p(w),o.shift(),o.length&&a(o[0][0],o[0][1])}}function tT(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:Wl(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function nT(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Dp=="function"?Dp(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(u){o({value:u,done:a})},s)}}function rT(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function iT(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function oT(t){return t&&t.__esModule?t:{default:t}}function sT(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function aT(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const lT=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Ap},__asyncDelegator:tT,__asyncGenerator:eT,__asyncValues:nT,__await:Wl,__awaiter:KO,__classPrivateFieldGet:sT,__classPrivateFieldSet:aT,__createBinding:QO,__decorate:VO,__exportStar:YO,__extends:zO,__generator:ZO,__importDefault:oT,__importStar:iT,__makeTemplateObject:rT,__metadata:GO,__param:qO,__read:m4,__rest:HO,__spread:JO,__spreadArrays:XO,__values:Dp},Symbol.toStringTag,{value:"Module"})),Pf=gy(lT);var I0={},ha={},V2;function uT(){if(V2)return ha;V2=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return ha.delay=t,ha}var Ni={},N0={},Ri={},q2;function cT(){return q2||(q2=1,Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.ONE_THOUSAND=Ri.ONE_HUNDRED=void 0,Ri.ONE_HUNDRED=100,Ri.ONE_THOUSAND=1e3),Ri}var R0={},G2;function dT(){return G2||(G2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(R0)),R0}var K2;function w4(){return K2||(K2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(cT(),t),e.__exportStar(dT(),t)}(N0)),N0}var Z2;function fT(){if(Z2)return Ni;Z2=1,Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.fromMiliseconds=Ni.toMiliseconds=void 0;const t=w4();function e(r){return r*t.ONE_THOUSAND}Ni.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return Ni.fromMiliseconds=n,Ni}var Q2;function hT(){return Q2||(Q2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(uT(),t),e.__exportStar(fT(),t)}(I0)),I0}var Ao={},Y2;function pT(){if(Y2)return Ao;Y2=1,Object.defineProperty(Ao,"__esModule",{value:!0}),Ao.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return Ao.Watch=t,Ao.default=t,Ao}var M0={},pa={},J2;function gT(){if(J2)return pa;J2=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.IWatch=void 0;class t{}return pa.IWatch=t,pa}var X2;function mT(){return X2||(X2=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Pf.__exportStar(gT(),t)}(M0)),M0}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Pf;e.__exportStar(hT(),t),e.__exportStar(pT(),t),e.__exportStar(mT(),t),e.__exportStar(w4(),t)})(Qi);var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.getLocalStorage=Me.getLocalStorageOrThrow=Me.getCrypto=Me.getCryptoOrThrow=v4=Me.getLocation=Me.getLocationOrThrow=jg=Me.getNavigator=Me.getNavigatorOrThrow=y4=Me.getDocument=Me.getDocumentOrThrow=Me.getFromWindowOrThrow=Me.getFromWindow=void 0;function Co(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Me.getFromWindow=Co;function Ks(t){const e=Co(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Me.getFromWindowOrThrow=Ks;function wT(){return Ks("document")}Me.getDocumentOrThrow=wT;function yT(){return Co("document")}var y4=Me.getDocument=yT;function vT(){return Ks("navigator")}Me.getNavigatorOrThrow=vT;function bT(){return Co("navigator")}var jg=Me.getNavigator=bT;function xT(){return Ks("location")}Me.getLocationOrThrow=xT;function CT(){return Co("location")}var v4=Me.getLocation=CT;function ET(){return Ks("crypto")}Me.getCryptoOrThrow=ET;function _T(){return Co("crypto")}Me.getCrypto=_T;function ST(){return Ks("localStorage")}Me.getLocalStorageOrThrow=ST;function $T(){return Co("localStorage")}Me.getLocalStorage=$T;var Wg={};Object.defineProperty(Wg,"__esModule",{value:!0});var b4=Wg.getWindowMetadata=void 0;const ey=Me;function PT(){let t,e;try{t=ey.getDocumentOrThrow(),e=ey.getLocationOrThrow()}catch{return null}function n(){const f=t.getElementsByTagName("link"),p=[];for(let w=0;w<f.length;w++){const y=f[w],C=y.getAttribute("rel");if(C&&C.toLowerCase().indexOf("icon")>-1){const _=y.getAttribute("href");if(_)if(_.toLowerCase().indexOf("https:")===-1&&_.toLowerCase().indexOf("http:")===-1&&_.indexOf("//")!==0){let b=e.protocol+"//"+e.host;if(_.indexOf("/")===0)b+=_;else{const g=e.pathname.split("/");g.pop();const v=g.join("/");b+=v+"/"+_}p.push(b)}else if(_.indexOf("//")===0){const b=e.protocol+_;p.push(b)}else p.push(_)}}return p}function r(...f){const p=t.getElementsByTagName("meta");for(let w=0;w<p.length;w++){const y=p[w],C=["itemprop","property","name"].map(_=>y.getAttribute(_)).filter(_=>_?f.includes(_):!1);if(C.length&&C){const _=y.getAttribute("content");if(_)return _}}return""}function i(){let f=r("name","og:site_name","og:title","twitter:title");return f||(f=t.title),f}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,u=n();return{description:a,url:l,icons:u,name:s}}b4=Wg.getWindowMetadata=PT;var zl={},AT=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),x4="%[a-f0-9]{2}",ty=new RegExp("("+x4+")|([^%]+?)","gi"),ny=new RegExp("("+x4+")+","gi");function kp(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],kp(n),kp(r))}function DT(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(ty)||[],n=1;n<e.length;n++)t=kp(e,n).join(""),e=t.match(ty)||[];return t}}function kT(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=ny.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=DT(n[0]);r!==n[0]&&(e[n[0]]=r)}n=ny.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var OT=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return kT(t)}},TT=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},IT=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=AT,n=OT,r=TT,i=IT,o=g=>g==null,s=Symbol("encodeFragmentIdentifier");function a(g){switch(g.arrayFormat){case"index":return v=>(x,E)=>{const S=x.length;return E===void 0||g.skipNull&&E===null||g.skipEmptyString&&E===""?x:E===null?[...x,[c(v,g),"[",S,"]"].join("")]:[...x,[c(v,g),"[",c(S,g),"]=",c(E,g)].join("")]};case"bracket":return v=>(x,E)=>E===void 0||g.skipNull&&E===null||g.skipEmptyString&&E===""?x:E===null?[...x,[c(v,g),"[]"].join("")]:[...x,[c(v,g),"[]=",c(E,g)].join("")];case"colon-list-separator":return v=>(x,E)=>E===void 0||g.skipNull&&E===null||g.skipEmptyString&&E===""?x:E===null?[...x,[c(v,g),":list="].join("")]:[...x,[c(v,g),":list=",c(E,g)].join("")];case"comma":case"separator":case"bracket-separator":{const v=g.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(E,S)=>S===void 0||g.skipNull&&S===null||g.skipEmptyString&&S===""?E:(S=S===null?"":S,E.length===0?[[c(x,g),v,c(S,g)].join("")]:[[E,c(S,g)].join(g.arrayFormatSeparator)])}default:return v=>(x,E)=>E===void 0||g.skipNull&&E===null||g.skipEmptyString&&E===""?x:E===null?[...x,c(v,g)]:[...x,[c(v,g),"=",c(E,g)].join("")]}}function l(g){let v;switch(g.arrayFormat){case"index":return(x,E,S)=>{if(v=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!v){S[x]=E;return}S[x]===void 0&&(S[x]={}),S[x][v[1]]=E};case"bracket":return(x,E,S)=>{if(v=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!v){S[x]=E;return}if(S[x]===void 0){S[x]=[E];return}S[x]=[].concat(S[x],E)};case"colon-list-separator":return(x,E,S)=>{if(v=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!v){S[x]=E;return}if(S[x]===void 0){S[x]=[E];return}S[x]=[].concat(S[x],E)};case"comma":case"separator":return(x,E,S)=>{const d=typeof E=="string"&&E.includes(g.arrayFormatSeparator),P=typeof E=="string"&&!d&&f(E,g).includes(g.arrayFormatSeparator);E=P?f(E,g):E;const O=d||P?E.split(g.arrayFormatSeparator).map(T=>f(T,g)):E===null?E:f(E,g);S[x]=O};case"bracket-separator":return(x,E,S)=>{const d=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!d){S[x]=E&&f(E,g);return}const P=E===null?[]:E.split(g.arrayFormatSeparator).map(O=>f(O,g));if(S[x]===void 0){S[x]=P;return}S[x]=[].concat(S[x],P)};default:return(x,E,S)=>{if(S[x]===void 0){S[x]=E;return}S[x]=[].concat(S[x],E)}}}function u(g){if(typeof g!="string"||g.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(g,v){return v.encode?v.strict?e(g):encodeURIComponent(g):g}function f(g,v){return v.decode?n(g):g}function p(g){return Array.isArray(g)?g.sort():typeof g=="object"?p(Object.keys(g)).sort((v,x)=>Number(v)-Number(x)).map(v=>g[v]):g}function w(g){const v=g.indexOf("#");return v!==-1&&(g=g.slice(0,v)),g}function y(g){let v="";const x=g.indexOf("#");return x!==-1&&(v=g.slice(x)),v}function C(g){g=w(g);const v=g.indexOf("?");return v===-1?"":g.slice(v+1)}function _(g,v){return v.parseNumbers&&!Number.isNaN(Number(g))&&typeof g=="string"&&g.trim()!==""?g=Number(g):v.parseBooleans&&g!==null&&(g.toLowerCase()==="true"||g.toLowerCase()==="false")&&(g=g.toLowerCase()==="true"),g}function b(g,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),u(v.arrayFormatSeparator);const x=l(v),E=Object.create(null);if(typeof g!="string"||(g=g.trim().replace(/^[?#&]/,""),!g))return E;for(const S of g.split("&")){if(S==="")continue;let[d,P]=r(v.decode?S.replace(/\+/g," "):S,"=");P=P===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?P:f(P,v),x(f(d,v),P,E)}for(const S of Object.keys(E)){const d=E[S];if(typeof d=="object"&&d!==null)for(const P of Object.keys(d))d[P]=_(d[P],v);else E[S]=_(d,v)}return v.sort===!1?E:(v.sort===!0?Object.keys(E).sort():Object.keys(E).sort(v.sort)).reduce((S,d)=>{const P=E[d];return P&&typeof P=="object"&&!Array.isArray(P)?S[d]=p(P):S[d]=P,S},Object.create(null))}t.extract=C,t.parse=b,t.stringify=(g,v)=>{if(!g)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),u(v.arrayFormatSeparator);const x=P=>v.skipNull&&o(g[P])||v.skipEmptyString&&g[P]==="",E=a(v),S={};for(const P of Object.keys(g))x(P)||(S[P]=g[P]);const d=Object.keys(S);return v.sort!==!1&&d.sort(v.sort),d.map(P=>{const O=g[P];return O===void 0?"":O===null?c(P,v):Array.isArray(O)?O.length===0&&v.arrayFormat==="bracket-separator"?c(P,v)+"[]":O.reduce(E(P),[]).join("&"):c(P,v)+"="+c(O,v)}).filter(P=>P.length>0).join("&")},t.parseUrl=(g,v)=>{v=Object.assign({decode:!0},v);const[x,E]=r(g,"#");return Object.assign({url:x.split("?")[0]||"",query:b(C(g),v)},v&&v.parseFragmentIdentifier&&E?{fragmentIdentifier:f(E,v)}:{})},t.stringifyUrl=(g,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);const x=w(g.url).split("?")[0]||"",E=t.extract(g.url),S=t.parse(E,{sort:!1}),d=Object.assign(S,g.query);let P=t.stringify(d,v);P&&(P=`?${P}`);let O=y(g.url);return g.fragmentIdentifier&&(O=`#${v[s]?c(g.fragmentIdentifier,v):g.fragmentIdentifier}`),`${x}${P}${O}`},t.pick=(g,v,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:E,query:S,fragmentIdentifier:d}=t.parseUrl(g,x);return t.stringifyUrl({url:E,query:i(S,v),fragmentIdentifier:d},x)},t.exclude=(g,v,x)=>{const E=Array.isArray(v)?S=>!v.includes(S):(S,d)=>!v(S,d);return t.pick(g,E,x)}})(zl);const NT={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},RT=":";function DR(t){const[e,n]=t.split(RT);return{namespace:e,reference:n}}function kR(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const i=t[r];n.push(...i.accounts)}),n}function C4(t,e){return t.includes(":")?[t]:e.chains||[]}const E4="base10",Zt="base16",Op="base64pad",zg="utf8",_4=0,pu=1,MT=0,ry=1,Tp=12,Hg=32;function OR(){const t=Lg.generateKeyPair();return{privateKey:Wn(t.secretKey,Zt),publicKey:Wn(t.publicKey,Zt)}}function TR(){const t=xf.randomBytes(Hg);return Wn(t,Zt)}function IR(t,e){const n=Lg.sharedKey(Rn(t,Zt),Rn(e,Zt),!0),r=new Ek(Sf.SHA256,n).expand(Hg);return Wn(r,Zt)}function NR(t){const e=Sf.hash(Rn(t,Zt));return Wn(e,Zt)}function RR(t){const e=Sf.hash(Rn(t,zg));return Wn(e,Zt)}function BT(t){return Rn(`${t}`,E4)}function Af(t){return Number(Wn(t,E4))}function MR(t){const e=BT(typeof t.type<"u"?t.type:_4);if(Af(e)===pu&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?Rn(t.senderPublicKey,Zt):void 0,r=typeof t.iv<"u"?Rn(t.iv,Zt):xf.randomBytes(Tp),i=new Bg.ChaCha20Poly1305(Rn(t.symKey,Zt)).seal(r,Rn(t.message,zg));return UT({type:e,sealed:i,iv:r,senderPublicKey:n})}function BR(t){const e=new Bg.ChaCha20Poly1305(Rn(t.symKey,Zt)),{sealed:n,iv:r}=S4(t.encoded),i=e.open(r,n);if(i===null)throw new Error("Failed to decrypt");return Wn(i,zg)}function UT(t){if(Af(t.type)===pu){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Wn(U2([t.type,t.senderPublicKey,t.iv,t.sealed]),Op)}return Wn(U2([t.type,t.iv,t.sealed]),Op)}function S4(t){const e=Rn(t,Op),n=e.slice(MT,ry),r=ry;if(Af(n)===pu){const a=r+Hg,l=a+Tp,u=e.slice(r,a),c=e.slice(a,l),f=e.slice(l);return{type:n,sealed:f,iv:c,senderPublicKey:u}}const i=r+Tp,o=e.slice(r,i),s=e.slice(i);return{type:n,sealed:s,iv:o}}function UR(t,e){const n=S4(t);return LT({type:Af(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?Wn(n.senderPublicKey,Zt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function LT(t){const e=(t==null?void 0:t.type)||_4;if(e===pu){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function LR(t){return t.type===pu&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var FT=Object.defineProperty,iy=Object.getOwnPropertySymbols,jT=Object.prototype.hasOwnProperty,WT=Object.prototype.propertyIsEnumerable,oy=(t,e,n)=>e in t?FT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sy=(t,e)=>{for(var n in e||(e={}))jT.call(e,n)&&oy(t,n,e[n]);if(iy)for(var n of iy(e))WT.call(e,n)&&oy(t,n,e[n]);return t};const zT="ReactNative",on={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},HT="js";function $4(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function Df(){return!y4()&&!!jg()&&navigator.product===zT}function Vg(){return!$4()&&!!jg()}function gu(){return Df()?on.reactNative:$4()?on.node:Vg()?on.browser:on.unknown}function VT(t,e){let n=zl.parse(t);return n=sy(sy({},n),e),t=zl.stringify(n),t}function FR(){return b4()||{name:"",description:"",url:"",icons:[""]}}function qT(){if(gu()===on.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=UO();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function GT(){var t;const e=gu();return e===on.browser?[e,((t=v4())==null?void 0:t.host)||"unknown"].join(":"):e}function KT(t,e,n){const r=qT(),i=GT();return[[t,e].join("-"),[HT,n].join("-"),r,i].join("/")}function jR({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=KT(t,e,r),u={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},c=VT(a[1]||"",u);return a[0]+"?"+c}function qi(t,e){return t.filter(n=>e.includes(n)).length===t.length}function WR(t){return Object.fromEntries(t.entries())}function zR(t){return new Map(Object.entries(t))}function HR(t=Qi.FIVE_MINUTES,e){const n=Qi.toMiliseconds(t||Qi.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},n),r=s,i=a})}}function VR(t,e,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),e);try{const s=await t;r(s)}catch(s){i(s)}clearTimeout(o)})}function P4(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function qR(t){return P4("topic",t)}function GR(t){return P4("id",t)}function KR(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function ZR(t,e){return Qi.fromMiliseconds((e||Date.now())+Qi.toMiliseconds(t))}function QR(t){return Date.now()>=Qi.toMiliseconds(t)}function YR(t,e){return`${t}${e?`:${e}`:""}`}function B0(t=[],e=[]){return[...new Set([...t,...e])]}async function JR({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=gu();s===on.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===on.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const ZT="irn";function XR(t){return(t==null?void 0:t.relay)||{protocol:ZT}}function eM(t){const e=NT[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var QT=Object.defineProperty,ay=Object.getOwnPropertySymbols,YT=Object.prototype.hasOwnProperty,JT=Object.prototype.propertyIsEnumerable,ly=(t,e,n)=>e in t?QT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,XT=(t,e)=>{for(var n in e||(e={}))YT.call(e,n)&&ly(t,n,e[n]);if(ay)for(var n of ay(e))JT.call(e,n)&&ly(t,n,e[n]);return t};function eI(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=t[i];n[o]=s}}),n}function tM(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n).split("@"),o=typeof n<"u"?t.substring(n):"",s=zl.parse(o);return{protocol:r,topic:tI(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:eI(s)}}function tI(t){return t.startsWith("//")?t.substring(2):t}function nI(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(i=>{const o=n+e+i;t[i]&&(r[o]=t[i])}),r}function nM(t){return`${t.protocol}:${t.topic}@${t.version}?`+zl.stringify(XT({symKey:t.symKey},nI(t.relay)))}var rI=Object.defineProperty,iI=Object.defineProperties,oI=Object.getOwnPropertyDescriptors,uy=Object.getOwnPropertySymbols,sI=Object.prototype.hasOwnProperty,aI=Object.prototype.propertyIsEnumerable,cy=(t,e,n)=>e in t?rI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,lI=(t,e)=>{for(var n in e||(e={}))sI.call(e,n)&&cy(t,n,e[n]);if(uy)for(var n of uy(e))aI.call(e,n)&&cy(t,n,e[n]);return t},uI=(t,e)=>iI(t,oI(e));function Zs(t){const e=[];return t.forEach(n=>{const[r,i]=n.split(":");e.push(`${r}:${i}`)}),e}function cI(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Zs(n.accounts))}),e}function dI(t,e){const n=[];return Object.values(t).forEach(r=>{Zs(r.accounts).includes(e)&&n.push(...r.methods)}),n}function fI(t,e){const n=[];return Object.values(t).forEach(r=>{Zs(r.accounts).includes(e)&&n.push(...r.events)}),n}function rM(t,e){const n=CI(t,e);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(t))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function A4(t){return t.includes(":")}function hI(t){return A4(t)?t.split(":")[0]:t}function D4(t){var e,n,r;const i={};if(!qg(t))return i;for(const[o,s]of Object.entries(t)){const a=A4(o)?[o]:s.chains,l=s.methods||[],u=s.events||[],c=hI(o);i[c]=uI(lI({},i[c]),{chains:B0(a,(e=i[c])==null?void 0:e.chains),methods:B0(l,(n=i[c])==null?void 0:n.methods),events:B0(u,(r=i[c])==null?void 0:r.events)})}return i}const pI={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},gI={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function qr(t,e){const{message:n,code:r}=gI[t];return{message:e?`${n} ${e}`:n,code:r}}function Ts(t,e){const{message:n,code:r}=pI[t];return{message:e?`${n} ${e}`:n,code:r}}function kf(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function qg(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Yi(t){return typeof t>"u"}function An(t,e){return e&&Yi(t)?!0:typeof t=="string"&&!!t.trim().length}function Gg(t,e){return e&&Yi(t)?!0:typeof t=="number"&&!isNaN(t)}function iM(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),i=Object.keys(n);let o=!0;return qi(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:u}=t.namespaces[s],c=Zs(a),f=n[s];(!qi(C4(s,f),c)||!qi(f.methods,l)||!qi(f.events,u))&&(o=!1)}),o):!1}function wd(t){return An(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function mI(t){if(An(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&wd(n)}}return!1}function oM(t){if(An(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function sM(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function aM(t){return t==null?void 0:t.topic}function lM(t,e){let n=null;return An(t==null?void 0:t.publicKey,!1)||(n=qr("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function dy(t){let e=!0;return kf(t)?t.length&&(e=t.every(n=>An(n,!1))):e=!1,e}function wI(t,e,n){let r=null;return kf(e)&&e.length?e.forEach(i=>{r||wd(i)||(r=Ts("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):wd(t)||(r=Ts("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function yI(t,e,n){let r=null;return Object.entries(t).forEach(([i,o])=>{if(r)return;const s=wI(i,C4(i,o),`${e} ${n}`);s&&(r=s)}),r}function vI(t,e){let n=null;return kf(t)?t.forEach(r=>{n||mI(r)||(n=Ts("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Ts("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function bI(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=vI(r==null?void 0:r.accounts,`${e} namespace`);i&&(n=i)}),n}function xI(t,e){let n=null;return dy(t==null?void 0:t.methods)?dy(t==null?void 0:t.events)||(n=Ts("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=Ts("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function k4(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=xI(r,`${e}, namespace`);i&&(n=i)}),n}function uM(t,e,n){let r=null;if(t&&qg(t)){const i=k4(t,e);i&&(r=i);const o=yI(t,e,n);o&&(r=o)}else r=qr("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function CI(t,e){let n=null;if(t&&qg(t)){const r=k4(t,e);r&&(n=r);const i=bI(t,e);i&&(n=i)}else n=qr("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function EI(t){return An(t.protocol,!0)}function cM(t,e){let n=!1;return e&&!t?n=!0:t&&kf(t)&&t.length&&t.forEach(r=>{n=EI(r)}),n}function dM(t){return typeof t=="number"}function fM(t){return typeof t<"u"&&typeof t!==null}function hM(t){return!(!t||typeof t!="object"||!t.code||!Gg(t.code,!1)||!t.message||!An(t.message,!1))}function pM(t){return!(Yi(t)||!An(t.method,!1))}function gM(t){return!(Yi(t)||Yi(t.result)&&Yi(t.error)||!Gg(t.id,!1)||!An(t.jsonrpc,!1))}function mM(t){return!(Yi(t)||!An(t.name,!1))}function wM(t,e){return!(!wd(e)||!cI(t).includes(e))}function yM(t,e,n){return An(n,!1)?dI(t,e).includes(n):!1}function vM(t,e,n){return An(n,!1)?fI(t,e).includes(n):!1}function bM(t,e,n){let r=null;const i=_I(t),o=SI(e),s=Object.keys(i),a=Object.keys(o),l=fy(Object.keys(t)),u=fy(Object.keys(e)),c=l.filter(f=>!u.includes(f));return c.length&&(r=qr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${c.toString()}
      Received: ${Object.keys(e).toString()}`)),qi(s,a)||(r=qr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(f=>{if(!f.includes(":")||r)return;const p=Zs(e[f].accounts);p.includes(f)||(r=qr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`))}),s.forEach(f=>{r||(qi(i[f].methods,o[f].methods)?qi(i[f].events,o[f].events)||(r=qr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${f}`)):r=qr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${f}`))}),r}function _I(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(i=>{e[i]={methods:t[n].methods,events:t[n].events}})}),e}function fy(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function SI(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Zs(t[n].accounts);r==null||r.forEach(i=>{e[i]={accounts:t[n].accounts.filter(o=>o.includes(`${i}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function xM(t,e){return Gg(t,!1)&&t<=e.max&&t>=e.min}function CM(){const t=gu();return new Promise(e=>{switch(t){case on.browser:e($I());break;case on.reactNative:e(PI());break;case on.node:e(AI());break;default:e(!0)}})}function $I(){return Vg()&&(navigator==null?void 0:navigator.onLine)}async function PI(){if(Df()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function AI(){return!0}function EM(t){switch(gu()){case on.browser:DI(t);break;case on.reactNative:kI(t);break}}function DI(t){!Df()&&Vg()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function kI(t){Df()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const U0={};class _M{static get(e){return U0[e]}static set(e,n){U0[e]=n}static delete(e){delete U0[e]}}var O4="eip155",OI="store",T4="requestedChains",Ip="wallet_addEthereumChain",Ve,ja,cc,Np,Kg,I4,dc,Rp,Mp,N4,yd,Zg,To,Ea,vd,Qg,bd,Yg,xd,Jg,TI=class extends lg{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),jt(this,cc),jt(this,Kg),jt(this,dc),jt(this,Mp),jt(this,yd),jt(this,To),jt(this,vd),jt(this,bd),jt(this,xd),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,jt(this,Ve,void 0),jt(this,ja,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Un(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{pt(this,To,Ea).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},pt(this,cc,Np).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const y=(n=this.storage)==null?void 0:n.getItem(OI),C=(o=(i=(r=y==null?void 0:y.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;C&&!this.isChainUnsupported(C)?a=C:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();pt(this,Mp,N4).call(this);const u=pt(this,dc,Rp).call(this);if(l.session&&u&&await l.disconnect(),!l.session||u){const y=this.chains.filter(C=>C.id!==a).map(C=>C.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,chains:[a],optionalChains:y.length?y:void 0}),pt(this,To,Ea).call(this,this.chains.map(({id:C})=>C))}const c=await l.enable(),f=Un(c[0]),p=await this.getChainId(),w=this.isChainUnsupported(p);return{account:f,chain:{id:p,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Ht(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{pt(this,yd,Zg).call(this),pt(this,To,Ea).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Un(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return Te(this,Ve)||await pt(this,cc,Np).call(this),t&&await this.switchChain(t),Te(this,Ve)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return sg({account:n,chain:r,transport:tg(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=pt(this,dc,Rp).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new Er(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=pt(this,bd,Yg).call(this),s=pt(this,xd,Jg).call(this);if(!o.includes(t)&&s.includes(Ip)){await i.request({method:Ip,params:[{chainId:he(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=pt(this,vd,Qg).call(this);l.push(t),pt(this,To,Ea).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:he(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Ht(i):new Er(i)}}};Ve=new WeakMap;ja=new WeakMap;cc=new WeakSet;Np=async function(){return!Te(this,ja)&&typeof window<"u"&&Cl(this,ja,pt(this,Kg,I4).call(this)),Te(this,ja)};Kg=new WeakSet;I4=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:n}=await fs(()=>import("./index.es-rv0CIRM7.js"),__vite__mapDeps([2,1])),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:u}=this.options;Cl(this,Ve,await t.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:e,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(c=>[c.id,c.rpcUrls.default.http[0]])),metadata:l,relayUrl:u}))}};dc=new WeakSet;Rp=function(){if(pt(this,xd,Jg).call(this).includes(Ip)||!this.options.isNewChainsStale)return!1;const e=pt(this,vd,Qg).call(this),n=this.chains.map(({id:i})=>i),r=pt(this,bd,Yg).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};Mp=new WeakSet;N4=function(){Te(this,Ve)&&(pt(this,yd,Zg).call(this),Te(this,Ve).on("accountsChanged",this.onAccountsChanged),Te(this,Ve).on("chainChanged",this.onChainChanged),Te(this,Ve).on("disconnect",this.onDisconnect),Te(this,Ve).on("session_delete",this.onDisconnect),Te(this,Ve).on("display_uri",this.onDisplayUri),Te(this,Ve).on("connect",this.onConnect))};yd=new WeakSet;Zg=function(){Te(this,Ve)&&(Te(this,Ve).removeListener("accountsChanged",this.onAccountsChanged),Te(this,Ve).removeListener("chainChanged",this.onChainChanged),Te(this,Ve).removeListener("disconnect",this.onDisconnect),Te(this,Ve).removeListener("session_delete",this.onDisconnect),Te(this,Ve).removeListener("display_uri",this.onDisplayUri),Te(this,Ve).removeListener("connect",this.onConnect))};To=new WeakSet;Ea=function(t){var e;(e=this.storage)==null||e.setItem(T4,t)};vd=new WeakSet;Qg=function(){var t;return((t=this.storage)==null?void 0:t.getItem(T4))??[]};bd=new WeakSet;Yg=function(){var r,i,o;if(!Te(this,Ve))return[];const t=(r=Te(this,Ve).session)==null?void 0:r.namespaces;return t?((o=(i=D4(t)[O4])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};xd=new WeakSet;Jg=function(){var r,i;if(!Te(this,Ve))return[];const t=(r=Te(this,Ve).session)==null?void 0:r.namespaces;return t?((i=D4(t)[O4])==null?void 0:i.methods)??[]:[]};function II(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const NI=oe.getBlockchainApiUrl();function RI({projectId:t}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${NI}/v1/?chainId=${we.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function MI({projectId:t,chains:e,metadata:n}){const{publicClient:r}=u9(e,[RI({projectId:t}),II()]);return LD({autoConnect:!0,connectors:[new TI({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}}),new WA({chains:e}),new ug({chains:e,options:{shimDisconnect:!0}}),new zD({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}let Vu;function BI(t){return Vu||(Vu=new jA({...t,_sdkVersion:`react-wagmi-${we.VERSION}`}),dx(Vu)),Vu}const R4={hubm:{id:248,name:"Oasys Mainnet",network:"hubm",nativeCurrency:{name:"OAS",symbol:"OAS",decimals:18},rpcUrls:{default:{http:["https://rpc.mainnet.oasys.games"]},public:{http:["https://rpc.mainnet.oasys.games"]}},blockExplorers:{default:{name:"blockscout",url:"https://explorer.oasys.games"}}},hubt:{id:9372,name:"Oasys Testnet",network:"hubt",nativeCurrency:{name:"OAS",symbol:"OAS",decimals:18},rpcUrls:{default:{http:["https://rpc.testnet.oasys.games"]},public:{http:["https://rpc.testnet.oasys.games"]}},blockExplorers:{default:{name:"blockscout",url:"https://explorer.testnet.oasys.games"}}},localhost:{id:31337,name:"Localhost",network:"localhost",nativeCurrency:{name:"OAS",symbol:"OAS",decimals:18},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}},blockExplorers:{default:{name:"blockscout",url:""}}}},M4="c416b8362678f52843a0f754abf83b7e",B4=[R4.hubt],U4=MI({chains:B4,projectId:M4,metadata:{name:"Web3Modal React Example"}});BI({wagmiConfig:U4,projectId:M4,chains:B4,themeMode:"light",themeVariables:{"--w3m-color-mix":"#00DCFF","--w3m-color-mix-strength":20},defaultChain:R4.hubt});function UI(){const t=hx(),e=px(),{themeMode:n,themeVariables:r,setThemeMode:i}=fx(),o=gx();return tn.jsxs(WD,{config:U4,children:[tn.jsx("w3m-button",{}),tn.jsx("w3m-network-button",{}),tn.jsx("w3m-connect-button",{}),tn.jsx("w3m-account-button",{}),tn.jsx("button",{onClick:()=>t.open(),children:"Connect Wallet"}),tn.jsx("button",{onClick:()=>t.open({view:"Networks"}),children:"Choose Network"}),tn.jsx("button",{onClick:()=>i(n==="dark"?"light":"dark"),children:"Toggle Theme Mode"}),tn.jsx("pre",{children:JSON.stringify(e,null,2)}),tn.jsx("pre",{children:JSON.stringify({themeMode:n,themeVariables:r},null,2)}),tn.jsx("pre",{children:JSON.stringify(o,null,2)})]})}L0.createRoot(document.getElementById("root")).render(tn.jsx(e6.StrictMode,{children:tn.jsx(UI,{})}));export{nE as $,Sr as A,Tl as B,_n as C,nr as D,lp as E,Sn as F,Il as G,rd as H,Nl as I,lo as J,id as K,yi as L,hp as M,co as N,rr as O,nd as P,Ml as Q,$r as R,As as S,qo as T,Re as U,ao as V,op as W,Bt as X,Qt as Y,ad as Z,z7 as _,N_ as a,KR as a$,rE as a0,iE as a1,p5 as a2,W7 as a3,ic as a4,Hl as a5,Ft as a6,Si as a7,LI as a8,fs as a9,OR as aA,TR as aB,IR as aC,NR as aD,LT as aE,LR as aF,MR as aG,UR as aH,BR as aI,S4 as aJ,Af as aK,Zt as aL,VR as aM,CM as aN,jR as aO,EM as aP,pu as aQ,ZR as aR,nM as aS,tM as aT,HR as aU,YR as aV,Ts as aW,QR as aX,fM as aY,oM as aZ,An as a_,G as aa,Ud as ab,Mt as ac,us as ad,sl as ae,KC as af,Ql as ag,Cr as ah,Kd as ai,Ia as aj,tr as ak,au as al,gy as am,Pf as an,Qi as ao,ge as ap,Hn as aq,xf as ar,Rn as as,Wn as at,U2 as au,Bp as av,Yi as aw,sM as ax,aM as ay,qr as az,vs as b,qR as b0,GR as b1,Df as b2,Vg as b3,$4 as b4,WR as b5,zR as b6,RR as b7,XR as b8,eM as b9,kR as bA,Ak as bB,qb as bC,zO as bD,kf as ba,FR as bb,qg as bc,rM as bd,JR as be,iM as bf,_M as bg,cM as bh,uM as bi,CI as bj,bM as bk,hM as bl,EI as bm,lM as bn,wM as bo,pM as bp,yM as bq,xM as br,gM as bs,mM as bt,vM as bu,dM as bv,hI as bw,A4 as bx,B0 as by,DR as bz,K as c,Dl as d,sp as e,kl as f,Kc as g,bs as h,I_ as i,xs as j,Zc as k,_r as l,Qc as m,Cs as n,gi as o,Yc as p,mi as q,wi as r,X5 as s,Ol as t,Es as u,Xc as v,jn as w,uo as x,ed as y,td as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-lKrfZi3q.js","assets/events-V6GCmsqX.js","assets/index.es-rv0CIRM7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}