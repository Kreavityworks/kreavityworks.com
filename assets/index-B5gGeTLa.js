(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var $f={exports:{}},Uo={};var wg;function By(){if(wg)return Uo;wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var Rg;function Fy(){return Rg||(Rg=1,$f.exports=By()),$f.exports}var g=Fy(),ed={exports:{}},rt={};var Cg;function ky(){if(Cg)return rt;Cg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function v(O,ne,ge){this.props=O,this.context=ne,this.refs=S,this.updater=ge||A}v.prototype.isReactComponent={},v.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=v.prototype;function D(O,ne,ge){this.props=O,this.context=ne,this.refs=S,this.updater=ge||A}var P=D.prototype=new U;P.constructor=D,T(P,v.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(O,ne,ge){var Ee=ge.ref;return{$$typeof:o,type:O,key:ne,ref:Ee!==void 0?Ee:null,props:ge}}function N(O,ne){return w(O.type,ne,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function ie(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ne[ge]})}var ae=/\/+/g;function he(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?ie(""+O.key):ne.toString(36)}function oe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,ne,ge,Ee,Fe){var W=typeof O;(W==="undefined"||W==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(W){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case o:case t:ce=!0;break;case _:return ce=O._init,B(ce(O._payload),ne,ge,Ee,Fe)}}if(ce)return Fe=Fe(O),ce=Ee===""?"."+he(O,0):Ee,I(Fe)?(ge="",ce!=null&&(ge=ce.replace(ae,"$&/")+"/"),B(Fe,ne,ge,"",function(Ge){return Ge})):Fe!=null&&(V(Fe)&&(Fe=N(Fe,ge+(Fe.key==null||O&&O.key===Fe.key?"":(""+Fe.key).replace(ae,"$&/")+"/")+ce)),ne.push(Fe)),1;ce=0;var Ce=Ee===""?".":Ee+":";if(I(O))for(var He=0;He<O.length;He++)Ee=O[He],W=Ce+he(Ee,He),ce+=B(Ee,ne,ge,W,Fe);else if(He=M(O),typeof He=="function")for(O=He.call(O),He=0;!(Ee=O.next()).done;)Ee=Ee.value,W=Ce+he(Ee,He++),ce+=B(Ee,ne,ge,W,Fe);else if(W==="object"){if(typeof O.then=="function")return B(oe(O),ne,ge,Ee,Fe);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ce}function k(O,ne,ge){if(O==null)return O;var Ee=[],Fe=0;return B(O,Ee,"","",function(W){return ne.call(ge,W,Fe++)}),Ee}function Q(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},_e={map:k,forEach:function(O,ne,ge){k(O,function(){ne.apply(this,arguments)},ge)},count:function(O){var ne=0;return k(O,function(){ne++}),ne},toArray:function(O){return k(O,function(ne){return ne})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=x,rt.Children=_e,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ne,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ee=T({},O.props),Fe=O.key;if(ne!=null)for(W in ne.key!==void 0&&(Fe=""+ne.key),ne)!Z.call(ne,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&ne.ref===void 0||(Ee[W]=ne[W]);var W=arguments.length-2;if(W===1)Ee.children=ge;else if(1<W){for(var ce=Array(W),Ce=0;Ce<W;Ce++)ce[Ce]=arguments[Ce+2];Ee.children=ce}return w(O.type,Fe,Ee)},rt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ne,ge){var Ee,Fe={},W=null;if(ne!=null)for(Ee in ne.key!==void 0&&(W=""+ne.key),ne)Z.call(ne,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Fe[Ee]=ne[Ee]);var ce=arguments.length-2;if(ce===1)Fe.children=ge;else if(1<ce){for(var Ce=Array(ce),He=0;He<ce;He++)Ce[He]=arguments[He+2];Fe.children=Ce}if(O&&O.defaultProps)for(Ee in ce=O.defaultProps,ce)Fe[Ee]===void 0&&(Fe[Ee]=ce[Ee]);return w(O,W,Fe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=V,rt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Q}},rt.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},rt.startTransition=function(O){var ne=z.T,ge={};z.T=ge;try{var Ee=O(),Fe=z.S;Fe!==null&&Fe(ge,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(F,ye)}catch(W){ye(W)}finally{ne!==null&&ge.types!==null&&(ne.types=ge.types),z.T=ne}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(O){return z.H.use(O)},rt.useActionState=function(O,ne,ge){return z.H.useActionState(O,ne,ge)},rt.useCallback=function(O,ne){return z.H.useCallback(O,ne)},rt.useContext=function(O){return z.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ne){return z.H.useDeferredValue(O,ne)},rt.useEffect=function(O,ne){return z.H.useEffect(O,ne)},rt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(O,ne,ge){return z.H.useImperativeHandle(O,ne,ge)},rt.useInsertionEffect=function(O,ne){return z.H.useInsertionEffect(O,ne)},rt.useLayoutEffect=function(O,ne){return z.H.useLayoutEffect(O,ne)},rt.useMemo=function(O,ne){return z.H.useMemo(O,ne)},rt.useOptimistic=function(O,ne){return z.H.useOptimistic(O,ne)},rt.useReducer=function(O,ne,ge){return z.H.useReducer(O,ne,ge)},rt.useRef=function(O){return z.H.useRef(O)},rt.useState=function(O){return z.H.useState(O)},rt.useSyncExternalStore=function(O,ne,ge){return z.H.useSyncExternalStore(O,ne,ge)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var Ng;function Oh(){return Ng||(Ng=1,ed.exports=ky()),ed.exports}var we=Oh(),td={exports:{}},Lo={},nd={exports:{}},id={};var Dg;function Hy(){return Dg||(Dg=1,(function(o){function t(B,k){var Q=B.length;B.push(k);e:for(;0<Q;){var ye=Q-1>>>1,_e=B[ye];if(0<l(_e,k))B[ye]=k,B[Q]=_e,Q=ye;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var k=B[0],Q=B.pop();if(Q!==k){B[0]=Q;e:for(var ye=0,_e=B.length,O=_e>>>1;ye<O;){var ne=2*(ye+1)-1,ge=B[ne],Ee=ne+1,Fe=B[Ee];if(0>l(ge,Q))Ee<_e&&0>l(Fe,ge)?(B[ye]=Fe,B[Ee]=Q,ye=Ee):(B[ye]=ge,B[ne]=Q,ye=ne);else if(Ee<_e&&0>l(Fe,Q))B[ye]=Fe,B[Ee]=Q,ye=Ee;else break e}}return k}function l(B,k){var Q=B.sortIndex-k.sortIndex;return Q!==0?Q:B.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,b=3,M=!1,A=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=B)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function I(B){if(T=!1,P(B),!A)if(i(m)!==null)A=!0,F||(F=!0,ie());else{var k=i(p);k!==null&&oe(I,k.startTime-B)}}var F=!1,z=-1,Z=5,w=-1;function N(){return S?!0:!(o.unstable_now()-w<Z)}function V(){if(S=!1,F){var B=o.unstable_now();w=B;var k=!0;try{e:{A=!1,T&&(T=!1,U(z),z=-1),M=!0;var Q=b;try{t:{for(P(B),x=i(m);x!==null&&!(x.expirationTime>B&&N());){var ye=x.callback;if(typeof ye=="function"){x.callback=null,b=x.priorityLevel;var _e=ye(x.expirationTime<=B);if(B=o.unstable_now(),typeof _e=="function"){x.callback=_e,P(B),k=!0;break t}x===i(m)&&s(m),P(B)}else s(m);x=i(m)}if(x!==null)k=!0;else{var O=i(p);O!==null&&oe(I,O.startTime-B),k=!1}}break e}finally{x=null,b=Q,M=!1}k=void 0}}finally{k?ie():F=!1}}}var ie;if(typeof D=="function")ie=function(){D(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=V,ie=function(){he.postMessage(null)}}else ie=function(){v(V,0)};function oe(B,k){z=v(function(){B(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(B){switch(b){case 1:case 2:case 3:var k=3;break;default:k=b}var Q=b;b=k;try{return B()}finally{b=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,k){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=b;b=B;try{return k()}finally{b=Q}},o.unstable_scheduleCallback=function(B,k,Q){var ye=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,B){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Q+_e,B={id:_++,callback:k,priorityLevel:B,startTime:Q,expirationTime:_e,sortIndex:-1},Q>ye?(B.sortIndex=Q,t(p,B),i(m)===null&&B===i(p)&&(T?(U(z),z=-1):T=!0,oe(I,Q-ye))):(B.sortIndex=_e,t(m,B),A||M||(A=!0,F||(F=!0,ie()))),B},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(B){var k=b;return function(){var Q=b;b=k;try{return B.apply(this,arguments)}finally{b=Q}}}})(id)),id}var Ug;function Gy(){return Ug||(Ug=1,nd.exports=Hy()),nd.exports}var ad={exports:{}},Dn={};var Lg;function Vy(){if(Lg)return Dn;Lg=1;var o=Oh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var Og;function jy(){if(Og)return ad.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ad.exports=Vy(),ad.exports}var Pg;function Xy(){if(Pg)return Lo;Pg=1;var o=Gy(),t=Oh(),i=jy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,r=f;break}if(R===r){y=!0,r=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,r=u;break}if(R===r){y=!0,r=f,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case D:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var oe=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ye=[],_e=-1;function O(e){return{current:e}}function ne(e){0>_e||(e.current=ye[_e],ye[_e]=null,_e--)}function ge(e,n){_e++,ye[_e]=e.current,e.current=n}var Ee=O(null),Fe=O(null),W=O(null),ce=O(null);function Ce(e,n){switch(ge(W,n),ge(Fe,e),ge(Ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?K0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=K0(n),e=Q0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ee),ge(Ee,e)}function He(){ne(Ee),ne(Fe),ne(W)}function Ge(e){e.memoizedState!==null&&ge(ce,e);var n=Ee.current,a=Q0(n,e.type);n!==a&&(ge(Fe,e),ge(Ee,a))}function ht(e){Fe.current===e&&(ne(Ee),ne(Fe)),ce.current===e&&(ne(ce),Ro._currentValue=Q)}var $t,xt;function pt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+xt}var Nt=!1;function ot(e,n){if(!e||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var re=ue}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(ue){re=ue}e.call(xe.prototype)}}else{try{throw Error()}catch(ue){re=ue}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&re&&typeof ue.stack=="string")return[ue.stack,re.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),te=R.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===te.length)for(r=H.length-1,u=te.length-1;1<=r&&0<=u&&H[r]!==te[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==te[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==te[u]){var de=`
`+H[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pt(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return pt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Yt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,Ot=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,fe=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,Ne=o.unstable_IdlePriority,Xe=o.log,nt=o.unstable_setDisableYieldValue,Me=null,Te=null;function Be(e){if(typeof Xe=="function"&&nt(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,e)}catch{}}var ze=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(De(e)/ct|0)|0}var Le=256,Ae=262144,Ie=4194304;function Se(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Se(r):(y&=R,y!==0?u=Se(y):a||(a=R&~e,a!==0&&(u=Se(a))))):(R=r&~f,R!==0?u=Se(R):y!==0?u=Se(y):a||(a=r&~e,a!==0&&(u=Se(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,te=e.hiddenUpdates;for(a=y&~a;0<a;){var de=31-ze(a),xe=1<<de;R[de]=0,H[de]=-1;var re=te[de];if(re!==null)for(te[de]=null,de=0;de<re.length;de++){var ue=re[de];ue!==null&&(ue.lane&=-536870913)}a&=~xe}r!==0&&Jo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Jo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Fr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ze(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ls(e,n){var a=n&-n;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|n))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:yg(e.type))}function Ni(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var si=Math.random().toString(36).slice(2),on="__reactFiber$"+si,_n="__reactProps$"+si,_i="__reactContainer$"+si,Ps="__reactEvents$"+si,zs="__reactListeners$"+si,$o="__reactHandles$"+si,Gr="__reactResources$"+si,ts="__reactMarker$"+si;function Vr(e){delete e[on],delete e[_n],delete e[Ps],delete e[zs],delete e[$o]}function ya(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ag(e);e!==null;){if(a=e[on])return a;e=ag(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[on]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ns(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Sa(e){var n=e[Gr];return n||(n=e[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[ts]=!0}var Y=new Set,le={};function se(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(le[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Oe={};function Ve(e){return Yt.call(Oe,e)?!0:Yt.call(ke,e)?!1:Ue.test(e)?Oe[e]=!0:(ke[e]=!0,!1)}function We(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Dt(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function Pt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Dt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function st(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,r,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+et(n)):e.value!==""+et(n)&&(e.value=""+et(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,et(n)):a!=null?bn(e,y,et(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+et(R):e.removeAttribute("name")}function Xi(e,n,a,r,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Xt(e)}function bn(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function It(e,n,a){if(n!=null&&(n=""+et(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+et(a):""}function Sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(oe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=et(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Is(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&En(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return Pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Fs=null;function Zh(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[_n]||null;if(!u)throw Error(s(90));yn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Pt(r)}break e;case"textarea":It(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(e,!!a.multiple,n,!1)}}}var Qc=!1;function Kh(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var r=e(n);return r}finally{if(Qc=!1,(Bs!==null||Fs!==null)&&(Hl(),Bs&&(n=Bs,e=Fs,Fs=Bs=null,Zh(n),e)))for(n=0;n<e.length;n++)Zh(e[n])}}function jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(qi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Jc=!1}var Ma=null,$c=null,tl=null;function Qh(){if(tl)return tl;var e,n=$c,a=n.length,r,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===u[f-r];r++);return tl=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function Jh(){return!1}function kn(e){function n(a,r,u,f,y){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:Jh,this.isPropagationStopped=Jh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=kn(is),Wr=x({},is,{view:0,detail:0}),zv=kn(Wr),eu,tu,qr,sl=x({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(eu=e.screenX-qr.screenX,tu=e.screenY-qr.screenY):tu=eu=0,qr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),$h=kn(sl),Iv=x({},sl,{dataTransfer:0}),Bv=kn(Iv),Fv=x({},Wr,{relatedTarget:0}),nu=kn(Fv),kv=x({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=kn(kv),Gv=x({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=kn(Gv),jv=x({},is,{data:0}),ep=kn(jv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qv[e])?!!n[e]:!1}function iu(){return Yv}var Zv=x({},Wr,{key:function(e){if(e.key){var n=Xv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=kn(Zv),Qv=x({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=kn(Qv),Jv=x({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),$v=kn(Jv),e_=x({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=kn(e_),n_=x({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=kn(n_),a_=x({},is,{newState:0,oldState:0}),s_=kn(a_),r_=[9,13,27,32],au=qi&&"CompositionEvent"in window,Yr=null;qi&&"documentMode"in document&&(Yr=document.documentMode);var o_=qi&&"TextEvent"in window&&!Yr,np=qi&&(!au||Yr&&8<Yr&&11>=Yr),ip=" ",ap=!1;function sp(e,n){switch(e){case"keyup":return r_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function l_(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function c_(e,n){if(ks)return e==="compositionend"||!au&&sp(e,n)?(e=Qh(),tl=$c=Ma=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!u_[e.type]:n==="textarea"}function lp(e,n,a,r){Bs?Fs?Fs.push(r):Fs=[r]:Bs=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Zr=null,Kr=null;function f_(e){j0(e,0)}function rl(e){var n=ns(e);if(Pt(n))return e}function cp(e,n){if(e==="change")return n}var up=!1;if(qi){var su;if(qi){var ru="oninput"in document;if(!ru){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),ru=typeof fp.oninput=="function"}su=ru}else su=!1;up=su&&(!document.documentMode||9<document.documentMode)}function dp(){Zr&&(Zr.detachEvent("onpropertychange",hp),Kr=Zr=null)}function hp(e){if(e.propertyName==="value"&&rl(Kr)){var n=[];lp(n,Kr,e,Kc(e)),Kh(f_,n)}}function d_(e,n,a){e==="focusin"?(dp(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",hp)):e==="focusout"&&dp()}function h_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Kr)}function p_(e,n){if(e==="click")return rl(n)}function m_(e,n){if(e==="input"||e==="change")return rl(n)}function g_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:g_;function Qr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Yt.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var a=pp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var x_=qi&&"documentMode"in document&&11>=document.documentMode,Hs=null,lu=null,Jr=null,cu=!1;function vp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Hs==null||Hs!==Qe(r)||(r=Hs,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Yl(lu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Hs)))}function as(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},uu={},_p={};qi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function ss(e){if(uu[e])return uu[e];if(!Gs[e])return e;var n=Gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return uu[e]=n[a];return e}var yp=ss("animationend"),bp=ss("animationiteration"),Sp=ss("animationstart"),v_=ss("transitionrun"),__=ss("transitionstart"),y_=ss("transitioncancel"),Mp=ss("transitionend"),Ep=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function bi(e,n){Ep.set(e,n),se(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Vs=0,du=0;function ll(){for(var e=Vs,n=du=Vs=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var y=r.pending;y===null?u.next=u:(u.next=y.next,y.next=u),r.pending=u}f!==0&&Tp(a,u,f)}}function cl(e,n,a,r){oi[Vs++]=e,oi[Vs++]=n,oi[Vs++]=a,oi[Vs++]=r,du|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hu(e,n,a,r){return cl(e,n,a,r),ul(e)}function rs(e,n){return cl(e,null,null,n),ul(e)}function Tp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-ze(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<bo)throw bo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var js={};function b_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new b_(e,n,a,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ap(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,r,u,f){var y=0;if(r=e,typeof e=="function")pu(e)&&(y=1);else if(typeof e=="string")y=Ay(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return os(a.children,u,f,n);case S:y=8,u|=24;break;case v:return e=Kn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case I:return e=Kn(13,a,n,u),e.elementType=I,e.lanes=f,e;case F:return e=Kn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case U:y=9;break e;case P:y=11;break e;case z:y=14;break e;case Z:y=16,r=null;break e}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(y,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function os(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function mu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function wp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Xs=[],Ws=0,dl=null,$r=0,ci=[],ui=0,Ea=null,Di=1,Ui="";function Zi(e,n){Xs[Ws++]=$r,Xs[Ws++]=dl,dl=e,$r=n}function Cp(e,n,a){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=Ea,Ea=e;var r=Di;e=Ui;var u=32-ze(r)-1;r&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var y=u-u%5;f=(r&(1<<y)-1).toString(32),r>>=y,u-=y,Di=1<<32-ze(n)+u|a<<u|r,Ui=f+e}else Di=1<<f|a<<u|r,Ui=e}function xu(e){e.return!==null&&(Zi(e,1),Cp(e,1,0))}function vu(e){for(;e===dl;)dl=Xs[--Ws],Xs[Ws]=null,$r=Xs[--Ws],Xs[Ws]=null;for(;e===Ea;)Ea=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null}function Np(e,n){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=Ea,Di=n.id,Ui=n.overflow,Ea=e}var Tn=null,Wt=null,St=!1,Ta=null,fi=!1,_u=Error(s(519));function Aa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(li(n,e)),_u}function Dp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[_n]=r,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)gt(Mo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Xi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Y0(n.textContent,a)?(r.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),r.onScroll!=null&&gt("scroll",n),r.onScrollEnd!=null&&gt("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Aa(e,!0)}function Up(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function qs(e){if(e!==Tn)return!1;if(!St)return Up(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Wt&&Aa(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Wt=ig(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Wt=ig(e)}else n===27?(n=Wt,ka(e.type)?(e=Vf,Vf=null,Wt=e):Wt=n):Wt=Tn?hi(e.stateNode.nextSibling):null;return!0}function ls(){Wt=Tn=null,St=!1}function yu(){var e=Ta;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ta=null),e}function eo(e){Ta===null?Ta=[e]:Ta.push(e)}var bu=O(null),cs=null,Ki=null;function wa(e,n,a){ge(bu,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=bu.current,ne(bu)}function Su(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Su(f.return,a,e),r||(y=null);break e}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Su(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ys(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;Zn(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===ce.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Mu(n,e,a,r),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Lp(cs,e)}function pl(e,n){return cs===null&&us(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return a}var S_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},M_=o.unstable_scheduleCallback,E_=o.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new S_,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&M_(E_,function(){e.controller.abort()})}var no=null,Tu=0,Zs=0,Ks=null;function T_(e,n){if(no===null){var a=no=[];Tu=0,Zs=Cf(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Op,Op),n}function Op(){if(--Tu===0&&no!==null){Ks!==null&&(Ks.status="fulfilled");var e=no;no=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function A_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Pp=B.S;B.S=function(e,n){v0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&T_(e,n),Pp!==null&&Pp(e,n)};var fs=O(null);function Au(){var e=fs.current;return e!==null?e:jt.pooledCache}function ml(e,n){n===null?ge(fs,fs.current):ge(fs,n.pool)}function zp(){var e=Au();return e===null?null:{parent:ln._currentValue,pool:e}}var Qs=Error(s(460)),wu=Error(s(474)),gl=Error(s(542)),xl={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw hs=n,Qs}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Qs):a}}var hs=null;function Fp(){if(hs===null)throw Error(s(459));var e=hs;return hs=null,e}function kp(e){if(e===Qs||e===gl)throw Error(s(483))}var Js=null,io=0;function vl(e){var n=io;return io+=1,Js===null&&(Js=[]),Bp(Js,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){function n(K,j){if(e){var ee=K.deletions;ee===null?(K.deletions=[j],K.flags|=16):ee.push(j)}}function a(K,j){if(!e)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function r(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Yi(K,j),K.index=0,K.sibling=null,K}function f(K,j,ee){return K.index=ee,e?(ee=K.alternate,ee!==null?(ee=ee.index,ee<j?(K.flags|=67108866,j):ee):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,j,ee,me){return j===null||j.tag!==6?(j=mu(ee,K.mode,me),j.return=K,j):(j=u(j,ee),j.return=K,j)}function H(K,j,ee,me){var Je=ee.type;return Je===T?de(K,j,ee.props.children,me,ee.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&ds(Je)===j.type)?(j=u(j,ee.props),ao(j,ee),j.return=K,j):(j=fl(ee.type,ee.key,ee.props,null,K.mode,me),ao(j,ee),j.return=K,j)}function te(K,j,ee,me){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=gu(ee,K.mode,me),j.return=K,j):(j=u(j,ee.children||[]),j.return=K,j)}function de(K,j,ee,me,Je){return j===null||j.tag!==7?(j=os(ee,K.mode,me,Je),j.return=K,j):(j=u(j,ee),j.return=K,j)}function xe(K,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=mu(""+j,K.mode,ee),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return ee=fl(j.type,j.key,j.props,null,K.mode,ee),ao(ee,j),ee.return=K,ee;case A:return j=gu(j,K.mode,ee),j.return=K,j;case Z:return j=ds(j),xe(K,j,ee)}if(oe(j)||ie(j))return j=os(j,K.mode,ee,null),j.return=K,j;if(typeof j.then=="function")return xe(K,vl(j),ee);if(j.$$typeof===D)return xe(K,pl(K,j),ee);_l(K,j)}return null}function re(K,j,ee,me){var Je=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Je!==null?null:R(K,j,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Je?H(K,j,ee,me):null;case A:return ee.key===Je?te(K,j,ee,me):null;case Z:return ee=ds(ee),re(K,j,ee,me)}if(oe(ee)||ie(ee))return Je!==null?null:de(K,j,ee,me,null);if(typeof ee.then=="function")return re(K,j,vl(ee),me);if(ee.$$typeof===D)return re(K,j,pl(K,ee),me);_l(K,ee)}return null}function ue(K,j,ee,me,Je){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return K=K.get(ee)||null,R(j,K,""+me,Je);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return K=K.get(me.key===null?ee:me.key)||null,H(j,K,me,Je);case A:return K=K.get(me.key===null?ee:me.key)||null,te(j,K,me,Je);case Z:return me=ds(me),ue(K,j,ee,me,Je)}if(oe(me)||ie(me))return K=K.get(ee)||null,de(j,K,me,Je,null);if(typeof me.then=="function")return ue(K,j,ee,vl(me),Je);if(me.$$typeof===D)return ue(K,j,ee,pl(j,me),Je);_l(j,me)}return null}function je(K,j,ee,me){for(var Je=null,At=null,Ze=j,ut=j=0,_t=null;Ze!==null&&ut<ee.length;ut++){Ze.index>ut?(_t=Ze,Ze=null):_t=Ze.sibling;var wt=re(K,Ze,ee[ut],me);if(wt===null){Ze===null&&(Ze=_t);break}e&&Ze&&wt.alternate===null&&n(K,Ze),j=f(wt,j,ut),At===null?Je=wt:At.sibling=wt,At=wt,Ze=_t}if(ut===ee.length)return a(K,Ze),St&&Zi(K,ut),Je;if(Ze===null){for(;ut<ee.length;ut++)Ze=xe(K,ee[ut],me),Ze!==null&&(j=f(Ze,j,ut),At===null?Je=Ze:At.sibling=Ze,At=Ze);return St&&Zi(K,ut),Je}for(Ze=r(Ze);ut<ee.length;ut++)_t=ue(Ze,K,ut,ee[ut],me),_t!==null&&(e&&_t.alternate!==null&&Ze.delete(_t.key===null?ut:_t.key),j=f(_t,j,ut),At===null?Je=_t:At.sibling=_t,At=_t);return e&&Ze.forEach(function(Xa){return n(K,Xa)}),St&&Zi(K,ut),Je}function tt(K,j,ee,me){if(ee==null)throw Error(s(151));for(var Je=null,At=null,Ze=j,ut=j=0,_t=null,wt=ee.next();Ze!==null&&!wt.done;ut++,wt=ee.next()){Ze.index>ut?(_t=Ze,Ze=null):_t=Ze.sibling;var Xa=re(K,Ze,wt.value,me);if(Xa===null){Ze===null&&(Ze=_t);break}e&&Ze&&Xa.alternate===null&&n(K,Ze),j=f(Xa,j,ut),At===null?Je=Xa:At.sibling=Xa,At=Xa,Ze=_t}if(wt.done)return a(K,Ze),St&&Zi(K,ut),Je;if(Ze===null){for(;!wt.done;ut++,wt=ee.next())wt=xe(K,wt.value,me),wt!==null&&(j=f(wt,j,ut),At===null?Je=wt:At.sibling=wt,At=wt);return St&&Zi(K,ut),Je}for(Ze=r(Ze);!wt.done;ut++,wt=ee.next())wt=ue(Ze,K,ut,wt.value,me),wt!==null&&(e&&wt.alternate!==null&&Ze.delete(wt.key===null?ut:wt.key),j=f(wt,j,ut),At===null?Je=wt:At.sibling=wt,At=wt);return e&&Ze.forEach(function(Iy){return n(K,Iy)}),St&&Zi(K,ut),Je}function Vt(K,j,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Je=ee.key;j!==null;){if(j.key===Je){if(Je=ee.type,Je===T){if(j.tag===7){a(K,j.sibling),me=u(j,ee.props.children),me.return=K,K=me;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&ds(Je)===j.type){a(K,j.sibling),me=u(j,ee.props),ao(me,ee),me.return=K,K=me;break e}a(K,j);break}else n(K,j);j=j.sibling}ee.type===T?(me=os(ee.props.children,K.mode,me,ee.key),me.return=K,K=me):(me=fl(ee.type,ee.key,ee.props,null,K.mode,me),ao(me,ee),me.return=K,K=me)}return y(K);case A:e:{for(Je=ee.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(K,j.sibling),me=u(j,ee.children||[]),me.return=K,K=me;break e}else{a(K,j);break}else n(K,j);j=j.sibling}me=gu(ee,K.mode,me),me.return=K,K=me}return y(K);case Z:return ee=ds(ee),Vt(K,j,ee,me)}if(oe(ee))return je(K,j,ee,me);if(ie(ee)){if(Je=ie(ee),typeof Je!="function")throw Error(s(150));return ee=Je.call(ee),tt(K,j,ee,me)}if(typeof ee.then=="function")return Vt(K,j,vl(ee),me);if(ee.$$typeof===D)return Vt(K,j,pl(K,ee),me);_l(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(K,j.sibling),me=u(j,ee),me.return=K,K=me):(a(K,j),me=mu(ee,K.mode,me),me.return=K,K=me),y(K)):a(K,j)}return function(K,j,ee,me){try{io=0;var Je=Vt(K,j,ee,me);return Js=null,Je}catch(Ze){if(Ze===Qs||Ze===gl)throw Ze;var At=Kn(29,Ze,null,K.mode);return At.lanes=me,At.return=K,At}}}var ps=Hp(!0),Gp=Hp(!1),Ra=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Lt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),Tp(e,null,a),n}return cl(e,r,n,a),ul(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}function Nu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ro(){if(Du){var e=Ks;if(e!==null)throw e}}function oo(e,n,a,r){Du=!1;var u=e.updateQueue;Ra=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,te=H.next;H.next=null,y===null?f=te:y.next=te,y=H;var de=e.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==y&&(R===null?de.firstBaseUpdate=te:R.next=te,de.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;y=0,de=te=H=null,R=f;do{var re=R.lane&-536870913,ue=re!==R.lane;if(ue?(vt&re)===re:(r&re)===re){re!==0&&re===Zs&&(Du=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=e,tt=R;re=n;var Vt=a;switch(tt.tag){case 1:if(je=tt.payload,typeof je=="function"){xe=je.call(Vt,xe,re);break e}xe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=tt.payload,re=typeof je=="function"?je.call(Vt,xe,re):je,re==null)break e;xe=x({},xe,re);break e;case 2:Ra=!0}}re=R.callback,re!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[re]:ue.push(re))}else ue={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(te=de=ue,H=xe):de=de.next=ue,y|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);de===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Pa|=y,e.lanes=y,e.memoizedState=xe}}function Vp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function jp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var $s=O(null),yl=O(0);function Xp(e,n){e=ra,ge(yl,e),ge($s,n),ra=e|n.baseLanes}function Uu(){ge(yl,ra),ge($s,$s.current)}function Lu(){ra=yl.current,ne($s),ne(yl)}var Qn=O(null),di=null;function Da(e){var n=e.alternate;ge(sn,sn.current&1),ge(Qn,e),di===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(di=e)}function Ou(e){ge(sn,sn.current),ge(Qn,e),di===null&&(di=e)}function Wp(e){e.tag===22?(ge(sn,sn.current),ge(Qn,e),di===null&&(di=e)):Ua()}function Ua(){ge(sn,sn.current),ge(Qn,Qn.current)}function Jn(e){ne(Qn),di===e&&(di=null),ne(sn)}var sn=O(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,lt=null,Ht=null,cn=null,Sl=!1,er=!1,ms=!1,Ml=0,lo=0,tr=null,w_=0;function tn(){throw Error(s(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function zu(e,n,a,r,u,f){return Ji=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Cm:Qu,ms=!1,f=a(r,u),ms=!1,er&&(f=Yp(n,a,r,u)),qp(e),f}function qp(e){B.H=fo;var n=Ht!==null&&Ht.next!==null;if(Ji=0,cn=Ht=lt=null,Sl=!1,lo=0,tr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&hl(e)&&(un=!0))}function Yp(e,n,a,r){lt=e;var u=0;do{if(er&&(tr=null),lo=0,er=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Nm,f=n(a,r)}while(er);return f}function R_(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function Iu(){var e=Ml!==0;return Ml=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}Ji=0,cn=Ht=lt=null,er=!1,lo=Ml=0,tr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?lt.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=cn===null?lt.memoizedState:cn.next;if(n!==null)cn=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?lt.memoizedState=cn=e:cn=cn.next=e}return cn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,tr===null&&(tr=[]),e=Bp(tr,e,n),n=lt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Cm:Qu),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===D)return An(e)}throw Error(s(438,String(e)))}function ku(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=N;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=rn();return Hu(n,Ht,e)}function Hu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,H=null,te=n,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(vt&xe)===xe:(Ji&xe)===xe){var re=te.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Zs&&(de=!0);else if((Ji&re)===re){te=te.next,re===Zs&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=xe,y=f):H=H.next=xe,lt.lanes|=re,Pa|=re;xe=te.action,ms&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else re={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=re,y=f):H=H.next=re,lt.lanes|=xe,Pa|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?y=f:H.next=R,!Zn(f,e.memoizedState)&&(un=!0,de&&(a=Ks,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Zp(e,n,a){var r=lt,u=rn(),f=St;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Zn((Ht||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,Xu(Jp.bind(null,r,u,e),[e]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Qp.bind(null,r,u,a,n),null),jt===null)throw Error(s(349));f||(Ji&127)!==0||Kp(r,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=El(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qp(e,n,a,r){n.value=a,n.getSnapshot=r,$p(n)&&em(e)}function Jp(e,n,a){return a(function(){$p(n)&&em(e)})}function $p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function em(e){var n=rs(e,2);n!==null&&Xn(n,e,2)}function Vu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ms){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function tm(e,n,a,r){return e.baseState=a,Hu(e,Ht,typeof r=="function"?r:$i)}function C_(e,n,a,r,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var R=a(u,r),H=B.S;H!==null&&H(y,R),im(e,n,R)}catch(te){ju(e,n,te)}finally{f!==null&&y.types!==null&&(f.types=y.types),B.T=f}}else try{f=a(u,r),im(e,n,f)}catch(te){ju(e,n,te)}}function im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){am(e,n,r)},function(r){return ju(e,n,r)}):am(e,n,a)}function am(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,nm(e,a)))}function ju(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==r)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function om(e,n){if(St){var a=jt.formState;if(a!==null){e:{var r=lt;if(St){if(Wt){t:{for(var u=Wt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Wt=hi(u.nextSibling),r=u.data==="F!";break e}}Aa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=r,a=Am.bind(null,lt,r),r.dispatch=a,r=Vu(!1),f=Ku.bind(null,lt,!1,r.queue),r=Pn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=C_.bind(null,lt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function lm(e){var n=rn();return cm(n,Ht,e)}function cm(e,n,a){if(n=Hu(e,n,rm)[0],e=Al($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(y){throw y===Qs?gl:y}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,nr(9,{destroy:void 0},N_.bind(null,u,a),null)),[r,f,e]}function N_(e,n){e.action=n}function um(e){var n=rn(),a=Ht;if(a!==null)return cm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=lt.updateQueue,n===null&&(n=El(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function fm(){return rn().memoizedState}function wl(e,n,a,r){var u=Pn();lt.flags|=e,u.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ht!==null&&r!==null&&Pu(r,Ht.memoizedState.deps)?u.memoizedState=nr(n,f,a,r):(lt.flags|=e,u.memoizedState=nr(1|n,f,a,r))}function dm(e,n){wl(8390656,8,e,n)}function Xu(e,n){Rl(2048,8,e,n)}function D_(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=El(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function hm(e){var n=rn().memoizedState;return D_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function pm(e,n){return Rl(4,2,e,n)}function mm(e,n){return Rl(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,gm.bind(null,n,e),a)}function Wu(){}function vm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Pu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Pu(n,r[1]))return r[0];if(r=e(),ms){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[r,n],r}function qu(e,n,a){return a===void 0||(Ji&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=y0(),lt.lanes|=e,Pa|=e,a)}function ym(e,n,a,r){return Zn(a,n)?a:$s.current!==null?(e=qu(e,a,r),Zn(e,n)||(un=!0),e):(Ji&42)===0||(Ji&1073741824)!==0&&(vt&261930)===0?(un=!0,e.memoizedState=a):(e=y0(),lt.lanes|=e,Pa|=e,n)}function bm(e,n,a,r,u){var f=k.p;k.p=f!==0&&8>f?f:8;var y=B.T,R={};B.T=R,Ku(e,!1,n,a);try{var H=u(),te=B.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=A_(H,r);uo(e,n,de,ti(e))}else uo(e,n,r,ti(e))}catch(xe){uo(e,n,{then:function(){},status:"rejected",reason:xe},ti())}finally{k.p=f,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function U_(){}function Yu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Sm(e).queue;bm(e,u,n,Q,a===null?U_:function(){return Mm(e),a(r)})}function Sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=Sm(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ti())}function Zu(){return An(Ro)}function Em(){return rn().memoizedState}function Tm(){return rn().memoizedState}function L_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Ca(a);var r=Na(n,e,a);r!==null&&(Xn(r,n,a),so(r,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function O_(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?wm(n,a):(a=hu(e,n,a,r),a!==null&&(Xn(a,e,r),Rm(a,n,r)))}function Am(e,n,a){var r=ti();uo(e,n,a,r)}function uo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,y))return cl(e,n,u,0),jt===null&&ll(),!1}catch{}if(a=hu(e,n,u,r),a!==null)return Xn(a,e,r),Rm(a,n,r),!0}return!1}function Ku(e,n,a,r){if(r={lane:2,revertLane:Cf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=hu(e,a,r,2),n!==null&&Xn(n,e,2)}function Cl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function wm(e,n){er=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}var fo={readContext:An,use:Tl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var Cm={readContext:An,use:Tl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ms){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var u=a(n);if(ms){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=O_.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=Am.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Pn();return qu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=bm.bind(null,lt,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=lt,u=Pn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(vt&127)!==0||Kp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,dm(Jp.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},Qp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=jt.identifierPrefix;if(St){var a=Ui,r=Di;a=(r&~(1<<32-ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=w_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:om,useActionState:om,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:ku,useCacheRefresh:function(){return Pn().memoizedState=L_.bind(null,lt)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:An,use:Tl,useCallback:vm,useContext:An,useEffect:Xu,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Al,useRef:fm,useState:function(){return Al($i)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return ym(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Al($i)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Zp,useId:Em,useHostTransitionStatus:Zu,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=rn();return tm(a,Ht,e,n)},useMemoCache:ku,useCacheRefresh:Tm};Qu.useEffectEvent=hm;var Nm={readContext:An,use:Tl,useCallback:vm,useContext:An,useEffect:Xu,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Gu,useRef:fm,useState:function(){return Gu($i)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return Ht===null?qu(a,e,n):ym(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Gu($i)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Zp,useId:Em,useHostTransitionStatus:Zu,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=rn();return Ht!==null?tm(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Tm};Nm.useEffectEvent=hm;function Ju(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Ca(r);u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,r),n!==null&&(Xn(n,e,r),so(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Ca(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,r),n!==null&&(Xn(n,e,r),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Ca(a);r.tag=2,n!=null&&(r.callback=n),n=Na(e,r,a),n!==null&&(Xn(n,e,a),so(n,e,a))}};function Dm(e,n,a,r,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Um(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Lm(e){ol(e)}function Om(e){console.error(e)}function Pm(e){ol(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function Im(e){return e=Ca(e),e.tag=3,e}function Bm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){zm(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){zm(n,a,r),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function P_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Gl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Af(e,r,u)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Af(e,r,u)),!1}throw Error(s(435,a.tag))}return Af(e,r,u),Gl(),!1}if(St)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==_u&&(e=Error(s(422),{cause:r}),eo(li(e,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),eo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=li(r,a),u=ef(e.stateNode,r,u),Nu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,r,e),Nu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Bm(u,e,a,r),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),un=!1;function wn(e,n,a,r){n.child=e===null?Gp(n,null,a,r):ps(n,e.child,a,r)}function Fm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var R in r)R!=="ref"&&(y[R]=r[R])}else y=r;return us(n),r=zu(e,n,a,y,f,u),R=Iu(),e!==null&&!un?(Bu(e,n,u),ea(e,n,u)):(St&&R&&xu(n),n.flags|=1,wn(e,n,r,u),n.child)}function km(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(e,n,f,r,u)):(e=fl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!uf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(y,r)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Yi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Qr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,uf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,u)}return nf(e,n,a,r,u)}function Gm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Vm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):Uu(),Wp(n);else return r=n.lanes=536870912,Vm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),Xp(n,f),Ua(),n.memoizedState=null):(e!==null&&ml(n,null),Uu(),Ua());return wn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vm(e,n,a,r,u){var f=Au();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Uu(),Wp(n),e!==null&&Ys(e,n,r,!0),n.childLanes=u,null}function Dl(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jm(e,n,a){return ps(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function z_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=Dl(n,r),n.lanes=536870912,ho(null,e);if(Ou(n),(e=Wt)?(e=ng(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,Wt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return Dl(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Ou(n),u)if(n.flags&256)n.flags&=-257,n=jm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ys(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=jt,r!==null&&(y=Ls(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,rs(e,y),Xn(r,e,y),tf;Gl(),n=jm(e,n,a)}else e=f.treeContext,Wt=hi(y.nextSibling),Tn=n,St=!0,Ta=null,fi=!1,e!==null&&Np(n,e),n=Dl(n,r),n.flags|=4096;return n}return e=Yi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,r,u){return us(n),a=zu(e,n,a,r,void 0,u),r=Iu(),e!==null&&!un?(Bu(e,n,u),ea(e,n,u)):(St&&r&&xu(n),n.flags|=1,wn(e,n,a,u),n.child)}function Xm(e,n,a,r,u,f){return us(n),n.updateQueue=null,a=Yp(n,r,a,u),qp(e),r=Iu(),e!==null&&!un?(Bu(e,n,f),ea(e,n,f)):(St&&r&&xu(n),n.flags|=1,wn(e,n,a,f),n.child)}function Wm(e,n,a,r,u){if(us(n),n.stateNode===null){var f=js,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ru(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):js,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ju(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&$u.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=gs(a,R);f.props=H;var te=f.context,de=a.contextType;y=js,typeof de=="object"&&de!==null&&(y=An(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==y)&&Um(n,f,r,y),Ra=!1;var re=n.memoizedState;f.state=re,oo(n,r,f,u),ro(),te=n.memoizedState,R||re!==te||Ra?(typeof xe=="function"&&(Ju(n,a,xe,r),te=n.memoizedState),(H=Ra||Dm(n,a,H,r,re,te,y))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=te),f.props=r,f.state=te,f.context=y,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Cu(e,n),y=n.memoizedProps,de=gs(a,y),f.props=de,xe=n.pendingProps,re=f.context,te=a.contextType,H=js,typeof te=="object"&&te!==null&&(H=An(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==xe||re!==H)&&Um(n,f,r,H),Ra=!1,re=n.memoizedState,f.state=re,oo(n,r,f,u),ro();var ue=n.memoizedState;y!==xe||re!==ue||Ra||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof R=="function"&&(Ju(n,a,R,r),ue=n.memoizedState),(de=Ra||Dm(n,a,de,r,re,ue,H)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),f.props=r,f.state=ue,f.context=H,r=de):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ps(n,e.child,null,u),n.child=ps(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function qm(e,n,a,r){return ls(),n.flags|=256,wn(e,n,a,r),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:zp()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Ym(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(u?Da(n):Ua(),(e=Wt)?(e=ng(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,Wt=null)):e=null,e===null)throw Aa(n);return Gf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Ua(),u=n.mode,R=Ll({mode:"hidden",children:R},u),r=os(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=sf(a),r.childLanes=rf(e,y,a),n.memoizedState=af,ho(null,r)):(Da(n),of(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),R=r.fallback,u=n.mode,r=Ll({mode:"visible",children:r.children},u),R=os(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ps(n,e.child,null,a),r=n.child,r.memoizedState=sf(a),r.childLanes=rf(e,y,a),n.memoizedState=af,n=ho(null,r));else if(Da(n),Gf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var te=y.dgst;y=te,r=Error(s(419)),r.stack="",r.digest=y,eo({value:r,source:null,stack:null}),n=lf(e,n,a)}else if(un||Ys(e,n,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=jt,y!==null&&(r=Ls(y,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,rs(e,r),Xn(y,e,r),tf;Hf(R)||Gl(),n=lf(e,n,a)}else Hf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Wt=hi(R.nextSibling),Tn=n,St=!0,Ta=null,fi=!1,e!==null&&Np(n,e),n=of(n,r.children),n.flags|=4096);return n}return u?(Ua(),R=r.fallback,u=n.mode,H=e.child,te=H.sibling,r=Yi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=Yi(te,R):(R=os(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,ho(null,r),r=n.child,R=e.child.memoizedState,R===null?R=sf(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=zp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=rf(e,y,a),n.memoizedState=af,ho(e.child,r)):(Da(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function lf(e,n,a){return ps(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Su(e.return,n,a)}function cf(e,n,a,r,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Km(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var y=sn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,ge(sn,y),wn(e,n,r,a),r=St?$r:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zm(e,a,n);else if(e.tag===19)Zm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}cf(n,!0,a,null,f,r);break;case"together":cf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function I_(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),wa(n,ln,e.memoizedState.cache),ls();break;case 27:case 5:Ge(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(Da(n),e=ea(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Km(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Gm(e,n,a,n.pendingProps);case 24:wa(n,ln,e.memoizedState.cache)}return ea(e,n,a)}function Qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!uf(e,a)&&(n.flags&128)===0)return un=!1,I_(e,n,a);un=(e.flags&131072)!==0}else un=!1,St&&(n.flags&1048576)!==0&&Cp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")pu(e)?(r=gs(e,r),n.tag=1,n=Wm(null,n,e,r,a)):(n.tag=0,n=nf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=Fm(null,n,e,r,a);break e}else if(u===z){n.tag=14,n=km(null,n,e,r,a);break e}}throw n=he(e)||e,Error(s(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=gs(r,n.pendingProps),Wm(e,n,r,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),oo(n,r,null,a);var y=n.memoizedState;if(r=y.cache,wa(n,ln,r),r!==f.cache&&Mu(n,[ln],a,!0),ro(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(e,n,r,a);break e}else if(r!==u){u=li(Error(s(424)),n),eo(u),n=qm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Wt=hi(e.firstChild),Tn=n,St=!0,Ta=null,fi=!0,a=Gp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ls(),r===u){n=ea(e,n,a);break e}wn(e,n,r,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,r=Zl(W.current).createElement(a),r[on]=n,r[_n]=e,Rn(r,a,e),C(r),n.stateNode=r):n.memoizedState=lg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ge(n),e===null&&St&&(r=n.stateNode=sg(n.type,n.pendingProps,W.current),Tn=n,fi=!0,u=Wt,ka(n.type)?(Vf=u,Wt=hi(r.firstChild)):Wt=u),wn(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((u=r=Wt)&&(r=hy(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Tn=n,Wt=hi(r.firstChild),fi=!1,u=!0):u=!1),u||Aa(n)),Ge(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,Bf(u,f)?r=null:y!==null&&Bf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(e,n,R_,null,null,a),Ro._currentValue=u),Ul(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Wt)&&(a=py(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,Wt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return Ym(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ps(n,null,r,a):wn(e,n,r,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,us(n),u=An(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return Km(e,n,a);case 31:return z_(e,n,a);case 22:return Gm(e,n,a,n.pendingProps);case 24:return us(n),r=An(ln),e===null?(u=Au(),u===null&&(u=jt,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ru(n),wa(n,ln,u)):((e.lanes&a)!==0&&(Cu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,ln,r)):(r=f.cache,wa(n,ln,r),r!==u.cache&&Mu(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(e){e.flags|=4}function ff(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(E0())e.flags|=8192;else throw hs=xl,wu}else e.flags&=-16777217}function Jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hg(n))if(E0())e.flags|=8192;else throw hs=xl,wu}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zt():536870912,e.lanes|=n,rr|=n)}function po(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function B_(e,n,a){var r=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(ln),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ta(n),f!==null?(qt(n),Jm(n,f)):(qt(n),ff(n,u,null,r,a))):f?f!==e.memoizedState?(ta(n),qt(n),Jm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ta(n),qt(n),ff(n,u,e,r,a)),null;case 27:if(ht(n),a=W.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}e=Ee.current,qs(n)?Dp(n):(e=sg(u,r,a),n.stateNode=e,ta(n))}return qt(n),null;case 5:if(ht(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(f=Ee.current,qs(n))Dp(n);else{var y=Zl(W.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(u,{is:r.is}):y.createElement(u)}}f[on]=n,f[_n]=r;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Rn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ta(n)}}return qt(n),ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=W.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Y0(e.nodeValue,a)),e||Aa(n,!0)}else e=Zl(e).createTextNode(r),e[on]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=qs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),qt(n),null);case 4:return He(),e===null&&Lf(n.stateNode.containerInfo),qt(n),null;case 10:return Qi(n.type),qt(n),null;case 19:if(ne(sn),r=n.memoizedState,r===null)return qt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,po(r,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ap(a,e),a=a.sibling;return ge(sn,sn.current&1|2),St&&Zi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Fl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!St)return qt(n),null}else 2*E()-r.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=sn.current,ge(sn,u?a&1|2:a&1),St&&Zi(n,r.treeForkCount),e):(qt(n),null);case 22:case 23:return Jn(n),Lu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function F_(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(ln),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(sn),null;case 4:return He(),null;case 10:return Qi(n.type),null;case 22:case 23:return Jn(n),Lu(),e!==null&&ne(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function $m(e,n){switch(vu(n),n.tag){case 3:Qi(ln),He();break;case 26:case 27:case 5:ht(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ne(sn);break;case 10:Qi(n.type);break;case 22:case 23:Jn(n),Lu(),e!==null&&ne(fs);break;case 24:Qi(ln)}}function mo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==u)}}catch(R){Ft(n,n.return,R)}}function La(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var y=r.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,te=R;try{te()}catch(de){Ft(u,H,de)}}}r=r.next}while(r!==f)}}catch(de){Ft(n,n.return,de)}}function e0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{jp(n,a)}catch(r){Ft(e,e.return,r)}}}function t0(e,n,a){a.props=gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ft(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ft(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(e,n,u)}else a.current=null}function n0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ft(e,e.return,u)}}function df(e,n,a){try{var r=e.stateNode;oy(r,e.type,a,n),r[_n]=n}catch(u){Ft(e,e.return,u)}}function i0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function Pl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function a0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,r,a),n[on]=e,n[_n]=a}catch(f){Ft(e,e.return,f)}}var na=!1,fn=!1,mf=!1,s0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function k_(e,n){if(e=e.containerInfo,zf=nc,e=xp(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,te=0,de=0,xe=e,re=null;t:for(;;){for(var ue;xe!==a||u!==0&&xe.nodeType!==3||(R=y+u),xe!==f||r!==0&&xe.nodeType!==3||(H=y+r),xe.nodeType===3&&(y+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)re=xe,xe=ue;for(;;){if(xe===e)break t;if(re===a&&++te===u&&(R=y),re===f&&++de===r&&(H=y),(ue=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=ue}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},nc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var je=gs(a.type,u);e=r.getSnapshotBeforeUpdate(je,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(tt){Ft(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function r0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),r&4&&mo(5,a);break;case 1:if(aa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ft(a,a.return,y)}else{var u=gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ft(a,a.return,y)}}r&64&&e0(a),r&512&&go(a,a.return);break;case 3:if(aa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jp(e,n)}catch(y){Ft(a,a.return,y)}}break;case 27:n===null&&r&4&&a0(a);case 26:case 5:aa(e,a),n===null&&r&4&&n0(a),r&512&&go(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),r&4&&c0(e,a);break;case 13:aa(e,a),r&4&&u0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Z_.bind(null,a),my(e,a))));break;case 22:if(r=a.memoizedState!==null||na,!r){n=n!==null&&n.memoizedState!==null||fn,u=na;var f=fn;na=r,(fn=n)&&!f?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),na=u,fn=f}break;case 30:break;default:aa(e,a)}}function o0(e){var n=e.alternate;n!==null&&(e.alternate=null,o0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,Hn=!1;function ia(e,n,a){for(a=a.child;a!==null;)l0(e,n,a),a=a.sibling}function l0(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:fn||Li(a,n),ia(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Li(a,n);var r=Kt,u=Hn;ka(a.type)&&(Kt=a.stateNode,Hn=!1),ia(e,n,a),To(a.stateNode),Kt=r,Hn=u;break;case 5:fn||Li(a,n);case 6:if(r=Kt,u=Hn,Kt=null,ia(e,n,a),Kt=r,Hn=u,Kt!==null)if(Hn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Kt!==null&&(Hn?(e=Kt,eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):eg(Kt,a.stateNode));break;case 4:r=Kt,u=Hn,Kt=a.stateNode.containerInfo,Hn=!0,ia(e,n,a),Kt=r,Hn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),fn||La(4,a,n),ia(e,n,a);break;case 1:fn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&t0(a,n,r)),ia(e,n,a);break;case 21:ia(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ia(e,n,a),fn=r;break;default:ia(e,n,a)}}function c0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Ft(n,n.return,a)}}}function u0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Ft(n,n.return,a)}}function H_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new s0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new s0),n;default:throw Error(s(435,e.tag))}}function zl(e,n){var a=H_(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=K_.bind(null,e,r);r.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(ka(R.type)){Kt=R.stateNode,Hn=!1;break e}break;case 5:Kt=R.stateNode,Hn=!1;break e;case 3:case 4:Kt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(Kt===null)throw Error(s(160));l0(f,y,u),Kt=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)f0(n,e),n=n.sibling}var Si=null;function f0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(La(3,e,e.return),mo(3,e),La(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),r&64&&na&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Si;if(Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ts]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,r,a),f[on]=e,C(f),r=f;break e;case"link":var y=fg("link","href",u).get(r+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;case"meta":if(y=fg("meta","content",u).get(r+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,C(f),r=f}e.stateNode=r}else dg(u,e.type,e.stateNode);else e.stateNode=ug(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?dg(u,e.type,e.stateNode):ug(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),a!==null&&r&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(je){Ft(e,e.return,je)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,a!==null?a.memoizedProps:u)),r&1024&&(mf=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(je){Ft(e,e.return,je)}}break;case 3:if(Jl=null,u=Si,Si=Kl(n.containerInfo),Gn(n,e),Si=u,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(je){Ft(e,e.return,je)}mf&&(mf=!1,d0(e));break;case 4:r=Si,Si=Kl(e.stateNode.containerInfo),Gn(n,e),Vn(e),Si=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=na,de=fn;if(na=te||u,fn=de||H,Gn(n,e),fn=de,na=te,Vn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||na||fn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(je){Ft(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Ft(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?tg(ue,!0):tg(H.stateNode,!1)}catch(je){Ft(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(i0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=hf(e);Pl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var R=hf(e);Pl(e,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,te=hf(e);pf(e,te,H);break;default:throw Error(s(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function d0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;d0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)r0(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),xs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&t0(n,n.return,a),xs(n);break;case 27:To(n.stateNode);case 26:case 5:Li(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),mo(4,f);break;case 1:if(sa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(r,r.return,te)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Vp(H[u],R)}catch(te){Ft(r,r.return,te)}}a&&y&64&&e0(f),go(f,f.return);break;case 27:a0(f);case 26:case 5:sa(u,f,a),a&&r===null&&y&4&&n0(f),go(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&y&4&&c0(u,f);break;case 13:sa(u,f,a),a&&y&4&&u0(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),go(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function Mi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)h0(e,n,a,r),n=n.sibling}function h0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,r),u&2048&&mo(9,n);break;case 1:Mi(e,n,a,r);break;case 3:Mi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){Mi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ft(n,n.return,H)}}else Mi(e,n,a,r);break;case 31:Mi(e,n,a,r);break;case 13:Mi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,r):xo(e,n):f._visibility&2?Mi(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(y,n);break;case 24:Mi(e,n,a,r),u&2048&&xf(n.alternate,n);break;default:Mi(e,n,a,r)}}function ir(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,H=r,te=y.flags;switch(y.tag){case 0:case 11:case 15:ir(f,y,R,H,u),mo(8,y);break;case 23:break;case 22:var de=y.stateNode;y.memoizedState!==null?de._visibility&2?ir(f,y,R,H,u):xo(f,y):(de._visibility|=2,ir(f,y,R,H,u)),u&&te&2048&&gf(y.alternate,y);break;case 24:ir(f,y,R,H,u),u&&te&2048&&xf(y.alternate,y);break;default:ir(f,y,R,H,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&gf(r.alternate,r);break;case 24:xo(a,r),u&2048&&xf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var vo=8192;function ar(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)p0(e,n,a),e=e.sibling}function p0(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&vo&&e.memoizedState!==null&&wy(a,Si,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=Si;Si=Kl(e.stateNode.containerInfo),ar(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,ar(e,n,a),vo=r):ar(e,n,a));break;default:ar(e,n,a)}}function m0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,x0(r,e)}m0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g0(e),e=e.sibling}function g0(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&La(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):_o(e);break;default:_o(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,x0(r,e)}m0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function x0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else e:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(o0(r),r===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var G_={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},V_=typeof WeakMap=="function"?WeakMap:Map,Lt=0,jt=null,mt=null,vt=0,Bt=0,$n=null,Oa=!1,sr=!1,vf=!1,ra=0,nn=0,Pa=0,vs=0,_f=0,ei=0,rr=0,yo=null,jn=null,yf=!1,Bl=0,v0=0,Fl=1/0,kl=null,za=null,pn=0,Ia=null,or=null,oa=0,bf=0,Sf=null,_0=null,bo=0,Mf=null;function ti(){return(Lt&2)!==0&&vt!==0?vt&-vt:B.T!==null?Cf():Hr()}function y0(){if(ei===0)if((vt&536870912)===0||St){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ei=e}else ei=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ei}function Xn(e,n,a){(e===jt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Ba(e,vt,ei,!1)),Nn(e,a),((Lt&2)===0||e!==jt)&&(e===jt&&((Lt&2)===0&&(vs|=a),nn===4&&Ba(e,vt,ei,!1)),Oi(e))}function b0(e,n,a){if((Lt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),u=r?W_(e,n):Tf(e,n,!0),f=r;do{if(u===0){sr&&!r&&Ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!j_(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=e;u=yo;var H=R.current.memoizedState.isDehydrated;if(H&&(lr(R,y).flags|=256),y=Tf(R,y,!1),y!==2){if(vf&&!H){R.errorRecoveryDisabledLanes|=f,vs|=f,u=4;break e}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){lr(e,0),Ba(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(r,n,ei,!Oa);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-E(),10<u)){if(Ba(r,n,ei,!Oa),ve(r,0,!0)!==0)break e;oa=n,r.timeoutHandle=J0(S0.bind(null,r,a,jn,kl,yf,n,ei,vs,rr,Oa,f,"Throttled",-0,0),u);break e}S0(r,a,jn,kl,yf,n,ei,vs,rr,Oa,f,null,-0,0)}}break}while(!0);Oi(e)}function S0(e,n,a,r,u,f,y,R,H,te,de,xe,re,ue){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},p0(n,f,xe);var je=(f&62914560)===f?Bl-E():(f&4194048)===f?v0-E():0;if(je=Ry(xe,je),je!==null){oa=f,e.cancelPendingCommit=je(N0.bind(null,e,n,f,a,r,u,y,R,H,de,xe,null,re,ue)),Ba(e,f,y,!te);return}}N0(e,n,f,a,r,u,y,R,H)}function j_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,a,r){n&=~_f,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),y=1<<f;r[f]=-1,u&=~y}a!==0&&Jo(e,a,n)}function Hl(){return(Lt&6)===0?(So(0),!1):!0}function Ef(){if(mt!==null){if(Bt===0)var e=mt.return;else e=mt,Ki=cs=null,Fu(e),Js=null,io=0,e=mt;for(;e!==null;)$m(e.alternate,e),e=e.return;mt=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Ef(),jt=e,mt=a=Yi(e.current,null),vt=n,Bt=0,$n=null,Oa=!1,sr=Re(e,n),vf=!1,rr=ei=_f=vs=Pa=nn=0,jn=yo=null,yf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-ze(r),f=1<<u;n|=e[u],r&=~f}return ra=n,ll(),a}function M0(e,n){lt=null,B.H=fo,n===Qs||n===gl?(n=Fp(),Bt=3):n===wu?(n=Fp(),Bt=4):Bt=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,mt===null&&(nn=1,Nl(e,li(n,e.current)))}function E0(){var e=Qn.current;return e===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?e===di:!1}function T0(){var e=B.H;return B.H=fo,e===null?fo:e}function A0(){var e=B.A;return B.A=G_,e}function Gl(){nn=4,Oa||(vt&4194048)!==vt&&Qn.current!==null||(sr=!0),(Pa&134217727)===0&&(vs&134217727)===0||jt===null||Ba(jt,vt,ei,!1)}function Tf(e,n,a){var r=Lt;Lt|=2;var u=T0(),f=A0();(jt!==e||vt!==n)&&(kl=null,lr(e,n)),n=!1;var y=nn;e:do try{if(Bt!==0&&mt!==null){var R=mt,H=$n;switch(Bt){case 8:Ef(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var te=Bt;if(Bt=0,$n=null,cr(e,R,H,te),a&&sr){y=0;break e}break;default:te=Bt,Bt=0,$n=null,cr(e,R,H,te)}}X_(),y=nn;break}catch(de){M0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Ki=cs=null,Lt=r,B.H=u,B.A=f,mt===null&&(jt=null,vt=0,ll()),y}function X_(){for(;mt!==null;)w0(mt)}function W_(e,n){var a=Lt;Lt|=2;var r=T0(),u=A0();jt!==e||vt!==n?(kl=null,Fl=E()+500,lr(e,n)):sr=Re(e,n);e:do try{if(Bt!==0&&mt!==null){n=mt;var f=$n;t:switch(Bt){case 1:Bt=0,$n=null,cr(e,n,f,1);break;case 2:case 9:if(Ip(f)){Bt=0,$n=null,R0(n);break}n=function(){Bt!==2&&Bt!==9||jt!==e||(Bt=7),Oi(e)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Ip(f)?(Bt=0,$n=null,R0(n)):(Bt=0,$n=null,cr(e,n,f,7));break;case 5:var y=null;switch(mt.tag){case 26:y=mt.memoizedState;case 5:case 27:var R=mt;if(y?hg(y):R.stateNode.complete){Bt=0,$n=null;var H=R.sibling;if(H!==null)mt=H;else{var te=R.return;te!==null?(mt=te,Vl(te)):mt=null}break t}}Bt=0,$n=null,cr(e,n,f,5);break;case 6:Bt=0,$n=null,cr(e,n,f,6);break;case 8:Ef(),nn=6;break e;default:throw Error(s(462))}}q_();break}catch(de){M0(e,de)}while(!0);return Ki=cs=null,B.H=r,B.A=u,Lt=a,mt!==null?0:(jt=null,vt=0,ll(),nn)}function q_(){for(;mt!==null&&!Ye();)w0(mt)}function w0(e){var n=Qm(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?Vl(e):mt=n}function R0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Fu(n);default:$m(a,n),n=mt=Ap(n,ra),n=Qm(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?Vl(e):mt=n}function cr(e,n,a,r){Ki=cs=null,Fu(n),Js=null,io=0;var u=n.return;try{if(P_(e,u,n,a,vt)){nn=1,Nl(e,li(a,e.current)),mt=null;return}}catch(f){if(u!==null)throw mt=u,f;nn=1,Nl(e,li(a,e.current)),mt=null;return}n.flags&32768?(St||r===1?e=!0:sr||(vt&536870912)!==0?e=!1:(Oa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),C0(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){C0(n,Oa);return}e=n.return;var a=B_(n.alternate,n,ra);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);nn===0&&(nn=5)}function C0(e,n){do{var a=F_(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);nn=6,mt=null}function N0(e,n,a,r,u,f,y,R,H){e.cancelPendingCommit=null;do jl();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=du,vi(e,a,f,y,R,H),e===jt&&(mt=jt=null,vt=0),or=n,Ia=e,oa=a,bf=f,Sf=u,_0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Q_(fe,function(){return P0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=k.p,k.p=2,y=Lt,Lt|=4;try{k_(e,n,a)}finally{Lt=y,k.p=u,B.T=r}}pn=1,D0(),U0(),L0()}}function D0(){if(pn===1){pn=0;var e=Ia,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=k.p;k.p=2;var u=Lt;Lt|=4;try{f0(n,e);var f=If,y=xp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&gp(R.ownerDocument.documentElement,R)){if(H!==null&&ou(R)){var te=H.start,de=H.end;if(de===void 0&&(de=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(de,R.value.length);else{var xe=R.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var ue=re.getSelection(),je=R.textContent.length,tt=Math.min(H.start,je),Vt=H.end===void 0?tt:Math.min(H.end,je);!ue.extend&&tt>Vt&&(y=Vt,Vt=tt,tt=y);var K=mp(R,tt),j=mp(R,Vt);if(K&&j&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==j.node||ue.focusOffset!==j.offset)){var ee=xe.createRange();ee.setStart(K.node,K.offset),ue.removeAllRanges(),tt>Vt?(ue.addRange(ee),ue.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),ue.addRange(ee))}}}}for(xe=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var me=xe[R];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}nc=!!zf,If=zf=null}finally{Lt=u,k.p=r,B.T=a}}e.current=n,pn=2}}function U0(){if(pn===2){pn=0;var e=Ia,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=k.p;k.p=2;var u=Lt;Lt|=4;try{r0(e,n.alternate,n)}finally{Lt=u,k.p=r,B.T=a}}pn=3}}function L0(){if(pn===4||pn===3){pn=0,L();var e=Ia,n=or,a=oa,r=_0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,or=Ia=null,O0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Os(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=k.p,k.p=2,B.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var R=r[y];f(R.value,{componentStack:R.stack})}}finally{B.T=n,k.p=u}}(oa&3)!==0&&jl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Mf?bo++:(bo=0,Mf=e):bo=0,So(0)}}function O0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function jl(){return D0(),U0(),L0(),P0()}function P0(){if(pn!==5)return!1;var e=Ia,n=bf;bf=0;var a=Os(oa),r=B.T,u=k.p;try{k.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=Ia,y=oa;if(pn=0,or=Ia=null,oa=0,(Lt&6)!==0)throw Error(s(331));var R=Lt;if(Lt|=4,g0(f.current),h0(f,f.current,y,a),Lt=R,So(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{k.p=u,B.T=r,O0(e,n)}}function z0(e,n,a){n=li(a,n),n=ef(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function Ft(e,n,a){if(e.tag===3)z0(e,e,a);else for(;n!==null;){if(n.tag===3){z0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){e=li(a,e),a=Im(2),r=Na(n,a,2),r!==null&&(Bm(a,r,n,e),Nn(r,2),Oi(r));break}}n=n.return}}function Af(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new V_;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(vf=!0,u.add(a),e=Y_.bind(null,e,n,a),n.then(e,e))}function Y_(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>E()-Bl?(Lt&2)===0&&lr(e,0):_f|=a,rr===vt&&(rr=0)),Oi(e)}function I0(e,n){n===0&&(n=zt()),e=rs(e,n),e!==null&&(Nn(e,n),Oi(e))}function Z_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(e,a)}function K_(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),I0(e,a)}function Q_(e,n){return Mt(e,n)}var Xl=null,ur=null,wf=!1,Wl=!1,Rf=!1,Fa=0;function Oi(e){e!==ur&&e.next===null&&(ur===null?Xl=ur=e:ur=ur.next=e),Wl=!0,wf||(wf=!0,$_())}function So(e,n){if(!Rf&&Wl){Rf=!0;do for(var a=!1,r=Xl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var y=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,H0(r,f))}else f=vt,f=ve(r,r===jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Re(r,f)||(a=!0,H0(r,f));r=r.next}while(a);Rf=!1}}function J_(){B0()}function B0(){Wl=wf=!1;var e=0;Fa!==0&&cy()&&(e=Fa);for(var n=E(),a=null,r=Xl;r!==null;){var u=r.next,f=F0(r,n);f===0?(r.next=null,a===null?Xl=u:a.next=u,u===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(Wl=!0)),r=u}pn!==0&&pn!==5||So(e),Fa!==0&&(Fa=0)}function F0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-ze(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&r)!==0)&&(u[y]=it(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=jt,a=vt,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ot(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ot(r),Os(a)){case 2:case 8:a=be;break;case 32:a=fe;break;case 268435456:a=Ne;break;default:a=fe}return r=k0.bind(null,e),a=Mt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ot(r),e.callbackPriority=2,e.callbackNode=null,2}function k0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var r=vt;return r=ve(e,e===jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(b0(e,r,n),F0(e,E()),e.callbackNode!=null&&e.callbackNode===a?k0.bind(null,e):null)}function H0(e,n){if(jl())return null;b0(e,n,!0)}function $_(){fy(function(){(Lt&6)!==0?Mt(pe,J_):B0()})}function Cf(){if(Fa===0){var e=Zs;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Fa=e}return Fa}function G0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function V0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ey(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=G0((u[_n]||null).action),y=r.submitter;y&&(n=(n=y[_n]||null)?G0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new al("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Fa!==0){var H=y?V0(u,y):new FormData(u);Yu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?V0(u,y):new FormData(u),Yu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Nf=0;Nf<fu.length;Nf++){var Df=fu[Nf],ty=Df.toLowerCase(),ny=Df[0].toUpperCase()+Df.slice(1);bi(ty,"on"+ny)}bi(yp,"onAnimationEnd"),bi(bp,"onAnimationIteration"),bi(Sp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(v_,"onTransitionRun"),bi(__,"onTransitionStart"),bi(y_,"onTransitionCancel"),bi(Mp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function j0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var R=r[y],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ol(de)}u.currentTarget=null,f=H}else for(y=0;y<r.length;y++){if(R=r[y],H=R.instance,te=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ol(de)}u.currentTarget=null,f=H}}}}function gt(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var r=e+"__bubble";a.has(r)||(X0(n,e,2,!1),a.add(r))}function Uf(e,n,a){var r=0;n&&(r|=4),X0(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[ql]){e[ql]=!0,Y.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Uf("selectionchange",!1,n))}}function X0(e,n,a,r){switch(yg(n)){case 2:var u=Dy;break;case 8:u=Uy;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var R=r.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=r.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=ya(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){r=f=y;continue e}R=R.parentNode}}r=r.return}Kh(function(){var te=f,de=Kc(a),xe=[];e:{var re=Ep.get(e);if(re!==void 0){var ue=al,je=e;switch(e){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":ue=Kv;break;case"focusin":je="focus",ue=nu;break;case"focusout":je="blur",ue=nu;break;case"beforeblur":case"afterblur":ue=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$v;break;case yp:case bp:case Sp:ue=Hv;break;case Mp:ue=t_;break;case"scroll":case"scrollend":ue=zv;break;case"wheel":ue=i_;break;case"copy":case"cut":case"paste":ue=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=tp;break;case"toggle":case"beforetoggle":ue=s_}var tt=(n&4)!==0,Vt=!tt&&(e==="scroll"||e==="scrollend"),K=tt?re!==null?re+"Capture":null:re;tt=[];for(var j=te,ee;j!==null;){var me=j;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||K===null||(me=jr(j,K),me!=null&&tt.push(Eo(j,me,ee))),Vt)break;j=j.return}0<tt.length&&(re=new ue(re,je,null,a,de),xe.push({event:re,listeners:tt}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",re&&a!==Zc&&(je=a.relatedTarget||a.fromElement)&&(ya(je)||je[_i]))break e;if((ue||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,ue?(je=a.relatedTarget||a.toElement,ue=te,je=je?ya(je):null,je!==null&&(Vt=c(je),tt=je.tag,je!==Vt||tt!==5&&tt!==27&&tt!==6)&&(je=null)):(ue=null,je=te),ue!==je)){if(tt=$h,me="onMouseLeave",K="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(tt=tp,me="onPointerLeave",K="onPointerEnter",j="pointer"),Vt=ue==null?re:ns(ue),ee=je==null?re:ns(je),re=new tt(me,j+"leave",ue,a,de),re.target=Vt,re.relatedTarget=ee,me=null,ya(de)===te&&(tt=new tt(K,j+"enter",je,a,de),tt.target=ee,tt.relatedTarget=Vt,me=tt),Vt=me,ue&&je)t:{for(tt=ay,K=ue,j=je,ee=0,me=K;me;me=tt(me))ee++;me=0;for(var Je=j;Je;Je=tt(Je))me++;for(;0<ee-me;)K=tt(K),ee--;for(;0<me-ee;)j=tt(j),me--;for(;ee--;){if(K===j||j!==null&&K===j.alternate){tt=K;break t}K=tt(K),j=tt(j)}tt=null}else tt=null;ue!==null&&W0(xe,re,ue,tt,!1),je!==null&&Vt!==null&&W0(xe,Vt,je,tt,!0)}}e:{if(re=te?ns(te):window,ue=re.nodeName&&re.nodeName.toLowerCase(),ue==="select"||ue==="input"&&re.type==="file")var At=cp;else if(op(re))if(up)At=m_;else{At=h_;var Ze=d_}else ue=re.nodeName,!ue||ue.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&yi(te.elementType)&&(At=cp):At=p_;if(At&&(At=At(e,te))){lp(xe,At,a,de);break e}Ze&&Ze(e,re,te),e==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&bn(re,"number",re.value)}switch(Ze=te?ns(te):window,e){case"focusin":(op(Ze)||Ze.contentEditable==="true")&&(Hs=Ze,lu=te,Jr=null);break;case"focusout":Jr=lu=Hs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,vp(xe,a,de);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":vp(xe,a,de)}var ut;if(au)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ks?sp(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(np&&a.locale!=="ko"&&(ks||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ks&&(ut=Qh()):(Ma=de,$c="value"in Ma?Ma.value:Ma.textContent,ks=!0)),Ze=Yl(te,_t),0<Ze.length&&(_t=new ep(_t,e,null,a,de),xe.push({event:_t,listeners:Ze}),ut?_t.data=ut:(ut=rp(a),ut!==null&&(_t.data=ut)))),(ut=o_?l_(e,a):c_(e,a))&&(_t=Yl(te,"onBeforeInput"),0<_t.length&&(Ze=new ep("onBeforeInput","beforeinput",null,a,de),xe.push({event:Ze,listeners:_t}),Ze.data=ut)),ey(xe,e,te,a,de)}j0(xe,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(e,a),u!=null&&r.unshift(Eo(e,u,f)),u=jr(e,n),u!=null&&r.push(Eo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W0(e,n,a,r,u){for(var f=n._reactName,y=[];a!==null&&a!==r;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||te===null||(H=te,u?(te=jr(a,f),te!=null&&y.unshift(Eo(a,te,H))):u||(te=jr(a,f),te!=null&&y.push(Eo(a,te,H)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var sy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function q0(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(ry,"")}function Y0(e,n){return n=q0(n),q0(e)===n}function Gt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||hn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&hn(e,""+r);break;case"className":$e(e,"class",r);break;case"tabIndex":$e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(e,a,r);break;case"style":Is(e,r,f);break;case"data":if(n!=="object"){$e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",u.name,u,null),Gt(e,n,"formEncType",u.formEncType,u,null),Gt(e,n,"formMethod",u.formMethod,u,null),Gt(e,n,"formTarget",u.formTarget,u,null)):(Gt(e,n,"encType",u.encType,u,null),Gt(e,n,"method",u.method,u,null),Gt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":gt("beforetoggle",e),gt("toggle",e),We(e,"popover",r);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":We(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ov.get(a)||a,We(e,a,r))}}function Pf(e,n,a,r,u,f){switch(a){case"style":Is(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?hn(e,r):(typeof r=="number"||typeof r=="bigint")&&hn(e,""+r);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):We(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,y,a,null)}}u&&Gt(e,n,"srcSet",a.srcSet,a,null),r&&Gt(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var R=f=y=u=null,H=null,te=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":u=de;break;case"type":y=de;break;case"checked":H=de;break;case"defaultChecked":te=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Gt(e,n,r,de,a,null)}}Xi(e,f,R,H,te,y,u,!1);return;case"select":gt("invalid",e),r=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":r=R;default:Gt(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!r,n!=null?ri(e,!!r,n,!1):a!=null&&ri(e,!!r,a,!0);return;case"textarea":gt("invalid",e),f=u=r=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Gt(e,n,y,R,a,null)}Sn(e,r,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Gt(e,n,H,r,a,null));return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)gt(Mo[r],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(r=a[te],r!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,te,r,a,null)}return;default:if(yi(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Pf(e,n,de,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Gt(e,n,R,r,a,null))}function oy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,te=null,de=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=xe;default:r.hasOwnProperty(ue)||Gt(e,n,ue,null,r,xe)}}for(var re in r){var ue=r[re];if(xe=a[re],r.hasOwnProperty(re)&&(ue!=null||xe!=null))switch(re){case"type":f=ue;break;case"name":u=ue;break;case"checked":te=ue;break;case"defaultChecked":de=ue;break;case"value":y=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==xe&&Gt(e,n,re,ue,r,xe)}}yn(e,y,R,H,te,de,f,u);return;case"select":ue=y=R=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:r.hasOwnProperty(f)||Gt(e,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&Gt(e,n,u,f,r,H)}n=R,a=y,r=ue,re!=null?ri(e,!!a,re,!1):!!r!=!!a&&(n!=null?ri(e,!!a,n,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":ue=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(e,n,R,null,r,u)}for(y in r)if(u=r[y],f=a[y],r.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":re=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(e,n,y,u,r,f)}It(e,re,ue);return;case"option":for(var je in a)re=a[je],a.hasOwnProperty(je)&&re!=null&&!r.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:Gt(e,n,je,null,r,re));for(H in r)re=r[H],ue=a[H],r.hasOwnProperty(H)&&re!==ue&&(re!=null||ue!=null)&&(H==="selected"?e.selected=re&&typeof re!="function"&&typeof re!="symbol":Gt(e,n,H,re,r,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)re=a[tt],a.hasOwnProperty(tt)&&re!=null&&!r.hasOwnProperty(tt)&&Gt(e,n,tt,null,r,re);for(te in r)if(re=r[te],ue=a[te],r.hasOwnProperty(te)&&re!==ue&&(re!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Gt(e,n,te,re,r,ue)}return;default:if(yi(n)){for(var Vt in a)re=a[Vt],a.hasOwnProperty(Vt)&&re!==void 0&&!r.hasOwnProperty(Vt)&&Pf(e,n,Vt,void 0,r,re);for(de in r)re=r[de],ue=a[de],!r.hasOwnProperty(de)||re===ue||re===void 0&&ue===void 0||Pf(e,n,de,re,r,ue);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!r.hasOwnProperty(K)&&Gt(e,n,K,null,r,re);for(xe in r)re=r[xe],ue=a[xe],!r.hasOwnProperty(xe)||re===ue||re==null&&ue==null||Gt(e,n,xe,re,r,ue)}function Z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&Z0(y)){for(y=0,R=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],te=H.startTime;if(te>R)break;var de=H.transferSize,xe=H.initiatorType;de&&Z0(xe)&&(H=H.responseEnd,y+=de*(H<R?1:(R-te)/(H-te)))}if(--r,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,If=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function K0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function cy(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var J0=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(e){return $0.resolve(null).then(e).catch(dy)}:J0;function dy(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function eg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[ts]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);pr(n)}function tg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hy(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ts])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function py(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function ng(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function my(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function ig(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function sg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vr(e)}var pi=new Map,rg=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=k.d;k.d={f:gy,r:xy,D:vy,C:_y,L:yy,m:by,X:My,S:Sy,M:Ey};function gy(){var e=la.f(),n=Hl();return e||n}function xy(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):la.r(e)}var fr=typeof document>"u"?null:document;function og(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),rg.has(u)||(rg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Rn(n,"link",e),C(n),r.head.appendChild(n)))}}function vy(e){la.D(e),og("dns-prefetch",e,null)}function _y(e,n){la.C(e,n),og("preconnect",e,n)}function yy(e,n,a){la.L(e,n,a);var r=fr;if(r&&e&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(e)+'"]';var f=u;switch(n){case"style":f=dr(e);break;case"script":f=hr(e)}pi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),Rn(n,"link",e),C(n),r.head.appendChild(n)))}}function by(e,n){la.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(r)+'"][href="'+st(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(e)}if(!pi.has(f)&&(e=x({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),Rn(r,"link",e),C(r),a.head.appendChild(r)}}}function Sy(e,n,a){la.S(e,n,a);var r=fr;if(r&&e){var u=Sa(r).hoistableStyles,f=dr(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=r.querySelector(Ao(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&jf(e,a);var H=y=r.createElement("link");C(H),Rn(H,"link",e),H._p=new Promise(function(te,de){H.onload=te,H.onerror=de}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ql(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function My(e,n){la.X(e,n);var a=fr;if(a&&e){var r=Sa(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0},n),(n=pi.get(u))&&Xf(e,n),f=a.createElement("script"),C(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Ey(e,n){la.M(e,n);var a=fr;if(a&&e){var r=Sa(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Xf(e,n),f=a.createElement("script"),C(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function lg(e,n,a,r){var u=(u=W.current)?Kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=Sa(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=Sa(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Ao(e)))&&!f._p&&(y.instance=f,y.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||Ty(u,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Sa(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+st(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function cg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Ty(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),C(n),e.head.appendChild(n))}function hr(e){return'[src="'+st(e)+'"]'}function wo(e){return"script[async]"+e}function ug(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(r)return n.instance=r,C(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),C(r),Rn(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=dr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;r=cg(a),(u=pi.get(u))&&jf(r,u),f=(e.ownerDocument||e).createElement("link"),C(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Rn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=hr(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,C(u),u):(r=a,(u=pi.get(f))&&(r=x({},a),Xf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Rn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,y=0;y<r.length;y++){var R=r[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function fg(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ts]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=r.get(y);R?R.push(f):r.set(y,[f])}}return r}function dg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ay(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=dr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,r=cg(r),(u=pi.get(u))&&jf(r,u),f=f.createElement("link"),C(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function Ry(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*ly());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(Cy,e),ec=null,$l.call(e))}function Cy(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,u),a.set(y,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:D,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Ny(e,n,a,r,u,f,y,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function pg(e,n,a,r,u,f,y,R,H,te,de,xe){return e=new Ny(e,n,a,y,H,te,de,xe,R),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ru(f),e}function mg(e){return e?(e=js,e):js}function gg(e,n,a,r,u,f){u=mg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ca(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Na(e,r,n),a!==null&&(Xn(a,e,n),so(a,e,n))}function xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){xg(e,n),(e=e.alternate)&&xg(e,n)}function vg(e){if(e.tag===13||e.tag===31){var n=rs(e,67108864);n!==null&&Xn(n,e,67108864),qf(e,67108864)}}function _g(e){if(e.tag===13||e.tag===31){var n=ti();n=kr(n);var a=rs(e,n);a!==null&&Xn(a,e,n),qf(e,n)}}var nc=!0;function Dy(e,n,a,r){var u=B.T;B.T=null;var f=k.p;try{k.p=2,Yf(e,n,a,r)}finally{k.p=f,B.T=u}}function Uy(e,n,a,r){var u=B.T;B.T=null;var f=k.p;try{k.p=8,Yf(e,n,a,r)}finally{k.p=f,B.T=u}}function Yf(e,n,a,r){if(nc){var u=Zf(r);if(u===null)Of(e,n,r,ic,a),bg(e,r);else if(Oy(u,e,n,a,r))r.stopPropagation();else if(bg(e,r),n&4&&-1<Ly.indexOf(e)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Se(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-ze(y);R.entanglements[1]|=H,y&=~H}Oi(f),(Lt&6)===0&&(Fl=E()+500,So(0))}}break;case 31:case 13:R=rs(f,2),R!==null&&Xn(R,f,2),Hl(),qf(f,2)}if(f=Zf(r),f===null&&Of(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Of(e,n,r,null,a)}}function Zf(e){return e=Kc(e),Kf(e)}var ic=null;function Kf(e){if(ic=null,e=ya(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pe:return 2;case be:return 8;case fe:case Ke:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ha=null,Ga=null,Va=null,Co=new Map,No=new Map,ja=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Do(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&vg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Oy(e,n,a,r,u){switch(n){case"focusin":return Ha=Do(Ha,e,n,a,r,u),!0;case"dragenter":return Ga=Do(Ga,e,n,a,r,u),!0;case"mouseover":return Va=Do(Va,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Do(No.get(f)||null,e,n,a,r,u)),!0}return!1}function Sg(e){var n=ya(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){_g(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){_g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Zc=r,a.target.dispatchEvent(r),Zc=null}else return n=ba(a),n!==null&&vg(n),e.blockedOn=a,!1;n.shift()}return!0}function Mg(e,n,a){ac(e)&&a.delete(n)}function Py(){Qf=!1,Ha!==null&&ac(Ha)&&(Ha=null),Ga!==null&&ac(Ga)&&(Ga=null),Va!==null&&ac(Va)&&(Va=null),Co.forEach(Mg),No.forEach(Mg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Py)))}var rc=null;function Eg(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Kf(r||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function pr(e){function n(H){return sc(H,e)}Ha!==null&&sc(Ha,e),Ga!==null&&sc(Ga,e),Va!==null&&sc(Va,e),Co.forEach(n),No.forEach(n);for(var a=0;a<ja.length;a++){var r=ja[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],y=u[_n]||null;if(typeof f=="function")y||Eg(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[_n]||null)R=y.formAction;else if(Kf(u)!==null)continue}else R=y.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Eg(a)}}}function Tg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(e){this._internalRoot=e}oc.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();gg(a,r,e,n,null,null)},oc.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;gg(e.current,2,null,e,null,null),Hl(),n[_i]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&Sg(e)}};var Ag=t.version;if(Ag!=="19.2.3")throw Error(s(527,Ag,"19.2.3"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var zy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Me=lc.inject(zy),Te=lc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Lm,f=Om,y=Pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=pg(e,1,!1,null,null,a,r,null,u,f,y,Tg),e[_i]=n.current,Lf(e),new Jf(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Lm,y=Om,R=Pm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=pg(e,1,!0,n,a??null,r,u,H,f,y,R,Tg),n.context=mg(null),a=n.current,r=ti(),r=kr(r),u=Ca(r),u.callback=null,Na(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Oi(n),e[_i]=n.current,Lf(e),new oc(n)},Lo.version="19.2.3",Lo}var zg;function Wy(){if(zg)return td.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=Xy(),td.exports}var qy=Wy();const Yy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ig=o=>{const t=Zy(o);return t.charAt(0).toUpperCase()+t.slice(1)},Wx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Ky=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var Qy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Jy=we.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>we.createElement("svg",{ref:m,...Qy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Wx("lucide",l),...!c&&!Ky(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,_])=>we.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Qt=(o,t)=>{const i=we.forwardRef(({className:s,...l},c)=>we.createElement(Jy,{ref:c,iconNode:t,className:Wx(`lucide-${Yy(Ig(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Ig(o),i};const $y=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ph=Qt("arrow-left",$y);const eb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ns=Qt("arrow-right",eb);const tb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],zh=Qt("arrow-up-right",tb);const nb=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],ib=Qt("briefcase",nb);const ab=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],sb=Qt("building-2",ab);const rb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qx=Qt("check",rb);const ob=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yx=Qt("chevron-down",ob);const lb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],cb=Qt("copy",lb);const ub=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fb=Qt("cpu",ub);const db=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hb=Qt("eye",db);const pb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mb=Qt("github",pb);const gb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],xb=Qt("instagram",gb);const vb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_b=Qt("layers",vb);const yb=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bb=Qt("loader-circle",yb);const Sb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Bg=Qt("mail",Sb);const Mb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Eb=Qt("menu",Mb);const Tb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ab=Qt("network",Tb);const wb=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Rb=Qt("paperclip",wb);const Cb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Fg=Qt("phone",Cb);const Nb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Db=Qt("search",Nb);const Ub=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Lb=Qt("shield-check",Ub);const Ob=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Pb=Qt("trash-2",Ob);const zb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ds=Qt("x",zb);const Ib=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Bb=Qt("zap",Ib),Fd=[{id:"01",folder:"01-ui-ux",title:"UI/UX Design",category:"Digital Capability",desc:"Crafting high-conversion interfaces that blend radical aesthetics with cognitive psychology to ensure seamless user journeys.",detailedDesc:"We deconstruct user behavior to reconstruct digital experiences. By merging data-driven insights with avant-garde aesthetics, we create interfaces that don't just look good—they perform. Every interaction is calculated, every pixel has a purpose.",alignRight:!1,video:"https://v.ftcdn.net/05/63/68/07/700_F_563680753_c1eGZf8z8A8y8E9z.mp4",image:"/01-ui-ux/cover.png",fileExt:".png"},{id:"02",folder:"02-app-dev",title:"App Development",category:"Digital Capability",desc:"Building robust, scalable, and secure mobile and web applications tailored to solve complex business challenges.",detailedDesc:"From native iOS/Android to cross-platform React Native solutions. We engineer applications that are built for scale, security, and speed. Our code is clean, modular, and ready for future integrations.",alignRight:!0,image:"/02-app-dev/cover.png",fileExt:".png"},{id:"03",folder:"03-brand-identity",title:"Brand Identity",category:"Digital Capability",desc:"Elevating brand authority through premium visual assets that command attention and establish market leadership.",detailedDesc:"A brand is not just a logo; it's a belief system. We craft visual identities that resonate on a subconscious level, turning customers into loyal advocates through consistent, high-impact visual storytelling.",alignRight:!1,image:"/03-brand-identity/cover.png",fileExt:".png"},{id:"04",folder:"04-motion-graphic",title:"Motion Graphic",category:"Digital Capability",desc:"Telling your brand story through high-fidelity motion graphics that capture the essence of your innovation.",detailedDesc:"Static is dead. We bring brands to life through fluid, kinetic typography and immersive motion design. We turn complex ideas into digestible, captivating visual narratives.",alignRight:!0,image:"/04-motion-graphic/cover.png",fileExt:".png"},{id:"05",folder:"05-ai-tools",title:"AI Tools Development",category:"Digital Capability",desc:"Integrating autonomous intelligence to automate workflows, predict user behavior, and drive unprecedented business efficiency.",detailedDesc:"The future is autonomous. We build custom AI solutions that streamline operations, predict market trends, and personalize user experiences in real-time.",alignRight:!1,image:"/05-ai-tools/cover.jpg",fileExt:".jpg"},{id:"06",folder:"06-social-media",title:"Social Media",category:"Digital Capability",desc:"Engineering strategic social presence through high-fidelity content systems that drive deep engagement and reinforce global brand dominance.",detailedDesc:"We don't just post; we dominate. Our social strategies are built on algorithmic understanding and high-fidelity content production that stops the scroll and drives engagement.",alignRight:!0,image:"/06-social-media/cover.png",fileExt:".png"},{id:"07",folder:"07-ecommerce",title:"E-Commerce",category:"Digital Capability",desc:"Constructing frictionless digital commerce ecosystems designed for maximum conversion and seamless cross-platform scalability.",detailedDesc:"We build digital storefronts that sell. Focusing on speed, security, and conversion rate optimization (CRO), we create shopping experiences that are as seamless as they are beautiful.",alignRight:!1,image:"/07-ecommerce/cover.png",fileExt:".png"},{id:"08",folder:"08-banner",title:"Platform Banner & Poster",category:"Digital Capability",desc:"Designing high-impact visual communications that command immediate attention across digital and physical platforms through elite art direction.",detailedDesc:"In a world of noise, clarity is king. We design promotional assets that cut through the clutter, delivering your message with precision and high-impact art direction.",alignRight:!0,image:"/08-banner/cover.png",fileExt:".png"},{id:"09",folder:"09-landing-page",title:"Landing Page",category:"Digital Capability",desc:"Building hyper-optimized, high-velocity entry points that combine persuasive storytelling with data-driven UX to maximize user acquisition.",detailedDesc:"First impressions are everything. We design landing pages that are visually stunning and ruthlessly effective at converting visitors into leads. Speed, story, and structure in perfect harmony.",alignRight:!1,image:"/09-landing-page/cover.jpg",fileExt:".jpg"},{id:"10",folder:"10-print",title:"Material Print Design",category:"Digital Capability",desc:"Extending brand authority into the physical realm through premium tactile assets that deliver a sophisticated and tangible brand experience.",detailedDesc:"Digital is fleeting; print is forever. We bring the same level of digital precision to physical assets, creating business cards, brochures, and packaging that feel premium to the touch.",alignRight:!0,image:"/10-print/cover.jpg",fileExt:".jpg"}],Fb=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],kb=o=>{const t=o.target,i=t.src;if(t.getAttribute("data-tried-fallback")==="true"){if(i.endsWith(".jpg")){t.src=i.replace(".jpg",".jpeg"),t.setAttribute("data-tried-fallback","final");return}t.style.display="none";return}t.setAttribute("data-tried-fallback","true"),i.includes(".png")?t.src=i.replace(".png",".jpg"):i.includes(".jpg")?t.src=i.replace(".jpg",".png"):i.includes(".jpeg")?t.src=i.replace(".jpeg",".png"):t.style.display="none"};const Ih="182",Hb=0,kg=1,Gb=2,Uc=1,Vb=2,Go=3,es=0,Yn=1,pa=2,ga=0,Cr=1,Hg=2,Gg=3,Vg=4,jb=5,As=100,Xb=101,Wb=102,qb=103,Yb=104,Zb=200,Kb=201,Qb=202,Jb=203,kd=204,Hd=205,$b=206,eS=207,tS=208,nS=209,iS=210,aS=211,sS=212,rS=213,oS=214,Gd=0,Vd=1,jd=2,Dr=3,Xd=4,Wd=5,qd=6,Yd=7,Zx=0,lS=1,cS=2,Fi=0,Kx=1,Qx=2,Jx=3,$x=4,ev=5,tv=6,nv=7,iv=300,Us=301,Ur=302,Zd=303,Kd=304,Vc=306,Qd=1e3,ma=1001,Jd=1002,Cn=1003,uS=1004,cc=1005,On=1006,sd=1007,Rs=1008,ai=1009,av=1010,sv=1011,jo=1012,Bh=1013,Gi=1014,Ii=1015,va=1016,Fh=1017,kh=1018,Xo=1020,rv=35902,ov=35899,lv=1021,cv=1022,Ri=1023,_a=1026,Cs=1027,uv=1028,Hh=1029,Lr=1030,Gh=1031,Vh=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,lh=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,xh=37815,vh=37816,_h=37817,yh=37818,bh=37819,Sh=37820,Mh=37821,Eh=36492,Th=36494,Ah=36495,wh=36283,Rh=36284,Ch=36285,Nh=36286,fS=3200,fv=0,dS=1,Ja="",gi="srgb",Or="srgb-linear",Bc="linear",kt="srgb",mr=7680,jg=519,hS=512,pS=513,mS=514,jh=515,gS=516,xS=517,Xh=518,vS=519,Xg=35044,Wg="300 es",Bi=2e3,Fc=2001;function dv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _S(){const o=kc("canvas");return o.style.display="block",o}const qg={};function Yg(...o){const t="THREE."+o.shift();console.log(t,...o)}function at(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Rt(...o){const t="THREE."+o.shift();console.error(t,...o)}function Wo(...o){const t=o.join(" ");t in qg||(qg[t]=!0,at(...o))}function yS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Dh=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function bS(o,t){return(o%t+t)%t}function od(o,t,i){return(1-i)*o+i*t}function Oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,i=0){Ct.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],b=c[d+0],M=c[d+1],A=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=b,t[i+1]=M,t[i+2]=A,t[i+3]=T;return}if(x!==T||m!==b||p!==M||_!==A){let S=m*b+p*M+_*A+x*T;S<0&&(b=-b,M=-M,A=-A,T=-T,S=-S);let v=1-h;if(S<.9995){const U=Math.acos(S),D=Math.sin(U);v=Math.sin(v*U)/D,h=Math.sin(h*U)/D,m=m*v+b*h,p=p*v+M*h,_=_*v+A*h,x=x*v+T*h}else{m=m*v+b*h,p=p*v+M*h,_=_*v+A*h,x=x*v+T*h;const U=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=U,p*=U,_*=U,x*=U}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[d],b=c[d+1],M=c[d+2],A=c[d+3];return t[i]=h*A+_*x+m*M-p*b,t[i+1]=m*A+_*b+p*x-h*M,t[i+2]=p*A+_*M+h*b-m*x,t[i+3]=_*A-h*x-m*b-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),x=h(c/2),b=m(s/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=b*_*x+p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x-b*M*A;break;case"YXZ":this._x=b*_*x+p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x+b*M*A;break;case"ZXY":this._x=b*_*x-p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x-b*M*A;break;case"ZYX":this._x=b*_*x-p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x+b*M*A;break;case"YZX":this._x=b*_*x+p*M*A,this._y=p*M*x+b*_*A,this._z=p*_*A-b*M*x,this._w=p*_*x-b*M*A;break;case"XZY":this._x=b*_*x-p*M*A,this._y=p*M*x-b*_*A,this._z=p*_*A+b*M*x,this._w=p*_*x+b*M*A;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],b=s+h+x;if(b>0){const M=.5/Math.sqrt(b+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Zg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Zg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*_,this.y=s+m*_+h*p-c*x,this.z=l+m*x+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new $,Zg=new Zo;class ft{constructor(t,i,s,l,c,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],x=s[7],b=s[2],M=s[5],A=s[8],T=l[0],S=l[3],v=l[6],U=l[1],D=l[4],P=l[7],I=l[2],F=l[5],z=l[8];return c[0]=d*T+h*U+m*I,c[3]=d*S+h*D+m*F,c[6]=d*v+h*P+m*z,c[1]=p*T+_*U+x*I,c[4]=p*S+_*D+x*F,c[7]=p*v+_*P+x*z,c[2]=b*T+M*U+A*I,c[5]=b*S+M*D+A*F,c[8]=b*v+M*P+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,b=h*m-_*c,M=p*c-d*m,A=i*x+s*b+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(l*p-_*s)*T,t[2]=(h*s-l*d)*T,t[3]=b*T,t[4]=(_*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(d*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new ft,Kg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:kt,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Tt=SS();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class MS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=kc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ES=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ud(l[d].image)):c.push(ud(l[d]))}else c=ud(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?MS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let TS=0;const fd=new $;class In extends zr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ma,l=ma,c=On,d=Rs,h=Ri,m=ai,p=In.DEFAULT_ANISOTROPY,_=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Yo(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case ma:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case ma:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=iv;In.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],b=m[1],M=m[5],A=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(_-b)<.01&&Math.abs(x-T)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+b)<.1&&Math.abs(x+T)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,P=(M+1)/2,I=(v+1)/2,F=(_+b)/4,z=(x+T)/4,Z=(A+S)/4;return D>P&&D>I?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=F/s,c=z/s):P>I?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=F/l,c=Z/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=Z/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-A)*(S-A)+(x-T)*(x-T)+(b-_)*(b-_));return Math.abs(U)<.001&&(U=1),this.x=(S-A)/U,this.y=(x-T)/U,this.z=(b-_)/U,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AS extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new In(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends AS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class hv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ei):Ei.fromBufferAttribute(c,d),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),fc.subVectors(this.max,Po),xr.subVectors(t.a,Po),vr.subVectors(t.b,Po),_r.subVectors(t.c,Po),Wa.subVectors(vr,xr),qa.subVectors(_r,vr),_s.subVectors(xr,_r);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-_s.z,_s.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,_s.z,0,-_s.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-_s.y,_s.x,0];return!dd(i,xr,vr,_r,fc)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,xr,vr,_r,fc))?!1:(dc.crossVectors(Wa,qa),i=[dc.x,dc.y,dc.z],dd(i,xr,vr,_r,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,uc=new Ko,xr=new $,vr=new $,_r=new $,Wa=new $,qa=new $,_s=new $,Po=new $,fc=new $,dc=new $,ys=new $;function dd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ys.fromArray(o,c);const h=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=t.dot(ys),p=i.dot(ys),_=s.dot(ys);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const RS=new Ko,zo=new $,hd=new $;class jc{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):RS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(hd)),this.expandByPoint(zo.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ua=new $,pd=new $,hc=new $,Ya=new $,md=new $,pc=new $,gd=new $;class pv{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){pd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Ya.dot(this.direction),m=-Ya.dot(hc),p=Ya.lengthSq(),_=Math.abs(1-d*d);let x,b,M,A;if(_>0)if(x=d*m-h,b=d*h-m,A=c*_,x>=0)if(b>=-A)if(b<=A){const T=1/_;x*=T,b*=T,M=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b=-c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b<=-A?(x=Math.max(0,-(-d*c+h)),b=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p):b<=A?(x=0,b=Math.min(Math.max(-c,-m),c),M=b*(b+2*m)+p):(x=Math.max(0,-(d*c+h)),b=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p);else b=d>0?-c:c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(pd).addScaledVector(hc,b),M}intersectSphere(t,i){ua.subVectors(t.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(s=(t.min.x-b.x)*p,l=(t.max.x-b.x)*p):(s=(t.max.x-b.x)*p,l=(t.min.x-b.x)*p),_>=0?(c=(t.min.y-b.y)*_,d=(t.max.y-b.y)*_):(c=(t.max.y-b.y)*_,d=(t.min.y-b.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-b.z)*x,m=(t.max.z-b.z)*x):(h=(t.max.z-b.z)*x,m=(t.min.z-b.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ua)!==null}intersectTriangle(t,i,s,l,c){md.subVectors(i,t),pc.subVectors(s,t),gd.crossVectors(md,pc);let d=this.direction.dot(gd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Ya,pc));if(m<0)return null;const p=h*this.direction.dot(md.cross(Ya));if(p<0||m+p>d)return null;const _=-h*Ya.dot(gd);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,i,s,l,c,d,h,m,p,_,x,b,M,A,T,S){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,_,x,b,M,A,T,S)}set(t,i,s,l,c,d,h,m,p,_,x,b,M,A,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=b,v[3]=M,v[7]=A,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),d=1/yr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const b=d*_,M=d*x,A=h*_,T=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=b-T*p,i[9]=-h*m,i[2]=T-b*p,i[6]=A+M*p,i[10]=d*m}else if(t.order==="YXZ"){const b=m*_,M=m*x,A=p*_,T=p*x;i[0]=b+T*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=T+b*h,i[10]=d*m}else if(t.order==="ZXY"){const b=m*_,M=m*x,A=p*_,T=p*x;i[0]=b-T*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=T-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const b=d*_,M=d*x,A=h*_,T=h*x;i[0]=m*_,i[4]=A*p-M,i[8]=b*p+T,i[1]=m*x,i[5]=T*p+b,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const b=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*_,i[4]=T-b*x,i[8]=A*x+M,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*x+A,i[10]=b-T*x}else if(t.order==="XZY"){const b=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=b*x+T,i[5]=d*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*_,i[10]=T*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CS,t,NS)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Za.crossVectors(s,ni),Za.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Za.crossVectors(s,ni)),Za.normalize(),mc.crossVectors(ni,Za),l[0]=Za.x,l[4]=mc.x,l[8]=ni.x,l[1]=Za.y,l[5]=mc.y,l[9]=ni.y,l[2]=Za.z,l[6]=mc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],x=s[5],b=s[9],M=s[13],A=s[2],T=s[6],S=s[10],v=s[14],U=s[3],D=s[7],P=s[11],I=s[15],F=l[0],z=l[4],Z=l[8],w=l[12],N=l[1],V=l[5],ie=l[9],ae=l[13],he=l[2],oe=l[6],B=l[10],k=l[14],Q=l[3],ye=l[7],_e=l[11],O=l[15];return c[0]=d*F+h*N+m*he+p*Q,c[4]=d*z+h*V+m*oe+p*ye,c[8]=d*Z+h*ie+m*B+p*_e,c[12]=d*w+h*ae+m*k+p*O,c[1]=_*F+x*N+b*he+M*Q,c[5]=_*z+x*V+b*oe+M*ye,c[9]=_*Z+x*ie+b*B+M*_e,c[13]=_*w+x*ae+b*k+M*O,c[2]=A*F+T*N+S*he+v*Q,c[6]=A*z+T*V+S*oe+v*ye,c[10]=A*Z+T*ie+S*B+v*_e,c[14]=A*w+T*ae+S*k+v*O,c[3]=U*F+D*N+P*he+I*Q,c[7]=U*z+D*V+P*oe+I*ye,c[11]=U*Z+D*ie+P*B+I*_e,c[15]=U*w+D*ae+P*k+I*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],b=t[10],M=t[14],A=t[3],T=t[7],S=t[11],v=t[15],U=m*M-p*b,D=h*M-p*x,P=h*b-m*x,I=d*M-p*_,F=d*b-m*_,z=d*x-h*_;return i*(T*U-S*D+v*P)-s*(A*U-S*I+v*F)+l*(A*D-T*I+v*z)-c*(A*P-T*F+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],b=t[10],M=t[11],A=t[12],T=t[13],S=t[14],v=t[15],U=x*S*p-T*b*p+T*m*M-h*S*M-x*m*v+h*b*v,D=A*b*p-_*S*p-A*m*M+d*S*M+_*m*v-d*b*v,P=_*T*p-A*x*p+A*h*M-d*T*M-_*h*v+d*x*v,I=A*x*m-_*T*m-A*h*b+d*T*b+_*h*S-d*x*S,F=i*U+s*D+l*P+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=U*z,t[1]=(T*b*c-x*S*c-T*l*M+s*S*M+x*l*v-s*b*v)*z,t[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*v+s*m*v)*z,t[3]=(x*m*c-h*b*c-x*l*p+s*b*p+h*l*M-s*m*M)*z,t[4]=D*z,t[5]=(_*S*c-A*b*c+A*l*M-i*S*M-_*l*v+i*b*v)*z,t[6]=(A*m*c-d*S*c-A*l*p+i*S*p+d*l*v-i*m*v)*z,t[7]=(d*b*c-_*m*c+_*l*p-i*b*p-d*l*M+i*m*M)*z,t[8]=P*z,t[9]=(A*x*c-_*T*c-A*s*M+i*T*M+_*s*v-i*x*v)*z,t[10]=(d*T*c-A*h*c+A*s*p-i*T*p-d*s*v+i*h*v)*z,t[11]=(_*h*c-d*x*c-_*s*p+i*x*p+d*s*M-i*h*M)*z,t[12]=I*z,t[13]=(_*T*l-A*x*l+A*s*b-i*T*b-_*s*S+i*x*S)*z,t[14]=(A*h*l-d*T*l-A*s*m+i*T*m+d*s*S-i*h*S)*z,t[15]=(d*x*l-_*h*l+_*s*m-i*x*m-d*s*b+i*h*b)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,x=h+h,b=c*p,M=c*_,A=c*x,T=d*_,S=d*x,v=h*x,U=m*p,D=m*_,P=m*x,I=s.x,F=s.y,z=s.z;return l[0]=(1-(T+v))*I,l[1]=(M+P)*I,l[2]=(A-D)*I,l[3]=0,l[4]=(M-P)*F,l[5]=(1-(b+v))*F,l[6]=(S+U)*F,l[7]=0,l[8]=(A+D)*z,l[9]=(S-U)*z,l[10]=(1-(b+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=yr.set(l[0],l[1],l[2]).length();const d=yr.set(l[4],l[5],l[6]).length(),h=yr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,_=1/d,x=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,i.setFromRotationMatrix(Ti),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Bi,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),b=(i+t)/(i-t),M=(s+l)/(s-l);let A,T;if(m)A=c/(d-c),T=d*c/(d-c);else if(h===Bi)A=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Fc)A=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Bi,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),b=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,T;if(m)A=1/(d-c),T=d/(d-c);else if(h===Bi)A=-2/(d-c),T=-(d+c)/(d-c);else if(h===Fc)A=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const yr=new $,Ti=new Jt,CS=new $(0,0,0),NS=new $(1,1,1),Za=new $,mc=new $,ni=new $,Jg=new Jt,$g=new Zo;class Vi{constructor(t=0,i=0,s=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],b=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $g.setFromEuler(this),this.setFromQuaternion($g,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class mv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DS=0;const ex=new $,br=new Zo,fa=new Jt,gc=new $,Io=new $,US=new $,LS=new Zo,tx=new $(1,0,0),nx=new $(0,1,0),ix=new $(0,0,1),ax={type:"added"},OS={type:"removed"},Sr={type:"childadded",child:null},xd={type:"childremoved",child:null};class Bn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new $,i=new Vi,s=new Zo,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(tx,t)}rotateY(t){return this.rotateOnAxis(nx,t)}rotateZ(t){return this.rotateOnAxis(ix,t)}translateOnAxis(t,i){return ex.copy(t).applyQuaternion(this.quaternion),this.position.add(ex.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(tx,t)}translateY(t){return this.translateOnAxis(nx,t)}translateZ(t){return this.translateOnAxis(ix,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Io,gc,this.up):fa.lookAt(gc,Io,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),br.setFromRotationMatrix(fa),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ax),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(OS),xd.child=t,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ax),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,US),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,LS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),b=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),b.length>0&&(s.skeletons=b),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new $(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new $,da=new $,vd=new $,ha=new $,Mr=new $,Er=new $,sx=new $,_d=new $,yd=new $,bd=new $,Sd=new an,Md=new an,Ed=new an;class wi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),da.subVectors(s,i),vd.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(da),m=Ai.dot(vd),p=da.dot(da),_=da.dot(vd),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const b=1/x,M=(p*m-h*_)*b,A=(d*_-h*m)*b;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,c.x),d.addScaledVector(Md,c.y),d.addScaledVector(Ed,c.z),d}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),Er.subVectors(c,s),_d.subVectors(t,s);const m=Mr.dot(_d),p=Er.dot(_d);if(m<=0&&p<=0)return i.copy(s);yd.subVectors(t,l);const _=Mr.dot(yd),x=Er.dot(yd);if(_>=0&&x<=_)return i.copy(l);const b=m*x-_*p;if(b<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Mr,d);bd.subVectors(t,c);const M=Mr.dot(bd),A=Er.dot(bd);if(A>=0&&M<=A)return i.copy(c);const T=M*p-m*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(Er,h);const S=_*A-M*x;if(S<=0&&x-_>=0&&M-A>=0)return sx.subVectors(c,l),h=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(sx,h);const v=1/(S+T+b);return d=T*v,h=b*v,i.copy(s).addScaledVector(Mr,d).addScaledVector(Er,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Td(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Tt.workingColorSpace){if(t=bS(t,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Td(d,c,t+1/3),this.g=Td(d,c,t),this.b=Td(d,c,t-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=gv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Tt.workingToColorSpace(Ln.copy(this),t),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=gi){Tt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(xc);const s=od(Ka.h,xc.h,i),l=od(Ka.s,xc.s,i),c=od(Ka.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new bt;bt.NAMES=gv;let PS=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Hd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Hd&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qh extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new $,vc=new Ct;let zS=0;class Hi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Xg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xg&&(t.usage=this.usage),t}}class xv extends Hi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vv extends Hi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Fn extends Hi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let IS=0;const mi=new Jt,Ad=new Bn,Tr=new $,ii=new Ko,Bo=new Ko,vn=new $;class xi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?vv:xv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ii.min,Bo.min),ii.expandByPoint(vn),vn.addVectors(ii.max,Bo.max),ii.expandByPoint(vn)):(ii.expandByPoint(Bo.min),ii.expandByPoint(Bo.max))}ii.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)vn.fromBufferAttribute(h,p),m&&(Tr.fromBufferAttribute(t,p),vn.add(Tr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<s.count;Z++)h[Z]=new $,m[Z]=new $;const p=new $,_=new $,x=new $,b=new Ct,M=new Ct,A=new Ct,T=new $,S=new $;function v(Z,w,N){p.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),b.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,N),_.sub(p),x.sub(p),M.sub(b),A.sub(b);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(T.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(V),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(V),h[Z].add(T),h[w].add(T),h[N].add(T),m[Z].add(S),m[w].add(S),m[N].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],V=N.start,ie=N.count;for(let ae=V,he=V+ie;ae<he;ae+=3)v(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const D=new $,P=new $,I=new $,F=new $;function z(Z){I.fromBufferAttribute(l,Z),F.copy(I);const w=h[Z];D.copy(w),D.sub(I.multiplyScalar(I.dot(w))).normalize(),P.crossVectors(F,w);const V=P.dot(m[Z])<0?-1:1;d.setXYZW(Z,D.x,D.y,D.z,V)}for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],V=N.start,ie=N.count;for(let ae=V,he=V+ie;ae<he;ae+=3)z(t.getX(ae+0)),z(t.getX(ae+1)),z(t.getX(ae+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let b=0,M=s.count;b<M;b++)s.setXYZ(b,0,0,0);const l=new $,c=new $,d=new $,h=new $,m=new $,p=new $,_=new $,x=new $;if(t)for(let b=0,M=t.count;b<M;b+=3){const A=t.getX(b+0),T=t.getX(b+1),S=t.getX(b+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let b=0,M=i.count;b<M;b+=3)l.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),s.setXYZ(b+0,_.x,_.y,_.z),s.setXYZ(b+1,_.x,_.y,_.z),s.setXYZ(b+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,b=new p.constructor(m.length*_);let M=0,A=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let v=0;v<_;v++)b[A++]=p[M++]}return new Hi(b,_,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const b=p[_],M=t(b,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,b=p.length;x<b;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let b=0,M=x.length;b<M;b++)_.push(x[b].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rx=new Jt,bs=new pv,_c=new jc,ox=new $,yc=new $,bc=new $,Sc=new $,wd=new $,Mc=new $,lx=new $,Ec=new $;class Ci extends Bn{constructor(t=new xi,i=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(wd.fromBufferAttribute(x,t),d?Mc.addScaledVector(wd,_):Mc.addScaledVector(wd.sub(i),_))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(_c.containsPoint(bs.origin)===!1&&(bs.intersectSphere(_c,ox)===null||bs.origin.distanceToSquared(ox)>(t.far-t.near)**2))&&(rx.copy(c).invert(),bs.copy(t.ray).applyMatrix4(rx),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,b=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,T=b.length;A<T;A++){const S=b[A],v=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const F=h.getX(P),z=h.getX(P+1),Z=h.getX(P+2);l=Tc(this,v,t,s,p,_,x,F,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=A,v=T;S<v;S+=3){const U=h.getX(S),D=h.getX(S+1),P=h.getX(S+2);l=Tc(this,d,t,s,p,_,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,T=b.length;A<T;A++){const S=b[A],v=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const F=P,z=P+1,Z=P+2;l=Tc(this,v,t,s,p,_,x,F,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=A,v=T;S<v;S+=3){const U=S,D=S+1,P=S+2;l=Tc(this,d,t,s,p,_,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function BS(o,t,i,s,l,c,d,h){let m;if(t.side===Yn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===es,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function Tc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,bc),o.getVertexPosition(p,Sc);const _=BS(o,t,i,s,yc,bc,Sc,lx);if(_){const x=new $;wi.getBarycoord(lx,yc,bc,Sc,x),l&&(_.uv=wi.getInterpolatedAttribute(l,h,m,p,x,new Ct)),c&&(_.uv1=wi.getInterpolatedAttribute(c,h,m,p,x,new Ct)),d&&(_.normal=wi.getInterpolatedAttribute(d,h,m,p,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new $,materialIndex:0};wi.getNormal(yc,bc,Sc,b.normal),_.face=b,_.barycoord=x}return _}class Qo extends xi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],x=[];let b=0,M=0;A("z","y","x",-1,-1,s,i,t,d,c,0),A("z","y","x",1,-1,s,i,-t,d,c,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(_,3)),this.setAttribute("uv",new Fn(x,2));function A(T,S,v,U,D,P,I,F,z,Z,w){const N=P/z,V=I/Z,ie=P/2,ae=I/2,he=F/2,oe=z+1,B=Z+1;let k=0,Q=0;const ye=new $;for(let _e=0;_e<B;_e++){const O=_e*V-ae;for(let ne=0;ne<oe;ne++){const ge=ne*N-ie;ye[T]=ge*U,ye[S]=O*D,ye[v]=he,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[S]=0,ye[v]=F>0?1:-1,_.push(ye.x,ye.y,ye.z),x.push(ne/z),x.push(1-_e/Z),k+=1}}for(let _e=0;_e<Z;_e++)for(let O=0;O<z;O++){const ne=b+O+oe*_e,ge=b+O+oe*(_e+1),Ee=b+(O+1)+oe*(_e+1),Fe=b+(O+1)+oe*_e;m.push(ne,ge,Fe),m.push(ge,Ee,Fe),Q+=6}h.addGroup(M,Q,w),M+=Q,b+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function FS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function _v(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const kS={clone:Pr,merge:zn};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=GS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=FS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new $,cx=new Ct,ux=new Ct;class qn extends yv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,cx,ux),i.subVectors(ux,cx)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,wr=1;class VS extends Bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(Ar,wr,t,i);l.layers=this.layers,this.add(l);const c=new qn(Ar,wr,t,i);c.layers=this.layers,this.add(c);const d=new qn(Ar,wr,t,i);d.layers=this.layers,this.add(d);const h=new qn(Ar,wr,t,i);h.layers=this.layers,this.add(h);const m=new qn(Ar,wr,t,i);m.layers=this.layers,this.add(m);const p=new qn(Ar,wr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,x=t.getRenderTarget(),b=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,b,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class bv extends In{constructor(t=[],i=Us,s,l,c,d,h,m,p,_){super(t,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sv extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qo(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ga});c.uniforms.tEquirect.value=i;const d=new Ci(l,c),h=i.minFilter;return i.minFilter===Rs&&(i.minFilter=On),new VS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Ac extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=_.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&b>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&b<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ac;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Mv extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class XS extends In{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Cn,_=Cn,x,b){super(null,d,h,m,p,_,l,c,x,b),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new $,WS=new $,qS=new ft;class Ts{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Cd.subVectors(s,i).cross(WS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Cd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||qS.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new jc,YS=new Ct(.5,.5),wc=new $;class Yh{constructor(t=new Ts,i=new Ts,s=new Ts,l=new Ts,c=new Ts,d=new Ts){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],b=c[6],M=c[7],A=c[8],T=c[9],S=c[10],v=c[11],U=c[12],D=c[13],P=c[14],I=c[15];if(l[0].setComponents(p-d,M-_,v-A,I-U).normalize(),l[1].setComponents(p+d,M+_,v+A,I+U).normalize(),l[2].setComponents(p+h,M+x,v+T,I+D).normalize(),l[3].setComponents(p-h,M-x,v-T,I-D).normalize(),s)l[4].setComponents(m,b,S,P).normalize(),l[5].setComponents(p-m,M-b,v-S,I-P).normalize();else if(l[4].setComponents(p-m,M-b,v-S,I-P).normalize(),i===Bi)l[5].setComponents(p+m,M+b,v+S,I+P).normalize();else if(i===Fc)l[5].setComponents(m,b,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);const i=YS.distanceTo(t.center);return Ss.radius=.7071067811865476+i,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ev extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hc=new $,Gc=new $,fx=new Jt,Fo=new pv,Rc=new jc,Nd=new $,dx=new $;class ZS extends Bn{constructor(t=new xi,i=new Ev){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Hc.fromBufferAttribute(i,l-1),Gc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Hc.distanceTo(Gc);t.setAttribute("lineDistance",new Fn(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,t.ray.intersectsSphere(Rc)===!1)return;fx.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(fx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,b=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),A=Math.min(_.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const v=_.getX(T),U=_.getX(T+1),D=Cc(this,t,Fo,m,v,U,T);D&&i.push(D)}if(this.isLineLoop){const T=_.getX(A-1),S=_.getX(M),v=Cc(this,t,Fo,m,T,S,A-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),A=Math.min(b.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const v=Cc(this,t,Fo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Cc(this,t,Fo,m,A-1,M,A-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cc(o,t,i,s,l,c,d){const h=o.geometry.attributes.position;if(Hc.fromBufferAttribute(h,l),Gc.fromBufferAttribute(h,c),i.distanceSqToSegment(Hc,Gc,Nd,dx)>s)return;Nd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Nd);if(!(p<t.near||p>t.far))return{distance:p,point:dx.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const hx=new $,px=new $;class KS extends ZS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)hx.fromBufferAttribute(i,l),px.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+hx.distanceTo(px);t.setAttribute("lineDistance",new Fn(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends In{constructor(t,i,s=Gi,l,c,d,h=Cn,m=Cn,p,_=_a,x=1){if(_!==_a&&_!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:t,height:i,depth:x};super(b,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class QS extends qo{constructor(t,i=Gi,s=Us,l,c,d=Cn,h=Cn,m,p=_a){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,h,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xc extends xi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,x=t/h,b=i/m,M=[],A=[],T=[],S=[];for(let v=0;v<_;v++){const U=v*b-d;for(let D=0;D<p;D++){const P=D*x-c;A.push(P,-U,0),T.push(0,0,1),S.push(D/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const D=U+p*v,P=U+p*(v+1),I=U+1+p*(v+1),F=U+1+p*v;M.push(D,P,F),M.push(P,I,F)}this.setIndex(M),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wc extends xi{constructor(t=1,i=.4,s=64,l=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:l,p:c,q:d},s=Math.floor(s),l=Math.floor(l);const h=[],m=[],p=[],_=[],x=new $,b=new $,M=new $,A=new $,T=new $,S=new $,v=new $;for(let D=0;D<=s;++D){const P=D/s*c*Math.PI*2;U(P,c,d,t,M),U(P+.01,c,d,t,A),S.subVectors(A,M),v.addVectors(A,M),T.crossVectors(S,v),v.crossVectors(T,S),T.normalize(),v.normalize();for(let I=0;I<=l;++I){const F=I/l*Math.PI*2,z=-i*Math.cos(F),Z=i*Math.sin(F);x.x=M.x+(z*v.x+Z*T.x),x.y=M.y+(z*v.y+Z*T.y),x.z=M.z+(z*v.z+Z*T.z),m.push(x.x,x.y,x.z),b.subVectors(x,M).normalize(),p.push(b.x,b.y,b.z),_.push(D/s),_.push(I/l)}}for(let D=1;D<=s;D++)for(let P=1;P<=l;P++){const I=(l+1)*(D-1)+(P-1),F=(l+1)*D+(P-1),z=(l+1)*D+P,Z=(l+1)*(D-1)+P;h.push(I,F,Z),h.push(F,z,Z)}this.setIndex(h),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(p,3)),this.setAttribute("uv",new Fn(_,2));function U(D,P,I,F,z){const Z=Math.cos(D),w=Math.sin(D),N=I/P*D,V=Math.cos(N);z.x=F*(2+V)*.5*Z,z.y=F*(2+V)*w*.5,z.z=F*Math.sin(N)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class JS extends xi{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new $,c=new $;if(t.index!==null){const d=t.attributes.position,h=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,_=m.length;p<_;++p){const x=m[p],b=x.start,M=x.count;for(let A=b,T=b+M;A<T;A+=3)for(let S=0;S<3;S++){const v=h.getX(A+S),U=h.getX(A+(S+1)%3);l.fromBufferAttribute(d,v),c.fromBufferAttribute(d,U),mx(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const d=t.attributes.position;for(let h=0,m=d.count/3;h<m;h++)for(let p=0;p<3;p++){const _=3*h+p,x=3*h+(p+1)%3;l.fromBufferAttribute(d,_),c.fromBufferAttribute(d,x),mx(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Fn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function mx(o,t,i){const s=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class $S extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eM extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tM extends eM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class nM extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iM extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Av extends Bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Dd=new Jt,gx=new $,xx=new $;class aM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;gx.setFromMatrixPosition(t.matrixWorld),i.position.copy(gx),xx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(xx),i.updateMatrixWorld(),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sM extends aM{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class vx extends Av{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new sM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class wv extends yv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends Av{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class oM extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function _x(o,t,i,s){const l=lM(s);switch(i){case lv:return o*t;case uv:return o*t/l.components*l.byteLength;case Hh:return o*t/l.components*l.byteLength;case Lr:return o*t*2/l.components*l.byteLength;case Gh:return o*t*2/l.components*l.byteLength;case cv:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Vh:return o*t*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case eh:case nh:return Math.max(o,16)*Math.max(t,8)/4;case $d:case th:return Math.max(o,8)*Math.max(t,8)/2;case ih:case ah:case rh:case oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sh:case lh:case ch:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Eh:case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16;case wh:case Rh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ch:case Nh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lM(o){switch(o){case ai:case av:return{byteLength:1,components:1};case jo:case sv:case va:return{byteLength:2,components:1};case Fh:case kh:return{byteLength:2,components:4};case Gi:case Bh:case Ii:return{byteLength:4,components:1};case rv:case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);function Rv(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function cM(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((M,A)=>M.start-A.start);let b=0;for(let M=1;M<x.length;M++){const A=x[b],T=x[M];T.start<=A.start+A.count+1?A.count=Math.max(A.count,T.start+T.count-A.start):(++b,x[b]=T)}x.length=b+1;for(let M=0,A=x.length;M<A;M++){const T=x[M];o.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
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
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
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
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LM=`#define PI 3.141592653589793
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
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
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
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
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
#endif`,l1=`uniform sampler2D dfgLUT;
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
}`,c1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
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
}`,gE=`#if DEPTH_PACKING == 3200
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
}`,xE=`#define DISTANCE
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
}`,vE=`#define DISTANCE
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`uniform float scale;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,TE=`#define LAMBERT
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
}`,AE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,RE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,NE=`#define NORMAL
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
}`,DE=`#define PHONG
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
}`,UE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,OE=`#define STANDARD
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
}`,PE=`#define TOON
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
}`,zE=`#define TOON
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
}`,IE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,HE=`uniform float rotation;
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
}`,GE=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:uM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:hM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:xM,batching_pars_vertex:vM,batching_vertex:_M,begin_vertex:yM,beginnormal_vertex:bM,bsdfs:SM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:NM,color_pars_vertex:DM,color_vertex:UM,common:LM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:PM,displacementmap_pars_vertex:zM,displacementmap_vertex:IM,emissivemap_fragment:BM,emissivemap_pars_fragment:FM,colorspace_fragment:kM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:jM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:n1,envmap_vertex:WM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:ZM,fog_pars_fragment:KM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:a1,lights_phong_fragment:s1,lights_phong_pars_fragment:r1,lights_physical_fragment:o1,lights_physical_pars_fragment:l1,lights_fragment_begin:c1,lights_fragment_maps:u1,lights_fragment_end:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:x1,map_particle_fragment:v1,map_particle_pars_fragment:_1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:b1,morphinstance_vertex:S1,morphcolor_vertex:M1,morphnormal_vertex:E1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:w1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:N1,normal_vertex:D1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:z1,opaque_fragment:I1,packing:B1,premultiplied_alpha_fragment:F1,project_vertex:k1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:W1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:$1,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:aE,uv_pars_fragment:sE,uv_pars_vertex:rE,uv_vertex:oE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:fE,backgroundCube_frag:dE,cube_vert:hE,cube_frag:pE,depth_vert:mE,depth_frag:gE,distance_vert:xE,distance_frag:vE,equirect_vert:_E,equirect_frag:yE,linedashed_vert:bE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:AE,meshmatcap_vert:wE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:NE,meshphong_vert:DE,meshphong_frag:UE,meshphysical_vert:LE,meshphysical_frag:OE,meshtoon_vert:PE,meshtoon_frag:zE,points_vert:IE,points_frag:BE,shadow_vert:FE,shadow_frag:kE,sprite_vert:HE,sprite_frag:GE},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Nc={r:0,b:0,g:0},Ms=new Vi,VE=new Jt;function jE(o,t,i,s,l,c,d){const h=new bt(0);let m=c===!0?0:1,p,_,x=null,b=0,M=null;function A(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?i:t).get(P)),P}function T(D){let P=!1;const I=A(D);I===null?v(h,m):I&&I.isColor&&(v(I,1),P=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,P){const I=A(P);I&&(I.isCubeTexture||I.mapping===Vc)?(_===void 0&&(_=new Ci(new Qo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Pr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ms.copy(P.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(Ms)),_.material.toneMapped=Tt.getTransfer(I.colorSpace)!==kt,(x!==I||b!==I.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=I,b=I.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ci(new Xc(2,2),new ji({name:"BackgroundMaterial",uniforms:Pr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(I.colorSpace)!==kt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||b!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=I,b=I.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,P){D.getRGB(Nc,_v(o)),s.buffers.color.setClear(Nc.r,Nc.g,Nc.b,P,d)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:T,addToRenderList:S,dispose:U}}function XE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=b(null);let c=l,d=!1;function h(N,V,ie,ae,he){let oe=!1;const B=x(ae,ie,V);c!==B&&(c=B,p(c.object)),oe=M(N,ae,ie,he),oe&&A(N,ae,ie,he),he!==null&&t.update(he,o.ELEMENT_ARRAY_BUFFER),(oe||d)&&(d=!1,P(N,V,ie,ae),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function m(){return o.createVertexArray()}function p(N){return o.bindVertexArray(N)}function _(N){return o.deleteVertexArray(N)}function x(N,V,ie){const ae=ie.wireframe===!0;let he=s[N.id];he===void 0&&(he={},s[N.id]=he);let oe=he[V.id];oe===void 0&&(oe={},he[V.id]=oe);let B=oe[ae];return B===void 0&&(B=b(m()),oe[ae]=B),B}function b(N){const V=[],ie=[],ae=[];for(let he=0;he<i;he++)V[he]=0,ie[he]=0,ae[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ie,attributeDivisors:ae,object:N,attributes:{},index:null}}function M(N,V,ie,ae){const he=c.attributes,oe=V.attributes;let B=0;const k=ie.getAttributes();for(const Q in k)if(k[Q].location>=0){const _e=he[Q];let O=oe[Q];if(O===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),_e===void 0||_e.attribute!==O||O&&_e.data!==O.data)return!0;B++}return c.attributesNum!==B||c.index!==ae}function A(N,V,ie,ae){const he={},oe=V.attributes;let B=0;const k=ie.getAttributes();for(const Q in k)if(k[Q].location>=0){let _e=oe[Q];_e===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const O={};O.attribute=_e,_e&&_e.data&&(O.data=_e.data),he[Q]=O,B++}c.attributes=he,c.attributesNum=B,c.index=ae}function T(){const N=c.newAttributes;for(let V=0,ie=N.length;V<ie;V++)N[V]=0}function S(N){v(N,0)}function v(N,V){const ie=c.newAttributes,ae=c.enabledAttributes,he=c.attributeDivisors;ie[N]=1,ae[N]===0&&(o.enableVertexAttribArray(N),ae[N]=1),he[N]!==V&&(o.vertexAttribDivisor(N,V),he[N]=V)}function U(){const N=c.newAttributes,V=c.enabledAttributes;for(let ie=0,ae=V.length;ie<ae;ie++)V[ie]!==N[ie]&&(o.disableVertexAttribArray(ie),V[ie]=0)}function D(N,V,ie,ae,he,oe,B){B===!0?o.vertexAttribIPointer(N,V,ie,he,oe):o.vertexAttribPointer(N,V,ie,ae,he,oe)}function P(N,V,ie,ae){T();const he=ae.attributes,oe=ie.getAttributes(),B=V.defaultAttributeValues;for(const k in oe){const Q=oe[k];if(Q.location>=0){let ye=he[k];if(ye===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){const _e=ye.normalized,O=ye.itemSize,ne=t.get(ye);if(ne===void 0)continue;const ge=ne.buffer,Ee=ne.type,Fe=ne.bytesPerElement,W=Ee===o.INT||Ee===o.UNSIGNED_INT||ye.gpuType===Bh;if(ye.isInterleavedBufferAttribute){const ce=ye.data,Ce=ce.stride,He=ye.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Q.locationSize;Ge++)v(Q.location+Ge,ce.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<Q.locationSize;Ge++)S(Q.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ge=0;Ge<Q.locationSize;Ge++)D(Q.location+Ge,O/Q.locationSize,Ee,_e,Ce*Fe,(He+O/Q.locationSize*Ge)*Fe,W)}else{if(ye.isInstancedBufferAttribute){for(let ce=0;ce<Q.locationSize;ce++)v(Q.location+ce,ye.meshPerAttribute);N.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ce=0;ce<Q.locationSize;ce++)S(Q.location+ce);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ce=0;ce<Q.locationSize;ce++)D(Q.location+ce,O/Q.locationSize,Ee,_e,O*Fe,O/Q.locationSize*ce*Fe,W)}}else if(B!==void 0){const _e=B[k];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(Q.location,_e);break;case 3:o.vertexAttrib3fv(Q.location,_e);break;case 4:o.vertexAttrib4fv(Q.location,_e);break;default:o.vertexAttrib1fv(Q.location,_e)}}}}U()}function I(){Z();for(const N in s){const V=s[N];for(const ie in V){const ae=V[ie];for(const he in ae)_(ae[he].object),delete ae[he];delete V[ie]}delete s[N]}}function F(N){if(s[N.id]===void 0)return;const V=s[N.id];for(const ie in V){const ae=V[ie];for(const he in ae)_(ae[he].object),delete ae[he];delete V[ie]}delete s[N.id]}function z(N){for(const V in s){const ie=s[V];if(ie[N.id]===void 0)continue;const ae=ie[N.id];for(const he in ae)_(ae[he].object),delete ae[he];delete ie[N.id]}}function Z(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function WE(o,t,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let M=0;for(let A=0;A<x;A++)M+=_[A];i.update(M,s,1)}function m(p,_,x,b){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],_[A],b[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,b,0,x);let A=0;for(let T=0;T<x;T++)A+=_[T]*b[T];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function qE(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!Z)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(at("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:M,maxVertexTextures:A,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,maxSamples:I,samples:F}}function YE(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Ts,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const M=x.length!==0||b||s!==0||l;return l=b,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,b){i=_(x,b,0)},this.setState=function(x,b,M){const A=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||c&&!S)c?_(null):p();else{const U=c?0:s,D=U*4;let P=v.clippingState||null;m.value=P,P=_(A,b,D,M);for(let I=0;I!==D;++I)P[I]=i[I];v.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,b,M,A){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=m.value,A!==!0||S===null){const v=M+T*4,U=b.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,P=M;D!==T;++D,P+=4)d.copy(x[D]).applyMatrix4(U,h),d.normal.toArray(S,P),S[P+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function ZE(o){let t=new WeakMap;function i(d,h){return h===Zd?d.mapping=Us:h===Kd&&(d.mapping=Ur),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Zd||h===Kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Sv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const $a=4,yx=[.125,.215,.35,.446,.526,.582],ws=20,KE=256,ko=new wv,bx=new bt;let Ud=null,Ld=0,Od=0,Pd=!1;const QE=new $;class Sx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=QE}=c;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:va,format:Ri,colorSpace:Or,depthBuffer:!1},l=Mx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JE(c)),this._blurMaterial=eT(c,t,i),this._ggxMaterial=$E(c,t,i)}return l}_compileMaterial(t){const i=new Ci(new xi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,c){const m=new qn(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,M=x.toneMapping;x.getClearColor(bx),x.toneMapping=Fi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new Qo,new qh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let v=!1;const U=t.background;U?U.isColor&&(S.color.copy(U),t.background=null,v=!0):(S.color.copy(bx),v=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):P===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const I=this._cubeSize;Rr(l,P*I,D>2?I:0,I,I),x.setRenderTarget(l),v&&x.render(T,m),x.render(t,m)}x.toneMapping=M,x.autoClear=b,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ex());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Rr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),b=0+p*1.25,M=x*b,{_lodMax:A}=this,T=this._sizeLods[s],S=3*T*(s>A-$a?s-A+$a:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,Rr(c,S,v,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Rr(t,S,v,3*T,2*T),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ws-1),T=c/A,S=isFinite(c)?1+Math.floor(_*T):ws;S>ws&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ws}`);const v=[];let U=0;for(let z=0;z<ws;++z){const Z=z/T,w=Math.exp(-Z*Z/2);v.push(w),z===0?U+=w:z<S&&(U+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/U;b.envMap.value=t.texture,b.samples.value=S,b.weights.value=v,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:D}=this;b.dTheta.value=A,b.mipInt.value=D-s;const P=this._sizeLods[l],I=3*P*(l>D-$a?l-D+$a:0),F=4*(this._cubeSize-P);Rr(i,I,F,3*P,2*P),m.setRenderTarget(i),m.render(x,ko)}}function JE(o){const t=[],i=[],s=[];let l=o;const c=o-$a+1+yx.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-$a?m=yx[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,b=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,T=3,S=2,v=1,U=new Float32Array(T*A*M),D=new Float32Array(S*A*M),P=new Float32Array(v*A*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,Z=F>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(w,T*A*F),D.set(b,S*A*F);const N=[F,F,F,F,F,F];P.set(N,v*A*F)}const I=new xi;I.setAttribute("position",new Hi(U,T)),I.setAttribute("uv",new Hi(D,S)),I.setAttribute("faceIndex",new Hi(P,v)),s.push(new Ci(I,null)),l>$a&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Mx(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=Vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function $E(o,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function eT(o,t,i){const s=new Float32Array(ws),l=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Ex(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Tx(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function tT(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Zd||m===Kd,_=m===Us||m===Ur;if(p||_){let x=t.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new Sx(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Sx(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("WebGLRenderer: "+s+" extension not supported."),l}}}function iT(o,t,i,s){const l={},c=new WeakMap;function d(x){const b=x.target;b.index!==null&&t.remove(b.index);for(const A in b.attributes)t.remove(b.attributes[A]);b.removeEventListener("dispose",d),delete l[b.id];const M=c.get(b);M&&(t.remove(M),c.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const M in b)t.update(b[M],o.ARRAY_BUFFER)}function p(x){const b=[],M=x.index,A=x.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let D=0,P=U.length;D<P;D+=3){const I=U[D+0],F=U[D+1],z=U[D+2];b.push(I,F,F,z,z,I)}}else if(A!==void 0){const U=A.array;T=A.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const I=D+0,F=D+1,z=D+2;b.push(I,F,F,z,z,I)}}else return;const S=new(dv(b)?vv:xv)(b,1);S.version=T;const v=c.get(x);v&&t.remove(v),c.set(x,S)}function _(x){const b=c.get(x);if(b){const M=x.index;M!==null&&b.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function aT(o,t,i){let s;function l(b){s=b}let c,d;function h(b){c=b.type,d=b.bytesPerElement}function m(b,M){o.drawElements(s,M,c,b*d),i.update(M,s,1)}function p(b,M,A){A!==0&&(o.drawElementsInstanced(s,M,c,b*d,A),i.update(M,s,A))}function _(b,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,b,0,A);let S=0;for(let v=0;v<A;v++)S+=M[v];i.update(S,s,1)}function x(b,M,A,T){if(A===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<b.length;v++)p(b[v]/d,M[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,b,0,T,0,A);let v=0;for(let U=0;U<A;U++)v+=M[U]*T[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function sT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rT(o,t,i){const s=new WeakMap,l=new an;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let b=s.get(h);if(b===void 0||b.count!==x){let N=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var M=N;b!==void 0&&b.texture.dispose();const A=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let I=h.attributes.position.count*P,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*F*4*x),Z=new hv(z,I,F,x);Z.type=Ii,Z.needsUpdate=!0;const w=P*4;for(let V=0;V<x;V++){const ie=v[V],ae=U[V],he=D[V],oe=I*F*4*V;for(let B=0;B<ie.count;B++){const k=B*w;A===!0&&(l.fromBufferAttribute(ie,B),z[oe+k+0]=l.x,z[oe+k+1]=l.y,z[oe+k+2]=l.z,z[oe+k+3]=0),T===!0&&(l.fromBufferAttribute(ae,B),z[oe+k+4]=l.x,z[oe+k+5]=l.y,z[oe+k+6]=l.z,z[oe+k+7]=0),S===!0&&(l.fromBufferAttribute(he,B),z[oe+k+8]=l.x,z[oe+k+9]=l.y,z[oe+k+10]=l.z,z[oe+k+11]=he.itemSize===4?l.w:1)}}b={count:x,texture:Z,size:new Ct(I,F)},s.set(h,b),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const T=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:c}}function oT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const lT={[Kx]:"LINEAR_TONE_MAPPING",[Qx]:"REINHARD_TONE_MAPPING",[Jx]:"CINEON_TONE_MAPPING",[$x]:"ACES_FILMIC_TONE_MAPPING",[tv]:"AGX_TONE_MAPPING",[nv]:"NEUTRAL_TONE_MAPPING",[ev]:"CUSTOM_TONE_MAPPING"};function cT(o,t,i,s,l){const c=new ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new ki(t,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),h=new xi;h.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const m=new $S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ci(h,m),_=new wv(-1,1,1,-1,0,1);let x=null,b=null,M=!1,A,T=null,S=[],v=!1;this.setSize=function(U,D){c.setSize(U,D),d.setSize(U,D);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(U,D)}},this.setEffects=function(U){S=U,v=S.length>0&&S[0].isRenderPass===!0;const D=c.width,P=c.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(D,P)}},this.begin=function(U,D){if(M||U.toneMapping===Fi&&S.length===0)return!1;if(T=D,D!==null){const P=D.width,I=D.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return v===!1&&U.setRenderTarget(c),A=U.toneMapping,U.toneMapping=Fi,!0},this.hasRenderPass=function(){return v},this.end=function(U,D){U.toneMapping=A,M=!0;let P=c,I=d;for(let F=0;F<S.length;F++){const z=S[F];if(z.enabled!==!1&&(z.render(U,I,P,D),z.needsSwap!==!1)){const Z=P;P=I,I=Z}}if(x!==U.outputColorSpace||b!==U.toneMapping){x=U.outputColorSpace,b=U.toneMapping,m.defines={},Tt.getTransfer(x)===kt&&(m.defines.SRGB_TRANSFER="");const F=lT[b];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(T),U.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Cv=new In,Uh=new qo(1,1),Nv=new hv,Dv=new wS,Uv=new bv,Ax=[],wx=[],Rx=new Float32Array(16),Cx=new Float32Array(9),Nx=new Float32Array(4);function Br(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Ax[l];if(c===void 0&&(c=new Float32Array(l),Ax[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Yc(o,t){let i=wx[t];i===void 0&&(i=new Int32Array(t),wx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function uT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function pT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Nx.set(s),o.uniformMatrix2fv(this.addr,!1,Nx),gn(i,s)}}function mT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Cx.set(s),o.uniformMatrix3fv(this.addr,!1,Cx),gn(i,s)}}function gT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Rx.set(s),o.uniformMatrix4fv(this.addr,!1,Rx),gn(i,s)}}function xT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function bT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function TT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Uh.compareFunction=i.isReversedDepthBuffer()?Xh:jh,c=Uh):c=Cv,i.setTexture2D(t||c,l)}function AT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Dv,l)}function wT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Uv,l)}function RT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Nv,l)}function CT(o){switch(o){case 5126:return uT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return xT;case 35667:case 35671:return vT;case 35668:case 35672:return _T;case 35669:case 35673:return yT;case 5125:return bT;case 36294:return ST;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return RT}}function NT(o,t){o.uniform1fv(this.addr,t)}function DT(o,t){const i=Br(t,this.size,2);o.uniform2fv(this.addr,i)}function UT(o,t){const i=Br(t,this.size,3);o.uniform3fv(this.addr,i)}function LT(o,t){const i=Br(t,this.size,4);o.uniform4fv(this.addr,i)}function OT(o,t){const i=Br(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function PT(o,t){const i=Br(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function zT(o,t){const i=Br(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function IT(o,t){o.uniform1iv(this.addr,t)}function BT(o,t){o.uniform2iv(this.addr,t)}function FT(o,t){o.uniform3iv(this.addr,t)}function kT(o,t){o.uniform4iv(this.addr,t)}function HT(o,t){o.uniform1uiv(this.addr,t)}function GT(o,t){o.uniform2uiv(this.addr,t)}function VT(o,t){o.uniform3uiv(this.addr,t)}function jT(o,t){o.uniform4uiv(this.addr,t)}function XT(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Uh:d=Cv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function WT(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Dv,c[d])}function qT(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Uv,c[d])}function YT(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Nv,c[d])}function ZT(o){switch(o){case 5126:return NT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return IT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return kT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class KT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=CT(i.type)}}class QT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZT(i.type)}}class JT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function Dx(o,t){o.seq.push(t),o.map[t.id]=t}function $T(o,t,i){const s=o.name,l=s.length;for(zd.lastIndex=0;;){const c=zd.exec(s),d=zd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Dx(i,p===void 0?new KT(h,o,t):new QT(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new JT(h),Dx(i,x)),i=x}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);$T(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Ux(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const eA=37297;let tA=0;function nA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Lx=new ft;function iA(o){Tt._getMatrix(Lx,Tt.workingColorSpace,o);const t=`mat3( ${Lx.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ox(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+nA(o.getShaderSource(t),h)}else return c}function aA(o,t){const i=iA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[Kx]:"Linear",[Qx]:"Reinhard",[Jx]:"Cineon",[$x]:"ACESFilmic",[tv]:"AgX",[nv]:"Neutral",[ev]:"Custom"};function rA(o,t){const i=sA[t];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new $;function oA(){Tt.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function cA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Vo(o){return o!==""}function Px(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(o){return o.replace(fA,hA)}const dA=new Map;function hA(o,t){let i=dt[t];if(i===void 0){const s=dA.get(t);if(s!==void 0)i=dt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Lh(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ix(o){return o.replace(pA,mA)}function mA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gA={[Uc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function xA(o){return gA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function _A(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":vA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const yA={[Ur]:"ENVMAP_MODE_REFRACTION"};function bA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":yA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SA={[Zx]:"ENVMAP_BLENDING_MULTIPLY",[lS]:"ENVMAP_BLENDING_MIX",[cS]:"ENVMAP_BLENDING_ADD"};function MA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":SA[o.combine]||"ENVMAP_BLENDING_NONE"}function EA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=xA(i),p=_A(i),_=bA(i),x=MA(i),b=EA(i),M=lA(i),A=cA(c),T=l.createProgram();let S,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(S=[Bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[Bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Fi?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Lh(d),d=Px(d,i),d=zx(d,i),h=Lh(h),h=Px(h,i),h=zx(h,i),d=Ix(d),h=Ix(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=U+S+d,P=U+v+h,I=Ux(l,l.VERTEX_SHADER,D),F=Ux(l,l.FRAGMENT_SHADER,P);l.attachShader(T,I),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(o.debug.checkShaderErrors){const ie=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(I)||"",he=l.getShaderInfoLog(F)||"",oe=ie.trim(),B=ae.trim(),k=he.trim();let Q=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,I,F);else{const _e=Ox(l,I,"vertex"),O=Ox(l,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+oe+`
`+_e+`
`+O)}else oe!==""?at("WebGLProgram: Program Info Log:",oe):(B===""||k==="")&&(ye=!1);ye&&(V.diagnostics={runnable:Q,programLog:oe,vertexShader:{log:B,prefix:S},fragmentShader:{log:k,prefix:v}})}l.deleteShader(I),l.deleteShader(F),Z=new Ic(l,T),w=uA(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(T,eA)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let AA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RA(t),i.set(t,s)),s}}class RA{constructor(t){this.id=AA++,this.code=t,this.usedTimes=0}}function CA(o,t,i,s,l,c,d){const h=new mv,m=new wA,p=new Set,_=[],x=new Map,b=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,N,V,ie,ae){const he=ie.fog,oe=ae.geometry,B=w.isMeshStandardMaterial?ie.environment:null,k=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),Q=k&&k.mapping===Vc?k.image.height:null,ye=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const _e=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,O=_e!==void 0?_e.length:0;let ne=0;oe.morphAttributes.position!==void 0&&(ne=1),oe.morphAttributes.normal!==void 0&&(ne=2),oe.morphAttributes.color!==void 0&&(ne=3);let ge,Ee,Fe,W;if(ye){const Et=zi[ye];ge=Et.vertexShader,Ee=Et.fragmentShader}else ge=w.vertexShader,Ee=w.fragmentShader,m.update(w),Fe=m.getVertexShaderID(w),W=m.getFragmentShaderID(w);const ce=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),He=ae.isInstancedMesh===!0,Ge=ae.isBatchedMesh===!0,ht=!!w.map,$t=!!w.matcap,xt=!!k,pt=!!w.aoMap,Nt=!!w.lightMap,ot=!!w.bumpMap,en=!!w.normalMap,G=!!w.displacementMap,Yt=!!w.emissiveMap,Mt=!!w.metalnessMap,Ot=!!w.roughnessMap,Ye=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,q=w.iridescence>0,pe=w.sheen>0,be=w.transmission>0,fe=Ye&&!!w.anisotropyMap,Ke=L&&!!w.clearcoatMap,Ne=L&&!!w.clearcoatNormalMap,Xe=L&&!!w.clearcoatRoughnessMap,nt=q&&!!w.iridescenceMap,Me=q&&!!w.iridescenceThicknessMap,Te=pe&&!!w.sheenColorMap,Be=pe&&!!w.sheenRoughnessMap,ze=!!w.specularMap,De=!!w.specularColorMap,ct=!!w.specularIntensityMap,X=be&&!!w.transmissionMap,Le=be&&!!w.thicknessMap,Ae=!!w.gradientMap,Ie=!!w.alphaMap,Se=w.alphaTest>0,ve=!!w.alphaHash,Re=!!w.extensions;let it=Fi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=o.toneMapping);const zt={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:Ee,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Ge,batchingColor:Ge&&ae._colorsTexture!==null,instancing:He,instancingColor:He&&ae.instanceColor!==null,instancingMorph:He&&ae.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Or,alphaToCoverage:!!w.alphaToCoverage,map:ht,matcap:$t,envMap:xt,envMapMode:xt&&k.mapping,envMapCubeUVHeight:Q,aoMap:pt,lightMap:Nt,bumpMap:ot,normalMap:en,displacementMap:G,emissiveMap:Yt,normalMapObjectSpace:en&&w.normalMapType===dS,normalMapTangentSpace:en&&w.normalMapType===fv,metalnessMap:Mt,roughnessMap:Ot,anisotropy:Ye,anisotropyMap:fe,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:Me,sheen:pe,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:De,specularIntensityMap:ct,transmission:be,transmissionMap:X,thicknessMap:Le,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:ve,combine:w.combine,mapUv:ht&&T(w.map.channel),aoMapUv:pt&&T(w.aoMap.channel),lightMapUv:Nt&&T(w.lightMap.channel),bumpMapUv:ot&&T(w.bumpMap.channel),normalMapUv:en&&T(w.normalMap.channel),displacementMapUv:G&&T(w.displacementMap.channel),emissiveMapUv:Yt&&T(w.emissiveMap.channel),metalnessMapUv:Mt&&T(w.metalnessMap.channel),roughnessMapUv:Ot&&T(w.roughnessMap.channel),anisotropyMapUv:fe&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(w.sheenRoughnessMap.channel),specularMapUv:ze&&T(w.specularMap.channel),specularColorMapUv:De&&T(w.specularColorMap.channel),specularIntensityMapUv:ct&&T(w.specularIntensityMap.channel),transmissionMapUv:X&&T(w.transmissionMap.channel),thicknessMapUv:Le&&T(w.thicknessMap.channel),alphaMapUv:Ie&&T(w.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(en||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!oe.attributes.uv&&(ht||Ie),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Ce,skinning:ae.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pa,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function v(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)N.push(V),N.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(U(N,w),D(N,w),N.push(o.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function U(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function D(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const N=A[w.type];let V;if(N){const ie=zi[N];V=kS.clone(ie.uniforms)}else V=w.uniforms;return V}function I(w,N){let V=x.get(N);return V!==void 0?++V.usedTimes:(V=new TA(o,N,w,c),_.push(V),x.set(N,V)),V}function F(w){if(--w.usedTimes===0){const N=_.indexOf(w);_[N]=_[_.length-1],_.pop(),x.delete(w.cacheKey),w.destroy()}}function z(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:I,releaseProgram:F,releaseShaderCache:z,programs:_,dispose:Z}}function NA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function DA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Fx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function kx(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x,b,M,A,T,S){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:b,material:M,groupOrder:A,renderOrder:x.renderOrder,z:T,group:S},o[t]=v):(v.id=x.id,v.object=x,v.geometry=b,v.material=M,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=T,v.group=S),t++,v}function h(x,b,M,A,T,S){const v=d(x,b,M,A,T,S);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,b,M,A,T,S){const v=d(x,b,M,A,T,S);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,b){i.length>1&&i.sort(x||DA),s.length>1&&s.sort(b||Fx),l.length>1&&l.sort(b||Fx)}function _(){for(let x=t,b=o.length;x<b;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function UA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new kx,o.set(s,[d])):l>=c.length?(d=new kx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function LA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new bt};break;case"SpotLight":i={position:new $,direction:new $,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function OA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let PA=0;function zA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function IA(o){const t=new LA,i=OA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new Jt,d=new Jt;function h(p){let _=0,x=0,b=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,T=0,S=0,v=0,U=0,D=0,P=0,I=0,F=0,z=0;p.sort(zA);for(let w=0,N=p.length;w<N;w++){const V=p[w],ie=V.color,ae=V.intensity,he=V.distance;let oe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Lr?oe=V.shadow.map.texture:oe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ie.r*ae,x+=ie.g*ae,b+=ie.b*ae;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],ae);z++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const k=V.shadow,Q=i.get(V);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=oe,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(ie).multiplyScalar(ae),B.distance=he,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[T]=B;const k=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,k.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[T]=k.matrix,V.castShadow){const Q=i.get(V);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=oe,P++}T++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(ie).multiplyScalar(ae),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const k=V.shadow,Q=i.get(V);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,s.pointShadow[A]=Q,s.pointShadowMap[A]=oe,s.pointShadowMatrix[A]=V.shadow.matrix,D++}s.point[A]=B,A++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ae),B.groundColor.copy(V.groundColor).multiplyScalar(ae),s.hemi[v]=B,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=b;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==T||Z.rectAreaLength!==S||Z.hemiLength!==v||Z.numDirectionalShadows!==U||Z.numPointShadows!==D||Z.numSpotShadows!==P||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=T,Z.rectAreaLength=S,Z.hemiLength=v,Z.numDirectionalShadows=U,Z.numPointShadows=D,Z.numSpotShadows=P,Z.numSpotMaps=I,Z.numLightProbes=z,s.version=PA++)}function m(p,_){let x=0,b=0,M=0,A=0,T=0;const S=_.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const D=p[v];if(D.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),x++}else if(D.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const P=s.rectArea[A];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const P=s.point[b];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),b++}else if(D.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function Hx(o){const t=new IA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function BA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Hx(o),t.set(l,[h])):c>=d.length?(h=new Hx(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
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
}`,HA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],GA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gx=new Jt,Ho=new $,Id=new $;function VA(o,t,i){let s=new Yh;const l=new Ct,c=new Ct,d=new an,h=new nM,m=new iM,p={},_=i.maxTextureSize,x={[es]:Yn,[Yn]:es,[pa]:pa},b=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:FA,fragmentShader:kA}),M=b.clone();M.defines.HORIZONTAL_PASS=1;const A=new xi;A.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ci(A,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let v=this.type;this.render=function(F,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;F.type===Vb&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Uc);const w=o.getRenderTarget(),N=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ie=o.state;ie.setBlending(ga),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ae=v!==this.type;ae&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(oe=>oe.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,oe=F.length;he<oe;he++){const B=F[he],k=B.shadow;if(k===void 0){at("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const Q=k.getFrameExtents();if(l.multiply(Q),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Q.x),l.x=c.x*Q.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Q.y),l.y=c.y*Q.y,k.mapSize.y=c.y)),k.map===null||ae===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Go){if(B.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ki(l.x,l.y,{format:Lr,type:va,minFilter:On,magFilter:On,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new qo(l.x,l.y,Ii),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=_a,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else{B.isPointLight?(k.map=new Sv(l.x),k.map.depthTexture=new QS(l.x,Gi)):(k.map=new ki(l.x,l.y),k.map.depthTexture=new qo(l.x,l.y,Gi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=_a;const _e=o.state.buffers.depth.getReversed();this.type===Uc?(k.map.depthTexture.compareFunction=_e?Xh:jh,k.map.depthTexture.minFilter=On,k.map.depthTexture.magFilter=On):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn)}k.camera.updateProjectionMatrix()}const ye=k.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ye;_e++){if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,_e),o.clear();else{_e===0&&(o.setRenderTarget(k.map),o.clear());const O=k.getViewport(_e);d.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),ie.viewport(d)}if(B.isPointLight){const O=k.camera,ne=k.matrix,ge=B.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),Ho.setFromMatrixPosition(B.matrixWorld),O.position.copy(Ho),Id.copy(O.position),Id.add(HA[_e]),O.up.copy(GA[_e]),O.lookAt(Id),O.updateMatrixWorld(),ne.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Gx.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Gx,O.coordinateSystem,O.reversedDepth)}else k.updateMatrices(B);s=k.getFrustum(),P(z,Z,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Go&&U(k,Z),k.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(w,N,V)};function U(F,z){const Z=t.update(T);b.defines.VSM_SAMPLES!==F.blurSamples&&(b.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,b.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:Lr,type:va})),b.uniforms.shadow_pass.value=F.map.depthTexture,b.uniforms.resolution.value=F.mapSize,b.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,Z,b,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,Z,M,T,null)}function D(F,z,Z,w){let N=null;const V=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)N=V;else if(N=Z.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ie=N.uuid,ae=z.uuid;let he=p[ie];he===void 0&&(he={},p[ie]=he);let oe=he[ae];oe===void 0&&(oe=N.clone(),he[ae]=oe,z.addEventListener("dispose",I)),N=oe}if(N.visible=z.visible,N.wireframe=z.wireframe,w===Go?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:x[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ie=o.properties.get(N);ie.light=Z}return N}function P(F,z,Z,w,N){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===Go)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ae=t.update(F),he=F.material;if(Array.isArray(he)){const oe=ae.groups;for(let B=0,k=oe.length;B<k;B++){const Q=oe[B],ye=he[Q.materialIndex];if(ye&&ye.visible){const _e=D(F,ye,w,N);F.onBeforeShadow(o,F,z,Z,ae,_e,Q),o.renderBufferDirect(Z,null,ae,_e,F,Q),F.onAfterShadow(o,F,z,Z,ae,_e,Q)}}}else if(he.visible){const oe=D(F,he,w,N);F.onBeforeShadow(o,F,z,Z,ae,oe,null),o.renderBufferDirect(Z,null,ae,oe,F,null),F.onAfterShadow(o,F,z,Z,ae,oe,null)}}const ie=F.children;for(let ae=0,he=ie.length;ae<he;ae++)P(ie[ae],z,Z,w,N)}function I(F){F.target.removeEventListener("dispose",I);for(const Z in p){const w=p[Z],N=F.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const jA={[Gd]:Vd,[jd]:qd,[Xd]:Yd,[Dr]:Wd,[Vd]:Gd,[qd]:jd,[Yd]:Xd,[Wd]:Dr};function XA(o,t){function i(){let X=!1;const Le=new an;let Ae=null;const Ie=new an(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!X&&(o.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){X=Se},setClear:function(Se,ve,Re,it,zt){zt===!0&&(Se*=it,ve*=it,Re*=it),Le.set(Se,ve,Re,it),Ie.equals(Le)===!1&&(o.clearColor(Se,ve,Re,it),Ie.copy(Le))},reset:function(){X=!1,Ae=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,Ae=null,Ie=null,Se=null;return{setReversed:function(ve){if(Le!==ve){const Re=t.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Le=ve;const it=Se;Se=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(ve){ve?ce(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(ve){Ae!==ve&&!X&&(o.depthMask(ve),Ae=ve)},setFunc:function(ve){if(Le&&(ve=jA[ve]),Ie!==ve){switch(ve){case Gd:o.depthFunc(o.NEVER);break;case Vd:o.depthFunc(o.ALWAYS);break;case jd:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Xd:o.depthFunc(o.EQUAL);break;case Wd:o.depthFunc(o.GEQUAL);break;case qd:o.depthFunc(o.GREATER);break;case Yd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ve}},setLocked:function(ve){X=ve},setClear:function(ve){Se!==ve&&(Le&&(ve=1-ve),o.clearDepth(ve),Se=ve)},reset:function(){X=!1,Ae=null,Ie=null,Se=null,Le=!1}}}function l(){let X=!1,Le=null,Ae=null,Ie=null,Se=null,ve=null,Re=null,it=null,zt=null;return{setTest:function(Et){X||(Et?ce(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!X&&(o.stencilMask(Et),Le=Et)},setFunc:function(Et,Nn,vi){(Ae!==Et||Ie!==Nn||Se!==vi)&&(o.stencilFunc(Et,Nn,vi),Ae=Et,Ie=Nn,Se=vi)},setOp:function(Et,Nn,vi){(ve!==Et||Re!==Nn||it!==vi)&&(o.stencilOp(Et,Nn,vi),ve=Et,Re=Nn,it=vi)},setLocked:function(Et){X=Et},setClear:function(Et){zt!==Et&&(o.clearStencil(Et),zt=Et)},reset:function(){X=!1,Le=null,Ae=null,Ie=null,Se=null,ve=null,Re=null,it=null,zt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},b=new WeakMap,M=[],A=null,T=!1,S=null,v=null,U=null,D=null,P=null,I=null,F=null,z=new bt(0,0,0),Z=0,w=!1,N=null,V=null,ie=null,ae=null,he=null;const oe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=k>=2);let ye=null,_e={};const O=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ge=new an().fromArray(O),Ee=new an().fromArray(ne);function Fe(X,Le,Ae,Ie){const Se=new Uint8Array(4),ve=o.createTexture();o.bindTexture(X,ve),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Ae;Re++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Le+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return ve}const W={};W[o.TEXTURE_2D]=Fe(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=Fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=Fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=Fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ce(o.DEPTH_TEST),d.setFunc(Dr),ot(!1),en(kg),ce(o.CULL_FACE),pt(ga);function ce(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Ce(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function He(X,Le){return x[X]!==Le?(o.bindFramebuffer(X,Le),x[X]=Le,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Le),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let Ae=M,Ie=!1;if(X){Ae=b.get(Le),Ae===void 0&&(Ae=[],b.set(Le,Ae));const Se=X.textures;if(Ae.length!==Se.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Re=Se.length;ve<Re;ve++)Ae[ve]=o.COLOR_ATTACHMENT0+ve;Ae.length=Se.length,Ie=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ae)}function ht(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const $t={[As]:o.FUNC_ADD,[Xb]:o.FUNC_SUBTRACT,[Wb]:o.FUNC_REVERSE_SUBTRACT};$t[qb]=o.MIN,$t[Yb]=o.MAX;const xt={[Zb]:o.ZERO,[Kb]:o.ONE,[Qb]:o.SRC_COLOR,[kd]:o.SRC_ALPHA,[iS]:o.SRC_ALPHA_SATURATE,[tS]:o.DST_COLOR,[$b]:o.DST_ALPHA,[Jb]:o.ONE_MINUS_SRC_COLOR,[Hd]:o.ONE_MINUS_SRC_ALPHA,[nS]:o.ONE_MINUS_DST_COLOR,[eS]:o.ONE_MINUS_DST_ALPHA,[aS]:o.CONSTANT_COLOR,[sS]:o.ONE_MINUS_CONSTANT_COLOR,[rS]:o.CONSTANT_ALPHA,[oS]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Le,Ae,Ie,Se,ve,Re,it,zt,Et){if(X===ga){T===!0&&(Ce(o.BLEND),T=!1);return}if(T===!1&&(ce(o.BLEND),T=!0),X!==jb){if(X!==S||Et!==w){if((v!==As||P!==As)&&(o.blendEquation(o.FUNC_ADD),v=As,P=As),Et)switch(X){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFunc(o.ONE,o.ONE);break;case Gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}U=null,D=null,I=null,F=null,z.set(0,0,0),Z=0,S=X,w=Et}return}Se=Se||Le,ve=ve||Ae,Re=Re||Ie,(Le!==v||Se!==P)&&(o.blendEquationSeparate($t[Le],$t[Se]),v=Le,P=Se),(Ae!==U||Ie!==D||ve!==I||Re!==F)&&(o.blendFuncSeparate(xt[Ae],xt[Ie],xt[ve],xt[Re]),U=Ae,D=Ie,I=ve,F=Re),(it.equals(z)===!1||zt!==Z)&&(o.blendColor(it.r,it.g,it.b,zt),z.copy(it),Z=zt),S=X,w=!1}function Nt(X,Le){X.side===pa?Ce(o.CULL_FACE):ce(o.CULL_FACE);let Ae=X.side===Yn;Le&&(Ae=!Ae),ot(Ae),X.blending===Cr&&X.transparent===!1?pt(ga):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function en(X){X!==Hb?(ce(o.CULL_FACE),X!==V&&(X===kg?o.cullFace(o.BACK):X===Gb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),V=X}function G(X){X!==ie&&(B&&o.lineWidth(X),ie=X)}function Yt(X,Le,Ae){X?(ce(o.POLYGON_OFFSET_FILL),(ae!==Le||he!==Ae)&&(o.polygonOffset(Le,Ae),ae=Le,he=Ae)):Ce(o.POLYGON_OFFSET_FILL)}function Mt(X){X?ce(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=o.TEXTURE0+oe-1),ye!==X&&(o.activeTexture(X),ye=X)}function Ye(X,Le,Ae){Ae===void 0&&(ye===null?Ae=o.TEXTURE0+oe-1:Ae=ye);let Ie=_e[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},_e[Ae]=Ie),(Ie.type!==X||Ie.texture!==Le)&&(ye!==Ae&&(o.activeTexture(Ae),ye=Ae),o.bindTexture(X,Le||W[X]),Ie.type=X,Ie.texture=Le)}function L(){const X=_e[ye];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function pe(){try{o.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function be(){try{o.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ne(){try{o.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Xe(){try{o.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function nt(){try{o.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Me(){try{o.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Te(X){ge.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function Be(X){Ee.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ee.copy(X))}function ze(X,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Ie=Ae.get(X);Ie===void 0&&(Ie=o.getUniformBlockIndex(Le,X.name),Ae.set(X,Ie))}function De(X,Le){const Ie=p.get(Le).get(X);m.get(Le)!==Ie&&(o.uniformBlockBinding(Le,Ie,X.__bindingPointIndex),m.set(Le,Ie))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ye=null,_e={},x={},b=new WeakMap,M=[],A=null,T=!1,S=null,v=null,U=null,D=null,P=null,I=null,F=null,z=new bt(0,0,0),Z=0,w=!1,N=null,V=null,ie=null,ae=null,he=null,ge.set(0,0,o.canvas.width,o.canvas.height),Ee.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ce,disable:Ce,bindFramebuffer:He,drawBuffers:Ge,useProgram:ht,setBlending:pt,setMaterial:Nt,setFlipSided:ot,setCullFace:en,setLineWidth:G,setPolygonOffset:Yt,setScissorTest:Mt,activeTexture:Ot,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:nt,texImage3D:Me,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Ne,texStorage3D:Xe,texSubImage2D:pe,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Te,viewport:Be,reset:ct}}function WA(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,_=new WeakMap;let x;const b=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):kc("canvas")}function T(L,E,q){let pe=1;const be=Ye(L);if((be.width>q||be.height>q)&&(pe=q/Math.max(be.width,be.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*be.width),Ke=Math.floor(pe*be.height);x===void 0&&(x=A(fe,Ke));const Ne=E?A(fe,Ke):x;return Ne.width=fe,Ne.height=Ke,Ne.getContext("2d").drawImage(L,0,0,fe,Ke),at("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+fe+"x"+Ke+")."),Ne}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(L,E,q,pe,be=!1){if(L!==null){if(o[L]!==void 0)return o[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=E;if(E===o.RED&&(q===o.FLOAT&&(fe=o.R32F),q===o.HALF_FLOAT&&(fe=o.R16F),q===o.UNSIGNED_BYTE&&(fe=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(fe=o.R8UI),q===o.UNSIGNED_SHORT&&(fe=o.R16UI),q===o.UNSIGNED_INT&&(fe=o.R32UI),q===o.BYTE&&(fe=o.R8I),q===o.SHORT&&(fe=o.R16I),q===o.INT&&(fe=o.R32I)),E===o.RG&&(q===o.FLOAT&&(fe=o.RG32F),q===o.HALF_FLOAT&&(fe=o.RG16F),q===o.UNSIGNED_BYTE&&(fe=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(fe=o.RG8UI),q===o.UNSIGNED_SHORT&&(fe=o.RG16UI),q===o.UNSIGNED_INT&&(fe=o.RG32UI),q===o.BYTE&&(fe=o.RG8I),q===o.SHORT&&(fe=o.RG16I),q===o.INT&&(fe=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),q===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),q===o.UNSIGNED_INT&&(fe=o.RGB32UI),q===o.BYTE&&(fe=o.RGB8I),q===o.SHORT&&(fe=o.RGB16I),q===o.INT&&(fe=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),q===o.UNSIGNED_INT&&(fe=o.RGBA32UI),q===o.BYTE&&(fe=o.RGBA8I),q===o.SHORT&&(fe=o.RGBA16I),q===o.INT&&(fe=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),E===o.RGBA){const Ke=be?Bc:Tt.getTransfer(pe);q===o.FLOAT&&(fe=o.RGBA32F),q===o.HALF_FLOAT&&(fe=o.RGBA16F),q===o.UNSIGNED_BYTE&&(fe=Ke===kt?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),fe}function P(L,E){let q;return L?E===null||E===Gi||E===Xo?q=o.DEPTH24_STENCIL8:E===Ii?q=o.DEPTH32F_STENCIL8:E===jo&&(q=o.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Xo?q=o.DEPTH_COMPONENT24:E===Ii?q=o.DEPTH_COMPONENT32F:E===jo&&(q=o.DEPTH_COMPONENT16),q}function I(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&_.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),N(E)}function Z(L){const E=s.get(L);if(E.__webglInit===void 0)return;const q=L.source,pe=b.get(q);if(pe){const be=pe[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&w(L),Object.keys(pe).length===0&&b.delete(q)}s.remove(L)}function w(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const q=L.source,pe=b.get(q);delete pe[E.__cacheKey],d.memory.textures--}function N(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let be=0;be<E.__webglFramebuffer[pe].length;be++)o.deleteFramebuffer(E.__webglFramebuffer[pe][be]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let pe=0,be=q.length;pe<be;pe++){const fe=s.get(q[pe]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),d.memory.textures--),s.remove(q[pe])}s.remove(L)}let V=0;function ie(){V=0}function ae(){const L=V;return L>=l.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function he(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function oe(L,E){const q=s.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const pe=L.image;if(pe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function B(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){W(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function k(L,E){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){W(q,L,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function Q(L,E){const q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){ce(q,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const ye={[Qd]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},_e={[Cn]:o.NEAREST,[uS]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},O={[hS]:o.NEVER,[vS]:o.ALWAYS,[pS]:o.LESS,[jh]:o.LEQUAL,[mS]:o.EQUAL,[Xh]:o.GEQUAL,[gS]:o.GREATER,[xS]:o.NOTEQUAL};function ne(L,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===sd||E.magFilter===cc||E.magFilter===Rs||E.minFilter===On||E.minFilter===sd||E.minFilter===cc||E.minFilter===Rs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ye[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ye[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ye[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,_e[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==cc&&E.minFilter!==Rs||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ge(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let be=b.get(pe);be===void 0&&(be={},b.set(pe,be));const fe=he(E);if(fe!==L.__cacheKey){be[fe]===void 0&&(be[fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),be[fe].usedTimes++;const Ke=be[L.__cacheKey];Ke!==void 0&&(be[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(E)),L.__cacheKey=fe,L.__webglTexture=be[fe].texture}return q}function Ee(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Fe(L,E,q,pe){const fe=L.updateRanges;if(fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,pe,E.data);else{fe.sort((Me,Te)=>Me.start-Te.start);let Ke=0;for(let Me=1;Me<fe.length;Me++){const Te=fe[Ke],Be=fe[Me],ze=Te.start+Te.count,De=Ee(Be.start,E.width,4),ct=Ee(Te.start,E.width,4);Be.start<=ze+1&&De===ct&&Ee(Be.start+Be.count-1,E.width,4)===De?Te.count=Math.max(Te.count,Be.start+Be.count-Te.start):(++Ke,fe[Ke]=Be)}fe.length=Ke+1;const Ne=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),nt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Te=fe.length;Me<Te;Me++){const Be=fe[Me],ze=Math.floor(Be.start/4),De=Math.ceil(Be.count/4),ct=ze%E.width,X=Math.floor(ze/E.width),Le=De,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ct,X,Le,Ae,q,pe,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ne),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,nt)}}function W(L,E,q){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const be=ge(L,E),fe=E.source;i.bindTexture(pe,L.__webglTexture,o.TEXTURE0+q);const Ke=s.get(fe);if(fe.version!==Ke.__version||be===!0){i.activeTexture(o.TEXTURE0+q);const Ne=Tt.getPrimaries(Tt.workingColorSpace),Xe=E.colorSpace===Ja?null:Tt.getPrimaries(E.colorSpace),nt=E.colorSpace===Ja||Ne===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Me=T(E.image,!1,l.maxTextureSize);Me=Ot(E,Me);const Te=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let ze=D(E.internalFormat,Te,Be,E.colorSpace,E.isVideoTexture);ne(pe,E);let De;const ct=E.mipmaps,X=E.isVideoTexture!==!0,Le=Ke.__version===void 0||be===!0,Ae=fe.dataReady,Ie=I(E,Me);if(E.isDepthTexture)ze=P(E.format===Cs,E.type),Le&&(X?i.texStorage2D(o.TEXTURE_2D,1,ze,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,ze,Me.width,Me.height,0,Te,Be,null));else if(E.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,ct[0].width,ct[0].height);for(let Se=0,ve=ct.length;Se<ve;Se++)De=ct[Se],X?Ae&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,De.width,De.height,Te,Be,De.data):i.texImage2D(o.TEXTURE_2D,Se,ze,De.width,De.height,0,Te,Be,De.data);E.generateMipmaps=!1}else X?(Le&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,Me.width,Me.height),Ae&&Fe(E,Me,Te,Be)):i.texImage2D(o.TEXTURE_2D,0,ze,Me.width,Me.height,0,Te,Be,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ze,ct[0].width,ct[0].height,Me.depth);for(let Se=0,ve=ct.length;Se<ve;Se++)if(De=ct[Se],E.format!==Ri)if(Te!==null)if(X){if(Ae)if(E.layerUpdates.size>0){const Re=_x(De.width,De.height,E.format,E.type);for(const it of E.layerUpdates){const zt=De.data.subarray(it*Re/De.data.BYTES_PER_ELEMENT,(it+1)*Re/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,it,De.width,De.height,1,Te,zt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,Me.depth,Te,De.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,ze,De.width,De.height,Me.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,Me.depth,Te,Be,De.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Se,ze,De.width,De.height,Me.depth,0,Te,Be,De.data)}else{X&&Le&&i.texStorage2D(o.TEXTURE_2D,Ie,ze,ct[0].width,ct[0].height);for(let Se=0,ve=ct.length;Se<ve;Se++)De=ct[Se],E.format!==Ri?Te!==null?X?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,De.width,De.height,Te,De.data):i.compressedTexImage2D(o.TEXTURE_2D,Se,ze,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,De.width,De.height,Te,Be,De.data):i.texImage2D(o.TEXTURE_2D,Se,ze,De.width,De.height,0,Te,Be,De.data)}else if(E.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ze,Me.width,Me.height,Me.depth),Ae)if(E.layerUpdates.size>0){const Se=_x(Me.width,Me.height,E.format,E.type);for(const ve of E.layerUpdates){const Re=Me.data.subarray(ve*Se/Me.data.BYTES_PER_ELEMENT,(ve+1)*Se/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,Te,Be,Re)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,Be,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Me.width,Me.height,Me.depth,0,Te,Be,Me.data);else if(E.isData3DTexture)X?(Le&&i.texStorage3D(o.TEXTURE_3D,Ie,ze,Me.width,Me.height,Me.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,Be,Me.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Me.width,Me.height,Me.depth,0,Te,Be,Me.data);else if(E.isFramebufferTexture){if(Le)if(X)i.texStorage2D(o.TEXTURE_2D,Ie,ze,Me.width,Me.height);else{let Se=Me.width,ve=Me.height;for(let Re=0;Re<Ie;Re++)i.texImage2D(o.TEXTURE_2D,Re,ze,Se,ve,0,Te,Be,null),Se>>=1,ve>>=1}}else if(ct.length>0){if(X&&Le){const Se=Ye(ct[0]);i.texStorage2D(o.TEXTURE_2D,Ie,ze,Se.width,Se.height)}for(let Se=0,ve=ct.length;Se<ve;Se++)De=ct[Se],X?Ae&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,Te,Be,De):i.texImage2D(o.TEXTURE_2D,Se,ze,Te,Be,De);E.generateMipmaps=!1}else if(X){if(Le){const Se=Ye(Me);i.texStorage2D(o.TEXTURE_2D,Ie,ze,Se.width,Se.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,Be,Me)}else i.texImage2D(o.TEXTURE_2D,0,ze,Te,Be,Me);S(E)&&v(pe),Ke.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ce(L,E,q){if(E.image.length!==6)return;const pe=ge(L,E),be=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const fe=s.get(be);if(be.version!==fe.__version||pe===!0){i.activeTexture(o.TEXTURE0+q);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Ne=E.colorSpace===Ja?null:Tt.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ja||Ke===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!nt&&!Me?Te[ve]=T(E.image[ve],!0,l.maxCubemapSize):Te[ve]=Me?E.image[ve].image:E.image[ve],Te[ve]=Ot(E,Te[ve]);const Be=Te[0],ze=c.convert(E.format,E.colorSpace),De=c.convert(E.type),ct=D(E.internalFormat,ze,De,E.colorSpace),X=E.isVideoTexture!==!0,Le=fe.__version===void 0||pe===!0,Ae=be.dataReady;let Ie=I(E,Be);ne(o.TEXTURE_CUBE_MAP,E);let Se;if(nt){X&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,Be.width,Be.height);for(let ve=0;ve<6;ve++){Se=Te[ve].mipmaps;for(let Re=0;Re<Se.length;Re++){const it=Se[Re];E.format!==Ri?ze!==null?X?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,it.width,it.height,ze,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ct,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,it.width,it.height,ze,De,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ct,it.width,it.height,0,ze,De,it.data)}}}else{if(Se=E.mipmaps,X&&Le){Se.length>0&&Ie++;const ve=Ye(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,ze,De,Te[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,Te[ve].width,Te[ve].height,0,ze,De,Te[ve].data);for(let Re=0;Re<Se.length;Re++){const zt=Se[Re].image[ve].image;X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,zt.width,zt.height,ze,De,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ct,zt.width,zt.height,0,ze,De,zt.data)}}else{X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ze,De,Te[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,ze,De,Te[ve]);for(let Re=0;Re<Se.length;Re++){const it=Se[Re];X?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,ze,De,it.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ct,ze,De,it.image[ve])}}}S(E)&&v(o.TEXTURE_CUBE_MAP),fe.__version=be.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ce(L,E,q,pe,be,fe){const Ke=c.convert(q.format,q.colorSpace),Ne=c.convert(q.type),Xe=D(q.internalFormat,Ke,Ne,q.colorSpace),nt=s.get(E),Me=s.get(q);if(Me.__renderTarget=E,!nt.__hasExternalTextures){const Te=Math.max(1,E.width>>fe),Be=Math.max(1,E.height>>fe);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,fe,Xe,Te,Be,E.depth,0,Ke,Ne,null):i.texImage2D(be,fe,Xe,Te,Be,0,Ke,Ne,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,be,Me.__webglTexture,0,G(E)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,be,Me.__webglTexture,fe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(L,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,be=pe&&pe.isDepthTexture?pe.type:null,fe=P(E.stencilBuffer,be),Ke=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),fe,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,fe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,L)}else{const pe=E.textures;for(let be=0;be<pe.length;be++){const fe=pe[be],Ke=c.convert(fe.format,fe.colorSpace),Ne=c.convert(fe.type),Xe=D(fe.internalFormat,Ke,Ne,fe.colorSpace);Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Xe,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Xe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(L,E,q){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),be.__webglTexture===void 0){be.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),Me=c.convert(E.depthTexture.type);let Te;E.depthTexture.format===_a?Te=o.DEPTH_COMPONENT24:E.depthTexture.format===Cs&&(Te=o.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,E.width,E.height,0,nt,Me,null)}}else oe(E.depthTexture,0);const fe=be.__webglTexture,Ke=G(E),Ne=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xe=E.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===_a)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ne,fe,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ne,fe,0);else if(E.depthTexture.format===Cs)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ne,fe,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function ht(L){const E=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",be)};pe.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Ge(E.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Ge(E.__webglFramebuffer[0],L,0):Ge(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),He(E.__webglDepthbuffer[pe],L,!1);else{const be=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,fe)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),He(E.__webglDepthbuffer,L,!1);else{const be=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,fe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(L,E,q){const pe=s.get(L);E!==void 0&&Ce(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ht(L)}function xt(L){const E=L.texture,q=s.get(L),pe=s.get(E);L.addEventListener("dispose",z);const be=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ke=be.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,d.memory.textures++),fe){q.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ne]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)q.__webglFramebuffer[Ne][Xe]=o.createFramebuffer()}else q.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)q.__webglFramebuffer[Ne]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let Ne=0,Xe=be.length;Ne<Xe;Ne++){const nt=s.get(be[Ne]);nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Yt(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<be.length;Ne++){const Xe=be[Ne];q.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ne]);const nt=c.convert(Xe.format,Xe.colorSpace),Me=c.convert(Xe.type),Te=D(Xe.internalFormat,nt,Me,Xe.colorSpace,L.isXRRenderTarget===!0),Be=G(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,Te,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),He(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Ce(q.__webglFramebuffer[Ne][Xe],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe);else Ce(q.__webglFramebuffer[Ne],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ne=0,Xe=be.length;Ne<Xe;Ne++){const nt=be[Ne],Me=s.get(nt);let Te=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),ne(Te,nt),Ce(q.__webglFramebuffer,L,nt,o.COLOR_ATTACHMENT0+Ne,Te,0),S(nt)&&v(Te)}i.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ne,pe.__webglTexture),ne(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Ce(q.__webglFramebuffer[Xe],L,E,o.COLOR_ATTACHMENT0,Ne,Xe);else Ce(q.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ne,0);S(E)&&v(Ne),i.unbindTexture()}L.depthBuffer&&ht(L)}function pt(L){const E=L.textures;for(let q=0,pe=E.length;q<pe;q++){const be=E[q];if(S(be)){const fe=U(L),Ke=s.get(be).__webglTexture;i.bindTexture(fe,Ke),v(fe),i.unbindTexture()}}}const Nt=[],ot=[];function en(L){if(L.samples>0){if(Yt(L)===!1){const E=L.textures,q=L.width,pe=L.height;let be=o.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=s.get(L),Ne=E.length>1;if(Ne)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Me=s.get(E[nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,q,pe,0,0,q,pe,be,o.NEAREST),m===!0&&(Nt.length=0,ot.length=0,Nt.push(o.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(fe),ot.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Me=s.get(E[nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Yt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){const E=d.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Ot(L,E){const q=L.colorSpace,pe=L.format,be=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Or&&q!==Ja&&(Tt.getTransfer(q)===kt?(pe!==Ri||be!==ai)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.setTexture2D=oe,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=$t,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qA(o,t){function i(s,l=Ja){let c;const d=Tt.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===Fh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===kh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ov)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===av)return o.BYTE;if(s===sv)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===Bh)return o.INT;if(s===Gi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===va)return o.HALF_FLOAT;if(s===lv)return o.ALPHA;if(s===cv)return o.RGB;if(s===Ri)return o.RGBA;if(s===_a)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===uv)return o.RED;if(s===Hh)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===Gh)return o.RG_INTEGER;if(s===Vh)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===zc)if(d===kt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===eh||s===th||s===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ih||s===ah)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lh)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===xh||s===vh||s===_h||s===yh||s===bh||s===Sh||s===Mh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh||s===Th||s===Ah)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Eh)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wh||s===Rh||s===Ch||s===Nh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===wh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Tv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:YA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends zr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,b=null,M=null,A=null;const T=typeof XRWebGLBinding<"u",S=new KA,v={},U=i.getContextAttributes();let D=null,P=null;const I=[],F=[],z=new Ct;let Z=null;const w=new qn;w.viewport=new an;const N=new qn;N.viewport=new an;const V=[w,N],ie=new oM;let ae=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ce=I[W];return ce===void 0&&(ce=new Rd,I[W]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(W){let ce=I[W];return ce===void 0&&(ce=new Rd,I[W]=ce),ce.getGripSpace()},this.getHand=function(W){let ce=I[W];return ce===void 0&&(ce=new Rd,I[W]=ce),ce.getHandSpace()};function oe(W){const ce=F.indexOf(W.inputSource);if(ce===-1)return;const Ce=I[ce];Ce!==void 0&&(Ce.update(W.inputSource,W.frame,p||d),Ce.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",k);for(let W=0;W<I.length;W++){const ce=F[W];ce!==null&&(F[W]=null,I[W].disconnect(ce))}ae=null,he=null,S.reset();for(const W in v)delete v[W];t.setRenderTarget(D),M=null,b=null,x=null,l=null,P=null,Fe.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return b!==null?b:M},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",B),l.addEventListener("inputsourceschange",k),U.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,Ge=null;U.depth&&(Ge=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=U.stencil?Cs:_a,He=U.stencil?Xo:Gi);const ht={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};x=this.getBinding(),b=x.createProjectionLayer(ht),l.updateRenderState({layers:[b]}),t.setPixelRatio(1),t.setSize(b.textureWidth,b.textureHeight,!1),P=new ki(b.textureWidth,b.textureHeight,{format:Ri,type:ai,depthTexture:new qo(b.textureWidth,b.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ki(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(W){for(let ce=0;ce<W.removed.length;ce++){const Ce=W.removed[ce],He=F.indexOf(Ce);He>=0&&(F[He]=null,I[He].disconnect(Ce))}for(let ce=0;ce<W.added.length;ce++){const Ce=W.added[ce];let He=F.indexOf(Ce);if(He===-1){for(let ht=0;ht<I.length;ht++)if(ht>=F.length){F.push(Ce),He=ht;break}else if(F[ht]===null){F[ht]=Ce,He=ht;break}if(He===-1)break}const Ge=I[He];Ge&&Ge.connect(Ce)}}const Q=new $,ye=new $;function _e(W,ce,Ce){Q.setFromMatrixPosition(ce.matrixWorld),ye.setFromMatrixPosition(Ce.matrixWorld);const He=Q.distanceTo(ye),Ge=ce.projectionMatrix.elements,ht=Ce.projectionMatrix.elements,$t=Ge[14]/(Ge[10]-1),xt=Ge[14]/(Ge[10]+1),pt=(Ge[9]+1)/Ge[5],Nt=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],en=(ht[8]+1)/ht[0],G=$t*ot,Yt=$t*en,Mt=He/(-ot+en),Ot=Mt*-ot;if(ce.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ot),W.translateZ(Mt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ge[10]===-1)W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ye=$t+Mt,L=xt+Mt,E=G-Ot,q=Yt+(He-Ot),pe=pt*xt/L*Ye,be=Nt*xt/L*Ye;W.projectionMatrix.makePerspective(E,q,pe,be,Ye,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function O(W,ce){ce===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ce.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ce=W.near,Ce=W.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),ie.near=N.near=w.near=ce,ie.far=N.far=w.far=Ce,(ae!==ie.near||he!==ie.far)&&(l.updateRenderState({depthNear:ie.near,depthFar:ie.far}),ae=ie.near,he=ie.far),ie.layers.mask=W.layers.mask|6,w.layers.mask=ie.layers.mask&3,N.layers.mask=ie.layers.mask&5;const He=W.parent,Ge=ie.cameras;O(ie,He);for(let ht=0;ht<Ge.length;ht++)O(Ge[ht],He);Ge.length===2?_e(ie,w,N):ie.projectionMatrix.copy(w.projectionMatrix),ne(W,ie,He)};function ne(W,ce,Ce){Ce===null?W.matrix.copy(ce.matrixWorld):(W.matrix.copy(Ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(ce.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Dh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(b===null&&M===null))return m},this.setFoveation=function(W){m=W,b!==null&&(b.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ie)},this.getCameraTexture=function(W){return v[W]};let ge=null;function Ee(W,ce){if(_=ce.getViewerPose(p||d),A=ce,_!==null){const Ce=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let He=!1;Ce.length!==ie.cameras.length&&(ie.cameras.length=0,He=!0);for(let xt=0;xt<Ce.length;xt++){const pt=Ce[xt];let Nt=null;if(M!==null)Nt=M.getViewport(pt);else{const en=x.getViewSubImage(b,pt);Nt=en.viewport,xt===0&&(t.setRenderTargetTextures(P,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(P))}let ot=V[xt];ot===void 0&&(ot=new qn,ot.layers.enable(xt),ot.viewport=new an,V[xt]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),xt===0&&(ie.matrix.copy(ot.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),He===!0&&ie.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){x=s.getBinding();const xt=x.getDepthInformation(Ce[0]);xt&&xt.isValid&&xt.texture&&S.init(xt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){t.state.unbindTexture(),x=s.getBinding();for(let xt=0;xt<Ce.length;xt++){const pt=Ce[xt].camera;if(pt){let Nt=v[pt];Nt||(Nt=new Tv,v[pt]=Nt);const ot=x.getCameraImage(pt);Nt.sourceTexture=ot}}}}for(let Ce=0;Ce<I.length;Ce++){const He=F[Ce],Ge=I[Ce];He!==null&&Ge!==void 0&&Ge.update(He,ce,p||d)}ge&&ge(W,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),A=null}const Fe=new Rv;Fe.setAnimationLoop(Ee),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const Es=new Vi,JA=new Jt;function $A(o,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,_v(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,U,D,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),b(S,v),v.isMeshPhysicalMaterial&&M(S,v,P)):v.isMeshMatcapMaterial?(c(S,v),A(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,U,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Yn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Yn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const U=t.get(v),D=U.envMap,P=U.envMapRotation;D&&(S.envMap.value=D,Es.copy(P),Es.x*=-1,Es.y*=-1,Es.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),S.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Es)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,U,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=D*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function b(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const U=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e2(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const P=D.program;s.uniformBlockBinding(U,P)}function p(U,D){let P=l[U.id];P===void 0&&(A(U),P=_(U),l[U.id]=P,U.addEventListener("dispose",S));const I=D.program;s.updateUBOMapping(U,I);const F=t.render.frame;c[U.id]!==F&&(b(U),c[U.id]=F)}function _(U){const D=x();U.__bindingPointIndex=D;const P=o.createBuffer(),I=U.__size,F=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,I,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(U){const D=l[U.id],P=U.uniforms,I=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let F=0,z=P.length;F<z;F++){const Z=Array.isArray(P[F])?P[F]:[P[F]];for(let w=0,N=Z.length;w<N;w++){const V=Z[w];if(M(V,F,w,I)===!0){const ie=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let oe=0;oe<ae.length;oe++){const B=ae[oe],k=T(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,ie+he,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,he),he+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ie,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,D,P,I){const F=U.value,z=D+"_"+P;if(I[z]===void 0)return typeof F=="number"||typeof F=="boolean"?I[z]=F:I[z]=F.clone(),!0;{const Z=I[z];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return I[z]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function A(U){const D=U.uniforms;let P=0;const I=16;for(let z=0,Z=D.length;z<Z;z++){const w=Array.isArray(D[z])?D[z]:[D[z]];for(let N=0,V=w.length;N<V;N++){const ie=w[N],ae=Array.isArray(ie.value)?ie.value:[ie.value];for(let he=0,oe=ae.length;he<oe;he++){const B=ae[he],k=T(B),Q=P%I,ye=Q%k.boundary,_e=Q+ye;P+=ye,_e!==0&&I-_e<k.storage&&(P+=I-_e),ie.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=k.storage}}}const F=P%I;return F>0&&(P+=I-F),U.__size=P,U.__cache={},this}function T(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const t2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function n2(){return Pi===null&&(Pi=new XS(t2,16,16,Lr,va),Pi.name="DFG_LUT",Pi.minFilter=On,Pi.magFilter=On,Pi.wrapS=ma,Pi.wrapT=ma,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Lv{constructor(t={}){const{canvas:i=_S(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1,outputBufferType:M=ai}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const T=M,S=new Set([Vh,Gh,Hh]),v=new Set([ai,Gi,jo,Xo,Fh,kh]),U=new Uint32Array(4),D=new Int32Array(4);let P=null,I=null;const F=[],z=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=gi;let V=0,ie=0,ae=null,he=-1,oe=null;const B=new an,k=new an;let Q=null;const ye=new bt(0);let _e=0,O=i.width,ne=i.height,ge=1,Ee=null,Fe=null;const W=new an(0,0,O,ne),ce=new an(0,0,O,ne);let Ce=!1;const He=new Yh;let Ge=!1,ht=!1;const $t=new Jt,xt=new $,pt=new an,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function en(){return ae===null?ge:1}let G=s;function Yt(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ih}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const Y="webgl2";if(G=Yt(Y,C),G===null)throw Yt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Rt("WebGLRenderer: "+C.message),C}let Mt,Ot,Ye,L,E,q,pe,be,fe,Ke,Ne,Xe,nt,Me,Te,Be,ze,De,ct,X,Le,Ae,Ie,Se;function ve(){Mt=new nT(G),Mt.init(),Ae=new qA(G,Mt),Ot=new qE(G,Mt,t,Ae),Ye=new XA(G,Mt),Ot.reversedDepthBuffer&&b&&Ye.buffers.depth.setReversed(!0),L=new sT(G),E=new NA,q=new WA(G,Mt,Ye,E,Ot,Ae,L),pe=new ZE(w),be=new tT(w),fe=new cM(G),Ie=new XE(G,fe),Ke=new iT(G,fe,L,Ie),Ne=new oT(G,Ke,fe,L),ct=new rT(G,Ot,q),Be=new YE(E),Xe=new CA(w,pe,be,Mt,Ot,Ie,Be),nt=new $A(w,E),Me=new UA,Te=new BA(Mt),De=new jE(w,pe,be,Ye,Ne,A,m),ze=new VA(w,Ne,Ot),Se=new e2(G,L,Ot,Ye),X=new WE(G,Mt,L),Le=new aT(G,Mt,L),L.programs=Xe.programs,w.capabilities=Ot,w.extensions=Mt,w.properties=E,w.renderLists=Me,w.shadowMap=ze,w.state=Ye,w.info=L}ve(),T!==ai&&(Z=new cT(T,i.width,i.height,l,c));const Re=new QA(w,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(O,ne,!1))},this.getSize=function(C){return C.set(O,ne)},this.setSize=function(C,Y,le=!0){if(Re.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ne=Y,i.width=Math.floor(C*ge),i.height=Math.floor(Y*ge),le===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(O*ge,ne*ge).floor()},this.setDrawingBufferSize=function(C,Y,le){O=C,ne=Y,ge=le,i.width=Math.floor(C*le),i.height=Math.floor(Y*le),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,Y,le,se){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,Y,le,se),Ye.viewport(B.copy(W).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,Y,le,se){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,Y,le,se),Ye.scissor(k.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Ye.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,le=!0){let se=0;if(C){let J=!1;if(ae!==null){const Ue=ae.texture.format;J=S.has(Ue)}if(J){const Ue=ae.texture.type,ke=v.has(Ue),Oe=De.getClearColor(),Ve=De.getClearAlpha(),We=Oe.r,$e=Oe.g,qe=Oe.b;ke?(U[0]=We,U[1]=$e,U[2]=qe,U[3]=Ve,G.clearBufferuiv(G.COLOR,0,U)):(D[0]=We,D[1]=$e,D[2]=qe,D[3]=Ve,G.clearBufferiv(G.COLOR,0,D))}else se|=G.COLOR_BUFFER_BIT}Y&&(se|=G.DEPTH_BUFFER_BIT),le&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),De.dispose(),Me.dispose(),Te.dispose(),E.dispose(),pe.dispose(),be.dispose(),Ne.dispose(),Ie.dispose(),Se.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Os),Re.removeEventListener("sessionend",Hr),Ni.stop()};function it(C){C.preventDefault(),Yg("WebGLRenderer: Context Lost."),N=!0}function zt(){Yg("WebGLRenderer: Context Restored."),N=!1;const C=L.autoReset,Y=ze.enabled,le=ze.autoUpdate,se=ze.needsUpdate,J=ze.type;ve(),L.autoReset=C,ze.enabled=Y,ze.autoUpdate=le,ze.needsUpdate=se,ze.type=J}function Et(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const Y=C.target;Y.removeEventListener("dispose",Nn),vi(Y)}function vi(C){Jo(C),E.remove(C)}function Jo(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(le){Xe.releaseProgram(le)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,le,se,J,Ue){Y===null&&(Y=Nt);const ke=J.isMesh&&J.matrixWorld.determinant()<0,Oe=ts(C,Y,le,se,J);Ye.setMaterial(se,ke);let Ve=le.index,We=1;if(se.wireframe===!0){if(Ve=Ke.getWireframeAttribute(le),Ve===void 0)return;We=2}const $e=le.drawRange,qe=le.attributes.position;let et=$e.start*We,Dt=($e.start+$e.count)*We;Ue!==null&&(et=Math.max(et,Ue.start*We),Dt=Math.min(Dt,(Ue.start+Ue.count)*We)),Ve!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ve.count)):qe!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,qe.count));const Zt=Dt-et;if(Zt<0||Zt===1/0)return;Ie.setup(J,se,Oe,le,Ve);let Xt,Pt=X;if(Ve!==null&&(Xt=fe.get(Ve),Pt=Le,Pt.setIndex(Xt)),J.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*en()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(J.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*en()),J.isLineSegments?Pt.setMode(G.LINES):J.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else J.isPoints?Pt.setMode(G.POINTS):J.isSprite&&Pt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Ut=J._multiDrawCounts,st=J._multiDrawCount,yn=Ve?fe.get(Ve).bytesPerElement:1,Xi=E.get(se).currentProgram.getUniforms();for(let bn=0;bn<st;bn++)Xi.setValue(G,"_gl_DrawID",bn),Pt.render(Qe[bn]/yn,Ut[bn])}else if(J.isInstancedMesh)Pt.renderInstances(et,Zt,J.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ut=Math.min(le.instanceCount,Qe);Pt.renderInstances(et,Zt,Ut)}else Pt.render(et,Zt)};function Fr(C,Y,le){C.transparent===!0&&C.side===pa&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,zs(C,Y,le),C.side=es,C.needsUpdate=!0,zs(C,Y,le),C.side=pa):zs(C,Y,le)}this.compile=function(C,Y,le=null){le===null&&(le=C),I=Te.get(le),I.init(Y),z.push(I),le.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),C!==le&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights();const se=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Oe=Ue[ke];Fr(Oe,le,J),se.add(Oe)}else Fr(Ue,le,J),se.add(Ue)}),I=z.pop(),se},this.compileAsync=function(C,Y,le=null){const se=this.compile(C,Y,le);return new Promise(J=>{function Ue(){if(se.forEach(function(ke){E.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){J(C);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ls=null;function kr(C){Ls&&Ls(C)}function Os(){Ni.stop()}function Hr(){Ni.start()}const Ni=new Rv;Ni.setAnimationLoop(kr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){Ls=C,Re.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},Re.addEventListener("sessionstart",Os),Re.addEventListener("sessionend",Hr),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const le=Re.enabled===!0&&Re.isPresenting===!0,se=Z!==null&&(ae===null||le)&&Z.begin(w,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Y,ae),I=Te.get(C,z.length),I.init(Y),z.push(I),$t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),He.setFromProjectionMatrix($t,Bi,Y.reversedDepth),ht=this.localClippingEnabled,Ge=Be.init(this.clippingPlanes,ht),P=Me.get(C,F.length),P.init(),F.push(P),Re.enabled===!0&&Re.isPresenting===!0){const ke=w.xr.getDepthSensingMesh();ke!==null&&si(ke,Y,-1/0,w.sortObjects)}si(C,Y,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Ee,Fe),ot=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ot&&De.addToRenderList(P,C),this.info.render.frame++,Ge===!0&&Be.beginShadows();const J=I.state.shadowsArray;if(ze.render(J,C,Y),Ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&Z.hasRenderPass())===!1){const ke=P.opaque,Oe=P.transmissive;if(I.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(Oe.length>0)for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];_n(ke,Oe,C,qe)}ot&&De.render(C);for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];on(P,C,qe,qe.viewport)}}else Oe.length>0&&_n(ke,Oe,C,Y),ot&&De.render(C),on(P,C,Y)}ae!==null&&ie===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),se&&Z.end(w),C.isScene===!0&&C.onAfterRender(w,C,Y),Ie.resetDefaultState(),he=-1,oe=null,z.pop(),z.length>0?(I=z[z.length-1],Ge===!0&&Be.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function si(C,Y,le,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){se&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($t);const ke=Ne.update(C),Oe=C.material;Oe.visible&&P.push(C,ke,Oe,le,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const ke=Ne.update(C),Oe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),pt.copy(ke.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4($t)),Array.isArray(Oe)){const Ve=ke.groups;for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We],et=Oe[qe.materialIndex];et&&et.visible&&P.push(C,ke,et,le,pt.z,qe)}}else Oe.visible&&P.push(C,ke,Oe,le,pt.z,null)}}const Ue=C.children;for(let ke=0,Oe=Ue.length;ke<Oe;ke++)si(Ue[ke],Y,le,se)}function on(C,Y,le,se){const{opaque:J,transmissive:Ue,transparent:ke}=C;I.setupLightsView(le),Ge===!0&&Be.setGlobalState(w.clippingPlanes,le),se&&Ye.viewport(B.copy(se)),J.length>0&&_i(J,Y,le),Ue.length>0&&_i(Ue,Y,le),ke.length>0&&_i(ke,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function _n(C,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new ki(1,1,{generateMipmaps:!0,type:et?va:ai,minFilter:Rs,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[se.id],ke=se.viewport||B;Ue.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),Ve=w.getActiveCubeFace(),We=w.getActiveMipmapLevel();w.setRenderTarget(Ue),w.getClearColor(ye),_e=w.getClearAlpha(),_e<1&&w.setClearColor(16777215,.5),w.clear(),ot&&De.render(le);const $e=w.toneMapping;w.toneMapping=Fi;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ge===!0&&Be.setGlobalState(w.clippingPlanes,se),_i(C,le,se),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Zt=Y.length;Dt<Zt;Dt++){const Xt=Y[Dt],{object:Pt,geometry:Qe,material:Ut,group:st}=Xt;if(Ut.side===pa&&Pt.layers.test(se.layers)){const yn=Ut.side;Ut.side=Yn,Ut.needsUpdate=!0,Ps(Pt,le,se,Qe,Ut,st),Ut.side=yn,Ut.needsUpdate=!0,et=!0}}et===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}w.setRenderTarget(Oe,Ve,We),w.setClearColor(ye,_e),qe!==void 0&&(se.viewport=qe),w.toneMapping=$e}function _i(C,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ue=C.length;J<Ue;J++){const ke=C[J],{object:Oe,geometry:Ve,group:We}=ke;let $e=ke.material;$e.allowOverride===!0&&se!==null&&($e=se),Oe.layers.test(le.layers)&&Ps(Oe,Y,le,Ve,$e,We)}}function Ps(C,Y,le,se,J,Ue){C.onBeforeRender(w,Y,le,se,J,Ue),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(w,Y,le,se,C,Ue),J.transparent===!0&&J.side===pa&&J.forceSinglePass===!1?(J.side=Yn,J.needsUpdate=!0,w.renderBufferDirect(le,Y,se,J,C,Ue),J.side=es,J.needsUpdate=!0,w.renderBufferDirect(le,Y,se,J,C,Ue),J.side=pa):w.renderBufferDirect(le,Y,se,J,C,Ue),C.onAfterRender(w,Y,le,se,J,Ue)}function zs(C,Y,le){Y.isScene!==!0&&(Y=Nt);const se=E.get(C),J=I.state.lights,Ue=I.state.shadowsArray,ke=J.state.version,Oe=Xe.getParameters(C,J.state,Ue,Y,le),Ve=Xe.getProgramCacheKey(Oe);let We=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?be:pe).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Nn),We=new Map,se.programs=We);let $e=We.get(Ve);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===ke)return Gr(C,Oe),$e}else Oe.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Oe,w),$e=Xe.acquireProgram(Oe,Ve),We.set(Ve,$e),se.uniforms=Oe.uniforms;const qe=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Be.uniform),Gr(C,Oe),se.needsLights=ya(C),se.lightsStateVersion=ke,se.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMap.value=J.state.directionalShadowMap,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotShadowMap.value=J.state.spotShadowMap,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMap.value=J.state.pointShadowMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function $o(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Gr(C,Y){const le=E.get(C);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ts(C,Y,le,se,J){Y.isScene!==!0&&(Y=Nt),q.resetTextureUnits();const Ue=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Oe=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Or,Ve=(se.isMeshStandardMaterial?be:pe).get(se.envMap||ke),We=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Zt=Fi;se.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Zt=w.toneMapping);const Xt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pt=Xt!==void 0?Xt.length:0,Qe=E.get(se),Ut=I.state.lights;if(Ge===!0&&(ht===!0||C!==oe)){const Mn=C===oe&&se.id===he;Be.setState(se,C,Mn)}let st=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==Oe||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ve||se.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Zt||Qe.morphTargetsCount!==Pt)&&(st=!0):(st=!0,Qe.__version=se.version);let yn=Qe.currentProgram;st===!0&&(yn=zs(se,Y,J));let Xi=!1,bn=!1,ri=!1;const It=yn.getUniforms(),Sn=Qe.uniforms;if(Ye.useProgram(yn.program)&&(Xi=!0,bn=!0,ri=!0),se.id!==he&&(he=se.id,bn=!0),Xi||oe!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",C.projectionMatrix),It.setValue(G,"viewMatrix",C.matrixWorldInverse);const En=It.map.cameraPosition;En!==void 0&&En.setValue(G,xt.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),oe!==C&&(oe=C,bn=!0,ri=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,q),Ut.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,q),Ut.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,q)),J.isSkinnedMesh){It.setOptional(G,J,"bindMatrix"),It.setOptional(G,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),It.setValue(G,"boneTexture",Mn.boneTexture,q))}J.isBatchedMesh&&(It.setOptional(G,J,"batchingTexture"),It.setValue(G,"batchingTexture",J._matricesTexture,q),It.setOptional(G,J,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",J._indirectTexture,q),It.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",J._colorsTexture,q));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ct.update(J,le,yn),(bn||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,It.setValue(G,"receiveShadow",J.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=Ve,Sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=n2()),bn&&(It.setValue(G,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&Vr(Sn,ri),Ue&&se.fog===!0&&nt.refreshFogUniforms(Sn,Ue),nt.refreshMaterialUniforms(Sn,se,ge,ne,I.state.transmissionRenderTarget[C.id]),Ic.upload(G,$o(Qe),Sn,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ic.upload(G,$o(Qe),Sn,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(G,"center",J.center),It.setValue(G,"modelViewMatrix",J.modelViewMatrix),It.setValue(G,"normalMatrix",J.normalMatrix),It.setValue(G,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Mn=se.uniformsGroups;for(let En=0,Is=Mn.length;En<Is;En++){const yi=Mn[En];Se.update(yi,yn),Se.bind(yi,yn)}}return yn}function Vr(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ya(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,Y,le){const se=E.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const le=E.get(C);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const ba=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,le=0){ae=C,V=Y,ie=le;let se=null,J=!1,Ue=!1;if(C){const Oe=E.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),B.copy(C.viewport),k.copy(C.scissor),Q=C.scissorTest,Ye.viewport(B),Ye.scissor(k),Ye.setScissorTest(Q),he=-1;return}else if(Oe.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Oe.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const We=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?se=We[Y][le]:se=We[Y],J=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?se=E.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?se=We[le]:se=We,B.copy(C.viewport),k.copy(C.scissor),Q=C.scissorTest}else B.copy(W).multiplyScalar(ge).floor(),k.copy(ce).multiplyScalar(ge).floor(),Q=Ce;if(le!==0&&(se=ba),Ye.bindFramebuffer(G.FRAMEBUFFER,se)&&Ye.drawBuffers(C,se),Ye.viewport(B),Ye.scissor(k),Ye.setScissorTest(Q),J){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,le)}else if(Ue){const Oe=Y;for(let Ve=0;Ve<C.textures.length;Ve++){const We=E.get(C.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,We.__webglTexture,le,Oe)}}else if(C!==null&&le!==0){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,le)}he=-1},this.readRenderTargetPixels=function(C,Y,le,se,J,Ue,ke,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-J&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,le,se,J,Ae.convert($e),Ae.convert(qe),Ue))}finally{const We=ae!==null?E.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,Y,le,se,J,Ue,ke,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve)if(Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-J){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);const We=C.textures[Oe],$e=We.format,qe=We.type;if(!Ot.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,le,se,J,Ae.convert($e),Ae.convert(qe),0);const Dt=ae!==null?E.get(ae).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Dt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await yS(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(et),G.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,le=0){const se=Math.pow(2,-le),J=Math.floor(C.image.width*se),Ue=Math.floor(C.image.height*se),ke=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,ke,Oe,J,Ue),Ye.unbindTexture()};const ns=G.createFramebuffer(),Sa=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,le=null,se=null,J=0,Ue=null){Ue===null&&(J!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=J,J=0):Ue=0);let ke,Oe,Ve,We,$e,qe,et,Dt,Zt;const Xt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(le!==null)ke=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,$e=le.min.y,qe=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-J);ke=Math.floor(Xt.width*hn),Oe=Math.floor(Xt.height*hn),C.isDataArrayTexture?Ve=Xt.depth:C.isData3DTexture?Ve=Math.floor(Xt.depth*hn):Ve=1,We=0,$e=0,qe=0}se!==null?(et=se.x,Dt=se.y,Zt=se.z):(et=0,Dt=0,Zt=0);const Pt=Ae.convert(Y.format),Qe=Ae.convert(Y.type);let Ut;Y.isData3DTexture?(q.setTexture3D(Y,0),Ut=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ut=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ut=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const st=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=G.getParameter(G.UNPACK_SKIP_PIXELS),bn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const It=C.isDataArrayTexture||C.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const hn=E.get(C),Mn=E.get(Y),En=E.get(hn.__renderTarget),Is=E.get(Mn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let yi=0;yi<Ve;yi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,qe+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ue,Zt+yi)),G.blitFramebuffer(We,$e,ke,Oe,et,Dt,ke,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const hn=E.get(C),Mn=E.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,ns),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Sa);for(let En=0;En<Ve;En++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,J,qe+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,J),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ue,Zt+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ue),J!==0?G.blitFramebuffer(We,$e,ke,Oe,et,Dt,ke,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Ut,Ue,et,Dt,Zt+En,We,$e,ke,Oe):G.copyTexSubImage2D(Ut,Ue,et,Dt,We,$e,ke,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ut,Ue,et,Dt,Zt,ke,Oe,Ve,Pt,Qe,Xt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ut,Ue,et,Dt,Zt,ke,Oe,Ve,Pt,Xt.data):G.texSubImage3D(Ut,Ue,et,Dt,Zt,ke,Oe,Ve,Pt,Qe,Xt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,ke,Oe,Pt,Qe,Xt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,et,Dt,Xt.width,Xt.height,Pt,Xt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,ke,Oe,Pt,Qe,Xt);G.pixelStorei(G.UNPACK_ROW_LENGTH,st),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ue===0&&Y.generateMipmaps&&G.generateMipmap(Ut),Ye.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){V=0,ie=0,ae=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const i2=()=>{const o=we.useRef(null);return we.useEffect(()=>{if(!o.current)return;const t=window.innerWidth,i=window.innerHeight,s=new Mv,l=new qn(75,t/i,.1,1e3);l.position.z=30;const c=new Lv({alpha:!0,antialias:!0});c.setSize(t,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.innerHTML="",o.current.appendChild(c.domElement);const d=new Wc(10,3,100,16),h=new qh({color:0,wireframe:!0,transparent:!0,opacity:.08}),m=new Ci(d,h);s.add(m);let p;const _=()=>{p=requestAnimationFrame(_),m.rotation.x+=.001,m.rotation.y+=.002,c.render(s,l)};_();const x=()=>{if(!o.current)return;const b=window.innerWidth,M=window.innerHeight;l.aspect=b/M,l.updateProjectionMatrix(),c.setSize(b,M)};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(p),o.current&&(o.current.innerHTML=""),d.dispose(),h.dispose(),c.dispose()}},[]),g.jsx("div",{ref:o,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none"})},a2=()=>{const o=we.useRef(null);return we.useEffect(()=>{if(!o.current)return;o.current.innerHTML="";const t=o.current.clientWidth||1,i=o.current.clientHeight||1,s=new Mv;s.background=new bt(0);const l=new qn(45,t/i,.1,100);l.position.z=6;const c=new Lv({antialias:!0,alpha:!0});c.setSize(t,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(c.domElement);const d=new Wc(.85,.28,150,20),h=new tM({color:16777215,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:3355443}),m=new Ci(d,h);s.add(m);const p=new JS(d),_=new Ev({color:16777215,transparent:!0,opacity:.1}),x=new KS(p,_);m.add(x);const b=new rM(16777215,.8);s.add(b);const M=new vx(16777215,1.2);M.position.set(10,10,10),s.add(M);const A=new vx(4474111,.6);A.position.set(-10,-5,5),s.add(A);let T=0,S=0;const v=I=>{T=I.clientX/window.innerWidth*2-1,S=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",v);let U;const D=()=>{m.rotation.x+=.008+S*.03,m.rotation.y+=.008+T*.03;const I=Date.now()*.002,F=1+Math.sin(I)*.03;m.scale.set(F,F,F),c.render(s,l),U=requestAnimationFrame(D)};D();const P=new ResizeObserver(I=>{for(let F of I){const{width:z,height:Z}=F.contentRect;z>0&&Z>0&&(l.aspect=z/Z,l.updateProjectionMatrix(),c.setSize(z,Z))}});return P.observe(o.current),()=>{window.removeEventListener("mousemove",v),P.disconnect(),cancelAnimationFrame(U),d.dispose(),h.dispose(),c.dispose(),o.current&&(o.current.innerHTML="")}},[]),g.jsx("div",{ref:o,className:"w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing pointer-events-auto"})},s2=({project:o,navigateTo:t,revealClass:i,addToRefs:s})=>g.jsx("div",{className:"w-full py-4 md:py-24 transition-colors duration-500 bg-white border-b border-black/5 relative z-20",children:g.jsx("div",{ref:s,className:`group cursor-pointer ${i} px-6 md:px-12 max-w-[1600px] mx-auto relative z-10`,children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center",children:[g.jsx("div",{className:"relative aspect-[16/9] bg-neutral-200/50 rounded-lg overflow-hidden",onClick:()=>t("project",o.id),children:g.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover",onError:kb})}),g.jsxs("div",{className:"flex flex-col justify-center",children:[g.jsx("h4",{className:"text-[10px] text-black/40 uppercase tracking-widest mb-1 font-medium",children:o.category}),g.jsx("h3",{className:"text-xl font-medium tracking-tighter mb-2",children:o.title}),g.jsx("button",{className:"w-fit border border-black/20 rounded-full px-4 py-1.5 text-[10px] uppercase",onClick:()=>t("project",o.id),children:"View Project"})]})]})})}),r2=({setCursorHovering:o,setIsEyeMode:t,setIsVideoHovering:i,navigateTo:s})=>{const[l,c]=we.useState(5),d=we.useRef([]),h=p=>{p&&!d.current.includes(p)&&d.current.push(p)},m="opacity-0 translate-y-4 transition-all duration-500 ease-out";return g.jsxs("div",{className:"w-full",children:[g.jsxs("header",{className:"h-fit md:h-screen relative pt-24 md:pt-32 pb-6 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto bg-white overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 z-0 scale-[1.2] opacity-20 grayscale pointer-events-none",children:g.jsx(i2,{})}),g.jsxs("div",{className:"z-10 relative",children:[g.jsx("h5",{className:"text-[10px] text-black/50 mb-2 uppercase tracking-widest",children:"A Next-Gen Creative Agency"}),g.jsxs("h1",{className:"text-3xl font-medium tracking-tighter leading-tight mb-4",children:["Global Digital ",g.jsx("br",{}),g.jsx("span",{className:"text-black/40",children:"Architecture Agency."})]})]})]}),g.jsx("section",{className:"px-6 md:px-12 bg-[#050505] text-white py-12 md:py-24 relative z-30",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center",children:[g.jsx("div",{className:"space-y-4 order-2 md:order-1",children:g.jsx("h2",{className:"text-xl font-light tracking-tight leading-snug",children:"We build ecosystems, engineer high-scale digital assets specific for aggressive scale-ups."})}),g.jsx("div",{className:"w-full aspect-[4/3] bg-[#111] rounded-xl overflow-hidden order-1 md:order-2",children:g.jsx("video",{src:"/projects/showcase.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"w-full h-full object-cover opacity-60"})})]})}),g.jsxs("section",{id:"projects",className:"bg-white text-black py-8 md:py-32 relative z-30",children:[g.jsx("div",{className:"max-w-[1600px] mx-auto w-full px-6 md:px-12 border-b border-black/10 pb-4",children:g.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Selected Works"})}),g.jsx("div",{className:"flex flex-col w-full",children:Fd.slice(0,l).map((p,_)=>g.jsx(s2,{project:p,navigateTo:s,revealClass:m,addToRefs:h},_))}),g.jsx("div",{className:"py-12 text-center border-b border-black/10",children:g.jsxs("button",{onClick:()=>c(10),className:"border border-black/10 rounded-full px-8 py-3 text-sm flex items-center gap-2 mx-auto",children:["Discover more ",g.jsx(zh,{size:16})]})})]}),g.jsx("section",{id:"why-choose-us",className:"px-6 md:px-12 bg-[#050505] text-white py-12 md:py-20 relative z-30",children:g.jsx("div",{className:"max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8",children:g.jsxs("div",{className:"flex flex-col gap-6",children:[g.jsx("h3",{className:"text-2xl font-medium tracking-tight",children:"From brand strategy to AI-driven output."}),g.jsx("div",{className:"w-full aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-12",children:g.jsx("div",{className:"w-full h-full scale-[0.6] flex items-center justify-center",children:g.jsx(a2,{})})})]})})})]})},o2=({setCursorHovering:o})=>{const t=we.useRef([]),i=we.useRef(null),[s,l]=we.useState(null),c=[{title:"Creative Engineering",desc:"We don't just draw interfaces; we construct Experience Architecture. At KreavityWorks, Creative Engineering is the fusion of cognitive psychology and radical aesthetics. We deconstruct user behavior to build intuitive workflows, ensuring every creative asset serves a functional purpose to instantly boost brand authority and user satisfaction."},{title:"Creative AI Strategy",desc:"The future is autonomous. We help your business leapfrog the competition with artificial intelligence integration within creative workflows. From content automation to market behavior prediction systems, we build custom AI solutions that are not just smart, but aligned with your agency's strategic goals."},{title:"Motion Graphics",desc:"Static digital worlds are over. We bring your brand's message to life through immersive and kinetic visual narratives. Our motion graphics are designed to capture attention in seconds, transforming complex ideas into visual stories that are digestible, elegant, and capable of reinforcing your brand authority."},{title:"Scalable Ecosystems",desc:"Robust infrastructure is the foundation of limitless growth. We architect creative ecosystems that are solid, secure, and ready to handle global traffic surges. Using Fortune 500 standards, we ensure your application operates at peak performance, with high modularity for your future business expansion."},{title:"Quality Assurance",desc:"Our Zero Error Policy is our promise. Through rigorous auditing based on our 25 Global Implementation Principles, our QA team ensures your digital product is free from bugs and anomalies before it ever touches a user's hand. We stress-test stability and functionality because your product's integrity is our reputation."},{title:"Creative Direction",desc:"Grand vision requires precise visual direction. Creative Direction at KreavityWorks is about maintaining brand identity consistency amidst market noise. We lead the creative process to ensure every visual element—from typography to color palettes—communicates your brand's elite value powerfully."}],d=m=>{m&&!t.current.includes(m)&&t.current.push(m)};we.useEffect(()=>{const m=new IntersectionObserver(p=>{p.forEach(_=>{_.isIntersecting&&(_.target.classList.add("opacity-100","translate-y-0"),_.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1,rootMargin:"-50px"});return setTimeout(()=>{t.current.forEach(p=>p&&m.observe(p))},100),()=>m.disconnect()},[]),we.useEffect(()=>{const m=()=>{if(i.current){const p=window.scrollY;i.current.style.transform=`translateY(${p*.2}px)`,i.current.style.opacity=`${1-p/700}`}};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const h="opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return g.jsxs("div",{className:"min-h-screen bg-white text-black pt-32 overflow-x-hidden",children:[s&&g.jsxs("div",{className:"fixed inset-0 z-[12000] flex items-center justify-center p-6 animate-fade-in",children:[g.jsx("div",{className:"absolute inset-0 bg-white/80 backdrop-blur-xl",onClick:()=>l(null)}),g.jsxs("div",{className:"relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-black/5 p-8 md:p-12 animate-modal-pop-elastic",children:[g.jsx("button",{onClick:()=>l(null),className:"absolute top-6 right-6 p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors",children:g.jsx(Ds,{size:20})}),g.jsx("h2",{className:"text-3xl md:text-4xl font-medium tracking-tighter mb-6",children:s.title}),g.jsx("div",{className:"w-12 h-1 bg-black mb-8"}),g.jsx("p",{className:"text-lg md:text-xl text-black/70 leading-relaxed",children:s.desc})]})]}),g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center relative",children:g.jsx("div",{ref:i,className:"flex flex-col gap-2 md:gap-4 select-none relative z-10",children:g.jsxs("h1",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9] cursor-pointer",children:[g.jsx("span",{ref:d,className:`block ${h}`,children:"We"}),g.jsx("span",{ref:d,className:`block ${h} delay-100`,children:"Architect"}),g.jsx("span",{ref:d,className:`block ${h} delay-200 text-black/20`,children:"Scalable"}),g.jsx("span",{ref:d,className:`block ${h} delay-300`,children:"Creative Systems"})]})})}),g.jsxs("div",{className:"relative z-10 bg-white",children:[g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:g.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-medium max-w-5xl ${h}`,children:"As a high-performance creative agency, we engineer digital architecture, high-impact visual systems, and autonomous AI-driven output."})}),g.jsx("div",{className:"border-t border-black/10 bg-white",children:g.jsx("div",{className:"max-w-[1600px] mx-auto",children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10",children:[g.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:g.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[g.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Radical",g.jsx("br",{}),"Creativity"]}),g.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"We don't provide generic solutions. Our creative philosophy is rooted in strategic storytelling to streamline brand authority and amplify revenue."})]})}),g.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:g.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[g.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Autonomous",g.jsx("br",{}),"Production"]}),g.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"By merging radical aesthetics with high-level AI integration, we build creative ecosystems exactly as envisioned—with zero technical shortcuts."})]})})]})})}),g.jsxs("div",{className:"py-24 overflow-hidden border-t border-b border-black/10 bg-black text-white relative z-10",children:[g.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12",children:g.jsx("div",{className:"mb-8 text-xs font-mono uppercase tracking-widest text-white/40",children:"Creative Frontiers"})}),g.jsx("div",{className:"relative flex whitespace-nowrap overflow-hidden",children:g.jsxs("div",{className:"animate-marquee flex gap-16 md:gap-32 text-6xl md:text-9xl font-medium tracking-tighter uppercase px-8",children:[g.jsx("span",{children:"E-Commerce"}),g.jsx("span",{className:"text-white/30",children:"Fintech"}),g.jsx("span",{children:"AI SaaS"}),g.jsx("span",{className:"text-white/30",children:"Strategic Branding"}),g.jsx("span",{children:"Social Ecosystems"}),g.jsx("span",{className:"text-white/30",children:"Global Media"})]})})]}),g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white",children:g.jsxs("div",{className:"lg:col-span-8",children:[g.jsxs("h2",{ref:d,className:`text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 ${h}`,children:["Brand",g.jsx("br",{}),g.jsx("span",{className:"text-black/30",children:"Authority"})]}),g.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-light text-black/80 ${h} delay-100`,children:"The only metric that matters in a brand is the authority felt during interaction. We empower emerging and established brands to dominate the market through precise creative identity."})]})}),g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-12",children:[g.jsxs("h3",{ref:d,className:`text-2xl font-medium uppercase tracking-tight ${h}`,children:["Creative Direction & ",g.jsx("br",{})," AI Strategy"]}),g.jsx("p",{ref:d,className:`text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed ${h} delay-100`,children:"Building digital ecosystems from zero is a precision team effort. Every specialist brings cutting-edge creative innovation to hit aggressive market targets."})]})}),g.jsx("div",{className:"border-t border-black/10 bg-white",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 py-24",children:[g.jsx("h4",{className:"text-sm font-mono text-black/40 uppercase tracking-widest mb-12",children:"Agency Capabilities"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8",children:c.map((m,p)=>g.jsxs("div",{ref:d,className:`py-6 border-b border-black/10 flex items-center justify-between group cursor-pointer ${h}`,style:{transitionDelay:`${p*50}ms`},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>l(m),children:[g.jsx("span",{className:"text-2xl md:text-3xl tracking-tight group-hover:pl-4 transition-all duration-300",children:m.title}),g.jsx(zh,{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]},p))})]})}),g.jsx("div",{className:"bg-[#050505] text-white py-32 border-b border-white/5",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 space-y-32",children:[g.jsxs("div",{ref:d,className:`${h}`,children:[g.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-white/90",children:"We build stable infrastructure for the creative age."}),g.jsx("p",{className:"text-xl text-white/50 max-w-4xl leading-relaxed",children:"Developing global-standard creative assets since 2024. We bring vision to life and create brand equity that delivers measurable impact."})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16",children:[g.jsx("div",{children:g.jsx("h3",{className:"text-sm font-mono text-white/40 uppercase tracking-widest mb-4",children:"Agency Philosophy"})}),g.jsx("div",{children:g.jsx("p",{ref:d,className:`text-xl md:text-2xl leading-relaxed font-light text-white/80 ${h}`,children:"At Kreavity Works, producers work alongside AI strategists and creative directors. We do not compromise. We are driven by high-impact design that powers productivity and increases market share. Our expertise is remarkable, yet we always strive to outperform our previous achievements."})})]})]})})]}),g.jsx("style",{children:`
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
            `})]})},l2=({setCursorHovering:o,navigateTo:t})=>{const i=we.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};we.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(d=>d&&c.observe(d))},100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[g.jsxs("button",{onClick:()=>t("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-16 group ${l}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx(Ph,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Home"]}),g.jsxs("article",{className:"prose prose-lg max-w-4xl",children:[g.jsxs("div",{ref:s,className:`${l} mb-12`,children:[g.jsx("h1",{className:"text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-4",children:"Privacy Policy"}),g.jsx("p",{className:"text-black/50",children:"Effective date: December 31, 2025"})]}),g.jsxs("div",{className:"space-y-12",children:[g.jsx("section",{ref:s,className:`${l} delay-100`,children:g.jsx("p",{className:"text-xl leading-relaxed",children:'Kreavity Works ("us", "we", or "our") operates the https://kreavityworks.com/ website (the "Service"). This Privacy Policy describes how we collect, use, disclose, and safeguard your personal data when you visit and use our Service, and your rights in relation to that data.'})}),g.jsxs("section",{ref:s,className:`${l} delay-150`,children:[g.jsx("h2",{className:"text-2xl font-medium mb-4",children:"Information we collect"}),g.jsxs("div",{className:"ml-4 space-y-4",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.1 Personal Data"}),g.jsx("p",{className:"text-black/70",children:"You may provide us with certain personal data, e.g.:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"Name, email address"}),g.jsx("li",{children:"Company name, position"}),g.jsx("li",{children:"Other contact data submitted by you"})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.2 Usage data"}),g.jsx("p",{className:"text-black/70",children:"We automatically collect usage data when you use our Service, including:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"IP address, browser type and version"}),g.jsx("li",{children:"Pages you visited, timestamps, duration"}),g.jsx("li",{children:"Device identifiers, operating system version"}),g.jsx("li",{children:"Clicks, interactions, navigation paths"})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.3 Cookies & tracking technologies"}),g.jsx("p",{className:"text-black/70",children:"We use cookies, web beacons, tags, scripts, and similar tracking technologies to track activity and collect information:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"Session cookies"}),g.jsx("li",{children:"Preference cookies"}),g.jsx("li",{children:"Security cookies"})]}),g.jsx("p",{className:"text-black/70 mt-2",children:"You can set your browser to refuse cookies or to notify you — but this may limit your use of some features."})]})]})]}),g.jsxs("section",{ref:s,className:`${l} delay-200`,children:[g.jsx("h2",{className:"text-2xl font-medium mb-4",children:"How we use data"}),g.jsx("p",{className:"text-black/70 mb-4",children:"We use collected data for purposes such as:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mb-4",children:[g.jsx("li",{children:"Providing, operating, and maintaining the Service"}),g.jsx("li",{children:"Improving and personalizing the Service"}),g.jsx("li",{children:"Communicating with you (notifications, support)"}),g.jsx("li",{children:"Analytics and monitoring usage"}),g.jsx("li",{children:"Preventing fraud, abuse, or technical issues"})]})]})]})]})]})},c2=({setCursorHovering:o,setCursorText:t})=>{const i=we.useRef([]),s=d=>{d&&!i.current.includes(d)&&i.current.push(d)};we.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(m=>{m.isIntersecting&&(m.target.classList.add("opacity-100","translate-y-0"),m.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(h=>h&&d.observe(h))},100),()=>d.disconnect()},[]);const l=[{title:"AI-Powered Creativity",desc:"We slash production time via AI integration in creative workflows, guaranteeing rapid turnaround for world-class assets and strategic iterations without compromising quality.",icon:g.jsx(Bb,{size:32})},{title:"The 25 Global Principles",desc:"Zero error policy. Every creative project and code line is audited via our 25 Global Implementation Principles to ensure market leadership and product integrity.",icon:g.jsx(Lb,{size:32})},{title:"Sentient Brand Strategy",desc:"Building brand experiences 'aware' of market shifts. We employ data-driven creative logic and Sentient UI for high-impact human interaction.",icon:g.jsx(fb,{size:32})},{title:"Scalable Talent Network",desc:"Our infrastructure is built for global scale. Modular talent integration ensures elite creative results and future-proof tech stack for Fortune 500 standards.",icon:g.jsx(_b,{size:32})}],c="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[g.jsxs("article",{className:"mb-40",children:[g.jsx("h5",{ref:s,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${c}`,children:"The Performance Engine"}),g.jsxs("h1",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer",children:[g.jsx("span",{ref:s,className:`block ${c}`,children:"Architecting"}),g.jsx("span",{ref:s,className:`block ${c} delay-100`,children:"the Future of"}),g.jsx("span",{ref:s,className:`block ${c} delay-200 text-black/40`,children:"Creative Industries."})]}),g.jsx("div",{ref:s,className:`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${c} delay-300`,children:g.jsxs("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed pl-6",children:["Since our inception, we haven't just sought solutions; we've built ",g.jsx("strong",{children:"High-Impact Creative Systems"}),". Combining strategic execution with AI intelligence to ensure every brand asset operates at the highest global level."]})})]}),g.jsxs("section",{className:"snap-start mb-20",children:[g.jsxs("div",{className:"flex justify-between items-end mb-16 border-b border-black/10 pb-8",children:[g.jsx("h2",{ref:s,className:`text-4xl font-medium tracking-tighter ${c}`,children:"The Creative Hub"}),g.jsx("span",{ref:s,className:`hidden md:block text-black/40 ${c}`,children:"Our Standard of Excellence"})]}),g.jsx("div",{className:"grid grid-cols-1 gap-0",children:l.map((d,h)=>g.jsxs("div",{ref:s,className:`group relative py-16 border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${c}`,onMouseEnter:()=>t("BENEFIT"),onMouseLeave:()=>t(""),children:[g.jsx("div",{className:"absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8 items-start",children:[g.jsxs("div",{className:"md:col-span-1 text-black/30 font-mono text-sm pt-2",children:["0",h+1]}),g.jsxs("div",{className:"md:col-span-4",children:[g.jsx("div",{className:"mb-4 text-black/80 group-hover:text-black transition-colors",children:d.icon}),g.jsx("h3",{className:"text-3xl font-medium tracking-tight mb-2",children:d.title})]}),g.jsx("div",{className:"md:col-span-6 md:col-start-7",children:g.jsx("p",{className:"text-lg text-black/60 leading-relaxed max-w-xl group-hover:text-black/80 transition-colors",children:d.desc})})]})]},h))})]})]})},u2=({setCursorHovering:o})=>{const t=we.useRef([]),i=c=>{c&&!t.current.includes(c)&&t.current.push(c)};we.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>t.current.forEach(d=>d&&c.observe(d)),100),()=>c.disconnect()},[]);const s=()=>{alert(`PARTNERSHIP NOTICE: 

Our Partner Onboarding system is currently undergoing scheduled maintenance to improve our global network infrastructure. 

Please send your partnership proposal directly to our management at: projects@kreavityworks.com 

We look forward to collaborating with you.`)},l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return g.jsx("div",{className:"min-h-screen bg-white text-black pt-32 pb-32",children:g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("div",{className:"min-h-[60vh] flex flex-col justify-center mb-24",children:[g.jsx("h5",{ref:i,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${l}`,children:"The Growth Catalyst Program"}),g.jsxs("h1",{ref:i,className:`text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] mb-8 ${l} delay-100`,children:["Empowering ",g.jsx("br",{}),g.jsx("span",{className:"text-black/40",children:"Digital Architects."})]}),g.jsx("p",{ref:i,className:`text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-12 ${l} delay-200`,children:"Kreavity Works opens doors for high-performance individuals to join our global ecosystem as Strategic Partners. Access elite projects, world-class AI infrastructure, and limitless commissions."}),g.jsx("div",{ref:i,className:`${l} delay-300`,children:g.jsxs("button",{onClick:s,className:"bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group shadow-xl",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:["Join the Network ",g.jsx(Ns,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-24",children:[{title:"Independent Specialist",sub:"Freelance",icon:g.jsx(ib,{size:32}),desc:"For experts (Designers, Developers, AI Strategists) who want to work on elite projects based on the 25 Global Implementation Principles."},{title:"Strategic Affiliate",sub:"Project Agent",icon:g.jsx(Ab,{size:32}),desc:"For connectors with access to high-scale clients seeking exclusive commissions from every successfully executed project."},{title:"Agency Partner",sub:"White Label",icon:g.jsx(sb,{size:32}),desc:"For boutique agencies looking to leverage Kreavity Works' technical infrastructure for their clients, enabling scalability without operational overhead."}].map((c,d)=>g.jsxs("div",{ref:i,className:`p-8 border border-black/5 rounded-2xl hover:border-black/20 hover:bg-neutral-50 transition-all duration-500 group ${l}`,style:{transitionDelay:`${d*100}ms`},children:[g.jsx("div",{className:"mb-6 p-4 bg-white rounded-full w-fit shadow-sm text-black/80 group-hover:text-black group-hover:scale-110 transition-all",children:c.icon}),g.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-black/40 mb-2",children:c.sub}),g.jsx("h3",{className:"text-2xl font-medium tracking-tight mb-4",children:c.title}),g.jsx("p",{className:"text-black/60 leading-relaxed",children:c.desc})]},d))})]})})},Vx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],f2=[{id:"01",title:"UI/UX Design"},{id:"02",title:"App Development"},{id:"03",title:"Brand Identity"},{id:"04",title:"Motion Graphic"},{id:"05",title:"AI Tools Development"},{id:"06",title:"Social Media"},{id:"07",title:"E-Commerce"},{id:"08",title:"Platform Banner & Poster"},{id:"09",title:"Landing Page"},{id:"10",title:"Material Print Design"}],d2=({selectedDate:o,onSelect:t})=>{const i=["Su","Mo","Tu","We","Th","Fr","Sa"],s=new Date;s.setHours(0,0,0,0);const l=s.getFullYear(),d=((m,p)=>{const _=[];for(let x=0;x<p;x++){const b=new Date(m,x,1);_.push(b)}return _})(l,12),h=m=>{const p=m.getFullYear(),_=m.getMonth(),x=new Date(p,_+1,0).getDate(),b=new Date(p,_,1).getDay();return{days:x,firstDay:b}};return g.jsxs("div",{className:"bg-white border border-black/10 rounded-2xl w-full max-w-md h-80 overflow-y-auto overflow-x-hidden relative scrollbar-hide",children:[g.jsx("div",{className:"sticky top-0 bg-white/95 backdrop-blur z-10 p-4 border-b border-black/5",children:g.jsx("div",{className:"grid grid-cols-7 gap-1",children:i.map(m=>g.jsx("span",{className:"text-center text-xs font-mono text-black/40 uppercase",children:m},m))})}),g.jsx("div",{className:"p-4 space-y-8",children:d.map((m,p)=>{const _=m.getFullYear(),x=m.getMonth(),{days:b,firstDay:M}=h(m),A=m.toLocaleString("default",{month:"long",year:"numeric"}),T=Array(M).fill(null),S=Array.from({length:b},(v,U)=>U+1);return g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-medium mb-4 sticky top-12 bg-white/80 backdrop-blur w-fit px-2 py-1 rounded",children:A}),g.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[T.map((v,U)=>g.jsx("div",{},`empty-${U}`)),S.map(v=>{const U=`${A} ${v}`,D=o===U,I=new Date(_,x,v)<=s;return g.jsx("button",{disabled:I,onClick:F=>{F.preventDefault(),t(U)},className:`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 
                                                ${I?"text-black/10 cursor-not-allowed hover:bg-transparent":D?"bg-black text-white shadow-md scale-110":"text-black/70 hover:bg-black/5 hover:text-black"}`,children:v},v)})]})]},p)})})]})},jx=({label:o,isSelected:t,onClick:i,error:s,onMouseEnter:l,onMouseLeave:c,className:d})=>g.jsxs("button",{onClick:h=>{h.preventDefault(),i()},onMouseEnter:l,onMouseLeave:c,className:`relative overflow-hidden border text-sm transition-all duration-300 rounded-full group px-4 py-3
                ${t?"border-black":s?"border-red-200 bg-red-50/10":"border-black/10"}
                ${d}
            `,children:[g.jsx("span",{className:`absolute inset-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${t?"translate-y-0":"translate-y-[100%] group-hover:translate-y-0"}
             `}),g.jsx("span",{className:`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap
                ${t?"text-white":"text-black group-hover:text-white"}
                ${s&&!t?"text-red-500":""}
             `,children:o})]}),h2=({isOpen:o,onClose:t,setCursorHovering:i,initialInterest:s=null,navigateTo:l})=>{const[c,d]=we.useState([]),[h,m]=we.useState(null),[p,_]=we.useState(null),[x,b]=we.useState([]),[M,A]=we.useState(!1),[T,S]=we.useState(!1),[v,U]=we.useState(Vx[0]),[D,P]=we.useState(!1),[I,F]=we.useState(""),z=we.useMemo(()=>Vx.filter(W=>W.name.toLowerCase().includes(I.toLowerCase())||W.code.includes(I)),[I]),[Z,w]=we.useState({name:"",email:"",phone:"",details:""}),[N,V]=we.useState({}),ie=we.useRef(null),ae=we.useRef(null),he=we.useRef(null),oe=we.useRef(null),B=we.useRef(null),k=we.useRef(null);if(we.useEffect(()=>{const W=ce=>{k.current&&!k.current.contains(ce.target)&&P(!1)};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},[]),we.useEffect(()=>{s&&o&&(c.includes(s)||d(W=>[...W,s]))},[s,o]),!o)return null;const Q=W=>{c.includes(W)?d(c.filter(ce=>ce!==W)):d([...c,W])},ye=["1K - 5K","5K - 10K","10K - 25K","25K - 50K","50K - 100K"],_e=W=>{m(W)},O=W=>{if(W.target.files&&W.target.files.length>0){const ce=Array.from(W.target.files);b(Ce=>[...Ce,...ce]),W.target.value=""}},ne=W=>{b(ce=>ce.filter((Ce,He)=>He!==W))},ge=()=>{B.current.click()},Ee=W=>{const{name:ce,value:Ce}=W.target;w(He=>({...He,[ce]:Ce}))},Fe=()=>{alert(`Our automated submission system is currently undergoing scheduled maintenance. 

Please contact us directly via email at: projects@kreavityworks.com 

We look forward to building your vision.`)};return g.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[g.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:t}),g.jsxs("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:[g.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[g.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Start a Project"}),g.jsx("button",{onClick:t,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:g.jsx(Ds,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),g.jsxs("div",{className:"p-6 md:p-12 space-y-16 overflow-y-auto overflow-x-hidden h-full",children:[g.jsxs("div",{ref:ie,className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"01. I'm interested in..."}),g.jsx("div",{className:"flex flex-wrap gap-2",children:f2.map(W=>g.jsx(jx,{label:W.title,isSelected:c.includes(W.title),onClick:()=>Q(W.title),className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},W.id))})]}),g.jsxs("div",{ref:ae,className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"02. Your Details"}),g.jsx("input",{name:"name",value:Z.name,onChange:Ee,type:"text",placeholder:"Your Name",className:"w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"}),g.jsx("input",{name:"email",value:Z.email,onChange:Ee,type:"email",placeholder:"Email Address",className:"w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"}),g.jsxs("div",{className:"space-y-1 flex items-end gap-4 relative",children:[g.jsxs("div",{className:"w-1/3 relative",ref:k,children:[g.jsxs("button",{onClick:()=>P(!D),className:"w-full text-left border-b border-black/10 pb-4 text-2xl md:text-3xl flex items-center gap-2 truncate",children:[g.jsx("span",{className:"text-black",children:v.code}),g.jsx(Yx,{size:16,className:"opacity-50"})]}),D&&g.jsx("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-y-auto",children:z.map(W=>g.jsxs("button",{onClick:()=>{U(W),P(!1)},className:"w-full text-left px-4 py-3 hover:bg-black/5 text-sm flex justify-between items-center group",children:[g.jsx("span",{children:W.name}),g.jsx("span",{className:"text-black/40 group-hover:text-black font-mono",children:W.code})]},W.code+W.name))})]}),g.jsx("input",{name:"phone",value:Z.phone,onChange:Ee,type:"tel",placeholder:"Phone Number",className:"w-2/3 text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20"})]})]}),g.jsxs("div",{ref:he,className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"03. Project Details"}),g.jsx("textarea",{name:"details",value:Z.details,onChange:Ee,placeholder:"Tell us about the project...",rows:5,className:"w-full text-xl md:text-2xl border-b border-black/10 pb-4 outline-none focus:border-black resize-none bg-transparent placeholder:text-black/20"})]})]}),g.jsxs("div",{ref:oe,className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"04. Project Budget (USD)"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:ye.map(W=>g.jsx(jx,{label:W,isSelected:h===W,onClick:()=>_e(W),className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},W))})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start",children:[g.jsxs("div",{className:"space-y-6 h-full",children:[g.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["05. Attachments ",g.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),g.jsx("input",{ref:B,type:"file",multiple:!0,accept:".jpg,.jpeg,.png,.pdf",className:"hidden",onChange:O}),x.length===0?g.jsxs("div",{onClick:ge,className:"border border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/5 transition-colors group h-80",children:[g.jsx("div",{className:"w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-black/50 group-hover:scale-110 transition-transform",children:g.jsx(Rb,{size:20})}),g.jsx("div",{className:"text-center",children:g.jsx("span",{className:"text-sm text-black/60 block font-medium",children:"Click to upload files"})})]}):g.jsx("div",{className:"space-y-4 h-80 overflow-y-auto",children:x.map((W,ce)=>g.jsxs("div",{className:"flex items-center justify-between p-4 bg-neutral-50 border border-black/5 rounded-xl",children:[g.jsx("span",{className:"text-sm font-medium text-black/80 truncate",children:W.name}),g.jsx("button",{onClick:()=>ne(ce),className:"p-2 text-black/30 hover:text-red-500",children:g.jsx(Pb,{size:16})})]},ce))})]}),g.jsxs("div",{className:"space-y-6 h-full",children:[g.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["06. Schedule a Call ",g.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),g.jsx(d2,{selectedDate:p,onSelect:_})]})]})]}),g.jsxs("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-between items-center z-20",children:[g.jsx("img",{src:"/brand/logo.png",alt:"Logo",className:"h-8 w-auto object-contain opacity-50 grayscale hidden md:block"}),g.jsxs("button",{onClick:Fe,className:"w-full md:w-auto bg-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] active:scale-95",children:["Submit Proposal ",g.jsx(Ns,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})]})]})]})},Xx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],p2=({isOpen:o,onClose:t,setCursorHovering:i,selectedCountry:s,setSelectedCountry:l})=>{const[c,d]=we.useState(Xx[0]),h=s||c,m=l||d,[p,_]=we.useState(null),[x,b]=we.useState({name:"",email:"",phone:"",link:"",intro:""}),[M,A]=we.useState(!1),[T,S]=we.useState(!1),[v,U]=we.useState(!1),[D,P]=we.useState(""),I=we.useRef(null),F=we.useMemo(()=>Xx.filter(w=>w.name.toLowerCase().includes(D.toLowerCase())||w.code.includes(D)),[D]);we.useEffect(()=>{if(o){if(window.emailjs){window.emailjs.init("2hhIuPTWeJ0RUPxPo");return}const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",w.async=!0,w.onload=()=>{console.log("Partner System Ready"),window.emailjs.init("2hhIuPTWeJ0RUPxPo")},document.body.appendChild(w)}},[o]),we.useEffect(()=>{const w=N=>{I.current&&!I.current.contains(N.target)&&U(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);const z=w=>{const{name:N,value:V}=w.target;b(ie=>({...ie,[N]:V}))},Z=()=>{if(!x.name||!x.email||!p||!x.link){alert("Please fill in all required fields.");return}A(!0);const w=window.emailjs;w?w.send("service_7ow5sqa","template_ia9upwv",{from_name:x.name,user_email:x.email,phone_number:`${h.code} ${x.phone}`,partner_type:p,region_location:h.name,portfolio_url:x.link,message:x.intro,company_link:"https://kreavityworks.com/partner",year:new Date().getFullYear()},"2hhIuPTWeJ0RUPxPo").then(()=>{A(!1),S(!0)}).catch(N=>{A(!1),alert("Failed to send application. Please try again."),console.error("EmailJS Error:",N)}):(A(!1),alert("System connecting... please try again in 3 seconds."))};return o?g.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[g.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:t}),g.jsx("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:T?g.jsxs("div",{className:"absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center",children:[g.jsx("div",{className:"w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce",children:g.jsx(qx,{size:48,strokeWidth:3})}),g.jsx("h2",{className:"text-4xl md:text-5xl font-medium tracking-tighter mb-4",children:"Application Sent."}),g.jsxs("p",{className:"text-xl text-black/60 max-w-md mb-12 leading-relaxed",children:["Welcome to the network, ",x.name,". We will review your profile and contact you for the next steps."]}),g.jsxs("button",{onClick:t,className:"bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl",children:["Close ",g.jsx(Ds,{size:20})]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[g.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Become a Partner"}),g.jsx("button",{onClick:t,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:g.jsx(Ds,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),g.jsxs("div",{className:"p-6 md:p-12 space-y-12 overflow-y-auto overflow-x-hidden h-full",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"01. Select Partner Type"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:["Independent Specialist","Strategic Affiliate","Agency Partner"].map(w=>g.jsxs("button",{onClick:()=>_(w),className:`p-6 border rounded-xl text-left transition-all duration-300 hover:border-black group ${p===w?"border-black bg-black text-white":"border-black/10"}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:w}),g.jsxs("p",{className:`text-sm ${p===w?"text-white/70":"text-black/50"}`,children:[w==="Independent Specialist"&&"For freelancers & experts.",w==="Strategic Affiliate"&&"For connectors & agents.",w==="Agency Partner"&&"White-label infrastructure."]})]},w))})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"02. Personal Info"}),g.jsx("input",{name:"name",value:x.name,onChange:z,type:"text",placeholder:"Full Name",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsx("input",{name:"email",value:x.email,onChange:z,type:"email",placeholder:"Email Address",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsxs("div",{className:"relative",ref:I,children:[g.jsxs("button",{onClick:()=>U(!v),className:"w-full text-left border-b border-black/10 pb-4 text-xl focus:border-black flex items-center gap-2 transition-colors",children:[g.jsx("span",{children:h.code})," ",g.jsx(Yx,{size:16,className:"opacity-50"}),g.jsx("input",{name:"phone",value:x.phone,onChange:z,type:"tel",placeholder:"Phone Number",className:"w-full bg-transparent outline-none ml-2 placeholder:text-black/20",onClick:w=>w.stopPropagation()})]}),v&&g.jsxs("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col",children:[g.jsx("div",{className:"p-2 border-b border-black/5",children:g.jsxs("div",{className:"flex items-center gap-2 bg-neutral-100 rounded px-2 py-1",children:[g.jsx(Db,{size:14,className:"opacity-50"}),g.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-transparent text-sm outline-none",value:D,onChange:w=>P(w.target.value),autoFocus:!0})]})}),g.jsx("div",{className:"overflow-y-auto flex-1",children:F.map(w=>g.jsxs("button",{onClick:()=>{m(w),U(!1)},className:"w-full text-left px-4 py-2 hover:bg-black/5 text-sm flex justify-between",children:[g.jsx("span",{children:w.name}),g.jsx("span",{className:"text-black/40",children:w.code})]},w.code+w.name))})]})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"03. Professional Profile"}),g.jsx("input",{name:"link",value:x.link,onChange:z,type:"text",placeholder:"Portfolio / LinkedIn URL",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsx("textarea",{name:"intro",value:x.intro,onChange:z,placeholder:"Brief Introduction / Vision...",rows:3,className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent resize-none transition-colors placeholder:text-black/20"})]})]})]}),g.jsx("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-end z-20",children:g.jsx("button",{onClick:Z,disabled:M,className:`bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-xl ${M?"opacity-70 cursor-not-allowed":""}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:M?g.jsxs(g.Fragment,{children:[g.jsx(bb,{size:24,className:"animate-spin"})," Processing..."]}):g.jsxs(g.Fragment,{children:["Join Network ",g.jsx(Ns,{size:20})]})})})]})}),g.jsx("style",{children:`
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
            `})]}):null},m2=({project:o,allProjects:t,setCursorHovering:i,setCursorText:s,navigateTo:l,setIsEyeMode:c,openContact:d})=>{const h=we.useRef([]),m=A=>{const T=A.target,S=T.src;if(T.getAttribute("data-tried-fallback")==="true"){if(S.endsWith(".jpg")){T.src=S.replace(".jpg",".jpeg"),T.setAttribute("data-tried-fallback","final");return}T.style.display="none";return}T.setAttribute("data-tried-fallback","true"),S.includes(".png")?T.src=S.replace(".png",".jpg"):S.includes(".jpg")?T.src=S.replace(".jpg",".png"):S.includes(".jpeg")?T.src=S.replace(".jpeg",".png"):T.style.display="none"};we.useEffect(()=>{h.current=[];const A=new IntersectionObserver(S=>{S.forEach(v=>{v.isIntersecting&&(v.target.classList.add("opacity-100","translate-y-0"),v.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.05,rootMargin:"0px 0px -100px 0px"}),T=setTimeout(()=>{document.querySelectorAll(".animate-on-scroll").forEach(v=>A.observe(v))},100);return()=>{A.disconnect(),clearTimeout(T)}},[o]);const p=t.findIndex(A=>A.id===o.id),_=(p+1)%t.length,x=t[_],b=p===t.length-1,M="animate-on-scroll opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"pt-32 min-h-screen bg-white text-black pb-20",children:[g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("button",{onClick:()=>l("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12 group ${M}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx(Ph,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Projects"]}),g.jsxs("div",{className:`flex flex-col gap-4 mb-16 ${M}`,children:[g.jsxs("div",{className:"flex items-center gap-4 text-sm font-mono tracking-widest text-black/40 uppercase",children:[g.jsx("span",{children:o.category}),g.jsx("span",{className:"w-12 h-[1px] bg-black/20"}),g.jsx("span",{children:o.id})]}),g.jsx("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none",children:o.title})]}),g.jsxs("div",{className:`w-full aspect-video bg-neutral-100 rounded-2xl overflow-hidden relative cursor-none mb-24 shadow-sm ${M} delay-100`,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[o.image?g.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover",onError:m},o.image):g.jsx("div",{className:"absolute bottom-8 left-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest",children:"Project Visual"}),g.jsx("div",{className:"absolute inset-0 bg-black/5 mix-blend-multiply"})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32",children:[g.jsxs("div",{className:`lg:col-span-7 ${M} delay-200`,children:[g.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Overview"}),g.jsx("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed font-light",children:o.detailedDesc||o.desc})]}),g.jsxs("div",{className:`lg:col-span-5 flex flex-col justify-between ${M} delay-300`,children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Deliverables"}),g.jsxs("ul",{className:"space-y-4",children:[g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Strategy & Research"]}),g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Visual Design System"]}),g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Development & QA"]})]})]}),g.jsxs("button",{onClick:d,className:"mt-12 w-full py-8 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:["Start Project ",g.jsx(Ns,{size:16})]})]})]})]}),g.jsx("div",{className:`w-full bg-[#050505] text-white py-32 mb-32 ${M}`,children:g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8",children:[g.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter leading-none",children:"Project Gallery"}),g.jsx("span",{className:"text-white/40 text-sm hidden md:block uppercase tracking-widest mb-2",children:"Visual Exploration"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",children:[1,2,3,4].map((A,T)=>g.jsxs("div",{className:`aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden relative group cursor-pointer ${M}`,style:{transitionDelay:`${T*100}ms`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[g.jsx("div",{className:"absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),g.jsx("img",{src:`/${o.folder}/detail-${A}${o.fileExt||".png"}`,alt:`Detail ${A}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:m})]},`${o.id}-detail-${T}`))})]})}),!b&&g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:g.jsxs("div",{className:`border-t border-black/10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer ${M}`,onClick:()=>l("project",x.id),onMouseEnter:()=>s("NEXT"),onMouseLeave:()=>s(""),children:[g.jsxs("div",{className:"flex flex-col gap-4 order-2 md:order-1",children:[g.jsx("p",{className:"text-black/40 uppercase tracking-widest text-sm mb-4",children:"Next Featured Project"}),g.jsx("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter group-hover:text-black/60 transition-colors",children:x.title}),g.jsxs("div",{className:"flex items-center gap-4 text-black/40 group-hover:text-black transition-colors",children:[g.jsx("span",{className:"font-mono",children:x.id}),g.jsx(Ns,{size:24,className:"transform group-hover:translate-x-2 transition-transform"})]})]}),g.jsxs("div",{className:"order-1 md:order-2 aspect-video bg-neutral-100 rounded-lg overflow-hidden relative shadow-sm group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",children:[g.jsx("div",{className:"absolute inset-0 bg-neutral-200/50 flex items-center justify-center",children:x.image?g.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-cover",onError:m},`next-${x.id}`):g.jsx("span",{className:"text-black/10 text-6xl font-bold tracking-tighter",children:x.id})}),g.jsx("div",{className:"absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] uppercase tracking-widest",children:"Preview"})]})]})})]})},g2=({setCursorHovering:o,setCursorText:t,navigateTo:i})=>{const s=we.useRef([]),l=h=>{h&&!s.current.includes(h)&&s.current.push(h)};we.useEffect(()=>{const h=new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting&&(p.target.classList.add("opacity-100","translate-y-0"),p.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{s.current.forEach(m=>m&&h.observe(m))},100),()=>h.disconnect()},[]);const c=[{id:"talent-nando",name:"Nando",role:"Fullstack UI/UX Design",desc:"Experience architect bridging technical intelligence with intuitive design for world-class digital product scalability and performance."},{id:"talent-hadist",name:"Hadist",role:"Visual Design Specialist",desc:"Exploring radical aesthetics to create visual systems that dominate market attention without compromising core design functionality."},{id:"talent-syams",name:"Syams",role:"Brand & Logo Specialist",desc:"Specializing in converting corporate identities into iconic and strategic visual symbols. Mastering brand narratives through design precision."}],d="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[g.jsxs("article",{className:"mb-32",children:[g.jsx("h5",{ref:l,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${d}`,children:"The Collective Network"}),g.jsxs("h1",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer",children:[g.jsx("span",{ref:l,className:`block ${d}`,children:"The Convergence"}),g.jsx("span",{ref:l,className:`block ${d} delay-100`,children:"of Elite"}),g.jsx("span",{ref:l,className:`block ${d} delay-200 text-black/40`,children:"Intelligence."})]}),g.jsx("div",{ref:l,className:`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${d} delay-300`,children:g.jsxs("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed pl-6",children:["We don't just gather people; we build a collective of specialists. Each individual is a primary pillar integrating ",g.jsx("strong",{children:"Radical Aesthetics"})," with system intelligence."]})})]}),g.jsxs("section",{className:"snap-start mb-40",children:[g.jsxs("div",{className:"flex justify-between items-end mb-16 border-b border-black/10 pb-8",children:[g.jsx("h2",{ref:l,className:`text-4xl font-medium tracking-tighter ${d}`,children:"Subject Matter Experts"}),g.jsx("span",{ref:l,className:`hidden md:block text-black/40 ${d}`,children:"High-Performance Individuals"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-black/10",children:c.map((h,m)=>g.jsxs("div",{ref:l,className:`group relative p-10 border-r border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${d}`,style:{transitionDelay:`${m*100}ms`},onMouseEnter:()=>t("PORTFOLIO"),onMouseLeave:()=>t(""),onClick:()=>i(h.id),children:[g.jsx("div",{className:"absolute top-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("div",{className:"flex flex-col h-full justify-between",children:[g.jsxs("div",{className:"space-y-8",children:[g.jsx("div",{className:"flex justify-between items-start",children:g.jsxs("div",{className:"text-black/30 font-mono text-sm",children:["0",m+1]})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-4xl font-medium tracking-tight mb-3",children:h.name}),g.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-black/40 group-hover:text-black/70 transition-colors mb-6",children:h.role}),g.jsx("p",{className:"text-base text-black/60 leading-relaxed group-hover:text-black/80 transition-colors line-clamp-5",children:h.desc})]})]}),g.jsxs("div",{className:"mt-12 flex items-center gap-2 text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-2",children:[g.jsx("span",{className:"text-xs font-bold uppercase tracking-widest",children:"View Full Profile"}),g.jsx(Ns,{size:16})]})]})]},m))})]}),g.jsx("section",{className:"snap-start py-32 border-t border-black/10 text-center",children:g.jsxs("div",{ref:l,className:`${d}`,children:[g.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter mb-8",children:"Ready to Scale Your Reach?"}),g.jsx("p",{className:"text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed",children:"We are expanding our ecosystem. If you operate at the intersection of high-scale strategy and elite execution, join us as a strategic partner."}),g.jsxs("button",{onClick:()=>i("partner"),className:"relative overflow-hidden group border border-black/20 rounded-full px-12 py-5 inline-flex items-center transition-all duration-300 hover:border-black",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 font-medium",children:"Become Partner Agent"})]})]})})]})},Bd=({navigateTo:o,setCursorHovering:t})=>{const i=we.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};we.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>i.current.forEach(d=>d&&c.observe(d)),100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return g.jsxs("div",{className:"min-h-screen bg-white text-black pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("button",{onClick:()=>o("talent-directory"),className:"font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 hover:opacity-100 mb-20 flex items-center gap-3 transition-all",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[g.jsx(Ph,{size:14})," Back to Collective"]}),g.jsxs("section",{className:"mb-40",children:[g.jsxs("div",{className:"mb-24",children:[g.jsx("h5",{ref:s,className:`text-[10px] text-black/40 mb-8 uppercase tracking-[0.3em] ${l}`,children:"Principal Strategist"}),g.jsxs("h1",{ref:s,className:`text-7xl md:text-9xl lg:text-[13rem] font-medium tracking-tighter leading-[0.8] ${l} delay-100`,children:["SYAMSUL ",g.jsx("br",{})," RIZAL"]})]}),g.jsxs("div",{ref:s,className:`max-w-4xl border-l border-black/10 pl-8 md:pl-12 mt-20 ${l} delay-300`,children:[g.jsx("p",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-10 italic",children:"Design That Thinks.   Strategy That Speaks."}),g.jsx("p",{className:"text-2xl md:text-4xl text-black/80 leading-[1.1] tracking-tighter mb-10",children:'"Building a brand is not just about making a logo. It is about carving meaning that sticks in human minds."'}),g.jsx("p",{className:"text-base md:text-lg text-black/50 leading-relaxed max-w-2xl",children:"Every visual work is born from strategic thinking based on research and philosophy. The approach used is not just about aesthetics, but how visuals reflect identity and the brand's journey."})]})]}),g.jsxs("section",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 mb-40 border-y border-black/5 py-16 font-mono uppercase tracking-tighter",children:[g.jsxs("div",{ref:s,className:l,children:[g.jsx("h3",{className:"text-4xl md:text-6xl font-medium",children:"2016"}),g.jsx("p",{className:"text-[10px] text-black/30 mt-4 tracking-widest",children:"Established"})]}),g.jsxs("div",{ref:s,className:`${l} delay-100`,children:[g.jsx("h3",{className:"text-4xl md:text-6xl font-medium",children:"200+"}),g.jsx("p",{className:"text-[10px] text-black/30 mt-4 tracking-widest",children:"Brands Collaborated"})]}),g.jsxs("div",{ref:s,className:`${l} delay-200`,children:[g.jsx("h3",{className:"text-4xl md:text-6xl font-medium",children:"5.0"}),g.jsx("p",{className:"text-[10px] text-black/30 mt-4 tracking-widest",children:"Google Rating"})]}),g.jsxs("div",{ref:s,className:`${l} delay-300`,children:[g.jsx("h3",{className:"text-4xl md:text-6xl font-medium",children:"100%"}),g.jsx("p",{className:"text-[10px] text-black/30 mt-4 tracking-widest",children:"Systematic Process"})]})]}),g.jsxs("section",{className:"mb-40",children:[g.jsxs("div",{className:"flex items-center gap-6 mb-20",children:[g.jsx("span",{className:"font-mono text-[10px] text-black/30 uppercase tracking-[0.5em]",children:"[ Core Services ]"}),g.jsx("div",{className:"h-[1px] bg-black/5 flex-grow"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 border-l border-t border-black/10",children:[{id:"01",t:"Brand Strategy Consultation",d:"Unraveling essence, purpose, and positioning."},{id:"02",t:"Logo & Visual Identity",d:"Creating solid, adaptive symbols rooted in strategy."},{id:"03",t:"Brand Revitalization",d:"Renewing identity direction and look to remain relevant."},{id:"04",t:"Consultation & Mentoring",d:"1-on-1 guidance for business owners and creators."}].map((c,d)=>g.jsxs("div",{ref:s,className:`p-12 md:p-20 border-r border-b border-black/10 group hover:bg-neutral-50 transition-colors ${l}`,children:[g.jsx("span",{className:"font-mono text-[10px] text-black/20 mb-10 block tracking-[0.3em]",children:c.id}),g.jsx("h4",{className:"text-3xl md:text-4xl font-medium mb-6 tracking-tight",children:c.t}),g.jsx("p",{className:"text-black/40 text-sm md:text-base leading-relaxed group-hover:text-black/60 transition-colors max-w-sm",children:c.d})]},d))})]}),g.jsxs("section",{className:"bg-black text-white p-12 md:p-24 rounded-[3rem] flex flex-col lg:flex-row justify-between items-center gap-16 mx-auto relative overflow-hidden group",children:[g.jsxs("div",{className:"max-w-2xl text-left z-10",children:[g.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter mb-10 leading-[1.05]",children:"Working with Systemic Methodology."}),g.jsxs("div",{className:"space-y-6 opacity-60",children:[g.jsxs("div",{className:"flex gap-6 items-start",children:[g.jsx("div",{className:"w-6 h-[1px] bg-white mt-3 shrink-0"}),g.jsxs("p",{className:"text-sm md:text-base leading-relaxed",children:[g.jsx("strong",{children:"Upscale Your Brand:"})," More professional appearance based on strategic analysis."]})]}),g.jsxs("div",{className:"flex gap-6 items-start",children:[g.jsx("div",{className:"w-6 h-[1px] bg-white mt-3 shrink-0"}),g.jsxs("p",{className:"text-sm md:text-base leading-relaxed",children:[g.jsx("strong",{children:"Work Systematically:"}),' Using the "Brandflow Quantum Framework" from research to finishing.']})]})]})]}),g.jsxs("button",{onClick:()=>o("home","contact"),className:"bg-white text-black px-14 py-7 rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-all duration-500 shrink-0 z-10",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[g.jsx("span",{className:"text-sm uppercase tracking-[0.2em]",children:"Start Project"}),g.jsx(zh,{size:22})]})]})]})},x2=({setCursorHovering:o,navigateTo:t,openContact:i})=>{const s=we.useRef(null),[l,c]=we.useState(null),[d,h]=we.useState(null),[m,p]=we.useState(!1),_=we.useRef([]),x=S=>{S&&!_.current.includes(S)&&_.current.push(S)};we.useEffect(()=>{const S=new IntersectionObserver(v=>{v.forEach(U=>{U.isIntersecting&&(U.target.classList.add("opacity-100","translate-y-0"),U.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return _.current.forEach(v=>v&&S.observe(v)),()=>S.disconnect()},[]);const b=S=>{if(l===null)return 1;const v=S*60+30,U=Math.abs(l-v),D=150;return U>D?1:Math.max(1,Math.min(1+(1.5-U/D),2.2))},M=S=>{navigator.clipboard.writeText(S),p(!0),setTimeout(()=>p(!1),2e3)},A=[{icon:g.jsx(mb,{size:20}),link:"https://github.com/kreavityworks"},{icon:g.jsx(xb,{size:20}),link:"https://www.instagram.com/kreavity_works/"},{icon:g.jsx("span",{className:"font-bold text-xs",children:"UP"}),link:"https://www.upwork.com/agencies/1984085958253630159/"},{icon:g.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:g.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),link:"https://x.com/KreavityWorks"}],T="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("footer",{id:"contact",className:"snap-start min-h-screen px-6 md:px-12 relative overflow-hidden bg-white text-black py-32",children:[d&&g.jsx("div",{className:"fixed inset-0 z-[9999] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-4 animate-in fade-in duration-500",children:g.jsxs("div",{className:"bg-white text-black p-8 rounded-2xl shadow-2xl relative max-w-sm w-full border border-black/5 flex flex-col items-center text-center animate-in zoom-in-95 duration-500",children:[g.jsx("button",{onClick:()=>h(null),className:"absolute top-4 right-4 text-black/50 hover:text-black transition-all hover:scale-110 bg-neutral-100 rounded-full p-2",children:g.jsx(Ds,{size:20})}),g.jsx("div",{className:"w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards",children:d.type==="Phone"?g.jsx(Fg,{size:36}):g.jsx(Bg,{size:36})}),g.jsxs("div",{className:"space-y-2 mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards",children:[g.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-black/40",children:d.type}),g.jsx("p",{className:"text-2xl font-medium tracking-tighter break-all",children:d.value})]}),g.jsx("button",{onClick:()=>M(d.value),className:`w-full py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards ${m?"bg-green-600":"hover:scale-[1.02] hover:shadow-lg"}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:g.jsxs("span",{className:`flex items-center gap-2 relative z-10 ${m?"scale-110":""} transition-transform`,children:[m?g.jsx(qx,{size:18}):g.jsx(cb,{size:18}),m?"Copied!":"Copy to Clipboard"]})})]})}),g.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-30",children:[g.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-blob mix-blend-multiply"}),g.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"})]}),g.jsxs("div",{className:"max-w-[1600px] mx-auto w-full relative z-10",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24",children:[g.jsxs("div",{ref:x,className:`${T}`,children:[g.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter mb-8",children:"Have an idea?"}),g.jsx("button",{onClick:i,className:"relative overflow-hidden group !border-b-2 !border-t-0 !border-l-0 !border-r-0 !border-black/20 !rounded-none pb-4 flex items-center gap-6 overflow-visible cursor-pointer",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:g.jsxs("span",{className:"relative z-10 flex items-center gap-6 group-hover:gap-10 transition-all duration-500 text-4xl md:text-6xl font-light",children:["Contact Us ",g.jsx(Ns,{size:56})]})}),g.jsxs("div",{className:"flex gap-4 mt-8",children:[g.jsxs("button",{onClick:()=>h({type:"Phone",value:"+62 821-2544-9866"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:g.jsx(Fg,{size:24})})]}),g.jsxs("button",{onClick:()=>h({type:"Email",value:"projects@kreavityworks.com"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:g.jsx(Bg,{size:24})})]})]})]}),g.jsxs("div",{ref:x,className:`flex flex-col gap-4 text-black/50 text-sm ${T} delay-200`,children:[g.jsxs("p",{children:["Kreavity Works HQ",g.jsx("br",{}),"Jakarta, Indonesia"]}),g.jsx("p",{className:"mt-4 text-black",children:"projects@kreavityworks.com"}),g.jsx("div",{ref:s,className:"flex items-end gap-2 mt-8 h-16",onMouseMove:S=>{const v=s.current.getBoundingClientRect();c(S.clientX-v.left)},onMouseLeave:()=>c(null),children:A.map((S,v)=>{const U=b(v);return g.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",style:{transform:`scale(${U})`},className:"w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 origin-bottom shadow-sm",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:S.icon},v)})})]})]}),g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium gap-10 md:gap-0",children:[g.jsxs("div",{className:"flex flex-row justify-center items-center gap-6 md:gap-8 flex-wrap",children:[g.jsx("button",{onClick:()=>t("privacy-policy"),className:"hover:text-black transition-colors",children:"Privacy Policy"}),g.jsxs("button",{onClick:()=>t("partner"),className:"hover:text-black relative group transition-colors",children:["Become Partner Agent",g.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"})]}),g.jsxs("button",{onClick:()=>t("talent-directory"),className:"hover:text-black relative group transition-colors",children:["The Collective",g.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"})]})]}),g.jsx("div",{className:"w-full md:w-auto text-center",children:g.jsx("p",{className:"opacity-60",children:"© 2026 KreavityWorks. All Rights Reserved."})})]})]})]})},v2=()=>{const[o,t]=we.useState("home"),[i,s]=we.useState(null),[l,c]=we.useState(!1),[d,h]=we.useState(!1),[m,p]=we.useState(!1),[_,x]=we.useState(!1),[b,M]=we.useState(null),[A,T]=we.useState(!1),[S,v]=we.useState(!1),[U,D]=we.useState(""),[P,I]=we.useState(!1),[F,z]=we.useState(!1),[Z,w]=we.useState(Fb[0]),N=we.useRef(null),V=we.useRef(null),ie=we.useRef(null),ae=we.useRef(null),he=k=>{M(k),p(!0)};we.useEffect(()=>{const Q=new URLSearchParams(window.location.search).get("p");if(Q){const ye=Q.replace("/","");window.history.replaceState(null,null,Q),t(ye)}},[]),we.useEffect(()=>{window.history.state||window.history.replaceState({page:"home"},"","/");const k=Q=>{Q.state&&Q.state.page?(t(Q.state.page),ae.current&&ae.current.scrollTo(0,0)):t("home")};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),we.useEffect(()=>{const k=ye=>{if(!N.current)return;const _e=ye.clientX,O=ye.clientY;let ne=1;U?ne=4:S?ne=5:A&&(ne=3.5),N.current.style.transform=`translate3d(${_e}px, ${O}px, 0) scale(${ne})`,N.current.style.opacity=P?"0":"1",V.current&&ie.current&&(U?(V.current.style.opacity="0",ie.current.style.opacity="1",ie.current.innerText=U,N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="black",N.current.style.color="white",N.current.style.border="none"):S?(V.current.style.opacity="1",ie.current.style.opacity="0",N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="white",N.current.style.color="black",N.current.style.border="none"):(V.current.style.opacity="0",ie.current.style.opacity="0",N.current.style.mixBlendMode="difference",N.current.style.backgroundColor="white",N.current.style.color="transparent"))};window.addEventListener("mousemove",k);const Q=setTimeout(()=>h(!0),700);return()=>{window.removeEventListener("mousemove",k),clearTimeout(Q)}},[A,S,U,P]);const oe=(k,Q=null)=>{if(c(!1),Q==="contact"){M(null),p(!0);return}if(k==="project"){const ye=Fd.find(_e=>_e.id===Q);ye&&(h(!1),setTimeout(()=>{s(ye),t("project"),window.history.pushState({page:"project",id:Q},"",`/project/${Q}`),h(!0),ae.current&&ae.current.scrollTo(0,0)},700));return}h(!1),setTimeout(()=>{t(k);const ye=k==="home"?"/":`/${k}`;window.history.pushState({page:k},"",ye),h(!0),setTimeout(()=>{if(ae.current&&ae.current.scrollTo(0,0),Q&&typeof Q=="string"){const _e=document.getElementById(Q);_e&&_e.scrollIntoView({behavior:"smooth"})}},50)},700)},B=()=>{z(!0),oe("home"),setTimeout(()=>z(!1),500)};return g.jsxs(g.Fragment,{children:[g.jsx(h2,{isOpen:m,onClose:()=>p(!1),setCursorHovering:T,initialInterest:b,navigateTo:oe}),g.jsx(p2,{isOpen:_,onClose:()=>x(!1),setCursorHovering:T,selectedCountry:Z,setSelectedCountry:w}),g.jsx("div",{className:`fixed inset-0 z-[10000] transition-all duration-700 ease-in-out pointer-events-none 
        ${d?"opacity-0 backdrop-blur-none":"opacity-100 backdrop-blur-3xl bg-white/10"}`}),g.jsxs("div",{ref:N,className:"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -mt-2 -ml-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out mix-blend-difference overflow-hidden",children:[g.jsx("span",{ref:V,className:"absolute opacity-0 transition-all duration-300 text-black flex items-center justify-center",children:g.jsx(hb,{size:4,strokeWidth:2.5})}),g.jsx("span",{ref:ie,className:"absolute opacity-0 text-[2px] font-bold tracking-widest text-white whitespace-nowrap"})]}),g.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-white/80 border-b border-black/5 text-black transition-all duration-700 ${d?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:[g.jsx("div",{className:`cursor-pointer select-none origin-left ${F?"animate-logo-reset":""}`,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),onClick:B,children:g.jsx("img",{src:"/brand/logo.png",alt:"KREAVITY WORKS",className:"h-10 md:h-12 w-auto object-contain"})}),g.jsxs("div",{className:"hidden md:flex items-center gap-8 text-sm tracking-tight font-medium text-black/70",children:[g.jsx("button",{onClick:()=>oe("home","why-choose-us"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Why Us"}),g.jsx("button",{onClick:()=>oe("workflow"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Workflow"}),g.jsx("button",{onClick:()=>oe("home","projects"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Projects"}),g.jsx("button",{onClick:()=>oe("company"),className:"hover:text-black cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Company"}),g.jsx("button",{onClick:()=>oe("home","contact"),className:"border border-black/10 rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:"Contact Us"})]}),g.jsx("button",{className:"md:hidden text-black transition-transform duration-300 active:scale-90",onClick:()=>c(!l),children:l?g.jsx(Ds,{size:24}):g.jsx(Eb,{size:24})})]}),l&&g.jsxs("div",{className:"fixed inset-0 bg-white/90 backdrop-blur-2xl z-[60] flex flex-col justify-center items-center gap-10 animate-in fade-in duration-500 overflow-hidden md:hidden",children:[g.jsx("button",{onClick:()=>oe("home"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-75",children:"Home"}),g.jsx("button",{onClick:()=>oe("workflow"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-100",children:"Workflow"}),g.jsx("button",{onClick:()=>oe("company"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-150",children:"Company"}),g.jsx("button",{onClick:()=>oe("talent-directory"),className:"text-4xl font-medium tracking-tighter text-black/40 hover:text-black transition-colors animate-in slide-in-from-bottom-4 duration-500 delay-200",children:"The Collective"}),g.jsx("button",{onClick:()=>c(!1),className:"mt-10 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-black/20 hover:text-black hover:border-black/20 transition-all duration-300 active:scale-95 animate-in slide-in-from-bottom-4 duration-500 delay-300",children:g.jsx(Ds,{size:28})})]}),g.jsxs("div",{ref:ae,className:"h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white",children:[o==="home"&&g.jsx(r2,{setCursorHovering:T,setIsEyeMode:v,setIsVideoHovering:I,navigateTo:oe}),o==="company"&&g.jsx(c2,{setCursorHovering:T,setCursorText:D}),o==="workflow"&&g.jsx(o2,{setCursorHovering:T}),o==="privacy-policy"&&g.jsx(l2,{setCursorHovering:T,navigateTo:oe}),o==="partner"&&g.jsx(u2,{setCursorHovering:T,openPartnerForm:()=>x(!0)}),o==="talent-directory"&&g.jsx(g2,{setCursorHovering:T,navigateTo:oe}),o==="talent-syams"&&g.jsx(Bd,{data:{firstName:"SYAMSUL",lastName:"RIZAL",role:"Principal Brand Strategist",tagline:"Design That Thinks. Strategy That Speaks.",quote:"Building a brand is not just about making a logo. It is about carving meaning.",bio:"Every visual work is born from strategic thinking based on research and philosophy.",stats:[{value:"2016",label:"Established"},{value:"200+",label:"Brands"},{value:"5.0",label:"Rating"},{value:"100%",label:"Systematic"}],services:[{title:"Brand Strategy",desc:"Unraveling essence and positioning."},{title:"Logo Identity",desc:"Creating solid symbols rooted in strategy."}]},navigateTo:oe,setCursorHovering:T}),o==="talent-nando"&&g.jsx(Bd,{data:{firstName:"NANDO",lastName:"M",role:"Senior Visual Design Specialist",tagline:"Visual Systems. AI-Accelerated Workflow.",quote:"Designing visual systems for high-growth B2B companies with 100% compliance.",bio:"I specialize in designing and implementing Visual Systems for high-growth B2B companies.",stats:[{value:"2023",label:"Current Role"},{value:"500+",label:"Connections"},{value:"B2B",label:"Expertise"},{value:"AI",label:"Integrated"}],services:[{title:"Visual Marketing",desc:"High-impact collateral and visual systems."},{title:"UI/UX Design",desc:"User-centric digital product scalability."}]},navigateTo:oe,setCursorHovering:T}),o==="talent-hadist"&&g.jsx(Bd,{data:{firstName:"HADIST",lastName:"SYECH",role:"Graphic Designer",tagline:"Visual Storyteller. Structural Clarity.",quote:"Branding is about direction, meaning, and connection.",bio:"Graphic designer focusing on creating engaging visuals and structural clarity for modern brands.",stats:[{value:"BINUS",label:"Education"},{value:"Visual",label:"Specialist"},{value:"2D",label:"Artistry"},{value:"100%",label:"Engaging"}],services:[{title:"Graphic Design",desc:"Pure visual communication and layout."},{title:"Visual Identity",desc:"Crafting modern assets for digital era."}]},navigateTo:oe,setCursorHovering:T}),o==="project"&&i&&g.jsx(m2,{project:i,allProjects:Fd,setCursorHovering:T,setCursorText:D,navigateTo:oe,setIsEyeMode:v,openContact:()=>he(i.title)}),g.jsx(x2,{setCursorHovering:T,navigateTo:oe,openContact:()=>p(!0)})]})]})};qy.createRoot(document.getElementById("root")).render(g.jsx(we.StrictMode,{children:g.jsx(v2,{})}));
