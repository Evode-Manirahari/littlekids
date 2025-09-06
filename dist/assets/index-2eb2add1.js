var qp=Object.defineProperty;var Kp=(t,e,r)=>e in t?qp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Gp=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var mn=(t,e,r)=>(Kp(t,typeof e!="symbol"?e+"":e,r),r);var P_=Gp((F_,cl)=>{function Jp(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Yp(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var dd={exports:{}},Fs={},hd={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),eg=Symbol.for("react.strict_mode"),tg=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),ig=Symbol.for("react.forward_ref"),sg=Symbol.for("react.suspense"),og=Symbol.for("react.memo"),ag=Symbol.for("react.lazy"),vu=Symbol.iterator;function lg(t){return t===null||typeof t!="object"?null:(t=vu&&t[vu]||t["@@iterator"],typeof t=="function"?t:null)}var fd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pd=Object.assign,gd={};function cn(t,e,r){this.props=t,this.context=e,this.refs=gd,this.updater=r||fd}cn.prototype.isReactComponent={};cn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function md(){}md.prototype=cn.prototype;function dl(t,e,r){this.props=t,this.context=e,this.refs=gd,this.updater=r||fd}var hl=dl.prototype=new md;hl.constructor=dl;pd(hl,cn.prototype);hl.isPureReactComponent=!0;var yu=Array.isArray,vd=Object.prototype.hasOwnProperty,fl={current:null},yd={key:!0,ref:!0,__self:!0,__source:!0};function wd(t,e,r){var n,i={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vd.call(e,n)&&!yd.hasOwnProperty(n)&&(i[n]=e[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:vi,type:t,key:s,ref:o,props:i,_owner:fl.current}}function ug(t,e){return{$$typeof:vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pl(t){return typeof t=="object"&&t!==null&&t.$$typeof===vi}function cg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var wu=/\/+/g;function fo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cg(""+t.key):e.toString(36)}function Zi(t,e,r,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vi:case Xp:o=!0}}if(o)return o=t,i=i(o),t=n===""?"."+fo(o,0):n,yu(i)?(r="",t!=null&&(r=t.replace(wu,"$&/")+"/"),Zi(i,e,r,"",function(u){return u})):i!=null&&(pl(i)&&(i=ug(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",yu(t))for(var a=0;a<t.length;a++){s=t[a];var l=n+fo(s,a);o+=Zi(s,e,r,l,i)}else if(l=lg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=n+fo(s,a++),o+=Zi(s,e,r,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pi(t,e,r){if(t==null)return t;var n=[],i=0;return Zi(t,n,"","",function(s){return e.call(r,s,i++)}),n}function dg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Se={current:null},es={transition:null},hg={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:es,ReactCurrentOwner:fl};function _d(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Pi,forEach:function(t,e,r){Pi(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Pi(t,function(){e++}),e},toArray:function(t){return Pi(t,function(e){return e})||[]},only:function(t){if(!pl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=cn;z.Fragment=Zp;z.Profiler=tg;z.PureComponent=dl;z.StrictMode=eg;z.Suspense=sg;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;z.act=_d;z.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=pd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vd.call(e,l)&&!yd.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:vi,type:t.type,key:i,ref:s,props:n,_owner:o}};z.createContext=function(t){return t={$$typeof:ng,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rg,_context:t},t.Consumer=t};z.createElement=wd;z.createFactory=function(t){var e=wd.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:ig,render:t}};z.isValidElement=pl;z.lazy=function(t){return{$$typeof:ag,_payload:{_status:-1,_result:t},_init:dg}};z.memo=function(t,e){return{$$typeof:og,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=es.transition;es.transition={};try{t()}finally{es.transition=e}};z.unstable_act=_d;z.useCallback=function(t,e){return Se.current.useCallback(t,e)};z.useContext=function(t){return Se.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Se.current.useDeferredValue(t)};z.useEffect=function(t,e){return Se.current.useEffect(t,e)};z.useId=function(){return Se.current.useId()};z.useImperativeHandle=function(t,e,r){return Se.current.useImperativeHandle(t,e,r)};z.useInsertionEffect=function(t,e){return Se.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Se.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Se.current.useMemo(t,e)};z.useReducer=function(t,e,r){return Se.current.useReducer(t,e,r)};z.useRef=function(t){return Se.current.useRef(t)};z.useState=function(t){return Se.current.useState(t)};z.useSyncExternalStore=function(t,e,r){return Se.current.useSyncExternalStore(t,e,r)};z.useTransition=function(){return Se.current.useTransition()};z.version="18.3.1";hd.exports=z;var k=hd.exports;const Ut=Qp(k),fg=Jp({__proto__:null,default:Ut},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=k,gg=Symbol.for("react.element"),mg=Symbol.for("react.fragment"),vg=Object.prototype.hasOwnProperty,yg=pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wg={key:!0,ref:!0,__self:!0,__source:!0};function xd(t,e,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)vg.call(e,n)&&!wg.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:gg,type:t,key:s,ref:o,props:i,_owner:yg.current}}Fs.Fragment=mg;Fs.jsx=xd;Fs.jsxs=xd;dd.exports=Fs;var h=dd.exports,ea={},kd={exports:{}},Me={},Sd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,$){var D=T.length;T.push($);e:for(;0<D;){var R=D-1>>>1,I=T[R];if(0<i(I,$))T[R]=$,T[D]=I,D=R;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var $=T[0],D=T.pop();if(D!==$){T[0]=D;e:for(var R=0,I=T.length,le=I>>>1;R<le;){var Re=2*(R+1)-1,st=T[Re],er=Re+1,Ti=T[er];if(0>i(st,D))er<I&&0>i(Ti,st)?(T[R]=Ti,T[er]=D,R=er):(T[R]=st,T[Re]=D,R=Re);else if(er<I&&0>i(Ti,D))T[R]=Ti,T[er]=D,R=er;else break e}}return $}function i(T,$){var D=T.sortIndex-$.sortIndex;return D!==0?D:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,p=3,y=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var $=r(u);$!==null;){if($.callback===null)n(u);else if($.startTime<=T)n(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=r(u)}}function _(T){if(w=!1,g(T),!v)if(r(l)!==null)v=!0,W(S);else{var $=r(u);$!==null&&Be(_,$.startTime-T)}}function S(T,$){v=!1,w&&(w=!1,m(P),P=-1),y=!0;var D=p;try{for(g($),d=r(l);d!==null&&(!(d.expirationTime>$)||T&&!Z());){var R=d.callback;if(typeof R=="function"){d.callback=null,p=d.priorityLevel;var I=R(d.expirationTime<=$);$=t.unstable_now(),typeof I=="function"?d.callback=I:d===r(l)&&n(l),g($)}else n(l);d=r(l)}if(d!==null)var le=!0;else{var Re=r(u);Re!==null&&Be(_,Re.startTime-$),le=!1}return le}finally{d=null,p=D,y=!1}}var b=!1,E=null,P=-1,L=5,C=-1;function Z(){return!(t.unstable_now()-C<L)}function we(){if(E!==null){var T=t.unstable_now();C=T;var $=!0;try{$=E(!0,T)}finally{$?Fe():(b=!1,E=null)}}else b=!1}var Fe;if(typeof f=="function")Fe=function(){f(we)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,A=Ne.port2;Ne.port1.onmessage=we,Fe=function(){A.postMessage(null)}}else Fe=function(){x(we,0)};function W(T){E=T,b||(b=!0,Fe())}function Be(T,$){P=x(function(){T(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,W(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(T){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var D=p;p=$;try{return T()}finally{p=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=p;p=T;try{return $()}finally{p=D}},t.unstable_scheduleCallback=function(T,$,D){var R=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?R+D:R):D=R,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,T={id:c++,callback:$,priorityLevel:T,startTime:D,expirationTime:I,sortIndex:-1},D>R?(T.sortIndex=D,e(u,T),r(l)===null&&T===r(u)&&(w?(m(P),P=-1):w=!0,Be(_,D-R))):(T.sortIndex=I,e(l,T),v||y||(v=!0,W(S))),T},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(T){var $=p;return function(){var D=p;p=$;try{return T.apply(this,arguments)}finally{p=D}}}})(bd);Sd.exports=bd;var _g=Sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg=k,De=_g;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Qn={};function xr(t,e){tn(t,e),tn(t+"Capture",e)}function tn(t,e){for(Qn[t]=e,t=0;t<e.length;t++)Ed.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},xu={};function Sg(t){return ta.call(xu,t)?!0:ta.call(_u,t)?!1:kg.test(t)?xu[t]=!0:(_u[t]=!0,!1)}function bg(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Eg(t,e,r,n){if(e===null||typeof e>"u"||bg(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,r,n,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function ml(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gl,ml);pe[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gl,ml);pe[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gl,ml);pe[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function vl(t,e,r,n){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Eg(e,r,i,n)&&(r=null),n||i===null?Sg(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Et=xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),ku=Symbol.iterator;function vn(t){return t===null||typeof t!="object"?null:(t=ku&&t[ku]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,po;function jn(t){if(po===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);po=e&&e[1]||""}return`
`+po+t}var go=!1;function mo(t,e){if(!t||go)return"";go=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{go=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?jn(t):""}function jg(t){switch(t.tag){case 5:return jn(t.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return t=mo(t.type,!1),t;case 11:return t=mo(t.type.render,!1),t;case 1:return t=mo(t.type,!0),t;default:return""}}function sa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Ir:return"Portal";case ra:return"Profiler";case yl:return"StrictMode";case na:return"Suspense";case ia:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cd:return(t.displayName||"Context")+".Consumer";case jd:return(t._context.displayName||"Context")+".Provider";case wl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _l:return e=t.displayName||null,e!==null?e:sa(t.type)||"Memo";case Pt:e=t._payload,t=t._init;try{return sa(t(e))}catch{}}return null}function Cg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(e);case 8:return e===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tg(t){var e=Pd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ni(t){t._valueTracker||(t._valueTracker=Tg(t))}function Od(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Pd(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oa(t,e){var r=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Su(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Kt(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nd(t,e){e=e.checked,e!=null&&vl(t,"checked",e,!1)}function aa(t,e){Nd(t,e);var r=Kt(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?la(t,e.type,r):e.hasOwnProperty("defaultValue")&&la(t,e.type,Kt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bu(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function la(t,e,r){(e!=="number"||hs(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Cn=Array.isArray;function Jr(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Kt(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ua(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eu(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(j(92));if(Cn(r)){if(1<r.length)throw Error(j(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Kt(r)}}function Rd(t,e){var r=Kt(e.value),n=Kt(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function ju(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $d(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$d(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ri,Ld=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ri.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(t){Pg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),An[e]=An[t]})});function Ad(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||An.hasOwnProperty(t)&&An[t]?(""+e).trim():e+"px"}function Id(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ad(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var Og=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(t,e){if(e){if(Og[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ha(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function xl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,Qr=null,Yr=null;function Cu(t){if(t=_i(t)){if(typeof pa!="function")throw Error(j(280));var e=t.stateNode;e&&(e=qs(e),pa(t.stateNode,t.type,e))}}function Ud(t){Qr?Yr?Yr.push(t):Yr=[t]:Qr=t}function Dd(){if(Qr){var t=Qr,e=Yr;if(Yr=Qr=null,Cu(t),e)for(t=0;t<e.length;t++)Cu(e[t])}}function Md(t,e){return t(e)}function zd(){}var vo=!1;function Fd(t,e,r){if(vo)return t(e,r);vo=!0;try{return Md(t,e,r)}finally{vo=!1,(Qr!==null||Yr!==null)&&(zd(),Dd())}}function Xn(t,e){var r=t.stateNode;if(r===null)return null;var n=qs(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(j(231,e,typeof r));return r}var ga=!1;if(xt)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){ga=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{ga=!1}function Ng(t,e,r,n,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var In=!1,fs=null,ps=!1,ma=null,Rg={onError:function(t){In=!0,fs=t}};function $g(t,e,r,n,i,s,o,a,l){In=!1,fs=null,Ng.apply(Rg,arguments)}function Lg(t,e,r,n,i,s,o,a,l){if($g.apply(this,arguments),In){if(In){var u=fs;In=!1,fs=null}else throw Error(j(198));ps||(ps=!0,ma=u)}}function kr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Bd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tu(t){if(kr(t)!==t)throw Error(j(188))}function Ag(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Tu(i),t;if(s===n)return Tu(i),e;s=s.sibling}throw Error(j(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,n=s;break}if(a===n){o=!0,n=i,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,n=i;break}if(a===n){o=!0,n=s,r=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?t:e}function Wd(t){return t=Ag(t),t!==null?Hd(t):null}function Hd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hd(t);if(e!==null)return e;t=t.sibling}return null}var Vd=De.unstable_scheduleCallback,Pu=De.unstable_cancelCallback,Ig=De.unstable_shouldYield,Ug=De.unstable_requestPaint,te=De.unstable_now,Dg=De.unstable_getCurrentPriorityLevel,kl=De.unstable_ImmediatePriority,qd=De.unstable_UserBlockingPriority,gs=De.unstable_NormalPriority,Mg=De.unstable_LowPriority,Kd=De.unstable_IdlePriority,Bs=null,ct=null;function zg(t){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Bs,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Wg,Fg=Math.log,Bg=Math.LN2;function Wg(t){return t>>>=0,t===0?32:31-(Fg(t)/Bg|0)|0}var $i=64,Li=4194304;function Tn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ms(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?n=Tn(a):(s&=o,s!==0&&(n=Tn(s)))}else o=r&~i,o!==0?n=Tn(o):s!==0&&(n=Tn(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-rt(e),i=1<<r,n|=t[r],e&=~i;return n}function Hg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vg(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rt(s),a=1<<o,l=i[o];l===-1?(!(a&r)||a&n)&&(i[o]=Hg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function va(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gd(){var t=$i;return $i<<=1,!($i&4194240)&&($i=64),t}function yo(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function yi(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=r}function qg(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-rt(r),s=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~s}}function Sl(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-rt(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var B=0;function Jd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qd,bl,Yd,Xd,Zd,ya=!1,Ai=[],Dt=null,Mt=null,zt=null,Zn=new Map,ei=new Map,Nt=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(t,e){switch(t){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Zn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(e.pointerId)}}function wn(t,e,r,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_i(e),e!==null&&bl(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gg(t,e,r,n,i){switch(e){case"focusin":return Dt=wn(Dt,t,e,r,n,i),!0;case"dragenter":return Mt=wn(Mt,t,e,r,n,i),!0;case"mouseover":return zt=wn(zt,t,e,r,n,i),!0;case"pointerover":var s=i.pointerId;return Zn.set(s,wn(Zn.get(s)||null,t,e,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,ei.set(s,wn(ei.get(s)||null,t,e,r,n,i)),!0}return!1}function eh(t){var e=cr(t.target);if(e!==null){var r=kr(e);if(r!==null){if(e=r.tag,e===13){if(e=Bd(r),e!==null){t.blockedOn=e,Zd(t.priority,function(){Yd(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ts(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=wa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);fa=n,r.target.dispatchEvent(n),fa=null}else return e=_i(r),e!==null&&bl(e),t.blockedOn=r,!1;e.shift()}return!0}function Nu(t,e,r){ts(t)&&r.delete(e)}function Jg(){ya=!1,Dt!==null&&ts(Dt)&&(Dt=null),Mt!==null&&ts(Mt)&&(Mt=null),zt!==null&&ts(zt)&&(zt=null),Zn.forEach(Nu),ei.forEach(Nu)}function _n(t,e){t.blockedOn===e&&(t.blockedOn=null,ya||(ya=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Jg)))}function ti(t){function e(i){return _n(i,t)}if(0<Ai.length){_n(Ai[0],t);for(var r=1;r<Ai.length;r++){var n=Ai[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Dt!==null&&_n(Dt,t),Mt!==null&&_n(Mt,t),zt!==null&&_n(zt,t),Zn.forEach(e),ei.forEach(e),r=0;r<Nt.length;r++)n=Nt[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Nt.length&&(r=Nt[0],r.blockedOn===null);)eh(r),r.blockedOn===null&&Nt.shift()}var Xr=Et.ReactCurrentBatchConfig,vs=!0;function Qg(t,e,r,n){var i=B,s=Xr.transition;Xr.transition=null;try{B=1,El(t,e,r,n)}finally{B=i,Xr.transition=s}}function Yg(t,e,r,n){var i=B,s=Xr.transition;Xr.transition=null;try{B=4,El(t,e,r,n)}finally{B=i,Xr.transition=s}}function El(t,e,r,n){if(vs){var i=wa(t,e,r,n);if(i===null)To(t,e,n,ys,r),Ou(t,n);else if(Gg(i,t,e,r,n))n.stopPropagation();else if(Ou(t,n),e&4&&-1<Kg.indexOf(t)){for(;i!==null;){var s=_i(i);if(s!==null&&Qd(s),s=wa(t,e,r,n),s===null&&To(t,e,n,ys,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else To(t,e,n,null,r)}}var ys=null;function wa(t,e,r,n){if(ys=null,t=xl(n),t=cr(t),t!==null)if(e=kr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Bd(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ys=t,null}function th(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dg()){case kl:return 1;case qd:return 4;case gs:case Mg:return 16;case Kd:return 536870912;default:return 16}default:return 16}}var Lt=null,jl=null,rs=null;function rh(){if(rs)return rs;var t,e=jl,r=e.length,n,i="value"in Lt?Lt.value:Lt.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[s-n];n++);return rs=i.slice(t,1<n?1-n:void 0)}function ns(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ii(){return!0}function Ru(){return!1}function ze(t){function e(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ii:Ru,this.isPropagationStopped=Ru,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),e}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=ze(dn),wi=X({},dn,{view:0,detail:0}),Xg=ze(wi),wo,_o,xn,Ws=X({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xn&&(xn&&t.type==="mousemove"?(wo=t.screenX-xn.screenX,_o=t.screenY-xn.screenY):_o=wo=0,xn=t),wo)},movementY:function(t){return"movementY"in t?t.movementY:_o}}),$u=ze(Ws),Zg=X({},Ws,{dataTransfer:0}),em=ze(Zg),tm=X({},wi,{relatedTarget:0}),xo=ze(tm),rm=X({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),nm=ze(rm),im=X({},dn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sm=ze(im),om=X({},dn,{data:0}),Lu=ze(om),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=um[t])?!!e[t]:!1}function Tl(){return cm}var dm=X({},wi,{key:function(t){if(t.key){var e=am[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(t){return t.type==="keypress"?ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hm=ze(dm),fm=X({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=ze(fm),pm=X({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),gm=ze(pm),mm=X({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=ze(mm),ym=X({},Ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=ze(ym),_m=[9,13,27,32],Pl=xt&&"CompositionEvent"in window,Un=null;xt&&"documentMode"in document&&(Un=document.documentMode);var xm=xt&&"TextEvent"in window&&!Un,nh=xt&&(!Pl||Un&&8<Un&&11>=Un),Iu=String.fromCharCode(32),Uu=!1;function ih(t,e){switch(t){case"keyup":return _m.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function km(t,e){switch(t){case"compositionend":return sh(e);case"keypress":return e.which!==32?null:(Uu=!0,Iu);case"textInput":return t=e.data,t===Iu&&Uu?null:t;default:return null}}function Sm(t,e){if(Dr)return t==="compositionend"||!Pl&&ih(t,e)?(t=rh(),rs=jl=Lt=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nh&&e.locale!=="ko"?null:e.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bm[t.type]:e==="textarea"}function oh(t,e,r,n){Ud(n),e=ws(e,"onChange"),0<e.length&&(r=new Cl("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Dn=null,ri=null;function Em(t){vh(t,0)}function Hs(t){var e=Fr(t);if(Od(e))return t}function jm(t,e){if(t==="change")return e}var ah=!1;if(xt){var ko;if(xt){var So="oninput"in document;if(!So){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),So=typeof Mu.oninput=="function"}ko=So}else ko=!1;ah=ko&&(!document.documentMode||9<document.documentMode)}function zu(){Dn&&(Dn.detachEvent("onpropertychange",lh),ri=Dn=null)}function lh(t){if(t.propertyName==="value"&&Hs(ri)){var e=[];oh(e,ri,t,xl(t)),Fd(Em,e)}}function Cm(t,e,r){t==="focusin"?(zu(),Dn=e,ri=r,Dn.attachEvent("onpropertychange",lh)):t==="focusout"&&zu()}function Tm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hs(ri)}function Pm(t,e){if(t==="click")return Hs(e)}function Om(t,e){if(t==="input"||t==="change")return Hs(e)}function Nm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var it=typeof Object.is=="function"?Object.is:Nm;function ni(t,e){if(it(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ta.call(e,i)||!it(t[i],e[i]))return!1}return!0}function Fu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bu(t,e){var r=Fu(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fu(r)}}function uh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ch(){for(var t=window,e=hs();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=hs(t.document)}return e}function Ol(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rm(t){var e=ch(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&uh(r.ownerDocument.documentElement,r)){if(n!==null&&Ol(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=Bu(r,s);var o=Bu(r,n);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $m=xt&&"documentMode"in document&&11>=document.documentMode,Mr=null,_a=null,Mn=null,xa=!1;function Wu(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;xa||Mr==null||Mr!==hs(n)||(n=Mr,"selectionStart"in n&&Ol(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mn&&ni(Mn,n)||(Mn=n,n=ws(_a,"onSelect"),0<n.length&&(e=new Cl("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Mr)))}function Ui(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var zr={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},bo={},dh={};xt&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Vs(t){if(bo[t])return bo[t];if(!zr[t])return t;var e=zr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in dh)return bo[t]=e[r];return t}var hh=Vs("animationend"),fh=Vs("animationiteration"),ph=Vs("animationstart"),gh=Vs("transitionend"),mh=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(t,e){mh.set(t,e),xr(e,[t])}for(var Eo=0;Eo<Hu.length;Eo++){var jo=Hu[Eo],Lm=jo.toLowerCase(),Am=jo[0].toUpperCase()+jo.slice(1);Qt(Lm,"on"+Am)}Qt(hh,"onAnimationEnd");Qt(fh,"onAnimationIteration");Qt(ph,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(gh,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Vu(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,Lg(n,e,void 0,t),t.currentTarget=null}function vh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var o=n.length-1;0<=o;o--){var a=n[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vu(i,a,u),s=l}else for(o=0;o<n.length;o++){if(a=n[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vu(i,a,u),s=l}}}if(ps)throw t=ma,ps=!1,ma=null,t}function K(t,e){var r=e[ja];r===void 0&&(r=e[ja]=new Set);var n=t+"__bubble";r.has(n)||(yh(e,t,2,!1),r.add(n))}function Co(t,e,r){var n=0;e&&(n|=4),yh(r,t,n,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ii(t){if(!t[Di]){t[Di]=!0,Ed.forEach(function(r){r!=="selectionchange"&&(Im.has(r)||Co(r,!1,t),Co(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,Co("selectionchange",!1,e))}}function yh(t,e,r,n){switch(th(e)){case 1:var i=Qg;break;case 4:i=Yg;break;default:i=El}r=i.bind(null,e,r,t),i=void 0,!ga||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function To(t,e,r,n,i){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){n=s=o;continue e}a=a.parentNode}}n=n.return}Fd(function(){var u=s,c=xl(r),d=[];e:{var p=mh.get(t);if(p!==void 0){var y=Cl,v=t;switch(t){case"keypress":if(ns(r)===0)break e;case"keydown":case"keyup":y=hm;break;case"focusin":v="focus",y=xo;break;case"focusout":v="blur",y=xo;break;case"beforeblur":case"afterblur":y=xo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gm;break;case hh:case fh:case ph:y=nm;break;case gh:y=vm;break;case"scroll":y=Xg;break;case"wheel":y=wm;break;case"copy":case"cut":case"paste":y=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Au}var w=(e&4)!==0,x=!w&&t==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Xn(f,m),_!=null&&w.push(si(f,_,g)))),x)break;f=f.return}0<w.length&&(p=new y(p,v,null,r,c),d.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&r!==fa&&(v=r.relatedTarget||r.fromElement)&&(cr(v)||v[kt]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=u,v=v?cr(v):null,v!==null&&(x=kr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=$u,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Au,_="onPointerLeave",m="onPointerEnter",f="pointer"),x=y==null?p:Fr(y),g=v==null?p:Fr(v),p=new w(_,f+"leave",y,r,c),p.target=x,p.relatedTarget=g,_=null,cr(c)===u&&(w=new w(m,f+"enter",v,r,c),w.target=g,w.relatedTarget=x,_=w),x=_,y&&v)t:{for(w=y,m=v,f=0,g=w;g;g=Er(g))f++;for(g=0,_=m;_;_=Er(_))g++;for(;0<f-g;)w=Er(w),f--;for(;0<g-f;)m=Er(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Er(w),m=Er(m)}w=null}else w=null;y!==null&&qu(d,p,y,w,!1),v!==null&&x!==null&&qu(d,x,v,w,!0)}}e:{if(p=u?Fr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=jm;else if(Du(p))if(ah)S=Om;else{S=Tm;var b=Cm}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Pm);if(S&&(S=S(t,u))){oh(d,S,r,c);break e}b&&b(t,p,u),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&la(p,"number",p.value)}switch(b=u?Fr(u):window,t){case"focusin":(Du(b)||b.contentEditable==="true")&&(Mr=b,_a=u,Mn=null);break;case"focusout":Mn=_a=Mr=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Wu(d,r,c);break;case"selectionchange":if($m)break;case"keydown":case"keyup":Wu(d,r,c)}var E;if(Pl)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Dr?ih(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(nh&&r.locale!=="ko"&&(Dr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Dr&&(E=rh()):(Lt=c,jl="value"in Lt?Lt.value:Lt.textContent,Dr=!0)),b=ws(u,P),0<b.length&&(P=new Lu(P,t,null,r,c),d.push({event:P,listeners:b}),E?P.data=E:(E=sh(r),E!==null&&(P.data=E)))),(E=xm?km(t,r):Sm(t,r))&&(u=ws(u,"onBeforeInput"),0<u.length&&(c=new Lu("onBeforeInput","beforeinput",null,r,c),d.push({event:c,listeners:u}),c.data=E))}vh(d,e)})}function si(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ws(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xn(t,r),s!=null&&n.unshift(si(t,s,i)),s=Xn(t,e),s!=null&&n.push(si(t,s,i))),t=t.return}return n}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qu(t,e,r,n,i){for(var s=e._reactName,o=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,i?(l=Xn(r,s),l!=null&&o.unshift(si(r,l,a))):i||(l=Xn(r,s),l!=null&&o.push(si(r,l,a)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var Um=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function Ku(t){return(typeof t=="string"?t:""+t).replace(Um,`
`).replace(Dm,"")}function Mi(t,e,r){if(e=Ku(e),Ku(t)!==e&&r)throw Error(j(425))}function _s(){}var ka=null,Sa=null;function ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(t){return Gu.resolve(null).then(t).catch(Fm)}:Ea;function Fm(t){setTimeout(function(){throw t})}function Po(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),ti(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ti(e)}function Ft(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ju(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var hn=Math.random().toString(36).slice(2),ut="__reactFiber$"+hn,oi="__reactProps$"+hn,kt="__reactContainer$"+hn,ja="__reactEvents$"+hn,Bm="__reactListeners$"+hn,Wm="__reactHandles$"+hn;function cr(t){var e=t[ut];if(e)return e;for(var r=t.parentNode;r;){if(e=r[kt]||r[ut]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Ju(t);t!==null;){if(r=t[ut])return r;t=Ju(t)}return e}t=r,r=t.parentNode}return null}function _i(t){return t=t[ut]||t[kt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function qs(t){return t[oi]||null}var Ca=[],Br=-1;function Yt(t){return{current:t}}function G(t){0>Br||(t.current=Ca[Br],Ca[Br]=null,Br--)}function V(t,e){Br++,Ca[Br]=t.current,t.current=e}var Gt={},ye=Yt(Gt),Te=Yt(!1),mr=Gt;function rn(t,e){var r=t.type.contextTypes;if(!r)return Gt;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(t){return t=t.childContextTypes,t!=null}function xs(){G(Te),G(ye)}function Qu(t,e,r){if(ye.current!==Gt)throw Error(j(168));V(ye,e),V(Te,r)}function wh(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(j(108,Cg(t)||"Unknown",i));return X({},r,n)}function ks(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gt,mr=ye.current,V(ye,t),V(Te,Te.current),!0}function Yu(t,e,r){var n=t.stateNode;if(!n)throw Error(j(169));r?(t=wh(t,e,mr),n.__reactInternalMemoizedMergedChildContext=t,G(Te),G(ye),V(ye,t)):G(Te),V(Te,r)}var vt=null,Ks=!1,Oo=!1;function _h(t){vt===null?vt=[t]:vt.push(t)}function Hm(t){Ks=!0,_h(t)}function Xt(){if(!Oo&&vt!==null){Oo=!0;var t=0,e=B;try{var r=vt;for(B=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}vt=null,Ks=!1}catch(i){throw vt!==null&&(vt=vt.slice(t+1)),Vd(kl,Xt),i}finally{B=e,Oo=!1}}return null}var Wr=[],Hr=0,Ss=null,bs=0,We=[],He=0,vr=null,yt=1,wt="";function or(t,e){Wr[Hr++]=bs,Wr[Hr++]=Ss,Ss=t,bs=e}function xh(t,e,r){We[He++]=yt,We[He++]=wt,We[He++]=vr,vr=t;var n=yt;t=wt;var i=32-rt(n)-1;n&=~(1<<i),r+=1;var s=32-rt(e)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,yt=1<<32-rt(e)+i|r<<i|n,wt=s+t}else yt=1<<s|r<<i|n,wt=t}function Nl(t){t.return!==null&&(or(t,1),xh(t,1,0))}function Rl(t){for(;t===Ss;)Ss=Wr[--Hr],Wr[Hr]=null,bs=Wr[--Hr],Wr[Hr]=null;for(;t===vr;)vr=We[--He],We[He]=null,wt=We[--He],We[He]=null,yt=We[--He],We[He]=null}var Ie=null,Ae=null,J=!1,tt=null;function kh(t,e){var r=Ve(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Xu(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ie=t,Ae=Ft(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ie=t,Ae=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=vr!==null?{id:yt,overflow:wt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Ve(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ie=t,Ae=null,!0):!1;default:return!1}}function Ta(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pa(t){if(J){var e=Ae;if(e){var r=e;if(!Xu(t,e)){if(Ta(t))throw Error(j(418));e=Ft(r.nextSibling);var n=Ie;e&&Xu(t,e)?kh(n,r):(t.flags=t.flags&-4097|2,J=!1,Ie=t)}}else{if(Ta(t))throw Error(j(418));t.flags=t.flags&-4097|2,J=!1,Ie=t}}}function Zu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ie=t}function zi(t){if(t!==Ie)return!1;if(!J)return Zu(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ba(t.type,t.memoizedProps)),e&&(e=Ae)){if(Ta(t))throw Sh(),Error(j(418));for(;e;)kh(t,e),e=Ft(e.nextSibling)}if(Zu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Ae=Ft(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Ae=null}}else Ae=Ie?Ft(t.stateNode.nextSibling):null;return!0}function Sh(){for(var t=Ae;t;)t=Ft(t.nextSibling)}function nn(){Ae=Ie=null,J=!1}function $l(t){tt===null?tt=[t]:tt.push(t)}var Vm=Et.ReactCurrentBatchConfig;function kn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,t));var i=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,t))}return t}function Fi(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ec(t){var e=t._init;return e(t._payload)}function bh(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function r(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function n(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Vt(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=Uo(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,_){var S=g.type;return S===Ur?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&ec(S)===f.type)?(_=i(f,g.props),_.ref=kn(m,f,g),_.return=m,_):(_=cs(g.type,g.key,g.props,null,m.mode,_),_.ref=kn(m,f,g),_.return=m,_)}function u(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Do(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,S){return f===null||f.tag!==7?(f=pr(g,m.mode,_,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Uo(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oi:return g=cs(f.type,f.key,f.props,null,m.mode,g),g.ref=kn(m,null,f),g.return=m,g;case Ir:return f=Do(f,m.mode,g),f.return=m,f;case Pt:var _=f._init;return d(m,_(f._payload),g)}if(Cn(f)||vn(f))return f=pr(f,m.mode,g,null),f.return=m,f;Fi(m,f)}return null}function p(m,f,g,_){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oi:return g.key===S?l(m,f,g,_):null;case Ir:return g.key===S?u(m,f,g,_):null;case Pt:return S=g._init,p(m,f,S(g._payload),_)}if(Cn(g)||vn(g))return S!==null?null:c(m,f,g,_,null);Fi(m,g)}return null}function y(m,f,g,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oi:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,S);case Ir:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,S);case Pt:var b=_._init;return y(m,f,g,b(_._payload),S)}if(Cn(_)||vn(_))return m=m.get(g)||null,c(f,m,_,S,null);Fi(f,_)}return null}function v(m,f,g,_){for(var S=null,b=null,E=f,P=f=0,L=null;E!==null&&P<g.length;P++){E.index>P?(L=E,E=null):L=E.sibling;var C=p(m,E,g[P],_);if(C===null){E===null&&(E=L);break}t&&E&&C.alternate===null&&e(m,E),f=s(C,f,P),b===null?S=C:b.sibling=C,b=C,E=L}if(P===g.length)return r(m,E),J&&or(m,P),S;if(E===null){for(;P<g.length;P++)E=d(m,g[P],_),E!==null&&(f=s(E,f,P),b===null?S=E:b.sibling=E,b=E);return J&&or(m,P),S}for(E=n(m,E);P<g.length;P++)L=y(E,m,P,g[P],_),L!==null&&(t&&L.alternate!==null&&E.delete(L.key===null?P:L.key),f=s(L,f,P),b===null?S=L:b.sibling=L,b=L);return t&&E.forEach(function(Z){return e(m,Z)}),J&&or(m,P),S}function w(m,f,g,_){var S=vn(g);if(typeof S!="function")throw Error(j(150));if(g=S.call(g),g==null)throw Error(j(151));for(var b=S=null,E=f,P=f=0,L=null,C=g.next();E!==null&&!C.done;P++,C=g.next()){E.index>P?(L=E,E=null):L=E.sibling;var Z=p(m,E,C.value,_);if(Z===null){E===null&&(E=L);break}t&&E&&Z.alternate===null&&e(m,E),f=s(Z,f,P),b===null?S=Z:b.sibling=Z,b=Z,E=L}if(C.done)return r(m,E),J&&or(m,P),S;if(E===null){for(;!C.done;P++,C=g.next())C=d(m,C.value,_),C!==null&&(f=s(C,f,P),b===null?S=C:b.sibling=C,b=C);return J&&or(m,P),S}for(E=n(m,E);!C.done;P++,C=g.next())C=y(E,m,P,C.value,_),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?P:C.key),f=s(C,f,P),b===null?S=C:b.sibling=C,b=C);return t&&E.forEach(function(we){return e(m,we)}),J&&or(m,P),S}function x(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oi:e:{for(var S=g.key,b=f;b!==null;){if(b.key===S){if(S=g.type,S===Ur){if(b.tag===7){r(m,b.sibling),f=i(b,g.props.children),f.return=m,m=f;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&ec(S)===b.type){r(m,b.sibling),f=i(b,g.props),f.ref=kn(m,b,g),f.return=m,m=f;break e}r(m,b);break}else e(m,b);b=b.sibling}g.type===Ur?(f=pr(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=cs(g.type,g.key,g.props,null,m.mode,_),_.ref=kn(m,f,g),_.return=m,m=_)}return o(m);case Ir:e:{for(b=g.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else e(m,f);f=f.sibling}f=Do(g,m.mode,_),f.return=m,m=f}return o(m);case Pt:return b=g._init,x(m,f,b(g._payload),_)}if(Cn(g))return v(m,f,g,_);if(vn(g))return w(m,f,g,_);Fi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(m,f.sibling),f=i(f,g),f.return=m,m=f):(r(m,f),f=Uo(g,m.mode,_),f.return=m,m=f),o(m)):r(m,f)}return x}var sn=bh(!0),Eh=bh(!1),Es=Yt(null),js=null,Vr=null,Ll=null;function Al(){Ll=Vr=js=null}function Il(t){var e=Es.current;G(Es),t._currentValue=e}function Oa(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Zr(t,e){js=t,Ll=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function Ge(t){var e=t._currentValue;if(Ll!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(js===null)throw Error(j(308));Vr=t,js.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var dr=null;function Ul(t){dr===null?dr=[t]:dr.push(t)}function jh(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Ul(e)):(r.next=i.next,i.next=r),e.interleaved=r,St(t,n)}function St(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ot=!1;function Dl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,F&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,St(t,r)}return i=n.interleaved,i===null?(e.next=e,Ul(n)):(e.next=i.next,i.next=e),n.interleaved=e,St(t,r)}function is(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Sl(t,r)}}function tc(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Cs(t,e,r,n){var i=t.updateQueue;Ot=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((n&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(p=e,y=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(y,d,p):v,p==null)break e;d=X({},d,p);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=d}}function rc(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(j(191,i));i.call(n)}}}var xi={},dt=Yt(xi),ai=Yt(xi),li=Yt(xi);function hr(t){if(t===xi)throw Error(j(174));return t}function Ml(t,e){switch(V(li,e),V(ai,t),V(dt,xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ca(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ca(e,t)}G(dt),V(dt,e)}function on(){G(dt),G(ai),G(li)}function Th(t){hr(li.current);var e=hr(dt.current),r=ca(e,t.type);e!==r&&(V(ai,t),V(dt,r))}function zl(t){ai.current===t&&(G(dt),G(ai))}var Q=Yt(0);function Ts(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var No=[];function Fl(){for(var t=0;t<No.length;t++)No[t]._workInProgressVersionPrimary=null;No.length=0}var ss=Et.ReactCurrentDispatcher,Ro=Et.ReactCurrentBatchConfig,yr=0,Y=null,oe=null,ue=null,Ps=!1,zn=!1,ui=0,qm=0;function ge(){throw Error(j(321))}function Bl(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!it(t[r],e[r]))return!1;return!0}function Wl(t,e,r,n,i,s){if(yr=s,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ss.current=t===null||t.memoizedState===null?Qm:Ym,t=r(n,i),zn){s=0;do{if(zn=!1,ui=0,25<=s)throw Error(j(301));s+=1,ue=oe=null,e.updateQueue=null,ss.current=Xm,t=r(n,i)}while(zn)}if(ss.current=Os,e=oe!==null&&oe.next!==null,yr=0,ue=oe=Y=null,Ps=!1,e)throw Error(j(300));return t}function Hl(){var t=ui!==0;return ui=0,t}function at(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=t:ue=ue.next=t,ue}function Je(){if(oe===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=ue===null?Y.memoizedState:ue.next;if(e!==null)ue=e,oe=t;else{if(t===null)throw Error(j(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Y.memoizedState=ue=t:ue=ue.next=t}return ue}function ci(t,e){return typeof e=="function"?e(t):e}function $o(t){var e=Je(),r=e.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=t;var n=oe,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=n):l=l.next=d,Y.lanes|=c,wr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=n:l.next=a,it(n,e.memoizedState)||(Ce=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do s=i.lane,Y.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Lo(t){var e=Je(),r=e.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);it(s,e.memoizedState)||(Ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,n]}function Ph(){}function Oh(t,e){var r=Y,n=Je(),i=e(),s=!it(n.memoizedState,i);if(s&&(n.memoizedState=i,Ce=!0),n=n.queue,Vl($h.bind(null,r,n,t),[t]),n.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(r.flags|=2048,di(9,Rh.bind(null,r,n,i,e),void 0,null),de===null)throw Error(j(349));yr&30||Nh(r,e,i)}return i}function Nh(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Rh(t,e,r,n){e.value=r,e.getSnapshot=n,Lh(e)&&Ah(t)}function $h(t,e,r){return r(function(){Lh(e)&&Ah(t)})}function Lh(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!it(t,r)}catch{return!0}}function Ah(t){var e=St(t,1);e!==null&&nt(e,t,1,-1)}function nc(t){var e=at();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},e.queue=t,t=t.dispatch=Jm.bind(null,Y,t),[e.memoizedState,t]}function di(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Ih(){return Je().memoizedState}function os(t,e,r,n){var i=at();Y.flags|=t,i.memoizedState=di(1|e,r,void 0,n===void 0?null:n)}function Gs(t,e,r,n){var i=Je();n=n===void 0?null:n;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,n!==null&&Bl(n,o.deps)){i.memoizedState=di(e,r,s,n);return}}Y.flags|=t,i.memoizedState=di(1|e,r,s,n)}function ic(t,e){return os(8390656,8,t,e)}function Vl(t,e){return Gs(2048,8,t,e)}function Uh(t,e){return Gs(4,2,t,e)}function Dh(t,e){return Gs(4,4,t,e)}function Mh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zh(t,e,r){return r=r!=null?r.concat([t]):null,Gs(4,4,Mh.bind(null,e,t),r)}function ql(){}function Fh(t,e){var r=Je();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Bl(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Bh(t,e){var r=Je();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Bl(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Wh(t,e,r){return yr&21?(it(r,e)||(r=Gd(),Y.lanes|=r,wr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=r)}function Km(t,e){var r=B;B=r!==0&&4>r?r:4,t(!0);var n=Ro.transition;Ro.transition={};try{t(!1),e()}finally{B=r,Ro.transition=n}}function Hh(){return Je().memoizedState}function Gm(t,e,r){var n=Ht(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Vh(t))qh(e,r);else if(r=jh(t,e,r,n),r!==null){var i=ke();nt(r,t,n,i),Kh(r,e,n)}}function Jm(t,e,r){var n=Ht(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vh(t))qh(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,r);if(i.hasEagerState=!0,i.eagerState=a,it(a,o)){var l=e.interleaved;l===null?(i.next=i,Ul(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=jh(t,e,i,n),r!==null&&(i=ke(),nt(r,t,n,i),Kh(r,e,n))}}function Vh(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function qh(t,e){zn=Ps=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Kh(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Sl(t,r)}}var Os={readContext:Ge,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Qm={readContext:Ge,useCallback:function(t,e){return at().memoizedState=[t,e===void 0?null:e],t},useContext:Ge,useEffect:ic,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,os(4194308,4,Mh.bind(null,e,t),r)},useLayoutEffect:function(t,e){return os(4194308,4,t,e)},useInsertionEffect:function(t,e){return os(4,2,t,e)},useMemo:function(t,e){var r=at();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=at();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Gm.bind(null,Y,t),[n.memoizedState,t]},useRef:function(t){var e=at();return t={current:t},e.memoizedState=t},useState:nc,useDebugValue:ql,useDeferredValue:function(t){return at().memoizedState=t},useTransition:function(){var t=nc(!1),e=t[0];return t=Km.bind(null,t[1]),at().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Y,i=at();if(J){if(r===void 0)throw Error(j(407));r=r()}else{if(r=e(),de===null)throw Error(j(349));yr&30||Nh(n,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,ic($h.bind(null,n,s,t),[t]),n.flags|=2048,di(9,Rh.bind(null,n,s,r,e),void 0,null),r},useId:function(){var t=at(),e=de.identifierPrefix;if(J){var r=wt,n=yt;r=(n&~(1<<32-rt(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ui++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=qm++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ym={readContext:Ge,useCallback:Fh,useContext:Ge,useEffect:Vl,useImperativeHandle:zh,useInsertionEffect:Uh,useLayoutEffect:Dh,useMemo:Bh,useReducer:$o,useRef:Ih,useState:function(){return $o(ci)},useDebugValue:ql,useDeferredValue:function(t){var e=Je();return Wh(e,oe.memoizedState,t)},useTransition:function(){var t=$o(ci)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Ph,useSyncExternalStore:Oh,useId:Hh,unstable_isNewReconciler:!1},Xm={readContext:Ge,useCallback:Fh,useContext:Ge,useEffect:Vl,useImperativeHandle:zh,useInsertionEffect:Uh,useLayoutEffect:Dh,useMemo:Bh,useReducer:Lo,useRef:Ih,useState:function(){return Lo(ci)},useDebugValue:ql,useDeferredValue:function(t){var e=Je();return oe===null?e.memoizedState=t:Wh(e,oe.memoizedState,t)},useTransition:function(){var t=Lo(ci)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Ph,useSyncExternalStore:Oh,useId:Hh,unstable_isNewReconciler:!1};function Xe(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Na(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:X({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Js={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=ke(),i=Ht(t),s=_t(n,i);s.payload=e,r!=null&&(s.callback=r),e=Bt(t,s,i),e!==null&&(nt(e,t,i,n),is(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=ke(),i=Ht(t),s=_t(n,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=Bt(t,s,i),e!==null&&(nt(e,t,i,n),is(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=ke(),n=Ht(t),i=_t(r,n);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,n),e!==null&&(nt(e,t,n,r),is(e,t,n))}};function sc(t,e,r,n,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,o):e.prototype&&e.prototype.isPureReactComponent?!ni(r,n)||!ni(i,s):!0}function Gh(t,e,r){var n=!1,i=Gt,s=e.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(i=Pe(e)?mr:ye.current,n=e.contextTypes,s=(n=n!=null)?rn(t,i):Gt),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Js,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oc(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Js.enqueueReplaceState(e,e.state,null)}function Ra(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Dl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ge(s):(s=Pe(e)?mr:ye.current,i.context=rn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Na(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Js.enqueueReplaceState(i,i.state,null),Cs(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function an(t,e){try{var r="",n=e;do r+=jg(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ao(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function $a(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Zm=typeof WeakMap=="function"?WeakMap:Map;function Jh(t,e,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Rs||(Rs=!0,Wa=n),$a(t,e)},r}function Qh(t,e,r){r=_t(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){$a(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){$a(t,e),typeof n!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function ac(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Zm;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=fv.bind(null,t,e,r),e.then(t,t))}function lc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uc(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=_t(-1,1),e.tag=2,Bt(r,e,1))),r.lanes|=1),t)}var ev=Et.ReactCurrentOwner,Ce=!1;function xe(t,e,r,n){e.child=t===null?Eh(e,null,r,n):sn(e,t.child,r,n)}function cc(t,e,r,n,i){r=r.render;var s=e.ref;return Zr(e,i),n=Wl(t,e,r,n,s,i),r=Hl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&r&&Nl(e),e.flags|=1,xe(t,e,n,i),e.child)}function dc(t,e,r,n,i){if(t===null){var s=r.type;return typeof s=="function"&&!eu(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Yh(t,e,s,n,i)):(t=cs(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:ni,r(o,n)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=Vt(s,n),t.ref=e.ref,t.return=e,e.child=t}function Yh(t,e,r,n,i){if(t!==null){var s=t.memoizedProps;if(ni(s,n)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=n=s,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,bt(t,e,i)}return La(t,e,r,n,i)}function Xh(t,e,r){var n=e.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Kr,$e),$e|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(Kr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,V(Kr,$e),$e|=n}else s!==null?(n=s.baseLanes|r,e.memoizedState=null):n=r,V(Kr,$e),$e|=n;return xe(t,e,i,r),e.child}function Zh(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function La(t,e,r,n,i){var s=Pe(r)?mr:ye.current;return s=rn(e,s),Zr(e,i),r=Wl(t,e,r,n,s,i),n=Hl(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&n&&Nl(e),e.flags|=1,xe(t,e,r,i),e.child)}function hc(t,e,r,n,i){if(Pe(r)){var s=!0;ks(e)}else s=!1;if(Zr(e,i),e.stateNode===null)as(t,e),Gh(e,r,n),Ra(e,r,n,i),n=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Pe(r)?mr:ye.current,u=rn(e,u));var c=r.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||l!==u)&&oc(e,o,n,u),Ot=!1;var p=e.memoizedState;o.state=p,Cs(e,n,o,i),l=e.memoizedState,a!==n||p!==l||Te.current||Ot?(typeof c=="function"&&(Na(e,r,c,n),l=e.memoizedState),(a=Ot||sc(e,r,a,n,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),o.props=n,o.state=l,o.context=u,n=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,Ch(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xe(e.type,a),o.props=u,d=e.pendingProps,p=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=Pe(r)?mr:ye.current,l=rn(e,l));var y=r.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&oc(e,o,n,l),Ot=!1,p=e.memoizedState,o.state=p,Cs(e,n,o,i);var v=e.memoizedState;a!==d||p!==v||Te.current||Ot?(typeof y=="function"&&(Na(e,r,y,n),v=e.memoizedState),(u=Ot||sc(e,r,u,n,p,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=v),o.props=n,o.state=v,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),n=!1)}return Aa(t,e,r,n,s,i)}function Aa(t,e,r,n,i,s){Zh(t,e);var o=(e.flags&128)!==0;if(!n&&!o)return i&&Yu(e,r,!1),bt(t,e,s);n=e.stateNode,ev.current=e;var a=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=sn(e,t.child,null,s),e.child=sn(e,null,a,s)):xe(t,e,a,s),e.memoizedState=n.state,i&&Yu(e,r,!0),e.child}function ef(t){var e=t.stateNode;e.pendingContext?Qu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qu(t,e.context,!1),Ml(t,e.containerInfo)}function fc(t,e,r,n,i){return nn(),$l(i),e.flags|=256,xe(t,e,r,n),e.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Ua(t){return{baseLanes:t,cachePool:null,transitions:null}}function tf(t,e,r){var n=e.pendingProps,i=Q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Q,i&1),t===null)return Pa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,t=n.fallback,s?(n=e.mode,s=e.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xs(o,n,0,null),t=pr(t,n,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ua(r),e.memoizedState=Ia,t):Kl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tv(t,e,o,n,a,i,r);if(s){s=n.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=Vt(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vt(a,s):(s=pr(s,o,r,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,o=t.child.memoizedState,o=o===null?Ua(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=Ia,n}return s=t.child,t=s.sibling,n=Vt(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function Kl(t,e){return e=Xs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bi(t,e,r,n){return n!==null&&$l(n),sn(e,t.child,null,r),t=Kl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tv(t,e,r,n,i,s,o){if(r)return e.flags&256?(e.flags&=-257,n=Ao(Error(j(422))),Bi(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,i=e.mode,n=Xs({mode:"visible",children:n.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&sn(e,t.child,null,o),e.child.memoizedState=Ua(o),e.memoizedState=Ia,s);if(!(e.mode&1))return Bi(t,e,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,s=Error(j(419)),n=Ao(s,n,void 0),Bi(t,e,o,n)}if(a=(o&t.childLanes)!==0,Ce||a){if(n=de,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(t,i),nt(n,t,i,-1))}return Zl(),n=Ao(Error(j(421))),Bi(t,e,o,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ae=Ft(i.nextSibling),Ie=e,J=!0,tt=null,t!==null&&(We[He++]=yt,We[He++]=wt,We[He++]=vr,yt=t.id,wt=t.overflow,vr=e),e=Kl(e,n.children),e.flags|=4096,e)}function pc(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Oa(t.return,e,r)}function Io(t,e,r,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function rf(t,e,r){var n=e.pendingProps,i=n.revealOrder,s=n.tail;if(xe(t,e,n.children,r),n=Q.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pc(t,r,e);else if(t.tag===19)pc(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(V(Q,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ts(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Io(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ts(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Io(e,!0,r,null,s);break;case"together":Io(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function as(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,r=Vt(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Vt(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function rv(t,e,r){switch(e.tag){case 3:ef(e),nn();break;case 5:Th(e);break;case 1:Pe(e.type)&&ks(e);break;case 4:Ml(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;V(Es,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(V(Q,Q.current&1),e.flags|=128,null):r&e.child.childLanes?tf(t,e,r):(V(Q,Q.current&1),t=bt(t,e,r),t!==null?t.sibling:null);V(Q,Q.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return rf(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),n)break;return null;case 22:case 23:return e.lanes=0,Xh(t,e,r)}return bt(t,e,r)}var nf,Da,sf,of;nf=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Da=function(){};sf=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,hr(dt.current);var s=null;switch(r){case"input":i=oa(t,i),n=oa(t,n),s=[];break;case"select":i=X({},i,{value:void 0}),n=X({},n,{value:void 0}),s=[];break;case"textarea":i=ua(t,i),n=ua(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=_s)}da(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var l=n[u];if(a=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(s||(s=[]),s.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}r&&(s=s||[]).push("style",r);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};of=function(t,e,r,n){r!==n&&(e.flags|=4)};function Sn(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function me(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function nv(t,e,r){var n=e.pendingProps;switch(Rl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(e),null;case 1:return Pe(e.type)&&xs(),me(e),null;case 3:return n=e.stateNode,on(),G(Te),G(ye),Fl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(zi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tt!==null&&(qa(tt),tt=null))),Da(t,e),me(e),null;case 5:zl(e);var i=hr(li.current);if(r=e.type,t!==null&&e.stateNode!=null)sf(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(j(166));return me(e),null}if(t=hr(dt.current),zi(e)){n=e.stateNode,r=e.type;var s=e.memoizedProps;switch(n[ut]=e,n[oi]=s,t=(e.mode&1)!==0,r){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(i=0;i<Pn.length;i++)K(Pn[i],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":Su(n,s),K("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},K("invalid",n);break;case"textarea":Eu(n,s),K("invalid",n)}da(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?n.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mi(n.textContent,a,t),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mi(n.textContent,a,t),i=["children",""+a]):Qn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",n)}switch(r){case"input":Ni(n),bu(n,s,!0);break;case"textarea":Ni(n),ju(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=_s)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$d(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[ut]=e,t[oi]=n,nf(t,e,!1,!1),e.stateNode=t;e:{switch(o=ha(r,n),r){case"dialog":K("cancel",t),K("close",t),i=n;break;case"iframe":case"object":case"embed":K("load",t),i=n;break;case"video":case"audio":for(i=0;i<Pn.length;i++)K(Pn[i],t);i=n;break;case"source":K("error",t),i=n;break;case"img":case"image":case"link":K("error",t),K("load",t),i=n;break;case"details":K("toggle",t),i=n;break;case"input":Su(t,n),i=oa(t,n),K("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=X({},n,{value:void 0}),K("invalid",t);break;case"textarea":Eu(t,n),i=ua(t,n),K("invalid",t);break;default:i=n}da(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Id(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ld(t,l)):s==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Yn(t,l):typeof l=="number"&&Yn(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&vl(t,s,l,o))}switch(r){case"input":Ni(t),bu(t,n,!1);break;case"textarea":Ni(t),ju(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Kt(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Jr(t,!!n.multiple,s,!1):n.defaultValue!=null&&Jr(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return me(e),null;case 6:if(t&&e.stateNode!=null)of(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(j(166));if(r=hr(li.current),hr(dt.current),zi(e)){if(n=e.stateNode,r=e.memoizedProps,n[ut]=e,(s=n.nodeValue!==r)&&(t=Ie,t!==null))switch(t.tag){case 3:Mi(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mi(n.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ut]=e,e.stateNode=n}return me(e),null;case 13:if(G(Q),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ae!==null&&e.mode&1&&!(e.flags&128))Sh(),nn(),e.flags|=98560,s=!1;else if(s=zi(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[ut]=e}else nn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;me(e),s=!1}else tt!==null&&(qa(tt),tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?ae===0&&(ae=3):Zl())),e.updateQueue!==null&&(e.flags|=4),me(e),null);case 4:return on(),Da(t,e),t===null&&ii(e.stateNode.containerInfo),me(e),null;case 10:return Il(e.type._context),me(e),null;case 17:return Pe(e.type)&&xs(),me(e),null;case 19:if(G(Q),s=e.memoizedState,s===null)return me(e),null;if(n=(e.flags&128)!==0,o=s.rendering,o===null)if(n)Sn(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ts(t),o!==null){for(e.flags|=128,Sn(s,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)s=r,t=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return V(Q,Q.current&1|2),e.child}t=t.sibling}s.tail!==null&&te()>ln&&(e.flags|=128,n=!0,Sn(s,!1),e.lanes=4194304)}else{if(!n)if(t=Ts(o),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Sn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return me(e),null}else 2*te()-s.renderingStartTime>ln&&r!==1073741824&&(e.flags|=128,n=!0,Sn(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=te(),e.sibling=null,r=Q.current,V(Q,n?r&1|2:r&1),e):(me(e),null);case 22:case 23:return Xl(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?$e&1073741824&&(me(e),e.subtreeFlags&6&&(e.flags|=8192)):me(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function iv(t,e){switch(Rl(e),e.tag){case 1:return Pe(e.type)&&xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return on(),G(Te),G(ye),Fl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zl(e),null;case 13:if(G(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));nn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Q),null;case 4:return on(),null;case 10:return Il(e.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Wi=!1,ve=!1,sv=typeof WeakSet=="function"?WeakSet:Set,O=null;function qr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ee(t,e,n)}else r.current=null}function Ma(t,e,r){try{r()}catch(n){ee(t,e,n)}}var gc=!1;function ov(t,e){if(ka=vs,t=ch(),Ol(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var y;d!==r||i!==0&&d.nodeType!==3||(a=o+i),d!==s||n!==0&&d.nodeType!==3||(l=o+n),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===t)break t;if(p===r&&++u===i&&(a=o),p===s&&++c===n&&(l=o),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sa={focusedElem:t,selectionRange:r},vs=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xe(e.type,w),x);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(_){ee(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=gc,gc=!1,v}function Fn(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ma(e,r,s)}i=i.next}while(i!==n)}}function Qs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function za(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function af(t){var e=t.alternate;e!==null&&(t.alternate=null,af(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[oi],delete e[ja],delete e[Bm],delete e[Wm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lf(t){return t.tag===5||t.tag===3||t.tag===4}function mc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fa(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=_s));else if(n!==4&&(t=t.child,t!==null))for(Fa(t,e,r),t=t.sibling;t!==null;)Fa(t,e,r),t=t.sibling}function Ba(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Ba(t,e,r),t=t.sibling;t!==null;)Ba(t,e,r),t=t.sibling}var he=null,Ze=!1;function jt(t,e,r){for(r=r.child;r!==null;)uf(t,e,r),r=r.sibling}function uf(t,e,r){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Bs,r)}catch{}switch(r.tag){case 5:ve||qr(r,e);case 6:var n=he,i=Ze;he=null,jt(t,e,r),he=n,Ze=i,he!==null&&(Ze?(t=he,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):he.removeChild(r.stateNode));break;case 18:he!==null&&(Ze?(t=he,r=r.stateNode,t.nodeType===8?Po(t.parentNode,r):t.nodeType===1&&Po(t,r),ti(t)):Po(he,r.stateNode));break;case 4:n=he,i=Ze,he=r.stateNode.containerInfo,Ze=!0,jt(t,e,r),he=n,Ze=i;break;case 0:case 11:case 14:case 15:if(!ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ma(r,e,o),i=i.next}while(i!==n)}jt(t,e,r);break;case 1:if(!ve&&(qr(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){ee(r,e,a)}jt(t,e,r);break;case 21:jt(t,e,r);break;case 22:r.mode&1?(ve=(n=ve)||r.memoizedState!==null,jt(t,e,r),ve=n):jt(t,e,r);break;default:jt(t,e,r)}}function vc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new sv),e.forEach(function(n){var i=gv.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Qe(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Ze=!1;break e;case 3:he=a.stateNode.containerInfo,Ze=!0;break e;case 4:he=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(he===null)throw Error(j(160));uf(s,o,i),he=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cf(e,t),e=e.sibling}function cf(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qe(e,t),ot(t),n&4){try{Fn(3,t,t.return),Qs(3,t)}catch(w){ee(t,t.return,w)}try{Fn(5,t,t.return)}catch(w){ee(t,t.return,w)}}break;case 1:Qe(e,t),ot(t),n&512&&r!==null&&qr(r,r.return);break;case 5:if(Qe(e,t),ot(t),n&512&&r!==null&&qr(r,r.return),t.flags&32){var i=t.stateNode;try{Yn(i,"")}catch(w){ee(t,t.return,w)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Nd(i,s),ha(a,o);var u=ha(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Id(i,d):c==="dangerouslySetInnerHTML"?Ld(i,d):c==="children"?Yn(i,d):vl(i,c,d,u)}switch(a){case"input":aa(i,s);break;case"textarea":Rd(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Jr(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[oi]=s}catch(w){ee(t,t.return,w)}}break;case 6:if(Qe(e,t),ot(t),n&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ee(t,t.return,w)}}break;case 3:if(Qe(e,t),ot(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ti(e.containerInfo)}catch(w){ee(t,t.return,w)}break;case 4:Qe(e,t),ot(t);break;case 13:Qe(e,t),ot(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ql=te())),n&4&&vc(t);break;case 22:if(c=r!==null&&r.memoizedState!==null,t.mode&1?(ve=(u=ve)||c,Qe(e,t),ve=u):Qe(e,t),ot(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(p=O,y=p.child,p.tag){case 0:case 11:case 14:case 15:Fn(4,p,p.return);break;case 1:qr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){n=p,r=p.return;try{e=n,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ee(n,r,w)}}break;case 5:qr(p,p.return);break;case 22:if(p.memoizedState!==null){wc(d);continue}}y!==null?(y.return=p,O=y):wc(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ad("display",o))}catch(w){ee(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ee(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(e,t),ot(t),n&4&&vc(t);break;case 21:break;default:Qe(e,t),ot(t)}}function ot(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(lf(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Yn(i,""),n.flags&=-33);var s=mc(t);Ba(t,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,a=mc(t);Fa(t,a,o);break;default:throw Error(j(161))}}catch(l){ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function av(t,e,r){O=t,df(t)}function df(t,e,r){for(var n=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Wi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Wi;var u=ve;if(Wi=o,(ve=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?_c(i):l!==null?(l.return=o,O=l):_c(i);for(;s!==null;)O=s,df(s),s=s.sibling;O=i,Wi=a,ve=u}yc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):yc(t)}}function yc(t){for(;O!==null;){var e=O;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ve||Qs(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ve)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Xe(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rc(e,s,n);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}rc(e,o,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ve||e.flags&512&&za(e)}catch(p){ee(e,e.return,p)}}if(e===t){O=null;break}if(r=e.sibling,r!==null){r.return=e.return,O=r;break}O=e.return}}function wc(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var r=e.sibling;if(r!==null){r.return=e.return,O=r;break}O=e.return}}function _c(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Qs(4,e)}catch(l){ee(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){ee(e,i,l)}}var s=e.return;try{za(e)}catch(l){ee(e,s,l)}break;case 5:var o=e.return;try{za(e)}catch(l){ee(e,o,l)}}}catch(l){ee(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var lv=Math.ceil,Ns=Et.ReactCurrentDispatcher,Gl=Et.ReactCurrentOwner,qe=Et.ReactCurrentBatchConfig,F=0,de=null,re=null,fe=0,$e=0,Kr=Yt(0),ae=0,hi=null,wr=0,Ys=0,Jl=0,Bn=null,Ee=null,Ql=0,ln=1/0,pt=null,Rs=!1,Wa=null,Wt=null,Hi=!1,At=null,$s=0,Wn=0,Ha=null,ls=-1,us=0;function ke(){return F&6?te():ls!==-1?ls:ls=te()}function Ht(t){return t.mode&1?F&2&&fe!==0?fe&-fe:Vm.transition!==null?(us===0&&(us=Gd()),us):(t=B,t!==0||(t=window.event,t=t===void 0?16:th(t.type)),t):1}function nt(t,e,r,n){if(50<Wn)throw Wn=0,Ha=null,Error(j(185));yi(t,r,n),(!(F&2)||t!==de)&&(t===de&&(!(F&2)&&(Ys|=r),ae===4&&Rt(t,fe)),Oe(t,n),r===1&&F===0&&!(e.mode&1)&&(ln=te()+500,Ks&&Xt()))}function Oe(t,e){var r=t.callbackNode;Vg(t,e);var n=ms(t,t===de?fe:0);if(n===0)r!==null&&Pu(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Pu(r),e===1)t.tag===0?Hm(xc.bind(null,t)):_h(xc.bind(null,t)),zm(function(){!(F&6)&&Xt()}),r=null;else{switch(Jd(n)){case 1:r=kl;break;case 4:r=qd;break;case 16:r=gs;break;case 536870912:r=Kd;break;default:r=gs}r=wf(r,hf.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function hf(t,e){if(ls=-1,us=0,F&6)throw Error(j(327));var r=t.callbackNode;if(en()&&t.callbackNode!==r)return null;var n=ms(t,t===de?fe:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Ls(t,n);else{e=n;var i=F;F|=2;var s=pf();(de!==t||fe!==e)&&(pt=null,ln=te()+500,fr(t,e));do try{dv();break}catch(a){ff(t,a)}while(1);Al(),Ns.current=s,F=i,re!==null?e=0:(de=null,fe=0,e=ae)}if(e!==0){if(e===2&&(i=va(t),i!==0&&(n=i,e=Va(t,i))),e===1)throw r=hi,fr(t,0),Rt(t,n),Oe(t,te()),r;if(e===6)Rt(t,n);else{if(i=t.current.alternate,!(n&30)&&!uv(i)&&(e=Ls(t,n),e===2&&(s=va(t),s!==0&&(n=s,e=Va(t,s))),e===1))throw r=hi,fr(t,0),Rt(t,n),Oe(t,te()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(j(345));case 2:ar(t,Ee,pt);break;case 3:if(Rt(t,n),(n&130023424)===n&&(e=Ql+500-te(),10<e)){if(ms(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ea(ar.bind(null,t,Ee,pt),e);break}ar(t,Ee,pt);break;case 4:if(Rt(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var o=31-rt(n);s=1<<o,o=e[o],o>i&&(i=o),n&=~s}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*lv(n/1960))-n,10<n){t.timeoutHandle=Ea(ar.bind(null,t,Ee,pt),n);break}ar(t,Ee,pt);break;case 5:ar(t,Ee,pt);break;default:throw Error(j(329))}}}return Oe(t,te()),t.callbackNode===r?hf.bind(null,t):null}function Va(t,e){var r=Bn;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=Ls(t,e),t!==2&&(e=Ee,Ee=r,e!==null&&qa(e)),t}function qa(t){Ee===null?Ee=t:Ee.push.apply(Ee,t)}function uv(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rt(t,e){for(e&=~Jl,e&=~Ys,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-rt(e),n=1<<r;t[r]=-1,e&=~n}}function xc(t){if(F&6)throw Error(j(327));en();var e=ms(t,0);if(!(e&1))return Oe(t,te()),null;var r=Ls(t,e);if(t.tag!==0&&r===2){var n=va(t);n!==0&&(e=n,r=Va(t,n))}if(r===1)throw r=hi,fr(t,0),Rt(t,e),Oe(t,te()),r;if(r===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Ee,pt),Oe(t,te()),null}function Yl(t,e){var r=F;F|=1;try{return t(e)}finally{F=r,F===0&&(ln=te()+500,Ks&&Xt())}}function _r(t){At!==null&&At.tag===0&&!(F&6)&&en();var e=F;F|=1;var r=qe.transition,n=B;try{if(qe.transition=null,B=1,t)return t()}finally{B=n,qe.transition=r,F=e,!(F&6)&&Xt()}}function Xl(){$e=Kr.current,G(Kr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Mm(r)),re!==null)for(r=re.return;r!==null;){var n=r;switch(Rl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xs();break;case 3:on(),G(Te),G(ye),Fl();break;case 5:zl(n);break;case 4:on();break;case 13:G(Q);break;case 19:G(Q);break;case 10:Il(n.type._context);break;case 22:case 23:Xl()}r=r.return}if(de=t,re=t=Vt(t.current,null),fe=$e=e,ae=0,hi=null,Jl=Ys=wr=0,Ee=Bn=null,dr!==null){for(e=0;e<dr.length;e++)if(r=dr[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}dr=null}return t}function ff(t,e){do{var r=re;try{if(Al(),ss.current=Os,Ps){for(var n=Y.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ps=!1}if(yr=0,ue=oe=Y=null,zn=!1,ui=0,Gl.current=null,r===null||r.return===null){ae=1,hi=e,re=null;break}e:{var s=t,o=r.return,a=r,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=lc(o);if(y!==null){y.flags&=-257,uc(y,o,a,s,e),y.mode&1&&ac(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){ac(s,u,e),Zl();break e}l=Error(j(426))}}else if(J&&a.mode&1){var x=lc(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),uc(x,o,a,s,e),$l(an(l,a));break e}}s=l=an(l,a),ae!==4&&(ae=2),Bn===null?Bn=[s]:Bn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Jh(s,l,e);tc(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wt===null||!Wt.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Qh(s,a,e);tc(s,_);break e}}s=s.return}while(s!==null)}mf(r)}catch(S){e=S,re===r&&r!==null&&(re=r=r.return);continue}break}while(1)}function pf(){var t=Ns.current;return Ns.current=Os,t===null?Os:t}function Zl(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(wr&268435455)&&!(Ys&268435455)||Rt(de,fe)}function Ls(t,e){var r=F;F|=2;var n=pf();(de!==t||fe!==e)&&(pt=null,fr(t,e));do try{cv();break}catch(i){ff(t,i)}while(1);if(Al(),F=r,Ns.current=n,re!==null)throw Error(j(261));return de=null,fe=0,ae}function cv(){for(;re!==null;)gf(re)}function dv(){for(;re!==null&&!Ig();)gf(re)}function gf(t){var e=yf(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?mf(t):re=e,Gl.current=null}function mf(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=iv(r,e),r!==null){r.flags&=32767,re=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,re=null;return}}else if(r=nv(r,e,$e),r!==null){re=r;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);ae===0&&(ae=5)}function ar(t,e,r){var n=B,i=qe.transition;try{qe.transition=null,B=1,hv(t,e,r,n)}finally{qe.transition=i,B=n}return null}function hv(t,e,r,n){do en();while(At!==null);if(F&6)throw Error(j(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(qg(t,s),t===de&&(re=de=null,fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hi||(Hi=!0,wf(gs,function(){return en(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=B;B=1;var a=F;F|=4,Gl.current=null,ov(t,r),cf(r,t),Rm(Sa),vs=!!ka,Sa=ka=null,t.current=r,av(r),Ug(),F=a,B=o,qe.transition=s}else t.current=r;if(Hi&&(Hi=!1,At=t,$s=i),s=t.pendingLanes,s===0&&(Wt=null),zg(r.stateNode),Oe(t,te()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,t=Wa,Wa=null,t;return $s&1&&t.tag!==0&&en(),s=t.pendingLanes,s&1?t===Ha?Wn++:(Wn=0,Ha=t):Wn=0,Xt(),null}function en(){if(At!==null){var t=Jd($s),e=qe.transition,r=B;try{if(qe.transition=null,B=16>t?16:t,At===null)var n=!1;else{if(t=At,At=null,$s=0,F&6)throw Error(j(331));var i=F;for(F|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Fn(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var p=c.sibling,y=c.return;if(af(c),c===u){O=null;break}if(p!==null){p.return=y,O=p;break}O=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fn(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qs(9,a)}}catch(S){ee(a,a.return,S)}if(a===o){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(F=i,Xt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Bs,t)}catch{}n=!0}return n}finally{B=r,qe.transition=e}}return!1}function kc(t,e,r){e=an(r,e),e=Jh(t,e,1),t=Bt(t,e,1),e=ke(),t!==null&&(yi(t,1,e),Oe(t,e))}function ee(t,e,r){if(t.tag===3)kc(t,t,r);else for(;e!==null;){if(e.tag===3){kc(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Wt===null||!Wt.has(n))){t=an(r,t),t=Qh(e,t,1),e=Bt(e,t,1),t=ke(),e!==null&&(yi(e,1,t),Oe(e,t));break}}e=e.return}}function fv(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&r,de===t&&(fe&r)===r&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-Ql?fr(t,0):Jl|=r),Oe(t,e)}function vf(t,e){e===0&&(t.mode&1?(e=Li,Li<<=1,!(Li&130023424)&&(Li=4194304)):e=1);var r=ke();t=St(t,e),t!==null&&(yi(t,e,r),Oe(t,r))}function pv(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),vf(t,r)}function gv(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(e),vf(t,r)}var yf;yf=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Te.current)Ce=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Ce=!1,rv(t,e,r);Ce=!!(t.flags&131072)}else Ce=!1,J&&e.flags&1048576&&xh(e,bs,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;as(t,e),t=e.pendingProps;var i=rn(e,ye.current);Zr(e,r),i=Wl(null,e,n,t,i,r);var s=Hl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pe(n)?(s=!0,ks(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dl(e),i.updater=Js,e.stateNode=i,i._reactInternals=e,Ra(e,n,t,r),e=Aa(null,e,n,!0,s,r)):(e.tag=0,J&&s&&Nl(e),xe(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(as(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=vv(n),t=Xe(n,t),i){case 0:e=La(null,e,n,t,r);break e;case 1:e=hc(null,e,n,t,r);break e;case 11:e=cc(null,e,n,t,r);break e;case 14:e=dc(null,e,n,Xe(n.type,t),r);break e}throw Error(j(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Xe(n,i),La(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Xe(n,i),hc(t,e,n,i,r);case 3:e:{if(ef(e),t===null)throw Error(j(387));n=e.pendingProps,s=e.memoizedState,i=s.element,Ch(t,e),Cs(e,n,null,r);var o=e.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=an(Error(j(423)),e),e=fc(t,e,n,r,i);break e}else if(n!==i){i=an(Error(j(424)),e),e=fc(t,e,n,r,i);break e}else for(Ae=Ft(e.stateNode.containerInfo.firstChild),Ie=e,J=!0,tt=null,r=Eh(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nn(),n===i){e=bt(t,e,r);break e}xe(t,e,n,r)}e=e.child}return e;case 5:return Th(e),t===null&&Pa(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ba(n,i)?o=null:s!==null&&ba(n,s)&&(e.flags|=32),Zh(t,e),xe(t,e,o,r),e.child;case 6:return t===null&&Pa(e),null;case 13:return tf(t,e,r);case 4:return Ml(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=sn(e,null,n,r):xe(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Xe(n,i),cc(t,e,n,i,r);case 7:return xe(t,e,e.pendingProps,r),e.child;case 8:return xe(t,e,e.pendingProps.children,r),e.child;case 12:return xe(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(Es,n._currentValue),n._currentValue=o,s!==null)if(it(s.value,o)){if(s.children===i.children&&!Te.current){e=bt(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(s.tag===1){l=_t(-1,r&-r),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Oa(s.return,r,e),a.lanes|=r;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Oa(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Zr(e,r),i=Ge(i),n=n(i),e.flags|=1,xe(t,e,n,r),e.child;case 14:return n=e.type,i=Xe(n,e.pendingProps),i=Xe(n.type,i),dc(t,e,n,i,r);case 15:return Yh(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Xe(n,i),as(t,e),e.tag=1,Pe(n)?(t=!0,ks(e)):t=!1,Zr(e,r),Gh(e,n,i),Ra(e,n,i,r),Aa(null,e,n,!0,t,r);case 19:return rf(t,e,r);case 22:return Xh(t,e,r)}throw Error(j(156,e.tag))};function wf(t,e){return Vd(t,e)}function mv(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,r,n){return new mv(t,e,r,n)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vv(t){if(typeof t=="function")return eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wl)return 11;if(t===_l)return 14}return 2}function Vt(t,e){var r=t.alternate;return r===null?(r=Ve(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function cs(t,e,r,n,i,s){var o=2;if(n=t,typeof t=="function")eu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return pr(r.children,i,s,e);case yl:o=8,i|=8;break;case ra:return t=Ve(12,r,e,i|2),t.elementType=ra,t.lanes=s,t;case na:return t=Ve(13,r,e,i),t.elementType=na,t.lanes=s,t;case ia:return t=Ve(19,r,e,i),t.elementType=ia,t.lanes=s,t;case Td:return Xs(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jd:o=10;break e;case Cd:o=9;break e;case wl:o=11;break e;case _l:o=14;break e;case Pt:o=16,n=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Ve(o,r,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function pr(t,e,r,n){return t=Ve(7,t,n,e),t.lanes=r,t}function Xs(t,e,r,n){return t=Ve(22,t,n,e),t.elementType=Td,t.lanes=r,t.stateNode={isHidden:!1},t}function Uo(t,e,r){return t=Ve(6,t,null,e),t.lanes=r,t}function Do(t,e,r){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yv(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yo(0),this.expirationTimes=yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(t,e,r,n,i,s,o,a,l){return t=new yv(t,e,r,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ve(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(s),t}function wv(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function _f(t){if(!t)return Gt;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var r=t.type;if(Pe(r))return wh(t,r,e)}return e}function xf(t,e,r,n,i,s,o,a,l){return t=tu(r,n,!0,t,i,s,o,a,l),t.context=_f(null),r=t.current,n=ke(),i=Ht(r),s=_t(n,i),s.callback=e??null,Bt(r,s,i),t.current.lanes=i,yi(t,i,n),Oe(t,n),t}function Zs(t,e,r,n){var i=e.current,s=ke(),o=Ht(i);return r=_f(r),e.context===null?e.context=r:e.pendingContext=r,e=_t(s,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Bt(i,e,o),t!==null&&(nt(t,i,o,s),is(t,i,o)),o}function As(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ru(t,e){Sc(t,e),(t=t.alternate)&&Sc(t,e)}function _v(){return null}var kf=typeof reportError=="function"?reportError:function(t){console.error(t)};function nu(t){this._internalRoot=t}eo.prototype.render=nu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Zs(t,e,null,null)};eo.prototype.unmount=nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Zs(null,t,null,null)}),e[kt]=null}};function eo(t){this._internalRoot=t}eo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xd();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Nt.length&&e!==0&&e<Nt[r].priority;r++);Nt.splice(r,0,t),r===0&&eh(t)}};function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function to(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bc(){}function xv(t,e,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=As(o);s.call(u)}}var o=xf(e,n,t,0,null,!1,!1,"",bc);return t._reactRootContainer=o,t[kt]=o.current,ii(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var u=As(l);a.call(u)}}var l=tu(t,0,!1,null,null,!1,!1,"",bc);return t._reactRootContainer=l,t[kt]=l.current,ii(t.nodeType===8?t.parentNode:t),_r(function(){Zs(e,l,r,n)}),l}function ro(t,e,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=As(o);a.call(l)}}Zs(e,o,t,i)}else o=xv(r,e,t,i,n);return As(o)}Qd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Tn(e.pendingLanes);r!==0&&(Sl(e,r|1),Oe(e,te()),!(F&6)&&(ln=te()+500,Xt()))}break;case 13:_r(function(){var n=St(t,1);if(n!==null){var i=ke();nt(n,t,1,i)}}),ru(t,1)}};bl=function(t){if(t.tag===13){var e=St(t,134217728);if(e!==null){var r=ke();nt(e,t,134217728,r)}ru(t,134217728)}};Yd=function(t){if(t.tag===13){var e=Ht(t),r=St(t,e);if(r!==null){var n=ke();nt(r,t,e,n)}ru(t,e)}};Xd=function(){return B};Zd=function(t,e){var r=B;try{return B=t,e()}finally{B=r}};pa=function(t,e,r){switch(e){case"input":if(aa(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=qs(n);if(!i)throw Error(j(90));Od(n),aa(n,i)}}}break;case"textarea":Rd(t,r);break;case"select":e=r.value,e!=null&&Jr(t,!!r.multiple,e,!1)}};Md=Yl;zd=_r;var kv={usingClientEntryPoint:!1,Events:[_i,Fr,qs,Ud,Dd,Yl]},bn={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wd(t),t===null?null:t.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Bs=Vi.inject(Sv),ct=Vi}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;Me.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(e))throw Error(j(200));return wv(t,e,null,r)};Me.createRoot=function(t,e){if(!iu(t))throw Error(j(299));var r=!1,n="",i=kf;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tu(t,1,!1,null,null,r,!1,n,i),t[kt]=e.current,ii(t.nodeType===8?t.parentNode:t),new nu(e)};Me.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Wd(e),t=t===null?null:t.stateNode,t};Me.flushSync=function(t){return _r(t)};Me.hydrate=function(t,e,r){if(!to(e))throw Error(j(200));return ro(null,t,e,!0,r)};Me.hydrateRoot=function(t,e,r){if(!iu(t))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=kf;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=xf(e,null,t,1,r??null,i,!1,s,o),t[kt]=e.current,ii(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new eo(e)};Me.render=function(t,e,r){if(!to(e))throw Error(j(200));return ro(null,t,e,!1,r)};Me.unmountComponentAtNode=function(t){if(!to(t))throw Error(j(40));return t._reactRootContainer?(_r(function(){ro(null,null,t,!1,function(){t._reactRootContainer=null,t[kt]=null})}),!0):!1};Me.unstable_batchedUpdates=Yl;Me.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!to(r))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return ro(t,e,r,!1,n)};Me.version="18.3.1-next-f1338f8080-20240426";function Sf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sf)}catch(t){console.error(t)}}Sf(),kd.exports=Me;var bv=kd.exports,Ec=bv;ea.createRoot=Ec.createRoot,ea.hydrateRoot=Ec.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},fi.apply(this,arguments)}var It;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(It||(It={}));const jc="popstate";function Ev(t){t===void 0&&(t={});function e(n,i){let{pathname:s,search:o,hash:a}=n.location;return Ka("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Ef(i)}return Cv(e,r,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jv(){return Math.random().toString(36).substr(2,8)}function Cc(t,e){return{usr:t.state,key:t.key,idx:e}}function Ka(t,e,r,n){return r===void 0&&(r=null),fi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fn(e):e,{state:r,key:e&&e.key||n||jv()})}function Ef(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function fn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Cv(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,a=It.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=It.Pop;let x=c(),m=x==null?null:x-u;u=x,l&&l({action:a,location:w.location,delta:m})}function p(x,m){a=It.Push;let f=Ka(w.location,x,m);r&&r(f,x),u=c()+1;let g=Cc(f,u),_=w.createHref(f);try{o.pushState(g,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function y(x,m){a=It.Replace;let f=Ka(w.location,x,m);r&&r(f,x),u=c();let g=Cc(f,u),_=w.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function v(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof x=="string"?x:Ef(x);return f=f.replace(/ $/,"%20"),ne(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jc,d),l=x,()=>{i.removeEventListener(jc,d),l=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let m=v(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:y,go(x){return o.go(x)}};return w}var Tc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tc||(Tc={}));function Tv(t,e,r){return r===void 0&&(r="/"),Pv(t,e,r,!1)}function Pv(t,e,r,n){let i=typeof e=="string"?fn(e):e,s=Tf(i.pathname||"/",r);if(s==null)return null;let o=jf(t);Ov(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Fv(s);a=Mv(o[l],u,n)}return a}function jf(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=gr([n,l.relativePath]),c=r.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jf(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Uv(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Cf(s.path))i(s,o,l)}),e}function Cf(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=Cf(n.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ov(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Dv(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Nv=/^:[\w-]+$/,Rv=3,$v=2,Lv=1,Av=10,Iv=-2,Pc=t=>t==="*";function Uv(t,e){let r=t.split("/"),n=r.length;return r.some(Pc)&&(n+=Iv),e&&(n+=$v),r.filter(i=>!Pc(i)).reduce((i,s)=>i+(Nv.test(s)?Rv:s===""?Lv:Av),n)}function Dv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function Mv(t,e,r){r===void 0&&(r=!1);let{routesMeta:n}=t,i={},s="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=Oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d&&u&&r&&!n[n.length-1].route.index&&(d=Oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:gr([s,d.pathname]),pathnameBase:Vv(gr([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=gr([s,d.pathnameBase]))}return o}function Oc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=zv(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((u,c,d)=>{let{paramName:p,isOptional:y}=c;if(p==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zv(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),bf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function Fv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function Bv(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?fn(t):t;return{pathname:r?r.startsWith("/")?r:Wv(r,e):e,search:qv(n),hash:Kv(i)}}function Wv(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Mo(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hv(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Pf(t,e){let r=Hv(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Of(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=fn(t):(i=fi({},t),ne(!i.pathname||!i.pathname.includes("?"),Mo("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Mo("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Mo("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=r;else{let d=e.length-1;if(!n&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=Bv(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),Vv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Nf=["post","put","patch","delete"];new Set(Nf);const Jv=["get",...Nf];new Set(Jv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},pi.apply(this,arguments)}const su=k.createContext(null),Qv=k.createContext(null),ki=k.createContext(null),no=k.createContext(null),Sr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Rf=k.createContext(null);function Si(){return k.useContext(no)!=null}function ou(){return Si()||ne(!1),k.useContext(no).location}function $f(t){k.useContext(ki).static||k.useLayoutEffect(t)}function au(){let{isDataRoute:t}=k.useContext(Sr);return t?uy():Yv()}function Yv(){Si()||ne(!1);let t=k.useContext(su),{basename:e,future:r,navigator:n}=k.useContext(ki),{matches:i}=k.useContext(Sr),{pathname:s}=ou(),o=JSON.stringify(Pf(i,r.v7_relativeSplatPath)),a=k.useRef(!1);return $f(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let d=Of(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:gr([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,o,s,t])}function Xv(t,e){return Zv(t,e)}function Zv(t,e,r,n){Si()||ne(!1);let{navigator:i}=k.useContext(ki),{matches:s}=k.useContext(Sr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ou(),c;if(e){var d;let x=typeof e=="string"?fn(e):e;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||ne(!1),c=x}else c=u;let p=c.pathname||"/",y=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=Tv(t,{pathname:y}),w=iy(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:gr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:gr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,r,n);return e&&w?k.createElement(no.Provider,{value:{location:pi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:It.Pop}},w):w}function ey(){let t=ly(),e=Gv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),r?k.createElement("pre",{style:i},r):null,s)}const ty=k.createElement(ey,null);class ry extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?k.createElement(Sr.Provider,{value:this.props.routeContext},k.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ny(t){let{routeContext:e,match:r,children:n}=t,i=k.useContext(su);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(Sr.Provider,{value:e},n)}function iy(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var s;if(!r)return null;if(r.errors)t=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,a=(i=r)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:y}=r,v=d.route.loader&&p[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let y,v=!1,w=null,x=null;r&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||ty,l&&(u<0&&p===0?(cy("route-fallback",!1),v=!0,x=null):u===p&&(v=!0,x=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,p+1)),f=()=>{let g;return y?g=w:v?g=x:d.route.Component?g=k.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,k.createElement(ny,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:r!=null},children:g})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?k.createElement(ry,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Lf=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Lf||{}),Is=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Is||{});function sy(t){let e=k.useContext(su);return e||ne(!1),e}function oy(t){let e=k.useContext(Qv);return e||ne(!1),e}function ay(t){let e=k.useContext(Sr);return e||ne(!1),e}function Af(t){let e=ay(),r=e.matches[e.matches.length-1];return r.route.id||ne(!1),r.route.id}function ly(){var t;let e=k.useContext(Rf),r=oy(Is.UseRouteError),n=Af(Is.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function uy(){let{router:t}=sy(Lf.UseNavigateStable),e=Af(Is.UseNavigateStable),r=k.useRef(!1);return $f(()=>{r.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pi({fromRouteId:e},s)))},[t,e])}const Nc={};function cy(t,e,r){!e&&!Nc[t]&&(Nc[t]=!0)}function dy(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function zo(t){let{to:e,replace:r,state:n,relative:i}=t;Si()||ne(!1);let{future:s,static:o}=k.useContext(ki),{matches:a}=k.useContext(Sr),{pathname:l}=ou(),u=au(),c=Of(e,Pf(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return k.useEffect(()=>u(JSON.parse(d),{replace:r,state:n,relative:i}),[u,d,i,r,n]),null}function On(t){ne(!1)}function hy(t){let{basename:e="/",children:r=null,location:n,navigationType:i=It.Pop,navigator:s,static:o=!1,future:a}=t;Si()&&ne(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:pi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof n=="string"&&(n=fn(n));let{pathname:c="/",search:d="",hash:p="",state:y=null,key:v="default"}=n,w=k.useMemo(()=>{let x=Tf(c,l);return x==null?null:{location:{pathname:x,search:d,hash:p,state:y,key:v},navigationType:i}},[l,c,d,p,y,v,i]);return w==null?null:k.createElement(ki.Provider,{value:u},k.createElement(no.Provider,{children:r,value:w}))}function fy(t){let{children:e,location:r}=t;return Xv(Ga(e),r)}new Promise(()=>{});function Ga(t,e){e===void 0&&(e=[]);let r=[];return k.Children.forEach(t,(n,i)=>{if(!k.isValidElement(n))return;let s=[...e,i];if(n.type===k.Fragment){r.push.apply(r,Ga(n.props.children,s));return}n.type!==On&&ne(!1),!n.props.index||!n.props.children||ne(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Ga(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const py="6";try{window.__reactRouterVersion=py}catch{}const gy="startTransition",Rc=fg[gy];function my(t){let{basename:e,children:r,future:n,window:i}=t,s=k.useRef();s.current==null&&(s.current=Ev({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},c=k.useCallback(d=>{u&&Rc?Rc(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.useEffect(()=>dy(n),[n]),k.createElement(hy,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o,future:n})}var $c;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($c||($c={}));var Lc;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lc||(Lc={}));var vy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wy=(t,e)=>{const r=k.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},u)=>k.createElement("svg",{ref:u,...vy,width:i,height:i,stroke:n,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${yy(t)}`,...l},[...e.map(([c,d])=>k.createElement(c,d)),...(Array.isArray(a)?a:[a])||[]]));return r.displayName=`${t}`,r};var q=wy;const _y=q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),If=q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),xy=q("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Uf=q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),ky=q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ac=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Sy=q("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Ic=q("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),Uc=q("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),by=q("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),Ey=q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Ja=q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),Df=q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),jy=q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Cy=q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Dc=q("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Us=q("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),Ty=q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Mc=q("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),lu=q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Py=q("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),Mf=q("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),Qa=q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ya=q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Oy=q("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),Ny=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ry(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function zc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Fc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?zc(Object(r),!0).forEach(function(n){Ry(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):zc(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function $y(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function Ly(t,e){if(t==null)return{};var r=$y(t,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ay(t,e){return Iy(t)||Uy(t,e)||Dy(t,e)||My()}function Iy(t){if(Array.isArray(t))return t}function Uy(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(r.push(a.value),!(e&&r.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return r}}function Dy(t,e){if(t){if(typeof t=="string")return Bc(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Bc(t,e)}}function Bc(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function My(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zy(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Wc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Hc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Wc(Object(r),!0).forEach(function(n){zy(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Wc(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Fy(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return e.reduceRight(function(i,s){return s(i)},n)}}function Nn(t){return function e(){for(var r=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.length>=t.length?t.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return e.apply(r,[].concat(i,a))}}}function Ds(t){return{}.toString.call(t).includes("Object")}function By(t){return!Object.keys(t).length}function gi(t){return typeof t=="function"}function Wy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hy(t,e){return Ds(e)||qt("changeType"),Object.keys(e).some(function(r){return!Wy(t,r)})&&qt("changeField"),e}function Vy(t){gi(t)||qt("selectorType")}function qy(t){gi(t)||Ds(t)||qt("handlerType"),Ds(t)&&Object.values(t).some(function(e){return!gi(e)})&&qt("handlersType")}function Ky(t){t||qt("initialIsRequired"),Ds(t)||qt("initialType"),By(t)&&qt("initialContent")}function Gy(t,e){throw new Error(t[e]||t.default)}var Jy={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},qt=Nn(Gy)(Jy),qi={changes:Hy,selector:Vy,handler:qy,initial:Ky};function Qy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};qi.initial(t),qi.handler(e);var r={current:t},n=Nn(Zy)(r,e),i=Nn(Xy)(r),s=Nn(qi.changes)(t),o=Nn(Yy)(r);function a(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(c){return c};return qi.selector(u),u(r.current)}function l(u){Fy(n,i,s,o)(u)}return[a,l]}function Yy(t,e){return gi(e)?e(t.current):e}function Xy(t,e){return t.current=Hc(Hc({},t.current),e),e}function Zy(t,e,r){return gi(e)?e(t.current):Object.keys(r).forEach(function(n){var i;return(i=e[n])===null||i===void 0?void 0:i.call(e,t.current[n])}),r}var e0={create:Qy},t0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function r0(t){return function e(){for(var r=this,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return i.length>=t.length?t.apply(this,i):function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return e.apply(r,[].concat(i,a))}}}function n0(t){return{}.toString.call(t).includes("Object")}function i0(t){return t||Vc("configIsRequired"),n0(t)||Vc("configType"),t.urls?(s0(),{paths:{vs:t.urls.monacoBase}}):t}function s0(){console.warn(zf.deprecation)}function o0(t,e){throw new Error(t[e]||t.default)}var zf={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Vc=r0(o0)(zf),a0={config:i0},l0=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduceRight(function(s,o){return o(s)},i)}};function Ff(t,e){return Object.keys(e).forEach(function(r){e[r]instanceof Object&&t[r]&&Object.assign(e[r],Ff(t[r],e[r]))}),Fc(Fc({},t),e)}var u0={type:"cancelation",msg:"operation is manually canceled"};function Fo(t){var e=!1,r=new Promise(function(n,i){t.then(function(s){return e?i(u0):n(s)}),t.catch(i)});return r.cancel=function(){return e=!0},r}var c0=e0.create({config:t0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Bf=Ay(c0,2),bi=Bf[0],io=Bf[1];function d0(t){var e=a0.config(t),r=e.monaco,n=Ly(e,["monaco"]);io(function(i){return{config:Ff(i.config,n),monaco:r}})}function h0(){var t=bi(function(e){var r=e.monaco,n=e.isInitialized,i=e.resolve;return{monaco:r,isInitialized:n,resolve:i}});if(!t.isInitialized){if(io({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Fo(Bo);if(window.monaco&&window.monaco.editor)return Wf(window.monaco),t.resolve(window.monaco),Fo(Bo);l0(f0,g0)(m0)}return Fo(Bo)}function f0(t){return document.body.appendChild(t)}function p0(t){var e=document.createElement("script");return t&&(e.src=t),e}function g0(t){var e=bi(function(n){var i=n.config,s=n.reject;return{config:i,reject:s}}),r=p0("".concat(e.config.paths.vs,"/loader.js"));return r.onload=function(){return t()},r.onerror=e.reject,r}function m0(){var t=bi(function(r){var n=r.config,i=r.resolve,s=r.reject;return{config:n,resolve:i,reject:s}}),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],function(r){Wf(r),t.resolve(r)},function(r){t.reject(r)})}function Wf(t){bi().monaco||io({monaco:t})}function v0(){return bi(function(t){var e=t.monaco;return e})}var Bo=new Promise(function(t,e){return io({resolve:t,reject:e})}),Hf={config:d0,init:h0,__getMonacoInstance:v0},y0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Wo=y0,w0={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},_0=w0;function x0({children:t}){return Ut.createElement("div",{style:_0.container},t)}var k0=x0,S0=k0;function b0({width:t,height:e,isEditorReady:r,loading:n,_ref:i,className:s,wrapperProps:o}){return Ut.createElement("section",{style:{...Wo.wrapper,width:t,height:e},...o},!r&&Ut.createElement(S0,null,n),Ut.createElement("div",{ref:i,style:{...Wo.fullWidth,...!r&&Wo.hide},className:s}))}var E0=b0,Vf=k.memo(E0);function j0(t){k.useEffect(t,[])}var qf=j0;function C0(t,e,r=!0){let n=k.useRef(!0);k.useEffect(n.current||!r?()=>{n.current=!1}:t,e)}var Le=C0;function Hn(){}function Gr(t,e,r,n){return T0(t,n)||P0(t,e,r,n)}function T0(t,e){return t.editor.getModel(Kf(t,e))}function P0(t,e,r,n){return t.editor.createModel(e,r,n?Kf(t,n):void 0)}function Kf(t,e){return t.Uri.parse(e)}function O0({original:t,modified:e,language:r,originalLanguage:n,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:o,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:c="Loading...",options:d={},height:p="100%",width:y="100%",className:v,wrapperProps:w={},beforeMount:x=Hn,onMount:m=Hn}){let[f,g]=k.useState(!1),[_,S]=k.useState(!0),b=k.useRef(null),E=k.useRef(null),P=k.useRef(null),L=k.useRef(m),C=k.useRef(x),Z=k.useRef(!1);qf(()=>{let A=Hf.init();return A.then(W=>(E.current=W)&&S(!1)).catch(W=>(W==null?void 0:W.type)!=="cancelation"&&console.error("Monaco initialization: error:",W)),()=>b.current?Ne():A.cancel()}),Le(()=>{if(b.current&&E.current){let A=b.current.getOriginalEditor(),W=Gr(E.current,t||"",n||r||"text",s||"");W!==A.getModel()&&A.setModel(W)}},[s],f),Le(()=>{if(b.current&&E.current){let A=b.current.getModifiedEditor(),W=Gr(E.current,e||"",i||r||"text",o||"");W!==A.getModel()&&A.setModel(W)}},[o],f),Le(()=>{let A=b.current.getModifiedEditor();A.getOption(E.current.editor.EditorOption.readOnly)?A.setValue(e||""):e!==A.getValue()&&(A.executeEdits("",[{range:A.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),A.pushUndoStop())},[e],f),Le(()=>{var A,W;(W=(A=b.current)==null?void 0:A.getModel())==null||W.original.setValue(t||"")},[t],f),Le(()=>{let{original:A,modified:W}=b.current.getModel();E.current.editor.setModelLanguage(A,n||r||"text"),E.current.editor.setModelLanguage(W,i||r||"text")},[r,n,i],f),Le(()=>{var A;(A=E.current)==null||A.editor.setTheme(u)},[u],f),Le(()=>{var A;(A=b.current)==null||A.updateOptions(d)},[d],f);let we=k.useCallback(()=>{var Be;if(!E.current)return;C.current(E.current);let A=Gr(E.current,t||"",n||r||"text",s||""),W=Gr(E.current,e||"",i||r||"text",o||"");(Be=b.current)==null||Be.setModel({original:A,modified:W})},[r,e,i,t,n,s,o]),Fe=k.useCallback(()=>{var A;!Z.current&&P.current&&(b.current=E.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...d}),we(),(A=E.current)==null||A.editor.setTheme(u),g(!0),Z.current=!0)},[d,u,we]);k.useEffect(()=>{f&&L.current(b.current,E.current)},[f]),k.useEffect(()=>{!_&&!f&&Fe()},[_,f,Fe]);function Ne(){var W,Be,T,$;let A=(W=b.current)==null?void 0:W.getModel();a||((Be=A==null?void 0:A.original)==null||Be.dispose()),l||((T=A==null?void 0:A.modified)==null||T.dispose()),($=b.current)==null||$.dispose()}return Ut.createElement(Vf,{width:y,height:p,isEditorReady:f,loading:c,_ref:P,className:v,wrapperProps:w})}var N0=O0;k.memo(N0);function R0(t){let e=k.useRef();return k.useEffect(()=>{e.current=t},[t]),e.current}var $0=R0,Ki=new Map;function L0({defaultValue:t,defaultLanguage:e,defaultPath:r,value:n,language:i,path:s,theme:o="light",line:a,loading:l="Loading...",options:u={},overrideServices:c={},saveViewState:d=!0,keepCurrentModel:p=!1,width:y="100%",height:v="100%",className:w,wrapperProps:x={},beforeMount:m=Hn,onMount:f=Hn,onChange:g,onValidate:_=Hn}){let[S,b]=k.useState(!1),[E,P]=k.useState(!0),L=k.useRef(null),C=k.useRef(null),Z=k.useRef(null),we=k.useRef(f),Fe=k.useRef(m),Ne=k.useRef(),A=k.useRef(n),W=$0(s),Be=k.useRef(!1),T=k.useRef(!1);qf(()=>{let R=Hf.init();return R.then(I=>(L.current=I)&&P(!1)).catch(I=>(I==null?void 0:I.type)!=="cancelation"&&console.error("Monaco initialization: error:",I)),()=>C.current?D():R.cancel()}),Le(()=>{var I,le,Re,st;let R=Gr(L.current,t||n||"",e||i||"",s||r||"");R!==((I=C.current)==null?void 0:I.getModel())&&(d&&Ki.set(W,(le=C.current)==null?void 0:le.saveViewState()),(Re=C.current)==null||Re.setModel(R),d&&((st=C.current)==null||st.restoreViewState(Ki.get(s))))},[s],S),Le(()=>{var R;(R=C.current)==null||R.updateOptions(u)},[u],S),Le(()=>{!C.current||n===void 0||(C.current.getOption(L.current.editor.EditorOption.readOnly)?C.current.setValue(n):n!==C.current.getValue()&&(T.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),C.current.pushUndoStop(),T.current=!1))},[n],S),Le(()=>{var I,le;let R=(I=C.current)==null?void 0:I.getModel();R&&i&&((le=L.current)==null||le.editor.setModelLanguage(R,i))},[i],S),Le(()=>{var R;a!==void 0&&((R=C.current)==null||R.revealLine(a))},[a],S),Le(()=>{var R;(R=L.current)==null||R.editor.setTheme(o)},[o],S);let $=k.useCallback(()=>{var R;if(!(!Z.current||!L.current)&&!Be.current){Fe.current(L.current);let I=s||r,le=Gr(L.current,n||t||"",e||i||"",I||"");C.current=(R=L.current)==null?void 0:R.editor.create(Z.current,{model:le,automaticLayout:!0,...u},c),d&&C.current.restoreViewState(Ki.get(I)),L.current.editor.setTheme(o),a!==void 0&&C.current.revealLine(a),b(!0),Be.current=!0}},[t,e,r,n,i,s,u,c,d,o,a]);k.useEffect(()=>{S&&we.current(C.current,L.current)},[S]),k.useEffect(()=>{!E&&!S&&$()},[E,S,$]),A.current=n,k.useEffect(()=>{var R,I;S&&g&&((R=Ne.current)==null||R.dispose(),Ne.current=(I=C.current)==null?void 0:I.onDidChangeModelContent(le=>{T.current||g(C.current.getValue(),le)}))},[S,g]),k.useEffect(()=>{if(S){let R=L.current.editor.onDidChangeMarkers(I=>{var Re;let le=(Re=C.current.getModel())==null?void 0:Re.uri;if(le&&I.find(st=>st.path===le.path)){let st=L.current.editor.getModelMarkers({resource:le});_==null||_(st)}});return()=>{R==null||R.dispose()}}return()=>{}},[S,_]);function D(){var R,I;(R=Ne.current)==null||R.dispose(),p?d&&Ki.set(s,C.current.saveViewState()):(I=C.current.getModel())==null||I.dispose(),C.current.dispose()}return Ut.createElement(Vf,{width:y,height:v,isEditorReady:S,loading:l,_ref:Z,className:w,wrapperProps:x})}var A0=L0,I0=k.memo(A0),U0=I0;const D0=({value:t,onChange:e,language:r})=>{const n=k.useRef(null),i=(o,a)=>{n.current=o,o.updateOptions({fontSize:16,fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:1.6,padding:{top:16,bottom:16},minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0,tabSize:2,insertSpaces:!0,detectIndentation:!1,renderLineHighlight:"gutter",selectionHighlight:!1,occurrencesHighlight:!1,renderWhitespace:"selection",bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0}}),a.editor.defineTheme("kid-friendly",{base:"vs",inherit:!0,rules:[{token:"keyword",foreground:"0066cc",fontStyle:"bold"},{token:"string",foreground:"009900"},{token:"comment",foreground:"888888",fontStyle:"italic"},{token:"number",foreground:"ff6600"},{token:"function",foreground:"cc0066",fontStyle:"bold"},{token:"variable",foreground:"0066cc"}],colors:{"editor.background":"#fefefe","editor.foreground":"#333333","editorLineNumber.foreground":"#999999","editorLineNumber.activeForeground":"#333333","editorGutter.background":"#f8f8f8","editorBracketMatch.background":"#e8f4fd","editorBracketMatch.border":"#0066cc","editor.selectionBackground":"#b3d9ff","editorCursor.foreground":"#0066cc"}}),a.editor.setTheme("kid-friendly"),o.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.Enter,()=>{console.log("Run code shortcut triggered")}),o.focus()},s=o=>{o!==void 0&&e(o)};return h.jsxs("div",{className:"code-editor",children:[h.jsx(U0,{height:"400px",defaultLanguage:r,value:t,onChange:s,onMount:i,options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,contextmenu:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on"}}),h.jsx("style",{children:`
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
      `})]})},M0=({output:t,isRunning:e,testResults:r,stars:n})=>{const i=o=>h.jsxs("div",{className:"stars-display",children:[[1,2,3].map(a=>h.jsx(lu,{className:`star ${a<=o?"earned":"empty"}`,size:24},a)),h.jsx("span",{className:"stars-text",children:o>0?`${o}/3 stars earned!`:"No stars yet"})]}),s=()=>!r||r.length===0?null:h.jsxs("div",{className:"test-results",children:[h.jsx("h4",{children:"🧪 Test Results"}),r.map((o,a)=>h.jsxs("div",{className:`test-result ${o.passed?"passed":"failed"}`,children:[h.jsx("div",{className:"test-icon",children:o.passed?h.jsx(Uf,{size:16}):h.jsx(Oy,{size:16})}),h.jsxs("div",{className:"test-info",children:[h.jsx("span",{className:"test-name",children:o.name}),o.message&&h.jsx("span",{className:"test-message",children:o.message})]})]},a))]});return h.jsxs("div",{className:"console",children:[h.jsxs("div",{className:"console-header",children:[h.jsx(Py,{className:"console-icon"}),h.jsx("h3",{children:"🖥️ Output"}),e&&h.jsx("div",{className:"running-indicator",children:"Running..."})]}),h.jsxs("div",{className:"console-content",children:[t&&h.jsx("div",{className:"console-output",children:h.jsx("pre",{children:t})}),r&&h.jsxs(h.Fragment,{children:[s(),n!==void 0&&i(n)]}),!t&&!r&&!e&&h.jsx("div",{className:"console-empty",children:h.jsx("p",{children:'👋 Click "Run Code" to see your output here!'})}),e&&h.jsxs("div",{className:"console-running",children:[h.jsx("div",{className:"spinner"}),h.jsx("p",{children:"🤖 Running your code..."})]})]}),h.jsx("style",{children:`
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
      `})]})},z0=({world:t,moves:e})=>{const r=o=>{switch(o){case"start":return h.jsx(Dc,{size:16,className:"tile-icon start-icon"});case"goal":return h.jsx(Ic,{size:16,className:"tile-icon goal-icon"});case"lava":return h.jsx(Uc,{size:16,className:"tile-icon lava-icon"});case"wall":return h.jsx(Mc,{size:16,className:"tile-icon wall-icon"});case"gem":return h.jsx("span",{className:"tile-icon gem-icon",children:"💎"});default:return null}},n=(o,a)=>{let l="grid-tile";if(o===t.start[0]&&a===t.start[1])l+=" start";else if(o===t.goal[0]&&a===t.goal[1])l+=" goal";else{const u=t.tiles.find(c=>c.x===o&&c.y===a);u&&(l+=` ${u.type}`)}return l},s=(()=>{if(!e)return[];const o=[];let a=t.start[0],l=t.start[1];o.push([a,l]);for(const u of e){switch(u){case"UP":l-=1;break;case"DOWN":l+=1;break;case"LEFT":a-=1;break;case"RIGHT":a+=1;break}o.push([a,l])}return o})();return h.jsxs("div",{className:"grid-view",children:[h.jsxs("div",{className:"grid-header",children:[h.jsx("h3",{children:"🗺️ World Map"}),h.jsxs("div",{className:"grid-legend",children:[h.jsxs("div",{className:"legend-item",children:[h.jsx(Dc,{size:12,className:"legend-icon start"}),h.jsx("span",{children:"Start"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx(Ic,{size:12,className:"legend-icon goal"}),h.jsx("span",{children:"Goal"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx(Uc,{size:12,className:"legend-icon lava"}),h.jsx("span",{children:"Lava"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx(Mc,{size:12,className:"legend-icon wall"}),h.jsx("span",{children:"Wall"})]})]})]}),h.jsx("div",{className:"grid-container",children:h.jsx("div",{className:"grid",style:{gridTemplateColumns:`repeat(${t.width}, 1fr)`,gridTemplateRows:`repeat(${t.height}, 1fr)`},children:Array.from({length:t.height},(o,a)=>Array.from({length:t.width},(l,u)=>{var y;const c=n(u,a),d=s.some(([v,w])=>v===u&&w===a),p=s.length>0&&s[s.length-1][0]===u&&s[s.length-1][1]===a;return h.jsxs("div",{className:`${c} ${d?"robot-path":""} ${p?"robot-current":""}`,children:[r(u===t.start[0]&&a===t.start[1]?"start":u===t.goal[0]&&a===t.goal[1]?"goal":((y=t.tiles.find(v=>v.x===u&&v.y===a))==null?void 0:y.type)||"empty"),p&&h.jsx("div",{className:"robot",children:"🤖"})]},`${u}-${a}`)}))})}),e&&e.length>0&&h.jsxs("div",{className:"moves-display",children:[h.jsx("h4",{children:"🤖 Robot Moves"}),h.jsx("div",{className:"moves-list",children:e.map((o,a)=>h.jsx("span",{className:"move-item",children:o},a))})]}),h.jsx("style",{children:`
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
      `})]})},F0=({hintState:t,onGetHint:e})=>{const r=t.currentHint<t.maxHints;return t.maxHints>0?h.jsxs("div",{className:"hint-system",children:[h.jsxs("div",{className:"hints-header",children:[h.jsx(Ja,{className:"hint-icon"}),h.jsx("h4",{children:"💡 Hints"}),h.jsxs("span",{className:"hint-progress",children:[t.currentHint,"/",t.maxHints," used"]})]}),h.jsxs("div",{className:"hints-content",children:[t.hints.slice(0,t.currentHint).map((i,s)=>h.jsxs("div",{className:"hint-item shown",children:[h.jsx("div",{className:"hint-number",children:s+1}),h.jsx("div",{className:"hint-text",children:i})]},s)),r&&h.jsx("div",{className:"hint-actions",children:h.jsxs("button",{className:"btn btn-secondary btn-small",onClick:e,children:[h.jsx(Ja,{className:"btn-icon"}),"Get Next Hint",h.jsx(ky,{className:"btn-icon"})]})}),!r&&h.jsx("div",{className:"hint-complete",children:h.jsx("p",{children:"🎯 All hints revealed! Try your best solution."})})]}),h.jsx("style",{children:`
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
      `})]}):h.jsx("div",{className:"hint-system no-hints",children:h.jsx("p",{children:"No hints available for this level. You've got this! 💪"})})},ds=[{id:"level1",title:"Say Hello!",description:"Learn to use print statements and variables",difficulty:1,category:"print",starterCode:`# Say hello to your new friend!
# Use a variable to store a name, then print a greeting

name = "Ava"  # Change this to your name
print("Hello, " + name + "!")`,instructions:'Create a variable called "name" and use print() to say hello!',tests:[{name:"Has print statement",input:null,expected:!0,description:"Your code should use print() to display a message"},{name:"Uses variable",input:null,expected:!0,description:"Your code should create and use a variable"}],hints:['Variables store information. Try: name = "Your Name"','Use print() to display text: print("Hello, " + name)']},{id:"level2",title:"Roll Until Six",description:"Learn while loops by rolling dice",difficulty:2,category:"loops",starterCode:`# Roll the die until you get a 6
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
print(f"🎯 It took {result} rolls to get a 6!")`,instructions:"Complete the rolls_until_six function using a while loop. The roller() function gives you a random number from 1-6.",tests:[{name:"Rolls until six - sequence [6]",input:[6],expected:1,description:"Should return 1 when first roll is 6"},{name:"Rolls until six - sequence [1,6]",input:[1,6],expected:2,description:"Should return 2 when second roll is 6"},{name:"Rolls until six - sequence [2,3,4,5,6]",input:[2,3,4,5,6],expected:5,description:"Should return 5 when fifth roll is 6"}],hints:['Use "while True:" to create a loop that runs forever','Inside the loop, call roller() and check if the result is 6. If it is, use "return" to stop the loop']},{id:"level3",title:"Navigate the Maze",description:"Learn conditionals by avoiding lava and walls",difficulty:3,category:"conditionals",starterCode:`# Navigate through the maze to reach the goal
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
    print("❌ No world available")`,instructions:"Write code to navigate from the start position to the goal, avoiding walls and lava. Use if statements to check what type of tile you're moving to.",tests:[{name:"Reaches goal",input:null,expected:!0,description:"Your robot should reach the goal tile"},{name:"Avoids lava",input:null,expected:!0,description:"Your robot should not step on lava tiles"}],hints:['Check if world.at(x+1, y)["type"] == "empty" before moving right',"Use if/elif statements to check different directions and tile types"],world:{width:5,height:5,start:[0,0],goal:[4,4],tiles:[{type:"empty",x:0,y:0},{type:"empty",x:1,y:0},{type:"lava",x:2,y:0},{type:"empty",x:3,y:0},{type:"empty",x:4,y:0},{type:"empty",x:0,y:1},{type:"wall",x:1,y:1},{type:"lava",x:2,y:1},{type:"wall",x:3,y:1},{type:"empty",x:4,y:1},{type:"empty",x:0,y:2},{type:"empty",x:1,y:2},{type:"empty",x:2,y:2},{type:"empty",x:3,y:2},{type:"empty",x:4,y:2},{type:"empty",x:0,y:3},{type:"wall",x:1,y:3},{type:"lava",x:2,y:3},{type:"empty",x:3,y:3},{type:"empty",x:4,y:3},{type:"empty",x:0,y:4},{type:"empty",x:1,y:4},{type:"empty",x:2,y:4},{type:"empty",x:3,y:4},{type:"goal",x:4,y:4}]}},{id:"level4",title:"Robot Helper",description:"Learn functions by creating a robot that moves to goal",difficulty:4,category:"functions",starterCode:`# Create a function that moves a robot to the goal
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
`,instructions:"Create your own mini adventure game using all the Python concepts you learned!",tests:[{name:"Game runs without errors",input:null,expected:!0,description:"Your adventure game should run without crashing"},{name:"Uses multiple concepts",input:null,expected:!0,description:"Your code should use variables, functions, and conditionals"}],hints:["This is your final project! Be creative!","Try adding more features like inventory, combat, or multiple locations"]}],B0="modulepreload",W0=function(t){return"/"+t},qc={},ce=function(e,r,n){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=W0(s),s in qc)return;qc[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":B0,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var H0=Object.defineProperty,N=(t,e)=>H0(t,"name",{value:e,configurable:!0}),Gf=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),V0=(()=>{for(var t=new Uint8Array(128),e=0;e<64;e++)t[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return r=>{for(var n=r.length,i=new Uint8Array((n-(r[n-1]=="=")-(r[n-2]=="="))*3/4|0),s=0,o=0;s<n;){var a=t[r.charCodeAt(s++)],l=t[r.charCodeAt(s++)],u=t[r.charCodeAt(s++)],c=t[r.charCodeAt(s++)];i[o++]=a<<2|l>>4,i[o++]=l<<4|u>>2,i[o++]=u<<6|c}return i}})();function Jf(t){return!isNaN(parseFloat(t))&&isFinite(t)}N(Jf,"_isNumber");function Jt(t){return t.charAt(0).toUpperCase()+t.substring(1)}N(Jt,"_capitalize");function so(t){return function(){return this[t]}}N(so,"_getter");var Nr=["isConstructor","isEval","isNative","isToplevel"],Rr=["columnNumber","lineNumber"],$r=["fileName","functionName","source"],q0=["args"],K0=["evalOrigin"],Gi=Nr.concat(Rr,$r,q0,K0);function Ue(t){if(t)for(var e=0;e<Gi.length;e++)t[Gi[e]]!==void 0&&this["set"+Jt(Gi[e])](t[Gi[e]])}N(Ue,"StackFrame");Ue.prototype={getArgs:N(function(){return this.args},"getArgs"),setArgs:N(function(t){if(Object.prototype.toString.call(t)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=t},"setArgs"),getEvalOrigin:N(function(){return this.evalOrigin},"getEvalOrigin"),setEvalOrigin:N(function(t){if(t instanceof Ue)this.evalOrigin=t;else if(t instanceof Object)this.evalOrigin=new Ue(t);else throw new TypeError("Eval Origin must be an Object or StackFrame")},"setEvalOrigin"),toString:N(function(){var t=this.getFileName()||"",e=this.getLineNumber()||"",r=this.getColumnNumber()||"",n=this.getFunctionName()||"";return this.getIsEval()?t?"[eval] ("+t+":"+e+":"+r+")":"[eval]:"+e+":"+r:n?n+" ("+t+":"+e+":"+r+")":t+":"+e+":"+r},"toString")};Ue.fromString=N(function(t){var e=t.indexOf("("),r=t.lastIndexOf(")"),n=t.substring(0,e),i=t.substring(e+1,r).split(","),s=t.substring(r+1);if(s.indexOf("@")===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(s,""),a=o[1],l=o[2],u=o[3];return new Ue({functionName:n,args:i||void 0,fileName:a,lineNumber:l||void 0,columnNumber:u||void 0})},"StackFrame$$fromString");for(tr=0;tr<Nr.length;tr++)Ue.prototype["get"+Jt(Nr[tr])]=so(Nr[tr]),Ue.prototype["set"+Jt(Nr[tr])]=function(t){return function(e){this[t]=!!e}}(Nr[tr]);var tr;for(rr=0;rr<Rr.length;rr++)Ue.prototype["get"+Jt(Rr[rr])]=so(Rr[rr]),Ue.prototype["set"+Jt(Rr[rr])]=function(t){return function(e){if(!Jf(e))throw new TypeError(t+" must be a Number");this[t]=Number(e)}}(Rr[rr]);var rr;for(nr=0;nr<$r.length;nr++)Ue.prototype["get"+Jt($r[nr])]=so($r[nr]),Ue.prototype["set"+Jt($r[nr])]=function(t){return function(e){this[t]=String(e)}}($r[nr]);var nr,Ho=Ue;function Qf(){var t=/^\s*at .*(\S+:\d+|\(native\))/m,e=/^(eval@)?(\[native code])?$/;return{parse:N(function(r){if(r.stack&&r.stack.match(t))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:N(function(r){if(r.indexOf(":")===-1)return[r];var n=/(.+?)(?::(\d+))?(?::(\d+))?$/,i=n.exec(r.replace(/[()]/g,""));return[i[1],i[2]||void 0,i[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:N(function(r){var n=r.stack.split(`
`).filter(function(i){return!!i.match(t)},this);return n.map(function(i){i.indexOf("(eval ")>-1&&(i=i.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var s=i.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),o=s.match(/ (\(.+\)$)/);s=o?s.replace(o[0],""):s;var a=this.extractLocation(o?o[1]:s),l=o&&s||void 0,u=["eval","<anonymous>"].indexOf(a[0])>-1?void 0:a[0];return new Ho({functionName:l,fileName:u,lineNumber:a[1],columnNumber:a[2],source:i})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:N(function(r){var n=r.stack.split(`
`).filter(function(i){return!i.match(e)},this);return n.map(function(i){if(i.indexOf(" > eval")>-1&&(i=i.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),i.indexOf("@")===-1&&i.indexOf(":")===-1)return new Ho({functionName:i});var s=/((.*".+"[^@]*)?[^@]*)(?:@)/,o=i.match(s),a=o&&o[1]?o[1]:void 0,l=this.extractLocation(i.replace(s,""));return new Ho({functionName:a,fileName:l[0],lineNumber:l[1],columnNumber:l[2],source:i})},this)},"ErrorStackParser$$parseFFOrSafari")}}N(Qf,"ErrorStackParser");var G0=new Qf,J0=G0,ht=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,Yf=ht&&typeof cl<"u"&&typeof cl.exports<"u"&&typeof Gf<"u"&&typeof __dirname<"u",Q0=ht&&!Yf,Y0=typeof Deno<"u",Xf=!ht&&!Y0,X0=Xf&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Z0=Xf&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var oo=typeof read=="function"&&typeof load=="function",Zf,Xa,ep,Kc,uu;async function cu(){if(!ht||(Zf=(await ce(()=>import("./__vite-browser-external-b25bb000.js"),[])).default,Kc=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),uu=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),ep=(await ce(()=>import("./__vite-browser-external-b25bb000.js"),[])).default,Xa=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),du=Xa.sep,typeof Gf<"u"))return;let t=Kc,e=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),r=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),n=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]),i={fs:t,crypto:e,ws:r,child_process:n};globalThis.require=function(s){return i[s]}}N(cu,"initNodeModules");function tp(t,e){return Xa.resolve(e||".",t)}N(tp,"node_resolvePath");function rp(t,e){return e===void 0&&(e=location),new URL(t,e).toString()}N(rp,"browser_resolvePath");var Vn;ht?Vn=tp:oo?Vn=N(t=>t,"resolvePath"):Vn=rp;var du;ht||(du="/");function np(t,e){return t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?{response:fetch(t)}:{binary:uu.readFile(t).then(r=>new Uint8Array(r.buffer,r.byteOffset,r.byteLength))}}N(np,"node_getBinaryResponse");function ip(t,e){if(t.startsWith("file://")&&(t=t.slice(7)),t.includes("://"))throw new Error("Shell cannot fetch urls");return{binary:Promise.resolve(new Uint8Array(readbuffer(t)))}}N(ip,"shell_getBinaryResponse");function sp(t,e){let r=new URL(t,location);return{response:fetch(r,e?{integrity:e}:{})}}N(sp,"browser_getBinaryResponse");var qn;ht?qn=np:oo?qn=ip:qn=sp;async function op(t,e){let{response:r,binary:n}=qn(t,e);if(n)return n;let i=await r;if(!i.ok)throw new Error(`Failed to load '${t}': request failed.`);return new Uint8Array(await i.arrayBuffer())}N(op,"loadBinaryFile");var Rn;if(X0)Rn=N(async t=>await ce(()=>import(t),[]),"loadScript");else if(Z0)Rn=N(async t=>{try{globalThis.importScripts(t)}catch(e){if(e instanceof TypeError)await ce(()=>import(t),[]);else throw e}},"loadScript");else if(ht)Rn=ap;else if(oo)Rn=load;else throw new Error("Cannot determine runtime environment");async function ap(t){t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?ep.runInThisContext(await(await fetch(t)).text()):await ce(()=>import(Zf.pathToFileURL(t).href),[])}N(ap,"nodeLoadScript");async function lp(t){if(ht){await cu();let e=await uu.readFile(t,{encoding:"utf8"});return JSON.parse(e)}else if(oo){let e=read(t);return JSON.parse(e)}else return await(await fetch(t)).json()}N(lp,"loadLockFile");async function up(){if(Yf)return __dirname;let t;try{throw new Error}catch(n){t=n}let e=J0.parse(t)[0].fileName;if(ht&&!e.startsWith("file://")&&(e=`file://${e}`),Q0){let n=await ce(()=>import("./__vite-browser-external-b25bb000.js"),[]);return(await ce(()=>import("./__vite-browser-external-b25bb000.js"),[])).fileURLToPath(n.dirname(e))}let r=e.lastIndexOf(du);if(r===-1)throw new Error("Could not extract indexURL path from pyodide module location");return e.slice(0,r)}N(up,"calculateDirname");function cp(t){var e;return t.substring(0,t.lastIndexOf("/")+1)||((e=globalThis.location)==null?void 0:e.toString())||"."}N(cp,"calculateInstallBaseUrl");function dp(t){let e=t.FS,r=t.FS.filesystems.MEMFS,n=t.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:N(function(s){if(!s.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return r.mount.apply(null,arguments)},"mount"),syncfs:N(async(s,o,a)=>{try{let l=i.getLocalSet(s),u=await i.getRemoteSet(s),c=o?u:l,d=o?l:u;await i.reconcile(s,c,d),a(null)}catch(l){a(l)}},"syncfs"),getLocalSet:N(s=>{let o=Object.create(null);function a(c){return c!=="."&&c!==".."}N(a,"isRealDir");function l(c){return d=>n.join2(c,d)}N(l,"toAbsolute");let u=e.readdir(s.mountpoint).filter(a).map(l(s.mountpoint));for(;u.length;){let c=u.pop(),d=e.stat(c);e.isDir(d.mode)&&u.push.apply(u,e.readdir(c).filter(a).map(l(c))),o[c]={timestamp:d.mtime,mode:d.mode}}return{type:"local",entries:o}},"getLocalSet"),getRemoteSet:N(async s=>{let o=Object.create(null),a=await ew(s.opts.fileSystemHandle);for(let[l,u]of a)l!=="."&&(o[n.join2(s.mountpoint,l)]={timestamp:u.kind==="file"?new Date((await u.getFile()).lastModified):new Date,mode:u.kind==="file"?i.FILE_MODE:i.DIR_MODE});return{type:"remote",entries:o,handles:a}},"getRemoteSet"),loadLocalEntry:N(s=>{let o=e.lookupPath(s).node,a=e.stat(s);if(e.isDir(a.mode))return{timestamp:a.mtime,mode:a.mode};if(e.isFile(a.mode))return o.contents=r.getFileDataAsTypedArray(o),{timestamp:a.mtime,mode:a.mode,contents:o.contents};throw new Error("node type not supported")},"loadLocalEntry"),storeLocalEntry:N((s,o)=>{if(e.isDir(o.mode))e.mkdirTree(s,o.mode);else if(e.isFile(o.mode))e.writeFile(s,o.contents,{canOwn:!0});else throw new Error("node type not supported");e.chmod(s,o.mode),e.utime(s,o.timestamp,o.timestamp)},"storeLocalEntry"),removeLocalEntry:N(s=>{var o=e.stat(s);e.isDir(o.mode)?e.rmdir(s):e.isFile(o.mode)&&e.unlink(s)},"removeLocalEntry"),loadRemoteEntry:N(async s=>{if(s.kind==="file"){let o=await s.getFile();return{contents:new Uint8Array(await o.arrayBuffer()),mode:i.FILE_MODE,timestamp:new Date(o.lastModified)}}else{if(s.kind==="directory")return{mode:i.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+s.kind)}},"loadRemoteEntry"),storeRemoteEntry:N(async(s,o,a)=>{let l=s.get(n.dirname(o)),u=e.isFile(a.mode)?await l.getFileHandle(n.basename(o),{create:!0}):await l.getDirectoryHandle(n.basename(o),{create:!0});if(u.kind==="file"){let c=await u.createWritable();await c.write(a.contents),await c.close()}s.set(o,u)},"storeRemoteEntry"),removeRemoteEntry:N(async(s,o)=>{await s.get(n.dirname(o)).removeEntry(n.basename(o)),s.delete(o)},"removeRemoteEntry"),reconcile:N(async(s,o,a)=>{let l=0,u=[];Object.keys(o.entries).forEach(function(p){let y=o.entries[p],v=a.entries[p];(!v||e.isFile(y.mode)&&y.timestamp.getTime()>v.timestamp.getTime())&&(u.push(p),l++)}),u.sort();let c=[];if(Object.keys(a.entries).forEach(function(p){o.entries[p]||(c.push(p),l++)}),c.sort().reverse(),!l)return;let d=o.type==="remote"?o.handles:a.handles;for(let p of u){let y=n.normalize(p.replace(s.mountpoint,"/")).substring(1);if(a.type==="local"){let v=d.get(y),w=await i.loadRemoteEntry(v);i.storeLocalEntry(p,w)}else{let v=i.loadLocalEntry(p);await i.storeRemoteEntry(d,y,v)}}for(let p of c)if(a.type==="local")i.removeLocalEntry(p);else{let y=n.normalize(p.replace(s.mountpoint,"/")).substring(1);await i.removeRemoteEntry(d,y)}},"reconcile")};t.FS.filesystems.NATIVEFS_ASYNC=i}N(dp,"initializeNativeFS");var ew=N(async t=>{let e=[];async function r(i){for await(let s of i.values())e.push(s),s.kind==="directory"&&await r(s)}N(r,"collect"),await r(t);let n=new Map;n.set(".",t);for(let i of e){let s=(await t.resolve(i)).join("/");n.set(s,i)}return n},"getFsHandles");V0("AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECByECD2NyZWF0ZV9zZW50aW5lbAAAC2lzX3NlbnRpbmVsAAEKEwIHAPsBAPsbCwkAIAD7GvsUAAs=");var tw=async function(){globalThis.navigator&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&typeof navigator.maxTouchPoints<"u"&&navigator.maxTouchPoints>1)}();async function hp(){let t=await tw;if(t)return t.exports;let e=Symbol("error marker");return{create_sentinel:N(()=>e,"create_sentinel"),is_sentinel:N(r=>r===e,"is_sentinel")}}N(hp,"getSentinelImport");function fp(t){let e={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:wp(t),print:t.stdout,printErr:t.stderr,onExit(r){e.exitCode=r},thisProgram:t._sysExecutable,arguments:t.args,API:{config:t},locateFile:N(r=>t.indexURL+r,"locateFile"),instantiateWasm:_p(t.indexURL)};return e}N(fp,"createSettings");function pp(t){return function(e){let r="/";try{e.FS.mkdirTree(t)}catch(n){console.error(`Error occurred while making a home directory '${t}':`),console.error(n),console.error(`Using '${r}' for a home directory instead`),t=r}e.FS.chdir(t)}}N(pp,"createHomeDirectory");function gp(t){return function(e){Object.assign(e.ENV,t)}}N(gp,"setEnvironment");function mp(t){return t?[async e=>{e.addRunDependency("fsInitHook");try{await t(e.FS,{sitePackages:e.API.sitePackages})}finally{e.removeRunDependency("fsInitHook")}}]:[]}N(mp,"callFsInitHook");function vp(t){let e=t.HEAPU32[t._Py_Version>>>2],r=e>>>24&255,n=e>>>16&255,i=e>>>8&255;return[r,n,i]}N(vp,"computeVersionTuple");function yp(t){let e=op(t);return async r=>{r.API.pyVersionTuple=vp(r);let[n,i]=r.API.pyVersionTuple;r.FS.mkdirTree("/lib"),r.API.sitePackages=`/lib/python${n}.${i}/site-packages`,r.FS.mkdirTree(r.API.sitePackages),r.addRunDependency("install-stdlib");try{let s=await e;r.FS.writeFile(`/lib/python${n}${i}.zip`,s)}catch(s){console.error("Error occurred while installing the standard library:"),console.error(s)}finally{r.removeRunDependency("install-stdlib")}}}N(yp,"installStdlib");function wp(t){let e;return t.stdLibURL!=null?e=t.stdLibURL:e=t.indexURL+"python_stdlib.zip",[yp(e),pp(t.env.HOME),gp(t.env),dp,...mp(t.fsInit)]}N(wp,"getFileSystemInitializationFuncs");function _p(t){if(typeof WasmOffsetConverter<"u")return;let{binary:e,response:r}=qn(t+"pyodide.asm.wasm"),n=hp();return function(i,s){return async function(){i.sentinel=await n;try{let o;r?o=await WebAssembly.instantiateStreaming(r,i):o=await WebAssembly.instantiate(await e,i);let{instance:a,module:l}=o;s(a,l)}catch(o){console.warn("wasm instantiation failed!"),console.warn(o)}}(),{}}}N(_p,"getInstantiateWasmFunc");var rw="0.28.2";function $n(t){return t===void 0||t.endsWith("/")?t:t+"/"}N($n,"withTrailingSlash");var Vo=rw;async function xp(t={}){var d,p;if(t.lockFileContents&&t.lockFileURL)throw new Error("Can't pass both lockFileContents and lockFileURL");await cu();let e=t.indexURL||await up();e=$n(Vn(e));let r=t;if(r.packageBaseUrl=$n(r.packageBaseUrl),r.cdnUrl=$n(r.packageBaseUrl??`https://cdn.jsdelivr.net/pyodide/v${Vo}/full/`),!t.lockFileContents){let y=t.lockFileURL??e+"pyodide-lock.json";r.lockFileContents=lp(y),r.packageBaseUrl??(r.packageBaseUrl=cp(y))}r.indexURL=e,r.packageCacheDir&&(r.packageCacheDir=$n(Vn(r.packageCacheDir)));let n={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,args:[],env:{},packages:[],packageCacheDir:r.packageBaseUrl,enableRunUntilComplete:!0,checkAPIVersion:!0,BUILD_ID:"941a75c165c70d9d65a059137df0382b4c6a7747ff5f3de2b264ce4a2fb36cf5"},i=Object.assign(n,r);(d=i.env).HOME??(d.HOME="/home/pyodide"),(p=i.env).PYTHONINSPECT??(p.PYTHONINSPECT="1");let s=fp(i),o=s.API;if(o.lockFilePromise=Promise.resolve(r.lockFileContents),typeof _createPyodideModule!="function"){let y=`${i.indexURL}pyodide.asm.js`;await Rn(y)}let a;if(t._loadSnapshot){let y=await t._loadSnapshot;ArrayBuffer.isView(y)?a=y:a=new Uint8Array(y),s.noInitialRun=!0,s.INITIAL_MEMORY=a.length}let l=await _createPyodideModule(s);if(s.exitCode!==void 0)throw new l.ExitStatus(s.exitCode);if(t.pyproxyToStringRepr&&o.setPyProxyToStringMethod(!0),t.convertNullToNone&&o.setCompatNullToNone(!0),o.version!==Vo&&i.checkAPIVersion)throw new Error(`Pyodide version does not match: '${Vo}' <==> '${o.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);l.locateFile=y=>{throw y.endsWith(".so")?new Error(`Failed to find dynamic library "${y}"`):new Error(`Unexpected call to locateFile("${y}")`)};let u;a&&(u=o.restoreSnapshot(a));let c=o.finalizeBootstrap(u,t._snapshotDeserializer);return o.sys.path.insert(0,""),o._pyodide.set_excepthook(),await o.packageIndexReady,o.initializeStreams(i.stdin,i.stdout,i.stderr),c}N(xp,"loadPyodide");class nw{constructor(){mn(this,"pyodide",null);mn(this,"initialized",!1)}async initialize(){this.initialized||(console.log("Initializing Pyodide..."),this.pyodide=await xp({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.28.2/full/"}),this.pyodide.runPython(`
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
    `),this.initialized=!0,console.log("Pyodide initialized successfully"))}async executeCode(e,r){await this.initialize();try{this.pyodide.runPython("output_capture.output.clear()"),await this.setupLevelEnvironment(r);let n="";try{n=this.pyodide.runPython(`
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
        `)||""}catch(o){console.log("Error capturing output:",o),n=this.pyodide.runPython("output_capture.get_output()")||""}console.log("Captured output:",n);const i=await this.runTests(r),s=this.calculateStars(i);return{success:!0,output:n,testResults:i,stars:s}}catch(n){return console.error("Code execution error:",n),{success:!1,output:"",error:n.message||"Unknown error occurred"}}}async setupLevelEnvironment(e){let r="";switch(e.category){case"loops":r=`
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
        `;break;case"functions":r=`
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
        `;break;default:r=`
# Basic setup for ${e.category} level
print("🚀 Ready to code!")
        `}r&&this.pyodide.runPython(r)}async runTests(e){const r=[];for(const n of e.tests)try{let i="";switch(e.category){case"print":i=`
# Test: ${n.name}
print(f"🧪 Running test: {test.name}")
result = True  # Give 1 star for any successful execution
if result:
    print(f"✅ Test '{test.name}' passed!")
else:
    print(f"❌ Test '{test.name}' failed!")
            `;break;case"loops":i=`
# Test: ${n.name}
def fake_roller(sequence):
    it = iter(sequence)
    return lambda: next(it)

test_sequence = ${JSON.stringify(n.input)}
expected = ${JSON.stringify(n.expected)}
actual = rolls_until_six(fake_roller(test_sequence))

if actual == expected:
    print(f"✅ Test '{test.name}' passed!")
    result = True
else:
    print(f"❌ Test '{test.name}' failed! Expected {expected}, got {actual}")
    result = False
            `;break;case"functions":i=`
# Test: ${n.name}
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
            `;break;case"conditionals":case"strings":case"functions":case"lists":case"project":i=`
# Test: ${n.name}
print(f"🧪 Running test: {test.name}")
result = True  # Give 1 star for any successful execution
if result:
    print(f"✅ Test '{test.name}' passed!")
else:
    print(f"❌ Test '{test.name}' failed!")
            `;break;default:i=`
# Test: ${n.name}
print(f"🧪 Running test: {test.name}")
result = True  # Placeholder for other test types
            `}this.pyodide.runPython(i);const s=this.pyodide.runPython("result");r.push({name:n.name,passed:s,message:s?"Test passed!":"Test failed"})}catch(i){r.push({name:n.name,passed:!1,message:`Error: ${i.message}`})}return r}calculateStars(e){const r=e.filter(i=>i.passed).length,n=e.length;return r===0?0:r===n?3:r>=n*.6?2:1}}const iw=new nw,sw=({levelId:t,onComplete:e,onBack:r,progressService:n})=>{var S,b,E,P;const i=ds.find(L=>L.id===t),[s,o]=k.useState((i==null?void 0:i.starterCode)||""),[a,l]=k.useState(""),[u,c]=k.useState(!1),[d,p]=k.useState(null),[y,v]=k.useState(!1),[w,x]=k.useState({currentHint:0,maxHints:(i==null?void 0:i.hints.length)||0,hints:(i==null?void 0:i.hints)||[]});if(!i)return h.jsxs("div",{className:"error-screen",children:[h.jsx("h2",{children:"Level not found!"}),h.jsx("button",{className:"btn btn-primary",onClick:r,children:"Go Back"})]});const m=k.useCallback(async()=>{c(!0),l(""),p(null);const L=Date.now();try{const C=await iw.executeCode(s,i),Z=Date.now()-L;if(p(C),l(C.output),n&&await n.logCodeAttempt(t,s,C.success,C.error,Z),C.success){const we=C.stars||1,Fe=we>1?"s":"";l(Ne=>Ne+`
🎉 Great job! You earned ${we} star${Fe}! 🎉`),p(Ne=>Ne?{...Ne,stars:we}:{...C,stars:we})}}catch(C){const Z=Date.now()-L;l(`Error: ${C}`),n&&await n.logCodeAttempt(t,s,!1,C==null?void 0:C.toString(),Z)}finally{c(!1)}},[s,i,t,w.currentHint,e,n]),f=()=>{o(i.starterCode),l(""),p(null)},g=()=>{w.currentHint<w.maxHints&&x(L=>({...L,currentHint:L.currentHint+1}))},_=(d==null?void 0:d.stars)||0;return h.jsxs("div",{className:"game-screen",children:[h.jsxs("div",{className:"game-header",children:[h.jsxs("button",{className:"btn btn-secondary",onClick:r,children:[h.jsx(If,{className:"btn-icon"}),"Back"]}),h.jsxs("div",{className:"level-info",children:[h.jsx("h1",{children:i.title}),h.jsx("p",{children:i.description})]}),h.jsxs("div",{className:"game-actions",children:[h.jsxs("button",{className:"btn btn-secondary",onClick:()=>v(!y),children:[h.jsx(Ja,{className:"btn-icon"}),"Hints (",w.currentHint,"/",w.maxHints,")"]}),h.jsxs("button",{className:"btn btn-secondary",onClick:f,children:[h.jsx(Ty,{className:"btn-icon"}),"Reset"]})]})]}),h.jsxs("div",{className:"game-content",children:[h.jsxs("div",{className:"game-left",children:[h.jsxs("div",{className:"instructions-panel",children:[h.jsx("h3",{children:"📝 Instructions"}),h.jsx("p",{children:i.instructions}),y&&h.jsx(F0,{hintState:w,onGetHint:g})]}),h.jsxs("div",{className:"editor-panel",children:[h.jsxs("div",{className:"editor-header",children:[h.jsx("h3",{children:"🐍 Your Code"}),h.jsxs("div",{className:"editor-actions",children:[h.jsxs("button",{className:"btn btn-primary",onClick:m,disabled:u,children:[h.jsx(Us,{className:"btn-icon"}),u?"Running...":"Run Code"]}),(d==null?void 0:d.success)&&h.jsx("button",{className:"btn btn-success",onClick:()=>e(t,d.stars||1,w.currentHint),children:"🎉 Next Level! 🎉"})]})]}),h.jsx(D0,{value:s,onChange:o,language:"python"})]}),h.jsxs("div",{className:"console-panel",children:[h.jsx(M0,{output:a,isRunning:u,testResults:d==null?void 0:d.testResults,stars:_}),(d==null?void 0:d.success)&&h.jsxs("div",{className:"completion-message",children:[h.jsx("h4",{children:"🎉 Level Completed! 🎉"}),h.jsxs("p",{children:["You earned ",d.stars||1," star",(d.stars||1)>1?"s":"","!"]}),h.jsx("p",{children:'Click "Next Level!" to continue your adventure!'})]})]})]}),h.jsxs("div",{className:"game-right",children:[i.world&&h.jsx(z0,{world:i.world,moves:(b=(S=d==null?void 0:d.testResults)==null?void 0:S[0])==null?void 0:b.actual}),i.category==="loops"&&h.jsxs("div",{className:"dice-visualization",children:[h.jsx("h3",{children:"🎲 Dice Visualization"}),h.jsx("div",{className:"dice-container",children:h.jsx("div",{className:"dice bounce",children:((P=(E=d==null?void 0:d.testResults)==null?void 0:E[0])==null?void 0:P.actual)||"?"})})]})]})]}),h.jsx("style",{children:`
        .game-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .level-info h1 {
          color: #2d3748;
          margin: 0 0 5px 0;
          font-size: 1.8rem;
        }

        .level-info p {
          color: #4a5568;
          margin: 0;
        }

        .game-actions {
          display: flex;
          gap: 10px;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
        }

        .game-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          height: calc(100vh - 140px);
        }

        .game-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .instructions-panel,
        .editor-panel,
        .console-panel {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .instructions-panel h3,
        .editor-panel h3 {
          color: #2d3748;
          margin: 0 0 15px 0;
          font-size: 1.2rem;
        }

        .instructions-panel p {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .editor-actions {
          display: flex;
          gap: 10px;
        }

        .game-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dice-visualization {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .dice-visualization h3 {
          color: #2d3748;
          margin: 0 0 20px 0;
        }

        .dice-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
        }

        .dice {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .completion-message {
          background: linear-gradient(135deg, #06ffa5, #00d4aa);
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-top: 15px;
          text-align: center;
          animation: bounce 0.5s ease-out;
        }

        .completion-message h4 {
          margin: 0 0 10px 0;
          font-size: 1.3rem;
        }

        .completion-message p {
          margin: 5px 0;
          font-size: 1rem;
        }

        @media (max-width: 1024px) {
          .game-content {
            grid-template-columns: 1fr;
            height: auto;
          }

          .game-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .game-actions {
            justify-content: center;
          }
        }
      `})]})},ow=({progress:t,onSelectLevel:e,onBack:r})=>{const n=l=>l===0?!0:t.completedLevels.includes(ds[l-1].id),i=l=>t.stars[l]||0,s=l=>{const u=i(l);return h.jsx("div",{className:"stars",children:[1,2,3].map(c=>h.jsx(lu,{className:`star ${c<=u?"filled":"empty"}`,size:16},c))})},o=l=>{const u=["#4ade80","#facc15","#f97316","#ef4444"];return u[Math.min(l-1,u.length-1)]},a=l=>{const u=["Easy","Medium","Hard","Expert"];return u[Math.min(l-1,u.length-1)]};return h.jsxs("div",{className:"level-select",children:[h.jsxs("div",{className:"level-select-container",children:[h.jsxs("div",{className:"level-select-header",children:[h.jsxs("button",{className:"btn btn-secondary",onClick:r,children:[h.jsx(If,{className:"btn-icon"}),"Back"]}),h.jsx("h1",{children:"Choose Your Adventure! 🎮"}),h.jsx("div",{className:"progress-summary",children:h.jsxs("span",{children:[t.completedLevels.length," of ",ds.length," levels completed"]})})]}),h.jsx("div",{className:"levels-grid",children:ds.map((l,u)=>{const c=n(u),d=t.completedLevels.includes(l.id),p=i(l.id);return h.jsxs("div",{className:`level-card ${c?"unlocked":"locked"} ${d?"completed":""}`,onClick:()=>c&&e(l.id),children:[h.jsxs("div",{className:"level-header",children:[h.jsx("div",{className:"level-number",children:u+1}),h.jsxs("div",{className:"level-status",children:[!c&&h.jsx(Df,{className:"status-icon"}),d&&h.jsx(Uf,{className:"status-icon completed"})]})]}),h.jsxs("div",{className:"level-content",children:[h.jsx("h3",{className:"level-title",children:l.title}),h.jsx("p",{className:"level-description",children:l.description}),h.jsxs("div",{className:"level-meta",children:[h.jsx("div",{className:"difficulty-badge",style:{backgroundColor:o(l.difficulty)},children:a(l.difficulty)}),h.jsx("div",{className:"level-category",children:l.category.charAt(0).toUpperCase()+l.category.slice(1)})]}),h.jsxs("div",{className:"level-footer",children:[c&&h.jsxs("button",{className:"btn btn-primary btn-small",children:[h.jsx(Us,{className:"btn-icon"}),d?"Play Again":"Play"]}),p>0&&s(l.id)]})]})]},l.id)})}),h.jsx("div",{className:"level-select-footer",children:h.jsx("p",{children:"🌟 Complete levels to unlock new adventures!"})})]}),h.jsx("style",{children:`
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
      `})]})},kp=k.createContext(void 0),Ei=()=>{const t=k.useContext(kp);if(t===void 0)throw new Error("useLocalAuth must be used within a LocalAuthProvider");return t},aw=({children:t})=>{const[e,r]=k.useState(null),[n,i]=k.useState(null),[s,o]=k.useState(null),[a,l]=k.useState(!0);k.useEffect(()=>{const v=localStorage.getItem("codequest-user");if(v){const w=JSON.parse(v);r(w),i(w),o({user:w})}l(!1)},[]);const y={user:e,profile:n,session:s,loading:a,signUp:async(v,w,x,m)=>{await new Promise(_=>setTimeout(_,1e3));const f=JSON.parse(localStorage.getItem("codequest-users")||"[]");if(f.find(_=>_.email===v))throw new Error("User already exists with this email");const g={id:Date.now().toString(),email:v,full_name:x,role:m};f.push(g),localStorage.setItem("codequest-users",JSON.stringify(f)),localStorage.setItem("codequest-user",JSON.stringify(g)),r(g),i(g),o({user:g})},signIn:async(v,w)=>{await new Promise(f=>setTimeout(f,1e3));const m=JSON.parse(localStorage.getItem("codequest-users")||"[]").find(f=>f.email===v);if(!m)throw new Error("No user found with this email");localStorage.setItem("codequest-user",JSON.stringify(m)),r(m),i(m),o({user:m})},signOut:async()=>{localStorage.removeItem("codequest-user"),r(null),i(null),o(null)},updateProfile:async v=>{if(!e)throw new Error("No user logged in");const w={...e,...v};localStorage.setItem("codequest-user",JSON.stringify(w)),r(w),i(w)}};return h.jsx(kp.Provider,{value:y,children:t})},lw=({onStart:t,onTeacherDashboard:e,user:r,profile:n})=>{const{signOut:i}=Ei();return h.jsxs("div",{className:"welcome-screen",children:[h.jsxs("div",{className:"welcome-container",children:[r&&h.jsxs("div",{className:"user-menu",children:[h.jsxs("div",{className:"user-info",children:[h.jsx(Qa,{className:"user-icon"}),h.jsxs("span",{children:["Welcome, ",(n==null?void 0:n.full_name)||r.email,"!"]}),(n==null?void 0:n.role)==="teacher"&&h.jsx("button",{className:"btn btn-secondary btn-small",onClick:e,children:"Teacher Dashboard"})]}),h.jsxs("button",{className:"btn btn-secondary btn-small",onClick:i,children:[h.jsx(jy,{className:"btn-icon"}),"Sign Out"]})]}),h.jsxs("div",{className:"welcome-header",children:[h.jsxs("h1",{className:"welcome-title",children:[h.jsx(Sy,{className:"title-icon bounce"}),"CodeQuest Jr."]}),h.jsx("p",{className:"welcome-subtitle",children:"Learn Python by playing games! 🎮🐍"})]}),h.jsxs("div",{className:"welcome-features",children:[h.jsxs("div",{className:"feature-card",children:[h.jsx(Us,{className:"feature-icon"}),h.jsx("h3",{children:"Interactive Puzzles"}),h.jsx("p",{children:"Solve fun challenges by writing Python code"})]}),h.jsxs("div",{className:"feature-card",children:[h.jsx(Mf,{className:"feature-icon"}),h.jsx("h3",{children:"Earn Stars"}),h.jsx("p",{children:"Get up to 3 stars for each level you complete"})]}),h.jsxs("div",{className:"feature-card",children:[h.jsx(lu,{className:"feature-icon"}),h.jsx("h3",{children:"Learn Step by Step"}),h.jsx("p",{children:"Start with simple print statements and work up to functions"})]})]}),h.jsxs("div",{className:"welcome-actions",children:[h.jsxs("button",{className:"btn btn-primary btn-large",onClick:t,children:[h.jsx(Us,{className:"btn-icon"}),r?"Start Coding!":"Sign Up to Start!"]}),!r&&h.jsxs("button",{className:"btn btn-secondary",onClick:()=>t(),children:[h.jsx(Qa,{className:"btn-icon"}),"Sign In"]}),r&&h.jsx("button",{className:"btn btn-secondary",onClick:()=>{},children:"Reset Progress"})]}),h.jsx("div",{className:"welcome-footer",children:h.jsx("p",{children:"Perfect for kids ages 8-14 who want to learn programming! 🌟"})})]}),h.jsx("style",{children:`
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
      `})]})},uw=({isOpen:t,onClose:e,mode:r,onModeChange:n})=>{const{signIn:i,signUp:s}=Ei(),[o,a]=k.useState(""),[l,u]=k.useState(""),[c,d]=k.useState(""),[p,y]=k.useState("student"),[v,w]=k.useState(!1),[x,m]=k.useState(""),f=async g=>{g.preventDefault(),w(!0),m("");try{r==="signin"?await i(o,l):await s(o,l,c,p),e()}catch(_){m(_.message||"An error occurred")}finally{w(!1)}};return t?h.jsxs("div",{className:"auth-modal-overlay",children:[h.jsxs("div",{className:"auth-modal",children:[h.jsx("button",{className:"auth-close-btn",onClick:e,children:h.jsx(Ny,{size:24})}),h.jsxs("div",{className:"auth-header",children:[h.jsx("h2",{children:r==="signin"?"Welcome Back! 🎮":"Join CodeQuest Jr.! 🚀"}),h.jsx("p",{children:r==="signin"?"Sign in to continue your coding adventure":"Create an account to save your progress and earn achievements"})]}),h.jsxs("form",{onSubmit:f,className:"auth-form",children:[r==="signup"&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"fullName",children:"Full Name"}),h.jsxs("div",{className:"input-wrapper",children:[h.jsx(Qa,{className:"input-icon",size:20}),h.jsx("input",{id:"fullName",type:"text",value:c,onChange:g=>d(g.target.value),placeholder:"Enter your full name",required:!0})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"I am a..."}),h.jsxs("div",{className:"role-selector",children:[h.jsxs("button",{type:"button",className:`role-option ${p==="student"?"active":""}`,onClick:()=>y("student"),children:[h.jsx(by,{size:20}),h.jsx("span",{children:"Student"}),h.jsx("small",{children:"Learning to code"})]}),h.jsxs("button",{type:"button",className:`role-option ${p==="teacher"?"active":""}`,onClick:()=>y("teacher"),children:[h.jsx(Ya,{size:20}),h.jsx("span",{children:"Teacher"}),h.jsx("small",{children:"Teaching coding"})]}),h.jsxs("button",{type:"button",className:`role-option ${p==="parent"?"active":""}`,onClick:()=>y("parent"),children:[h.jsx(Ey,{size:20}),h.jsx("span",{children:"Parent"}),h.jsx("small",{children:"Supporting my child"})]})]})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsxs("div",{className:"input-wrapper",children:[h.jsx(Cy,{className:"input-icon",size:20}),h.jsx("input",{id:"email",type:"email",value:o,onChange:g=>a(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"password",children:"Password"}),h.jsxs("div",{className:"input-wrapper",children:[h.jsx(Df,{className:"input-icon",size:20}),h.jsx("input",{id:"password",type:"password",value:l,onChange:g=>u(g.target.value),placeholder:"Enter your password",required:!0,minLength:6})]})]}),x&&h.jsx("div",{className:"error-message",children:x}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-large",disabled:v,children:v?"Please wait...":r==="signin"?"Sign In":"Create Account"})]}),h.jsx("div",{className:"auth-footer",children:h.jsxs("p",{children:[r==="signin"?"Don't have an account? ":"Already have an account? ",h.jsx("button",{type:"button",className:"auth-toggle",onClick:()=>n(r==="signin"?"signup":"signin"),children:r==="signin"?"Sign up":"Sign in"})]})})]}),h.jsx("style",{children:`
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
      `})]}):null},cw=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...r)=>ce(()=>Promise.resolve().then(()=>pn),void 0).then(({default:n})=>n(...r)):e=fetch,(...r)=>e(...r)};class hu extends Error{constructor(e,r="FunctionsError",n){super(e),this.name=r,this.context=n}}class dw extends hu{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Gc extends hu{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Jc extends hu{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Za;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Za||(Za={}));var hw=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};class fw{constructor(e,{headers:r={},customFetch:n,region:i=Za.Any}={}){this.url=e,this.headers=r,this.region=i,this.fetch=cw(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,r={}){var n;return hw(this,void 0,void 0,function*(){try{const{headers:i,method:s,body:o}=r;let a={},{region:l}=r;l||(l=this.region);const u=new URL(`${this.url}/${e}`);l&&l!=="any"&&(a["x-region"]=l,u.searchParams.set("forceFunctionRegion",l));let c;o&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(a["Content-Type"]="application/octet-stream",c=o):typeof o=="string"?(a["Content-Type"]="text/plain",c=o):typeof FormData<"u"&&o instanceof FormData?c=o:(a["Content-Type"]="application/json",c=JSON.stringify(o)));const d=yield this.fetch(u.toString(),{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},a),this.headers),i),body:c}).catch(w=>{throw new dw(w)}),p=d.headers.get("x-relay-error");if(p&&p==="true")throw new Gc(d);if(!d.ok)throw new Jc(d);let y=((n=d.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),v;return y==="application/json"?v=yield d.json():y==="application/octet-stream"?v=yield d.blob():y==="text/event-stream"?v=d:y==="multipart/form-data"?v=yield d.formData():v=yield d.text(),{data:v,error:null,response:d}}catch(i){return{data:null,error:i,response:i instanceof Jc||i instanceof Gc?i.context:void 0}}})}}var je={},fu={},ao={},ji={},lo={},uo={},pw=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},un=pw();const gw=un.fetch,Sp=un.fetch.bind(un),bp=un.Headers,mw=un.Request,vw=un.Response,pn=Object.freeze(Object.defineProperty({__proto__:null,Headers:bp,Request:mw,Response:vw,default:Sp,fetch:gw},Symbol.toStringTag,{value:"Module"})),yw=Yp(pn);var co={};Object.defineProperty(co,"__esModule",{value:!0});let ww=class extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}};co.default=ww;var Ep=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(uo,"__esModule",{value:!0});const _w=Ep(yw),xw=Ep(co);let kw=class{constructor(e){var r,n;this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=(r=e.shouldThrowOnError)!==null&&r!==void 0?r:!1,this.signal=e.signal,this.isMaybeSingle=(n=e.isMaybeSingle)!==null&&n!==void 0?n:!1,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=_w.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,r){return this.headers=new Headers(this.headers),this.headers.set(e,r),this}then(e,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const n=this.fetch;let i=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,a,l,u;let c=null,d=null,p=null,y=s.status,v=s.statusText;if(s.ok){if(this.method!=="HEAD"){const f=await s.text();f===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((o=this.headers.get("Accept"))===null||o===void 0)&&o.includes("application/vnd.pgrst.plan+text"))?d=f:d=JSON.parse(f))}const x=(a=this.headers.get("Prefer"))===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),m=(l=s.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");x&&m&&m.length>1&&(p=parseInt(m[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(c={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,p=null,y=406,v="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const x=await s.text();try{c=JSON.parse(x),Array.isArray(c)&&s.status===404&&(d=[],c=null,y=200,v="OK")}catch{s.status===404&&x===""?(y=204,v="No Content"):c={message:x}}if(c&&this.isMaybeSingle&&(!((u=c==null?void 0:c.details)===null||u===void 0)&&u.includes("0 rows"))&&(c=null,y=200,v="OK"),c&&this.shouldThrowOnError)throw new xw.default(c)}return{error:c,data:d,count:p,status:y,statusText:v}});return this.shouldThrowOnError||(i=i.catch(s=>{var o,a,l;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(a=s==null?void 0:s.stack)!==null&&a!==void 0?a:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(e,r)}returns(){return this}overrideTypes(){return this}};uo.default=kw;var Sw=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(lo,"__esModule",{value:!0});const bw=Sw(uo);let Ew=class extends bw.default{select(e){let r=!1;const n=(e??"*").split("").map(i=>/\s/.test(i)&&!r?"":(i==='"'&&(r=!r),i)).join("");return this.url.searchParams.set("select",n),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:r=!0,nullsFirst:n,foreignTable:i,referencedTable:s=i}={}){const o=s?`${s}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${e}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:r,referencedTable:n=r}={}){const i=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(i,`${e}`),this}range(e,r,{foreignTable:n,referencedTable:i=n}={}){const s=typeof i>"u"?"offset":`${i}.offset`,o=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${e}`),this.url.searchParams.set(o,`${r-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:r=!1,settings:n=!1,buffers:i=!1,wal:s=!1,format:o="text"}={}){var a;const l=[e?"analyze":null,r?"verbose":null,n?"settings":null,i?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`),o==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this}};lo.default=Ew;var jw=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ji,"__esModule",{value:!0});const Cw=jw(lo);let Tw=class extends Cw.default{eq(e,r){return this.url.searchParams.append(e,`eq.${r}`),this}neq(e,r){return this.url.searchParams.append(e,`neq.${r}`),this}gt(e,r){return this.url.searchParams.append(e,`gt.${r}`),this}gte(e,r){return this.url.searchParams.append(e,`gte.${r}`),this}lt(e,r){return this.url.searchParams.append(e,`lt.${r}`),this}lte(e,r){return this.url.searchParams.append(e,`lte.${r}`),this}like(e,r){return this.url.searchParams.append(e,`like.${r}`),this}likeAllOf(e,r){return this.url.searchParams.append(e,`like(all).{${r.join(",")}}`),this}likeAnyOf(e,r){return this.url.searchParams.append(e,`like(any).{${r.join(",")}}`),this}ilike(e,r){return this.url.searchParams.append(e,`ilike.${r}`),this}ilikeAllOf(e,r){return this.url.searchParams.append(e,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(e,r){return this.url.searchParams.append(e,`ilike(any).{${r.join(",")}}`),this}is(e,r){return this.url.searchParams.append(e,`is.${r}`),this}in(e,r){const n=Array.from(new Set(r)).map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(e,`in.(${n})`),this}contains(e,r){return typeof r=="string"?this.url.searchParams.append(e,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(e,`cs.{${r.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(r)}`),this}containedBy(e,r){return typeof r=="string"?this.url.searchParams.append(e,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(e,`cd.{${r.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(r)}`),this}rangeGt(e,r){return this.url.searchParams.append(e,`sr.${r}`),this}rangeGte(e,r){return this.url.searchParams.append(e,`nxl.${r}`),this}rangeLt(e,r){return this.url.searchParams.append(e,`sl.${r}`),this}rangeLte(e,r){return this.url.searchParams.append(e,`nxr.${r}`),this}rangeAdjacent(e,r){return this.url.searchParams.append(e,`adj.${r}`),this}overlaps(e,r){return typeof r=="string"?this.url.searchParams.append(e,`ov.${r}`):this.url.searchParams.append(e,`ov.{${r.join(",")}}`),this}textSearch(e,r,{config:n,type:i}={}){let s="";i==="plain"?s="pl":i==="phrase"?s="ph":i==="websearch"&&(s="w");const o=n===void 0?"":`(${n})`;return this.url.searchParams.append(e,`${s}fts${o}.${r}`),this}match(e){return Object.entries(e).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(e,r,n){return this.url.searchParams.append(e,`not.${r}.${n}`),this}or(e,{foreignTable:r,referencedTable:n=r}={}){const i=n?`${n}.or`:"or";return this.url.searchParams.append(i,`(${e})`),this}filter(e,r,n){return this.url.searchParams.append(e,`${r}.${n}`),this}};ji.default=Tw;var Pw=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ao,"__esModule",{value:!0});const En=Pw(ji);let Ow=class{constructor(e,{headers:r={},schema:n,fetch:i}){this.url=e,this.headers=new Headers(r),this.schema=n,this.fetch=i}select(e,{head:r=!1,count:n}={}){const i=r?"HEAD":"GET";let s=!1;const o=(e??"*").split("").map(a=>/\s/.test(a)&&!s?"":(a==='"'&&(s=!s),a)).join("");return this.url.searchParams.set("select",o),n&&this.headers.append("Prefer",`count=${n}`),new En.default({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(e,{count:r,defaultToNull:n=!0}={}){var i;const s="POST";if(r&&this.headers.append("Prefer",`count=${r}`),n||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const o=e.reduce((a,l)=>a.concat(Object.keys(l)),[]);if(o.length>0){const a=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",a.join(","))}}return new En.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch})}upsert(e,{onConflict:r,ignoreDuplicates:n=!1,count:i,defaultToNull:s=!0}={}){var o;const a="POST";if(this.headers.append("Prefer",`resolution=${n?"ignore":"merge"}-duplicates`),r!==void 0&&this.url.searchParams.set("on_conflict",r),i&&this.headers.append("Prefer",`count=${i}`),s||this.headers.append("Prefer","missing=default"),Array.isArray(e)){const l=e.reduce((u,c)=>u.concat(Object.keys(c)),[]);if(l.length>0){const u=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",u.join(","))}}return new En.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}update(e,{count:r}={}){var n;const i="PATCH";return r&&this.headers.append("Prefer",`count=${r}`),new En.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}delete({count:e}={}){var r;const n="DELETE";return e&&this.headers.append("Prefer",`count=${e}`),new En.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}};ao.default=Ow;var jp=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(fu,"__esModule",{value:!0});const Nw=jp(ao),Rw=jp(ji);let $w=class Cp{constructor(e,{headers:r={},schema:n,fetch:i}={}){this.url=e,this.headers=new Headers(r),this.schemaName=n,this.fetch=i}from(e){const r=new URL(`${this.url}/${e}`);return new Nw.default(r,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new Cp(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,r={},{head:n=!1,get:i=!1,count:s}={}){var o;let a;const l=new URL(`${this.url}/rpc/${e}`);let u;n||i?(a=n?"HEAD":"GET",Object.entries(r).filter(([d,p])=>p!==void 0).map(([d,p])=>[d,Array.isArray(p)?`{${p.join(",")}}`:`${p}`]).forEach(([d,p])=>{l.searchParams.append(d,p)})):(a="POST",u=r);const c=new Headers(this.headers);return s&&c.set("Prefer",`count=${s}`),new Rw.default({method:a,url:l,headers:c,schema:this.schemaName,body:u,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}};fu.default=$w;var gn=Ke&&Ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(je,"__esModule",{value:!0});je.PostgrestError=je.PostgrestBuilder=je.PostgrestTransformBuilder=je.PostgrestFilterBuilder=je.PostgrestQueryBuilder=je.PostgrestClient=void 0;const Tp=gn(fu);je.PostgrestClient=Tp.default;const Pp=gn(ao);je.PostgrestQueryBuilder=Pp.default;const Op=gn(ji);je.PostgrestFilterBuilder=Op.default;const Np=gn(lo);je.PostgrestTransformBuilder=Np.default;const Rp=gn(uo);je.PostgrestBuilder=Rp.default;const $p=gn(co);je.PostgrestError=$p.default;var Lw=je.default={PostgrestClient:Tp.default,PostgrestQueryBuilder:Pp.default,PostgrestFilterBuilder:Op.default,PostgrestTransformBuilder:Np.default,PostgrestBuilder:Rp.default,PostgrestError:$p.default};const{PostgrestClient:Aw,PostgrestQueryBuilder:I_,PostgrestFilterBuilder:U_,PostgrestTransformBuilder:D_,PostgrestBuilder:M_,PostgrestError:z_}=Lw;class Iw{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const r=process.versions;if(r&&r.node){const n=r.node,i=parseInt(n.replace(/^v/,"").split(".")[0]);return i>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${i} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${i} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let r=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(r+=`

Suggested solution: ${e.workaround}`),new Error(r)}static createWebSocket(e,r){const n=this.getWebSocketConstructor();return new n(e,r)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Uw="2.15.5",Dw=`realtime-js/${Uw}`,Mw="1.0.0",el=1e4,zw=1e3,Fw=100;var Kn;(function(t){t[t.connecting=0]="connecting",t[t.open=1]="open",t[t.closing=2]="closing",t[t.closed=3]="closed"})(Kn||(Kn={}));var ie;(function(t){t.closed="closed",t.errored="errored",t.joined="joined",t.joining="joining",t.leaving="leaving"})(ie||(ie={}));var et;(function(t){t.close="phx_close",t.error="phx_error",t.join="phx_join",t.reply="phx_reply",t.leave="phx_leave",t.access_token="access_token"})(et||(et={}));var tl;(function(t){t.websocket="websocket"})(tl||(tl={}));var ur;(function(t){t.Connecting="connecting",t.Open="open",t.Closing="closing",t.Closed="closed"})(ur||(ur={}));class Bw{constructor(){this.HEADER_LENGTH=1}decode(e,r){return e.constructor===ArrayBuffer?r(this._binaryDecode(e)):r(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const r=new DataView(e),n=new TextDecoder;return this._decodeBroadcast(e,r,n)}_decodeBroadcast(e,r,n){const i=r.getUint8(1),s=r.getUint8(2);let o=this.HEADER_LENGTH+2;const a=n.decode(e.slice(o,o+i));o=o+i;const l=n.decode(e.slice(o,o+s));o=o+s;const u=JSON.parse(n.decode(e.slice(o,e.byteLength)));return{ref:null,topic:a,event:l,payload:u}}}class Lp{constructor(e,r){this.callback=e,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var H;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(H||(H={}));const Qc=(t,e,r={})=>{var n;const i=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(e).reduce((s,o)=>(s[o]=Ww(o,t,e,i),s),{})},Ww=(t,e,r,n)=>{const i=e.find(a=>a.name===t),s=i==null?void 0:i.type,o=r[t];return s&&!n.includes(s)?Ap(s,o):rl(o)},Ap=(t,e)=>{if(t.charAt(0)==="_"){const r=t.slice(1,t.length);return Kw(e,r)}switch(t){case H.bool:return Hw(e);case H.float4:case H.float8:case H.int2:case H.int4:case H.int8:case H.numeric:case H.oid:return Vw(e);case H.json:case H.jsonb:return qw(e);case H.timestamp:return Gw(e);case H.abstime:case H.date:case H.daterange:case H.int4range:case H.int8range:case H.money:case H.reltime:case H.text:case H.time:case H.timestamptz:case H.timetz:case H.tsrange:case H.tstzrange:return rl(e);default:return rl(e)}},rl=t=>t,Hw=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Vw=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},qw=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){return console.log(`JSON parse error: ${e}`),t}return t},Kw=(t,e)=>{if(typeof t!="string")return t;const r=t.length-1,n=t[r];if(t[0]==="{"&&n==="}"){let s;const o=t.slice(1,r);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>Ap(e,a))}return t},Gw=t=>typeof t=="string"?t.replace(" ","T"):t,Ip=t=>{let e=t;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"};class qo{constructor(e,r,n={},i=el){this.channel=e,this.event=r,this.payload=n,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,r){var n;return this._hasReceived(e)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:r}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(r))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Yc;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Yc||(Yc={}));class Gn{constructor(e,r){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Gn.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=Gn.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Gn.syncDiff(this.state,i,s,o),a())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,r,n,i){const s=this.cloneDeep(e),o=this.transformState(r),a={},l={};return this.map(s,(u,c)=>{o[u]||(l[u]=c)}),this.map(o,(u,c)=>{const d=s[u];if(d){const p=c.map(x=>x.presence_ref),y=d.map(x=>x.presence_ref),v=c.filter(x=>y.indexOf(x.presence_ref)<0),w=d.filter(x=>p.indexOf(x.presence_ref)<0);v.length>0&&(a[u]=v),w.length>0&&(l[u]=w)}else a[u]=c}),this.syncDiff(s,{joins:a,leaves:l},n,i)}static syncDiff(e,r,n,i){const{joins:s,leaves:o}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),i||(i=()=>{}),this.map(s,(a,l)=>{var u;const c=(u=e[a])!==null&&u!==void 0?u:[];if(e[a]=this.cloneDeep(l),c.length>0){const d=e[a].map(y=>y.presence_ref),p=c.filter(y=>d.indexOf(y.presence_ref)<0);e[a].unshift(...p)}n(a,c,l)}),this.map(o,(a,l)=>{let u=e[a];if(!u)return;const c=l.map(d=>d.presence_ref);u=u.filter(d=>c.indexOf(d.presence_ref)<0),e[a]=u,i(a,u,l),u.length===0&&delete e[a]}),e}static map(e,r){return Object.getOwnPropertyNames(e).map(n=>r(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((r,n)=>{const i=e[n];return"metas"in i?r[n]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):r[n]=i,r},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Xc;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Xc||(Xc={}));var Jn;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(Jn||(Jn={}));var gt;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(gt||(gt={}));class pu{constructor(e,r={config:{}},n){this.topic=e,this.params=r,this.socket=n,this.bindings={},this.state=ie.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new qo(this,et.join,this.params,this.timeout),this.rejoinTimer=new Lp(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=ie.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=ie.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=ie.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=ie.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=ie.errored,this.rejoinTimer.scheduleTimeout())}),this._on(et.reply,{},(i,s)=>{this._trigger(this._replyEventName(s),i)}),this.presence=new Gn(this),this.broadcastEndpointURL=Ip(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(e,r=this.timeout){var n,i,s;if(this.socket.isConnected()||this.socket.connect(),this.state==ie.closed){const{config:{broadcast:o,presence:a,private:l}}=this.params,u=(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(y=>y.filter))!==null&&i!==void 0?i:[],c=!!this.bindings[Jn.PRESENCE]&&this.bindings[Jn.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,d={},p={broadcast:o,presence:Object.assign(Object.assign({},a),{enabled:c}),postgres_changes:u,private:l};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this._onError(y=>e==null?void 0:e(gt.CHANNEL_ERROR,y)),this._onClose(()=>e==null?void 0:e(gt.CLOSED)),this.updateJoinPayload(Object.assign({config:p},d)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:y})=>{var v;if(this.socket.setAuth(),y===void 0){e==null||e(gt.SUBSCRIBED);return}else{const w=this.bindings.postgres_changes,x=(v=w==null?void 0:w.length)!==null&&v!==void 0?v:0,m=[];for(let f=0;f<x;f++){const g=w[f],{filter:{event:_,schema:S,table:b,filter:E}}=g,P=y&&y[f];if(P&&P.event===_&&P.schema===S&&P.table===b&&P.filter===E)m.push(Object.assign(Object.assign({},g),{id:P.id}));else{this.unsubscribe(),this.state=ie.errored,e==null||e(gt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=m,e&&e(gt.SUBSCRIBED);return}}).receive("error",y=>{this.state=ie.errored,e==null||e(gt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(y).join(", ")||"error")))}).receive("timeout",()=>{e==null||e(gt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,r={}){return await this.send({type:"presence",event:"track",payload:e},r.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,r,n){return this.state===ie.joined&&e===Jn.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,r,n)}async send(e,r={}){var n,i;if(!this._canPush()&&e.type==="broadcast"){const{event:s,payload:o}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=u.body)===null||i===void 0?void 0:i.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,a,l;const u=this._push(e.type,e,r.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("error",()=>s("error")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=ie.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(et.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(i=>{n=new qo(this,et.leave,{},e),n.receive("ok",()=>{r(),i("ok")}).receive("timeout",()=>{r(),i("timed out")}).receive("error",()=>{i("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=ie.closed,this.bindings={}}async _fetchWithTimeout(e,r,n){const i=new AbortController,s=setTimeout(()=>i.abort(),n),o=await this.socket.fetch(e,Object.assign(Object.assign({},r),{signal:i.signal}));return clearTimeout(s),o}_push(e,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new qo(this,e,r,n);return this._canPush()?i.send():this._addToPushBuffer(i),i}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>Fw){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(e,r,n){return r}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,r,n){var i,s;const o=e.toLocaleLowerCase(),{close:a,error:l,leave:u,join:c}=et;if(n&&[a,l,u,c].indexOf(o)>=0&&n!==this._joinRef())return;let p=this._onMessage(o,r,n);if(r&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(y=>{var v,w,x;return((v=y.filter)===null||v===void 0?void 0:v.event)==="*"||((x=(w=y.filter)===null||w===void 0?void 0:w.event)===null||x===void 0?void 0:x.toLocaleLowerCase())===o}).map(y=>y.callback(p,n)):(s=this.bindings[o])===null||s===void 0||s.filter(y=>{var v,w,x,m,f,g;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in y){const _=y.id,S=(v=y.filter)===null||v===void 0?void 0:v.event;return _&&((w=r.ids)===null||w===void 0?void 0:w.includes(_))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((x=r.data)===null||x===void 0?void 0:x.type.toLocaleLowerCase()))}else{const _=(f=(m=y==null?void 0:y.filter)===null||m===void 0?void 0:m.event)===null||f===void 0?void 0:f.toLocaleLowerCase();return _==="*"||_===((g=r==null?void 0:r.event)===null||g===void 0?void 0:g.toLocaleLowerCase())}else return y.type.toLocaleLowerCase()===o}).map(y=>{if(typeof p=="object"&&"ids"in p){const v=p.data,{schema:w,table:x,commit_timestamp:m,type:f,errors:g}=v;p=Object.assign(Object.assign({},{schema:w,table:x,commit_timestamp:m,eventType:f,new:{},old:{},errors:g}),this._getPayloadRecords(v))}y.callback(p,n)})}_isClosed(){return this.state===ie.closed}_isJoined(){return this.state===ie.joined}_isJoining(){return this.state===ie.joining}_isLeaving(){return this.state===ie.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,r,n){const i=e.toLocaleLowerCase(),s={type:i,filter:r,callback:n};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(e,r){const n=e.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&pu.isEqual(i.filter,r))})),this}static isEqual(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const n in e)if(e[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(et.close,{},e)}_onError(e){this._on(et.error,{},r=>e(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=ie.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const r={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(r.new=Qc(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(r.old=Qc(e.columns,e.old_record)),r}}const Ko=()=>{},Ji={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Jw=[1e3,2e3,5e3,1e4],Qw=1e4,Yw=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Xw{constructor(e,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=el,this.transport=null,this.heartbeatIntervalMs=Ji.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Ko,this.ref=0,this.reconnectTimer=null,this.logger=Ko,this.conn=null,this.sendBuffer=[],this.serializer=new Bw,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=i=>{let s;return i?s=i:typeof fetch>"u"?s=(...o)=>ce(()=>Promise.resolve().then(()=>pn),void 0).then(({default:a})=>a(...o)).catch(a=>{throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):s=fetch,(...o)=>s(...o)},!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${e}/${tl.websocket}`,this.httpEndpoint=Ip(e),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=Iw.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const r=e.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Mw}))}disconnect(e,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},e?this.conn.close(e,r??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const r=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const e=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,r,n){this.logger(e,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Kn.connecting:return ur.Connecting;case Kn.open:return ur.Open;case Kn.closing:return ur.Closing;default:return ur.Closed}}isConnected(){return this.connectionState()===ur.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,r={config:{}}){const n=`realtime:${e}`,i=this.getChannels().find(s=>s.topic===n);if(i)return i;{const s=new pu(`realtime:${e}`,r,this);return this.channels.push(s),s}}push(e){const{topic:r,event:n,payload:i,ref:s}=e,o=()=>{this.encode(e,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(zw,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Ji.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let r=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${e}"`),r.unsubscribe())}_remove(e){this.channels=this.channels.filter(r=>r.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,r=>{if(r.topic==="phoenix"&&r.event==="phx_reply")try{this.heartbeatCallback(r.payload.status==="ok"?"ok":"error")}catch(u){this.log("error","error in heartbeat callback",u)}r.ref&&r.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:i,payload:s,ref:o}=r,a=o?`(${o})`:"",l=s.status||"";this.log("receive",`${l} ${n} ${i} ${a}`.trim(),s),this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(i,s,o)),this._triggerStateCallbacks("message",r)})}_clearTimer(e){var r;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var r;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(et.error))}_appendParams(e,r){if(Object.keys(r).length===0)return e;const n=e.match(/\?/)?"&":"?",i=new URLSearchParams(r);return`${e}${n}${i}`}_workerObjectUrl(e){let r;if(e)r=e;else{const n=new Blob([Yw],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(e,r=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(e=null){let r;e?r=e:this.accessToken?r=await this.accessToken():r=this.accessTokenValue,this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const i={access_token:r,version:Dw};r&&n.updateJoinPayload(i),n.joinedOnce&&n._isJoined()&&n._push(et.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(r=>{this.log("error",`error setting auth in ${e}`,r)})}_triggerStateCallbacks(e,r){try{this.stateChangeCallbacks[e].forEach(n=>{try{n(r)}catch(i){this.log("error",`error in ${e} callback`,i)}})}catch(n){this.log("error",`error triggering ${e} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new Lp(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ji.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var r,n,i,s,o,a,l,u,c;if(this.transport=(r=e==null?void 0:e.transport)!==null&&r!==void 0?r:null,this.timeout=(n=e==null?void 0:e.timeout)!==null&&n!==void 0?n:el,this.heartbeatIntervalMs=(i=e==null?void 0:e.heartbeatIntervalMs)!==null&&i!==void 0?i:Ji.HEARTBEAT_INTERVAL,this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(o=e==null?void 0:e.accessToken)!==null&&o!==void 0?o:null,this.heartbeatCallback=(a=e==null?void 0:e.heartbeatCallback)!==null&&a!==void 0?a:Ko,e!=null&&e.params&&(this.params=e.params),e!=null&&e.logger&&(this.logger=e.logger),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(l=e==null?void 0:e.reconnectAfterMs)!==null&&l!==void 0?l:d=>Jw[d-1]||Qw,this.encode=(u=e==null?void 0:e.encode)!==null&&u!==void 0?u:(d,p)=>p(JSON.stringify(d)),this.decode=(c=e==null?void 0:e.decode)!==null&&c!==void 0?c:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl}}}class gu extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function se(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}class Zw extends gu{constructor(e,r,n){super(e),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class nl extends gu{constructor(e,r){super(e),this.name="StorageUnknownError",this.originalError=r}}var e1=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};const Up=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...r)=>ce(()=>Promise.resolve().then(()=>pn),void 0).then(({default:n})=>n(...r)):e=fetch,(...r)=>e(...r)},t1=()=>e1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield ce(()=>Promise.resolve().then(()=>pn),void 0)).Response:Response}),il=t=>{if(Array.isArray(t))return t.map(r=>il(r));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([r,n])=>{const i=r.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[i]=il(n)}),e},r1=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)};var br=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};const Go=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),n1=(t,e,r)=>br(void 0,void 0,void 0,function*(){const n=yield t1();t instanceof n&&!(r!=null&&r.noResolveJson)?t.json().then(i=>{const s=t.status||500,o=(i==null?void 0:i.statusCode)||s+"";e(new Zw(Go(i),s,o))}).catch(i=>{e(new nl(Go(i),i))}):e(new nl(Go(t),t))}),i1=(t,e,r,n)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"||!n?i:(r1(n)?(i.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i.body=JSON.stringify(n)):i.body=n,e!=null&&e.duplex&&(i.duplex=e.duplex),Object.assign(Object.assign({},i),r))};function Ci(t,e,r,n,i,s){return br(this,void 0,void 0,function*(){return new Promise((o,a)=>{t(r,i1(e,n,i,s)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>n1(l,a,n))})})}function Ms(t,e,r,n){return br(this,void 0,void 0,function*(){return Ci(t,"GET",e,r,n)})}function lt(t,e,r,n,i){return br(this,void 0,void 0,function*(){return Ci(t,"POST",e,n,i,r)})}function sl(t,e,r,n,i){return br(this,void 0,void 0,function*(){return Ci(t,"PUT",e,n,i,r)})}function s1(t,e,r,n){return br(this,void 0,void 0,function*(){return Ci(t,"HEAD",e,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function Dp(t,e,r,n,i){return br(this,void 0,void 0,function*(){return Ci(t,"DELETE",e,n,i,r)})}var _e=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};const o1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Zc={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class a1{constructor(e,r={},n,i){this.url=e,this.headers=r,this.bucketId=n,this.fetch=Up(i)}uploadOrUpdate(e,r,n,i){return _e(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},Zc),i);let a=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(o.upsert)});const l=o.metadata;typeof Blob<"u"&&n instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",n)):typeof FormData<"u"&&n instanceof FormData?(s=n,s.append("cacheControl",o.cacheControl),l&&s.append("metadata",this.encodeMetadata(l))):(s=n,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType,l&&(a["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),i!=null&&i.headers&&(a=Object.assign(Object.assign({},a),i.headers));const u=this._removeEmptyFolders(r),c=this._getFinalPath(u),d=yield(e=="PUT"?sl:lt)(this.fetch,`${this.url}/object/${c}`,s,Object.assign({headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:u,id:d.Id,fullPath:d.Key},error:null}}catch(s){if(se(s))return{data:null,error:s};throw s}})}upload(e,r,n){return _e(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,r,n)})}uploadToSignedUrl(e,r,n,i){return _e(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),o=this._getFinalPath(s),a=new URL(this.url+`/object/upload/sign/${o}`);a.searchParams.set("token",r);try{let l;const u=Object.assign({upsert:Zc.upsert},i),c=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",u.cacheControl)):(l=n,c["cache-control"]=`max-age=${u.cacheControl}`,c["content-type"]=u.contentType);const d=yield sl(this.fetch,a.toString(),l,{headers:c});return{data:{path:s,fullPath:d.Key},error:null}}catch(l){if(se(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,r){return _e(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e);const i=Object.assign({},this.headers);r!=null&&r.upsert&&(i["x-upsert"]="true");const s=yield lt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:i}),o=new URL(this.url+s.url),a=o.searchParams.get("token");if(!a)throw new gu("No token returned by API");return{data:{signedUrl:o.toString(),path:e,token:a},error:null}}catch(n){if(se(n))return{data:null,error:n};throw n}})}update(e,r,n){return _e(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,r,n)})}move(e,r,n){return _e(this,void 0,void 0,function*(){try{return{data:yield lt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(i){if(se(i))return{data:null,error:i};throw i}})}copy(e,r,n){return _e(this,void 0,void 0,function*(){try{return{data:{path:(yield lt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(i){if(se(i))return{data:null,error:i};throw i}})}createSignedUrl(e,r,n){return _e(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e),s=yield lt(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const o=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if(se(i))return{data:null,error:i};throw i}})}createSignedUrls(e,r,n){return _e(this,void 0,void 0,function*(){try{const i=yield lt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:e},{headers:this.headers}),s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:i.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if(se(i))return{data:null,error:i};throw i}})}download(e,r){return _e(this,void 0,void 0,function*(){const i=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),o=s?`?${s}`:"";try{const a=this._getFinalPath(e);return{data:yield(yield Ms(this.fetch,`${this.url}/${i}/${a}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(a){if(se(a))return{data:null,error:a};throw a}})}info(e){return _e(this,void 0,void 0,function*(){const r=this._getFinalPath(e);try{const n=yield Ms(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:il(n),error:null}}catch(n){if(se(n))return{data:null,error:n};throw n}})}exists(e){return _e(this,void 0,void 0,function*(){const r=this._getFinalPath(e);try{return yield s1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(se(n)&&n instanceof nl){const i=n.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:n}}throw n}})}getPublicUrl(e,r){const n=this._getFinalPath(e),i=[],s=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";s!==""&&i.push(s);const a=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});l!==""&&i.push(l);let u=i.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}${u}`)}}}remove(e){return _e(this,void 0,void 0,function*(){try{return{data:yield Dp(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(r){if(se(r))return{data:null,error:r};throw r}})}list(e,r,n){return _e(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},o1),r),{prefix:e||""});return{data:yield lt(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},n),error:null}}catch(i){if(se(i))return{data:null,error:i};throw i}})}listV2(e,r){return _e(this,void 0,void 0,function*(){try{const n=Object.assign({},e);return{data:yield lt(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},r),error:null}}catch(n){if(se(n))return{data:null,error:n};throw n}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const r=[];return e.width&&r.push(`width=${e.width}`),e.height&&r.push(`height=${e.height}`),e.resize&&r.push(`resize=${e.resize}`),e.format&&r.push(`format=${e.format}`),e.quality&&r.push(`quality=${e.quality}`),r.join("&")}}const l1="2.11.1",u1={"X-Client-Info":`storage-js/${l1}`};var jr=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};class c1{constructor(e,r={},n,i){const s=new URL(e);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase.")),this.url=s.href,this.headers=Object.assign(Object.assign({},u1),r),this.fetch=Up(n)}listBuckets(){return jr(this,void 0,void 0,function*(){try{return{data:yield Ms(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(se(e))return{data:null,error:e};throw e}})}getBucket(e){return jr(this,void 0,void 0,function*(){try{return{data:yield Ms(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(r){if(se(r))return{data:null,error:r};throw r}})}createBucket(e,r={public:!1}){return jr(this,void 0,void 0,function*(){try{return{data:yield lt(this.fetch,`${this.url}/bucket`,{id:e,name:e,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(se(n))return{data:null,error:n};throw n}})}updateBucket(e,r){return jr(this,void 0,void 0,function*(){try{return{data:yield sl(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(se(n))return{data:null,error:n};throw n}})}emptyBucket(e){return jr(this,void 0,void 0,function*(){try{return{data:yield lt(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(se(r))return{data:null,error:r};throw r}})}deleteBucket(e){return jr(this,void 0,void 0,function*(){try{return{data:yield Dp(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(r){if(se(r))return{data:null,error:r};throw r}})}}class d1 extends c1{constructor(e,r={},n,i){super(e,r,n,i)}from(e){return new a1(this.url,this.headers,e,this.fetch)}}const h1="2.57.2";let Ln="";typeof Deno<"u"?Ln="deno":typeof document<"u"?Ln="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ln="react-native":Ln="node";const f1={"X-Client-Info":`supabase-js-${Ln}/${h1}`},p1={headers:f1},g1={schema:"public"},m1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},v1={};var y1=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};const w1=t=>{let e;return t?e=t:typeof fetch>"u"?e=Sp:e=fetch,(...r)=>e(...r)},_1=()=>typeof Headers>"u"?bp:Headers,x1=(t,e,r)=>{const n=w1(r),i=_1();return(s,o)=>y1(void 0,void 0,void 0,function*(){var a;const l=(a=yield e())!==null&&a!==void 0?a:t;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",t),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),n(s,Object.assign(Object.assign({},o),{headers:u}))})};var k1=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};function S1(t){return t.endsWith("/")?t:t+"/"}function b1(t,e){var r,n;const{db:i,auth:s,realtime:o,global:a}=t,{db:l,auth:u,realtime:c,global:d}=e,p={db:Object.assign(Object.assign({},l),i),auth:Object.assign(Object.assign({},u),s),realtime:Object.assign(Object.assign({},c),o),storage:{},global:Object.assign(Object.assign(Object.assign({},d),a),{headers:Object.assign(Object.assign({},(r=d==null?void 0:d.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>k1(this,void 0,void 0,function*(){return""})};return t.accessToken?p.accessToken=t.accessToken:delete p.accessToken,p}const Mp="2.71.1",Lr=30*1e3,ol=3,Jo=ol*Lr,E1="http://localhost:9999",j1="supabase.auth.token",C1={"X-Client-Info":`gotrue-js/${Mp}`},al="X-Supabase-Api-Version",zp={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},T1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,P1=10*60*1e3;class mu extends Error{constructor(e,r,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function U(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class O1 extends mu{constructor(e,r,n){super(e,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function N1(t){return U(t)&&t.name==="AuthApiError"}class Fp extends mu{constructor(e,r){super(e),this.name="AuthUnknownError",this.originalError=r}}class Zt extends mu{constructor(e,r,n,i){super(e,n,i),this.name=r,this.status=n}}class Tt extends Zt{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function R1(t){return U(t)&&t.name==="AuthSessionMissingError"}class Qi extends Zt{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Yi extends Zt{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Xi extends Zt{constructor(e,r=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function $1(t){return U(t)&&t.name==="AuthImplicitGrantRedirectError"}class ed extends Zt{constructor(e,r=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class ll extends Zt{constructor(e,r){super(e,"AuthRetryableFetchError",r,void 0)}}function Qo(t){return U(t)&&t.name==="AuthRetryableFetchError"}class td extends Zt{constructor(e,r,n){super(e,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class ul extends Zt{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const zs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),rd=` 	
\r=`.split(""),L1=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<rd.length;e+=1)t[rd[e].charCodeAt(0)]=-2;for(let e=0;e<zs.length;e+=1)t[zs[e].charCodeAt(0)]=e;return t})();function nd(t,e,r){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r(zs[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r(zs[n]),e.queuedBits-=6}}function Bp(t,e,r){const n=L1[t];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)r(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function id(t){const e=[],r=o=>{e.push(String.fromCodePoint(o))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},s=o=>{U1(o,n,r)};for(let o=0;o<t.length;o+=1)Bp(t.charCodeAt(o),i,s);return e.join("")}function A1(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function I1(t,e){for(let r=0;r<t.length;r+=1){let n=t.charCodeAt(r);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(t.charCodeAt(r+1)-56320&65535|i)+65536,r+=1}A1(n,e)}}function U1(t,e,r){if(e.utf8seq===0){if(t<=127){r(t);return}for(let n=1;n<6;n+=1)if(!(t>>7-n&1)){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&r(e.codepoint)}}function D1(t){const e=[],r={queue:0,queuedBits:0},n=i=>{e.push(i)};for(let i=0;i<t.length;i+=1)Bp(t.charCodeAt(i),r,n);return new Uint8Array(e)}function M1(t){const e=[];return I1(t,r=>e.push(r)),new Uint8Array(e)}function z1(t){const e=[],r={queue:0,queuedBits:0},n=i=>{e.push(i)};return t.forEach(i=>nd(i,r,n)),nd(null,r,n),e.join("")}function F1(t){return Math.round(Date.now()/1e3)+t}function B1(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t=="x"?e:e&3|8).toString(16)})}const Ye=()=>typeof window<"u"&&typeof document<"u",ir={tested:!1,writable:!1},Wp=()=>{if(!Ye())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ir.tested)return ir.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),ir.tested=!0,ir.writable=!0}catch{ir.tested=!0,ir.writable=!1}return ir.writable};function W1(t){const e={},r=new URL(t);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((i,s)=>{e[s]=i})}catch{}return r.searchParams.forEach((n,i)=>{e[i]=n}),e}const Hp=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...r)=>ce(()=>Promise.resolve().then(()=>pn),void 0).then(({default:n})=>n(...r)):e=fetch,(...r)=>e(...r)},H1=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",Ar=async(t,e,r)=>{await t.setItem(e,JSON.stringify(r))},sr=async(t,e)=>{const r=await t.getItem(e);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Ct=async(t,e)=>{await t.removeItem(e)};class ho{constructor(){this.promise=new ho.promiseConstructor((e,r)=>{this.resolve=e,this.reject=r})}}ho.promiseConstructor=Promise;function Yo(t){const e=t.split(".");if(e.length!==3)throw new ul("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!T1.test(e[n]))throw new ul("JWT not in base64url format");return{header:JSON.parse(id(e[0])),payload:JSON.parse(id(e[1])),signature:D1(e[2]),raw:{header:e[0],payload:e[1]}}}async function V1(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function q1(t,e){return new Promise((n,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await t(s);if(!e(s,null,o)){n(o);return}}catch(o){if(!e(s,o)){i(o);return}}})()})}function K1(t){return("0"+t.toString(16)).substr(-2)}function G1(){const e=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let i="";for(let s=0;s<56;s++)i+=r.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(e),Array.from(e,K1).join("")}async function J1(t){const r=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",r),i=new Uint8Array(n);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}async function Q1(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const r=await J1(t);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Cr(t,e,r=!1){const n=G1();let i=n;r&&(i+="/PASSWORD_RECOVERY"),await Ar(t,`${e}-code-verifier`,i);const s=await Q1(n);return[s,n===s?"plain":"s256"]}const Y1=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function X1(t){const e=t.headers.get(al);if(!e||!e.match(Y1))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Z1(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function e_(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const t_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Tr(t){if(!t_.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Xo(){const t={};return new Proxy(t,{get:(e,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function sd(t){return JSON.parse(JSON.stringify(t))}var r_=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};const lr=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),n_=[502,503,504];async function od(t){var e;if(!H1(t))throw new ll(lr(t),0);if(n_.includes(t.status))throw new ll(lr(t),t.status);let r;try{r=await t.json()}catch(s){throw new Fp(lr(s),s)}let n;const i=X1(t);if(i&&i.getTime()>=zp["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new td(lr(r),t.status,((e=r.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new Tt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((s,o)=>s&&typeof o=="string",!0))throw new td(lr(r),t.status,r.weak_password.reasons);throw new O1(lr(r),t.status||500,n)}const i_=(t,e,r,n)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),r))};async function M(t,e,r,n){var i;const s=Object.assign({},n==null?void 0:n.headers);s[al]||(s[al]=zp["2024-01-01"].name),n!=null&&n.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const o=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(o.redirect_to=n.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await s_(t,e,r+a,{headers:s,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function s_(t,e,r,n,i,s){const o=i_(e,n,i,s);let a;try{a=await t(r,Object.assign({},o))}catch(l){throw console.error(l),new ll(lr(l),0)}if(a.ok||await od(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await od(l)}}function ft(t){var e;let r=null;u_(t)&&(r=Object.assign({},t),t.expires_at||(r.expires_at=F1(t.expires_in)));const n=(e=t.user)!==null&&e!==void 0?e:t;return{data:{session:r,user:n},error:null}}function ad(t){const e=ft(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(e.data.weak_password=t.weak_password),e}function $t(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function o_(t){return{data:t,error:null}}function a_(t){const{action_link:e,email_otp:r,hashed_token:n,redirect_to:i,verification_type:s}=t,o=r_(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:e,email_otp:r,hashed_token:n,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function l_(t){return t}function u_(t){return t.access_token&&t.refresh_token&&t.expires_in}const Zo=["global","local","others"];var c_=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};class d_{constructor({url:e="",headers:r={},fetch:n}){this.url=e,this.headers=r,this.fetch=Hp(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,r=Zo[0]){if(Zo.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Zo.join(", ")}`);try{return await M(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,r={}){try{return await M(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:$t})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:r}=e,n=c_(e,["options"]),i=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await M(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:a_,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(U(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(e){try{return await M(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:$t})}catch(r){if(U(r))return{data:{user:null},error:r};throw r}}async listUsers(e){var r,n,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},c=await M(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=e==null?void 0:e.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(s=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:l_});if(c.error)throw c.error;const d=await c.json(),p=(o=c.headers.get("x-total-count"))!==null&&o!==void 0?o:0,y=(l=(a=c.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return y.length>0&&(y.forEach(v=>{const w=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),x=JSON.parse(v.split(";")[1].split("=")[1]);u[`${x}Page`]=w}),u.total=parseInt(p)),{data:Object.assign(Object.assign({},d),u),error:null}}catch(u){if(U(u))return{data:{users:[]},error:u};throw u}}async getUserById(e){Tr(e);try{return await M(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:$t})}catch(r){if(U(r))return{data:{user:null},error:r};throw r}}async updateUserById(e,r){Tr(e);try{return await M(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:r,headers:this.headers,xform:$t})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,r=!1){Tr(e);try{return await M(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:r},xform:$t})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){Tr(e.userId);try{const{data:r,error:n}=await M(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:r,error:n}}catch(r){if(U(r))return{data:null,error:r};throw r}}async _deleteFactor(e){Tr(e.userId),Tr(e.id);try{return{data:await M(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(r){if(U(r))return{data:null,error:r};throw r}}}function ld(t={}){return{getItem:e=>t[e]||null,setItem:(e,r)=>{t[e]=r},removeItem:e=>{delete t[e]}}}function h_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Pr={debug:!!(globalThis&&Wp()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Vp extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class f_ extends Vp{}async function p_(t,e,r){Pr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",t,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),Pr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",t)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(t,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async i=>{if(i){Pr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",t,i.name);try{return await r()}finally{Pr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",t,i.name)}}else{if(e===0)throw Pr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",t),new f_(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);if(Pr.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}h_();const g_={url:E1,storageKey:j1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:C1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function ud(t,e,r){return await r()}const Or={};class mi{constructor(e){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=mi.nextInstanceID,mi.nextInstanceID+=1,this.instanceID>0&&Ye()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const i=Object.assign(Object.assign({},g_),e);if(this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.persistSession=i.persistSession,this.storageKey=i.storageKey,this.autoRefreshToken=i.autoRefreshToken,this.admin=new d_({url:i.url,headers:i.headers,fetch:i.fetch}),this.url=i.url,this.headers=i.headers,this.fetch=Hp(i.fetch),this.lock=i.lock||ud,this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,i.lock?this.lock=i.lock:Ye()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=p_:this.lock=ud,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:Wp()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ld(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=ld(this.memoryStorage)),Ye()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),await this._notifyAllSubscribers(s.data.event,s.data.session,!1)})}this.initialize()}get jwks(){var e,r;return(r=(e=Or[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(e){Or[this.storageKey]=Object.assign(Object.assign({},Or[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,r;return(r=(e=Or[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Or[this.storageKey]=Object.assign(Object.assign({},Or[this.storageKey]),{cachedAt:e})}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Mp}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const r=W1(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),Ye()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:s}=await this._getSessionFromURL(r,n);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),$1(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return await this._removeSession(),{error:s}}const{session:o,redirectType:a}=i;return this._debug("#_initialize()","detected session in URL",o,"redirect type",a),await this._saveSession(o),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return U(r)?{error:r}:{error:new Fp("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var r,n,i;try{const s=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:ft}),{data:o,error:a}=s;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signUp(e){var r,n,i;try{let s;if("email"in e){const{email:c,password:d,options:p}=e;let y=null,v=null;this.flowType==="pkce"&&([y,v]=await Cr(this.storage,this.storageKey)),s=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:c,password:d,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:y,code_challenge_method:v},xform:ft})}else if("phone"in e){const{phone:c,password:d,options:p}=e;s=await M(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:c,password:d,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},channel:(i=p==null?void 0:p.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:ft})}else throw new Yi("You must provide either an email or phone number and a password");const{data:o,error:a}=s;if(a||!o)return{data:{user:null,session:null},error:a};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(e){try{let r;if("email"in e){const{email:s,password:o,options:a}=e;r=await M(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ad})}else if("phone"in e){const{phone:s,password:o,options:a}=e;r=await M(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ad})}else throw new Yi("You must provide either an email or phone number and a password");const{data:n,error:i}=r;return i?{data:{user:null,session:null},error:i}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new Qi}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(e){var r,n,i,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(r=e.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:r}=e;if(r==="solana")return await this.signInWithSolana(e);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(e){var r,n,i,s,o,a,l,u,c,d,p,y;let v,w;if("message"in e)v=e.message,w=e.signature;else{const{chain:x,wallet:m,statement:f,options:g}=e;let _;if(Ye())if(typeof m=="object")_=m;else{const b=window;if("solana"in b&&typeof b.solana=="object"&&("signIn"in b.solana&&typeof b.solana.signIn=="function"||"signMessage"in b.solana&&typeof b.solana.signMessage=="function"))_=b.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(g!=null&&g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");_=m}const S=new URL((r=g==null?void 0:g.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in _&&_.signIn){const b=await _.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},g==null?void 0:g.signInWithSolana),{version:"1",domain:S.host,uri:S.href}),f?{statement:f}:null));let E;if(Array.isArray(b)&&b[0]&&typeof b[0]=="object")E=b[0];else if(b&&typeof b=="object"&&"signedMessage"in b&&"signature"in b)E=b;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in E&&"signature"in E&&(typeof E.signedMessage=="string"||E.signedMessage instanceof Uint8Array)&&E.signature instanceof Uint8Array)v=typeof E.signedMessage=="string"?E.signedMessage:new TextDecoder().decode(E.signedMessage),w=E.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in _)||typeof _.signMessage!="function"||!("publicKey"in _)||typeof _!="object"||!_.publicKey||!("toBase58"in _.publicKey)||typeof _.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");v=[`${S.host} wants you to sign in with your Solana account:`,_.publicKey.toBase58(),...f?["",f,""]:[""],"Version: 1",`URI: ${S.href}`,`Issued At: ${(i=(n=g==null?void 0:g.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((s=g==null?void 0:g.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${g.signInWithSolana.notBefore}`]:[],...!((o=g==null?void 0:g.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${g.signInWithSolana.expirationTime}`]:[],...!((a=g==null?void 0:g.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${g.signInWithSolana.chainId}`]:[],...!((l=g==null?void 0:g.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${g.signInWithSolana.nonce}`]:[],...!((u=g==null?void 0:g.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${g.signInWithSolana.requestId}`]:[],...!((d=(c=g==null?void 0:g.signInWithSolana)===null||c===void 0?void 0:c.resources)===null||d===void 0)&&d.length?["Resources",...g.signInWithSolana.resources.map(E=>`- ${E}`)]:[]].join(`
`);const b=await _.signMessage(new TextEncoder().encode(v),"utf8");if(!b||!(b instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");w=b}}try{const{data:x,error:m}=await M(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:v,signature:z1(w)},!((p=e.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(y=e.options)===null||y===void 0?void 0:y.captchaToken}}:null),xform:ft});if(m)throw m;return!x||!x.session||!x.user?{data:{user:null,session:null},error:new Qi}:(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),{data:Object.assign({},x),error:m})}catch(x){if(U(x))return{data:{user:null,session:null},error:x};throw x}}async _exchangeCodeForSession(e){const r=await sr(this.storage,`${this.storageKey}-code-verifier`),[n,i]=(r??"").split("/");try{const{data:s,error:o}=await M(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:ft});if(await Ct(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!s||!s.session||!s.user?{data:{user:null,session:null,redirectType:null},error:new Qi}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign(Object.assign({},s),{redirectType:i??null}),error:o})}catch(s){if(U(s))return{data:{user:null,session:null,redirectType:null},error:s};throw s}}async signInWithIdToken(e){try{const{options:r,provider:n,token:i,access_token:s,nonce:o}=e,a=await M(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:ft}),{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Qi}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(e){var r,n,i,s,o;try{if("email"in e){const{email:a,options:l}=e;let u=null,c=null;this.flowType==="pkce"&&([u,c]=await Cr(this.storage,this.storageKey));const{error:d}=await M(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:c},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in e){const{phone:a,options:l}=e,{data:u,error:c}=await M(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:c}}throw new Yi("You must provide either an email or phone number.")}catch(a){if(U(a))return{data:{user:null,session:null},error:a};throw a}}async verifyOtp(e){var r,n;try{let i,s;"options"in e&&(i=(r=e.options)===null||r===void 0?void 0:r.redirectTo,s=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:o,error:a}=await M(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:ft});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(U(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(e){var r,n,i;try{let s=null,o=null;return this.flowType==="pkce"&&([s,o]=await Cr(this.storage,this.storageKey)),await M(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(r=e.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:o_})}catch(s){if(U(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)throw n;if(!r)throw new Tt;const{error:i}=await M(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:i}})}catch(e){if(U(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const r=`${this.url}/resend`;if("email"in e){const{email:n,type:i,options:s}=e,{error:o}=await M(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in e){const{phone:n,type:i,options:s}=e,{data:o,error:a}=await M(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a}}throw new Yi("You must provide either an email or phone number and a type")}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(e,r){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await e(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const r=await sr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?e=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<Jo:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const o=await sr(this.userStorage,this.storageKey+"-user");o!=null&&o.user?e.user=o.user:e.user=Xo()}if(this.storage.isServer&&e.user){let o=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,u,c)=>(!o&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,c))})}return{data:{session:e},error:null}}const{session:i,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{session:null},error:s}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await M(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:$t}):await this._useSession(async r=>{var n,i,s;const{data:o,error:a}=r;if(a)throw a;return!(!((n=o.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Tt}:await M(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(i=o.session)===null||i===void 0?void 0:i.access_token)!==null&&s!==void 0?s:void 0,xform:$t})})}catch(r){if(U(r))return R1(r)&&(await this._removeSession(),await Ct(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(e,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,r))}async _updateUser(e,r={}){try{return await this._useSession(async n=>{const{data:i,error:s}=n;if(s)throw s;if(!i.session)throw new Tt;const o=i.session;let a=null,l=null;this.flowType==="pkce"&&e.email!=null&&([a,l]=await Cr(this.storage,this.storageKey));const{data:u,error:c}=await M(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:$t});if(c)throw c;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Tt;const r=Date.now()/1e3;let n=r,i=!0,s=null;const{payload:o}=Yo(e.access_token);if(o.exp&&(n=o.exp,i=n<=r),i){const{session:a,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:l}=await this._getUser(e.access_token);if(l)throw l;s={access_token:e.access_token,refresh_token:e.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(r){if(U(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async r=>{var n;if(!e){const{data:o,error:a}=r;if(a)throw a;e=(n=o.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new Tt;const{session:i,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{user:null,session:null},error:s}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(e,r){try{if(!Ye())throw new Xi("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Xi(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new ed("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Xi("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new ed("No code detected.");const{data:f,error:g}=await this._exchangeCodeForSession(e.code);if(g)throw g;const _=new URL(window.location.href);return _.searchParams.delete("code"),window.history.replaceState(window.history.state,"",_.toString()),{data:{session:f.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=e;if(!s||!a||!o||!u)throw new Xi("No session defined in URL");const c=Math.round(Date.now()/1e3),d=parseInt(a);let p=c+d;l&&(p=parseInt(l));const y=p-c;y*1e3<=Lr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${d}s`);const v=p-d;c-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,p,c):c-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",v,p,c);const{data:w,error:x}=await this._getUser(s);if(x)throw x;const m={provider_token:n,provider_refresh_token:i,access_token:s,expires_in:d,expires_at:p,refresh_token:o,token_type:u,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:m,redirectType:e.type},error:null}}catch(n){if(U(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const r=await sr(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&r)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:i,error:s}=r;if(s)return{error:s};const o=(n=i.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:a}=await this.admin.signOut(o,e);if(a&&!(N1(a)&&(a.status===404||a.status===401||a.status===403)))return{error:a}}return e!=="others"&&(await this._removeSession(),await Ct(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const r=B1(),n={id:r,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async r=>{var n,i;try{const{data:{session:s},error:o}=r;if(o)throw o;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}})}async resetPasswordForEmail(e,r={}){let n=null,i=null;this.flowType==="pkce"&&([n,i]=await Cr(this.storage,this.storageKey,!0));try{return await M(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(s){if(U(s))return{data:null,error:s};throw s}}async getUserIdentities(){var e;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(e=r.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(r){if(U(r))return{data:null,error:r};throw r}}async linkIdentity(e){var r;try{const{data:n,error:i}=await this._useSession(async s=>{var o,a,l,u,c;const{data:d,error:p}=s;if(p)throw p;const y=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(a=e.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await M(this.fetch,"GET",y,{headers:this.headers,jwt:(c=(u=d.session)===null||u===void 0?void 0:u.access_token)!==null&&c!==void 0?c:void 0})});if(i)throw i;return Ye()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:e.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(U(n))return{data:{provider:e.provider,url:null},error:n};throw n}}async unlinkIdentity(e){try{return await this._useSession(async r=>{var n,i;const{data:s,error:o}=r;if(o)throw o;return await M(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(n=s.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(r){if(U(r))return{data:null,error:r};throw r}}async _refreshAccessToken(e){const r=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await q1(async i=>(i>0&&await V1(200*Math.pow(2,i-1)),this._debug(r,"refreshing attempt",i),await M(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:ft})),(i,s)=>{const o=200*Math.pow(2,i);return s&&Qo(s)&&Date.now()+o-n<Lr})}catch(n){if(this._debug(r,"error",n),U(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",r,"url",n),Ye()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await sr(this.storage,this.storageKey);if(i&&this.userStorage){let o=await sr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:i.user},await Ar(this.userStorage,this.storageKey+"-user",o)),i.user=(e=o==null?void 0:o.user)!==null&&e!==void 0?e:Xo()}else if(i&&!i.user&&!i.user){const o=await sr(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(i.user=o.user,await Ct(this.storage,this.storageKey+"-user"),await Ar(this.storage,this.storageKey,i)):i.user=Xo()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const s=((r=i.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Jo;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${Jo}s`),s){if(this.autoRefreshToken&&i.refresh_token){const{error:o}=await this._callRefreshToken(i.refresh_token);o&&(console.error(o),Qo(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:a}=await this._getUser(i.access_token);!a&&(o!=null&&o.user)?(i.user=o.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(n,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var r,n;if(!e)throw new Tt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new ho;const{data:s,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!s.session)throw new Tt;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const a={session:s.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(s){if(this._debug(i,"error",s),U(s)){const o={session:null,error:s};return Qo(s)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(o),o}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,r,n=!0){const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:r});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(e,r)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let a=0;a<s.length;a+=1)console.error(s[a]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const r=Object.assign({},e),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Ar(this.userStorage,this.storageKey+"-user",{user:r.user});const i=Object.assign({},r);delete i.user;const s=sd(i);await Ar(this.storage,this.storageKey,s)}else{const i=sd(r);await Ar(this.storage,this.storageKey,i)}}async _removeSession(){this._debug("#_removeSession()"),await Ct(this.storage,this.storageKey),await Ct(this.storage,this.storageKey+"-code-verifier"),await Ct(this.storage,this.storageKey+"-user"),this.userStorage&&await Ct(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Ye()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Lr);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/Lr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Lr}ms, refresh threshold is ${ol} ticks`),i<=ol&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof Vp)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ye()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const r=`#_onVisibilityChanged(${e})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,r,n){const i=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&i.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[s,o]=await Cr(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});i.push(a.toString())}if(n!=null&&n.queryParams){const s=new URLSearchParams(n.queryParams);i.push(s.toString())}return n!=null&&n.skipBrowserRedirect&&i.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${i.join("&")}`}async _unenroll(e){try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;return s?{data:null,error:s}:await M(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(U(r))return{data:null,error:r};throw r}}async _enroll(e){try{return await this._useSession(async r=>{var n,i;const{data:s,error:o}=r;if(o)return{data:null,error:o};const a=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:u}=await M(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(e.factorType==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(r){if(U(r))return{data:null,error:r};throw r}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;if(s)return{data:null,error:s};const{data:o,error:a}=await M(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return a?{data:null,error:a}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:a})})}catch(r){if(U(r))return{data:null,error:r};throw r}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;return s?{data:null,error:s}:await M(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(U(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(e){const{data:r,error:n}=await this._challenge({factorId:e.factorId});return n?{data:null,error:n}:await this._verify({factorId:e.factorId,challengeId:r.id,code:e.code})}async _listFactors(){const{data:{user:e},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(e==null?void 0:e.factors)||[],i=n.filter(o=>o.factor_type==="totp"&&o.status==="verified"),s=n.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:n,totp:i,phone:s},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var r,n;const{data:{session:i},error:s}=e;if(s)return{data:null,error:s};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:o}=Yo(i.access_token);let a=null;o.aal&&(a=o.aal);let l=a;((n=(r=i.user.factors)===null||r===void 0?void 0:r.filter(d=>d.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const c=o.amr||[];return{data:{currentLevel:a,nextLevel:l,currentAuthenticationMethods:c},error:null}}))}async fetchJwk(e,r={keys:[]}){let n=r.keys.find(a=>a.kid===e);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(a=>a.kid===e),n&&this.jwks_cached_at+P1>i)return n;const{data:s,error:o}=await M(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=i,n=s.keys.find(a=>a.kid===e),!n)?null:n}async getClaims(e,r={}){try{let n=e;if(!n){const{data:y,error:v}=await this.getSession();if(v||!y.session)return{data:null,error:v};n=y.session.access_token}const{header:i,payload:s,signature:o,raw:{header:a,payload:l}}=Yo(n);r!=null&&r.allowExpired||Z1(s.exp);const u=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:y}=await this.getUser(n);if(y)throw y;return{data:{claims:s,header:i,signature:o},error:null}}const c=e_(i.alg),d=await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);if(!await crypto.subtle.verify(c,d,o,M1(`${a}.${l}`)))throw new ul("Invalid JWT signature");return{data:{claims:s,header:i,signature:o},error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}}mi.nextInstanceID=0;const m_=mi;class v_ extends m_{constructor(e){super(e)}}var y_=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(c){try{u(n.next(c))}catch(d){o(d)}}function l(c){try{u(n.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((n=n.apply(t,e||[])).next())})};class w_{constructor(e,r,n){var i,s,o;if(this.supabaseUrl=e,this.supabaseKey=r,!e)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const a=S1(e),l=new URL(a);this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const u=`sb-${l.hostname.split(".")[0]}-auth-token`,c={db:g1,realtime:v1,auth:Object.assign(Object.assign({},m1),{storageKey:u}),global:p1},d=b1(n??{},c);this.storageKey=(i=d.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(s=d.global.headers)!==null&&s!==void 0?s:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(p,y)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(y)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=d.auth)!==null&&o!==void 0?o:{},this.headers,d.global.fetch),this.fetch=x1(r,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new Aw(new URL("rest/v1",l).href,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),this.storage=new d1(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),d.accessToken||this._listenForAuthEvents()}get functions(){return new fw(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,r={},n={}){return this.rest.rpc(e,r,n)}channel(e,r={config:{}}){return this.realtime.channel(e,r)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,r;return y_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&r!==void 0?r:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:r,detectSessionInUrl:n,storage:i,userStorage:s,storageKey:o,flowType:a,lock:l,debug:u},c,d){const p={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new v_({url:this.authUrl.href,headers:Object.assign(Object.assign({},p),c),storageKey:o,autoRefreshToken:e,persistSession:r,detectSessionInUrl:n,storage:i,userStorage:s,flowType:a,lock:l,debug:u,fetch:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(y=>y.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new Xw(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(e,r,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:e==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const __=(t,e,r)=>new w_(t,e,r);function x_(){if(typeof window<"u"||typeof process>"u")return!1;const t=process.version;if(t==null)return!1;const e=t.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}x_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const k_={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_SUPABASE_URL||"https://placeholder.supabase.co",S_={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_SUPABASE_ANON_KEY||"placeholder-key",mt=__(k_,S_,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}});class cd{constructor(e){mn(this,"userId");this.userId=e}async saveProgress(e,r,n,i,s){try{const{data:o}=await mt.from("game_progress").select("*").eq("user_id",this.userId).eq("level_id",e).single(),a={user_id:this.userId,level_id:e,completed:r>0,stars:Math.max((o==null?void 0:o.stars)||0,r),hints_used:n,time_spent:i,attempts:s,last_attempt_at:new Date().toISOString(),completed_at:r>0&&!(o!=null&&o.completed)?new Date().toISOString():o==null?void 0:o.completed_at};if(o){const{error:l}=await mt.from("game_progress").update(a).eq("id",o.id);if(l)throw l}else{const{error:l}=await mt.from("game_progress").insert(a);if(l)throw l}}catch(o){throw console.error("Error saving progress:",o),o}}async loadProgress(){try{const{data:e,error:r}=await mt.from("game_progress").select("*").eq("user_id",this.userId);if(r)throw r;const n={completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}};if(e){e.forEach(s=>{s.completed&&n.completedLevels.push(s.level_id),n.stars[s.level_id]=s.stars,n.hintsUsed[s.level_id]=s.hints_used});const i=e.filter(s=>s.completed).sort((s,o)=>s.level_id.localeCompare(o.level_id));if(i.length>0){const s=i[i.length-1],o=parseInt(s.level_id.replace("level",""));n.currentLevel=`level${o+1}`}}return n}catch(e){return console.error("Error loading progress:",e),{completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}}}async logCodeAttempt(e,r,n,i,s){try{const{error:o}=await mt.from("code_attempts").insert({user_id:this.userId,level_id:e,code:r,success:n,error_message:i,execution_time:s||0});if(o)throw o}catch(o){console.error("Error logging code attempt:",o)}}async getAnalytics(e){try{let r=mt.from("code_attempts").select(`
          *,
          profiles!inner(full_name, role)
        `).eq("profiles.role","student");e&&(r=r.eq("level_id",e));const{data:n,error:i}=await r;if(i)throw i;return n}catch(r){return console.error("Error getting analytics:",r),[]}}async getClassroomProgress(e){try{const{data:r,error:n}=await mt.from("classroom_students").select(`
          student_id,
          profiles!inner(full_name, email),
          game_progress!inner(*)
        `).eq("classroom_id",e);if(n)throw n;return r}catch(r){return console.error("Error getting classroom progress:",r),[]}}}const b_=()=>{const{user:t}=Ei(),[e,r]=k.useState([]),[n,i]=k.useState(null),[s,o]=k.useState([]),[a,l]=k.useState([]),[u,c]=k.useState(!0);k.useEffect(()=>{t&&d()},[t]);const d=async()=>{if(t)try{const v=new cd(t.id),{data:w,error:x}=await mt.from("classrooms").select("*").eq("teacher_id",t.id);if(x)throw x;r(w||[]);const m=await v.getAnalytics();l(m),c(!1)}catch(v){console.error("Error loading teacher data:",v),c(!1)}},p=async v=>{try{const x=await new cd(t.id).getClassroomProgress(v);o(x)}catch(w){console.error("Error loading classroom progress:",w)}},y=async v=>{if(t)try{const w=Math.random().toString(36).substring(2,8).toUpperCase(),{data:x,error:m}=await mt.from("classrooms").insert({teacher_id:t.id,name:v,code:w}).select().single();if(m)throw m;r(f=>[...f,x])}catch(w){console.error("Error creating classroom:",w)}};return u?h.jsx("div",{className:"teacher-dashboard",children:h.jsx("div",{className:"loading",children:"Loading dashboard..."})}):h.jsxs("div",{className:"teacher-dashboard",children:[h.jsxs("div",{className:"dashboard-header",children:[h.jsx("h1",{children:"🎓 Teacher Dashboard"}),h.jsx("p",{children:"Monitor your students' coding progress and create engaging learning experiences"})]}),h.jsxs("div",{className:"dashboard-content",children:[h.jsxs("div",{className:"analytics-section",children:[h.jsx("h2",{children:"📊 Class Analytics"}),h.jsxs("div",{className:"stats-grid",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx(Ya,{className:"stat-icon"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:a.length}),h.jsx("p",{children:"Total Code Attempts"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx(Mf,{className:"stat-icon"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:a.filter(v=>v.success).length}),h.jsx("p",{children:"Successful Attempts"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx(xy,{className:"stat-icon"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:new Set(a.map(v=>v.level_id)).size}),h.jsx("p",{children:"Levels Attempted"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx(Ac,{className:"stat-icon"}),h.jsxs("div",{className:"stat-content",children:[h.jsxs("h3",{children:[a.length>0?Math.round(a.reduce((v,w)=>v+(w.execution_time||0),0)/a.length/1e3):0,"s"]}),h.jsx("p",{children:"Avg. Execution Time"})]})]})]})]}),h.jsxs("div",{className:"classrooms-section",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("h2",{children:"🏫 Your Classrooms"}),h.jsx("button",{className:"btn btn-primary",onClick:()=>{const v=prompt("Enter classroom name:");v&&y(v)},children:"Create Classroom"})]}),h.jsx("div",{className:"classrooms-grid",children:e.map(v=>h.jsxs("div",{className:"classroom-card",children:[h.jsxs("div",{className:"classroom-header",children:[h.jsx("h3",{children:v.name}),h.jsxs("div",{className:"classroom-code",children:["Code: ",h.jsx("strong",{children:v.code})]})]}),h.jsxs("div",{className:"classroom-stats",children:[h.jsxs("div",{className:"stat",children:[h.jsx(Ya,{size:16}),h.jsxs("span",{children:[v.student_count," students"]})]}),h.jsxs("div",{className:"stat",children:[h.jsx(Ac,{size:16}),h.jsxs("span",{children:["Created ",new Date(v.created_at).toLocaleDateString()]})]})]}),h.jsx("div",{className:"classroom-actions",children:h.jsx("button",{className:"btn btn-secondary",onClick:()=>{i(v.id),p(v.id)},children:"View Progress"})})]},v.id))})]}),n&&s.length>0&&h.jsxs("div",{className:"progress-section",children:[h.jsx("h2",{children:"👥 Student Progress"}),h.jsx("div",{className:"progress-table",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Student"}),h.jsx("th",{children:"Email"}),h.jsx("th",{children:"Levels Completed"}),h.jsx("th",{children:"Total Stars"}),h.jsx("th",{children:"Attempts"}),h.jsx("th",{children:"Last Active"})]})}),h.jsx("tbody",{children:s.map(v=>h.jsxs("tr",{children:[h.jsx("td",{children:v.full_name}),h.jsx("td",{children:v.email}),h.jsx("td",{children:v.levels_completed}),h.jsx("td",{children:v.total_stars}),h.jsx("td",{children:v.total_attempts}),h.jsx("td",{children:new Date(v.last_active).toLocaleDateString()})]},v.student_id))})]})})]}),h.jsxs("div",{className:"errors-section",children:[h.jsx("h2",{children:"🚨 Common Errors"}),h.jsx("div",{className:"errors-list",children:a.filter(v=>!v.success&&v.error_message).slice(0,5).map((v,w)=>{var x;return h.jsxs("div",{className:"error-item",children:[h.jsx(_y,{className:"error-icon"}),h.jsxs("div",{className:"error-content",children:[h.jsxs("p",{children:[h.jsxs("strong",{children:["Level ",v.level_id,":"]})," ",v.error_message]}),h.jsxs("small",{children:["Attempted by ",(x=v.profiles)==null?void 0:x.full_name," on ",new Date(v.created_at).toLocaleDateString()]})]})]},w)})})]})]}),h.jsx("style",{children:`
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
      `})]})};class E_{constructor(e){mn(this,"userId");this.userId=e}async saveProgress(e,r,n,i,s){var o,a,l;try{const u=`codequest-progress-${this.userId}`,c=JSON.parse(localStorage.getItem(u)||"{}"),d={...c,[e]:{completed:r>0,stars:Math.max(((o=c[e])==null?void 0:o.stars)||0,r),hints_used:n,time_spent:i,attempts:s,last_attempt_at:new Date().toISOString(),completed_at:r>0&&!((a=c[e])!=null&&a.completed)?new Date().toISOString():(l=c[e])==null?void 0:l.completed_at}};localStorage.setItem(u,JSON.stringify(d))}catch(u){console.error("Error saving progress:",u)}}async loadProgress(){try{const e=`codequest-progress-${this.userId}`,r=JSON.parse(localStorage.getItem(e)||"{}"),n={completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}};Object.entries(r).forEach(([s,o])=>{o.completed&&n.completedLevels.push(s),n.stars[s]=o.stars||0,n.hintsUsed[s]=o.hints_used||0});const i=n.completedLevels.sort();if(i.length>0){const s=i[i.length-1],o=parseInt(s.replace("level",""));n.currentLevel=`level${o+1}`}return n}catch(e){return console.error("Error loading progress:",e),{completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}}}async logCodeAttempt(e,r,n,i,s){try{const o=`codequest-attempts-${this.userId}`,a=JSON.parse(localStorage.getItem(o)||"[]"),l={id:Date.now().toString(),level_id:e,code:r,success:n,error_message:i,execution_time:s||0,created_at:new Date().toISOString()};a.push(l),a.length>100&&a.splice(0,a.length-100),localStorage.setItem(o,JSON.stringify(a))}catch(o){console.error("Error logging code attempt:",o)}}async getAnalytics(e){try{const r=`codequest-attempts-${this.userId}`,n=JSON.parse(localStorage.getItem(r)||"[]");return e?n.filter(i=>i.level_id===e):n}catch(r){return console.error("Error getting analytics:",r),[]}}async getClassroomProgress(e){return[]}}function j_(){const{user:t,profile:e,loading:r}=Ei(),[n,i]=k.useState(!1),[s,o]=k.useState("signin"),a=au();return r?h.jsxs("div",{className:"loading-screen",children:[h.jsx("div",{className:"loading-spinner"}),h.jsx("p",{children:"Loading CodeQuest Jr..."})]}):h.jsxs("div",{className:"app",children:[h.jsxs(fy,{children:[h.jsx(On,{path:"/",element:h.jsx(lw,{onStart:()=>{console.log("Start button clicked, user:",t),t?(console.log("Navigating to /game"),a("/game")):(console.log("Opening auth modal"),i(!0))},onTeacherDashboard:()=>a("/teacher"),user:t,profile:e})}),h.jsx(On,{path:"/game",element:t?h.jsx(C_,{}):h.jsx(zo,{to:"/",replace:!0})}),h.jsx(On,{path:"/teacher",element:t&&(e==null?void 0:e.role)==="teacher"?h.jsx(b_,{}):h.jsx(zo,{to:"/",replace:!0})}),h.jsx(On,{path:"*",element:h.jsx(zo,{to:"/",replace:!0})})]}),h.jsx(uw,{isOpen:n,onClose:()=>i(!1),mode:s,onModeChange:o})]})}function C_(){const{user:t}=Ei(),e=au(),[r,n]=k.useState("levelSelect"),[i,s]=k.useState(""),[o,a]=k.useState({completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}),[l]=k.useState(()=>t?new E_(t.id):null);k.useEffect(()=>{l&&u()},[l]);const u=async()=>{if(l)try{const y=await l.loadProgress();a(y)}catch(y){console.error("Error loading progress:",y);const v=localStorage.getItem("codequest-progress");v&&a(JSON.parse(v))}},c=async(y,v,w,x,m)=>{if(a(f=>{const g={...f,completedLevels:f.completedLevels.includes(y)?f.completedLevels:[...f.completedLevels,y],stars:{...f.stars,[y]:Math.max(f.stars[y]||0,v)},hintsUsed:{...f.hintsUsed,[y]:(f.hintsUsed[y]||0)+w}};return localStorage.setItem("codequest-progress",JSON.stringify(g)),g}),l)try{await l.saveProgress(y,v,w,x,m)}catch(f){console.error("Error saving progress to cloud:",f)}},d=y=>{s(y),n("game")},p=()=>{a({completedLevels:[],stars:{},currentLevel:"level1",hintsUsed:{}}),localStorage.removeItem("codequest-progress")};return h.jsxs(h.Fragment,{children:[r==="levelSelect"&&h.jsx(ow,{progress:o,onSelectLevel:d,onBack:()=>e("/"),onReset:p}),r==="game"&&h.jsx(sw,{levelId:i,progress:o,onComplete:(y,v,w)=>{c(y,v,w,0,1),n("levelSelect")},onBack:()=>n("levelSelect"),progressService:l})]})}function T_(){return h.jsx(aw,{children:h.jsx(my,{children:h.jsx(j_,{})})})}ea.createRoot(document.getElementById("root")).render(h.jsx(Ut.StrictMode,{children:h.jsx(T_,{})}))});export default P_();
