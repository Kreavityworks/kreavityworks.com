(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ed={exports:{}},Uo={};var Tg;function ky(){if(Tg)return Uo;Tg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var Ag;function Hy(){return Ag||(Ag=1,ed.exports=ky()),ed.exports}var g=Hy(),td={exports:{}},ot={};var wg;function Gy(){if(wg)return ot;wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function _(O,ae,ge){this.props=O,this.context=ae,this.refs=S,this.updater=ge||A}_.prototype.isReactComponent={},_.prototype.setState=function(O,ae){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ae,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=_.prototype;function D(O,ae,ge){this.props=O,this.context=ae,this.refs=S,this.updater=ge||A}var P=D.prototype=new U;P.constructor=D,T(P,_.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(O,ae,ge){var Re=ge.ref;return{$$typeof:o,type:O,key:ae,ref:Re!==void 0?Re:null,props:ge}}function N(O,ae){return w(O.type,ae,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function K(O){var ae={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ae[ge]})}var $=/\/+/g;function he(O,ae){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):ae.toString(36)}function se(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(ae){O.status==="pending"&&(O.status="fulfilled",O.value=ae)},function(ae){O.status==="pending"&&(O.status="rejected",O.reason=ae)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,ae,ge,Re,ke){var ie=typeof O;(ie==="undefined"||ie==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(ie){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case o:case t:fe=!0;break;case v:return fe=O._init,F(fe(O._payload),ae,ge,Re,ke)}}if(fe)return ke=ke(O),fe=Re===""?"."+he(O,0):Re,I(ke)?(ge="",fe!=null&&(ge=fe.replace($,"$&/")+"/"),F(ke,ae,ge,"",function(Me){return Me})):ke!=null&&(G(ke)&&(ke=N(ke,ge+(ke.key==null||O&&O.key===ke.key?"":(""+ke.key).replace($,"$&/")+"/")+fe)),ae.push(ke)),1;fe=0;var De=Re===""?".":Re+":";if(I(O))for(var me=0;me<O.length;me++)Re=O[me],ie=De+he(Re,me),fe+=F(Re,ae,ge,ie,ke);else if(me=M(O),typeof me=="function")for(O=me.call(O),me=0;!(Re=O.next()).done;)Re=Re.value,ie=De+he(Re,me++),fe+=F(Re,ae,ge,ie,ke);else if(ie==="object"){if(typeof O.then=="function")return F(se(O),ae,ge,Re,ke);throw ae=String(O),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return fe}function k(O,ae,ge){if(O==null)return O;var Re=[],ke=0;return F(O,Re,"","",function(ie){return ae.call(ge,ie,ke++)}),Re}function Q(O){if(O._status===-1){var ae=O._result;ae=ae(),ae.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ae)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ye={map:k,forEach:function(O,ae,ge){k(O,function(){ae.apply(this,arguments)},ge)},count:function(O){var ae=0;return k(O,function(){ae++}),ae},toArray:function(O){return k(O,function(ae){return ae})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ot.Activity=x,ot.Children=ye,ot.Component=_,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=D,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ot.cache=function(O){return function(){return O.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(O,ae,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Re=T({},O.props),ke=O.key;if(ae!=null)for(ie in ae.key!==void 0&&(ke=""+ae.key),ae)!Z.call(ae,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&ae.ref===void 0||(Re[ie]=ae[ie]);var ie=arguments.length-2;if(ie===1)Re.children=ge;else if(1<ie){for(var fe=Array(ie),De=0;De<ie;De++)fe[De]=arguments[De+2];Re.children=fe}return w(O.type,ke,Re)},ot.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ot.createElement=function(O,ae,ge){var Re,ke={},ie=null;if(ae!=null)for(Re in ae.key!==void 0&&(ie=""+ae.key),ae)Z.call(ae,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(ke[Re]=ae[Re]);var fe=arguments.length-2;if(fe===1)ke.children=ge;else if(1<fe){for(var De=Array(fe),me=0;me<fe;me++)De[me]=arguments[me+2];ke.children=De}if(O&&O.defaultProps)for(Re in fe=O.defaultProps,fe)ke[Re]===void 0&&(ke[Re]=fe[Re]);return w(O,ie,ke)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(O){return{$$typeof:h,render:O}},ot.isValidElement=G,ot.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Q}},ot.memo=function(O,ae){return{$$typeof:p,type:O,compare:ae===void 0?null:ae}},ot.startTransition=function(O){var ae=z.T,ge={};z.T=ge;try{var Re=O(),ke=z.S;ke!==null&&ke(ge,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,_e)}catch(ie){_e(ie)}finally{ae!==null&&ge.types!==null&&(ae.types=ge.types),z.T=ae}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(O){return z.H.use(O)},ot.useActionState=function(O,ae,ge){return z.H.useActionState(O,ae,ge)},ot.useCallback=function(O,ae){return z.H.useCallback(O,ae)},ot.useContext=function(O){return z.H.useContext(O)},ot.useDebugValue=function(){},ot.useDeferredValue=function(O,ae){return z.H.useDeferredValue(O,ae)},ot.useEffect=function(O,ae){return z.H.useEffect(O,ae)},ot.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(O,ae,ge){return z.H.useImperativeHandle(O,ae,ge)},ot.useInsertionEffect=function(O,ae){return z.H.useInsertionEffect(O,ae)},ot.useLayoutEffect=function(O,ae){return z.H.useLayoutEffect(O,ae)},ot.useMemo=function(O,ae){return z.H.useMemo(O,ae)},ot.useOptimistic=function(O,ae){return z.H.useOptimistic(O,ae)},ot.useReducer=function(O,ae,ge){return z.H.useReducer(O,ae,ge)},ot.useRef=function(O){return z.H.useRef(O)},ot.useState=function(O){return z.H.useState(O)},ot.useSyncExternalStore=function(O,ae,ge){return z.H.useSyncExternalStore(O,ae,ge)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.3",ot}var Rg;function Lh(){return Rg||(Rg=1,td.exports=Gy()),td.exports}var Ne=Lh(),nd={exports:{}},Lo={},id={exports:{}},ad={};var Cg;function Vy(){return Cg||(Cg=1,(function(o){function t(F,k){var Q=F.length;F.push(k);e:for(;0<Q;){var _e=Q-1>>>1,ye=F[_e];if(0<l(ye,k))F[_e]=k,F[Q]=ye,Q=_e;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var k=F[0],Q=F.pop();if(Q!==k){F[0]=Q;e:for(var _e=0,ye=F.length,O=ye>>>1;_e<O;){var ae=2*(_e+1)-1,ge=F[ae],Re=ae+1,ke=F[Re];if(0>l(ge,Q))Re<ye&&0>l(ke,ge)?(F[_e]=ke,F[Re]=Q,_e=Re):(F[_e]=ge,F[ae]=Q,_e=ae);else if(Re<ye&&0>l(ke,Q))F[_e]=ke,F[Re]=Q,_e=Re;else break e}}return k}function l(F,k){var Q=F.sortIndex-k.sortIndex;return Q!==0?Q:F.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,x=null,b=3,M=!1,A=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=F)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function I(F){if(T=!1,P(F),!A)if(i(m)!==null)A=!0,B||(B=!0,K());else{var k=i(p);k!==null&&se(I,k.startTime-F)}}var B=!1,z=-1,Z=5,w=-1;function N(){return S?!0:!(o.unstable_now()-w<Z)}function G(){if(S=!1,B){var F=o.unstable_now();w=F;var k=!0;try{e:{A=!1,T&&(T=!1,U(z),z=-1),M=!0;var Q=b;try{t:{for(P(F),x=i(m);x!==null&&!(x.expirationTime>F&&N());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,b=x.priorityLevel;var ye=_e(x.expirationTime<=F);if(F=o.unstable_now(),typeof ye=="function"){x.callback=ye,P(F),k=!0;break t}x===i(m)&&s(m),P(F)}else s(m);x=i(m)}if(x!==null)k=!0;else{var O=i(p);O!==null&&se(I,O.startTime-F),k=!1}}break e}finally{x=null,b=Q,M=!1}k=void 0}}finally{k?K():B=!1}}}var K;if(typeof D=="function")K=function(){D(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,he=$.port2;$.port1.onmessage=G,K=function(){he.postMessage(null)}}else K=function(){_(G,0)};function se(F,k){z=_(function(){F(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(F){switch(b){case 1:case 2:case 3:var k=3;break;default:k=b}var Q=b;b=k;try{return F()}finally{b=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=b;b=F;try{return k()}finally{b=Q}},o.unstable_scheduleCallback=function(F,k,Q){var _e=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?_e+Q:_e):Q=_e,F){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,F={id:v++,callback:k,priorityLevel:F,startTime:Q,expirationTime:ye,sortIndex:-1},Q>_e?(F.sortIndex=Q,t(p,F),i(m)===null&&F===i(p)&&(T?(U(z),z=-1):T=!0,se(I,Q-_e))):(F.sortIndex=ye,t(m,F),A||M||(A=!0,B||(B=!0,K()))),F},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(F){var k=b;return function(){var Q=b;b=k;try{return F.apply(this,arguments)}finally{b=Q}}}})(ad)),ad}var Ng;function jy(){return Ng||(Ng=1,id.exports=Vy()),id.exports}var sd={exports:{}},Dn={};var Dg;function Xy(){if(Dg)return Dn;Dg=1;var o=Lh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var Ug;function Wy(){if(Ug)return sd.exports;Ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sd.exports=Xy(),sd.exports}var Lg;function qy(){if(Lg)return Lo;Lg=1;var o=jy(),t=Lh(),i=Wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,r=f;break}if(R===r){y=!0,r=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,r=u;break}if(R===r){y=!0,r=f,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case D:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var se=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},_e=[],ye=-1;function O(e){return{current:e}}function ae(e){0>ye||(e.current=_e[ye],_e[ye]=null,ye--)}function ge(e,n){ye++,_e[ye]=e.current,e.current=n}var Re=O(null),ke=O(null),ie=O(null),fe=O(null);function De(e,n){switch(ge(ie,n),ge(ke,e),ge(Re,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Y0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Y0(n),e=Z0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Re),ge(Re,e)}function me(){ae(Re),ae(ke),ae(ie)}function Me(e){e.memoizedState!==null&&ge(fe,e);var n=Re.current,a=Z0(n,e.type);n!==a&&(ge(ke,e),ge(Re,a))}function it(e){ke.current===e&&(ae(Re),ae(ke)),fe.current===e&&(ae(fe),Ro._currentValue=Q)}var Ot,ht;function mt(e){if(Ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ot=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+e+ht}var Et=!1;function lt(e,n){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ce){var oe=ce}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(ce){oe=ce}e.call(ve.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),ne=R.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ne.length)for(r=H.length-1,u=ne.length-1;1<=r&&0<=u&&H[r]!==ne[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ne[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ne[u]){var de=`
`+H[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return mt("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Kt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,Pt=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Xe=o.log,nt=o.unstable_setDisableYieldValue,Te=null,Ae=null;function He(e){if(typeof Xe=="function"&&nt(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Te,e)}catch{}}var Fe=Math.clz32?Math.clz32:X,Le=Math.log,ut=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Le(e)/ut|0)|0}var Pe=256,we=262144,Be=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Ee(r):(y&=R,y!==0?u=Ee(y):a||(a=R&~e,a!==0&&(u=Ee(a))))):(R=r&~f,R!==0?u=Ee(R):y!==0?u=Ee(y):a||(a=r&~e,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function at(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ne=e.hiddenUpdates;for(a=y&~a;0<a;){var de=31-Fe(a),ve=1<<de;R[de]=0,H[de]=-1;var oe=ne[de];if(oe!==null)for(ne[de]=null,de=0;de<oe.length;de++){var ce=oe[de];ce!==null&&(ce.lane&=-536870913)}a&=~ve}r!==0&&Jo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Jo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Fe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Br(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Us(e,n){var a=n&-n;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|n))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:vg(e.type))}function Ni(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var si=Math.random().toString(36).slice(2),on="__reactFiber$"+si,_n="__reactProps$"+si,_i="__reactContainer$"+si,Os="__reactEvents$"+si,Ps="__reactListeners$"+si,$o="__reactHandles$"+si,Gr="__reactResources$"+si,ns="__reactMarker$"+si;function Vr(e){delete e[on],delete e[_n],delete e[Os],delete e[Ps],delete e[$o]}function ba(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ng(e);e!==null;){if(a=e[on])return a;e=ng(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[on]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function is(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[Gr];return n||(n=e[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[ns]=!0}var q=new Set,le={};function re(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(le[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},ze={};function Ve(e){return Kt.call(ze,e)?!0:Kt.call(Ge,e)?!1:Oe.test(e)?ze[e]=!0:(Ge[e]=!0,!1)}function We(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Dt(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function zt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Dt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function rt(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,r,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+et(n)):e.value!==""+et(n)&&(e.value=""+et(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,et(n)):a!=null?bn(e,y,et(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+et(R):e.removeAttribute("name")}function Xi(e,n,a,r,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Wt(e)}function bn(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ft(e,n,a){if(n!=null&&(n=""+et(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+et(a):""}function Sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(se(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=et(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Wt(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function zs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&En(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return Iv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Fs=null;function qh(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[_n]||null;if(!u)throw Error(s(90));yn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&zt(r)}break e;case"textarea":Ft(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(e,!!a.multiple,n,!1)}}}var Jc=!1;function Yh(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var r=e(n);return r}finally{if(Jc=!1,(Is!==null||Fs!==null)&&(Hl(),Is&&(n=Is,e=Fs,Fs=Is=null,qh(n),e)))for(n=0;n<e.length;n++)qh(e[n])}}function jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(qi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{$c=!1}var Ea=null,eu=null,tl=null;function Zh(){if(tl)return tl;var e,n=eu,a=n.length,r,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===u[f-r];r++);return tl=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function Kh(){return!1}function kn(e){function n(a,r,u,f,y){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:Kh,this.isPropagationStopped=Kh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=kn(as),Wr=x({},as,{view:0,detail:0}),Fv=kn(Wr),tu,nu,qr,sl=x({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(tu=e.screenX-qr.screenX,nu=e.screenY-qr.screenY):nu=tu=0,qr=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),Qh=kn(sl),Bv=x({},sl,{dataTransfer:0}),kv=kn(Bv),Hv=x({},Wr,{relatedTarget:0}),iu=kn(Hv),Gv=x({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=kn(Gv),jv=x({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xv=kn(jv),Wv=x({},as,{data:0}),Jh=kn(Wv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zv[e])?!!n[e]:!1}function au(){return Kv}var Qv=x({},Wr,{key:function(e){if(e.key){var n=qv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jv=kn(Qv),$v=x({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=kn($v),e_=x({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),t_=kn(e_),n_=x({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),i_=kn(n_),a_=x({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=kn(a_),r_=x({},as,{newState:0,oldState:0}),o_=kn(r_),l_=[9,13,27,32],su=qi&&"CompositionEvent"in window,Yr=null;qi&&"documentMode"in document&&(Yr=document.documentMode);var c_=qi&&"TextEvent"in window&&!Yr,ep=qi&&(!su||Yr&&8<Yr&&11>=Yr),tp=" ",np=!1;function ip(e,n){switch(e){case"keyup":return l_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bs=!1;function u_(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return e=n.data,e===tp&&np?null:e;default:return null}}function f_(e,n){if(Bs)return e==="compositionend"||!su&&ip(e,n)?(e=Zh(),tl=eu=Ea=null,Bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!d_[e.type]:n==="textarea"}function rp(e,n,a,r){Is?Fs?Fs.push(r):Fs=[r]:Is=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Zr=null,Kr=null;function h_(e){G0(e,0)}function rl(e){var n=is(e);if(zt(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(qi){var ru;if(qi){var ou="oninput"in document;if(!ou){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),ou=typeof cp.oninput=="function"}ru=ou}else ru=!1;lp=ru&&(!document.documentMode||9<document.documentMode)}function up(){Zr&&(Zr.detachEvent("onpropertychange",fp),Kr=Zr=null)}function fp(e){if(e.propertyName==="value"&&rl(Kr)){var n=[];rp(n,Kr,e,Qc(e)),Yh(h_,n)}}function p_(e,n,a){e==="focusin"?(up(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function m_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Kr)}function g_(e,n){if(e==="click")return rl(n)}function x_(e,n){if(e==="input"||e==="change")return rl(n)}function v_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:v_;function Qr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Kt.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=dp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var __=qi&&"documentMode"in document&&11>=document.documentMode,ks=null,cu=null,Jr=null,uu=!1;function gp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||ks==null||ks!==Qe(r)||(r=ks,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Yl(cu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ks)))}function ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},fu={},xp={};qi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function rs(e){if(fu[e])return fu[e];if(!Hs[e])return e;var n=Hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return fu[e]=n[a];return e}var vp=rs("animationend"),_p=rs("animationiteration"),yp=rs("animationstart"),y_=rs("transitionrun"),b_=rs("transitionstart"),S_=rs("transitioncancel"),bp=rs("transitionend"),Sp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function bi(e,n){Sp.set(e,n),re(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Gs=0,hu=0;function ll(){for(var e=Gs,n=hu=Gs=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var y=r.pending;y===null?u.next=u:(u.next=y.next,y.next=u),r.pending=u}f!==0&&Mp(a,u,f)}}function cl(e,n,a,r){oi[Gs++]=e,oi[Gs++]=n,oi[Gs++]=a,oi[Gs++]=r,hu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function pu(e,n,a,r){return cl(e,n,a,r),ul(e)}function os(e,n){return cl(e,null,null,n),ul(e)}function Mp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Fe(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<bo)throw bo=0,Ef=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vs={};function M_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new M_(e,n,a,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,r,u,f){var y=0;if(r=e,typeof e=="function")mu(e)&&(y=1);else if(typeof e=="string")y=Ry(e,a,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return ls(a.children,u,f,n);case S:y=8,u|=24;break;case _:return e=Kn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case I:return e=Kn(13,a,n,u),e.elementType=I,e.lanes=f,e;case B:return e=Kn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case U:y=9;break e;case P:y=11;break e;case z:y=14;break e;case Z:y=16,r=null;break e}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(y,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ls(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function gu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Tp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ap=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var js=[],Xs=0,dl=null,$r=0,ci=[],ui=0,Ta=null,Di=1,Ui="";function Zi(e,n){js[Xs++]=$r,js[Xs++]=dl,dl=e,$r=n}function wp(e,n,a){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=Ta,Ta=e;var r=Di;e=Ui;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var y=u-u%5;f=(r&(1<<y)-1).toString(32),r>>=y,u-=y,Di=1<<32-Fe(n)+u|a<<u|r,Ui=f+e}else Di=1<<f|a<<u|r,Ui=e}function vu(e){e.return!==null&&(Zi(e,1),wp(e,1,0))}function _u(e){for(;e===dl;)dl=js[--Xs],js[Xs]=null,$r=js[--Xs],js[Xs]=null;for(;e===Ta;)Ta=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null}function Rp(e,n){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=Ta,Di=n.id,Ui=n.overflow,Ta=e}var Tn=null,Yt=null,St=!1,Aa=null,fi=!1,yu=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(li(n,e)),yu}function Cp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[_n]=r,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)xt(Mo[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Xi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||W0(n.textContent,a)?(r.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),r.onScroll!=null&&xt("scroll",n),r.onScrollEnd!=null&&xt("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||wa(e,!0)}function Np(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Ws(e){if(e!==Tn)return!1;if(!St)return Np(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Yt&&wa(e),Np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=tg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Yt=tg(e)}else n===27?(n=Yt,Ha(e.type)?(e=jf,jf=null,Yt=e):Yt=n):Yt=Tn?hi(e.stateNode.nextSibling):null;return!0}function cs(){Yt=Tn=null,St=!1}function bu(){var e=Aa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Aa=null),e}function eo(e){Aa===null?Aa=[e]:Aa.push(e)}var Su=O(null),us=null,Ki=null;function Ra(e,n,a){ge(Su,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=Su.current,ae(Su)}function Mu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Mu(f.return,a,e),r||(y=null);break e}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Mu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function qs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;Zn(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===fe.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Eu(n,e,a,r),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Dp(us,e)}function pl(e,n){return us===null&&fs(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return a}var E_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},T_=o.unstable_scheduleCallback,A_=o.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new E_,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&T_(A_,function(){e.controller.abort()})}var no=null,Au=0,Ys=0,Zs=null;function w_(e,n){if(no===null){var a=no=[];Au=0,Ys=Nf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Au++,n.then(Up,Up),n}function Up(){if(--Au===0&&no!==null){Zs!==null&&(Zs.status="fulfilled");var e=no;no=null,Ys=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function R_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Lp=F.S;F.S=function(e,n){g0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&w_(e,n),Lp!==null&&Lp(e,n)};var ds=O(null);function wu(){var e=ds.current;return e!==null?e:Xt.pooledCache}function ml(e,n){n===null?ge(ds,ds.current):ge(ds,n.pool)}function Op(){var e=wu();return e===null?null:{parent:ln._currentValue,pool:e}}var Ks=Error(s(460)),Ru=Error(s(474)),gl=Error(s(542)),xl={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e}throw ps=n,Ks}}function hs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Ks):a}}var ps=null;function Ip(){if(ps===null)throw Error(s(459));var e=ps;return ps=null,e}function Fp(e){if(e===Ks||e===gl)throw Error(s(483))}var Qs=null,io=0;function vl(e){var n=io;return io+=1,Qs===null&&(Qs=[]),zp(Qs,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(Y,j){if(e){var te=Y.deletions;te===null?(Y.deletions=[j],Y.flags|=16):te.push(j)}}function a(Y,j){if(!e)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function r(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=Yi(Y,j),Y.index=0,Y.sibling=null,Y}function f(Y,j,te){return Y.index=te,e?(te=Y.alternate,te!==null?(te=te.index,te<j?(Y.flags|=67108866,j):te):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,j,te,xe){return j===null||j.tag!==6?(j=gu(te,Y.mode,xe),j.return=Y,j):(j=u(j,te),j.return=Y,j)}function H(Y,j,te,xe){var Je=te.type;return Je===T?de(Y,j,te.props.children,xe,te.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&hs(Je)===j.type)?(j=u(j,te.props),ao(j,te),j.return=Y,j):(j=fl(te.type,te.key,te.props,null,Y.mode,xe),ao(j,te),j.return=Y,j)}function ne(Y,j,te,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=xu(te,Y.mode,xe),j.return=Y,j):(j=u(j,te.children||[]),j.return=Y,j)}function de(Y,j,te,xe,Je){return j===null||j.tag!==7?(j=ls(te,Y.mode,xe,Je),j.return=Y,j):(j=u(j,te),j.return=Y,j)}function ve(Y,j,te){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=gu(""+j,Y.mode,te),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return te=fl(j.type,j.key,j.props,null,Y.mode,te),ao(te,j),te.return=Y,te;case A:return j=xu(j,Y.mode,te),j.return=Y,j;case Z:return j=hs(j),ve(Y,j,te)}if(se(j)||K(j))return j=ls(j,Y.mode,te,null),j.return=Y,j;if(typeof j.then=="function")return ve(Y,vl(j),te);if(j.$$typeof===D)return ve(Y,pl(Y,j),te);_l(Y,j)}return null}function oe(Y,j,te,xe){var Je=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:R(Y,j,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===Je?H(Y,j,te,xe):null;case A:return te.key===Je?ne(Y,j,te,xe):null;case Z:return te=hs(te),oe(Y,j,te,xe)}if(se(te)||K(te))return Je!==null?null:de(Y,j,te,xe,null);if(typeof te.then=="function")return oe(Y,j,vl(te),xe);if(te.$$typeof===D)return oe(Y,j,pl(Y,te),xe);_l(Y,te)}return null}function ce(Y,j,te,xe,Je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get(te)||null,R(j,Y,""+xe,Je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case M:return Y=Y.get(xe.key===null?te:xe.key)||null,H(j,Y,xe,Je);case A:return Y=Y.get(xe.key===null?te:xe.key)||null,ne(j,Y,xe,Je);case Z:return xe=hs(xe),ce(Y,j,te,xe,Je)}if(se(xe)||K(xe))return Y=Y.get(te)||null,de(j,Y,xe,Je,null);if(typeof xe.then=="function")return ce(Y,j,te,vl(xe),Je);if(xe.$$typeof===D)return ce(Y,j,te,pl(j,xe),Je);_l(j,xe)}return null}function je(Y,j,te,xe){for(var Je=null,wt=null,Ze=j,ft=j=0,_t=null;Ze!==null&&ft<te.length;ft++){Ze.index>ft?(_t=Ze,Ze=null):_t=Ze.sibling;var Rt=oe(Y,Ze,te[ft],xe);if(Rt===null){Ze===null&&(Ze=_t);break}e&&Ze&&Rt.alternate===null&&n(Y,Ze),j=f(Rt,j,ft),wt===null?Je=Rt:wt.sibling=Rt,wt=Rt,Ze=_t}if(ft===te.length)return a(Y,Ze),St&&Zi(Y,ft),Je;if(Ze===null){for(;ft<te.length;ft++)Ze=ve(Y,te[ft],xe),Ze!==null&&(j=f(Ze,j,ft),wt===null?Je=Ze:wt.sibling=Ze,wt=Ze);return St&&Zi(Y,ft),Je}for(Ze=r(Ze);ft<te.length;ft++)_t=ce(Ze,Y,ft,te[ft],xe),_t!==null&&(e&&_t.alternate!==null&&Ze.delete(_t.key===null?ft:_t.key),j=f(_t,j,ft),wt===null?Je=_t:wt.sibling=_t,wt=_t);return e&&Ze.forEach(function(Wa){return n(Y,Wa)}),St&&Zi(Y,ft),Je}function tt(Y,j,te,xe){if(te==null)throw Error(s(151));for(var Je=null,wt=null,Ze=j,ft=j=0,_t=null,Rt=te.next();Ze!==null&&!Rt.done;ft++,Rt=te.next()){Ze.index>ft?(_t=Ze,Ze=null):_t=Ze.sibling;var Wa=oe(Y,Ze,Rt.value,xe);if(Wa===null){Ze===null&&(Ze=_t);break}e&&Ze&&Wa.alternate===null&&n(Y,Ze),j=f(Wa,j,ft),wt===null?Je=Wa:wt.sibling=Wa,wt=Wa,Ze=_t}if(Rt.done)return a(Y,Ze),St&&Zi(Y,ft),Je;if(Ze===null){for(;!Rt.done;ft++,Rt=te.next())Rt=ve(Y,Rt.value,xe),Rt!==null&&(j=f(Rt,j,ft),wt===null?Je=Rt:wt.sibling=Rt,wt=Rt);return St&&Zi(Y,ft),Je}for(Ze=r(Ze);!Rt.done;ft++,Rt=te.next())Rt=ce(Ze,Y,ft,Rt.value,xe),Rt!==null&&(e&&Rt.alternate!==null&&Ze.delete(Rt.key===null?ft:Rt.key),j=f(Rt,j,ft),wt===null?Je=Rt:wt.sibling=Rt,wt=Rt);return e&&Ze.forEach(function(By){return n(Y,By)}),St&&Zi(Y,ft),Je}function jt(Y,j,te,xe){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var Je=te.key;j!==null;){if(j.key===Je){if(Je=te.type,Je===T){if(j.tag===7){a(Y,j.sibling),xe=u(j,te.props.children),xe.return=Y,Y=xe;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&hs(Je)===j.type){a(Y,j.sibling),xe=u(j,te.props),ao(xe,te),xe.return=Y,Y=xe;break e}a(Y,j);break}else n(Y,j);j=j.sibling}te.type===T?(xe=ls(te.props.children,Y.mode,xe,te.key),xe.return=Y,Y=xe):(xe=fl(te.type,te.key,te.props,null,Y.mode,xe),ao(xe,te),xe.return=Y,Y=xe)}return y(Y);case A:e:{for(Je=te.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Y,j.sibling),xe=u(j,te.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}xe=xu(te,Y.mode,xe),xe.return=Y,Y=xe}return y(Y);case Z:return te=hs(te),jt(Y,j,te,xe)}if(se(te))return je(Y,j,te,xe);if(K(te)){if(Je=K(te),typeof Je!="function")throw Error(s(150));return te=Je.call(te),tt(Y,j,te,xe)}if(typeof te.then=="function")return jt(Y,j,vl(te),xe);if(te.$$typeof===D)return jt(Y,j,pl(Y,te),xe);_l(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,j!==null&&j.tag===6?(a(Y,j.sibling),xe=u(j,te),xe.return=Y,Y=xe):(a(Y,j),xe=gu(te,Y.mode,xe),xe.return=Y,Y=xe),y(Y)):a(Y,j)}return function(Y,j,te,xe){try{io=0;var Je=jt(Y,j,te,xe);return Qs=null,Je}catch(Ze){if(Ze===Ks||Ze===gl)throw Ze;var wt=Kn(29,Ze,null,Y.mode);return wt.lanes=xe,wt.return=Y,wt}}}var ms=Bp(!0),kp=Bp(!1),Ca=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Lt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),Mp(e,null,a),n}return cl(e,r,n,a),ul(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Br(e,a)}}function Du(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uu=!1;function ro(){if(Uu){var e=Zs;if(e!==null)throw e}}function oo(e,n,a,r){Uu=!1;var u=e.updateQueue;Ca=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ne=H.next;H.next=null,y===null?f=ne:y.next=ne,y=H;var de=e.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==y&&(R===null?de.firstBaseUpdate=ne:R.next=ne,de.lastBaseUpdate=H))}if(f!==null){var ve=u.baseState;y=0,de=ne=H=null,R=f;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(vt&oe)===oe:(r&oe)===oe){oe!==0&&oe===Ys&&(Uu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=e,tt=R;oe=n;var jt=a;switch(tt.tag){case 1:if(je=tt.payload,typeof je=="function"){ve=je.call(jt,ve,oe);break e}ve=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=tt.payload,oe=typeof je=="function"?je.call(jt,ve,oe):je,oe==null)break e;ve=x({},ve,oe);break e;case 2:Ca=!0}}oe=R.callback,oe!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(ne=de=ce,H=ve):de=de.next=ce,y|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);de===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),za|=y,e.lanes=y,e.memoizedState=ve}}function Hp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hp(a[e],n)}var Js=O(null),yl=O(0);function Vp(e,n){e=ra,ge(yl,e),ge(Js,n),ra=e|n.baseLanes}function Lu(){ge(yl,ra),ge(Js,Js.current)}function Ou(){ra=yl.current,ae(Js),ae(yl)}var Qn=O(null),di=null;function Ua(e){var n=e.alternate;ge(sn,sn.current&1),ge(Qn,e),di===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(di=e)}function Pu(e){ge(sn,sn.current),ge(Qn,e),di===null&&(di=e)}function jp(e){e.tag===22?(ge(sn,sn.current),ge(Qn,e),di===null&&(di=e)):La()}function La(){ge(sn,sn.current),ge(Qn,Qn.current)}function Jn(e){ae(Qn),di===e&&(di=null),ae(sn)}var sn=O(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,ct=null,Gt=null,cn=null,Sl=!1,$s=!1,gs=!1,Ml=0,lo=0,er=null,C_=0;function tn(){throw Error(s(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Iu(e,n,a,r,u,f){return Ji=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?wm:Ju,gs=!1,f=a(r,u),gs=!1,$s&&(f=Wp(n,a,r,u)),Xp(e),f}function Xp(e){F.H=fo;var n=Gt!==null&&Gt.next!==null;if(Ji=0,cn=Gt=ct=null,Sl=!1,lo=0,er=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&hl(e)&&(un=!0))}function Wp(e,n,a,r){ct=e;var u=0;do{if($s&&(er=null),lo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Rm,f=n(a,r)}while($s);return f}function N_(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(ct.flags|=1024),n}function Fu(){var e=Ml!==0;return Ml=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ku(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}Ji=0,cn=Gt=ct=null,$s=!1,lo=Ml=0,er=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ct.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Gt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=cn===null?ct.memoizedState:cn.next;if(n!==null)cn=n,Gt=e;else{if(e===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ct.memoizedState=cn=e:cn=cn.next=e}return cn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,er===null&&(er=[]),e=zp(er,e,n),n=ct,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?wm:Ju),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===D)return An(e)}throw Error(s(438,String(e)))}function Hu(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ct.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=N;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=rn();return Gu(n,Gt,e)}function Gu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,H=null,ne=n,de=!1;do{var ve=ne.lane&-536870913;if(ve!==ne.lane?(vt&ve)===ve:(Ji&ve)===ve){var oe=ne.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ve===Ys&&(de=!0);else if((Ji&oe)===oe){ne=ne.next,oe===Ys&&(de=!0);continue}else ve={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=ve,y=f):H=H.next=ve,ct.lanes|=oe,za|=oe;ve=ne.action,gs&&a(f,ve),f=ne.hasEagerState?ne.eagerState:a(f,ve)}else oe={lane:ve,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=oe,y=f):H=H.next=oe,ct.lanes|=ve,za|=ve;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?y=f:H.next=R,!Zn(f,e.memoizedState)&&(un=!0,de&&(a=Zs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function qp(e,n,a){var r=ct,u=rn(),f=St;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Zn((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,Wu(Kp.bind(null,r,u,e),[e]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,tr(9,{destroy:void 0},Zp.bind(null,r,u,a,n),null),Xt===null)throw Error(s(349));f||(Ji&127)!==0||Yp(r,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=El(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function Jp(e){var n=os(e,2);n!==null&&Xn(n,e,2)}function ju(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),gs){He(!0);try{a()}finally{He(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function $p(e,n,a,r){return e.baseState=a,Gu(e,Gt,typeof r=="function"?r:$i)}function D_(e,n,a,r,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var R=a(u,r),H=F.S;H!==null&&H(y,R),tm(e,n,R)}catch(ne){Xu(e,n,ne)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,r),tm(e,n,f)}catch(ne){Xu(e,n,ne)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(e,n,r)},function(r){return Xu(e,n,r)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,em(e,a)))}function Xu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function sm(e,n){if(St){var a=Xt.formState;if(a!==null){e:{var r=ct;if(St){if(Yt){t:{for(var u=Yt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=hi(u.nextSibling),r=u.data==="F!";break e}}wa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=Em.bind(null,ct,r),r.dispatch=a,r=ju(!1),f=Qu.bind(null,ct,!1,r.queue),r=Pn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=D_.bind(null,ct,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function rm(e){var n=rn();return om(n,Gt,e)}function om(e,n,a){if(n=Gu(e,n,am)[0],e=Al($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(y){throw y===Ks?gl:y}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,tr(9,{destroy:void 0},U_.bind(null,u,a),null)),[r,f,e]}function U_(e,n){e.action=n}function lm(e){var n=rn(),a=Gt;if(a!==null)return om(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function tr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ct.updateQueue,n===null&&(n=El(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function cm(){return rn().memoizedState}function wl(e,n,a,r){var u=Pn();ct.flags|=e,u.memoizedState=tr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Gt!==null&&r!==null&&zu(r,Gt.memoizedState.deps)?u.memoizedState=tr(n,f,a,r):(ct.flags|=e,u.memoizedState=tr(1|n,f,a,r))}function um(e,n){wl(8390656,8,e,n)}function Wu(e,n){Rl(2048,8,e,n)}function L_(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=El(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fm(e){var n=rn().memoizedState;return L_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dm(e,n){return Rl(4,2,e,n)}function hm(e,n){return Rl(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,pm.bind(null,n,e),a)}function qu(){}function gm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&zu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&zu(n,r[1]))return r[0];if(r=e(),gs){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[r,n],r}function Yu(e,n,a){return a===void 0||(Ji&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=v0(),ct.lanes|=e,za|=e,a)}function vm(e,n,a,r){return Zn(a,n)?a:Js.current!==null?(e=Yu(e,a,r),Zn(e,n)||(un=!0),e):(Ji&42)===0||(Ji&1073741824)!==0&&(vt&261930)===0?(un=!0,e.memoizedState=a):(e=v0(),ct.lanes|=e,za|=e,n)}function _m(e,n,a,r,u){var f=k.p;k.p=f!==0&&8>f?f:8;var y=F.T,R={};F.T=R,Qu(e,!1,n,a);try{var H=u(),ne=F.S;if(ne!==null&&ne(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=R_(H,r);uo(e,n,de,ti(e))}else uo(e,n,r,ti(e))}catch(ve){uo(e,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{k.p=f,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function O_(){}function Zu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=ym(e).queue;_m(e,u,n,Q,a===null?O_:function(){return bm(e),a(r)})}function ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=ym(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ti())}function Ku(){return An(Ro)}function Sm(){return rn().memoizedState}function Mm(){return rn().memoizedState}function P_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Na(a);var r=Da(n,e,a);r!==null&&(Xn(r,n,a),so(r,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function z_(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Tm(n,a):(a=pu(e,n,a,r),a!==null&&(Xn(a,e,r),Am(a,n,r)))}function Em(e,n,a){var r=ti();uo(e,n,a,r)}function uo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Tm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,y))return cl(e,n,u,0),Xt===null&&ll(),!1}catch{}if(a=pu(e,n,u,r),a!==null)return Xn(a,e,r),Am(a,n,r),!0}return!1}function Qu(e,n,a,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=pu(e,a,r,2),n!==null&&Xn(n,e,2)}function Cl(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function Tm(e,n){$s=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Br(e,a)}}var fo={readContext:An,use:Tl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var wm={readContext:An,use:Tl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(gs){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var u=a(n);if(gs){He(!0);try{a(n)}finally{He(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=z_.bind(null,ct,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=ju(e);var n=e.queue,a=Em.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=Pn();return Yu(a,e,n)},useTransition:function(){var e=ju(!1);return e=_m.bind(null,ct,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ct,u=Pn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(vt&127)!==0||Yp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,um(Kp.bind(null,r,f,e),[e]),r.flags|=2048,tr(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=Xt.identifierPrefix;if(St){var a=Ui,r=Di;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=C_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return Pn().memoizedState=P_.bind(null,ct)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ju={readContext:An,use:Tl,useCallback:gm,useContext:An,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:xm,useReducer:Al,useRef:cm,useState:function(){return Al($i)},useDebugValue:qu,useDeferredValue:function(e,n){var a=rn();return vm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Al($i)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:Ku,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=rn();return $p(a,Gt,e,n)},useMemoCache:Hu,useCacheRefresh:Mm};Ju.useEffectEvent=fm;var Rm={readContext:An,use:Tl,useCallback:gm,useContext:An,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:xm,useReducer:Vu,useRef:cm,useState:function(){return Vu($i)},useDebugValue:qu,useDeferredValue:function(e,n){var a=rn();return Gt===null?Yu(a,e,n):vm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Vu($i)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:Ku,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=rn();return Gt!==null?$p(a,Gt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Mm};Rm.useEffectEvent=fm;function $u(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(Xn(n,e,r),so(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(Xn(n,e,r),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=Da(e,r,a),n!==null&&(Xn(n,e,a),so(n,e,a))}};function Cm(e,n,a,r,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Nm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Dm(e){ol(e)}function Um(e){console.error(e)}function Lm(e){ol(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function Pm(e){return e=Na(e),e.tag=3,e}function zm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Om(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function I_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Gl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),wf(e,r,u)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),wf(e,r,u)),!1}throw Error(s(435,a.tag))}return wf(e,r,u),Gl(),!1}if(St)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==yu&&(e=Error(s(422),{cause:r}),eo(li(e,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),eo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=li(r,a),u=tf(e.stateNode,r,u),Du(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),nn!==4&&(nn=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=tf(a.stateNode,r,e),Du(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),zm(u,e,a,r),Du(a,u),!1}a=a.return}while(a!==null);return!1}var nf=Error(s(461)),un=!1;function wn(e,n,a,r){n.child=e===null?kp(n,null,a,r):ms(n,e.child,a,r)}function Im(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var R in r)R!=="ref"&&(y[R]=r[R])}else y=r;return fs(n),r=Iu(e,n,a,y,f,u),R=Fu(),e!==null&&!un?(Bu(e,n,u),ea(e,n,u)):(St&&R&&vu(n),n.flags|=1,wn(e,n,r,u),n.child)}function Fm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(e,n,f,r,u)):(e=fl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ff(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(y,r)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Yi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Qr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,ff(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,u)}return af(e,n,a,r,u)}function km(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Hm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):Lu(),jp(n);else return r=n.lanes=536870912,Hm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),Vp(n,f),La(),n.memoizedState=null):(e!==null&&ml(n,null),Lu(),La());return wn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hm(e,n,a,r,u){var f=wu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Lu(),jp(n),e!==null&&qs(e,n,r,!0),n.childLanes=u,null}function Dl(e,n){return n=Ll({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Gm(e,n,a){return ms(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function F_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=Dl(n,r),n.lanes=536870912,ho(null,e);if(Pu(n),(e=Yt)?(e=eg(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Tn=n,Yt=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Dl(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Pu(n),u)if(n.flags&256)n.flags&=-257,n=Gm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||qs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=Xt,r!==null&&(y=Us(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,os(e,y),Xn(r,e,y),nf;Gl(),n=Gm(e,n,a)}else e=f.treeContext,Yt=hi(y.nextSibling),Tn=n,St=!0,Aa=null,fi=!1,e!==null&&Rp(n,e),n=Dl(n,r),n.flags|=4096;return n}return e=Yi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function af(e,n,a,r,u){return fs(n),a=Iu(e,n,a,r,void 0,u),r=Fu(),e!==null&&!un?(Bu(e,n,u),ea(e,n,u)):(St&&r&&vu(n),n.flags|=1,wn(e,n,a,u),n.child)}function Vm(e,n,a,r,u,f){return fs(n),n.updateQueue=null,a=Wp(n,r,a,u),Xp(e),r=Fu(),e!==null&&!un?(Bu(e,n,f),ea(e,n,f)):(St&&r&&vu(n),n.flags|=1,wn(e,n,a,f),n.child)}function jm(e,n,a,r,u){if(fs(n),n.stateNode===null){var f=Vs,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Cu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):Vs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&($u(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&ef.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=xs(a,R);f.props=H;var ne=f.context,de=a.contextType;y=Vs,typeof de=="object"&&de!==null&&(y=An(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==y)&&Nm(n,f,r,y),Ca=!1;var oe=n.memoizedState;f.state=oe,oo(n,r,f,u),ro(),ne=n.memoizedState,R||oe!==ne||Ca?(typeof ve=="function"&&($u(n,a,ve,r),ne=n.memoizedState),(H=Ca||Cm(n,a,H,r,oe,ne,y))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),f.props=r,f.state=ne,f.context=y,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Nu(e,n),y=n.memoizedProps,de=xs(a,y),f.props=de,ve=n.pendingProps,oe=f.context,ne=a.contextType,H=Vs,typeof ne=="object"&&ne!==null&&(H=An(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ve||oe!==H)&&Nm(n,f,r,H),Ca=!1,oe=n.memoizedState,f.state=oe,oo(n,r,f,u),ro();var ce=n.memoizedState;y!==ve||oe!==ce||Ca||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof R=="function"&&($u(n,a,R,r),ce=n.memoizedState),(de=Ca||Cm(n,a,de,r,oe,ce,H)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=H,r=de):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ms(n,e.child,null,u),n.child=ms(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function Xm(e,n,a,r){return cs(),n.flags|=256,wn(e,n,a,r),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Op()}}function of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Wm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(u?Ua(n):La(),(e=Yt)?(e=eg(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Tn=n,Yt=null)):e=null,e===null)throw wa(n);return Vf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(La(),u=n.mode,R=Ll({mode:"hidden",children:R},u),r=ls(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=rf(a),r.childLanes=of(e,y,a),n.memoizedState=sf,ho(null,r)):(Ua(n),lf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),R=r.fallback,u=n.mode,r=Ll({mode:"visible",children:r.children},u),R=ls(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ms(n,e.child,null,a),r=n.child,r.memoizedState=rf(a),r.childLanes=of(e,y,a),n.memoizedState=sf,n=ho(null,r));else if(Ua(n),Vf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ne=y.dgst;y=ne,r=Error(s(419)),r.stack="",r.digest=y,eo({value:r,source:null,stack:null}),n=cf(e,n,a)}else if(un||qs(e,n,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=Xt,y!==null&&(r=Us(y,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,os(e,r),Xn(y,e,r),nf;Gf(R)||Gl(),n=cf(e,n,a)}else Gf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Yt=hi(R.nextSibling),Tn=n,St=!0,Aa=null,fi=!1,e!==null&&Rp(n,e),n=lf(n,r.children),n.flags|=4096);return n}return u?(La(),R=r.fallback,u=n.mode,H=e.child,ne=H.sibling,r=Yi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ne!==null?R=Yi(ne,R):(R=ls(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,ho(null,r),r=n.child,R=e.child.memoizedState,R===null?R=rf(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Op(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=of(e,y,a),n.memoizedState=sf,ho(e.child,r)):(Ua(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function lf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function cf(e,n,a){return ms(n,e.child,null,a),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mu(e.return,n,a)}function uf(e,n,a,r,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Ym(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var y=sn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,ge(sn,y),wn(e,n,r,a),r=St?$r:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qm(e,a,n);else if(e.tag===19)qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uf(n,!0,a,null,f,r);break;case"together":uf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function B_(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ra(n,ln,e.memoizedState.cache),cs();break;case 27:case 5:Me(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(e,n,a):(Ua(n),e=ea(e,n,a),e!==null?e.sibling:null);Ua(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(qs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(sn,sn.current),r)break;return null;case 22:return n.lanes=0,km(e,n,a,n.pendingProps);case 24:Ra(n,ln,e.memoizedState.cache)}return ea(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!ff(e,a)&&(n.flags&128)===0)return un=!1,B_(e,n,a);un=(e.flags&131072)!==0}else un=!1,St&&(n.flags&1048576)!==0&&wp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=hs(n.elementType),n.type=e,typeof e=="function")mu(e)?(r=xs(e,r),n.tag=1,n=jm(null,n,e,r,a)):(n.tag=0,n=af(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=Im(null,n,e,r,a);break e}else if(u===z){n.tag=14,n=Fm(null,n,e,r,a);break e}}throw n=he(e)||e,Error(s(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=xs(r,n.pendingProps),jm(e,n,r,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(e,n),oo(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Ra(n,ln,r),r!==f.cache&&Eu(n,[ln],a,!0),ro(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xm(e,n,r,a);break e}else if(r!==u){u=li(Error(s(424)),n),eo(u),n=Xm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Yt=hi(e.firstChild),Tn=n,St=!0,Aa=null,fi=!0,a=kp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),r===u){n=ea(e,n,a);break e}wn(e,n,r,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,r=Zl(ie.current).createElement(a),r[on]=n,r[_n]=e,Rn(r,a,e),C(r),n.stateNode=r):n.memoizedState=rg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Me(n),e===null&&St&&(r=n.stateNode=ig(n.type,n.pendingProps,ie.current),Tn=n,fi=!0,u=Yt,Ha(n.type)?(jf=u,Yt=hi(r.firstChild)):Yt=u),wn(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((u=r=Yt)&&(r=my(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Tn=n,Yt=hi(r.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),Me(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,Bf(u,f)?r=null:y!==null&&Bf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Iu(e,n,N_,null,null,a),Ro._currentValue=u),Ul(e,n),wn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Yt)&&(a=gy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,Yt=null,e=!0):e=!1),e||wa(n)),null;case 13:return Wm(e,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ms(n,null,r,a):wn(e,n,r,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ra(n,n.type,r.value),wn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,fs(n),u=An(u),r=r(u),n.flags|=1,wn(e,n,r,a),n.child;case 14:return Fm(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 31:return F_(e,n,a);case 22:return km(e,n,a,n.pendingProps);case 24:return fs(n),r=An(ln),e===null?(u=wu(),u===null&&(u=Xt,f=Tu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Cu(n),Ra(n,ln,u)):((e.lanes&a)!==0&&(Nu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,ln,r)):(r=f.cache,Ra(n,ln,r),r!==u.cache&&Eu(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(e){e.flags|=4}function df(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(S0())e.flags|=8192;else throw ps=xl,Ru}else e.flags&=-16777217}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fg(n))if(S0())e.flags|=8192;else throw ps=xl,Ru}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?It():536870912,e.lanes|=n,sr|=n)}function po(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function k_(e,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(ln),me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ta(n),f!==null?(Zt(n),Km(n,f)):(Zt(n),df(n,u,null,r,a))):f?f!==e.memoizedState?(ta(n),Zt(n),Km(n,f)):(Zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ta(n),Zt(n),df(n,u,e,r,a)),null;case 27:if(it(n),a=ie.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}e=Re.current,Ws(n)?Cp(n):(e=ig(u,r,a),n.stateNode=e,ta(n))}return Zt(n),null;case 5:if(it(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=Re.current,Ws(n))Cp(n);else{var y=Zl(ie.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(u,{is:r.is}):y.createElement(u)}}f[on]=n,f[_n]=r;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Rn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ta(n)}}return Zt(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||W0(e.nodeValue,a)),e||wa(n,!0)}else e=Zl(e).createTextNode(r),e[on]=n,n.stateNode=e}return Zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ws(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),e=!1}else a=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ws(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Zt(n),null);case 4:return me(),e===null&&Of(n.stateNode.containerInfo),Zt(n),null;case 10:return Qi(n.type),Zt(n),null;case 19:if(ae(sn),r=n.memoizedState,r===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,po(r,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ep(a,e),a=a.sibling;return ge(sn,sn.current&1|2),St&&Zi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Bl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!St)return Zt(n),null}else 2*E()-r.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=sn.current,ge(sn,u?a&1|2:a&1),St&&Zi(n,r.treeForkCount),e):(Zt(n),null);case 22:case 23:return Jn(n),Ou(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ae(ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function H_(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(ln),me(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return it(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(sn),null;case 4:return me(),null;case 10:return Qi(n.type),null;case 22:case 23:return Jn(n),Ou(),e!==null&&ae(ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function Qm(e,n){switch(_u(n),n.tag){case 3:Qi(ln),me();break;case 26:case 27:case 5:it(n);break;case 4:me();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ae(sn);break;case 10:Qi(n.type);break;case 22:case 23:Jn(n),Ou(),e!==null&&ae(ds);break;case 24:Qi(ln)}}function mo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Oa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var y=r.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,ne=R;try{ne()}catch(de){kt(u,H,de)}}}r=r.next}while(r!==f)}}catch(de){kt(n,n.return,de)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Gp(n,a)}catch(r){kt(e,e.return,r)}}}function $m(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){kt(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){kt(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){kt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(e,n,u)}else a.current=null}function e0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){kt(e,e.return,u)}}function hf(e,n,a){try{var r=e.stateNode;cy(r,e.type,a,n),r[_n]=n}catch(u){kt(e,e.return,u)}}function t0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Pl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function n0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,r,a),n[on]=e,n[_n]=a}catch(f){kt(e,e.return,f)}}var na=!1,fn=!1,gf=!1,i0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function G_(e,n){if(e=e.containerInfo,If=nc,e=mp(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,ne=0,de=0,ve=e,oe=null;t:for(;;){for(var ce;ve!==a||u!==0&&ve.nodeType!==3||(R=y+u),ve!==f||r!==0&&ve.nodeType!==3||(H=y+r),ve.nodeType===3&&(y+=ve.nodeValue.length),(ce=ve.firstChild)!==null;)oe=ve,ve=ce;for(;;){if(ve===e)break t;if(oe===a&&++ne===u&&(R=y),oe===f&&++de===r&&(H=y),(ce=ve.nextSibling)!==null)break;ve=oe,oe=ve.parentNode}ve=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},nc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var je=xs(a.type,u);e=r.getSnapshotBeforeUpdate(je,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(tt){kt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function a0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),r&4&&mo(5,a);break;case 1:if(aa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}r&64&&Jm(a),r&512&&go(a,a.return);break;case 3:if(aa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(e,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&r&4&&n0(a);case 26:case 5:aa(e,a),n===null&&r&4&&e0(a),r&512&&go(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),r&4&&o0(e,a);break;case 13:aa(e,a),r&4&&l0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Q_.bind(null,a),xy(e,a))));break;case 22:if(r=a.memoizedState!==null||na,!r){n=n!==null&&n.memoizedState!==null||fn,u=na;var f=fn;na=r,(fn=n)&&!f?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),na=u,fn=f}break;case 30:break;default:aa(e,a)}}function s0(e){var n=e.alternate;n!==null&&(e.alternate=null,s0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Hn=!1;function ia(e,n,a){for(a=a.child;a!==null;)r0(e,n,a),a=a.sibling}function r0(e,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:fn||Li(a,n),ia(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Li(a,n);var r=Jt,u=Hn;Ha(a.type)&&(Jt=a.stateNode,Hn=!1),ia(e,n,a),To(a.stateNode),Jt=r,Hn=u;break;case 5:fn||Li(a,n);case 6:if(r=Jt,u=Hn,Jt=null,ia(e,n,a),Jt=r,Hn=u,Jt!==null)if(Hn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:Jt!==null&&(Hn?(e=Jt,J0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hr(e)):J0(Jt,a.stateNode));break;case 4:r=Jt,u=Hn,Jt=a.stateNode.containerInfo,Hn=!0,ia(e,n,a),Jt=r,Hn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),ia(e,n,a);break;case 1:fn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),ia(e,n,a);break;case 21:ia(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ia(e,n,a),fn=r;break;default:ia(e,n,a)}}function o0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hr(e)}catch(a){kt(n,n.return,a)}}}function l0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hr(e)}catch(a){kt(n,n.return,a)}}function V_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new i0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new i0),n;default:throw Error(s(435,e.tag))}}function zl(e,n){var a=V_(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=J_.bind(null,e,r);r.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(Ha(R.type)){Jt=R.stateNode,Hn=!1;break e}break;case 5:Jt=R.stateNode,Hn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(Jt===null)throw Error(s(160));r0(f,y,u),Jt=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)c0(n,e),n=n.sibling}var Si=null;function c0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(Oa(3,e,e.return),mo(3,e),Oa(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),r&64&&na&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Si;if(Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ns]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,r,a),f[on]=e,C(f),r=f;break e;case"link":var y=cg("link","href",u).get(r+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;case"meta":if(y=cg("meta","content",u).get(r+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,C(f),r=f}e.stateNode=r}else ug(u,e.type,e.stateNode);else e.stateNode=lg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ug(u,e.type,e.stateNode):lg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),a!==null&&r&4&&hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(fn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(je){kt(e,e.return,je)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,hf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(gf=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(je){kt(e,e.return,je)}}break;case 3:if(Jl=null,u=Si,Si=Kl(n.containerInfo),Gn(n,e),Si=u,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(je){kt(e,e.return,je)}gf&&(gf=!1,u0(e));break;case 4:r=Si,Si=Kl(e.stateNode.containerInfo),Gn(n,e),Vn(e),Si=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=na,de=fn;if(na=ne||u,fn=de||H,Gn(n,e),fn=de,na=ne,Vn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||na||fn||vs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var ve=H.memoizedProps.style,oe=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(je){kt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){kt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?$0(ce,!0):$0(H.stateNode,!1)}catch(je){kt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(t0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=pf(e);Pl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(hn(y,""),a.flags&=-33);var R=pf(e);Pl(e,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=pf(e);mf(e,ne,H);break;default:throw Error(s(161))}}catch(de){kt(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function u0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;u0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)a0(e,n.alternate,n),n=n.sibling}function vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),vs(n);break;case 27:To(n.stateNode);case 26:case 5:Li(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}e=e.sibling}}function sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),mo(4,f);break;case 1:if(sa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){kt(r,r.return,ne)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Hp(H[u],R)}catch(ne){kt(r,r.return,ne)}}a&&y&64&&Jm(f),go(f,f.return);break;case 27:n0(f);case 26:case 5:sa(u,f,a),a&&r===null&&y&4&&e0(f),go(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&y&4&&o0(u,f);break;case 13:sa(u,f,a),a&&y&4&&l0(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),go(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function Mi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)f0(e,n,a,r),n=n.sibling}function f0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,r),u&2048&&mo(9,n);break;case 1:Mi(e,n,a,r);break;case 3:Mi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){Mi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){kt(n,n.return,H)}}else Mi(e,n,a,r);break;case 31:Mi(e,n,a,r);break;case 13:Mi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,r):xo(e,n):f._visibility&2?Mi(e,n,a,r):(f._visibility|=2,nr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(y,n);break;case 24:Mi(e,n,a,r),u&2048&&vf(n.alternate,n);break;default:Mi(e,n,a,r)}}function nr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,H=r,ne=y.flags;switch(y.tag){case 0:case 11:case 15:nr(f,y,R,H,u),mo(8,y);break;case 23:break;case 22:var de=y.stateNode;y.memoizedState!==null?de._visibility&2?nr(f,y,R,H,u):xo(f,y):(de._visibility|=2,nr(f,y,R,H,u)),u&&ne&2048&&xf(y.alternate,y);break;case 24:nr(f,y,R,H,u),u&&ne&2048&&vf(y.alternate,y);break;default:nr(f,y,R,H,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:xo(a,r),u&2048&&xf(r.alternate,r);break;case 24:xo(a,r),u&2048&&vf(r.alternate,r);break;default:xo(a,r)}n=n.sibling}}var vo=8192;function ir(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)d0(e,n,a),e=e.sibling}function d0(e,n,a){switch(e.tag){case 26:ir(e,n,a),e.flags&vo&&e.memoizedState!==null&&Cy(a,Si,e.memoizedState,e.memoizedProps);break;case 5:ir(e,n,a);break;case 3:case 4:var r=Si;Si=Kl(e.stateNode.containerInfo),ir(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,ir(e,n,a),vo=r):ir(e,n,a));break;default:ir(e,n,a)}}function h0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,m0(r,e)}h0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):_o(e);break;default:_o(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,m0(r,e)}h0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function m0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else e:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(s0(r),r===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var j_={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},X_=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,gt=null,vt=0,Bt=0,$n=null,Pa=!1,ar=!1,_f=!1,ra=0,nn=0,za=0,_s=0,yf=0,ei=0,sr=0,yo=null,jn=null,bf=!1,Fl=0,g0=0,Bl=1/0,kl=null,Ia=null,pn=0,Fa=null,rr=null,oa=0,Sf=0,Mf=null,x0=null,bo=0,Ef=null;function ti(){return(Lt&2)!==0&&vt!==0?vt&-vt:F.T!==null?Nf():Hr()}function v0(){if(ei===0)if((vt&536870912)===0||St){var e=we;we<<=1,(we&3932160)===0&&(we=262144),ei=e}else ei=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ei}function Xn(e,n,a){(e===Xt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(or(e,0),Ba(e,vt,ei,!1)),Nn(e,a),((Lt&2)===0||e!==Xt)&&(e===Xt&&((Lt&2)===0&&(_s|=a),nn===4&&Ba(e,vt,ei,!1)),Oi(e))}function _0(e,n,a){if((Lt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ce(e,n),u=r?Y_(e,n):Af(e,n,!0),f=r;do{if(u===0){ar&&!r&&Ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!W_(a)){u=Af(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=e;u=yo;var H=R.current.memoizedState.isDehydrated;if(H&&(or(R,y).flags|=256),y=Af(R,y,!1),y!==2){if(_f&&!H){R.errorRecoveryDisabledLanes|=f,_s|=f,u=4;break e}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){or(e,0),Ba(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(r,n,ei,!Pa);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-E(),10<u)){if(Ba(r,n,ei,!Pa),be(r,0,!0)!==0)break e;oa=n,r.timeoutHandle=K0(y0.bind(null,r,a,jn,kl,bf,n,ei,_s,sr,Pa,f,"Throttled",-0,0),u);break e}y0(r,a,jn,kl,bf,n,ei,_s,sr,Pa,f,null,-0,0)}}break}while(!0);Oi(e)}function y0(e,n,a,r,u,f,y,R,H,ne,de,ve,oe,ce){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},d0(n,f,ve);var je=(f&62914560)===f?Fl-E():(f&4194048)===f?g0-E():0;if(je=Ny(ve,je),je!==null){oa=f,e.cancelPendingCommit=je(R0.bind(null,e,n,f,a,r,u,y,R,H,de,ve,null,oe,ce)),Ba(e,f,y,!ne);return}}R0(e,n,f,a,r,u,y,R,H)}function W_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,a,r){n&=~yf,n&=~_s,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),y=1<<f;r[f]=-1,u&=~y}a!==0&&Jo(e,a,n)}function Hl(){return(Lt&6)===0?(So(0),!1):!0}function Tf(){if(gt!==null){if(Bt===0)var e=gt.return;else e=gt,Ki=us=null,ku(e),Qs=null,io=0,e=gt;for(;e!==null;)Qm(e.alternate,e),e=e.return;gt=null}}function or(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Tf(),Xt=e,gt=a=Yi(e.current,null),vt=n,Bt=0,$n=null,Pa=!1,ar=Ce(e,n),_f=!1,sr=ei=yf=_s=za=nn=0,jn=yo=null,bf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=e[u],r&=~f}return ra=n,ll(),a}function b0(e,n){ct=null,F.H=fo,n===Ks||n===gl?(n=Ip(),Bt=3):n===Ru?(n=Ip(),Bt=4):Bt=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,gt===null&&(nn=1,Nl(e,li(n,e.current)))}function S0(){var e=Qn.current;return e===null?!0:(vt&4194048)===vt?di===null:(vt&62914560)===vt||(vt&536870912)!==0?e===di:!1}function M0(){var e=F.H;return F.H=fo,e===null?fo:e}function E0(){var e=F.A;return F.A=j_,e}function Gl(){nn=4,Pa||(vt&4194048)!==vt&&Qn.current!==null||(ar=!0),(za&134217727)===0&&(_s&134217727)===0||Xt===null||Ba(Xt,vt,ei,!1)}function Af(e,n,a){var r=Lt;Lt|=2;var u=M0(),f=E0();(Xt!==e||vt!==n)&&(kl=null,or(e,n)),n=!1;var y=nn;e:do try{if(Bt!==0&&gt!==null){var R=gt,H=$n;switch(Bt){case 8:Tf(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var ne=Bt;if(Bt=0,$n=null,lr(e,R,H,ne),a&&ar){y=0;break e}break;default:ne=Bt,Bt=0,$n=null,lr(e,R,H,ne)}}q_(),y=nn;break}catch(de){b0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Ki=us=null,Lt=r,F.H=u,F.A=f,gt===null&&(Xt=null,vt=0,ll()),y}function q_(){for(;gt!==null;)T0(gt)}function Y_(e,n){var a=Lt;Lt|=2;var r=M0(),u=E0();Xt!==e||vt!==n?(kl=null,Bl=E()+500,or(e,n)):ar=Ce(e,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=$n;t:switch(Bt){case 1:Bt=0,$n=null,lr(e,n,f,1);break;case 2:case 9:if(Pp(f)){Bt=0,$n=null,A0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==e||(Bt=7),Oi(e)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Pp(f)?(Bt=0,$n=null,A0(n)):(Bt=0,$n=null,lr(e,n,f,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var R=gt;if(y?fg(y):R.stateNode.complete){Bt=0,$n=null;var H=R.sibling;if(H!==null)gt=H;else{var ne=R.return;ne!==null?(gt=ne,Vl(ne)):gt=null}break t}}Bt=0,$n=null,lr(e,n,f,5);break;case 6:Bt=0,$n=null,lr(e,n,f,6);break;case 8:Tf(),nn=6;break e;default:throw Error(s(462))}}Z_();break}catch(de){b0(e,de)}while(!0);return Ki=us=null,F.H=r,F.A=u,Lt=a,gt!==null?0:(Xt=null,vt=0,ll(),nn)}function Z_(){for(;gt!==null&&!Ye();)T0(gt)}function T0(e){var n=Zm(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function A0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:ku(n);default:Qm(a,n),n=gt=Ep(n,ra),n=Zm(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function lr(e,n,a,r){Ki=us=null,ku(n),Qs=null,io=0;var u=n.return;try{if(I_(e,u,n,a,vt)){nn=1,Nl(e,li(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;nn=1,Nl(e,li(a,e.current)),gt=null;return}n.flags&32768?(St||r===1?e=!0:ar||(vt&536870912)!==0?e=!1:(Pa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),w0(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){w0(n,Pa);return}e=n.return;var a=k_(n.alternate,n,ra);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);nn===0&&(nn=5)}function w0(e,n){do{var a=H_(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);nn=6,gt=null}function R0(e,n,a,r,u,f,y,R,H){e.cancelPendingCommit=null;do jl();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,vi(e,a,f,y,R,H),e===Xt&&(gt=Xt=null,vt=0),rr=n,Fa=e,oa=a,Sf=f,Mf=u,x0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$_(ue,function(){return L0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,u=k.p,k.p=2,y=Lt,Lt|=4;try{G_(e,n,a)}finally{Lt=y,k.p=u,F.T=r}}pn=1,C0(),N0(),D0()}}function C0(){if(pn===1){pn=0;var e=Fa,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=k.p;k.p=2;var u=Lt;Lt|=4;try{c0(n,e);var f=Ff,y=mp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(H!==null&&lu(R)){var ne=H.start,de=H.end;if(de===void 0&&(de=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(de,R.value.length);else{var ve=R.ownerDocument||document,oe=ve&&ve.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),je=R.textContent.length,tt=Math.min(H.start,je),jt=H.end===void 0?tt:Math.min(H.end,je);!ce.extend&&tt>jt&&(y=jt,jt=tt,tt=y);var Y=hp(R,tt),j=hp(R,jt);if(Y&&j&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var te=ve.createRange();te.setStart(Y.node,Y.offset),ce.removeAllRanges(),tt>jt?(ce.addRange(te),ce.extend(j.node,j.offset)):(te.setEnd(j.node,j.offset),ce.addRange(te))}}}}for(ve=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&ve.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var xe=ve[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}nc=!!If,Ff=If=null}finally{Lt=u,k.p=r,F.T=a}}e.current=n,pn=2}}function N0(){if(pn===2){pn=0;var e=Fa,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=k.p;k.p=2;var u=Lt;Lt|=4;try{a0(e,n.alternate,n)}finally{Lt=u,k.p=r,F.T=a}}pn=3}}function D0(){if(pn===4||pn===3){pn=0,L();var e=Fa,n=rr,a=oa,r=x0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rr=Fa=null,U0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Ls(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,u=k.p,k.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var R=r[y];f(R.value,{componentStack:R.stack})}}finally{F.T=n,k.p=u}}(oa&3)!==0&&jl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ef?bo++:(bo=0,Ef=e):bo=0,So(0)}}function U0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function jl(){return C0(),N0(),D0(),L0()}function L0(){if(pn!==5)return!1;var e=Fa,n=Sf;Sf=0;var a=Ls(oa),r=F.T,u=k.p;try{k.p=32>a?32:a,F.T=null,a=Mf,Mf=null;var f=Fa,y=oa;if(pn=0,rr=Fa=null,oa=0,(Lt&6)!==0)throw Error(s(331));var R=Lt;if(Lt|=4,p0(f.current),f0(f,f.current,y,a),Lt=R,So(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{k.p=u,F.T=r,U0(e,n)}}function O0(e,n,a){n=li(a,n),n=tf(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function kt(e,n,a){if(e.tag===3)O0(e,e,a);else for(;n!==null;){if(n.tag===3){O0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=li(a,e),a=Pm(2),r=Da(n,a,2),r!==null&&(zm(a,r,n,e),Nn(r,2),Oi(r));break}}n=n.return}}function wf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new X_;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(_f=!0,u.add(a),e=K_.bind(null,e,n,a),n.then(e,e))}function K_(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>E()-Fl?(Lt&2)===0&&or(e,0):yf|=a,sr===vt&&(sr=0)),Oi(e)}function P0(e,n){n===0&&(n=It()),e=os(e,n),e!==null&&(Nn(e,n),Oi(e))}function Q_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),P0(e,a)}function J_(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),P0(e,a)}function $_(e,n){return Mt(e,n)}var Xl=null,cr=null,Rf=!1,Wl=!1,Cf=!1,ka=0;function Oi(e){e!==cr&&e.next===null&&(cr===null?Xl=cr=e:cr=cr.next=e),Wl=!0,Rf||(Rf=!0,ty())}function So(e,n){if(!Cf&&Wl){Cf=!0;do for(var a=!1,r=Xl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var y=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B0(r,f))}else f=vt,f=be(r,r===Xt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ce(r,f)||(a=!0,B0(r,f));r=r.next}while(a);Cf=!1}}function ey(){z0()}function z0(){Wl=Rf=!1;var e=0;ka!==0&&fy()&&(e=ka);for(var n=E(),a=null,r=Xl;r!==null;){var u=r.next,f=I0(r,n);f===0?(r.next=null,a===null?Xl=u:a.next=u,u===null&&(cr=a)):(a=r,(e!==0||(f&3)!==0)&&(Wl=!0)),r=u}pn!==0&&pn!==5||So(e),ka!==0&&(ka=0)}function I0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Fe(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&r)!==0)&&(u[y]=at(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Xt,a=vt,a=be(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ce(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Pt(r),Ls(a)){case 2:case 8:a=Se;break;case 32:a=ue;break;case 268435456:a=Ue;break;default:a=ue}return r=F0.bind(null,e),a=Mt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Pt(r),e.callbackPriority=2,e.callbackNode=null,2}function F0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var r=vt;return r=be(e,e===Xt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_0(e,r,n),I0(e,E()),e.callbackNode!=null&&e.callbackNode===a?F0.bind(null,e):null)}function B0(e,n){if(jl())return null;_0(e,n,!0)}function ty(){hy(function(){(Lt&6)!==0?Mt(pe,ey):z0()})}function Nf(){if(ka===0){var e=Ys;e===0&&(e=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),ka=e}return ka}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function H0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ny(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=k0((u[_n]||null).action),y=r.submitter;y&&(n=(n=y[_n]||null)?k0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new al("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var H=y?H0(u,y):new FormData(u);Zu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?H0(u,y):new FormData(u),Zu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Df=0;Df<du.length;Df++){var Uf=du[Df],iy=Uf.toLowerCase(),ay=Uf[0].toUpperCase()+Uf.slice(1);bi(iy,"on"+ay)}bi(vp,"onAnimationEnd"),bi(_p,"onAnimationIteration"),bi(yp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(y_,"onTransitionRun"),bi(b_,"onTransitionStart"),bi(S_,"onTransitionCancel"),bi(bp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function G0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var R=r[y],H=R.instance,ne=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(de){ol(de)}u.currentTarget=null,f=H}else for(y=0;y<r.length;y++){if(R=r[y],H=R.instance,ne=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(de){ol(de)}u.currentTarget=null,f=H}}}}function xt(e,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var r=e+"__bubble";a.has(r)||(V0(n,e,2,!1),a.add(r))}function Lf(e,n,a){var r=0;n&&(r|=4),V0(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[ql]){e[ql]=!0,q.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Lf("selectionchange",!1,n))}}function V0(e,n,a,r){switch(vg(n)){case 2:var u=Ly;break;case 8:u=Oy;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Pf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var R=r.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=r.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=ba(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){r=f=y;continue e}R=R.parentNode}}r=r.return}Yh(function(){var ne=f,de=Qc(a),ve=[];e:{var oe=Sp.get(e);if(oe!==void 0){var ce=al,je=e;switch(e){case"keypress":if(nl(a)===0)break e;case"keydown":case"keyup":ce=Jv;break;case"focusin":je="focus",ce=iu;break;case"focusout":je="blur",ce=iu;break;case"beforeblur":case"afterblur":ce=iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=t_;break;case vp:case _p:case yp:ce=Vv;break;case bp:ce=i_;break;case"scroll":case"scrollend":ce=Fv;break;case"wheel":ce=s_;break;case"copy":case"cut":case"paste":ce=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=$h;break;case"toggle":case"beforetoggle":ce=o_}var tt=(n&4)!==0,jt=!tt&&(e==="scroll"||e==="scrollend"),Y=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var j=ne,te;j!==null;){var xe=j;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||Y===null||(xe=jr(j,Y),xe!=null&&tt.push(Eo(j,xe,te))),jt)break;j=j.return}0<tt.length&&(oe=new ce(oe,je,null,a,de),ve.push({event:oe,listeners:tt}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",oe&&a!==Kc&&(je=a.relatedTarget||a.fromElement)&&(ba(je)||je[_i]))break e;if((ce||oe)&&(oe=de.window===de?de:(oe=de.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(je=a.relatedTarget||a.toElement,ce=ne,je=je?ba(je):null,je!==null&&(jt=c(je),tt=je.tag,je!==jt||tt!==5&&tt!==27&&tt!==6)&&(je=null)):(ce=null,je=ne),ce!==je)){if(tt=Qh,xe="onMouseLeave",Y="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(tt=$h,xe="onPointerLeave",Y="onPointerEnter",j="pointer"),jt=ce==null?oe:is(ce),te=je==null?oe:is(je),oe=new tt(xe,j+"leave",ce,a,de),oe.target=jt,oe.relatedTarget=te,xe=null,ba(de)===ne&&(tt=new tt(Y,j+"enter",je,a,de),tt.target=te,tt.relatedTarget=jt,xe=tt),jt=xe,ce&&je)t:{for(tt=ry,Y=ce,j=je,te=0,xe=Y;xe;xe=tt(xe))te++;xe=0;for(var Je=j;Je;Je=tt(Je))xe++;for(;0<te-xe;)Y=tt(Y),te--;for(;0<xe-te;)j=tt(j),xe--;for(;te--;){if(Y===j||j!==null&&Y===j.alternate){tt=Y;break t}Y=tt(Y),j=tt(j)}tt=null}else tt=null;ce!==null&&j0(ve,oe,ce,tt,!1),je!==null&&jt!==null&&j0(ve,jt,je,tt,!0)}}e:{if(oe=ne?is(ne):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var wt=op;else if(sp(oe))if(lp)wt=x_;else{wt=m_;var Ze=p_}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&yi(ne.elementType)&&(wt=op):wt=g_;if(wt&&(wt=wt(e,ne))){rp(ve,wt,a,de);break e}Ze&&Ze(e,oe,ne),e==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&bn(oe,"number",oe.value)}switch(Ze=ne?is(ne):window,e){case"focusin":(sp(Ze)||Ze.contentEditable==="true")&&(ks=Ze,cu=ne,Jr=null);break;case"focusout":Jr=cu=ks=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,gp(ve,a,de);break;case"selectionchange":if(__)break;case"keydown":case"keyup":gp(ve,a,de)}var ft;if(su)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Bs?ip(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(ep&&a.locale!=="ko"&&(Bs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Bs&&(ft=Zh()):(Ea=de,eu="value"in Ea?Ea.value:Ea.textContent,Bs=!0)),Ze=Yl(ne,_t),0<Ze.length&&(_t=new Jh(_t,e,null,a,de),ve.push({event:_t,listeners:Ze}),ft?_t.data=ft:(ft=ap(a),ft!==null&&(_t.data=ft)))),(ft=c_?u_(e,a):f_(e,a))&&(_t=Yl(ne,"onBeforeInput"),0<_t.length&&(Ze=new Jh("onBeforeInput","beforeinput",null,a,de),ve.push({event:Ze,listeners:_t}),Ze.data=ft)),ny(ve,e,ne,a,de)}G0(ve,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(e,a),u!=null&&r.unshift(Eo(e,u,f)),u=jr(e,n),u!=null&&r.push(Eo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function ry(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j0(e,n,a,r,u){for(var f=n._reactName,y=[];a!==null&&a!==r;){var R=a,H=R.alternate,ne=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||ne===null||(H=ne,u?(ne=jr(a,f),ne!=null&&y.unshift(Eo(a,ne,H))):u||(ne=jr(a,f),ne!=null&&y.push(Eo(a,ne,H)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function X0(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(ly,"")}function W0(e,n){return n=X0(n),X0(e)===n}function Vt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||hn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&hn(e,""+r);break;case"className":$e(e,"class",r);break;case"tabIndex":$e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(e,a,r);break;case"style":zs(e,r,f);break;case"data":if(n!=="object"){$e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",u.name,u,null),Vt(e,n,"formEncType",u.formEncType,u,null),Vt(e,n,"formMethod",u.formMethod,u,null),Vt(e,n,"formTarget",u.formTarget,u,null)):(Vt(e,n,"encType",u.encType,u,null),Vt(e,n,"method",u.method,u,null),Vt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"onScroll":r!=null&&xt("scroll",e);break;case"onScrollEnd":r!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":xt("beforetoggle",e),xt("toggle",e),We(e,"popover",r);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":We(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zv.get(a)||a,We(e,a,r))}}function zf(e,n,a,r,u,f){switch(a){case"style":zs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?hn(e,r):(typeof r=="number"||typeof r=="bigint")&&hn(e,""+r);break;case"onScroll":r!=null&&xt("scroll",e);break;case"onScrollEnd":r!=null&&xt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):We(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,f,y,a,null)}}u&&Vt(e,n,"srcSet",a.srcSet,a,null),r&&Vt(e,n,"src",a.src,a,null);return;case"input":xt("invalid",e);var R=f=y=u=null,H=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":u=de;break;case"type":y=de;break;case"checked":H=de;break;case"defaultChecked":ne=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Vt(e,n,r,de,a,null)}}Xi(e,f,R,H,ne,y,u,!1);return;case"select":xt("invalid",e),r=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":r=R;default:Vt(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!r,n!=null?ri(e,!!r,n,!1):a!=null&&ri(e,!!r,a,!0);return;case"textarea":xt("invalid",e),f=u=r=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Vt(e,n,y,R,a,null)}Sn(e,r,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Vt(e,n,H,r,a,null));return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)xt(Mo[r],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,ne,r,a,null)}return;default:if(yi(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&zf(e,n,de,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Vt(e,n,R,r,a,null))}function cy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,ne=null,de=null;for(ce in a){var ve=a[ce];if(a.hasOwnProperty(ce)&&ve!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=ve;default:r.hasOwnProperty(ce)||Vt(e,n,ce,null,r,ve)}}for(var oe in r){var ce=r[oe];if(ve=a[oe],r.hasOwnProperty(oe)&&(ce!=null||ve!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":de=ce;break;case"value":y=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==ve&&Vt(e,n,oe,ce,r,ve)}}yn(e,y,R,H,ne,de,f,u);return;case"select":ce=y=R=oe=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:r.hasOwnProperty(f)||Vt(e,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&Vt(e,n,u,f,r,H)}n=R,a=y,r=ce,oe!=null?ri(e,!!a,oe,!1):!!r!=!!a&&(n!=null?ri(e,!!a,n,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(e,n,R,null,r,u)}for(y in r)if(u=r[y],f=a[y],r.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(e,n,y,u,r,f)}Ft(e,oe,ce);return;case"option":for(var je in a)oe=a[je],a.hasOwnProperty(je)&&oe!=null&&!r.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:Vt(e,n,je,null,r,oe));for(H in r)oe=r[H],ce=a[H],r.hasOwnProperty(H)&&oe!==ce&&(oe!=null||ce!=null)&&(H==="selected"?e.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Vt(e,n,H,oe,r,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)oe=a[tt],a.hasOwnProperty(tt)&&oe!=null&&!r.hasOwnProperty(tt)&&Vt(e,n,tt,null,r,oe);for(ne in r)if(oe=r[ne],ce=a[ne],r.hasOwnProperty(ne)&&oe!==ce&&(oe!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Vt(e,n,ne,oe,r,ce)}return;default:if(yi(n)){for(var jt in a)oe=a[jt],a.hasOwnProperty(jt)&&oe!==void 0&&!r.hasOwnProperty(jt)&&zf(e,n,jt,void 0,r,oe);for(de in r)oe=r[de],ce=a[de],!r.hasOwnProperty(de)||oe===ce||oe===void 0&&ce===void 0||zf(e,n,de,oe,r,ce);return}}for(var Y in a)oe=a[Y],a.hasOwnProperty(Y)&&oe!=null&&!r.hasOwnProperty(Y)&&Vt(e,n,Y,null,r,oe);for(ve in r)oe=r[ve],ce=a[ve],!r.hasOwnProperty(ve)||oe===ce||oe==null&&ce==null||Vt(e,n,ve,oe,r,ce)}function q0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&q0(y)){for(y=0,R=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ne=H.startTime;if(ne>R)break;var de=H.transferSize,ve=H.initiatorType;de&&q0(ve)&&(H=H.responseEnd,y+=de*(H<R?1:(R-ne)/(H-ne)))}if(--r,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var If=null,Ff=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function fy(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(e){return Q0.resolve(null).then(e).catch(py)}:K0;function py(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function J0(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),hr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[ns]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);hr(n)}function $0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function my(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ns])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function eg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$?"||e.data==="$~"}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jf=null;function tg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ig(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vr(e)}var pi=new Map,ag=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=k.d;k.d={f:vy,r:_y,D:yy,C:by,L:Sy,m:My,X:Ty,S:Ey,M:Ay};function vy(){var e=la.f(),n=Hl();return e||n}function _y(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):la.r(e)}var ur=typeof document>"u"?null:document;function sg(e,n,a){var r=ur;if(r&&typeof n=="string"&&n){var u=rt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ag.has(u)||(ag.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Rn(n,"link",e),C(n),r.head.appendChild(n)))}}function yy(e){la.D(e),sg("dns-prefetch",e,null)}function by(e,n){la.C(e,n),sg("preconnect",e,n)}function Sy(e,n,a){la.L(e,n,a);var r=ur;if(r&&e&&n){var u='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+rt(a.imageSizes)+'"]')):u+='[href="'+rt(e)+'"]';var f=u;switch(n){case"style":f=fr(e);break;case"script":f=dr(e)}pi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),Rn(n,"link",e),C(n),r.head.appendChild(n)))}}function My(e,n){la.m(e,n);var a=ur;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+rt(r)+'"][href="'+rt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(e)}if(!pi.has(f)&&(e=x({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),Rn(r,"link",e),C(r),a.head.appendChild(r)}}}function Ey(e,n,a){la.S(e,n,a);var r=ur;if(r&&e){var u=Ma(r).hoistableStyles,f=fr(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=r.querySelector(Ao(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&Xf(e,a);var H=y=r.createElement("link");C(H),Rn(H,"link",e),H._p=new Promise(function(ne,de){H.onload=ne,H.onerror=de}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ql(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function Ty(e,n){la.X(e,n);var a=ur;if(a&&e){var r=Ma(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0},n),(n=pi.get(u))&&Wf(e,n),f=a.createElement("script"),C(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Ay(e,n){la.M(e,n);var a=ur;if(a&&e){var r=Ma(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Wf(e,n),f=a.createElement("script"),C(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function rg(e,n,a,r){var u=(u=ie.current)?Kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=Ma(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fr(a.href);var f=Ma(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Ao(e)))&&!f._p&&(y.instance=f,y.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||wy(u,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=Ma(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fr(e){return'href="'+rt(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function og(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function wy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),C(n),e.head.appendChild(n))}function dr(e){return'[src="'+rt(e)+'"]'}function wo(e){return"script[async]"+e}function lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(r)return n.instance=r,C(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),C(r),Rn(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=fr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;r=og(a),(u=pi.get(u))&&Xf(r,u),f=(e.ownerDocument||e).createElement("link"),C(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Rn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=dr(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,C(u),u):(r=a,(u=pi.get(f))&&(r=x({},a),Wf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Rn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,y=0;y<r.length;y++){var R=r[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function cg(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ns]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=r.get(y);R?R.push(f):r.set(y,[f])}}return r}function ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ry(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,r=og(r),(u=pi.get(u))&&Xf(r,u),f=f.createElement("link"),C(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function Ny(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&qf===0&&(qf=62500*uy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(Dy,e),ec=null,$l.call(e))}function Dy(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,u),a.set(y,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:D,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Uy(e,n,a,r,u,f,y,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function dg(e,n,a,r,u,f,y,R,H,ne,de,ve){return e=new Uy(e,n,a,y,H,ne,de,ve,R),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Cu(f),e}function hg(e){return e?(e=Vs,e):Vs}function pg(e,n,a,r,u,f){u=hg(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Da(e,r,n),a!==null&&(Xn(a,e,n),so(a,e,n))}function mg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yf(e,n){mg(e,n),(e=e.alternate)&&mg(e,n)}function gg(e){if(e.tag===13||e.tag===31){var n=os(e,67108864);n!==null&&Xn(n,e,67108864),Yf(e,67108864)}}function xg(e){if(e.tag===13||e.tag===31){var n=ti();n=kr(n);var a=os(e,n);a!==null&&Xn(a,e,n),Yf(e,n)}}var nc=!0;function Ly(e,n,a,r){var u=F.T;F.T=null;var f=k.p;try{k.p=2,Zf(e,n,a,r)}finally{k.p=f,F.T=u}}function Oy(e,n,a,r){var u=F.T;F.T=null;var f=k.p;try{k.p=8,Zf(e,n,a,r)}finally{k.p=f,F.T=u}}function Zf(e,n,a,r){if(nc){var u=Kf(r);if(u===null)Pf(e,n,r,ic,a),_g(e,r);else if(zy(u,e,n,a,r))r.stopPropagation();else if(_g(e,r),n&4&&-1<Py.indexOf(e)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ee(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Fe(y);R.entanglements[1]|=H,y&=~H}Oi(f),(Lt&6)===0&&(Bl=E()+500,So(0))}}break;case 31:case 13:R=os(f,2),R!==null&&Xn(R,f,2),Hl(),Yf(f,2)}if(f=Kf(r),f===null&&Pf(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Pf(e,n,r,null,a)}}function Kf(e){return e=Qc(e),Qf(e)}var ic=null;function Qf(e){if(ic=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case Se:return 8;case ue:case Ke:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ga=null,Va=null,ja=null,Co=new Map,No=new Map,Xa=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Do(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&gg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function zy(e,n,a,r,u){switch(n){case"focusin":return Ga=Do(Ga,e,n,a,r,u),!0;case"dragenter":return Va=Do(Va,e,n,a,r,u),!0;case"mouseover":return ja=Do(ja,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Do(No.get(f)||null,e,n,a,r,u)),!0}return!1}function yg(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){xg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){xg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Kc=r,a.target.dispatchEvent(r),Kc=null}else return n=Sa(a),n!==null&&gg(n),e.blockedOn=a,!1;n.shift()}return!0}function bg(e,n,a){ac(e)&&a.delete(n)}function Iy(){Jf=!1,Ga!==null&&ac(Ga)&&(Ga=null),Va!==null&&ac(Va)&&(Va=null),ja!==null&&ac(ja)&&(ja=null),Co.forEach(bg),No.forEach(bg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Iy)))}var rc=null;function Sg(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Qf(r||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function hr(e){function n(H){return sc(H,e)}Ga!==null&&sc(Ga,e),Va!==null&&sc(Va,e),ja!==null&&sc(ja,e),Co.forEach(n),No.forEach(n);for(var a=0;a<Xa.length;a++){var r=Xa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)yg(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],y=u[_n]||null;if(typeof f=="function")y||Sg(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[_n]||null)R=y.formAction;else if(Qf(u)!==null)continue}else R=y.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Sg(a)}}}function Mg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $f(e){this._internalRoot=e}oc.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();pg(a,r,e,n,null,null)},oc.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pg(e.current,2,null,e,null,null),Hl(),n[_i]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&yg(e)}};var Eg=t.version;if(Eg!=="19.2.3")throw Error(s(527,Eg,"19.2.3"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Te=lc.inject(Fy),Ae=lc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Dm,f=Um,y=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=dg(e,1,!1,null,null,a,r,null,u,f,y,Mg),e[_i]=n.current,Of(e),new $f(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Dm,y=Um,R=Lm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=dg(e,1,!0,n,a??null,r,u,H,f,y,R,Mg),n.context=hg(null),a=n.current,r=ti(),r=kr(r),u=Na(r),u.callback=null,Da(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Oi(n),e[_i]=n.current,Of(e),new oc(n)},Lo.version="19.2.3",Lo}var Og;function Yy(){if(Og)return nd.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=qy(),nd.exports}var Zy=Yy();const Ky=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Pg=o=>{const t=Qy(o);return t.charAt(0).toUpperCase()+t.slice(1)},Xx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Jy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var $y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const eb=Ne.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>Ne.createElement("svg",{ref:m,...$y,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Xx("lucide",l),...!c&&!Jy(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>Ne.createElement(p,v)),...Array.isArray(c)?c:[c]]));const qt=(o,t)=>{const i=Ne.forwardRef(({className:s,...l},c)=>Ne.createElement(eb,{ref:c,iconNode:t,className:Xx(`lucide-${Ky(Pg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Pg(o),i};const tb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Wx=qt("arrow-left",tb);const nb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],va=qt("arrow-right",nb);const ib=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],qx=qt("arrow-up-right",ib);const ab=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],sb=qt("briefcase",ab);const rb=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],ob=qt("building-2",rb);const lb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Oh=qt("check",lb);const cb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yx=qt("chevron-down",cb);const ub=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],fb=qt("copy",ub);const db=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],hb=qt("cpu",db);const pb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],mb=qt("eye",pb);const gb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],xb=qt("github",gb);const vb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],_b=qt("globe",vb);const yb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],bb=qt("instagram",yb);const Sb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Mb=qt("layers",Sb);const Eb=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zx=qt("loader-circle",Eb);const Tb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zg=qt("mail",Tb);const Ab=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wb=qt("menu",Ab);const Rb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Cb=qt("network",Rb);const Nb=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],Ig=qt("paperclip",Nb);const Db=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Fg=qt("phone",Db);const Ub=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Lb=qt("plus",Ub);const Ob=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Kx=qt("search",Ob);const Pb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zb=qt("shield-check",Pb);const Ib=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Fb=qt("trash-2",Ib);const Bb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nr=qt("x",Bb);const kb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Hb=qt("zap",kb),Fc=[{id:"01",folder:"01-ui-ux",title:"UI/UX Design",category:"Digital Capability",desc:"Crafting high-conversion interfaces that blend radical aesthetics with cognitive psychology to ensure seamless user journeys.",detailedDesc:"We deconstruct user behavior to reconstruct digital experiences. By merging data-driven insights with avant-garde aesthetics, we create interfaces that don't just look good—they perform. Every interaction is calculated, every pixel has a purpose.",alignRight:!1,video:"https://v.ftcdn.net/05/63/68/07/700_F_563680753_c1eGZf8z8A8y8E9z.mp4",image:"/01-ui-ux/cover.png",fileExt:".png"},{id:"02",folder:"02-app-dev",title:"App Development",category:"Digital Capability",desc:"Building robust, scalable, and secure mobile and web applications tailored to solve complex business challenges.",detailedDesc:"From native iOS/Android to cross-platform React Native solutions. We engineer applications that are built for scale, security, and speed. Our code is clean, modular, and ready for future integrations.",alignRight:!0,image:"/02-app-dev/cover.png",fileExt:".png"},{id:"03",folder:"03-brand-identity",title:"Brand Identity",category:"Digital Capability",desc:"Elevating brand authority through premium visual assets that command attention and establish market leadership.",detailedDesc:"A brand is not just a logo; it's a belief system. We craft visual identities that resonate on a subconscious level, turning customers into loyal advocates through consistent, high-impact visual storytelling.",alignRight:!1,image:"/03-brand-identity/cover.png",fileExt:".png"},{id:"04",folder:"04-motion-graphic",title:"Motion Graphic",category:"Digital Capability",desc:"Telling your brand story through high-fidelity motion graphics that capture the essence of your innovation.",detailedDesc:"Static is dead. We bring brands to life through fluid, kinetic typography and immersive motion design. We turn complex ideas into digestible, captivating visual narratives.",alignRight:!0,image:"/04-motion-graphic/cover.png",fileExt:".png"},{id:"05",folder:"05-ai-tools",title:"AI Tools Development",category:"Digital Capability",desc:"Integrating autonomous intelligence to automate workflows, predict user behavior, and drive unprecedented business efficiency.",detailedDesc:"The future is autonomous. We build custom AI solutions that streamline operations, predict market trends, and personalize user experiences in real-time.",alignRight:!1,image:"/05-ai-tools/cover.jpg",fileExt:".jpg"},{id:"06",folder:"06-social-media",title:"Social Media",category:"Digital Capability",desc:"Engineering strategic social presence through high-fidelity content systems that drive deep engagement and reinforce global brand dominance.",detailedDesc:"We don't just post; we dominate. Our social strategies are built on algorithmic understanding and high-fidelity content production that stops the scroll and drives engagement.",alignRight:!0,image:"/06-social-media/cover.png",fileExt:".png"},{id:"07",folder:"07-ecommerce",title:"E-Commerce",category:"Digital Capability",desc:"Constructing frictionless digital commerce ecosystems designed for maximum conversion and seamless cross-platform scalability.",detailedDesc:"We build digital storefronts that sell. Focusing on speed, security, and conversion rate optimization (CRO), we create shopping experiences that are as seamless as they are beautiful.",alignRight:!1,image:"/07-ecommerce/cover.png",fileExt:".png"},{id:"08",folder:"08-banner",title:"Platform Banner & Poster",category:"Digital Capability",desc:"Designing high-impact visual communications that command immediate attention across digital and physical platforms through elite art direction.",detailedDesc:"In a world of noise, clarity is king. We design promotional assets that cut through the clutter, delivering your message with precision and high-impact art direction.",alignRight:!0,image:"/08-banner/cover.png",fileExt:".png"},{id:"09",folder:"09-landing-page",title:"Landing Page",category:"Digital Capability",desc:"Building hyper-optimized, high-velocity entry points that combine persuasive storytelling with data-driven UX to maximize user acquisition.",detailedDesc:"First impressions are everything. We design landing pages that are visually stunning and ruthlessly effective at converting visitors into leads. Speed, story, and structure in perfect harmony.",alignRight:!1,image:"/09-landing-page/cover.jpg",fileExt:".jpg"},{id:"10",folder:"10-print",title:"Material Print Design",category:"Digital Capability",desc:"Extending brand authority into the physical realm through premium tactile assets that deliver a sophisticated and tangible brand experience.",detailedDesc:"Digital is fleeting; print is forever. We bring the same level of digital precision to physical assets, creating business cards, brochures, and packaging that feel premium to the touch.",alignRight:!0,image:"/10-print/cover.jpg",fileExt:".jpg"}],Gb=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],Vb=o=>{const t=o.target,i=t.src;if(t.getAttribute("data-tried-fallback")==="true"){if(i.endsWith(".jpg")){t.src=i.replace(".jpg",".jpeg"),t.setAttribute("data-tried-fallback","final");return}t.style.display="none";return}t.setAttribute("data-tried-fallback","true"),i.includes(".png")?t.src=i.replace(".png",".jpg"):i.includes(".jpg")?t.src=i.replace(".jpg",".png"):i.includes(".jpeg")?t.src=i.replace(".jpeg",".png"):t.style.display="none"};const Ph="182",jb=0,Bg=1,Xb=2,Uc=1,Wb=2,Go=3,ts=0,Yn=1,pa=2,ga=0,Rr=1,kg=2,Hg=3,Gg=4,qb=5,ws=100,Yb=101,Zb=102,Kb=103,Qb=104,Jb=200,$b=201,eS=202,tS=203,Bd=204,kd=205,nS=206,iS=207,aS=208,sS=209,rS=210,oS=211,lS=212,cS=213,uS=214,Hd=0,Gd=1,Vd=2,Dr=3,jd=4,Xd=5,Wd=6,qd=7,Qx=0,fS=1,dS=2,Bi=0,Jx=1,$x=2,ev=3,tv=4,nv=5,iv=6,av=7,sv=300,Ds=301,Ur=302,Yd=303,Zd=304,jc=306,Kd=1e3,ma=1001,Qd=1002,Cn=1003,hS=1004,cc=1005,On=1006,rd=1007,Cs=1008,ai=1009,rv=1010,ov=1011,jo=1012,zh=1013,Gi=1014,Ii=1015,_a=1016,Ih=1017,Fh=1018,Xo=1020,lv=35902,cv=35899,uv=1021,fv=1022,Ri=1023,ya=1026,Ns=1027,dv=1028,Bh=1029,Lr=1030,kh=1031,Hh=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,Jd=35840,$d=35841,eh=35842,th=35843,nh=36196,ih=37492,ah=37496,sh=37488,rh=37489,oh=37490,lh=37491,ch=37808,uh=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,xh=37816,vh=37817,_h=37818,yh=37819,bh=37820,Sh=37821,Mh=36492,Eh=36494,Th=36495,Ah=36283,wh=36284,Rh=36285,Ch=36286,pS=3200,hv=0,mS=1,$a="",gi="srgb",Or="srgb-linear",Bc="linear",Ht="srgb",pr=7680,Vg=519,gS=512,xS=513,vS=514,Gh=515,_S=516,yS=517,Vh=518,bS=519,jg=35044,Xg="300 es",Fi=2e3,kc=2001;function pv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function SS(){const o=Hc("canvas");return o.style.display="block",o}const Wg={};function qg(...o){const t="THREE."+o.shift();console.log(t,...o)}function st(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ct(...o){const t="THREE."+o.shift();console.error(t,...o)}function Wo(...o){const t=o.join(" ");t in Wg||(Wg[t]=!0,st(...o))}function MS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Nh=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function ES(o,t){return(o%t+t)%t}function ld(o,t,i){return(1-i)*o+i*t}function Oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],b=c[d+0],M=c[d+1],A=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x;return}if(h>=1){t[i+0]=b,t[i+1]=M,t[i+2]=A,t[i+3]=T;return}if(x!==T||m!==b||p!==M||v!==A){let S=m*b+p*M+v*A+x*T;S<0&&(b=-b,M=-M,A=-A,T=-T,S=-S);let _=1-h;if(S<.9995){const U=Math.acos(S),D=Math.sin(U);_=Math.sin(_*U)/D,h=Math.sin(h*U)/D,m=m*_+b*h,p=p*_+M*h,v=v*_+A*h,x=x*_+T*h}else{m=m*_+b*h,p=p*_+M*h,v=v*_+A*h,x=x*_+T*h;const U=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=U,p*=U,v*=U,x*=U}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=c[d],b=c[d+1],M=c[d+2],A=c[d+3];return t[i]=h*A+v*x+m*M-p*b,t[i+1]=m*A+v*b+p*x-h*M,t[i+2]=p*A+v*M+h*b-m*x,t[i+3]=v*A-h*x-m*b-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),x=h(c/2),b=m(s/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=b*v*x+p*M*A,this._y=p*M*x-b*v*A,this._z=p*v*A+b*M*x,this._w=p*v*x-b*M*A;break;case"YXZ":this._x=b*v*x+p*M*A,this._y=p*M*x-b*v*A,this._z=p*v*A-b*M*x,this._w=p*v*x+b*M*A;break;case"ZXY":this._x=b*v*x-p*M*A,this._y=p*M*x+b*v*A,this._z=p*v*A+b*M*x,this._w=p*v*x-b*M*A;break;case"ZYX":this._x=b*v*x-p*M*A,this._y=p*M*x+b*v*A,this._z=p*v*A-b*M*x,this._w=p*v*x+b*M*A;break;case"YZX":this._x=b*v*x+p*M*A,this._y=p*M*x+b*v*A,this._z=p*v*A-b*M*x,this._w=p*v*x-b*M*A;break;case"XZY":this._x=b*v*x-p*M*A,this._y=p*M*x-b*v*A,this._z=p*v*A+b*M*x,this._w=p*v*x+b*M*A;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],x=i[10],b=s+h+x;if(b>0){const M=.5/Math.sqrt(b+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(t=0,i=0,s=0){ee.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Yg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Yg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*v,this.y=s+m*v+h*p-c*x,this.z=l+m*x+c*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return cd.copy(this).projectOnVector(t),this.sub(cd)}reflect(t){return this.sub(cd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new ee,Yg=new Zo;class dt{constructor(t,i,s,l,c,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],x=s[7],b=s[2],M=s[5],A=s[8],T=l[0],S=l[3],_=l[6],U=l[1],D=l[4],P=l[7],I=l[2],B=l[5],z=l[8];return c[0]=d*T+h*U+m*I,c[3]=d*S+h*D+m*B,c[6]=d*_+h*P+m*z,c[1]=p*T+v*U+x*I,c[4]=p*S+v*D+x*B,c[7]=p*_+v*P+x*z,c[2]=b*T+M*U+A*I,c[5]=b*S+M*D+A*B,c[8]=b*_+M*P+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],x=v*d-h*p,b=h*m-v*c,M=p*c-d*m,A=i*x+s*b+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(l*p-v*s)*T,t[2]=(h*s-l*d)*T,t[3]=b*T,t[4]=(v*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(d*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ud.makeScale(t,i)),this}rotate(t){return this.premultiply(ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new dt,Zg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TS(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ht,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const At=TS();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class AS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{mr===void 0&&(mr=Hc("canvas")),mr.width=t.width,mr.height=t.height;const l=mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wS=0;class jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(fd(l[d].image)):c.push(fd(l[d]))}else c=fd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?AS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let RS=0;const dd=new ee;class In extends zr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ma,l=ma,c=On,d=Cs,h=Ri,m=ai,p=In.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Yo(),this.name="",this.source=new jh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kd:t.x=t.x-Math.floor(t.x);break;case ma:t.x=t.x<0?0:1;break;case Qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kd:t.y=t.y-Math.floor(t.y);break;case ma:t.y=t.y<0?0:1;break;case Qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=sv;In.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],x=m[8],b=m[1],M=m[5],A=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(v-b)<.01&&Math.abs(x-T)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+b)<.1&&Math.abs(x+T)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,P=(M+1)/2,I=(_+1)/2,B=(v+b)/4,z=(x+T)/4,Z=(A+S)/4;return D>P&&D>I?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=B/s,c=z/s):P>I?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=B/l,c=Z/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=Z/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-A)*(S-A)+(x-T)*(x-T)+(b-v)*(b-v));return Math.abs(U)<.001&&(U=1),this.x=(S-A)/U,this.y=(x-T)/U,this.z=(b-v)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new In(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends CS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NS extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ei):Ei.fromBufferAttribute(c,d),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),fc.subVectors(this.max,Po),gr.subVectors(t.a,Po),xr.subVectors(t.b,Po),vr.subVectors(t.c,Po),qa.subVectors(xr,gr),Ya.subVectors(vr,xr),ys.subVectors(gr,vr);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-ys.z,ys.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,ys.z,0,-ys.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-ys.y,ys.x,0];return!hd(i,gr,xr,vr,fc)||(i=[1,0,0,0,1,0,0,0,1],!hd(i,gr,xr,vr,fc))?!1:(dc.crossVectors(qa,Ya),i=[dc.x,dc.y,dc.z],hd(i,gr,xr,vr,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ei=new ee,uc=new Ko,gr=new ee,xr=new ee,vr=new ee,qa=new ee,Ya=new ee,ys=new ee,Po=new ee,fc=new ee,dc=new ee,bs=new ee;function hd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){bs.fromArray(o,c);const h=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),v=s.dot(bs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const DS=new Ko,zo=new ee,pd=new ee;class Xc{constructor(t=new ee,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):DS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(pd)),this.expandByPoint(zo.copy(t.center).sub(pd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ua=new ee,md=new ee,hc=new ee,Za=new ee,gd=new ee,pc=new ee,xd=new ee;class gv{constructor(t=new ee,i=new ee(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){md.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(md);const c=t.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Za.dot(this.direction),m=-Za.dot(hc),p=Za.lengthSq(),v=Math.abs(1-d*d);let x,b,M,A;if(v>0)if(x=d*m-h,b=d*h-m,A=c*v,x>=0)if(b>=-A)if(b<=A){const T=1/v;x*=T,b*=T,M=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b=-c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;else b<=-A?(x=Math.max(0,-(-d*c+h)),b=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p):b<=A?(x=0,b=Math.min(Math.max(-c,-m),c),M=b*(b+2*m)+p):(x=Math.max(0,-(d*c+h)),b=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+b*(b+2*m)+p);else b=d>0?-c:c,x=Math.max(0,-(d*b+h)),M=-x*x+b*(b+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(md).addScaledVector(hc,b),M}intersectSphere(t,i){ua.subVectors(t.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(s=(t.min.x-b.x)*p,l=(t.max.x-b.x)*p):(s=(t.max.x-b.x)*p,l=(t.min.x-b.x)*p),v>=0?(c=(t.min.y-b.y)*v,d=(t.max.y-b.y)*v):(c=(t.max.y-b.y)*v,d=(t.min.y-b.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-b.z)*x,m=(t.max.z-b.z)*x):(h=(t.max.z-b.z)*x,m=(t.min.z-b.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ua)!==null}intersectTriangle(t,i,s,l,c){gd.subVectors(i,t),pc.subVectors(s,t),xd.crossVectors(gd,pc);let d=this.direction.dot(xd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,t);const m=h*this.direction.dot(pc.crossVectors(Za,pc));if(m<0)return null;const p=h*this.direction.dot(gd.cross(Za));if(p<0||m+p>d)return null;const v=-h*Za.dot(xd);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,i,s,l,c,d,h,m,p,v,x,b,M,A,T,S){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,v,x,b,M,A,T,S)}set(t,i,s,l,c,d,h,m,p,v,x,b,M,A,T,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=x,_[14]=b,_[3]=M,_[7]=A,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),c=1/_r.setFromMatrixColumn(t,1).length(),d=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const b=d*v,M=d*x,A=h*v,T=h*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=b-T*p,i[9]=-h*m,i[2]=T-b*p,i[6]=A+M*p,i[10]=d*m}else if(t.order==="YXZ"){const b=m*v,M=m*x,A=p*v,T=p*x;i[0]=b+T*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*v,i[9]=-h,i[2]=M*h-A,i[6]=T+b*h,i[10]=d*m}else if(t.order==="ZXY"){const b=m*v,M=m*x,A=p*v,T=p*x;i[0]=b-T*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*v,i[9]=T-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const b=d*v,M=d*x,A=h*v,T=h*x;i[0]=m*v,i[4]=A*p-M,i[8]=b*p+T,i[1]=m*x,i[5]=T*p+b,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const b=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=T-b*x,i[8]=A*x+M,i[1]=x,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*x+A,i[10]=b-T*x}else if(t.order==="XZY"){const b=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=b*x+T,i[5]=d*v,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*v,i[10]=T*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(US,t,LS)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ka.crossVectors(s,ni),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ka.crossVectors(s,ni)),Ka.normalize(),mc.crossVectors(ni,Ka),l[0]=Ka.x,l[4]=mc.x,l[8]=ni.x,l[1]=Ka.y,l[5]=mc.y,l[9]=ni.y,l[2]=Ka.z,l[6]=mc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],x=s[5],b=s[9],M=s[13],A=s[2],T=s[6],S=s[10],_=s[14],U=s[3],D=s[7],P=s[11],I=s[15],B=l[0],z=l[4],Z=l[8],w=l[12],N=l[1],G=l[5],K=l[9],$=l[13],he=l[2],se=l[6],F=l[10],k=l[14],Q=l[3],_e=l[7],ye=l[11],O=l[15];return c[0]=d*B+h*N+m*he+p*Q,c[4]=d*z+h*G+m*se+p*_e,c[8]=d*Z+h*K+m*F+p*ye,c[12]=d*w+h*$+m*k+p*O,c[1]=v*B+x*N+b*he+M*Q,c[5]=v*z+x*G+b*se+M*_e,c[9]=v*Z+x*K+b*F+M*ye,c[13]=v*w+x*$+b*k+M*O,c[2]=A*B+T*N+S*he+_*Q,c[6]=A*z+T*G+S*se+_*_e,c[10]=A*Z+T*K+S*F+_*ye,c[14]=A*w+T*$+S*k+_*O,c[3]=U*B+D*N+P*he+I*Q,c[7]=U*z+D*G+P*se+I*_e,c[11]=U*Z+D*K+P*F+I*ye,c[15]=U*w+D*$+P*k+I*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],x=t[6],b=t[10],M=t[14],A=t[3],T=t[7],S=t[11],_=t[15],U=m*M-p*b,D=h*M-p*x,P=h*b-m*x,I=d*M-p*v,B=d*b-m*v,z=d*x-h*v;return i*(T*U-S*D+_*P)-s*(A*U-S*I+_*B)+l*(A*D-T*I+_*z)-c*(A*P-T*B+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],x=t[9],b=t[10],M=t[11],A=t[12],T=t[13],S=t[14],_=t[15],U=x*S*p-T*b*p+T*m*M-h*S*M-x*m*_+h*b*_,D=A*b*p-v*S*p-A*m*M+d*S*M+v*m*_-d*b*_,P=v*T*p-A*x*p+A*h*M-d*T*M-v*h*_+d*x*_,I=A*x*m-v*T*m-A*h*b+d*T*b+v*h*S-d*x*S,B=i*U+s*D+l*P+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=U*z,t[1]=(T*b*c-x*S*c-T*l*M+s*S*M+x*l*_-s*b*_)*z,t[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*_+s*m*_)*z,t[3]=(x*m*c-h*b*c-x*l*p+s*b*p+h*l*M-s*m*M)*z,t[4]=D*z,t[5]=(v*S*c-A*b*c+A*l*M-i*S*M-v*l*_+i*b*_)*z,t[6]=(A*m*c-d*S*c-A*l*p+i*S*p+d*l*_-i*m*_)*z,t[7]=(d*b*c-v*m*c+v*l*p-i*b*p-d*l*M+i*m*M)*z,t[8]=P*z,t[9]=(A*x*c-v*T*c-A*s*M+i*T*M+v*s*_-i*x*_)*z,t[10]=(d*T*c-A*h*c+A*s*p-i*T*p-d*s*_+i*h*_)*z,t[11]=(v*h*c-d*x*c-v*s*p+i*x*p+d*s*M-i*h*M)*z,t[12]=I*z,t[13]=(v*T*l-A*x*l+A*s*b-i*T*b-v*s*S+i*x*S)*z,t[14]=(A*h*l-d*T*l-A*s*m+i*T*m+d*s*S-i*h*S)*z,t[15]=(d*x*l-v*h*l+v*s*m-i*x*m-d*s*b+i*h*b)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,x=h+h,b=c*p,M=c*v,A=c*x,T=d*v,S=d*x,_=h*x,U=m*p,D=m*v,P=m*x,I=s.x,B=s.y,z=s.z;return l[0]=(1-(T+_))*I,l[1]=(M+P)*I,l[2]=(A-D)*I,l[3]=0,l[4]=(M-P)*B,l[5]=(1-(b+_))*B,l[6]=(S+U)*B,l[7]=0,l[8]=(A+D)*z,l[9]=(S-U)*z,l[10]=(1-(b+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=_r.set(l[0],l[1],l[2]).length();const d=_r.set(l[4],l[5],l[6]).length(),h=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,v=1/d,x=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,i.setFromRotationMatrix(Ti),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Fi,m=!1){const p=this.elements,v=2*c/(i-t),x=2*c/(s-l),b=(i+t)/(i-t),M=(s+l)/(s-l);let A,T;if(m)A=c/(d-c),T=d*c/(d-c);else if(h===Fi)A=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===kc)A=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Fi,m=!1){const p=this.elements,v=2/(i-t),x=2/(s-l),b=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,T;if(m)A=1/(d-c),T=d/(d-c);else if(h===Fi)A=-2/(d-c),T=-(d+c)/(d-c);else if(h===kc)A=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new ee,Ti=new $t,US=new ee(0,0,0),LS=new ee(1,1,1),Ka=new ee,mc=new ee,ni=new ee,Qg=new $t,Jg=new Zo;class Vi{constructor(t=0,i=0,s=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],x=l[2],b=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class xv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OS=0;const $g=new ee,yr=new Zo,fa=new $t,gc=new ee,Io=new ee,PS=new ee,zS=new Zo,ex=new ee(1,0,0),tx=new ee(0,1,0),nx=new ee(0,0,1),ix={type:"added"},IS={type:"removed"},br={type:"childadded",child:null},vd={type:"childremoved",child:null};class Fn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new ee,i=new Vi,s=new Zo,l=new ee(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(ex,t)}rotateY(t){return this.rotateOnAxis(tx,t)}rotateZ(t){return this.rotateOnAxis(nx,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ex,t)}translateY(t){return this.translateOnAxis(tx,t)}translateZ(t){return this.translateOnAxis(nx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Io,gc,this.up):fa.lookAt(gc,Io,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(fa),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ix),br.child=t,this.dispatchEvent(br),br.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IS),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ix),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,PS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,zS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),x=d(t.shapes),b=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),b.length>0&&(s.skeletons=b),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new ee(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ee,da=new ee,_d=new ee,ha=new ee,Sr=new ee,Mr=new ee,ax=new ee,yd=new ee,bd=new ee,Sd=new ee,Md=new an,Ed=new an,Td=new an;class wi{constructor(t=new ee,i=new ee,s=new ee){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),da.subVectors(s,i),_d.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(da),m=Ai.dot(_d),p=da.dot(da),v=da.dot(_d),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const b=1/x,M=(p*m-h*v)*b,A=(d*v-h*m)*b;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(t,i),Ed.fromBufferAttribute(t,s),Td.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Md,c.x),d.addScaledVector(Ed,c.y),d.addScaledVector(Td,c.z),d}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Sr.subVectors(l,s),Mr.subVectors(c,s),yd.subVectors(t,s);const m=Sr.dot(yd),p=Mr.dot(yd);if(m<=0&&p<=0)return i.copy(s);bd.subVectors(t,l);const v=Sr.dot(bd),x=Mr.dot(bd);if(v>=0&&x<=v)return i.copy(l);const b=m*x-v*p;if(b<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Sr,d);Sd.subVectors(t,c);const M=Sr.dot(Sd),A=Mr.dot(Sd);if(A>=0&&M<=A)return i.copy(c);const T=M*p-m*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(Mr,h);const S=v*A-M*x;if(S<=0&&x-v>=0&&M-A>=0)return ax.subVectors(c,l),h=(x-v)/(x-v+(M-A)),i.copy(l).addScaledVector(ax,h);const _=1/(S+T+b);return d=T*_,h=b*_,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Ad(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=At.workingColorSpace){return this.r=t,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=At.workingColorSpace){if(t=ES(t,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ad(d,c,t+1/3),this.g=Ad(d,c,t),this.b=Ad(d,c,t-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=vv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return At.workingToColorSpace(Ln.copy(this),t),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=At.workingColorSpace){At.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=v<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=At.workingColorSpace){return At.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=gi){At.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(xc);const s=ld(Qa.h,xc.h,i),l=ld(Qa.s,xc.s,i),c=ld(Qa.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new bt;bt.NAMES=vv;let FS=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Rr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bd&&(s.blendSrc=this.blendSrc),this.blendDst!==kd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xh extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ee,vc=new Nt;let BS=0;class Hi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=jg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jg&&(t.usage=this.usage),t}}class _v extends Hi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class yv extends Hi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Bn extends Hi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let kS=0;const mi=new $t,wd=new Fn,Er=new ee,ii=new Ko,Fo=new Ko,vn=new ee;class xi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?yv:_v)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return wd.lookAt(t),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ii.min,Fo.min),ii.expandByPoint(vn),vn.addVectors(ii.max,Fo.max),ii.expandByPoint(vn)):(ii.expandByPoint(Fo.min),ii.expandByPoint(Fo.max))}ii.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)vn.fromBufferAttribute(h,p),m&&(Er.fromBufferAttribute(t,p),vn.add(Er)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<s.count;Z++)h[Z]=new ee,m[Z]=new ee;const p=new ee,v=new ee,x=new ee,b=new Nt,M=new Nt,A=new Nt,T=new ee,S=new ee;function _(Z,w,N){p.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),b.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,N),v.sub(p),x.sub(p),M.sub(b),A.sub(b);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(T.copy(v).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(G),h[Z].add(T),h[w].add(T),h[N].add(T),m[Z].add(S),m[w].add(S),m[N].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],G=N.start,K=N.count;for(let $=G,he=G+K;$<he;$+=3)_(t.getX($+0),t.getX($+1),t.getX($+2))}const D=new ee,P=new ee,I=new ee,B=new ee;function z(Z){I.fromBufferAttribute(l,Z),B.copy(I);const w=h[Z];D.copy(w),D.sub(I.multiplyScalar(I.dot(w))).normalize(),P.crossVectors(B,w);const G=P.dot(m[Z])<0?-1:1;d.setXYZW(Z,D.x,D.y,D.z,G)}for(let Z=0,w=U.length;Z<w;++Z){const N=U[Z],G=N.start,K=N.count;for(let $=G,he=G+K;$<he;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let b=0,M=s.count;b<M;b++)s.setXYZ(b,0,0,0);const l=new ee,c=new ee,d=new ee,h=new ee,m=new ee,p=new ee,v=new ee,x=new ee;if(t)for(let b=0,M=t.count;b<M;b+=3){const A=t.getX(b+0),T=t.getX(b+1),S=t.getX(b+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(v),m.add(v),p.add(v),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let b=0,M=i.count;b<M;b+=3)l.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),s.setXYZ(b+0,v.x,v.y,v.z),s.setXYZ(b+1,v.x,v.y,v.z),s.setXYZ(b+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,x=h.normalized,b=new p.constructor(m.length*v);let M=0,A=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*v;for(let _=0;_<v;_++)b[A++]=p[M++]}return new Hi(b,v,x)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,x=p.length;v<x;v++){const b=p[v],M=t(b,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,b=p.length;x<b;x++){const M=p[x];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],x=c[p];for(let b=0,M=x.length;b<M;b++)v.push(x[b].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sx=new $t,Ss=new gv,_c=new Xc,rx=new ee,yc=new ee,bc=new ee,Sc=new ee,Rd=new ee,Mc=new ee,ox=new ee,Ec=new ee;class Ci extends Fn{constructor(t=new xi,i=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],x=c[m];v!==0&&(Rd.fromBufferAttribute(x,t),d?Mc.addScaledVector(Rd,v):Mc.addScaledVector(Rd.sub(i),v))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),Ss.copy(t.ray).recast(t.near),!(_c.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(_c,rx)===null||Ss.origin.distanceToSquared(rx)>(t.far-t.near)**2))&&(sx.copy(c).invert(),Ss.copy(t.ray).applyMatrix4(sx),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,b=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,T=b.length;A<T;A++){const S=b[A],_=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const B=h.getX(P),z=h.getX(P+1),Z=h.getX(P+2);l=Tc(this,_,t,s,p,v,x,B,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=A,_=T;S<_;S+=3){const U=h.getX(S),D=h.getX(S+1),P=h.getX(S+2);l=Tc(this,d,t,s,p,v,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,T=b.length;A<T;A++){const S=b[A],_=d[S.materialIndex],U=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,I=D;P<I;P+=3){const B=P,z=P+1,Z=P+2;l=Tc(this,_,t,s,p,v,x,B,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=A,_=T;S<_;S+=3){const U=S,D=S+1,P=S+2;l=Tc(this,d,t,s,p,v,x,U,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function HS(o,t,i,s,l,c,d,h){let m;if(t.side===Yn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===ts,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function Tc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,yc),o.getVertexPosition(m,bc),o.getVertexPosition(p,Sc);const v=HS(o,t,i,s,yc,bc,Sc,ox);if(v){const x=new ee;wi.getBarycoord(ox,yc,bc,Sc,x),l&&(v.uv=wi.getInterpolatedAttribute(l,h,m,p,x,new Nt)),c&&(v.uv1=wi.getInterpolatedAttribute(c,h,m,p,x,new Nt)),d&&(v.normal=wi.getInterpolatedAttribute(d,h,m,p,x,new ee),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new ee,materialIndex:0};wi.getNormal(yc,bc,Sc,b.normal),v.face=b,v.barycoord=x}return v}class Qo extends xi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],x=[];let b=0,M=0;A("z","y","x",-1,-1,s,i,t,d,c,0),A("z","y","x",1,-1,s,i,-t,d,c,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(x,2));function A(T,S,_,U,D,P,I,B,z,Z,w){const N=P/z,G=I/Z,K=P/2,$=I/2,he=B/2,se=z+1,F=Z+1;let k=0,Q=0;const _e=new ee;for(let ye=0;ye<F;ye++){const O=ye*G-$;for(let ae=0;ae<se;ae++){const ge=ae*N-K;_e[T]=ge*U,_e[S]=O*D,_e[_]=he,p.push(_e.x,_e.y,_e.z),_e[T]=0,_e[S]=0,_e[_]=B>0?1:-1,v.push(_e.x,_e.y,_e.z),x.push(ae/z),x.push(1-ye/Z),k+=1}}for(let ye=0;ye<Z;ye++)for(let O=0;O<z;O++){const ae=b+O+se*ye,ge=b+O+se*(ye+1),Re=b+(O+1)+se*(ye+1),ke=b+(O+1)+se*ye;m.push(ae,ge,ke),m.push(ge,Re,ke),Q+=6}h.addGroup(M,Q,w),M+=Q,b+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function GS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function bv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:At.workingColorSpace}const VS={clone:Pr,merge:zn};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=GS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Sv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new ee,lx=new Nt,cx=new Nt;class qn extends Sv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,lx,cx),i.subVectors(cx,lx)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(od*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class WS extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(Tr,Ar,t,i);l.layers=this.layers,this.add(l);const c=new qn(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const d=new qn(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const h=new qn(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const m=new qn(Tr,Ar,t,i);m.layers=this.layers,this.add(m);const p=new qn(Tr,Ar,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,x=t.getRenderTarget(),b=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(x,b,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Mv extends In{constructor(t=[],i=Ds,s,l,c,d,h,m,p,v){super(t,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ev extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qo(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ga});c.uniforms.tEquirect.value=i;const d=new Ci(l,c),h=i.minFilter;return i.minFilter===Cs&&(i.minFilter=On),new WS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Ac extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=v.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&b>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&b<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ac;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Tv extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class YS extends In{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Cn,v=Cn,x,b){super(null,d,h,m,p,v,l,c,x,b),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new ee,ZS=new ee,KS=new dt;class As{constructor(t=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Nd.subVectors(s,i).cross(ZS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Nd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||KS.getNormalMatrix(t),l=this.coplanarPoint(Nd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Xc,QS=new Nt(.5,.5),wc=new ee;class Wh{constructor(t=new As,i=new As,s=new As,l=new As,c=new As,d=new As){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Fi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],x=c[5],b=c[6],M=c[7],A=c[8],T=c[9],S=c[10],_=c[11],U=c[12],D=c[13],P=c[14],I=c[15];if(l[0].setComponents(p-d,M-v,_-A,I-U).normalize(),l[1].setComponents(p+d,M+v,_+A,I+U).normalize(),l[2].setComponents(p+h,M+x,_+T,I+D).normalize(),l[3].setComponents(p-h,M-x,_-T,I-D).normalize(),s)l[4].setComponents(m,b,S,P).normalize(),l[5].setComponents(p-m,M-b,_-S,I-P).normalize();else if(l[4].setComponents(p-m,M-b,_-S,I-P).normalize(),i===Fi)l[5].setComponents(p+m,M+b,_+S,I+P).normalize();else if(i===kc)l[5].setComponents(m,b,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const i=QS.distanceTo(t.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Av extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new ee,Vc=new ee,ux=new $t,Bo=new gv,Rc=new Xc,Dd=new ee,fx=new ee;class JS extends Fn{constructor(t=new xi,i=new Av){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Bn(s,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,t.ray.intersectsSphere(Rc)===!1)return;ux.copy(l).invert(),Bo.copy(t.ray).applyMatrix4(ux);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=s.index,b=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const _=v.getX(T),U=v.getX(T+1),D=Cc(this,t,Bo,m,_,U,T);D&&i.push(D)}if(this.isLineLoop){const T=v.getX(A-1),S=v.getX(M),_=Cc(this,t,Bo,m,T,S,A-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),A=Math.min(b.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const _=Cc(this,t,Bo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Cc(this,t,Bo,m,A-1,M,A-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cc(o,t,i,s,l,c,d){const h=o.geometry.attributes.position;if(Gc.fromBufferAttribute(h,l),Vc.fromBufferAttribute(h,c),i.distanceSqToSegment(Gc,Vc,Dd,fx)>s)return;Dd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dd);if(!(p<t.near||p>t.far))return{distance:p,point:fx.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const dx=new ee,hx=new ee;class $S extends JS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)dx.fromBufferAttribute(i,l),hx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+dx.distanceTo(hx);t.setAttribute("lineDistance",new Bn(s,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends In{constructor(t,i,s=Gi,l,c,d,h=Cn,m=Cn,p,v=ya,x=1){if(v!==ya&&v!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:t,height:i,depth:x};super(b,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eM extends qo{constructor(t,i=Gi,s=Ds,l,c,d=Cn,h=Cn,m,p=ya){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,h,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wc extends xi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,x=t/h,b=i/m,M=[],A=[],T=[],S=[];for(let _=0;_<v;_++){const U=_*b-d;for(let D=0;D<p;D++){const P=D*x-c;A.push(P,-U,0),T.push(0,0,1),S.push(D/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<h;U++){const D=U+p*_,P=U+p*(_+1),I=U+1+p*(_+1),B=U+1+p*_;M.push(D,P,B),M.push(P,I,B)}this.setIndex(M),this.setAttribute("position",new Bn(A,3)),this.setAttribute("normal",new Bn(T,3)),this.setAttribute("uv",new Bn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class qc extends xi{constructor(t=1,i=.4,s=64,l=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:l,p:c,q:d},s=Math.floor(s),l=Math.floor(l);const h=[],m=[],p=[],v=[],x=new ee,b=new ee,M=new ee,A=new ee,T=new ee,S=new ee,_=new ee;for(let D=0;D<=s;++D){const P=D/s*c*Math.PI*2;U(P,c,d,t,M),U(P+.01,c,d,t,A),S.subVectors(A,M),_.addVectors(A,M),T.crossVectors(S,_),_.crossVectors(T,S),T.normalize(),_.normalize();for(let I=0;I<=l;++I){const B=I/l*Math.PI*2,z=-i*Math.cos(B),Z=i*Math.sin(B);x.x=M.x+(z*_.x+Z*T.x),x.y=M.y+(z*_.y+Z*T.y),x.z=M.z+(z*_.z+Z*T.z),m.push(x.x,x.y,x.z),b.subVectors(x,M).normalize(),p.push(b.x,b.y,b.z),v.push(D/s),v.push(I/l)}}for(let D=1;D<=s;D++)for(let P=1;P<=l;P++){const I=(l+1)*(D-1)+(P-1),B=(l+1)*D+(P-1),z=(l+1)*D+P,Z=(l+1)*(D-1)+P;h.push(I,B,Z),h.push(B,z,Z)}this.setIndex(h),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(p,3)),this.setAttribute("uv",new Bn(v,2));function U(D,P,I,B,z){const Z=Math.cos(D),w=Math.sin(D),N=I/P*D,G=Math.cos(N);z.x=B*(2+G)*.5*Z,z.y=B*(2+G)*w*.5,z.z=B*Math.sin(N)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class tM extends xi{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],s=new Set,l=new ee,c=new ee;if(t.index!==null){const d=t.attributes.position,h=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const x=m[p],b=x.start,M=x.count;for(let A=b,T=b+M;A<T;A+=3)for(let S=0;S<3;S++){const _=h.getX(A+S),U=h.getX(A+(S+1)%3);l.fromBufferAttribute(d,_),c.fromBufferAttribute(d,U),px(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const d=t.attributes.position;for(let h=0,m=d.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,x=3*h+(p+1)%3;l.fromBufferAttribute(d,v),c.fromBufferAttribute(d,x),px(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Bn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function px(o,t,i){const s=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class nM extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class iM extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aM extends iM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sM extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rM extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rv extends Fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ud=new $t,mx=new ee,gx=new ee;class oM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;mx.setFromMatrixPosition(t.matrixWorld),i.position.copy(mx),gx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(gx),i.updateMatrixWorld(),Ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ud)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lM extends oM{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class xx extends Rv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new lM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Cv extends Sv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cM extends Rv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uM extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function vx(o,t,i,s){const l=fM(s);switch(i){case uv:return o*t;case dv:return o*t/l.components*l.byteLength;case Bh:return o*t/l.components*l.byteLength;case Lr:return o*t*2/l.components*l.byteLength;case kh:return o*t*2/l.components*l.byteLength;case fv:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Hh:return o*t*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $d:case th:return Math.max(o,16)*Math.max(t,8)/4;case Jd:case eh:return Math.max(o,8)*Math.max(t,8)/2;case nh:case ih:case sh:case rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ah:case oh:case lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case yh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case bh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Mh:case Eh:case Th:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ah:case wh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Rh:case Ch:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case ai:case rv:return{byteLength:1,components:1};case jo:case ov:case _a:return{byteLength:2,components:1};case Ih:case Fh:return{byteLength:2,components:4};case Gi:case zh:case Ii:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function Nv(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function dM(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const v=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,v);else{x.sort((M,A)=>M.start-A.start);let b=0;for(let M=1;M<x.length;M++){const A=x[b],T=x[M];T.start<=A.start+A.count+1?A.count=Math.max(A.count,T.start+T.count-A.start):(++b,x[b]=T)}x.length=b+1;for(let M=0,A=x.length;M<A;M++){const T=x[M];o.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
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
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
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
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,wM=`#ifdef USE_BUMPMAP
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
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
#endif`,f1=`uniform sampler2D dfgLUT;
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
}`,d1=`
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S1=`#if defined( USE_POINTS_UV )
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
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q1=`float getShadowMask() {
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
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
}`,yE=`#define DISTANCE
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
}`,bE=`#define DISTANCE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,wE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,CE=`#define LAMBERT
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
}`,NE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,UE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,OE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,zE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,FE=`#define TOON
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
}`,BE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,HE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,VE=`uniform vec3 color;
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
}`,jE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:xM,alphatest_pars_fragment:vM,aomap_fragment:_M,aomap_pars_fragment:yM,batching_pars_vertex:bM,batching_vertex:SM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:TM,iridescence_fragment:AM,bumpmap_pars_fragment:wM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:LM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:FM,displacementmap_pars_vertex:BM,displacementmap_vertex:kM,emissivemap_fragment:HM,emissivemap_pars_fragment:GM,colorspace_fragment:VM,colorspace_pars_fragment:jM,envmap_fragment:XM,envmap_common_pars_fragment:WM,envmap_pars_fragment:qM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:s1,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:a1,lights_toon_fragment:r1,lights_toon_pars_fragment:o1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:f1,lights_fragment_begin:d1,lights_fragment_maps:h1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:x1,logdepthbuf_vertex:v1,map_fragment:_1,map_pars_fragment:y1,map_particle_fragment:b1,map_particle_pars_fragment:S1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:E1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:w1,morphtarget_pars_vertex:R1,morphtarget_vertex:C1,normal_fragment_begin:N1,normal_fragment_maps:D1,normal_pars_fragment:U1,normal_pars_vertex:L1,normal_vertex:O1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:B1,opaque_fragment:k1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:j1,dithering_pars_fragment:X1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:Z1,shadowmap_vertex:K1,shadowmask_pars_fragment:Q1,skinbase_vertex:J1,skinning_pars_vertex:$1,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:sE,transmission_fragment:rE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:xE,depth_vert:vE,depth_frag:_E,distance_vert:yE,distance_frag:bE,equirect_vert:SE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:wE,meshlambert_vert:RE,meshlambert_frag:CE,meshmatcap_vert:NE,meshmatcap_frag:DE,meshnormal_vert:UE,meshnormal_frag:LE,meshphong_vert:OE,meshphong_frag:PE,meshphysical_vert:zE,meshphysical_frag:IE,meshtoon_vert:FE,meshtoon_frag:BE,points_vert:kE,points_frag:HE,shadow_vert:GE,shadow_frag:VE,sprite_vert:jE,sprite_frag:XE},Ie={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:zn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:zn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:zn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:zn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:zn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:zn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:zn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:zn([Ie.lights,Ie.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nc={r:0,b:0,g:0},Es=new Vi,WE=new $t;function qE(o,t,i,s,l,c,d){const h=new bt(0);let m=c===!0?0:1,p,v,x=null,b=0,M=null;function A(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?i:t).get(P)),P}function T(D){let P=!1;const I=A(D);I===null?_(h,m):I&&I.isColor&&(_(I,1),P=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,P){const I=A(P);I&&(I.isCubeTexture||I.mapping===jc)?(v===void 0&&(v=new Ci(new Qo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Pr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Es.copy(P.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Es)),v.material.toneMapped=At.getTransfer(I.colorSpace)!==Ht,(x!==I||b!==I.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,x=I,b=I.version,M=o.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ci(new Wc(2,2),new ji({name:"BackgroundMaterial",uniforms:Pr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||b!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=I,b=I.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,P){D.getRGB(Nc,bv(o)),s.buffers.color.setClear(Nc.r,Nc.g,Nc.b,P,d)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(h,m)},render:T,addToRenderList:S,dispose:U}}function YE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=b(null);let c=l,d=!1;function h(N,G,K,$,he){let se=!1;const F=x($,K,G);c!==F&&(c=F,p(c.object)),se=M(N,$,K,he),se&&A(N,$,K,he),he!==null&&t.update(he,o.ELEMENT_ARRAY_BUFFER),(se||d)&&(d=!1,P(N,G,K,$),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function m(){return o.createVertexArray()}function p(N){return o.bindVertexArray(N)}function v(N){return o.deleteVertexArray(N)}function x(N,G,K){const $=K.wireframe===!0;let he=s[N.id];he===void 0&&(he={},s[N.id]=he);let se=he[G.id];se===void 0&&(se={},he[G.id]=se);let F=se[$];return F===void 0&&(F=b(m()),se[$]=F),F}function b(N){const G=[],K=[],$=[];for(let he=0;he<i;he++)G[he]=0,K[he]=0,$[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:$,object:N,attributes:{},index:null}}function M(N,G,K,$){const he=c.attributes,se=G.attributes;let F=0;const k=K.getAttributes();for(const Q in k)if(k[Q].location>=0){const ye=he[Q];let O=se[Q];if(O===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),ye===void 0||ye.attribute!==O||O&&ye.data!==O.data)return!0;F++}return c.attributesNum!==F||c.index!==$}function A(N,G,K,$){const he={},se=G.attributes;let F=0;const k=K.getAttributes();for(const Q in k)if(k[Q].location>=0){let ye=se[Q];ye===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));const O={};O.attribute=ye,ye&&ye.data&&(O.data=ye.data),he[Q]=O,F++}c.attributes=he,c.attributesNum=F,c.index=$}function T(){const N=c.newAttributes;for(let G=0,K=N.length;G<K;G++)N[G]=0}function S(N){_(N,0)}function _(N,G){const K=c.newAttributes,$=c.enabledAttributes,he=c.attributeDivisors;K[N]=1,$[N]===0&&(o.enableVertexAttribArray(N),$[N]=1),he[N]!==G&&(o.vertexAttribDivisor(N,G),he[N]=G)}function U(){const N=c.newAttributes,G=c.enabledAttributes;for(let K=0,$=G.length;K<$;K++)G[K]!==N[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function D(N,G,K,$,he,se,F){F===!0?o.vertexAttribIPointer(N,G,K,he,se):o.vertexAttribPointer(N,G,K,$,he,se)}function P(N,G,K,$){T();const he=$.attributes,se=K.getAttributes(),F=G.defaultAttributeValues;for(const k in se){const Q=se[k];if(Q.location>=0){let _e=he[k];if(_e===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const ye=_e.normalized,O=_e.itemSize,ae=t.get(_e);if(ae===void 0)continue;const ge=ae.buffer,Re=ae.type,ke=ae.bytesPerElement,ie=Re===o.INT||Re===o.UNSIGNED_INT||_e.gpuType===zh;if(_e.isInterleavedBufferAttribute){const fe=_e.data,De=fe.stride,me=_e.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)_(Q.location+Me,fe.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<Q.locationSize;Me++)S(Q.location+Me);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Me=0;Me<Q.locationSize;Me++)D(Q.location+Me,O/Q.locationSize,Re,ye,De*ke,(me+O/Q.locationSize*Me)*ke,ie)}else{if(_e.isInstancedBufferAttribute){for(let fe=0;fe<Q.locationSize;fe++)_(Q.location+fe,_e.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let fe=0;fe<Q.locationSize;fe++)S(Q.location+fe);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let fe=0;fe<Q.locationSize;fe++)D(Q.location+fe,O/Q.locationSize,Re,ye,O*ke,O/Q.locationSize*fe*ke,ie)}}else if(F!==void 0){const ye=F[k];if(ye!==void 0)switch(ye.length){case 2:o.vertexAttrib2fv(Q.location,ye);break;case 3:o.vertexAttrib3fv(Q.location,ye);break;case 4:o.vertexAttrib4fv(Q.location,ye);break;default:o.vertexAttrib1fv(Q.location,ye)}}}}U()}function I(){Z();for(const N in s){const G=s[N];for(const K in G){const $=G[K];for(const he in $)v($[he].object),delete $[he];delete G[K]}delete s[N]}}function B(N){if(s[N.id]===void 0)return;const G=s[N.id];for(const K in G){const $=G[K];for(const he in $)v($[he].object),delete $[he];delete G[K]}delete s[N.id]}function z(N){for(const G in s){const K=s[G];if(K[N.id]===void 0)continue;const $=K[N.id];for(const he in $)v($[he].object),delete $[he];delete K[N.id]}}function Z(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function ZE(o,t,i){let s;function l(p){s=p}function c(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,x){x!==0&&(o.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function h(p,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let M=0;for(let A=0;A<x;A++)M+=v[A];i.update(M,s,1)}function m(p,v,x,b){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],v[A],b[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,b,0,x);let A=0;for(let T=0;T<x;T++)A+=v[T]*b[T];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function KE(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!Z)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:M,maxVertexTextures:A,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,maxSamples:I,samples:B}}function QE(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new As,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const M=x.length!==0||b||s!==0||l;return l=b,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,b){i=v(x,b,0)},this.setState=function(x,b,M){const A=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||c&&!S)c?v(null):p();else{const U=c?0:s,D=U*4;let P=_.clippingState||null;m.value=P,P=v(A,b,D,M);for(let I=0;I!==D;++I)P[I]=i[I];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,b,M,A){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=m.value,A!==!0||S===null){const _=M+T*4,U=b.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,P=M;D!==T;++D,P+=4)d.copy(x[D]).applyMatrix4(U,h),d.normal.toArray(S,P),S[P+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function JE(o){let t=new WeakMap;function i(d,h){return h===Yd?d.mapping=Ds:h===Zd&&(d.mapping=Ur),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Yd||h===Zd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ev(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const es=4,_x=[.125,.215,.35,.446,.526,.582],Rs=20,$E=256,ko=new Cv,yx=new bt;let Ld=null,Od=0,Pd=0,zd=!1;const eT=new ee;class bx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=eT}=c;Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ld,Od,Pd),this._renderer.xr.enabled=zd,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:_a,format:Ri,colorSpace:Or,depthBuffer:!1},l=Sx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tT(c)),this._blurMaterial=iT(c,t,i),this._ggxMaterial=nT(c,t,i)}return l}_compileMaterial(t){const i=new Ci(new xi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,c){const m=new qn(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,M=x.toneMapping;x.getClearColor(yx),x.toneMapping=Bi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new Qo,new Xh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const U=t.background;U?U.isColor&&(S.color.copy(U),t.background=null,_=!0):(S.color.copy(yx),_=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):P===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const I=this._cubeSize;wr(l,P*I,D>2?I:0,I,I),x.setRenderTarget(l),_&&x.render(T,m),x.render(t,m)}x.toneMapping=M,x.autoClear=b,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ds||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),b=0+p*1.25,M=x*b,{_lodMax:A}=this,T=this._sizeLods[s],S=3*T*(s>A-es?s-A+es:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,wr(c,S,_,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,wr(t,S,_,3*T,2*T),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rs-1),T=c/A,S=isFinite(c)?1+Math.floor(v*T):Rs;S>Rs&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rs}`);const _=[];let U=0;for(let z=0;z<Rs;++z){const Z=z/T,w=Math.exp(-Z*Z/2);_.push(w),z===0?U+=w:z<S&&(U+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/U;b.envMap.value=t.texture,b.samples.value=S,b.weights.value=_,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:D}=this;b.dTheta.value=A,b.mipInt.value=D-s;const P=this._sizeLods[l],I=3*P*(l>D-es?l-D+es:0),B=4*(this._cubeSize-P);wr(i,I,B,3*P,2*P),m.setRenderTarget(i),m.render(x,ko)}}function tT(o){const t=[],i=[],s=[];let l=o;const c=o-es+1+_x.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-es?m=_x[d-o+es-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,x=1+p,b=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,A=6,T=3,S=2,_=1,U=new Float32Array(T*A*M),D=new Float32Array(S*A*M),P=new Float32Array(_*A*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,Z=B>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(w,T*A*B),D.set(b,S*A*B);const N=[B,B,B,B,B,B];P.set(N,_*A*B)}const I=new xi;I.setAttribute("position",new Hi(U,T)),I.setAttribute("uv",new Hi(D,S)),I.setAttribute("faceIndex",new Hi(P,_)),s.push(new Ci(I,null)),l>es&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Sx(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function nT(o,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$E,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function iT(o,t,i){const s=new Float32Array(Rs),l=new ee(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Mx(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Ex(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function aT(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Yd||m===Zd,v=m===Ds||m===Ur;if(p||v){let x=t.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new bx(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new bx(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("WebGLRenderer: "+s+" extension not supported."),l}}}function rT(o,t,i,s){const l={},c=new WeakMap;function d(x){const b=x.target;b.index!==null&&t.remove(b.index);for(const A in b.attributes)t.remove(b.attributes[A]);b.removeEventListener("dispose",d),delete l[b.id];const M=c.get(b);M&&(t.remove(M),c.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const M in b)t.update(b[M],o.ARRAY_BUFFER)}function p(x){const b=[],M=x.index,A=x.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let D=0,P=U.length;D<P;D+=3){const I=U[D+0],B=U[D+1],z=U[D+2];b.push(I,B,B,z,z,I)}}else if(A!==void 0){const U=A.array;T=A.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const I=D+0,B=D+1,z=D+2;b.push(I,B,B,z,z,I)}}else return;const S=new(pv(b)?yv:_v)(b,1);S.version=T;const _=c.get(x);_&&t.remove(_),c.set(x,S)}function v(x){const b=c.get(x);if(b){const M=x.index;M!==null&&b.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:v}}function oT(o,t,i){let s;function l(b){s=b}let c,d;function h(b){c=b.type,d=b.bytesPerElement}function m(b,M){o.drawElements(s,M,c,b*d),i.update(M,s,1)}function p(b,M,A){A!==0&&(o.drawElementsInstanced(s,M,c,b*d,A),i.update(M,s,A))}function v(b,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,b,0,A);let S=0;for(let _=0;_<A;_++)S+=M[_];i.update(S,s,1)}function x(b,M,A,T){if(A===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<b.length;_++)p(b[_]/d,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,b,0,T,0,A);let _=0;for(let U=0;U<A;U++)_+=M[U]*T[U];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function lT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function cT(o,t,i){const s=new WeakMap,l=new an;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let b=s.get(h);if(b===void 0||b.count!==x){let N=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var M=N;b!==void 0&&b.texture.dispose();const A=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let I=h.attributes.position.count*P,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*x),Z=new mv(z,I,B,x);Z.type=Ii,Z.needsUpdate=!0;const w=P*4;for(let G=0;G<x;G++){const K=_[G],$=U[G],he=D[G],se=I*B*4*G;for(let F=0;F<K.count;F++){const k=F*w;A===!0&&(l.fromBufferAttribute(K,F),z[se+k+0]=l.x,z[se+k+1]=l.y,z[se+k+2]=l.z,z[se+k+3]=0),T===!0&&(l.fromBufferAttribute($,F),z[se+k+4]=l.x,z[se+k+5]=l.y,z[se+k+6]=l.z,z[se+k+7]=0),S===!0&&(l.fromBufferAttribute(he,F),z[se+k+8]=l.x,z[se+k+9]=l.y,z[se+k+10]=l.z,z[se+k+11]=he.itemSize===4?l.w:1)}}b={count:x,texture:Z,size:new Nt(I,B)},s.set(h,b),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const T=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:c}}function uT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,x=t.get(m,v);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const fT={[Jx]:"LINEAR_TONE_MAPPING",[$x]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[tv]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[av]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function dT(o,t,i,s,l){const c=new ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new ki(t,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),h=new xi;h.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const m=new nM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ci(h,m),v=new Cv(-1,1,1,-1,0,1);let x=null,b=null,M=!1,A,T=null,S=[],_=!1;this.setSize=function(U,D){c.setSize(U,D),d.setSize(U,D);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(U,D)}},this.setEffects=function(U){S=U,_=S.length>0&&S[0].isRenderPass===!0;const D=c.width,P=c.height;for(let I=0;I<S.length;I++){const B=S[I];B.setSize&&B.setSize(D,P)}},this.begin=function(U,D){if(M||U.toneMapping===Bi&&S.length===0)return!1;if(T=D,D!==null){const P=D.width,I=D.height;(c.width!==P||c.height!==I)&&this.setSize(P,I)}return _===!1&&U.setRenderTarget(c),A=U.toneMapping,U.toneMapping=Bi,!0},this.hasRenderPass=function(){return _},this.end=function(U,D){U.toneMapping=A,M=!0;let P=c,I=d;for(let B=0;B<S.length;B++){const z=S[B];if(z.enabled!==!1&&(z.render(U,I,P,D),z.needsSwap!==!1)){const Z=P;P=I,I=Z}}if(x!==U.outputColorSpace||b!==U.toneMapping){x=U.outputColorSpace,b=U.toneMapping,m.defines={},At.getTransfer(x)===Ht&&(m.defines.SRGB_TRANSFER="");const B=fT[b];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(T),U.render(p,v),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Dv=new In,Dh=new qo(1,1),Uv=new mv,Lv=new NS,Ov=new Mv,Tx=[],Ax=[],wx=new Float32Array(16),Rx=new Float32Array(9),Cx=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=Tx[l];if(c===void 0&&(c=new Float32Array(l),Tx[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Zc(o,t){let i=Ax[t];i===void 0&&(i=new Int32Array(t),Ax[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function hT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function xT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Cx.set(s),o.uniformMatrix2fv(this.addr,!1,Cx),gn(i,s)}}function vT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Rx.set(s),o.uniformMatrix3fv(this.addr,!1,Rx),gn(i,s)}}function _T(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;wx.set(s),o.uniformMatrix4fv(this.addr,!1,wx),gn(i,s)}}function yT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function ET(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function RT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Dh.compareFunction=i.isReversedDepthBuffer()?Vh:Gh,c=Dh):c=Dv,i.setTexture2D(t||c,l)}function CT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lv,l)}function NT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ov,l)}function DT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Uv,l)}function UT(o){switch(o){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return xT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return yT;case 35667:case 35671:return bT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return DT}}function LT(o,t){o.uniform1fv(this.addr,t)}function OT(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function PT(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function zT(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function FT(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function BT(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function kT(o,t){o.uniform1iv(this.addr,t)}function HT(o,t){o.uniform2iv(this.addr,t)}function GT(o,t){o.uniform3iv(this.addr,t)}function VT(o,t){o.uniform4iv(this.addr,t)}function jT(o,t){o.uniform1uiv(this.addr,t)}function XT(o,t){o.uniform2uiv(this.addr,t)}function WT(o,t){o.uniform3uiv(this.addr,t)}function qT(o,t){o.uniform4uiv(this.addr,t)}function YT(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Dh:d=Dv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function ZT(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Lv,c[d])}function KT(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ov,c[d])}function QT(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Uv,c[d])}function JT(o){switch(o){case 5126:return LT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return IT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return kT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return jT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class eA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class tA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Nx(o,t){o.seq.push(t),o.map[t.id]=t}function nA(o,t,i){const s=o.name,l=s.length;for(Id.lastIndex=0;;){const c=Id.exec(s),d=Id.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Nx(i,p===void 0?new $T(h,o,t):new eA(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new tA(h),Nx(i,x)),i=x}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);nA(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Dx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const iA=37297;let aA=0;function sA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Ux=new dt;function rA(o){At._getMatrix(Ux,At.workingColorSpace,o);const t=`mat3( ${Ux.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Lx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+sA(o.getShaderSource(t),h)}else return c}function oA(o,t){const i=rA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lA={[Jx]:"Linear",[$x]:"Reinhard",[ev]:"Cineon",[tv]:"ACESFilmic",[iv]:"AgX",[av]:"Neutral",[nv]:"Custom"};function cA(o,t){const i=lA[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new ee;function uA(){At.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function dA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function hA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Vo(o){return o!==""}function Ox(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Px(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(o){return o.replace(pA,gA)}const mA=new Map;function gA(o,t){let i=pt[t];if(i===void 0){const s=mA.get(t);if(s!==void 0)i=pt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Uh(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(o){return o.replace(xA,vA)}function vA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ix(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const _A={[Uc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function yA(o){return _A[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bA={[Ds]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function SA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const MA={[Ur]:"ENVMAP_MODE_REFRACTION"};function EA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":MA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TA={[Qx]:"ENVMAP_BLENDING_MULTIPLY",[fS]:"ENVMAP_BLENDING_MIX",[dS]:"ENVMAP_BLENDING_ADD"};function AA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":TA[o.combine]||"ENVMAP_BLENDING_NONE"}function wA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=yA(i),p=SA(i),v=EA(i),x=AA(i),b=wA(i),M=fA(i),A=dA(c),T=l.createProgram();let S,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Bi?cA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,oA("linearToOutputTexel",i.outputColorSpace),uA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Uh(d),d=Ox(d,i),d=Px(d,i),h=Uh(h),h=Ox(h,i),h=Px(h,i),d=zx(d),h=zx(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+S+d,P=U+_+h,I=Dx(l,l.VERTEX_SHADER,D),B=Dx(l,l.FRAGMENT_SHADER,P);l.attachShader(T,I),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",$=l.getShaderInfoLog(I)||"",he=l.getShaderInfoLog(B)||"",se=K.trim(),F=$.trim(),k=he.trim();let Q=!0,_e=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,I,B);else{const ye=Lx(l,I,"vertex"),O=Lx(l,B,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+se+`
`+ye+`
`+O)}else se!==""?st("WebGLProgram: Program Info Log:",se):(F===""||k==="")&&(_e=!1);_e&&(G.diagnostics={runnable:Q,programLog:se,vertexShader:{log:F,prefix:S},fragmentShader:{log:k,prefix:_}})}l.deleteShader(I),l.deleteShader(B),Z=new Ic(l,T),w=hA(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(T,iA)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=B,this}let CA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DA(t),i.set(t,s)),s}}class DA{constructor(t){this.id=CA++,this.code=t,this.usedTimes=0}}function UA(o,t,i,s,l,c,d){const h=new xv,m=new NA,p=new Set,v=[],x=new Map,b=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,N,G,K,$){const he=K.fog,se=$.geometry,F=w.isMeshStandardMaterial?K.environment:null,k=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),Q=k&&k.mapping===jc?k.image.height:null,_e=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&st("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ye=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,O=ye!==void 0?ye.length:0;let ae=0;se.morphAttributes.position!==void 0&&(ae=1),se.morphAttributes.normal!==void 0&&(ae=2),se.morphAttributes.color!==void 0&&(ae=3);let ge,Re,ke,ie;if(_e){const Tt=zi[_e];ge=Tt.vertexShader,Re=Tt.fragmentShader}else ge=w.vertexShader,Re=w.fragmentShader,m.update(w),ke=m.getVertexShaderID(w),ie=m.getFragmentShaderID(w);const fe=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),me=$.isInstancedMesh===!0,Me=$.isBatchedMesh===!0,it=!!w.map,Ot=!!w.matcap,ht=!!k,mt=!!w.aoMap,Et=!!w.lightMap,lt=!!w.bumpMap,en=!!w.normalMap,V=!!w.displacementMap,Kt=!!w.emissiveMap,Mt=!!w.metalnessMap,Pt=!!w.roughnessMap,Ye=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,W=w.iridescence>0,pe=w.sheen>0,Se=w.transmission>0,ue=Ye&&!!w.anisotropyMap,Ke=L&&!!w.clearcoatMap,Ue=L&&!!w.clearcoatNormalMap,Xe=L&&!!w.clearcoatRoughnessMap,nt=W&&!!w.iridescenceMap,Te=W&&!!w.iridescenceThicknessMap,Ae=pe&&!!w.sheenColorMap,He=pe&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Le=!!w.specularColorMap,ut=!!w.specularIntensityMap,X=Se&&!!w.transmissionMap,Pe=Se&&!!w.thicknessMap,we=!!w.gradientMap,Be=!!w.alphaMap,Ee=w.alphaTest>0,be=!!w.alphaHash,Ce=!!w.extensions;let at=Bi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(at=o.toneMapping);const It={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:Re,defines:w.defines,customVertexShaderID:ke,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Me,batchingColor:Me&&$._colorsTexture!==null,instancing:me,instancingColor:me&&$.instanceColor!==null,instancingMorph:me&&$.morphTexture!==null,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Or,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Ot,envMap:ht,envMapMode:ht&&k.mapping,envMapCubeUVHeight:Q,aoMap:mt,lightMap:Et,bumpMap:lt,normalMap:en,displacementMap:V,emissiveMap:Kt,normalMapObjectSpace:en&&w.normalMapType===mS,normalMapTangentSpace:en&&w.normalMapType===hv,metalnessMap:Mt,roughnessMap:Pt,anisotropy:Ye,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:Le,specularIntensityMap:ut,transmission:Se,transmissionMap:X,thicknessMap:Pe,gradientMap:we,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:be,combine:w.combine,mapUv:it&&T(w.map.channel),aoMapUv:mt&&T(w.aoMap.channel),lightMapUv:Et&&T(w.lightMap.channel),bumpMapUv:lt&&T(w.bumpMap.channel),normalMapUv:en&&T(w.normalMap.channel),displacementMapUv:V&&T(w.displacementMap.channel),emissiveMapUv:Kt&&T(w.emissiveMap.channel),metalnessMapUv:Mt&&T(w.metalnessMap.channel),roughnessMapUv:Pt&&T(w.roughnessMap.channel),anisotropyMapUv:ue&&T(w.anisotropyMap.channel),clearcoatMapUv:Ke&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(w.sheenRoughnessMap.channel),specularMapUv:Fe&&T(w.specularMap.channel),specularColorMapUv:Le&&T(w.specularColorMap.channel),specularIntensityMapUv:ut&&T(w.specularIntensityMap.channel),transmissionMapUv:X&&T(w.transmissionMap.channel),thicknessMapUv:Pe&&T(w.thicknessMap.channel),alphaMapUv:Be&&T(w.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(en||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!se.attributes.uv&&(it||Be),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ae,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pa,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Me)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function _(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)N.push(G),N.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(U(N,w),D(N,w),N.push(o.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function U(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function D(w,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const N=A[w.type];let G;if(N){const K=zi[N];G=VS.clone(K.uniforms)}else G=w.uniforms;return G}function I(w,N){let G=x.get(N);return G!==void 0?++G.usedTimes:(G=new RA(o,N,w,c),v.push(G),x.set(N,G)),G}function B(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),x.delete(w.cacheKey),w.destroy()}}function z(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:Z}}function LA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function OA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Fx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Bx(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x,b,M,A,T,S){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:b,material:M,groupOrder:A,renderOrder:x.renderOrder,z:T,group:S},o[t]=_):(_.id=x.id,_.object=x,_.geometry=b,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=T,_.group=S),t++,_}function h(x,b,M,A,T,S){const _=d(x,b,M,A,T,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,b,M,A,T,S){const _=d(x,b,M,A,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,b){i.length>1&&i.sort(x||OA),s.length>1&&s.sort(b||Fx),l.length>1&&l.sort(b||Fx)}function v(){for(let x=t,b=o.length;x<b;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function PA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Bx,o.set(s,[d])):l>=c.length?(d=new Bx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function zA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ee,color:new bt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[t.id]=i,i}}}function IA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let FA=0;function BA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kA(o){const t=new zA,i=IA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ee);const l=new ee,c=new $t,d=new $t;function h(p){let v=0,x=0,b=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,T=0,S=0,_=0,U=0,D=0,P=0,I=0,B=0,z=0;p.sort(BA);for(let w=0,N=p.length;w<N;w++){const G=p[w],K=G.color,$=G.intensity,he=G.distance;let se=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Lr?se=G.shadow.map.texture:se=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=K.r*$,x+=K.g*$,b+=K.b*$;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],$);z++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,Q=i.get(G);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=se,s.directionalShadowMatrix[M]=G.shadow.matrix,U++}s.directional[M]=F,M++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(K).multiplyScalar($),F.distance=he,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[T]=F;const k=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,k.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[T]=k.matrix,G.castShadow){const Q=i.get(G);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=se,P++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(K).multiplyScalar($),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=F,S++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const k=G.shadow,Q=i.get(G);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,s.pointShadow[A]=Q,s.pointShadowMap[A]=se,s.pointShadowMatrix[A]=G.shadow.matrix,D++}s.point[A]=F,A++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar($),F.groundColor.copy(G.groundColor).multiplyScalar($),s.hemi[_]=F,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=b;const Z=s.hash;(Z.directionalLength!==M||Z.pointLength!==A||Z.spotLength!==T||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==U||Z.numPointShadows!==D||Z.numSpotShadows!==P||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,Z.directionalLength=M,Z.pointLength=A,Z.spotLength=T,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=U,Z.numPointShadows=D,Z.numSpotShadows=P,Z.numSpotMaps=I,Z.numLightProbes=z,s.version=FA++)}function m(p,v){let x=0,b=0,M=0,A=0,T=0;const S=v.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const D=p[_];if(D.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),x++}else if(D.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const P=s.rectArea[A];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const P=s.point[b];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),b++}else if(D.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function kx(o){const t=new kA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function HA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new kx(o),t.set(l,[h])):c>=d.length?(h=new kx(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
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
}`,jA=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],XA=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Hx=new $t,Ho=new ee,Fd=new ee;function WA(o,t,i){let s=new Wh;const l=new Nt,c=new Nt,d=new an,h=new sM,m=new rM,p={},v=i.maxTextureSize,x={[ts]:Yn,[Yn]:ts,[pa]:pa},b=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),M=b.clone();M.defines.HORIZONTAL_PASS=1;const A=new xi;A.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ci(A,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let _=this.type;this.render=function(B,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===Wb&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Uc);const w=o.getRenderTarget(),N=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ga),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=_!==this.type;$&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(se=>se.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,se=B.length;he<se;he++){const F=B[he],k=F.shadow;if(k===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const Q=k.getFrameExtents();if(l.multiply(Q),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Q.x),l.x=c.x*Q.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Q.y),l.y=c.y*Q.y,k.mapSize.y=c.y)),k.map===null||$===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Go){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ki(l.x,l.y,{format:Lr,type:_a,minFilter:On,magFilter:On,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new qo(l.x,l.y,Ii),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=ya,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else{F.isPointLight?(k.map=new Ev(l.x),k.map.depthTexture=new eM(l.x,Gi)):(k.map=new ki(l.x,l.y),k.map.depthTexture=new qo(l.x,l.y,Gi)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=ya;const ye=o.state.buffers.depth.getReversed();this.type===Uc?(k.map.depthTexture.compareFunction=ye?Vh:Gh,k.map.depthTexture.minFilter=On,k.map.depthTexture.magFilter=On):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn)}k.camera.updateProjectionMatrix()}const _e=k.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<_e;ye++){if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,ye),o.clear();else{ye===0&&(o.setRenderTarget(k.map),o.clear());const O=k.getViewport(ye);d.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),K.viewport(d)}if(F.isPointLight){const O=k.camera,ae=k.matrix,ge=F.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),Ho.setFromMatrixPosition(F.matrixWorld),O.position.copy(Ho),Fd.copy(O.position),Fd.add(jA[ye]),O.up.copy(XA[ye]),O.lookAt(Fd),O.updateMatrixWorld(),ae.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Hx.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Hx,O.coordinateSystem,O.reversedDepth)}else k.updateMatrices(F);s=k.getFrustum(),P(z,Z,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Go&&U(k,Z),k.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(w,N,G)};function U(B,z){const Z=t.update(T);b.defines.VSM_SAMPLES!==B.blurSamples&&(b.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,b.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(l.x,l.y,{format:Lr,type:_a})),b.uniforms.shadow_pass.value=B.map.depthTexture,b.uniforms.resolution.value=B.mapSize,b.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,Z,b,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,Z,M,T,null)}function D(B,z,Z,w){let N=null;const G=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)N=G;else if(N=Z.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=N.uuid,$=z.uuid;let he=p[K];he===void 0&&(he={},p[K]=he);let se=he[$];se===void 0&&(se=N.clone(),he[$]=se,z.addEventListener("dispose",I)),N=se}if(N.visible=z.visible,N.wireframe=z.wireframe,w===Go?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:x[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const K=o.properties.get(N);K.light=Z}return N}function P(B,z,Z,w,N){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===Go)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const $=t.update(B),he=B.material;if(Array.isArray(he)){const se=$.groups;for(let F=0,k=se.length;F<k;F++){const Q=se[F],_e=he[Q.materialIndex];if(_e&&_e.visible){const ye=D(B,_e,w,N);B.onBeforeShadow(o,B,z,Z,$,ye,Q),o.renderBufferDirect(Z,null,$,ye,B,Q),B.onAfterShadow(o,B,z,Z,$,ye,Q)}}}else if(he.visible){const se=D(B,he,w,N);B.onBeforeShadow(o,B,z,Z,$,se,null),o.renderBufferDirect(Z,null,$,se,B,null),B.onAfterShadow(o,B,z,Z,$,se,null)}}const K=B.children;for(let $=0,he=K.length;$<he;$++)P(K[$],z,Z,w,N)}function I(B){B.target.removeEventListener("dispose",I);for(const Z in p){const w=p[Z],N=B.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const qA={[Hd]:Gd,[Vd]:Wd,[jd]:qd,[Dr]:Xd,[Gd]:Hd,[Wd]:Vd,[qd]:jd,[Xd]:Dr};function YA(o,t){function i(){let X=!1;const Pe=new an;let we=null;const Be=new an(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!X&&(o.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,be,Ce,at,It){It===!0&&(Ee*=at,be*=at,Ce*=at),Pe.set(Ee,be,Ce,at),Be.equals(Pe)===!1&&(o.clearColor(Ee,be,Ce,at),Be.copy(Pe))},reset:function(){X=!1,we=null,Be.set(-1,0,0,0)}}}function s(){let X=!1,Pe=!1,we=null,Be=null,Ee=null;return{setReversed:function(be){if(Pe!==be){const Ce=t.get("EXT_clip_control");be?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Pe=be;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Pe},setTest:function(be){be?fe(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(be){we!==be&&!X&&(o.depthMask(be),we=be)},setFunc:function(be){if(Pe&&(be=qA[be]),Be!==be){switch(be){case Hd:o.depthFunc(o.NEVER);break;case Gd:o.depthFunc(o.ALWAYS);break;case Vd:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case Wd:o.depthFunc(o.GREATER);break;case qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=be}},setLocked:function(be){X=be},setClear:function(be){Ee!==be&&(Pe&&(be=1-be),o.clearDepth(be),Ee=be)},reset:function(){X=!1,we=null,Be=null,Ee=null,Pe=!1}}}function l(){let X=!1,Pe=null,we=null,Be=null,Ee=null,be=null,Ce=null,at=null,It=null;return{setTest:function(Tt){X||(Tt?fe(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Tt){Pe!==Tt&&!X&&(o.stencilMask(Tt),Pe=Tt)},setFunc:function(Tt,Nn,vi){(we!==Tt||Be!==Nn||Ee!==vi)&&(o.stencilFunc(Tt,Nn,vi),we=Tt,Be=Nn,Ee=vi)},setOp:function(Tt,Nn,vi){(be!==Tt||Ce!==Nn||at!==vi)&&(o.stencilOp(Tt,Nn,vi),be=Tt,Ce=Nn,at=vi)},setLocked:function(Tt){X=Tt},setClear:function(Tt){It!==Tt&&(o.clearStencil(Tt),It=Tt)},reset:function(){X=!1,Pe=null,we=null,Be=null,Ee=null,be=null,Ce=null,at=null,It=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},x={},b=new WeakMap,M=[],A=null,T=!1,S=null,_=null,U=null,D=null,P=null,I=null,B=null,z=new bt(0,0,0),Z=0,w=!1,N=null,G=null,K=null,$=null,he=null;const se=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=k>=2);let _e=null,ye={};const O=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),ge=new an().fromArray(O),Re=new an().fromArray(ae);function ke(X,Pe,we,Be){const Ee=new Uint8Array(4),be=o.createTexture();o.bindTexture(X,be),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<we;Ce++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Pe+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return be}const ie={};ie[o.TEXTURE_2D]=ke(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=ke(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=ke(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=ke(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(o.DEPTH_TEST),d.setFunc(Dr),lt(!1),en(Bg),fe(o.CULL_FACE),mt(ga);function fe(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function De(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function me(X,Pe){return x[X]!==Pe?(o.bindFramebuffer(X,Pe),x[X]=Pe,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Pe),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Me(X,Pe){let we=M,Be=!1;if(X){we=b.get(Pe),we===void 0&&(we=[],b.set(Pe,we));const Ee=X.textures;if(we.length!==Ee.length||we[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Ce=Ee.length;be<Ce;be++)we[be]=o.COLOR_ATTACHMENT0+be;we.length=Ee.length,Be=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,Be=!0);Be&&o.drawBuffers(we)}function it(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const Ot={[ws]:o.FUNC_ADD,[Yb]:o.FUNC_SUBTRACT,[Zb]:o.FUNC_REVERSE_SUBTRACT};Ot[Kb]=o.MIN,Ot[Qb]=o.MAX;const ht={[Jb]:o.ZERO,[$b]:o.ONE,[eS]:o.SRC_COLOR,[Bd]:o.SRC_ALPHA,[rS]:o.SRC_ALPHA_SATURATE,[aS]:o.DST_COLOR,[nS]:o.DST_ALPHA,[tS]:o.ONE_MINUS_SRC_COLOR,[kd]:o.ONE_MINUS_SRC_ALPHA,[sS]:o.ONE_MINUS_DST_COLOR,[iS]:o.ONE_MINUS_DST_ALPHA,[oS]:o.CONSTANT_COLOR,[lS]:o.ONE_MINUS_CONSTANT_COLOR,[cS]:o.CONSTANT_ALPHA,[uS]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Pe,we,Be,Ee,be,Ce,at,It,Tt){if(X===ga){T===!0&&(De(o.BLEND),T=!1);return}if(T===!1&&(fe(o.BLEND),T=!0),X!==qb){if(X!==S||Tt!==w){if((_!==ws||P!==ws)&&(o.blendEquation(o.FUNC_ADD),_=ws,P=ws),Tt)switch(X){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kg:o.blendFunc(o.ONE,o.ONE);break;case Hg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Gg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Hg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gg:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}U=null,D=null,I=null,B=null,z.set(0,0,0),Z=0,S=X,w=Tt}return}Ee=Ee||Pe,be=be||we,Ce=Ce||Be,(Pe!==_||Ee!==P)&&(o.blendEquationSeparate(Ot[Pe],Ot[Ee]),_=Pe,P=Ee),(we!==U||Be!==D||be!==I||Ce!==B)&&(o.blendFuncSeparate(ht[we],ht[Be],ht[be],ht[Ce]),U=we,D=Be,I=be,B=Ce),(at.equals(z)===!1||It!==Z)&&(o.blendColor(at.r,at.g,at.b,It),z.copy(at),Z=It),S=X,w=!1}function Et(X,Pe){X.side===pa?De(o.CULL_FACE):fe(o.CULL_FACE);let we=X.side===Yn;Pe&&(we=!we),lt(we),X.blending===Rr&&X.transparent===!1?mt(ga):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function en(X){X!==jb?(fe(o.CULL_FACE),X!==G&&(X===Bg?o.cullFace(o.BACK):X===Xb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),G=X}function V(X){X!==K&&(F&&o.lineWidth(X),K=X)}function Kt(X,Pe,we){X?(fe(o.POLYGON_OFFSET_FILL),($!==Pe||he!==we)&&(o.polygonOffset(Pe,we),$=Pe,he=we)):De(o.POLYGON_OFFSET_FILL)}function Mt(X){X?fe(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Pt(X){X===void 0&&(X=o.TEXTURE0+se-1),_e!==X&&(o.activeTexture(X),_e=X)}function Ye(X,Pe,we){we===void 0&&(_e===null?we=o.TEXTURE0+se-1:we=_e);let Be=ye[we];Be===void 0&&(Be={type:void 0,texture:void 0},ye[we]=Be),(Be.type!==X||Be.texture!==Pe)&&(_e!==we&&(o.activeTexture(we),_e=we),o.bindTexture(X,Pe||ie[X]),Be.type=X,Be.texture=Pe)}function L(){const X=ye[_e];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function pe(){try{o.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Se(){try{o.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ue(){try{o.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Xe(){try{o.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function nt(){try{o.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Te(){try{o.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ae(X){ge.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function He(X){Re.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Fe(X,Pe){let we=p.get(Pe);we===void 0&&(we=new WeakMap,p.set(Pe,we));let Be=we.get(X);Be===void 0&&(Be=o.getUniformBlockIndex(Pe,X.name),we.set(X,Be))}function Le(X,Pe){const Be=p.get(Pe).get(X);m.get(Pe)!==Be&&(o.uniformBlockBinding(Pe,Be,X.__bindingPointIndex),m.set(Pe,Be))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_e=null,ye={},x={},b=new WeakMap,M=[],A=null,T=!1,S=null,_=null,U=null,D=null,P=null,I=null,B=null,z=new bt(0,0,0),Z=0,w=!1,N=null,G=null,K=null,$=null,he=null,ge.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:De,bindFramebuffer:me,drawBuffers:Me,useProgram:it,setBlending:mt,setMaterial:Et,setFlipSided:lt,setCullFace:en,setLineWidth:V,setPolygonOffset:Kt,setScissorTest:Mt,activeTexture:Pt,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:Xe,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Ae,viewport:He,reset:ut}}function ZA(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,v=new WeakMap;let x;const b=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):Hc("canvas")}function T(L,E,W){let pe=1;const Se=Ye(L);if((Se.width>W||Se.height>W)&&(pe=W/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(pe*Se.width),Ke=Math.floor(pe*Se.height);x===void 0&&(x=A(ue,Ke));const Ue=E?A(ue,Ke):x;return Ue.width=ue,Ue.height=Ke,Ue.getContext("2d").drawImage(L,0,0,ue,Ke),st("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ue+"x"+Ke+")."),Ue}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(L,E,W,pe,Se=!1){if(L!==null){if(o[L]!==void 0)return o[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=E;if(E===o.RED&&(W===o.FLOAT&&(ue=o.R32F),W===o.HALF_FLOAT&&(ue=o.R16F),W===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.R8UI),W===o.UNSIGNED_SHORT&&(ue=o.R16UI),W===o.UNSIGNED_INT&&(ue=o.R32UI),W===o.BYTE&&(ue=o.R8I),W===o.SHORT&&(ue=o.R16I),W===o.INT&&(ue=o.R32I)),E===o.RG&&(W===o.FLOAT&&(ue=o.RG32F),W===o.HALF_FLOAT&&(ue=o.RG16F),W===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RG8UI),W===o.UNSIGNED_SHORT&&(ue=o.RG16UI),W===o.UNSIGNED_INT&&(ue=o.RG32UI),W===o.BYTE&&(ue=o.RG8I),W===o.SHORT&&(ue=o.RG16I),W===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),W===o.UNSIGNED_INT&&(ue=o.RGB32UI),W===o.BYTE&&(ue=o.RGB8I),W===o.SHORT&&(ue=o.RGB16I),W===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),W===o.UNSIGNED_INT&&(ue=o.RGBA32UI),W===o.BYTE&&(ue=o.RGBA8I),W===o.SHORT&&(ue=o.RGBA16I),W===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),E===o.RGBA){const Ke=Se?Bc:At.getTransfer(pe);W===o.FLOAT&&(ue=o.RGBA32F),W===o.HALF_FLOAT&&(ue=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ue=Ke===Ht?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ue}function P(L,E){let W;return L?E===null||E===Gi||E===Xo?W=o.DEPTH24_STENCIL8:E===Ii?W=o.DEPTH32F_STENCIL8:E===jo&&(W=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Xo?W=o.DEPTH_COMPONENT24:E===Ii?W=o.DEPTH_COMPONENT32F:E===jo&&(W=o.DEPTH_COMPONENT16),W}function I(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function B(L){const E=L.target;E.removeEventListener("dispose",B),Z(E),E.isVideoTexture&&v.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),N(E)}function Z(L){const E=s.get(L);if(E.__webglInit===void 0)return;const W=L.source,pe=b.get(W);if(pe){const Se=pe[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(L),Object.keys(pe).length===0&&b.delete(W)}s.remove(L)}function w(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const W=L.source,pe=b.get(W);delete pe[E.__cacheKey],d.memory.textures--}function N(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let Se=0;Se<E.__webglFramebuffer[pe].length;Se++)o.deleteFramebuffer(E.__webglFramebuffer[pe][Se]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let pe=0,Se=W.length;pe<Se;pe++){const ue=s.get(W[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),d.memory.textures--),s.remove(W[pe])}s.remove(L)}let G=0;function K(){G=0}function $(){const L=G;return L>=l.maxTextures&&st("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function he(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function se(L,E){const W=s.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pe=L.image;if(pe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function F(L,E){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ie(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function k(L,E){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ie(W,L,E);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function Q(L,E){const W=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){fe(W,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}const _e={[Kd]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[Qd]:o.MIRRORED_REPEAT},ye={[Cn]:o.NEAREST,[hS]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},O={[gS]:o.NEVER,[bS]:o.ALWAYS,[xS]:o.LESS,[Gh]:o.LEQUAL,[vS]:o.EQUAL,[Vh]:o.GEQUAL,[_S]:o.GREATER,[yS]:o.NOTEQUAL};function ae(L,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===rd||E.magFilter===cc||E.magFilter===Cs||E.minFilter===On||E.minFilter===rd||E.minFilter===cc||E.minFilter===Cs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,_e[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,_e[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,_e[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,ye[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==cc&&E.minFilter!==Cs||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ge(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let Se=b.get(pe);Se===void 0&&(Se={},b.set(pe,Se));const ue=he(E);if(ue!==L.__cacheKey){Se[ue]===void 0&&(Se[ue]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Se[ue].usedTimes++;const Ke=Se[L.__cacheKey];Ke!==void 0&&(Se[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&w(E)),L.__cacheKey=ue,L.__webglTexture=Se[ue].texture}return W}function Re(L,E,W){return Math.floor(Math.floor(L/W)/E)}function ke(L,E,W,pe){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,W,pe,E.data);else{ue.sort((Te,Ae)=>Te.start-Ae.start);let Ke=0;for(let Te=1;Te<ue.length;Te++){const Ae=ue[Ke],He=ue[Te],Fe=Ae.start+Ae.count,Le=Re(He.start,E.width,4),ut=Re(Ae.start,E.width,4);He.start<=Fe+1&&Le===ut&&Re(He.start+He.count-1,E.width,4)===Le?Ae.count=Math.max(Ae.count,He.start+He.count-Ae.start):(++Ke,ue[Ke]=He)}ue.length=Ke+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),nt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Te=0,Ae=ue.length;Te<Ae;Te++){const He=ue[Te],Fe=Math.floor(He.start/4),Le=Math.ceil(He.count/4),ut=Fe%E.width,X=Math.floor(Fe/E.width),Pe=Le,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ut,X,Pe,we,W,pe,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,nt)}}function ie(L,E,W){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const Se=ge(L,E),ue=E.source;i.bindTexture(pe,L.__webglTexture,o.TEXTURE0+W);const Ke=s.get(ue);if(ue.version!==Ke.__version||Se===!0){i.activeTexture(o.TEXTURE0+W);const Ue=At.getPrimaries(At.workingColorSpace),Xe=E.colorSpace===$a?null:At.getPrimaries(E.colorSpace),nt=E.colorSpace===$a||Ue===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Te=T(E.image,!1,l.maxTextureSize);Te=Pt(E,Te);const Ae=c.convert(E.format,E.colorSpace),He=c.convert(E.type);let Fe=D(E.internalFormat,Ae,He,E.colorSpace,E.isVideoTexture);ae(pe,E);let Le;const ut=E.mipmaps,X=E.isVideoTexture!==!0,Pe=Ke.__version===void 0||Se===!0,we=ue.dataReady,Be=I(E,Te);if(E.isDepthTexture)Fe=P(E.format===Ns,E.type),Pe&&(X?i.texStorage2D(o.TEXTURE_2D,1,Fe,Te.width,Te.height):i.texImage2D(o.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Ae,He,null));else if(E.isDataTexture)if(ut.length>0){X&&Pe&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,ut[0].width,ut[0].height);for(let Ee=0,be=ut.length;Ee<be;Ee++)Le=ut[Ee],X?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ae,He,Le.data):i.texImage2D(o.TEXTURE_2D,Ee,Fe,Le.width,Le.height,0,Ae,He,Le.data);E.generateMipmaps=!1}else X?(Pe&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,Te.width,Te.height),we&&ke(E,Te,Ae,He)):i.texImage2D(o.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Ae,He,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Fe,ut[0].width,ut[0].height,Te.depth);for(let Ee=0,be=ut.length;Ee<be;Ee++)if(Le=ut[Ee],E.format!==Ri)if(Ae!==null)if(X){if(we)if(E.layerUpdates.size>0){const Ce=vx(Le.width,Le.height,E.format,E.type);for(const at of E.layerUpdates){const It=Le.data.subarray(at*Ce/Le.data.BYTES_PER_ELEMENT,(at+1)*Ce/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,at,Le.width,Le.height,1,Ae,It)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Te.depth,Ae,Le.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Fe,Le.width,Le.height,Te.depth,0,Le.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Te.depth,Ae,He,Le.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Fe,Le.width,Le.height,Te.depth,0,Ae,He,Le.data)}else{X&&Pe&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,ut[0].width,ut[0].height);for(let Ee=0,be=ut.length;Ee<be;Ee++)Le=ut[Ee],E.format!==Ri?Ae!==null?X?we&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ae,Le.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Fe,Le.width,Le.height,0,Le.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ae,He,Le.data):i.texImage2D(o.TEXTURE_2D,Ee,Fe,Le.width,Le.height,0,Ae,He,Le.data)}else if(E.isDataArrayTexture)if(X){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Fe,Te.width,Te.height,Te.depth),we)if(E.layerUpdates.size>0){const Ee=vx(Te.width,Te.height,E.format,E.type);for(const be of E.layerUpdates){const Ce=Te.data.subarray(be*Ee/Te.data.BYTES_PER_ELEMENT,(be+1)*Ee/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,be,Te.width,Te.height,1,Ae,He,Ce)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ae,He,Te.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,Te.width,Te.height,Te.depth,0,Ae,He,Te.data);else if(E.isData3DTexture)X?(Pe&&i.texStorage3D(o.TEXTURE_3D,Be,Fe,Te.width,Te.height,Te.depth),we&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ae,He,Te.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,Te.width,Te.height,Te.depth,0,Ae,He,Te.data);else if(E.isFramebufferTexture){if(Pe)if(X)i.texStorage2D(o.TEXTURE_2D,Be,Fe,Te.width,Te.height);else{let Ee=Te.width,be=Te.height;for(let Ce=0;Ce<Be;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,Fe,Ee,be,0,Ae,He,null),Ee>>=1,be>>=1}}else if(ut.length>0){if(X&&Pe){const Ee=Ye(ut[0]);i.texStorage2D(o.TEXTURE_2D,Be,Fe,Ee.width,Ee.height)}for(let Ee=0,be=ut.length;Ee<be;Ee++)Le=ut[Ee],X?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ae,He,Le):i.texImage2D(o.TEXTURE_2D,Ee,Fe,Ae,He,Le);E.generateMipmaps=!1}else if(X){if(Pe){const Ee=Ye(Te);i.texStorage2D(o.TEXTURE_2D,Be,Fe,Ee.width,Ee.height)}we&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae,He,Te)}else i.texImage2D(o.TEXTURE_2D,0,Fe,Ae,He,Te);S(E)&&_(pe),Ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,W){if(E.image.length!==6)return;const pe=ge(L,E),Se=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+W);const ue=s.get(Se);if(Se.version!==ue.__version||pe===!0){i.activeTexture(o.TEXTURE0+W);const Ke=At.getPrimaries(At.workingColorSpace),Ue=E.colorSpace===$a?null:At.getPrimaries(E.colorSpace),Xe=E.colorSpace===$a||Ke===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let be=0;be<6;be++)!nt&&!Te?Ae[be]=T(E.image[be],!0,l.maxCubemapSize):Ae[be]=Te?E.image[be].image:E.image[be],Ae[be]=Pt(E,Ae[be]);const He=Ae[0],Fe=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),ut=D(E.internalFormat,Fe,Le,E.colorSpace),X=E.isVideoTexture!==!0,Pe=ue.__version===void 0||pe===!0,we=Se.dataReady;let Be=I(E,He);ae(o.TEXTURE_CUBE_MAP,E);let Ee;if(nt){X&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ut,He.width,He.height);for(let be=0;be<6;be++){Ee=Ae[be].mipmaps;for(let Ce=0;Ce<Ee.length;Ce++){const at=Ee[Ce];E.format!==Ri?Fe!==null?X?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce,0,0,at.width,at.height,Fe,at.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce,ut,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce,0,0,at.width,at.height,Fe,Le,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce,ut,at.width,at.height,0,Fe,Le,at.data)}}}else{if(Ee=E.mipmaps,X&&Pe){Ee.length>0&&Be++;const be=Ye(Ae[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ut,be.width,be.height)}for(let be=0;be<6;be++)if(Te){X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ae[be].width,Ae[be].height,Fe,Le,Ae[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,Ae[be].width,Ae[be].height,0,Fe,Le,Ae[be].data);for(let Ce=0;Ce<Ee.length;Ce++){const It=Ee[Ce].image[be].image;X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce+1,0,0,It.width,It.height,Fe,Le,It.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce+1,ut,It.width,It.height,0,Fe,Le,It.data)}}else{X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Fe,Le,Ae[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,Fe,Le,Ae[be]);for(let Ce=0;Ce<Ee.length;Ce++){const at=Ee[Ce];X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce+1,0,0,Fe,Le,at.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ce+1,ut,Fe,Le,at.image[be])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),ue.__version=Se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function De(L,E,W,pe,Se,ue){const Ke=c.convert(W.format,W.colorSpace),Ue=c.convert(W.type),Xe=D(W.internalFormat,Ke,Ue,W.colorSpace),nt=s.get(E),Te=s.get(W);if(Te.__renderTarget=E,!nt.__hasExternalTextures){const Ae=Math.max(1,E.width>>ue),He=Math.max(1,E.height>>ue);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,ue,Xe,Ae,He,E.depth,0,Ke,Ue,null):i.texImage2D(Se,ue,Xe,Ae,He,0,Ke,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,0,V(E)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function me(L,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,ue=P(E.stencilBuffer,Se),Ke=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Kt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ue,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,L)}else{const pe=E.textures;for(let Se=0;Se<pe.length;Se++){const ue=pe[Se],Ke=c.convert(ue.format,ue.colorSpace),Ue=c.convert(ue.type),Xe=D(ue.internalFormat,Ke,Ue,ue.colorSpace);Kt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),Xe,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),Xe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Me(L,E,W){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Se.__webglTexture===void 0){Se.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),ae(o.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),Te=c.convert(E.depthTexture.type);let Ae;E.depthTexture.format===ya?Ae=o.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(Ae=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ae,E.width,E.height,0,nt,Te,null)}}else se(E.depthTexture,0);const ue=Se.__webglTexture,Ke=V(E),Ue=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xe=E.depthTexture.format===Ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ue,ue,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ue,ue,0);else if(E.depthTexture.format===Ns)Kt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ue,ue,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ue,ue,0);else throw new Error("Unknown depthTexture format")}function it(L){const E=s.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Me(E.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Me(E.__webglFramebuffer[0],L,0):Me(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),me(E.__webglDepthbuffer[pe],L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),me(E.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(L,E,W){const pe=s.get(L);E!==void 0&&De(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&it(L)}function ht(L){const E=L.texture,W=s.get(L),pe=s.get(E);L.addEventListener("dispose",z);const Se=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ke=Se.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,d.memory.textures++),ue){W.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ue]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)W.__webglFramebuffer[Ue][Xe]=o.createFramebuffer()}else W.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)W.__webglFramebuffer[Ue]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let Ue=0,Xe=Se.length;Ue<Xe;Ue++){const nt=s.get(Se[Ue]);nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Kt(L)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Se.length;Ue++){const Xe=Se[Ue];W.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const nt=c.convert(Xe.format,Xe.colorSpace),Te=c.convert(Xe.type),Ae=D(Xe.internalFormat,nt,Te,Xe.colorSpace,L.isXRRenderTarget===!0),He=V(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Ae,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),me(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(o.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)De(W.__webglFramebuffer[Ue][Xe],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Xe);else De(W.__webglFramebuffer[Ue],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ue=0,Xe=Se.length;Ue<Xe;Ue++){const nt=Se[Ue],Te=s.get(nt);let Ae=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Te.__webglTexture),ae(Ae,nt),De(W.__webglFramebuffer,L,nt,o.COLOR_ATTACHMENT0+Ue,Ae,0),S(nt)&&_(Ae)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,pe.__webglTexture),ae(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)De(W.__webglFramebuffer[Xe],L,E,o.COLOR_ATTACHMENT0,Ue,Xe);else De(W.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ue,0);S(E)&&_(Ue),i.unbindTexture()}L.depthBuffer&&it(L)}function mt(L){const E=L.textures;for(let W=0,pe=E.length;W<pe;W++){const Se=E[W];if(S(Se)){const ue=U(L),Ke=s.get(Se).__webglTexture;i.bindTexture(ue,Ke),_(ue),i.unbindTexture()}}}const Et=[],lt=[];function en(L){if(L.samples>0){if(Kt(L)===!1){const E=L.textures,W=L.width,pe=L.height;let Se=o.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=s.get(L),Ue=E.length>1;if(Ue)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Te=s.get(E[nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,W,pe,0,0,W,pe,Se,o.NEAREST),m===!0&&(Et.length=0,lt.length=0,Et.push(o.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Et.push(ue),lt.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Te=s.get(E[nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,Te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Kt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){const E=d.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Pt(L,E){const W=L.colorSpace,pe=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Or&&W!==$a&&(At.getTransfer(W)===Ht?(pe!==Ri||Se!==ai)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=se,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KA(o,t){function i(s,l=$a){let c;const d=At.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===Ih)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Fh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===lv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===cv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===rv)return o.BYTE;if(s===ov)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===zh)return o.INT;if(s===Gi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===_a)return o.HALF_FLOAT;if(s===uv)return o.ALPHA;if(s===fv)return o.RGB;if(s===Ri)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ns)return o.DEPTH_STENCIL;if(s===dv)return o.RED;if(s===Bh)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===kh)return o.RG_INTEGER;if(s===Hh)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===zc)if(d===Ht)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jd||s===$d||s===eh||s===th)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===nh||s===ih)return d===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ah)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===sh)return c.COMPRESSED_R11_EAC;if(s===rh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===oh)return c.COMPRESSED_RG11_EAC;if(s===lh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===xh||s===vh||s===_h||s===yh||s===bh||s===Sh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ch)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_h)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sh)return d===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mh||s===Eh||s===Th)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Mh)return d===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Eh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ah||s===wh||s===Rh||s===Ch)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ah)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new wv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:QA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends zr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,x=null,b=null,M=null,A=null;const T=typeof XRWebGLBinding<"u",S=new $A,_={},U=i.getContextAttributes();let D=null,P=null;const I=[],B=[],z=new Nt;let Z=null;const w=new qn;w.viewport=new an;const N=new qn;N.viewport=new an;const G=[w,N],K=new uM;let $=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=I[ie];return fe===void 0&&(fe=new Cd,I[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=I[ie];return fe===void 0&&(fe=new Cd,I[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=I[ie];return fe===void 0&&(fe=new Cd,I[ie]=fe),fe.getHandSpace()};function se(ie){const fe=B.indexOf(ie.inputSource);if(fe===-1)return;const De=I[fe];De!==void 0&&(De.update(ie.inputSource,ie.frame,p||d),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",k);for(let ie=0;ie<I.length;ie++){const fe=B[ie];fe!==null&&(B[ie]=null,I[ie].disconnect(fe))}$=null,he=null,S.reset();for(const ie in _)delete _[ie];t.setRenderTarget(D),M=null,b=null,x=null,l=null,P=null,ke.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return b!==null?b:M},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",F),l.addEventListener("inputsourceschange",k),U.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,me=null,Me=null;U.depth&&(Me=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=U.stencil?Ns:ya,me=U.stencil?Xo:Gi);const it={colorFormat:i.RGBA8,depthFormat:Me,scaleFactor:c};x=this.getBinding(),b=x.createProjectionLayer(it),l.updateRenderState({layers:[b]}),t.setPixelRatio(1),t.setSize(b.textureWidth,b.textureHeight,!1),P=new ki(b.textureWidth,b.textureHeight,{format:Ri,type:ai,depthTexture:new qo(b.textureWidth,b.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const De={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ki(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ke.setContext(l),ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(ie){for(let fe=0;fe<ie.removed.length;fe++){const De=ie.removed[fe],me=B.indexOf(De);me>=0&&(B[me]=null,I[me].disconnect(De))}for(let fe=0;fe<ie.added.length;fe++){const De=ie.added[fe];let me=B.indexOf(De);if(me===-1){for(let it=0;it<I.length;it++)if(it>=B.length){B.push(De),me=it;break}else if(B[it]===null){B[it]=De,me=it;break}if(me===-1)break}const Me=I[me];Me&&Me.connect(De)}}const Q=new ee,_e=new ee;function ye(ie,fe,De){Q.setFromMatrixPosition(fe.matrixWorld),_e.setFromMatrixPosition(De.matrixWorld);const me=Q.distanceTo(_e),Me=fe.projectionMatrix.elements,it=De.projectionMatrix.elements,Ot=Me[14]/(Me[10]-1),ht=Me[14]/(Me[10]+1),mt=(Me[9]+1)/Me[5],Et=(Me[9]-1)/Me[5],lt=(Me[8]-1)/Me[0],en=(it[8]+1)/it[0],V=Ot*lt,Kt=Ot*en,Mt=me/(-lt+en),Pt=Mt*-lt;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Pt),ie.translateZ(Mt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Me[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Ot+Mt,L=ht+Mt,E=V-Pt,W=Kt+(me-Pt),pe=mt*ht/L*Ye,Se=Et*ht/L*Ye;ie.projectionMatrix.makePerspective(E,W,pe,Se,Ye,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function O(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let fe=ie.near,De=ie.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(De=S.depthFar)),K.near=N.near=w.near=fe,K.far=N.far=w.far=De,($!==K.near||he!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,he=K.far),K.layers.mask=ie.layers.mask|6,w.layers.mask=K.layers.mask&3,N.layers.mask=K.layers.mask&5;const me=ie.parent,Me=K.cameras;O(K,me);for(let it=0;it<Me.length;it++)O(Me[it],me);Me.length===2?ye(K,w,N):K.projectionMatrix.copy(w.projectionMatrix),ae(ie,K,me)};function ae(ie,fe,De){De===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Nh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(b===null&&M===null))return m},this.setFoveation=function(ie){m=ie,b!==null&&(b.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ie){return _[ie]};let ge=null;function Re(ie,fe){if(v=fe.getViewerPose(p||d),A=fe,v!==null){const De=v.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let me=!1;De.length!==K.cameras.length&&(K.cameras.length=0,me=!0);for(let ht=0;ht<De.length;ht++){const mt=De[ht];let Et=null;if(M!==null)Et=M.getViewport(mt);else{const en=x.getViewSubImage(b,mt);Et=en.viewport,ht===0&&(t.setRenderTargetTextures(P,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(P))}let lt=G[ht];lt===void 0&&(lt=new qn,lt.layers.enable(ht),lt.viewport=new an,G[ht]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Et.x,Et.y,Et.width,Et.height),ht===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),me===!0&&K.cameras.push(lt)}const Me=l.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){x=s.getBinding();const ht=x.getDepthInformation(De[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,l.renderState)}if(Me&&Me.includes("camera-access")&&T){t.state.unbindTexture(),x=s.getBinding();for(let ht=0;ht<De.length;ht++){const mt=De[ht].camera;if(mt){let Et=_[mt];Et||(Et=new wv,_[mt]=Et);const lt=x.getCameraImage(mt);Et.sourceTexture=lt}}}}for(let De=0;De<I.length;De++){const me=B[De],Me=I[De];me!==null&&Me!==void 0&&Me.update(me,fe,p||d)}ge&&ge(ie,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),A=null}const ke=new Nv;ke.setAnimationLoop(Re),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}const Ts=new Vi,t2=new $t;function n2(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,bv(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,U,D,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),b(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),A(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,U,D):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=t.get(_),D=U.envMap,P=U.envMapRotation;D&&(S.envMap.value=D,Ts.copy(P),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),S.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Ts)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,U,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function b(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function i2(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const P=D.program;s.uniformBlockBinding(U,P)}function p(U,D){let P=l[U.id];P===void 0&&(A(U),P=v(U),l[U.id]=P,U.addEventListener("dispose",S));const I=D.program;s.updateUBOMapping(U,I);const B=t.render.frame;c[U.id]!==B&&(b(U),c[U.id]=B)}function v(U){const D=x();U.__bindingPointIndex=D;const P=o.createBuffer(),I=U.__size,B=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(U){const D=l[U.id],P=U.uniforms,I=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let B=0,z=P.length;B<z;B++){const Z=Array.isArray(P[B])?P[B]:[P[B]];for(let w=0,N=Z.length;w<N;w++){const G=Z[w];if(M(G,B,w,I)===!0){const K=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let se=0;se<$.length;se++){const F=$[se],k=T(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,K+he,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,he),he+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,D,P,I){const B=U.value,z=D+"_"+P;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const Z=I[z];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return I[z]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function A(U){const D=U.uniforms;let P=0;const I=16;for(let z=0,Z=D.length;z<Z;z++){const w=Array.isArray(D[z])?D[z]:[D[z]];for(let N=0,G=w.length;N<G;N++){const K=w[N],$=Array.isArray(K.value)?K.value:[K.value];for(let he=0,se=$.length;he<se;he++){const F=$[he],k=T(F),Q=P%I,_e=Q%k.boundary,ye=Q+_e;P+=_e,ye!==0&&I-ye<k.storage&&(P+=I-ye),K.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=k.storage}}}const B=P%I;return B>0&&(P+=I-B),U.__size=P,U.__cache={},this}function T(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const a2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function s2(){return Pi===null&&(Pi=new YS(a2,16,16,Lr,_a),Pi.name="DFG_LUT",Pi.minFilter=On,Pi.magFilter=On,Pi.wrapS=ma,Pi.wrapT=ma,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Pv{constructor(t={}){const{canvas:i=SS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1,outputBufferType:M=ai}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const T=M,S=new Set([Hh,kh,Bh]),_=new Set([ai,Gi,jo,Xo,Ih,Fh]),U=new Uint32Array(4),D=new Int32Array(4);let P=null,I=null;const B=[],z=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=gi;let G=0,K=0,$=null,he=-1,se=null;const F=new an,k=new an;let Q=null;const _e=new bt(0);let ye=0,O=i.width,ae=i.height,ge=1,Re=null,ke=null;const ie=new an(0,0,O,ae),fe=new an(0,0,O,ae);let De=!1;const me=new Wh;let Me=!1,it=!1;const Ot=new $t,ht=new ee,mt=new an,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function en(){return $===null?ge:1}let V=s;function Kt(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ph}`),i.addEventListener("webglcontextlost",at,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),V===null){const q="webgl2";if(V=Kt(q,C),V===null)throw Kt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let Mt,Pt,Ye,L,E,W,pe,Se,ue,Ke,Ue,Xe,nt,Te,Ae,He,Fe,Le,ut,X,Pe,we,Be,Ee;function be(){Mt=new sT(V),Mt.init(),we=new KA(V,Mt),Pt=new KE(V,Mt,t,we),Ye=new YA(V,Mt),Pt.reversedDepthBuffer&&b&&Ye.buffers.depth.setReversed(!0),L=new lT(V),E=new LA,W=new ZA(V,Mt,Ye,E,Pt,we,L),pe=new JE(w),Se=new aT(w),ue=new dM(V),Be=new YE(V,ue),Ke=new rT(V,ue,L,Be),Ue=new uT(V,Ke,ue,L),ut=new cT(V,Pt,W),He=new QE(E),Xe=new UA(w,pe,Se,Mt,Pt,Be,He),nt=new n2(w,E),Te=new PA,Ae=new HA(Mt),Le=new qE(w,pe,Se,Ye,Ue,A,m),Fe=new WA(w,Ue,Pt),Ee=new i2(V,L,Pt,Ye),X=new ZE(V,Mt,L),Pe=new oT(V,Mt,L),L.programs=Xe.programs,w.capabilities=Pt,w.extensions=Mt,w.properties=E,w.renderLists=Te,w.shadowMap=Fe,w.state=Ye,w.info=L}be(),T!==ai&&(Z=new dT(T,i.width,i.height,l,c));const Ce=new e2(w,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(O,ae,!1))},this.getSize=function(C){return C.set(O,ae)},this.setSize=function(C,q,le=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ae=q,i.width=Math.floor(C*ge),i.height=Math.floor(q*ge),le===!0&&(i.style.width=C+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(O*ge,ae*ge).floor()},this.setDrawingBufferSize=function(C,q,le){O=C,ae=q,ge=le,i.width=Math.floor(C*le),i.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(T===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,q,le,re){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,q,le,re),Ye.viewport(F.copy(ie).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,q,le,re){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,q,le,re),Ye.scissor(k.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Ye.setScissorTest(De=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){ke=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,le=!0){let re=0;if(C){let J=!1;if($!==null){const Oe=$.texture.format;J=S.has(Oe)}if(J){const Oe=$.texture.type,Ge=_.has(Oe),ze=Le.getClearColor(),Ve=Le.getClearAlpha(),We=ze.r,$e=ze.g,qe=ze.b;Ge?(U[0]=We,U[1]=$e,U[2]=qe,U[3]=Ve,V.clearBufferuiv(V.COLOR,0,U)):(D[0]=We,D[1]=$e,D[2]=qe,D[3]=Ve,V.clearBufferiv(V.COLOR,0,D))}else re|=V.COLOR_BUFFER_BIT}q&&(re|=V.DEPTH_BUFFER_BIT),le&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",at,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Le.dispose(),Te.dispose(),Ae.dispose(),E.dispose(),pe.dispose(),Se.dispose(),Ue.dispose(),Be.dispose(),Ee.dispose(),Xe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ls),Ce.removeEventListener("sessionend",Hr),Ni.stop()};function at(C){C.preventDefault(),qg("WebGLRenderer: Context Lost."),N=!0}function It(){qg("WebGLRenderer: Context Restored."),N=!1;const C=L.autoReset,q=Fe.enabled,le=Fe.autoUpdate,re=Fe.needsUpdate,J=Fe.type;be(),L.autoReset=C,Fe.enabled=q,Fe.autoUpdate=le,Fe.needsUpdate=re,Fe.type=J}function Tt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const q=C.target;q.removeEventListener("dispose",Nn),vi(q)}function vi(C){Jo(C),E.remove(C)}function Jo(C){const q=E.get(C).programs;q!==void 0&&(q.forEach(function(le){Xe.releaseProgram(le)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,re,J,Oe){q===null&&(q=Et);const Ge=J.isMesh&&J.matrixWorld.determinant()<0,ze=ns(C,q,le,re,J);Ye.setMaterial(re,Ge);let Ve=le.index,We=1;if(re.wireframe===!0){if(Ve=Ke.getWireframeAttribute(le),Ve===void 0)return;We=2}const $e=le.drawRange,qe=le.attributes.position;let et=$e.start*We,Dt=($e.start+$e.count)*We;Oe!==null&&(et=Math.max(et,Oe.start*We),Dt=Math.min(Dt,(Oe.start+Oe.count)*We)),Ve!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ve.count)):qe!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,qe.count));const Qt=Dt-et;if(Qt<0||Qt===1/0)return;Be.setup(J,re,ze,le,Ve);let Wt,zt=X;if(Ve!==null&&(Wt=ue.get(Ve),zt=Pe,zt.setIndex(Wt)),J.isMesh)re.wireframe===!0?(Ye.setLineWidth(re.wireframeLinewidth*en()),zt.setMode(V.LINES)):zt.setMode(V.TRIANGLES);else if(J.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*en()),J.isLineSegments?zt.setMode(V.LINES):J.isLineLoop?zt.setMode(V.LINE_LOOP):zt.setMode(V.LINE_STRIP)}else J.isPoints?zt.setMode(V.POINTS):J.isSprite&&zt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Ut=J._multiDrawCounts,rt=J._multiDrawCount,yn=Ve?ue.get(Ve).bytesPerElement:1,Xi=E.get(re).currentProgram.getUniforms();for(let bn=0;bn<rt;bn++)Xi.setValue(V,"_gl_DrawID",bn),zt.render(Qe[bn]/yn,Ut[bn])}else if(J.isInstancedMesh)zt.renderInstances(et,Qt,J.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ut=Math.min(le.instanceCount,Qe);zt.renderInstances(et,Qt,Ut)}else zt.render(et,Qt)};function Br(C,q,le){C.transparent===!0&&C.side===pa&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Ps(C,q,le),C.side=ts,C.needsUpdate=!0,Ps(C,q,le),C.side=pa):Ps(C,q,le)}this.compile=function(C,q,le=null){le===null&&(le=C),I=Ae.get(le),I.init(q),z.push(I),le.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),C!==le&&C.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights();const re=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Oe=J.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const ze=Oe[Ge];Br(ze,le,J),re.add(ze)}else Br(Oe,le,J),re.add(Oe)}),I=z.pop(),re},this.compileAsync=function(C,q,le=null){const re=this.compile(C,q,le);return new Promise(J=>{function Oe(){if(re.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&re.delete(Ge)}),re.size===0){J(C);return}setTimeout(Oe,10)}Mt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Us=null;function kr(C){Us&&Us(C)}function Ls(){Ni.stop()}function Hr(){Ni.start()}const Ni=new Nv;Ni.setAnimationLoop(kr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){Us=C,Ce.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},Ce.addEventListener("sessionstart",Ls),Ce.addEventListener("sessionend",Hr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,re=Z!==null&&($===null||le)&&Z.begin(w,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,$),I=Ae.get(C,z.length),I.init(q),z.push(I),Ot.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),me.setFromProjectionMatrix(Ot,Fi,q.reversedDepth),it=this.localClippingEnabled,Me=He.init(this.clippingPlanes,it),P=Te.get(C,B.length),P.init(),B.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=w.xr.getDepthSensingMesh();Ge!==null&&si(Ge,q,-1/0,w.sortObjects)}si(C,q,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(Re,ke),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Le.addToRenderList(P,C),this.info.render.frame++,Me===!0&&He.beginShadows();const J=I.state.shadowsArray;if(Fe.render(J,C,q),Me===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&Z.hasRenderPass())===!1){const Ge=P.opaque,ze=P.transmissive;if(I.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(ze.length>0)for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];_n(Ge,ze,C,qe)}lt&&Le.render(C);for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];on(P,C,qe,qe.viewport)}}else ze.length>0&&_n(Ge,ze,C,q),lt&&Le.render(C),on(P,C,q)}$!==null&&K===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),re&&Z.end(w),C.isScene===!0&&C.onAfterRender(w,C,q),Be.resetDefaultState(),he=-1,se=null,z.pop(),z.length>0?(I=z[z.length-1],Me===!0&&He.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?P=B[B.length-1]:P=null};function si(C,q,le,re){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||me.intersectsSprite(C)){re&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ot);const Ge=Ue.update(C),ze=C.material;ze.visible&&P.push(C,Ge,ze,le,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||me.intersectsObject(C))){const Ge=Ue.update(C),ze=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),mt.copy(Ge.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(Ot)),Array.isArray(ze)){const Ve=Ge.groups;for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We],et=ze[qe.materialIndex];et&&et.visible&&P.push(C,Ge,et,le,mt.z,qe)}}else ze.visible&&P.push(C,Ge,ze,le,mt.z,null)}}const Oe=C.children;for(let Ge=0,ze=Oe.length;Ge<ze;Ge++)si(Oe[Ge],q,le,re)}function on(C,q,le,re){const{opaque:J,transmissive:Oe,transparent:Ge}=C;I.setupLightsView(le),Me===!0&&He.setGlobalState(w.clippingPlanes,le),re&&Ye.viewport(F.copy(re)),J.length>0&&_i(J,q,le),Oe.length>0&&_i(Oe,q,le),Ge.length>0&&_i(Ge,q,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function _n(C,q,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new ki(1,1,{generateMipmaps:!0,type:et?_a:ai,minFilter:Cs,samples:Pt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Oe=I.state.transmissionRenderTarget[re.id],Ge=re.viewport||F;Oe.setSize(Ge.z*w.transmissionResolutionScale,Ge.w*w.transmissionResolutionScale);const ze=w.getRenderTarget(),Ve=w.getActiveCubeFace(),We=w.getActiveMipmapLevel();w.setRenderTarget(Oe),w.getClearColor(_e),ye=w.getClearAlpha(),ye<1&&w.setClearColor(16777215,.5),w.clear(),lt&&Le.render(le);const $e=w.toneMapping;w.toneMapping=Bi;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Me===!0&&He.setGlobalState(w.clippingPlanes,re),_i(C,le,re),W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Qt=q.length;Dt<Qt;Dt++){const Wt=q[Dt],{object:zt,geometry:Qe,material:Ut,group:rt}=Wt;if(Ut.side===pa&&zt.layers.test(re.layers)){const yn=Ut.side;Ut.side=Yn,Ut.needsUpdate=!0,Os(zt,le,re,Qe,Ut,rt),Ut.side=yn,Ut.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe))}w.setRenderTarget(ze,Ve,We),w.setClearColor(_e,ye),qe!==void 0&&(re.viewport=qe),w.toneMapping=$e}function _i(C,q,le){const re=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Oe=C.length;J<Oe;J++){const Ge=C[J],{object:ze,geometry:Ve,group:We}=Ge;let $e=Ge.material;$e.allowOverride===!0&&re!==null&&($e=re),ze.layers.test(le.layers)&&Os(ze,q,le,Ve,$e,We)}}function Os(C,q,le,re,J,Oe){C.onBeforeRender(w,q,le,re,J,Oe),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(w,q,le,re,C,Oe),J.transparent===!0&&J.side===pa&&J.forceSinglePass===!1?(J.side=Yn,J.needsUpdate=!0,w.renderBufferDirect(le,q,re,J,C,Oe),J.side=ts,J.needsUpdate=!0,w.renderBufferDirect(le,q,re,J,C,Oe),J.side=pa):w.renderBufferDirect(le,q,re,J,C,Oe),C.onAfterRender(w,q,le,re,J,Oe)}function Ps(C,q,le){q.isScene!==!0&&(q=Et);const re=E.get(C),J=I.state.lights,Oe=I.state.shadowsArray,Ge=J.state.version,ze=Xe.getParameters(C,J.state,Oe,q,le),Ve=Xe.getProgramCacheKey(ze);let We=re.programs;re.environment=C.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(C.isMeshStandardMaterial?Se:pe).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Nn),We=new Map,re.programs=We);let $e=We.get(Ve);if($e!==void 0){if(re.currentProgram===$e&&re.lightsStateVersion===Ge)return Gr(C,ze),$e}else ze.uniforms=Xe.getUniforms(C),C.onBeforeCompile(ze,w),$e=Xe.acquireProgram(ze,Ve),We.set(Ve,$e),re.uniforms=ze.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=He.uniform),Gr(C,ze),re.needsLights=ba(C),re.lightsStateVersion=Ge,re.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMap.value=J.state.directionalShadowMap,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotShadowMap.value=J.state.spotShadowMap,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMap.value=J.state.pointShadowMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=$e,re.uniformsList=null,$e}function $o(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Gr(C,q){const le=E.get(C);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function ns(C,q,le,re,J){q.isScene!==!0&&(q=Et),W.resetTextureUnits();const Oe=q.fog,Ge=re.isMeshStandardMaterial?q.environment:null,ze=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Or,Ve=(re.isMeshStandardMaterial?Se:pe).get(re.envMap||Ge),We=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Qt=Bi;re.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qt=w.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,zt=Wt!==void 0?Wt.length:0,Qe=E.get(re),Ut=I.state.lights;if(Me===!0&&(it===!0||C!==se)){const Mn=C===se&&re.id===he;He.setState(re,C,Mn)}let rt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==ze||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ve||re.fog===!0&&Qe.fog!==Oe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Qt||Qe.morphTargetsCount!==zt)&&(rt=!0):(rt=!0,Qe.__version=re.version);let yn=Qe.currentProgram;rt===!0&&(yn=Ps(re,q,J));let Xi=!1,bn=!1,ri=!1;const Ft=yn.getUniforms(),Sn=Qe.uniforms;if(Ye.useProgram(yn.program)&&(Xi=!0,bn=!0,ri=!0),re.id!==he&&(he=re.id,bn=!0),Xi||se!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",C.projectionMatrix),Ft.setValue(V,"viewMatrix",C.matrixWorldInverse);const En=Ft.map.cameraPosition;En!==void 0&&En.setValue(V,ht.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),se!==C&&(se=C,bn=!0,ri=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ut.state.directionalShadowMap,W),Ut.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ut.state.spotShadowMap,W),Ut.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ut.state.pointShadowMap,W)),J.isSkinnedMesh){Ft.setOptional(V,J,"bindMatrix"),Ft.setOptional(V,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ft.setValue(V,"boneTexture",Mn.boneTexture,W))}J.isBatchedMesh&&(Ft.setOptional(V,J,"batchingTexture"),Ft.setValue(V,"batchingTexture",J._matricesTexture,W),Ft.setOptional(V,J,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",J._indirectTexture,W),Ft.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",J._colorsTexture,W));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ut.update(J,le,yn),(bn||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Ft.setValue(V,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Sn.envMap.value=Ve,Sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=s2()),bn&&(Ft.setValue(V,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&Vr(Sn,ri),Oe&&re.fog===!0&&nt.refreshFogUniforms(Sn,Oe),nt.refreshMaterialUniforms(Sn,re,ge,ae,I.state.transmissionRenderTarget[C.id]),Ic.upload(V,$o(Qe),Sn,W)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ic.upload(V,$o(Qe),Sn,W),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(V,"center",J.center),Ft.setValue(V,"modelViewMatrix",J.modelViewMatrix),Ft.setValue(V,"normalMatrix",J.normalMatrix),Ft.setValue(V,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Mn=re.uniformsGroups;for(let En=0,zs=Mn.length;En<zs;En++){const yi=Mn[En];Ee.update(yi,yn),Ee.bind(yi,yn)}}return yn}function Vr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ba(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,q,le){const re=E.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=q,E.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const le=E.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const Sa=V.createFramebuffer();this.setRenderTarget=function(C,q=0,le=0){$=C,G=q,K=le;let re=null,J=!1,Oe=!1;if(C){const ze=E.get(C);if(ze.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,ze.__webglFramebuffer),F.copy(C.viewport),k.copy(C.scissor),Q=C.scissorTest,Ye.viewport(F),Ye.scissor(k),Ye.setScissorTest(Q),he=-1;return}else if(ze.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(ze.__hasExternalTextures)W.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Oe=!0);const We=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[q])?re=We[q][le]:re=We[q],J=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?re=E.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?re=We[le]:re=We,F.copy(C.viewport),k.copy(C.scissor),Q=C.scissorTest}else F.copy(ie).multiplyScalar(ge).floor(),k.copy(fe).multiplyScalar(ge).floor(),Q=De;if(le!==0&&(re=Sa),Ye.bindFramebuffer(V.FRAMEBUFFER,re)&&Ye.drawBuffers(C,re),Ye.viewport(F),Ye.scissor(k),Ye.setScissorTest(Q),J){const ze=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,le)}else if(Oe){const ze=q;for(let Ve=0;Ve<C.textures.length;Ve++){const We=E.get(C.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,We.__webglTexture,le,ze)}}else if(C!==null&&le!==0){const ze=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ze.__webglTexture,le)}he=-1},this.readRenderTargetPixels=function(C,q,le,re,J,Oe,Ge,ze=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const We=C.textures[ze],$e=We.format,qe=We.type;if(!Pt.textureFormatReadable($e)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-re&&le>=0&&le<=C.height-J&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(q,le,re,J,we.convert($e),we.convert(qe),Oe))}finally{const We=$!==null?E.get($).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,q,le,re,J,Oe,Ge,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(q>=0&&q<=C.width-re&&le>=0&&le<=C.height-J){Ye.bindFramebuffer(V.FRAMEBUFFER,Ve);const We=C.textures[ze],$e=We.format,qe=We.type;if(!Pt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(q,le,re,J,we.convert($e),we.convert(qe),0);const Dt=$!==null?E.get($).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Dt);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await MS(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(et),V.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,le=0){const re=Math.pow(2,-le),J=Math.floor(C.image.width*re),Oe=Math.floor(C.image.height*re),Ge=q!==null?q.x:0,ze=q!==null?q.y:0;W.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ge,ze,J,Oe),Ye.unbindTexture()};const is=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(C,q,le=null,re=null,J=0,Oe=null){Oe===null&&(J!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=J,J=0):Oe=0);let Ge,ze,Ve,We,$e,qe,et,Dt,Qt;const Wt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(le!==null)Ge=le.max.x-le.min.x,ze=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,$e=le.min.y,qe=le.isBox3?le.min.z:0;else{const hn=Math.pow(2,-J);Ge=Math.floor(Wt.width*hn),ze=Math.floor(Wt.height*hn),C.isDataArrayTexture?Ve=Wt.depth:C.isData3DTexture?Ve=Math.floor(Wt.depth*hn):Ve=1,We=0,$e=0,qe=0}re!==null?(et=re.x,Dt=re.y,Qt=re.z):(et=0,Dt=0,Qt=0);const zt=we.convert(q.format),Qe=we.convert(q.type);let Ut;q.isData3DTexture?(W.setTexture3D(q,0),Ut=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ut=V.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ut=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const rt=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xi=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,We),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const Ft=C.isDataArrayTexture||C.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const hn=E.get(C),Mn=E.get(q),En=E.get(hn.__renderTarget),zs=E.get(Mn.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let yi=0;yi<Ve;yi++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,qe+yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Oe,Qt+yi)),V.blitFramebuffer(We,$e,Ge,ze,et,Dt,Ge,ze,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const hn=E.get(C),Mn=E.get(q);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,is),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Ve;En++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,J,qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,J),Sn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,Oe,Qt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,Oe),J!==0?V.blitFramebuffer(We,$e,Ge,ze,et,Dt,Ge,ze,V.COLOR_BUFFER_BIT,V.NEAREST):Sn?V.copyTexSubImage3D(Ut,Oe,et,Dt,Qt+En,We,$e,Ge,ze):V.copyTexSubImage2D(Ut,Oe,et,Dt,We,$e,Ge,ze);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Sn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ut,Oe,et,Dt,Qt,Ge,ze,Ve,zt,Qe,Wt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Oe,et,Dt,Qt,Ge,ze,Ve,zt,Wt.data):V.texSubImage3D(Ut,Oe,et,Dt,Qt,Ge,ze,Ve,zt,Qe,Wt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,et,Dt,Ge,ze,zt,Qe,Wt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,et,Dt,Wt.width,Wt.height,zt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,et,Dt,Ge,ze,zt,Qe,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xi),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),Oe===0&&q.generateMipmaps&&V.generateMipmap(Ut),Ye.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){G=0,K=0,$=null,Ye.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(t),i.unpackColorSpace=At._getUnpackColorSpace()}}const r2=()=>{const o=Ne.useRef(null);return Ne.useEffect(()=>{if(!o.current)return;const t=window.innerWidth,i=window.innerHeight,s=new Tv,l=new qn(75,t/i,.1,1e3);l.position.z=30;const c=new Pv({alpha:!0,antialias:!0});c.setSize(t,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.innerHTML="",o.current.appendChild(c.domElement);const d=new qc(10,3,100,16),h=new Xh({color:0,wireframe:!0,transparent:!0,opacity:.08}),m=new Ci(d,h);s.add(m);let p;const v=()=>{p=requestAnimationFrame(v),m.rotation.x+=.001,m.rotation.y+=.002,c.render(s,l)};v();const x=()=>{if(!o.current)return;const b=window.innerWidth,M=window.innerHeight;l.aspect=b/M,l.updateProjectionMatrix(),c.setSize(b,M)};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(p),o.current&&(o.current.innerHTML=""),d.dispose(),h.dispose(),c.dispose()}},[]),g.jsx("div",{ref:o,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none"})},o2=()=>{const o=Ne.useRef(null);return Ne.useEffect(()=>{if(!o.current)return;o.current.innerHTML="";const t=o.current.clientWidth||1,i=o.current.clientHeight||1,s=new Tv;s.background=new bt(0);const l=new qn(45,t/i,.1,100);l.position.z=6;const c=new Pv({antialias:!0,alpha:!0});c.setSize(t,i),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(c.domElement);const d=new qc(.85,.28,150,20),h=new aM({color:16777215,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:3355443}),m=new Ci(d,h);s.add(m);const p=new tM(d),v=new Av({color:16777215,transparent:!0,opacity:.1}),x=new $S(p,v);m.add(x);const b=new cM(16777215,.8);s.add(b);const M=new xx(16777215,1.2);M.position.set(10,10,10),s.add(M);const A=new xx(4474111,.6);A.position.set(-10,-5,5),s.add(A);let T=0,S=0;const _=I=>{T=I.clientX/window.innerWidth*2-1,S=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",_);let U;const D=()=>{m.rotation.x+=.008+S*.03,m.rotation.y+=.008+T*.03;const I=Date.now()*.002,B=1+Math.sin(I)*.03;m.scale.set(B,B,B),c.render(s,l),U=requestAnimationFrame(D)};D();const P=new ResizeObserver(I=>{for(let B of I){const{width:z,height:Z}=B.contentRect;z>0&&Z>0&&(l.aspect=z/Z,l.updateProjectionMatrix(),c.setSize(z,Z))}});return P.observe(o.current),()=>{window.removeEventListener("mousemove",_),P.disconnect(),cancelAnimationFrame(U),d.dispose(),h.dispose(),c.dispose(),o.current&&(o.current.innerHTML="")}},[]),g.jsx("div",{ref:o,className:"w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing pointer-events-auto"})},l2=({project:o,index:t,navigateTo:i,setCursorHovering:s,setIsEyeMode:l,revealClass:c,addToRefs:d})=>{const h=Ne.useRef(null),m=()=>{l(!0),h.current&&h.current.play().catch(v=>{console.log("Autoplay prevented",v)})},p=()=>{l(!1),h.current&&(h.current.pause(),h.current.currentTime=0)};return g.jsx("div",{className:`w-full py-24 transition-colors duration-500 ${t%2===0?"bg-white":"bg-[#FAFAFA]"}`,children:g.jsx("div",{ref:d,className:`group cursor-pointer ${c} px-6 md:px-12 max-w-[1600px] mx-auto`,children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center",children:[g.jsxs("div",{className:`relative aspect-[16/9] bg-neutral-200/50 rounded-lg overflow-hidden shadow-sm ${o.alignRight?"order-1 md:order-2":"order-2 md:order-1"}`,onMouseEnter:m,onMouseLeave:p,onClick:()=>i("project",o.id),children:[o.video&&g.jsx("video",{ref:h,src:o.video,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10"}),g.jsx("div",{className:"absolute inset-0 bg-neutral-300/30 flex items-center justify-center z-20 transition-transform duration-[1200ms] ease-out group-hover:scale-105",children:o.image?g.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover",onError:Vb}):g.jsx("div",{className:"text-black/10 text-8xl font-bold tracking-tighter select-none",children:o.id})})]}),g.jsxs("div",{className:`flex flex-col justify-center h-full ${o.alignRight?"order-2 md:order-1 md:text-right":"order-1 md:order-2 text-left"}`,children:[g.jsx("h4",{className:"text-sm text-black/40 uppercase tracking-widest mb-4 font-medium",children:o.category}),g.jsx("h3",{onClick:()=>i("project",o.id),className:"text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-black/70 transition-colors cursor-pointer",children:o.title}),g.jsx("p",{className:`text-black/60 text-lg leading-relaxed max-w-md mb-8 ${o.alignRight?"ml-auto":""}`,children:o.desc}),g.jsx("div",{className:`flex mt-4 ${o.alignRight?"justify-end":"justify-start"}`,children:g.jsxs("button",{className:"relative overflow-hidden group border border-black/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-3",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>i("project",o.id),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2",children:["View Project ",g.jsx(va,{size:16})]})]})})]})]})})})},c2=({setCursorHovering:o,setIsEyeMode:t,setIsVideoHovering:i,navigateTo:s})=>{const[l,c]=Ne.useState(5),d=Ne.useRef([]);Ne.useEffect(()=>{const p=new IntersectionObserver(v=>{v.forEach(x=>{x.isIntersecting&&(x.target.classList.add("opacity-100","translate-y-0"),x.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>d.current.forEach(v=>v&&p.observe(v)),100),()=>p.disconnect()},[l]);const h=p=>{p&&!d.current.includes(p)&&d.current.push(p)},m="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"w-full",children:[g.jsxs("header",{className:"snap-start min-h-screen relative pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto bg-white text-black",children:[g.jsxs("div",{className:"max-w-5xl z-10 mb-8",children:[g.jsx("h5",{ref:h,className:`text-sm md:text-base text-black/50 mb-6 uppercase tracking-[0.2em] ${m}`,children:"A Next-Gen Design Agency"}),g.jsxs("h1",{ref:h,className:`text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8 ${m} delay-[100ms]`,children:["Global Digital ",g.jsx("br",{}),g.jsx("span",{className:"text-black/40",children:"Architecture Agency."})]}),g.jsx("p",{ref:h,className:`text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed ${m} delay-[200ms]`,children:"Beyond standard design. We empower forward-thinking brands with intelligent UX and radical visual systems ensuring your product stays ahead of the curve."})]}),g.jsxs("div",{ref:h,className:`w-full h-[40vh] md:h-[50vh] bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl ${m} delay-[300ms]`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx("video",{src:"/projects/showcase.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover opacity-60"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10"})]})]}),g.jsx("section",{className:"snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full",children:[g.jsx("h2",{ref:h,className:`text-3xl md:text-5xl font-light tracking-tight leading-snug ${m}`,children:"We build websites, we engineer high-scale digital assets specific for aggressive scale-ups through design AI integration."}),g.jsxs("div",{ref:h,className:`flex flex-col justify-end ${m} delay-[200ms]`,children:[g.jsx("p",{className:"text-white/60 mb-8 leading-relaxed text-lg",children:"Guaranteed for long-treatment, ensuring every pixel performs at peak performance without compromise."}),g.jsxs("button",{onClick:()=>s("company"),className:"relative overflow-hidden group border border-white/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-4 w-fit hover:border-white",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2",children:["More about us ",g.jsx(va,{size:18})]})]})]})]})}),g.jsxs("section",{id:"projects",className:"snap-start min-h-screen flex flex-col justify-center bg-white text-black py-32",children:[g.jsx("div",{className:"max-w-[1600px] mx-auto w-full px-6 md:px-12",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8",children:[g.jsx("h2",{ref:h,className:`text-5xl font-medium tracking-tighter ${m}`,children:"Featured Projects"}),g.jsx("span",{ref:h,className:`hidden md:block text-black/40 ${m}`,children:"Selected Works 2024-2025"})]})}),g.jsx("div",{className:"flex flex-col w-full",children:Fc.slice(0,l).map((p,v)=>g.jsx(l2,{project:p,index:v,navigateTo:s,setCursorHovering:o,setIsEyeMode:t,revealClass:m,addToRefs:h},v))}),l<Fc.length&&g.jsx("div",{ref:h,className:`mt-40 text-center ${m} px-6 md:px-12`,children:g.jsxs("button",{onClick:()=>c(10),className:"relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-12 py-6 text-lg",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2",children:["View all projects ",g.jsx(qx,{size:20})]})]})})]}),g.jsx("section",{id:"why-choose-us",className:"snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto w-full",children:[g.jsx("h2",{ref:h,className:`text-sm uppercase tracking-widest text-white/40 mb-16 ${m}`,children:"Why Choose KreavityWorks"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16",children:[g.jsxs("div",{className:"flex flex-col gap-12",children:[g.jsx("h3",{ref:h,className:`text-4xl md:text-5xl font-medium tracking-tight leading-tight ${m}`,children:"From motion design to AI-powered products—we design and build interfaces for the future."}),g.jsx("div",{ref:h,className:`w-full aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group ${m} delay-100`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:g.jsx(o2,{})})]}),g.jsx("div",{className:"space-y-0",children:[{t:"AI-Powered Velocity",d:"We slash production time via AI integration in UX/UI workflows, guaranteeing 24-48h turnaround for world-class design without compromising quality.",i:"01"},{t:"The 25 Global Principles",d:"Zero error policy. Every pixel and code line is audited via our 25 Global Implementation Principles to ensure perfect product integrity.",i:"02"},{t:"Sentient Interaction",d:"Building digital experiences 'aware' of user presence. We employ Sentient UI logic and Magnetic Physics for more human-centric interactions.",i:"03"},{t:"Predictive Scalability",d:"Web architecture built to Fortune 500 standards. Modular structure ensures your assets are ready for global scale and future tech integration.",i:"04"}].map((p,v)=>g.jsx("div",{ref:h,className:`group border-t border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 cursor-pointer ${m}`,children:g.jsxs("div",{className:"flex items-start gap-6",children:[g.jsx("span",{className:"text-xs font-mono text-white/30 pt-1",children:p.i}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-xl font-medium mb-2 group-hover:text-white transition-colors",children:p.t}),g.jsx("p",{className:"text-white/60 text-sm",children:p.d})]})]})},v))})]})]})})]})},u2=({setCursorHovering:o})=>{const t=Ne.useRef([]),i=Ne.useRef(null),[s,l]=Ne.useState(null),c=[{title:"UI/UX Engineering",desc:"We don't just draw interfaces; we construct Experience Architecture. At KreavityWorks, UI/UX Engineering is the fusion of cognitive psychology and radical aesthetics. We deconstruct user behavior to build intuitive workflows, ensuring every pixel serves a functional purpose to instantly boost conversion rates and user satisfaction."},{title:"AI Tools Development",desc:"The future is autonomous. We help your business leapfrog the competition with artificial intelligence integration. From workflow automation to market behavior prediction systems, we build custom AI solutions that are not just smart, but aligned with your company's strategic goals. Efficiency is no longer an option; it's the new operational standard we offer."},{title:"Motion Graphics",desc:"Static digital worlds are over. We bring your brand's message to life through immersive and kinetic visual narratives. Our motion graphics are designed to capture attention in seconds, transforming complex ideas into visual stories that are digestible, elegant, and capable of reinforcing your brand authority across digital platforms."},{title:"Scalable Backend",desc:"Robust infrastructure is the foundation of limitless growth. We architect backend systems that are solid, secure, and ready to handle global traffic surges. Using Fortune 500 coding standards, we ensure your application operates at peak performance, with high modularity and seamless integration capabilities for your future business expansion."},{title:"Quality Assurance",desc:"Our Zero Error Policy is our promise. Through rigorous auditing based on our 25 Global Implementation Principles, our QA team ensures your digital product is free from bugs and anomalies before it ever touches a user's hand. We stress-test stability, security, and functionality because your product's integrity is our reputation."},{title:"Art Direction",desc:"Grand vision requires precise visual direction. Art Direction at KreavityWorks is about maintaining brand identity consistency amidst market noise. We lead the creative process to ensure every visual element—from typography to color palettes—communicates your brand's elite value subliminally yet powerfully."}],d=m=>{m&&!t.current.includes(m)&&t.current.push(m)};Ne.useEffect(()=>{const m=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&(v.target.classList.add("opacity-100","translate-y-0"),v.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1,rootMargin:"-50px"});return setTimeout(()=>{t.current.forEach(p=>p&&m.observe(p))},100),()=>m.disconnect()},[]),Ne.useEffect(()=>{const m=()=>{if(i.current){const p=window.scrollY;i.current.style.transform=`translateY(${p*.2}px)`,i.current.style.opacity=`${1-p/700}`}};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const h="opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return g.jsxs("div",{className:"min-h-screen bg-white text-black pt-32 overflow-x-hidden",children:[s&&g.jsxs("div",{className:"fixed inset-0 z-[12000] flex items-center justify-center p-6 animate-fade-in",children:[g.jsx("div",{className:"absolute inset-0 bg-white/80 backdrop-blur-xl",onClick:()=>l(null)}),g.jsxs("div",{className:"relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-black/5 p-8 md:p-12 animate-modal-pop-elastic",children:[g.jsx("button",{onClick:()=>l(null),className:"absolute top-6 right-6 p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors",children:g.jsx(Nr,{size:20})}),g.jsx("h2",{className:"text-3xl md:text-4xl font-medium tracking-tighter mb-6",children:s.title}),g.jsx("div",{className:"w-12 h-1 bg-black mb-8"}),g.jsx("p",{className:"text-lg md:text-xl text-black/70 leading-relaxed",children:s.desc})]})]}),g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto min-h-[80vh] flex flex-col justify-center relative",children:[g.jsx(r2,{}),g.jsx("div",{ref:i,className:"flex flex-col gap-2 md:gap-4 select-none will-change-transform relative z-10",children:g.jsxs("h1",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-7xl md:text-9xl font-bold tracking-tighter uppercase mix-blend-multiply leading-[0.9] cursor-pointer",children:[g.jsx("span",{ref:d,className:`block ${h}`,children:"We"}),g.jsx("span",{ref:d,className:`block ${h} delay-100`,children:"Architect"}),g.jsx("span",{ref:d,className:`block ${h} delay-200 text-black/20`,children:"Scalable"}),g.jsx("span",{ref:d,className:`block ${h} delay-300`,children:"Digital Ecosystems"})]})})]}),g.jsxs("div",{className:"relative z-10 bg-white",children:[g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:g.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-medium max-w-5xl ${h}`,children:"As a high-performance team of specialists, we engineer digital architecture, high-conversion interfaces, and autonomous AI-driven systems."})}),g.jsx("div",{className:"border-t border-black/10 bg-white",children:g.jsx("div",{className:"max-w-[1600px] mx-auto",children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10",children:[g.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:g.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[g.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Radical",g.jsx("br",{}),"Design"]}),g.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"We don't provide generic solutions. Our design philosophy is rooted in cognitive psychology to streamline productivity and amplify revenue."})]})}),g.jsx("div",{className:"px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden",children:g.jsxs("div",{className:"group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left",children:[g.jsxs("h2",{ref:d,className:`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${h}`,children:["Autonomous",g.jsx("br",{}),"Engineering"]}),g.jsx("p",{ref:d,className:`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${h} delay-100`,children:"By merging radical aesthetics with high-level AI integration, we build digital products exactly as envisioned—with zero technical shortcuts or simplifications."})]})})]})})}),g.jsxs("div",{className:"py-24 overflow-hidden border-t border-b border-black/10 bg-black text-white relative z-10",children:[g.jsx("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12",children:g.jsx("div",{className:"mb-8 text-xs font-mono uppercase tracking-widest text-white/40",children:"Areas of Impact"})}),g.jsx("div",{className:"relative flex whitespace-nowrap overflow-hidden",children:g.jsxs("div",{className:"animate-marquee flex gap-16 md:gap-32 text-6xl md:text-9xl font-medium tracking-tighter uppercase px-8",children:[g.jsx("span",{children:"E-Commerce"}),g.jsx("span",{className:"text-white/30",children:"Fintech"}),g.jsx("span",{children:"AI SaaS"}),g.jsx("span",{className:"text-white/30",children:"High-Humanity Content"}),g.jsx("span",{children:"Social Ecosystems"}),g.jsx("span",{className:"text-white/30",children:"Logistics"}),g.jsx("span",{children:"E-Commerce"}),g.jsx("span",{className:"text-white/30",children:"Fintech"}),g.jsx("span",{children:"AI SaaS"}),g.jsx("span",{className:"text-white/30",children:"High-Humanity Content"}),g.jsx("span",{children:"Social Ecosystems"}),g.jsx("span",{className:"text-white/30",children:"Logistics"})]})})]}),g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white",children:g.jsxs("div",{className:"lg:col-span-8",children:[g.jsxs("h2",{ref:d,className:`text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 ${h}`,children:["Brand",g.jsx("br",{}),g.jsx("span",{className:"text-black/30",children:"Authority"})]}),g.jsx("p",{ref:d,className:`text-xl md:text-3xl leading-relaxed font-light text-black/80 ${h} delay-100`,children:"The only metric that matters in a brand is the authority felt during interaction. We empower emerging and established brands to achieve market dominance through precise visual identity."})]})}),g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-12",children:[g.jsxs("h3",{ref:d,className:`text-2xl font-medium uppercase tracking-tight ${h}`,children:["Art Direction & ",g.jsx("br",{})," AI Strategy"]}),g.jsx("p",{ref:d,className:`text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed ${h} delay-100`,children:"Building digital products from zero is a precision team effort. Every specialist brings cutting-edge AI innovation, working as a single, coordinated mechanism to hit aggressive targets."})]})}),g.jsx("div",{className:"border-t border-black/10 bg-white",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 py-24",children:[g.jsx("h4",{className:"text-sm font-mono text-black/40 uppercase tracking-widest mb-12",children:"Capabilities"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8",children:c.map((m,p)=>g.jsxs("div",{ref:d,className:`py-6 border-b border-black/10 flex items-center justify-between group cursor-pointer ${h}`,style:{transitionDelay:`${p*50}ms`},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>l(m),children:[g.jsx("span",{className:"text-2xl md:text-3xl tracking-tight group-hover:pl-4 transition-all duration-300",children:m.title}),g.jsx(qx,{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]},p))})]})}),g.jsx("div",{className:"bg-[#050505] text-white py-32 border-b border-white/5",children:g.jsxs("div",{className:"max-w-[1600px] mx-auto px-6 md:px-12 space-y-32",children:[g.jsxs("div",{ref:d,className:`${h}`,children:[g.jsx("h2",{className:"text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-white/90",children:"We build stable infrastructure using proprietary solutions."}),g.jsx("p",{className:"text-xl text-white/50 max-w-4xl leading-relaxed",children:"Developing global-standard digital products since 2024. We bring vision to life and create digital assets that deliver measurable impact."})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16",children:[g.jsx("div",{children:g.jsx("h3",{className:"text-sm font-mono text-white/40 uppercase tracking-widest mb-4",children:"Our Philosophy"})}),g.jsx("div",{children:g.jsx("p",{ref:d,className:`text-xl md:text-2xl leading-relaxed font-light text-white/80 ${h}`,children:"At Kreavity Works, developers work alongside AI strategists and designers. We do not compromise. We are driven by user-centered design that powers productivity and increases revenue. Our expertise is remarkable, yet we always strive to outperform our previous achievements."})})]})]})})]}),g.jsx("style",{children:`
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
            `})]})},f2=({setCursorHovering:o,navigateTo:t})=>{const i=Ne.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};Ne.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(d=>d&&c.observe(d))},100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[g.jsxs("button",{onClick:()=>t("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-16 group ${l}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx(Wx,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Home"]}),g.jsxs("article",{className:"prose prose-lg max-w-4xl",children:[g.jsxs("div",{ref:s,className:`${l} mb-12`,children:[g.jsx("h1",{className:"text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-4",children:"Privacy Policy"}),g.jsx("p",{className:"text-black/50",children:"Effective date: December 31, 2025"})]}),g.jsxs("div",{className:"space-y-12",children:[g.jsx("section",{ref:s,className:`${l} delay-100`,children:g.jsx("p",{className:"text-xl leading-relaxed",children:'Kreavity Works ("us", "we", or "our") operates the https://kreavityworks.com/ website (the "Service"). This Privacy Policy describes how we collect, use, disclose, and safeguard your personal data when you visit and use our Service, and your rights in relation to that data.'})}),g.jsxs("section",{ref:s,className:`${l} delay-150`,children:[g.jsx("h2",{className:"text-2xl font-medium mb-4",children:"Information we collect"}),g.jsxs("div",{className:"ml-4 space-y-4",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.1 Personal Data"}),g.jsx("p",{className:"text-black/70",children:"You may provide us with certain personal data, e.g.:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"Name, email address"}),g.jsx("li",{children:"Company name, position"}),g.jsx("li",{children:"Other contact data submitted by you"})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.2 Usage data"}),g.jsx("p",{className:"text-black/70",children:"We automatically collect usage data when you use our Service, including:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"IP address, browser type and version"}),g.jsx("li",{children:"Pages you visited, timestamps, duration"}),g.jsx("li",{children:"Device identifiers, operating system version"}),g.jsx("li",{children:"Clicks, interactions, navigation paths"})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:"1.3 Cookies & tracking technologies"}),g.jsx("p",{className:"text-black/70",children:"We use cookies, web beacons, tags, scripts, and similar tracking technologies to track activity and collect information:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mt-2",children:[g.jsx("li",{children:"Session cookies"}),g.jsx("li",{children:"Preference cookies"}),g.jsx("li",{children:"Security cookies"})]}),g.jsx("p",{className:"text-black/70 mt-2",children:"You can set your browser to refuse cookies or to notify you — but this may limit your use of some features."})]})]})]}),g.jsxs("section",{ref:s,className:`${l} delay-200`,children:[g.jsx("h2",{className:"text-2xl font-medium mb-4",children:"How we use data"}),g.jsx("p",{className:"text-black/70 mb-4",children:"We use collected data for purposes such as:"}),g.jsxs("ul",{className:"list-disc ml-5 text-black/70 mb-4",children:[g.jsx("li",{children:"Providing, operating, and maintaining the Service"}),g.jsx("li",{children:"Improving and personalizing the Service"}),g.jsx("li",{children:"Communicating with you (notifications, support)"}),g.jsx("li",{children:"Analytics and monitoring usage"}),g.jsx("li",{children:"Preventing fraud, abuse, or technical issues"})]})]})]})]})]})},d2=({setCursorHovering:o,setCursorText:t})=>{const i=Ne.useRef([]),s=d=>{d&&!i.current.includes(d)&&i.current.push(d)};Ne.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(m=>{m.isIntersecting&&(m.target.classList.add("opacity-100","translate-y-0"),m.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return setTimeout(()=>{i.current.forEach(h=>h&&d.observe(h))},100),()=>d.disconnect()},[]);const l=[{title:"AI-Powered Velocity",desc:"We slash production time via AI integration in UX/UI workflows, guaranteeing 24-48h turnaround for world-class design iterations without compromising quality.",icon:g.jsx(Hb,{size:32})},{title:"The 25 Global Principles",desc:"Zero error policy. Every pixel and code line is audited via our 25 Global Implementation Principles to ensure perfect product integrity.",icon:g.jsx(zb,{size:32})},{title:"Sentient Interaction",desc:"Building digital experiences 'aware' of user presence. We employ Sentient UI logic and Magnetic Physics for more human-centric interactions.",icon:g.jsx(hb,{size:32})},{title:"Predictive Scalability",desc:"Our web architecture is built to Fortune 500 standards. Modular structure ensures your digital assets are ready for global scale and future tech integration.",icon:g.jsx(Mb,{size:32})}],c="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black",children:[g.jsxs("article",{className:"mb-40",children:[g.jsx("h5",{ref:s,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${c}`,children:"The Performance Engine"}),g.jsxs("h1",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer",children:[g.jsx("span",{ref:s,className:`block ${c}`,children:"Architecting"}),g.jsx("span",{ref:s,className:`block ${c} delay-100`,children:"the Future of"}),g.jsx("span",{ref:s,className:`block ${c} delay-200 text-black/40`,children:"High-Scale Brands."})]}),g.jsx("div",{ref:s,className:`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${c} delay-300`,children:g.jsxs("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed pl-6",children:["Since our inception, we haven't just sought solutions; we've built ",g.jsx("strong",{children:"Visual Growth Systems"}),". Combining design precision with AI intelligence to ensure every digital asset operates at the highest level."]})})]}),g.jsxs("section",{className:"snap-start mb-20",children:[g.jsxs("div",{className:"flex justify-between items-end mb-16 border-b border-black/10 pb-8",children:[g.jsx("h2",{ref:s,className:`text-4xl font-medium tracking-tighter ${c}`,children:"The Optimization Hub"}),g.jsx("span",{ref:s,className:`hidden md:block text-black/40 ${c}`,children:"Our Standard of Excellence"})]}),g.jsx("div",{className:"grid grid-cols-1 gap-0",children:l.map((d,h)=>g.jsxs("div",{ref:s,className:`group relative py-16 border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${c}`,onMouseEnter:()=>t("BENEFIT"),onMouseLeave:()=>t(""),children:[g.jsx("div",{className:"absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8 items-start",children:[g.jsxs("div",{className:"md:col-span-1 text-black/30 font-mono text-sm pt-2",children:["0",h+1]}),g.jsxs("div",{className:"md:col-span-4",children:[g.jsx("div",{className:"mb-4 text-black/80 group-hover:text-black transition-colors",children:d.icon}),g.jsx("h3",{className:"text-3xl font-medium tracking-tight mb-2",children:d.title})]}),g.jsx("div",{className:"md:col-span-6 md:col-start-7",children:g.jsx("p",{className:"text-lg text-black/60 leading-relaxed max-w-xl group-hover:text-black/80 transition-colors",children:d.desc})})]})]},h))})]})]})},h2=({setCursorHovering:o,openPartnerForm:t})=>{const i=Ne.useRef([]),s=c=>{c&&!i.current.includes(c)&&i.current.push(c)};Ne.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&(h.target.classList.add("opacity-100","translate-y-0"),h.target.classList.remove("opacity-0","translate-y-12"))})},{threshold:.1});return setTimeout(()=>i.current.forEach(d=>d&&c.observe(d)),100),()=>c.disconnect()},[]);const l="opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";return g.jsx("div",{className:"min-h-screen bg-white text-black pt-32 pb-32",children:g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("div",{className:"min-h-[60vh] flex flex-col justify-center mb-24",children:[g.jsx("h5",{ref:s,className:`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${l}`,children:"The Growth Catalyst Program"}),g.jsxs("h1",{ref:s,className:`text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] mb-8 ${l} delay-100`,children:["Empowering ",g.jsx("br",{}),g.jsx("span",{className:"text-black/40",children:"Digital Architects."})]}),g.jsx("p",{ref:s,className:`text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-12 ${l} delay-200`,children:"Kreavity Works opens doors for high-performance individuals to join our global ecosystem as Strategic Partners. Access elite projects, world-class AI infrastructure, and limitless commissions."}),g.jsx("div",{ref:s,className:`${l} delay-300`,children:g.jsxs("button",{onClick:t,className:"bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group shadow-xl",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:["Join the Network ",g.jsx(va,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-24",children:[{title:"Independent Specialist",sub:"Freelance",icon:g.jsx(sb,{size:32}),desc:"For experts (Designers, Developers, AI Strategists) who want to work on elite projects based on the 25 Global Implementation Principles."},{title:"Strategic Affiliate",sub:"Project Agent",icon:g.jsx(Cb,{size:32}),desc:"For connectors with access to high-scale clients seeking exclusive commissions from every successfully executed project."},{title:"Agency Partner",sub:"White Label",icon:g.jsx(ob,{size:32}),desc:"For boutique agencies looking to leverage Kreavity Works' technical infrastructure for their clients, enabling scalability without operational overhead."}].map((c,d)=>g.jsxs("div",{ref:s,className:`p-8 border border-black/5 rounded-2xl hover:border-black/20 hover:bg-neutral-50 transition-all duration-500 group ${l}`,style:{transitionDelay:`${d*100}ms`},children:[g.jsx("div",{className:"mb-6 p-4 bg-white rounded-full w-fit shadow-sm text-black/80 group-hover:text-black group-hover:scale-110 transition-all",children:c.icon}),g.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-black/40 mb-2",children:c.sub}),g.jsx("h3",{className:"text-2xl font-medium tracking-tight mb-4",children:c.title}),g.jsx("p",{className:"text-black/60 leading-relaxed",children:c.desc})]},d))})]})})},Gx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],p2=[{id:"01",title:"UI/UX Design"},{id:"02",title:"App Development"},{id:"03",title:"Brand Identity"},{id:"04",title:"Motion Graphic"},{id:"05",title:"AI Tools Development"},{id:"06",title:"Social Media"},{id:"07",title:"E-Commerce"},{id:"08",title:"Platform Banner & Poster"},{id:"09",title:"Landing Page"},{id:"10",title:"Material Print Design"}],m2=({selectedDate:o,onSelect:t})=>{const i=["Su","Mo","Tu","We","Th","Fr","Sa"],s=new Date;s.setHours(0,0,0,0);const l=s.getFullYear(),d=((m,p)=>{const v=[];for(let x=0;x<p;x++){const b=new Date(m,x,1);v.push(b)}return v})(l,12),h=m=>{const p=m.getFullYear(),v=m.getMonth(),x=new Date(p,v+1,0).getDate(),b=new Date(p,v,1).getDay();return{days:x,firstDay:b}};return g.jsxs("div",{className:"bg-white border border-black/10 rounded-2xl w-full max-w-md h-80 overflow-y-auto overflow-x-hidden relative scrollbar-hide",children:[g.jsx("div",{className:"sticky top-0 bg-white/95 backdrop-blur z-10 p-4 border-b border-black/5",children:g.jsx("div",{className:"grid grid-cols-7 gap-1",children:i.map(m=>g.jsx("span",{className:"text-center text-xs font-mono text-black/40 uppercase",children:m},m))})}),g.jsx("div",{className:"p-4 space-y-8",children:d.map((m,p)=>{const v=m.getFullYear(),x=m.getMonth(),{days:b,firstDay:M}=h(m),A=m.toLocaleString("default",{month:"long",year:"numeric"}),T=Array(M).fill(null),S=Array.from({length:b},(_,U)=>U+1);return g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-medium mb-4 sticky top-12 bg-white/80 backdrop-blur w-fit px-2 py-1 rounded",children:A}),g.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[T.map((_,U)=>g.jsx("div",{},`empty-${U}`)),S.map(_=>{const U=`${A} ${_}`,D=o===U,I=new Date(v,x,_)<=s;return g.jsx("button",{disabled:I,onClick:B=>{B.preventDefault(),t(U)},className:`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 
                                                ${I?"text-black/10 cursor-not-allowed hover:bg-transparent":D?"bg-black text-white shadow-md scale-110":"text-black/70 hover:bg-black/5 hover:text-black"}`,children:_},_)})]})]},p)})})]})},Vx=({label:o,isSelected:t,onClick:i,error:s,onMouseEnter:l,onMouseLeave:c,className:d})=>g.jsxs("button",{onClick:h=>{h.preventDefault(),i()},onMouseEnter:l,onMouseLeave:c,className:`relative overflow-hidden border text-sm transition-all duration-300 rounded-full group px-4 py-3
                ${t?"border-black":s?"border-red-200 bg-red-50/10":"border-black/10"}
                ${d}
            `,children:[g.jsx("span",{className:`absolute inset-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${t?"translate-y-0":"translate-y-[100%] group-hover:translate-y-0"}
             `}),g.jsx("span",{className:`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap
                ${t?"text-white":"text-black group-hover:text-white"}
                ${s&&!t?"text-red-500":""}
             `,children:o})]}),g2=({isOpen:o,onClose:t,setCursorHovering:i,initialInterest:s=null,navigateTo:l})=>{const[c,d]=Ne.useState([]),[h,m]=Ne.useState(null),[p,v]=Ne.useState(null),[x,b]=Ne.useState([]),[M,A]=Ne.useState(!1),[T,S]=Ne.useState(!1),[_,U]=Ne.useState(!1),[D,P]=Ne.useState(Gx[0]),[I,B]=Ne.useState(!1),[z,Z]=Ne.useState(""),w=Ne.useMemo(()=>Gx.filter(me=>me.name.toLowerCase().includes(z.toLowerCase())||me.code.includes(z)),[z]),[N,G]=Ne.useState({name:"",email:"",phone:"",details:""}),[K,$]=Ne.useState({}),he=Ne.useRef(null),se=Ne.useRef(null),F=Ne.useRef(null),k=Ne.useRef(null),Q=Ne.useRef(null),_e=Ne.useRef(null);if(Ne.useEffect(()=>{const me=Me=>{_e.current&&!_e.current.contains(Me.target)&&B(!1)};return document.addEventListener("mousedown",me),()=>document.removeEventListener("mousedown",me)},[]),Ne.useEffect(()=>{s&&o&&(c.includes(s)||d(me=>[...me,s]))},[s,o]),Ne.useEffect(()=>{if(o){if(window.emailjs){window.emailjs.init("2hhIuPTWeJ0RUPxPo"),A(!0);return}const me=document.createElement("script");me.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",me.async=!0,me.onload=()=>{console.log("System Ready"),window.emailjs.init("2hhIuPTWeJ0RUPxPo"),A(!0)},me.onerror=()=>console.error("System connection issue"),document.body.appendChild(me)}},[o]),!o)return null;const ye=me=>{c.includes(me)?d(c.filter(Me=>Me!==me)):d([...c,me]),K.interests&&$(Me=>({...Me,interests:!1}))},O=["1K - 5K","5K - 10K","10K - 25K","25K - 50K","50K - 100K"],ae=me=>{m(me),K.budget&&$(Me=>({...Me,budget:!1}))},ge=me=>{if(me.target.files&&me.target.files.length>0){const Me=Array.from(me.target.files);b(it=>[...it,...Me]),me.target.value=""}},Re=me=>{b(Me=>Me.filter((it,Ot)=>Ot!==me))},ke=()=>{Q.current.click()},ie=me=>{const{name:Me,value:it}=me.target;G(Ot=>({...Ot,[Me]:it})),K[Me]&&$(Ot=>({...Ot,[Me]:!1}))},fe=()=>{const me={};let Me=null;if(c.length===0&&(me.interests=!0,Me||(Me=he)),N.name.trim()||(me.name=!0,Me||(Me=se)),N.email.trim()?N.email.includes("@")||(me.email=!0,Me||(Me=se),alert("Please enter a valid email address.")):(me.email=!0,Me||(Me=se)),N.phone.trim()||(me.phone=!0,Me||(Me=se)),N.details.trim()||(me.details=!0,Me||(Me=F)),h||(me.budget=!0,Me||(Me=k)),$(me),Me&&Me.current){Me.current.scrollIntoView({behavior:"smooth",block:"center"});return}if(!M&&!window.emailjs){alert("Connecting to email server... please try again in 2 seconds.");return}S(!0);const it=window.emailjs,Ot=x.length>0?x.map(ht=>ht.name).join(", "):"No attachments";if(it){const ht=it.send("service_7ow5sqa","template_ia9upwv",{from_name:N.name,user_email:N.email,phone_number:`${D.code} ${N.phone}`,region_location:D.name,reply_to:N.email,services:c.join(", "),budget:h,message:N.details,attachments:Ot,schedule_date:p||"Not Scheduled",company_link:"https://kreavityworks.com",year:new Date().getFullYear()},"2hhIuPTWeJ0RUPxPo"),mt=it.send("service_7ow5sqa","template_k7f2iag",{from_name:N.name,email:N.email},"2hhIuPTWeJ0RUPxPo");Promise.all([ht,mt]).then(()=>{S(!1),U(!0)}).catch(Et=>{S(!1),alert("Failed to send proposal. Please check your internet connection."),console.error("EmailJS Error:",Et)})}},De=()=>{U(!1),t(),l&&l("home")};return g.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[g.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:t}),g.jsxs("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:[_&&g.jsxs("div",{className:"absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center",children:[g.jsx("div",{className:"w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce",children:g.jsx(Oh,{size:48,strokeWidth:3})}),g.jsx("h2",{className:"text-4xl md:text-5xl font-medium tracking-tighter mb-4 animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards",children:"Proposal Sent."}),g.jsxs("p",{className:"text-xl text-black/60 max-w-md mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards",children:["Thank you, ",N.name,". We've received your brief and will analyze it with our 25 Global Principles. Expect a response within 24-48 hours."]}),g.jsxs("button",{onClick:De,className:"bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:["Back to Home ",g.jsx(va,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})]}),g.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[g.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Start a Project"}),g.jsx("button",{onClick:t,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:g.jsx(Nr,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),g.jsxs("div",{className:"p-6 md:p-12 space-y-16 overflow-y-auto overflow-x-hidden h-full",children:[g.jsxs("div",{ref:he,className:"space-y-6",children:[g.jsxs("label",{className:`text-sm font-mono uppercase tracking-widest block transition-colors ${K.interests?"text-red-600 font-bold":"text-black/40"}`,children:["01. I'm interested in... ",K.interests&&g.jsx("span",{className:"normal-case ml-2 text-xs text-red-500",children:"- This field is required"})]}),g.jsx("div",{className:"flex flex-wrap gap-2",children:p2.map(me=>g.jsx(Vx,{label:me.title,isSelected:c.includes(me.title),onClick:()=>ye(me.title),error:K.interests,className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},me.id))})]}),g.jsxs("div",{ref:se,className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsxs("label",{className:`text-sm font-mono uppercase tracking-widest block transition-colors ${K.name||K.email||K.phone?"text-red-600 font-bold":"text-black/40"}`,children:["02. Your Details ",(K.name||K.email||K.phone)&&g.jsx("span",{className:"normal-case ml-2 text-xs text-red-500",children:"- This field is required"})]}),g.jsx("div",{className:"space-y-1",children:g.jsx("input",{name:"name",value:N.name,onChange:ie,type:"text",placeholder:"Your Name",className:`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent
                                        ${K.name?"border-red-500 placeholder:text-red-300":"border-black/10 focus:border-black placeholder:text-black/20"}`})}),g.jsx("div",{className:"space-y-1",children:g.jsx("input",{name:"email",value:N.email,onChange:ie,type:"email",placeholder:"Email Address",className:`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent
                                        ${K.email?"border-red-500 placeholder:text-red-300":"border-black/10 focus:border-black placeholder:text-black/20"}`})}),g.jsxs("div",{className:"space-y-1 flex items-end gap-4 relative",children:[g.jsxs("div",{className:"w-1/3 relative",ref:_e,children:[g.jsxs("button",{onClick:()=>B(!I),className:"w-full text-left border-b border-black/10 pb-4 text-2xl md:text-3xl focus:border-black transition-colors flex items-center gap-2 truncate",children:[g.jsx("span",{className:"text-black",children:D.code}),g.jsx(Yx,{size:16,className:"opacity-50"})]}),I&&g.jsxs("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col",children:[g.jsx("div",{className:"p-3 border-b border-black/5 sticky top-0 bg-white",children:g.jsxs("div",{className:"flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-2",children:[g.jsx(Kx,{size:14,className:"opacity-50"}),g.jsx("input",{type:"text",placeholder:"Search country...",className:"bg-transparent outline-none text-sm w-full",value:z,onChange:me=>Z(me.target.value),autoFocus:!0})]})}),g.jsxs("div",{className:"overflow-y-auto flex-1",children:[w.map(me=>g.jsxs("button",{onClick:()=>{P(me),B(!1),Z("")},className:"w-full text-left px-4 py-3 hover:bg-black/5 text-sm flex justify-between items-center group",children:[g.jsx("span",{children:me.name}),g.jsx("span",{className:"text-black/40 group-hover:text-black font-mono",children:me.code})]},me.code+me.name)),w.length===0&&g.jsx("div",{className:"p-4 text-center text-xs text-black/40",children:"No country found"})]})]})]}),g.jsx("div",{className:"w-2/3",children:g.jsx("input",{name:"phone",value:N.phone,onChange:ie,type:"tel",placeholder:"Phone Number",className:`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent border-black/10 focus:border-black placeholder:text-black/20 ${K.phone?"border-red-500 placeholder:text-red-300":""}`})})]}),g.jsxs("div",{className:"text-xs text-black/40 mt-1 uppercase tracking-widest font-mono",children:["Region set to: ",D.name]})]}),g.jsxs("div",{ref:F,className:"space-y-6",children:[g.jsxs("label",{className:`text-sm font-mono uppercase tracking-widest block transition-colors ${K.details?"text-red-600 font-bold":"text-black/40"}`,children:["03. Project Details ",K.details&&g.jsx("span",{className:"normal-case ml-2 text-xs text-red-500",children:"- This field is required"})]}),g.jsx("textarea",{name:"details",value:N.details,onChange:ie,placeholder:"Tell us about the project...",rows:5,className:`w-full text-xl md:text-2xl border-b pb-4 outline-none transition-colors resize-none bg-transparent
                                    ${K.details?"border-red-500 placeholder:text-red-300":"border-black/10 focus:border-black placeholder:text-black/20"}`})]})]}),g.jsxs("div",{ref:k,className:"space-y-6",children:[g.jsxs("label",{className:`text-sm font-mono uppercase tracking-widest block transition-colors ${K.budget?"text-red-600 font-bold":"text-black/40"}`,children:["04. Project Budget (USD) ",K.budget&&g.jsx("span",{className:"normal-case ml-2 text-xs text-red-500",children:"- This field is required"})]}),g.jsx("div",{className:"flex flex-wrap gap-2",children:O.map(me=>g.jsx(Vx,{label:me,isSelected:h===me,onClick:()=>ae(me),error:K.budget,className:"flex-grow md:flex-grow-0",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},me))})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start",children:[g.jsxs("div",{className:"space-y-6 h-full",children:[g.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["05. Attachments ",g.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),g.jsx("input",{ref:Q,type:"file",multiple:!0,accept:".jpg,.jpeg,.png,.pdf",className:"hidden",onChange:ge}),x.length===0?g.jsxs("div",{onClick:ke,className:"border border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/5 transition-colors group h-80",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx("div",{className:"w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-black/50 group-hover:scale-110 transition-transform",children:g.jsx(Ig,{size:20})}),g.jsxs("div",{className:"text-center",children:[g.jsx("span",{className:"text-sm text-black/60 block font-medium",children:"Click to upload files"}),g.jsx("span",{className:"text-xs text-black/30 mt-1 block uppercase tracking-wide",children:"(JPG, PNG, PDF available)"})]})]}):g.jsxs("div",{className:"space-y-4 h-80 overflow-y-auto",children:[g.jsx("div",{className:"grid grid-cols-1 gap-3",children:x.map((me,Me)=>g.jsxs("div",{className:"flex items-center justify-between p-4 bg-neutral-50 border border-black/5 rounded-xl group hover:border-black/20 transition-colors",children:[g.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[g.jsx("div",{className:"w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-black/40",children:g.jsx(Ig,{size:14})}),g.jsx("span",{className:"text-sm font-medium text-black/80 truncate max-w-[150px] md:max-w-[200px]",children:me.name})]}),g.jsx("button",{onClick:()=>Re(Me),className:"p-2 text-black/30 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors",title:"Remove file",children:g.jsx(Fb,{size:16})})]},Me))}),g.jsxs("button",{onClick:ke,className:"flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2 py-1",children:[g.jsx("div",{className:"w-5 h-5 rounded-full border border-black flex items-center justify-center",children:g.jsx(Lb,{size:12})}),"Add more file"]})]})]}),g.jsxs("div",{className:"space-y-6 h-full",children:[g.jsxs("label",{className:"text-sm font-mono text-black/40 uppercase tracking-widest block",children:["06. Schedule a Call ",g.jsx("span",{className:"text-black/20 text-xs normal-case tracking-normal",children:"(Optional)"})]}),g.jsx(m2,{selectedDate:p,onSelect:v}),g.jsxs("p",{className:"text-xs text-black/40 flex items-center gap-2 justify-end",children:[g.jsx(_b,{size:12}),"Scheduling times adjusted to ",D.name," time."]})]})]})]}),g.jsxs("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-between items-center z-20",children:[g.jsx("img",{src:"/brand/logo.png",alt:"Logo",className:"h-8 w-auto object-contain opacity-50 grayscale hidden md:block"}),g.jsx("button",{onClick:fe,disabled:T,className:`w-full md:w-auto bg-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl ${T?"opacity-80 cursor-not-allowed scale-[0.98]":"hover:scale-[1.02] active:scale-95"}`,children:T?g.jsxs(g.Fragment,{children:[g.jsx(Zx,{size:24,className:"animate-spin"}),"Sending..."]}):g.jsxs(g.Fragment,{children:["Submit Proposal ",g.jsx(va,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})})]})]})]})},jx=[{name:"Indonesia",code:"+62"},{name:"United States",code:"+1"},{name:"United Kingdom",code:"+44"},{name:"Singapore",code:"+65"},{name:"Australia",code:"+61"},{name:"Japan",code:"+81"},{name:"Germany",code:"+49"},{name:"Malaysia",code:"+60"},{name:"China",code:"+86"},{name:"India",code:"+91"},{name:"France",code:"+33"},{name:"Canada",code:"+1"},{name:"South Korea",code:"+82"},{name:"Vietnam",code:"+84"},{name:"Thailand",code:"+66"}],x2=({isOpen:o,onClose:t,setCursorHovering:i,selectedCountry:s,setSelectedCountry:l})=>{const[c,d]=Ne.useState(jx[0]),h=s||c,m=l||d,[p,v]=Ne.useState(null),[x,b]=Ne.useState({name:"",email:"",phone:"",link:"",intro:""}),[M,A]=Ne.useState(!1),[T,S]=Ne.useState(!1),[_,U]=Ne.useState(!1),[D,P]=Ne.useState(""),I=Ne.useRef(null),B=Ne.useMemo(()=>jx.filter(w=>w.name.toLowerCase().includes(D.toLowerCase())||w.code.includes(D)),[D]);Ne.useEffect(()=>{if(o){if(window.emailjs){window.emailjs.init("2hhIuPTWeJ0RUPxPo");return}const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",w.async=!0,w.onload=()=>{console.log("Partner System Ready"),window.emailjs.init("2hhIuPTWeJ0RUPxPo")},document.body.appendChild(w)}},[o]),Ne.useEffect(()=>{const w=N=>{I.current&&!I.current.contains(N.target)&&U(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);const z=w=>{const{name:N,value:G}=w.target;b(K=>({...K,[N]:G}))},Z=()=>{if(!x.name||!x.email||!p||!x.link){alert("Please fill in all required fields.");return}A(!0);const w=window.emailjs;w?w.send("service_7ow5sqa","template_ia9upwv",{from_name:x.name,user_email:x.email,phone_number:`${h.code} ${x.phone}`,partner_type:p,region_location:h.name,portfolio_url:x.link,message:x.intro,company_link:"https://kreavityworks.com/partner",year:new Date().getFullYear()},"2hhIuPTWeJ0RUPxPo").then(()=>{A(!1),S(!0)}).catch(N=>{A(!1),alert("Failed to send application. Please try again."),console.error("EmailJS Error:",N)}):(A(!1),alert("System connecting... please try again in 3 seconds."))};return o?g.jsxs("div",{className:"fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show",children:[g.jsx("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in",onClick:t}),g.jsx("div",{className:"relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5",children:T?g.jsxs("div",{className:"absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center",children:[g.jsx("div",{className:"w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce",children:g.jsx(Oh,{size:48,strokeWidth:3})}),g.jsx("h2",{className:"text-4xl md:text-5xl font-medium tracking-tighter mb-4",children:"Application Sent."}),g.jsxs("p",{className:"text-xl text-black/60 max-w-md mb-12 leading-relaxed",children:["Welcome to the network, ",x.name,". We will review your profile and contact you for the next steps."]}),g.jsxs("button",{onClick:t,className:"bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl",children:["Close ",g.jsx(Nr,{size:20})]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5",children:[g.jsx("h2",{className:"text-2xl font-medium tracking-tighter",children:"Become a Partner"}),g.jsx("button",{onClick:t,className:"p-2 hover:bg-black/5 rounded-full transition-colors group",children:g.jsx(Nr,{size:24,className:"group-hover:rotate-90 transition-transform duration-300"})})]}),g.jsxs("div",{className:"p-6 md:p-12 space-y-12 overflow-y-auto overflow-x-hidden h-full",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"01. Select Partner Type"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:["Independent Specialist","Strategic Affiliate","Agency Partner"].map(w=>g.jsxs("button",{onClick:()=>v(w),className:`p-6 border rounded-xl text-left transition-all duration-300 hover:border-black group ${p===w?"border-black bg-black text-white":"border-black/10"}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx("h3",{className:"text-lg font-medium mb-2",children:w}),g.jsxs("p",{className:`text-sm ${p===w?"text-white/70":"text-black/50"}`,children:[w==="Independent Specialist"&&"For freelancers & experts.",w==="Strategic Affiliate"&&"For connectors & agents.",w==="Agency Partner"&&"White-label infrastructure."]})]},w))})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"02. Personal Info"}),g.jsx("input",{name:"name",value:x.name,onChange:z,type:"text",placeholder:"Full Name",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsx("input",{name:"email",value:x.email,onChange:z,type:"email",placeholder:"Email Address",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsxs("div",{className:"relative",ref:I,children:[g.jsxs("button",{onClick:()=>U(!_),className:"w-full text-left border-b border-black/10 pb-4 text-xl focus:border-black flex items-center gap-2 transition-colors",children:[g.jsx("span",{children:h.code})," ",g.jsx(Yx,{size:16,className:"opacity-50"}),g.jsx("input",{name:"phone",value:x.phone,onChange:z,type:"tel",placeholder:"Phone Number",className:"w-full bg-transparent outline-none ml-2 placeholder:text-black/20",onClick:w=>w.stopPropagation()})]}),_&&g.jsxs("div",{className:"absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col",children:[g.jsx("div",{className:"p-2 border-b border-black/5",children:g.jsxs("div",{className:"flex items-center gap-2 bg-neutral-100 rounded px-2 py-1",children:[g.jsx(Kx,{size:14,className:"opacity-50"}),g.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-transparent text-sm outline-none",value:D,onChange:w=>P(w.target.value),autoFocus:!0})]})}),g.jsx("div",{className:"overflow-y-auto flex-1",children:B.map(w=>g.jsxs("button",{onClick:()=>{m(w),U(!1)},className:"w-full text-left px-4 py-2 hover:bg-black/5 text-sm flex justify-between",children:[g.jsx("span",{children:w.name}),g.jsx("span",{className:"text-black/40",children:w.code})]},w.code+w.name))})]})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("label",{className:"text-sm font-mono uppercase tracking-widest block text-black/40",children:"03. Professional Profile"}),g.jsx("input",{name:"link",value:x.link,onChange:z,type:"text",placeholder:"Portfolio / LinkedIn URL",className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20"}),g.jsx("textarea",{name:"intro",value:x.intro,onChange:z,placeholder:"Brief Introduction / Vision...",rows:3,className:"w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent resize-none transition-colors placeholder:text-black/20"})]})]})]}),g.jsx("div",{className:"sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-end z-20",children:g.jsx("button",{onClick:Z,disabled:M,className:`bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-xl ${M?"opacity-70 cursor-not-allowed":""}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:M?g.jsxs(g.Fragment,{children:[g.jsx(Zx,{size:24,className:"animate-spin"})," Processing..."]}):g.jsxs(g.Fragment,{children:["Join Network ",g.jsx(va,{size:20})]})})})]})}),g.jsx("style",{children:`
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
            `})]}):null},v2=({project:o,allProjects:t,setCursorHovering:i,setCursorText:s,navigateTo:l,setIsEyeMode:c,openContact:d})=>{const h=Ne.useRef([]),m=A=>{const T=A.target,S=T.src;if(T.getAttribute("data-tried-fallback")==="true"){if(S.endsWith(".jpg")){T.src=S.replace(".jpg",".jpeg"),T.setAttribute("data-tried-fallback","final");return}T.style.display="none";return}T.setAttribute("data-tried-fallback","true"),S.includes(".png")?T.src=S.replace(".png",".jpg"):S.includes(".jpg")?T.src=S.replace(".jpg",".png"):S.includes(".jpeg")?T.src=S.replace(".jpeg",".png"):T.style.display="none"};Ne.useEffect(()=>{h.current=[];const A=new IntersectionObserver(S=>{S.forEach(_=>{_.isIntersecting&&(_.target.classList.add("opacity-100","translate-y-0"),_.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.05,rootMargin:"0px 0px -100px 0px"}),T=setTimeout(()=>{document.querySelectorAll(".animate-on-scroll").forEach(_=>A.observe(_))},100);return()=>{A.disconnect(),clearTimeout(T)}},[o]);const p=t.findIndex(A=>A.id===o.id),v=(p+1)%t.length,x=t[v],b=p===t.length-1,M="animate-on-scroll opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("div",{className:"pt-32 min-h-screen bg-white text-black pb-20",children:[g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("button",{onClick:()=>l("home"),className:`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12 group ${M}`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[g.jsx(Wx,{size:20,className:"group-hover:-translate-x-1 transition-transform"})," Back to Projects"]}),g.jsxs("div",{className:`flex flex-col gap-4 mb-16 ${M}`,children:[g.jsxs("div",{className:"flex items-center gap-4 text-sm font-mono tracking-widest text-black/40 uppercase",children:[g.jsx("span",{children:o.category}),g.jsx("span",{className:"w-12 h-[1px] bg-black/20"}),g.jsx("span",{children:o.id})]}),g.jsx("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none",children:o.title})]}),g.jsxs("div",{className:`w-full aspect-video bg-neutral-100 rounded-2xl overflow-hidden relative cursor-none mb-24 shadow-sm ${M} delay-100`,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[o.image?g.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover",onError:m},o.image):g.jsx("div",{className:"absolute bottom-8 left-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest",children:"Project Visual"}),g.jsx("div",{className:"absolute inset-0 bg-black/5 mix-blend-multiply"})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32",children:[g.jsxs("div",{className:`lg:col-span-7 ${M} delay-200`,children:[g.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Overview"}),g.jsx("p",{className:"text-xl md:text-2xl text-black/80 leading-relaxed font-light",children:o.detailedDesc||o.desc})]}),g.jsxs("div",{className:`lg:col-span-5 flex flex-col justify-between ${M} delay-300`,children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl font-medium mb-8 border-b border-black/10 pb-4",children:"Deliverables"}),g.jsxs("ul",{className:"space-y-4",children:[g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Strategy & Research"]}),g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Visual Design System"]}),g.jsxs("li",{className:"flex items-center gap-4 text-lg text-black/60",children:[g.jsx("div",{className:"w-2 h-2 bg-black rounded-full"})," Development & QA"]})]})]}),g.jsxs("button",{onClick:d,className:"mt-12 w-full py-8 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:["Start Project ",g.jsx(va,{size:16})]})]})]})]}),g.jsx("div",{className:`w-full bg-[#050505] text-white py-32 mb-32 ${M}`,children:g.jsxs("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8",children:[g.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter leading-none",children:"Project Gallery"}),g.jsx("span",{className:"text-white/40 text-sm hidden md:block uppercase tracking-widest mb-2",children:"Visual Exploration"})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",children:[1,2,3,4].map((A,T)=>g.jsxs("div",{className:`aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden relative group cursor-pointer ${M}`,style:{transitionDelay:`${T*100}ms`},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[g.jsx("div",{className:"absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),g.jsx("img",{src:`/${o.folder}/detail-${A}${o.fileExt||".png"}`,alt:`Detail ${A}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:m})]},`${o.id}-detail-${T}`))})]})}),!b&&g.jsx("div",{className:"px-6 md:px-12 max-w-[1600px] mx-auto",children:g.jsxs("div",{className:`border-t border-black/10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer ${M}`,onClick:()=>l("project",x.id),onMouseEnter:()=>s("NEXT"),onMouseLeave:()=>s(""),children:[g.jsxs("div",{className:"flex flex-col gap-4 order-2 md:order-1",children:[g.jsx("p",{className:"text-black/40 uppercase tracking-widest text-sm mb-4",children:"Next Featured Project"}),g.jsx("h2",{className:"text-5xl md:text-7xl font-medium tracking-tighter group-hover:text-black/60 transition-colors",children:x.title}),g.jsxs("div",{className:"flex items-center gap-4 text-black/40 group-hover:text-black transition-colors",children:[g.jsx("span",{className:"font-mono",children:x.id}),g.jsx(va,{size:24,className:"transform group-hover:translate-x-2 transition-transform"})]})]}),g.jsxs("div",{className:"order-1 md:order-2 aspect-video bg-neutral-100 rounded-lg overflow-hidden relative shadow-sm group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",children:[g.jsx("div",{className:"absolute inset-0 bg-neutral-200/50 flex items-center justify-center",children:x.image?g.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-cover",onError:m},`next-${x.id}`):g.jsx("span",{className:"text-black/10 text-6xl font-bold tracking-tighter",children:x.id})}),g.jsx("div",{className:"absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] uppercase tracking-widest",children:"Preview"})]})]})})]})},_2=({setCursorHovering:o,navigateTo:t,openContact:i})=>{const s=Ne.useRef(null),[l,c]=Ne.useState(null),[d,h]=Ne.useState(null),[m,p]=Ne.useState(!1),v=Ne.useRef([]),x=S=>{S&&!v.current.includes(S)&&v.current.push(S)};Ne.useEffect(()=>{const S=new IntersectionObserver(_=>{_.forEach(U=>{U.isIntersecting&&(U.target.classList.add("opacity-100","translate-y-0"),U.target.classList.remove("opacity-0","translate-y-16"))})},{threshold:.1});return v.current.forEach(_=>_&&S.observe(_)),()=>S.disconnect()},[]);const b=S=>{if(l===null)return 1;const _=S*60+30,U=Math.abs(l-_),D=150;return U>D?1:Math.max(1,Math.min(1+(1.5-U/D),2.2))},M=S=>{navigator.clipboard.writeText(S),p(!0),setTimeout(()=>p(!1),2e3)},A=[{icon:g.jsx(xb,{size:20}),link:"https://github.com/kreavityworks"},{icon:g.jsx(bb,{size:20}),link:"https://www.instagram.com/kreavity_works/"},{icon:g.jsx("span",{className:"font-bold text-xs",children:"UP"}),link:"https://www.upwork.com/agencies/1984085958253630159/"},{icon:g.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor",children:g.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),link:"https://x.com/KreavityWorks"}],T="opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";return g.jsxs("footer",{id:"contact",className:"snap-start min-h-screen px-6 md:px-12 relative overflow-hidden bg-white text-black py-32",children:[d&&g.jsx("div",{className:"fixed inset-0 z-[9999] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-4 animate-in fade-in duration-500",children:g.jsxs("div",{className:"bg-white text-black p-8 rounded-2xl shadow-2xl relative max-w-sm w-full border border-black/5 flex flex-col items-center text-center animate-in zoom-in-95 duration-500",children:[g.jsx("button",{onClick:()=>h(null),className:"absolute top-4 right-4 text-black/50 hover:text-black transition-all hover:scale-110 bg-neutral-100 rounded-full p-2",children:g.jsx(Nr,{size:20})}),g.jsx("div",{className:"w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards",children:d.type==="Phone"?g.jsx(Fg,{size:36}):g.jsx(zg,{size:36})}),g.jsxs("div",{className:"space-y-2 mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards",children:[g.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-black/40",children:d.type}),g.jsx("p",{className:"text-2xl font-medium tracking-tighter break-all",children:d.value})]}),g.jsx("button",{onClick:()=>M(d.value),className:`w-full py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards ${m?"bg-green-600":"hover:scale-[1.02] hover:shadow-lg"}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:g.jsxs("span",{className:`flex items-center gap-2 relative z-10 ${m?"scale-110":""} transition-transform`,children:[m?g.jsx(Oh,{size:18}):g.jsx(fb,{size:18}),m?"Copied!":"Copy to Clipboard"]})})]})}),g.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-30",children:[g.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-blob mix-blend-multiply"}),g.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"})]}),g.jsxs("div",{className:"max-w-[1600px] mx-auto w-full relative z-10",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24",children:[g.jsxs("div",{ref:x,className:`${T}`,children:[g.jsx("h2",{className:"text-6xl md:text-8xl font-medium tracking-tighter mb-8",children:"Have an idea?"}),g.jsx("button",{onClick:i,className:"relative overflow-hidden group !border-b-2 !border-t-0 !border-l-0 !border-r-0 !border-black/20 !rounded-none pb-4 flex items-center gap-6 overflow-visible cursor-pointer",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:g.jsxs("span",{className:"relative z-10 flex items-center gap-6 group-hover:gap-10 transition-all duration-500 text-4xl md:text-6xl font-light",children:["Contact Us ",g.jsx(va,{size:56})]})}),g.jsxs("div",{className:"flex gap-4 mt-8",children:[g.jsxs("button",{onClick:()=>h({type:"Phone",value:"+62 821-2544-9866"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:g.jsx(Fg,{size:24})})]}),g.jsxs("button",{onClick:()=>h({type:"Email",value:"projects@kreavityworks.com"}),className:"w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:g.jsx(zg,{size:24})})]})]})]}),g.jsxs("div",{ref:x,className:`flex flex-col gap-4 text-black/50 text-sm ${T} delay-200`,children:[g.jsxs("p",{children:["Kreavity Works HQ",g.jsx("br",{}),"Jakarta, Indonesia"]}),g.jsx("p",{className:"mt-4 text-black",children:"projects@kreavityworks.com"}),g.jsx("div",{ref:s,className:"flex items-end gap-2 mt-8 h-16",onMouseMove:S=>{const _=s.current.getBoundingClientRect();c(S.clientX-_.left)},onMouseLeave:()=>c(null),children:A.map((S,_)=>{const U=b(_);return g.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",style:{transform:`scale(${U})`},className:"w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 origin-bottom shadow-sm",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:S.icon},_)})})]})]}),g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium",children:[g.jsxs("div",{className:"flex gap-8 mb-4 md:mb-0",children:[g.jsx("button",{onClick:()=>t("privacy-policy"),className:"hover:text-black",children:"Privacy Policy"}),g.jsxs("button",{onClick:()=>t("partner"),className:"hover:text-black relative group flex items-center gap-1",children:["Become Partner Agent",g.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"})]})]}),g.jsx("p",{children:"© 2026 KreavityWorks. All Rights Reserved."})]})]})]})},y2=()=>{const[o,t]=Ne.useState("home"),[i,s]=Ne.useState(null),[l,c]=Ne.useState(!1),[d,h]=Ne.useState(!1),[m,p]=Ne.useState(!1),[v,x]=Ne.useState(!1),[b,M]=Ne.useState(null),[A,T]=Ne.useState(!1),[S,_]=Ne.useState(!1),[U,D]=Ne.useState(""),[P,I]=Ne.useState(!1),[B,z]=Ne.useState(!1),[Z,w]=Ne.useState(Gb[0]),N=Ne.useRef(null),G=Ne.useRef(null),K=Ne.useRef(null),$=Ne.useRef(null),he=k=>{M(k),p(!0)};Ne.useEffect(()=>{window.history.state||window.history.replaceState({page:"home"},"","/");const k=Q=>{Q.state&&Q.state.page?(t(Q.state.page),$.current&&$.current.scrollTo(0,0)):t("home")};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),Ne.useEffect(()=>{let k;const Q=ye=>{if(!N.current)return;const O=ye.clientX,ae=ye.clientY;let ge=1;U?ge=4:S?ge=5:A&&(ge=3.5),N.current.style.transform=`translate3d(${O}px, ${ae}px, 0) scale(${ge})`,N.current.style.opacity=P?"0":"1",G.current&&K.current&&(U?(G.current.style.opacity="0",K.current.style.opacity="1",K.current.innerText=U,N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="black",N.current.style.color="white",N.current.style.border="none"):S?(G.current.style.opacity="1",K.current.style.opacity="0",N.current.style.mixBlendMode="normal",N.current.style.backgroundColor="white",N.current.style.color="black",N.current.style.border="none"):(G.current.style.opacity="0",K.current.style.opacity="0",N.current.style.mixBlendMode="difference",N.current.style.backgroundColor="white",N.current.style.color="transparent"))};window.addEventListener("mousemove",Q);const _e=setTimeout(()=>h(!0),700);return()=>{window.removeEventListener("mousemove",Q),cancelAnimationFrame(k),clearTimeout(_e)}},[A,S,U,P]);const se=(k,Q=null)=>{if(c(!1),Q==="contact"){M(null),p(!0);return}if(k==="project"){const _e=Fc.find(ye=>ye.id===Q);_e&&(h(!1),setTimeout(()=>{s(_e),t("project"),window.history.pushState({page:"project",id:Q},"",`/project/${Q}`),h(!0),$.current&&$.current.scrollTo(0,0)},700));return}if(o===k&&typeof Q=="string"&&!Q.startsWith("0")){const _e=document.getElementById(Q);_e&&_e.scrollIntoView({behavior:"smooth"});return}o!==k?(h(!1),setTimeout(()=>{t(k);const _e=k==="home"?"/":`/${k}`;window.history.pushState({page:k},"",_e),h(!0),setTimeout(()=>{if($.current&&$.current.scrollTo(0,0),Q&&typeof Q=="string"){const ye=document.getElementById(Q);ye&&ye.scrollIntoView({behavior:"smooth"})}},50)},700)):$.current&&$.current.scrollTo({top:0,behavior:"smooth"})},F=()=>{z(!0),se("home"),setTimeout(()=>z(!1),500)};return g.jsxs(g.Fragment,{children:[g.jsx(g2,{isOpen:m,onClose:()=>p(!1),setCursorHovering:T,initialInterest:b,navigateTo:se}),g.jsx(x2,{isOpen:v,onClose:()=>x(!1),setCursorHovering:T,selectedCountry:Z,setSelectedCountry:w}),g.jsx("div",{className:`fixed inset-0 z-[10000] transition-all duration-700 ease-in-out pointer-events-none 
        ${d?"opacity-0 backdrop-blur-none":"opacity-100 backdrop-blur-3xl bg-white/10"}`}),g.jsxs("div",{ref:N,className:"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -mt-2 -ml-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out mix-blend-difference overflow-hidden",children:[g.jsx("span",{ref:G,className:"absolute opacity-0 transition-all duration-300 text-black flex items-center justify-center",children:g.jsx(mb,{size:4,strokeWidth:2.5})}),g.jsx("span",{ref:K,className:"absolute opacity-0 text-[2px] font-bold tracking-widest text-white whitespace-nowrap"})]}),g.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-white/80 border-b border-black/5 text-black transition-all duration-700 ${d?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}`,children:[g.jsx("div",{className:`cursor-pointer select-none origin-left ${B?"animate-logo-reset":""}`,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),onClick:F,children:g.jsx("img",{src:"/brand/logo.png",alt:"KREAVITY WORKS",className:"h-10 md:h-12 w-auto object-contain"})}),g.jsxs("div",{className:"hidden md:flex items-center gap-8 text-sm tracking-tight font-medium text-black/70",children:[g.jsxs("button",{onClick:()=>se("home","why-choose-us"),className:"hover:text-black relative group overflow-hidden cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[g.jsx("span",{className:"relative z-10",children:"Why Us"}),g.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"})]}),g.jsxs("button",{onClick:()=>se("workflow"),className:`hover:text-black relative group overflow-hidden cursor-pointer ${o==="workflow"?"text-black font-bold":""}`,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[g.jsx("span",{className:"relative z-10",children:"Workflow"}),g.jsx("span",{className:`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${o==="workflow"?"translate-x-0":"-translate-x-full group-hover:translate-x-0"}`})]}),g.jsxs("button",{onClick:()=>se("home","projects"),className:"hover:text-black relative group overflow-hidden cursor-pointer",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[g.jsx("span",{className:"relative z-10",children:"Projects"}),g.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"})]}),g.jsxs("button",{onClick:()=>se("company"),className:`hover:text-black relative group overflow-hidden cursor-pointer ${o==="company"?"text-black font-bold":""}`,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[g.jsx("span",{className:"relative z-10",children:"Company"}),g.jsx("span",{className:`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${o==="company"?"translate-x-0":"-translate-x-full group-hover:translate-x-0"}`})]}),g.jsxs("button",{onClick:()=>se("home","contact"),className:"relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-6 py-2",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:[g.jsx("span",{className:"absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"}),g.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2",children:"Contact Us"})]})]}),g.jsx("button",{className:"md:hidden text-black",onClick:()=>c(!l),children:l?g.jsx(Nr,{size:24}):g.jsx(wb,{size:24})})]}),l&&g.jsxs("div",{className:"fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 text-2xl font-light tracking-tighter text-black animate-in fade-in zoom-in duration-300",children:[g.jsx("button",{onClick:()=>se("home","why-choose-us"),children:"Why Us"}),g.jsx("button",{onClick:()=>se("workflow"),children:"Workflow"}),g.jsx("button",{onClick:()=>se("home","projects"),children:"Projects"}),g.jsx("button",{onClick:()=>se("company"),children:"Company"}),g.jsx("button",{onClick:()=>{c(!1),p(!0)},children:"Contact Us"}),g.jsx("button",{onClick:()=>se("partner"),children:"Partnership"}),g.jsx("button",{onClick:()=>se("privacy-policy"),children:"Privacy Policy"})]}),g.jsxs("div",{ref:$,className:`h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white 
        ${o==="home"||o==="company"?"snap-y snap-mandatory":""} 
        ${l?"overflow-hidden":""}`,children:[o==="home"&&g.jsx(c2,{setCursorHovering:T,setIsEyeMode:_,setIsVideoHovering:I,navigateTo:se}),o==="company"&&g.jsx(d2,{setCursorHovering:T,setCursorText:D}),o==="workflow"&&g.jsx(u2,{setCursorHovering:T}),o==="privacy-policy"&&g.jsx(f2,{setCursorHovering:T,navigateTo:se}),o==="partner"&&g.jsx(h2,{setCursorHovering:T,openPartnerForm:()=>x(!0)}),o==="project"&&i&&g.jsx(v2,{project:i,allProjects:Fc,setCursorHovering:T,setCursorText:D,navigateTo:se,setIsEyeMode:_,openContact:()=>he(i.title)}),g.jsx(_2,{setCursorHovering:T,navigateTo:se,openContact:()=>p(!0)})]}),g.jsx("style",{children:`
        @keyframes logoReset {
            0% { transform: scale(1); filter: blur(0px); opacity: 1; }
            40% { transform: scale(0.92); filter: blur(1.5px); opacity: 0.7; }
            100% { transform: scale(1); filter: blur(0px); opacity: 1; }
        }
        .animate-logo-reset {
            animation: logoReset 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `})]})};Zy.createRoot(document.getElementById("root")).render(g.jsx(Ne.StrictMode,{children:g.jsx(y2,{})}));
