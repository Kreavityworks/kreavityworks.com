(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rd={exports:{}},Lo={};var Ug;function Gb(){if(Ug)return Lo;Ug=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Lg;function Hb(){return Lg||(Lg=1,rd.exports=Gb()),rd.exports}var p=Hb(),od={exports:{}},rt={};var Og;function Vb(){if(Og)return rt;Og=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(O,ne,ge){this.props=O,this.context=ne,this.refs=S,this.updater=ge||A}_.prototype.isReactComponent={},_.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=_.prototype;function D(O,ne,ge){this.props=O,this.context=ne,this.refs=S,this.updater=ge||A}var P=D.prototype=new U;P.constructor=D,T(P,_.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(O,ne,ge){var Te=ge.ref;return{$$typeof:r,type:O,key:ne,ref:Te!==void 0?Te:null,props:ge}}function N(O,ne){return w(O.type,ne,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ie(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ne[ge]})}var ae=/\/+/g;function he(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?ie(""+O.key):ne.toString(36)}function oe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,ne,ge,Te,Fe){var W=typeof O;(W==="undefined"||W==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(W){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case r:case e:ce=!0;break;case v:return ce=O._init,B(ce(O._payload),ne,ge,Te,Fe)}}if(ce)return Fe=Fe(O),ce=Te===""?"."+he(O,0):Te,I(Fe)?(ge="",ce!=null&&(ge=ce.replace(ae,"$&/")+"/"),B(Fe,ne,ge,"",function(Ge){return Ge})):Fe!=null&&(H(Fe)&&(Fe=N(Fe,ge+(Fe.key==null||O&&O.key===Fe.key?"":(""+Fe.key).replace(ae,"$&/")+"/")+ce)),ne.push(Fe)),1;ce=0;var Ce=Te===""?".":Te+":";if(I(O))for(var je=0;je<O.length;je++)Te=O[je],W=Ce+he(Te,je),ce+=B(Te,ne,ge,W,Fe);else if(je=M(O),typeof je=="function")for(O=je.call(O),je=0;!(Te=O.next()).done;)Te=Te.value,W=Ce+he(Te,je++),ce+=B(Te,ne,ge,W,Fe);else if(W==="object"){if(typeof O.then=="function")return B(oe(O),ne,ge,Te,Fe);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ce}function k(O,ne,ge){if(O==null)return O;var Te=[],Fe=0;return B(O,Te,"","",function(W){return ne.call(ge,W,Fe++)}),Te}function J(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ve={map:k,forEach:function(O,ne,ge){k(O,function(){ne.apply(this,arguments)},ge)},count:function(O){var ne=0;return k(O,function(){ne++}),ne},toArray:function(O){return k(O,function(ne){return ne})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=x,rt.Children=ve,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=s,rt.Suspense=g,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ne,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Te=T({},O.props),Fe=O.key;if(ne!=null)for(W in ne.key!==void 0&&(Fe=""+ne.key),ne)!Z.call(ne,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&ne.ref===void 0||(Te[W]=ne[W]);var W=arguments.length-2;if(W===1)Te.children=ge;else if(1<W){for(var ce=Array(W),Ce=0;Ce<W;Ce++)ce[Ce]=arguments[Ce+2];Te.children=ce}return w(O.type,Fe,Te)},rt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ne,ge){var Te,Fe={},W=null;if(ne!=null)for(Te in ne.key!==void 0&&(W=""+ne.key),ne)Z.call(ne,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Fe[Te]=ne[Te]);var ce=arguments.length-2;if(ce===1)Fe.children=ge;else if(1<ce){for(var Ce=Array(ce),je=0;je<ce;je++)Ce[je]=arguments[je+2];Fe.children=Ce}if(O&&O.defaultProps)for(Te in ce=O.defaultProps,ce)Fe[Te]===void 0&&(Fe[Te]=ce[Te]);return w(O,W,Fe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=H,rt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:J}},rt.memo=function(O,ne){return{$$typeof:m,type:O,compare:ne===void 0?null:ne}},rt.startTransition=function(O){var ne=z.T,ge={};z.T=ge;try{var Te=O(),Fe=z.S;Fe!==null&&Fe(ge,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(F,_e)}catch(W){_e(W)}finally{ne!==null&&ge.types!==null&&(ne.types=ge.types),z.T=ne}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(O){return z.H.use(O)},rt.useActionState=function(O,ne,ge){return z.H.useActionState(O,ne,ge)},rt.useCallback=function(O,ne){return z.H.useCallback(O,ne)},rt.useContext=function(O){return z.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ne){return z.H.useDeferredValue(O,ne)},rt.useEffect=function(O,ne){return z.H.useEffect(O,ne)},rt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(O,ne,ge){return z.H.useImperativeHandle(O,ne,ge)},rt.useInsertionEffect=function(O,ne){return z.H.useInsertionEffect(O,ne)},rt.useLayoutEffect=function(O,ne){return z.H.useLayoutEffect(O,ne)},rt.useMemo=function(O,ne){return z.H.useMemo(O,ne)},rt.useOptimistic=function(O,ne){return z.H.useOptimistic(O,ne)},rt.useReducer=function(O,ne,ge){return z.H.useReducer(O,ne,ge)},rt.useRef=function(O){return z.H.useRef(O)},rt.useState=function(O){return z.H.useState(O)},rt.useSyncExternalStore=function(O,ne,ge){return z.H.useSyncExternalStore(O,ne,ge)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var Pg;function Fh(){return Pg||(Pg=1,od.exports=Vb()),od.exports}var ye=Fh(),ld={exports:{}},Oo={},cd={exports:{}},ud={};var zg;function Xb(){return zg||(zg=1,(function(r){function e(B,k){var J=B.length;B.push(k);e:for(;0<J;){var _e=J-1>>>1,ve=B[_e];if(0<l(ve,k))B[_e]=k,B[J]=ve,J=_e;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var k=B[0],J=B.pop();if(J!==k){B[0]=J;e:for(var _e=0,ve=B.length,O=ve>>>1;_e<O;){var ne=2*(_e+1)-1,ge=B[ne],Te=ne+1,Fe=B[Te];if(0>l(ge,J))Te<ve&&0>l(Fe,ge)?(B[_e]=Fe,B[Te]=J,_e=Te):(B[_e]=ge,B[ne]=J,_e=ne);else if(Te<ve&&0>l(Fe,J))B[_e]=Fe,B[Te]=J,_e=Te;else break e}}return k}function l(B,k){var J=B.sortIndex-k.sortIndex;return J!==0?J:B.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var g=[],m=[],v=1,x=null,y=3,M=!1,A=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var k=i(m);k!==null;){if(k.callback===null)s(m);else if(k.startTime<=B)s(m),k.sortIndex=k.expirationTime,e(g,k);else break;k=i(m)}}function I(B){if(T=!1,P(B),!A)if(i(g)!==null)A=!0,F||(F=!0,ie());else{var k=i(m);k!==null&&oe(I,k.startTime-B)}}var F=!1,z=-1,Z=5,w=-1;function N(){return S?!0:!(r.unstable_now()-w<Z)}function H(){if(S=!1,F){var B=r.unstable_now();w=B;var k=!0;try{e:{A=!1,T&&(T=!1,U(z),z=-1),M=!0;var J=y;try{t:{for(P(B),x=i(g);x!==null&&!(x.expirationTime>B&&N());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,y=x.priorityLevel;var ve=_e(x.expirationTime<=B);if(B=r.unstable_now(),typeof ve=="function"){x.callback=ve,P(B),k=!0;break t}x===i(g)&&s(g),P(B)}else s(g);x=i(g)}if(x!==null)k=!0;else{var O=i(m);O!==null&&oe(I,O.startTime-B),k=!1}}break e}finally{x=null,y=J,M=!1}k=void 0}}finally{k?ie():F=!1}}}var ie;if(typeof D=="function")ie=function(){D(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=H,ie=function(){he.postMessage(null)}}else ie=function(){_(H,0)};function oe(B,k){z=_(function(){B(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var k=3;break;default:k=y}var J=y;y=k;try{return B()}finally{y=J}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,k){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return k()}finally{y=J}},r.unstable_scheduleCallback=function(B,k,J){var _e=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=J+ve,B={id:v++,callback:k,priorityLevel:B,startTime:J,expirationTime:ve,sortIndex:-1},J>_e?(B.sortIndex=J,e(m,B),i(g)===null&&B===i(m)&&(T?(U(z),z=-1):T=!0,oe(I,J-_e))):(B.sortIndex=ve,e(g,B),A||M||(A=!0,F||(F=!0,ie()))),B},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(B){var k=y;return function(){var J=y;y=k;try{return B.apply(this,arguments)}finally{y=J}}}})(ud)),ud}var Ig;function Wb(){return Ig||(Ig=1,cd.exports=Xb()),cd.exports}var fd={exports:{}},Dn={};var Bg;function qb(){if(Bg)return Dn;Bg=1;var r=Fh();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,m,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:g,containerInfo:m,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(g,m,null,v)},Dn.flushSync=function(g){var m=d.T,v=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=m,s.p=v,s.d.f()}},Dn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Dn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Dn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,x=h(v,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):v==="script"&&s.d.X(g,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Dn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,x=h(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=h(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Dn.requestFormReset=function(g){s.d.r(g)},Dn.unstable_batchedUpdates=function(g,m){return g(m)},Dn.useFormState=function(g,m,v){return d.H.useFormState(g,m,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var Fg;function Yb(){if(Fg)return fd.exports;Fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fd.exports=qb(),fd.exports}var kg;function Zb(){if(kg)return Oo;kg=1;var r=Wb(),e=Fh(),i=Yb();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),t;if(f===o)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var b=!1,R=u.child;R;){if(R===a){b=!0,a=u,o=f;break}if(R===o){b=!0,o=u,a=f;break}R=R.sibling}if(!b){for(R=f.child;R;){if(R===a){b=!0,a=f,o=u;break}if(R===o){b=!0,o=f,a=u;break}R=R.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var oe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function O(t){return{current:t}}function ne(t){0>ve||(t.current=_e[ve],_e[ve]=null,ve--)}function ge(t,n){ve++,_e[ve]=t.current,t.current=n}var Te=O(null),Fe=O(null),W=O(null),ce=O(null);function Ce(t,n){switch(ge(W,n),ge(Fe,t),ge(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tg(n),t=ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Te),ge(Te,t)}function je(){ne(Te),ne(Fe),ne(W)}function Ge(t){t.memoizedState!==null&&ge(ce,t);var n=Te.current,a=ng(n,t.type);n!==a&&(ge(Fe,t),ge(Te,a))}function ht(t){Fe.current===t&&(ne(Te),ne(Fe)),ce.current===t&&(ne(ce),Co._currentValue=J)}var $t,xt;function pt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+xt}var Nt=!1;function ot(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var re=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){re=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){re=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&re&&typeof ue.stack=="string")return[ue.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],R=f[1];if(b&&R){var j=b.split(`
`),te=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===te.length)for(o=j.length-1,u=te.length-1;1<=o&&0<=u&&j[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==te[u]){var de=`
`+j[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pt(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return pt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Mt=r.unstable_scheduleCallback,Ot=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,pe=r.unstable_ImmediatePriority,Se=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,Xe=r.log,nt=r.unstable_setDisableYieldValue,Ee=null,Ae=null;function Be(t){if(typeof Xe=="function"&&nt(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var ze=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Le=256,we=262144,Ie=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Me(o):(b&=R,b!==0?u=Me(b):a||(a=R&~t,a!==0&&(u=Me(a))))):(R=o&~f,R!==0?u=Me(R):b!==0?u=Me(b):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,o,u,f){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,te=t.hiddenUpdates;for(a=b&~a;0<a;){var de=31-ze(a),xe=1<<de;R[de]=0,j[de]=-1;var re=te[de];if(re!==null)for(te[de]=null,de=0;de<re.length;de++){var ue=re[de];ue!==null&&(ue.lane&=-536870913)}a&=~xe}o!==0&&tl(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(b&~n))}function tl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function kr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ls(t,n){var a=n&-n;return a=(a&42)!==0?1:jr(a),(a&(t.suspendedLanes|n))!==0?0:a}function jr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gr(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Tg(t.type))}function Di(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var si=Math.random().toString(36).slice(2),on="__reactFiber$"+si,_n="__reactProps$"+si,_i="__reactContainer$"+si,Ps="__reactEvents$"+si,zs="__reactListeners$"+si,nl="__reactHandles$"+si,Hr="__reactResources$"+si,ns="__reactMarker$"+si;function Vr(t){delete t[on],delete t[_n],delete t[Ps],delete t[zs],delete t[nl]}function ya(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=cg(t);t!==null;){if(a=t[on])return a;t=cg(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[on]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ma(t){var n=t[Hr];return n||(n=t[Hr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[ns]=!0}var Y=new Set,le={};function se(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Oe={};function He(t){return Zt.call(Oe,t)?!0:Zt.call(ke,t)?!1:Ue.test(t)?Oe[t]=!0:(ke[t]=!0,!1)}function We(t,n,a){if(He(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,f.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Dt(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function st(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(t,n,a,o,u,f,b,R){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?yn(t,b,et(n)):a!=null?yn(t,b,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function Wi(t,n,a,o,u,f,b,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Wt(t)}function yn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(oe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Is(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&En(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&En(t,f,n[f])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return Fv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var nu=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Fs=null;function ep(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(bn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var au=!1;function tp(t,n,a){if(au)return t(n,a);au=!0;try{var o=t(n);return o}finally{if(au=!1,(Bs!==null||Fs!==null)&&(Vl(),Bs&&(n=Bs,t=Fs,Fs=Bs=null,ep(n),t)))for(n=0;n<t.length;n++)ep(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Yi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{su=!1}var Ea=null,ru=null,al=null;function np(){if(al)return al;var t,n=ru,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[f-o];o++);return al=u.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function ip(){return!1}function kn(t){function n(a,o,u,f,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:ip,this.isPropagationStopped=ip,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=kn(as),qr=x({},as,{view:0,detail:0}),kv=kn(qr),ou,lu,Yr,ll=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(ou=t.screenX-Yr.screenX,lu=t.screenY-Yr.screenY):lu=ou=0,Yr=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),ap=kn(ll),jv=x({},ll,{dataTransfer:0}),Gv=kn(jv),Hv=x({},qr,{relatedTarget:0}),cu=kn(Hv),Vv=x({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=kn(Vv),Wv=x({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=kn(Wv),Yv=x({},as,{data:0}),sp=kn(Yv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qv[t])?!!n[t]:!1}function uu(){return Jv}var $v=x({},qr,{key:function(t){if(t.key){var n=Zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e_=kn($v),t_=x({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=kn(t_),n_=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),i_=kn(n_),a_=x({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),s_=kn(a_),r_=x({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o_=kn(r_),l_=x({},as,{newState:0,oldState:0}),c_=kn(l_),u_=[9,13,27,32],fu=Yi&&"CompositionEvent"in window,Zr=null;Yi&&"documentMode"in document&&(Zr=document.documentMode);var f_=Yi&&"TextEvent"in window&&!Zr,op=Yi&&(!fu||Zr&&8<Zr&&11>=Zr),lp=" ",cp=!1;function up(t,n){switch(t){case"keyup":return u_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function d_(t,n){switch(t){case"compositionend":return fp(n);case"keypress":return n.which!==32?null:(cp=!0,lp);case"textInput":return t=n.data,t===lp&&cp?null:t;default:return null}}function h_(t,n){if(ks)return t==="compositionend"||!fu&&up(t,n)?(t=np(),al=ru=Ea=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return op&&n.locale!=="ko"?null:n.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!p_[t.type]:n==="textarea"}function hp(t,n,a,o){Bs?Fs?Fs.push(o):Fs=[o]:Bs=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Kr=null,Qr=null;function m_(t){Z0(t,0)}function cl(t){var n=is(t);if(Pt(n))return t}function pp(t,n){if(t==="change")return n}var mp=!1;if(Yi){var du;if(Yi){var hu="oninput"in document;if(!hu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),hu=typeof gp.oninput=="function"}du=hu}else du=!1;mp=du&&(!document.documentMode||9<document.documentMode)}function xp(){Kr&&(Kr.detachEvent("onpropertychange",vp),Qr=Kr=null)}function vp(t){if(t.propertyName==="value"&&cl(Qr)){var n=[];hp(n,Qr,t,iu(t)),tp(m_,n)}}function g_(t,n,a){t==="focusin"?(xp(),Kr=n,Qr=a,Kr.attachEvent("onpropertychange",vp)):t==="focusout"&&xp()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Qr)}function v_(t,n){if(t==="click")return cl(n)}function __(t,n){if(t==="input"||t==="change")return cl(n)}function b_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:b_;function Jr(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,n){var a=_p(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var y_=Yi&&"documentMode"in document&&11>=document.documentMode,js=null,mu=null,$r=null,gu=!1;function Mp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||js==null||js!==Qe(o)||(o=js,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Jr($r,o)||($r=o,o=Ql(mu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=js)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},xu={},Ep={};Yi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function rs(t){if(xu[t])return xu[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return xu[t]=n[a];return t}var Tp=rs("animationend"),Ap=rs("animationiteration"),wp=rs("animationstart"),S_=rs("transitionrun"),M_=rs("transitionstart"),E_=rs("transitioncancel"),Rp=rs("transitionend"),Cp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function yi(t,n){Cp.set(t,n),se(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Hs=0,_u=0;function fl(){for(var t=Hs,n=_u=Hs=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}f!==0&&Np(a,u,f)}}function dl(t,n,a,o){oi[Hs++]=t,oi[Hs++]=n,oi[Hs++]=a,oi[Hs++]=o,_u|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bu(t,n,a,o){return dl(t,n,a,o),hl(t)}function os(t,n){return dl(t,null,null,n),hl(t)}function Np(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<So)throw So=0,Nf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vs={};function T_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new T_(t,n,a,o)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Dp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,u,f){var b=0;if(o=t,typeof t=="function")yu(t)&&(b=1);else if(typeof t=="string")b=Nb(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Kn(31,a,n,u),t.elementType=w,t.lanes=f,t;case T:return ls(a.children,u,f,n);case S:b=8,u|=24;break;case _:return t=Kn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case I:return t=Kn(13,a,n,u),t.elementType=I,t.lanes=f,t;case F:return t=Kn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:b=10;break e;case U:b=9;break e;case P:b=11;break e;case z:b=14;break e;case Z:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Kn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ls(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Su(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Up(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Mu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Lp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Xs=[],Ws=0,ml=null,eo=0,ci=[],ui=0,Ta=null,Ui=1,Li="";function Ki(t,n){Xs[Ws++]=eo,Xs[Ws++]=ml,ml=t,eo=n}function Op(t,n,a){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=Ta,Ta=t;var o=Ui;t=Li;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var b=u-u%5;f=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Ui=1<<32-ze(n)+u|a<<u|o,Li=f+t}else Ui=1<<f|a<<u|o,Li=t}function Eu(t){t.return!==null&&(Ki(t,1),Op(t,1,0))}function Tu(t){for(;t===ml;)ml=Xs[--Ws],Xs[Ws]=null,eo=Xs[--Ws],Xs[Ws]=null;for(;t===Ta;)Ta=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function Pp(t,n){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=Ta,Ui=n.id,Li=n.overflow,Ta=t}var Tn=null,qt=null,St=!1,Aa=null,fi=!1,Au=Error(s(519));function wa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(li(n,t)),Au}function zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[_n]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)gt(Eo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Wi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Sn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||wa(t,!0)}function Ip(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function qs(t){if(t!==Tn)return!1;if(!St)return Ip(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xf(t.type,t.memoizedProps)),a=!a),a&&qt&&wa(t),Ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=lg(t)}else n===27?(n=qt,ja(t.type)?(t=Kf,Kf=null,qt=t):qt=n):qt=Tn?hi(t.stateNode.nextSibling):null;return!0}function cs(){qt=Tn=null,St=!1}function wu(){var t=Aa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Aa=null),t}function to(t){Aa===null?Aa=[t]:Aa.push(t)}var Ru=O(null),us=null,Qi=null;function Ra(t,n,a){ge(Ru,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Ru.current,ne(Ru)}function Cu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Nu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Cu(f.return,a,t),o||(b=null);break e}f=R.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),Cu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function Ys(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var R=u.type;Zn(u.pendingProps.value,b.value)||(t!==null?t.push(R):t=[R])}}else if(u===ce.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Nu(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Bp(us,t)}function xl(t,n){return us===null&&fs(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var A_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},w_=r.unstable_scheduleCallback,R_=r.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new A_,data:new Map,refCount:0}}function no(t){t.refCount--,t.refCount===0&&w_(R_,function(){t.controller.abort()})}var io=null,Uu=0,Zs=0,Ks=null;function C_(t,n){if(io===null){var a=io=[];Uu=0,Zs=zf(),Ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(Fp,Fp),n}function Fp(){if(--Uu===0&&io!==null){Ks!==null&&(Ks.status="fulfilled");var t=io;io=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function N_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=B.S;B.S=function(t,n){M0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&C_(t,n),kp!==null&&kp(t,n)};var ds=O(null);function Lu(){var t=ds.current;return t!==null?t:Xt.pooledCache}function vl(t,n){n===null?ge(ds,ds.current):ge(ds,n.pool)}function jp(){var t=Lu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qs=Error(s(460)),Ou=Error(s(474)),_l=Error(s(542)),bl={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t}throw ps=n,Qs}}function hs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Vp(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function Xp(t){if(t===Qs||t===_l)throw Error(s(483))}var Js=null,ao=0;function yl(t){var n=ao;return ao+=1,Js===null&&(Js=[]),Hp(Js,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wp(t){function n(K,V){if(t){var ee=K.deletions;ee===null?(K.deletions=[V],K.flags|=16):ee.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Zi(K,V),K.index=0,K.sibling=null,K}function f(K,V,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<V?(K.flags|=67108866,V):ee):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function b(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ee,me){return V===null||V.tag!==6?(V=Su(ee,K.mode,me),V.return=K,V):(V=u(V,ee),V.return=K,V)}function j(K,V,ee,me){var Je=ee.type;return Je===T?de(K,V,ee.props.children,me,ee.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&hs(Je)===V.type)?(V=u(V,ee.props),so(V,ee),V.return=K,V):(V=pl(ee.type,ee.key,ee.props,null,K.mode,me),so(V,ee),V.return=K,V)}function te(K,V,ee,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Mu(ee,K.mode,me),V.return=K,V):(V=u(V,ee.children||[]),V.return=K,V)}function de(K,V,ee,me,Je){return V===null||V.tag!==7?(V=ls(ee,K.mode,me,Je),V.return=K,V):(V=u(V,ee),V.return=K,V)}function xe(K,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Su(""+V,K.mode,ee),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ee=pl(V.type,V.key,V.props,null,K.mode,ee),so(ee,V),ee.return=K,ee;case A:return V=Mu(V,K.mode,ee),V.return=K,V;case Z:return V=hs(V),xe(K,V,ee)}if(oe(V)||ie(V))return V=ls(V,K.mode,ee,null),V.return=K,V;if(typeof V.then=="function")return xe(K,yl(V),ee);if(V.$$typeof===D)return xe(K,xl(K,V),ee);Sl(K,V)}return null}function re(K,V,ee,me){var Je=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Je!==null?null:R(K,V,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Je?j(K,V,ee,me):null;case A:return ee.key===Je?te(K,V,ee,me):null;case Z:return ee=hs(ee),re(K,V,ee,me)}if(oe(ee)||ie(ee))return Je!==null?null:de(K,V,ee,me,null);if(typeof ee.then=="function")return re(K,V,yl(ee),me);if(ee.$$typeof===D)return re(K,V,xl(K,ee),me);Sl(K,ee)}return null}function ue(K,V,ee,me,Je){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return K=K.get(ee)||null,R(V,K,""+me,Je);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return K=K.get(me.key===null?ee:me.key)||null,j(V,K,me,Je);case A:return K=K.get(me.key===null?ee:me.key)||null,te(V,K,me,Je);case Z:return me=hs(me),ue(K,V,ee,me,Je)}if(oe(me)||ie(me))return K=K.get(ee)||null,de(V,K,me,Je,null);if(typeof me.then=="function")return ue(K,V,ee,yl(me),Je);if(me.$$typeof===D)return ue(K,V,ee,xl(V,me),Je);Sl(V,me)}return null}function Ve(K,V,ee,me){for(var Je=null,At=null,Ze=V,ut=V=0,_t=null;Ze!==null&&ut<ee.length;ut++){Ze.index>ut?(_t=Ze,Ze=null):_t=Ze.sibling;var wt=re(K,Ze,ee[ut],me);if(wt===null){Ze===null&&(Ze=_t);break}t&&Ze&&wt.alternate===null&&n(K,Ze),V=f(wt,V,ut),At===null?Je=wt:At.sibling=wt,At=wt,Ze=_t}if(ut===ee.length)return a(K,Ze),St&&Ki(K,ut),Je;if(Ze===null){for(;ut<ee.length;ut++)Ze=xe(K,ee[ut],me),Ze!==null&&(V=f(Ze,V,ut),At===null?Je=Ze:At.sibling=Ze,At=Ze);return St&&Ki(K,ut),Je}for(Ze=o(Ze);ut<ee.length;ut++)_t=ue(Ze,K,ut,ee[ut],me),_t!==null&&(t&&_t.alternate!==null&&Ze.delete(_t.key===null?ut:_t.key),V=f(_t,V,ut),At===null?Je=_t:At.sibling=_t,At=_t);return t&&Ze.forEach(function(Wa){return n(K,Wa)}),St&&Ki(K,ut),Je}function tt(K,V,ee,me){if(ee==null)throw Error(s(151));for(var Je=null,At=null,Ze=V,ut=V=0,_t=null,wt=ee.next();Ze!==null&&!wt.done;ut++,wt=ee.next()){Ze.index>ut?(_t=Ze,Ze=null):_t=Ze.sibling;var Wa=re(K,Ze,wt.value,me);if(Wa===null){Ze===null&&(Ze=_t);break}t&&Ze&&Wa.alternate===null&&n(K,Ze),V=f(Wa,V,ut),At===null?Je=Wa:At.sibling=Wa,At=Wa,Ze=_t}if(wt.done)return a(K,Ze),St&&Ki(K,ut),Je;if(Ze===null){for(;!wt.done;ut++,wt=ee.next())wt=xe(K,wt.value,me),wt!==null&&(V=f(wt,V,ut),At===null?Je=wt:At.sibling=wt,At=wt);return St&&Ki(K,ut),Je}for(Ze=o(Ze);!wt.done;ut++,wt=ee.next())wt=ue(Ze,K,ut,wt.value,me),wt!==null&&(t&&wt.alternate!==null&&Ze.delete(wt.key===null?ut:wt.key),V=f(wt,V,ut),At===null?Je=wt:At.sibling=wt,At=wt);return t&&Ze.forEach(function(jb){return n(K,jb)}),St&&Ki(K,ut),Je}function Vt(K,V,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Je=ee.key;V!==null;){if(V.key===Je){if(Je=ee.type,Je===T){if(V.tag===7){a(K,V.sibling),me=u(V,ee.props.children),me.return=K,K=me;break e}}else if(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&hs(Je)===V.type){a(K,V.sibling),me=u(V,ee.props),so(me,ee),me.return=K,K=me;break e}a(K,V);break}else n(K,V);V=V.sibling}ee.type===T?(me=ls(ee.props.children,K.mode,me,ee.key),me.return=K,K=me):(me=pl(ee.type,ee.key,ee.props,null,K.mode,me),so(me,ee),me.return=K,K=me)}return b(K);case A:e:{for(Je=ee.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(K,V.sibling),me=u(V,ee.children||[]),me.return=K,K=me;break e}else{a(K,V);break}else n(K,V);V=V.sibling}me=Mu(ee,K.mode,me),me.return=K,K=me}return b(K);case Z:return ee=hs(ee),Vt(K,V,ee,me)}if(oe(ee))return Ve(K,V,ee,me);if(ie(ee)){if(Je=ie(ee),typeof Je!="function")throw Error(s(150));return ee=Je.call(ee),tt(K,V,ee,me)}if(typeof ee.then=="function")return Vt(K,V,yl(ee),me);if(ee.$$typeof===D)return Vt(K,V,xl(K,ee),me);Sl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(K,V.sibling),me=u(V,ee),me.return=K,K=me):(a(K,V),me=Su(ee,K.mode,me),me.return=K,K=me),b(K)):a(K,V)}return function(K,V,ee,me){try{ao=0;var Je=Vt(K,V,ee,me);return Js=null,Je}catch(Ze){if(Ze===Qs||Ze===_l)throw Ze;var At=Kn(29,Ze,null,K.mode);return At.lanes=me,At.return=K,At}}}var ms=Wp(!0),qp=Wp(!1),Ca=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(t),Np(t,null,a),n}return dl(t,o,n,a),hl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kr(t,a)}}function Iu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bu=!1;function oo(){if(Bu){var t=Ks;if(t!==null)throw t}}function lo(t,n,a,o){Bu=!1;var u=t.updateQueue;Ca=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,te=j.next;j.next=null,b===null?f=te:b.next=te,b=j;var de=t.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==b&&(R===null?de.firstBaseUpdate=te:R.next=te,de.lastBaseUpdate=j))}if(f!==null){var xe=u.baseState;b=0,de=te=j=null,R=f;do{var re=R.lane&-536870913,ue=re!==R.lane;if(ue?(vt&re)===re:(o&re)===re){re!==0&&re===Zs&&(Bu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ve=t,tt=R;re=n;var Vt=a;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){xe=Ve.call(Vt,xe,re);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,re=typeof Ve=="function"?Ve.call(Vt,xe,re):Ve,re==null)break e;xe=x({},xe,re);break e;case 2:Ca=!0}}re=R.callback,re!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[re]:ue.push(re))}else ue={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(te=de=ue,j=xe):de=de.next=ue,b|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);de===null&&(j=xe),u.baseState=j,u.firstBaseUpdate=te,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),za|=b,t.lanes=b,t.memoizedState=xe}}function Yp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yp(a[t],n)}var $s=O(null),Ml=O(0);function Kp(t,n){t=oa,ge(Ml,t),ge($s,n),oa=t|n.baseLanes}function Fu(){ge(Ml,oa),ge($s,$s.current)}function ku(){oa=Ml.current,ne($s),ne(Ml)}var Qn=O(null),di=null;function Ua(t){var n=t.alternate;ge(sn,sn.current&1),ge(Qn,t),di===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(di=t)}function ju(t){ge(sn,sn.current),ge(Qn,t),di===null&&(di=t)}function Qp(t){t.tag===22?(ge(sn,sn.current),ge(Qn,t),di===null&&(di=t)):La()}function La(){ge(sn,sn.current),ge(Qn,Qn.current)}function Jn(t){ne(Qn),di===t&&(di=null),ne(sn)}var sn=O(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,lt=null,Gt=null,cn=null,Tl=!1,er=!1,gs=!1,Al=0,co=0,tr=null,D_=0;function tn(){throw Error(s(321))}function Gu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Hu(t,n,a,o,u,f){return $i=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Om:sf,gs=!1,f=a(o,u),gs=!1,er&&(f=$p(n,a,o,u)),Jp(t),f}function Jp(t){B.H=ho;var n=Gt!==null&&Gt.next!==null;if($i=0,cn=Gt=lt=null,Tl=!1,co=0,tr=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&gl(t)&&(un=!0))}function $p(t,n,a,o){lt=t;var u=0;do{if(er&&(tr=null),co=0,er=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Pm,f=n(a,o)}while(er);return f}function U_(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?uo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function Vu(){var t=Al!==0;return Al=0,t}function Xu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}$i=0,cn=Gt=lt=null,er=!1,co=Al=0,tr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?lt.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?lt.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?lt.memoizedState=cn=t:cn=cn.next=t}return cn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(t){var n=co;return co+=1,tr===null&&(tr=[]),t=Hp(tr,t,n),n=lt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Om:sf),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uo(t);if(t.$$typeof===D)return An(t)}throw Error(s(438,String(t)))}function qu(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=N;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=rn();return Yu(n,Gt,t)}function Yu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=b=null,j=null,te=n,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(vt&xe)===xe:($i&xe)===xe){var re=te.revertLane;if(re===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Zs&&(de=!0);else if(($i&re)===re){te=te.next,re===Zs&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},j===null?(R=j=xe,b=f):j=j.next=xe,lt.lanes|=re,za|=re;xe=te.action,gs&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else re={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},j===null?(R=j=re,b=f):j=j.next=re,lt.lanes|=xe,za|=xe;te=te.next}while(te!==null&&te!==n);if(j===null?b=f:j.next=R,!Zn(f,t.memoizedState)&&(un=!0,de&&(a=Ks,a!==null)))throw a;t.memoizedState=f,t.baseState=b,t.baseQueue=j,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Zu(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do f=t(f,b.action),b=b.next;while(b!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function em(t,n,a){var o=lt,u=rn(),f=St;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!Zn((Gt||u).memoizedState,a);if(b&&(u.memoizedState=a,un=!0),u=u.queue,Ju(im.bind(null,o,u,t),[t]),u.getSnapshot!==n||b||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,nr(9,{destroy:void 0},nm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));f||($i&127)!==0||tm(o,n,a)}return a}function tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=wl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function nm(t,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&sm(t)}function im(t,n,a){return a(function(){am(n)&&sm(t)})}function am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function sm(t){var n=os(t,2);n!==null&&Xn(n,t,2)}function Ku(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),gs){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function rm(t,n,a,o){return t.baseState=a,Yu(t,Gt,typeof o=="function"?o:ea)}function L_(t,n,a,o,u){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,om(n,f)):(f.next=a.next,n.pending=a.next=f)}}function om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,b={};B.T=b;try{var R=a(u,o),j=B.S;j!==null&&j(b,R),lm(t,n,R)}catch(te){Qu(t,n,te)}finally{f!==null&&b.types!==null&&(f.types=b.types),B.T=f}}else try{f=a(u,o),lm(t,n,f)}catch(te){Qu(t,n,te)}}function lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(t,n,o)},function(o){return Qu(t,n,o)}):cm(t,n,a)}function cm(t,n,a){n.status="fulfilled",n.value=a,um(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,om(t,a)))}function Qu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}t.action=null}function um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fm(t,n){return n}function dm(t,n){if(St){var a=Xt.formState;if(a!==null){e:{var o=lt;if(St){if(qt){t:{for(var u=qt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=hi(u.nextSibling),o=u.data==="F!";break e}}wa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Dm.bind(null,lt,o),o.dispatch=a,o=Ku(!1),f=af.bind(null,lt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=L_.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function hm(t){var n=rn();return pm(n,Gt,t)}function pm(t,n,a){if(n=Yu(t,n,fm)[0],t=Cl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(b){throw b===Qs?_l:b}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,nr(9,{destroy:void 0},O_.bind(null,u,a),null)),[o,f,t]}function O_(t,n){t.action=n}function mm(t){var n=rn(),a=Gt;if(a!==null)return pm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function nr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=wl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function gm(){return rn().memoizedState}function Nl(t,n,a,o){var u=Pn();lt.flags|=t,u.memoizedState=nr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&Gu(o,Gt.memoizedState.deps)?u.memoizedState=nr(n,f,a,o):(lt.flags|=t,u.memoizedState=nr(1|n,f,a,o))}function xm(t,n){Nl(8390656,8,t,n)}function Ju(t,n){Dl(2048,8,t,n)}function P_(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=wl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function vm(t){var n=rn().memoizedState;return P_({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _m(t,n){return Dl(4,2,t,n)}function bm(t,n){return Dl(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,ym.bind(null,n,t),a)}function $u(){}function Mm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Em(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=t(),gs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function ef(t,n,a){return a===void 0||($i&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=T0(),lt.lanes|=t,za|=t,a)}function Tm(t,n,a,o){return Zn(a,n)?a:$s.current!==null?(t=ef(t,a,o),Zn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(vt&261930)===0?(un=!0,t.memoizedState=a):(t=T0(),lt.lanes|=t,za|=t,n)}function Am(t,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var b=B.T,R={};B.T=R,af(t,!1,n,a);try{var j=u(),te=B.S;if(te!==null&&te(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var de=N_(j,o);fo(t,n,de,ti(t))}else fo(t,n,o,ti(t))}catch(xe){fo(t,n,{then:function(){},status:"rejected",reason:xe},ti())}finally{k.p=f,b!==null&&R.types!==null&&(b.types=R.types),B.T=b}}function z_(){}function tf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=wm(t).queue;Am(t,u,n,J,a===null?z_:function(){return Rm(t),a(o)})}function wm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rm(t){var n=wm(t);n.next===null&&(n=t.alternate.memoizedState),fo(t,n.next.queue,{},ti())}function nf(){return An(Co)}function Cm(){return rn().memoizedState}function Nm(){return rn().memoizedState}function I_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Na(a);var o=Da(n,t,a);o!==null&&(Xn(o,n,a),ro(o,n,a)),n={cache:Du()},t.payload=n;return}n=n.return}}function B_(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Um(n,a):(a=bu(t,n,a,o),a!==null&&(Xn(a,t,o),Lm(a,n,o)))}function Dm(t,n,a){var o=ti();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Um(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,R=f(b,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,b))return dl(t,n,u,0),Xt===null&&fl(),!1}catch{}if(a=bu(t,n,u,o),a!==null)return Xn(a,t,o),Lm(a,n,o),!0}return!1}function af(t,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=bu(t,a,o,2),n!==null&&Xn(n,t,2)}function Ul(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Um(t,n){er=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kr(t,a)}}var ho={readContext:An,use:Rl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};ho.useEffectEvent=tn;var Om={readContext:An,use:Rl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(gs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(gs){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=B_.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ku(t);var n=t.queue,a=Dm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(t,n){var a=Pn();return ef(a,t,n)},useTransition:function(){var t=Ku(!1);return t=Am.bind(null,lt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Pn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(vt&127)!==0||tm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xm(im.bind(null,o,f,t),[t]),o.flags|=2048,nr(9,{destroy:void 0},nm.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=Xt.identifierPrefix;if(St){var a=Li,o=Ui;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=D_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:nf,useFormState:dm,useActionState:dm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:qu,useCacheRefresh:function(){return Pn().memoizedState=I_.bind(null,lt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:An,use:Rl,useCallback:Mm,useContext:An,useEffect:Ju,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:bm,useMemo:Em,useReducer:Cl,useRef:gm,useState:function(){return Cl(ea)},useDebugValue:$u,useDeferredValue:function(t,n){var a=rn();return Tm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Cl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:em,useId:Cm,useHostTransitionStatus:nf,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=rn();return rm(a,Gt,t,n)},useMemoCache:qu,useCacheRefresh:Nm};sf.useEffectEvent=vm;var Pm={readContext:An,use:Rl,useCallback:Mm,useContext:An,useEffect:Ju,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:bm,useMemo:Em,useReducer:Zu,useRef:gm,useState:function(){return Zu(ea)},useDebugValue:$u,useDeferredValue:function(t,n){var a=rn();return Gt===null?ef(a,t,n):Tm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Zu(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:em,useId:Cm,useHostTransitionStatus:nf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=rn();return Gt!==null?rm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Nm};Pm.useEffectEvent=vm;function rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var of={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Xn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Xn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&(Xn(n,t,a),ro(n,t,a))}};function zm(t,n,a,o,u,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,b):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,o)||!Jr(u,f):!0}function Im(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&of.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Bm(t){ul(t)}function Fm(t){console.error(t)}function km(t){ul(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(t,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Gm(t){return t=Na(t),t.tag=3,t}function Hm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){jm(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){jm(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function F_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Xl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(t,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(t,o,u)),!1}throw Error(s(435,a.tag))}return Lf(t,o,u),Xl(),!1}if(St)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(t=Error(s(422),{cause:o}),to(li(t,a)))):(o!==Au&&(n=Error(s(423),{cause:o}),to(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=lf(t.stateNode,o,u),Iu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=lf(a.stateNode,o,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Hm(u,t,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(s(461)),un=!1;function wn(t,n,a,o){n.child=t===null?qp(n,null,a,o):ms(n,t.child,a,o)}function Vm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var b={};for(var R in o)R!=="ref"&&(b[R]=o[R])}else b=o;return fs(n),o=Hu(t,n,a,b,f,u),R=Vu(),t!==null&&!un?(Xu(t,n,u),ta(t,n,u)):(St&&R&&Eu(n),n.flags|=1,wn(t,n,o,u),n.child)}function Xm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(t,n,f,o,u)):(t=pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!xf(t,u)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(b,o)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Wm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Jr(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,xf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return uf(t,n,a,o,u)}function qm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Ym(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Kp(n,f):Fu(),Qp(n);else return o=n.lanes=536870912,Ym(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),Kp(n,f),La(),n.memoizedState=null):(t!==null&&vl(n,null),Fu(),La());return wn(t,n,u,a),n.child}function po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(t,n,a,o,u){var f=Lu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Fu(),Qp(n),t!==null&&Ys(t,n,o,!0),n.childLanes=u,null}function Ol(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Zm(t,n,a){return ms(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function k_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Ol(n,o),n.lanes=536870912,po(null,t);if(ju(n),(t=qt)?(t=og(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return Ol(n,o)}var f=t.memoizedState;if(f!==null){var b=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=Zm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ys(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=Xt,o!==null&&(b=Ls(o,a),b!==0&&b!==f.retryLane))throw f.retryLane=b,os(t,b),Xn(o,t,b),cf;Xl(),n=Zm(t,n,a)}else t=f.treeContext,qt=hi(b.nextSibling),Tn=n,St=!0,Aa=null,fi=!1,t!==null&&Pp(n,t),n=Ol(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function uf(t,n,a,o,u){return fs(n),a=Hu(t,n,a,o,void 0,u),o=Vu(),t!==null&&!un?(Xu(t,n,u),ta(t,n,u)):(St&&o&&Eu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Km(t,n,a,o,u,f){return fs(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(t),o=Vu(),t!==null&&!un?(Xu(t,n,f),ta(t,n,f)):(St&&o&&Eu(n),n.flags|=1,wn(t,n,a,f),n.child)}function Qm(t,n,a,o,u){if(fs(n),n.stateNode===null){var f=Vs,b=a.contextType;typeof b=="object"&&b!==null&&(f=An(b)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),b=a.contextType,f.context=typeof b=="object"&&b!==null?An(b):Vs,f.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(rf(n,a,b,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&of.enqueueReplaceState(f,f.state,null),lo(n,o,f,u),oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,j=xs(a,R);f.props=j;var te=f.context,de=a.contextType;b=Vs,typeof de=="object"&&de!==null&&(b=An(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==b)&&Im(n,f,o,b),Ca=!1;var re=n.memoizedState;f.state=re,lo(n,o,f,u),oo(),te=n.memoizedState,R||re!==te||Ca?(typeof xe=="function"&&(rf(n,a,xe,o),te=n.memoizedState),(j=Ca||zm(n,a,j,o,re,te,b))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=b,o=j):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(t,n),b=n.memoizedProps,de=xs(a,b),f.props=de,xe=n.pendingProps,re=f.context,te=a.contextType,j=Vs,typeof te=="object"&&te!==null&&(j=An(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==xe||re!==j)&&Im(n,f,o,j),Ca=!1,re=n.memoizedState,f.state=re,lo(n,o,f,u),oo();var ue=n.memoizedState;b!==xe||re!==ue||Ca||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof R=="function"&&(rf(n,a,R,o),ue=n.memoizedState),(de=Ca||zm(n,a,de,o,re,ue,j)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=j,o=de):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=ms(n,t.child,null,u),n.child=ms(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function Jm(t,n,a,o){return cs(),n.flags|=256,wn(t,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:jp()}}function hf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function $m(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ua(n):La(),(t=qt)?(t=og(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw wa(n);return Zf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(La(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=ls(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=df(a),o.childLanes=hf(t,b,a),n.memoizedState=ff,po(null,o)):(Ua(n),pf(n,R))}var j=t.memoizedState;if(j!==null&&(R=j.dehydrated,R!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=mf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),R=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),R=ls(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ms(n,t.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=hf(t,b,a),n.memoizedState=ff,n=po(null,o));else if(Ua(n),Zf(R)){if(b=R.nextSibling&&R.nextSibling.dataset,b)var te=b.dgst;b=te,o=Error(s(419)),o.stack="",o.digest=b,to({value:o,source:null,stack:null}),n=mf(t,n,a)}else if(un||Ys(t,n,a,!1),b=(a&t.childLanes)!==0,un||b){if(b=Xt,b!==null&&(o=Ls(b,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,os(t,o),Xn(b,t,o),cf;Yf(R)||Xl(),n=mf(t,n,a)}else Yf(R)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,qt=hi(R.nextSibling),Tn=n,St=!0,Aa=null,fi=!1,t!==null&&Pp(n,t),n=pf(n,o.children),n.flags|=4096);return n}return u?(La(),R=o.fallback,u=n.mode,j=t.child,te=j.sibling,o=Zi(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,te!==null?R=Zi(te,R):(R=ls(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,po(null,o),o=n.child,R=t.child.memoizedState,R===null?R=df(a):(u=R.cachePool,u!==null?(j=ln._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=jp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=hf(t,b,a),n.memoizedState=ff,po(t.child,o)):(Ua(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function pf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function mf(t,n,a){return ms(n,t.child,null,a),t=pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function e0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Cu(t.return,n,a)}function gf(t,n,a,o,u,f){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=f)}function t0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var b=sn.current,R=(b&2)!==0;if(R?(b=b&1|2,n.flags|=128):b&=1,ge(sn,b),wn(t,n,o,a),o=St?eo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,a,n);else if(t.tag===19)e0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&El(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}gf(n,!0,a,null,f,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function j_(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Ra(n,ln,t.memoizedState.cache),cs();break;case 27:case 5:Ge(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(t,n,a):(Ua(n),t=ta(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ys(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return t0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(sn,sn.current),o)break;return null;case 22:return n.lanes=0,qm(t,n,a,n.pendingProps);case 24:Ra(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function n0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return un=!1,j_(t,n,a);un=(t.flags&131072)!==0}else un=!1,St&&(n.flags&1048576)!==0&&Op(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=hs(n.elementType),n.type=t,typeof t=="function")yu(t)?(o=xs(t,o),n.tag=1,n=Qm(null,n,t,o,a)):(n.tag=0,n=uf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=Vm(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=Xm(null,n,t,o,a);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return uf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),Qm(t,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(t,n),lo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ra(n,ln,o),o!==f.cache&&Nu(n,[ln],a,!0),oo(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jm(t,n,o,a);break e}else if(o!==u){u=li(Error(s(424)),n),to(u),n=Jm(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=hi(t.firstChild),Tn=n,St=!0,Aa=null,fi=!0,a=qp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),o===u){n=ta(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=Jl(W.current).createElement(a),o[on]=n,o[_n]=t,Rn(o,a,t),C(o),n.stateNode=o):n.memoizedState=hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&St&&(o=n.stateNode=ug(n.type,n.pendingProps,W.current),Tn=n,fi=!0,u=qt,ja(n.type)?(Kf=u,qt=hi(o.firstChild)):qt=u),wn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=qt)&&(o=xb(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Tn=n,qt=hi(o.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),Ge(n),u=n.type,f=n.pendingProps,b=t!==null?t.memoizedProps:null,o=f.children,Xf(u,f)?o=null:b!==null&&Xf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(t,n,U_,null,null,a),Co._currentValue=u),Pl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=vb(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||wa(n)),null;case 13:return $m(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ms(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fs(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return Xm(t,n,n.type,n.pendingProps,a);case 15:return Wm(t,n,n.type,n.pendingProps,a);case 19:return t0(t,n,a);case 31:return k_(t,n,a);case 22:return qm(t,n,a,n.pendingProps);case 24:return fs(n),o=An(ln),t===null?(u=Lu(),u===null&&(u=Xt,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Pu(n),Ra(n,ln,u)):((t.lanes&a)!==0&&(zu(t,n),lo(n,null,null,a),oo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,ln,o)):(o=f.cache,Ra(n,ln,o),o!==u.cache&&Nu(n,[ln],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function vf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(C0())t.flags|=8192;else throw ps=bl,Ou}else t.flags&=-16777217}function i0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!vg(n))if(C0())t.flags|=8192;else throw ps=bl,Ou}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,rr|=n)}function mo(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function G_(t,n,a){var o=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Yt(n),i0(n,f)):(Yt(n),vf(n,u,null,o,a))):f?f!==t.memoizedState?(na(n),Yt(n),i0(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Yt(n),vf(n,u,t,o,a)),null;case 27:if(ht(n),a=W.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}t=Te.current,qs(n)?zp(n):(t=ug(u,o,a),n.stateNode=t,na(n))}return Yt(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(f=Te.current,qs(n))zp(n);else{var b=Jl(W.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}f[on]=n,f[_n]=o;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=f;e:switch(Rn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Yt(n),vf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=W.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$0(t.nodeValue,a)),t||wa(n,!0)}else t=Jl(t).createTextNode(o),t[on]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=qs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Yt(n),null);case 4:return je(),t===null&&kf(n.stateNode.containerInfo),Yt(n),null;case 10:return Ji(n.type),Yt(n),null;case 19:if(ne(sn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)mo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,mo(o,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Dp(a,t),a=a.sibling;return ge(sn,sn.current&1|2),St&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=El(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!St)return Yt(n),null}else 2*E()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=sn.current,ge(sn,u?a&1|2:a&1),St&&Ki(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Jn(n),ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function H_(t,n){switch(Tu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(sn),null;case 4:return je(),null;case 10:return Ji(n.type),null;case 22:case 23:return Jn(n),ku(),t!==null&&ne(ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function a0(t,n){switch(Tu(n),n.tag){case 3:Ji(ln),je();break;case 26:case 27:case 5:ht(n);break;case 4:je();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ne(sn);break;case 10:Ji(n.type);break;case 22:case 23:Jn(n),ku(),t!==null&&ne(ds);break;case 24:Ji(ln)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,b=a.inst;o=f(),b.destroy=o}a=a.next}while(a!==u)}}catch(R){Ft(n,n.return,R)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var b=o.inst,R=b.destroy;if(R!==void 0){b.destroy=void 0,u=n;var j=a,te=R;try{te()}catch(de){Ft(u,j,de)}}}o=o.next}while(o!==f)}}catch(de){Ft(n,n.return,de)}}function s0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Zp(n,a)}catch(o){Ft(t,t.return,o)}}}function r0(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function Oi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function o0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function _f(t,n,a){try{var o=t.stateNode;fb(o,t.type,a,n),o[_n]=n}catch(u){Ft(t,t.return,u)}}function l0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function c0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[on]=t,n[_n]=a}catch(f){Ft(t,t.return,f)}}var ia=!1,fn=!1,Sf=!1,u0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function V_(t,n){if(t=t.containerInfo,Hf=sc,t=Sp(t),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,R=-1,j=-1,te=0,de=0,xe=t,re=null;t:for(;;){for(var ue;xe!==a||u!==0&&xe.nodeType!==3||(R=b+u),xe!==f||o!==0&&xe.nodeType!==3||(j=b+o),xe.nodeType===3&&(b+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)re=xe,xe=ue;for(;;){if(xe===t)break t;if(re===a&&++te===u&&(R=b),re===f&&++de===o&&(j=b),(ue=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=ue}a=R===-1||j===-1?null:{start:R,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},sc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ve=xs(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ft(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function f0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),o&4&&go(5,a);break;case 1:if(sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){Ft(a,a.return,b)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Ft(a,a.return,b)}}o&64&&s0(a),o&512&&xo(a,a.return);break;case 3:if(sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(t,n)}catch(b){Ft(a,a.return,b)}}break;case 27:n===null&&o&4&&c0(a);case 26:case 5:sa(t,a),n===null&&o&4&&o0(a),o&512&&xo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),o&4&&p0(t,a);break;case 13:sa(t,a),o&4&&m0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$_.bind(null,a),_b(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var f=fn;ia=o,(fn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),ia=u,fn=f}break;case 30:break;default:sa(t,a)}}function d0(t){var n=t.alternate;n!==null&&(t.alternate=null,d0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,jn=!1;function aa(t,n,a){for(a=a.child;a!==null;)h0(t,n,a),a=a.sibling}function h0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Oi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Oi(a,n);var o=Qt,u=jn;ja(a.type)&&(Qt=a.stateNode,jn=!1),aa(t,n,a),Ao(a.stateNode),Qt=o,jn=u;break;case 5:fn||Oi(a,n);case 6:if(o=Qt,u=jn,Qt=null,aa(t,n,a),Qt=o,jn=u,Qt!==null)if(jn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Qt!==null&&(jn?(t=Qt,sg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):sg(Qt,a.stateNode));break;case 4:o=Qt,u=jn,Qt=a.stateNode.containerInfo,jn=!0,aa(t,n,a),Qt=o,jn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),aa(t,n,a);break;case 1:fn||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r0(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function p0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Ft(n,n.return,a)}}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Ft(n,n.return,a)}}function X_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new u0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new u0),n;default:throw Error(s(435,t.tag))}}function Fl(t,n){var a=X_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=eb.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,b=n,R=b;e:for(;R!==null;){switch(R.tag){case 27:if(ja(R.type)){Qt=R.stateNode,jn=!1;break e}break;case 5:Qt=R.stateNode,jn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(Qt===null)throw Error(s(160));h0(f,b,u),Qt=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,t),n=n.sibling}var Si=null;function g0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Hn(t),o&4&&(Oa(3,t,t.return),go(3,t),Oa(5,t,t.return));break;case 1:Gn(n,t),Hn(t),o&512&&(fn||a===null||Oi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(Gn(n,t),Hn(t),o&512&&(fn||a===null||Oi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ns]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[on]=t,C(f),o=f;break e;case"link":var b=gg("link","href",u).get(o+(a.href||""));if(b){for(var R=0;R<b.length;R++)if(f=b[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(R,1);break t}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(b=gg("meta","content",u).get(o+(a.content||""))){for(R=0;R<b.length;R++)if(f=b[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(R,1);break t}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=t,C(f),o=f}t.stateNode=o}else xg(u,t.type,t.stateNode);else t.stateNode=mg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?xg(u,t.type,t.stateNode):mg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&_f(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Hn(t),o&512&&(fn||a===null||Oi(a,a.return)),a!==null&&o&4&&_f(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Hn(t),o&512&&(fn||a===null||Oi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Ve){Ft(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,_f(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Sf=!0);break;case 6:if(Gn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Ft(t,t.return,Ve)}}break;case 3:if(tc=null,u=Si,Si=$l(n.containerInfo),Gn(n,t),Si=u,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Ve){Ft(t,t.return,Ve)}Sf&&(Sf=!1,x0(t));break;case 4:o=Si,Si=$l(t.stateNode.containerInfo),Gn(n,t),Hn(t),Si=o;break;case 12:Gn(n,t),Hn(t);break;case 31:Gn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 13:Gn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,te=ia,de=fn;if(ia=te||u,fn=de||j,Gn(n,t),fn=de,ia=te,Hn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||ia||fn||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(f=j.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{R=j.stateNode;var xe=j.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ve){Ft(j,j.return,Ve)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Ve){Ft(j,j.return,Ve)}}}else if(n.tag===18){if(a===null){j=n;try{var ue=j.stateNode;u?rg(ue,!0):rg(j.stateNode,!1)}catch(Ve){Ft(j,j.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(t,a))));break;case 19:Gn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(l0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);Bl(t,f,u);break;case 5:var b=a.stateNode;a.flags&32&&(hn(b,""),a.flags&=-33);var R=bf(t);Bl(t,R,b);break;case 3:case 4:var j=a.stateNode.containerInfo,te=bf(t);yf(t,te,j);break;default:throw Error(s(161))}}catch(de){Ft(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function x0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;x0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r0(n,n.return,a),vs(n);break;case 27:Ao(n.stateNode);case 26:case 5:Oi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),go(4,f);break;case 1:if(ra(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Yp(j[u],R)}catch(te){Ft(o,o.return,te)}}a&&b&64&&s0(f),xo(f,f.return);break;case 27:c0(f);case 26:case 5:ra(u,f,a),a&&o===null&&b&4&&o0(f),xo(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&b&4&&p0(u,f);break;case 13:ra(u,f,a),a&&b&4&&m0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),xo(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function Mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&no(a))}function Ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&no(t))}function Mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(t,n,a,o),n=n.sibling}function v0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,o),u&2048&&go(9,n);break;case 1:Mi(t,n,a,o);break;case 3:Mi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&no(t)));break;case 12:if(u&2048){Mi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,b=f.id,R=f.onPostCommit;typeof R=="function"&&R(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Ft(n,n.return,j)}}else Mi(t,n,a,o);break;case 31:Mi(t,n,a,o);break;case 13:Mi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,o):vo(t,n):f._visibility&2?Mi(t,n,a,o):(f._visibility|=2,ir(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(b,n);break;case 24:Mi(t,n,a,o),u&2048&&Ef(n.alternate,n);break;default:Mi(t,n,a,o)}}function ir(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,b=n,R=a,j=o,te=b.flags;switch(b.tag){case 0:case 11:case 15:ir(f,b,R,j,u),go(8,b);break;case 23:break;case 22:var de=b.stateNode;b.memoizedState!==null?de._visibility&2?ir(f,b,R,j,u):vo(f,b):(de._visibility|=2,ir(f,b,R,j,u)),u&&te&2048&&Mf(b.alternate,b);break;case 24:ir(f,b,R,j,u),u&&te&2048&&Ef(b.alternate,b);break;default:ir(f,b,R,j,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Mf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Ef(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function ar(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)_0(t,n,a),t=t.sibling}function _0(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&_o&&t.memoizedState!==null&&Db(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var o=Si;Si=$l(t.stateNode.containerInfo),ar(t,n,a),Si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,ar(t,n,a),_o=o):ar(t,n,a));break;default:ar(t,n,a)}}function b0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,S0(o,t)}b0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):bo(t);break;default:bo(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,S0(o,t)}b0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function S0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(d0(o),o===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var W_={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},q_=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,mt=null,vt=0,Bt=0,$n=null,Pa=!1,sr=!1,Tf=!1,oa=0,nn=0,za=0,_s=0,Af=0,ei=0,rr=0,yo=null,Vn=null,wf=!1,jl=0,M0=0,Gl=1/0,Hl=null,Ia=null,pn=0,Ba=null,or=null,la=0,Rf=0,Cf=null,E0=null,So=0,Nf=null;function ti(){return(Lt&2)!==0&&vt!==0?vt&-vt:B.T!==null?zf():Gr()}function T0(){if(ei===0)if((vt&536870912)===0||St){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function Xn(t,n,a){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Fa(t,vt,ei,!1)),Nn(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(_s|=a),nn===4&&Fa(t,vt,ei,!1)),Pi(t))}function A0(t,n,a){if((Lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),u=o?K_(t,n):Uf(t,n,!0),f=o;do{if(u===0){sr&&!o&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Y_(a)){u=Uf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var R=t;u=yo;var j=R.current.memoizedState.isDehydrated;if(j&&(lr(R,b).flags|=256),b=Uf(R,b,!1),b!==2){if(Tf&&!j){R.errorRecoveryDisabledLanes|=f,_s|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){lr(t,0),Fa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(o,n,ei,!Pa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-E(),10<u)){if(Fa(o,n,ei,!Pa),be(o,0,!0)!==0)break e;la=n,o.timeoutHandle=ig(w0.bind(null,o,a,Vn,Hl,wf,n,ei,_s,rr,Pa,f,"Throttled",-0,0),u);break e}w0(o,a,Vn,Hl,wf,n,ei,_s,rr,Pa,f,null,-0,0)}}break}while(!0);Pi(t)}function w0(t,n,a,o,u,f,b,R,j,te,de,xe,re,ue){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},_0(n,f,xe);var Ve=(f&62914560)===f?jl-E():(f&4194048)===f?M0-E():0;if(Ve=Ub(xe,Ve),Ve!==null){la=f,t.cancelPendingCommit=Ve(P0.bind(null,t,n,f,a,o,u,b,R,j,de,xe,null,re,ue)),Fa(t,f,b,!te);return}}P0(t,n,f,a,o,u,b,R,j)}function Y_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,o){n&=~Af,n&=~_s,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),b=1<<f;o[f]=-1,u&=~b}a!==0&&tl(t,a,n)}function Vl(){return(Lt&6)===0?(Mo(0),!1):!0}function Df(){if(mt!==null){if(Bt===0)var t=mt.return;else t=mt,Qi=us=null,Wu(t),Js=null,ao=0,t=mt;for(;t!==null;)a0(t.alternate,t),t=t.return;mt=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,pb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Df(),Xt=t,mt=a=Zi(t.current,null),vt=n,Bt=0,$n=null,Pa=!1,sr=Re(t,n),Tf=!1,rr=ei=Af=_s=za=nn=0,Vn=yo=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return oa=n,fl(),a}function R0(t,n){lt=null,B.H=ho,n===Qs||n===_l?(n=Vp(),Bt=3):n===Ou?(n=Vp(),Bt=4):Bt=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,mt===null&&(nn=1,Ll(t,li(n,t.current)))}function C0(){var t=Qn.current;return t===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?t===di:!1}function N0(){var t=B.H;return B.H=ho,t===null?ho:t}function D0(){var t=B.A;return B.A=W_,t}function Xl(){nn=4,Pa||(vt&4194048)!==vt&&Qn.current!==null||(sr=!0),(za&134217727)===0&&(_s&134217727)===0||Xt===null||Fa(Xt,vt,ei,!1)}function Uf(t,n,a){var o=Lt;Lt|=2;var u=N0(),f=D0();(Xt!==t||vt!==n)&&(Hl=null,lr(t,n)),n=!1;var b=nn;e:do try{if(Bt!==0&&mt!==null){var R=mt,j=$n;switch(Bt){case 8:Df(),b=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var te=Bt;if(Bt=0,$n=null,cr(t,R,j,te),a&&sr){b=0;break e}break;default:te=Bt,Bt=0,$n=null,cr(t,R,j,te)}}Z_(),b=nn;break}catch(de){R0(t,de)}while(!0);return n&&t.shellSuspendCounter++,Qi=us=null,Lt=o,B.H=u,B.A=f,mt===null&&(Xt=null,vt=0,fl()),b}function Z_(){for(;mt!==null;)U0(mt)}function K_(t,n){var a=Lt;Lt|=2;var o=N0(),u=D0();Xt!==t||vt!==n?(Hl=null,Gl=E()+500,lr(t,n)):sr=Re(t,n);e:do try{if(Bt!==0&&mt!==null){n=mt;var f=$n;t:switch(Bt){case 1:Bt=0,$n=null,cr(t,n,f,1);break;case 2:case 9:if(Gp(f)){Bt=0,$n=null,L0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),Pi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Gp(f)?(Bt=0,$n=null,L0(n)):(Bt=0,$n=null,cr(t,n,f,7));break;case 5:var b=null;switch(mt.tag){case 26:b=mt.memoizedState;case 5:case 27:var R=mt;if(b?vg(b):R.stateNode.complete){Bt=0,$n=null;var j=R.sibling;if(j!==null)mt=j;else{var te=R.return;te!==null?(mt=te,Wl(te)):mt=null}break t}}Bt=0,$n=null,cr(t,n,f,5);break;case 6:Bt=0,$n=null,cr(t,n,f,6);break;case 8:Df(),nn=6;break e;default:throw Error(s(462))}}Q_();break}catch(de){R0(t,de)}while(!0);return Qi=us=null,B.H=o,B.A=u,Lt=a,mt!==null?0:(Xt=null,vt=0,fl(),nn)}function Q_(){for(;mt!==null&&!Ye();)U0(mt)}function U0(t){var n=n0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Wl(t):mt=n}function L0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Wu(n);default:a0(a,n),n=mt=Dp(n,oa),n=n0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Wl(t):mt=n}function cr(t,n,a,o){Qi=us=null,Wu(n),Js=null,ao=0;var u=n.return;try{if(F_(t,u,n,a,vt)){nn=1,Ll(t,li(a,t.current)),mt=null;return}}catch(f){if(u!==null)throw mt=u,f;nn=1,Ll(t,li(a,t.current)),mt=null;return}n.flags&32768?(St||o===1?t=!0:sr||(vt&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){O0(n,Pa);return}t=n.return;var a=G_(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);nn===0&&(nn=5)}function O0(t,n){do{var a=H_(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);nn=6,mt=null}function P0(t,n,a,o,u,f,b,R,j){t.cancelPendingCommit=null;do ql();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=_u,vi(t,a,f,b,R,j),t===Xt&&(mt=Xt=null,vt=0),or=n,Ba=t,la=a,Rf=f,Cf=u,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tb(fe,function(){return k0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=k.p,k.p=2,b=Lt,Lt|=4;try{V_(t,n,a)}finally{Lt=b,k.p=u,B.T=o}}pn=1,z0(),I0(),B0()}}function z0(){if(pn===1){pn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=k.p;k.p=2;var u=Lt;Lt|=4;try{g0(n,t);var f=Vf,b=Sp(t.containerInfo),R=f.focusedElem,j=f.selectionRange;if(b!==R&&R&&R.ownerDocument&&yp(R.ownerDocument.documentElement,R)){if(j!==null&&pu(R)){var te=j.start,de=j.end;if(de===void 0&&(de=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(de,R.value.length);else{var xe=R.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var ue=re.getSelection(),Ve=R.textContent.length,tt=Math.min(j.start,Ve),Vt=j.end===void 0?tt:Math.min(j.end,Ve);!ue.extend&&tt>Vt&&(b=Vt,Vt=tt,tt=b);var K=bp(R,tt),V=bp(R,Vt);if(K&&V&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==V.node||ue.focusOffset!==V.offset)){var ee=xe.createRange();ee.setStart(K.node,K.offset),ue.removeAllRanges(),tt>Vt?(ue.addRange(ee),ue.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ue.addRange(ee))}}}}for(xe=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var me=xe[R];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}sc=!!Hf,Vf=Hf=null}finally{Lt=u,k.p=o,B.T=a}}t.current=n,pn=2}}function I0(){if(pn===2){pn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=k.p;k.p=2;var u=Lt;Lt|=4;try{f0(t,n.alternate,n)}finally{Lt=u,k.p=o,B.T=a}}pn=3}}function B0(){if(pn===4||pn===3){pn=0,L();var t=Ba,n=or,a=la,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,or=Ba=null,F0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),Os(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=k.p,k.p=2,B.T=null;try{for(var f=t.onRecoverableError,b=0;b<o.length;b++){var R=o[b];f(R.value,{componentStack:R.stack})}}finally{B.T=n,k.p=u}}(la&3)!==0&&ql(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Nf?So++:(So=0,Nf=t):So=0,Mo(0)}}function F0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,no(n)))}function ql(){return z0(),I0(),B0(),k0()}function k0(){if(pn!==5)return!1;var t=Ba,n=Rf;Rf=0;var a=Os(la),o=B.T,u=k.p;try{k.p=32>a?32:a,B.T=null,a=Cf,Cf=null;var f=Ba,b=la;if(pn=0,or=Ba=null,la=0,(Lt&6)!==0)throw Error(s(331));var R=Lt;if(Lt|=4,y0(f.current),v0(f,f.current,b,a),Lt=R,Mo(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{k.p=u,B.T=o,F0(t,n)}}function j0(t,n,a){n=li(a,n),n=lf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Nn(t,2),Pi(t))}function Ft(t,n,a){if(t.tag===3)j0(t,t,a);else for(;n!==null;){if(n.tag===3){j0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=li(a,t),a=Gm(2),o=Da(n,a,2),o!==null&&(Hm(a,o,n,t),Nn(o,2),Pi(o));break}}n=n.return}}function Lf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new q_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tf=!0,u.add(a),t=J_.bind(null,t,n,a),n.then(t,t))}function J_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>E()-jl?(Lt&2)===0&&lr(t,0):Af|=a,rr===vt&&(rr=0)),Pi(t)}function G0(t,n){n===0&&(n=zt()),t=os(t,n),t!==null&&(Nn(t,n),Pi(t))}function $_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),G0(t,a)}function eb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),G0(t,a)}function tb(t,n){return Mt(t,n)}var Yl=null,ur=null,Of=!1,Zl=!1,Pf=!1,ka=0;function Pi(t){t!==ur&&t.next===null&&(ur===null?Yl=ur=t:ur=ur.next=t),Zl=!0,Of||(Of=!0,ib())}function Mo(t,n){if(!Pf&&Zl){Pf=!0;do for(var a=!1,o=Yl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var b=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(b&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,W0(o,f))}else f=vt,f=be(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Re(o,f)||(a=!0,W0(o,f));o=o.next}while(a);Pf=!1}}function nb(){H0()}function H0(){Zl=Of=!1;var t=0;ka!==0&&hb()&&(t=ka);for(var n=E(),a=null,o=Yl;o!==null;){var u=o.next,f=V0(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(ur=a)):(a=o,(t!==0||(f&3)!==0)&&(Zl=!0)),o=u}pn!==0&&pn!==5||Mo(t),ka!==0&&(ka=0)}function V0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var b=31-ze(f),R=1<<b,j=u[b];j===-1?((R&a)===0||(R&o)!==0)&&(u[b]=it(R,n)):j<=n&&(t.expiredLanes|=R),f&=~R}if(n=Xt,a=vt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Os(a)){case 2:case 8:a=Se;break;case 32:a=fe;break;case 268435456:a=Ne;break;default:a=fe}return o=X0.bind(null,t),a=Mt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function X0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var o=vt;return o=be(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(A0(t,o,n),V0(t,E()),t.callbackNode!=null&&t.callbackNode===a?X0.bind(null,t):null)}function W0(t,n){if(ql())return null;A0(t,n,!0)}function ib(){mb(function(){(Lt&6)!==0?Mt(pe,nb):H0()})}function zf(){if(ka===0){var t=Zs;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),ka=t}return ka}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function Y0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ab(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=q0((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?q0(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var R=new ol("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var j=b?Y0(u,b):new FormData(u);tf(a,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(R.preventDefault(),j=b?Y0(u,b):new FormData(u),tf(a,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var If=0;If<vu.length;If++){var Bf=vu[If],sb=Bf.toLowerCase(),rb=Bf[0].toUpperCase()+Bf.slice(1);yi(sb,"on"+rb)}yi(Tp,"onAnimationEnd"),yi(Ap,"onAnimationIteration"),yi(wp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(S_,"onTransitionRun"),yi(M_,"onTransitionStart"),yi(E_,"onTransitionCancel"),yi(Rp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var b=o.length-1;0<=b;b--){var R=o[b],j=R.instance,te=R.currentTarget;if(R=R.listener,j!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ul(de)}u.currentTarget=null,f=j}else for(b=0;b<o.length;b++){if(R=o[b],j=R.instance,te=R.currentTarget,R=R.listener,j!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ul(de)}u.currentTarget=null,f=j}}}}function gt(t,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var o=t+"__bubble";a.has(o)||(K0(n,t,2,!1),a.add(o))}function Ff(t,n,a){var o=0;n&&(o|=4),K0(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Kl]){t[Kl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(ob.has(a)||Ff(a,!1,t),Ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Ff("selectionchange",!1,n))}}function K0(t,n,a,o){switch(Tg(n)){case 2:var u=Pb;break;case 8:u=zb;break;default:u=td}a=u.bind(null,n,a,t),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var R=o.stateNode.containerInfo;if(R===u)break;if(b===4)for(b=o.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;R!==null;){if(b=ya(R),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){o=f=b;continue e}R=R.parentNode}}o=o.return}tp(function(){var te=f,de=iu(a),xe=[];e:{var re=Cp.get(t);if(re!==void 0){var ue=ol,Ve=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ue=e_;break;case"focusin":Ve="focus",ue=cu;break;case"focusout":Ve="blur",ue=cu;break;case"beforeblur":case"afterblur":ue=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=i_;break;case Tp:case Ap:case wp:ue=Xv;break;case Rp:ue=s_;break;case"scroll":case"scrollend":ue=kv;break;case"wheel":ue=o_;break;case"copy":case"cut":case"paste":ue=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=rp;break;case"toggle":case"beforetoggle":ue=c_}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?re!==null?re+"Capture":null:re;tt=[];for(var V=te,ee;V!==null;){var me=V;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||K===null||(me=Xr(V,K),me!=null&&tt.push(To(V,me,ee))),Vt)break;V=V.return}0<tt.length&&(re=new ue(re,Ve,null,a,de),xe.push({event:re,listeners:tt}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",re&&a!==nu&&(Ve=a.relatedTarget||a.fromElement)&&(ya(Ve)||Ve[_i]))break e;if((ue||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,ue?(Ve=a.relatedTarget||a.toElement,ue=te,Ve=Ve?ya(Ve):null,Ve!==null&&(Vt=c(Ve),tt=Ve.tag,Ve!==Vt||tt!==5&&tt!==27&&tt!==6)&&(Ve=null)):(ue=null,Ve=te),ue!==Ve)){if(tt=ap,me="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=rp,me="onPointerLeave",K="onPointerEnter",V="pointer"),Vt=ue==null?re:is(ue),ee=Ve==null?re:is(Ve),re=new tt(me,V+"leave",ue,a,de),re.target=Vt,re.relatedTarget=ee,me=null,ya(de)===te&&(tt=new tt(K,V+"enter",Ve,a,de),tt.target=ee,tt.relatedTarget=Vt,me=tt),Vt=me,ue&&Ve)t:{for(tt=lb,K=ue,V=Ve,ee=0,me=K;me;me=tt(me))ee++;me=0;for(var Je=V;Je;Je=tt(Je))me++;for(;0<ee-me;)K=tt(K),ee--;for(;0<me-ee;)V=tt(V),me--;for(;ee--;){if(K===V||V!==null&&K===V.alternate){tt=K;break t}K=tt(K),V=tt(V)}tt=null}else tt=null;ue!==null&&Q0(xe,re,ue,tt,!1),Ve!==null&&Vt!==null&&Q0(xe,Vt,Ve,tt,!0)}}e:{if(re=te?is(te):window,ue=re.nodeName&&re.nodeName.toLowerCase(),ue==="select"||ue==="input"&&re.type==="file")var At=pp;else if(dp(re))if(mp)At=__;else{At=x_;var Ze=g_}else ue=re.nodeName,!ue||ue.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&bi(te.elementType)&&(At=pp):At=v_;if(At&&(At=At(t,te))){hp(xe,At,a,de);break e}Ze&&Ze(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&yn(re,"number",re.value)}switch(Ze=te?is(te):window,t){case"focusin":(dp(Ze)||Ze.contentEditable==="true")&&(js=Ze,mu=te,$r=null);break;case"focusout":$r=mu=js=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Mp(xe,a,de);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":Mp(xe,a,de)}var ut;if(fu)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ks?up(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(op&&a.locale!=="ko"&&(ks||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ks&&(ut=np()):(Ea=de,ru="value"in Ea?Ea.value:Ea.textContent,ks=!0)),Ze=Ql(te,_t),0<Ze.length&&(_t=new sp(_t,t,null,a,de),xe.push({event:_t,listeners:Ze}),ut?_t.data=ut:(ut=fp(a),ut!==null&&(_t.data=ut)))),(ut=f_?d_(t,a):h_(t,a))&&(_t=Ql(te,"onBeforeInput"),0<_t.length&&(Ze=new sp("onBeforeInput","beforeinput",null,a,de),xe.push({event:Ze,listeners:_t}),Ze.data=ut)),ab(xe,t,te,a,de)}Z0(xe,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(t,a),u!=null&&o.unshift(To(t,u,f)),u=Xr(t,n),u!=null&&o.push(To(t,u,f))),t.tag===3)return o;t=t.return}return[]}function lb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,n,a,o,u){for(var f=n._reactName,b=[];a!==null&&a!==o;){var R=a,j=R.alternate,te=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||te===null||(j=te,u?(te=Xr(a,f),te!=null&&b.unshift(To(a,te,j))):u||(te=Xr(a,f),te!=null&&b.push(To(a,te,j)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var cb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(cb,`
`).replace(ub,"")}function $0(t,n){return n=J0(n),J0(t)===n}function Ht(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Is(t,o,f);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qi);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=il(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),We(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bv.get(a)||a,We(t,a,o))}}function Gf(t,n,a,o,u,f){switch(a){case"style":Is(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):We(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,f,b,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var R=f=b=u=null,j=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":b=de;break;case"checked":j=de;break;case"defaultChecked":te=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ht(t,n,o,de,a,null)}}Wi(t,f,R,j,te,b,u,!1);return;case"select":gt("invalid",t),o=b=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":b=R;break;case"multiple":o=R;default:Ht(t,n,u,R,a,null)}n=f,a=b,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":gt("invalid",t),f=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(R=a[b],R!=null))switch(b){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(t,n,b,R,a,null)}Sn(t,o,u,f);return;case"option":for(j in a)a.hasOwnProperty(j)&&(o=a[j],o!=null)&&(j==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ht(t,n,j,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)gt(Eo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,te,o,a,null)}return;default:if(bi(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Gf(t,n,de,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ht(t,n,R,o,a,null))}function fb(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,R=null,j=null,te=null,de=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":j=xe;default:o.hasOwnProperty(ue)||Ht(t,n,ue,null,o,xe)}}for(var re in o){var ue=o[re];if(xe=a[re],o.hasOwnProperty(re)&&(ue!=null||xe!=null))switch(re){case"type":f=ue;break;case"name":u=ue;break;case"checked":te=ue;break;case"defaultChecked":de=ue;break;case"value":b=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==xe&&Ht(t,n,re,ue,o,xe)}}bn(t,b,R,j,te,de,f,u);return;case"select":ue=b=R=re=null;for(f in a)if(j=a[f],a.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":ue=j;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,j)}for(u in o)if(f=o[u],j=a[u],o.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":re=f;break;case"defaultValue":R=f;break;case"multiple":b=f;default:f!==j&&Ht(t,n,u,f,o,j)}n=R,a=b,o=ue,re!=null?ri(t,!!a,re,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":ue=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(t,n,R,null,o,u)}for(b in o)if(u=o[b],f=a[b],o.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":re=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ht(t,n,b,u,o,f)}It(t,re,ue);return;case"option":for(var Ve in a)re=a[Ve],a.hasOwnProperty(Ve)&&re!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Ht(t,n,Ve,null,o,re));for(j in o)re=o[j],ue=a[j],o.hasOwnProperty(j)&&re!==ue&&(re!=null||ue!=null)&&(j==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Ht(t,n,j,re,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)re=a[tt],a.hasOwnProperty(tt)&&re!=null&&!o.hasOwnProperty(tt)&&Ht(t,n,tt,null,o,re);for(te in o)if(re=o[te],ue=a[te],o.hasOwnProperty(te)&&re!==ue&&(re!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Ht(t,n,te,re,o,ue)}return;default:if(bi(n)){for(var Vt in a)re=a[Vt],a.hasOwnProperty(Vt)&&re!==void 0&&!o.hasOwnProperty(Vt)&&Gf(t,n,Vt,void 0,o,re);for(de in o)re=o[de],ue=a[de],!o.hasOwnProperty(de)||re===ue||re===void 0&&ue===void 0||Gf(t,n,de,re,o,ue);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&Ht(t,n,K,null,o,re);for(xe in o)re=o[xe],ue=a[xe],!o.hasOwnProperty(xe)||re===ue||re==null&&ue==null||Ht(t,n,xe,re,o,ue)}function eg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function db(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,b=u.initiatorType,R=u.duration;if(f&&R&&eg(b)){for(b=0,R=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],te=j.startTime;if(te>R)break;var de=j.transferSize,xe=j.initiatorType;de&&eg(xe)&&(j=j.responseEnd,b+=de*(j<R?1:(R-te)/(j-te)))}if(--o,n+=8*(f+b)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Vf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function hb(){var t=window.event;return t&&t.type==="popstate"?t===Wf?!1:(Wf=t,!0):(Wf=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,mb=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(gb)}:ig;function gb(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function sg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ao(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ao(a);for(var f=a.firstChild;f;){var b=f.nextSibling,R=f.nodeName;f[ns]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=b}}else a==="body"&&Ao(t.ownerDocument.body);a=u}while(a);pr(n)}function rg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function vb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function Yf(t){return t.data==="$?"||t.data==="$~"}function Zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _b(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kf=null;function lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function cg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ug(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vr(t)}var pi=new Map,fg=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=k.d;k.d={f:bb,r:yb,D:Sb,C:Mb,L:Eb,m:Tb,X:wb,S:Ab,M:Rb};function bb(){var t=ca.f(),n=Vl();return t||n}function yb(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ca.r(t)}var fr=typeof document>"u"?null:document;function dg(t,n,a){var o=fr;if(o&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fg.has(u)||(fg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),C(n),o.head.appendChild(n)))}}function Sb(t){ca.D(t),dg("dns-prefetch",t,null)}function Mb(t,n){ca.C(t,n),dg("preconnect",t,n)}function Eb(t,n,a){ca.L(t,n,a);var o=fr;if(o&&t&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(t)+'"]';var f=u;switch(n){case"style":f=dr(t);break;case"script":f=hr(t)}pi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Rn(n,"link",t),C(n),o.head.appendChild(n)))}}function Tb(t,n){ca.m(t,n);var a=fr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(o)+'"][href="'+st(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(t)}if(!pi.has(f)&&(t=x({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Rn(o,"link",t),C(o),a.head.appendChild(o)}}}function Ab(t,n,a){ca.S(t,n,a);var o=fr;if(o&&t){var u=Ma(o).hoistableStyles,f=dr(t);n=n||"default";var b=u.get(f);if(!b){var R={loading:0,preload:null};if(b=o.querySelector(wo(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&Qf(t,a);var j=b=o.createElement("link");C(j),Rn(j,"link",t),j._p=new Promise(function(te,de){j.onload=te,j.onerror=de}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ec(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:R},u.set(f,b)}}}function wb(t,n){ca.X(t,n);var a=fr;if(a&&t){var o=Ma(a).hoistableScripts,u=hr(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=x({src:t,async:!0},n),(n=pi.get(u))&&Jf(t,n),f=a.createElement("script"),C(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Rb(t,n){ca.M(t,n);var a=fr;if(a&&t){var o=Ma(a).hoistableScripts,u=hr(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&Jf(t,n),f=a.createElement("script"),C(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hg(t,n,a,o){var u=(u=W.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=Ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=dr(a.href);var f=Ma(u).hoistableStyles,b=f.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,b),(f=u.querySelector(wo(t)))&&!f._p&&(b.instance=f,b.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||Cb(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function dr(t){return'href="'+st(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function pg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Cb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),C(n),t.head.appendChild(n))}function hr(t){return'[src="'+st(t)+'"]'}function Ro(t){return"script[async]"+t}function mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),Rn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=dr(a.href);var f=t.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=pg(a),(u=pi.get(u))&&Qf(o,u),f=(t.ownerDocument||t).createElement("link"),C(f);var b=f;return b._p=new Promise(function(R,j){b.onload=R,b.onerror=j}),Rn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=hr(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,C(u),u):(o=a,(u=pi.get(f))&&(o=x({},a),Jf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,b=0;b<o.length;b++){var R=o[b];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function gg(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ns]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=t+b;var R=o.get(b);R?R.push(f):o.set(b,[f])}}return o}function xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Nb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Db(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=dr(o.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=pg(o),(u=pi.get(u))&&Qf(o,u),f=f.createElement("link"),C(f);var b=f;b._p=new Promise(function(R,j){b.onload=R,b.onerror=j}),Rn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function Ub(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&$f===0&&($f=62500*db());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>$f?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(Lb,t),ic=null,nc.call(t))}function Lb(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),f=a.get(b)||o,f===o&&a.set(null,u),a.set(b,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ob(t,n,a,o,u,f,b,R,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function _g(t,n,a,o,u,f,b,R,j,te,de,xe){return t=new Ob(t,n,a,b,j,te,de,xe,R),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),t}function bg(t){return t?(t=Vs,t):Vs}function yg(t,n,a,o,u,f){u=bg(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Da(t,o,n),a!==null&&(Xn(a,t,n),ro(a,t,n))}function Sg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){Sg(t,n),(t=t.alternate)&&Sg(t,n)}function Mg(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Xn(n,t,67108864),ed(t,67108864)}}function Eg(t){if(t.tag===13||t.tag===31){var n=ti();n=jr(n);var a=os(t,n);a!==null&&Xn(a,t,n),ed(t,n)}}var sc=!0;function Pb(t,n,a,o){var u=B.T;B.T=null;var f=k.p;try{k.p=2,td(t,n,a,o)}finally{k.p=f,B.T=u}}function zb(t,n,a,o){var u=B.T;B.T=null;var f=k.p;try{k.p=8,td(t,n,a,o)}finally{k.p=f,B.T=u}}function td(t,n,a,o){if(sc){var u=nd(o);if(u===null)jf(t,n,o,rc,a),Ag(t,o);else if(Bb(u,t,n,a,o))o.stopPropagation();else if(Ag(t,o),n&4&&-1<Ib.indexOf(t)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=Me(f.pendingLanes);if(b!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;b;){var j=1<<31-ze(b);R.entanglements[1]|=j,b&=~j}Pi(f),(Lt&6)===0&&(Gl=E()+500,Mo(0))}}break;case 31:case 13:R=os(f,2),R!==null&&Xn(R,f,2),Vl(),ed(f,2)}if(f=nd(o),f===null&&jf(t,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(t,n,o,null,a)}}function nd(t){return t=iu(t),id(t)}var rc=null;function id(t){if(rc=null,t=ya(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function Tg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pe:return 2;case Se:return 8;case fe:case Ke:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var ad=!1,Ga=null,Ha=null,Va=null,No=new Map,Do=new Map,Xa=[],Ib="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ag(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&Mg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Bb(t,n,a,o,u){switch(n){case"focusin":return Ga=Uo(Ga,t,n,a,o,u),!0;case"dragenter":return Ha=Uo(Ha,t,n,a,o,u),!0;case"mouseover":return Va=Uo(Va,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Uo(No.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,u)),!0}return!1}function wg(t){var n=ya(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Eg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Eg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=nd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=Sa(a),n!==null&&Mg(n),t.blockedOn=a,!1;n.shift()}return!0}function Rg(t,n,a){oc(t)&&a.delete(n)}function Fb(){ad=!1,Ga!==null&&oc(Ga)&&(Ga=null),Ha!==null&&oc(Ha)&&(Ha=null),Va!==null&&oc(Va)&&(Va=null),No.forEach(Rg),Do.forEach(Rg)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,ad||(ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fb)))}var cc=null;function Cg(t){cc!==t&&(cc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(id(o||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function pr(t){function n(j){return lc(j,t)}Ga!==null&&lc(Ga,t),Ha!==null&&lc(Ha,t),Va!==null&&lc(Va,t),No.forEach(n),Do.forEach(n);for(var a=0;a<Xa.length;a++){var o=Xa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)wg(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],b=u[_n]||null;if(typeof f=="function")b||Cg(a);else if(b){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[_n]||null)R=b.formAction;else if(id(u)!==null)continue}else R=b.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Cg(a)}}}function Ng(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sd(t){this._internalRoot=t}uc.prototype.render=sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();yg(a,o,t,n,null,null)},uc.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yg(t.current,2,null,t,null,null),Vl(),n[_i]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&wg(t)}};var Dg=e.version;if(Dg!=="19.2.3")throw Error(s(527,Dg,"19.2.3"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var kb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Ee=fc.inject(kb),Ae=fc}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Bm,f=Fm,b=km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=_g(t,1,!1,null,null,a,o,null,u,f,b,Ng),t[_i]=n.current,kf(t),new sd(n)},Oo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Bm,b=Fm,R=km,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=_g(t,1,!0,n,a??null,o,u,j,f,b,R,Ng),n.context=bg(null),a=n.current,o=ti(),o=jr(o),u=Na(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Pi(n),t[_i]=n.current,kf(t),new uc(n)},Oo.version="19.2.3",Oo}var jg;function Kb(){if(jg)return ld.exports;jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=Zb(),ld.exports}var Qb=Kb();const Jb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$b=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Gg=r=>{const e=$b(r);return e.charAt(0).toUpperCase()+e.slice(1)},Qx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),ey=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var ty={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ny=ye.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},g)=>ye.createElement("svg",{ref:g,...ty,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Qx("lucide",l),...!c&&!ey(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,v])=>ye.createElement(m,v)),...Array.isArray(c)?c:[c]]));const jt=(r,e)=>{const i=ye.forwardRef(({className:s,...l},c)=>ye.createElement(ny,{ref:c,iconNode:e,className:Qx(`lucide-${Jb(Gg(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Gg(r),i};const iy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Zo=jt("arrow-left",iy);const ay=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ci=jt("arrow-right",ay);const sy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ko=jt("arrow-up-right",sy);const ry=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],oy=jt("briefcase",ry);const ly=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],cy=jt("building-2",ly);const uy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kh=jt("check",uy);const fy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Jx=jt("chevron-down",fy);const dy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],hy=jt("copy",dy);const py=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],my=jt("cpu",py);const gy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xy=jt("external-link",gy);const vy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_y=jt("eye",vy);const by=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],yy=jt("github",by);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],My=jt("info",Sy);const Ey=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ty=jt("instagram",Ey);const Ay=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],wy=jt("layers",Ay);const Ry=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cy=jt("loader-circle",Ry);const Ny=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Hg=jt("mail",Ny);const Dy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Uy=jt("menu",Dy);const Ly=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Oy=jt("network",Ly);const Py=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],zy=jt("paperclip",Py);const Iy=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Vg=jt("phone",Iy);const By=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Dr=jt("quote",By);const Fy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ky=jt("search",Fy);const jy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gy=jt("shield-check",jy);const Hy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],jh=jt("star",Hy);const Vy=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Xy=jt("terminal",Vy);const Wy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],qy=jt("trash-2",Wy);const Yy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ds=jt("x",Yy);const Zy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ky=jt("zap",Zy),Vc=[{id:"01",folder:"01-ui-ux",title:"UI/UX Design",category:"Digital Capability",desc:"Crafting high-conversion interfaces that blend radical aesthetics with cognitive psychology to ensure seamless user journeys.",detailedDesc:"We deconstruct user behavior to reconstruct digital experiences. By merging data-driven insights with avant-garde aesthetics, we create interfaces that don't just look good—they perform. Every interaction is calculated, every pixel has a purpose.",alignRight:!1,video:"https://v.ftcdn.net/05/63/68/07/700_F_563680753_c1eGZf8z8A8y8E9z.mp4",image:"/01-ui-ux/cover.png",fileExt:".png"},{id:"02",folder:"02-app-dev",title:"App Development",category:"Digital Capability",desc:"Building robust, scalable, and secure mobile and web applications tailored to solve complex business challenges.",detailedDesc:"From native iOS/Android to cross-platform React Native solutions. We engineer applications that are built for scale, security, and speed. Our code is clean, modular, and ready for future integrations.",alignRight:!0,image:"/02-app-dev/cover.png",fileExt:".png"},{id:"03",folder:"03-brand-identity",title:"Brand Identity",category:"Digital Capability",desc:"Elevating brand authority through premium visual assets that command attention and establish market leadership.",detailedDesc:"A brand is not just a logo; it's a belief system. We craft visual identities that resonate on a subconscious level, turning customers into loyal advocates through consistent, high-impact visual storytelling.",alignRight:!1,image:"/03-brand-identity/cover.png",fileExt:".png"},{id:"04",folder:"04-motion-graphic",title:"Motion Graphic",category:"Digital Capability",desc:"Telling your brand story through high-fidelity motion graphics that capture the essence of your innovation.",detailedDesc:"Static is dead. We bring brands to life through fluid, kinetic typography and immersive motion design. We turn complex ideas into digestible, captivating visual narratives.",alignRight:!0,image:"/04-motion-graphic/cover.png",fileExt:".png"},{id:"05",folder:"05-ai-tools",title:"AI Tools Development",category:"Digital Capability",desc:"Integrating autonomous intelligence to automate workflows, predict user behavior, and drive unprecedented business efficiency.",detailedDesc:"The future is autonomous. We build custom AI solutions that streamline operations, predict market trends, and personalize user experiences in real-time.",alignRight:!1,image:"/05-ai-tools/cover.jpg",fileExt:".jpg"},{id:"06",folder:"06-social-media",title:"Social Media",category:"Digital Capability",desc:"Engineering strategic social presence through high-fidelity content systems that drive deep engagement and reinforce global brand dominance.",detailedDesc:"We don't just post; we dominate. Our social strategies are built on algorithmic understanding and high-fidelity content production that stops the scroll and drives engagement.",alignRight:!0,image:"/06-social-media/cover.png",fileExt:".png"},{id:"07",folder:"07-ecommerce",title:"E-Commerce",category:"Digital Capability",desc:"Constructing frictionless digital commerce ecosystems designed for maximum conversion and seamless cross-platform scalability.",detailedDesc:"We build digital storefronts that sell. Focusing on speed, security, and conversion rate optimization (CRO), we create shopping experiences that are as seamless as they are beautiful.",alignRight:!1,image:"/07-ecommerce/cover.png",fileExt:".png"},{id:"08",folder:"08-banner",title:"Platform Banner & Poster",category:"Digital Capability",desc:"Designing high-impact visual communications that command immediate attention across digital and physical platforms through elite art direction.",detailedDesc:"In a world of noise, clarity is king. We design promotional assets that cut through the clutter, delivering your message with precision and high-impact art direction.",alignRight:!0,image:"/08-banner/cover.png",fileExt:".png"},{id:"09",folder:"09-landing-page",title:"Landing Page",category:"Digital Capability",desc:"Building hyper-optimized, high-velocity entry points that combine persuasive storytelling with data-driven UX to maximize user acquisition.",detailedDesc:"First impressions are everything. We design landing pages that are visually stunning and ruthlessly effective at converting visitors into leads. Speed, story, and structure in perfect harmony.",alignRight:!1,image:"/09-landing-page/cover.jpg",fileExt:".jpg"},{id:"10",folder:"10-print",title:"Material Print Design",category:"Digital Capability",desc:"Extending brand authority into the physical realm through premium tactile assets that deliver a sophisticated and tangible brand experience.",detailedDesc:"Digital is fleeting; print is forever. We bring the same level of digital precision to physical assets, creating business cards, brochures, and packaging that feel premium to the touch.",alignRight:!0,image:"/10-print/cover.jpg",fileExt:".jpg"}],Qy=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],Jy=r=>{const e=r.target,i=e.src;if(e.getAttribute("data-tried-fallback")==="true"){if(i.endsWith(".jpg")){e.src=i.replace(".jpg",".jpeg"),e.setAttribute("data-tried-fallback","final");return}e.style.display="none";return}e.setAttribute("data-tried-fallback","true"),i.includes(".png")?e.src=i.replace(".png",".jpg"):i.includes(".jpg")?e.src=i.replace(".jpg",".png"):i.includes(".jpeg")?e.src=i.replace(".jpeg",".png"):e.style.display="none"};const Gh="182",$y=0,Xg=1,eS=2,Bc=1,tS=2,Ho=3,ts=0,Yn=1,ma=2,xa=0,Cr=1,Wg=2,qg=3,Yg=4,nS=5,ws=100,iS=101,aS=102,sS=103,rS=104,oS=200,lS=201,cS=202,uS=203,Xd=204,Wd=205,fS=206,dS=207,hS=208,pS=209,mS=210,gS=211,xS=212,vS=213,_S=214,qd=0,Yd=1,Zd=2,Ur=3,Kd=4,Qd=5,Jd=6,$d=7,$x=0,bS=1,yS=2,ki=0,ev=1,tv=2,nv=3,iv=4,av=5,sv=6,rv=7,ov=300,Us=301,Lr=302,eh=303,th=304,Kc=306,nh=1e3,ga=1001,ih=1002,Cn=1003,SS=1004,dc=1005,On=1006,dd=1007,Cs=1008,ai=1009,lv=1010,cv=1011,Xo=1012,Hh=1013,Hi=1014,Bi=1015,_a=1016,Vh=1017,Xh=1018,Wo=1020,uv=35902,fv=35899,dv=1021,hv=1022,Ri=1023,ba=1026,Ns=1027,pv=1028,Wh=1029,Or=1030,qh=1031,Yh=1033,Fc=33776,kc=33777,jc=33778,Gc=33779,ah=35840,sh=35841,rh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37488,dh=37489,hh=37490,ph=37491,mh=37808,gh=37809,xh=37810,vh=37811,_h=37812,bh=37813,yh=37814,Sh=37815,Mh=37816,Eh=37817,Th=37818,Ah=37819,wh=37820,Rh=37821,Ch=36492,Nh=36494,Dh=36495,Uh=36283,Lh=36284,Oh=36285,Ph=36286,MS=3200,mv=0,ES=1,$a="",gi="srgb",Pr="srgb-linear",Xc="linear",kt="srgb",mr=7680,Zg=519,TS=512,AS=513,wS=514,Zh=515,RS=516,CS=517,Kh=518,NS=519,Kg=35044,Qg="300 es",Fi=2e3,Wc=2001;function gv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function DS(){const r=qc("canvas");return r.style.display="block",r}const Jg={};function $g(...r){const e="THREE."+r.shift();console.log(e,...r)}function at(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Rt(...r){const e="THREE."+r.shift();console.error(e,...r)}function qo(...r){const e=r.join(" ");e in Jg||(Jg[e]=!0,at(...r))}function US(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,zh=180/Math.PI;function Qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function LS(r,e){return(r%e+e)%e}function pd(r,e,i){return(1-i)*r+i*e}function Po(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,i=0){Ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let g=s[l+0],m=s[l+1],v=s[l+2],x=s[l+3],y=c[d+0],M=c[d+1],A=c[d+2],T=c[d+3];if(h<=0){e[i+0]=g,e[i+1]=m,e[i+2]=v,e[i+3]=x;return}if(h>=1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=T;return}if(x!==T||g!==y||m!==M||v!==A){let S=g*y+m*M+v*A+x*T;S<0&&(y=-y,M=-M,A=-A,T=-T,S=-S);let _=1-h;if(S<.9995){const U=Math.acos(S),D=Math.sin(U);_=Math.sin(_*U)/D,h=Math.sin(h*U)/D,g=g*_+y*h,m=m*_+M*h,v=v*_+A*h,x=x*_+T*h}else{g=g*_+y*h,m=m*_+M*h,v=v*_+A*h,x=x*_+T*h;const U=1/Math.sqrt(g*g+m*m+v*v+x*x);g*=U,m*=U,v*=U,x*=U}}e[i]=g,e[i+1]=m,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],g=s[l+1],m=s[l+2],v=s[l+3],x=c[d],y=c[d+1],M=c[d+2],A=c[d+3];return e[i]=h*A+v*x+g*M-m*y,e[i+1]=g*A+v*y+m*x-h*M,e[i+2]=m*A+v*M+h*y-g*x,e[i+3]=v*A-h*x-g*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,g=Math.sin,m=h(s/2),v=h(l/2),x=h(c/2),y=g(s/2),M=g(l/2),A=g(c/2);switch(d){case"XYZ":this._x=y*v*x+m*M*A,this._y=m*M*x-y*v*A,this._z=m*v*A+y*M*x,this._w=m*v*x-y*M*A;break;case"YXZ":this._x=y*v*x+m*M*A,this._y=m*M*x-y*v*A,this._z=m*v*A-y*M*x,this._w=m*v*x+y*M*A;break;case"ZXY":this._x=y*v*x-m*M*A,this._y=m*M*x+y*v*A,this._z=m*v*A+y*M*x,this._w=m*v*x-y*M*A;break;case"ZYX":this._x=y*v*x-m*M*A,this._y=m*M*x+y*v*A,this._z=m*v*A-y*M*x,this._w=m*v*x+y*M*A;break;case"YZX":this._x=y*v*x+m*M*A,this._y=m*M*x+y*v*A,this._z=m*v*A-y*M*x,this._w=m*v*x-y*M*A;break;case"XZY":this._x=y*v*x-m*M*A,this._y=m*M*x-y*v*A,this._z=m*v*A+y*M*x,this._w=m*v*x+y*M*A;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],g=i[9],m=i[2],v=i[6],x=i[10],y=s+h+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-g)*M,this._y=(c-m)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(v-g)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(g+v)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(c+m)/M,this._y=(g+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,g=i._y,m=i._z,v=i._w;return this._x=s*v+d*h+l*m-c*g,this._y=l*v+d*g+c*h-s*m,this._z=c*v+d*m+s*g-l*h,this._w=d*v-s*h-l*g-c*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let g=1-i;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);g=Math.sin(g*m)/v,i=Math.sin(i*m)/v,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ex.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ex.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,g=e.w,m=2*(d*l-h*s),v=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+g*m+d*x-h*v,this.y=s+g*v+h*m-c*x,this.z=l+g*x+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,g=i.z;return this.x=l*g-c*h,this.y=c*d-s*g,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new $,ex=new Jo;class ft{constructor(e,i,s,l,c,d,h,g,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,g,m)}set(e,i,s,l,c,d,h,g,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=g,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],v=s[4],x=s[7],y=s[2],M=s[5],A=s[8],T=l[0],S=l[3],_=l[6],U=l[1],D=l[4],P=l[7],I=l[2],F=l[5],z=l[8];return c[0]=d*T+h*U+g*I,c[3]=d*S+h*D+g*F,c[6]=d*_+h*P+g*z,c[1]=m*T+v*U+x*I,c[4]=m*S+v*D+x*F,c[7]=m*_+v*P+x*z,c[2]=y*T+M*U+A*I,c[5]=y*S+M*D+A*F,c[8]=y*_+M*P+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],m=e[7],v=e[8];return i*d*v-i*h*m-s*c*v+s*h*g+l*c*m-l*d*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],m=e[7],v=e[8],x=v*d-h*m,y=h*g-v*c,M=m*c-d*g,A=i*x+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(l*m-v*s)*T,e[2]=(h*s-l*d)*T,e[3]=y*T,e[4]=(v*i-l*g)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(s*g-m*i)*T,e[8]=(d*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const g=Math.cos(c),m=Math.sin(c);return this.set(s*g,s*m,-s*(g*d+m*h)+d+e,-l*m,l*g,-l*(-m*d+g*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(gd.makeScale(e,i)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new ft,tx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pr]:{primaries:e,whitePoint:s,transfer:Xc,toXYZ:tx,fromXYZ:nx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:tx,fromXYZ:nx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Tt=OS();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gr;class PS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=qc("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=va(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(xd(l[d].image)):c.push(xd(l[d]))}else c=xd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function xd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let IS=0;const vd=new $;class In extends Ir{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ga,l=ga,c=On,d=Cs,h=Ri,g=ai,m=In.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Qo(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ov;In.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,m=g[0],v=g[4],x=g[8],y=g[1],M=g[5],A=g[9],T=g[2],S=g[6],_=g[10];if(Math.abs(v-y)<.01&&Math.abs(x-T)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+T)<.1&&Math.abs(A+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,P=(M+1)/2,I=(_+1)/2,F=(v+y)/4,z=(x+T)/4,Z=(A+S)/4;return D>P&&D>I?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=F/s,c=z/s):P>I?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=F/l,c=Z/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=Z/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-A)*(S-A)+(x-T)*(x-T)+(y-v)*(y-v));return Math.abs(U)<.001&&(U=1),this.x=(S-A)/U,this.y=(x-T)/U,this.z=(y-v)/U,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Ir{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new In(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Qh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends BS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class xv extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ei):Ei.fromBufferAttribute(c,d),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),pc.subVectors(this.max,zo),xr.subVectors(e.a,zo),vr.subVectors(e.b,zo),_r.subVectors(e.c,zo),qa.subVectors(vr,xr),Ya.subVectors(_r,vr),bs.subVectors(xr,_r);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-bs.z,bs.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,bs.z,0,-bs.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-bs.y,bs.x,0];return!_d(i,xr,vr,_r,pc)||(i=[1,0,0,0,1,0,0,0,1],!_d(i,xr,vr,_r,pc))?!1:(mc.crossVectors(qa,Ya),i=[mc.x,mc.y,mc.z],_d(i,xr,vr,_r,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,hc=new $o,xr=new $,vr=new $,_r=new $,qa=new $,Ya=new $,bs=new $,zo=new $,pc=new $,mc=new $,ys=new $;function _d(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ys.fromArray(r,c);const h=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),g=e.dot(ys),m=i.dot(ys),v=s.dot(ys);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>h)return!1}return!0}const kS=new $o,Io=new $,bd=new $;class Qc{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):kS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(bd)),this.expandByPoint(Io.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new $,yd=new $,gc=new $,Za=new $,Sd=new $,xc=new $,Md=new $;class vv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){yd.copy(e).add(i).multiplyScalar(.5),gc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(yd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(gc),h=Za.dot(this.direction),g=-Za.dot(gc),m=Za.lengthSq(),v=Math.abs(1-d*d);let x,y,M,A;if(v>0)if(x=d*g-h,y=d*h-g,A=c*v,x>=0)if(y>=-A)if(y<=A){const T=1/v;x*=T,y*=T,M=x*(x+d*y+2*h)+y*(d*x+y+2*g)+m}else y=c,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*g)+m;else y=-c,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*g)+m;else y<=-A?(x=Math.max(0,-(-d*c+h)),y=x>0?-c:Math.min(Math.max(-c,-g),c),M=-x*x+y*(y+2*g)+m):y<=A?(x=0,y=Math.min(Math.max(-c,-g),c),M=y*(y+2*g)+m):(x=Math.max(0,-(d*c+h)),y=x>0?c:Math.min(Math.max(-c,-g),c),M=-x*x+y*(y+2*g)+m);else y=d>0?-c:c,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(yd).addScaledVector(gc,y),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,g;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),v>=0?(c=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,g=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,g=(e.min.z-y.z)*x),s>g||h>l)||((h>s||s!==s)&&(s=h),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,c){Sd.subVectors(i,e),xc.subVectors(s,e),Md.crossVectors(Sd,xc);let d=this.direction.dot(Md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const g=h*this.direction.dot(xc.crossVectors(Za,xc));if(g<0)return null;const m=h*this.direction.dot(Sd.cross(Za));if(m<0||g+m>d)return null;const v=-h*Za.dot(Md);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,s,l,c,d,h,g,m,v,x,y,M,A,T,S){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,g,m,v,x,y,M,A,T,S)}set(e,i,s,l,c,d,h,g,m,v,x,y,M,A,T,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=g,_[2]=m,_[6]=v,_[10]=x,_[14]=y,_[3]=M,_[7]=A,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/br.setFromMatrixColumn(e,0).length(),c=1/br.setFromMatrixColumn(e,1).length(),d=1/br.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(l),m=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=d*v,M=d*x,A=h*v,T=h*x;i[0]=g*v,i[4]=-g*x,i[8]=m,i[1]=M+A*m,i[5]=y-T*m,i[9]=-h*g,i[2]=T-y*m,i[6]=A+M*m,i[10]=d*g}else if(e.order==="YXZ"){const y=g*v,M=g*x,A=m*v,T=m*x;i[0]=y+T*h,i[4]=A*h-M,i[8]=d*m,i[1]=d*x,i[5]=d*v,i[9]=-h,i[2]=M*h-A,i[6]=T+y*h,i[10]=d*g}else if(e.order==="ZXY"){const y=g*v,M=g*x,A=m*v,T=m*x;i[0]=y-T*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*v,i[9]=T-y*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const y=d*v,M=d*x,A=h*v,T=h*x;i[0]=g*v,i[4]=A*m-M,i[8]=y*m+T,i[1]=g*x,i[5]=T*m+y,i[9]=M*m-A,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const y=d*g,M=d*m,A=h*g,T=h*m;i[0]=g*v,i[4]=T-y*x,i[8]=A*x+M,i[1]=x,i[5]=d*v,i[9]=-h*v,i[2]=-m*v,i[6]=M*x+A,i[10]=y-T*x}else if(e.order==="XZY"){const y=d*g,M=d*m,A=h*g,T=h*m;i[0]=g*v,i[4]=-x,i[8]=m*v,i[1]=y*x+T,i[5]=d*v,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*v,i[10]=T*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,GS)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ka.crossVectors(s,ni),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ka.crossVectors(s,ni)),Ka.normalize(),vc.crossVectors(ni,Ka),l[0]=Ka.x,l[4]=vc.x,l[8]=ni.x,l[1]=Ka.y,l[5]=vc.y,l[9]=ni.y,l[2]=Ka.z,l[6]=vc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],v=s[1],x=s[5],y=s[9],M=s[13],A=s[2],T=s[6],S=s[10],_=s[14],U=s[3],D=s[7],P=s[11],I=s[15],F=l[0],z=l[4],Z=l[8],w=l[12],N=l[1],H=l[5],ie=l[9],ae=l[13],he=l[2],oe=l[6],B=l[10],k=l[14],J=l[3],_e=l[7],ve=l[11],O=l[15];return c[0]=d*F+h*N+g*he+m*J,c[4]=d*z+h*H+g*oe+m*_e,c[8]=d*Z+h*ie+g*B+m*ve,c[12]=d*w+h*ae+g*k+m*O,c[1]=v*F+x*N+y*he+M*J,c[5]=v*z+x*H+y*oe+M*_e,c[9]=v*Z+x*ie+y*B+M*ve,c[13]=v*w+x*ae+y*k+M*O,c[2]=A*F+T*N+S*he+_*J,c[6]=A*z+T*H+S*oe+_*_e,c[10]=A*Z+T*ie+S*B+_*ve,c[14]=A*w+T*ae+S*k+_*O,c[3]=U*F+D*N+P*he+I*J,c[7]=U*z+D*H+P*oe+I*_e,c[11]=U*Z+D*ie+P*B+I*ve,c[15]=U*w+D*ae+P*k+I*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],g=e[9],m=e[13],v=e[2],x=e[6],y=e[10],M=e[14],A=e[3],T=e[7],S=e[11],_=e[15],U=g*M-m*y,D=h*M-m*x,P=h*y-g*x,I=d*M-m*v,F=d*y-g*v,z=d*x-h*v;return i*(T*U-S*D+_*P)-s*(A*U-S*I+_*F)+l*(A*D-T*I+_*z)-c*(A*P-T*F+S*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],g=e[6],m=e[7],v=e[8],x=e[9],y=e[10],M=e[11],A=e[12],T=e[13],S=e[14],_=e[15],U=x*S*m-T*y*m+T*g*M-h*S*M-x*g*_+h*y*_,D=A*y*m-v*S*m-A*g*M+d*S*M+v*g*_-d*y*_,P=v*T*m-A*x*m+A*h*M-d*T*M-v*h*_+d*x*_,I=A*x*g-v*T*g-A*h*y+d*T*y+v*h*S-d*x*S,F=i*U+s*D+l*P+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=U*z,e[1]=(T*y*c-x*S*c-T*l*M+s*S*M+x*l*_-s*y*_)*z,e[2]=(h*S*c-T*g*c+T*l*m-s*S*m-h*l*_+s*g*_)*z,e[3]=(x*g*c-h*y*c-x*l*m+s*y*m+h*l*M-s*g*M)*z,e[4]=D*z,e[5]=(v*S*c-A*y*c+A*l*M-i*S*M-v*l*_+i*y*_)*z,e[6]=(A*g*c-d*S*c-A*l*m+i*S*m+d*l*_-i*g*_)*z,e[7]=(d*y*c-v*g*c+v*l*m-i*y*m-d*l*M+i*g*M)*z,e[8]=P*z,e[9]=(A*x*c-v*T*c-A*s*M+i*T*M+v*s*_-i*x*_)*z,e[10]=(d*T*c-A*h*c+A*s*m-i*T*m-d*s*_+i*h*_)*z,e[11]=(v*h*c-d*x*c-v*s*m+i*x*m+d*s*M-i*h*M)*z,e[12]=I*z,e[13]=(v*T*l-A*x*l+A*s*y-i*T*y-v*s*S+i*x*S)*z,e[14]=(A*h*l-d*T*l-A*s*g+i*T*g+d*s*S-i*h*S)*z,e[15]=(d*x*l-v*h*l+v*s*g-i*x*g-d*s*y+i*h*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,g=e.z,m=c*d,v=c*h;return this.set(m*d+s,m*h-l*g,m*g+l*h,0,m*h+l*g,v*h+s,v*g-l*d,0,m*g-l*h,v*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,g=i._w,m=c+c,v=d+d,x=h+h,y=c*m,M=c*v,A=c*x,T=d*v,S=d*x,_=h*x,U=g*m,D=g*v,P=g*x,I=s.x,F=s.y,z=s.z;return l[0]=(1-(T+_))*I,l[1]=(M+P)*I,l[2]=(A-D)*I,l[3]=0,l[4]=(M-P)*F,l[5]=(1-(y+_))*F,l[6]=(S+U)*F,l[7]=0,l[8]=(A+D)*z,l[9]=(S-U)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=br.set(l[0],l[1],l[2]).length();const d=br.set(l[4],l[5],l[6]).length(),h=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const m=1/c,v=1/d,x=1/h;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,i.setFromRotationMatrix(Ti),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Fi,g=!1){const m=this.elements,v=2*c/(i-e),x=2*c/(s-l),y=(i+e)/(i-e),M=(s+l)/(s-l);let A,T;if(g)A=c/(d-c),T=d*c/(d-c);else if(h===Fi)A=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Wc)A=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Fi,g=!1){const m=this.elements,v=2/(i-e),x=2/(s-l),y=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,T;if(g)A=1/(d-c),T=d/(d-c);else if(h===Fi)A=-2/(d-c),T=-(d+c)/(d-c);else if(h===Wc)A=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const br=new $,Ti=new Jt,jS=new $(0,0,0),GS=new $(1,1,1),Ka=new $,vc=new $,ni=new $,ix=new Jt,ax=new Jo;class Vi{constructor(e=0,i=0,s=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],g=l[1],m=l[5],v=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ix,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ax.setFromEuler(this),this.setFromQuaternion(ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const sx=new $,yr=new Jo,da=new Jt,_c=new $,Bo=new $,VS=new $,XS=new Jo,rx=new $(1,0,0),ox=new $(0,1,0),lx=new $(0,0,1),cx={type:"added"},WS={type:"removed"},Sr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Bn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new $,i=new Vi,s=new Jo,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(rx,e)}rotateY(e){return this.rotateOnAxis(ox,e)}rotateZ(e){return this.rotateOnAxis(lx,e)}translateOnAxis(e,i){return sx.copy(e).applyQuaternion(this.quaternion),this.position.add(sx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(rx,e)}translateY(e){return this.translateOnAxis(ox,e)}translateZ(e){return this.translateOnAxis(lx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Bo,_c,this.up):da.lookAt(_c,Bo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cx),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(WS),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cx),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const x=g[m];c(e.shapes,x)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(c(e.materials,this.material[g]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];l.animations.push(c(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const g=[];for(const m in h){const v=h[m];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new $(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new $,ha=new $,Td=new $,pa=new $,Mr=new $,Er=new $,ux=new $,Ad=new $,wd=new $,Rd=new $,Cd=new an,Nd=new an,Dd=new an;class wi{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ai.subVectors(l,i),ha.subVectors(s,i),Td.subVectors(e,i);const d=Ai.dot(Ai),h=Ai.dot(ha),g=Ai.dot(Td),m=ha.dot(ha),v=ha.dot(Td),x=d*m-h*h;if(x===0)return c.set(0,0,0),null;const y=1/x,M=(m*g-h*v)*y,A=(d*v-h*g)*y;return c.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,d,h,g){return this.getBarycoord(e,i,s,l,pa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,pa.x),g.addScaledVector(d,pa.y),g.addScaledVector(h,pa.z),g)}static getInterpolatedAttribute(e,i,s,l,c,d){return Cd.setScalar(0),Nd.setScalar(0),Dd.setScalar(0),Cd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,s),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(Nd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,i,s,l){return Ai.subVectors(s,i),ha.subVectors(e,i),Ai.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ai.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),Er.subVectors(c,s),Ad.subVectors(e,s);const g=Mr.dot(Ad),m=Er.dot(Ad);if(g<=0&&m<=0)return i.copy(s);wd.subVectors(e,l);const v=Mr.dot(wd),x=Er.dot(wd);if(v>=0&&x<=v)return i.copy(l);const y=g*x-v*m;if(y<=0&&g>=0&&v<=0)return d=g/(g-v),i.copy(s).addScaledVector(Mr,d);Rd.subVectors(e,c);const M=Mr.dot(Rd),A=Er.dot(Rd);if(A>=0&&M<=A)return i.copy(c);const T=M*m-g*A;if(T<=0&&m>=0&&A<=0)return h=m/(m-A),i.copy(s).addScaledVector(Er,h);const S=v*A-M*x;if(S<=0&&x-v>=0&&M-A>=0)return ux.subVectors(c,l),h=(x-v)/(x-v+(M-A)),i.copy(l).addScaledVector(ux,h);const _=1/(S+T+y);return d=T*_,h=y*_,i.copy(s).addScaledVector(Mr,d).addScaledVector(Er,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Ud(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class yt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=LS(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ud(d,c,e+1/3),this.g=Ud(d,c,e),this.b=Ud(d,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const s=bv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Tt.workingToColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let g,m;const v=(h+d)/2;if(h===d)g=0,m=0;else{const x=d-h;switch(m=v<=.5?x/(d+h):x/(2-d-h),d){case s:g=(l-c)/x+(l<c?6:0);break;case l:g=(c-s)/x+2;break;case c:g=(s-l)/x+4;break}g/=6}return e.h=g,e.s=m,e.l=v,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=gi){Tt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(bc);const s=pd(Qa.h,bc.h,i),l=pd(Qa.s,bc.s,i),c=pd(Qa.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new yt;yt.NAMES=bv;let qS=0;class Br extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Cr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xd&&(s.blendSrc=this.blendSrc),this.blendDst!==Wd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const g=c[h];delete g.metadata,d.push(g)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jh extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new $,yc=new Ct;let YS=0;class Gi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Kg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kg&&(e.usage=this.usage),e}}class yv extends Gi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Sv extends Gi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fn extends Gi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let ZS=0;const mi=new Jt,Ld=new Bn,Tr=new $,ii=new $o,Fo=new $o,vn=new $;class xi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Sv:yv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,s){return mi.makeTranslation(e,i,s),this.applyMatrix4(mi),this}scale(e,i,s){return mi.makeScale(e,i,s),this.applyMatrix4(mi),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ii.min,Fo.min),ii.expandByPoint(vn),vn.addVectors(ii.max,Fo.max),ii.expandByPoint(vn)):(ii.expandByPoint(Fo.min),ii.expandByPoint(Fo.max))}ii.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],g=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)vn.fromBufferAttribute(h,m),g&&(Tr.fromBufferAttribute(e,m),vn.add(Tr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let Z=0;Z<s.count;Z++)h[Z]=new $,g[Z]=new $;const m=new $,v=new $,x=new $,y=new Ct,M=new Ct,A=new Ct,T=new $,S=new $;function _(Z,w,N){m.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),y.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,N),v.sub(m),x.sub(m),M.sub(y),A.sub(y);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(T.copy(v).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),h[Z].add(T),h[w].add(T),h[N].add(T),g[Z].add(S),g[w].add(S),g[N].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],H=N.start,ie=N.count;for(let ae=H,he=H+ie;ae<he;ae+=3)_(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const D=new $,P=new $,I=new $,F=new $;function z(Z){I.fromBufferAttribute(l,Z),F.copy(I);const w=h[Z];D.copy(w),D.sub(I.multiplyScalar(I.dot(w))).normalize(),P.crossVectors(F,w);const H=P.dot(g[Z])<0?-1:1;d.setXYZW(Z,D.x,D.y,D.z,H)}for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],H=N.start,ie=N.count;for(let ae=H,he=H+ie;ae<he;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new $,c=new $,d=new $,h=new $,g=new $,m=new $,v=new $,x=new $;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.add(v),g.add(v),m.add(v),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(T,g.x,g.y,g.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,g){const m=h.array,v=h.itemSize,x=h.normalized,y=new m.constructor(g.length*v);let M=0,A=0;for(let T=0,S=g.length;T<S;T++){h.isInterleavedBufferAttribute?M=g[T]*h.data.stride+h.offset:M=g[T]*v;for(let _=0;_<v;_++)y[A++]=m[M++]}return new Gi(y,v,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const h in l){const g=l[h],m=e(g,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const g=[],m=c[h];for(let v=0,x=m.length;v<x;v++){const y=m[v],M=e(y,s);g.push(M)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(l[g]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let y=0,M=x.length;y<M;y++)v.push(x[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fx=new Jt,Ss=new vv,Sc=new Qc,dx=new $,Mc=new $,Ec=new $,Tc=new $,Od=new $,Ac=new $,hx=new $,wc=new $;class Ni extends Bn{constructor(e=new xi,i=new Jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ac.set(0,0,0);for(let g=0,m=c.length;g<m;g++){const v=h[g],x=c[g];v!==0&&(Od.fromBufferAttribute(x,e),d?Ac.addScaledVector(Od,v):Ac.addScaledVector(Od.sub(i),v))}i.add(Ac)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),Ss.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Sc,dx)===null||Ss.origin.distanceToSquared(dx)>(e.far-e.near)**2))&&(fx.copy(c).invert(),Ss.copy(e.ray).applyMatrix4(fx),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ss)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,g=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const S=y[A],_=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const F=h.getX(P),z=h.getX(P+1),Z=h.getX(P+2);l=Rc(this,_,e,s,m,v,x,F,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=A,_=T;S<_;S+=3){const U=h.getX(S),D=h.getX(S+1),P=h.getX(S+2);l=Rc(this,d,e,s,m,v,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const S=y[A],_=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(g.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const F=P,z=P+1,Z=P+2;l=Rc(this,_,e,s,m,v,x,F,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(g.count,M.start+M.count);for(let S=A,_=T;S<_;S+=3){const U=S,D=S+1,P=S+2;l=Rc(this,d,e,s,m,v,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function KS(r,e,i,s,l,c,d,h){let g;if(e.side===Yn?g=s.intersectTriangle(d,c,l,!0,h):g=s.intersectTriangle(l,c,d,e.side===ts,h),g===null)return null;wc.copy(h),wc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(wc);return m<i.near||m>i.far?null:{distance:m,point:wc.clone(),object:r}}function Rc(r,e,i,s,l,c,d,h,g,m){r.getVertexPosition(h,Mc),r.getVertexPosition(g,Ec),r.getVertexPosition(m,Tc);const v=KS(r,e,i,s,Mc,Ec,Tc,hx);if(v){const x=new $;wi.getBarycoord(hx,Mc,Ec,Tc,x),l&&(v.uv=wi.getInterpolatedAttribute(l,h,g,m,x,new Ct)),c&&(v.uv1=wi.getInterpolatedAttribute(c,h,g,m,x,new Ct)),d&&(v.normal=wi.getInterpolatedAttribute(d,h,g,m,x,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:g,c:m,normal:new $,materialIndex:0};wi.getNormal(Mc,Ec,Tc,y.normal),v.face=y,v.barycoord=x}return v}class el extends xi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],m=[],v=[],x=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(x,2));function A(T,S,_,U,D,P,I,F,z,Z,w){const N=P/z,H=I/Z,ie=P/2,ae=I/2,he=F/2,oe=z+1,B=Z+1;let k=0,J=0;const _e=new $;for(let ve=0;ve<B;ve++){const O=ve*H-ae;for(let ne=0;ne<oe;ne++){const ge=ne*N-ie;_e[T]=ge*U,_e[S]=O*D,_e[_]=he,m.push(_e.x,_e.y,_e.z),_e[T]=0,_e[S]=0,_e[_]=F>0?1:-1,v.push(_e.x,_e.y,_e.z),x.push(ne/z),x.push(1-ve/Z),k+=1}}for(let ve=0;ve<Z;ve++)for(let O=0;O<z;O++){const ne=y+O+oe*ve,ge=y+O+oe*(ve+1),Te=y+(O+1)+oe*(ve+1),Fe=y+(O+1)+oe*ve;g.push(ne,ge,Fe),g.push(ge,Te,Fe),J+=6}h.addGroup(M,J,w),M+=J,y+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(r){const e={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)e[l]=s[l]}return e}function QS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Mv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const JS={clone:zr,merge:zn};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Ev extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new $,px=new Ct,mx=new Ct;class qn extends Ev{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,px,mx),i.subVectors(mx,px)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(hd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/m,l*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,wr=1;class t1 extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(Ar,wr,e,i);l.layers=this.layers,this.add(l);const c=new qn(Ar,wr,e,i);c.layers=this.layers,this.add(c);const d=new qn(Ar,wr,e,i);d.layers=this.layers,this.add(d);const h=new qn(Ar,wr,e,i);h.layers=this.layers,this.add(h);const g=new qn(Ar,wr,e,i);g.layers=this.layers,this.add(g);const m=new qn(Ar,wr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,g]=i;for(const m of i)this.remove(m);if(e===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,g,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,g),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(x,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Tv extends In{constructor(e=[],i=Us,s,l,c,d,h,g,m,v){super(e,i,s,l,c,d,h,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new el(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Ni(l,c),h=i.minFilter;return i.minFilter===Cs&&(i.minFilter=On),new t1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Cc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&y>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return h!==null&&(h.visible=l!==null),g!==null&&(g.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Cc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class wv extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class i1 extends In{constructor(e=null,i=1,s=1,l,c,d,h,g,m=Cn,v=Cn,x,y){super(null,d,h,g,m,v,l,c,x,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new $,a1=new $,s1=new ft;class As{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=zd.subVectors(s,i).cross(a1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(zd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||s1.getNormalMatrix(e),l=this.coplanarPoint(zd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Qc,r1=new Ct(.5,.5),Nc=new $;class $h{constructor(e=new As,i=new As,s=new As,l=new As,c=new As,d=new As){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Fi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],g=c[2],m=c[3],v=c[4],x=c[5],y=c[6],M=c[7],A=c[8],T=c[9],S=c[10],_=c[11],U=c[12],D=c[13],P=c[14],I=c[15];if(l[0].setComponents(m-d,M-v,_-A,I-U).normalize(),l[1].setComponents(m+d,M+v,_+A,I+U).normalize(),l[2].setComponents(m+h,M+x,_+T,I+D).normalize(),l[3].setComponents(m-h,M-x,_-T,I-D).normalize(),s)l[4].setComponents(g,y,S,P).normalize(),l[5].setComponents(m-g,M-y,_-S,I-P).normalize();else if(l[4].setComponents(m-g,M-y,_-S,I-P).normalize(),i===Fi)l[5].setComponents(m+g,M+y,_+S,I+P).normalize();else if(i===Wc)l[5].setComponents(g,y,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const i=r1.distanceTo(e.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rv extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new $,Zc=new $,gx=new Jt,ko=new vv,Dc=new Qc,Id=new $,xx=new $;class o1 extends Bn{constructor(e=new xi,i=new Rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Yc.fromBufferAttribute(i,l-1),Zc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new Fn(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,e.ray.intersectsSphere(Dc)===!1)return;gx.copy(l).invert(),ko.copy(e.ray).applyMatrix4(gx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=h*h,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=m){const _=v.getX(T),U=v.getX(T+1),D=Uc(this,e,ko,g,_,U,T);D&&i.push(D)}if(this.isLineLoop){const T=v.getX(A-1),S=v.getX(M),_=Uc(this,e,ko,g,T,S,A-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=m){const _=Uc(this,e,ko,g,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Uc(this,e,ko,g,A-1,M,A-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Uc(r,e,i,s,l,c,d){const h=r.geometry.attributes.position;if(Yc.fromBufferAttribute(h,l),Zc.fromBufferAttribute(h,c),i.distanceSqToSegment(Yc,Zc,Id,xx)>s)return;Id.applyMatrix4(r.matrixWorld);const m=e.ray.origin.distanceTo(Id);if(!(m<e.near||m>e.far))return{distance:m,point:xx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const vx=new $,_x=new $;class l1 extends o1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)vx.fromBufferAttribute(i,l),_x.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+vx.distanceTo(_x);e.setAttribute("lineDistance",new Fn(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yo extends In{constructor(e,i,s=Hi,l,c,d,h=Cn,g=Cn,m,v=ba,x=1){if(v!==ba&&v!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:x};super(y,l,c,d,h,g,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class c1 extends Yo{constructor(e,i=Hi,s=Us,l,c,d=Cn,h=Cn,g,m=ba){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,h,g,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jc extends xi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),g=Math.floor(l),m=h+1,v=g+1,x=e/h,y=i/g,M=[],A=[],T=[],S=[];for(let _=0;_<v;_++){const U=_*y-d;for(let D=0;D<m;D++){const P=D*x-c;A.push(P,-U,0),T.push(0,0,1),S.push(D/h),S.push(1-_/g)}}for(let _=0;_<g;_++)for(let U=0;U<h;U++){const D=U+m*_,P=U+m*(_+1),I=U+1+m*(_+1),F=U+1+m*_;M.push(D,P,F),M.push(P,I,F)}this.setIndex(M),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $c extends xi{constructor(e=1,i=.4,s=64,l=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:c,q:d},s=Math.floor(s),l=Math.floor(l);const h=[],g=[],m=[],v=[],x=new $,y=new $,M=new $,A=new $,T=new $,S=new $,_=new $;for(let D=0;D<=s;++D){const P=D/s*c*Math.PI*2;U(P,c,d,e,M),U(P+.01,c,d,e,A),S.subVectors(A,M),_.addVectors(A,M),T.crossVectors(S,_),_.crossVectors(T,S),T.normalize(),_.normalize();for(let I=0;I<=l;++I){const F=I/l*Math.PI*2,z=-i*Math.cos(F),Z=i*Math.sin(F);x.x=M.x+(z*_.x+Z*T.x),x.y=M.y+(z*_.y+Z*T.y),x.z=M.z+(z*_.z+Z*T.z),g.push(x.x,x.y,x.z),y.subVectors(x,M).normalize(),m.push(y.x,y.y,y.z),v.push(D/s),v.push(I/l)}}for(let D=1;D<=s;D++)for(let P=1;P<=l;P++){const I=(l+1)*(D-1)+(P-1),F=(l+1)*D+(P-1),z=(l+1)*D+P,Z=(l+1)*(D-1)+P;h.push(I,F,Z),h.push(F,z,Z)}this.setIndex(h),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(v,2));function U(D,P,I,F,z){const Z=Math.cos(D),w=Math.sin(D),N=I/P*D,H=Math.cos(N);z.x=F*(2+H)*.5*Z,z.y=F*(2+H)*w*.5,z.z=F*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class u1 extends xi{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],s=new Set,l=new $,c=new $;if(e.index!==null){const d=e.attributes.position,h=e.index;let g=e.groups;g.length===0&&(g=[{start:0,count:h.count,materialIndex:0}]);for(let m=0,v=g.length;m<v;++m){const x=g[m],y=x.start,M=x.count;for(let A=y,T=y+M;A<T;A+=3)for(let S=0;S<3;S++){const _=h.getX(A+S),U=h.getX(A+(S+1)%3);l.fromBufferAttribute(d,_),c.fromBufferAttribute(d,U),bx(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const d=e.attributes.position;for(let h=0,g=d.count/3;h<g;h++)for(let m=0;m<3;m++){const v=3*h+m,x=3*h+(m+1)%3;l.fromBufferAttribute(d,v),c.fromBufferAttribute(d,x),bx(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Fn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function bx(r,e,i){const s=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class f1 extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class d1 extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mv,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h1 extends d1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class p1 extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m1 extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nv extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Bd=new Jt,yx=new $,Sx=new $;class g1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;yx.setFromMatrixPosition(e.matrixWorld),i.position.copy(yx),Sx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Sx),i.updateMatrixWorld(),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x1 extends g1{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Mx extends Nv{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new x1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Dv extends Ev{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,g=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class v1 extends Nv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ex(r,e,i,s){const l=b1(s);switch(i){case dv:return r*e;case pv:return r*e/l.components*l.byteLength;case Wh:return r*e/l.components*l.byteLength;case Or:return r*e*2/l.components*l.byteLength;case qh:return r*e*2/l.components*l.byteLength;case hv:return r*e*3/l.components*l.byteLength;case Ri:return r*e*4/l.components*l.byteLength;case Yh:return r*e*4/l.components*l.byteLength;case Fc:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(r,16)*Math.max(e,8)/4;case ah:case rh:return Math.max(r,8)*Math.max(e,8)/2;case lh:case ch:case fh:case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uh:case hh:case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Nh:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Uh:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Oh:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function b1(r){switch(r){case ai:case lv:return{byteLength:1,components:1};case Xo:case cv:case _a:return{byteLength:2,components:1};case Vh:case Xh:return{byteLength:2,components:4};case Hi:case Hh:case Bi:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);function Uv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function y1(r){const e=new WeakMap;function i(h,g){const m=h.array,v=h.usage,x=m.byteLength,y=r.createBuffer();r.bindBuffer(g,y),r.bufferData(g,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,g,m){const v=g.array,x=g.updateRanges;if(r.bindBuffer(m,h),x.length===0)r.bufferSubData(m,0,v);else{x.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<x.length;M++){const A=x[y],T=x[M];T.start<=A.start+A.count+1?A.count=Math.max(A.count,T.start+T.count-A.start):(++y,x[y]=T)}x.length=y+1;for(let M=0,A=x.length;M<A;M++){const T=x[M];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(r.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:l,remove:c,update:d}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:S1,alphahash_pars_fragment:M1,alphamap_fragment:E1,alphamap_pars_fragment:T1,alphatest_fragment:A1,alphatest_pars_fragment:w1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:N1,batching_vertex:D1,begin_vertex:U1,beginnormal_vertex:L1,bsdfs:O1,iridescence_fragment:P1,bumpmap_pars_fragment:z1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:k1,color_fragment:j1,color_pars_fragment:G1,color_pars_vertex:H1,color_vertex:V1,common:X1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:q1,displacementmap_pars_vertex:Y1,displacementmap_vertex:Z1,emissivemap_fragment:K1,emissivemap_pars_fragment:Q1,colorspace_fragment:J1,colorspace_pars_fragment:$1,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:aM,fog_vertex:sM,fog_pars_vertex:rM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:dM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:xM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:bM,lights_fragment_begin:yM,lights_fragment_maps:SM,lights_fragment_end:MM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:wM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:NM,map_particle_pars_fragment:DM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:LM,morphinstance_vertex:OM,morphcolor_vertex:PM,morphnormal_vertex:zM,morphtarget_pars_vertex:IM,morphtarget_vertex:BM,normal_fragment_begin:FM,normal_fragment_maps:kM,normal_pars_fragment:jM,normal_pars_vertex:GM,normal_vertex:HM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:YM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:sE,shadowmask_pars_fragment:rE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:xE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:bE,background_vert:yE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:EE,cube_vert:TE,cube_frag:AE,depth_vert:wE,depth_frag:RE,distance_vert:CE,distance_frag:NE,equirect_vert:DE,equirect_frag:UE,linedashed_vert:LE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:IE,meshlambert_frag:BE,meshmatcap_vert:FE,meshmatcap_frag:kE,meshnormal_vert:jE,meshnormal_frag:GE,meshphong_vert:HE,meshphong_frag:VE,meshphysical_vert:XE,meshphysical_frag:WE,meshtoon_vert:qE,meshtoon_frag:YE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:eT},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ii={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ii.physical={uniforms:zn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Lc={r:0,b:0,g:0},Es=new Vi,tT=new Jt;function nT(r,e,i,s,l,c,d){const h=new yt(0);let g=c===!0?0:1,m,v,x=null,y=0,M=null;function A(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?i:e).get(P)),P}function T(D){let P=!1;const I=A(D);I===null?_(h,g):I&&I.isColor&&(_(I,1),P=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,P){const I=A(P);I&&(I.isCubeTexture||I.mapping===Kc)?(v===void 0&&(v=new Ni(new el(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:zr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Es.copy(P.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Es)),v.material.toneMapped=Tt.getTransfer(I.colorSpace)!==kt,(x!==I||y!==I.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,x=I,y=I.version,M=r.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Ni(new Jc(2,2),new Xi({name:"BackgroundMaterial",uniforms:zr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(I.colorSpace)!==kt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||y!==I.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,x=I,y=I.version,M=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,P){D.getRGB(Lc,Mv(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,P,d)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),g=P,_(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(D){g=D,_(h,g)},render:T,addToRenderList:S,dispose:U}}function iT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(N,H,ie,ae,he){let oe=!1;const B=x(ae,ie,H);c!==B&&(c=B,m(c.object)),oe=M(N,ae,ie,he),oe&&A(N,ae,ie,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(oe||d)&&(d=!1,P(N,H,ie,ae),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function g(){return r.createVertexArray()}function m(N){return r.bindVertexArray(N)}function v(N){return r.deleteVertexArray(N)}function x(N,H,ie){const ae=ie.wireframe===!0;let he=s[N.id];he===void 0&&(he={},s[N.id]=he);let oe=he[H.id];oe===void 0&&(oe={},he[H.id]=oe);let B=oe[ae];return B===void 0&&(B=y(g()),oe[ae]=B),B}function y(N){const H=[],ie=[],ae=[];for(let he=0;he<i;he++)H[he]=0,ie[he]=0,ae[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ie,attributeDivisors:ae,object:N,attributes:{},index:null}}function M(N,H,ie,ae){const he=c.attributes,oe=H.attributes;let B=0;const k=ie.getAttributes();for(const J in k)if(k[J].location>=0){const ve=he[J];let O=oe[J];if(O===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),ve===void 0||ve.attribute!==O||O&&ve.data!==O.data)return!0;B++}return c.attributesNum!==B||c.index!==ae}function A(N,H,ie,ae){const he={},oe=H.attributes;let B=0;const k=ie.getAttributes();for(const J in k)if(k[J].location>=0){let ve=oe[J];ve===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const O={};O.attribute=ve,ve&&ve.data&&(O.data=ve.data),he[J]=O,B++}c.attributes=he,c.attributesNum=B,c.index=ae}function T(){const N=c.newAttributes;for(let H=0,ie=N.length;H<ie;H++)N[H]=0}function S(N){_(N,0)}function _(N,H){const ie=c.newAttributes,ae=c.enabledAttributes,he=c.attributeDivisors;ie[N]=1,ae[N]===0&&(r.enableVertexAttribArray(N),ae[N]=1),he[N]!==H&&(r.vertexAttribDivisor(N,H),he[N]=H)}function U(){const N=c.newAttributes,H=c.enabledAttributes;for(let ie=0,ae=H.length;ie<ae;ie++)H[ie]!==N[ie]&&(r.disableVertexAttribArray(ie),H[ie]=0)}function D(N,H,ie,ae,he,oe,B){B===!0?r.vertexAttribIPointer(N,H,ie,he,oe):r.vertexAttribPointer(N,H,ie,ae,he,oe)}function P(N,H,ie,ae){T();const he=ae.attributes,oe=ie.getAttributes(),B=H.defaultAttributeValues;for(const k in oe){const J=oe[k];if(J.location>=0){let _e=he[k];if(_e===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const ve=_e.normalized,O=_e.itemSize,ne=e.get(_e);if(ne===void 0)continue;const ge=ne.buffer,Te=ne.type,Fe=ne.bytesPerElement,W=Te===r.INT||Te===r.UNSIGNED_INT||_e.gpuType===Hh;if(_e.isInterleavedBufferAttribute){const ce=_e.data,Ce=ce.stride,je=_e.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<J.locationSize;Ge++)_(J.location+Ge,ce.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<J.locationSize;Ge++)S(J.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Ge=0;Ge<J.locationSize;Ge++)D(J.location+Ge,O/J.locationSize,Te,ve,Ce*Fe,(je+O/J.locationSize*Ge)*Fe,W)}else{if(_e.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)_(J.location+ce,_e.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ce=0;ce<J.locationSize;ce++)S(J.location+ce);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let ce=0;ce<J.locationSize;ce++)D(J.location+ce,O/J.locationSize,Te,ve,O*Fe,O/J.locationSize*ce*Fe,W)}}else if(B!==void 0){const ve=B[k];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(J.location,ve);break;case 3:r.vertexAttrib3fv(J.location,ve);break;case 4:r.vertexAttrib4fv(J.location,ve);break;default:r.vertexAttrib1fv(J.location,ve)}}}}U()}function I(){Z();for(const N in s){const H=s[N];for(const ie in H){const ae=H[ie];for(const he in ae)v(ae[he].object),delete ae[he];delete H[ie]}delete s[N]}}function F(N){if(s[N.id]===void 0)return;const H=s[N.id];for(const ie in H){const ae=H[ie];for(const he in ae)v(ae[he].object),delete ae[he];delete H[ie]}delete s[N.id]}function z(N){for(const H in s){const ie=s[H];if(ie[N.id]===void 0)continue;const ae=ie[N.id];for(const he in ae)v(ae[he].object),delete ae[he];delete ie[N.id]}}function Z(){w(),d=!0,c!==l&&(c=l,m(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function aT(r,e,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function d(m,v,x){x!==0&&(r.drawArraysInstanced(s,m,v,x),i.update(v,s,x))}function h(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,x);let M=0;for(let A=0;A<x;A++)M+=v[A];i.update(M,s,1)}function g(m,v,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)d(m[A],v[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,x);let A=0;for(let T=0;T<x;T++)A+=v[T]*y[T];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function sT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Bi&&!Z)}function g(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(at("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,maxSamples:I,samples:F}}function rT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new As,h=new ft,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=v(x,y,0)},this.setState=function(x,y,M){const A=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=r.get(x);if(!l||A===null||A.length===0||c&&!S)c?v(null):m();else{const U=c?0:s,D=U*4;let P=_.clippingState||null;g.value=P,P=v(A,y,D,M);for(let I=0;I!==D;++I)P[I]=i[I];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,y,M,A){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=g.value,A!==!0||S===null){const _=M+T*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,P=M;D!==T;++D,P+=4)d.copy(x[D]).applyMatrix4(U,h),d.normal.toArray(S,P),S[P+3]=d.constant}g.value=S,g.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function oT(r){let e=new WeakMap;function i(d,h){return h===eh?d.mapping=Us:h===th&&(d.mapping=Lr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===eh||h===th)if(e.has(d)){const g=e.get(d).texture;return i(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const m=new Av(g.height);return m.fromEquirectangularTexture(r,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const es=4,Tx=[.125,.215,.35,.446,.526,.582],Rs=20,lT=256,jo=new Dv,Ax=new yt;let Fd=null,kd=0,jd=0,Gd=!1;const cT=new $;class wx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=cT}=c;Fd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,kd,jd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:_a,format:Ri,colorSpace:Pr,depthBuffer:!1},l=Rx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(c)),this._blurMaterial=dT(c,e,i),this._ggxMaterial=fT(c,e,i)}return l}_compileMaterial(e){const i=new Ni(new xi,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,s,l,c){const g=new qn(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,M=x.toneMapping;x.getClearColor(Ax),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new el,new Jh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,_=!0):(S.color.copy(Ax),_=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(g.up.set(0,m[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+v[D],c.y,c.z)):P===1?(g.up.set(0,0,m[D]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+v[D],c.z)):(g.up.set(0,m[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+v[D]));const I=this._cubeSize;Rr(l,P*I,D>2?I:0,I,I),x.setRenderTarget(l),_&&x.render(T,g),x.render(e,g)}x.toneMapping=M,x.autoClear=y,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Us||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const g=this._cubeSize;Rr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,m=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-v*v),y=0+m*1.25,M=x*y,{_lodMax:A}=this,T=this._sizeLods[s],S=3*T*(s>A-es?s-A+es:0),_=4*(this._cubeSize-T);g.envMap.value=e.texture,g.roughness.value=M,g.mipInt.value=A-i,Rr(c,S,_,3*T,2*T),l.setRenderTarget(c),l.render(h,jo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,Rr(e,S,_,3*T,2*T),l.setRenderTarget(e),l.render(h,jo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const g=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=m;const y=m.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rs-1),T=c/A,S=isFinite(c)?1+Math.floor(v*T):Rs;S>Rs&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rs}`);const _=[];let U=0;for(let z=0;z<Rs;++z){const Z=z/T,w=Math.exp(-Z*Z/2);_.push(w),z===0?U+=w:z<S&&(U+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:D}=this;y.dTheta.value=A,y.mipInt.value=D-s;const P=this._sizeLods[l],I=3*P*(l>D-es?l-D+es:0),F=4*(this._cubeSize-P);Rr(i,I,F,3*P,2*P),g.setRenderTarget(i),g.render(x,jo)}}function uT(r){const e=[],i=[],s=[];let l=r;const c=r-es+1+Tx.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let g=1/h;d>r-es?g=Tx[d-r+es-1]:d===0&&(g=0),i.push(g);const m=1/(h-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,A=6,T=3,S=2,_=1,U=new Float32Array(T*A*M),D=new Float32Array(S*A*M),P=new Float32Array(_*A*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,Z=F>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(w,T*A*F),D.set(y,S*A*F);const N=[F,F,F,F,F,F];P.set(N,_*A*F)}const I=new xi;I.setAttribute("position",new Gi(U,T)),I.setAttribute("uv",new Gi(D,S)),I.setAttribute("faceIndex",new Gi(P,_)),s.push(new Ni(I,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Rx(r,e,i){const s=new ji(r,e,i);return s.texture.mapping=Kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function fT(r,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function dT(r,e,i){const s=new Float32Array(Rs),l=new $(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Cx(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Nx(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hT(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const g=h.mapping,m=g===eh||g===th,v=g===Us||g===Lr;if(m||v){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new wx(r)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new wx(r)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let g=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&g++;return g===m}function c(h){const g=h.target;g.removeEventListener("dispose",c);const m=e.get(g);m!==void 0&&(e.delete(g),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function pT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&qo("WebGLRenderer: "+s+" extension not supported."),l}}}function mT(r,e,i,s){const l={},c=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function g(x){const y=x.attributes;for(const M in y)e.update(y[M],r.ARRAY_BUFFER)}function m(x){const y=[],M=x.index,A=x.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let D=0,P=U.length;D<P;D+=3){const I=U[D+0],F=U[D+1],z=U[D+2];y.push(I,F,F,z,z,I)}}else if(A!==void 0){const U=A.array;T=A.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const I=D+0,F=D+1,z=D+2;y.push(I,F,F,z,z,I)}}else return;const S=new(gv(y)?Sv:yv)(y,1);S.version=T;const _=c.get(x);_&&e.remove(_),c.set(x,S)}function v(x){const y=c.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:g,getWireframeAttribute:v}}function gT(r,e,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function g(y,M){r.drawElements(s,M,c,y*d),i.update(M,s,1)}function m(y,M,A){A!==0&&(r.drawElementsInstanced(s,M,c,y*d,A),i.update(M,s,A))}function v(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,A);let S=0;for(let _=0;_<A;_++)S+=M[_];i.update(S,s,1)}function x(y,M,A,T){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/d,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,T,0,A);let _=0;for(let U=0;U<A;U++)_+=M[U]*T[U];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function xT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vT(r,e,i){const s=new WeakMap,l=new an;function c(d,h,g){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let y=s.get(h);if(y===void 0||y.count!==x){let N=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var M=N;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let I=h.attributes.position.count*P,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*F*4*x),Z=new xv(z,I,F,x);Z.type=Bi,Z.needsUpdate=!0;const w=P*4;for(let H=0;H<x;H++){const ie=_[H],ae=U[H],he=D[H],oe=I*F*4*H;for(let B=0;B<ie.count;B++){const k=B*w;A===!0&&(l.fromBufferAttribute(ie,B),z[oe+k+0]=l.x,z[oe+k+1]=l.y,z[oe+k+2]=l.z,z[oe+k+3]=0),T===!0&&(l.fromBufferAttribute(ae,B),z[oe+k+4]=l.x,z[oe+k+5]=l.y,z[oe+k+6]=l.z,z[oe+k+7]=0),S===!0&&(l.fromBufferAttribute(he,B),z[oe+k+8]=l.x,z[oe+k+9]=l.y,z[oe+k+10]=l.z,z[oe+k+11]=he.itemSize===4?l.w:1)}}y={count:x,texture:Z,size:new Ct(I,F)},s.set(h,y),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<m.length;S++)A+=m[S];const T=h.morphTargetsRelative?1:1-A;g.getUniforms().setValue(r,"morphTargetBaseInfluence",T),g.getUniforms().setValue(r,"morphTargetInfluences",m)}g.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function _T(r,e,i,s){let l=new WeakMap;function c(g){const m=s.render.frame,v=g.geometry,x=e.get(g,v);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),l.get(g)!==m&&(i.update(g.instanceMatrix,r.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,r.ARRAY_BUFFER),l.set(g,m))),g.isSkinnedMesh){const y=g.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function d(){l=new WeakMap}function h(g){const m=g.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}const bT={[ev]:"LINEAR_TONE_MAPPING",[tv]:"REINHARD_TONE_MAPPING",[nv]:"CINEON_TONE_MAPPING",[iv]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function yT(r,e,i,s,l){const c=new ji(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new ji(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),h=new xi;h.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const g=new f1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Ni(h,g),v=new Dv(-1,1,1,-1,0,1);let x=null,y=null,M=!1,A,T=null,S=[],_=!1;this.setSize=function(U,D){c.setSize(U,D),d.setSize(U,D);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(U,D)}},this.setEffects=function(U){S=U,_=S.length>0&&S[0].isRenderPass===!0;const D=c.width,P=c.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(D,P)}},this.begin=function(U,D){if(M||U.toneMapping===ki&&S.length===0)return!1;if(T=D,D!==null){const P=D.width,I=D.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return _===!1&&U.setRenderTarget(c),A=U.toneMapping,U.toneMapping=ki,!0},this.hasRenderPass=function(){return _},this.end=function(U,D){U.toneMapping=A,M=!0;let P=c,I=d;for(let F=0;F<S.length;F++){const z=S[F];if(z.enabled!==!1&&(z.render(U,I,P,D),z.needsSwap!==!1)){const Z=P;P=I,I=Z}}if(x!==U.outputColorSpace||y!==U.toneMapping){x=U.outputColorSpace,y=U.toneMapping,g.defines={},Tt.getTransfer(x)===kt&&(g.defines.SRGB_TRANSFER="");const F=bT[y];F&&(g.defines[F]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(T),U.render(m,v),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),g.dispose()}}const Lv=new In,Ih=new Yo(1,1),Ov=new xv,Pv=new FS,zv=new Tv,Dx=[],Ux=[],Lx=new Float32Array(16),Ox=new Float32Array(9),Px=new Float32Array(4);function Fr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Dx[l];if(c===void 0&&(c=new Float32Array(l),Dx[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function tu(r,e){let i=Ux[e];i===void 0&&(i=new Int32Array(e),Ux[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function ST(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function TT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function AT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Px.set(s),r.uniformMatrix2fv(this.addr,!1,Px),gn(i,s)}}function wT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Ox.set(s),r.uniformMatrix3fv(this.addr,!1,Ox),gn(i,s)}}function RT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Lx.set(s),r.uniformMatrix4fv(this.addr,!1,Lx),gn(i,s)}}function CT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function NT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function DT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function LT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function OT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function PT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function zT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function IT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ih.compareFunction=i.isReversedDepthBuffer()?Kh:Zh,c=Ih):c=Lv,i.setTexture2D(e||c,l)}function BT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Pv,l)}function FT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||zv,l)}function kT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ov,l)}function jT(r){switch(r){case 5126:return ST;case 35664:return MT;case 35665:return ET;case 35666:return TT;case 35674:return AT;case 35675:return wT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return NT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return kT}}function GT(r,e){r.uniform1fv(this.addr,e)}function HT(r,e){const i=Fr(e,this.size,2);r.uniform2fv(this.addr,i)}function VT(r,e){const i=Fr(e,this.size,3);r.uniform3fv(this.addr,i)}function XT(r,e){const i=Fr(e,this.size,4);r.uniform4fv(this.addr,i)}function WT(r,e){const i=Fr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function qT(r,e){const i=Fr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function YT(r,e){const i=Fr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ZT(r,e){r.uniform1iv(this.addr,e)}function KT(r,e){r.uniform2iv(this.addr,e)}function QT(r,e){r.uniform3iv(this.addr,e)}function JT(r,e){r.uniform4iv(this.addr,e)}function $T(r,e){r.uniform1uiv(this.addr,e)}function e2(r,e){r.uniform2uiv(this.addr,e)}function t2(r,e){r.uniform3uiv(this.addr,e)}function n2(r,e){r.uniform4uiv(this.addr,e)}function i2(r,e,i){const s=this.cache,l=e.length,c=tu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Ih:d=Lv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function a2(r,e,i){const s=this.cache,l=e.length,c=tu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Pv,c[d])}function s2(r,e,i){const s=this.cache,l=e.length,c=tu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||zv,c[d])}function r2(r,e,i){const s=this.cache,l=e.length,c=tu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ov,c[d])}function o2(r){switch(r){case 5126:return GT;case 35664:return HT;case 35665:return VT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}class l2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class c2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=o2(i.type)}}class u2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function zx(r,e){r.seq.push(e),r.map[e.id]=e}function f2(r,e,i){const s=r.name,l=s.length;for(Hd.lastIndex=0;;){const c=Hd.exec(s),d=Hd.lastIndex;let h=c[1];const g=c[2]==="]",m=c[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===l){zx(i,m===void 0?new l2(h,r,e):new c2(h,r,e));break}else{let x=i.map[h];x===void 0&&(x=new u2(h),zx(i,x)),i=x}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),g=e.getUniformLocation(i,h.name);f2(h,g,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],g=s[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Ix(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const d2=37297;let h2=0;function p2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Bx=new ft;function m2(r){Tt._getMatrix(Bx,Tt.workingColorSpace,r);const e=`mat3( ${Bx.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Xc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fx(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+p2(r.getShaderSource(e),h)}else return c}function g2(r,e){const i=m2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const x2={[ev]:"Linear",[tv]:"Reinhard",[nv]:"Cineon",[iv]:"ACESFilmic",[sv]:"AgX",[rv]:"Neutral",[av]:"Custom"};function v2(r,e){const i=x2[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new $;function _2(){Tt.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function y2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function S2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function Vo(r){return r!==""}function kx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(M2,T2)}const E2=new Map;function T2(r,e){let i=dt[e];if(i===void 0){const s=E2.get(e);if(s!==void 0)i=dt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bh(i)}const A2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gx(r){return r.replace(A2,w2)}function w2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Hx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const R2={[Bc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function C2(r){return R2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N2={[Us]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function D2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":N2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const U2={[Lr]:"ENVMAP_MODE_REFRACTION"};function L2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":U2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O2={[$x]:"ENVMAP_BLENDING_MULTIPLY",[bS]:"ENVMAP_BLENDING_MIX",[yS]:"ENVMAP_BLENDING_ADD"};function P2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":O2[r.combine]||"ENVMAP_BLENDING_NONE"}function z2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function I2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=C2(i),m=D2(i),v=L2(i),x=P2(i),y=z2(i),M=b2(i),A=y2(c),T=l.createProgram();let S,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[Hx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[Hx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?dt.tonemapping_pars_fragment:"",i.toneMapping!==ki?v2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,g2("linearToOutputTexel",i.outputColorSpace),_2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Bh(d),d=kx(d,i),d=jx(d,i),h=Bh(h),h=kx(h,i),h=jx(h,i),d=Gx(d),h=Gx(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+S+d,P=U+_+h,I=Ix(l,l.VERTEX_SHADER,D),F=Ix(l,l.FRAGMENT_SHADER,P);l.attachShader(T,I),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(H){if(r.debug.checkShaderErrors){const ie=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(I)||"",he=l.getShaderInfoLog(F)||"",oe=ie.trim(),B=ae.trim(),k=he.trim();let J=!0,_e=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,F);else{const ve=Fx(l,I,"vertex"),O=Fx(l,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+ve+`
`+O)}else oe!==""?at("WebGLProgram: Program Info Log:",oe):(B===""||k==="")&&(_e=!1);_e&&(H.diagnostics={runnable:J,programLog:oe,vertexShader:{log:B,prefix:S},fragmentShader:{log:k,prefix:_}})}l.deleteShader(I),l.deleteShader(F),Z=new Hc(l,T),w=S2(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(T,d2)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=h2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let B2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new k2(e),i.set(e,s)),s}}class k2{constructor(e){this.id=B2++,this.code=e,this.usedTimes=0}}function j2(r,e,i,s,l,c,d){const h=new _v,g=new F2,m=new Set,v=[],x=new Map,y=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,N,H,ie,ae){const he=ie.fog,oe=ae.geometry,B=w.isMeshStandardMaterial?ie.environment:null,k=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),J=k&&k.mapping===Kc?k.image.height:null,_e=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ve=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,O=ve!==void 0?ve.length:0;let ne=0;oe.morphAttributes.position!==void 0&&(ne=1),oe.morphAttributes.normal!==void 0&&(ne=2),oe.morphAttributes.color!==void 0&&(ne=3);let ge,Te,Fe,W;if(_e){const Et=Ii[_e];ge=Et.vertexShader,Te=Et.fragmentShader}else ge=w.vertexShader,Te=w.fragmentShader,g.update(w),Fe=g.getVertexShaderID(w),W=g.getFragmentShaderID(w);const ce=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),je=ae.isInstancedMesh===!0,Ge=ae.isBatchedMesh===!0,ht=!!w.map,$t=!!w.matcap,xt=!!k,pt=!!w.aoMap,Nt=!!w.lightMap,ot=!!w.bumpMap,en=!!w.normalMap,G=!!w.displacementMap,Zt=!!w.emissiveMap,Mt=!!w.metalnessMap,Ot=!!w.roughnessMap,Ye=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,q=w.iridescence>0,pe=w.sheen>0,Se=w.transmission>0,fe=Ye&&!!w.anisotropyMap,Ke=L&&!!w.clearcoatMap,Ne=L&&!!w.clearcoatNormalMap,Xe=L&&!!w.clearcoatRoughnessMap,nt=q&&!!w.iridescenceMap,Ee=q&&!!w.iridescenceThicknessMap,Ae=pe&&!!w.sheenColorMap,Be=pe&&!!w.sheenRoughnessMap,ze=!!w.specularMap,De=!!w.specularColorMap,ct=!!w.specularIntensityMap,X=Se&&!!w.transmissionMap,Le=Se&&!!w.thicknessMap,we=!!w.gradientMap,Ie=!!w.alphaMap,Me=w.alphaTest>0,be=!!w.alphaHash,Re=!!w.extensions;let it=ki;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=r.toneMapping);const zt={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:Te,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Ge,batchingColor:Ge&&ae._colorsTexture!==null,instancing:je,instancingColor:je&&ae.instanceColor!==null,instancingMorph:je&&ae.morphTexture!==null,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Pr,alphaToCoverage:!!w.alphaToCoverage,map:ht,matcap:$t,envMap:xt,envMapMode:xt&&k.mapping,envMapCubeUVHeight:J,aoMap:pt,lightMap:Nt,bumpMap:ot,normalMap:en,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:en&&w.normalMapType===ES,normalMapTangentSpace:en&&w.normalMapType===mv,metalnessMap:Mt,roughnessMap:Ot,anisotropy:Ye,anisotropyMap:fe,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:De,specularIntensityMap:ct,transmission:Se,transmissionMap:X,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:be,combine:w.combine,mapUv:ht&&T(w.map.channel),aoMapUv:pt&&T(w.aoMap.channel),lightMapUv:Nt&&T(w.lightMap.channel),bumpMapUv:ot&&T(w.bumpMap.channel),normalMapUv:en&&T(w.normalMap.channel),displacementMapUv:G&&T(w.displacementMap.channel),emissiveMapUv:Zt&&T(w.emissiveMap.channel),metalnessMapUv:Mt&&T(w.metalnessMap.channel),roughnessMapUv:Ot&&T(w.roughnessMap.channel),anisotropyMapUv:fe&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(w.sheenRoughnessMap.channel),specularMapUv:ze&&T(w.specularMap.channel),specularColorMapUv:De&&T(w.specularColorMap.channel),specularIntensityMapUv:ct&&T(w.specularIntensityMap.channel),transmissionMapUv:X&&T(w.transmissionMap.channel),thicknessMapUv:Le&&T(w.thicknessMap.channel),alphaMapUv:Ie&&T(w.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(en||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!oe.attributes.uv&&(ht||Ie),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ce,skinning:ae.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Zt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ma,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=m.has(1),zt.vertexUv2s=m.has(2),zt.vertexUv3s=m.has(3),m.clear(),zt}function _(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)N.push(H),N.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(U(N,w),D(N,w),N.push(r.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function U(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function D(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const N=A[w.type];let H;if(N){const ie=Ii[N];H=JS.clone(ie.uniforms)}else H=w.uniforms;return H}function I(w,N){let H=x.get(N);return H!==void 0?++H.usedTimes:(H=new I2(r,N,w,c),v.push(H),x.set(N,H)),H}function F(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),x.delete(w.cacheKey),w.destroy()}}function z(w){g.remove(w)}function Z(){g.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:Z}}function G2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,g){r.get(d)[h]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function H2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,M,A,T,S){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:A,renderOrder:x.renderOrder,z:T,group:S},r[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=T,_.group=S),e++,_}function h(x,y,M,A,T,S){const _=d(x,y,M,A,T,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function g(x,y,M,A,T,S){const _=d(x,y,M,A,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,y){i.length>1&&i.sort(x||H2),s.length>1&&s.sort(y||Vx),l.length>1&&l.sort(y||Vx)}function v(){for(let x=e,y=r.length;x<y;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:g,finish:v,sort:m}}function V2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Xx,r.set(s,[d])):l>=c.length?(d=new Xx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function X2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new yt};break;case"SpotLight":i={position:new $,direction:new $,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new yt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":i={color:new yt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function W2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let q2=0;function Y2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Z2(r){const e=new X2,i=W2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new $);const l=new $,c=new Jt,d=new Jt;function h(m){let v=0,x=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,T=0,S=0,_=0,U=0,D=0,P=0,I=0,F=0,z=0;m.sort(Y2);for(let w=0,N=m.length;w<N;w++){const H=m[w],ie=H.color,ae=H.intensity,he=H.distance;let oe=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Or?oe=H.shadow.map.texture:oe=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=ie.r*ae,x+=ie.g*ae,y+=ie.b*ae;else if(H.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(H.sh.coefficients[B],ae);z++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,s.directionalShadow[M]=J,s.directionalShadowMap[M]=oe,s.directionalShadowMatrix[M]=H.shadow.matrix,U++}s.directional[M]=B,M++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(ie).multiplyScalar(ae),B.distance=he,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,s.spot[T]=B;const k=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,k.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[T]=k.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=oe,P++}T++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(ie).multiplyScalar(ae),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=B,S++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const k=H.shadow,J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,s.pointShadow[A]=J,s.pointShadowMap[A]=oe,s.pointShadowMatrix[A]=H.shadow.matrix,D++}s.point[A]=B,A++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(ae),B.groundColor.copy(H.groundColor).multiplyScalar(ae),s.hemi[_]=B,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=y;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==T||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==U||Z.numPointShadows!==D||Z.numSpotShadows!==P||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=T,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=U,Z.numPointShadows=D,Z.numSpotShadows=P,Z.numSpotMaps=I,Z.numLightProbes=z,s.version=q2++)}function g(m,v){let x=0,y=0,M=0,A=0,T=0;const S=v.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const D=m[_];if(D.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),x++}else if(D.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const P=s.rectArea[A];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const P=s.point[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:g,state:s}}function Wx(r){const e=new Z2(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:d}}function K2(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Wx(r),e.set(l,[h])):c>=d.length?(h=new Wx(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const Q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],eA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],qx=new Jt,Go=new $,Vd=new $;function tA(r,e,i){let s=new $h;const l=new Ct,c=new Ct,d=new an,h=new p1,g=new m1,m={},v=i.maxTextureSize,x={[ts]:Yn,[Yn]:ts,[ma]:ma},y=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Q2,fragmentShader:J2}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new xi;A.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let _=this.type;this.render=function(F,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===tS&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Bc);const w=r.getRenderTarget(),N=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(xa),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ae=_!==this.type;ae&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(oe=>oe.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,oe=F.length;he<oe;he++){const B=F[he],k=B.shadow;if(k===void 0){at("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const J=k.getFrameExtents();if(l.multiply(J),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/J.x),l.x=c.x*J.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/J.y),l.y=c.y*J.y,k.mapSize.y=c.y)),k.map===null||ae===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ho){if(B.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ji(l.x,l.y,{format:Or,type:_a,minFilter:On,magFilter:On,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Yo(l.x,l.y,Bi),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=ba,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else{B.isPointLight?(k.map=new Av(l.x),k.map.depthTexture=new c1(l.x,Hi)):(k.map=new ji(l.x,l.y),k.map.depthTexture=new Yo(l.x,l.y,Hi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=ba;const ve=r.state.buffers.depth.getReversed();this.type===Bc?(k.map.depthTexture.compareFunction=ve?Kh:Zh,k.map.depthTexture.minFilter=On,k.map.depthTexture.magFilter=On):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn)}k.camera.updateProjectionMatrix()}const _e=k.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<_e;ve++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ve),r.clear();else{ve===0&&(r.setRenderTarget(k.map),r.clear());const O=k.getViewport(ve);d.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),ie.viewport(d)}if(B.isPointLight){const O=k.camera,ne=k.matrix,ge=B.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),Go.setFromMatrixPosition(B.matrixWorld),O.position.copy(Go),Vd.copy(O.position),Vd.add($2[ve]),O.up.copy(eA[ve]),O.lookAt(Vd),O.updateMatrixWorld(),ne.makeTranslation(-Go.x,-Go.y,-Go.z),qx.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k._frustum.setFromProjectionMatrix(qx,O.coordinateSystem,O.reversedDepth)}else k.updateMatrices(B);s=k.getFrustum(),P(z,Z,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Ho&&U(k,Z),k.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(w,N,H)};function U(F,z){const Z=e.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ji(l.x,l.y,{format:Or,type:_a})),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,Z,y,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,Z,M,T,null)}function D(F,z,Z,w){let N=null;const H=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)N=H;else if(N=Z.isPointLight===!0?g:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ie=N.uuid,ae=z.uuid;let he=m[ie];he===void 0&&(he={},m[ie]=he);let oe=he[ae];oe===void 0&&(oe=N.clone(),he[ae]=oe,z.addEventListener("dispose",I)),N=oe}if(N.visible=z.visible,N.wireframe=z.wireframe,w===Ho?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:x[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ie=r.properties.get(N);ie.light=Z}return N}function P(F,z,Z,w,N){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===Ho)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),he=F.material;if(Array.isArray(he)){const oe=ae.groups;for(let B=0,k=oe.length;B<k;B++){const J=oe[B],_e=he[J.materialIndex];if(_e&&_e.visible){const ve=D(F,_e,w,N);F.onBeforeShadow(r,F,z,Z,ae,ve,J),r.renderBufferDirect(Z,null,ae,ve,F,J),F.onAfterShadow(r,F,z,Z,ae,ve,J)}}}else if(he.visible){const oe=D(F,he,w,N);F.onBeforeShadow(r,F,z,Z,ae,oe,null),r.renderBufferDirect(Z,null,ae,oe,F,null),F.onAfterShadow(r,F,z,Z,ae,oe,null)}}const ie=F.children;for(let ae=0,he=ie.length;ae<he;ae++)P(ie[ae],z,Z,w,N)}function I(F){F.target.removeEventListener("dispose",I);for(const Z in m){const w=m[Z],N=F.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const nA={[qd]:Yd,[Zd]:Jd,[Kd]:$d,[Ur]:Qd,[Yd]:qd,[Jd]:Zd,[$d]:Kd,[Qd]:Ur};function iA(r,e){function i(){let X=!1;const Le=new an;let we=null;const Ie=new an(0,0,0,0);return{setMask:function(Me){we!==Me&&!X&&(r.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){X=Me},setClear:function(Me,be,Re,it,zt){zt===!0&&(Me*=it,be*=it,Re*=it),Le.set(Me,be,Re,it),Ie.equals(Le)===!1&&(r.clearColor(Me,be,Re,it),Ie.copy(Le))},reset:function(){X=!1,we=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,we=null,Ie=null,Me=null;return{setReversed:function(be){if(Le!==be){const Re=e.get("EXT_clip_control");be?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Le=be;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(be){be?ce(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(be){we!==be&&!X&&(r.depthMask(be),we=be)},setFunc:function(be){if(Le&&(be=nA[be]),Ie!==be){switch(be){case qd:r.depthFunc(r.NEVER);break;case Yd:r.depthFunc(r.ALWAYS);break;case Zd:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case Kd:r.depthFunc(r.EQUAL);break;case Qd:r.depthFunc(r.GEQUAL);break;case Jd:r.depthFunc(r.GREATER);break;case $d:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=be}},setLocked:function(be){X=be},setClear:function(be){Me!==be&&(Le&&(be=1-be),r.clearDepth(be),Me=be)},reset:function(){X=!1,we=null,Ie=null,Me=null,Le=!1}}}function l(){let X=!1,Le=null,we=null,Ie=null,Me=null,be=null,Re=null,it=null,zt=null;return{setTest:function(Et){X||(Et?ce(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!X&&(r.stencilMask(Et),Le=Et)},setFunc:function(Et,Nn,vi){(we!==Et||Ie!==Nn||Me!==vi)&&(r.stencilFunc(Et,Nn,vi),we=Et,Ie=Nn,Me=vi)},setOp:function(Et,Nn,vi){(be!==Et||Re!==Nn||it!==vi)&&(r.stencilOp(Et,Nn,vi),be=Et,Re=Nn,it=vi)},setLocked:function(Et){X=Et},setClear:function(Et){zt!==Et&&(r.clearStencil(Et),zt=Et)},reset:function(){X=!1,Le=null,we=null,Ie=null,Me=null,be=null,Re=null,it=null,zt=null}}}const c=new i,d=new s,h=new l,g=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,M=[],A=null,T=!1,S=null,_=null,U=null,D=null,P=null,I=null,F=null,z=new yt(0,0,0),Z=0,w=!1,N=null,H=null,ie=null,ae=null,he=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=k>=2);let _e=null,ve={};const O=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ge=new an().fromArray(O),Te=new an().fromArray(ne);function Fe(X,Le,we,Ie){const Me=new Uint8Array(4),be=r.createTexture();r.bindTexture(X,be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<we;Re++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Le+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return be}const W={};W[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ce(r.DEPTH_TEST),d.setFunc(Ur),ot(!1),en(Xg),ce(r.CULL_FACE),pt(xa);function ce(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Ce(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function je(X,Le){return x[X]!==Le?(r.bindFramebuffer(X,Le),x[X]=Le,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Le),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let we=M,Ie=!1;if(X){we=y.get(Le),we===void 0&&(we=[],y.set(Le,we));const Me=X.textures;if(we.length!==Me.length||we[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Re=Me.length;be<Re;be++)we[be]=r.COLOR_ATTACHMENT0+be;we.length=Me.length,Ie=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(we)}function ht(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const $t={[ws]:r.FUNC_ADD,[iS]:r.FUNC_SUBTRACT,[aS]:r.FUNC_REVERSE_SUBTRACT};$t[sS]=r.MIN,$t[rS]=r.MAX;const xt={[oS]:r.ZERO,[lS]:r.ONE,[cS]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[mS]:r.SRC_ALPHA_SATURATE,[hS]:r.DST_COLOR,[fS]:r.DST_ALPHA,[uS]:r.ONE_MINUS_SRC_COLOR,[Wd]:r.ONE_MINUS_SRC_ALPHA,[pS]:r.ONE_MINUS_DST_COLOR,[dS]:r.ONE_MINUS_DST_ALPHA,[gS]:r.CONSTANT_COLOR,[xS]:r.ONE_MINUS_CONSTANT_COLOR,[vS]:r.CONSTANT_ALPHA,[_S]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Le,we,Ie,Me,be,Re,it,zt,Et){if(X===xa){T===!0&&(Ce(r.BLEND),T=!1);return}if(T===!1&&(ce(r.BLEND),T=!0),X!==nS){if(X!==S||Et!==w){if((_!==ws||P!==ws)&&(r.blendEquation(r.FUNC_ADD),_=ws,P=ws),Et)switch(X){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wg:r.blendFunc(r.ONE,r.ONE);break;case qg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}U=null,D=null,I=null,F=null,z.set(0,0,0),Z=0,S=X,w=Et}return}Me=Me||Le,be=be||we,Re=Re||Ie,(Le!==_||Me!==P)&&(r.blendEquationSeparate($t[Le],$t[Me]),_=Le,P=Me),(we!==U||Ie!==D||be!==I||Re!==F)&&(r.blendFuncSeparate(xt[we],xt[Ie],xt[be],xt[Re]),U=we,D=Ie,I=be,F=Re),(it.equals(z)===!1||zt!==Z)&&(r.blendColor(it.r,it.g,it.b,zt),z.copy(it),Z=zt),S=X,w=!1}function Nt(X,Le){X.side===ma?Ce(r.CULL_FACE):ce(r.CULL_FACE);let we=X.side===Yn;Le&&(we=!we),ot(we),X.blending===Cr&&X.transparent===!1?pt(xa):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){N!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),N=X)}function en(X){X!==$y?(ce(r.CULL_FACE),X!==H&&(X===Xg?r.cullFace(r.BACK):X===eS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),H=X}function G(X){X!==ie&&(B&&r.lineWidth(X),ie=X)}function Zt(X,Le,we){X?(ce(r.POLYGON_OFFSET_FILL),(ae!==Le||he!==we)&&(r.polygonOffset(Le,we),ae=Le,he=we)):Ce(r.POLYGON_OFFSET_FILL)}function Mt(X){X?ce(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=r.TEXTURE0+oe-1),_e!==X&&(r.activeTexture(X),_e=X)}function Ye(X,Le,we){we===void 0&&(_e===null?we=r.TEXTURE0+oe-1:we=_e);let Ie=ve[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},ve[we]=Ie),(Ie.type!==X||Ie.texture!==Le)&&(_e!==we&&(r.activeTexture(we),_e=we),r.bindTexture(X,Le||W[X]),Ie.type=X,Ie.texture=Le)}function L(){const X=ve[_e];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function pe(){try{r.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Se(){try{r.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ne(){try{r.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Xe(){try{r.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function nt(){try{r.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ee(){try{r.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ae(X){ge.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function Be(X){Te.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Te.copy(X))}function ze(X,Le){let we=m.get(Le);we===void 0&&(we=new WeakMap,m.set(Le,we));let Ie=we.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,X.name),we.set(X,Ie))}function De(X,Le){const Ie=m.get(Le).get(X);g.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,X.__bindingPointIndex),g.set(Le,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},_e=null,ve={},x={},y=new WeakMap,M=[],A=null,T=!1,S=null,_=null,U=null,D=null,P=null,I=null,F=null,z=new yt(0,0,0),Z=0,w=!1,N=null,H=null,ie=null,ae=null,he=null,ge.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ce,disable:Ce,bindFramebuffer:je,drawBuffers:Ge,useProgram:ht,setBlending:pt,setMaterial:Nt,setFlipSided:ot,setCullFace:en,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:Mt,activeTexture:Ot,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:nt,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Ne,texStorage3D:Xe,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ae,viewport:Be,reset:ct}}function aA(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,v=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):qc("canvas")}function T(L,E,q){let pe=1;const Se=Ye(L);if((Se.width>q||Se.height>q)&&(pe=q/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*Se.width),Ke=Math.floor(pe*Se.height);x===void 0&&(x=A(fe,Ke));const Ne=E?A(fe,Ke):x;return Ne.width=fe,Ne.height=Ke,Ne.getContext("2d").drawImage(L,0,0,fe,Ke),at("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+fe+"x"+Ke+")."),Ne}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(L,E,q,pe,Se=!1){if(L!==null){if(r[L]!==void 0)return r[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=E;if(E===r.RED&&(q===r.FLOAT&&(fe=r.R32F),q===r.HALF_FLOAT&&(fe=r.R16F),q===r.UNSIGNED_BYTE&&(fe=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.R8UI),q===r.UNSIGNED_SHORT&&(fe=r.R16UI),q===r.UNSIGNED_INT&&(fe=r.R32UI),q===r.BYTE&&(fe=r.R8I),q===r.SHORT&&(fe=r.R16I),q===r.INT&&(fe=r.R32I)),E===r.RG&&(q===r.FLOAT&&(fe=r.RG32F),q===r.HALF_FLOAT&&(fe=r.RG16F),q===r.UNSIGNED_BYTE&&(fe=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RG8UI),q===r.UNSIGNED_SHORT&&(fe=r.RG16UI),q===r.UNSIGNED_INT&&(fe=r.RG32UI),q===r.BYTE&&(fe=r.RG8I),q===r.SHORT&&(fe=r.RG16I),q===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),q===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),q===r.UNSIGNED_INT&&(fe=r.RGB32UI),q===r.BYTE&&(fe=r.RGB8I),q===r.SHORT&&(fe=r.RGB16I),q===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),q===r.UNSIGNED_INT&&(fe=r.RGBA32UI),q===r.BYTE&&(fe=r.RGBA8I),q===r.SHORT&&(fe=r.RGBA16I),q===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const Ke=Se?Xc:Tt.getTransfer(pe);q===r.FLOAT&&(fe=r.RGBA32F),q===r.HALF_FLOAT&&(fe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(fe=Ke===kt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,E){let q;return L?E===null||E===Hi||E===Wo?q=r.DEPTH24_STENCIL8:E===Bi?q=r.DEPTH32F_STENCIL8:E===Xo&&(q=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===Wo?q=r.DEPTH_COMPONENT24:E===Bi?q=r.DEPTH_COMPONENT32F:E===Xo&&(q=r.DEPTH_COMPONENT16),q}function I(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&v.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),N(E)}function Z(L){const E=s.get(L);if(E.__webglInit===void 0)return;const q=L.source,pe=y.get(q);if(pe){const Se=pe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(L),Object.keys(pe).length===0&&y.delete(q)}s.remove(L)}function w(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const q=L.source,pe=y.get(q);delete pe[E.__cacheKey],d.memory.textures--}function N(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let Se=0;Se<E.__webglFramebuffer[pe].length;Se++)r.deleteFramebuffer(E.__webglFramebuffer[pe][Se]);else r.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)r.deleteFramebuffer(E.__webglFramebuffer[pe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let pe=0,Se=q.length;pe<Se;pe++){const fe=s.get(q[pe]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),d.memory.textures--),s.remove(q[pe])}s.remove(L)}let H=0;function ie(){H=0}function ae(){const L=H;return L>=l.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function he(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function oe(L,E){const q=s.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const pe=L.image;if(pe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function B(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){W(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function k(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){W(q,L,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function J(L,E){const q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){ce(q,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const _e={[nh]:r.REPEAT,[ga]:r.CLAMP_TO_EDGE,[ih]:r.MIRRORED_REPEAT},ve={[Cn]:r.NEAREST,[SS]:r.NEAREST_MIPMAP_NEAREST,[dc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[dd]:r.LINEAR_MIPMAP_NEAREST,[Cs]:r.LINEAR_MIPMAP_LINEAR},O={[TS]:r.NEVER,[NS]:r.ALWAYS,[AS]:r.LESS,[Zh]:r.LEQUAL,[wS]:r.EQUAL,[Kh]:r.GEQUAL,[RS]:r.GREATER,[CS]:r.NOTEQUAL};function ne(L,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===dd||E.magFilter===dc||E.magFilter===Cs||E.minFilter===On||E.minFilter===dd||E.minFilter===dc||E.minFilter===Cs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,_e[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,_e[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,_e[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ve[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==dc&&E.minFilter!==Cs||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ge(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let Se=y.get(pe);Se===void 0&&(Se={},y.set(pe,Se));const fe=he(E);if(fe!==L.__cacheKey){Se[fe]===void 0&&(Se[fe]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,q=!0),Se[fe].usedTimes++;const Ke=Se[L.__cacheKey];Ke!==void 0&&(Se[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(E)),L.__cacheKey=fe,L.__webglTexture=Se[fe].texture}return q}function Te(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Fe(L,E,q,pe){const fe=L.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,pe,E.data);else{fe.sort((Ee,Ae)=>Ee.start-Ae.start);let Ke=0;for(let Ee=1;Ee<fe.length;Ee++){const Ae=fe[Ke],Be=fe[Ee],ze=Ae.start+Ae.count,De=Te(Be.start,E.width,4),ct=Te(Ae.start,E.width,4);Be.start<=ze+1&&De===ct&&Te(Be.start+Be.count-1,E.width,4)===De?Ae.count=Math.max(Ae.count,Be.start+Be.count-Ae.start):(++Ke,fe[Ke]=Be)}fe.length=Ke+1;const Ne=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const Be=fe[Ee],ze=Math.floor(Be.start/4),De=Math.ceil(Be.count/4),ct=ze%E.width,X=Math.floor(ze/E.width),Le=De,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ct,X,Le,we,q,pe,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function W(L,E,q){let pe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=r.TEXTURE_3D);const Se=ge(L,E),fe=E.source;i.bindTexture(pe,L.__webglTexture,r.TEXTURE0+q);const Ke=s.get(fe);if(fe.version!==Ke.__version||Se===!0){i.activeTexture(r.TEXTURE0+q);const Ne=Tt.getPrimaries(Tt.workingColorSpace),Xe=E.colorSpace===$a?null:Tt.getPrimaries(E.colorSpace),nt=E.colorSpace===$a||Ne===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=T(E.image,!1,l.maxTextureSize);Ee=Ot(E,Ee);const Ae=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let ze=D(E.internalFormat,Ae,Be,E.colorSpace,E.isVideoTexture);ne(pe,E);let De;const ct=E.mipmaps,X=E.isVideoTexture!==!0,Le=Ke.__version===void 0||Se===!0,we=fe.dataReady,Ie=I(E,Ee);if(E.isDepthTexture)ze=P(E.format===Ns,E.type),Le&&(X?i.texStorage2D(r.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Be,null));else if(E.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,ct[0].width,ct[0].height);for(let Me=0,be=ct.length;Me<be;Me++)De=ct[Me],X?we&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,Ae,Be,De.data):i.texImage2D(r.TEXTURE_2D,Me,ze,De.width,De.height,0,Ae,Be,De.data);E.generateMipmaps=!1}else X?(Le&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,Ee.width,Ee.height),we&&Fe(E,Ee,Ae,Be)):i.texImage2D(r.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ae,Be,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,ct[0].width,ct[0].height,Ee.depth);for(let Me=0,be=ct.length;Me<be;Me++)if(De=ct[Me],E.format!==Ri)if(Ae!==null)if(X){if(we)if(E.layerUpdates.size>0){const Re=Ex(De.width,De.height,E.format,E.type);for(const it of E.layerUpdates){const zt=De.data.subarray(it*Re/De.data.BYTES_PER_ELEMENT,(it+1)*Re/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,it,De.width,De.height,1,Ae,zt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Ae,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,ze,De.width,De.height,Ee.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Ae,Be,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,ze,De.width,De.height,Ee.depth,0,Ae,Be,De.data)}else{X&&Le&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,ct[0].width,ct[0].height);for(let Me=0,be=ct.length;Me<be;Me++)De=ct[Me],E.format!==Ri?Ae!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,Ae,De.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,ze,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,De.width,De.height,Ae,Be,De.data):i.texImage2D(r.TEXTURE_2D,Me,ze,De.width,De.height,0,Ae,Be,De.data)}else if(E.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,Ee.width,Ee.height,Ee.depth),we)if(E.layerUpdates.size>0){const Me=Ex(Ee.width,Ee.height,E.format,E.type);for(const be of E.layerUpdates){const Re=Ee.data.subarray(be*Me/Ee.data.BYTES_PER_ELEMENT,(be+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Ee.width,Ee.height,1,Ae,Be,Re)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Be,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Be,Ee.data);else if(E.isData3DTexture)X?(Le&&i.texStorage3D(r.TEXTURE_3D,Ie,ze,Ee.width,Ee.height,Ee.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Be,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ae,Be,Ee.data);else if(E.isFramebufferTexture){if(Le)if(X)i.texStorage2D(r.TEXTURE_2D,Ie,ze,Ee.width,Ee.height);else{let Me=Ee.width,be=Ee.height;for(let Re=0;Re<Ie;Re++)i.texImage2D(r.TEXTURE_2D,Re,ze,Me,be,0,Ae,Be,null),Me>>=1,be>>=1}}else if(ct.length>0){if(X&&Le){const Me=Ye(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ie,ze,Me.width,Me.height)}for(let Me=0,be=ct.length;Me<be;Me++)De=ct[Me],X?we&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ae,Be,De):i.texImage2D(r.TEXTURE_2D,Me,ze,Ae,Be,De);E.generateMipmaps=!1}else if(X){if(Le){const Me=Ye(Ee);i.texStorage2D(r.TEXTURE_2D,Ie,ze,Me.width,Me.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Be,Ee)}else i.texImage2D(r.TEXTURE_2D,0,ze,Ae,Be,Ee);S(E)&&_(pe),Ke.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ce(L,E,q){if(E.image.length!==6)return;const pe=ge(L,E),Se=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+q);const fe=s.get(Se);if(Se.version!==fe.__version||pe===!0){i.activeTexture(r.TEXTURE0+q);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Ne=E.colorSpace===$a?null:Tt.getPrimaries(E.colorSpace),Xe=E.colorSpace===$a||Ke===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let be=0;be<6;be++)!nt&&!Ee?Ae[be]=T(E.image[be],!0,l.maxCubemapSize):Ae[be]=Ee?E.image[be].image:E.image[be],Ae[be]=Ot(E,Ae[be]);const Be=Ae[0],ze=c.convert(E.format,E.colorSpace),De=c.convert(E.type),ct=D(E.internalFormat,ze,De,E.colorSpace),X=E.isVideoTexture!==!0,Le=fe.__version===void 0||pe===!0,we=Se.dataReady;let Ie=I(E,Be);ne(r.TEXTURE_CUBE_MAP,E);let Me;if(nt){X&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Be.width,Be.height);for(let be=0;be<6;be++){Me=Ae[be].mipmaps;for(let Re=0;Re<Me.length;Re++){const it=Me[Re];E.format!==Ri?ze!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,0,0,it.width,it.height,ze,it.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,ct,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,0,0,it.width,it.height,ze,De,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,ct,it.width,it.height,0,ze,De,it.data)}}}else{if(Me=E.mipmaps,X&&Le){Me.length>0&&Ie++;const be=Ye(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,be.width,be.height)}for(let be=0;be<6;be++)if(Ee){X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ae[be].width,Ae[be].height,ze,De,Ae[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Ae[be].width,Ae[be].height,0,ze,De,Ae[be].data);for(let Re=0;Re<Me.length;Re++){const zt=Me[Re].image[be].image;X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,0,0,zt.width,zt.height,ze,De,zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,ct,zt.width,zt.height,0,ze,De,zt.data)}}else{X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze,De,Ae[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,ze,De,Ae[be]);for(let Re=0;Re<Me.length;Re++){const it=Me[Re];X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,0,0,ze,De,it.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,ct,ze,De,it.image[be])}}}S(E)&&_(r.TEXTURE_CUBE_MAP),fe.__version=Se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ce(L,E,q,pe,Se,fe){const Ke=c.convert(q.format,q.colorSpace),Ne=c.convert(q.type),Xe=D(q.internalFormat,Ke,Ne,q.colorSpace),nt=s.get(E),Ee=s.get(q);if(Ee.__renderTarget=E,!nt.__hasExternalTextures){const Ae=Math.max(1,E.width>>fe),Be=Math.max(1,E.height>>fe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,fe,Xe,Ae,Be,E.depth,0,Ke,Ne,null):i.texImage2D(Se,fe,Xe,Ae,Be,0,Ke,Ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Zt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Se,Ee.__webglTexture,0,G(E)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Se,Ee.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function je(L,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,fe=P(E.stencilBuffer,Se),Ke=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),fe,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,L)}else{const pe=E.textures;for(let Se=0;Se<pe.length;Se++){const fe=pe[Se],Ke=c.convert(fe.format,fe.colorSpace),Ne=c.convert(fe.type),Xe=D(fe.internalFormat,Ke,Ne,fe.colorSpace);Zt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),Xe,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),Xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(L,E,q){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),ne(r.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),Ee=c.convert(E.depthTexture.type);let Ae;E.depthTexture.format===ba?Ae=r.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(Ae=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ae,E.width,E.height,0,nt,Ee,null)}}else oe(E.depthTexture,0);const fe=Se.__webglTexture,Ke=G(E),Ne=pe?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Xe=E.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)Zt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ne,fe,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ne,fe,0);else if(E.depthTexture.format===Ns)Zt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ne,fe,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function ht(L){const E=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Ge(E.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Ge(E.__webglFramebuffer[0],L,0):Ge(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=r.createRenderbuffer(),je(E.__webglDepthbuffer[pe],L,!1);else{const Se=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),je(E.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(L,E,q){const pe=s.get(L);E!==void 0&&Ce(pe.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ht(L)}function xt(L){const E=L.texture,q=s.get(L),pe=s.get(E);L.addEventListener("dispose",z);const Se=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ke=Se.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=E.version,d.memory.textures++),fe){q.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ne]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)q.__webglFramebuffer[Ne][Xe]=r.createFramebuffer()}else q.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)q.__webglFramebuffer[Ne]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Ne=0,Xe=Se.length;Ne<Xe;Ne++){const nt=s.get(Se[Ne]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&Zt(L)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Se.length;Ne++){const Xe=Se[Ne];q.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ne]);const nt=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),Ae=D(Xe.internalFormat,nt,Ee,Xe.colorSpace,L.isXRRenderTarget===!0),Be=G(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),je(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(r.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Ce(q.__webglFramebuffer[Ne][Xe],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe);else Ce(q.__webglFramebuffer[Ne],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ne=0,Xe=Se.length;Ne<Xe;Ne++){const nt=Se[Ne],Ee=s.get(nt);let Ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),ne(Ae,nt),Ce(q.__webglFramebuffer,L,nt,r.COLOR_ATTACHMENT0+Ne,Ae,0),S(nt)&&_(Ae)}i.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,pe.__webglTexture),ne(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Ce(q.__webglFramebuffer[Xe],L,E,r.COLOR_ATTACHMENT0,Ne,Xe);else Ce(q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Ne,0);S(E)&&_(Ne),i.unbindTexture()}L.depthBuffer&&ht(L)}function pt(L){const E=L.textures;for(let q=0,pe=E.length;q<pe;q++){const Se=E[q];if(S(Se)){const fe=U(L),Ke=s.get(Se).__webglTexture;i.bindTexture(fe,Ke),_(fe),i.unbindTexture()}}}const Nt=[],ot=[];function en(L){if(L.samples>0){if(Zt(L)===!1){const E=L.textures,q=L.width,pe=L.height;let Se=r.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(L),Ne=E.length>1;if(Ne)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=s.get(E[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,q,pe,0,0,q,pe,Se,r.NEAREST),g===!0&&(Nt.length=0,ot.length=0,Nt.push(r.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(fe),ot.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=s.get(E[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&g){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Zt(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){const E=d.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Ot(L,E){const q=L.colorSpace,pe=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Pr&&q!==$a&&(Tt.getTransfer(q)===kt?(pe!==Ri||Se!==ai)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.setTexture2D=oe,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=$t,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sA(r,e){function i(s,l=$a){let c;const d=Tt.getTransfer(l);if(s===ai)return r.UNSIGNED_BYTE;if(s===Vh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lv)return r.BYTE;if(s===cv)return r.SHORT;if(s===Xo)return r.UNSIGNED_SHORT;if(s===Hh)return r.INT;if(s===Hi)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===_a)return r.HALF_FLOAT;if(s===dv)return r.ALPHA;if(s===hv)return r.RGB;if(s===Ri)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===pv)return r.RED;if(s===Wh)return r.RED_INTEGER;if(s===Or)return r.RG;if(s===qh)return r.RG_INTEGER;if(s===Yh)return r.RGBA_INTEGER;if(s===Fc||s===kc||s===jc||s===Gc)if(d===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ah||s===sh||s===rh||s===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===lh||s===ch)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===fh)return c.COMPRESSED_R11_EAC;if(s===dh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===hh)return c.COMPRESSED_RG11_EAC;if(s===ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===mh||s===gh||s===xh||s===vh||s===_h||s===bh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Rh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Th)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ah)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ch||s===Nh||s===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ch)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Uh||s===Lh||s===Oh||s===Ph)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Uh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Oh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ph)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Cv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Xi({vertexShader:rA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Jc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends Ir{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",g=1,m=null,v=null,x=null,y=null,M=null,A=null;const T=typeof XRWebGLBinding<"u",S=new lA,_={},U=i.getContextAttributes();let D=null,P=null;const I=[],F=[],z=new Ct;let Z=null;const w=new qn;w.viewport=new an;const N=new qn;N.viewport=new an;const H=[w,N],ie=new _1;let ae=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ce=I[W];return ce===void 0&&(ce=new Pd,I[W]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(W){let ce=I[W];return ce===void 0&&(ce=new Pd,I[W]=ce),ce.getGripSpace()},this.getHand=function(W){let ce=I[W];return ce===void 0&&(ce=new Pd,I[W]=ce),ce.getHandSpace()};function oe(W){const ce=F.indexOf(W.inputSource);if(ce===-1)return;const Ce=I[ce];Ce!==void 0&&(Ce.update(W.inputSource,W.frame,m||d),Ce.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",k);for(let W=0;W<I.length;W++){const ce=F[W];ce!==null&&(F[W]=null,I[W].disconnect(ce))}ae=null,he=null,S.reset();for(const W in _)delete _[W];e.setRenderTarget(D),M=null,y=null,x=null,l=null,P=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",B),l.addEventListener("inputsourceschange",k),U.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,je=null,Ge=null;U.depth&&(Ge=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=U.stencil?Ns:ba,je=U.stencil?Wo:Hi);const ht={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};x=this.getBinding(),y=x.createProjectionLayer(ht),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ji(y.textureWidth,y.textureHeight,{format:Ri,type:ai,depthTexture:new Yo(y.textureWidth,y.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ji(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await l.requestReferenceSpace(h),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(W){for(let ce=0;ce<W.removed.length;ce++){const Ce=W.removed[ce],je=F.indexOf(Ce);je>=0&&(F[je]=null,I[je].disconnect(Ce))}for(let ce=0;ce<W.added.length;ce++){const Ce=W.added[ce];let je=F.indexOf(Ce);if(je===-1){for(let ht=0;ht<I.length;ht++)if(ht>=F.length){F.push(Ce),je=ht;break}else if(F[ht]===null){F[ht]=Ce,je=ht;break}if(je===-1)break}const Ge=I[je];Ge&&Ge.connect(Ce)}}const J=new $,_e=new $;function ve(W,ce,Ce){J.setFromMatrixPosition(ce.matrixWorld),_e.setFromMatrixPosition(Ce.matrixWorld);const je=J.distanceTo(_e),Ge=ce.projectionMatrix.elements,ht=Ce.projectionMatrix.elements,$t=Ge[14]/(Ge[10]-1),xt=Ge[14]/(Ge[10]+1),pt=(Ge[9]+1)/Ge[5],Nt=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],en=(ht[8]+1)/ht[0],G=$t*ot,Zt=$t*en,Mt=je/(-ot+en),Ot=Mt*-ot;if(ce.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ot),W.translateZ(Mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ge[10]===-1)W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ye=$t+Mt,L=xt+Mt,E=G-Ot,q=Zt+(je-Ot),pe=pt*xt/L*Ye,Se=Nt*xt/L*Ye;W.projectionMatrix.makePerspective(E,q,pe,Se,Ye,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function O(W,ce){ce===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ce.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ce=W.near,Ce=W.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),ie.near=N.near=w.near=ce,ie.far=N.far=w.far=Ce,(ae!==ie.near||he!==ie.far)&&(l.updateRenderState({depthNear:ie.near,depthFar:ie.far}),ae=ie.near,he=ie.far),ie.layers.mask=W.layers.mask|6,w.layers.mask=ie.layers.mask&3,N.layers.mask=ie.layers.mask&5;const je=W.parent,Ge=ie.cameras;O(ie,je);for(let ht=0;ht<Ge.length;ht++)O(Ge[ht],je);Ge.length===2?ve(ie,w,N):ie.projectionMatrix.copy(w.projectionMatrix),ne(W,ie,je)};function ne(W,ce,Ce){Ce===null?W.matrix.copy(ce.matrixWorld):(W.matrix.copy(Ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(ce.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(y===null&&M===null))return g},this.setFoveation=function(W){g=W,y!==null&&(y.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ie)},this.getCameraTexture=function(W){return _[W]};let ge=null;function Te(W,ce){if(v=ce.getViewerPose(m||d),A=ce,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let je=!1;Ce.length!==ie.cameras.length&&(ie.cameras.length=0,je=!0);for(let xt=0;xt<Ce.length;xt++){const pt=Ce[xt];let Nt=null;if(M!==null)Nt=M.getViewport(pt);else{const en=x.getViewSubImage(y,pt);Nt=en.viewport,xt===0&&(e.setRenderTargetTextures(P,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(P))}let ot=H[xt];ot===void 0&&(ot=new qn,ot.layers.enable(xt),ot.viewport=new an,H[xt]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),xt===0&&(ie.matrix.copy(ot.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),je===!0&&ie.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){x=s.getBinding();const xt=x.getDepthInformation(Ce[0]);xt&&xt.isValid&&xt.texture&&S.init(xt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),x=s.getBinding();for(let xt=0;xt<Ce.length;xt++){const pt=Ce[xt].camera;if(pt){let Nt=_[pt];Nt||(Nt=new Cv,_[pt]=Nt);const ot=x.getCameraImage(pt);Nt.sourceTexture=ot}}}}for(let Ce=0;Ce<I.length;Ce++){const je=F[Ce],Ge=I[Ce];je!==null&&Ge!==void 0&&Ge.update(je,ce,m||d)}ge&&ge(W,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),A=null}const Fe=new Uv;Fe.setAnimationLoop(Te),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const Ts=new Vi,uA=new Jt;function fA(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Mv(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,U,D,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),A(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?g(S,_,U,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),D=U.envMap,P=U.envMapRotation;D&&(S.envMap.value=D,Ts.copy(P),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),S.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(Ts)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function g(S,_,U,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dA(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(U,D){const P=D.program;s.uniformBlockBinding(U,P)}function m(U,D){let P=l[U.id];P===void 0&&(A(U),P=v(U),l[U.id]=P,U.addEventListener("dispose",S));const I=D.program;s.updateUBOMapping(U,I);const F=e.render.frame;c[U.id]!==F&&(y(U),c[U.id]=F)}function v(U){const D=x();U.__bindingPointIndex=D;const P=r.createBuffer(),I=U.__size,F=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,I,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,P),P}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const D=l[U.id],P=U.uniforms,I=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let F=0,z=P.length;F<z;F++){const Z=Array.isArray(P[F])?P[F]:[P[F]];for(let w=0,N=Z.length;w<N;w++){const H=Z[w];if(M(H,F,w,I)===!0){const ie=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let he=0;for(let oe=0;oe<ae.length;oe++){const B=ae[oe],k=T(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,ie+he,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,he),he+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ie,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,D,P,I){const F=U.value,z=D+"_"+P;if(I[z]===void 0)return typeof F=="number"||typeof F=="boolean"?I[z]=F:I[z]=F.clone(),!0;{const Z=I[z];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return I[z]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function A(U){const D=U.uniforms;let P=0;const I=16;for(let z=0,Z=D.length;z<Z;z++){const w=Array.isArray(D[z])?D[z]:[D[z]];for(let N=0,H=w.length;N<H;N++){const ie=w[N],ae=Array.isArray(ie.value)?ie.value:[ie.value];for(let he=0,oe=ae.length;he<oe;he++){const B=ae[he],k=T(B),J=P%I,_e=J%k.boundary,ve=J+_e;P+=_e,ve!==0&&I-ve<k.storage&&(P+=I-ve),ie.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=k.storage}}}const F=P%I;return F>0&&(P+=I-F),U.__size=P,U.__cache={},this}function T(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const U in l)r.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:g,update:m,dispose:_}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function pA(){return zi===null&&(zi=new i1(hA,16,16,Or,_a),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Iv{constructor(e={}){const{canvas:i=DS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const T=M,S=new Set([Yh,qh,Wh]),_=new Set([ai,Hi,Xo,Wo,Vh,Xh]),U=new Uint32Array(4),D=new Int32Array(4);let P=null,I=null;const F=[],z=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=gi;let H=0,ie=0,ae=null,he=-1,oe=null;const B=new an,k=new an;let J=null;const _e=new yt(0);let ve=0,O=i.width,ne=i.height,ge=1,Te=null,Fe=null;const W=new an(0,0,O,ne),ce=new an(0,0,O,ne);let Ce=!1;const je=new $h;let Ge=!1,ht=!1;const $t=new Jt,xt=new $,pt=new an,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function en(){return ae===null?ge:1}let G=s;function Zt(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const Y="webgl2";if(G=Zt(Y,C),G===null)throw Zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Rt("WebGLRenderer: "+C.message),C}let Mt,Ot,Ye,L,E,q,pe,Se,fe,Ke,Ne,Xe,nt,Ee,Ae,Be,ze,De,ct,X,Le,we,Ie,Me;function be(){Mt=new pT(G),Mt.init(),we=new sA(G,Mt),Ot=new sT(G,Mt,e,we),Ye=new iA(G,Mt),Ot.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),L=new xT(G),E=new G2,q=new aA(G,Mt,Ye,E,Ot,we,L),pe=new oT(w),Se=new hT(w),fe=new y1(G),Ie=new iT(G,fe),Ke=new mT(G,fe,L,Ie),Ne=new _T(G,Ke,fe,L),ct=new vT(G,Ot,q),Be=new rT(E),Xe=new j2(w,pe,Se,Mt,Ot,Ie,Be),nt=new fA(w,E),Ee=new V2,Ae=new K2(Mt),De=new nT(w,pe,Se,Ye,Ne,A,g),ze=new tA(w,Ne,Ot),Me=new dA(G,L,Ot,Ye),X=new aT(G,Mt,L),Le=new gT(G,Mt,L),L.programs=Xe.programs,w.capabilities=Ot,w.extensions=Mt,w.properties=E,w.renderLists=Ee,w.shadowMap=ze,w.state=Ye,w.info=L}be(),T!==ai&&(Z=new yT(T,i.width,i.height,l,c));const Re=new cA(w,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(O,ne,!1))},this.getSize=function(C){return C.set(O,ne)},this.setSize=function(C,Y,le=!0){if(Re.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ne=Y,i.width=Math.floor(C*ge),i.height=Math.floor(Y*ge),le===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(O*ge,ne*ge).floor()},this.setDrawingBufferSize=function(C,Y,le){O=C,ne=Y,ge=le,i.width=Math.floor(C*le),i.height=Math.floor(Y*le),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,Y,le,se){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,Y,le,se),Ye.viewport(B.copy(W).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,Y,le,se){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,Y,le,se),Ye.scissor(k.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Ye.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){Te=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,le=!0){let se=0;if(C){let Q=!1;if(ae!==null){const Ue=ae.texture.format;Q=S.has(Ue)}if(Q){const Ue=ae.texture.type,ke=_.has(Ue),Oe=De.getClearColor(),He=De.getClearAlpha(),We=Oe.r,$e=Oe.g,qe=Oe.b;ke?(U[0]=We,U[1]=$e,U[2]=qe,U[3]=He,G.clearBufferuiv(G.COLOR,0,U)):(D[0]=We,D[1]=$e,D[2]=qe,D[3]=He,G.clearBufferiv(G.COLOR,0,D))}else se|=G.COLOR_BUFFER_BIT}Y&&(se|=G.DEPTH_BUFFER_BIT),le&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),De.dispose(),Ee.dispose(),Ae.dispose(),E.dispose(),pe.dispose(),Se.dispose(),Ne.dispose(),Ie.dispose(),Me.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Os),Re.removeEventListener("sessionend",Gr),Di.stop()};function it(C){C.preventDefault(),$g("WebGLRenderer: Context Lost."),N=!0}function zt(){$g("WebGLRenderer: Context Restored."),N=!1;const C=L.autoReset,Y=ze.enabled,le=ze.autoUpdate,se=ze.needsUpdate,Q=ze.type;be(),L.autoReset=C,ze.enabled=Y,ze.autoUpdate=le,ze.needsUpdate=se,ze.type=Q}function Et(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const Y=C.target;Y.removeEventListener("dispose",Nn),vi(Y)}function vi(C){tl(C),E.remove(C)}function tl(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(le){Xe.releaseProgram(le)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,le,se,Q,Ue){Y===null&&(Y=Nt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=ns(C,Y,le,se,Q);Ye.setMaterial(se,ke);let He=le.index,We=1;if(se.wireframe===!0){if(He=Ke.getWireframeAttribute(le),He===void 0)return;We=2}const $e=le.drawRange,qe=le.attributes.position;let et=$e.start*We,Dt=($e.start+$e.count)*We;Ue!==null&&(et=Math.max(et,Ue.start*We),Dt=Math.min(Dt,(Ue.start+Ue.count)*We)),He!==null?(et=Math.max(et,0),Dt=Math.min(Dt,He.count)):qe!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,qe.count));const Kt=Dt-et;if(Kt<0||Kt===1/0)return;Ie.setup(Q,se,Oe,le,He);let Wt,Pt=X;if(He!==null&&(Wt=fe.get(He),Pt=Le,Pt.setIndex(Wt)),Q.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*en()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(Q.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*en()),Q.isLineSegments?Pt.setMode(G.LINES):Q.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else Q.isPoints?Pt.setMode(G.POINTS):Q.isSprite&&Pt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Ut=Q._multiDrawCounts,st=Q._multiDrawCount,bn=He?fe.get(He).bytesPerElement:1,Wi=E.get(se).currentProgram.getUniforms();for(let yn=0;yn<st;yn++)Wi.setValue(G,"_gl_DrawID",yn),Pt.render(Qe[yn]/bn,Ut[yn])}else if(Q.isInstancedMesh)Pt.renderInstances(et,Kt,Q.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ut=Math.min(le.instanceCount,Qe);Pt.renderInstances(et,Kt,Ut)}else Pt.render(et,Kt)};function kr(C,Y,le){C.transparent===!0&&C.side===ma&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,zs(C,Y,le),C.side=ts,C.needsUpdate=!0,zs(C,Y,le),C.side=ma):zs(C,Y,le)}this.compile=function(C,Y,le=null){le===null&&(le=C),I=Ae.get(le),I.init(Y),z.push(I),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),C!==le&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const se=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Oe=Ue[ke];kr(Oe,le,Q),se.add(Oe)}else kr(Ue,le,Q),se.add(Ue)}),I=z.pop(),se},this.compileAsync=function(C,Y,le=null){const se=this.compile(C,Y,le);return new Promise(Q=>{function Ue(){if(se.forEach(function(ke){E.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(C);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ls=null;function jr(C){Ls&&Ls(C)}function Os(){Di.stop()}function Gr(){Di.start()}const Di=new Uv;Di.setAnimationLoop(jr),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Ls=C,Re.setAnimationLoop(C),C===null?Di.stop():Di.start()},Re.addEventListener("sessionstart",Os),Re.addEventListener("sessionend",Gr),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const le=Re.enabled===!0&&Re.isPresenting===!0,se=Z!==null&&(ae===null||le)&&Z.begin(w,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Y,ae),I=Ae.get(C,z.length),I.init(Y),z.push(I),$t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),je.setFromProjectionMatrix($t,Fi,Y.reversedDepth),ht=this.localClippingEnabled,Ge=Be.init(this.clippingPlanes,ht),P=Ee.get(C,F.length),P.init(),F.push(P),Re.enabled===!0&&Re.isPresenting===!0){const ke=w.xr.getDepthSensingMesh();ke!==null&&si(ke,Y,-1/0,w.sortObjects)}si(C,Y,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Te,Fe),ot=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ot&&De.addToRenderList(P,C),this.info.render.frame++,Ge===!0&&Be.beginShadows();const Q=I.state.shadowsArray;if(ze.render(Q,C,Y),Ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&Z.hasRenderPass())===!1){const ke=P.opaque,Oe=P.transmissive;if(I.setupLights(),Y.isArrayCamera){const He=Y.cameras;if(Oe.length>0)for(let We=0,$e=He.length;We<$e;We++){const qe=He[We];_n(ke,Oe,C,qe)}ot&&De.render(C);for(let We=0,$e=He.length;We<$e;We++){const qe=He[We];on(P,C,qe,qe.viewport)}}else Oe.length>0&&_n(ke,Oe,C,Y),ot&&De.render(C),on(P,C,Y)}ae!==null&&ie===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),se&&Z.end(w),C.isScene===!0&&C.onAfterRender(w,C,Y),Ie.resetDefaultState(),he=-1,oe=null,z.pop(),z.length>0?(I=z[z.length-1],Ge===!0&&Be.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function si(C,Y,le,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||je.intersectsSprite(C)){se&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($t);const ke=Ne.update(C),Oe=C.material;Oe.visible&&P.push(C,ke,Oe,le,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||je.intersectsObject(C))){const ke=Ne.update(C),Oe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),pt.copy(ke.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4($t)),Array.isArray(Oe)){const He=ke.groups;for(let We=0,$e=He.length;We<$e;We++){const qe=He[We],et=Oe[qe.materialIndex];et&&et.visible&&P.push(C,ke,et,le,pt.z,qe)}}else Oe.visible&&P.push(C,ke,Oe,le,pt.z,null)}}const Ue=C.children;for(let ke=0,Oe=Ue.length;ke<Oe;ke++)si(Ue[ke],Y,le,se)}function on(C,Y,le,se){const{opaque:Q,transmissive:Ue,transparent:ke}=C;I.setupLightsView(le),Ge===!0&&Be.setGlobalState(w.clippingPlanes,le),se&&Ye.viewport(B.copy(se)),Q.length>0&&_i(Q,Y,le),Ue.length>0&&_i(Ue,Y,le),ke.length>0&&_i(ke,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function _n(C,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new ji(1,1,{generateMipmaps:!0,type:et?_a:ai,minFilter:Cs,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[se.id],ke=se.viewport||B;Ue.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),He=w.getActiveCubeFace(),We=w.getActiveMipmapLevel();w.setRenderTarget(Ue),w.getClearColor(_e),ve=w.getClearAlpha(),ve<1&&w.setClearColor(16777215,.5),w.clear(),ot&&De.render(le);const $e=w.toneMapping;w.toneMapping=ki;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ge===!0&&Be.setGlobalState(w.clippingPlanes,se),_i(C,le,se),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Kt=Y.length;Dt<Kt;Dt++){const Wt=Y[Dt],{object:Pt,geometry:Qe,material:Ut,group:st}=Wt;if(Ut.side===ma&&Pt.layers.test(se.layers)){const bn=Ut.side;Ut.side=Yn,Ut.needsUpdate=!0,Ps(Pt,le,se,Qe,Ut,st),Ut.side=bn,Ut.needsUpdate=!0,et=!0}}et===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}w.setRenderTarget(Oe,He,We),w.setClearColor(_e,ve),qe!==void 0&&(se.viewport=qe),w.toneMapping=$e}function _i(C,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=C.length;Q<Ue;Q++){const ke=C[Q],{object:Oe,geometry:He,group:We}=ke;let $e=ke.material;$e.allowOverride===!0&&se!==null&&($e=se),Oe.layers.test(le.layers)&&Ps(Oe,Y,le,He,$e,We)}}function Ps(C,Y,le,se,Q,Ue){C.onBeforeRender(w,Y,le,se,Q,Ue),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,Y,le,se,C,Ue),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,se,Q,C,Ue),Q.side=ts,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,se,Q,C,Ue),Q.side=ma):w.renderBufferDirect(le,Y,se,Q,C,Ue),C.onAfterRender(w,Y,le,se,Q,Ue)}function zs(C,Y,le){Y.isScene!==!0&&(Y=Nt);const se=E.get(C),Q=I.state.lights,Ue=I.state.shadowsArray,ke=Q.state.version,Oe=Xe.getParameters(C,Q.state,Ue,Y,le),He=Xe.getProgramCacheKey(Oe);let We=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?Se:pe).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Nn),We=new Map,se.programs=We);let $e=We.get(He);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===ke)return Hr(C,Oe),$e}else Oe.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Oe,w),$e=Xe.acquireProgram(Oe,He),We.set(He,$e),se.uniforms=Oe.uniforms;const qe=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Be.uniform),Hr(C,Oe),se.needsLights=ya(C),se.lightsStateVersion=ke,se.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMap.value=Q.state.directionalShadowMap,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotShadowMap.value=Q.state.spotShadowMap,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMap.value=Q.state.pointShadowMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function nl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Hr(C,Y){const le=E.get(C);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ns(C,Y,le,se,Q){Y.isScene!==!0&&(Y=Nt),q.resetTextureUnits();const Ue=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Oe=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Pr,He=(se.isMeshStandardMaterial?Se:pe).get(se.envMap||ke),We=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Kt=ki;se.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Kt=w.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pt=Wt!==void 0?Wt.length:0,Qe=E.get(se),Ut=I.state.lights;if(Ge===!0&&(ht===!0||C!==oe)){const Mn=C===oe&&se.id===he;Be.setState(se,C,Mn)}let st=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==Oe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==He||se.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Pt)&&(st=!0):(st=!0,Qe.__version=se.version);let bn=Qe.currentProgram;st===!0&&(bn=zs(se,Y,Q));let Wi=!1,yn=!1,ri=!1;const It=bn.getUniforms(),Sn=Qe.uniforms;if(Ye.useProgram(bn.program)&&(Wi=!0,yn=!0,ri=!0),se.id!==he&&(he=se.id,yn=!0),Wi||oe!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",C.projectionMatrix),It.setValue(G,"viewMatrix",C.matrixWorldInverse);const En=It.map.cameraPosition;En!==void 0&&En.setValue(G,xt.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),oe!==C&&(oe=C,yn=!0,ri=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,q),Ut.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,q),Ut.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,q)),Q.isSkinnedMesh){It.setOptional(G,Q,"bindMatrix"),It.setOptional(G,Q,"bindMatrixInverse");const Mn=Q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),It.setValue(G,"boneTexture",Mn.boneTexture,q))}Q.isBatchedMesh&&(It.setOptional(G,Q,"batchingTexture"),It.setValue(G,"batchingTexture",Q._matricesTexture,q),It.setOptional(G,Q,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",Q._indirectTexture,q),It.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",Q._colorsTexture,q));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ct.update(Q,le,bn),(yn||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,It.setValue(G,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=He,Sn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=pA()),yn&&(It.setValue(G,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&Vr(Sn,ri),Ue&&se.fog===!0&&nt.refreshFogUniforms(Sn,Ue),nt.refreshMaterialUniforms(Sn,se,ge,ne,I.state.transmissionRenderTarget[C.id]),Hc.upload(G,nl(Qe),Sn,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Hc.upload(G,nl(Qe),Sn,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(G,"center",Q.center),It.setValue(G,"modelViewMatrix",Q.modelViewMatrix),It.setValue(G,"normalMatrix",Q.normalMatrix),It.setValue(G,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Mn=se.uniformsGroups;for(let En=0,Is=Mn.length;En<Is;En++){const bi=Mn[En];Me.update(bi,bn),Me.bind(bi,bn)}}return bn}function Vr(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ya(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,Y,le){const se=E.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const le=E.get(C);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,le=0){ae=C,H=Y,ie=le;let se=null,Q=!1,Ue=!1;if(C){const Oe=E.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),B.copy(C.viewport),k.copy(C.scissor),J=C.scissorTest,Ye.viewport(B),Ye.scissor(k),Ye.setScissorTest(J),he=-1;return}else if(Oe.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Oe.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);const We=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?se=We[Y][le]:se=We[Y],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?se=E.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?se=We[le]:se=We,B.copy(C.viewport),k.copy(C.scissor),J=C.scissorTest}else B.copy(W).multiplyScalar(ge).floor(),k.copy(ce).multiplyScalar(ge).floor(),J=Ce;if(le!==0&&(se=Sa),Ye.bindFramebuffer(G.FRAMEBUFFER,se)&&Ye.drawBuffers(C,se),Ye.viewport(B),Ye.scissor(k),Ye.setScissorTest(J),Q){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,le)}else if(Ue){const Oe=Y;for(let He=0;He<C.textures.length;He++){const We=E.get(C.textures[He]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+He,We.__webglTexture,le,Oe)}}else if(C!==null&&le!==0){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,le)}he=-1},this.readRenderTargetPixels=function(C,Y,le,se,Q,Ue,ke,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){Ye.bindFramebuffer(G.FRAMEBUFFER,He);try{const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-Q&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,le,se,Q,we.convert($e),we.convert(qe),Ue))}finally{const We=ae!==null?E.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,Y,le,se,Q,Ue,ke,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He)if(Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-Q){Ye.bindFramebuffer(G.FRAMEBUFFER,He);const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,le,se,Q,we.convert($e),we.convert(qe),0);const Dt=ae!==null?E.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Dt);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await US(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(et),G.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,le=0){const se=Math.pow(2,-le),Q=Math.floor(C.image.width*se),Ue=Math.floor(C.image.height*se),ke=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,ke,Oe,Q,Ue),Ye.unbindTexture()};const is=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,le=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let ke,Oe,He,We,$e,qe,et,Dt,Kt;const Wt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(le!==null)ke=le.max.x-le.min.x,Oe=le.max.y-le.min.y,He=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,$e=le.min.y,qe=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-Q);ke=Math.floor(Wt.width*hn),Oe=Math.floor(Wt.height*hn),C.isDataArrayTexture?He=Wt.depth:C.isData3DTexture?He=Math.floor(Wt.depth*hn):He=1,We=0,$e=0,qe=0}se!==null?(et=se.x,Dt=se.y,Kt=se.z):(et=0,Dt=0,Kt=0);const Pt=we.convert(Y.format),Qe=we.convert(Y.type);let Ut;Y.isData3DTexture?(q.setTexture3D(Y,0),Ut=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ut=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ut=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const st=G.getParameter(G.UNPACK_ROW_LENGTH),bn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Wi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const It=C.isDataArrayTexture||C.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const hn=E.get(C),Mn=E.get(Y),En=E.get(hn.__renderTarget),Is=E.get(Mn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let bi=0;bi<He;bi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(C).__webglTexture,Q,qe+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ue,Kt+bi)),G.blitFramebuffer(We,$e,ke,Oe,et,Dt,ke,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||E.has(C)){const hn=E.get(C),Mn=E.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,is),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<He;En++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,Q,qe+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,Q),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ue,Kt+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ue),Q!==0?G.blitFramebuffer(We,$e,ke,Oe,et,Dt,ke,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Ut,Ue,et,Dt,Kt+En,We,$e,ke,Oe):G.copyTexSubImage2D(Ut,Ue,et,Dt,We,$e,ke,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ut,Ue,et,Dt,Kt,ke,Oe,He,Pt,Qe,Wt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ut,Ue,et,Dt,Kt,ke,Oe,He,Pt,Wt.data):G.texSubImage3D(Ut,Ue,et,Dt,Kt,ke,Oe,He,Pt,Qe,Wt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,ke,Oe,Pt,Qe,Wt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,et,Dt,Wt.width,Wt.height,Pt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,ke,Oe,Pt,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,st),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ue===0&&Y.generateMipmaps&&G.generateMipmap(Ut),Ye.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){H=0,ie=0,ae=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const mA=()=>{const r=ye.useRef(null);return ye.useEffect(()=>{if(!r.current)return;const e=window.innerWidth,i=window.innerHeight,s=new wv,l=new qn(75,e/i,.1,1e3);l.position.z=30;const c=new Iv({alpha:!0,antialias:!0});c.setSize(e,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.innerHTML="",r.current.appendChild(c.domElement);const d=new $c(10,3,100,16),h=new Jh({color:0,wireframe:!0,transparent:!0,opacity:.08}),g=new Ni(d,h);s.add(g);let m;const v=()=>{m=requestAnimationFrame(v),g.rotation.x+=.001,g.rotation.y+=.002,c.render(s,l)};v();const x=()=>{if(!r.current)return;const y=window.innerWidth,M=window.innerHeight;l.aspect=y/M,l.updateProjectionMatrix(),c.setSize(y,M)};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(m),r.current&&(r.current.innerHTML=""),d.dispose(),h.dispose(),c.dispose()}},[]),p.jsx("div",{ref:r,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none"})},gA=()=>{const r=ye.useRef(null);return ye.useEffect(()=>{if(!r.current)return;r.current.innerHTML="";const e=r.current.clientWidth||1,i=r.current.clientHeight||1,s=new wv;s.background=new yt(0);const l=new qn(45,e/i,.1,100);l.position.z=6;const c=new Iv({antialias:!0,alpha:!0});c.setSize(e,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.appendChild(c.domElement);const d=new $c(.85,.28,150,20),h=new h1({color:16777215,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:3355443}),g=new Ni(d,h);s.add(g);const m=new u1(d),v=new Rv({color:16777215,transparent:!0,opacity:.1}),x=new l1(m,v);g.add(x);const y=new v1(16777215,.8);s.add(y);const M=new Mx(16777215,1.2);M.position.set(10,10,10),s.add(M);const A=new Mx(4474111,.6);A.position.set(-10,-5,5),s.add(A);let T=0,S=0;const _=I=>{T=I.clientX/window.innerWidth*2-1,S=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",_);let U;const D=()=>{g.rotation.x+=.008+S*.03,g.rotation.y+=.008+T*.03;const I=Date.now()*.002,F=1+Math.sin(I)*.03;g.scale.set(F,F,F),c.render(s,l),U=requestAnimationFrame(D)};D();const P=new ResizeObserver(I=>{for(let F of I){const{width:z,height:Z}=F.contentRect;z>0&&Z>0&&(l.aspect=z/Z,l.updateProjectionMatrix(),c.setSize(z,Z))}});return P.observe(r.current),()=>{window.removeEventListener("mousemove",_),P.disconnect(),cancelAnimationFrame(U),d.dispose(),h.dispose(),c.dispose(),r.current&&(r.current.innerHTML="")}},[]),p.jsx("div",{ref:r,className:"w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing pointer-events-auto"})},xA=({project:r,index:e,navigateTo:i,setCursorHovering:s,setIsEyeMode:l,revealClass:c,addToRefs:d})=>{const h=ye.useRef(null),g=()=>{l(!0),h.current&&h.current.play().catch(v=>{console.log("Autoplay prevented",v)})},m=()=>{l(!1),h.current&&(h.current.pause(),h.current.currentTime=0)};return p.jsx("div",{className:"w-full py-24 transition-colors duration-500 bg-white border-b border-black/5 relative z-20",children:p.jsx("div",{ref:d,className:`group cursor-pointer ${c} px-6 md:px-12 max-w-[1600px] mx-auto relative z-10`,children:p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center",children:[p.jsxs("div",{className:`relative aspect-[16/9] bg-neutral-200/50 rounded-lg overflow-hidden shadow-sm ${r.alignRight?"order-1 md:order-2":"order-2 md:order-1"}`,onMouseEnter:g,onMouseLeave:m,onClick:()=>i("project",r.id),children:[r.video&&p.jsx("video",{ref:h,src:r.video,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10"}),p.jsx("div",{className:"absolute inset-0 bg-neutral-300/30 flex items-center justify-center z-20 transition-transform duration-[1200ms] ease-out group-hover:scale-105",children:r.image?p.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover",onError:Jy}):p.jsx("div",{className:"text-black/10 text-8xl font-bold tracking-tighter select-none",children:r.id})})]}),p.jsxs("div",{className:`flex flex-col justify-center h-full ${r.alignRight?"order-2 md:order-1 md:text-right":"order-1 md:order-2 text-left"}`,children:[p.jsx("h4",{className:"text-sm text-black/40 uppercase tracking-widest mb-4 font-medium",children:r.category}),p.jsx("h3",{onClick:()=>i("project",r.id),className:"text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-black/70 transition-colors cursor-pointer",children:r.title}),p.jsx("p",{className:`text-black/60 text-lg leading-relaxed max-w-md mb-8 ${r.alignRight?"ml-auto":""}`,children:r.desc}),p.jsx("div",{className:`flex mt-4 ${r.alignRight?"justify-end":"justify-start"}`,children:p.jsxs("button",{className:"relative overflow-hidden group border border-black/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-3",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>i("project",r.id),children:[p.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsxs("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2",children:["View Project ",p.jsx(Ci,{size:16})]})]})})]})]})})})},vA=({setCursorHovering:r,setIsEyeMode:e,setIsVideoHovering:i,navigateTo:s})=>{const[l,c]=ye.useState(5),d=ye.useRef([]),h=ye.useRef(null);ye.useEffect(()=>{const v=new IntersectionObserver(x=>{x.forEach(y=>{y.isIntersecting&&(y.target.classList.add("opacity-100","translate-y-0"),y.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>d.current.forEach(x=>x&&v.observe(x)),100),()=>v.disconnect()},[l]),ye.useEffect(()=>{const v=()=>{if(h.current){const x=window.scrollY;h.current.style.transform=`translateY(${x*.2}px)`,h.current.style.opacity=`${1-x/700}`}};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const g=v=>{v&&!d.current.includes(v)&&d.current.push(v)},m="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("div",{className:"w-full",children:[p.jsxs("header",{className:"snap-start min-h-screen relative pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto bg-white text-black overflow-hidden",children:[p.jsx(mA,{}),p.jsxs("div",{ref:h,className:"max-w-5xl z-10 mb-8 relative select-none will-change-transform",children:[p.jsx("h5",{ref:g,className:`text-sm md:text-base text-black/50 mb-6 uppercase tracking-[0.2em] ${m}`,children:"A Next-Gen Creative Agency"}),p.jsxs("h1",{ref:g,className:`text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8 mix-blend-multiply ${m} delay-[100ms]`,children:["Global Digital ",p.jsx("br",{}),p.jsx("span",{className:"text-black/40",children:"Architecture Agency."})]}),p.jsx("p",{ref:g,className:`text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed ${m} delay-[200ms]`,children:"Beyond standard execution. We empower forward-thinking brands with intelligent strategy and radical visual systems ensuring your brand stays ahead of the curve."})]})]}),p.jsx("section",{className:"snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20 relative z-30",children:p.jsxs("div",{className:"max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full items-center",children:[p.jsxs("div",{className:"space-y-8",children:[p.jsx("h2",{ref:g,className:`text-3xl md:text-5xl font-light tracking-tight leading-snug ${m}`,children:"We build ecosystems, we engineer high-scale digital assets specific for aggressive scale-ups through creative AI integration."}),p.jsxs("div",{ref:g,className:`flex flex-col justify-end ${m} delay-[200ms]`,children:[p.jsx("p",{className:"text-white/60 mb-8 leading-relaxed text-lg",children:"Guaranteed for long-term growth, ensuring every creative asset performs at peak efficiency without compromise."}),p.jsxs("button",{onClick:()=>s("company"),className:"relative overflow-hidden group border border-white/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-4 w-fit hover:border-white",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx("span",{className:"absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsxs("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2",children:["Our Vision ",p.jsx(Ci,{size:18})]})]})]})]}),p.jsxs("div",{ref:g,className:`w-full aspect-video bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl ${m} delay-[300ms]`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[p.jsx("video",{src:"/projects/showcase.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover opacity-60"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10"})]})]})}),p.jsxs("section",{id:"projects",className:"snap-start min-h-screen flex flex-col justify-center bg-white text-black py-32 relative z-30",children:[p.jsx("div",{className:"max-w-[1600px] mx-auto w-full px-6 md:px-12 relative z-20",children:p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8 bg-white",children:[p.jsx("h2",{ref:g,className:`text-5xl font-medium tracking-tighter ${m}`,children:"Selected Works"}),p.jsx("span",{ref:g,className:`hidden md:block text-black/40 ${m}`,children:"Case Studies 2024-2025"})]})}),p.jsx("div",{className:"flex flex-col w-full relative z-20",children:Vc.slice(0,l).map((v,x)=>p.jsx(xA,{project:v,index:x,navigateTo:s,setCursorHovering:r,setIsEyeMode:e,revealClass:m,addToRefs:g},x))}),l<Vc.length&&p.jsx("div",{ref:g,className:`mt-0 text-center ${m} px-0 relative z-20`,children:p.jsx("div",{className:"bg-white py-24 border-b border-black/10",children:p.jsxs("button",{onClick:()=>c(10),className:"relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-12 py-6 text-lg bg-white shadow-sm",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsxs("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2",children:["Discover more ",p.jsx(Ko,{size:20})]})]})})})]}),p.jsx("section",{id:"why-choose-us",className:"snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20 relative z-30",children:p.jsxs("div",{className:"max-w-[1600px] mx-auto w-full",children:[p.jsx("h2",{ref:g,className:`text-sm uppercase tracking-widest text-white/40 mb-16 ${m}`,children:"Beyond Creative Standards"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16",children:[p.jsxs("div",{className:"flex flex-col gap-12",children:[p.jsx("h3",{ref:g,className:`text-4xl md:text-5xl font-medium tracking-tight leading-tight ${m}`,children:"From brand strategy to AI-driven output—we build the future of creative industries."}),p.jsx("div",{ref:g,className:`w-full aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group ${m} delay-100`,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:p.jsx(gA,{})})]}),p.jsx("div",{className:"space-y-0",children:[{t:"AI-Powered Creativity",d:"We slash production time via AI integration in creative workflows, guaranteeing rapid turnaround for world-class assets.",i:"01"},{t:"The 25 Global Principles",d:"Zero error policy. Every project is audited via our 25 Global Implementation Principles to ensure market leadership.",i:"02"},{t:"Sentient Brand Strategy",d:"Building brand experiences 'aware' of market shifts. We employ data-driven logic for high-impact human interaction.",i:"03"},{t:"Scalable Talent Network",d:"Our infrastructure is built for global scale. Modular talent integration ensures elite results for Fortune 500 standards.",i:"04"}].map((v,x)=>p.jsx("div",{ref:g,className:`group border-t border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 cursor-pointer ${m}`,children:p.jsxs("div",{className:"flex items-start gap-6",children:[p.jsx("span",{className:"text-xs font-mono text-white/30 pt-1",children:v.i}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-xl font-medium mb-2 group-hover:text-white transition-colors",children:v.t}),p.jsx("p",{className:"text-white/60 text-sm",children:v.d})]})]})},x))})]})]})})]})},_A=({setCursorHovering:r})=>{const e=ye.useRef([]),i=ye.useRef(null),[s,l]=ye.useState(null),c=[{title:"Creative Engineering",desc:"We don't just draw interfaces; we construct Experience Architecture. At KreavityWorks, Creative Engineering is the fusion of cognitive psychology and radical aesthetics. We deconstruct user behavior to build intuitive workflows, ensuring every creative asset serves a functional purpose to instantly boost brand authority and user satisfaction."},{title:"Creative AI Strategy",desc:"The future is autonomous. We help your business leapfrog the competition with artificial intelligence integration within creative workflows. From content automation to market behavior prediction systems, we build custom AI solutions that are not just smart, but aligned with your agency's strategic goals."},{title:"Motion Graphics",desc:"Static digital worlds are over. We bring your brand's message to life through immersive and kinetic visual narratives. Our motion graphics are designed to capture attention in seconds, transforming complex ideas into visual stories that are digestible, elegant, and capable of reinforcing your brand authority."},{title:"Scalable Ecosystems",desc:"Robust infrastructure is the foundation of limitless growth. We architect creative ecosystems that are solid, secure, and ready to handle global traffic surges. Using Fortune 500 standards, we ensure your application operates at peak performance, with high modularity for your future business expansion."},{title:"Quality Assurance",desc:"Our Zero Error Policy is our promise. Through rigorous auditing based on our 25 Global Implementation Principles, our QA team ensures your digital product is free from bugs and anomalies before it ever touches a user's hand. We stress-test stability and functionality because your product's integrity is our reputation."},{title:"Creative Direction",desc:"Grand vision requires precise visual direction. Creative Direction at KreavityWorks is about maintaining brand identity consistency amidst market noise. We lead the creative process to ensure every visual element—from typography to color palettes—communicates your brand's elite value powerfully."}],d=g=>{g&&!e.current.includes(g)&&e.current.push(g)};ye.useEffect(()=>{const g=new IntersectionObserver(m=>{m.forEach(v=>{v.isIntersecting&&(v.target.classList.add("opacity-100","translate-y-0"),v.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1,rootMargin:"-50px"});return setTimeout(()=>{e.current.forEach(m=>m&&g.observe(m))},100),()=>g.disconnect()},[]),ye.useEffect(()=>{const g=()=>{if(i.current){const m=window.scrollY;i.current.style.transform=`translateY(${m*.2}px)`,i.current.style.opacity=`${1-m/700}`}};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const h="opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return p.jsxs("div",{className:"min-h-screen bg-white text-black pt-32 overflow-x-hidden",children:[s&&p.jsxs("div",{className:"fixed inset-0 z-[12000] flex items-center justify-center p-6 animate-fade-in",children:[p.jsx("div",{className:"absolute inset-0 bg-white/80 backdrop-blur-xl",onClick:()=>l(null)}),p.jsxs("div",{className:"relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-black/5 p-8 md:p-12 animate-modal-pop-elastic",children:[p.jsx("button",{onClick:()=>l(null),className:"absolute top-6 right-6 p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors",children:p.jsx(Ds,{size:20})}),p.jsx("h2",{className:"text-3xl md:text-4xl font-medium tracking-tighter mb-6",children:s.title}),p.jsx("div",{className:"w-12 h-1 bg-black mb-8"}),p.jsx("p",{className:"text-lg md:text-xl text-black/70 leading-relaxed",children:s.desc})]})]}),p.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center relative",children:p.jsx("div",{ref:i,className:"flex flex-col gap-2 md:gap-4 select-none relative z-10",children:p.jsxs("h1",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9] cursor-pointer",children:[p.jsx("span",{ref:d,className:`block ${h}`,children:"We"}),p.jsx("span",{ref:d,className:`block ${h} delay-100`,children:"Architect"}),p.jsx("span",{ref:d,className:`block ${h} delay-200 text-black/20`,children:"Scalable"}),p.jsx("span",{ref:d,className:`block ${h} delay-300`,children:"Creative Systems"})]})})}),p.jsxs("div",{className:"relative z-10 bg-white",children:[p.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:p.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-medium max-w-5xl ${h}`,children:"As a high-performance creative agency, we engineer digital architecture, high-impact visual systems, and autonomous AI-driven output."})}),p.jsx("div",{className:"border-t border-black/10 bg-white",children:p.jsx("div",{className:"max-w-[1600px] mx-auto",children:p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10",children:[p.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:p.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[p.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Radical",p.jsx("br",{}),"Creativity"]}),p.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"We don't provide generic solutions. Our creative philosophy is rooted in strategic storytelling to streamline brand authority and amplify revenue."})]})}),p.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:p.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[p.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Autonomous",p.jsx("br",{}),"Production"]}),p.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"By merging radical aesthetics with high-level AI integration, we build creative ecosystems exactly as envisioned—with zero technical shortcuts."})]})})]})})}),p.jsxs("div",{className:"py-24 overflow-hidden border-t border-b border-black/10 bg-black text-white relative z-10",children:[p.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12",children:p.jsx("div",{className:"mb-8 text-xs font-mono uppercase tracking-widest text-white/40",children:"Creative Frontiers"})}),p.jsx("div",{className:"relative flex whitespace-nowrap overflow-hidden",children:p.jsxs("div",{className:"animate-marquee flex gap-16 md:gap-32 text-6xl md:text-9xl font-medium tracking-tighter uppercase px-8",children:[p.jsx("span",{children:"E-Commerce"}),p.jsx("span",{className:"text-white/30",children:"Fintech"}),p.jsx("span",{children:"AI SaaS"}),p.jsx("span",{className:"text-white/30",children:"Strategic Branding"}),p.jsx("span",{children:"Social Ecosystems"}),p.jsx("span",{className:"text-white/30",children:"Global Media"})]})})]}),p.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white",children:p.jsxs("div",{className:"lg:col-span-8",children:[p.jsxs("h2",{ref:d,className:`text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 ${h}`,children:["Brand",p.jsx("br",{}),p.jsx("span",{className:"text-black/30",children:"Authority"})]}),p.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-light text-black/80 ${h} delay-100`,children:"The only metric that matters in a brand is the authority felt during interaction. We empower emerging and established brands to dominate the market through precise creative identity."})]})}),p.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:p.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-12",children:[p.jsxs("h3",{ref:d,className:`text-2xl font-medium uppercase tracking-tight ${h}`,children:["Creative Direction & ",p.jsx("br",{})," AI Strategy"]}),p.jsx("p",{ref:d,className:`text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed ${h} delay-100`,children:"Building digital ecosystems from zero is a precision team effort. Every specialist brings cutting-edge creative innovation to hit aggressive market targets."})]})}),p.jsx("div",{className:"border-t border-black/10 bg-white",children:p.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 py-24",children:[p.jsx("h4",{className:"text-sm font-mono text-black/40 uppercase tracking-widest mb-12",children:"Agency Capabilities"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8",children:c.map((g,m)=>p.jsxs("div",{ref:d,className:`py-6 border-b border-black/10 flex items-center justify-between group cursor-pointer ${h}`,style:{transitionDelay:`${m*50}ms`},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:()=>l(g),children:[p.jsx("span",{className:"text-2xl md:text-3xl tracking-tight group-hover:pl-4 transition-all duration-300",children:g.title}),p.jsx(Ko,{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]},m))})]})}),p.jsx("div",{className:"bg-[#050505] text-white py-32 border-b border-white/5",children:p.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 space-y-32",children:[p.jsxs("div",{ref:d,className:`${h}`,children:[p.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-white/90",children:"We build stable infrastructure for the creative age."}),p.jsx("p",{className:"text-xl text-white/50 max-w-4xl leading-relaxed",children:"Developing global-standard creative assets since 2024. We bring vision to life and create brand equity that delivers measurable impact."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16",children:[p.jsx("div",{children:p.jsx("h3",{className:"text-sm font-mono text-white/40 uppercase tracking-widest mb-4",children:"Agency Philosophy"})}),p.jsx("div",{children:p.jsx("p",{ref:d,className:`text-xl md:text-2xl leading-relaxed font-light text-white/80 ${h}`,children:"At Kreavity Works, producers work alongside AI strategists and creative directors. We do not compromise. We are driven by high-impact design that powers productivity and increases market share. Our expertise is remarkable, yet we always strive to outperform our previous achievements."})})]})]})})]}),p.jsx("style",{children:`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                @keyframes modalPopElastic {
                    0% { transform: scale(0.9) translateY(40px); opacity: 0; }
                    60% { transform: scale(1.02) translateY(0); opacity: 1; }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
                .animate-modal-pop-elastic {
                    animation: modalPopElastic 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; backdrop-filter: blur(0px); }
                    100% { opacity: 1; backdrop-filter: blur(16px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `})]})},bA=({setCursorHovering:r,navigateTo:e})=>{const i=ye.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};ye.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(d=>d&&c.observe(d))},100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("div",{className:"pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[p.jsxs("button",{onClick:()=>e("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-16 group ${l}`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx(Zo,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Home"]}),p.jsxs("article",{className:"prose prose-lg max-w-4xl",children:[p.jsxs("div",{ref:s,className:`${l} mb-12`,children:[p.jsx("h1",{className:"text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-4",children:"Privacy Policy"}),p.jsx("p",{className:"text-black/50",children:"Effective date: December 31, 2025"})]}),p.jsxs("div",{className:"space-y-12",children:[p.jsx("section",{ref:s,className:`${l} delay-100`,children:p.jsx("p",{className:"text-xl leading-relaxed",children:'Kreavity Works ("us", "we", or "our") operates the https://kreavityworks.com/ website (the "Service"). This Privacy Policy describes how we collect, use, disclose, and safeguard your personal data when you visit and use our Service, and your rights in relation to that data.'})}),p.jsxs("section",{ref:s,className:`${l} delay-150`,children:[p.jsx("h2",{className:"text-2xl font-medium mb-4",children:"Information we collect"}),p.jsxs("div",{className:"ml-4 space-y-4",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.1 Personal Data"}),p.jsx("p",{className:"text-black/70",children:"You may provide us with certain personal data, e.g.:"}),p.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[p.jsx("li",{children:"Name, email address"}),p.jsx("li",{children:"Company name, position"}),p.jsx("li",{children:"Other contact data submitted by you"})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.2 Usage data"}),p.jsx("p",{className:"text-black/70",children:"We automatically collect usage data when you use our Service, including:"}),p.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[p.jsx("li",{children:"IP address, browser type and version"}),p.jsx("li",{children:"Pages you visited, timestamps, duration"}),p.jsx("li",{children:"Device identifiers, operating system version"}),p.jsx("li",{children:"Clicks, interactions, navigation paths"})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.3 Cookies & tracking technologies"}),p.jsx("p",{className:"text-black/70",children:"We use cookies, web beacons, tags, scripts, and similar tracking technologies to track activity and collect information:"}),p.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[p.jsx("li",{children:"Session cookies"}),p.jsx("li",{children:"Preference cookies"}),p.jsx("li",{children:"Security cookies"})]}),p.jsx("p",{className:"text-black/70 mt-2",children:"You can set your browser to refuse cookies or to notify you — but this may limit your use of some features."})]})]})]}),p.jsxs("section",{ref:s,className:`${l} delay-200`,children:[p.jsx("h2",{className:"text-2xl font-medium mb-4",children:"How we use data"}),p.jsx("p",{className:"text-black/70 mb-4",children:"We use collected data for purposes such as:"}),p.jsxs("ul",{className:"list-disc ml-5 text-black/70 mb-4",children:[p.jsx("li",{children:"Providing, operating, and maintaining the Service"}),p.jsx("li",{children:"Improving and personalizing the Service"}),p.jsx("li",{children:"Communicating with you (notifications, support)"}),p.jsx("li",{children:"Analytics and monitoring usage"}),p.jsx("li",{children:"Preventing fraud, abuse, or technical issues"})]})]})]})]})]})},yA=({setCursorHovering:r,setCursorText:e})=>{const i=ye.useRef([]),s=d=>{d&&!i.current.includes(d)&&i.current.push(d)};ye.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&(g.target.classList.add("opacity-100","translate-y-0"),g.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(h=>h&&d.observe(h))},100),()=>d.disconnect()},[]);const l=[{title:"AI-Powered Creativity",desc:"We slash production time via AI integration in creative workflows, guaranteeing rapid turnaround for world-class assets and strategic iterations without compromising quality.",icon:p.jsx(Ky,{size:32})},{title:"The 25 Global Principles",desc:"Zero error policy. Every creative project and code line is audited via our 25 Global Implementation Principles to ensure market leadership and product integrity.",icon:p.jsx(Gy,{size:32})},{title:"Sentient Brand Strategy",desc:"Building brand experiences 'aware' of market shifts. We employ data-driven creative logic and Sentient UI for high-impact human interaction.",icon:p.jsx(my,{size:32})},{title:"Scalable Talent Network",desc:"Our infrastructure is built for global scale. Modular talent integration ensures elite creative results and future-proof tech stack for Fortune 500 standards.",icon:p.jsx(wy,{size:32})}],c="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("div",{className:"snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[p.jsxs("article",{className:"mb-40",children:[p.jsx("h5",{ref:s,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${c}`,children:"The Performance Engine"}),p.jsxs("h1",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer",children:[p.jsx("span",{ref:s,className:`block ${c}`,children:"Architecting"}),p.jsx("span",{ref:s,className:`block ${c} delay-100`,children:"the Future of"}),p.jsx("span",{ref:s,className:`block ${c} delay-200 text-black/40`,children:"Creative Industries."})]}),p.jsx("div",{ref:s,className:`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${c} delay-300`,children:p.jsxs("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed pl-6",children:["Since our inception, we haven't just sought solutions; we've built ",p.jsx("strong",{children:"High-Impact Creative Systems"}),". Combining strategic execution with AI intelligence to ensure every brand asset operates at the highest global level."]})})]}),p.jsxs("section",{className:"snap-start mb-20",children:[p.jsxs("div",{className:"flex justify-between items-end mb-16 border-b border-black/10 pb-8",children:[p.jsx("h2",{ref:s,className:`text-4xl font-medium tracking-tighter ${c}`,children:"The Creative Hub"}),p.jsx("span",{ref:s,className:`hidden md:block text-black/40 ${c}`,children:"Our Standard of Excellence"})]}),p.jsx("div",{className:"grid grid-cols-1 gap-0",children:l.map((d,h)=>p.jsxs("div",{ref:s,className:`group relative py-16 border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${c}`,onMouseEnter:()=>e("BENEFIT"),onMouseLeave:()=>e(""),children:[p.jsx("div",{className:"absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8 items-start",children:[p.jsxs("div",{className:"md:col-span-1 text-black/30 font-mono text-sm pt-2",children:["0",h+1]}),p.jsxs("div",{className:"md:col-span-4",children:[p.jsx("div",{className:"mb-4 text-black/80 group-hover:text-black transition-colors",children:d.icon}),p.jsx("h3",{className:"text-3xl font-medium tracking-tight mb-2",children:d.title})]}),p.jsx("div",{className:"md:col-span-6 md:col-start-7",children:p.jsx("p",{className:"text-lg text-black/60 leading-relaxed max-w-xl group-hover:text-black/80 transition-colors",children:d.desc})})]})]},h))})]})]})},SA=({setCursorHovering:r})=>{const e=ye.useRef([]),i=c=>{c&&!e.current.includes(c)&&e.current.push(c)};ye.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>e.current.forEach(d=>d&&c.observe(d)),100),()=>c.disconnect()},[]);const s=()=>{alert(`PARTNERSHIP NOTICE: 

Our Partner Onboarding system is currently undergoing scheduled maintenance to improve our global network infrastructure. 

Please send your partnership proposal directly to our management at: projects@kreavityworks.com 

We look forward to collaborating with you.`)},l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return p.jsx("div",{className:"min-h-screen bg-white text-black pt-32 pb-32",children:p.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[p.jsxs("div",{className:"min-h-[60vh] flex flex-col justify-center mb-24",children:[p.jsx("h5",{ref:i,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${l}`,children:"The Growth Catalyst Program"}),p.jsxs("h1",{ref:i,className:`text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] mb-8 ${l} delay-100`,children:["Empowering ",p.jsx("br",{}),p.jsx("span",{className:"text-black/40",children:"Digital Architects."})]}),p.jsx("p",{ref:i,className:`text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-12 ${l} delay-200`,children:"Kreavity Works opens doors for high-performance individuals to join our global ecosystem as Strategic Partners. Access elite projects, world-class AI infrastructure, and limitless commissions."}),p.jsx("div",{ref:i,className:`${l} delay-300`,children:p.jsxs("button",{onClick:s,className:"bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group shadow-xl",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:["Join the Network ",p.jsx(Ci,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-24",children:[{title:"Independent Specialist",sub:"Freelance",icon:p.jsx(oy,{size:32}),desc:"For experts (Designers, Developers, AI Strategists) who want to work on elite projects based on the 25 Global Implementation Principles."},{title:"Strategic Affiliate",sub:"Project Agent",icon:p.jsx(Oy,{size:32}),desc:"For connectors with access to high-scale clients seeking exclusive commissions from every successfully executed project."},{title:"Agency Partner",sub:"White Label",icon:p.jsx(cy,{size:32}),desc:"For boutique agencies looking to leverage Kreavity Works' technical infrastructure for their clients, enabling scalability without operational overhead."}].map((c,d)=>p.jsxs("div",{ref:i,className:`p-8 border border-black/5 rounded-2xl hover:border-black/20 hover:bg-neutral-50 transition-all duration-500 group ${l}`,style:{transitionDelay:`${d*100}ms`},children:[p.jsx("div",{className:"mb-6 p-4 bg-white rounded-full w-fit shadow-sm text-black/80 group-hover:text-black group-hover:scale-110 transition-all",children:c.icon}),p.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-black/40 mb-2",children:c.sub}),p.jsx("h3",{className:"text-2xl font-medium tracking-tight mb-4",children:c.title}),p.jsx("p",{className:"text-black/60 leading-relaxed",children:c.desc})]},d))})]})})},Yx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],MA=[{id:"01",title:"UI/UX Design"},{id:"02",title:"App Development"},{id:"03",title:"Brand Identity"},{id:"04",title:"Motion Graphic"},{id:"05",title:"AI Tools Development"},{id:"06",title:"Social Media"},{id:"07",title:"E-Commerce"},{id:"08",title:"Platform Banner & Poster"},{id:"09",title:"Landing Page"},{id:"10",title:"Material Print Design"}],EA=({selectedDate:r,onSelect:e})=>{const i=["Su","Mo","Tu","We","Th","Fr","Sa"],s=new Date;s.setHours(0,0,0,0);const l=s.getFullYear(),d=((g,m)=>{const v=[];for(let x=0;x<m;x++){const y=new Date(g,x,1);v.push(y)}return v})(l,12),h=g=>{const m=g.getFullYear(),v=g.getMonth(),x=new Date(m,v+1,0).getDate(),y=new Date(m,v,1).getDay();return{days:x,firstDay:y}};return p.jsxs("div",{className:"bg-white border border-black/10 rounded-2xl w-full max-w-md h-80 overflow-y-auto overflow-x-hidden relative scrollbar-hide",children:[p.jsx("div",{className:"sticky top-0 bg-white/95 backdrop-blur z-10 p-4 border-b border-black/5",children:p.jsx("div",{className:"grid grid-cols-7 gap-1",children:i.map(g=>p.jsx("span",{className:"text-center text-xs font-mono text-black/40 uppercase",children:g},g))})}),p.jsx("div",{className:"p-4 space-y-8",children:d.map((g,m)=>{const v=g.getFullYear(),x=g.getMonth(),{days:y,firstDay:M}=h(g),A=g.toLocaleString("default",{month:"long",year:"numeric"}),T=Array(M).fill(null),S=Array.from({length:y},(_,U)=>U+1);return p.jsxs("div",{children:[p.jsx("h4",{className:"text-sm font-medium mb-4 sticky top-12 bg-white/80 backdrop-blur w-fit px-2 py-1 rounded",children:A}),p.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[T.map((_,U)=>p.jsx("div",{},`empty-${U}`)),S.map(_=>{const U=`${A} ${_}`,D=r===U,I=new Date(v,x,_)<=s;return p.jsx("button",{disabled:I,onClick:F=>{F.preventDefault(),e(U)},className:`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 
                                                ${I?"text-black/10 cursor-not-allowed hover:bg-transparent":D?"bg-black text-white shadow-md scale-110":"text-black/70 hover:bg-black/5 hover:text-black"}`,children:_},_)})]})]},m)})})]})},Zx=({label:r,isSelected:e,onClick:i,error:s,onMouseEnter:l,onMouseLeave:c,className:d})=>p.jsxs("button",{onClick:h=>{h.preventDefault(),i()},onMouseEnter:l,onMouseLeave:c,className:`relative overflow-hidden border text-sm transition-all duration-300 rounded-full group px-4 py-3
                ${e?"border-black":s?"border-red-200 bg-red-50/10":"border-black/10"}
                ${d}
            `,children:[p.jsx("span",{className:`absolute inset-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${e?"translate-y-0":"translate-y-[100%] group-hover:translate-y-0"}
             `}),p.jsx("span",{className:`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap
                ${e?"text-white":"text-black group-hover:text-white"}
                ${s&&!e?"text-red-500":""}
             `,children:r})]}),TA=({isOpen:r,onClose:e,setCursorHovering:i,initialInterest:s=null,navigateTo:l})=>{const[c,d]=ye.useState([]),[h,g]=ye.useState(null),[m,v]=ye.useState(null),[x,y]=ye.useState([]),[M,A]=ye.useState(!1),[T,S]=ye.useState(!1),[_,U]=ye.useState(Yx[0]),[D,P]=ye.useState(!1),[I,F]=ye.useState(""),z=ye.useMemo(()=>Yx.filter(W=>W.name.toLowerCase().includes(I.toLowerCase())||W.code.includes(I)),[I]),[Z,w]=ye.useState({name:"",email:"",phone:"",details:""}),[N,H]=ye.useState({}),ie=ye.useRef(null),ae=ye.useRef(null),he=ye.useRef(null),oe=ye.useRef(null),B=ye.useRef(null),k=ye.useRef(null);if(ye.useEffect(()=>{const W=ce=>{k.current&&!k.current.contains(ce.target)&&P(!1)};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},[]),ye.useEffect(()=>{s&&r&&(c.includes(s)||d(W=>[...W,s]))},[s,r]),!r)return null;const J=W=>{c.includes(W)?d(c.filter(ce=>ce!==W)):d([...c,W])},_e=["1K - 5K","5K - 10K","10K - 25K","25K - 50K","50K - 100K"],ve=W=>{g(W)},O=W=>{if(W.target.files&&W.target.files.length>0){const ce=Array.from(W.target.files);y(Ce=>[...Ce,...ce]),W.target.value=""}},ne=W=>{y(ce=>ce.filter((Ce,je)=>je!==W))},ge=()=>{B.current.click()},Te=W=>{const{name:ce,value:Ce}=W.target;w(je=>({...je,[ce]:Ce}))},Fe=()=>{alert(`Our automated submission system is currently undergoing scheduled maintenance. 

Please contact us directly via email at: projects@kreavityworks.com 

We look forward to building your vision.`)};return p.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[p.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:e}),p.jsxs("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:[p.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[p.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Start a Project"}),p.jsx("button",{onClick:e,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:p.jsx(Ds,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),p.jsxs("div",{className:"p-6 md:p-12 space-y-16 overflow-y-auto overflow-x-hidden h-full",children:[p.jsxs("div",{ref:ie,className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"01. I'm interested in..."}),p.jsx("div",{className:"flex flex-wrap gap-2",children:MA.map(W=>p.jsx(Zx,{label:W.title,isSelected:c.includes(W.title),onClick:()=>J(W.title),className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},W.id))})]}),p.jsxs("div",{ref:ae,className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"02. Your Details"}),p.jsx("input",{name:"name",value:Z.name,onChange:Te,type:"text",placeholder:"Your Name",className:"w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"}),p.jsx("input",{name:"email",value:Z.email,onChange:Te,type:"email",placeholder:"Email Address",className:"w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"}),p.jsxs("div",{className:"space-y-1 flex items-end gap-4 relative",children:[p.jsxs("div",{className:"w-1/3 relative",ref:k,children:[p.jsxs("button",{onClick:()=>P(!D),className:"w-full text-left border-b border-black/10 pb-4 text-2xl md:text-3xl flex items-center gap-2 truncate",children:[p.jsx("span",{className:"text-black",children:_.code}),p.jsx(Jx,{size:16,className:"opacity-50"})]}),D&&p.jsx("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-y-auto",children:z.map(W=>p.jsxs("button",{onClick:()=>{U(W),P(!1)},className:"w-full text-left px-4 py-3 hover:bg-black/5 text-sm flex justify-between items-center group",children:[p.jsx("span",{children:W.name}),p.jsx("span",{className:"text-black/40 group-hover:text-black font-mono",children:W.code})]},W.code+W.name))})]}),p.jsx("input",{name:"phone",value:Z.phone,onChange:Te,type:"tel",placeholder:"Phone Number",className:"w-2/3 text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"})]})]}),p.jsxs("div",{ref:he,className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"03. Project Details"}),p.jsx("textarea",{name:"details",value:Z.details,onChange:Te,placeholder:"Tell us about the project...",rows:5,className:"w-full text-xl md:text-2xl border-b border-black/10 pb-4 outline-none focus:border-black resize-none bg-transparent placeholder:text-black/20"})]})]}),p.jsxs("div",{ref:oe,className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"04. Project Budget (USD)"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:_e.map(W=>p.jsx(Zx,{label:W,isSelected:h===W,onClick:()=>ve(W),className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},W))})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start",children:[p.jsxs("div",{className:"space-y-6 h-full",children:[p.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["05. Attachments ",p.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),p.jsx("input",{ref:B,type:"file",multiple:!0,accept:".jpg,.jpeg,.png,.pdf",className:"hidden",onChange:O}),x.length===0?p.jsxs("div",{onClick:ge,className:"border border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/5 transition-colors group h-80",children:[p.jsx("div",{className:"w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-black/50 group-hover:scale-110 transition-transform",children:p.jsx(zy,{size:20})}),p.jsx("div",{className:"text-center",children:p.jsx("span",{className:"text-sm text-black/60 block font-medium",children:"Click to upload files"})})]}):p.jsx("div",{className:"space-y-4 h-80 overflow-y-auto",children:x.map((W,ce)=>p.jsxs("div",{className:"flex items-center justify-between p-4 bg-neutral-50 border border-black/5 rounded-xl",children:[p.jsx("span",{className:"text-sm font-medium text-black/80 truncate",children:W.name}),p.jsx("button",{onClick:()=>ne(ce),className:"p-2 text-black/30 hover:text-red-500",children:p.jsx(qy,{size:16})})]},ce))})]}),p.jsxs("div",{className:"space-y-6 h-full",children:[p.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["06. Schedule a Call ",p.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),p.jsx(EA,{selectedDate:m,onSelect:v})]})]})]}),p.jsxs("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-between items-center z-20",children:[p.jsx("img",{src:"/brand/logo.png",alt:"Logo",className:"h-8 w-auto object-contain opacity-50 grayscale hidden md:block"}),p.jsxs("button",{onClick:Fe,className:"w-full md:w-auto bg-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] active:scale-95",children:["Submit Proposal ",p.jsx(Ci,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})]})]})]})},Kx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],AA=({isOpen:r,onClose:e,setCursorHovering:i,selectedCountry:s,setSelectedCountry:l})=>{const[c,d]=ye.useState(Kx[0]),h=s||c,g=l||d,[m,v]=ye.useState(null),[x,y]=ye.useState({name:"",email:"",phone:"",link:"",intro:""}),[M,A]=ye.useState(!1),[T,S]=ye.useState(!1),[_,U]=ye.useState(!1),[D,P]=ye.useState(""),I=ye.useRef(null),F=ye.useMemo(()=>Kx.filter(w=>w.name.toLowerCase().includes(D.toLowerCase())||w.code.includes(D)),[D]);ye.useEffect(()=>{if(r){if(window.emailjs){window.emailjs.init("2hhIuPTWeJ0RUPxPo");return}const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",w.async=!0,w.onload=()=>{console.log("Partner System Ready"),window.emailjs.init("2hhIuPTWeJ0RUPxPo")},document.body.appendChild(w)}},[r]),ye.useEffect(()=>{const w=N=>{I.current&&!I.current.contains(N.target)&&U(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);const z=w=>{const{name:N,value:H}=w.target;y(ie=>({...ie,[N]:H}))},Z=()=>{if(!x.name||!x.email||!m||!x.link){alert("Please fill in all required fields.");return}A(!0);const w=window.emailjs;w?w.send("service_7ow5sqa","template_ia9upwv",{from_name:x.name,user_email:x.email,phone_number:`${h.code} ${x.phone}`,partner_type:m,region_location:h.name,portfolio_url:x.link,message:x.intro,company_link:"https://kreavityworks.com/partner",year:new Date().getFullYear()},"2hhIuPTWeJ0RUPxPo").then(()=>{A(!1),S(!0)}).catch(N=>{A(!1),alert("Failed to send application. Please try again."),console.error("EmailJS Error:",N)}):(A(!1),alert("System connecting... please try again in 3 seconds."))};return r?p.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[p.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:e}),p.jsx("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:T?p.jsxs("div",{className:"absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center",children:[p.jsx("div",{className:"w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce",children:p.jsx(kh,{size:48,strokeWidth:3})}),p.jsx("h2",{className:"text-4xl md:text-5xl font-medium tracking-tighter mb-4",children:"Application Sent."}),p.jsxs("p",{className:"text-xl text-black/60 max-w-md mb-12 leading-relaxed",children:["Welcome to the network, ",x.name,". We will review your profile and contact you for the next steps."]}),p.jsxs("button",{onClick:e,className:"bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl",children:["Close ",p.jsx(Ds,{size:20})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[p.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Become a Partner"}),p.jsx("button",{onClick:e,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:p.jsx(Ds,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),p.jsxs("div",{className:"p-6 md:p-12 space-y-12 overflow-y-auto overflow-x-hidden h-full",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"01. Select Partner Type"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:["Independent Specialist","Strategic Affiliate","Agency Partner"].map(w=>p.jsxs("button",{onClick:()=>v(w),className:`p-6 border rounded-xl text-left transition-all duration-300 hover:border-black group ${m===w?"border-black bg-black text-white":"border-black/10"}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[p.jsx("h3",{className:"text-lg font-medium mb-2",children:w}),p.jsxs("p",{className:`text-sm ${m===w?"text-white/70":"text-black/50"}`,children:[w==="Independent Specialist"&&"For freelancers & experts.",w==="Strategic Affiliate"&&"For connectors & agents.",w==="Agency Partner"&&"White-label infrastructure."]})]},w))})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"02. Personal Info"}),p.jsx("input",{name:"name",value:x.name,onChange:z,type:"text",placeholder:"Full Name",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),p.jsx("input",{name:"email",value:x.email,onChange:z,type:"email",placeholder:"Email Address",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),p.jsxs("div",{className:"relative",ref:I,children:[p.jsxs("button",{onClick:()=>U(!_),className:"w-full text-left border-b border-black/10 pb-4 text-xl focus:border-black flex items-center gap-2 transition-colors",children:[p.jsx("span",{children:h.code})," ",p.jsx(Jx,{size:16,className:"opacity-50"}),p.jsx("input",{name:"phone",value:x.phone,onChange:z,type:"tel",placeholder:"Phone Number",className:"w-full bg-transparent outline-none ml-2 placeholder:text-black/20",onClick:w=>w.stopPropagation()})]}),_&&p.jsxs("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col",children:[p.jsx("div",{className:"p-2 border-b border-black/5",children:p.jsxs("div",{className:"flex items-center gap-2 bg-neutral-100 rounded px-2 py-1",children:[p.jsx(ky,{size:14,className:"opacity-50"}),p.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-transparent text-sm outline-none",value:D,onChange:w=>P(w.target.value),autoFocus:!0})]})}),p.jsx("div",{className:"overflow-y-auto flex-1",children:F.map(w=>p.jsxs("button",{onClick:()=>{g(w),U(!1)},className:"w-full text-left px-4 py-2 hover:bg-black/5 text-sm flex justify-between",children:[p.jsx("span",{children:w.name}),p.jsx("span",{className:"text-black/40",children:w.code})]},w.code+w.name))})]})]})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"03. Professional Profile"}),p.jsx("input",{name:"link",value:x.link,onChange:z,type:"text",placeholder:"Portfolio / LinkedIn URL",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),p.jsx("textarea",{name:"intro",value:x.intro,onChange:z,placeholder:"Brief Introduction / Vision...",rows:3,className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent resize-none transition-colors placeholder:text-black/20"})]})]})]}),p.jsx("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-end z-20",children:p.jsx("button",{onClick:Z,disabled:M,className:`bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-xl ${M?"opacity-70 cursor-not-allowed":""}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:M?p.jsxs(p.Fragment,{children:[p.jsx(Cy,{size:24,className:"animate-spin"})," Processing..."]}):p.jsxs(p.Fragment,{children:["Join Network ",p.jsx(Ci,{size:20})]})})})]})}),p.jsx("style",{children:`
                @keyframes modalPopElastic {
                    0% { transform: scale(0.9) translateY(40px); opacity: 0; }
                    60% { transform: scale(1.02) translateY(0); opacity: 1; }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
                .animate-modal-pop-elastic {
                    animation: modalPopElastic 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; backdrop-filter: blur(0px); }
                    100% { opacity: 1; backdrop-filter: blur(16px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .animate-overlay-show {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `})]}):null},wA=({project:r,allProjects:e,setCursorHovering:i,setCursorText:s,navigateTo:l,setIsEyeMode:c,openContact:d})=>{const h=ye.useRef([]),g=A=>{const T=A.target,S=T.src;if(T.getAttribute("data-tried-fallback")==="true"){if(S.endsWith(".jpg")){T.src=S.replace(".jpg",".jpeg"),T.setAttribute("data-tried-fallback","final");return}T.style.display="none";return}T.setAttribute("data-tried-fallback","true"),S.includes(".png")?T.src=S.replace(".png",".jpg"):S.includes(".jpg")?T.src=S.replace(".jpg",".png"):S.includes(".jpeg")?T.src=S.replace(".jpeg",".png"):T.style.display="none"};ye.useEffect(()=>{h.current=[];const A=new IntersectionObserver(S=>{S.forEach(_=>{_.isIntersecting&&(_.target.classList.add("opacity-100","translate-y-0"),_.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.05,rootMargin:"0px 0px -100px 0px"}),T=setTimeout(()=>{document.querySelectorAll(".animate-on-scroll").forEach(_=>A.observe(_))},100);return()=>{A.disconnect(),clearTimeout(T)}},[r]);const m=e.findIndex(A=>A.id===r.id),v=(m+1)%e.length,x=e[v],y=m===e.length-1,M="animate-on-scroll opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("div",{className:"pt-32 min-h-screen bg-white text-black pb-20",children:[p.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[p.jsxs("button",{onClick:()=>l("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12 group ${M}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[p.jsx(Zo,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Projects"]}),p.jsxs("div",{className:`flex flex-col gap-4 mb-16 ${M}`,children:[p.jsxs("div",{className:"flex items-center gap-4 text-sm font-mono tracking-widest text-black/40 uppercase",children:[p.jsx("span",{children:r.category}),p.jsx("span",{className:"w-12 h-[1px] bg-black/20"}),p.jsx("span",{children:r.id})]}),p.jsx("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none",children:r.title})]}),p.jsxs("div",{className:`w-full aspect-video bg-neutral-100 rounded-2xl overflow-hidden relative cursor-none mb-24 shadow-sm ${M} delay-100`,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[r.image?p.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover",onError:g},r.image):p.jsx("div",{className:"absolute bottom-8 left-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest",children:"Project Visual"}),p.jsx("div",{className:"absolute inset-0 bg-black/5 mix-blend-multiply"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32",children:[p.jsxs("div",{className:`lg:col-span-7 ${M} delay-200`,children:[p.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Overview"}),p.jsx("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed font-light",children:r.detailedDesc||r.desc})]}),p.jsxs("div",{className:`lg:col-span-5 flex flex-col justify-between ${M} delay-300`,children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Deliverables"}),p.jsxs("ul",{className:"space-y-4",children:[p.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[p.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Strategy & Research"]}),p.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[p.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Visual Design System"]}),p.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[p.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Development & QA"]})]})]}),p.jsxs("button",{onClick:d,className:"mt-12 w-full py-8 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:["Start Project ",p.jsx(Ci,{size:16})]})]})]})]}),p.jsx("div",{className:`w-full bg-[#050505] text-white py-32 mb-32 ${M}`,children:p.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8",children:[p.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter leading-none",children:"Project Gallery"}),p.jsx("span",{className:"text-white/40 text-sm hidden md:block uppercase tracking-widest mb-2",children:"Visual Exploration"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",children:[1,2,3,4].map((A,T)=>p.jsxs("div",{className:`aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden relative group cursor-pointer ${M}`,style:{transitionDelay:`${T*100}ms`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[p.jsx("div",{className:"absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),p.jsx("img",{src:`/${r.folder}/detail-${A}${r.fileExt||".png"}`,alt:`Detail ${A}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:g})]},`${r.id}-detail-${T}`))})]})}),!y&&p.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:p.jsxs("div",{className:`border-t border-black/10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer ${M}`,onClick:()=>l("project",x.id),onMouseEnter:()=>s("NEXT"),onMouseLeave:()=>s(""),children:[p.jsxs("div",{className:"flex flex-col gap-4 order-2 md:order-1",children:[p.jsx("p",{className:"text-black/40 uppercase tracking-widest text-sm mb-4",children:"Next Featured Project"}),p.jsx("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter group-hover:text-black/60 transition-colors",children:x.title}),p.jsxs("div",{className:"flex items-center gap-4 text-black/40 group-hover:text-black transition-colors",children:[p.jsx("span",{className:"font-mono",children:x.id}),p.jsx(Ci,{size:24,className:"transform group-hover:translate-x-2 transition-transform"})]})]}),p.jsxs("div",{className:"order-1 md:order-2 aspect-video bg-neutral-100 rounded-lg overflow-hidden relative shadow-sm group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",children:[p.jsx("div",{className:"absolute inset-0 bg-neutral-200/50 flex items-center justify-center",children:x.image?p.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-cover",onError:g},`next-${x.id}`):p.jsx("span",{className:"text-black/10 text-6xl font-bold tracking-tighter",children:x.id})}),p.jsx("div",{className:"absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] uppercase tracking-widest",children:"Preview"})]})]})})]})},RA=({setCursorHovering:r,setCursorText:e,navigateTo:i})=>{const s=ye.useRef([]),l=h=>{h&&!s.current.includes(h)&&s.current.push(h)};ye.useEffect(()=>{const h=new IntersectionObserver(g=>{g.forEach(m=>{m.isIntersecting&&(m.target.classList.add("opacity-100","translate-y-0"),m.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{s.current.forEach(g=>g&&h.observe(g))},100),()=>h.disconnect()},[]);const c=[{id:"talent-nando",name:"Nando",role:"Fullstack UI/UX Design",desc:"Experience architect bridging technical intelligence with intuitive design for world-class digital product scalability and performance."},{id:"talent-hadist",name:"Hadist",role:"Visual Design Specialist",desc:"Exploring radical aesthetics to create visual systems that dominate market attention without compromising core design functionality."},{id:"talent-syams",name:"Syams",role:"Brand & Logo Specialist",desc:"Specializing in converting corporate identities into iconic and strategic visual symbols. Mastering brand narratives through design precision."}],d="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("div",{className:"snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[p.jsxs("article",{className:"mb-32",children:[p.jsx("h5",{ref:l,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${d}`,children:"The Collective Network"}),p.jsxs("h1",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer",children:[p.jsx("span",{ref:l,className:`block ${d}`,children:"The Convergence"}),p.jsx("span",{ref:l,className:`block ${d} delay-100`,children:"of Elite"}),p.jsx("span",{ref:l,className:`block ${d} delay-200 text-black/40`,children:"Intelligence."})]}),p.jsx("div",{ref:l,className:`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${d} delay-300`,children:p.jsxs("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed pl-6",children:["We don't just gather people; we build a collective of specialists. Each individual is a primary pillar integrating ",p.jsx("strong",{children:"Radical Aesthetics"})," with system intelligence."]})})]}),p.jsxs("section",{className:"snap-start mb-40",children:[p.jsxs("div",{className:"flex justify-between items-end mb-16 border-b border-black/10 pb-8",children:[p.jsx("h2",{ref:l,className:`text-4xl font-medium tracking-tighter ${d}`,children:"Subject Matter Experts"}),p.jsx("span",{ref:l,className:`hidden md:block text-black/40 ${d}`,children:"High-Performance Individuals"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-black/10",children:c.map((h,g)=>p.jsxs("div",{ref:l,className:`group relative p-10 border-r border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${d}`,style:{transitionDelay:`${g*100}ms`},onMouseEnter:()=>e("PORTFOLIO"),onMouseLeave:()=>e(""),onClick:()=>i(h.id),children:[p.jsx("div",{className:"absolute top-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsxs("div",{className:"flex flex-col h-full justify-between",children:[p.jsxs("div",{className:"space-y-8",children:[p.jsx("div",{className:"flex justify-between items-start",children:p.jsxs("div",{className:"text-black/30 font-mono text-sm",children:["0",g+1]})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-4xl font-medium tracking-tight mb-3",children:h.name}),p.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-black/40 group-hover:text-black/70 transition-colors mb-6",children:h.role}),p.jsx("p",{className:"text-base text-black/60 leading-relaxed group-hover:text-black/80 transition-colors line-clamp-5",children:h.desc})]})]}),p.jsxs("div",{className:"mt-12 flex items-center gap-2 text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-2",children:[p.jsx("span",{className:"text-xs font-bold uppercase tracking-widest",children:"View Full Profile"}),p.jsx(Ci,{size:16})]})]})]},g))})]}),p.jsx("section",{className:"snap-start py-32 border-t border-black/10 text-center",children:p.jsxs("div",{ref:l,className:`${d}`,children:[p.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter mb-8",children:"Ready to Scale Your Reach?"}),p.jsx("p",{className:"text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed",children:"We are expanding our ecosystem. If you operate at the intersection of high-scale strategy and elite execution, join us as a strategic partner."}),p.jsxs("button",{onClick:()=>i("partner"),className:"relative overflow-hidden group border border-black/20 rounded-full px-12 py-5 inline-flex items-center transition-all duration-300 hover:border-black",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 font-medium",children:"Become Partner Agent"})]})]})})]})},Pc=({value:r,label:e,delay:i})=>{const[s,l]=ye.useState(0),[c,d]=ye.useState(!1),h=ye.useRef(null),g=parseFloat(r.replace(/[^0-9.]/g,"")),m=r.replace(/[0-9.]/g,""),v=r.includes(".");return ye.useEffect(()=>{const x=new IntersectionObserver(([y])=>{y.isIntersecting&&d(!0)},{threshold:.5});return h.current&&x.observe(h.current),()=>x.disconnect()},[]),ye.useEffect(()=>{if(!c)return;let x=null;const y=2e3,M=A=>{x||(x=A);const T=Math.min((A-x)/y,1),S=1-Math.pow(1-T,4);l(S*g),T<1?window.requestAnimationFrame(M):l(g)};window.requestAnimationFrame(M)},[c,g]),p.jsx("div",{ref:h,className:"group relative p-8 md:p-12 border-l border-white/10 first:border-l-0 hover:bg-white/[0.03] transition-colors duration-500 cursor-default",children:p.jsxs("div",{className:`transition-all duration-1000 ease-out transform ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:`${i}ms`},children:[p.jsxs("h3",{className:"text-5xl md:text-7xl font-medium tracking-tight mb-4 tabular-nums text-white group-hover:text-white/90 transition-colors",children:[v?s.toFixed(1):Math.floor(s),m]}),p.jsx("div",{className:"h-[2px] w-12 bg-white/20 mb-4 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors",children:e})]})})},CA=({navigateTo:r,setCursorHovering:e})=>{const i=ye.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};ye.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>i.current.forEach(d=>d&&c.observe(d)),100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return p.jsxs("div",{className:"min-h-screen bg-white text-black pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto font-sans",children:[p.jsxs("button",{onClick:()=>r("talent-directory"),className:"font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 mb-20 flex items-center gap-3 transition-all group",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[p.jsx(Zo,{size:14,className:"group-hover:-translate-x-1 transition-transform"})," Back to Collective"]}),p.jsxs("section",{className:"mb-32",children:[p.jsxs("div",{className:"mb-24",children:[p.jsxs("div",{ref:s,className:`flex items-center gap-4 mb-8 ${l}`,children:[p.jsx("span",{className:"w-12 h-[1px] bg-black/30"}),p.jsx("h5",{className:"text-[11px] font-bold text-black/60 uppercase tracking-[0.3em]",children:"Principal Brand Strategist"})]}),p.jsxs("h1",{ref:s,className:`text-8xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter leading-[0.85] mb-6 ${l} delay-100`,children:["SYAMS",p.jsx("span",{className:"text-black/20",children:"."})]}),p.jsx("p",{ref:s,className:`font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-black/40 ${l} delay-200`,children:"Design That Thinks. Strategy That Speaks."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-black/10 pt-12",children:[p.jsx("div",{ref:s,className:`md:col-span-5 ${l} delay-300`,children:p.jsx("h3",{className:"text-3xl md:text-4xl leading-tight font-medium",children:'"Building a brand is not merely about creating a logo. It is about carving meaning that embeds in the human mind."'})}),p.jsxs("div",{ref:s,className:`md:col-span-6 md:col-start-7 text-black/60 text-lg leading-relaxed ${l} delay-400`,children:[p.jsxs("p",{className:"mb-6",children:["Branding goes deeper than aesthetics. We talk about ",p.jsx("strong",{children:"Direction, Meaning, and Connection."})]}),p.jsx("p",{children:"Every visual work is born from strategic thinking rooted in research and philosophy. The approach isn't just about looking good, but how visuals become a language reflecting your identity and the brand's journey."})]})]})]}),p.jsxs("section",{className:"mb-40 rounded-3xl overflow-hidden bg-black text-white relative shadow-2xl",children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50 pointer-events-none"}),p.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10",children:[p.jsx(Pc,{value:"2016",label:"Est. Year",delay:0}),p.jsx(Pc,{value:"200+",label:"Brands Collaborated",delay:150}),p.jsx(Pc,{value:"5.0",label:"Google Rating",delay:300}),p.jsx(Pc,{value:"100%",label:"Satisfaction",delay:450})]})]}),p.jsxs("section",{className:"mb-40",children:[p.jsxs("div",{className:"flex justify-between items-end mb-20",children:[p.jsx("h2",{ref:s,className:`text-5xl md:text-7xl font-medium tracking-tighter ${l}`,children:"Core Services"}),p.jsx("span",{ref:s,className:`hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-black/40 mb-2 ${l}`,children:"Syams Branding"})]}),p.jsx("div",{className:"grid grid-cols-1 border-t border-black/10",children:[{title:"Brand Strategy Consultation",desc:"Unraveling essence, purpose, and clear brand positioning. The result: a brand with meaning and perception before design is even touched."},{title:"Logo & Visual Identity",desc:"Creating solid, adaptive visual identities rooted in brand strategy. Not just a logo, but a symbol capable of communicating and connecting."},{title:"Brand Revitalization",desc:"Renewing identity direction and aesthetics to remain relevant with the times and audience. A planned evolution, not just a facelift."},{title:"Consultation & Mentoring",desc:"1-on-1 guidance for business owners, creators, or designers who want to understand the deeper layers of strategy and visual branding."}].map((c,d)=>p.jsxs("div",{ref:s,className:`group py-16 border-b border-black/10 flex flex-col md:flex-row gap-8 md:gap-24 hover:bg-neutral-50 transition-colors px-4 -mx-4 ${l}`,children:[p.jsxs("span",{className:"font-mono text-xs text-black/30 pt-2",children:["0",d+1]}),p.jsx("div",{className:"md:w-1/3",children:p.jsx("h3",{className:"text-3xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300",children:c.title})}),p.jsx("div",{className:"md:w-1/2",children:p.jsx("p",{className:"text-black/60 text-lg leading-relaxed",children:c.desc})})]},d))})]}),p.jsxs("section",{className:"mb-40 bg-neutral-50 p-12 md:p-24 rounded-3xl relative overflow-hidden",children:[p.jsxs("div",{ref:s,className:`relative z-10 text-center max-w-3xl mx-auto ${l}`,children:[p.jsx("div",{className:"flex justify-center gap-2 mb-8 text-yellow-500",children:[...Array(5)].map((c,d)=>p.jsx(jh,{size:24,fill:"currentColor"},d))}),p.jsx("h3",{className:"text-4xl md:text-5xl font-medium tracking-tight mb-8",children:'"Excellent"'}),p.jsx("p",{className:"text-xl text-black/60 italic mb-12",children:'"The design process was very fast, the results were very satisfying. Design that thinks, strategy that speaks."'}),p.jsxs("div",{className:"flex flex-col items-center gap-2",children:[p.jsx("span",{className:"font-bold uppercase tracking-widest text-sm",children:"Based on 44+ Google Reviews"}),p.jsx("span",{className:"text-black/40 text-sm",children:"Syams Branding (Formerly A+ Design)"})]})]}),p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none",children:[p.jsx(Dr,{size:400,className:"absolute -top-20 -left-20"}),p.jsx(Dr,{size:400,className:"absolute -bottom-20 -right-20 rotate-180"})]})]}),p.jsxs("section",{className:"bg-[#0A0A0A] text-white p-12 md:p-24 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group",children:[p.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16",children:[p.jsxs("div",{className:"max-w-2xl",children:[p.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8",children:"Syams Branding"}),p.jsxs("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8",children:["Illuminate Your ",p.jsx("br",{})," Brand's Future."]}),p.jsx("p",{className:"text-white/60 text-lg leading-relaxed max-w-lg",children:"Great brands aren't built overnight. They grow from clear direction, honest messaging, and visuals that speak. Ready to collaborate?"})]}),p.jsxs("a",{href:"https://www.upwork.com/agencies/1984085958253630159/",target:"_blank",rel:"noreferrer",className:"bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:["Start Project ",p.jsx(Ko,{size:20})]})]}),p.jsx("div",{className:"absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] group-hover:bg-white/20 transition-all duration-1000"})]})]})},zc=({value:r,label:e,delay:i})=>{const[s,l]=ye.useState(0),[c,d]=ye.useState(!1),h=ye.useRef(null),g=parseFloat(r.replace(/[^0-9.]/g,"")),m=r.replace(/[0-9.]/g,""),v=r.includes(".");return ye.useEffect(()=>{const x=new IntersectionObserver(([y])=>{y.isIntersecting&&d(!0)},{threshold:.5});return h.current&&x.observe(h.current),()=>x.disconnect()},[]),ye.useEffect(()=>{if(!c)return;let x=null;const y=2e3,M=A=>{x||(x=A);const T=Math.min((A-x)/y,1),S=1-Math.pow(1-T,4);l(S*g),T<1?window.requestAnimationFrame(M):l(g)};window.requestAnimationFrame(M)},[c,g]),p.jsx("div",{ref:h,className:"group relative p-8 md:p-12 border-l border-white/10 first:border-l-0 hover:bg-white/[0.03] transition-colors duration-500 cursor-default",children:p.jsxs("div",{className:`transition-all duration-1000 ease-out transform ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:`${i}ms`},children:[p.jsxs("h3",{className:"text-5xl md:text-7xl font-medium tracking-tight mb-4 tabular-nums text-white group-hover:text-white/90 transition-colors",children:[v?s.toFixed(1):Math.floor(s),m]}),p.jsx("div",{className:"h-[2px] w-12 bg-white/20 mb-4 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors",children:e})]})})},NA=({navigateTo:r,setCursorHovering:e})=>{const i=ye.useRef([]),s=d=>{d&&!i.current.includes(d)&&i.current.push(d)};ye.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&(g.target.classList.add("opacity-100","translate-y-0"),g.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>i.current.forEach(h=>h&&d.observe(h)),100),()=>d.disconnect()},[]);const l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return p.jsxs("div",{className:"min-h-screen bg-white text-black pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto font-sans",children:[p.jsxs("button",{onClick:()=>r("talent-directory"),className:"font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 mb-20 flex items-center gap-3 transition-all group",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[p.jsx(Zo,{size:14,className:"group-hover:-translate-x-1 transition-transform"})," Back to Collective"]}),p.jsxs("section",{className:"mb-32",children:[p.jsxs("div",{className:"mb-24",children:[p.jsxs("div",{ref:s,className:`flex items-center gap-4 mb-8 ${l}`,children:[p.jsx("span",{className:"w-12 h-[1px] bg-black/30"}),p.jsx("h5",{className:"text-[11px] font-bold text-black/60 uppercase tracking-[0.3em]",children:"Visual Design & Digital Strategy"})]}),p.jsxs("h1",{ref:s,className:`text-8xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter leading-[0.85] mb-6 ${l} delay-100`,children:["HADIST",p.jsx("span",{className:"text-black/20",children:"."})]}),p.jsx("p",{ref:s,className:`font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-black/40 ${l} delay-200`,children:"Crafting Digital Experiences. Elevating Brands."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-black/10 pt-12",children:[p.jsx("div",{ref:s,className:`md:col-span-5 ${l} delay-300`,children:p.jsx("h3",{className:"text-3xl md:text-4xl leading-tight font-medium",children:'"In the digital age, a brand is defined by every interaction. We turn touchpoints into meaningful connections that drive results."'})}),p.jsxs("div",{ref:s,className:`md:col-span-6 md:col-start-7 text-black/60 text-lg leading-relaxed ${l} delay-400`,children:[p.jsxs("p",{className:"mb-6",children:["Digital presence goes beyond having a website or social media. It’s about ",p.jsx("strong",{children:"Visual Harmony, Strategy, and Impactful Storytelling."})]}),p.jsx("p",{children:"My approach merges creative vision with data-driven insights. I don't just create visuals; I orchestrate comprehensive digital ecosystems that engage audiences and achieve measurable business goals."})]})]})]}),p.jsxs("section",{className:"mb-40 rounded-3xl overflow-hidden bg-black text-white relative shadow-2xl",children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50 pointer-events-none"}),p.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10",children:[p.jsx(zc,{value:"2018",label:"Pro. Since",delay:0}),p.jsx(zc,{value:"150+",label:"Projects Delivered",delay:150}),p.jsx(zc,{value:"95%",label:"Client Retention",delay:300}),p.jsx(zc,{value:"300%+",label:"Avg. Campaign ROI",delay:450})]})]}),p.jsxs("section",{className:"mb-40",children:[p.jsxs("div",{className:"flex justify-between items-end mb-20",children:[p.jsx("h2",{ref:s,className:`text-5xl md:text-7xl font-medium tracking-tighter ${l}`,children:"Core Services"}),p.jsx("span",{ref:s,className:`hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-black/40 mb-2 ${l}`,children:"Hadist Creative"})]}),p.jsx("div",{className:"grid grid-cols-1 border-t border-black/10",children:[{title:"Visual Design Specialist",desc:"Creating high-impact visual assets and layouts that align perfectly with brand identity, ensuring a consistent and premium look across all digital channels."},{title:"Digital Strategy & Roadmap",desc:"Defining clear digital objectives, audience personas, and actionable roadmaps. Bridging the gap between business goals and online execution."},{title:"Content Marketing & Campaigns",desc:"Developing engaging content strategies and campaign narratives that resonate with audiences and drive engagement across platforms."},{title:"Brand Consultancy & Workshops",desc:"Collaborative sessions to align teams, refine brand vision in the digital space, and uncover new opportunities for growth."}].map((d,h)=>p.jsxs("div",{ref:s,className:`group py-16 border-b border-black/10 flex flex-col md:flex-row gap-8 md:gap-24 hover:bg-neutral-50 transition-colors px-4 -mx-4 ${l}`,children:[p.jsxs("span",{className:"font-mono text-xs text-black/30 pt-2",children:["0",h+1]}),p.jsx("div",{className:"md:w-1/3",children:p.jsx("h3",{className:"text-3xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300",children:d.title})}),p.jsx("div",{className:"md:w-1/2",children:p.jsx("p",{className:"text-black/60 text-lg leading-relaxed",children:d.desc})})]},h))})]}),p.jsxs("section",{className:"mb-40 bg-neutral-50 p-12 md:p-24 rounded-3xl relative overflow-hidden",children:[p.jsxs("div",{ref:s,className:`relative z-10 text-center max-w-3xl mx-auto ${l}`,children:[p.jsx("div",{className:"flex justify-center gap-2 mb-8 text-yellow-500",children:[...Array(5)].map((d,h)=>p.jsx(jh,{size:24,fill:"currentColor"},h))}),p.jsx("h3",{className:"text-4xl md:text-5xl font-medium tracking-tight mb-8",children:'"Transformative"'}),p.jsx("p",{className:"text-xl text-black/60 italic mb-12",children:'"Hadist transformed our digital presence. The strategy was spot-on, and the visual execution exceeded our expectations. A true partner in growth."'}),p.jsxs("div",{className:"flex flex-col items-center gap-2",children:[p.jsx("span",{className:"font-bold uppercase tracking-widest text-sm",children:"Based on Client Feedback"}),p.jsx("span",{className:"text-black/40 text-sm",children:"Digital & Creative Services"})]})]}),p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none",children:[p.jsx(Dr,{size:400,className:"absolute -top-20 -left-20"}),p.jsx(Dr,{size:400,className:"absolute -bottom-20 -right-20 rotate-180"})]})]}),p.jsxs("section",{className:"bg-[#0A0A0A] text-white p-12 md:p-24 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group",children:[p.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16",children:[p.jsxs("div",{className:"max-w-2xl",children:[p.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8",children:"Hadist Creative"}),p.jsxs("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8",children:["Redefine Your ",p.jsx("br",{})," Digital Landscape."]}),p.jsx("p",{className:"text-white/60 text-lg leading-relaxed max-w-lg",children:"Impactful digital experiences aren't born by chance. They grow from clear strategy and exceptional execution. Ready to elevate your brand?"})]}),p.jsxs("a",{href:"https://www.upwork.com/agencies/1984085958253630159/",target:"_blank",rel:"noreferrer",className:"bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:["Start Project ",p.jsx(Ko,{size:20})]})]}),p.jsx("div",{className:"absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] group-hover:bg-white/20 transition-all duration-1000"})]})]})},Ic=({value:r,label:e,delay:i})=>{const[s,l]=ye.useState(0),[c,d]=ye.useState(!1),h=ye.useRef(null),g=parseFloat(r.replace(/[^0-9.]/g,"")),m=r.replace(/[0-9.]/g,""),v=r.includes(".");return ye.useEffect(()=>{const x=new IntersectionObserver(([y])=>{y.isIntersecting&&d(!0)},{threshold:.5});return h.current&&x.observe(h.current),()=>x.disconnect()},[]),ye.useEffect(()=>{if(!c)return;let x=null;const y=2e3,M=A=>{x||(x=A);const T=Math.min((A-x)/y,1),S=1-Math.pow(1-T,4);l(S*g),T<1?window.requestAnimationFrame(M):l(g)};window.requestAnimationFrame(M)},[c,g]),p.jsx("div",{ref:h,className:"group relative p-8 md:p-12 border-l border-white/10 first:border-l-0 hover:bg-white/[0.03] transition-colors duration-500 cursor-default",children:p.jsxs("div",{className:`transition-all duration-1000 ease-out transform ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:`${i}ms`},children:[p.jsxs("h3",{className:"text-5xl md:text-7xl font-medium tracking-tight mb-4 tabular-nums text-white group-hover:text-white/90 transition-colors",children:[v?s.toFixed(1):Math.floor(s),m]}),p.jsx("div",{className:"h-[2px] w-12 bg-white/20 mb-4 group-hover:w-full group-hover:bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors",children:e})]})})},DA=({navigateTo:r,setCursorHovering:e})=>{const i=ye.useRef([]),s=d=>{d&&!i.current.includes(d)&&i.current.push(d)};ye.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&(g.target.classList.add("opacity-100","translate-y-0"),g.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>i.current.forEach(h=>h&&d.observe(h)),100),()=>d.disconnect()},[]);const l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return p.jsxs("div",{className:"min-h-screen bg-white text-black pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto font-sans",children:[p.jsxs("button",{onClick:()=>r("talent-directory"),className:"font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 mb-20 flex items-center gap-3 transition-all group",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[p.jsx(Zo,{size:14,className:"group-hover:-translate-x-1 transition-transform"})," Back to Collective"]}),p.jsxs("section",{className:"mb-32",children:[p.jsxs("div",{className:"mb-24",children:[p.jsxs("div",{ref:s,className:`flex items-center gap-4 mb-8 ${l}`,children:[p.jsx("span",{className:"w-12 h-[1px] bg-black/30"}),p.jsx("h5",{className:"text-[11px] font-bold text-black/60 uppercase tracking-[0.3em]",children:"Digital Architect & UI/UX Fullstack"})]}),p.jsxs("h1",{ref:s,className:`text-8xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter leading-[0.85] mb-6 ${l} delay-100`,children:["NANDO",p.jsx("span",{className:"text-black/20",children:"."})]}),p.jsx("p",{ref:s,className:`font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-black/40 ${l} delay-200`,children:"Engineering Experience. Constructing Ecosystems."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-black/10 pt-12",children:[p.jsx("div",{ref:s,className:`md:col-span-5 ${l} delay-300`,children:p.jsx("h3",{className:"text-3xl md:text-4xl leading-tight font-medium",children:'"Design is not just about what you see. It is about the architecture of the system that operates behind the screen."'})}),p.jsxs("div",{ref:s,className:`md:col-span-6 md:col-start-7 text-black/60 text-lg leading-relaxed ${l} delay-400`,children:[p.jsxs("p",{className:"mb-6",children:["I don't just design interfaces; I build ",p.jsx("strong",{children:"Digital Architectures."})]}),p.jsx("p",{children:"Combining UI/UX precision with a Fullstack mindset, I leverage AI-accelerated workflows to deliver scalable, high-growth systems for B2B enterprises. My focus is on creating seamless user journeys that are technically sound and commercially viable."})]})]})]}),p.jsxs("section",{className:"mb-40 rounded-3xl overflow-hidden bg-black text-white relative shadow-2xl",children:[p.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50 pointer-events-none"}),p.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10",children:[p.jsx(Ic,{value:"2021",label:"Pro. Since",delay:0}),p.jsx(Ic,{value:"50+",label:"Enterprise Projects",delay:150}),p.jsx(Ic,{value:"100%",label:"Brand Compliance",delay:300}),p.jsx(Ic,{value:"10x",label:"Workflow Efficiency",delay:450})]})]}),p.jsxs("section",{className:"mb-40",children:[p.jsxs("div",{className:"flex justify-between items-end mb-20",children:[p.jsx("h2",{ref:s,className:`text-5xl md:text-7xl font-medium tracking-tighter ${l}`,children:"Core Services"}),p.jsx("span",{ref:s,className:`hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-black/40 mb-2 ${l}`,children:"Nando Architecture"})]}),p.jsx("div",{className:"grid grid-cols-1 border-t border-black/10",children:[{title:"UI/UX Fullstack Design",desc:"End-to-end design execution from wireframing to high-fidelity prototypes that are ready for development. Bridging the gap between aesthetics and code."},{title:"Digital Architecture & Systems",desc:"Building comprehensive design systems and libraries that ensure consistency, scalability, and speed for complex digital products."},{title:"AI-Accelerated Workflows",desc:"Leveraging cutting-edge AI tools to optimize production speed without compromising quality. From asset generation to automated variations."},{title:"Strategic Visual Implementation",desc:"Translating complex B2B technical requirements into intuitive visual languages that drive commercial growth and user adoption."}].map((d,h)=>p.jsxs("div",{ref:s,className:`group py-16 border-b border-black/10 flex flex-col md:flex-row gap-8 md:gap-24 hover:bg-neutral-50 transition-colors px-4 -mx-4 ${l}`,children:[p.jsxs("span",{className:"font-mono text-xs text-black/30 pt-2",children:["0",h+1]}),p.jsx("div",{className:"md:w-1/3",children:p.jsx("h3",{className:"text-3xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300",children:d.title})}),p.jsx("div",{className:"md:w-1/2",children:p.jsx("p",{className:"text-black/60 text-lg leading-relaxed",children:d.desc})})]},h))})]}),p.jsxs("section",{className:"mb-40 bg-neutral-50 p-12 md:p-24 rounded-3xl relative overflow-hidden",children:[p.jsxs("div",{ref:s,className:`relative z-10 text-center max-w-3xl mx-auto ${l}`,children:[p.jsx("div",{className:"flex justify-center gap-2 mb-8 text-yellow-500",children:[...Array(5)].map((d,h)=>p.jsx(jh,{size:24,fill:"currentColor"},h))}),p.jsx("h3",{className:"text-4xl md:text-5xl font-medium tracking-tight mb-8",children:'"Systematic Precision"'}),p.jsx("p",{className:"text-xl text-black/60 italic mb-12",children:`"Nando doesn't just design; he architects solutions. His fullstack approach to UI/UX created a seamless bridge between our brand goals and technical reality."`}),p.jsxs("div",{className:"flex flex-col items-center gap-2",children:[p.jsx("span",{className:"font-bold uppercase tracking-widest text-sm",children:"Based on Enterprise Feedback"}),p.jsx("span",{className:"text-black/40 text-sm",children:"Design Management & Architecture"})]})]}),p.jsxs("div",{className:"absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none",children:[p.jsx(Dr,{size:400,className:"absolute -top-20 -left-20"}),p.jsx(Dr,{size:400,className:"absolute -bottom-20 -right-20 rotate-180"})]})]}),p.jsxs("section",{className:"bg-[#0A0A0A] text-white p-12 md:p-24 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group",children:[p.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16",children:[p.jsxs("div",{className:"max-w-2xl",children:[p.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8",children:"Nando Architecture"}),p.jsxs("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8",children:["Architect Your ",p.jsx("br",{})," Digital Future."]}),p.jsx("p",{className:"text-white/60 text-lg leading-relaxed max-w-lg",children:"An optimal digital product requires a robust architecture, not just a pretty face. Let's build a system that scales with your ambition."})]}),p.jsxs("a",{href:"https://www.upwork.com/agencies/1984085958253630159/",target:"_blank",rel:"noreferrer",className:"bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:["Start Project ",p.jsx(Ko,{size:20})]})]}),p.jsx("div",{className:"absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] group-hover:bg-white/20 transition-all duration-1000"})]})]})},UA=()=>{const[r,e]=ye.useState(null),[i,s]=ye.useState(!1),l=`/**
 * @project KreavityWorks MASTER ENGINE - H.E.L.P SYSTEM
 * @version 2026.1.14
 * @author Syams | Agent AI KreavityWorks
 * @status ENCRYPTED_OPERATIONAL
 */

const KREAVITYWORKS_ENGINE = {
    settings: {
        identity: "Syams",
        agency: "KreavityWorks",
        standard: "Top Global Agency / International",
        precision: "100% Error-Free"
    },

    analyzeClient: (data) => {
        const { name, postAge, applicants, spent, timezone } = data;
        
        return {
            status: postAge > 3 ? "🟡 BACA DULU BAIK2 (STALE)" : applicants > 20 ? "🔴 STOP (CROWDED)" : "🟢 GO",
            filterTrust: {
                clientName: name || "Unknown",
                ageStatus: postAge <= 1 ? "FRESH - Priority" : \`\${postAge} days ago\`,
                competition: applicants <= 10 ? "HIGH CHANCE" : \`\${applicants} applicants\`,
                riskCheck: spent < 500 ? "RISK CHECK: Low Spent" : "TRUSTED",
                timezoneSync: timezone
            },
            criticalThinking: \`Hi, apa kau mau lanjutkan? Karena kondisi \${applicants} pelamar. Secara rasional, [Saran Strategis].\`
        };
    },

    generateProposal: (client) => {
        const coverLetter = \`
Hi \${client.name},
I’ve researched \${client.company || "your company"} and noticed you are looking for \${client.problem}. 
With my Brandflow Quantum Framework, I will ensure this project isn't just a quick fix, but a systemic foundation for your growth. 
I noticed your brand target is \${client.target}, have you considered how \${client.visualStrategy} might affect their trust level in the current market?

I am available during your core business hours (\${client.timezone}) to ensure Strategic Speed and seamless communication.

Work & Efficiency Ratio (Milestones):
Phase 1: Research & Strategy - [Duration] - $[Price_Calc]
Phase 2: Execution & Feedback - [Duration] - $[Price_Calc]
Phase 3: Final Delivery - [Duration] - $[Price_Calc]

We are a long-term and value-oriented agency, not just quick-and-go. Consider this small step as a strategic investment in your project.

Proposal by: \${KREAVITYWORKS_ENGINE.settings.identity} | \${KREAVITYWORKS_ENGINE.settings.agency}
https://www.kreavityworks.com/talent-syams\`;

        return coverLetter;
    },

    rulesOfEngagement: {
        personalTouch: "Gunakan nama Syams di awal",
        researchPT: "Wajib 1 poin observasi branding PT di awal proposal",
        killerQuestion: "Akhiri dengan pertanyaan teknis yang memaksa cek data",
        investmentJSS: "Utamakan efisiensi jika budget rendah tapi rating tinggi",
        timezoneMatrix: {
            "USA_EST": { diff: "-12h", status: "Work starts 21:00 WIB" },
            "USA_PST": { diff: "-15h", status: "Work starts 00:00 WIB" },
            "EURO_CET": { diff: "-6h", status: "Work starts 15:00 WIB" },
            "UK_GMT": { diff: "-7h", status: "Work starts 16:00 WIB" },
            "AUS_AEST": { diff: "+3h", status: "Work starts 06:00 WIB" }
        }
    }
};

console.log("SYSTEM_READY: Strategic Speed Enabled.");`,c=`/**
 * @project KreavityWorks Global Standard
 * @module Syams_Creative_Execution_Engine
 * @version 1.0.0
 * @status 100% Error-Free
 */

const SyamsEngine = {
    role: {
        identity: "Syams",
        position: "Senior Branding Strategist & Visual Architect at KreavityWorks",
        standard: "Global, High-End Visual, Strategic, Profit-Oriented"
    },
    
    coreFramework: {
        mode: "I. Operational Mode",
        modules: [
            "Data Diagnostics: Sebelum mendesain, bedah psikologi target audiens, kompetitor, dan market positioning.",
            "Systemic Thinking & Future-Proofing: Pastikan desain adaptif (favicon hingga billboard) dan tetap relevan untuk 10 tahun ke depan.",
            "Brandflow Quantum Framework: Setiap karya lahir dari riset, filosofi 'Design That Thinks', dan ketepatan teknis."
        ]
    },

    strategicDepth: {
        mode: "II. Advanced Modules",
        features: {
            neuromarketing: "Psychological & Neuromarketing: Gunakan Gestalt Principles dan Color Psychology untuk memicu emosi (Trust, Luxury, Innovation).",
            archetyping: "Visual Archetyping: Tentukan Brand Archetype (The Magician, The Hero, dll.) sebagai fondasi narasi visual.",
            architecture: "Brand Architecture: Mampu menyusun struktur Monolithic hingga House of Brands sebagai nilai tambah (upsell) bagi klien besar."
        }
    },

    technicalMastery: {
        mode: "III. Technical & AI Mastery",
        aiVisualSpecs: {
            lighting: "f/1.8, ISO, Global Illumination, Octane Render, Ray Tracing",
            materiality: "Anodized aluminum, brushed metal, matte polymer, organic silk"
        },
        qualityControl: "Global Standard QC (10x Sharpness): Bandingkan karya dengan standar agensi top dunia (Pentagram, Wolff Olins). Kritik detail optical balance, kerning, color bleeding, dan pixel perfection. Jika tidak sempurna, katakan 'Gagal' dan beri instruksi perbaikan."
    },

    businessLogic: {
        mode: "IV. Business Logic & Communication",
        justification: "Profit-Oriented Justification: Berikan argumen mengapa desain ini bernilai $5,000+. Hubungkan visual dengan ROI, Brand Recall, dan efisiensi biaya iklan.",
        storytelling: "Storytelling: Buat narasi filosofis yang kuat untuk membantu klien melakukan pitching ke investor atau pasar."
    },

    cheatSheet: [
        { task: "AI Visual Prompt", example: "Syams, buatkan prompt Midjourney untuk hero image website Luxury Real Estate. Spek: Dusk lighting, glass & marble material, 8k, architectural photography style." },
        { task: "Branding Strategy", example: "Syams, klien ini startup AI tapi brandingnya terasa kekanak-kanakan. Gunakan pola pikir Branding Strategist, apa langkah rebranding-nya?" },
        { task: "Quality Control", example: "Syams, ini draft logo (upload file). Lakukan QC 10x lebih tajam dengan standar Pentagram. Apa yang membuatnya belum terlihat mahal?" },
        { task: "Upselling Layanan", example: "Syams, klien puas dengan logo. Bagaimana cara menawarkan sistem 'Brand Architecture' agar mereka mau menambah kontrak?" }
    ],

    syncSummary: {
        identity: "Terkunci sebagai Syams | KreavityWorks",
        system: "Menggabungkan strategi bisnis, psikologi marketing, dan eksekusi visual tingkat tinggi",
        output: "Setiap instruksi akan diproses dengan filter 'Apakah ini sudah standar Global?'"
    }
};

console.log("Syams Engine Ready. Global Standards Applied.");`,d=g=>{navigator.clipboard.writeText(g),s(!0),setTimeout(()=>s(!1),2e3)},h=()=>r==="upwork"?l:r==="branding"?c:"";return p.jsxs("div",{className:"flex flex-col min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-black selection:text-white",children:[p.jsxs("main",{className:"flex-1 flex flex-col justify-center items-center p-6",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-30 mb-4",children:[p.jsx(Xy,{size:14}),p.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.4em]",children:"Internal System v2.0"})]}),p.jsx("h1",{className:"text-4xl md:text-6xl font-black tracking-tighter uppercase",children:"Command Center"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12",children:[p.jsxs("div",{onClick:()=>e("upwork"),className:"bg-white border border-gray-200 p-8 md:p-12 cursor-pointer flex flex-col justify-between h-[350px] md:h-[400px] transition-all duration-500 hover:border-black hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase",children:"System 01"}),p.jsxs("h2",{className:"text-3xl md:text-4xl font-light leading-tight",children:["Mastering Prompt I ",p.jsx("br",{}),p.jsx("span",{className:"font-extrabold block mt-2",children:"Apply Upwork"})]}),p.jsx("div",{className:"w-12 h-0.5 bg-black my-6 group-hover:w-24 transition-all duration-500"}),p.jsx("p",{className:"text-sm text-gray-500 leading-relaxed max-w-xs",children:"H.E.L.P Integration, Client Analysis, & Strategic Proposal Engine."})]}),p.jsxs("div",{className:"opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-xs font-bold tracking-widest flex items-center gap-2 uppercase",children:["Generate Prompt ",p.jsx(Ci,{size:14})]})]}),p.jsxs("div",{onClick:()=>e("branding"),className:"bg-white border border-gray-200 p-8 md:p-12 cursor-pointer flex flex-col justify-between h-[350px] md:h-[400px] transition-all duration-500 hover:border-black hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase",children:"System 02"}),p.jsxs("h2",{className:"text-3xl md:text-4xl font-light leading-tight",children:["AI System I ",p.jsx("br",{}),p.jsx("span",{className:"font-extrabold block mt-2",children:"Branding Strategic"})]}),p.jsx("div",{className:"w-12 h-0.5 bg-black my-6 group-hover:w-24 transition-all duration-500"}),p.jsx("p",{className:"text-sm text-gray-500 leading-relaxed max-w-xs",children:"Global Market Integration, 25 Foundations, Syams Persona."})]}),p.jsxs("div",{className:"opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-xs font-bold tracking-widest flex items-center gap-2 uppercase",children:["Generate Prompt ",p.jsx(Ci,{size:14})]})]})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full max-w-5xl",children:[p.jsxs("a",{href:"https://gemini.google.com/",target:"_blank",rel:"noreferrer",className:"flex-1 py-4 border border-gray-200 text-center text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-50 transition-all",children:["Go to Gemini ",p.jsx(xy,{size:14})]}),p.jsxs("button",{onClick:()=>e("howtouse"),className:"bg-black text-white flex-1 py-4 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all",children:["How to Use ",p.jsx(My,{size:14})]})]})]}),p.jsx("footer",{className:"p-8 text-center border-t border-gray-100 mt-auto",children:p.jsx("p",{className:"text-[10px] md:text-xs text-gray-400 tracking-wide uppercase",children:"This code is confidential, please guard it well for personal and agency growth continuity"})}),r&&p.jsxs("div",{className:"fixed inset-0 bg-white/98 z-[999] flex flex-col animate-in fade-in duration-300",children:[p.jsxs("div",{className:"p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-white",children:[p.jsx("div",{className:"font-bold text-xs tracking-widest uppercase",children:r==="howtouse"?"User Manual":"Prompt Preview"}),p.jsx("button",{onClick:()=>e(null),className:"text-3xl font-light hover:rotate-90 transition-transform",children:"×"})]}),p.jsx("div",{className:"flex-1 overflow-y-auto p-6 md:p-20 bg-neutral-50/50",children:r==="howtouse"?p.jsxs("div",{className:"max-w-2xl mx-auto space-y-12 py-10",children:[p.jsxs("div",{className:"space-y-6",children:[p.jsx("h3",{className:"text-xl font-bold",children:"Cara Pakai:"}),p.jsxs("ol",{className:"list-decimal pl-5 space-y-4 text-sm text-gray-600",children:[p.jsx("li",{children:"Pilih dan klik salah satu kartu sistem (Upwork atau Branding)."}),p.jsxs("li",{children:["Klik tombol ",p.jsx("strong",{children:'"Copy to Clipboard"'})," di dalam modal."]}),p.jsxs("li",{children:["Tempelkan (Paste) di Gemini (Wajib akun ",p.jsx("strong",{children:"KreavityWorks"})," agar optimal)."]}),p.jsx("li",{children:"Sistem akan aktif dan kamu bisa mulai bekerja sesuai persona Syams."})]})]}),p.jsxs("div",{className:"pt-8 border-t border-gray-200",children:[p.jsx("h3",{className:"text-xl font-bold mb-4",children:"FAQ:"}),p.jsxs("ul",{className:"list-disc pl-5 space-y-4 text-sm text-gray-600",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Bisa digabung dalam 1 chat?"}),p.jsx("br",{}),"BISA & Sangat direkomendasikan agar Gemini punya konteks penuh."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Ada kendala teknis?"}),p.jsx("br",{}),"Hubungi Nando via WhatsApp untuk update sistem."]})]})]})]}):p.jsx("pre",{className:"text-[10px] md:text-xs font-mono text-gray-700 whitespace-pre-wrap leading-relaxed max-w-4xl mx-auto bg-white p-6 md:p-10 border border-gray-100 shadow-sm",children:h()})}),r!=="howtouse"&&p.jsx("div",{className:"p-6 md:p-8 border-t border-gray-100 bg-white",children:p.jsx("button",{onClick:()=>d(h()),className:"w-full bg-black text-white py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-neutral-800 transition-all flex items-center justify-center gap-3",children:i?p.jsxs(p.Fragment,{children:[p.jsx(kh,{size:16})," Copied to Clipboard"]}):"Copy System to Clipboard"})})]})]})},LA=({setCursorHovering:r,navigateTo:e,openContact:i})=>{const s=ye.useRef(null),[l,c]=ye.useState(null),[d,h]=ye.useState(null),[g,m]=ye.useState(!1),v=ye.useRef([]),x=S=>{S&&!v.current.includes(S)&&v.current.push(S)};ye.useEffect(()=>{const S=new IntersectionObserver(_=>{_.forEach(U=>{U.isIntersecting&&(U.target.classList.add("opacity-100","translate-y-0"),U.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return v.current.forEach(_=>_&&S.observe(_)),()=>S.disconnect()},[]);const y=S=>{if(l===null)return 1;const _=S*60+30,U=Math.abs(l-_),D=150;return U>D?1:Math.max(1,Math.min(1+(1.5-U/D),2.2))},M=S=>{navigator.clipboard.writeText(S),m(!0),setTimeout(()=>m(!1),2e3)},A=[{icon:p.jsx(yy,{size:20}),link:"https://github.com/kreavityworks"},{icon:p.jsx(Ty,{size:20}),link:"https://www.instagram.com/kreavity_works/"},{icon:p.jsx("span",{className:"font-bold text-xs",children:"UP"}),link:"https://www.upwork.com/agencies/1984085958253630159/"},{icon:p.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:p.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),link:"https://x.com/KreavityWorks"}],T="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return p.jsxs("footer",{id:"contact",className:"snap-start min-h-screen px-6 md:px-12 relative overflow-hidden bg-white text-black py-32",children:[d&&p.jsx("div",{className:"fixed inset-0 z-[9999] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-4 animate-in fade-in duration-500",children:p.jsxs("div",{className:"bg-white text-black p-8 rounded-2xl shadow-2xl relative max-w-sm w-full border border-black/5 flex flex-col items-center text-center animate-in zoom-in-95 duration-500",children:[p.jsx("button",{onClick:()=>h(null),className:"absolute top-4 right-4 text-black/50 hover:text-black transition-all hover:scale-110 bg-neutral-100 rounded-full p-2",children:p.jsx(Ds,{size:20})}),p.jsx("div",{className:"w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards",children:d.type==="Phone"?p.jsx(Vg,{size:36}):p.jsx(Hg,{size:36})}),p.jsxs("div",{className:"space-y-2 mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards",children:[p.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-black/40",children:d.type}),p.jsx("p",{className:"text-2xl font-medium tracking-tighter break-all",children:d.value})]}),p.jsx("button",{onClick:()=>M(d.value),className:`w-full py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards ${g?"bg-green-600":"hover:scale-[1.02] hover:shadow-lg"}`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:p.jsxs("span",{className:`flex items-center gap-2 relative z-10 ${g?"scale-110":""} transition-transform`,children:[g?p.jsx(kh,{size:18}):p.jsx(hy,{size:18}),g?"Copied!":"Copy to Clipboard"]})})]})}),p.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-30",children:[p.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-blob mix-blend-multiply"}),p.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"})]}),p.jsxs("div",{className:"max-w-[1600px] mx-auto w-full relative z-10",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24",children:[p.jsxs("div",{ref:x,className:`${T}`,children:[p.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter mb-8",children:"Have an idea?"}),p.jsx("button",{onClick:i,className:"relative overflow-hidden group !border-b-2 !border-t-0 !border-l-0 !border-r-0 !border-black/20 !rounded-none pb-4 flex items-center gap-6 overflow-visible cursor-pointer",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:p.jsxs("span",{className:"relative z-10 flex items-center gap-6 group-hover:gap-10 transition-all duration-500 text-4xl md:text-6xl font-light",children:["Contact Us ",p.jsx(Ci,{size:56})]})}),p.jsxs("div",{className:"flex gap-4 mt-8",children:[p.jsxs("button",{onClick:()=>h({type:"Phone",value:"+62 821-2544-9866"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:p.jsx(Vg,{size:24})})]}),p.jsxs("button",{onClick:()=>h({type:"Email",value:"projects@kreavityworks.com"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[p.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),p.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:p.jsx(Hg,{size:24})})]})]})]}),p.jsxs("div",{ref:x,className:`flex flex-col gap-4 text-black/50 text-sm ${T} delay-200`,children:[p.jsxs("p",{children:["Kreavity Works HQ",p.jsx("br",{}),"Jakarta, Indonesia"]}),p.jsx("p",{className:"mt-4 text-black",children:"projects@kreavityworks.com"}),p.jsx("div",{ref:s,className:"flex items-end gap-2 mt-8 h-16",onMouseMove:S=>{const _=s.current.getBoundingClientRect();c(S.clientX-_.left)},onMouseLeave:()=>c(null),children:A.map((S,_)=>{const U=y(_);return p.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",style:{transform:`scale(${U})`},className:"w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 origin-bottom shadow-sm",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:S.icon},_)})})]})]}),p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium gap-10 md:gap-0",children:[p.jsxs("div",{className:"flex flex-row justify-center items-center gap-6 md:gap-8 flex-wrap",children:[p.jsx("button",{onClick:()=>e("privacy-policy"),className:"hover:text-black transition-colors",children:"Privacy Policy"}),p.jsxs("button",{onClick:()=>e("partner"),className:"hover:text-black relative group transition-colors",children:["Become Partner Agent",p.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"})]}),p.jsxs("button",{onClick:()=>e("talent-directory"),className:"hover:text-black relative group transition-colors",children:["The Collective",p.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"})]})]}),p.jsx("div",{className:"w-full md:w-auto text-center",children:p.jsx("p",{className:"opacity-60",children:"© 2026 KreavityWorks. All Rights Reserved."})})]})]})]})},OA=()=>{const[r,e]=ye.useState("home"),[i,s]=ye.useState(null),[l,c]=ye.useState(!1),[d,h]=ye.useState(!1),[g,m]=ye.useState(!1),[v,x]=ye.useState(!1),[y,M]=ye.useState(null),[A,T]=ye.useState(!1),[S,_]=ye.useState(!1),[U,D]=ye.useState(""),[P,I]=ye.useState(!1),[F,z]=ye.useState(!1),[Z,w]=ye.useState(Qy[0]),N=ye.useRef(null),H=ye.useRef(null),ie=ye.useRef(null),ae=ye.useRef(null),he=k=>{M(k),m(!0)};ye.useEffect(()=>{const k=window.location.pathname.replace("/",""),_e=new URLSearchParams(window.location.search).get("p");if(k==="talent-syams-aisystem")e("talent-syams-aisystem");else if(_e){const ve=_e.replace("/","");window.history.replaceState(null,null,_e),e(ve)}},[]),ye.useEffect(()=>{window.history.state||window.history.replaceState({page:"home"},"","/");const k=J=>{J.state&&J.state.page?(e(J.state.page),ae.current&&ae.current.scrollTo(0,0)):e("home")};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),ye.useEffect(()=>{const k=_e=>{if(!N.current)return;const ve=_e.clientX,O=_e.clientY;let ne=1;U?ne=4:S?ne=5:A&&(ne=3.5),N.current.style.transform=`translate3d(${ve}px, ${O}px, 0) scale(${ne})`,N.current.style.opacity=P?"0":"1",H.current&&ie.current&&(U?(H.current.style.opacity="0",ie.current.style.opacity="1",ie.current.innerText=U,N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="black",N.current.style.color="white",N.current.style.border="none"):S?(H.current.style.opacity="1",ie.current.style.opacity="0",N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="white",N.current.style.color="black",N.current.style.border="none"):(H.current.style.opacity="0",ie.current.style.opacity="0",N.current.style.mixBlendMode="difference",N.current.style.backgroundColor="white",N.current.style.color="transparent"))};window.addEventListener("mousemove",k);const J=setTimeout(()=>h(!0),700);return()=>{window.removeEventListener("mousemove",k),clearTimeout(J)}},[A,S,U,P]);const oe=(k,J=null)=>{if(c(!1),J==="contact"){M(null),m(!0);return}if(k==="project"){const _e=Vc.find(ve=>ve.id===J);_e&&(h(!1),setTimeout(()=>{s(_e),e("project"),window.history.pushState({page:"project",id:J},"",`/project/${J}`),h(!0),ae.current&&ae.current.scrollTo(0,0)},700));return}h(!1),setTimeout(()=>{e(k);const _e=k==="home"?"/":`/${k}`;window.history.pushState({page:k},"",_e),h(!0),setTimeout(()=>{if(ae.current&&ae.current.scrollTo(0,0),J&&typeof J=="string"){const ve=document.getElementById(J);ve&&ve.scrollIntoView({behavior:"smooth"})}},50)},700)},B=()=>{z(!0),oe("home"),setTimeout(()=>z(!1),500)};return p.jsxs(p.Fragment,{children:[p.jsx(TA,{isOpen:g,onClose:()=>m(!1),setCursorHovering:T,initialInterest:y,navigateTo:oe}),p.jsx(AA,{isOpen:v,onClose:()=>x(!1),setCursorHovering:T,selectedCountry:Z,setSelectedCountry:w}),p.jsx("div",{className:`fixed inset-0 z-[10000] transition-all duration-700 ease-in-out pointer-events-none 
        ${d?"opacity-0 backdrop-blur-none":"opacity-100 backdrop-blur-3xl bg-white/10"}`}),p.jsxs("div",{ref:N,className:"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -mt-2 -ml-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out mix-blend-difference overflow-hidden",children:[p.jsx("span",{ref:H,className:"absolute opacity-0 transition-all duration-300 text-black flex items-center justify-center",children:p.jsx(_y,{size:4,strokeWidth:2.5})}),p.jsx("span",{ref:ie,className:"absolute opacity-0 text-[2px] font-bold tracking-widest text-white whitespace-nowrap"})]}),p.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-white/80 border-b border-black/5 text-black transition-all duration-700 ${d?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:[p.jsx("div",{className:`cursor-pointer select-none origin-left ${F?"animate-logo-reset":""}`,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),onClick:B,children:p.jsx("img",{src:"/brand/logo.png",alt:"KREAVITY WORKS",className:"h-10 md:h-12 w-auto object-contain"})}),p.jsxs("div",{className:"hidden md:flex items-center gap-8 text-sm tracking-tight font-medium text-black/70",children:[p.jsx("button",{onClick:()=>oe("home","why-choose-us"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Why Us"}),p.jsx("button",{onClick:()=>oe("workflow"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Workflow"}),p.jsx("button",{onClick:()=>oe("home","projects"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Projects"}),p.jsx("button",{onClick:()=>oe("company"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Company"}),p.jsx("button",{onClick:()=>oe("home","contact"),className:"border border-black/10 rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Contact Us"})]}),p.jsx("button",{className:"md:hidden text-black transition-transform duration-300 active:scale-90",onClick:()=>c(!l),children:l?p.jsx(Ds,{size:24}):p.jsx(Uy,{size:24})})]}),l&&p.jsxs("div",{className:"fixed inset-0 bg-white/90 backdrop-blur-2xl z-[60] flex flex-col justify-center items-center gap-10 animate-in fade-in duration-500 overflow-hidden md:hidden",children:[p.jsx("button",{onClick:()=>oe("home"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-75",children:"Home"}),p.jsx("button",{onClick:()=>oe("workflow"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-100",children:"Workflow"}),p.jsx("button",{onClick:()=>oe("company"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-150",children:"Company"}),p.jsx("button",{onClick:()=>oe("talent-directory"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-200",children:"The Collective"}),p.jsx("button",{onClick:()=>c(!1),className:"mt-10 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-black/20 hover:text-black hover:border-black/20 transition-all duration-300 active:scale-95 animate-in slide-in-from-bottom-4 duration-500 delay-300",children:p.jsx(Ds,{size:28})})]}),p.jsxs("div",{ref:ae,className:"h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white",children:[r==="home"&&p.jsx(vA,{setCursorHovering:T,setIsEyeMode:_,setIsVideoHovering:I,navigateTo:oe}),r==="company"&&p.jsx(yA,{setCursorHovering:T,setCursorText:D}),r==="workflow"&&p.jsx(_A,{setCursorHovering:T}),r==="privacy-policy"&&p.jsx(bA,{setCursorHovering:T,navigateTo:oe}),r==="partner"&&p.jsx(SA,{setCursorHovering:T,openPartnerForm:()=>x(!0)}),r==="talent-directory"&&p.jsx(RA,{setCursorHovering:T,navigateTo:oe}),r==="talent-syams"&&p.jsx(CA,{navigateTo:oe,setCursorHovering:T}),r==="talent-nando"&&p.jsx(DA,{navigateTo:oe,setCursorHovering:T}),r==="talent-hadist"&&p.jsx(NA,{navigateTo:oe,setCursorHovering:T}),r==="talent-syams-aisystem"&&p.jsx(UA,{}),r==="project"&&i&&p.jsx(wA,{project:i,allProjects:Vc,setCursorHovering:T,setCursorText:D,navigateTo:oe,setIsEyeMode:_,openContact:()=>he(i.title)}),p.jsx(LA,{setCursorHovering:T,navigateTo:oe,openContact:()=>m(!0)})]})]})};Qb.createRoot(document.getElementById("root")).render(p.jsx(ye.StrictMode,{children:p.jsx(OA,{})}));
