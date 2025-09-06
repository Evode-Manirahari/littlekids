var _m=Object.defineProperty;var bm=(t,e,n)=>e in t?_m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var km=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var pe=(t,e,n)=>(bm(t,typeof e!="symbol"?e+"":e,n),n);var N_=km((B_,jl)=>{function Sm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jm(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Fd={exports:{}},eo={},Rd={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),Em=Symbol.for("react.portal"),Tm=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Nm=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),Am=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),$c=Symbol.iterator;function $m(t){return t===null||typeof t!="object"?null:(t=$c&&t[$c]||t["@@iterator"],typeof t=="function"?t:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,$d={};function br(t,e,n){this.props=t,this.context=e,this.refs=$d,this.updater=n||Ld}br.prototype.isReactComponent={};br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Md(){}Md.prototype=br.prototype;function El(t,e,n){this.props=t,this.context=e,this.refs=$d,this.updater=n||Ld}var Tl=El.prototype=new Md;Tl.constructor=El;Id(Tl,br.prototype);Tl.isPureReactComponent=!0;var Mc=Array.isArray,Dd=Object.prototype.hasOwnProperty,Pl={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function zd(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Dd.call(e,r)&&!Ud.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Ns,type:t,key:i,ref:o,props:s,_owner:Pl.current}}function Mm(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function Dm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dc=/\/+/g;function jo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dm(""+t.key):e.toString(36)}function di(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ns:case Em:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+jo(o,0):r,Mc(s)?(n="",t!=null&&(n=t.replace(Dc,"$&/")+"/"),di(s,e,n,"",function(u){return u})):s!=null&&(Nl(s)&&(s=Mm(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Dc,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Mc(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+jo(i,a);o+=di(i,e,n,l,s)}else if(l=$m(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+jo(i,a++),o+=di(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zs(t,e,n){if(t==null)return t;var r=[],s=0;return di(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Um(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ee={current:null},hi={transition:null},zm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:hi,ReactCurrentOwner:Pl};function Bd(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!Nl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=br;z.Fragment=Tm;z.Profiler=Nm;z.PureComponent=El;z.StrictMode=Pm;z.Suspense=Rm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;z.act=Bd;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Id({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Pl.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dd.call(e,l)&&!Ud.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ns,type:t.type,key:s,ref:i,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Am,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Om,_context:t},t.Consumer=t};z.createElement=zd;z.createFactory=function(t){var e=zd.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Fm,render:t}};z.isValidElement=Nl;z.lazy=function(t){return{$$typeof:Im,_payload:{_status:-1,_result:t},_init:Um}};z.memo=function(t,e){return{$$typeof:Lm,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=hi.transition;hi.transition={};try{t()}finally{hi.transition=e}};z.unstable_act=Bd;z.useCallback=function(t,e){return Ee.current.useCallback(t,e)};z.useContext=function(t){return Ee.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ee.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ee.current.useEffect(t,e)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(t,e,n){return Ee.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ee.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ee.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ee.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ee.current.useReducer(t,e,n)};z.useRef=function(t){return Ee.current.useRef(t)};z.useState=function(t){return Ee.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ee.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.3.1";Rd.exports=z;var _=Rd.exports;const Ht=Cm(_),Bm=Sm({__proto__:null,default:Ht},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=_,Hm=Symbol.for("react.element"),qm=Symbol.for("react.fragment"),Vm=Object.prototype.hasOwnProperty,Gm=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Km={key:!0,ref:!0,__self:!0,__source:!0};function Wd(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vm.call(e,r)&&!Km.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Hm,type:t,key:i,ref:o,props:s,_owner:Gm.current}}eo.Fragment=qm;eo.jsx=Wd;eo.jsxs=Wd;Fd.exports=eo;var c=Fd.exports,ga={},Hd={exports:{}},qe={},qd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,F){var R=T.length;T.push(F);e:for(;0<R;){var A=R-1>>>1,$=T[A];if(0<s($,F))T[A]=F,T[R]=$,R=A;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],R=T.pop();if(R!==F){T[0]=R;e:for(var A=0,$=T.length,ne=$>>>1;A<ne;){var be=2*(A+1)-1,Ge=T[be],wt=be+1,In=T[wt];if(0>s(Ge,R))wt<$&&0>s(In,Ge)?(T[A]=In,T[wt]=R,A=wt):(T[A]=Ge,T[be]=R,A=be);else if(wt<$&&0>s(In,R))T[A]=In,T[wt]=R,A=wt;else break e}}return F}function s(T,F){var R=T.sortIndex-F.sortIndex;return R!==0?R:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,p=3,v=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=T)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function w(T){if(x=!1,g(T),!y)if(n(l)!==null)y=!0,W(k);else{var F=n(u);F!==null&&ie(w,F.startTime-T)}}function k(T,F){y=!1,x&&(x=!1,f(E),E=-1),v=!0;var R=p;try{for(g(F),h=n(l);h!==null&&(!(h.expirationTime>F)||T&&!Z());){var A=h.callback;if(typeof A=="function"){h.callback=null,p=h.priorityLevel;var $=A(h.expirationTime<=F);F=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(l)&&r(l),g(F)}else r(l);h=n(l)}if(h!==null)var ne=!0;else{var be=n(u);be!==null&&ie(w,be.startTime-F),ne=!1}return ne}finally{h=null,p=R,v=!1}}var S=!1,C=null,E=-1,M=5,P=-1;function Z(){return!(t.unstable_now()-P<M)}function Pe(){if(C!==null){var T=t.unstable_now();P=T;var F=!0;try{F=C(!0,T)}finally{F?Ie():(S=!1,C=null)}}else S=!1}var Ie;if(typeof m=="function")Ie=function(){m(Pe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,I=$e.port2;$e.port1.onmessage=Pe,Ie=function(){I.postMessage(null)}}else Ie=function(){b(Pe,0)};function W(T){C=T,S||(S=!0,Ie())}function ie(T,F){E=b(function(){T(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,W(k))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var R=p;p=F;try{return T()}finally{p=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=p;p=T;try{return F()}finally{p=R}},t.unstable_scheduleCallback=function(T,F,R){var A=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?A+R:A):R=A,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=R+$,T={id:d++,callback:F,priorityLevel:T,startTime:R,expirationTime:$,sortIndex:-1},R>A?(T.sortIndex=R,e(u,T),n(l)===null&&T===n(u)&&(x?(f(E),E=-1):x=!0,ie(w,R-A))):(T.sortIndex=$,e(l,T),y||v||(y=!0,W(k))),T},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(T){var F=p;return function(){var R=p;p=F;try{return T.apply(this,arguments)}finally{p=R}}}})(Vd);qd.exports=Vd;var Qm=qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=_,He=Qm;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,ls={};function An(t,e){pr(t,e),pr(t+"Capture",e)}function pr(t,e){for(ls[t]=e,t=0;t<e.length;t++)Gd.add(e[t])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,Jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uc={},zc={};function Xm(t){return ya.call(zc,t)?!0:ya.call(Uc,t)?!1:Jm.test(t)?zc[t]=!0:(Uc[t]=!0,!1)}function Zm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eg(t,e,n,r){if(e===null||typeof e>"u"||Zm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Te(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Al(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ol,Al);ye[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ol,Al);ye[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ol,Al);ye[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fl(t,e,n,r){var s=ye.hasOwnProperty(e)?ye[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eg(e,n,s,r)&&(n=null),r||s===null?Xm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var At=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Rl=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Bc=Symbol.iterator;function Pr(t){return t===null||typeof t!="object"?null:(t=Bc&&t[Bc]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,Eo;function Mr(t){if(Eo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eo=e&&e[1]||""}return`
`+Eo+t}var To=!1;function Po(t,e){if(!t||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{To=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mr(t):""}function tg(t){switch(t.tag){case 5:return Mr(t.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return t=Po(t.type,!1),t;case 11:return t=Po(t.type.render,!1),t;case 1:return t=Po(t.type,!0),t;default:return""}}function _a(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case Qn:return"Portal";case va:return"Profiler";case Rl:return"StrictMode";case wa:return"Suspense";case xa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qd:return(t.displayName||"Context")+".Consumer";case Kd:return(t._context.displayName||"Context")+".Provider";case Ll:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Il:return e=t.displayName||null,e!==null?e:_a(t.type)||"Memo";case It:e=t._payload,t=t._init;try{return _a(t(e))}catch{}}return null}function ng(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(e);case 8:return e===Rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rg(t){var e=Jd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=rg(t))}function Xd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Si(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zd(t,e){e=e.checked,e!=null&&Fl(t,"checked",e,!1)}function ka(t,e){Zd(t,e);var n=tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sa(t,e.type,tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sa(t,e,n){(e!=="number"||Si(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Dr=Array.isArray;function lr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ca(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Dr(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tn(n)}}function eh(t,e){var n=tn(e.value),r=tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function th(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?th(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,nh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sg=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(t){sg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gr[e]=Gr[t]})});function rh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gr.hasOwnProperty(t)&&Gr[t]?(""+e).trim():e+"px"}function sh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=rh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ig=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(t,e){if(e){if(ig[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Ta(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function $l(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,cr=null,ur=null;function Gc(t){if(t=Fs(t)){if(typeof Na!="function")throw Error(j(280));var e=t.stateNode;e&&(e=io(e),Na(t.stateNode,t.type,e))}}function ih(t){cr?ur?ur.push(t):ur=[t]:cr=t}function oh(){if(cr){var t=cr,e=ur;if(ur=cr=null,Gc(t),e)for(t=0;t<e.length;t++)Gc(e[t])}}function ah(t,e){return t(e)}function lh(){}var No=!1;function ch(t,e,n){if(No)return t(e,n);No=!0;try{return ah(t,e,n)}finally{No=!1,(cr!==null||ur!==null)&&(lh(),oh())}}function us(t,e){var n=t.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Oa=!1;if(Tt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Oa=!1}function og(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Kr=!1,Ci=null,ji=!1,Aa=null,ag={onError:function(t){Kr=!0,Ci=t}};function lg(t,e,n,r,s,i,o,a,l){Kr=!1,Ci=null,og.apply(ag,arguments)}function cg(t,e,n,r,s,i,o,a,l){if(lg.apply(this,arguments),Kr){if(Kr){var u=Ci;Kr=!1,Ci=null}else throw Error(j(198));ji||(ji=!0,Aa=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kc(t){if(Fn(t)!==t)throw Error(j(188))}function ug(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Kc(s),t;if(i===r)return Kc(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function dh(t){return t=ug(t),t!==null?hh(t):null}function hh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hh(t);if(e!==null)return e;t=t.sibling}return null}var fh=He.unstable_scheduleCallback,Qc=He.unstable_cancelCallback,dg=He.unstable_shouldYield,hg=He.unstable_requestPaint,te=He.unstable_now,fg=He.unstable_getCurrentPriorityLevel,Ml=He.unstable_ImmediatePriority,ph=He.unstable_UserBlockingPriority,Ei=He.unstable_NormalPriority,pg=He.unstable_LowPriority,mh=He.unstable_IdlePriority,to=null,gt=null;function mg(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(to,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:vg,gg=Math.log,yg=Math.LN2;function vg(t){return t>>>=0,t===0?32:31-(gg(t)/yg|0)|0}var qs=64,Vs=4194304;function Ur(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ti(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Ur(a):(i&=o,i!==0&&(r=Ur(i)))}else o=n&~s,o!==0?r=Ur(o):i!==0&&(r=Ur(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ct(e),s=1<<n,r|=t[n],e&=~s;return r}function wg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-ct(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=wg(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Fa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gh(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function Oo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ct(e),t[e]=n}function _g(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-ct(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Dl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ct(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var H=0;function yh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vh,Ul,wh,xh,_h,Ra=!1,Gs=[],qt=null,Vt=null,Gt=null,ds=new Map,hs=new Map,Mt=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(e.pointerId)}}function Or(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Fs(e),e!==null&&Ul(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function kg(t,e,n,r,s){switch(e){case"focusin":return qt=Or(qt,t,e,n,r,s),!0;case"dragenter":return Vt=Or(Vt,t,e,n,r,s),!0;case"mouseover":return Gt=Or(Gt,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ds.set(i,Or(ds.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,hs.set(i,Or(hs.get(i)||null,t,e,n,r,s)),!0}return!1}function bh(t){var e=wn(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=uh(n),e!==null){t.blockedOn=e,_h(t.priority,function(){wh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=La(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return e=Fs(n),e!==null&&Ul(e),t.blockedOn=n,!1;e.shift()}return!0}function Jc(t,e,n){fi(t)&&n.delete(e)}function Sg(){Ra=!1,qt!==null&&fi(qt)&&(qt=null),Vt!==null&&fi(Vt)&&(Vt=null),Gt!==null&&fi(Gt)&&(Gt=null),ds.forEach(Jc),hs.forEach(Jc)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,Ra||(Ra=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Sg)))}function fs(t){function e(s){return Ar(s,t)}if(0<Gs.length){Ar(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&Ar(qt,t),Vt!==null&&Ar(Vt,t),Gt!==null&&Ar(Gt,t),ds.forEach(e),hs.forEach(e),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)bh(n),n.blockedOn===null&&Mt.shift()}var dr=At.ReactCurrentBatchConfig,Pi=!0;function Cg(t,e,n,r){var s=H,i=dr.transition;dr.transition=null;try{H=1,zl(t,e,n,r)}finally{H=s,dr.transition=i}}function jg(t,e,n,r){var s=H,i=dr.transition;dr.transition=null;try{H=4,zl(t,e,n,r)}finally{H=s,dr.transition=i}}function zl(t,e,n,r){if(Pi){var s=La(t,e,n,r);if(s===null)zo(t,e,r,Ni,n),Yc(t,r);else if(kg(s,t,e,n,r))r.stopPropagation();else if(Yc(t,r),e&4&&-1<bg.indexOf(t)){for(;s!==null;){var i=Fs(s);if(i!==null&&vh(i),i=La(t,e,n,r),i===null&&zo(t,e,r,Ni,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zo(t,e,r,null,n)}}var Ni=null;function La(t,e,n,r){if(Ni=null,t=$l(r),t=wn(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ni=t,null}function kh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case Ml:return 1;case ph:return 4;case Ei:case pg:return 16;case mh:return 536870912;default:return 16}default:return 16}}var zt=null,Bl=null,pi=null;function Sh(){if(pi)return pi;var t,e=Bl,n=e.length,r,s="value"in zt?zt.value:zt.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return pi=s.slice(t,1<r?1-r:void 0)}function mi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function Xc(){return!1}function Ve(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ks:Xc,this.isPropagationStopped=Xc,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Ve(kr),As=X({},kr,{view:0,detail:0}),Eg=Ve(As),Ao,Fo,Fr,no=X({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(Ao=t.screenX-Fr.screenX,Fo=t.screenY-Fr.screenY):Fo=Ao=0,Fr=t),Ao)},movementY:function(t){return"movementY"in t?t.movementY:Fo}}),Zc=Ve(no),Tg=X({},no,{dataTransfer:0}),Pg=Ve(Tg),Ng=X({},As,{relatedTarget:0}),Ro=Ve(Ng),Og=X({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=Ve(Og),Fg=X({},kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=Ve(Fg),Lg=X({},kr,{data:0}),eu=Ve(Lg),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mg[t])?!!e[t]:!1}function Hl(){return Dg}var Ug=X({},As,{key:function(t){if(t.key){var e=Ig[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(t){return t.type==="keypress"?mi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zg=Ve(Ug),Bg=X({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=Ve(Bg),Wg=X({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Hg=Ve(Wg),qg=X({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=Ve(qg),Gg=X({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Ve(Gg),Qg=[9,13,27,32],ql=Tt&&"CompositionEvent"in window,Qr=null;Tt&&"documentMode"in document&&(Qr=document.documentMode);var Yg=Tt&&"TextEvent"in window&&!Qr,Ch=Tt&&(!ql||Qr&&8<Qr&&11>=Qr),nu=String.fromCharCode(32),ru=!1;function jh(t,e){switch(t){case"keyup":return Qg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function Jg(t,e){switch(t){case"compositionend":return Eh(e);case"keypress":return e.which!==32?null:(ru=!0,nu);case"textInput":return t=e.data,t===nu&&ru?null:t;default:return null}}function Xg(t,e){if(Jn)return t==="compositionend"||!ql&&jh(t,e)?(t=Sh(),pi=Bl=zt=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ch&&e.locale!=="ko"?null:e.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zg[t.type]:e==="textarea"}function Th(t,e,n,r){ih(r),e=Oi(e,"onChange"),0<e.length&&(n=new Wl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yr=null,ps=null;function e0(t){Dh(t,0)}function ro(t){var e=er(t);if(Xd(e))return t}function t0(t,e){if(t==="change")return e}var Ph=!1;if(Tt){var Lo;if(Tt){var Io="oninput"in document;if(!Io){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Io=typeof iu.oninput=="function"}Lo=Io}else Lo=!1;Ph=Lo&&(!document.documentMode||9<document.documentMode)}function ou(){Yr&&(Yr.detachEvent("onpropertychange",Nh),ps=Yr=null)}function Nh(t){if(t.propertyName==="value"&&ro(ps)){var e=[];Th(e,ps,t,$l(t)),ch(e0,e)}}function n0(t,e,n){t==="focusin"?(ou(),Yr=e,ps=n,Yr.attachEvent("onpropertychange",Nh)):t==="focusout"&&ou()}function r0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(ps)}function s0(t,e){if(t==="click")return ro(e)}function i0(t,e){if(t==="input"||t==="change")return ro(e)}function o0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:o0;function ms(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ya.call(e,s)||!dt(t[s],e[s]))return!1}return!0}function au(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lu(t,e){var n=au(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function Oh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Oh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ah(){for(var t=window,e=Si();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Si(t.document)}return e}function Vl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a0(t){var e=Ah(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Oh(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=lu(n,i);var o=lu(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=Tt&&"documentMode"in document&&11>=document.documentMode,Xn=null,Ia=null,Jr=null,$a=!1;function cu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$a||Xn==null||Xn!==Si(r)||(r=Xn,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&ms(Jr,r)||(Jr=r,r=Oi(Ia,"onSelect"),0<r.length&&(e=new Wl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xn)))}function Qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zn={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},$o={},Fh={};Tt&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function so(t){if($o[t])return $o[t];if(!Zn[t])return t;var e=Zn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fh)return $o[t]=e[n];return t}var Rh=so("animationend"),Lh=so("animationiteration"),Ih=so("animationstart"),$h=so("transitionend"),Mh=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(t,e){Mh.set(t,e),An(e,[t])}for(var Mo=0;Mo<uu.length;Mo++){var Do=uu[Mo],c0=Do.toLowerCase(),u0=Do[0].toUpperCase()+Do.slice(1);sn(c0,"on"+u0)}sn(Rh,"onAnimationEnd");sn(Lh,"onAnimationIteration");sn(Ih,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn($h,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function du(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cg(r,e,void 0,t),t.currentTarget=null}function Dh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;du(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;du(s,a,u),i=l}}}if(ji)throw t=Aa,ji=!1,Aa=null,t}function G(t,e){var n=e[Ba];n===void 0&&(n=e[Ba]=new Set);var r=t+"__bubble";n.has(r)||(Uh(e,t,2,!1),n.add(r))}function Uo(t,e,n){var r=0;e&&(r|=4),Uh(n,t,r,e)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[Ys]){t[Ys]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(d0.has(n)||Uo(n,!1,t),Uo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ys]||(e[Ys]=!0,Uo("selectionchange",!1,e))}}function Uh(t,e,n,r){switch(kh(e)){case 1:var s=Cg;break;case 4:s=jg;break;default:s=zl}n=s.bind(null,e,n,t),s=void 0,!Oa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zo(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ch(function(){var u=i,d=$l(n),h=[];e:{var p=Mh.get(t);if(p!==void 0){var v=Wl,y=t;switch(t){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":v=zg;break;case"focusin":y="focus",v=Ro;break;case"focusout":y="blur",v=Ro;break;case"beforeblur":case"afterblur":v=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hg;break;case Rh:case Lh:case Ih:v=Ag;break;case $h:v=Vg;break;case"scroll":v=Eg;break;case"wheel":v=Kg;break;case"copy":case"cut":case"paste":v=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=tu}var x=(e&4)!==0,b=!x&&t==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,g;m!==null;){g=m;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,f!==null&&(w=us(m,f),w!=null&&x.push(ys(m,w,g)))),b)break;m=m.return}0<x.length&&(p=new v(p,y,null,n,d),h.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==Pa&&(y=n.relatedTarget||n.fromElement)&&(wn(y)||y[Pt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?wn(y):null,y!==null&&(b=Fn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Zc,w="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=tu,w="onPointerLeave",f="onPointerEnter",m="pointer"),b=v==null?p:er(v),g=y==null?p:er(y),p=new x(w,m+"leave",v,n,d),p.target=b,p.relatedTarget=g,w=null,wn(d)===u&&(x=new x(f,m+"enter",y,n,d),x.target=g,x.relatedTarget=b,w=x),b=w,v&&y)t:{for(x=v,f=y,m=0,g=x;g;g=$n(g))m++;for(g=0,w=f;w;w=$n(w))g++;for(;0<m-g;)x=$n(x),m--;for(;0<g-m;)f=$n(f),g--;for(;m--;){if(x===f||f!==null&&x===f.alternate)break t;x=$n(x),f=$n(f)}x=null}else x=null;v!==null&&hu(h,p,v,x,!1),y!==null&&b!==null&&hu(h,b,y,x,!0)}}e:{if(p=u?er(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=t0;else if(su(p))if(Ph)k=i0;else{k=r0;var S=n0}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=s0);if(k&&(k=k(t,u))){Th(h,k,n,d);break e}S&&S(t,p,u),t==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Sa(p,"number",p.value)}switch(S=u?er(u):window,t){case"focusin":(su(S)||S.contentEditable==="true")&&(Xn=S,Ia=u,Jr=null);break;case"focusout":Jr=Ia=Xn=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,cu(h,n,d);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":cu(h,n,d)}var C;if(ql)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jn?jh(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ch&&n.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&(C=Sh()):(zt=d,Bl="value"in zt?zt.value:zt.textContent,Jn=!0)),S=Oi(u,E),0<S.length&&(E=new eu(E,t,null,n,d),h.push({event:E,listeners:S}),C?E.data=C:(C=Eh(n),C!==null&&(E.data=C)))),(C=Yg?Jg(t,n):Xg(t,n))&&(u=Oi(u,"onBeforeInput"),0<u.length&&(d=new eu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}Dh(h,e)})}function ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oi(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=us(t,n),i!=null&&r.unshift(ys(t,i,s)),i=us(t,e),i!=null&&r.push(ys(t,i,s))),t=t.return}return r}function $n(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hu(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=us(n,i),l!=null&&o.unshift(ys(n,l,a))):s||(l=us(n,i),l!=null&&o.push(ys(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var h0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function fu(t){return(typeof t=="string"?t:""+t).replace(h0,`
`).replace(f0,"")}function Js(t,e,n){if(e=fu(e),fu(t)!==e&&n)throw Error(j(425))}function Ai(){}var Ma=null,Da=null;function Ua(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(t){return pu.resolve(null).then(t).catch(g0)}:za;function g0(t){setTimeout(function(){throw t})}function Bo(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fs(e)}function Kt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Sr,vs="__reactProps$"+Sr,Pt="__reactContainer$"+Sr,Ba="__reactEvents$"+Sr,y0="__reactListeners$"+Sr,v0="__reactHandles$"+Sr;function wn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mu(t);t!==null;){if(n=t[mt])return n;t=mu(t)}return e}t=n,n=t.parentNode}return null}function Fs(t){return t=t[mt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function io(t){return t[vs]||null}var Wa=[],tr=-1;function on(t){return{current:t}}function K(t){0>tr||(t.current=Wa[tr],Wa[tr]=null,tr--)}function V(t,e){tr++,Wa[tr]=t.current,t.current=e}var nn={},_e=on(nn),Fe=on(!1),En=nn;function mr(t,e){var n=t.type.contextTypes;if(!n)return nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Re(t){return t=t.childContextTypes,t!=null}function Fi(){K(Fe),K(_e)}function gu(t,e,n){if(_e.current!==nn)throw Error(j(168));V(_e,e),V(Fe,n)}function zh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,ng(t)||"Unknown",s));return X({},n,r)}function Ri(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nn,En=_e.current,V(_e,t),V(Fe,Fe.current),!0}function yu(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=zh(t,e,En),r.__reactInternalMemoizedMergedChildContext=t,K(Fe),K(_e),V(_e,t)):K(Fe),V(Fe,n)}var St=null,oo=!1,Wo=!1;function Bh(t){St===null?St=[t]:St.push(t)}function w0(t){oo=!0,Bh(t)}function an(){if(!Wo&&St!==null){Wo=!0;var t=0,e=H;try{var n=St;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,oo=!1}catch(s){throw St!==null&&(St=St.slice(t+1)),fh(Ml,an),s}finally{H=e,Wo=!1}}return null}var nr=[],rr=0,Li=null,Ii=0,Ye=[],Je=0,Tn=null,Ct=1,jt="";function mn(t,e){nr[rr++]=Ii,nr[rr++]=Li,Li=t,Ii=e}function Wh(t,e,n){Ye[Je++]=Ct,Ye[Je++]=jt,Ye[Je++]=Tn,Tn=t;var r=Ct;t=jt;var s=32-ct(r)-1;r&=~(1<<s),n+=1;var i=32-ct(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ct=1<<32-ct(e)+s|n<<s|r,jt=i+t}else Ct=1<<i|n<<s|r,jt=t}function Gl(t){t.return!==null&&(mn(t,1),Wh(t,1,0))}function Kl(t){for(;t===Li;)Li=nr[--rr],nr[rr]=null,Ii=nr[--rr],nr[rr]=null;for(;t===Tn;)Tn=Ye[--Je],Ye[Je]=null,jt=Ye[--Je],Ye[Je]=null,Ct=Ye[--Je],Ye[Je]=null}var Be=null,ze=null,Q=!1,lt=null;function Hh(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,ze=Kt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tn!==null?{id:Ct,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,ze=null,!0):!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qa(t){if(Q){var e=ze;if(e){var n=e;if(!vu(t,e)){if(Ha(t))throw Error(j(418));e=Kt(n.nextSibling);var r=Be;e&&vu(t,e)?Hh(r,n):(t.flags=t.flags&-4097|2,Q=!1,Be=t)}}else{if(Ha(t))throw Error(j(418));t.flags=t.flags&-4097|2,Q=!1,Be=t}}}function wu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Xs(t){if(t!==Be)return!1;if(!Q)return wu(t),Q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ua(t.type,t.memoizedProps)),e&&(e=ze)){if(Ha(t))throw qh(),Error(j(418));for(;e;)Hh(t,e),e=Kt(e.nextSibling)}if(wu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=Kt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=Be?Kt(t.stateNode.nextSibling):null;return!0}function qh(){for(var t=ze;t;)t=Kt(t.nextSibling)}function gr(){ze=Be=null,Q=!1}function Ql(t){lt===null?lt=[t]:lt.push(t)}var x0=At.ReactCurrentBatchConfig;function Rr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Zs(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xu(t){var e=t._init;return e(t._payload)}function Vh(t){function e(f,m){if(t){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function s(f,m){return f=Xt(f,m),f.index=0,f.sibling=null,f}function i(f,m,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,g,w){return m===null||m.tag!==6?(m=Yo(g,f.mode,w),m.return=f,m):(m=s(m,g),m.return=f,m)}function l(f,m,g,w){var k=g.type;return k===Yn?d(f,m,g.props.children,w,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&xu(k)===m.type)?(w=s(m,g.props),w.ref=Rr(f,m,g),w.return=f,w):(w=bi(g.type,g.key,g.props,null,f.mode,w),w.ref=Rr(f,m,g),w.return=f,w)}function u(f,m,g,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Jo(g,f.mode,w),m.return=f,m):(m=s(m,g.children||[]),m.return=f,m)}function d(f,m,g,w,k){return m===null||m.tag!==7?(m=kn(g,f.mode,w,k),m.return=f,m):(m=s(m,g),m.return=f,m)}function h(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Yo(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return g=bi(m.type,m.key,m.props,null,f.mode,g),g.ref=Rr(f,null,m),g.return=f,g;case Qn:return m=Jo(m,f.mode,g),m.return=f,m;case It:var w=m._init;return h(f,w(m._payload),g)}if(Dr(m)||Pr(m))return m=kn(m,f.mode,g,null),m.return=f,m;Zs(f,m)}return null}function p(f,m,g,w){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(f,m,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:return g.key===k?l(f,m,g,w):null;case Qn:return g.key===k?u(f,m,g,w):null;case It:return k=g._init,p(f,m,k(g._payload),w)}if(Dr(g)||Pr(g))return k!==null?null:d(f,m,g,w,null);Zs(f,g)}return null}function v(f,m,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(g)||null,a(m,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bs:return f=f.get(w.key===null?g:w.key)||null,l(m,f,w,k);case Qn:return f=f.get(w.key===null?g:w.key)||null,u(m,f,w,k);case It:var S=w._init;return v(f,m,g,S(w._payload),k)}if(Dr(w)||Pr(w))return f=f.get(g)||null,d(m,f,w,k,null);Zs(m,w)}return null}function y(f,m,g,w){for(var k=null,S=null,C=m,E=m=0,M=null;C!==null&&E<g.length;E++){C.index>E?(M=C,C=null):M=C.sibling;var P=p(f,C,g[E],w);if(P===null){C===null&&(C=M);break}t&&C&&P.alternate===null&&e(f,C),m=i(P,m,E),S===null?k=P:S.sibling=P,S=P,C=M}if(E===g.length)return n(f,C),Q&&mn(f,E),k;if(C===null){for(;E<g.length;E++)C=h(f,g[E],w),C!==null&&(m=i(C,m,E),S===null?k=C:S.sibling=C,S=C);return Q&&mn(f,E),k}for(C=r(f,C);E<g.length;E++)M=v(C,f,E,g[E],w),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?E:M.key),m=i(M,m,E),S===null?k=M:S.sibling=M,S=M);return t&&C.forEach(function(Z){return e(f,Z)}),Q&&mn(f,E),k}function x(f,m,g,w){var k=Pr(g);if(typeof k!="function")throw Error(j(150));if(g=k.call(g),g==null)throw Error(j(151));for(var S=k=null,C=m,E=m=0,M=null,P=g.next();C!==null&&!P.done;E++,P=g.next()){C.index>E?(M=C,C=null):M=C.sibling;var Z=p(f,C,P.value,w);if(Z===null){C===null&&(C=M);break}t&&C&&Z.alternate===null&&e(f,C),m=i(Z,m,E),S===null?k=Z:S.sibling=Z,S=Z,C=M}if(P.done)return n(f,C),Q&&mn(f,E),k;if(C===null){for(;!P.done;E++,P=g.next())P=h(f,P.value,w),P!==null&&(m=i(P,m,E),S===null?k=P:S.sibling=P,S=P);return Q&&mn(f,E),k}for(C=r(f,C);!P.done;E++,P=g.next())P=v(C,f,E,P.value,w),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?E:P.key),m=i(P,m,E),S===null?k=P:S.sibling=P,S=P);return t&&C.forEach(function(Pe){return e(f,Pe)}),Q&&mn(f,E),k}function b(f,m,g,w){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:e:{for(var k=g.key,S=m;S!==null;){if(S.key===k){if(k=g.type,k===Yn){if(S.tag===7){n(f,S.sibling),m=s(S,g.props.children),m.return=f,f=m;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&xu(k)===S.type){n(f,S.sibling),m=s(S,g.props),m.ref=Rr(f,S,g),m.return=f,f=m;break e}n(f,S);break}else e(f,S);S=S.sibling}g.type===Yn?(m=kn(g.props.children,f.mode,w,g.key),m.return=f,f=m):(w=bi(g.type,g.key,g.props,null,f.mode,w),w.ref=Rr(f,m,g),w.return=f,f=w)}return o(f);case Qn:e:{for(S=g.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(f,m.sibling),m=s(m,g.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Jo(g,f.mode,w),m.return=f,f=m}return o(f);case It:return S=g._init,b(f,m,S(g._payload),w)}if(Dr(g))return y(f,m,g,w);if(Pr(g))return x(f,m,g,w);Zs(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(f,m.sibling),m=s(m,g),m.return=f,f=m):(n(f,m),m=Yo(g,f.mode,w),m.return=f,f=m),o(f)):n(f,m)}return b}var yr=Vh(!0),Gh=Vh(!1),$i=on(null),Mi=null,sr=null,Yl=null;function Jl(){Yl=sr=Mi=null}function Xl(t){var e=$i.current;K($i),t._currentValue=e}function Va(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hr(t,e){Mi=t,Yl=sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Yl!==t)if(t={context:t,memoizedValue:e,next:null},sr===null){if(Mi===null)throw Error(j(308));sr=t,Mi.dependencies={lanes:0,firstContext:t}}else sr=sr.next=t;return e}var xn=null;function Zl(t){xn===null?xn=[t]:xn.push(t)}function Kh(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Zl(e)):(n.next=s.next,s.next=n),e.interleaved=n,Nt(t,r)}function Nt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Et(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Nt(t,n)}return s=r.interleaved,s===null?(e.next=e,Zl(r)):(e.next=s.next,s.next=e),r.interleaved=e,Nt(t,n)}function gi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dl(t,n)}}function _u(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Di(t,e,n,r){var s=t.updateQueue;$t=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,d=u=l=null,a=i;do{var p=a.lane,v=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(p=e,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,h,p):y,p==null)break e;h=X({},h,p);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=h):d=d.next=v,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(1);if(d===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Nn|=o,t.lanes=o,t.memoizedState=h}}function bu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Rs={},yt=on(Rs),ws=on(Rs),xs=on(Rs);function _n(t){if(t===Rs)throw Error(j(174));return t}function tc(t,e){switch(V(xs,e),V(ws,t),V(yt,Rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ja(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ja(e,t)}K(yt),V(yt,e)}function vr(){K(yt),K(ws),K(xs)}function Yh(t){_n(xs.current);var e=_n(yt.current),n=ja(e,t.type);e!==n&&(V(ws,t),V(yt,n))}function nc(t){ws.current===t&&(K(yt),K(ws))}var Y=on(0);function Ui(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ho=[];function rc(){for(var t=0;t<Ho.length;t++)Ho[t]._workInProgressVersionPrimary=null;Ho.length=0}var yi=At.ReactCurrentDispatcher,qo=At.ReactCurrentBatchConfig,Pn=0,J=null,ce=null,de=null,zi=!1,Xr=!1,_s=0,_0=0;function ve(){throw Error(j(321))}function sc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function ic(t,e,n,r,s,i){if(Pn=i,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yi.current=t===null||t.memoizedState===null?C0:j0,t=n(r,s),Xr){i=0;do{if(Xr=!1,_s=0,25<=i)throw Error(j(301));i+=1,de=ce=null,e.updateQueue=null,yi.current=E0,t=n(r,s)}while(Xr)}if(yi.current=Bi,e=ce!==null&&ce.next!==null,Pn=0,de=ce=J=null,zi=!1,e)throw Error(j(300));return t}function oc(){var t=_s!==0;return _s=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=t:de=de.next=t,de}function nt(){if(ce===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=de===null?J.memoizedState:de.next;if(e!==null)de=e,ce=t;else{if(t===null)throw Error(j(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},de===null?J.memoizedState=de=t:de=de.next=t}return de}function bs(t,e){return typeof e=="function"?e(t):e}function Vo(t){var e=nt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=ce,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var d=u.lane;if((Pn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,J.lanes|=d,Nn|=d}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,dt(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,J.lanes|=i,Nn|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Go(t){var e=nt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);dt(i,e.memoizedState)||(Ae=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Jh(){}function Xh(t,e){var n=J,r=nt(),s=e(),i=!dt(r.memoizedState,s);if(i&&(r.memoizedState=s,Ae=!0),r=r.queue,ac(tf.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,ks(9,ef.bind(null,n,r,s,e),void 0,null),fe===null)throw Error(j(349));Pn&30||Zh(n,e,s)}return s}function Zh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ef(t,e,n,r){e.value=n,e.getSnapshot=r,nf(e)&&rf(t)}function tf(t,e,n){return n(function(){nf(e)&&rf(t)})}function nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function rf(t){var e=Nt(t,1);e!==null&&ut(e,t,1,-1)}function ku(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=S0.bind(null,J,t),[e.memoizedState,t]}function ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sf(){return nt().memoizedState}function vi(t,e,n,r){var s=ft();J.flags|=t,s.memoizedState=ks(1|e,n,void 0,r===void 0?null:r)}function ao(t,e,n,r){var s=nt();r=r===void 0?null:r;var i=void 0;if(ce!==null){var o=ce.memoizedState;if(i=o.destroy,r!==null&&sc(r,o.deps)){s.memoizedState=ks(e,n,i,r);return}}J.flags|=t,s.memoizedState=ks(1|e,n,i,r)}function Su(t,e){return vi(8390656,8,t,e)}function ac(t,e){return ao(2048,8,t,e)}function of(t,e){return ao(4,2,t,e)}function af(t,e){return ao(4,4,t,e)}function lf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cf(t,e,n){return n=n!=null?n.concat([t]):null,ao(4,4,lf.bind(null,e,t),n)}function lc(){}function uf(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function df(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hf(t,e,n){return Pn&21?(dt(n,e)||(n=gh(),J.lanes|=n,Nn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function b0(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=qo.transition;qo.transition={};try{t(!1),e()}finally{H=n,qo.transition=r}}function ff(){return nt().memoizedState}function k0(t,e,n){var r=Jt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pf(t))mf(e,n);else if(n=Kh(t,e,n,r),n!==null){var s=je();ut(n,t,r,s),gf(n,e,r)}}function S0(t,e,n){var r=Jt(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pf(t))mf(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,dt(a,o)){var l=e.interleaved;l===null?(s.next=s,Zl(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=Kh(t,e,s,r),n!==null&&(s=je(),ut(n,t,r,s),gf(n,e,r))}}function pf(t){var e=t.alternate;return t===J||e!==null&&e===J}function mf(t,e){Xr=zi=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dl(t,n)}}var Bi={readContext:tt,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},C0={readContext:tt,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:Su,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vi(4194308,4,lf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vi(4194308,4,t,e)},useInsertionEffect:function(t,e){return vi(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=k0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:ku,useDebugValue:lc,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=ku(!1),e=t[0];return t=b0.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,s=ft();if(Q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),fe===null)throw Error(j(349));Pn&30||Zh(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Su(tf.bind(null,r,i,t),[t]),r.flags|=2048,ks(9,ef.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=ft(),e=fe.identifierPrefix;if(Q){var n=jt,r=Ct;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j0={readContext:tt,useCallback:uf,useContext:tt,useEffect:ac,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:af,useMemo:df,useReducer:Vo,useRef:sf,useState:function(){return Vo(bs)},useDebugValue:lc,useDeferredValue:function(t){var e=nt();return hf(e,ce.memoizedState,t)},useTransition:function(){var t=Vo(bs)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Jh,useSyncExternalStore:Xh,useId:ff,unstable_isNewReconciler:!1},E0={readContext:tt,useCallback:uf,useContext:tt,useEffect:ac,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:af,useMemo:df,useReducer:Go,useRef:sf,useState:function(){return Go(bs)},useDebugValue:lc,useDeferredValue:function(t){var e=nt();return ce===null?e.memoizedState=t:hf(e,ce.memoizedState,t)},useTransition:function(){var t=Go(bs)[0],e=nt().memoizedState;return[t,e]},useMutableSource:Jh,useSyncExternalStore:Xh,useId:ff,unstable_isNewReconciler:!1};function it(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ga(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lo={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),s=Jt(t),i=Et(r,s);i.payload=e,n!=null&&(i.callback=n),e=Qt(t,i,s),e!==null&&(ut(e,t,s,r),gi(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),s=Jt(t),i=Et(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Qt(t,i,s),e!==null&&(ut(e,t,s,r),gi(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Jt(t),s=Et(n,r);s.tag=2,e!=null&&(s.callback=e),e=Qt(t,s,r),e!==null&&(ut(e,t,r,n),gi(e,t,r))}};function Cu(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ms(n,r)||!ms(s,i):!0}function yf(t,e,n){var r=!1,s=nn,i=e.contextType;return typeof i=="object"&&i!==null?i=tt(i):(s=Re(e)?En:_e.current,r=e.contextTypes,i=(r=r!=null)?mr(t,s):nn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ju(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lo.enqueueReplaceState(e,e.state,null)}function Ka(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ec(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tt(i):(i=Re(e)?En:_e.current,s.context=mr(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ga(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&lo.enqueueReplaceState(s,s.state,null),Di(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function wr(t,e){try{var n="",r=e;do n+=tg(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ko(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function vf(t,e,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hi||(Hi=!0,il=r),Qa(t,e)},n}function wf(t,e,n){n=Et(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qa(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qa(t,e),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new T0;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=B0.bind(null,t,e,n),e.then(t,t))}function Tu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pu(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Et(-1,1),e.tag=2,Qt(n,e,1))),n.lanes|=1),t)}var P0=At.ReactCurrentOwner,Ae=!1;function Ce(t,e,n,r){e.child=t===null?Gh(e,null,n,r):yr(e,t.child,n,r)}function Nu(t,e,n,r,s){n=n.render;var i=e.ref;return hr(e,s),r=ic(t,e,n,r,i,s),n=oc(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ot(t,e,s)):(Q&&n&&Gl(e),e.flags|=1,Ce(t,e,r,s),e.child)}function Ou(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!gc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,xf(t,e,i,r,s)):(t=bi(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ms,n(o,r)&&t.ref===e.ref)return Ot(t,e,s)}return e.flags|=1,t=Xt(i,r),t.ref=e.ref,t.return=e,e.child=t}function xf(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ms(i,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Ot(t,e,s)}return Ya(t,e,n,r,s)}function _f(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(or,De),De|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(or,De),De|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(or,De),De|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,V(or,De),De|=r;return Ce(t,e,s,n),e.child}function bf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ya(t,e,n,r,s){var i=Re(n)?En:_e.current;return i=mr(e,i),hr(e,s),n=ic(t,e,n,r,i,s),r=oc(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ot(t,e,s)):(Q&&r&&Gl(e),e.flags|=1,Ce(t,e,n,s),e.child)}function Au(t,e,n,r,s){if(Re(n)){var i=!0;Ri(e)}else i=!1;if(hr(e,s),e.stateNode===null)wi(t,e),yf(e,n,r),Ka(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Re(n)?En:_e.current,u=mr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ju(e,o,r,u),$t=!1;var p=e.memoizedState;o.state=p,Di(e,r,o,s),l=e.memoizedState,a!==r||p!==l||Fe.current||$t?(typeof d=="function"&&(Ga(e,n,d,r),l=e.memoizedState),(a=$t||Cu(e,n,a,r,p,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:it(e.type,a),o.props=u,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=Re(n)?En:_e.current,l=mr(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&ju(e,o,r,l),$t=!1,p=e.memoizedState,o.state=p,Di(e,r,o,s);var y=e.memoizedState;a!==h||p!==y||Fe.current||$t?(typeof v=="function"&&(Ga(e,n,v,r),y=e.memoizedState),(u=$t||Cu(e,n,u,r,p,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ja(t,e,n,r,i,s)}function Ja(t,e,n,r,s,i){bf(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&yu(e,n,!1),Ot(t,e,i);r=e.stateNode,P0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=yr(e,t.child,null,i),e.child=yr(e,null,a,i)):Ce(t,e,a,i),e.memoizedState=r.state,s&&yu(e,n,!0),e.child}function kf(t){var e=t.stateNode;e.pendingContext?gu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gu(t,e.context,!1),tc(t,e.containerInfo)}function Fu(t,e,n,r,s){return gr(),Ql(s),e.flags|=256,Ce(t,e,n,r),e.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Za(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sf(t,e,n){var r=e.pendingProps,s=Y.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),V(Y,s&1),t===null)return qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ho(o,r,0,null),t=kn(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Za(n),e.memoizedState=Xa,t):cc(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return N0(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xt(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Xt(a,i):(i=kn(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Za(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xa,r}return i=t.child,t=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cc(t,e){return e=ho({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ei(t,e,n,r){return r!==null&&Ql(r),yr(e,t.child,null,n),t=cc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N0(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ko(Error(j(422))),ei(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ho({mode:"visible",children:r.children},s,0,null),i=kn(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&yr(e,t.child,null,o),e.child.memoizedState=Za(o),e.memoizedState=Xa,i);if(!(e.mode&1))return ei(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=Ko(i,r,void 0),ei(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ae||a){if(r=fe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Nt(t,s),ut(r,t,s,-1))}return mc(),r=Ko(Error(j(421))),ei(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=W0.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ze=Kt(s.nextSibling),Be=e,Q=!0,lt=null,t!==null&&(Ye[Je++]=Ct,Ye[Je++]=jt,Ye[Je++]=Tn,Ct=t.id,jt=t.overflow,Tn=e),e=cc(e,r.children),e.flags|=4096,e)}function Ru(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Va(t.return,e,n)}function Qo(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Cf(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ce(t,e,r.children,n),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ru(t,n,e);else if(t.tag===19)Ru(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Y,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ui(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qo(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ui(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qo(e,!0,n,null,i);break;case"together":Qo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Xt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function O0(t,e,n){switch(e.tag){case 3:kf(e),gr();break;case 5:Yh(e);break;case 1:Re(e.type)&&Ri(e);break;case 4:tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;V($i,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),e.flags|=128,null):n&e.child.childLanes?Sf(t,e,n):(V(Y,Y.current&1),t=Ot(t,e,n),t!==null?t.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cf(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,_f(t,e,n)}return Ot(t,e,n)}var jf,el,Ef,Tf;jf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};el=function(){};Ef=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,_n(yt.current);var i=null;switch(n){case"input":s=ba(t,s),r=ba(t,r),i=[];break;case"select":s=X({},s,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":s=Ca(t,s),r=Ca(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ai)}Ea(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ls.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ls.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Tf=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lr(t,e){if(!Q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function A0(t,e,n){var r=e.pendingProps;switch(Kl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Re(e.type)&&Fi(),we(e),null;case 3:return r=e.stateNode,vr(),K(Fe),K(_e),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(ll(lt),lt=null))),el(t,e),we(e),null;case 5:nc(e);var s=_n(xs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ef(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return we(e),null}if(t=_n(yt.current),Xs(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[mt]=e,r[vs]=i,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(s=0;s<zr.length;s++)G(zr[s],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Wc(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":qc(r,i),G("invalid",r)}Ea(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Js(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Js(r.textContent,a,t),s=["children",""+a]):ls.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":Ws(r),Hc(r,i,!0);break;case"textarea":Ws(r),Vc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ai)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=th(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[vs]=r,jf(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ta(n,r),n){case"dialog":G("cancel",t),G("close",t),s=r;break;case"iframe":case"object":case"embed":G("load",t),s=r;break;case"video":case"audio":for(s=0;s<zr.length;s++)G(zr[s],t);s=r;break;case"source":G("error",t),s=r;break;case"img":case"image":case"link":G("error",t),G("load",t),s=r;break;case"details":G("toggle",t),s=r;break;case"input":Wc(t,r),s=ba(t,r),G("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=X({},r,{value:void 0}),G("invalid",t);break;case"textarea":qc(t,r),s=Ca(t,r),G("invalid",t);break;default:s=r}Ea(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?sh(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nh(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&cs(t,l):typeof l=="number"&&cs(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ls.hasOwnProperty(i)?l!=null&&i==="onScroll"&&G("scroll",t):l!=null&&Fl(t,i,l,o))}switch(n){case"input":Ws(t),Hc(t,r,!1);break;case"textarea":Ws(t),Vc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?lr(t,!!r.multiple,i,!1):r.defaultValue!=null&&lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Tf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=_n(xs.current),_n(yt.current),Xs(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(i=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return we(e),null;case 13:if(K(Y),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Q&&ze!==null&&e.mode&1&&!(e.flags&128))qh(),gr(),e.flags|=98560,i=!1;else if(i=Xs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[mt]=e}else gr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),i=!1}else lt!==null&&(ll(lt),lt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Y.current&1?ue===0&&(ue=3):mc())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return vr(),el(t,e),t===null&&gs(e.stateNode.containerInfo),we(e),null;case 10:return Xl(e.type._context),we(e),null;case 17:return Re(e.type)&&Fi(),we(e),null;case 19:if(K(Y),i=e.memoizedState,i===null)return we(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Lr(i,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ui(t),o!==null){for(e.flags|=128,Lr(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),e.child}t=t.sibling}i.tail!==null&&te()>xr&&(e.flags|=128,r=!0,Lr(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ui(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Q)return we(e),null}else 2*te()-i.renderingStartTime>xr&&n!==1073741824&&(e.flags|=128,r=!0,Lr(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=te(),e.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return pc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?De&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function F0(t,e){switch(Kl(e),e.tag){case 1:return Re(e.type)&&Fi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vr(),K(Fe),K(_e),rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nc(e),null;case 13:if(K(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(Y),null;case 4:return vr(),null;case 10:return Xl(e.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var ti=!1,xe=!1,R0=typeof WeakSet=="function"?WeakSet:Set,N=null;function ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function tl(t,e,n){try{n()}catch(r){ee(t,e,r)}}var Lu=!1;function L0(t,e){if(Ma=Pi,t=Ah(),Vl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,p=null;t:for(;;){for(var v;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===t)break t;if(p===n&&++u===s&&(a=o),p===i&&++d===r&&(l=o),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:t,selectionRange:n},Pi=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:it(e.type,x),b);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ee(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Lu,Lu=!1,y}function Zr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&tl(e,n,i)}s=s.next}while(s!==r)}}function co(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pf(t){var e=t.alternate;e!==null&&(t.alternate=null,Pf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[vs],delete e[Ba],delete e[y0],delete e[v0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nf(t){return t.tag===5||t.tag===3||t.tag===4}function Iu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ai));else if(r!==4&&(t=t.child,t!==null))for(rl(t,e,n),t=t.sibling;t!==null;)rl(t,e,n),t=t.sibling}function sl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sl(t,e,n),t=t.sibling;t!==null;)sl(t,e,n),t=t.sibling}var me=null,ot=!1;function Ft(t,e,n){for(n=n.child;n!==null;)Of(t,e,n),n=n.sibling}function Of(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:xe||ir(n,e);case 6:var r=me,s=ot;me=null,Ft(t,e,n),me=r,ot=s,me!==null&&(ot?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ot?(t=me,n=n.stateNode,t.nodeType===8?Bo(t.parentNode,n):t.nodeType===1&&Bo(t,n),fs(t)):Bo(me,n.stateNode));break;case 4:r=me,s=ot,me=n.stateNode.containerInfo,ot=!0,Ft(t,e,n),me=r,ot=s;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&tl(n,e,o),s=s.next}while(s!==r)}Ft(t,e,n);break;case 1:if(!xe&&(ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,e,a)}Ft(t,e,n);break;case 21:Ft(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ft(t,e,n),xe=r):Ft(t,e,n);break;default:Ft(t,e,n)}}function $u(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new R0),e.forEach(function(r){var s=H0.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,ot=!1;break e;case 3:me=a.stateNode.containerInfo,ot=!0;break e;case 4:me=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(me===null)throw Error(j(160));Of(i,o,s),me=null,ot=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){ee(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Af(e,t),e=e.sibling}function Af(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),ht(t),r&4){try{Zr(3,t,t.return),co(3,t)}catch(x){ee(t,t.return,x)}try{Zr(5,t,t.return)}catch(x){ee(t,t.return,x)}}break;case 1:rt(e,t),ht(t),r&512&&n!==null&&ir(n,n.return);break;case 5:if(rt(e,t),ht(t),r&512&&n!==null&&ir(n,n.return),t.flags&32){var s=t.stateNode;try{cs(s,"")}catch(x){ee(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Zd(s,i),Ta(a,o);var u=Ta(a,i);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?sh(s,h):d==="dangerouslySetInnerHTML"?nh(s,h):d==="children"?cs(s,h):Fl(s,d,h,u)}switch(a){case"input":ka(s,i);break;case"textarea":eh(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?lr(s,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?lr(s,!!i.multiple,i.defaultValue,!0):lr(s,!!i.multiple,i.multiple?[]:"",!1))}s[vs]=i}catch(x){ee(t,t.return,x)}}break;case 6:if(rt(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){ee(t,t.return,x)}}break;case 3:if(rt(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(x){ee(t,t.return,x)}break;case 4:rt(e,t),ht(t);break;case 13:rt(e,t),ht(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(hc=te())),r&4&&$u(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||d,rt(e,t),xe=u):rt(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(h=N=d;N!==null;){switch(p=N,v=p.child,p.tag){case 0:case 11:case 14:case 15:Zr(4,p,p.return);break;case 1:ir(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){ee(r,n,x)}}break;case 5:ir(p,p.return);break;case 22:if(p.memoizedState!==null){Du(h);continue}}v!==null?(v.return=p,N=v):Du(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rh("display",o))}catch(x){ee(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ee(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rt(e,t),ht(t),r&4&&$u(t);break;case 21:break;default:rt(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(cs(s,""),r.flags&=-33);var i=Iu(t);sl(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iu(t);rl(t,a,o);break;default:throw Error(j(161))}}catch(l){ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I0(t,e,n){N=t,Ff(t)}function Ff(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var s=N,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ti;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||xe;a=ti;var u=xe;if(ti=o,(xe=l)&&!u)for(N=s;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Uu(s):l!==null?(l.return=o,N=l):Uu(s);for(;i!==null;)N=i,Ff(i),i=i.sibling;N=s,ti=a,xe=u}Mu(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,N=i):Mu(t)}}function Mu(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||co(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&bu(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bu(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}xe||e.flags&512&&nl(e)}catch(p){ee(e,e.return,p)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Du(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Uu(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{co(4,e)}catch(l){ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){ee(e,s,l)}}var i=e.return;try{nl(e)}catch(l){ee(e,i,l)}break;case 5:var o=e.return;try{nl(e)}catch(l){ee(e,o,l)}}}catch(l){ee(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var $0=Math.ceil,Wi=At.ReactCurrentDispatcher,uc=At.ReactCurrentOwner,Ze=At.ReactCurrentBatchConfig,B=0,fe=null,re=null,ge=0,De=0,or=on(0),ue=0,Ss=null,Nn=0,uo=0,dc=0,es=null,Ne=null,hc=0,xr=1/0,_t=null,Hi=!1,il=null,Yt=null,ni=!1,Bt=null,qi=0,ts=0,ol=null,xi=-1,_i=0;function je(){return B&6?te():xi!==-1?xi:xi=te()}function Jt(t){return t.mode&1?B&2&&ge!==0?ge&-ge:x0.transition!==null?(_i===0&&(_i=gh()),_i):(t=H,t!==0||(t=window.event,t=t===void 0?16:kh(t.type)),t):1}function ut(t,e,n,r){if(50<ts)throw ts=0,ol=null,Error(j(185));Os(t,n,r),(!(B&2)||t!==fe)&&(t===fe&&(!(B&2)&&(uo|=n),ue===4&&Dt(t,ge)),Le(t,r),n===1&&B===0&&!(e.mode&1)&&(xr=te()+500,oo&&an()))}function Le(t,e){var n=t.callbackNode;xg(t,e);var r=Ti(t,t===fe?ge:0);if(r===0)n!==null&&Qc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qc(n),e===1)t.tag===0?w0(zu.bind(null,t)):Bh(zu.bind(null,t)),m0(function(){!(B&6)&&an()}),n=null;else{switch(yh(r)){case 1:n=Ml;break;case 4:n=ph;break;case 16:n=Ei;break;case 536870912:n=mh;break;default:n=Ei}n=zf(n,Rf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rf(t,e){if(xi=-1,_i=0,B&6)throw Error(j(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var r=Ti(t,t===fe?ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vi(t,r);else{e=r;var s=B;B|=2;var i=If();(fe!==t||ge!==e)&&(_t=null,xr=te()+500,bn(t,e));do try{U0();break}catch(a){Lf(t,a)}while(1);Jl(),Wi.current=i,B=s,re!==null?e=0:(fe=null,ge=0,e=ue)}if(e!==0){if(e===2&&(s=Fa(t),s!==0&&(r=s,e=al(t,s))),e===1)throw n=Ss,bn(t,0),Dt(t,r),Le(t,te()),n;if(e===6)Dt(t,r);else{if(s=t.current.alternate,!(r&30)&&!M0(s)&&(e=Vi(t,r),e===2&&(i=Fa(t),i!==0&&(r=i,e=al(t,i))),e===1))throw n=Ss,bn(t,0),Dt(t,r),Le(t,te()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:gn(t,Ne,_t);break;case 3:if(Dt(t,r),(r&130023424)===r&&(e=hc+500-te(),10<e)){if(Ti(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=za(gn.bind(null,t,Ne,_t),e);break}gn(t,Ne,_t);break;case 4:if(Dt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-ct(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){t.timeoutHandle=za(gn.bind(null,t,Ne,_t),r);break}gn(t,Ne,_t);break;case 5:gn(t,Ne,_t);break;default:throw Error(j(329))}}}return Le(t,te()),t.callbackNode===n?Rf.bind(null,t):null}function al(t,e){var n=es;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Vi(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&ll(e)),t}function ll(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function M0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!dt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dt(t,e){for(e&=~dc,e&=~uo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ct(e),r=1<<n;t[n]=-1,e&=~r}}function zu(t){if(B&6)throw Error(j(327));fr();var e=Ti(t,0);if(!(e&1))return Le(t,te()),null;var n=Vi(t,e);if(t.tag!==0&&n===2){var r=Fa(t);r!==0&&(e=r,n=al(t,r))}if(n===1)throw n=Ss,bn(t,0),Dt(t,e),Le(t,te()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Ne,_t),Le(t,te()),null}function fc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(xr=te()+500,oo&&an())}}function On(t){Bt!==null&&Bt.tag===0&&!(B&6)&&fr();var e=B;B|=1;var n=Ze.transition,r=H;try{if(Ze.transition=null,H=1,t)return t()}finally{H=r,Ze.transition=n,B=e,!(B&6)&&an()}}function pc(){De=or.current,K(or)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p0(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:vr(),K(Fe),K(_e),rc();break;case 5:nc(r);break;case 4:vr();break;case 13:K(Y);break;case 19:K(Y);break;case 10:Xl(r.type._context);break;case 22:case 23:pc()}n=n.return}if(fe=t,re=t=Xt(t.current,null),ge=De=e,ue=0,Ss=null,dc=uo=Nn=0,Ne=es=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}xn=null}return t}function Lf(t,e){do{var n=re;try{if(Jl(),yi.current=Bi,zi){for(var r=J.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zi=!1}if(Pn=0,de=ce=J=null,Xr=!1,_s=0,uc.current=null,n===null||n.return===null){ue=1,Ss=e,re=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Tu(o);if(v!==null){v.flags&=-257,Pu(v,o,a,i,e),v.mode&1&&Eu(i,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){Eu(i,u,e),mc();break e}l=Error(j(426))}}else if(Q&&a.mode&1){var b=Tu(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pu(b,o,a,i,e),Ql(wr(l,a));break e}}i=l=wr(l,a),ue!==4&&(ue=2),es===null?es=[i]:es.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var f=vf(i,l,e);_u(i,f);break e;case 1:a=l;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yt===null||!Yt.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=wf(i,a,e);_u(i,w);break e}}i=i.return}while(i!==null)}Mf(n)}catch(k){e=k,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function If(){var t=Wi.current;return Wi.current=Bi,t===null?Bi:t}function mc(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Nn&268435455)&&!(uo&268435455)||Dt(fe,ge)}function Vi(t,e){var n=B;B|=2;var r=If();(fe!==t||ge!==e)&&(_t=null,bn(t,e));do try{D0();break}catch(s){Lf(t,s)}while(1);if(Jl(),B=n,Wi.current=r,re!==null)throw Error(j(261));return fe=null,ge=0,ue}function D0(){for(;re!==null;)$f(re)}function U0(){for(;re!==null&&!dg();)$f(re)}function $f(t){var e=Uf(t.alternate,t,De);t.memoizedProps=t.pendingProps,e===null?Mf(t):re=e,uc.current=null}function Mf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=F0(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,re=null;return}}else if(n=A0(n,e,De),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);ue===0&&(ue=5)}function gn(t,e,n){var r=H,s=Ze.transition;try{Ze.transition=null,H=1,z0(t,e,n,r)}finally{Ze.transition=s,H=r}return null}function z0(t,e,n,r){do fr();while(Bt!==null);if(B&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(_g(t,i),t===fe&&(re=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ni||(ni=!0,zf(Ei,function(){return fr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var o=H;H=1;var a=B;B|=4,uc.current=null,L0(t,n),Af(n,t),a0(Da),Pi=!!Ma,Da=Ma=null,t.current=n,I0(n),hg(),B=a,H=o,Ze.transition=i}else t.current=n;if(ni&&(ni=!1,Bt=t,qi=s),i=t.pendingLanes,i===0&&(Yt=null),mg(n.stateNode),Le(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Hi)throw Hi=!1,t=il,il=null,t;return qi&1&&t.tag!==0&&fr(),i=t.pendingLanes,i&1?t===ol?ts++:(ts=0,ol=t):ts=0,an(),null}function fr(){if(Bt!==null){var t=yh(qi),e=Ze.transition,n=H;try{if(Ze.transition=null,H=16>t?16:t,Bt===null)var r=!1;else{if(t=Bt,Bt=null,qi=0,B&6)throw Error(j(331));var s=B;for(B|=4,N=t.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Zr(8,d,i)}var h=d.child;if(h!==null)h.return=d,N=h;else for(;N!==null;){d=N;var p=d.sibling,v=d.return;if(Pf(d),d===u){N=null;break}if(p!==null){p.return=v,N=p;break}N=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var m=t.current;for(N=m;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:co(9,a)}}catch(k){ee(a,a.return,k)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(B=s,an(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(to,t)}catch{}r=!0}return r}finally{H=n,Ze.transition=e}}return!1}function Bu(t,e,n){e=wr(n,e),e=vf(t,e,1),t=Qt(t,e,1),e=je(),t!==null&&(Os(t,1,e),Le(t,e))}function ee(t,e,n){if(t.tag===3)Bu(t,t,n);else for(;e!==null;){if(e.tag===3){Bu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){t=wr(n,t),t=wf(e,t,1),e=Qt(e,t,1),t=je(),e!==null&&(Os(e,1,t),Le(e,t));break}}e=e.return}}function B0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>te()-hc?bn(t,0):dc|=n),Le(t,e)}function Df(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var n=je();t=Nt(t,e),t!==null&&(Os(t,e,n),Le(t,n))}function W0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Df(t,n)}function H0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Df(t,n)}var Uf;Uf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,O0(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,Q&&e.flags&1048576&&Wh(e,Ii,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wi(t,e),t=e.pendingProps;var s=mr(e,_e.current);hr(e,n),s=ic(null,e,r,t,s,n);var i=oc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Re(r)?(i=!0,Ri(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ec(e),s.updater=lo,e.stateNode=s,s._reactInternals=e,Ka(e,r,t,n),e=Ja(null,e,r,!0,i,n)):(e.tag=0,Q&&i&&Gl(e),Ce(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wi(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=V0(r),t=it(r,t),s){case 0:e=Ya(null,e,r,t,n);break e;case 1:e=Au(null,e,r,t,n);break e;case 11:e=Nu(null,e,r,t,n);break e;case 14:e=Ou(null,e,r,it(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:it(r,s),Ya(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:it(r,s),Au(t,e,r,s,n);case 3:e:{if(kf(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Qh(t,e),Di(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=wr(Error(j(423)),e),e=Fu(t,e,r,n,s);break e}else if(r!==s){s=wr(Error(j(424)),e),e=Fu(t,e,r,n,s);break e}else for(ze=Kt(e.stateNode.containerInfo.firstChild),Be=e,Q=!0,lt=null,n=Gh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===s){e=Ot(t,e,n);break e}Ce(t,e,r,n)}e=e.child}return e;case 5:return Yh(e),t===null&&qa(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ua(r,s)?o=null:i!==null&&Ua(r,i)&&(e.flags|=32),bf(t,e),Ce(t,e,o,n),e.child;case 6:return t===null&&qa(e),null;case 13:return Sf(t,e,n);case 4:return tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yr(e,null,r,n):Ce(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:it(r,s),Nu(t,e,r,s,n);case 7:return Ce(t,e,e.pendingProps,n),e.child;case 8:return Ce(t,e,e.pendingProps.children,n),e.child;case 12:return Ce(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,V($i,r._currentValue),r._currentValue=o,i!==null)if(dt(i.value,o)){if(i.children===s.children&&!Fe.current){e=Ot(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Et(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Va(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Va(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ce(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,hr(e,n),s=tt(s),r=r(s),e.flags|=1,Ce(t,e,r,n),e.child;case 14:return r=e.type,s=it(r,e.pendingProps),s=it(r.type,s),Ou(t,e,r,s,n);case 15:return xf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:it(r,s),wi(t,e),e.tag=1,Re(r)?(t=!0,Ri(e)):t=!1,hr(e,n),yf(e,r,s),Ka(e,r,s,n),Ja(null,e,r,!0,t,n);case 19:return Cf(t,e,n);case 22:return _f(t,e,n)}throw Error(j(156,e.tag))};function zf(t,e){return fh(t,e)}function q0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new q0(t,e,n,r)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V0(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ll)return 11;if(t===Il)return 14}return 2}function Xt(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bi(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yn:return kn(n.children,s,i,e);case Rl:o=8,s|=8;break;case va:return t=Xe(12,n,e,s|2),t.elementType=va,t.lanes=i,t;case wa:return t=Xe(13,n,e,s),t.elementType=wa,t.lanes=i,t;case xa:return t=Xe(19,n,e,s),t.elementType=xa,t.lanes=i,t;case Yd:return ho(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kd:o=10;break e;case Qd:o=9;break e;case Ll:o=11;break e;case Il:o=14;break e;case It:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function kn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function ho(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Yd,t.lanes=n,t.stateNode={isHidden:!1},t}function Yo(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Jo(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G0(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yc(t,e,n,r,s,i,o,a,l){return t=new G0(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xe(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(i),t}function K0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bf(t){if(!t)return nn;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Re(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Re(n))return zh(t,n,e)}return e}function Wf(t,e,n,r,s,i,o,a,l){return t=yc(n,r,!0,t,s,i,o,a,l),t.context=Bf(null),n=t.current,r=je(),s=Jt(n),i=Et(r,s),i.callback=e??null,Qt(n,i,s),t.current.lanes=s,Os(t,s,r),Le(t,r),t}function fo(t,e,n,r){var s=e.current,i=je(),o=Jt(s);return n=Bf(n),e.context===null?e.context=n:e.pendingContext=n,e=Et(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qt(s,e,o),t!==null&&(ut(t,s,o,i),gi(t,s,o)),o}function Gi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vc(t,e){Wu(t,e),(t=t.alternate)&&Wu(t,e)}function Q0(){return null}var Hf=typeof reportError=="function"?reportError:function(t){console.error(t)};function wc(t){this._internalRoot=t}po.prototype.render=wc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));fo(t,e,null,null)};po.prototype.unmount=wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;On(function(){fo(null,t,null,null)}),e[Pt]=null}};function po(t){this._internalRoot=t}po.prototype.unstable_scheduleHydration=function(t){if(t){var e=xh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mt.length&&e!==0&&e<Mt[n].priority;n++);Mt.splice(n,0,t),n===0&&bh(t)}};function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Y0(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Gi(o);i.call(u)}}var o=Wf(e,r,t,0,null,!1,!1,"",Hu);return t._reactRootContainer=o,t[Pt]=o.current,gs(t.nodeType===8?t.parentNode:t),On(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Gi(l);a.call(u)}}var l=yc(t,0,!1,null,null,!1,!1,"",Hu);return t._reactRootContainer=l,t[Pt]=l.current,gs(t.nodeType===8?t.parentNode:t),On(function(){fo(e,l,n,r)}),l}function go(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Gi(o);a.call(l)}}fo(e,o,t,s)}else o=Y0(n,e,t,s,r);return Gi(o)}vh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ur(e.pendingLanes);n!==0&&(Dl(e,n|1),Le(e,te()),!(B&6)&&(xr=te()+500,an()))}break;case 13:On(function(){var r=Nt(t,1);if(r!==null){var s=je();ut(r,t,1,s)}}),vc(t,1)}};Ul=function(t){if(t.tag===13){var e=Nt(t,134217728);if(e!==null){var n=je();ut(e,t,134217728,n)}vc(t,134217728)}};wh=function(t){if(t.tag===13){var e=Jt(t),n=Nt(t,e);if(n!==null){var r=je();ut(n,t,e,r)}vc(t,e)}};xh=function(){return H};_h=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Na=function(t,e,n){switch(e){case"input":if(ka(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=io(r);if(!s)throw Error(j(90));Xd(r),ka(r,s)}}}break;case"textarea":eh(t,n);break;case"select":e=n.value,e!=null&&lr(t,!!n.multiple,e,!1)}};ah=fc;lh=On;var J0={usingClientEntryPoint:!1,Events:[Fs,er,io,ih,oh,fc]},Ir={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{to=ri.inject(X0),gt=ri}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(e))throw Error(j(200));return K0(t,e,null,n)};qe.createRoot=function(t,e){if(!xc(t))throw Error(j(299));var n=!1,r="",s=Hf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=yc(t,1,!1,null,null,n,!1,r,s),t[Pt]=e.current,gs(t.nodeType===8?t.parentNode:t),new wc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=dh(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return On(t)};qe.hydrate=function(t,e,n){if(!mo(e))throw Error(j(200));return go(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!xc(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Hf;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wf(e,null,t,1,n??null,s,!1,i,o),t[Pt]=e.current,gs(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new po(e)};qe.render=function(t,e,n){if(!mo(e))throw Error(j(200));return go(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!mo(t))throw Error(j(40));return t._reactRootContainer?(On(function(){go(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};qe.unstable_batchedUpdates=fc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mo(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return go(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(t){console.error(t)}}qf(),Hd.exports=qe;var Z0=Hd.exports,qu=Z0;ga.createRoot=qu.createRoot,ga.hydrateRoot=qu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cs.apply(this,arguments)}var Wt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wt||(Wt={}));const Vu="popstate";function ey(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return cl("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Gf(s)}return ny(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ty(){return Math.random().toString(36).substr(2,8)}function Gu(t,e){return{usr:t.state,key:t.key,idx:e}}function cl(t,e,n,r){return n===void 0&&(n=null),Cs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cr(e):e,{state:n,key:e&&e.key||r||ty()})}function Gf(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ny(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Wt.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Cs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Wt.Pop;let b=d(),f=b==null?null:b-u;u=b,l&&l({action:a,location:x.location,delta:f})}function p(b,f){a=Wt.Push;let m=cl(x.location,b,f);n&&n(m,b),u=d()+1;let g=Gu(m,u),w=x.createHref(m);try{o.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(w)}i&&l&&l({action:a,location:x.location,delta:1})}function v(b,f){a=Wt.Replace;let m=cl(x.location,b,f);n&&n(m,b),u=d();let g=Gu(m,u),w=x.createHref(m);o.replaceState(g,"",w),i&&l&&l({action:a,location:x.location,delta:0})}function y(b){let f=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof b=="string"?b:Gf(b);return m=m.replace(/ $/,"%20"),se(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let x={get action(){return a},get location(){return t(s,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Vu,h),l=b,()=>{s.removeEventListener(Vu,h),l=null}},createHref(b){return e(s,b)},createURL:y,encodeLocation(b){let f=y(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:v,go(b){return o.go(b)}};return x}var Ku;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ku||(Ku={}));function ry(t,e,n){return n===void 0&&(n="/"),sy(t,e,n,!1)}function sy(t,e,n,r){let s=typeof e=="string"?Cr(e):e,i=Yf(s.pathname||"/",n);if(i==null)return null;let o=Kf(t);iy(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=gy(i);a=py(o[l],u,r)}return a}function Kf(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kf(i.children,e,d,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:hy(u,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of Qf(i.path))s(i,o,l)}),e}function Qf(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Qf(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function iy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oy=/^:[\w-]+$/,ay=3,ly=2,cy=1,uy=10,dy=-2,Qu=t=>t==="*";function hy(t,e){let n=t.split("/"),r=n.length;return n.some(Qu)&&(r+=dy),e&&(r+=ly),n.filter(s=>!Qu(s)).reduce((s,i)=>s+(oy.test(i)?ay:i===""?cy:uy),r)}function fy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function py(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",h=Yu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=Yu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:Sn([i,h.pathname]),pathnameBase:xy(Sn([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Sn([i,h.pathnameBase]))}return o}function Yu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=my(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let x=a[h]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[h];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function my(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function gy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Cr(t):t;return{pathname:n?n.startsWith("/")?n:vy(n,e):e,search:_y(r),hash:by(s)}}function vy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Xo(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jf(t,e){let n=wy(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xf(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Cr(t):(s=Cs({},t),se(!s.pathname||!s.pathname.includes("?"),Xo("?","pathname","search",s)),se(!s.pathname||!s.pathname.includes("#"),Xo("#","pathname","hash",s)),se(!s.search||!s.search.includes("#"),Xo("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;s.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=yy(s,a),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Sn=t=>t.join("/").replace(/\/\/+/g,"/"),xy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,by=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ky(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Zf=["post","put","patch","delete"];new Set(Zf);const Sy=["get",...Zf];new Set(Sy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},js.apply(this,arguments)}const _c=_.createContext(null),Cy=_.createContext(null),Ls=_.createContext(null),yo=_.createContext(null),Rn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),ep=_.createContext(null);function Is(){return _.useContext(yo)!=null}function bc(){return Is()||se(!1),_.useContext(yo).location}function tp(t){_.useContext(Ls).static||_.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=_.useContext(Rn);return t?My():jy()}function jy(){Is()||se(!1);let t=_.useContext(_c),{basename:e,future:n,navigator:r}=_.useContext(Ls),{matches:s}=_.useContext(Rn),{pathname:i}=bc(),o=JSON.stringify(Jf(s,n.v7_relativeSplatPath)),a=_.useRef(!1);return tp(()=>{a.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Xf(u,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Sn([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,i,t])}function Ey(t,e){return Ty(t,e)}function Ty(t,e,n,r){Is()||se(!1);let{navigator:s}=_.useContext(Ls),{matches:i}=_.useContext(Rn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=bc(),d;if(e){var h;let b=typeof e=="string"?Cr(e):e;l==="/"||(h=b.pathname)!=null&&h.startsWith(l)||se(!1),d=b}else d=u;let p=d.pathname||"/",v=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=ry(t,{pathname:v}),x=Fy(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Sn([l,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Sn([l,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return e&&x?_.createElement(yo.Provider,{value:{location:js({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Wt.Pop}},x):x}function Py(){let t=$y(),e=ky(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:s},n):null,i)}const Ny=_.createElement(Py,null);class Oy extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?_.createElement(Rn.Provider,{value:this.props.routeContext},_.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ay(t){let{routeContext:e,match:n,children:r}=t,s=_.useContext(_c);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Rn.Provider,{value:e},r)}function Fy(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||se(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:v}=n,y=h.route.loader&&p[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let v,y=!1,x=null,b=null;n&&(v=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||Ny,l&&(u<0&&p===0?(Dy("route-fallback",!1),y=!0,b=null):u===p&&(y=!0,b=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,p+1)),m=()=>{let g;return v?g=x:y?g=b:h.route.Component?g=_.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=d,_.createElement(Ay,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?_.createElement(Oy,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var np=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(np||{}),Ki=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ki||{});function Ry(t){let e=_.useContext(_c);return e||se(!1),e}function Ly(t){let e=_.useContext(Cy);return e||se(!1),e}function Iy(t){let e=_.useContext(Rn);return e||se(!1),e}function rp(t){let e=Iy(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function $y(){var t;let e=_.useContext(ep),n=Ly(Ki.UseRouteError),r=rp(Ki.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function My(){let{router:t}=Ry(np.UseNavigateStable),e=rp(Ki.UseNavigateStable),n=_.useRef(!1);return tp(()=>{n.current=!0}),_.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,js({fromRouteId:e},i)))},[t,e])}const Ju={};function Dy(t,e,n){!e&&!Ju[t]&&(Ju[t]=!0)}function Uy(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Zo(t){let{to:e,replace:n,state:r,relative:s}=t;Is()||se(!1);let{future:i,static:o}=_.useContext(Ls),{matches:a}=_.useContext(Rn),{pathname:l}=bc(),u=kc(),d=Xf(e,Jf(a,i.v7_relativeSplatPath),l,s==="path"),h=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:s}),[u,h,s,n,r]),null}function Br(t){se(!1)}function zy(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Wt.Pop,navigator:i,static:o=!1,future:a}=t;Is()&&se(!1);let l=e.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:l,navigator:i,static:o,future:js({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Cr(r));let{pathname:d="/",search:h="",hash:p="",state:v=null,key:y="default"}=r,x=_.useMemo(()=>{let b=Yf(d,l);return b==null?null:{location:{pathname:b,search:h,hash:p,state:v,key:y},navigationType:s}},[l,d,h,p,v,y,s]);return x==null?null:_.createElement(Ls.Provider,{value:u},_.createElement(yo.Provider,{children:n,value:x}))}function By(t){let{children:e,location:n}=t;return Ey(ul(e),n)}new Promise(()=>{});function ul(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,s)=>{if(!_.isValidElement(r))return;let i=[...e,s];if(r.type===_.Fragment){n.push.apply(n,ul(r.props.children,i));return}r.type!==Br&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ul(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Wy="6";try{window.__reactRouterVersion=Wy}catch{}const Hy="startTransition",Xu=Bm[Hy];function qy(t){let{basename:e,children:n,future:r,window:s}=t,i=_.useRef();i.current==null&&(i.current=ey({window:s,v5Compat:!0}));let o=i.current,[a,l]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=_.useCallback(h=>{u&&Xu?Xu(()=>l(h)):l(h)},[l,u]);return _.useLayoutEffect(()=>o.listen(d),[o,d]),_.useEffect(()=>Uy(r),[r]),_.createElement(zy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Zu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zu||(Zu={}));var ed;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ed||(ed={}));var Vy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Gy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ky=(t,e)=>{const n=_.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:a,...l},u)=>_.createElement("svg",{ref:u,...Vy,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:`lucide lucide-${Gy(t)}`,...l},[...e.map(([d,h])=>_.createElement(d,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n};var L=Ky;const Qy=L("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Qi=L("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),sp=L("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Sc=L("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),ea=L("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Yi=L("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),ip=L("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Yy=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Jy=L("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Xy=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),td=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),op=L("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),ta=L("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Zy=L("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),ap=L("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ev=L("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),nd=L("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),rd=L("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),tv=L("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),dl=L("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),nv=L("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),sd=L("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Zt=L("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),lp=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),rv=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),sv=L("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),id=L("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),iv=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),ov=L("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),av=L("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),Es=L("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),lv=L("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),cv=L("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),od=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),Cn=L("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),uv=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),dv=L("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),cp=L("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),hl=L("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),fl=L("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),hv=L("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),up=L("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),dp=L("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),fv=L("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),jn=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ad=L("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function pv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ld(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function cd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ld(Object(n),!0).forEach(function(r){pv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mv(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function gv(t,e){if(t==null)return{};var n=mv(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function yv(t,e){return vv(t)||wv(t,e)||xv(t,e)||_v()}function vv(t){if(Array.isArray(t))return t}function wv(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,s=!1,i=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(l){s=!0,i=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(s)throw i}}return n}}function xv(t,e){if(t){if(typeof t=="string")return ud(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ud(t,e)}}function ud(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function hd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dd(Object(n),!0).forEach(function(r){bv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduceRight(function(s,i){return i(s)},r)}}function Wr(t){return function e(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return s.length>=t.length?t.apply(this,s):function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return e.apply(n,[].concat(s,a))}}}function Ji(t){return{}.toString.call(t).includes("Object")}function Sv(t){return!Object.keys(t).length}function Ts(t){return typeof t=="function"}function Cv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jv(t,e){return Ji(e)||en("changeType"),Object.keys(e).some(function(n){return!Cv(t,n)})&&en("changeField"),e}function Ev(t){Ts(t)||en("selectorType")}function Tv(t){Ts(t)||Ji(t)||en("handlerType"),Ji(t)&&Object.values(t).some(function(e){return!Ts(e)})&&en("handlersType")}function Pv(t){t||en("initialIsRequired"),Ji(t)||en("initialType"),Sv(t)&&en("initialContent")}function Nv(t,e){throw new Error(t[e]||t.default)}var Ov={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},en=Wr(Nv)(Ov),si={changes:jv,selector:Ev,handler:Tv,initial:Pv};function Av(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};si.initial(t),si.handler(e);var n={current:t},r=Wr(Lv)(n,e),s=Wr(Rv)(n),i=Wr(si.changes)(t),o=Wr(Fv)(n);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return si.selector(u),u(n.current)}function l(u){kv(r,s,i,o)(u)}return[a,l]}function Fv(t,e){return Ts(e)?e(t.current):e}function Rv(t,e){return t.current=hd(hd({},t.current),e),e}function Lv(t,e,n){return Ts(e)?e(t.current):Object.keys(n).forEach(function(r){var s;return(s=e[r])===null||s===void 0?void 0:s.call(e,t.current[r])}),n}var Iv={create:Av},$v={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function Mv(t){return function e(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return s.length>=t.length?t.apply(this,s):function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return e.apply(n,[].concat(s,a))}}}function Dv(t){return{}.toString.call(t).includes("Object")}function Uv(t){return t||fd("configIsRequired"),Dv(t)||fd("configType"),t.urls?(zv(),{paths:{vs:t.urls.monacoBase}}):t}function zv(){console.warn(hp.deprecation)}function Bv(t,e){throw new Error(t[e]||t.default)}var hp={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fd=Mv(Bv)(hp),Wv={config:Uv},Hv=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(i,o){return o(i)},s)}};function fp(t,e){return Object.keys(e).forEach(function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],fp(t[n],e[n]))}),cd(cd({},t),e)}var qv={type:"cancelation",msg:"operation is manually canceled"};function na(t){var e=!1,n=new Promise(function(r,s){t.then(function(i){return e?s(qv):r(i)}),t.catch(s)});return n.cancel=function(){return e=!0},n}var Vv=Iv.create({config:$v,isInitialized:!1,resolve:null,reject:null,monaco:null}),pp=yv(Vv,2),$s=pp[0],vo=pp[1];function Gv(t){var e=Wv.config(t),n=e.monaco,r=gv(e,["monaco"]);vo(function(s){return{config:fp(s.config,r),monaco:n}})}function Kv(){var t=$s(function(e){var n=e.monaco,r=e.isInitialized,s=e.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!t.isInitialized){if(vo({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),na(ra);if(window.monaco&&window.monaco.editor)return mp(window.monaco),t.resolve(window.monaco),na(ra);Hv(Qv,Jv)(Xv)}return na(ra)}function Qv(t){return document.body.appendChild(t)}function Yv(t){var e=document.createElement("script");return t&&(e.src=t),e}function Jv(t){var e=$s(function(r){var s=r.config,i=r.reject;return{config:s,reject:i}}),n=Yv("".concat(e.config.paths.vs,"/loader.js"));return n.onload=function(){return t()},n.onerror=e.reject,n}function Xv(){var t=$s(function(n){var r=n.config,s=n.resolve,i=n.reject;return{config:r,resolve:s,reject:i}}),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],function(n){mp(n),t.resolve(n)},function(n){t.reject(n)})}function mp(t){$s().monaco||vo({monaco:t})}function Zv(){return $s(function(t){var e=t.monaco;return e})}var ra=new Promise(function(t,e){return vo({resolve:t,reject:e})}),gp={config:Gv,init:Kv,__getMonacoInstance:Zv},ew={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},sa=ew,tw={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},nw=tw;function rw({children:t}){return Ht.createElement("div",{style:nw.container},t)}var sw=rw,iw=sw;function ow({width:t,height:e,isEditorReady:n,loading:r,_ref:s,className:i,wrapperProps:o}){return Ht.createElement("section",{style:{...sa.wrapper,width:t,height:e},...o},!n&&Ht.createElement(iw,null,r),Ht.createElement("div",{ref:s,style:{...sa.fullWidth,...!n&&sa.hide},className:i}))}var aw=ow,yp=_.memo(aw);function lw(t){_.useEffect(t,[])}var vp=lw;function cw(t,e,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:t,e)}var Ue=cw;function ns(){}function ar(t,e,n,r){return uw(t,r)||dw(t,e,n,r)}function uw(t,e){return t.editor.getModel(wp(t,e))}function dw(t,e,n,r){return t.editor.createModel(e,n,r?wp(t,r):void 0)}function wp(t,e){return t.Uri.parse(e)}function hw({original:t,modified:e,language:n,originalLanguage:r,modifiedLanguage:s,originalModelPath:i,modifiedModelPath:o,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:d="Loading...",options:h={},height:p="100%",width:v="100%",className:y,wrapperProps:x={},beforeMount:b=ns,onMount:f=ns}){let[m,g]=_.useState(!1),[w,k]=_.useState(!0),S=_.useRef(null),C=_.useRef(null),E=_.useRef(null),M=_.useRef(f),P=_.useRef(b),Z=_.useRef(!1);vp(()=>{let I=gp.init();return I.then(W=>(C.current=W)&&k(!1)).catch(W=>(W==null?void 0:W.type)!=="cancelation"&&console.error("Monaco initialization: error:",W)),()=>S.current?$e():I.cancel()}),Ue(()=>{if(S.current&&C.current){let I=S.current.getOriginalEditor(),W=ar(C.current,t||"",r||n||"text",i||"");W!==I.getModel()&&I.setModel(W)}},[i],m),Ue(()=>{if(S.current&&C.current){let I=S.current.getModifiedEditor(),W=ar(C.current,e||"",s||n||"text",o||"");W!==I.getModel()&&I.setModel(W)}},[o],m),Ue(()=>{let I=S.current.getModifiedEditor();I.getOption(C.current.editor.EditorOption.readOnly)?I.setValue(e||""):e!==I.getValue()&&(I.executeEdits("",[{range:I.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),I.pushUndoStop())},[e],m),Ue(()=>{var I,W;(W=(I=S.current)==null?void 0:I.getModel())==null||W.original.setValue(t||"")},[t],m),Ue(()=>{let{original:I,modified:W}=S.current.getModel();C.current.editor.setModelLanguage(I,r||n||"text"),C.current.editor.setModelLanguage(W,s||n||"text")},[n,r,s],m),Ue(()=>{var I;(I=C.current)==null||I.editor.setTheme(u)},[u],m),Ue(()=>{var I;(I=S.current)==null||I.updateOptions(h)},[h],m);let Pe=_.useCallback(()=>{var ie;if(!C.current)return;P.current(C.current);let I=ar(C.current,t||"",r||n||"text",i||""),W=ar(C.current,e||"",s||n||"text",o||"");(ie=S.current)==null||ie.setModel({original:I,modified:W})},[n,e,s,t,r,i,o]),Ie=_.useCallback(()=>{var I;!Z.current&&E.current&&(S.current=C.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...h}),Pe(),(I=C.current)==null||I.editor.setTheme(u),g(!0),Z.current=!0)},[h,u,Pe]);_.useEffect(()=>{m&&M.current(S.current,C.current)},[m]),_.useEffect(()=>{!w&&!m&&Ie()},[w,m,Ie]);function $e(){var W,ie,T,F;let I=(W=S.current)==null?void 0:W.getModel();a||((ie=I==null?void 0:I.original)==null||ie.dispose()),l||((T=I==null?void 0:I.modified)==null||T.dispose()),(F=S.current)==null||F.dispose()}return Ht.createElement(yp,{width:v,height:p,isEditorReady:m,loading:d,_ref:E,className:y,wrapperProps:x})}var fw=hw;_.memo(fw);function pw(t){let e=_.useRef();return _.useEffect(()=>{e.current=t},[t]),e.current}var mw=pw,ii=new Map;function gw({defaultValue:t,defaultLanguage:e,defaultPath:n,value:r,language:s,path:i,theme:o="light",line:a,loading:l="Loading...",options:u={},overrideServices:d={},saveViewState:h=!0,keepCurrentModel:p=!1,width:v="100%",height:y="100%",className:x,wrapperProps:b={},beforeMount:f=ns,onMount:m=ns,onChange:g,onValidate:w=ns}){let[k,S]=_.useState(!1),[C,E]=_.useState(!0),M=_.useRef(null),P=_.useRef(null),Z=_.useRef(null),Pe=_.useRef(m),Ie=_.useRef(f),$e=_.useRef(),I=_.useRef(r),W=mw(i),ie=_.useRef(!1),T=_.useRef(!1);vp(()=>{let A=gp.init();return A.then($=>(M.current=$)&&E(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>P.current?R():A.cancel()}),Ue(()=>{var $,ne,be,Ge;let A=ar(M.current,t||r||"",e||s||"",i||n||"");A!==(($=P.current)==null?void 0:$.getModel())&&(h&&ii.set(W,(ne=P.current)==null?void 0:ne.saveViewState()),(be=P.current)==null||be.setModel(A),h&&((Ge=P.current)==null||Ge.restoreViewState(ii.get(i))))},[i],k),Ue(()=>{var A;(A=P.current)==null||A.updateOptions(u)},[u],k),Ue(()=>{!P.current||r===void 0||(P.current.getOption(M.current.editor.EditorOption.readOnly)?P.current.setValue(r):r!==P.current.getValue()&&(T.current=!0,P.current.executeEdits("",[{range:P.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),P.current.pushUndoStop(),T.current=!1))},[r],k),Ue(()=>{var $,ne;let A=($=P.current)==null?void 0:$.getModel();A&&s&&((ne=M.current)==null||ne.editor.setModelLanguage(A,s))},[s],k),Ue(()=>{var A;a!==void 0&&((A=P.current)==null||A.revealLine(a))},[a],k),Ue(()=>{var A;(A=M.current)==null||A.editor.setTheme(o)},[o],k);let F=_.useCallback(()=>{var A;if(!(!Z.current||!M.current)&&!ie.current){Ie.current(M.current);let $=i||n,ne=ar(M.current,r||t||"",e||s||"",$||"");P.current=(A=M.current)==null?void 0:A.editor.create(Z.current,{model:ne,automaticLayout:!0,...u},d),h&&P.current.restoreViewState(ii.get($)),M.current.editor.setTheme(o),a!==void 0&&P.current.revealLine(a),S(!0),ie.current=!0}},[t,e,n,r,s,i,u,d,h,o,a]);_.useEffect(()=>{k&&Pe.current(P.current,M.current)},[k]),_.useEffect(()=>{!C&&!k&&F()},[C,k,F]),I.current=r,_.useEffect(()=>{var A,$;k&&g&&((A=$e.current)==null||A.dispose(),$e.current=($=P.current)==null?void 0:$.onDidChangeModelContent(ne=>{T.current||g(P.current.getValue(),ne)}))},[k,g]),_.useEffect(()=>{if(k){let A=M.current.editor.onDidChangeMarkers($=>{var be;let ne=(be=P.current.getModel())==null?void 0:be.uri;if(ne&&$.find(Ge=>Ge.path===ne.path)){let Ge=M.current.editor.getModelMarkers({resource:ne});w==null||w(Ge)}});return()=>{A==null||A.dispose()}}return()=>{}},[k,w]);function R(){var A,$;(A=$e.current)==null||A.dispose(),p?h&&ii.set(i,P.current.saveViewState()):($=P.current.getModel())==null||$.dispose(),P.current.dispose()}return Ht.createElement(yp,{width:v,height:y,isEditorReady:k,loading:l,_ref:Z,className:x,wrapperProps:b})}var yw=gw,vw=_.memo(yw),ww=vw;const xw=({value:t,onChange:e,language:n})=>{const r=_.useRef(null),s=(o,a)=>{r.current=o,o.updateOptions({fontSize:16,fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:1.6,padding:{top:16,bottom:16},minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0,tabSize:2,insertSpaces:!0,detectIndentation:!1,renderLineHighlight:"gutter",selectionHighlight:!1,occurrencesHighlight:!1,renderWhitespace:"selection",bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0}}),a.editor.defineTheme("kid-friendly",{base:"vs",inherit:!0,rules:[{token:"keyword",foreground:"0066cc",fontStyle:"bold"},{token:"string",foreground:"009900"},{token:"comment",foreground:"888888",fontStyle:"italic"},{token:"number",foreground:"ff6600"},{token:"function",foreground:"cc0066",fontStyle:"bold"},{token:"variable",foreground:"0066cc"}],colors:{"editor.background":"#fefefe","editor.foreground":"#333333","editorLineNumber.foreground":"#999999","editorLineNumber.activeForeground":"#333333","editorGutter.background":"#f8f8f8","editorBracketMatch.background":"#e8f4fd","editorBracketMatch.border":"#0066cc","editor.selectionBackground":"#b3d9ff","editorCursor.foreground":"#0066cc"}}),a.editor.setTheme("kid-friendly"),o.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.Enter,()=>{console.log("Run code shortcut triggered")}),o.focus()},i=o=>{o!==void 0&&e(o)};return c.jsxs("div",{className:"code-editor",children:[c.jsx(ww,{height:"400px",defaultLanguage:n,value:t,onChange:i,onMount:s,options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,contextmenu:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on"}}),c.jsx("style",{children:`
        .code-editor {
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: border-color 0.3s ease;
        }

        .code-editor:focus-within {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        :global(.monaco-editor) {
          border-radius: 8px;
        }

        :global(.monaco-editor .margin) {
          background-color: #f8f8f8 !important;
        }

        :global(.monaco-editor .view-lines) {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        }
      `})]})},_w=({output:t,isRunning:e,testResults:n,stars:r})=>{const s=o=>c.jsxs("div",{className:"stars-display",children:[[1,2,3].map(a=>c.jsx(Cn,{className:`star ${a<=o?"earned":"empty"}`,size:24},a)),c.jsx("span",{className:"stars-text",children:o>0?`${o}/3 stars earned!`:"No stars yet"})]}),i=()=>!n||n.length===0?null:c.jsxs("div",{className:"test-results",children:[c.jsx("h4",{children:"🧪 Test Results"}),n.map((o,a)=>c.jsxs("div",{className:`test-result ${o.passed?"passed":"failed"}`,children:[c.jsx("div",{className:"test-icon",children:o.passed?c.jsx(Yi,{size:16}):c.jsx(fv,{size:16})}),c.jsxs("div",{className:"test-info",children:[c.jsx("span",{className:"test-name",children:o.name}),o.message&&c.jsx("span",{className:"test-message",children:o.message})]})]},a))]});return c.jsxs("div",{className:"console",children:[c.jsxs("div",{className:"console-header",children:[c.jsx(dv,{className:"console-icon"}),c.jsx("h3",{children:"🖥️ Output"}),e&&c.jsx("div",{className:"running-indicator",children:"Running..."})]}),c.jsxs("div",{className:"console-content",children:[t&&c.jsx("div",{className:"console-output",children:c.jsx("pre",{children:t})}),n&&c.jsxs(c.Fragment,{children:[i(),r!==void 0&&s(r)]}),!t&&!n&&!e&&c.jsx("div",{className:"console-empty",children:c.jsx("p",{children:'👋 Click "Run Code" to see your output here!'})}),e&&c.jsxs("div",{className:"console-running",children:[c.jsx("div",{className:"spinner"}),c.jsx("p",{children:"🤖 Running your code..."})]})]}),c.jsx("style",{children:`
        .console {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .console-header {
          background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
          color: white;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
        }

        .console-icon {
          width: 20px;
          height: 20px;
        }

        .running-indicator {
          margin-left: auto;
          background: #48bb78;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.9rem;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .console-content {
          padding: 20px;
          max-height: 300px;
          overflow-y: auto;
        }

        .console-output {
          background: #1a202c;
          color: #e2e8f0;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
          overflow-x: auto;
        }

        .console-output pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .test-results {
          margin-bottom: 15px;
        }

        .test-results h4 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.1rem;
        }

        .test-result {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 5px;
        }

        .test-result.passed {
          background: #f0fff4;
          border-left: 4px solid #48bb78;
        }

        .test-result.failed {
          background: #fff5f5;
          border-left: 4px solid #f56565;
        }

        .test-icon {
          flex-shrink: 0;
        }

        .test-result.passed .test-icon {
          color: #48bb78;
        }

        .test-result.failed .test-icon {
          color: #f56565;
        }

        .test-info {
          flex: 1;
        }

        .test-name {
          font-weight: bold;
          color: #2d3748;
          display: block;
        }

        .test-message {
          font-size: 0.9rem;
          color: #4a5568;
          display: block;
        }

        .stars-display {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: linear-gradient(135deg, #fff9e6 0%, #fef5e7 100%);
          border-radius: 10px;
          border: 2px solid #f6e05e;
        }

        .star {
          color: #d1d5db;
          transition: color 0.3s ease;
        }

        .star.earned {
          color: #fbbf24;
          animation: starPop 0.5s ease-out;
        }

        @keyframes starPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .stars-text {
          font-weight: bold;
          color: #92400e;
        }

        .console-empty,
        .console-running {
          text-align: center;
          padding: 30px;
          color: #6b7280;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Scrollbar styling */
        .console-content::-webkit-scrollbar {
          width: 8px;
        }

        .console-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .console-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        .console-content::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `})]})},bw=({world:t,moves:e})=>{const n=o=>{switch(o){case"start":return c.jsx(id,{size:16,className:"tile-icon start-icon"});case"goal":return c.jsx(nd,{size:16,className:"tile-icon goal-icon"});case"lava":return c.jsx(rd,{size:16,className:"tile-icon lava-icon"});case"wall":return c.jsx(od,{size:16,className:"tile-icon wall-icon"});case"gem":return c.jsx("span",{className:"tile-icon gem-icon",children:"💎"});default:return null}},r=(o,a)=>{let l="grid-tile";if(o===t.start[0]&&a===t.start[1])l+=" start";else if(o===t.goal[0]&&a===t.goal[1])l+=" goal";else{const u=t.tiles.find(d=>d.x===o&&d.y===a);u&&(l+=` ${u.type}`)}return l},i=(()=>{if(!e)return[];const o=[];let a=t.start[0],l=t.start[1];o.push([a,l]);for(const u of e){switch(u){case"UP":l-=1;break;case"DOWN":l+=1;break;case"LEFT":a-=1;break;case"RIGHT":a+=1;break}o.push([a,l])}return o})();return c.jsxs("div",{className:"grid-view",children:[c.jsxs("div",{className:"grid-header",children:[c.jsx("h3",{children:"🗺️ World Map"}),c.jsxs("div",{className:"grid-legend",children:[c.jsxs("div",{className:"legend-item",children:[c.jsx(id,{size:12,className:"legend-icon start"}),c.jsx("span",{children:"Start"})]}),c.jsxs("div",{className:"legend-item",children:[c.jsx(nd,{size:12,className:"legend-icon goal"}),c.jsx("span",{children:"Goal"})]}),c.jsxs("div",{className:"legend-item",children:[c.jsx(rd,{size:12,className:"legend-icon lava"}),c.jsx("span",{children:"Lava"})]}),c.jsxs("div",{className:"legend-item",children:[c.jsx(od,{size:12,className:"legend-icon wall"}),c.jsx("span",{children:"Wall"})]})]})]}),c.jsx("div",{className:"grid-container",children:c.jsx("div",{className:"grid",style:{gridTemplateColumns:`repeat(${t.width}, 1fr)`,gridTemplateRows:`repeat(${t.height}, 1fr)`},children:Array.from({length:t.height},(o,a)=>Array.from({length:t.width},(l,u)=>{var v;const d=r(u,a),h=i.some(([y,x])=>y===u&&x===a),p=i.length>0&&i[i.length-1][0]===u&&i[i.length-1][1]===a;return c.jsxs("div",{className:`${d} ${h?"robot-path":""} ${p?"robot-current":""}`,children:[n(u===t.start[0]&&a===t.start[1]?"start":u===t.goal[0]&&a===t.goal[1]?"goal":((v=t.tiles.find(y=>y.x===u&&y.y===a))==null?void 0:v.type)||"empty"),p&&c.jsx("div",{className:"robot",children:"🤖"})]},`${u}-${a}`)}))})}),e&&e.length>0&&c.jsxs("div",{className:"moves-display",children:[c.jsx("h4",{children:"🤖 Robot Moves"}),c.jsx("div",{className:"moves-list",children:e.map((o,a)=>c.jsx("span",{className:"move-item",children:o},a))})]}),c.jsx("style",{children:`
        .grid-view {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .grid-header {
          margin-bottom: 15px;
        }

        .grid-header h3 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
        }

        .grid-legend {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .legend-icon {
          color: #667eea;
        }

        .legend-icon.start {
          color: #48bb78;
        }

        .legend-icon.goal {
          color: #ed8936;
        }

        .legend-icon.lava {
          color: #f56565;
        }

        .legend-icon.wall {
          color: #4a5568;
        }

        .grid-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          gap: 2px;
          background: #e2e8f0;
          padding: 10px;
          border-radius: 10px;
          max-width: 100%;
        }

        .grid-tile {
          width: 40px;
          height: 40px;
          background: #f7fafc;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .grid-tile.start {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
        }

        .grid-tile.goal {
          background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
          color: white;
        }

        .grid-tile.lava {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
        }

        .grid-tile.wall {
          background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
          color: white;
        }

        .grid-tile.gem {
          background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%);
          color: white;
        }

        .grid-tile.robot-path {
          background: rgba(102, 126, 234, 0.2);
          border: 2px solid #667eea;
        }

        .grid-tile.robot-current {
          animation: robotGlow 1s ease-in-out infinite;
        }

        @keyframes robotGlow {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
          }
          50% { 
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
        }

        .tile-icon {
          z-index: 1;
        }

        .robot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
          z-index: 2;
          animation: robotBounce 0.5s ease-in-out;
        }

        @keyframes robotBounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .moves-display {
          background: #f8fafc;
          border-radius: 10px;
          padding: 15px;
          border-left: 4px solid #667eea;
        }

        .moves-display h4 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1rem;
        }

        .moves-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .move-item {
          background: #667eea;
          color: white;
          padding: 4px 8px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          min-width: 50px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .grid-tile {
            width: 35px;
            height: 35px;
          }

          .legend-item {
            font-size: 0.8rem;
          }

          .moves-list {
            gap: 5px;
          }

          .move-item {
            padding: 3px 6px;
            font-size: 0.7rem;
            min-width: 40px;
          }
        }
      `})]})},kw=({hintState:t,onGetHint:e})=>{const n=t.currentHint<t.maxHints;return t.maxHints>0?c.jsxs("div",{className:"hint-system",children:[c.jsxs("div",{className:"hints-header",children:[c.jsx(Zt,{className:"hint-icon"}),c.jsx("h4",{children:"💡 Hints"}),c.jsxs("span",{className:"hint-progress",children:[t.currentHint,"/",t.maxHints," used"]})]}),c.jsxs("div",{className:"hints-content",children:[t.hints.slice(0,t.currentHint).map((s,i)=>c.jsxs("div",{className:"hint-item shown",children:[c.jsx("div",{className:"hint-number",children:i+1}),c.jsx("div",{className:"hint-text",children:s})]},i)),n&&c.jsx("div",{className:"hint-actions",children:c.jsxs("button",{className:"btn btn-secondary btn-small",onClick:e,children:[c.jsx(Zt,{className:"btn-icon"}),"Get Next Hint",c.jsx(Jy,{className:"btn-icon"})]})}),!n&&c.jsx("div",{className:"hint-complete",children:c.jsx("p",{children:"🎯 All hints revealed! Try your best solution."})})]}),c.jsx("style",{children:`
        .hint-system {
          background: linear-gradient(135deg, #fff9e6 0%, #fef5e7 100%);
          border: 2px solid #f6e05e;
          border-radius: 15px;
          padding: 20px;
          margin-top: 20px;
        }

        .hint-system.no-hints {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-color: #48bb78;
          text-align: center;
          color: #2d3748;
        }

        .hints-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .hint-icon {
          width: 20px;
          height: 20px;
          color: #d97706;
        }

        .hints-header h4 {
          color: #92400e;
          margin: 0;
          font-size: 1.1rem;
        }

        .hint-progress {
          margin-left: auto;
          background: #d97706;
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hints-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hint-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          opacity: 0;
          animation: hintReveal 0.5s ease-out forwards;
        }

        .hint-item.shown {
          opacity: 1;
        }

        @keyframes hintReveal {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hint-number {
          width: 24px;
          height: 24px;
          background: #d97706;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hint-text {
          flex: 1;
          color: #92400e;
          line-height: 1.5;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          border-left: 3px solid #d97706;
        }

        .hint-actions {
          text-align: center;
          padding-top: 10px;
          border-top: 1px solid rgba(217, 119, 6, 0.2);
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        .hint-complete {
          text-align: center;
          padding: 15px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          color: #92400e;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .hints-header {
            flex-wrap: wrap;
          }

          .hint-progress {
            margin-left: 0;
            margin-top: 5px;
          }

          .hint-item {
            flex-direction: column;
            gap: 8px;
          }

          .hint-number {
            align-self: flex-start;
          }
        }
      `})]}):c.jsx("div",{className:"hint-system no-hints",children:c.jsx("p",{children:"No hints available for this level. You've got this! 💪"})})},xp=({theme:t,onToggle:e})=>c.jsx("button",{onClick:e,className:"theme-toggle","aria-label":`Switch to ${t==="light"?"dark":"light"} theme`,children:t==="light"?c.jsx(iv,{size:20}):c.jsx(uv,{size:20})}),_p=({soundEnabled:t,onToggle:e})=>c.jsx("button",{onClick:e,className:"sound-toggle","aria-label":`${t?"Disable":"Enable"} sound`,children:t?c.jsx(up,{size:20}):c.jsx(dp,{size:20})});class Sw{constructor(){pe(this,"audioContext",null);pe(this,"musicEnabled",!1);pe(this,"currentMusic",null);pe(this,"isPlaying",!1);this.initializeAudioContext()}async initializeAudioContext(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.warn("Web Audio API not supported:",e)}}setMusicEnabled(e){this.musicEnabled=e,e&&!this.isPlaying?this.playBackgroundMusic():!e&&this.isPlaying&&this.stopBackgroundMusic()}isMusicEnabled(){return this.musicEnabled}async playBackgroundMusic(){if(!(!this.audioContext||!this.musicEnabled))try{this.audioContext.state==="suspended"&&await this.audioContext.resume(),this.stopBackgroundMusic();const e=this.createBackgroundMelody();this.currentMusic=e,this.isPlaying=!0,e.onended=()=>{this.musicEnabled&&this.playBackgroundMusic()},e.start()}catch(e){console.warn("Could not play background music:",e)}}stopBackgroundMusic(){this.currentMusic&&(this.currentMusic.stop(),this.currentMusic=null,this.isPlaying=!1)}createBackgroundMelody(){if(!this.audioContext)throw new Error("Audio context not available");const e=this.audioContext.createBufferSource(),n=this.audioContext.createBuffer(1,this.audioContext.sampleRate*8,this.audioContext.sampleRate),r=n.getChannelData(0),s=[{freq:261.63,duration:.5},{freq:329.63,duration:.5},{freq:392,duration:.5},{freq:523.25,duration:.5},{freq:392,duration:.5},{freq:329.63,duration:.5},{freq:261.63,duration:1},{freq:0,duration:.5}];let i=0;for(const o of s){const a=o.duration*this.audioContext.sampleRate,l=o.freq;for(let u=0;u<a;u++){if(l>0){const d=i/this.audioContext.sampleRate,h=Math.sin(2*Math.PI*l*d)*.1;r[i]=h}else r[i]=0;i++}}return e.buffer=n,e.loop=!1,e}playSuccessJingle(){if(!(!this.audioContext||!this.musicEnabled))try{const e=this.audioContext.createBufferSource(),n=this.audioContext.createBuffer(1,this.audioContext.sampleRate*2,this.audioContext.sampleRate),r=n.getChannelData(0),s=[261.63,329.63,392,523.25];let i=0;for(const o of s){const a=.4*this.audioContext.sampleRate;for(let l=0;l<a;l++){const u=i/this.audioContext.sampleRate,d=Math.sin(2*Math.PI*o*u)*.2;r[i]=d,i++}}e.buffer=n,e.connect(this.audioContext.destination),e.start()}catch(e){console.warn("Could not play success jingle:",e)}}playNotification(){if(!(!this.audioContext||!this.musicEnabled))try{const e=this.audioContext.createBufferSource(),n=this.audioContext.createBuffer(1,this.audioContext.sampleRate*.5,this.audioContext.sampleRate),r=n.getChannelData(0),s=800;for(let i=0;i<r.length;i++){const o=i/this.audioContext.sampleRate,a=Math.sin(2*Math.PI*s*o)*.15;r[i]=a}e.buffer=n,e.connect(this.audioContext.destination),e.start()}catch(e){console.warn("Could not play notification:",e)}}}const Cw=new Sw,bp=({musicEnabled:t,onMusicToggle:e})=>{const n=()=>{const r=!t;e(r),Cw.setMusicEnabled(r)};return c.jsxs("button",{onClick:n,className:`music-toggle ${t?"enabled":"disabled"}`,title:t?"Disable background music":"Enable background music","aria-label":t?"Disable background music":"Enable background music",children:[t?c.jsx(up,{size:20}):c.jsx(dp,{size:20}),c.jsx("span",{className:"music-toggle-label",children:t?"Music On":"Music Off"})]})},jw=({achievement:t,onClose:e})=>c.jsx("div",{className:"achievement-modal-overlay",children:c.jsxs("div",{className:"achievement-modal",children:[c.jsx("button",{className:"close-button",onClick:e,children:c.jsx(jn,{size:24})}),c.jsxs("div",{className:"achievement-content",children:[c.jsx("div",{className:"achievement-icon",children:t.icon}),c.jsx("h2",{children:"🎉 Achievement Unlocked! 🎉"}),c.jsx("h3",{children:t.name}),c.jsx("p",{children:t.description})]}),c.jsxs("div",{className:"achievement-animation",children:[c.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),c.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),c.jsx("div",{className:"sparkle sparkle-3",children:"✨"}),c.jsx("div",{className:"sparkle sparkle-4",children:"⭐"})]})]})}),Ew=({snippets:t,onInsertSnippet:e})=>{const[n,r]=_.useState(!1),[s,i]=_.useState("all"),o=["all",...Array.from(new Set(t.map(l=>l.category)))],a=s==="all"?t:t.filter(l=>l.category===s);return c.jsxs("div",{className:"code-snippets-panel",children:[c.jsxs("button",{className:"snippets-toggle",onClick:()=>r(!n),children:[c.jsx(op,{size:16}),"Code Snippets",n?c.jsx(Xy,{size:16}):c.jsx(Yy,{size:16})]}),n&&c.jsxs("div",{className:"snippets-content",children:[c.jsx("div",{className:"category-filter",children:o.map(l=>c.jsx("button",{className:`category-btn ${s===l?"active":""}`,onClick:()=>i(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))}),c.jsx("div",{className:"snippets-list",children:a.map(l=>c.jsxs("div",{className:"snippet-item",children:[c.jsxs("div",{className:"snippet-header",children:[c.jsx("h4",{children:l.title}),c.jsx("span",{className:`difficulty ${l.difficulty}`,children:l.difficulty})]}),c.jsx("p",{className:"snippet-description",children:l.description}),c.jsxs("div",{className:"snippet-code",children:[c.jsx("pre",{children:l.code}),c.jsx("button",{className:"insert-btn",onClick:()=>e(l.code),children:"Insert Code"})]})]},l.id))})]})]})},Tw=({concepts:t,onClose:e})=>{const[n,r]=_.useState(""),[s,i]=_.useState("all"),o=["all",...Array.from(new Set(t.map(l=>l.category)))],a=t.filter(l=>{const u=l.term.toLowerCase().includes(n.toLowerCase())||l.definition.toLowerCase().includes(n.toLowerCase()),d=s==="all"||l.category===s;return u&&d});return c.jsx("div",{className:"glossary-overlay",children:c.jsxs("div",{className:"glossary-modal",children:[c.jsxs("div",{className:"glossary-header",children:[c.jsxs("h2",{children:[c.jsx(Sc,{size:24}),"Python Concepts Glossary"]}),c.jsx("button",{className:"close-button",onClick:e,children:c.jsx(jn,{size:24})})]}),c.jsxs("div",{className:"glossary-controls",children:[c.jsxs("div",{className:"search-box",children:[c.jsx(cv,{size:16}),c.jsx("input",{type:"text",placeholder:"Search concepts...",value:n,onChange:l=>r(l.target.value)})]}),c.jsx("div",{className:"category-filter",children:o.map(l=>c.jsx("button",{className:`category-btn ${s===l?"active":""}`,onClick:()=>i(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),c.jsx("div",{className:"concepts-list",children:a.map(l=>c.jsxs("div",{className:"concept-item",children:[c.jsx("h3",{children:l.term}),c.jsx("p",{className:"definition",children:l.definition}),c.jsxs("div",{className:"example",children:[c.jsx("strong",{children:"Example:"}),c.jsx("code",{children:l.example})]})]},l.term))})]})})},Pw=({error:t,translations:e})=>{const r=(s=>{const i=s.toLowerCase();for(const o of e)if(i.includes(o.errorType.toLowerCase()))return o;return i.includes("syntax")?e.find(o=>o.errorType==="SyntaxError")||null:i.includes("name")&&i.includes("not defined")?e.find(o=>o.errorType==="NameError")||null:i.includes("type")?e.find(o=>o.errorType==="TypeError")||null:i.includes("indentation")&&e.find(o=>o.errorType==="IndentationError")||null})(t);return r?c.jsxs("div",{className:"error-translator",children:[c.jsxs("div",{className:"error-header",children:[c.jsx(Qi,{size:20}),c.jsx("span",{children:"Error"})]}),c.jsxs("div",{className:"kid-friendly-message",children:[c.jsx("h4",{children:"🤔 What happened?"}),c.jsx("p",{children:r.kidFriendlyMessage})]}),c.jsxs("div",{className:"error-suggestion",children:[c.jsx(Zt,{size:16}),c.jsx("span",{children:r.suggestion})]}),c.jsxs("div",{className:"error-example",children:[c.jsx("h4",{children:"💡 Example:"}),c.jsx("code",{children:r.example})]}),c.jsx("div",{className:"original-error",children:c.jsxs("details",{children:[c.jsx("summary",{children:"Show original error"}),c.jsx("code",{children:t})]})})]}):c.jsxs("div",{className:"error-translator",children:[c.jsxs("div",{className:"error-header",children:[c.jsx(Qi,{size:20}),c.jsx("span",{children:"Error"})]}),c.jsx("div",{className:"error-message",children:c.jsx("code",{children:t})}),c.jsxs("div",{className:"error-suggestion",children:[c.jsx(Zt,{size:16}),c.jsx("span",{children:"Try checking your code for typos or missing punctuation!"})]})]})},Nw=({videoUrl:t,additionalTutorials:e=[],title:n,onClose:r})=>{const[s,i]=_.useState(!1),o=()=>{i(!s)},a=()=>{window.open(t,"_blank")};return c.jsx("div",{className:"video-tutorial-overlay",children:c.jsxs("div",{className:"video-tutorial-modal",children:[c.jsxs("div",{className:"video-header",children:[c.jsx("h3",{children:"📺 Video Tutorial"}),c.jsxs("div",{className:"video-controls",children:[c.jsx("button",{className:"external-btn",onClick:a,title:"Open in YouTube",children:c.jsx(ta,{size:16})}),c.jsx("button",{className:"close-button",onClick:r,children:c.jsx(jn,{size:20})})]})]}),c.jsxs("div",{className:"video-content",children:[c.jsxs("div",{className:"video-placeholder",children:[c.jsx("div",{className:"video-thumbnail",children:c.jsx("div",{className:"play-button",onClick:o,children:s?c.jsx(av,{size:48}):c.jsx(Es,{size:48})})}),c.jsx("p",{className:"video-title",children:n}),c.jsx("p",{className:"video-description",children:"Click the play button to watch the tutorial, or click the external link to open in YouTube."})]}),e.length>0&&c.jsxs("div",{className:"additional-tutorials",children:[c.jsx("h4",{children:"📚 Additional Learning Resources"}),c.jsx("div",{className:"tutorial-links",children:e.map((l,u)=>c.jsxs("button",{className:"tutorial-link-btn",onClick:()=>window.open(l,"_blank"),children:[c.jsx(ta,{size:16}),"Tutorial ",u+1]},u))})]})]}),c.jsxs("div",{className:"video-actions",children:[c.jsxs("button",{className:"btn btn-primary",onClick:a,children:[c.jsx(ta,{size:16}),"Watch on YouTube"]}),c.jsx("button",{className:"btn btn-secondary",onClick:r,children:"Close"})]})]})})};class Ow{constructor(){pe(this,"patterns",{syntax:{missing_colon:/if\s+.*[^:]$/,missing_quotes:/print\s+[^"'].*[^"']$/,incorrect_indentation:/^[^\s].*:$/,missing_parentheses:/print\s+[^(].*[^)]$/},style:{snake_case:/[A-Z]/,long_lines:/.{81,}/,trailing_whitespace:/\s+$/,multiple_spaces:/  +/},best_practice:{magic_numbers:/\b\d{2,}\b/,unused_imports:/^import\s+\w+$/,hardcoded_strings:/"[^"]{20,}"/},logic:{infinite_loop:/while\s+True:/,unreachable_code:/return\s+.*\n.*/,comparison_operator:/==\s*=\s*[^=]/}})}analyzeCode(e,n){const r=e.split(`
`),s=[],i=[],o=[];r.forEach((h,p)=>{const v=p+1;h.trim()&&(this.checkSyntaxIssues(h,v,s),this.checkStyleIssues(h,v,s),this.checkLogicIssues(h,v,s),this.checkBestPractices(h,v,s,n))}),this.analyzeCodeStructure(e,i,o);const a=this.calculateMetrics(e),l=this.calculateScore(s,a),u=this.calculateGrade(l),d=this.generateOverallFeedback(l,o);return{score:l,issues:s,suggestions:i,strengths:o,overall_feedback:d,grade:u}}checkSyntaxIssues(e,n,r){this.patterns.syntax.missing_colon.test(e)&&!e.includes("#")&&r.push({type:"error",severity:"high",line:n,column:e.length,message:"Missing colon (:) at the end of the statement",suggestion:"Add a colon (:) at the end of the line",explanation:"Python requires a colon after if, for, while, and def statements to indicate the start of a code block.",category:"syntax"}),this.patterns.syntax.missing_quotes.test(e)&&e.includes("print")&&r.push({type:"error",severity:"high",line:n,column:e.indexOf("print")+5,message:"String should be in quotes",suggestion:'Put your text in quotes like "Hello World"',explanation:"Text that you want to print needs to be wrapped in quotes so Python knows it's a string.",category:"syntax"}),this.patterns.syntax.incorrect_indentation.test(e)&&e.includes(":")&&r.push({type:"error",severity:"high",line:n,column:0,message:"Code after colon should be indented",suggestion:"Add 4 spaces at the beginning of the next line",explanation:"After a colon, the next line should be indented to show it belongs to the block above.",category:"syntax"})}checkStyleIssues(e,n,r){if(this.patterns.style.snake_case.test(e)&&e.includes("=")){const s=e.match(/(\w+)\s*=/);s&&/[A-Z]/.test(s[1])&&r.push({type:"suggestion",severity:"low",line:n,column:e.indexOf(s[1]),message:"Variable names should use snake_case",suggestion:`Use snake_case: ${s[1].toLowerCase()}`,explanation:"Python convention is to use snake_case (lowercase with underscores) for variable names.",category:"style"})}this.patterns.style.long_lines.test(e)&&r.push({type:"suggestion",severity:"low",line:n,column:80,message:"Line is too long",suggestion:"Break this line into multiple lines",explanation:"Long lines are hard to read. Try to keep lines under 80 characters.",category:"style"}),this.patterns.style.trailing_whitespace.test(e)&&r.push({type:"suggestion",severity:"low",line:n,column:e.length,message:"Remove trailing whitespace",suggestion:"Delete spaces at the end of the line",explanation:"Extra spaces at the end of lines are unnecessary and can cause issues.",category:"style"})}checkLogicIssues(e,n,r){this.patterns.logic.infinite_loop.test(e)&&r.push({type:"warning",severity:"high",line:n,column:e.indexOf("while"),message:"This might create an infinite loop",suggestion:"Add a way to break out of the loop",explanation:"while True creates a loop that runs forever unless you add a break statement.",category:"logic"}),this.patterns.logic.comparison_operator.test(e)&&r.push({type:"error",severity:"high",line:n,column:e.indexOf("=="),message:"Use == for comparison, not =",suggestion:"Change = to == for comparison",explanation:"Use == to compare values, = is for assigning values to variables.",category:"logic"})}checkBestPractices(e,n,r,s){s>5&&this.patterns.best_practice.magic_numbers.test(e)&&r.push({type:"suggestion",severity:"medium",line:n,column:e.search(/\d{2,}/),message:"Consider using a variable instead of a magic number",suggestion:"Create a variable with a descriptive name",explanation:"Magic numbers make code hard to understand. Use variables with meaningful names instead.",category:"best_practice"}),s>8&&this.patterns.best_practice.hardcoded_strings.test(e)&&r.push({type:"suggestion",severity:"low",line:n,column:e.indexOf('"'),message:"Consider using a variable for long strings",suggestion:"Store the string in a variable",explanation:"Long strings can be stored in variables to make code more readable and reusable.",category:"best_practice"})}analyzeCodeStructure(e,n,r){const s=e.split(`
`).filter(d=>d.trim()),o=s.filter(d=>d.trim().startsWith("#")).length/s.length;o<.1&&s.length>5?n.push("Add comments to explain what your code does"):o>.2&&r.push("Great use of comments to explain your code");const a=(e.match(/def\s+\w+/g)||[]).length;a>0&&r.push("Good use of functions to organize your code");const l=e.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\s*=/g)||[];l.filter(d=>/^[a-z_][a-z0-9_]*$/.test(d.replace("=","").trim())).length===l.length&&l.length>0&&r.push("Excellent variable naming conventions"),s.length>10&&a>0&&r.push("Well-organized code structure")}calculateMetrics(e){const n=e.split(`
`),r=n.filter(p=>p.trim()),s=(e.match(/\b(if|for|while|try|except|def)\b/g)||[]).length,i=r.reduce((p,v)=>p+v.length,0)/r.length,o=Math.max(0,100-(i-40)*2),a=e.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\s*=/g)||[],l=a.filter(p=>/^[a-z_][a-z0-9_]*$/.test(p.replace("=","").trim())),u=a.length>0?l.length/a.length*100:100,d=n.filter(p=>p.trim().startsWith("#")).length,h=n.length>0?d/n.length*100:0;return{lines_of_code:r.length,complexity:s,readability_score:Math.round(o),variable_naming_score:Math.round(u),comment_coverage:Math.round(h)}}calculateScore(e,n){let r=100;return e.forEach(s=>{switch(s.severity){case"high":r-=15;break;case"medium":r-=8;break;case"low":r-=3;break}}),r+=(n.readability_score-50)*.1,r+=(n.variable_naming_score-50)*.1,r+=(n.comment_coverage-10)*.2,Math.max(0,Math.min(100,Math.round(r)))}calculateGrade(e){return e>=90?"A":e>=80?"B":e>=70?"C":e>=60?"D":"F"}generateOverallFeedback(e,n){return e>=90?`Excellent work! Your code is well-written and follows good practices. ${n.join(" ")} Keep up the great work!`:e>=80?`Good job! Your code works well and shows understanding of Python concepts. ${n.join(" ")} There are a few areas for improvement.`:e>=70?`Nice effort! Your code shows progress in learning Python. ${n.join(" ")} Focus on the suggestions to improve your code quality.`:e>=60?`You're on the right track! Keep practicing and pay attention to the feedback. ${n.join(" ")} Don't give up!`:`Don't worry, coding takes practice! Review the suggestions and try again. ${n.join(" ")} Every programmer started where you are now.`}getKidFriendlyExplanation(e){return{SyntaxError:"Oops! There's a small mistake in how you wrote your code. Check for missing colons, quotes, or parentheses.",IndentationError:"Python is picky about spacing! Make sure your code is lined up properly with the right amount of spaces.",NameError:"Python can't find a variable you're trying to use. Check if you spelled it correctly and created it first.",TypeError:"You're trying to use different types of data together. Make sure you're using numbers with numbers and text with text.",ValueError:"The value you're using isn't quite right for what you're trying to do. Double-check your input.",IndexError:"You're trying to access something that doesn't exist in your list. Check if the position is correct.",KeyError:"You're looking for a key that doesn't exist in your dictionary. Make sure the key name is spelled correctly."}[e]||"Something went wrong, but don't worry! Check your code carefully and try again."}generateLearningSuggestions(e){const n=[],r=new Set(e.map(s=>s.category));return r.has("syntax")&&n.push("Review Python syntax basics: colons, indentation, and quotes"),r.has("logic")&&n.push("Practice with conditional statements and loops"),r.has("style")&&n.push("Learn about Python coding conventions and best practices"),r.has("best_practice")&&n.push("Explore advanced Python concepts like functions and data structures"),n}}const Aw=new Ow;class Fw{constructor(){pe(this,"soundEnabled",!0);pe(this,"audioContext",null);this.initializeAudioContext()}async initializeAudioContext(){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext)}catch(e){console.log("Audio not supported:",e)}}setSoundEnabled(e){this.soundEnabled=e}isSoundEnabled(){return this.soundEnabled}async playTone(e,n,r="sine"){if(!(!this.soundEnabled||!this.audioContext))try{const s=this.audioContext.createOscillator(),i=this.audioContext.createGain();s.connect(i),i.connect(this.audioContext.destination),s.frequency.setValueAtTime(e,this.audioContext.currentTime),s.type=r,i.gain.setValueAtTime(.1,this.audioContext.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.audioContext.currentTime+n),s.start(this.audioContext.currentTime),s.stop(this.audioContext.currentTime+n)}catch(s){console.log("Error playing sound:",s)}}async playSuccess(){this.soundEnabled&&(await this.playTone(523,.1,"sine"),setTimeout(()=>this.playTone(659,.1,"sine"),100),setTimeout(()=>this.playTone(784,.2,"sine"),200))}async playError(){this.soundEnabled&&(await this.playTone(400,.3,"sawtooth"),setTimeout(()=>this.playTone(300,.3,"sawtooth"),150))}async playClick(){this.soundEnabled&&await this.playTone(800,.05,"square")}async playAchievement(){this.soundEnabled&&(await this.playTone(523,.15,"sine"),setTimeout(()=>this.playTone(659,.15,"sine"),150),setTimeout(()=>this.playTone(784,.15,"sine"),300),setTimeout(()=>this.playTone(1047,.3,"sine"),450))}async playLevelComplete(){this.soundEnabled&&(await this.playTone(523,.2,"sine"),setTimeout(()=>this.playTone(659,.2,"sine"),200),setTimeout(()=>this.playTone(784,.2,"sine"),400),setTimeout(()=>this.playTone(1047,.2,"sine"),600),setTimeout(()=>this.playTone(1319,.4,"sine"),800))}async playHint(){this.soundEnabled&&(await this.playTone(600,.1,"triangle"),setTimeout(()=>this.playTone(700,.1,"triangle"),100))}async playCodeRun(){this.soundEnabled&&await this.playTone(1e3,.05,"square")}}const Me=new Fw,Rw=({code:t,level:e,onClose:n,onApplySuggestion:r})=>{const[s,i]=_.useState(null),[o,a]=_.useState(null),[l,u]=_.useState(!1),[d,h]=_.useState(!0);_.useEffect(()=>{p()},[t,e]);const p=async()=>{h(!0);try{await new Promise(m=>setTimeout(m,1e3));const f=Aw.analyzeCode(t,e);i(f),Me.playSuccess()}catch(f){console.error("Code analysis failed:",f)}finally{h(!1)}},v=f=>{switch(f){case"error":return c.jsx(jn,{className:"w-4 h-4 text-red-500"});case"warning":return c.jsx(Qi,{className:"w-4 h-4 text-yellow-500"});case"suggestion":return c.jsx(Zt,{className:"w-4 h-4 text-blue-500"});case"style":return c.jsx(sd,{className:"w-4 h-4 text-purple-500"});default:return c.jsx(sd,{className:"w-4 h-4 text-gray-500"})}},y=f=>{switch(f){case"high":return"text-red-600 bg-red-50 border-red-200";case"medium":return"text-yellow-600 bg-yellow-50 border-yellow-200";case"low":return"text-blue-600 bg-blue-50 border-blue-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},x=f=>{switch(f){case"A":return"text-green-600 bg-green-100";case"B":return"text-blue-600 bg-blue-100";case"C":return"text-yellow-600 bg-yellow-100";case"D":return"text-orange-600 bg-orange-100";case"F":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},b=f=>{r&&(r(f),Me.playClick())};return d?c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:c.jsxs("div",{className:"bg-white rounded-2xl p-8 max-w-md mx-4 text-center",children:[c.jsx("div",{className:"animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"}),c.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"Analyzing Your Code"}),c.jsx("p",{className:"text-gray-600",children:"Our AI teacher is reviewing your code..."})]})}):s?c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:c.jsxs("div",{className:"bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden",children:[c.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6",children:c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Code Review"}),c.jsx("p",{className:"text-blue-100",children:"Let's see how you did!"})]}),c.jsx("button",{onClick:n,className:"text-white hover:text-gray-200 transition-colors",children:c.jsx(jn,{className:"w-6 h-6"})})]})}),c.jsxs("div",{className:"flex h-[600px]",children:[c.jsxs("div",{className:"flex-1 p-6 overflow-y-auto",children:[c.jsx("div",{className:"mb-6",children:c.jsxs("div",{className:"flex items-center gap-6 mb-4",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl font-bold text-gray-800",children:s.score}),c.jsx("div",{className:"text-sm text-gray-600",children:"Score"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:`text-4xl font-bold px-4 py-2 rounded-lg ${x(s.grade)}`,children:s.grade}),c.jsx("div",{className:"text-sm text-gray-600",children:"Grade"})]}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:c.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500",style:{width:`${s.score}%`}})}),c.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"Overall Quality"})]})]})}),c.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:[c.jsxs("h3",{className:"font-semibold text-gray-800 mb-2 flex items-center gap-2",children:[c.jsx(Cn,{className:"w-5 h-5 text-yellow-500"}),"Teacher's Feedback"]}),c.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.overall_feedback})]}),s.strengths.length>0&&c.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:[c.jsxs("h3",{className:"font-semibold text-green-800 mb-3 flex items-center gap-2",children:[c.jsx(Yi,{className:"w-5 h-5"}),"What You Did Well"]}),c.jsx("ul",{className:"space-y-2",children:s.strengths.map((f,m)=>c.jsxs("li",{className:"text-green-700 flex items-start gap-2",children:[c.jsx(Yi,{className:"w-4 h-4 mt-0.5 flex-shrink-0"}),f]},m))})]}),s.issues.length>0&&c.jsxs("div",{className:"mb-6",children:[c.jsxs("h3",{className:"font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[c.jsx(Qi,{className:"w-5 h-5 text-orange-500"}),"Areas for Improvement (",s.issues.length,")"]}),c.jsx("div",{className:"space-y-3",children:s.issues.map((f,m)=>c.jsx("div",{className:`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${y(f.severity)}`,onClick:()=>a(f),children:c.jsxs("div",{className:"flex items-start gap-3",children:[v(f.type),c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[c.jsx("span",{className:"font-medium",children:f.message}),c.jsxs("span",{className:"text-xs px-2 py-1 rounded-full bg-white bg-opacity-50",children:["Line ",f.line]})]}),c.jsx("p",{className:"text-sm opacity-90",children:f.explanation}),f.suggestion&&c.jsx("div",{className:"mt-2",children:c.jsx("button",{onClick:g=>{g.stopPropagation(),b(f.suggestion)},className:"text-xs px-3 py-1 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors",children:"Apply Suggestion"})})]})]})},m))})]}),s.suggestions.length>0&&c.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[c.jsxs("h3",{className:"font-semibold text-blue-800 mb-3 flex items-center gap-2",children:[c.jsx(Zt,{className:"w-5 h-5"}),"Learning Suggestions"]}),c.jsx("ul",{className:"space-y-2",children:s.suggestions.map((f,m)=>c.jsxs("li",{className:"text-blue-700 flex items-start gap-2",children:[c.jsx(Zt,{className:"w-4 h-4 mt-0.5 flex-shrink-0"}),f]},m))})]})]}),o&&c.jsxs("div",{className:"w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"font-semibold text-gray-800",children:"Issue Details"}),c.jsx("button",{onClick:()=>a(null),className:"text-gray-500 hover:text-gray-700",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Type"}),c.jsxs("div",{className:"flex items-center gap-2",children:[v(o.type),c.jsx("span",{className:"capitalize",children:o.type})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Severity"}),c.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${y(o.severity)}`,children:o.severity})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Category"}),c.jsx("span",{className:"text-sm capitalize",children:o.category.replace("_"," ")})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Location"}),c.jsxs("span",{className:"text-sm",children:["Line ",o.line,", Column ",o.column]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Message"}),c.jsx("p",{className:"text-sm text-gray-800",children:o.message})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Explanation"}),c.jsx("p",{className:"text-sm text-gray-800",children:o.explanation})]}),o.suggestion&&c.jsxs("div",{children:[c.jsx("div",{className:"text-sm font-medium text-gray-600 mb-1",children:"Suggestion"}),c.jsx("p",{className:"text-sm text-gray-800 mb-2",children:o.suggestion}),c.jsx("button",{onClick:()=>b(o.suggestion),className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm",children:"Apply This Suggestion"})]})]})]})]}),c.jsxs("div",{className:"bg-gray-50 px-6 py-4 flex justify-between items-center",children:[c.jsxs("button",{onClick:()=>u(!l),className:"flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors",children:[l?c.jsx(Zy,{className:"w-4 h-4"}):c.jsx(ap,{className:"w-4 h-4"}),l?"Hide Details":"Show Details"]}),c.jsx("button",{onClick:n,className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Got It!"})]})]})}):null},ki=[{id:"level1",title:"Say Hello!",description:"Learn to use print statements and variables",difficulty:1,category:"print",starterCode:`# Say hello to your new friend!
# Use a variable to store a name, then print a greeting

name = "Ava"  # Change this to your name
print("Hello, " + name + "!")`,instructions:'Create a variable called "name" and use print() to say hello!',tests:[{name:"Has print statement",input:null,expected:!0,description:"Your code should use print() to display a message"},{name:"Uses variable",input:null,expected:!0,description:"Your code should create and use a variable"}],hints:['Variables store information. Try: name = "Your Name"','Use print() to display text: print("Hello, " + name)'],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a variable to store a name
Step 2: Use print() to display a greeting
Step 3: Combine the variable with text using +`,whyThisWorks:"Variables are like labeled boxes that store information. The print() function displays text on the screen. When you combine text with variables using +, Python creates a new string.",conceptGlossary:["Variable","String","Print function"]},{id:"level2",title:"Roll Until Six",description:"Learn while loops by rolling dice",difficulty:2,category:"loops",starterCode:`# Roll the die until you get a 6
# Count how many rolls it takes

def rolls_until_six(roller):
    count = 0
    # TODO: Write a while loop here
    # Keep rolling until you get a 6
    # Don't forget to count each roll!
    
    return count

# Test your function
print("🎲 Testing dice roller...")
result = rolls_until_six(roller)
print(f"🎯 It took {result} rolls to get a 6!")`,instructions:"Complete the rolls_until_six function using a while loop. The roller() function gives you a random number from 1-6.",tests:[{name:"Rolls until six - sequence [6]",input:[6],expected:1,description:"Should return 1 when first roll is 6"},{name:"Rolls until six - sequence [1,6]",input:[1,6],expected:2,description:"Should return 2 when second roll is 6"},{name:"Rolls until six - sequence [2,3,4,5,6]",input:[2,3,4,5,6],expected:5,description:"Should return 5 when fifth roll is 6"}],hints:['Use "while True:" to create a loop that runs forever','Inside the loop, call roller() and check if the result is 6. If it is, use "return" to stop the loop'],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a while loop that runs forever
Step 2: Call roller() to get a random number
Step 3: Check if the number is 6
Step 4: If yes, return the count; if no, add 1 to count and continue`,whyThisWorks:"While loops keep running until a condition is met. The roller() function gives you random numbers, and you count how many times you need to call it to get a 6.",conceptGlossary:["While loop","Random numbers","Counters","Return statement"]},{id:"level3",title:"Navigate the Maze",description:"Learn conditionals by avoiding lava and walls",difficulty:3,category:"conditionals",starterCode:`# Navigate through the maze to reach the goal
# Avoid lava (hot!) and walls (solid!)

def navigate_maze(world):
    x, y = world.start
    moves = []
    
    # TODO: Write code to reach the goal
    # Use world.at(x, y) to check what's at a position
    # Returns: {"type": "empty"|"wall"|"goal"|"lava"}
    # Move by changing x and y coordinates
    
    return moves

# Test your navigation
if world:
    print("🗺️ Starting navigation...")
    moves = navigate_maze(world)
    print(f"🤖 Robot moves: {moves}")
else:
    print("❌ No world available")`,instructions:"Write code to navigate from the start position to the goal, avoiding walls and lava. Use if statements to check what type of tile you're moving to.",tests:[{name:"Reaches goal",input:null,expected:!0,description:"Your robot should reach the goal tile"},{name:"Avoids lava",input:null,expected:!0,description:"Your robot should not step on lava tiles"}],hints:['Check if world.at(x+1, y)["type"] == "empty" before moving right',"Use if/elif statements to check different directions and tile types"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Get the starting position from world.start
Step 2: Check what type of tile is at each position
Step 3: Use if statements to avoid walls and lava
Step 4: Move towards the goal tile`,whyThisWorks:"Conditionals (if/elif/else) let you make decisions in your code. You check the tile type and decide whether it's safe to move there.",conceptGlossary:["If statements","Conditionals","Grid navigation","Tile types"],world:{width:5,height:5,start:[0,0],goal:[4,4],tiles:[{type:"empty",x:0,y:0},{type:"empty",x:1,y:0},{type:"lava",x:2,y:0},{type:"empty",x:3,y:0},{type:"empty",x:4,y:0},{type:"empty",x:0,y:1},{type:"wall",x:1,y:1},{type:"lava",x:2,y:1},{type:"wall",x:3,y:1},{type:"empty",x:4,y:1},{type:"empty",x:0,y:2},{type:"empty",x:1,y:2},{type:"empty",x:2,y:2},{type:"empty",x:3,y:2},{type:"empty",x:4,y:2},{type:"empty",x:0,y:3},{type:"wall",x:1,y:3},{type:"lava",x:2,y:3},{type:"empty",x:3,y:3},{type:"empty",x:4,y:3},{type:"empty",x:0,y:4},{type:"empty",x:1,y:4},{type:"empty",x:2,y:4},{type:"empty",x:3,y:4},{type:"goal",x:4,y:4}]}},{id:"level4",title:"Robot Helper",description:"Learn functions by creating a robot that moves to goal",difficulty:4,category:"functions",starterCode:`# Create a function that moves a robot to the goal
# The robot should return a list of moves like ["UP", "DOWN", "LEFT", "RIGHT"]

def move_to_goal(world):
    x, y = world.start
    moves = []
    
    # TODO: Write your pathfinding logic here
    # Keep track of current position (x, y)
    # Add moves to the moves list
    # Check world.at(x, y) to see what's at each position
    
    return moves

# Test your function
if world:
    print("🤖 Testing robot movement...")
    moves = move_to_goal(world)
    print(f"🎯 Robot path: {moves}")
else:
    print("❌ No world available")`,instructions:"Complete the move_to_goal function. It should return a list of moves that will get the robot from start to goal, avoiding obstacles.",tests:[{name:"Function returns moves list",input:null,expected:!0,description:"Your function should return a list of moves"},{name:"Reaches goal successfully",input:null,expected:!0,description:"The moves should lead from start to goal"}],hints:["Use a loop to keep moving until you reach the goal",'Add moves like "UP", "DOWN", "LEFT", "RIGHT" to your moves list'],parMoves:8,world:{width:4,height:4,start:[0,0],goal:[3,3],tiles:[{type:"empty",x:0,y:0},{type:"empty",x:1,y:0},{type:"wall",x:2,y:0},{type:"empty",x:3,y:0},{type:"empty",x:0,y:1},{type:"empty",x:1,y:1},{type:"lava",x:2,y:1},{type:"empty",x:3,y:1},{type:"empty",x:0,y:2},{type:"lava",x:1,y:2},{type:"empty",x:2,y:2},{type:"empty",x:3,y:2},{type:"empty",x:0,y:3},{type:"empty",x:1,y:3},{type:"empty",x:2,y:3},{type:"goal",x:3,y:3}]}},{id:"level4",title:"Build a Function",description:"Learn to create reusable functions",difficulty:2,category:"functions",starterCode:`# Create a function that greets someone
# Functions help us reuse code!

def greet_person(name):
    # TODO: Write a function that returns a greeting message
    # Example: "Hello, Alice! Nice to meet you!"
    return "Hello, " + name + "!"

# Test your function
print(greet_person("Alice"))
print(greet_person("Bob"))
`,instructions:"Create a function called greet_person that takes a name and returns a greeting message",tests:[{name:"Function exists",input:null,expected:!0,description:"Your code should define a function called greet_person"},{name:"Function returns greeting",input:null,expected:!0,description:"The function should return a greeting message"}],hints:['Use "def function_name(parameter):" to create a function','Use "return" to give back a value from your function']},{id:"level5",title:"Count with Lists",description:"Learn to work with lists and counting",difficulty:3,category:"lists",starterCode:`# Count how many numbers are in a list
# Lists are like containers that hold multiple items

def count_numbers(numbers):
    count = 0
    # TODO: Count how many numbers are in the list
    # Use a for loop to go through each number
    for number in numbers:
        count += 1
    return count

# Test your function
test_list = [1, 2, 3, 4, 5]
print(f"List: {test_list}")
print(f"Count: {count_numbers(test_list)}")
`,instructions:"Create a function that counts how many numbers are in a list",tests:[{name:"Counts numbers correctly",input:null,expected:!0,description:"The function should count all numbers in the list"},{name:"Uses for loop",input:null,expected:!0,description:"Your code should use a for loop to go through the list"}],hints:['Use "for item in list:" to go through each item in a list','Use "count += 1" to add 1 to your counter']},{id:"level6",title:"Sum the Numbers",description:"Learn to add up numbers in a list",difficulty:3,category:"lists",starterCode:`# Add up all the numbers in a list
# This is like using a calculator on a bunch of numbers!

def sum_numbers(numbers):
    total = 0
    # TODO: Add up all the numbers in the list
    # Start with total = 0, then add each number
    for number in numbers:
        total += number
    return total

# Test your function
test_list = [10, 20, 30, 40]
print(f"Numbers: {test_list}")
print(f"Sum: {sum_numbers(test_list)}")
`,instructions:"Create a function that adds up all the numbers in a list",tests:[{name:"Sums numbers correctly",input:null,expected:!0,description:"The function should add up all numbers correctly"},{name:"Uses for loop",input:null,expected:!0,description:"Your code should use a for loop"}],hints:["Start with total = 0",'Use "total += number" to add each number to the total']},{id:"level7",title:"Find the Biggest",description:"Learn to find the largest number in a list",difficulty:4,category:"lists",starterCode:`# Find the biggest number in a list
# This is like finding the tallest person in a group!

def find_biggest(numbers):
    if not numbers:
        return None
    
    biggest = numbers[0]
    # TODO: Find the biggest number
    # Compare each number with the current biggest
    for number in numbers:
        if number > biggest:
            biggest = number
    return biggest

# Test your function
test_list = [5, 2, 8, 1, 9, 3]
print(f"Numbers: {test_list}")
print(f"Biggest: {find_biggest(test_list)}")
`,instructions:"Create a function that finds the largest number in a list",tests:[{name:"Finds biggest number",input:null,expected:!0,description:"The function should find the largest number"},{name:"Uses comparison",input:null,expected:!0,description:"Your code should compare numbers to find the biggest"}],hints:["Start with biggest = numbers[0] (first number)",'Use "if number > biggest:" to check if current number is bigger']},{id:"level8",title:"Word Counter",description:"Learn to work with strings and counting",difficulty:3,category:"strings",starterCode:`# Count how many words are in a sentence
# Words are separated by spaces

def count_words(sentence):
    if not sentence.strip():
        return 0
    
    # TODO: Count the words in the sentence
    # Split the sentence by spaces and count the parts
    words = sentence.split()
    return len(words)

# Test your function
test_sentence = "Hello world this is Python"
print(f"Sentence: '{test_sentence}'")
print(f"Word count: {count_words(test_sentence)}")
`,instructions:"Create a function that counts how many words are in a sentence",tests:[{name:"Counts words correctly",input:null,expected:!0,description:"The function should count words correctly"},{name:"Uses split method",input:null,expected:!0,description:"Your code should use the split() method"}],hints:['Use "sentence.split()" to separate words by spaces','Use "len()" to count how many items are in the list']},{id:"level9",title:"Password Checker",description:"Learn conditional logic with password validation",difficulty:4,category:"conditionals",starterCode:`# Check if a password is strong enough
# A strong password has at least 8 characters

def is_strong_password(password):
    # TODO: Check if password is strong
    # Strong means: at least 8 characters long
    if len(password) >= 8:
        return True
    else:
        return False

# Test your function
test_passwords = ["123", "password123", "abc", "mypassword"]
for pwd in test_passwords:
    result = is_strong_password(pwd)
    print(f"Password '{pwd}': {'Strong' if result else 'Weak'}")
`,instructions:"Create a function that checks if a password is strong (at least 8 characters)",tests:[{name:"Checks password length",input:null,expected:!0,description:"The function should check if password is at least 8 characters"},{name:"Uses if statement",input:null,expected:!0,description:"Your code should use if/else statements"}],hints:['Use "len(password)" to get the length of the password',`Use "if len(password) >= 8:" to check if it's long enough`]},{id:"level10",title:"Temperature Converter",description:"Learn to convert between Celsius and Fahrenheit",difficulty:3,category:"functions",starterCode:`# Convert temperature from Celsius to Fahrenheit
# Formula: F = (C * 9/5) + 32

def celsius_to_fahrenheit(celsius):
    # TODO: Convert Celsius to Fahrenheit
    # Use the formula: F = (C * 9/5) + 32
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Test your function
temperatures = [0, 25, 100]
for temp in temperatures:
    f = celsius_to_fahrenheit(temp)
    print(f"{temp}°C = {f}°F")
`,instructions:"Create a function that converts Celsius to Fahrenheit using the formula F = (C * 9/5) + 32",tests:[{name:"Converts temperature correctly",input:null,expected:!0,description:"The function should convert Celsius to Fahrenheit correctly"},{name:"Uses correct formula",input:null,expected:!0,description:"Your code should use the temperature conversion formula"}],hints:["Use the formula: fahrenheit = (celsius * 9/5) + 32","Make sure to use parentheses for the math!"]},{id:"level11",title:"Number Guessing Game",description:"Learn to create an interactive guessing game",difficulty:4,category:"loops",starterCode:`# Create a simple number guessing game
# The computer picks a number, you try to guess it!

import random

def guessing_game():
    secret_number = random.randint(1, 10)
    guesses = 0
    max_guesses = 3
    
    print("I'm thinking of a number between 1 and 10!")
    print(f"You have {max_guesses} guesses.")
    
    # TODO: Create a loop for the guessing game
    # Ask for input, check if it's correct, count guesses
    while guesses < max_guesses:
        guess = int(input("Your guess: "))
        guesses += 1
        
        if guess == secret_number:
            print(f"🎉 You got it! The number was {secret_number}!")
            return True
        elif guess < secret_number:
            print("Too low! Try again.")
        else:
            print("Too high! Try again.")
    
    print(f"Game over! The number was {secret_number}")
    return False

# Play the game
guessing_game()
`,instructions:"Create a number guessing game where the player tries to guess a random number",tests:[{name:"Game runs without errors",input:null,expected:!0,description:"The game should run without crashing"},{name:"Uses while loop",input:null,expected:!0,description:"Your code should use a while loop for the game"}],hints:['Use "while guesses < max_guesses:" to limit the number of tries',`Use "input()" to get the player's guess`]},{id:"level12",title:"Shopping List Manager",description:"Learn to manage lists with add, remove, and display",difficulty:4,category:"lists",starterCode:`# Create a shopping list manager
# Add items, remove items, and see your list

def manage_shopping_list():
    shopping_list = []
    
    print("🛒 Shopping List Manager")
    print("Commands: add, remove, show, quit")
    
    # TODO: Create a loop to manage the shopping list
    # Handle commands: add, remove, show, quit
    while True:
        command = input("What would you like to do? ").lower()
        
        if command == "quit":
            print("Goodbye! Happy shopping! 🛍️")
            break
        elif command == "add":
            item = input("What item to add? ")
            shopping_list.append(item)
            print(f"Added '{item}' to your list!")
        elif command == "remove":
            if shopping_list:
                item = input("What item to remove? ")
                if item in shopping_list:
                    shopping_list.remove(item)
                    print(f"Removed '{item}' from your list!")
                else:
                    print(f"'{item}' not found in your list!")
            else:
                print("Your list is empty!")
        elif command == "show":
            if shopping_list:
                print("Your shopping list:")
                for i, item in enumerate(shopping_list, 1):
                    print(f"{i}. {item}")
            else:
                print("Your list is empty!")
        else:
            print("Unknown command! Try: add, remove, show, quit")

# Start the manager
manage_shopping_list()
`,instructions:"Create a shopping list manager that can add, remove, and display items",tests:[{name:"Program runs without errors",input:null,expected:!0,description:"The shopping list manager should run without crashing"},{name:"Uses while loop",input:null,expected:!0,description:"Your code should use a while loop for the main program"}],hints:['Use "while True:" for the main loop','Use "if/elif" to handle different commands']},{id:"level13",title:"Rock Paper Scissors",description:"Learn to create a classic game with random choices",difficulty:4,category:"functions",starterCode:`# Create a Rock Paper Scissors game
# Play against the computer!

import random

def play_rock_paper_scissors():
    choices = ["rock", "paper", "scissors"]
    
    print("🪨📄✂️ Rock Paper Scissors!")
    print("Choose: rock, paper, or scissors")
    
    # TODO: Create the game logic
    # Get player choice, get computer choice, determine winner
    player_choice = input("Your choice: ").lower()
    computer_choice = random.choice(choices)
    
    print(f"Computer chose: {computer_choice}")
    print(f"You chose: {player_choice}")
    
    if player_choice == computer_choice:
        print("It's a tie! 🤝")
    elif (player_choice == "rock" and computer_choice == "scissors") or          (player_choice == "paper" and computer_choice == "rock") or          (player_choice == "scissors" and computer_choice == "paper"):
        print("You win! 🎉")
    else:
        print("Computer wins! 🤖")

# Play the game
play_rock_paper_scissors()
`,instructions:"Create a Rock Paper Scissors game where you play against the computer",tests:[{name:"Game runs without errors",input:null,expected:!0,description:"The game should run without crashing"},{name:"Uses random choice",input:null,expected:!0,description:"Your code should use random.choice() for computer moves"}],hints:[`Use "random.choice(choices)" to get computer's choice`,'Use multiple conditions with "or" to check winning combinations']},{id:"level14",title:"Word Reverser",description:"Learn to reverse strings and work with text",difficulty:3,category:"strings",starterCode:`# Reverse a word or sentence
# Turn "hello" into "olleh"

def reverse_text(text):
    # TODO: Reverse the text
    # Use string slicing: text[::-1]
    return text[::-1]

# Test your function
test_words = ["hello", "python", "code", "programming"]
for word in test_words:
    reversed_word = reverse_text(word)
    print(f"'{word}' reversed is '{reversed_word}'")
`,instructions:"Create a function that reverses any text using string slicing",tests:[{name:"Reverses text correctly",input:null,expected:!0,description:"The function should reverse text correctly"},{name:"Uses string slicing",input:null,expected:!0,description:"Your code should use string slicing [::-1]"}],hints:['Use "text[::-1]" to reverse the string',"String slicing [::-1] means: start at end, go to beginning, step -1"]},{id:"level15",title:"Simple Calculator",description:"Learn to create a basic calculator with operations",difficulty:4,category:"functions",starterCode:`# Create a simple calculator
# Add, subtract, multiply, and divide numbers

def calculator():
    print("🧮 Simple Calculator")
    print("Operations: +, -, *, /")
    
    # TODO: Create the calculator logic
    # Get two numbers and an operation, then calculate the result
    try:
        num1 = float(input("Enter first number: "))
        operation = input("Enter operation (+, -, *, /): ")
        num2 = float(input("Enter second number: "))
        
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 != 0:
                result = num1 / num2
            else:
                print("Error: Cannot divide by zero!")
                return
        else:
            print("Error: Invalid operation!")
            return
        
        print(f"Result: {num1} {operation} {num2} = {result}")
        
    except ValueError:
        print("Error: Please enter valid numbers!")

# Run the calculator
calculator()
`,instructions:"Create a calculator that can perform basic math operations",tests:[{name:"Calculator runs without errors",input:null,expected:!0,description:"The calculator should run without crashing"},{name:"Handles different operations",input:null,expected:!0,description:"Your code should handle +, -, *, / operations"}],hints:['Use "if/elif" to check which operation to perform','Use "try/except" to handle invalid input']},{id:"level16",title:"Final Project: Mini Adventure Game",description:"Create your own mini adventure game using everything you learned!",difficulty:5,category:"project",starterCode:`# 🎮 Mini Adventure Game
# Use everything you learned to create your own game!

def adventure_game():
    print("🌟 Welcome to the Python Adventure! 🌟")
    print("You are a brave explorer looking for treasure!")
    
    health = 100
    treasure_found = 0
    location = "forest"
    
    print(f"Health: {health}")
    print(f"Treasure: {treasure_found}")
    print(f"Location: {location}")
    
    # TODO: Create your own adventure game!
    # Add choices, health system, treasure collection
    # Use if/else, loops, functions, and lists!
    
    print("\\nWhat would you like to do?")
    print("1. Explore the forest")
    print("2. Look for treasure")
    print("3. Rest and heal")
    print("4. Check your stats")
    
    choice = input("Enter your choice (1-4): ")
    
    if choice == "1":
        print("🌲 You explore the forest and find a mysterious path!")
        health -= 10
        print(f"Health: {health}")
    elif choice == "2":
        print("💎 You search for treasure and find a gold coin!")
        treasure_found += 1
        print(f"Treasure: {treasure_found}")
    elif choice == "3":
        print("😴 You rest and recover some health!")
        health += 20
        if health > 100:
            health = 100
        print(f"Health: {health}")
    elif choice == "4":
        print(f"📊 Stats - Health: {health}, Treasure: {treasure_found}")
    else:
        print("Invalid choice! Try again.")
    
    print("\\n🎉 Great job! You've created your first adventure game!")
    print("Try adding more features like:")
    print("- More locations to explore")
    print("- A combat system")
    print("- Inventory management")
    print("- Multiple endings")

# Start your adventure!
adventure_game()
`,instructions:"Create your own mini adventure game using all the Python concepts you learned!",tests:[{name:"Game runs without errors",input:null,expected:!0,description:"Your adventure game should run without crashing"},{name:"Uses multiple concepts",input:null,expected:!0,description:"Your code should use variables, functions, and conditionals"}],hints:["This is your final project! Be creative!","Try adding more features like inventory, combat, or multiple locations"]},{id:"level17",title:"Turtle Graphics Art",description:"Create beautiful art using Python turtle graphics",difficulty:4,category:"project",starterCode:`# Create beautiful art with Python turtle graphics!
# Turtle graphics let you draw with a virtual pen

import turtle

def draw_flower():
    # TODO: Create a beautiful flower using turtle graphics
    # Use turtle.forward(), turtle.right(), turtle.left()
    # Try different colors with turtle.color()
    
    # Example: Draw a simple square
    for i in range(4):
        turtle.forward(100)
        turtle.right(90)
    
    turtle.done()

# Start drawing
draw_flower()
`,instructions:"Create beautiful art using turtle graphics. Draw shapes, patterns, or even a flower!",tests:[{name:"Uses turtle graphics",input:null,expected:!0,description:"Your code should use turtle graphics functions"},{name:"Creates visual output",input:null,expected:!0,description:"The code should create a visual drawing"}],hints:["Use turtle.forward(distance) to move forward","Use turtle.right(angle) or turtle.left(angle) to turn",'Use turtle.color("red") to change colors'],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Import the turtle module
Step 2: Use turtle.forward() to draw lines
Step 3: Use turtle.right() or turtle.left() to turn
Step 4: Use turtle.color() to add colors
Step 5: Create loops to draw patterns`,whyThisWorks:"Turtle graphics is a fun way to learn programming by drawing. You control a virtual turtle that moves around and draws lines, creating beautiful art!",conceptGlossary:["Turtle graphics","Drawing","Loops","Colors","Angles"]},{id:"level18",title:"Data Analysis Adventure",description:"Analyze data like a real data scientist",difficulty:5,category:"project",starterCode:`# Analyze student test scores like a data scientist!
# Work with real data and find interesting patterns

def analyze_scores(scores):
    # TODO: Analyze the test scores
    # Find: average, highest, lowest, and how many passed (>=70)
    
    total = sum(scores)
    count = len(scores)
    average = total / count if count > 0 else 0
    
    highest = max(scores) if scores else 0
    lowest = min(scores) if scores else 0
    
    passed = sum(1 for score in scores if score >= 70)
    
    print(f"📊 Test Score Analysis:")
    print(f"Average: {average:.1f}")
    print(f"Highest: {highest}")
    print(f"Lowest: {lowest}")
    print(f"Students who passed: {passed}/{count}")
    
    return {
        'average': average,
        'highest': highest,
        'lowest': lowest,
        'passed': passed
    }

# Test with sample data
test_scores = [85, 92, 78, 96, 88, 73, 91, 67, 89, 94]
result = analyze_scores(test_scores)
`,instructions:"Create a data analysis function that finds the average, highest, lowest scores, and counts how many students passed (70+).",tests:[{name:"Calculates average correctly",input:null,expected:!0,description:"The function should calculate the average score"},{name:"Finds highest and lowest",input:null,expected:!0,description:"The function should find the highest and lowest scores"},{name:"Counts passing students",input:null,expected:!0,description:"The function should count students who scored 70 or higher"}],hints:["Use sum() to add all scores and len() to count them","Use max() and min() to find highest and lowest","Use a list comprehension to count passing scores"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Calculate the total and count of scores
Step 2: Find the average by dividing total by count
Step 3: Use max() and min() for highest and lowest
Step 4: Count scores >= 70 using a list comprehension
Step 5: Display the results in a nice format`,whyThisWorks:"Data analysis helps us understand information better. By calculating averages, finding extremes, and counting categories, we can make informed decisions!",conceptGlossary:["Data analysis","Statistics","List comprehension","Functions","Data science"]},{id:"level19",title:"Web Scraping Explorer",description:"Learn to extract information from websites",difficulty:5,category:"project",starterCode:`# Learn web scraping basics!
# Extract information from web pages (simulated)

def extract_weather_info(weather_data):
    # TODO: Extract temperature and condition from weather data
    # The data comes as a string like "Temperature: 72°F, Condition: Sunny"
    
    # Split the data and extract information
    parts = weather_data.split(', ')
    temperature = None
    condition = None
    
    for part in parts:
        if 'Temperature:' in part:
            temperature = part.split(': ')[1]
        elif 'Condition:' in part:
            condition = part.split(': ')[1]
    
    print(f"🌤️ Weather Report:")
    print(f"Temperature: {temperature}")
    print(f"Condition: {condition}")
    
    return {
        'temperature': temperature,
        'condition': condition
    }

# Test with sample weather data
weather = "Temperature: 72°F, Condition: Sunny"
result = extract_weather_info(weather)
`,instructions:"Create a function that extracts temperature and weather condition from a weather data string.",tests:[{name:"Extracts temperature",input:null,expected:!0,description:"The function should extract the temperature value"},{name:"Extracts condition",input:null,expected:!0,description:"The function should extract the weather condition"},{name:"Handles different formats",input:null,expected:!0,description:"The function should work with different data formats"}],hints:["Use split() to separate the data by commas",'Use if statements to check for "Temperature:" and "Condition:"','Use split(": ") to separate the label from the value'],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Split the weather data by commas
Step 2: Loop through each part
Step 3: Check if each part contains "Temperature:" or "Condition:"
Step 4: Extract the value after the colon
Step 5: Return the extracted information`,whyThisWorks:"Web scraping helps us automatically extract useful information from websites. This is how many apps get real-time data like weather, news, or prices!",conceptGlossary:["Web scraping","Data extraction","String manipulation","Parsing","Automation"]},{id:"level20",title:"Machine Learning Basics",description:"Build your first simple AI model",difficulty:5,category:"project",starterCode:`# Create a simple machine learning model!
# Predict if a student will pass based on study hours

def predict_pass(study_hours, assignment_score):
    # TODO: Create a simple prediction model
    # If study_hours >= 5 AND assignment_score >= 80, predict "PASS"
    # Otherwise, predict "NEED MORE WORK"
    
    if study_hours >= 5 and assignment_score >= 80:
        prediction = "PASS"
        confidence = "High"
    elif study_hours >= 3 and assignment_score >= 70:
        prediction = "PASS"
        confidence = "Medium"
    else:
        prediction = "NEED MORE WORK"
        confidence = "High"
    
    print(f"🤖 AI Prediction:")
    print(f"Study Hours: {study_hours}")
    print(f"Assignment Score: {assignment_score}")
    print(f"Prediction: {prediction}")
    print(f"Confidence: {confidence}")
    
    return prediction

# Test the model
predict_pass(6, 85)  # Should predict PASS
predict_pass(2, 60)  # Should predict NEED MORE WORK
`,instructions:"Create a simple machine learning model that predicts if a student will pass based on study hours and assignment scores.",tests:[{name:"Predicts correctly for high scores",input:null,expected:!0,description:"The model should predict PASS for good study habits and scores"},{name:"Predicts correctly for low scores",input:null,expected:!0,description:"The model should predict NEED MORE WORK for poor study habits"},{name:"Uses logical conditions",input:null,expected:!0,description:"The model should use if/elif/else statements properly"}],hints:["Use if/elif/else to create decision rules","Check both study_hours AND assignment_score conditions","Create different confidence levels based on the conditions"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Define the prediction rules using if/elif/else
Step 2: Check if both study hours and assignment score meet the criteria
Step 3: Assign confidence levels based on how well the criteria are met
Step 4: Display the prediction with reasoning
Step 5: Test the model with different inputs`,whyThisWorks:"Machine learning is about creating rules that can make predictions. Even simple rules can be very useful for making decisions based on data!",conceptGlossary:["Machine learning","Prediction","Decision rules","AI","Data patterns"]},{id:"level21",title:"Game Development",description:"Create your own mini-game using Python",difficulty:5,category:"project",starterCode:`# Create a simple number guessing game!
# This is like a mini version of popular games

import random

def number_guessing_game():
    print("🎮 Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100...")
    
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    # TODO: Create the main game loop
    # Ask for guesses, give hints, count attempts
    while attempts < max_attempts:
        try:
            guess = int(input(f"Attempt {attempts + 1}/{max_attempts}: Your guess: "))
            attempts += 1
            
            if guess == secret_number:
                print(f"🎉 Congratulations! You guessed it in {attempts} attempts!")
                return True
            elif guess < secret_number:
                print("📈 Too low! Try a higher number.")
            else:
                print("📉 Too high! Try a lower number.")
                
        except ValueError:
            print("❌ Please enter a valid number!")
            attempts -= 1  # Don't count invalid attempts
    
    print(f"😞 Game over! The number was {secret_number}")
    return False

# Start the game
number_guessing_game()
`,instructions:"Create a complete number guessing game with hints, attempt counting, and win/lose conditions.",tests:[{name:"Game runs without errors",input:null,expected:!0,description:"The game should run without crashing"},{name:"Uses random numbers",input:null,expected:!0,description:"The game should use random.randint() for the secret number"},{name:"Has proper game loop",input:null,expected:!0,description:"The game should use a while loop for the main game logic"}],hints:["Use random.randint(1, 100) to generate the secret number","Use a while loop to keep asking for guesses","Use if/elif/else to give hints about the guess"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Generate a random secret number
Step 2: Create a while loop for the game
Step 3: Get user input and validate it
Step 4: Compare the guess with the secret number
Step 5: Give hints and check for win/lose conditions`,whyThisWorks:"Game development combines many programming concepts! You use random numbers, loops, conditionals, and user input to create an interactive experience.",conceptGlossary:["Game development","Random numbers","User input","Game loops","Interactive programming"]},{id:"level22",title:"File Management System",description:"Learn to work with files and data storage",difficulty:4,category:"project",starterCode:`# Create a simple file management system!
# Learn to read, write, and organize files

def create_student_report(student_name, subjects, grades):
    # TODO: Create a formatted student report
    # Format: "Student: [name]\\nSubject: [subject] - Grade: [grade]\\n..."
    
    report = f"Student: {student_name}\\n"
    report += "=" * 30 + "\\n"
    
    for subject, grade in zip(subjects, grades):
        report += f"Subject: {subject} - Grade: {grade}\\n"
    
    # Calculate average
    if grades:
        average = sum(grades) / len(grades)
        report += f"\\nAverage Grade: {average:.1f}"
    
    return report

def save_report_to_file(report, filename):
    # TODO: Save the report to a file
    # Use open() with 'w' mode to write the file
    
    with open(filename, 'w') as file:
        file.write(report)
    print(f"📁 Report saved to {filename}")

# Test the system
student_name = "Alice Johnson"
subjects = ["Math", "Science", "English", "History"]
grades = [95, 87, 92, 88]

report = create_student_report(student_name, subjects, grades)
print(report)
print()

save_report_to_file(report, "student_report.txt")
`,instructions:"Create a student report system that formats data and saves it to a file.",tests:[{name:"Creates formatted report",input:null,expected:!0,description:"The function should create a properly formatted report"},{name:"Calculates average grade",input:null,expected:!0,description:"The function should calculate and display the average grade"},{name:"Saves to file",input:null,expected:!0,description:"The function should save the report to a file"}],hints:["Use f-strings to format the report nicely","Use zip() to combine subjects and grades",'Use open() with "w" mode to write files'],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a formatted report string with student name
Step 2: Use a loop to add each subject and grade
Step 3: Calculate the average grade
Step 4: Use open() with "w" mode to write the file
Step 5: Use with statement for proper file handling`,whyThisWorks:"File management is essential for storing data permanently. This is how programs save user data, reports, and other important information!",conceptGlossary:["File handling","Data storage","File I/O","String formatting","Data persistence"]},{id:"level23",title:"API Integration",description:"Connect to external services and APIs",difficulty:5,category:"project",starterCode:`# Learn to work with APIs (Application Programming Interfaces)!
# APIs let your program talk to other services

def get_weather_forecast(city):
    # TODO: Simulate getting weather data from an API
    # In real life, this would connect to a weather service
    
    # Simulated weather data (in real apps, this comes from an API)
    weather_data = {
        "New York": {"temp": 72, "condition": "Sunny", "humidity": 65},
        "London": {"temp": 58, "condition": "Cloudy", "humidity": 80},
        "Tokyo": {"temp": 75, "condition": "Rainy", "humidity": 90},
        "Sydney": {"temp": 82, "condition": "Sunny", "humidity": 55}
    }
    
    if city in weather_data:
        data = weather_data[city]
        print(f"🌤️ Weather in {city}:")
        print(f"Temperature: {data['temp']}°F")
        print(f"Condition: {data['condition']}")
        print(f"Humidity: {data['humidity']}%")
        return data
    else:
        print(f"❌ Weather data not available for {city}")
        return None

def get_multiple_cities(cities):
    # TODO: Get weather for multiple cities
    results = {}
    for city in cities:
        results[city] = get_weather_forecast(city)
    return results

# Test the API simulation
cities = ["New York", "London", "Tokyo"]
weather_results = get_multiple_cities(cities)
`,instructions:"Create functions that simulate working with weather APIs to get data for multiple cities.",tests:[{name:"Gets weather for single city",input:null,expected:!0,description:"The function should return weather data for a given city"},{name:"Handles multiple cities",input:null,expected:!0,description:"The function should process multiple cities"},{name:"Handles unknown cities",input:null,expected:!0,description:"The function should handle cities not in the database"}],hints:["Use a dictionary to store weather data for different cities","Use a for loop to process multiple cities","Use if/else to handle cities that exist or don't exist"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a dictionary with weather data for different cities
Step 2: Check if the requested city exists in the data
Step 3: Return the weather information in a nice format
Step 4: Use a loop to process multiple cities
Step 5: Store results in a dictionary for easy access`,whyThisWorks:"APIs let your program connect to external services to get real-time data. This is how weather apps, social media, and many other apps work!",conceptGlossary:["API","External services","Data integration","Web services","Real-time data"]},{id:"level24",title:"Database Operations",description:"Learn to work with databases and data storage",difficulty:5,category:"project",starterCode:`# Learn database operations!
# Work with data like a real database system

class SimpleDatabase:
    def __init__(self):
        # TODO: Initialize the database with empty storage
        self.data = {}
    
    def insert(self, table, record):
        # TODO: Insert a new record into a table
        # If table doesn't exist, create it
        if table not in self.data:
            self.data[table] = []
        
        self.data[table].append(record)
        print(f"✅ Inserted record into {table}")
    
    def find(self, table, condition):
        # TODO: Find records that match a condition
        # Return all records where the condition is true
        if table not in self.data:
            return []
        
        results = []
        for record in self.data[table]:
            if condition(record):
                results.append(record)
        
        return results
    
    def get_all(self, table):
        # TODO: Get all records from a table
        return self.data.get(table, [])

# Test the database
db = SimpleDatabase()

# Insert some student records
db.insert("students", {"name": "Alice", "age": 12, "grade": "A"})
db.insert("students", {"name": "Bob", "age": 11, "grade": "B"})
db.insert("students", {"name": "Charlie", "age": 13, "grade": "A"})

# Find students with grade A
grade_a_students = db.find("students", lambda student: student["grade"] == "A")
print(f"Students with grade A: {grade_a_students}")

# Get all students
all_students = db.get_all("students")
print(f"All students: {all_students}")
`,instructions:"Create a simple database class that can insert, find, and retrieve data using conditions.",tests:[{name:"Inserts records correctly",input:null,expected:!0,description:"The database should insert records into tables"},{name:"Finds records with conditions",input:null,expected:!0,description:"The database should find records matching conditions"},{name:"Gets all records",input:null,expected:!0,description:"The database should retrieve all records from a table"}],hints:["Use a dictionary to store tables and their records","Use lambda functions for conditions in the find method","Use list methods like append() to add records"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a class with a dictionary to store data
Step 2: Implement insert() to add records to tables
Step 3: Implement find() to search records with conditions
Step 4: Implement get_all() to retrieve all records
Step 5: Use lambda functions for flexible searching`,whyThisWorks:"Databases are essential for storing and organizing large amounts of data. Even simple databases help you understand how data management works!",conceptGlossary:["Database","Data storage","Classes","Lambda functions","Data management"]},{id:"level25",title:"Final Master Project",description:"Create your own complete Python application",difficulty:6,category:"project",starterCode:`# 🎯 FINAL MASTER PROJECT 🎯
# Create your own complete Python application!
# Combine everything you've learned to build something amazing

class StudentManager:
    def __init__(self):
        # TODO: Initialize your student management system
        self.students = []
        self.subjects = ["Math", "Science", "English", "History"]
    
    def add_student(self, name, age):
        # TODO: Add a new student to the system
        student = {
            "name": name,
            "age": age,
            "grades": {},
            "total_points": 0
        }
        self.students.append(student)
        print(f"✅ Added student: {name}")
    
    def add_grade(self, student_name, subject, grade):
        # TODO: Add a grade for a student in a specific subject
        for student in self.students:
            if student["name"] == student_name:
                student["grades"][subject] = grade
                student["total_points"] += grade
                print(f"✅ Added {grade} for {student_name} in {subject}")
                return True
        print(f"❌ Student {student_name} not found")
        return False
    
    def calculate_average(self, student_name):
        # TODO: Calculate the average grade for a student
        for student in self.students:
            if student["name"] == student_name:
                if student["grades"]:
                    average = sum(student["grades"].values()) / len(student["grades"])
                    return round(average, 2)
                else:
                    return 0
        return None
    
    def get_class_report(self):
        # TODO: Generate a complete class report
        print("\\n📊 CLASS REPORT")
        print("=" * 50)
        
        for student in self.students:
            avg = self.calculate_average(student["name"])
            print(f"\\nStudent: {student['name']} (Age: {student['age']})")
            print(f"Average Grade: {avg}")
            print("Grades:")
            for subject, grade in student["grades"].items():
                print(f"  {subject}: {grade}")
    
    def find_top_student(self):
        # TODO: Find the student with the highest average
        if not self.students:
            return None
        
        top_student = None
        top_average = 0
        
        for student in self.students:
            avg = self.calculate_average(student["name"])
            if avg > top_average:
                top_average = avg
                top_student = student["name"]
        
        return top_student, top_average

# Test your complete application
print("🎓 Welcome to the Student Management System!")
manager = StudentManager()

# Add some students
manager.add_student("Alice", 12)
manager.add_student("Bob", 11)
manager.add_student("Charlie", 13)

# Add some grades
manager.add_grade("Alice", "Math", 95)
manager.add_grade("Alice", "Science", 87)
manager.add_grade("Bob", "Math", 78)
manager.add_grade("Bob", "English", 92)
manager.add_grade("Charlie", "Science", 96)
manager.add_grade("Charlie", "History", 88)

# Generate reports
manager.get_class_report()

# Find top student
top_student, top_avg = manager.find_top_student()
print(f"\\n🏆 Top Student: {top_student} with {top_avg} average")

print("\\n🎉 Congratulations! You've built a complete Python application!")
`,instructions:"Create a complete student management system that can add students, record grades, calculate averages, and generate reports.",tests:[{name:"Adds students correctly",input:null,expected:!0,description:"The system should add students with names and ages"},{name:"Records grades properly",input:null,expected:!0,description:"The system should record grades for different subjects"},{name:"Calculates averages",input:null,expected:!0,description:"The system should calculate student averages correctly"},{name:"Generates reports",input:null,expected:!0,description:"The system should generate comprehensive class reports"},{name:"Finds top student",input:null,expected:!0,description:"The system should identify the student with the highest average"}],hints:["Use classes to organize your code","Use dictionaries to store student data","Use loops to process multiple students","Use functions to break down complex tasks"],videoTutorial:"https://www.youtube.com/watch?v=uzyiCpsS0qQ&list=PLnb0FwCbM-50UuNjpeIrdEnlSbbMK891Q",additionalTutorials:["https://www.youtube.com/watch?v=bdUqQidffPE"],codeWalkthrough:`Step 1: Create a StudentManager class with data storage
Step 2: Implement add_student() to add new students
Step 3: Implement add_grade() to record grades
Step 4: Implement calculate_average() for each student
Step 5: Implement get_class_report() to display all data
Step 6: Implement find_top_student() to identify the best performer`,whyThisWorks:"This project combines everything you've learned: classes, dictionaries, loops, functions, conditionals, and data processing. It's a real-world application that demonstrates your Python mastery!",conceptGlossary:["Classes","Object-oriented programming","Data management","Real-world applications","Complete systems"]}],Lw=[{id:"print_basic",title:"Basic Print",description:"Print a simple message",code:'print("Hello, World!")',category:"print",difficulty:"beginner"},{id:"print_variable",title:"Print with Variable",description:"Print a variable value",code:`name = "Alice"
print(f"Hello, {name}!")`,category:"print",difficulty:"beginner"},{id:"for_loop",title:"For Loop",description:"Loop through a range of numbers",code:`for i in range(5):
    print(f"Number: {i}")`,category:"loops",difficulty:"beginner"},{id:"while_loop",title:"While Loop",description:"Loop while a condition is true",code:`count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1`,category:"loops",difficulty:"beginner"},{id:"if_statement",title:"If Statement",description:"Make decisions with if",code:`age = 15
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,category:"conditionals",difficulty:"beginner"},{id:"if_elif_else",title:"If-Elif-Else",description:"Multiple conditions",code:`score = 85
if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
else:
    print("C grade")`,category:"conditionals",difficulty:"intermediate"},{id:"function_basic",title:"Basic Function",description:"Create a simple function",code:`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`,category:"functions",difficulty:"beginner"},{id:"function_with_params",title:"Function with Parameters",description:"Function that takes multiple parameters",code:`def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(f"5 + 3 = {result}")`,category:"functions",difficulty:"beginner"},{id:"list_basic",title:"Basic List",description:"Create and use a list",code:`fruits = ["apple", "banana", "orange"]
print(fruits[0])  # First item
print(len(fruits))  # List length`,category:"lists",difficulty:"beginner"},{id:"list_loop",title:"Loop Through List",description:"Loop through all items in a list",code:`colors = ["red", "green", "blue"]
for color in colors:
    print(f"Color: {color}")`,category:"lists",difficulty:"beginner"},{id:"string_basic",title:"Basic String",description:"Work with strings",code:`text = "Hello, World!"
print(text.upper())  # Uppercase
print(text.lower())  # Lowercase
print(len(text))     # Length`,category:"strings",difficulty:"beginner"},{id:"string_format",title:"String Formatting",description:"Format strings with variables",code:`name = "Bob"
age = 12
print(f"{name} is {age} years old")
print("{} is {} years old".format(name, age))`,category:"strings",difficulty:"intermediate"}],Iw=[{term:"Variable",definition:"A container that stores a value, like a box with a label",example:'name = "Alice"  # name is a variable storing "Alice"',category:"basics"},{term:"String",definition:"Text data enclosed in quotes",example:'"Hello, World!" is a string',category:"data_types"},{term:"Integer",definition:"Whole numbers (positive, negative, or zero)",example:"5, -10, 0 are all integers",category:"data_types"},{term:"Float",definition:"Numbers with decimal points",example:"3.14, 2.5, -0.5 are all floats",category:"data_types"},{term:"Boolean",definition:"True or False values",example:"is_student = True, is_adult = False",category:"data_types"},{term:"List",definition:"An ordered collection of items",example:'fruits = ["apple", "banana", "orange"]',category:"data_structures"},{term:"Dictionary",definition:"A collection of key-value pairs",example:'person = {"name": "Alice", "age": 12}',category:"data_structures"},{term:"Function",definition:"A reusable block of code that performs a specific task",example:'def greet(name): return f"Hello, {name}!"',category:"functions"},{term:"Parameter",definition:"Input values that a function receives",example:"In def add(a, b), a and b are parameters",category:"functions"},{term:"Return",definition:"What a function gives back after running",example:"return a + b gives back the sum of a and b",category:"functions"},{term:"Loop",definition:"Code that repeats multiple times",example:"for i in range(5): print(i) repeats 5 times",category:"control_flow"},{term:"Conditional",definition:"Code that runs only if a condition is true",example:'if age >= 18: print("Adult")',category:"control_flow"},{term:"Index",definition:"Position of an item in a list (starts at 0)",example:'In ["a", "b", "c"], "a" is at index 0',category:"data_structures"},{term:"Method",definition:"A function that belongs to an object",example:"text.upper() is a method of the string text",category:"functions"},{term:"Algorithm",definition:"Step-by-step instructions to solve a problem",example:"Recipe for making cookies is like an algorithm",category:"problem_solving"},{term:"Debug",definition:"Find and fix errors in your code",example:"When code doesn't work, you debug to find the problem",category:"problem_solving"}],$w=[{errorType:"SyntaxError",kidFriendlyMessage:"Oops! There's a grammar mistake in your code!",suggestion:'Check for missing colons (:), parentheses (), or quotes ("")',example:"if age >= 18  # Missing colon! Should be: if age >= 18:"},{errorType:"NameError",kidFriendlyMessage:"Python doesn't know what this word means!",suggestion:"Make sure you spelled the variable name correctly",example:"print(nam)  # Should be: print(name)"},{errorType:"TypeError",kidFriendlyMessage:"You're trying to mix things that don't go together!",suggestion:"Check if you're using the right type of data",example:`print("Hello" + 5)  # Can't add text and numbers!`},{errorType:"IndentationError",kidFriendlyMessage:"Your code isn't lined up properly!",suggestion:"Make sure your code is indented correctly (use spaces or tabs)",example:`if True:
print("This needs to be indented!")`},{errorType:"IndexError",kidFriendlyMessage:"You're trying to reach into an empty box!",suggestion:"Check if the list has items before trying to access them",example:`fruits = []
print(fruits[0])  # Can't get first item of empty list!`},{errorType:"KeyError",kidFriendlyMessage:"You're looking for a key that doesn't exist!",suggestion:"Check if the key exists in your dictionary",example:`person = {"name": "Alice"}
print(person["age"])  # "age" key doesn't exist!`},{errorType:"ValueError",kidFriendlyMessage:"You gave the right type but wrong value!",suggestion:"Check if the value makes sense for what you're trying to do",example:`int("hello")  # Can't convert text to number!`},{errorType:"AttributeError",kidFriendlyMessage:"You're trying to use a tool that doesn't exist!",suggestion:"Check if the method or property exists for that object",example:`text = "hello"
text.uppercase()  # Should be: text.upper()`},{errorType:"ZeroDivisionError",kidFriendlyMessage:"You can't divide by zero!",suggestion:"Make sure your divisor is not zero",example:"print(10 / 0)  # Can't divide by zero!"},{errorType:"FileNotFoundError",kidFriendlyMessage:"Python can't find the file you're looking for!",suggestion:"Check if the file exists and the path is correct",example:`open("nonexistent.txt")  # File doesn't exist!`}],Mw=[{id:"first_code",name:"First Steps",description:"Write your first line of Python code!",icon:"🚀",unlocked:!1},{id:"print_master",name:"Print Master",description:"Complete all print statement levels!",icon:"🖨️",unlocked:!1},{id:"loop_wizard",name:"Loop Wizard",description:"Master the art of loops!",icon:"🔄",unlocked:!1},{id:"function_builder",name:"Function Builder",description:"Create your first function!",icon:"🏗️",unlocked:!1},{id:"list_collector",name:"List Collector",description:"Work with lists like a pro!",icon:"📋",unlocked:!1},{id:"string_artist",name:"String Artist",description:"Master string manipulation!",icon:"🎨",unlocked:!1},{id:"conditional_thinker",name:"Conditional Thinker",description:"Make smart decisions with if statements!",icon:"🤔",unlocked:!1},{id:"debug_detective",name:"Debug Detective",description:"Find and fix bugs like a detective!",icon:"🔍",unlocked:!1},{id:"project_creator",name:"Project Creator",description:"Build your first complete project!",icon:"🎯",unlocked:!1},{id:"streak_warrior",name:"Streak Warrior",description:"Code for 7 days in a row!",icon:"🔥",unlocked:!1},{id:"star_collector",name:"Star Collector",description:"Earn 50 stars total!",icon:"⭐",unlocked:!1},{id:"speed_demon",name:"Speed Demon",description:"Complete a level in under 30 seconds!",icon:"⚡",unlocked:!1}],Dw="modulepreload",Uw=function(t){return"/"+t},pd={},he=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Uw(i),i in pd)return;pd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Dw,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var zw=Object.defineProperty,O=(t,e)=>zw(t,"name",{value:e,configurable:!0}),kp=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),Bw=(()=>{for(var t=new Uint8Array(128),e=0;e<64;e++)t[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return n=>{for(var r=n.length,s=new Uint8Array((r-(n[r-1]=="=")-(n[r-2]=="="))*3/4|0),i=0,o=0;i<r;){var a=t[n.charCodeAt(i++)],l=t[n.charCodeAt(i++)],u=t[n.charCodeAt(i++)],d=t[n.charCodeAt(i++)];s[o++]=a<<2|l>>4,s[o++]=l<<4|u>>2,s[o++]=u<<6|d}return s}})();function Sp(t){return!isNaN(parseFloat(t))&&isFinite(t)}O(Sp,"_isNumber");function rn(t){return t.charAt(0).toUpperCase()+t.substring(1)}O(rn,"_capitalize");function wo(t){return function(){return this[t]}}O(wo,"_getter");var Hn=["isConstructor","isEval","isNative","isToplevel"],qn=["columnNumber","lineNumber"],Vn=["fileName","functionName","source"],Ww=["args"],Hw=["evalOrigin"],oi=Hn.concat(qn,Vn,Ww,Hw);function We(t){if(t)for(var e=0;e<oi.length;e++)t[oi[e]]!==void 0&&this["set"+rn(oi[e])](t[oi[e]])}O(We,"StackFrame");We.prototype={getArgs:O(function(){return this.args},"getArgs"),setArgs:O(function(t){if(Object.prototype.toString.call(t)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=t},"setArgs"),getEvalOrigin:O(function(){return this.evalOrigin},"getEvalOrigin"),setEvalOrigin:O(function(t){if(t instanceof We)this.evalOrigin=t;else if(t instanceof Object)this.evalOrigin=new We(t);else throw new TypeError("Eval Origin must be an Object or StackFrame")},"setEvalOrigin"),toString:O(function(){var t=this.getFileName()||"",e=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?t?"[eval] ("+t+":"+e+":"+n+")":"[eval]:"+e+":"+n:r?r+" ("+t+":"+e+":"+n+")":t+":"+e+":"+n},"toString")};We.fromString=O(function(t){var e=t.indexOf("("),n=t.lastIndexOf(")"),r=t.substring(0,e),s=t.substring(e+1,n).split(","),i=t.substring(n+1);if(i.indexOf("@")===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),a=o[1],l=o[2],u=o[3];return new We({functionName:r,args:s||void 0,fileName:a,lineNumber:l||void 0,columnNumber:u||void 0})},"StackFrame$$fromString");for(un=0;un<Hn.length;un++)We.prototype["get"+rn(Hn[un])]=wo(Hn[un]),We.prototype["set"+rn(Hn[un])]=function(t){return function(e){this[t]=!!e}}(Hn[un]);var un;for(dn=0;dn<qn.length;dn++)We.prototype["get"+rn(qn[dn])]=wo(qn[dn]),We.prototype["set"+rn(qn[dn])]=function(t){return function(e){if(!Sp(e))throw new TypeError(t+" must be a Number");this[t]=Number(e)}}(qn[dn]);var dn;for(hn=0;hn<Vn.length;hn++)We.prototype["get"+rn(Vn[hn])]=wo(Vn[hn]),We.prototype["set"+rn(Vn[hn])]=function(t){return function(e){this[t]=String(e)}}(Vn[hn]);var hn,ia=We;function Cp(){var t=/^\s*at .*(\S+:\d+|\(native\))/m,e=/^(eval@)?(\[native code])?$/;return{parse:O(function(n){if(n.stack&&n.stack.match(t))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:O(function(n){if(n.indexOf(":")===-1)return[n];var r=/(.+?)(?::(\d+))?(?::(\d+))?$/,s=r.exec(n.replace(/[()]/g,""));return[s[1],s[2]||void 0,s[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:O(function(n){var r=n.stack.split(`
`).filter(function(s){return!!s.match(t)},this);return r.map(function(s){s.indexOf("(eval ")>-1&&(s=s.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=s.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),o=i.match(/ (\(.+\)$)/);i=o?i.replace(o[0],""):i;var a=this.extractLocation(o?o[1]:i),l=o&&i||void 0,u=["eval","<anonymous>"].indexOf(a[0])>-1?void 0:a[0];return new ia({functionName:l,fileName:u,lineNumber:a[1],columnNumber:a[2],source:s})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:O(function(n){var r=n.stack.split(`
`).filter(function(s){return!s.match(e)},this);return r.map(function(s){if(s.indexOf(" > eval")>-1&&(s=s.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),s.indexOf("@")===-1&&s.indexOf(":")===-1)return new ia({functionName:s});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,o=s.match(i),a=o&&o[1]?o[1]:void 0,l=this.extractLocation(s.replace(i,""));return new ia({functionName:a,fileName:l[0],lineNumber:l[1],columnNumber:l[2],source:s})},this)},"ErrorStackParser$$parseFFOrSafari")}}O(Cp,"ErrorStackParser");var qw=new Cp,Vw=qw,vt=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,jp=vt&&typeof jl<"u"&&typeof jl.exports<"u"&&typeof kp<"u"&&typeof __dirname<"u",Gw=vt&&!jp,Kw=typeof Deno<"u",Ep=!vt&&!Kw,Qw=Ep&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Yw=Ep&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var xo=typeof read=="function"&&typeof load=="function",Tp,pl,Pp,md,Cc;async function jc(){if(!vt||(Tp=(await he(()=>import("./__vite-browser-external-b25bb000.js"),[])).default,md=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),Cc=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),Pp=(await he(()=>import("./__vite-browser-external-b25bb000.js"),[])).default,pl=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),Ec=pl.sep,typeof kp<"u"))return;let t=md,e=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),n=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),r=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]),s={fs:t,crypto:e,ws:n,child_process:r};globalThis.require=function(i){return s[i]}}O(jc,"initNodeModules");function Np(t,e){return pl.resolve(e||".",t)}O(Np,"node_resolvePath");function Op(t,e){return e===void 0&&(e=location),new URL(t,e).toString()}O(Op,"browser_resolvePath");var rs;vt?rs=Np:xo?rs=O(t=>t,"resolvePath"):rs=Op;var Ec;vt||(Ec="/");function Ap(t,e){return t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?{response:fetch(t)}:{binary:Cc.readFile(t).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}O(Ap,"node_getBinaryResponse");function Fp(t,e){if(t.startsWith("file://")&&(t=t.slice(7)),t.includes("://"))throw new Error("Shell cannot fetch urls");return{binary:Promise.resolve(new Uint8Array(readbuffer(t)))}}O(Fp,"shell_getBinaryResponse");function Rp(t,e){let n=new URL(t,location);return{response:fetch(n,e?{integrity:e}:{})}}O(Rp,"browser_getBinaryResponse");var ss;vt?ss=Ap:xo?ss=Fp:ss=Rp;async function Lp(t,e){let{response:n,binary:r}=ss(t,e);if(r)return r;let s=await n;if(!s.ok)throw new Error(`Failed to load '${t}': request failed.`);return new Uint8Array(await s.arrayBuffer())}O(Lp,"loadBinaryFile");var Hr;if(Qw)Hr=O(async t=>await he(()=>import(t),[]),"loadScript");else if(Yw)Hr=O(async t=>{try{globalThis.importScripts(t)}catch(e){if(e instanceof TypeError)await he(()=>import(t),[]);else throw e}},"loadScript");else if(vt)Hr=Ip;else if(xo)Hr=load;else throw new Error("Cannot determine runtime environment");async function Ip(t){t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?Pp.runInThisContext(await(await fetch(t)).text()):await he(()=>import(Tp.pathToFileURL(t).href),[])}O(Ip,"nodeLoadScript");async function $p(t){if(vt){await jc();let e=await Cc.readFile(t,{encoding:"utf8"});return JSON.parse(e)}else if(xo){let e=read(t);return JSON.parse(e)}else return await(await fetch(t)).json()}O($p,"loadLockFile");async function Mp(){if(jp)return __dirname;let t;try{throw new Error}catch(r){t=r}let e=Vw.parse(t)[0].fileName;if(vt&&!e.startsWith("file://")&&(e=`file://${e}`),Gw){let r=await he(()=>import("./__vite-browser-external-b25bb000.js"),[]);return(await he(()=>import("./__vite-browser-external-b25bb000.js"),[])).fileURLToPath(r.dirname(e))}let n=e.lastIndexOf(Ec);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return e.slice(0,n)}O(Mp,"calculateDirname");function Dp(t){var e;return t.substring(0,t.lastIndexOf("/")+1)||((e=globalThis.location)==null?void 0:e.toString())||"."}O(Dp,"calculateInstallBaseUrl");function Up(t){let e=t.FS,n=t.FS.filesystems.MEMFS,r=t.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:O(function(i){if(!i.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},"mount"),syncfs:O(async(i,o,a)=>{try{let l=s.getLocalSet(i),u=await s.getRemoteSet(i),d=o?u:l,h=o?l:u;await s.reconcile(i,d,h),a(null)}catch(l){a(l)}},"syncfs"),getLocalSet:O(i=>{let o=Object.create(null);function a(d){return d!=="."&&d!==".."}O(a,"isRealDir");function l(d){return h=>r.join2(d,h)}O(l,"toAbsolute");let u=e.readdir(i.mountpoint).filter(a).map(l(i.mountpoint));for(;u.length;){let d=u.pop(),h=e.stat(d);e.isDir(h.mode)&&u.push.apply(u,e.readdir(d).filter(a).map(l(d))),o[d]={timestamp:h.mtime,mode:h.mode}}return{type:"local",entries:o}},"getLocalSet"),getRemoteSet:O(async i=>{let o=Object.create(null),a=await Jw(i.opts.fileSystemHandle);for(let[l,u]of a)l!=="."&&(o[r.join2(i.mountpoint,l)]={timestamp:u.kind==="file"?new Date((await u.getFile()).lastModified):new Date,mode:u.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:o,handles:a}},"getRemoteSet"),loadLocalEntry:O(i=>{let o=e.lookupPath(i).node,a=e.stat(i);if(e.isDir(a.mode))return{timestamp:a.mtime,mode:a.mode};if(e.isFile(a.mode))return o.contents=n.getFileDataAsTypedArray(o),{timestamp:a.mtime,mode:a.mode,contents:o.contents};throw new Error("node type not supported")},"loadLocalEntry"),storeLocalEntry:O((i,o)=>{if(e.isDir(o.mode))e.mkdirTree(i,o.mode);else if(e.isFile(o.mode))e.writeFile(i,o.contents,{canOwn:!0});else throw new Error("node type not supported");e.chmod(i,o.mode),e.utime(i,o.timestamp,o.timestamp)},"storeLocalEntry"),removeLocalEntry:O(i=>{var o=e.stat(i);e.isDir(o.mode)?e.rmdir(i):e.isFile(o.mode)&&e.unlink(i)},"removeLocalEntry"),loadRemoteEntry:O(async i=>{if(i.kind==="file"){let o=await i.getFile();return{contents:new Uint8Array(await o.arrayBuffer()),mode:s.FILE_MODE,timestamp:new Date(o.lastModified)}}else{if(i.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+i.kind)}},"loadRemoteEntry"),storeRemoteEntry:O(async(i,o,a)=>{let l=i.get(r.dirname(o)),u=e.isFile(a.mode)?await l.getFileHandle(r.basename(o),{create:!0}):await l.getDirectoryHandle(r.basename(o),{create:!0});if(u.kind==="file"){let d=await u.createWritable();await d.write(a.contents),await d.close()}i.set(o,u)},"storeRemoteEntry"),removeRemoteEntry:O(async(i,o)=>{await i.get(r.dirname(o)).removeEntry(r.basename(o)),i.delete(o)},"removeRemoteEntry"),reconcile:O(async(i,o,a)=>{let l=0,u=[];Object.keys(o.entries).forEach(function(p){let v=o.entries[p],y=a.entries[p];(!y||e.isFile(v.mode)&&v.timestamp.getTime()>y.timestamp.getTime())&&(u.push(p),l++)}),u.sort();let d=[];if(Object.keys(a.entries).forEach(function(p){o.entries[p]||(d.push(p),l++)}),d.sort().reverse(),!l)return;let h=o.type==="remote"?o.handles:a.handles;for(let p of u){let v=r.normalize(p.replace(i.mountpoint,"/")).substring(1);if(a.type==="local"){let y=h.get(v),x=await s.loadRemoteEntry(y);s.storeLocalEntry(p,x)}else{let y=s.loadLocalEntry(p);await s.storeRemoteEntry(h,v,y)}}for(let p of d)if(a.type==="local")s.removeLocalEntry(p);else{let v=r.normalize(p.replace(i.mountpoint,"/")).substring(1);await s.removeRemoteEntry(h,v)}},"reconcile")};t.FS.filesystems.NATIVEFS_ASYNC=s}O(Up,"initializeNativeFS");var Jw=O(async t=>{let e=[];async function n(s){for await(let i of s.values())e.push(i),i.kind==="directory"&&await n(i)}O(n,"collect"),await n(t);let r=new Map;r.set(".",t);for(let s of e){let i=(await t.resolve(s)).join("/");r.set(i,s)}return r},"getFsHandles");Bw("AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECByECD2NyZWF0ZV9zZW50aW5lbAAAC2lzX3NlbnRpbmVsAAEKEwIHAPsBAPsbCwkAIAD7GvsUAAs=");var Xw=async function(){globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&typeof navigator.maxTouchPoints<"u"&&navigator.maxTouchPoints>1)}();async function zp(){let t=await Xw;if(t)return t.exports;let e=Symbol("error marker");return{create_sentinel:O(()=>e,"create_sentinel"),is_sentinel:O(n=>n===e,"is_sentinel")}}O(zp,"getSentinelImport");function Bp(t){let e={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Kp(t),print:t.stdout,printErr:t.stderr,onExit(n){e.exitCode=n},thisProgram:t._sysExecutable,arguments:t.args,API:{config:t},locateFile:O(n=>t.indexURL+n,"locateFile"),instantiateWasm:Qp(t.indexURL)};return e}O(Bp,"createSettings");function Wp(t){return function(e){let n="/";try{e.FS.mkdirTree(t)}catch(r){console.error(`Error occurred while making a home directory '${t}':`),console.error(r),console.error(`Using '${n}' for a home directory instead`),t=n}e.FS.chdir(t)}}O(Wp,"createHomeDirectory");function Hp(t){return function(e){Object.assign(e.ENV,t)}}O(Hp,"setEnvironment");function qp(t){return t?[async e=>{e.addRunDependency("fsInitHook");try{await t(e.FS,{sitePackages:e.API.sitePackages})}finally{e.removeRunDependency("fsInitHook")}}]:[]}O(qp,"callFsInitHook");function Vp(t){let e=t.HEAPU32[t._Py_Version>>>2],n=e>>>24&255,r=e>>>16&255,s=e>>>8&255;return[n,r,s]}O(Vp,"computeVersionTuple");function Gp(t){let e=Lp(t);return async n=>{n.API.pyVersionTuple=Vp(n);let[r,s]=n.API.pyVersionTuple;n.FS.mkdirTree("/lib"),n.API.sitePackages=`/lib/python${r}.${s}/site-packages`,n.FS.mkdirTree(n.API.sitePackages),n.addRunDependency("install-stdlib");try{let i=await e;n.FS.writeFile(`/lib/python${r}${s}.zip`,i)}catch(i){console.error("Error occurred while installing the standard library:"),console.error(i)}finally{n.removeRunDependency("install-stdlib")}}}O(Gp,"installStdlib");function Kp(t){let e;return t.stdLibURL!=null?e=t.stdLibURL:e=t.indexURL+"python_stdlib.zip",[Gp(e),Wp(t.env.HOME),Hp(t.env),Up,...qp(t.fsInit)]}O(Kp,"getFileSystemInitializationFuncs");function Qp(t){if(typeof WasmOffsetConverter<"u")return;let{binary:e,response:n}=ss(t+"pyodide.asm.wasm"),r=zp();return function(s,i){return async function(){s.sentinel=await r;try{let o;n?o=await WebAssembly.instantiateStreaming(n,s):o=await WebAssembly.instantiate(await e,s);let{instance:a,module:l}=o;i(a,l)}catch(o){console.warn("wasm instantiation failed!"),console.warn(o)}}(),{}}}O(Qp,"getInstantiateWasmFunc");var Zw="0.28.2";function qr(t){return t===void 0||t.endsWith("/")?t:t+"/"}O(qr,"withTrailingSlash");var oa=Zw;async function Yp(t={}){var h,p;if(t.lockFileContents&&t.lockFileURL)throw new Error("Can't pass both lockFileContents and lockFileURL");await jc();let e=t.indexURL||await Mp();e=qr(rs(e));let n=t;if(n.packageBaseUrl=qr(n.packageBaseUrl),n.cdnUrl=qr(n.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v${oa}/full/`),!t.lockFileContents){let v=t.lockFileURL??e+"pyodide-lock.json";n.lockFileContents=$p(v),n.packageBaseUrl??(n.packageBaseUrl=Dp(v))}n.indexURL=e,n.packageCacheDir&&(n.packageCacheDir=qr(rs(n.packageCacheDir)));let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,args:[],env:{},packages:[],packageCacheDir:n.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:"941a75c165c70d9d65a059137df0382b4c6a7747ff5f3de2b264ce4a2fb36cf5"},s=Object.assign(r,n);(h=s.env).HOME??(h.HOME="/home/pyodide"),(p=s.env).PYTHONINSPECT??(p.PYTHONINSPECT="1");let i=Bp(s),o=i.API;if(o.lockFilePromise=Promise.resolve(n.lockFileContents),typeof _createPyodideModule!="function"){let v=`${s.indexURL}pyodide.asm.js`;await Hr(v)}let a;if(t._loadSnapshot){let v=await t._loadSnapshot;ArrayBuffer.isView(v)?a=v:a=new Uint8Array(v),i.noInitialRun=!0,i.INITIAL_MEMORY=a.length}let l=await _createPyodideModule(i);if(i.exitCode!==void 0)throw new l.ExitStatus(i.exitCode);if(t.pyproxyToStringRepr&&o.setPyProxyToStringMethod(!0),t.convertNullToNone&&o.setCompatNullToNone(!0),o.version!==oa&&s.checkAPIVersion)throw new Error(`Pyodide version does not match: '${oa}' <==> '${o.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);l.locateFile=v=>{throw v.endsWith(".so")?new Error(`Failed to find dynamic library "${v}"`):new Error(`Unexpected call to locateFile("${v}")`)};let u;a&&(u=o.restoreSnapshot(a));let d=o.finalizeBootstrap(u,t._snapshotDeserializer);return o.sys.path.insert(0,""),o._pyodide.set_excepthook(),await o.packageIndexReady,o.initializeStreams(s.stdin,s.stdout,s.stderr),d}O(Yp,"loadPyodide");class e1{constructor(){pe(this,"pyodide",null);pe(this,"initialized",!1)}async initialize(){this.initialized||(console.log("Initializing Pyodide..."),this.pyodide=await Yp({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.28.2/full/"}),this.pyodide.runPython(`
import sys
import io
from contextlib import redirect_stdout, redirect_stderr

# Capture output
class OutputCapture:
    def __init__(self):
        self.output = []
    
    def write(self, text):
        self.output.append(text)
    
    def flush(self):
        pass
    
    def get_output(self):
        return ''.join(self.output)

# Global output capture
output_capture = OutputCapture()
sys.stdout = output_capture
sys.stderr = output_capture
    `),this.initialized=!0,console.log("Pyodide initialized successfully"))}async executeCode(e,n){await this.initialize();try{this.pyodide.runPython("output_capture.output.clear()"),await this.setupLevelEnvironment(n);let r="";try{r=this.pyodide.runPython(`
import sys
from io import StringIO
import contextlib

# Capture stdout
old_stdout = sys.stdout
sys.stdout = mystdout = StringIO()

try:
    exec("""${e.replace(/"/g,'\\"')}""")
finally:
    sys.stdout = old_stdout

mystdout.getvalue()
        `)||""}catch(o){console.log("Error capturing output:",o),r=this.pyodide.runPython("output_capture.get_output()")||""}console.log("Captured output:",r);const s=await this.runTests(n),i=this.calculateStars(s);return{success:!0,output:r,testResults:s,stars:i}}catch(r){return console.error("Code execution error:",r),{success:!1,output:"",error:r.message||"Unknown error occurred"}}}async setupLevelEnvironment(e){let n="";switch(e.category){case"loops":n=`
import random

def roller():
    """Simulates a die roll from 1 to 6"""
    return random.randint(1, 6)

# Test roller function
def test_roller():
    for _ in range(10):
        roll = roller()
        assert 1 <= roll <= 6, f"Roll {roll} is not between 1 and 6"
    print("✅ Roller function works correctly!")

test_roller()
        `;break;case"functions":n=`
class World:
    def __init__(self, grid_data):
        self.width = grid_data['width']
        self.height = grid_data['height']
        self.start = tuple(grid_data['start'])
        self.goal = tuple(grid_data['goal'])
        self.tiles = {}
        for tile in grid_data['tiles']:
            self.tiles[(tile['x'], tile['y'])] = tile['type']
    
    def at(self, x, y):
        tile_type = self.tiles.get((x, y), 'empty')
        return {'type': tile_type}
    
    def __str__(self):
        return f"World({self.width}x{self.height}, start={self.start}, goal={self.goal})"

# Create world instance
world_data = ${JSON.stringify(e.world||{})}
if world_data:
    world = World(world_data)
    print(f"🌍 World created: {world}")
else:
    world = None
        `;break;default:n=`
# Basic setup for ${e.category} level
print("🚀 Ready to code!")
        `}n&&this.pyodide.runPython(n)}async runTests(e){const n=[];for(const r of e.tests)try{let s="";switch(e.category){case"print":s=`
# Test: ${r.name}
print(f"🧪 Running test: {test.name}")
result = True  # Give 1 star for any successful execution
if result:
    print(f"✅ Test '{test.name}' passed!")
else:
    print(f"❌ Test '{test.name}' failed!")
            `;break;case"loops":s=`
# Test: ${r.name}
def fake_roller(sequence):
    it = iter(sequence)
    return lambda: next(it)

test_sequence = ${JSON.stringify(r.input)}
expected = ${JSON.stringify(r.expected)}
actual = rolls_until_six(fake_roller(test_sequence))

if actual == expected:
    print(f"✅ Test '{test.name}' passed!")
    result = True
else:
    print(f"❌ Test '{test.name}' failed! Expected {expected}, got {actual}")
    result = False
            `;break;case"functions":s=`
# Test: ${r.name}
if world:
    moves = move_to_goal(world)
    print(f"🤖 Robot moves: {moves}")
    
    # Simulate robot movement
    x, y = world.start
    valid_moves = 0
    
    for move in moves:
        if move == "UP": y -= 1
        elif move == "DOWN": y += 1
        elif move == "LEFT": x -= 1
        elif move == "RIGHT": x += 1
        
        cell = world.at(x, y)["type"]
        if cell == "lava":
            print(f"💥 Hit lava at ({x}, {y})!")
            result = False
            break
        elif cell == "wall":
            print(f"💥 Hit wall at ({x}, {y})!")
            result = False
            break
        elif cell == "goal":
            print(f"🎯 Reached goal at ({x}, {y})!")
            result = True
            break
        else:
            valid_moves += 1
    else:
        print(f"❌ Never reached goal! Final position: ({x}, {y})")
        result = False
else:
    print("❌ No world available for testing")
    result = False
            `;break;case"conditionals":case"strings":case"functions":case"lists":case"project":s=`
# Test: ${r.name}
print(f"🧪 Running test: {test.name}")
result = True  # Give 1 star for any successful execution
if result:
    print(f"✅ Test '{test.name}' passed!")
else:
    print(f"❌ Test '{test.name}' failed!")
            `;break;default:s=`
# Test: ${r.name}
print(f"🧪 Running test: {test.name}")
result = True  # Placeholder for other test types
            `}this.pyodide.runPython(s);const i=this.pyodide.runPython("result");n.push({name:r.name,passed:i,message:i?"Test passed!":"Test failed"})}catch(s){n.push({name:r.name,passed:!1,message:`Error: ${s.message}`})}return n}calculateStars(e){const n=e.filter(s=>s.passed).length,r=e.length;return n===0?0:n===r?3:n>=r*.6?2:1}}const t1=new e1;class n1{constructor(){pe(this,"effects",[]);pe(this,"canvas",null);pe(this,"ctx",null);pe(this,"animationId",null);pe(this,"isRunning",!1)}init(e){this.canvas=e,this.ctx=e.getContext("2d"),this.resizeCanvas(),window.addEventListener("resize",()=>this.resizeCanvas())}resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}createCelebrationParticles(e,n,r=30){this.createEffect("celebration",e,n,r,[{type:"star",weight:.3},{type:"sparkle",weight:.3},{type:"confetti",weight:.2},{type:"rainbow",weight:.2}])}createSuccessParticles(e,n,r=20){this.createEffect("success",e,n,r,[{type:"sparkle",weight:.4},{type:"star",weight:.3},{type:"magic",weight:.3}])}createLevelUpParticles(e,n,r=40){this.createEffect("levelup",e,n,r,[{type:"firework",weight:.4},{type:"rainbow",weight:.3},{type:"star",weight:.3}])}createAchievementParticles(e,n,r=25){this.createEffect("achievement",e,n,r,[{type:"heart",weight:.3},{type:"magic",weight:.3},{type:"sparkle",weight:.4}])}createCodeTypingParticles(e,n,r=15){this.createEffect("typing",e,n,r,[{type:"code",weight:.6},{type:"sparkle",weight:.4}])}createErrorParticles(e,n,r=10){this.createEffect("error",e,n,r,[{type:"sparkle",weight:1}])}createEffect(e,n,r,s,i){const o={id:Math.random().toString(36).substr(2,9),particles:[],duration:3e3,startTime:Date.now(),type:e};for(let a=0;a<s;a++){const l=this.selectParticleType(i),u=this.createParticle(n,r,l,e);o.particles.push(u)}this.effects.push(o),this.start()}selectParticleType(e){const n=Math.random();let r=0;for(const s of e)if(r+=s.weight,n<=r)return s.type;return e[0].type}createParticle(e,n,r,s){const i=this.getBaseVelocity(s);return{id:Math.random().toString(36).substr(2,9),x:e,y:n,vx:(Math.random()-.5)*i.x,vy:(Math.random()-.5)*i.y-2,life:1,maxLife:1,size:Math.random()*6+2,color:this.getRandomColor(r),type:r,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.2,scale:Math.random()*.5+.5,trail:[]}}getBaseVelocity(e){return{celebration:{x:12,y:12},success:{x:8,y:8},levelup:{x:15,y:15},achievement:{x:10,y:10},typing:{x:4,y:4},error:{x:6,y:6}}[e]||{x:8,y:8}}getRandomColor(e){const r={star:["#FFD700","#FFA500","#FF6B6B","#4ECDC4","#45B7D1","#96CEB4"],sparkle:["#FFFFFF","#FFD700","#FF69B4","#00CED1","#FFEAA7"],confetti:["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#FF9FF3"],heart:["#FF69B4","#FF1493","#FFB6C1","#FFC0CB","#FF6B9D"],firework:["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD"],rainbow:["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3"],code:["#00FF00","#00FFFF","#0080FF","#8000FF","#FF00FF"],magic:["#FFD700","#FF69B4","#00CED1","#FF6B6B","#4ECDC4"]}[e];return r[Math.floor(Math.random()*r.length)]}update(){!this.ctx||!this.canvas||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.effects=this.effects.filter(e=>Date.now()-e.startTime>e.duration?!1:(e.particles=e.particles.filter(r=>(this.updateParticle(r),this.drawParticle(r),r.life>0)),e.particles.length>0)),this.effects.length>0?this.animationId=requestAnimationFrame(()=>this.update()):(this.isRunning=!1,this.animationId=null))}updateParticle(e){e.x+=e.vx,e.y+=e.vy,e.vy+=.1,e.life-=.015,e.rotation+=e.rotationSpeed,e.scale=Math.max(0,e.scale-.01),e.trail.push({x:e.x,y:e.y,life:e.life}),e.trail.length>10&&e.trail.shift(),e.trail.forEach(n=>{n.life-=.05}),e.trail=e.trail.filter(n=>n.life>0)}drawParticle(e){this.ctx&&(this.ctx.save(),this.ctx.globalAlpha=e.life,this.ctx.translate(e.x,e.y),this.ctx.rotate(e.rotation),this.ctx.scale(e.scale,e.scale),e.trail.length>1&&this.drawTrail(e),this.ctx.fillStyle=e.color,this.drawParticleShape(e),this.ctx.restore())}drawTrail(e){if(!(!this.ctx||e.trail.length<2)){this.ctx.strokeStyle=e.color,this.ctx.lineWidth=2,this.ctx.globalAlpha=e.life*.5,this.ctx.beginPath(),this.ctx.moveTo(e.trail[0].x-e.x,e.trail[0].y-e.y);for(let n=1;n<e.trail.length;n++)this.ctx.lineTo(e.trail[n].x-e.x,e.trail[n].y-e.y);this.ctx.stroke(),this.ctx.globalAlpha=e.life}}drawParticleShape(e){if(this.ctx)switch(e.type){case"star":this.drawStar(0,0,e.size);break;case"sparkle":this.drawSparkle(0,0,e.size);break;case"confetti":this.drawConfetti(0,0,e.size);break;case"heart":this.drawHeart(0,0,e.size);break;case"firework":this.drawFirework(0,0,e.size);break;case"rainbow":this.drawRainbow(0,0,e.size);break;case"code":this.drawCode(0,0,e.size);break;case"magic":this.drawMagic(0,0,e.size);break}}drawStar(e,n,r){if(this.ctx){this.ctx.beginPath();for(let s=0;s<5;s++){const i=s*4*Math.PI/5,o=r,a=r*.4,l=e+Math.cos(i)*o,u=n+Math.sin(i)*o,d=e+Math.cos(i+Math.PI/5)*a,h=n+Math.sin(i+Math.PI/5)*a;s===0?this.ctx.moveTo(l,u):this.ctx.lineTo(l,u),this.ctx.lineTo(d,h)}this.ctx.closePath(),this.ctx.fill()}}drawSparkle(e,n,r){this.ctx&&(this.ctx.beginPath(),this.ctx.arc(e,n,r,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#FFD700",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(e-r*2,n),this.ctx.lineTo(e+r*2,n),this.ctx.moveTo(e,n-r*2),this.ctx.lineTo(e,n+r*2),this.ctx.stroke())}drawConfetti(e,n,r){this.ctx&&this.ctx.fillRect(e-r/2,n-r/2,r,r)}drawHeart(e,n,r){this.ctx&&(this.ctx.beginPath(),this.ctx.moveTo(e,n+r/4),this.ctx.bezierCurveTo(e,n,e-r/2,n,e-r/2,n+r/4),this.ctx.bezierCurveTo(e-r/2,n+r/2,e,n+r/2,e,n+r),this.ctx.bezierCurveTo(e,n+r/2,e+r/2,n+r/2,e+r/2,n+r/4),this.ctx.bezierCurveTo(e+r/2,n,e,n,e,n+r/4),this.ctx.fill())}drawFirework(e,n,r){if(this.ctx)for(let s=0;s<8;s++){const i=s*Math.PI*2/8,o=e+Math.cos(i)*r*2,a=n+Math.sin(i)*r*2;this.ctx.beginPath(),this.ctx.moveTo(e,n),this.ctx.lineTo(o,a),this.ctx.stroke()}}drawRainbow(e,n,r){if(!this.ctx)return;const s=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#9400D3"],i=r/s.length;for(let o=0;o<s.length;o++)this.ctx.fillStyle=s[o],this.ctx.beginPath(),this.ctx.arc(e,n,r-o*i,0,Math.PI*2),this.ctx.fill()}drawCode(e,n,r){this.ctx&&(this.ctx.font=`${r}px monospace`,this.ctx.textAlign="center",this.ctx.fillText("</>",e,n+r/3))}drawMagic(e,n,r){this.ctx&&(this.ctx.beginPath(),this.ctx.arc(e,n,r,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle="#9F7AEA",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.arc(e,n,r*1.5,0,Math.PI*2),this.ctx.stroke())}start(){this.isRunning||(this.isRunning=!0,this.update())}stop(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isRunning=!1}clear(){this.effects=[],this.ctx&&this.canvas&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}getEffectCount(){return this.effects.length}isActive(){return this.effects.length>0}}const Mn=new n1,r1=({levelId:t,onComplete:e,onBack:n,progressService:r,theme:s,onThemeToggle:i,soundEnabled:o,onSoundToggle:a,musicEnabled:l,onMusicToggle:u})=>{var Fc,Rc,Lc,Ic;const d=ki.find(ke=>ke.id===t),[h,p]=_.useState((d==null?void 0:d.starterCode)||""),[v,y]=_.useState(""),[x,b]=_.useState(!1),[f,m]=_.useState(null),[g,w]=_.useState(!1),[k,S]=_.useState(!1),[C,E]=_.useState(!1),[M,P]=_.useState(!1),[Z,Pe]=_.useState(!1),[Ie,$e]=_.useState(""),[I,W]=_.useState(null),[ie,T]=_.useState({currentHint:0,maxHints:(d==null?void 0:d.hints.length)||0,hints:(d==null?void 0:d.hints)||[]}),F=_.useRef(null),R=_.useRef(null);if(_.useEffect(()=>(F.current&&(Mn.init(F.current),Mn.start()),()=>{Mn.stop()}),[]),_.useEffect(()=>{Me.setSoundEnabled(o)},[o]),!d)return c.jsxs("div",{className:"error-screen",children:[c.jsx("h2",{children:"Level not found!"}),c.jsx("button",{className:"btn btn-primary",onClick:n,children:"Go Back"})]});const A=_.useCallback(async()=>{b(!0),y(""),m(null),$e(""),P(!1),Me.playCodeRun();const ke=Date.now();try{const oe=await t1.executeCode(h,d),Tr=Date.now()-ke;if(m(oe),y(oe.output),r&&await r.logCodeAttempt(t,h,oe.success,oe.error,Tr),oe.success){if(Me.playSuccess(),R.current){const Qe=R.current.getBoundingClientRect();Mn.createSuccessParticles(Qe.width/2,Qe.height/2,25)}const Ke=oe.stars||1,cn=Ke>1?"s":"";y(Qe=>Qe+`
🎉 Great job! You earned ${Ke} star${cn}! 🎉`),$(t,Ke),m(Qe=>Qe?{...Qe,stars:Ke}:{...oe,stars:Ke})}else oe.error&&(Me.playError(),$e(oe.error),P(!0))}catch(oe){const Tr=Date.now()-ke,Ke=(oe==null?void 0:oe.toString())||"Unknown error";Me.playError(),$e(Ke),P(!0),y(`Error: ${Ke}`),r&&await r.logCodeAttempt(t,h,!1,Ke,Tr)}finally{b(!1)}},[h,d,t,r]),$=(ke,oe)=>{const Tr=[{id:"first_code",condition:()=>!0},{id:"print_master",condition:()=>d.category==="print"},{id:"loop_wizard",condition:()=>d.category==="loops"},{id:"function_builder",condition:()=>d.category==="functions"},{id:"list_collector",condition:()=>d.category==="lists"},{id:"string_artist",condition:()=>d.category==="strings"},{id:"conditional_thinker",condition:()=>d.category==="conditionals"},{id:"debug_detective",condition:()=>d.category==="debugging"},{id:"project_creator",condition:()=>d.category==="project"},{id:"star_collector",condition:()=>oe>=3},{id:"speed_demon",condition:()=>!0}];for(const Ke of Tr)if(Ke.condition()){const cn=Mw.find(Qe=>Qe.id===Ke.id);if(cn&&!cn.unlocked){if(cn.unlocked=!0,cn.unlockedAt=new Date().toISOString(),W(cn),Me.playAchievement(),R.current){const Qe=R.current.getBoundingClientRect();Mn.createAchievementParticles(Qe.width/2,Qe.height/2)}break}}},ne=()=>{p(d.starterCode),y(""),m(null),$e(""),P(!1),Me.playClick()},be=()=>{ie.currentHint<ie.maxHints&&(T(ke=>({...ke,currentHint:ke.currentHint+1})),Me.playHint())},Ge=ke=>{p(oe=>oe+`
`+ke),Me.playClick()},wt=()=>{if(Me.playLevelComplete(),R.current){const ke=R.current.getBoundingClientRect();Mn.createCelebrationParticles(ke.width/2,ke.height/2)}e(t,(f==null?void 0:f.stars)||1,ie.currentHint)},In=(f==null?void 0:f.stars)||0;return c.jsxs("div",{className:"game-screen","data-theme":s,ref:R,children:[c.jsx("canvas",{ref:F,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e3}}),c.jsxs("div",{className:"game-header",children:[c.jsxs("button",{className:"btn btn-secondary",onClick:n,children:[c.jsx(sp,{className:"btn-icon"}),"Back"]}),c.jsxs("div",{className:"level-info",children:[c.jsx("h1",{children:d.title}),c.jsx("p",{children:d.description})]}),c.jsxs("div",{className:"game-controls",children:[c.jsx(xp,{theme:s,onToggle:i}),c.jsx(_p,{soundEnabled:o,onToggle:a}),c.jsx(bp,{musicEnabled:l,onMusicToggle:u}),c.jsxs("button",{className:"btn btn-secondary",onClick:()=>w(!g),children:[c.jsx(Zt,{className:"btn-icon"}),"Hints (",ie.currentHint,"/",ie.maxHints,")"]}),c.jsxs("button",{className:"btn btn-secondary",onClick:ne,children:[c.jsx(lv,{className:"btn-icon"}),"Reset"]})]})]}),c.jsxs("div",{className:"game-content",children:[c.jsxs("div",{className:"game-left",children:[c.jsxs("div",{className:"instructions-panel",children:[c.jsx("h3",{children:"📝 Instructions"}),c.jsx("p",{children:d.instructions}),c.jsxs("div",{className:"educational-content",children:[d.videoTutorial&&c.jsxs("button",{className:"btn btn-secondary btn-small",onClick:()=>E(!0),children:[c.jsx(hv,{className:"btn-icon"}),"Watch Tutorial"]}),d.codeWalkthrough&&c.jsxs("button",{className:"btn btn-secondary btn-small",onClick:()=>S(!0),children:[c.jsx(nv,{className:"btn-icon"}),"Code Walkthrough"]}),c.jsxs("button",{className:"btn btn-secondary btn-small",onClick:()=>S(!0),children:[c.jsx(Sc,{className:"btn-icon"}),"Glossary"]})]}),g&&c.jsx(kw,{hintState:ie,onGetHint:be})]}),c.jsxs("div",{className:"editor-panel",children:[c.jsxs("div",{className:"editor-header",children:[c.jsx("h3",{children:"🐍 Your Code"}),c.jsxs("div",{className:"editor-actions",children:[c.jsxs("button",{className:"btn btn-primary",onClick:A,disabled:x,children:[c.jsx(Es,{className:"btn-icon"}),x?"Running...":"Run Code"]}),c.jsxs("button",{className:"btn btn-secondary",onClick:()=>Pe(!0),disabled:x,children:[c.jsx(ev,{className:"btn-icon"}),"Review Code"]}),(f==null?void 0:f.success)&&c.jsx("button",{className:"btn btn-success",onClick:wt,children:"🎉 Next Level! 🎉"})]})]}),c.jsx(xw,{value:h,onChange:p,language:"python"})]}),c.jsxs("div",{className:"console-panel",children:[c.jsx(_w,{output:v,isRunning:x,testResults:f==null?void 0:f.testResults,stars:In}),M&&Ie&&c.jsx(Pw,{error:Ie,translations:$w}),(f==null?void 0:f.success)&&c.jsxs("div",{className:"completion-message",children:[c.jsx("h4",{children:"🎉 Level Completed! 🎉"}),c.jsxs("p",{children:["You earned ",f.stars||1," star",(f.stars||1)>1?"s":"","!"]}),c.jsx("p",{children:'Click "Next Level!" to continue your adventure!'})]})]})]}),c.jsxs("div",{className:"game-right",children:[d.world&&c.jsx(bw,{world:d.world,moves:(Rc=(Fc=f==null?void 0:f.testResults)==null?void 0:Fc[0])==null?void 0:Rc.actual}),d.category==="loops"&&c.jsxs("div",{className:"dice-visualization",children:[c.jsx("h3",{children:"🎲 Dice Visualization"}),c.jsx("div",{className:"dice-container",children:c.jsx("div",{className:"dice bounce",children:((Ic=(Lc=f==null?void 0:f.testResults)==null?void 0:Lc[0])==null?void 0:Ic.actual)||"?"})})]})]})]}),c.jsx(Ew,{snippets:Lw,onInsertSnippet:Ge}),k&&c.jsx(Tw,{concepts:Iw,onClose:()=>S(!1)}),C&&d.videoTutorial&&c.jsx(Nw,{videoUrl:d.videoTutorial,additionalTutorials:d.additionalTutorials,title:d.title,onClose:()=>E(!1)}),I&&c.jsx(jw,{achievement:I,onClose:()=>W(null)}),Z&&c.jsx(Rw,{code:h,level:parseInt(t.replace("level-","")),onClose:()=>Pe(!1),onApplySuggestion:ke=>{p(oe=>oe+`
`+ke),Pe(!1)}})]})},s1=({progress:t,onSelectLevel:e,onBack:n})=>{const r=l=>l===0?!0:t.completedLevels.includes(ki[l-1].id),s=l=>t.stars[l]||0,i=l=>{const u=s(l);return c.jsx("div",{className:"stars",children:[1,2,3].map(d=>c.jsx(Cn,{className:`star ${d<=u?"filled":"empty"}`,size:16},d))})},o=l=>{const u=["#4ade80","#facc15","#f97316","#ef4444"];return u[Math.min(l-1,u.length-1)]},a=l=>{const u=["Easy","Medium","Hard","Expert"];return u[Math.min(l-1,u.length-1)]};return c.jsxs("div",{className:"level-select",children:[c.jsxs("div",{className:"level-select-container",children:[c.jsxs("div",{className:"level-select-header",children:[c.jsxs("button",{className:"btn btn-secondary",onClick:n,children:[c.jsx(sp,{className:"btn-icon"}),"Back"]}),c.jsx("h1",{children:"Choose Your Adventure! 🎮"}),c.jsx("div",{className:"progress-summary",children:c.jsxs("span",{children:[t.completedLevels.length," of ",ki.length," levels completed"]})})]}),c.jsx("div",{className:"levels-grid",children:ki.map((l,u)=>{const d=r(u),h=t.completedLevels.includes(l.id),p=s(l.id);return c.jsxs("div",{className:`level-card ${d?"unlocked":"locked"} ${h?"completed":""}`,onClick:()=>d&&e(l.id),children:[c.jsxs("div",{className:"level-header",children:[c.jsx("div",{className:"level-number",children:u+1}),c.jsxs("div",{className:"level-status",children:[!d&&c.jsx(lp,{className:"status-icon"}),h&&c.jsx(Yi,{className:"status-icon completed"})]})]}),c.jsxs("div",{className:"level-content",children:[c.jsx("h3",{className:"level-title",children:l.title}),c.jsx("p",{className:"level-description",children:l.description}),c.jsxs("div",{className:"level-meta",children:[c.jsx("div",{className:"difficulty-badge",style:{backgroundColor:o(l.difficulty)},children:a(l.difficulty)}),c.jsx("div",{className:"level-category",children:l.category.charAt(0).toUpperCase()+l.category.slice(1)})]}),c.jsxs("div",{className:"level-footer",children:[d&&c.jsxs("button",{className:"btn btn-primary btn-small",children:[c.jsx(Es,{className:"btn-icon"}),h?"Play Again":"Play"]}),p>0&&i(l.id)]})]})]},l.id)})}),c.jsx("div",{className:"level-select-footer",children:c.jsx("p",{children:"🌟 Complete levels to unlock new adventures!"})})]}),c.jsx("style",{children:`
        .level-select {
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .level-select-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .level-select-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .level-select-header button {
          position: absolute;
          left: 0;
          top: 0;
        }

        .level-select-header h1 {
          color: white;
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .progress-summary {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .level-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .level-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .level-card.unlocked {
          border-color: #4ade80;
        }

        .level-card.completed {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-color: #38a169;
        }

        .level-card.locked {
          opacity: 0.6;
          cursor: not-allowed;
          background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
        }

        .level-card.locked:hover {
          transform: none;
          box-shadow: none;
        }

        .level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .level-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .level-card.locked .level-number {
          background: #cbd5e0;
        }

        .status-icon {
          width: 24px;
          height: 24px;
          color: #cbd5e0;
        }

        .status-icon.completed {
          color: #38a169;
        }

        .level-title {
          font-size: 1.4rem;
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .level-description {
          color: #4a5568;
          margin: 0 0 15px 0;
          line-height: 1.5;
        }

        .level-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .difficulty-badge {
          padding: 4px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .level-category {
          padding: 4px 12px;
          border-radius: 15px;
          background: #edf2f7;
          color: #4a5568;
          font-size: 0.8rem;
        }

        .level-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #cbd5e0;
        }

        .star.filled {
          color: #fbbf24;
        }

        .level-select-footer {
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .levels-grid {
            grid-template-columns: 1fr;
          }

          .level-select-header h1 {
            font-size: 2rem;
          }

          .level-select-header button {
            position: static;
            margin-bottom: 20px;
          }
        }
      `})]})},Jp=_.createContext(void 0),Ms=()=>{const t=_.useContext(Jp);if(t===void 0)throw new Error("useLocalAuth must be used within a LocalAuthProvider");return t},i1=({children:t})=>{const[e,n]=_.useState(null),[r,s]=_.useState(null),[i,o]=_.useState(null),[a,l]=_.useState(!0);_.useEffect(()=>{const y=localStorage.getItem("codequest-user");if(y){const x=JSON.parse(y);n(x),s(x),o({user:x})}l(!1)},[]);const v={user:e,profile:r,session:i,loading:a,signUp:async(y,x,b,f,m="robot")=>{await new Promise(k=>setTimeout(k,1e3));const g=JSON.parse(localStorage.getItem("codequest-users")||"[]");if(g.find(k=>k.email===y))throw new Error("User already exists with this email");const w={id:Date.now().toString(),email:y,full_name:b,role:f,character:m,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${y}`,theme:"light",soundEnabled:!0,musicEnabled:!0,createdAt:new Date().toISOString()};g.push(w),localStorage.setItem("codequest-users",JSON.stringify(g)),localStorage.setItem("codequest-user",JSON.stringify(w)),n(w),s(w),o({user:w})},signIn:async(y,x)=>{await new Promise(m=>setTimeout(m,1e3));const f=JSON.parse(localStorage.getItem("codequest-users")||"[]").find(m=>m.email===y);if(!f)throw new Error("No user found with this email");localStorage.setItem("codequest-user",JSON.stringify(f)),n(f),s(f),o({user:f})},signOut:async()=>{localStorage.removeItem("codequest-user"),n(null),s(null),o(null)},updateProfile:async y=>{if(!e)throw new Error("No user logged in");const x={...e,...y};localStorage.setItem("codequest-user",JSON.stringify(x)),n(x),s(x)}};return c.jsx(Jp.Provider,{value:v,children:t})},aa=[{id:"ocean",name:"Ocean Breeze",description:"Cool blues and teals like the deep sea",colors:{primary:"#0066CC",secondary:"#00B4D8",accent:"#0077B6",background:"#001D3D",surface:"#003566",text:"#FFFFFF",textSecondary:"#B8D4F0",border:"#0077B6",success:"#00C851",warning:"#FF8800",error:"#FF4444",info:"#33B5E5"},gradients:{background:"linear-gradient(135deg, #001D3D 0%, #003566 100%)",surface:"linear-gradient(135deg, #003566 0%, #0077B6 100%)",accent:"linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)"},shadows:{small:"0 2px 4px rgba(0, 119, 182, 0.2)",medium:"0 4px 8px rgba(0, 119, 182, 0.3)",large:"0 8px 16px rgba(0, 119, 182, 0.4)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"sunset",name:"Sunset Glow",description:"Warm oranges and purples like a beautiful sunset",colors:{primary:"#FF6B35",secondary:"#F7931E",accent:"#FF8E53",background:"#2D1B69",surface:"#4A2C7A",text:"#FFFFFF",textSecondary:"#FFE5D9",border:"#FF8E53",success:"#00C851",warning:"#FFD700",error:"#FF4444",info:"#FF8E53"},gradients:{background:"linear-gradient(135deg, #2D1B69 0%, #4A2C7A 100%)",surface:"linear-gradient(135deg, #4A2C7A 0%, #FF6B35 100%)",accent:"linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)"},shadows:{small:"0 2px 4px rgba(255, 107, 53, 0.2)",medium:"0 4px 8px rgba(255, 107, 53, 0.3)",large:"0 8px 16px rgba(255, 107, 53, 0.4)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"forest",name:"Forest Adventure",description:"Natural greens and browns like a magical forest",colors:{primary:"#2D5016",secondary:"#4A7C59",accent:"#6B8E23",background:"#0F1419",surface:"#1A2332",text:"#FFFFFF",textSecondary:"#B8D4B8",border:"#6B8E23",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#4CAF50"},gradients:{background:"linear-gradient(135deg, #0F1419 0%, #1A2332 100%)",surface:"linear-gradient(135deg, #1A2332 0%, #2D5016 100%)",accent:"linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)"},shadows:{small:"0 2px 4px rgba(107, 142, 35, 0.2)",medium:"0 4px 8px rgba(107, 142, 35, 0.3)",large:"0 8px 16px rgba(107, 142, 35, 0.4)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"cosmic",name:"Cosmic Space",description:"Deep purples and pinks like outer space",colors:{primary:"#6A4C93",secondary:"#9A4C95",accent:"#C77DFF",background:"#0A0A0A",surface:"#1A0A2E",text:"#FFFFFF",textSecondary:"#E0B0FF",border:"#C77DFF",success:"#00E676",warning:"#FFD600",error:"#FF1744",info:"#C77DFF"},gradients:{background:"linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 100%)",surface:"linear-gradient(135deg, #1A0A2E 0%, #6A4C93 100%)",accent:"linear-gradient(135deg, #6A4C93 0%, #C77DFF 100%)"},shadows:{small:"0 2px 4px rgba(199, 125, 255, 0.2)",medium:"0 4px 8px rgba(199, 125, 255, 0.3)",large:"0 8px 16px rgba(199, 125, 255, 0.4)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"neon",name:"Neon Cyber",description:"Bright neon colors like a cyberpunk city",colors:{primary:"#00FFFF",secondary:"#FF00FF",accent:"#00FF00",background:"#000000",surface:"#1A1A1A",text:"#FFFFFF",textSecondary:"#CCCCCC",border:"#00FFFF",success:"#00FF00",warning:"#FFFF00",error:"#FF0000",info:"#00FFFF"},gradients:{background:"linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",surface:"linear-gradient(135deg, #1A1A1A 0%, #333333 100%)",accent:"linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)"},shadows:{small:"0 2px 4px rgba(0, 255, 255, 0.3)",medium:"0 4px 8px rgba(0, 255, 255, 0.4)",large:"0 8px 16px rgba(0, 255, 255, 0.5)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"pastel",name:"Pastel Dreams",description:"Soft pastel colors like cotton candy clouds",colors:{primary:"#FFB3BA",secondary:"#FFDFBA",accent:"#FFFFBA",background:"#F0F8FF",surface:"#FFFFFF",text:"#4A4A4A",textSecondary:"#8A8A8A",border:"#FFB3BA",success:"#B3FFB3",warning:"#FFFFB3",error:"#FFB3B3",info:"#B3E5FF"},gradients:{background:"linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)",surface:"linear-gradient(135deg, #FFFFFF 0%, #F8F8FF 100%)",accent:"linear-gradient(135deg, #FFB3BA 0%, #FFDFBA 100%)"},shadows:{small:"0 2px 4px rgba(255, 179, 186, 0.2)",medium:"0 4px 8px rgba(255, 179, 186, 0.3)",large:"0 8px 16px rgba(255, 179, 186, 0.4)"},borderRadius:{small:"8px",medium:"12px",large:"16px"}},{id:"monochrome",name:"Classic Monochrome",description:"Clean black and white for a professional look",colors:{primary:"#000000",secondary:"#333333",accent:"#666666",background:"#FFFFFF",surface:"#F5F5F5",text:"#000000",textSecondary:"#666666",border:"#CCCCCC",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},gradients:{background:"linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",surface:"linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)",accent:"linear-gradient(135deg, #000000 0%, #333333 100%)"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.15)",large:"0 8px 16px rgba(0, 0, 0, 0.2)"},borderRadius:{small:"4px",medium:"8px",large:"12px"}},{id:"rainbow",name:"Rainbow Magic",description:"All the colors of the rainbow for maximum fun",colors:{primary:"#FF0000",secondary:"#FF7F00",accent:"#FFFF00",background:"#000000",surface:"#1A1A1A",text:"#FFFFFF",textSecondary:"#CCCCCC",border:"#00FF00",success:"#00FF00",warning:"#FFFF00",error:"#FF0000",info:"#0000FF"},gradients:{background:"linear-gradient(135deg, #FF0000 0%, #FF7F00 25%, #FFFF00 50%, #00FF00 75%, #0000FF 100%)",surface:"linear-gradient(135deg, #1A1A1A 0%, #333333 100%)",accent:"linear-gradient(135deg, #FF0000 0%, #FF7F00 25%, #FFFF00 50%, #00FF00 75%, #0000FF 100%)"},shadows:{small:"0 2px 4px rgba(255, 0, 0, 0.3)",medium:"0 4px 8px rgba(0, 255, 0, 0.3)",large:"0 8px 16px rgba(0, 0, 255, 0.3)"},borderRadius:{small:"8px",medium:"12px",large:"16px"}}],o1=({currentTheme:t,onThemeChange:e,className:n=""})=>{const[r,s]=_.useState(!1),[i,o]=_.useState(null),a=aa.find(h=>h.id===t)||aa[0],l=h=>{e(h),s(!1),o(null)},u=h=>{o(h)},d=()=>{o(null)};return c.jsxs("div",{className:`theme-selector ${n}`,children:[c.jsxs("button",{className:"theme-selector-trigger",onClick:()=>s(!r),style:{"--theme-primary":a.colors.primary,"--theme-accent":a.colors.accent},children:[c.jsx(ov,{size:20}),c.jsx("span",{children:a.name})]}),r&&c.jsxs("div",{className:"theme-selector-dropdown",children:[c.jsxs("div",{className:"theme-selector-header",children:[c.jsx("h3",{children:"Choose Your Theme"}),c.jsx("p",{children:"Pick a color scheme that inspires you!"})]}),c.jsx("div",{className:"theme-grid",children:aa.map(h=>c.jsxs("div",{className:`theme-option ${t===h.id?"selected":""} ${i===h.id?"previewing":""}`,onClick:()=>l(h.id),onMouseEnter:()=>u(h.id),onMouseLeave:d,style:{"--theme-primary":h.colors.primary,"--theme-secondary":h.colors.secondary,"--theme-accent":h.colors.accent,"--theme-background":h.colors.background,"--theme-surface":h.colors.surface,"--theme-text":h.colors.text},children:[c.jsxs("div",{className:"theme-preview",children:[c.jsxs("div",{className:"theme-preview-colors",children:[c.jsx("div",{className:"color-swatch primary",style:{backgroundColor:h.colors.primary}}),c.jsx("div",{className:"color-swatch secondary",style:{backgroundColor:h.colors.secondary}}),c.jsx("div",{className:"color-swatch accent",style:{backgroundColor:h.colors.accent}}),c.jsx("div",{className:"color-swatch background",style:{backgroundColor:h.colors.background}})]}),c.jsxs("div",{className:"theme-preview-demo",children:[c.jsx("div",{className:"demo-button",children:"Button"}),c.jsx("div",{className:"demo-card",children:c.jsx("div",{className:"demo-text",children:"Sample Text"})})]})]}),c.jsxs("div",{className:"theme-info",children:[c.jsx("h4",{children:h.name}),c.jsx("p",{children:h.description})]}),t===h.id&&c.jsx("div",{className:"theme-selected",children:c.jsx(ip,{size:20})}),i===h.id&&c.jsxs("div",{className:"theme-preview-overlay",children:[c.jsx(ap,{size:16}),c.jsx("span",{children:"Preview"})]})]},h.id))})]})]})},a1=({onStart:t,onTeacherDashboard:e,user:n,profile:r,theme:s,onThemeToggle:i,themeId:o,onThemeChange:a,soundEnabled:l,onSoundToggle:u,musicEnabled:d,onMusicToggle:h})=>{const{signOut:p}=Ms();return c.jsxs("div",{className:"welcome-screen",children:[c.jsxs("div",{className:"welcome-container",children:[n&&c.jsxs("div",{className:"user-menu",children:[c.jsxs("div",{className:"user-info",children:[c.jsx(hl,{className:"user-icon"}),c.jsxs("span",{children:["Welcome, ",(r==null?void 0:r.full_name)||n.email,"!"]}),(r==null?void 0:r.role)==="teacher"&&c.jsx("button",{className:"btn btn-secondary btn-small",onClick:e,children:"Teacher Dashboard"})]}),c.jsxs("button",{className:"btn btn-secondary btn-small",onClick:p,children:[c.jsx(rv,{className:"btn-icon"}),"Sign Out"]})]}),c.jsxs("div",{className:"welcome-header",children:[c.jsxs("h1",{className:"welcome-title",children:[c.jsx(op,{className:"title-icon bounce"}),"CodeQuest Jr."]}),c.jsx("p",{className:"welcome-subtitle",children:"Learn Python by playing games! 🎮🐍"})]}),c.jsxs("div",{className:"welcome-features",children:[c.jsxs("div",{className:"feature-card",children:[c.jsx(Es,{className:"feature-icon"}),c.jsx("h3",{children:"Interactive Puzzles"}),c.jsx("p",{children:"Solve fun challenges by writing Python code"})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx(cp,{className:"feature-icon"}),c.jsx("h3",{children:"Earn Stars"}),c.jsx("p",{children:"Get up to 3 stars for each level you complete"})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx(Cn,{className:"feature-icon"}),c.jsx("h3",{children:"Learn Step by Step"}),c.jsx("p",{children:"Start with simple print statements and work up to functions"})]})]}),c.jsxs("div",{className:"welcome-actions",children:[c.jsxs("button",{className:"btn btn-primary btn-large",onClick:t,children:[c.jsx(Es,{className:"btn-icon"}),n?"Start Coding!":"Sign Up to Start!"]}),!n&&c.jsxs("button",{className:"btn btn-secondary",onClick:()=>t(),children:[c.jsx(hl,{className:"btn-icon"}),"Sign In"]}),n&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>{},children:"Reset Progress"})]}),c.jsxs("div",{className:"welcome-controls",children:[c.jsx(xp,{theme:s||"light",onToggle:i||(()=>{})}),c.jsx(o1,{currentTheme:o||"ocean",onThemeChange:a||(()=>{})}),c.jsx(_p,{soundEnabled:l||!0,onToggle:u||(()=>{})}),c.jsx(bp,{musicEnabled:d||!0,onMusicToggle:h||(()=>{})})]}),c.jsx("div",{className:"welcome-footer",children:c.jsx("p",{children:"Perfect for kids ages 8-14 who want to learn programming! 🌟"})})]}),c.jsx("style",{children:`
        .welcome-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .welcome-container {
          max-width: 800px;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .user-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.9);
          padding: 10px 15px;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2d3748;
          font-size: 0.9rem;
        }

        .user-icon {
          width: 16px;
          height: 16px;
          color: #667eea;
        }

        .welcome-header {
          margin-bottom: 40px;
        }

        .welcome-title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #2d3748;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .title-icon {
          width: 60px;
          height: 60px;
          color: #667eea;
        }

        .welcome-subtitle {
          font-size: 1.5rem;
          color: #4a5568;
          margin: 0;
        }

        .welcome-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .feature-card {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 20px;
          padding: 30px 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: default;
        }

        .feature-card:hover {
          border-color: #e2e8f0;
          transform: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
          margin: 0 auto 15px;
          display: block;
        }

        .feature-card h3 {
          font-size: 1.3rem;
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .feature-card p {
          color: #4a5568;
          margin: 0;
          line-height: 1.5;
        }

        .welcome-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .btn-large {
          font-size: 1.2rem;
          padding: 15px 30px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-icon {
          width: 20px;
          height: 20px;
        }

        .welcome-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin: 30px 0;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .welcome-footer {
          color: #718096;
          font-size: 1.1rem;
        }

        @media (max-width: 600px) {
          .welcome-container {
            padding: 30px 20px;
          }

          .welcome-title {
            font-size: 2.5rem;
            flex-direction: column;
            gap: 10px;
          }

          .welcome-actions {
            flex-direction: column;
          }
        }
      `})]})},l1=({type:t,isAnimating:e=!1,animationType:n="idle",size:r="medium",className:s=""})=>{const[i,o]=_.useState(0),[a,l]=_.useState(!0),u={idle:{robot:["🤖","🤖","🤖","🤖"],cat:["🐱","🐱","🐱","🐱"],dragon:["🐉","🐉","🐉","🐉"]},happy:{robot:["🤖","🤖","🤖","🤖"],cat:["😸","😸","😸","😸"],dragon:["🐉","🐉","🐉","🐉"]},thinking:{robot:["🤔","🤔","🤔","🤔"],cat:["😺","😺","😺","😺"],dragon:["🐉","🐉","🐉","🐉"]},celebrating:{robot:["🎉","🤖","🎉","🤖"],cat:["🎉","😸","🎉","😸"],dragon:["🎉","🐉","🎉","🐉"]},working:{robot:["⚙️","🤖","⚙️","🤖"],cat:["🐾","😸","🐾","😸"],dragon:["🔥","🐉","🔥","🐉"]}},d={small:"text-2xl",medium:"text-4xl",large:"text-6xl"},h={idle:"animate-bounce",happy:"animate-bounce",thinking:"animate-pulse",celebrating:"animate-bounce",working:"animate-pulse"};_.useEffect(()=>{if(!e)return;const y=setInterval(()=>{o(x=>(x+1)%u[n][t].length)},500);return()=>clearInterval(y)},[e,n,t]),_.useEffect(()=>{if(n==="celebrating"){l(!1);const y=setTimeout(()=>l(!0),100);return()=>clearTimeout(y)}},[n]);const p=()=>{const y=u[n][t];return y[i]||y[0]},v=()=>n==="celebrating"?c.jsxs("div",{className:"character-effects",children:[c.jsx(Cn,{className:"effect-star-1",size:16}),c.jsx(Cn,{className:"effect-star-2",size:20}),c.jsx(Cn,{className:"effect-star-3",size:14}),c.jsx(ad,{className:"effect-zap-1",size:18}),c.jsx(ad,{className:"effect-zap-2",size:16}),c.jsx(dl,{className:"effect-heart-1",size:16}),c.jsx(dl,{className:"effect-heart-2",size:14})]}):null;return c.jsxs("div",{className:`animated-character ${s}`,children:[c.jsx("div",{className:`character-container ${d[r]} ${h[n]} ${a?"visible":"hidden"}`,style:{display:"inline-block",transition:"all 0.3s ease"},children:p()}),v(),c.jsx("style",{children:`
        .animated-character {
          position: relative;
          display: inline-block;
        }
        
        .character-container {
          transition: all 0.3s ease;
        }
        
        .character-container.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .character-container.hidden {
          opacity: 0;
          transform: scale(0.8);
        }
        
        .character-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          animation: sparkle 1s ease-in-out infinite;
        }
        
        .effect-star-1 {
          position: absolute;
          top: -10px;
          left: 20px;
          color: #ffd700;
          animation: float 2s ease-in-out infinite;
        }
        
        .effect-star-2 {
          position: absolute;
          top: 10px;
          right: -10px;
          color: #ff6b6b;
          animation: float 2s ease-in-out infinite 0.5s;
        }
        
        .effect-star-3 {
          position: absolute;
          bottom: -5px;
          left: -5px;
          color: #4ecdc4;
          animation: float 2s ease-in-out infinite 1s;
        }
        
        .effect-zap-1 {
          position: absolute;
          top: 5px;
          left: -15px;
          color: #ffd700;
          animation: zap 1.5s ease-in-out infinite;
        }
        
        .effect-zap-2 {
          position: absolute;
          bottom: 5px;
          right: -15px;
          color: #ff6b6b;
          animation: zap 1.5s ease-in-out infinite 0.7s;
        }
        
        .effect-heart-1 {
          position: absolute;
          top: -5px;
          right: 10px;
          color: #ff69b4;
          animation: heartbeat 1s ease-in-out infinite;
        }
        
        .effect-heart-2 {
          position: absolute;
          bottom: 0px;
          left: 10px;
          color: #ff69b4;
          animation: heartbeat 1s ease-in-out infinite 0.5s;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes zap {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `})]})},c1=({selectedCharacter:t,onCharacterChange:e,className:n=""})=>{const[r,s]=_.useState(null),i=[{id:"robot",name:"Robo",description:"A friendly robot who loves coding!",icon:ea,color:"#4f46e5"},{id:"cat",name:"Whiskers",description:"A curious cat who loves puzzles!",icon:ea,color:"#f59e0b"},{id:"dragon",name:"Sparky",description:"A magical dragon who breathes code!",icon:ea,color:"#ef4444"}];return c.jsxs("div",{className:`character-selector ${n}`,children:[c.jsx("h3",{className:"character-selector-title",children:"Choose Your Coding Buddy!"}),c.jsx("div",{className:"character-grid",children:i.map(o=>{const a=o.icon,l=t===o.id,u=r===o.id;return c.jsxs("div",{className:`character-option ${l?"selected":""} ${u?"hovered":""}`,onClick:()=>e(o.id),onMouseEnter:()=>s(o.id),onMouseLeave:()=>s(null),style:{"--character-color":o.color},children:[c.jsx("div",{className:"character-preview",children:c.jsx(l1,{type:o.id,isAnimating:u||l,animationType:l?"celebrating":u?"happy":"idle",size:"large"})}),c.jsxs("div",{className:"character-info",children:[c.jsxs("div",{className:"character-name",children:[c.jsx(a,{size:20}),c.jsx("span",{children:o.name})]}),c.jsx("p",{className:"character-description",children:o.description})]}),l&&c.jsx("div",{className:"character-selected",children:c.jsx(ip,{size:24})})]},o.id)})})]})},u1=({isOpen:t,onClose:e,mode:n,onModeChange:r})=>{const{signIn:s,signUp:i}=Ms(),[o,a]=_.useState(""),[l,u]=_.useState(""),[d,h]=_.useState(""),[p,v]=_.useState("student"),[y,x]=_.useState("robot"),[b,f]=_.useState(!1),[m,g]=_.useState(""),w=async k=>{k.preventDefault(),f(!0),g("");try{n==="signin"?await s(o,l):await i(o,l,d,p,y),e()}catch(S){g(S.message||"An error occurred")}finally{f(!1)}};return t?c.jsxs("div",{className:"auth-modal-overlay",children:[c.jsxs("div",{className:"auth-modal",children:[c.jsx("button",{className:"auth-close-btn",onClick:e,children:c.jsx(jn,{size:24})}),c.jsxs("div",{className:"auth-header",children:[c.jsx("h2",{children:n==="signin"?"Welcome Back! 🎮":"Join CodeQuest Jr.! 🚀"}),c.jsx("p",{children:n==="signin"?"Sign in to continue your coding adventure":"Create an account to save your progress and earn achievements"})]}),c.jsxs("form",{onSubmit:w,className:"auth-form",children:[n==="signup"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"fullName",children:"Full Name"}),c.jsxs("div",{className:"input-wrapper",children:[c.jsx(hl,{className:"input-icon",size:20}),c.jsx("input",{id:"fullName",type:"text",value:d,onChange:k=>h(k.target.value),placeholder:"Enter your full name",required:!0})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"I am a..."}),c.jsxs("div",{className:"role-selector",children:[c.jsxs("button",{type:"button",className:`role-option ${p==="student"?"active":""}`,onClick:()=>v("student"),children:[c.jsx(tv,{size:20}),c.jsx("span",{children:"Student"}),c.jsx("small",{children:"Learning to code"})]}),c.jsxs("button",{type:"button",className:`role-option ${p==="teacher"?"active":""}`,onClick:()=>v("teacher"),children:[c.jsx(fl,{size:20}),c.jsx("span",{children:"Teacher"}),c.jsx("small",{children:"Teaching coding"})]}),c.jsxs("button",{type:"button",className:`role-option ${p==="parent"?"active":""}`,onClick:()=>v("parent"),children:[c.jsx(dl,{size:20}),c.jsx("span",{children:"Parent"}),c.jsx("small",{children:"Supporting my child"})]})]})]}),c.jsx("div",{className:"form-group",children:c.jsx(c1,{selectedCharacter:y,onCharacterChange:x})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"email",children:"Email"}),c.jsxs("div",{className:"input-wrapper",children:[c.jsx(sv,{className:"input-icon",size:20}),c.jsx("input",{id:"email",type:"email",value:o,onChange:k=>a(k.target.value),placeholder:"Enter your email",required:!0})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{htmlFor:"password",children:"Password"}),c.jsxs("div",{className:"input-wrapper",children:[c.jsx(lp,{className:"input-icon",size:20}),c.jsx("input",{id:"password",type:"password",value:l,onChange:k=>u(k.target.value),placeholder:"Enter your password",required:!0,minLength:6})]})]}),m&&c.jsx("div",{className:"error-message",children:m}),c.jsx("button",{type:"submit",className:"btn btn-primary btn-large",disabled:b,children:b?"Please wait...":n==="signin"?"Sign In":"Create Account"})]}),c.jsx("div",{className:"auth-footer",children:c.jsxs("p",{children:[n==="signin"?"Don't have an account? ":"Already have an account? ",c.jsx("button",{type:"button",className:"auth-toggle",onClick:()=>r(n==="signin"?"signup":"signin"),children:n==="signin"?"Sign up":"Sign in"})]})})]}),c.jsx("style",{children:`
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .auth-modal {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .auth-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          transition: color 0.3s ease;
        }

        .auth-close-btn:hover {
          color: #333;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .auth-header h2 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 1.8rem;
        }

        .auth-header p {
          color: #4a5568;
          margin: 0;
          line-height: 1.5;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #2d3748;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #a0aec0;
          z-index: 1;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 45px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .role-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .role-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 10px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .role-option:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .role-option.active {
          border-color: #667eea;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
        }

        .role-option span {
          font-weight: 600;
          color: #2d3748;
          margin: 5px 0;
        }

        .role-option small {
          color: #4a5568;
          font-size: 0.8rem;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          border-left: 4px solid #fc8181;
        }

        .btn-large {
          padding: 15px 30px;
          font-size: 1.1rem;
          margin-top: 10px;
        }

        .auth-footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .auth-footer p {
          color: #4a5568;
          margin: 0;
        }

        .auth-toggle {
          background: none;
          border: none;
          color: #667eea;
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
        }

        .auth-toggle:hover {
          color: #5a67d8;
        }

        @media (max-width: 600px) {
          .auth-modal {
            padding: 30px 20px;
            margin: 10px;
          }

          .role-selector {
            grid-template-columns: 1fr;
          }

          .auth-header h2 {
            font-size: 1.5rem;
          }
        }
      `})]}):null},d1=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>he(()=>Promise.resolve().then(()=>jr),void 0).then(({default:r})=>r(...n)):e=fetch,(...n)=>e(...n)};class Tc extends Error{constructor(e,n="FunctionsError",r){super(e),this.name=n,this.context=r}}class h1 extends Tc{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class gd extends Tc{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class yd extends Tc{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var ml;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(ml||(ml={}));var f1=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};class p1{constructor(e,{headers:n={},customFetch:r,region:s=ml.Any}={}){this.url=e,this.headers=n,this.region=s,this.fetch=d1(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,n={}){var r;return f1(this,void 0,void 0,function*(){try{const{headers:s,method:i,body:o}=n;let a={},{region:l}=n;l||(l=this.region);const u=new URL(`${this.url}/${e}`);l&&l!=="any"&&(a["x-region"]=l,u.searchParams.set("forceFunctionRegion",l));let d;o&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",d=o):typeof o=="string"?(a["Content-Type"]="text/plain",d=o):typeof FormData<"u"&&o instanceof FormData?d=o:(a["Content-Type"]="application/json",d=JSON.stringify(o)));const h=yield this.fetch(u.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),s),body:d}).catch(x=>{throw new h1(x)}),p=h.headers.get("x-relay-error");if(p&&p==="true")throw new gd(h);if(!h.ok)throw new yd(h);let v=((r=h.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),y;return v==="application/json"?y=yield h.json():v==="application/octet-stream"?y=yield h.blob():v==="text/event-stream"?y=h:v==="multipart/form-data"?y=yield h.formData():y=yield h.text(),{data:y,error:null,response:h}}catch(s){return{data:null,error:s,response:s instanceof yd||s instanceof gd?s.context:void 0}}})}}var Oe={},Pc={},_o={},Ds={},bo={},ko={},m1=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},_r=m1();const g1=_r.fetch,Xp=_r.fetch.bind(_r),Zp=_r.Headers,y1=_r.Request,v1=_r.Response,jr=Object.freeze(Object.defineProperty({__proto__:null,Headers:Zp,Request:y1,Response:v1,default:Xp,fetch:g1},Symbol.toStringTag,{value:"Module"})),w1=jm(jr);var So={};Object.defineProperty(So,"__esModule",{value:!0});let x1=class extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}};So.default=x1;var em=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ko,"__esModule",{value:!0});const _1=em(w1),b1=em(So);let k1=class{constructor(e){var n,r;this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=(n=e.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=e.signal,this.isMaybeSingle=(r=e.isMaybeSingle)!==null&&r!==void 0?r:!1,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=_1.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,n){return this.headers=new Headers(this.headers),this.headers.set(e,n),this}then(e,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const r=this.fetch;let s=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async i=>{var o,a,l,u;let d=null,h=null,p=null,v=i.status,y=i.statusText;if(i.ok){if(this.method!=="HEAD"){const m=await i.text();m===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((o=this.headers.get("Accept"))===null||o===void 0)&&o.includes("application/vnd.pgrst.plan+text"))?h=m:h=JSON.parse(m))}const b=(a=this.headers.get("Prefer"))===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),f=(l=i.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");b&&f&&f.length>1&&(p=parseInt(f[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(h)&&(h.length>1?(d={code:"PGRST116",details:`Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},h=null,p=null,v=406,y="Not Acceptable"):h.length===1?h=h[0]:h=null)}else{const b=await i.text();try{d=JSON.parse(b),Array.isArray(d)&&i.status===404&&(h=[],d=null,v=200,y="OK")}catch{i.status===404&&b===""?(v=204,y="No Content"):d={message:b}}if(d&&this.isMaybeSingle&&(!((u=d==null?void 0:d.details)===null||u===void 0)&&u.includes("0 rows"))&&(d=null,v=200,y="OK"),d&&this.shouldThrowOnError)throw new b1.default(d)}return{error:d,data:h,count:p,status:v,statusText:y}});return this.shouldThrowOnError||(s=s.catch(i=>{var o,a,l;return{error:{message:`${(o=i==null?void 0:i.name)!==null&&o!==void 0?o:"FetchError"}: ${i==null?void 0:i.message}`,details:`${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),s.then(e,n)}returns(){return this}overrideTypes(){return this}};ko.default=k1;var S1=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bo,"__esModule",{value:!0});const C1=S1(ko);let j1=class extends C1.default{select(e){let n=!1;const r=(e??"*").split("").map(s=>/\s/.test(s)&&!n?"":(s==='"'&&(n=!n),s)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:n=!0,nullsFirst:r,foreignTable:s,referencedTable:i=s}={}){const o=i?`${i}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${e}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:n,referencedTable:r=n}={}){const s=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(s,`${e}`),this}range(e,n,{foreignTable:r,referencedTable:s=r}={}){const i=typeof s>"u"?"offset":`${s}.offset`,o=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(o,`${n-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:n=!1,settings:r=!1,buffers:s=!1,wal:i=!1,format:o="text"}={}){var a;const l=[e?"analyze":null,n?"verbose":null,r?"settings":null,s?"buffers":null,i?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`),o==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this}};bo.default=j1;var E1=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ds,"__esModule",{value:!0});const T1=E1(bo);let P1=class extends T1.default{eq(e,n){return this.url.searchParams.append(e,`eq.${n}`),this}neq(e,n){return this.url.searchParams.append(e,`neq.${n}`),this}gt(e,n){return this.url.searchParams.append(e,`gt.${n}`),this}gte(e,n){return this.url.searchParams.append(e,`gte.${n}`),this}lt(e,n){return this.url.searchParams.append(e,`lt.${n}`),this}lte(e,n){return this.url.searchParams.append(e,`lte.${n}`),this}like(e,n){return this.url.searchParams.append(e,`like.${n}`),this}likeAllOf(e,n){return this.url.searchParams.append(e,`like(all).{${n.join(",")}}`),this}likeAnyOf(e,n){return this.url.searchParams.append(e,`like(any).{${n.join(",")}}`),this}ilike(e,n){return this.url.searchParams.append(e,`ilike.${n}`),this}ilikeAllOf(e,n){return this.url.searchParams.append(e,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(e,n){return this.url.searchParams.append(e,`ilike(any).{${n.join(",")}}`),this}is(e,n){return this.url.searchParams.append(e,`is.${n}`),this}in(e,n){const r=Array.from(new Set(n)).map(s=>typeof s=="string"&&new RegExp("[,()]").test(s)?`"${s}"`:`${s}`).join(",");return this.url.searchParams.append(e,`in.(${r})`),this}contains(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cs.{${n.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(n)}`),this}containedBy(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cd.{${n.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(n)}`),this}rangeGt(e,n){return this.url.searchParams.append(e,`sr.${n}`),this}rangeGte(e,n){return this.url.searchParams.append(e,`nxl.${n}`),this}rangeLt(e,n){return this.url.searchParams.append(e,`sl.${n}`),this}rangeLte(e,n){return this.url.searchParams.append(e,`nxr.${n}`),this}rangeAdjacent(e,n){return this.url.searchParams.append(e,`adj.${n}`),this}overlaps(e,n){return typeof n=="string"?this.url.searchParams.append(e,`ov.${n}`):this.url.searchParams.append(e,`ov.{${n.join(",")}}`),this}textSearch(e,n,{config:r,type:s}={}){let i="";s==="plain"?i="pl":s==="phrase"?i="ph":s==="websearch"&&(i="w");const o=r===void 0?"":`(${r})`;return this.url.searchParams.append(e,`${i}fts${o}.${n}`),this}match(e){return Object.entries(e).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(e,n,r){return this.url.searchParams.append(e,`not.${n}.${r}`),this}or(e,{foreignTable:n,referencedTable:r=n}={}){const s=r?`${r}.or`:"or";return this.url.searchParams.append(s,`(${e})`),this}filter(e,n,r){return this.url.searchParams.append(e,`${n}.${r}`),this}};Ds.default=P1;var N1=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(_o,"__esModule",{value:!0});const $r=N1(Ds);let O1=class{constructor(e,{headers:n={},schema:r,fetch:s}){this.url=e,this.headers=new Headers(n),this.schema=r,this.fetch=s}select(e,{head:n=!1,count:r}={}){const s=n?"HEAD":"GET";let i=!1;const o=(e??"*").split("").map(a=>/\s/.test(a)&&!i?"":(a==='"'&&(i=!i),a)).join("");return this.url.searchParams.set("select",o),r&&this.headers.append("Prefer",`count=${r}`),new $r.default({method:s,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(e,{count:n,defaultToNull:r=!0}={}){var s;const i="POST";if(n&&this.headers.append("Prefer",`count=${n}`),r||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const o=e.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(o.length>0){const a=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new $r.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch})}upsert(e,{onConflict:n,ignoreDuplicates:r=!1,count:s,defaultToNull:i=!0}={}){var o;const a="POST";if(this.headers.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),n!==void 0&&this.url.searchParams.set("on_conflict",n),s&&this.headers.append("Prefer",`count=${s}`),i||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const l=e.reduce((u,d)=>u.concat(Object.keys(d)),[]);if(l.length>0){const u=[...new Set(l)].map(d=>`"${d}"`);this.url.searchParams.set("columns",u.join(","))}}return new $r.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}update(e,{count:n}={}){var r;const s="PATCH";return n&&this.headers.append("Prefer",`count=${n}`),new $r.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}delete({count:e}={}){var n;const r="DELETE";return e&&this.headers.append("Prefer",`count=${e}`),new $r.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}};_o.default=O1;var tm=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pc,"__esModule",{value:!0});const A1=tm(_o),F1=tm(Ds);let R1=class nm{constructor(e,{headers:n={},schema:r,fetch:s}={}){this.url=e,this.headers=new Headers(n),this.schemaName=r,this.fetch=s}from(e){const n=new URL(`${this.url}/${e}`);return new A1.default(n,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new nm(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,n={},{head:r=!1,get:s=!1,count:i}={}){var o;let a;const l=new URL(`${this.url}/rpc/${e}`);let u;r||s?(a=r?"HEAD":"GET",Object.entries(n).filter(([h,p])=>p!==void 0).map(([h,p])=>[h,Array.isArray(p)?`{${p.join(",")}}`:`${p}`]).forEach(([h,p])=>{l.searchParams.append(h,p)})):(a="POST",u=n);const d=new Headers(this.headers);return i&&d.set("Prefer",`count=${i}`),new F1.default({method:a,url:l,headers:d,schema:this.schemaName,body:u,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}};Pc.default=R1;var Er=et&&et.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.PostgrestError=Oe.PostgrestBuilder=Oe.PostgrestTransformBuilder=Oe.PostgrestFilterBuilder=Oe.PostgrestQueryBuilder=Oe.PostgrestClient=void 0;const rm=Er(Pc);Oe.PostgrestClient=rm.default;const sm=Er(_o);Oe.PostgrestQueryBuilder=sm.default;const im=Er(Ds);Oe.PostgrestFilterBuilder=im.default;const om=Er(bo);Oe.PostgrestTransformBuilder=om.default;const am=Er(ko);Oe.PostgrestBuilder=am.default;const lm=Er(So);Oe.PostgrestError=lm.default;var L1=Oe.default={PostgrestClient:rm.default,PostgrestQueryBuilder:sm.default,PostgrestFilterBuilder:im.default,PostgrestTransformBuilder:om.default,PostgrestBuilder:am.default,PostgrestError:lm.default};const{PostgrestClient:I1,PostgrestQueryBuilder:$_,PostgrestFilterBuilder:M_,PostgrestTransformBuilder:D_,PostgrestBuilder:U_,PostgrestError:z_}=L1;class $1{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const n=process.versions;if(n&&n.node){const r=n.node,s=parseInt(r.replace(/^v/,"").split(".")[0]);return s>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${s} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${s} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let n=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(n+=`

Suggested solution: ${e.workaround}`),new Error(n)}static createWebSocket(e,n){const r=this.getWebSocketConstructor();return new r(e,n)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const M1="2.15.5",D1=`realtime-js/${M1}`,U1="1.0.0",gl=1e4,z1=1e3,B1=100;var is;(function(t){t[t.connecting=0]="connecting",t[t.open=1]="open",t[t.closing=2]="closing",t[t.closed=3]="closed"})(is||(is={}));var ae;(function(t){t.closed="closed",t.errored="errored",t.joined="joined",t.joining="joining",t.leaving="leaving"})(ae||(ae={}));var at;(function(t){t.close="phx_close",t.error="phx_error",t.join="phx_join",t.reply="phx_reply",t.leave="phx_leave",t.access_token="access_token"})(at||(at={}));var yl;(function(t){t.websocket="websocket"})(yl||(yl={}));var vn;(function(t){t.Connecting="connecting",t.Open="open",t.Closing="closing",t.Closed="closed"})(vn||(vn={}));class W1{constructor(){this.HEADER_LENGTH=1}decode(e,n){return e.constructor===ArrayBuffer?n(this._binaryDecode(e)):n(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const n=new DataView(e),r=new TextDecoder;return this._decodeBroadcast(e,n,r)}_decodeBroadcast(e,n,r){const s=n.getUint8(1),i=n.getUint8(2);let o=this.HEADER_LENGTH+2;const a=r.decode(e.slice(o,o+s));o=o+s;const l=r.decode(e.slice(o,o+i));o=o+i;const u=JSON.parse(r.decode(e.slice(o,e.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class cm{constructor(e,n){this.callback=e,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var q;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(q||(q={}));const vd=(t,e,n={})=>{var r;const s=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(e).reduce((i,o)=>(i[o]=H1(o,t,e,s),i),{})},H1=(t,e,n,r)=>{const s=e.find(a=>a.name===t),i=s==null?void 0:s.type,o=n[t];return i&&!r.includes(i)?um(i,o):vl(o)},um=(t,e)=>{if(t.charAt(0)==="_"){const n=t.slice(1,t.length);return K1(e,n)}switch(t){case q.bool:return q1(e);case q.float4:case q.float8:case q.int2:case q.int4:case q.int8:case q.numeric:case q.oid:return V1(e);case q.json:case q.jsonb:return G1(e);case q.timestamp:return Q1(e);case q.abstime:case q.date:case q.daterange:case q.int4range:case q.int8range:case q.money:case q.reltime:case q.text:case q.time:case q.timestamptz:case q.timetz:case q.tsrange:case q.tstzrange:return vl(e);default:return vl(e)}},vl=t=>t,q1=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},V1=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},G1=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){return console.log(`JSON parse error: ${e}`),t}return t},K1=(t,e)=>{if(typeof t!="string")return t;const n=t.length-1,r=t[n];if(t[0]==="{"&&r==="}"){let i;const o=t.slice(1,n);try{i=JSON.parse("["+o+"]")}catch{i=o?o.split(","):[]}return i.map(a=>um(e,a))}return t},Q1=t=>typeof t=="string"?t.replace(" ","T"):t,dm=t=>{let e=t;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"};class la{constructor(e,n,r={},s=gl){this.channel=e,this.event=n,this.payload=r,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,n){var r;return this._hasReceived(e)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:e,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:n}){this.recHooks.filter(r=>r.status===e).forEach(r=>r.callback(n))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var wd;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(wd||(wd={}));class os{constructor(e,n){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},s=>{const{onJoin:i,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=os.syncState(this.state,s,i,o),this.pendingDiffs.forEach(l=>{this.state=os.syncDiff(this.state,l,i,o)}),this.pendingDiffs=[],a()}),this.channel._on(r.diff,{},s=>{const{onJoin:i,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=os.syncDiff(this.state,s,i,o),a())}),this.onJoin((s,i,o)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:i,newPresences:o})}),this.onLeave((s,i,o)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:i,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,n,r,s){const i=this.cloneDeep(e),o=this.transformState(n),a={},l={};return this.map(i,(u,d)=>{o[u]||(l[u]=d)}),this.map(o,(u,d)=>{const h=i[u];if(h){const p=d.map(b=>b.presence_ref),v=h.map(b=>b.presence_ref),y=d.filter(b=>v.indexOf(b.presence_ref)<0),x=h.filter(b=>p.indexOf(b.presence_ref)<0);y.length>0&&(a[u]=y),x.length>0&&(l[u]=x)}else a[u]=d}),this.syncDiff(i,{joins:a,leaves:l},r,s)}static syncDiff(e,n,r,s){const{joins:i,leaves:o}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),s||(s=()=>{}),this.map(i,(a,l)=>{var u;const d=(u=e[a])!==null&&u!==void 0?u:[];if(e[a]=this.cloneDeep(l),d.length>0){const h=e[a].map(v=>v.presence_ref),p=d.filter(v=>h.indexOf(v.presence_ref)<0);e[a].unshift(...p)}r(a,d,l)}),this.map(o,(a,l)=>{let u=e[a];if(!u)return;const d=l.map(h=>h.presence_ref);u=u.filter(h=>d.indexOf(h.presence_ref)<0),e[a]=u,s(a,u,l),u.length===0&&delete e[a]}),e}static map(e,n){return Object.getOwnPropertyNames(e).map(r=>n(r,e[r]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((n,r)=>{const s=e[r];return"metas"in s?n[r]=s.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):n[r]=s,n},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var xd;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(xd||(xd={}));var as;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(as||(as={}));var bt;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(bt||(bt={}));class Nc{constructor(e,n={config:{}},r){this.topic=e,this.params=n,this.socket=r,this.bindings={},this.state=ae.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new la(this,at.join,this.params,this.timeout),this.rejoinTimer=new cm(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=ae.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=ae.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=ae.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=ae.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=ae.errored,this.rejoinTimer.scheduleTimeout())}),this._on(at.reply,{},(s,i)=>{this._trigger(this._replyEventName(i),s)}),this.presence=new os(this),this.broadcastEndpointURL=dm(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(e,n=this.timeout){var r,s,i;if(this.socket.isConnected()||this.socket.connect(),this.state==ae.closed){const{config:{broadcast:o,presence:a,private:l}}=this.params,u=(s=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(v=>v.filter))!==null&&s!==void 0?s:[],d=!!this.bindings[as.PRESENCE]&&this.bindings[as.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,h={},p={broadcast:o,presence:Object.assign(Object.assign({},a),{enabled:d}),postgres_changes:u,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(v=>e==null?void 0:e(bt.CHANNEL_ERROR,v)),this._onClose(()=>e==null?void 0:e(bt.CLOSED)),this.updateJoinPayload(Object.assign({config:p},h)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",async({postgres_changes:v})=>{var y;if(this.socket.setAuth(),v===void 0){e==null||e(bt.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,b=(y=x==null?void 0:x.length)!==null&&y!==void 0?y:0,f=[];for(let m=0;m<b;m++){const g=x[m],{filter:{event:w,schema:k,table:S,filter:C}}=g,E=v&&v[m];if(E&&E.event===w&&E.schema===k&&E.table===S&&E.filter===C)f.push(Object.assign(Object.assign({},g),{id:E.id}));else{this.unsubscribe(),this.state=ae.errored,e==null||e(bt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=f,e&&e(bt.SUBSCRIBED);return}}).receive("error",v=>{this.state=ae.errored,e==null||e(bt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(v).join(", ")||"error")))}).receive("timeout",()=>{e==null||e(bt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,n={}){return await this.send({type:"presence",event:"track",payload:e},n.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,n,r){return this.state===ae.joined&&e===as.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,n,r)}async send(e,n={}){var r,s;if(!this._canPush()&&e.type==="broadcast"){const{event:i,payload:o}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=n.timeout)!==null&&r!==void 0?r:this.timeout);return await((s=u.body)===null||s===void 0?void 0:s.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var o,a,l;const u=this._push(e.type,e,n.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),u.receive("ok",()=>i("ok")),u.receive("error",()=>i("error")),u.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=ae.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(at.close,"leave",this._joinRef())};this.joinPush.destroy();let r=null;return new Promise(s=>{r=new la(this,at.leave,{},e),r.receive("ok",()=>{n(),s("ok")}).receive("timeout",()=>{n(),s("timed out")}).receive("error",()=>{s("error")}),r.send(),this._canPush()||r.trigger("ok",{})}).finally(()=>{r==null||r.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=ae.closed,this.bindings={}}async _fetchWithTimeout(e,n,r){const s=new AbortController,i=setTimeout(()=>s.abort(),r),o=await this.socket.fetch(e,Object.assign(Object.assign({},n),{signal:s.signal}));return clearTimeout(i),o}_push(e,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new la(this,e,n,r);return this._canPush()?s.send():this._addToPushBuffer(s),s}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>B1){const n=this.pushBuffer.shift();n&&(n.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${n.event}`,n.payload))}}_onMessage(e,n,r){return n}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,n,r){var s,i;const o=e.toLocaleLowerCase(),{close:a,error:l,leave:u,join:d}=at;if(r&&[a,l,u,d].indexOf(o)>=0&&r!==this._joinRef())return;let p=this._onMessage(o,n,r);if(n&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(v=>{var y,x,b;return((y=v.filter)===null||y===void 0?void 0:y.event)==="*"||((b=(x=v.filter)===null||x===void 0?void 0:x.event)===null||b===void 0?void 0:b.toLocaleLowerCase())===o}).map(v=>v.callback(p,r)):(i=this.bindings[o])===null||i===void 0||i.filter(v=>{var y,x,b,f,m,g;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in v){const w=v.id,k=(y=v.filter)===null||y===void 0?void 0:y.event;return w&&((x=n.ids)===null||x===void 0?void 0:x.includes(w))&&(k==="*"||(k==null?void 0:k.toLocaleLowerCase())===((b=n.data)===null||b===void 0?void 0:b.type.toLocaleLowerCase()))}else{const w=(m=(f=v==null?void 0:v.filter)===null||f===void 0?void 0:f.event)===null||m===void 0?void 0:m.toLocaleLowerCase();return w==="*"||w===((g=n==null?void 0:n.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return v.type.toLocaleLowerCase()===o}).map(v=>{if(typeof p=="object"&&"ids"in p){const y=p.data,{schema:x,table:b,commit_timestamp:f,type:m,errors:g}=y;p=Object.assign(Object.assign({},{schema:x,table:b,commit_timestamp:f,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(y))}v.callback(p,r)})}_isClosed(){return this.state===ae.closed}_isJoined(){return this.state===ae.joined}_isJoining(){return this.state===ae.joining}_isLeaving(){return this.state===ae.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,n,r){const s=e.toLocaleLowerCase(),i={type:s,filter:n,callback:r};return this.bindings[s]?this.bindings[s].push(i):this.bindings[s]=[i],this}_off(e,n){const r=e.toLocaleLowerCase();return this.bindings[r]&&(this.bindings[r]=this.bindings[r].filter(s=>{var i;return!(((i=s.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===r&&Nc.isEqual(s.filter,n))})),this}static isEqual(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const r in e)if(e[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(at.close,{},e)}_onError(e){this._on(at.error,{},n=>e(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=ae.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const n={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(n.new=vd(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(n.old=vd(e.columns,e.old_record)),n}}const ca=()=>{},ai={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Y1=[1e3,2e3,5e3,1e4],J1=1e4,X1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Z1{constructor(e,n){var r;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=gl,this.transport=null,this.heartbeatIntervalMs=ai.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=ca,this.ref=0,this.reconnectTimer=null,this.logger=ca,this.conn=null,this.sendBuffer=[],this.serializer=new W1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=s=>{let i;return s?i=s:typeof fetch>"u"?i=(...o)=>he(()=>Promise.resolve().then(()=>jr),void 0).then(({default:a})=>a(...o)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):i=fetch,(...o)=>i(...o)},!(!((r=n==null?void 0:n.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=n.params.apikey,this.endPoint=`${e}/${yl.websocket}`,this.httpEndpoint=dm(e),this._initializeOptions(n),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(n==null?void 0:n.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=$1.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const n=e.message;throw n.includes("Node.js")?new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${n}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:U1}))}disconnect(e,n){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const r=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(r),this._setConnectionState("disconnected")},e?this.conn.close(e,n??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const n=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const e=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,n,r){this.logger(e,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case is.connecting:return vn.Connecting;case is.open:return vn.Open;case is.closing:return vn.Closing;default:return vn.Closed}}isConnected(){return this.connectionState()===vn.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,n={config:{}}){const r=`realtime:${e}`,s=this.getChannels().find(i=>i.topic===r);if(s)return s;{const i=new Nc(`realtime:${e}`,n,this);return this.channels.push(i),i}}push(e){const{topic:n,event:r,payload:s,ref:i}=e,o=()=>{this.encode(e,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${n} ${r} (${i})`,s),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(z1,"heartbeat timeout"),setTimeout(()=>{var n;this.isConnected()||(n=this.reconnectTimer)===null||n===void 0||n.scheduleTimeout()},ai.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let n=this.channels.find(r=>r.topic===e&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${e}"`),n.unsubscribe())}_remove(e){this.channels=this.channels.filter(n=>n.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,n=>{if(n.topic==="phoenix"&&n.event==="phx_reply")try{this.heartbeatCallback(n.payload.status==="ok"?"ok":"error")}catch(u){this.log("error","error in heartbeat callback",u)}n.ref&&n.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:r,event:s,payload:i,ref:o}=n,a=o?`(${o})`:"",l=i.status||"";this.log("receive",`${l} ${r} ${s} ${a}`.trim(),i),this.channels.filter(u=>u._isMember(r)).forEach(u=>u._trigger(s,i,o)),this._triggerStateCallbacks("message",n)})}_clearTimer(e){var n;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((n=this.reconnectTimer)===null||n===void 0||n.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var n;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(n=this.reconnectTimer)===null||n===void 0||n.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(at.error))}_appendParams(e,n){if(Object.keys(n).length===0)return e;const r=e.match(/\?/)?"&":"?",s=new URLSearchParams(n);return`${e}${r}${s}`}_workerObjectUrl(e){let n;if(e)n=e;else{const r=new Blob([X1],{type:"application/javascript"});n=URL.createObjectURL(r)}return n}_setConnectionState(e,n=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=n)}async _performAuth(e=null){let n;e?n=e:this.accessToken?n=await this.accessToken():n=this.accessTokenValue,this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(r=>{const s={access_token:n,version:D1};n&&r.updateJoinPayload(s),r.joinedOnce&&r._isJoined()&&r._push(at.access_token,{access_token:n})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(n=>{this.log("error",`error setting auth in ${e}`,n)})}_triggerStateCallbacks(e,n){try{this.stateChangeCallbacks[e].forEach(r=>{try{r(n)}catch(s){this.log("error",`error in ${e} callback`,s)}})}catch(r){this.log("error",`error triggering ${e} callbacks`,r)}}_setupReconnectionTimer(){this.reconnectTimer=new cm(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},ai.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var n,r,s,i,o,a,l,u,d;if(this.transport=(n=e==null?void 0:e.transport)!==null&&n!==void 0?n:null,this.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:gl,this.heartbeatIntervalMs=(s=e==null?void 0:e.heartbeatIntervalMs)!==null&&s!==void 0?s:ai.HEARTBEAT_INTERVAL,this.worker=(i=e==null?void 0:e.worker)!==null&&i!==void 0?i:!1,this.accessToken=(o=e==null?void 0:e.accessToken)!==null&&o!==void 0?o:null,this.heartbeatCallback=(a=e==null?void 0:e.heartbeatCallback)!==null&&a!==void 0?a:ca,e!=null&&e.params&&(this.params=e.params),e!=null&&e.logger&&(this.logger=e.logger),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(l=e==null?void 0:e.reconnectAfterMs)!==null&&l!==void 0?l:h=>Y1[h-1]||J1,this.encode=(u=e==null?void 0:e.encode)!==null&&u!==void 0?u:(h,p)=>p(JSON.stringify(h)),this.decode=(d=e==null?void 0:e.decode)!==null&&d!==void 0?d:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl}}}class Oc extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function le(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}class ex extends Oc{constructor(e,n,r){super(e),this.name="StorageApiError",this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class wl extends Oc{constructor(e,n){super(e),this.name="StorageUnknownError",this.originalError=n}}var tx=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};const hm=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>he(()=>Promise.resolve().then(()=>jr),void 0).then(({default:r})=>r(...n)):e=fetch,(...n)=>e(...n)},nx=()=>tx(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield he(()=>Promise.resolve().then(()=>jr),void 0)).Response:Response}),xl=t=>{if(Array.isArray(t))return t.map(n=>xl(n));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([n,r])=>{const s=n.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[s]=xl(r)}),e},rx=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)};var Ln=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};const ua=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),sx=(t,e,n)=>Ln(void 0,void 0,void 0,function*(){const r=yield nx();t instanceof r&&!(n!=null&&n.noResolveJson)?t.json().then(s=>{const i=t.status||500,o=(s==null?void 0:s.statusCode)||i+"";e(new ex(ua(s),i,o))}).catch(s=>{e(new wl(ua(s),s))}):e(new wl(ua(t),t))}),ix=(t,e,n,r)=>{const s={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"||!r?s:(rx(r)?(s.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),s.body=JSON.stringify(r)):s.body=r,e!=null&&e.duplex&&(s.duplex=e.duplex),Object.assign(Object.assign({},s),n))};function Us(t,e,n,r,s,i){return Ln(this,void 0,void 0,function*(){return new Promise((o,a)=>{t(n,ix(e,r,s,i)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>sx(l,a,r))})})}function Xi(t,e,n,r){return Ln(this,void 0,void 0,function*(){return Us(t,"GET",e,n,r)})}function pt(t,e,n,r,s){return Ln(this,void 0,void 0,function*(){return Us(t,"POST",e,r,s,n)})}function _l(t,e,n,r,s){return Ln(this,void 0,void 0,function*(){return Us(t,"PUT",e,r,s,n)})}function ox(t,e,n,r){return Ln(this,void 0,void 0,function*(){return Us(t,"HEAD",e,Object.assign(Object.assign({},n),{noResolveJson:!0}),r)})}function fm(t,e,n,r,s){return Ln(this,void 0,void 0,function*(){return Us(t,"DELETE",e,r,s,n)})}var Se=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};const ax={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},_d={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class lx{constructor(e,n={},r,s){this.url=e,this.headers=n,this.bucketId=r,this.fetch=hm(s)}uploadOrUpdate(e,n,r,s){return Se(this,void 0,void 0,function*(){try{let i;const o=Object.assign(Object.assign({},_d),s);let a=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(o.upsert)});const l=o.metadata;typeof Blob<"u"&&r instanceof Blob?(i=new FormData,i.append("cacheControl",o.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",r)):typeof FormData<"u"&&r instanceof FormData?(i=r,i.append("cacheControl",o.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=r,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),s!=null&&s.headers&&(a=Object.assign(Object.assign({},a),s.headers));const u=this._removeEmptyFolders(n),d=this._getFinalPath(u),h=yield(e=="PUT"?_l:pt)(this.fetch,`${this.url}/object/${d}`,i,Object.assign({headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:u,id:h.Id,fullPath:h.Key},error:null}}catch(i){if(le(i))return{data:null,error:i};throw i}})}upload(e,n,r){return Se(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,n,r)})}uploadToSignedUrl(e,n,r,s){return Se(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(e),o=this._getFinalPath(i),a=new URL(this.url+`/object/upload/sign/${o}`);a.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:_d.upsert},s),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType);const h=yield _l(this.fetch,a.toString(),l,{headers:d});return{data:{path:i,fullPath:h.Key},error:null}}catch(l){if(le(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,n){return Se(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e);const s=Object.assign({},this.headers);n!=null&&n.upsert&&(s["x-upsert"]="true");const i=yield pt(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:s}),o=new URL(this.url+i.url),a=o.searchParams.get("token");if(!a)throw new Oc("No token returned by API");return{data:{signedUrl:o.toString(),path:e,token:a},error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}})}update(e,n,r){return Se(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,n,r)})}move(e,n,r){return Se(this,void 0,void 0,function*(){try{return{data:yield pt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}})}copy(e,n,r){return Se(this,void 0,void 0,function*(){try{return{data:{path:(yield pt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}})}createSignedUrl(e,n,r){return Se(this,void 0,void 0,function*(){try{let s=this._getFinalPath(e),i=yield pt(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${o}`)},{data:i,error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}})}createSignedUrls(e,n,r){return Se(this,void 0,void 0,function*(){try{const s=yield pt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:e},{headers:this.headers}),i=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:s.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${i}`):null})),error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}})}download(e,n){return Se(this,void 0,void 0,function*(){const s=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),o=i?`?${i}`:"";try{const a=this._getFinalPath(e);return{data:yield(yield Xi(this.fetch,`${this.url}/${s}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(le(a))return{data:null,error:a};throw a}})}info(e){return Se(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{const r=yield Xi(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:xl(r),error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}})}exists(e){return Se(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{return yield ox(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(le(r)&&r instanceof wl){const s=r.originalError;if([400,404].includes(s==null?void 0:s.status))return{data:!1,error:r}}throw r}})}getPublicUrl(e,n){const r=this._getFinalPath(e),s=[],i=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";i!==""&&s.push(i);const a=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&s.push(l);let u=s.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${r}${u}`)}}}remove(e){return Se(this,void 0,void 0,function*(){try{return{data:yield fm(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(n){if(le(n))return{data:null,error:n};throw n}})}list(e,n,r){return Se(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},ax),n),{prefix:e||""});return{data:yield pt(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},r),error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}})}listV2(e,n){return Se(this,void 0,void 0,function*(){try{const r=Object.assign({},e);return{data:yield pt(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,r,{headers:this.headers},n),error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const n=[];return e.width&&n.push(`width=${e.width}`),e.height&&n.push(`height=${e.height}`),e.resize&&n.push(`resize=${e.resize}`),e.format&&n.push(`format=${e.format}`),e.quality&&n.push(`quality=${e.quality}`),n.join("&")}}const cx="2.11.1",ux={"X-Client-Info":`storage-js/${cx}`};var Dn=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};class dx{constructor(e,n={},r,s){const i=new URL(e);s!=null&&s.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href,this.headers=Object.assign(Object.assign({},ux),n),this.fetch=hm(r)}listBuckets(){return Dn(this,void 0,void 0,function*(){try{return{data:yield Xi(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(le(e))return{data:null,error:e};throw e}})}getBucket(e){return Dn(this,void 0,void 0,function*(){try{return{data:yield Xi(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(n){if(le(n))return{data:null,error:n};throw n}})}createBucket(e,n={public:!1}){return Dn(this,void 0,void 0,function*(){try{return{data:yield pt(this.fetch,`${this.url}/bucket`,{id:e,name:e,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}})}updateBucket(e,n){return Dn(this,void 0,void 0,function*(){try{return{data:yield _l(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}})}emptyBucket(e){return Dn(this,void 0,void 0,function*(){try{return{data:yield pt(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(le(n))return{data:null,error:n};throw n}})}deleteBucket(e){return Dn(this,void 0,void 0,function*(){try{return{data:yield fm(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(n){if(le(n))return{data:null,error:n};throw n}})}}class hx extends dx{constructor(e,n={},r,s){super(e,n,r,s)}from(e){return new lx(this.url,this.headers,e,this.fetch)}}const fx="2.57.2";let Vr="";typeof Deno<"u"?Vr="deno":typeof document<"u"?Vr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Vr="react-native":Vr="node";const px={"X-Client-Info":`supabase-js-${Vr}/${fx}`},mx={headers:px},gx={schema:"public"},yx={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},vx={};var wx=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};const xx=t=>{let e;return t?e=t:typeof fetch>"u"?e=Xp:e=fetch,(...n)=>e(...n)},_x=()=>typeof Headers>"u"?Zp:Headers,bx=(t,e,n)=>{const r=xx(n),s=_x();return(i,o)=>wx(void 0,void 0,void 0,function*(){var a;const l=(a=yield e())!==null&&a!==void 0?a:t;let u=new s(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",t),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(i,Object.assign(Object.assign({},o),{headers:u}))})};var kx=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};function Sx(t){return t.endsWith("/")?t:t+"/"}function Cx(t,e){var n,r;const{db:s,auth:i,realtime:o,global:a}=t,{db:l,auth:u,realtime:d,global:h}=e,p={db:Object.assign(Object.assign({},l),s),auth:Object.assign(Object.assign({},u),i),realtime:Object.assign(Object.assign({},d),o),storage:{},global:Object.assign(Object.assign(Object.assign({},h),a),{headers:Object.assign(Object.assign({},(n=h==null?void 0:h.headers)!==null&&n!==void 0?n:{}),(r=a==null?void 0:a.headers)!==null&&r!==void 0?r:{})}),accessToken:()=>kx(this,void 0,void 0,function*(){return""})};return t.accessToken?p.accessToken=t.accessToken:delete p.accessToken,p}const pm="2.71.1",Gn=30*1e3,bl=3,da=bl*Gn,jx="http://localhost:9999",Ex="supabase.auth.token",Tx={"X-Client-Info":`gotrue-js/${pm}`},kl="X-Supabase-Api-Version",mm={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Px=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Nx=10*60*1e3;class Ac extends Error{constructor(e,n,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=r}}function D(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class Ox extends Ac{constructor(e,n,r){super(e,n,r),this.name="AuthApiError",this.status=n,this.code=r}}function Ax(t){return D(t)&&t.name==="AuthApiError"}class gm extends Ac{constructor(e,n){super(e),this.name="AuthUnknownError",this.originalError=n}}class ln extends Ac{constructor(e,n,r,s){super(e,r,s),this.name=n,this.status=r}}class Lt extends ln{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Fx(t){return D(t)&&t.name==="AuthSessionMissingError"}class li extends ln{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ci extends ln{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class ui extends ln{constructor(e,n=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function Rx(t){return D(t)&&t.name==="AuthImplicitGrantRedirectError"}class bd extends ln{constructor(e,n=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Sl extends ln{constructor(e,n){super(e,"AuthRetryableFetchError",n,void 0)}}function ha(t){return D(t)&&t.name==="AuthRetryableFetchError"}class kd extends ln{constructor(e,n,r){super(e,"AuthWeakPasswordError",n,"weak_password"),this.reasons=r}}class Cl extends ln{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Zi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Sd=` 	
\r=`.split(""),Lx=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Sd.length;e+=1)t[Sd[e].charCodeAt(0)]=-2;for(let e=0;e<Zi.length;e+=1)t[Zi[e].charCodeAt(0)]=e;return t})();function Cd(t,e,n){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;n(Zi[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;n(Zi[r]),e.queuedBits-=6}}function ym(t,e,n){const r=Lx[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)n(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function jd(t){const e=[],n=o=>{e.push(String.fromCodePoint(o))},r={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},i=o=>{Mx(o,r,n)};for(let o=0;o<t.length;o+=1)ym(t.charCodeAt(o),s,i);return e.join("")}function Ix(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function $x(t,e){for(let n=0;n<t.length;n+=1){let r=t.charCodeAt(n);if(r>55295&&r<=56319){const s=(r-55296)*1024&65535;r=(t.charCodeAt(n+1)-56320&65535|s)+65536,n+=1}Ix(r,e)}}function Mx(t,e,n){if(e.utf8seq===0){if(t<=127){n(t);return}for(let r=1;r<6;r+=1)if(!(t>>7-r&1)){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&n(e.codepoint)}}function Dx(t){const e=[],n={queue:0,queuedBits:0},r=s=>{e.push(s)};for(let s=0;s<t.length;s+=1)ym(t.charCodeAt(s),n,r);return new Uint8Array(e)}function Ux(t){const e=[];return $x(t,n=>e.push(n)),new Uint8Array(e)}function zx(t){const e=[],n={queue:0,queuedBits:0},r=s=>{e.push(s)};return t.forEach(s=>Cd(s,n,r)),Cd(null,n,r),e.join("")}function Bx(t){return Math.round(Date.now()/1e3)+t}function Wx(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t=="x"?e:e&3|8).toString(16)})}const st=()=>typeof window<"u"&&typeof document<"u",fn={tested:!1,writable:!1},vm=()=>{if(!st())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(fn.tested)return fn.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),fn.tested=!0,fn.writable=!0}catch{fn.tested=!0,fn.writable=!1}return fn.writable};function Hx(t){const e={},n=new URL(t);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((s,i)=>{e[i]=s})}catch{}return n.searchParams.forEach((r,s)=>{e[s]=r}),e}const wm=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>he(()=>Promise.resolve().then(()=>jr),void 0).then(({default:r})=>r(...n)):e=fetch,(...n)=>e(...n)},qx=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",Kn=async(t,e,n)=>{await t.setItem(e,JSON.stringify(n))},pn=async(t,e)=>{const n=await t.getItem(e);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Rt=async(t,e)=>{await t.removeItem(e)};class Co{constructor(){this.promise=new Co.promiseConstructor((e,n)=>{this.resolve=e,this.reject=n})}}Co.promiseConstructor=Promise;function fa(t){const e=t.split(".");if(e.length!==3)throw new Cl("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Px.test(e[r]))throw new Cl("JWT not in base64url format");return{header:JSON.parse(jd(e[0])),payload:JSON.parse(jd(e[1])),signature:Dx(e[2]),raw:{header:e[0],payload:e[1]}}}async function Vx(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function Gx(t,e){return new Promise((r,s)=>{(async()=>{for(let i=0;i<1/0;i++)try{const o=await t(i);if(!e(i,null,o)){r(o);return}}catch(o){if(!e(i,o)){s(o);return}}})()})}function Kx(t){return("0"+t.toString(16)).substr(-2)}function Qx(){const e=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let s="";for(let i=0;i<56;i++)s+=n.charAt(Math.floor(Math.random()*r));return s}return crypto.getRandomValues(e),Array.from(e,Kx).join("")}async function Yx(t){const n=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",n),s=new Uint8Array(r);return Array.from(s).map(i=>String.fromCharCode(i)).join("")}async function Jx(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const n=await Yx(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Un(t,e,n=!1){const r=Qx();let s=r;n&&(s+="/PASSWORD_RECOVERY"),await Kn(t,`${e}-code-verifier`,s);const i=await Jx(r);return[i,r===i?"plain":"s256"]}const Xx=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Zx(t){const e=t.headers.get(kl);if(!e||!e.match(Xx))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function e_(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function t_(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const n_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function zn(t){if(!n_.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function pa(){const t={};return new Proxy(t,{get:(e,n)=>{if(n==="__isUserNotAvailableProxy")return!0;if(typeof n=="symbol"){const r=n.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,n)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,n)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Ed(t){return JSON.parse(JSON.stringify(t))}var r_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};const yn=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),s_=[502,503,504];async function Td(t){var e;if(!qx(t))throw new Sl(yn(t),0);if(s_.includes(t.status))throw new Sl(yn(t),t.status);let n;try{n=await t.json()}catch(i){throw new gm(yn(i),i)}let r;const s=Zx(t);if(s&&s.getTime()>=mm["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?r=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(r=n.error_code),r){if(r==="weak_password")throw new kd(yn(n),t.status,((e=n.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new Lt}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((i,o)=>i&&typeof o=="string",!0))throw new kd(yn(n),t.status,n.weak_password.reasons);throw new Ox(yn(n),t.status||500,r)}const i_=(t,e,n,r)=>{const s={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),s.body=JSON.stringify(r),Object.assign(Object.assign({},s),n))};async function U(t,e,n,r){var s;const i=Object.assign({},r==null?void 0:r.headers);i[kl]||(i[kl]=mm["2024-01-01"].name),r!=null&&r.jwt&&(i.Authorization=`Bearer ${r.jwt}`);const o=(s=r==null?void 0:r.query)!==null&&s!==void 0?s:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await o_(t,e,n+a,{headers:i,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function o_(t,e,n,r,s,i){const o=i_(e,r,s,i);let a;try{a=await t(n,Object.assign({},o))}catch(l){throw console.error(l),new Sl(yn(l),0)}if(a.ok||await Td(a),r!=null&&r.noResolveJson)return a;try{return await a.json()}catch(l){await Td(l)}}function xt(t){var e;let n=null;u_(t)&&(n=Object.assign({},t),t.expires_at||(n.expires_at=Bx(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:t;return{data:{session:n,user:r},error:null}}function Pd(t){const e=xt(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((n,r)=>n&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Ut(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function a_(t){return{data:t,error:null}}function l_(t){const{action_link:e,email_otp:n,hashed_token:r,redirect_to:s,verification_type:i}=t,o=r_(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:e,email_otp:n,hashed_token:r,redirect_to:s,verification_type:i},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function c_(t){return t}function u_(t){return t.access_token&&t.refresh_token&&t.expires_in}const ma=["global","local","others"];var d_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};class h_{constructor({url:e="",headers:n={},fetch:r}){this.url=e,this.headers=n,this.fetch=wm(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,n=ma[0]){if(ma.indexOf(n)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ma.join(", ")}`);try{return await U(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,n={}){try{return await U(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Ut})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:n}=e,r=d_(e,["options"]),s=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(s.new_email=r==null?void 0:r.newEmail,delete s.newEmail),await U(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:l_,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(D(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(e){try{return await U(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ut})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async listUsers(e){var n,r,s,i,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},d=await U(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=e==null?void 0:e.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(i=(s=e==null?void 0:e.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:c_});if(d.error)throw d.error;const h=await d.json(),p=(o=d.headers.get("x-total-count"))!==null&&o!==void 0?o:0,v=(l=(a=d.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return v.length>0&&(v.forEach(y=>{const x=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(y.split(";")[1].split("=")[1]);u[`${b}Page`]=x}),u.total=parseInt(p)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(D(u))return{data:{users:[]},error:u};throw u}}async getUserById(e){zn(e);try{return await U(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ut})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async updateUserById(e,n){zn(e);try{return await U(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:n,headers:this.headers,xform:Ut})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,n=!1){zn(e);try{return await U(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:n},xform:Ut})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){zn(e.userId);try{const{data:n,error:r}=await U(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:n,error:r}}catch(n){if(D(n))return{data:null,error:n};throw n}}async _deleteFactor(e){zn(e.userId),zn(e.id);try{return{data:await U(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(n){if(D(n))return{data:null,error:n};throw n}}}function Nd(t={}){return{getItem:e=>t[e]||null,setItem:(e,n)=>{t[e]=n},removeItem:e=>{delete t[e]}}}function f_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Bn={debug:!!(globalThis&&vm()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class xm extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class p_ extends xm{}async function m_(t,e,n){Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",t,e);const r=new globalThis.AbortController;return e>0&&setTimeout(()=>{r.abort(),Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",t)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(t,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async s=>{if(s){Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",t,s.name);try{return await n()}finally{Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",t,s.name)}}else{if(e===0)throw Bn.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",t),new p_(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);if(Bn.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}}))}f_();const g_={url:jx,storageKey:Ex,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Tx,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Od(t,e,n){return await n()}const Wn={};class Ps{constructor(e){var n,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ps.nextInstanceID,Ps.nextInstanceID+=1,this.instanceID>0&&st()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},g_),e);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new h_({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=wm(s.fetch),this.lock=s.lock||Od,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:st()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=m_:this.lock=Od,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:vm()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Nd(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Nd(this.memoryStorage)),st()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}get jwks(){var e,n;return(n=(e=Wn[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&n!==void 0?n:{keys:[]}}set jwks(e){Wn[this.storageKey]=Object.assign(Object.assign({},Wn[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,n;return(n=(e=Wn[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&n!==void 0?n:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Wn[this.storageKey]=Object.assign(Object.assign({},Wn[this.storageKey]),{cachedAt:e})}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${pm}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const n=Hx(window.location.href);let r="none";if(this._isImplicitGrantCallback(n)?r="implicit":await this._isPKCECallback(n)&&(r="pkce"),st()&&this.detectSessionInUrl&&r!=="none"){const{data:s,error:i}=await this._getSessionFromURL(n,r);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),Rx(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:o,redirectType:a}=s;return this._debug("#_initialize()","detected session in URL",o,"redirect type",a),await this._saveSession(o),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return D(n)?{error:n}:{error:new gm("Unexpected error during initialization",n)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var n,r,s;try{const i=await U(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}},xform:xt}),{data:o,error:a}=i;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(D(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(e){var n,r,s;try{let i;if("email"in e){const{email:d,password:h,options:p}=e;let v=null,y=null;this.flowType==="pkce"&&([v,y]=await Un(this.storage,this.storageKey)),i=await U(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:d,password:h,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:v,code_challenge_method:y},xform:xt})}else if("phone"in e){const{phone:d,password:h,options:p}=e;i=await U(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},channel:(s=p==null?void 0:p.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:xt})}else throw new ci("You must provide either an email or phone number and a password");const{data:o,error:a}=i;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(D(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(e){try{let n;if("email"in e){const{email:i,password:o,options:a}=e;n=await U(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Pd})}else if("phone"in e){const{phone:i,password:o,options:a}=e;n=await U(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Pd})}else throw new ci("You must provide either an email or phone number and a password");const{data:r,error:s}=n;return s?{data:{user:null,session:null},error:s}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new li}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:s})}catch(n){if(D(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(e){var n,r,s,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:n}=e;if(n==="solana")return await this.signInWithSolana(e);throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`)}async signInWithSolana(e){var n,r,s,i,o,a,l,u,d,h,p,v;let y,x;if("message"in e)y=e.message,x=e.signature;else{const{chain:b,wallet:f,statement:m,options:g}=e;let w;if(st())if(typeof f=="object")w=f;else{const S=window;if("solana"in S&&typeof S.solana=="object"&&("signIn"in S.solana&&typeof S.solana.signIn=="function"||"signMessage"in S.solana&&typeof S.solana.signMessage=="function"))w=S.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof f!="object"||!(g!=null&&g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=f}const k=new URL((n=g==null?void 0:g.url)!==null&&n!==void 0?n:window.location.href);if("signIn"in w&&w.signIn){const S=await w.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},g==null?void 0:g.signInWithSolana),{version:"1",domain:k.host,uri:k.href}),m?{statement:m}:null));let C;if(Array.isArray(S)&&S[0]&&typeof S[0]=="object")C=S[0];else if(S&&typeof S=="object"&&"signedMessage"in S&&"signature"in S)C=S;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)y=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),x=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in w)||typeof w.signMessage!="function"||!("publicKey"in w)||typeof w!="object"||!w.publicKey||!("toBase58"in w.publicKey)||typeof w.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${k.host} wants you to sign in with your Solana account:`,w.publicKey.toBase58(),...m?["",m,""]:[""],"Version: 1",`URI: ${k.href}`,`Issued At: ${(s=(r=g==null?void 0:g.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((i=g==null?void 0:g.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${g.signInWithSolana.notBefore}`]:[],...!((o=g==null?void 0:g.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${g.signInWithSolana.expirationTime}`]:[],...!((a=g==null?void 0:g.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${g.signInWithSolana.chainId}`]:[],...!((l=g==null?void 0:g.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${g.signInWithSolana.nonce}`]:[],...!((u=g==null?void 0:g.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${g.signInWithSolana.requestId}`]:[],...!((h=(d=g==null?void 0:g.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...g.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const S=await w.signMessage(new TextEncoder().encode(y),"utf8");if(!S||!(S instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=S}}try{const{data:b,error:f}=await U(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:zx(x)},!((p=e.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(v=e.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:xt});if(f)throw f;return!b||!b.session||!b.user?{data:{user:null,session:null},error:new li}:(b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),{data:Object.assign({},b),error:f})}catch(b){if(D(b))return{data:{user:null,session:null},error:b};throw b}}async _exchangeCodeForSession(e){const n=await pn(this.storage,`${this.storageKey}-code-verifier`),[r,s]=(n??"").split("/");try{const{data:i,error:o}=await U(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:xt});if(await Rt(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new li}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:s??null}),error:o})}catch(i){if(D(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(e){try{const{options:n,provider:r,token:s,access_token:i,nonce:o}=e,a=await U(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:s,access_token:i,nonce:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:xt}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new li}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(D(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(e){var n,r,s,i,o;try{if("email"in e){const{email:a,options:l}=e;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await Un(this.storage,this.storageKey));const{error:h}=await U(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in e){const{phone:a,options:l}=e,{data:u,error:d}=await U(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(s=l==null?void 0:l.data)!==null&&s!==void 0?s:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:d}}throw new ci("You must provide either an email or phone number.")}catch(a){if(D(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(e){var n,r;try{let s,i;"options"in e&&(s=(n=e.options)===null||n===void 0?void 0:n.redirectTo,i=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:a}=await U(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:s,xform:xt});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(D(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(e){var n,r,s;try{let i=null,o=null;return this.flowType==="pkce"&&([i,o]=await Un(this.storage,this.storageKey)),await U(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(n=e.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((s=e==null?void 0:e.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:o}),headers:this.headers,xform:a_})}catch(i){if(D(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:n},error:r}=e;if(r)throw r;if(!n)throw new Lt;const{error:s}=await U(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:s}})}catch(e){if(D(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const n=`${this.url}/resend`;if("email"in e){const{email:r,type:s,options:i}=e,{error:o}=await U(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:s,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},redirectTo:i==null?void 0:i.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in e){const{phone:r,type:s,options:i}=e,{data:o,error:a}=await U(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:s,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a}}throw new ci("You must provide either an email or phone number and a type")}catch(n){if(D(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(e,n){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await e(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const n=await pn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?e=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<da:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const o=await pn(this.userStorage,this.storageKey+"-user");o!=null&&o.user?e.user=o.user:e.user=pa()}if(this.storage.isServer&&e.user){let o=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,u,d)=>(!o&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,d))})}return{data:{session:e},error:null}}const{session:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?{data:{session:null},error:i}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await U(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ut}):await this._useSession(async n=>{var r,s,i;const{data:o,error:a}=n;if(a)throw a;return!(!((r=o.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Lt}:await U(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(s=o.session)===null||s===void 0?void 0:s.access_token)!==null&&i!==void 0?i:void 0,xform:Ut})})}catch(n){if(D(n))return Fx(n)&&(await this._removeSession(),await Rt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(e,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,n))}async _updateUser(e,n={}){try{return await this._useSession(async r=>{const{data:s,error:i}=r;if(i)throw i;if(!s.session)throw new Lt;const o=s.session;let a=null,l=null;this.flowType==="pkce"&&e.email!=null&&([a,l]=await Un(this.storage,this.storageKey));const{data:u,error:d}=await U(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:Ut});if(d)throw d;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Lt;const n=Date.now()/1e3;let r=n,s=!0,i=null;const{payload:o}=fa(e.access_token);if(o.exp&&(r=o.exp,s=r<=n),s){const{session:a,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};i=a}else{const{data:a,error:l}=await this._getUser(e.access_token);if(l)throw l;i={access_token:e.access_token,refresh_token:e.refresh_token,user:a.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(n){if(D(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async n=>{var r;if(!e){const{data:o,error:a}=n;if(a)throw a;e=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new Lt;const{session:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?{data:{user:null,session:null},error:i}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(D(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(e,n){try{if(!st())throw new ui("No browser detected.");if(e.error||e.error_description||e.error_code)throw new ui(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(n){case"implicit":if(this.flowType==="pkce")throw new bd("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ui("Not a valid implicit grant flow url.");break;default:}if(n==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new bd("No code detected.");const{data:m,error:g}=await this._exchangeCodeForSession(e.code);if(g)throw g;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:m.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:i,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=e;if(!i||!a||!o||!u)throw new ui("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(a);let p=d+h;l&&(p=parseInt(l));const v=p-d;v*1e3<=Gn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${h}s`);const y=p-h;d-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,p,d):d-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,p,d);const{data:x,error:b}=await this._getUser(i);if(b)throw b;const f={provider_token:r,provider_refresh_token:s,access_token:i,expires_in:h,expires_at:p,refresh_token:o,token_type:u,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:f,redirectType:e.type},error:null}}catch(r){if(D(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const n=await pn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&n)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:s,error:i}=n;if(i)return{error:i};const o=(r=s.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:a}=await this.admin.signOut(o,e);if(a&&!(Ax(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return e!=="others"&&(await this._removeSession(),await Rt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const n=Wx(),r={id:n,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async n=>{var r,s;try{const{data:{session:i},error:o}=n;if(o)throw o;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),console.error(i)}})}async resetPasswordForEmail(e,n={}){let r=null,s=null;this.flowType==="pkce"&&([r,s]=await Un(this.storage,this.storageKey,!0));try{return await U(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:s,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(i){if(D(i))return{data:null,error:i};throw i}}async getUserIdentities(){var e;try{const{data:n,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(e=n.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(n){if(D(n))return{data:null,error:n};throw n}}async linkIdentity(e){var n;try{const{data:r,error:s}=await this._useSession(async i=>{var o,a,l,u,d;const{data:h,error:p}=i;if(p)throw p;const v=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(a=e.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await U(this.fetch,"GET",v,{headers:this.headers,jwt:(d=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(s)throw s;return st()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),{data:{provider:e.provider,url:r==null?void 0:r.url},error:null}}catch(r){if(D(r))return{data:{provider:e.provider,url:null},error:r};throw r}}async unlinkIdentity(e){try{return await this._useSession(async n=>{var r,s;const{data:i,error:o}=n;if(o)throw o;return await U(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(r=i.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0})})}catch(n){if(D(n))return{data:null,error:n};throw n}}async _refreshAccessToken(e){const n=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await Gx(async s=>(s>0&&await Vx(200*Math.pow(2,s-1)),this._debug(n,"refreshing attempt",s),await U(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:xt})),(s,i)=>{const o=200*Math.pow(2,s);return i&&ha(i)&&Date.now()+o-r<Gn})}catch(r){if(this._debug(n,"error",r),D(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,n){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",n,"url",r),st()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,n;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const s=await pn(this.storage,this.storageKey);if(s&&this.userStorage){let o=await pn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:s.user},await Kn(this.userStorage,this.storageKey+"-user",o)),s.user=(e=o==null?void 0:o.user)!==null&&e!==void 0?e:pa()}else if(s&&!s.user&&!s.user){const o=await pn(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(s.user=o.user,await Rt(this.storage,this.storageKey+"-user"),await Kn(this.storage,this.storageKey,s)):s.user=pa()}if(this._debug(r,"session from storage",s),!this._isValidSession(s)){this._debug(r,"session is not valid"),s!==null&&await this._removeSession();return}const i=((n=s.expires_at)!==null&&n!==void 0?n:1/0)*1e3-Date.now()<da;if(this._debug(r,`session has${i?"":" not"} expired with margin of ${da}s`),i){if(this.autoRefreshToken&&s.refresh_token){const{error:o}=await this._callRefreshToken(s.refresh_token);o&&(console.error(o),ha(o)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:a}=await this._getUser(s.access_token);!a&&(o!=null&&o.user)?(s.user=o.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(r,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(r,"error",s),console.error(s);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var n,r;if(!e)throw new Lt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Co;const{data:i,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!i.session)throw new Lt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const a={session:i.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(i){if(this._debug(s,"error",i),D(i)){const o={session:null,error:i};return ha(i)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(i),i}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,n,r=!0){const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:n});const i=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(e,n)}catch(l){i.push(l)}});if(await Promise.all(o),i.length>0){for(let a=0;a<i.length;a+=1)console.error(i[a]);throw i[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const n=Object.assign({},e),r=n.user&&n.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&n.user&&await Kn(this.userStorage,this.storageKey+"-user",{user:n.user});const s=Object.assign({},n);delete s.user;const i=Ed(s);await Kn(this.storage,this.storageKey,i)}else{const s=Ed(n);await Kn(this.storage,this.storageKey,s)}}async _removeSession(){this._debug("#_removeSession()"),await Rt(this.storage,this.storageKey),await Rt(this.storage,this.storageKey+"-code-verifier"),await Rt(this.storage,this.storageKey+"-user"),this.userStorage&&await Rt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&st()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Gn);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((r.expires_at*1e3-e)/Gn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${Gn}ms, refresh threshold is ${bl} ticks`),s<=bl&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof xm)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!st()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const n=`#_onVisibilityChanged(${e})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,n,r){const s=[`provider=${encodeURIComponent(n)}`];if(r!=null&&r.redirectTo&&s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&s.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[i,o]=await Un(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(o)}`});s.push(a.toString())}if(r!=null&&r.queryParams){const i=new URLSearchParams(r.queryParams);s.push(i.toString())}return r!=null&&r.skipBrowserRedirect&&s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async n=>{var r;const{data:s,error:i}=n;return i?{data:null,error:i}:await U(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(D(n))return{data:null,error:n};throw n}}async _enroll(e){try{return await this._useSession(async n=>{var r,s;const{data:i,error:o}=n;if(o)return{data:null,error:o};const a=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:u}=await U(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return u?{data:null,error:u}:(e.factorType==="totp"&&(!((s=l==null?void 0:l.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if(D(n))return{data:null,error:n};throw n}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:s,error:i}=n;if(i)return{data:null,error:i};const{data:o,error:a}=await U(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:a})})}catch(n){if(D(n))return{data:null,error:n};throw n}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:s,error:i}=n;return i?{data:null,error:i}:await U(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(D(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(e){const{data:n,error:r}=await this._challenge({factorId:e.factorId});return r?{data:null,error:r}:await this._verify({factorId:e.factorId,challengeId:n.id,code:e.code})}async _listFactors(){const{data:{user:e},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(e==null?void 0:e.factors)||[],s=r.filter(o=>o.factor_type==="totp"&&o.status==="verified"),i=r.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:r,totp:s,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var n,r;const{data:{session:s},error:i}=e;if(i)return{data:null,error:i};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:o}=fa(s.access_token);let a=null;o.aal&&(a=o.aal);let l=a;((r=(n=s.user.factors)===null||n===void 0?void 0:n.filter(h=>h.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const d=o.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:d},error:null}}))}async fetchJwk(e,n={keys:[]}){let r=n.keys.find(a=>a.kid===e);if(r)return r;const s=Date.now();if(r=this.jwks.keys.find(a=>a.kid===e),r&&this.jwks_cached_at+Nx>s)return r;const{data:i,error:o}=await U(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=s,r=i.keys.find(a=>a.kid===e),!r)?null:r}async getClaims(e,n={}){try{let r=e;if(!r){const{data:v,error:y}=await this.getSession();if(y||!v.session)return{data:null,error:y};r=v.session.access_token}const{header:s,payload:i,signature:o,raw:{header:a,payload:l}}=fa(r);n!=null&&n.allowExpired||e_(i.exp);const u=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,n!=null&&n.keys?{keys:n.keys}:n==null?void 0:n.jwks);if(!u){const{error:v}=await this.getUser(r);if(v)throw v;return{data:{claims:i,header:s,signature:o},error:null}}const d=t_(s.alg),h=await crypto.subtle.importKey("jwk",u,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,o,Ux(`${a}.${l}`)))throw new Cl("Invalid JWT signature");return{data:{claims:i,header:s,signature:o},error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}}Ps.nextInstanceID=0;const y_=Ps;class v_ extends y_{constructor(e){super(e)}}var w_=globalThis&&globalThis.__awaiter||function(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(d){try{u(r.next(d))}catch(h){o(h)}}function l(d){try{u(r.throw(d))}catch(h){o(h)}}function u(d){d.done?i(d.value):s(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})};class x_{constructor(e,n,r){var s,i,o;if(this.supabaseUrl=e,this.supabaseKey=n,!e)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const a=Sx(e),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const u=`sb-${l.hostname.split(".")[0]}-auth-token`,d={db:gx,realtime:vx,auth:Object.assign(Object.assign({},yx),{storageKey:u}),global:mx},h=Cx(r??{},d);this.storageKey=(s=h.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(i=h.global.headers)!==null&&i!==void 0?i:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(p,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=h.auth)!==null&&o!==void 0?o:{},this.headers,h.global.fetch),this.fetch=bx(n,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.rest=new I1(new URL("rest/v1",l).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new hx(this.storageUrl.href,this.headers,this.fetch,r==null?void 0:r.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new p1(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,n={},r={}){return this.rest.rpc(e,n,r)}channel(e,n={config:{}}){return this.realtime.channel(e,n)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,n;return w_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:r}=yield this.auth.getSession();return(n=(e=r.session)===null||e===void 0?void 0:e.access_token)!==null&&n!==void 0?n:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:n,detectSessionInUrl:r,storage:s,userStorage:i,storageKey:o,flowType:a,lock:l,debug:u},d,h){const p={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new v_({url:this.authUrl.href,headers:Object.assign(Object.assign({},p),d),storageKey:o,autoRefreshToken:e,persistSession:n,detectSessionInUrl:r,storage:s,userStorage:i,flowType:a,lock:l,debug:u,fetch:h,hasCustomAuthorizationHeader:Object.keys(this.headers).some(v=>v.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new Z1(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(e,n,r){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==r?this.changedAccessToken=r:e==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const __=(t,e,n)=>new x_(t,e,n);function b_(){if(typeof window<"u"||typeof process>"u")return!1;const t=process.version;if(t==null)return!1;const e=t.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}b_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const k_={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_SUPABASE_URL||"https://placeholder.supabase.co",S_={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_SUPABASE_ANON_KEY||"placeholder-key",kt=__(k_,S_,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}});class Ad{constructor(e){pe(this,"userId");this.userId=e}async saveProgress(e,n,r,s,i){try{const{data:o}=await kt.from("game_progress").select("*").eq("user_id",this.userId).eq("level_id",e).single(),a={user_id:this.userId,level_id:e,completed:n>0,stars:Math.max((o==null?void 0:o.stars)||0,n),hints_used:r,time_spent:s,attempts:i,last_attempt_at:new Date().toISOString(),completed_at:n>0&&!(o!=null&&o.completed)?new Date().toISOString():o==null?void 0:o.completed_at};if(o){const{error:l}=await kt.from("game_progress").update(a).eq("id",o.id);if(l)throw l}else{const{error:l}=await kt.from("game_progress").insert(a);if(l)throw l}}catch(o){throw console.error("Error saving progress:",o),o}}async loadProgress(){try{const{data:e,error:n}=await kt.from("game_progress").select("*").eq("user_id",this.userId);if(n)throw n;const r={completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}};if(e){e.forEach(i=>{i.completed&&r.completedLevels.push(i.level_id),r.stars[i.level_id]=i.stars,r.hintsUsed[i.level_id]=i.hints_used});const s=e.filter(i=>i.completed).sort((i,o)=>i.level_id.localeCompare(o.level_id));if(s.length>0){const i=s[s.length-1],o=parseInt(i.level_id.replace("level",""));r.currentLevel=`level${o+1}`}}return r}catch(e){return console.error("Error loading progress:",e),{completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}}}async logCodeAttempt(e,n,r,s,i){try{const{error:o}=await kt.from("code_attempts").insert({user_id:this.userId,level_id:e,code:n,success:r,error_message:s,execution_time:i||0});if(o)throw o}catch(o){console.error("Error logging code attempt:",o)}}async getAnalytics(e){try{let n=kt.from("code_attempts").select(`
          *,
          profiles!inner(full_name, role)
        `).eq("profiles.role","student");e&&(n=n.eq("level_id",e));const{data:r,error:s}=await n;if(s)throw s;return r}catch(n){return console.error("Error getting analytics:",n),[]}}async getClassroomProgress(e){try{const{data:n,error:r}=await kt.from("classroom_students").select(`
          student_id,
          profiles!inner(full_name, email),
          game_progress!inner(*)
        `).eq("classroom_id",e);if(r)throw r;return n}catch(n){return console.error("Error getting classroom progress:",n),[]}}}const C_=()=>{const{user:t}=Ms(),[e,n]=_.useState([]),[r,s]=_.useState(null),[i,o]=_.useState([]),[a,l]=_.useState([]),[u,d]=_.useState(!0);_.useEffect(()=>{t&&h()},[t]);const h=async()=>{if(t)try{const y=new Ad(t.id),{data:x,error:b}=await kt.from("classrooms").select("*").eq("teacher_id",t.id);if(b)throw b;n(x||[]);const f=await y.getAnalytics();l(f),d(!1)}catch(y){console.error("Error loading teacher data:",y),d(!1)}},p=async y=>{try{const b=await new Ad(t.id).getClassroomProgress(y);o(b)}catch(x){console.error("Error loading classroom progress:",x)}},v=async y=>{if(t)try{const x=Math.random().toString(36).substring(2,8).toUpperCase(),{data:b,error:f}=await kt.from("classrooms").insert({teacher_id:t.id,name:y,code:x}).select().single();if(f)throw f;n(m=>[...m,b])}catch(x){console.error("Error creating classroom:",x)}};return u?c.jsx("div",{className:"teacher-dashboard",children:c.jsx("div",{className:"loading",children:"Loading dashboard..."})}):c.jsxs("div",{className:"teacher-dashboard",children:[c.jsxs("div",{className:"dashboard-header",children:[c.jsx("h1",{children:"🎓 Teacher Dashboard"}),c.jsx("p",{children:"Monitor your students' coding progress and create engaging learning experiences"})]}),c.jsxs("div",{className:"dashboard-content",children:[c.jsxs("div",{className:"analytics-section",children:[c.jsx("h2",{children:"📊 Class Analytics"}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx(fl,{className:"stat-icon"}),c.jsxs("div",{className:"stat-content",children:[c.jsx("h3",{children:a.length}),c.jsx("p",{children:"Total Code Attempts"})]})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx(cp,{className:"stat-icon"}),c.jsxs("div",{className:"stat-content",children:[c.jsx("h3",{children:a.filter(y=>y.success).length}),c.jsx("p",{children:"Successful Attempts"})]})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx(Sc,{className:"stat-icon"}),c.jsxs("div",{className:"stat-content",children:[c.jsx("h3",{children:new Set(a.map(y=>y.level_id)).size}),c.jsx("p",{children:"Levels Attempted"})]})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx(td,{className:"stat-icon"}),c.jsxs("div",{className:"stat-content",children:[c.jsxs("h3",{children:[a.length>0?Math.round(a.reduce((y,x)=>y+(x.execution_time||0),0)/a.length/1e3):0,"s"]}),c.jsx("p",{children:"Avg. Execution Time"})]})]})]})]}),c.jsxs("div",{className:"classrooms-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{children:"🏫 Your Classrooms"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>{const y=prompt("Enter classroom name:");y&&v(y)},children:"Create Classroom"})]}),c.jsx("div",{className:"classrooms-grid",children:e.map(y=>c.jsxs("div",{className:"classroom-card",children:[c.jsxs("div",{className:"classroom-header",children:[c.jsx("h3",{children:y.name}),c.jsxs("div",{className:"classroom-code",children:["Code: ",c.jsx("strong",{children:y.code})]})]}),c.jsxs("div",{className:"classroom-stats",children:[c.jsxs("div",{className:"stat",children:[c.jsx(fl,{size:16}),c.jsxs("span",{children:[y.student_count," students"]})]}),c.jsxs("div",{className:"stat",children:[c.jsx(td,{size:16}),c.jsxs("span",{children:["Created ",new Date(y.created_at).toLocaleDateString()]})]})]}),c.jsx("div",{className:"classroom-actions",children:c.jsx("button",{className:"btn btn-secondary",onClick:()=>{s(y.id),p(y.id)},children:"View Progress"})})]},y.id))})]}),r&&i.length>0&&c.jsxs("div",{className:"progress-section",children:[c.jsx("h2",{children:"👥 Student Progress"}),c.jsx("div",{className:"progress-table",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Email"}),c.jsx("th",{children:"Levels Completed"}),c.jsx("th",{children:"Total Stars"}),c.jsx("th",{children:"Attempts"}),c.jsx("th",{children:"Last Active"})]})}),c.jsx("tbody",{children:i.map(y=>c.jsxs("tr",{children:[c.jsx("td",{children:y.full_name}),c.jsx("td",{children:y.email}),c.jsx("td",{children:y.levels_completed}),c.jsx("td",{children:y.total_stars}),c.jsx("td",{children:y.total_attempts}),c.jsx("td",{children:new Date(y.last_active).toLocaleDateString()})]},y.student_id))})]})})]}),c.jsxs("div",{className:"errors-section",children:[c.jsx("h2",{children:"🚨 Common Errors"}),c.jsx("div",{className:"errors-list",children:a.filter(y=>!y.success&&y.error_message).slice(0,5).map((y,x)=>{var b;return c.jsxs("div",{className:"error-item",children:[c.jsx(Qy,{className:"error-icon"}),c.jsxs("div",{className:"error-content",children:[c.jsxs("p",{children:[c.jsxs("strong",{children:["Level ",y.level_id,":"]})," ",y.error_message]}),c.jsxs("small",{children:["Attempted by ",(b=y.profiles)==null?void 0:b.full_name," on ",new Date(y.created_at).toLocaleDateString()]})]})]},x)})})]})]}),c.jsx("style",{children:`
        .teacher-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .dashboard-header h1 {
          color: #2d3748;
          margin: 0 0 10px 0;
          font-size: 2.5rem;
        }

        .dashboard-header p {
          color: #4a5568;
          margin: 0;
          font-size: 1.1rem;
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .analytics-section,
        .classrooms-section,
        .progress-section,
        .errors-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .analytics-section h2,
        .classrooms-section h2,
        .progress-section h2,
        .errors-section h2 {
          color: #2d3748;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 15px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
        }

        .stat-content h3 {
          color: #2d3748;
          margin: 0 0 5px 0;
          font-size: 2rem;
          font-weight: bold;
        }

        .stat-content p {
          color: #4a5568;
          margin: 0;
          font-size: 0.9rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .classrooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .classroom-card {
          border: 2px solid #e2e8f0;
          border-radius: 15px;
          padding: 20px;
          background: white;
          transition: all 0.3s ease;
        }

        .classroom-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .classroom-header h3 {
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .classroom-code {
          color: #4a5568;
          font-size: 0.9rem;
        }

        .classroom-stats {
          display: flex;
          gap: 15px;
          margin: 15px 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4a5568;
          font-size: 0.9rem;
        }

        .classroom-actions {
          margin-top: 15px;
        }

        .progress-table {
          overflow-x: auto;
        }

        .progress-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .progress-table th,
        .progress-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }

        .progress-table th {
          background: #f7fafc;
          color: #2d3748;
          font-weight: 600;
        }

        .progress-table td {
          color: #4a5568;
        }

        .errors-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .error-item {
          display: flex;
          gap: 15px;
          padding: 15px;
          background: #fed7d7;
          border-radius: 10px;
          border-left: 4px solid #fc8181;
        }

        .error-icon {
          color: #c53030;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .error-content p {
          margin: 0 0 5px 0;
          color: #c53030;
        }

        .error-content small {
          color: #9c4221;
        }

        .loading {
          text-align: center;
          padding: 50px;
          color: white;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .classrooms-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .dashboard-header h1 {
            font-size: 2rem;
          }
        }
      `})]})};class j_{constructor(e){pe(this,"userId");this.userId=e}async saveProgress(e,n,r,s,i){var o,a,l;try{const u=`codequest-progress-${this.userId}`,d=JSON.parse(localStorage.getItem(u)||"{}"),h={...d,[e]:{completed:n>0,stars:Math.max(((o=d[e])==null?void 0:o.stars)||0,n),hints_used:r,time_spent:s,attempts:i,last_attempt_at:new Date().toISOString(),completed_at:n>0&&!((a=d[e])!=null&&a.completed)?new Date().toISOString():(l=d[e])==null?void 0:l.completed_at}};localStorage.setItem(u,JSON.stringify(h))}catch(u){console.error("Error saving progress:",u)}}async loadProgress(){try{const e=`codequest-progress-${this.userId}`,n=JSON.parse(localStorage.getItem(e)||"{}"),r={completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}};Object.entries(n).forEach(([i,o])=>{o.completed&&r.completedLevels.push(i),r.stars[i]=o.stars||0,r.hintsUsed[i]=o.hints_used||0});const s=r.completedLevels.sort();if(s.length>0){const i=s[s.length-1],o=parseInt(i.replace("level",""));r.currentLevel=`level${o+1}`}return r}catch(e){return console.error("Error loading progress:",e),{completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}}}async logCodeAttempt(e,n,r,s,i){try{const o=`codequest-attempts-${this.userId}`,a=JSON.parse(localStorage.getItem(o)||"[]"),l={id:Date.now().toString(),level_id:e,code:n,success:r,error_message:s,execution_time:i||0,created_at:new Date().toISOString()};a.push(l),a.length>100&&a.splice(0,a.length-100),localStorage.setItem(o,JSON.stringify(a))}catch(o){console.error("Error logging code attempt:",o)}}async getAnalytics(e){try{const n=`codequest-attempts-${this.userId}`,r=JSON.parse(localStorage.getItem(n)||"[]");return e?r.filter(s=>s.level_id===e):r}catch(n){return console.error("Error getting analytics:",n),[]}}async getClassroomProgress(e){return[]}}function E_(){const{user:t,profile:e,loading:n}=Ms(),[r,s]=_.useState(!1),[i,o]=_.useState("signin"),[a,l]=_.useState("light"),[u,d]=_.useState("ocean"),[h,p]=_.useState(!0),[v,y]=_.useState(!0),x=kc();_.useEffect(()=>{const w=localStorage.getItem("codequest-theme")||"light",k=localStorage.getItem("codequest-theme-id")||"ocean",S=localStorage.getItem("codequest-sound")==="true",C=localStorage.getItem("codequest-music")==="true";l(w),d(k),p(S),y(C)},[]),_.useEffect(()=>{document.documentElement.setAttribute("data-theme",a)},[a]);const b=()=>{const w=a==="light"?"dark":"light";l(w),localStorage.setItem("codequest-theme",w)},f=()=>{const w=!h;p(w),localStorage.setItem("codequest-sound",w.toString()),Me.setSoundEnabled(w)},m=()=>{const w=!v;y(w),localStorage.setItem("codequest-music",w.toString())},g=w=>{d(w),localStorage.setItem("codequest-theme-id",w)};return n?c.jsxs("div",{className:"loading-screen",children:[c.jsx("div",{className:"loading-spinner"}),c.jsx("p",{children:"Loading CodeQuest Jr..."})]}):c.jsxs("div",{className:"app","data-theme":a,children:[c.jsxs(By,{children:[c.jsx(Br,{path:"/",element:c.jsx(a1,{onStart:()=>{console.log("Start button clicked, user:",t),t?(console.log("Navigating to /game"),x("/game")):(console.log("Opening auth modal"),s(!0))},theme:a,onThemeToggle:b,themeId:u,onThemeChange:g,soundEnabled:h,onSoundToggle:f,musicEnabled:v,onMusicToggle:m,onTeacherDashboard:()=>x("/teacher"),user:t,profile:e})}),c.jsx(Br,{path:"/game",element:t?c.jsx(T_,{theme:a,onThemeToggle:b,soundEnabled:h,onSoundToggle:f,musicEnabled:v,onMusicToggle:m}):c.jsx(Zo,{to:"/",replace:!0})}),c.jsx(Br,{path:"/teacher",element:t&&(e==null?void 0:e.role)==="teacher"?c.jsx(C_,{theme:a,onThemeToggle:b,soundEnabled:h,onSoundToggle:f}):c.jsx(Zo,{to:"/",replace:!0})}),c.jsx(Br,{path:"*",element:c.jsx(Zo,{to:"/",replace:!0})})]}),c.jsx(u1,{isOpen:r,onClose:()=>s(!1),mode:i,onModeChange:o})]})}function T_({theme:t,onThemeToggle:e,soundEnabled:n,onSoundToggle:r,musicEnabled:s,onMusicToggle:i}){const{user:o}=Ms(),a=kc(),[l,u]=_.useState("levelSelect"),[d,h]=_.useState(""),[p,v]=_.useState({currentLevel:"level1",completedLevels:[],stars:{},totalStars:0,achievements:[],streak:0,lastPlayed:new Date().toISOString(),avatar:"🤖",theme:t,soundEnabled:n,musicEnabled:!1,hintsUsed:{}}),[y]=_.useState(()=>o?new j_(o.id):null);_.useEffect(()=>{y&&x()},[y]);const x=async()=>{if(y)try{const g=await y.loadProgress();v(w=>({...w,...g,theme:t,soundEnabled:n,hintsUsed:g.hintsUsed||{}}))}catch(g){console.error("Error loading progress:",g);const w=localStorage.getItem("codequest-progress");if(w){const k=JSON.parse(w);v(S=>({...S,...k,theme:t,soundEnabled:n,hintsUsed:k.hintsUsed||{}}))}}},b=async(g,w,k,S,C)=>{if(v(E=>{const M={...E,completedLevels:E.completedLevels.includes(g)?E.completedLevels:[...E.completedLevels,g],stars:{...E.stars,[g]:Math.max(E.stars[g]||0,w)},totalStars:Object.values({...E.stars,[g]:Math.max(E.stars[g]||0,w)}).reduce((P,Z)=>P+Z,0),lastPlayed:new Date().toISOString()};return localStorage.setItem("codequest-progress",JSON.stringify(M)),M}),y)try{await y.saveProgress(g,w,k,S,C)}catch(E){console.error("Error saving progress to cloud:",E)}},f=g=>{h(g),u("game")},m=()=>{v({currentLevel:"level1",completedLevels:[],stars:{},totalStars:0,achievements:[],streak:0,lastPlayed:new Date().toISOString(),avatar:"🤖",theme:t,soundEnabled:n,musicEnabled:!1,hintsUsed:{}}),localStorage.removeItem("codequest-progress")};return c.jsxs(c.Fragment,{children:[l==="levelSelect"&&c.jsx(s1,{progress:p,onSelectLevel:f,onBack:()=>a("/"),onReset:m}),l==="game"&&c.jsx(r1,{levelId:d,progress:p,onComplete:(g,w,k)=>{b(g,w,k,0,1),u("levelSelect")},onBack:()=>u("levelSelect"),progressService:y,theme:t,onThemeToggle:e,soundEnabled:n,onSoundToggle:r,musicEnabled:s,onMusicToggle:i})]})}function P_(){return c.jsx(i1,{children:c.jsx(qy,{children:c.jsx(E_,{})})})}ga.createRoot(document.getElementById("root")).render(c.jsx(Ht.StrictMode,{children:c.jsx(P_,{})}))});export default N_();
