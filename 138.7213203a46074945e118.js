/*! For license information please see 138.7213203a46074945e118.js.LICENSE.txt */
(self.webpackChunkpokedex_v2=self.webpackChunkpokedex_v2||[]).push([[138],{6230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData},3250:(e,t,r)=>{"use strict";var n=r(7294),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,i=n.useEffect,a=n.useLayoutEffect,c=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),s=n[0].inst,l=n[1];return a((function(){s.value=r,s.getSnapshot=t,u(s)&&l({inst:s})}),[e,r,t]),i((function(){return u(s)&&l({inst:s}),e((function(){u(s)&&l({inst:s})}))}),[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},1688:(e,t,r)=>{"use strict";e.exports=r(3250)},477:(e,t,r)=>{"use strict";r.d(t,{a:()=>g});var n=r(2161),s=r(81),o=r(5761),i=r(3989),a=r(2379);class c extends i.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),u(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return l(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&h(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),!o||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();const i=this.computeRefetchInterval();!o||this.currentQuery===s&&this.options.enabled===r.enabled&&i===this.currentRefetchInterval||this.updateRefetchInterval(i)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach((r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})})),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then((()=>this.createResult(r,t)))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(n.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),n.sk||this.currentResult.isStale||!(0,n.PN)(this.options.staleTime))return;const e=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),e)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||o.j.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,s=this.options,o=this.currentResult,i=this.currentResultState,c=this.currentResultOptions,l=e!==r,f=l?e.state:this.currentQueryInitialState,p=l?this.currentResult:this.previousQueryResult,{state:m}=e;let y,{dataUpdatedAt:b,error:g,errorUpdatedAt:R,fetchStatus:E,status:w}=m,O=!1,S=!1;if(t._optimisticResults){const n=this.hasListeners(),o=!n&&u(e,t),i=n&&h(e,r,t,s);(o||i)&&(E=(0,a.Kw)(e.options.networkMode)?"fetching":"paused",b||(w="loading")),"isRestoring"===t._optimisticResults&&(E="idle")}if(t.keepPreviousData&&!m.dataUpdatedAt&&null!=p&&p.isSuccess&&"error"!==w)y=p.data,b=p.dataUpdatedAt,w=p.status,O=!0;else if(t.select&&void 0!==m.data)if(o&&m.data===(null==i?void 0:i.data)&&t.select===this.selectFn)y=this.selectResult;else try{this.selectFn=t.select,y=t.select(m.data),y=(0,n.oE)(null==o?void 0:o.data,y,t),this.selectResult=y,this.selectError=null}catch(e){this.selectError=e}else y=m.data;if(void 0!==t.placeholderData&&void 0===y&&"loading"===w){let e;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==c?void 0:c.placeholderData))e=o.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(w="success",y=(0,n.oE)(null==o?void 0:o.data,e,t),S=!0)}this.selectError&&(g=this.selectError,y=this.selectResult,R=Date.now(),w="error");const v="fetching"===E,T="loading"===w,A="error"===w;return{status:w,fetchStatus:E,isLoading:T,isSuccess:"success"===w,isError:A,isInitialLoading:T&&v,data:y,dataUpdatedAt:b,error:g,errorUpdatedAt:R,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>f.dataUpdateCount||m.errorUpdateCount>f.errorUpdateCount,isFetching:v,isRefetching:v&&!T,isLoadingError:A&&0===m.dataUpdatedAt,isPaused:"paused"===E,isPlaceholderData:S,isPreviousData:O,isRefetchError:A&&0!==m.dataUpdatedAt,isStale:d(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,n.VS)(r,t))return;this.currentResult=r;const s={cache:!0};!1!==(null==e?void 0:e.listeners)&&(()=>{if(!t)return!0;const{notifyOnChangeProps:e}=this.options;if("all"===e||!e&&!this.trackedProps.size)return!0;const r=new Set(null!=e?e:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some((e=>{const n=e;return this.currentResult[n]!==t[n]&&r.has(n)}))})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,a.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){s.V.batch((()=>{var t,r,n,s;if(e.onSuccess)null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(s=this.options).onSettled)||n.call(s,this.currentResult.data,null);else if(e.onError){var o,i,a,c;null==(o=(i=this.options).onError)||o.call(i,this.currentResult.error),null==(a=(c=this.options).onSettled)||a.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach((e=>{e(this.currentResult)})),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function u(e,t){return function(e,t){return!(!1===t.enabled||e.state.dataUpdatedAt||"error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&l(e,t,t.refetchOnMount)}function l(e,t,r){if(!1!==t.enabled){const n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&d(e,t)}return!1}function h(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&d(e,r)}function d(e,t){return e.isStaleByTime(t.staleTime)}var f=r(7294);const p=r(1688).useSyncExternalStore;const m=f.createContext(function(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}());var y=r(5945);const b=f.createContext(!1);function g(e,t,r){return function(e,t){const r=(0,y.NL)({context:e.context}),n=f.useContext(b),o=f.useContext(m),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=s.V.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=s.V.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=s.V.batchCalls(i.onSettled)),(e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)})(i),((e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))})(i,o),(e=>{f.useEffect((()=>{e.clearReset()}),[e])})(o);const[a]=f.useState((()=>new t(r,i))),c=a.getOptimisticResult(i);if(p(f.useCallback((e=>n?()=>{}:a.subscribe(s.V.batchCalls(e))),[a,n]),(()=>a.getCurrentResult()),(()=>a.getCurrentResult())),f.useEffect((()=>{a.setOptions(i,{listeners:!1})}),[i,a]),((e,t,r)=>(null==e?void 0:e.suspense)&&((e,t)=>e.isLoading&&e.isFetching&&!t)(t,r))(i,c,n))throw((e,t,r)=>t.fetchOptimistic(e).then((({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)})).catch((t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)})))(i,a,o);if((({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>{return e.isError&&!t.isReset()&&!e.isFetching&&(s=r,o=[e.error,n],"function"==typeof s?s(...o):!!s);var s,o})({result:c,errorResetBoundary:o,useErrorBoundary:i.useErrorBoundary,query:a.getCurrentQuery()}))throw c.error;return i.notifyOnChangeProps?c:a.trackResult(c)}((0,n._v)(e,t,r),c)}b.Provider},1817:(e,t,r)=>{"use strict";function n(e,t){return function(){return e.apply(t,arguments)}}r.d(t,{Z:()=>ke});const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,i=(a=Object.create(null),e=>{const t=s.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,h=u("undefined"),d=c("ArrayBuffer"),f=u("string"),p=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==i(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=c("Date"),R=c("File"),E=c("Blob"),w=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,s;if("object"!=typeof e&&(e=[e]),l(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let i;for(n=0;n<o;n++)i=s[n],t.call(null,e[i],i,e)}}function v(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,s=r.length;for(;s-- >0;)if(n=r[s],t===n.toLowerCase())return n;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=e=>!h(e)&&e!==T,C=(x="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>x&&e instanceof x);var x;const P=c("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),N=c("RegExp"),U=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};S(r,((r,s)=>{!1!==t(r,s,e)&&(n[s]=r)})),Object.defineProperties(e,n)},F={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||p(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:f,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:b,isUndefined:h,isDate:g,isFile:R,isBlob:E,isRegExp:N,isFunction:p,isStream:e=>y(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:C,isFileList:w,forEach:S,merge:function e(){const{caseless:t}=A(this)&&this||{},r={},n=(n,s)=>{const o=t&&v(r,s)||s;b(r[o])&&b(n)?r[o]=e(r[o],n):b(n)?r[o]=e({},n):l(n)?r[o]=n.slice():r[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:s}={})=>(S(t,((t,s)=>{r&&p(t)?e[s]=n(t,r):e[s]=t}),{allOwnKeys:s}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],n&&!n(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&o(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:P,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,r)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];p(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return l(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:v,global:T,isContextDefined:A,toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const s=l(e)?[]:{};return S(e,((e,t)=>{const o=r(e,n+1);!h(o)&&(s[t]=o)})),t[n]=void 0,s}}return e};return r(e,0)}};function D(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}F.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _=D.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{B[e]={value:e}})),Object.defineProperties(D,B),Object.defineProperty(_,"isAxiosError",{value:!0}),D.from=(e,t,r,n,s,o)=>{const i=Object.create(_);return F.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),D.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const L=D,k=r(6230);function I(e){return F.isPlainObject(e)||F.isArray(e)}function Q(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function q(e,t,r){return e?e.concat(t).map((function(e,t){return e=Q(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const M=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)})),z=function(e,t,r){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new(k||FormData);const n=(r=F.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!F.isUndefined(t[e])}))).metaTokens,s=r.visitor||l,o=r.dots,i=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&F.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!F.isFunction(s))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!a&&F.isBlob(e))throw new L("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,r,s){let a=e;if(e&&!s&&"object"==typeof e)if(F.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(I)}(e)||F.isFileList(e)||F.endsWith(r,"[]")&&(a=F.toArray(e)))return r=Q(r),a.forEach((function(e,n){!F.isUndefined(e)&&null!==e&&t.append(!0===i?q([r],n,o):null===i?r:r+"[]",u(e))})),!1;return!!I(e)||(t.append(q(s,r,o),u(e)),!1)}const h=[],d=Object.assign(M,{defaultVisitor:l,convertValue:u,isVisitable:I});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!F.isUndefined(r)){if(-1!==h.indexOf(r))throw Error("Circular reference detected in "+n.join("."));h.push(r),F.forEach(r,(function(r,o){!0===(!(F.isUndefined(r)||null===r)&&s.call(t,r,F.isString(o)?o.trim():o,n,d))&&e(r,n?n.concat(o):[o])})),h.pop()}}(e),t};function V(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function J(e,t){this._pairs=[],e&&z(e,this,t)}const K=J.prototype;K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,V)}:V;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const H=J;function W(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $(e,t,r){if(!t)return e;const n=r&&r.encode||W,s=r&&r.serialize;let o;if(o=s?s(t,r):F.isURLSearchParams(t)?t.toString():new H(t,r).toString(n),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const G=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},X={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Z="undefined"!=typeof URLSearchParams?URLSearchParams:H,Y=FormData,ee=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),te="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,re={isBrowser:!0,classes:{URLSearchParams:Z,FormData:Y,Blob},isStandardBrowserEnv:ee,isStandardBrowserWebWorkerEnv:te,protocols:["http","https","file","blob","url","data"]},ne=function(e){function t(e,r,n,s){let o=e[s++];const i=Number.isFinite(+o),a=s>=e.length;return o=!o&&F.isArray(n)?n.length:o,a?(F.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!i):(n[o]&&F.isObject(n[o])||(n[o]=[]),t(e,r,n[o],s)&&F.isArray(n[o])&&(n[o]=function(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}(n[o])),!i)}if(F.isFormData(e)&&F.isFunction(e.entries)){const r={};return F.forEachEntry(e,((e,n)=>{t(function(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null},se={"Content-Type":void 0},oe={transitional:X,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,s=F.isObject(e);if(s&&F.isHTMLForm(e)&&(e=new FormData(e)),F.isFormData(e))return n&&n?JSON.stringify(ne(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return z(e,new re.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return re.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=F.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return z(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||n?(t.setContentType("application/json",!1),function(e,t,r){if(F.isString(e))try{return(0,JSON.parse)(e),F.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||oe.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&F.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw L.from(e,L.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(e){oe.headers[e]={}})),F.forEach(["post","put","patch"],(function(e){oe.headers[e]=F.merge(se)}));const ie=oe,ae=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ce=Symbol("internals");function ue(e){return e&&String(e).trim().toLowerCase()}function le(e){return!1===e||null==e?e:F.isArray(e)?e.map(le):String(e)}function he(e,t,r,n){return F.isFunction(n)?n.call(this,t,r):F.isString(t)?F.isString(n)?-1!==t.indexOf(n):F.isRegExp(n)?n.test(t):void 0:void 0}class de{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function s(e,t,r){const s=ue(t);if(!s)throw new Error("header name must be a non-empty string");const o=F.findKey(n,s);(!o||void 0===n[o]||!0===r||void 0===r&&!1!==n[o])&&(n[o||t]=le(e))}const o=(e,t)=>F.forEach(e,((e,r)=>s(e,r,t)));return F.isPlainObject(e)||e instanceof this.constructor?o(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?o((e=>{const t={};let r,n,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),r=e.substring(0,s).trim().toLowerCase(),n=e.substring(s+1).trim(),!r||t[r]&&ae[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t):null!=e&&s(t,e,r),this}get(e,t){if(e=ue(e)){const r=F.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(F.isFunction(t))return t.call(this,e,r);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ue(e)){const r=F.findKey(this,e);return!(!r||t&&!he(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function s(e){if(e=ue(e)){const s=F.findKey(r,e);!s||t&&!he(0,r[s],s,t)||(delete r[s],n=!0)}}return F.isArray(e)?e.forEach(s):s(e),n}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,r={};return F.forEach(this,((n,s)=>{const o=F.findKey(r,s);if(o)return t[o]=le(n),void delete t[s];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(s):String(s).trim();i!==s&&delete t[s],t[i]=le(n),r[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&F.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[ce]=this[ce]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=ue(e);t[n]||(function(e,t){const r=F.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,s){return this[n].call(this,t,e,r,s)},configurable:!0})}))}(r,e),t[n]=!0)}return F.isArray(e)?e.forEach(n):n(e),this}}de.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.freezeMethods(de.prototype),F.freezeMethods(de);const fe=de;function pe(e,t){const r=this||ie,n=t||r,s=fe.from(n.headers);let o=n.data;return F.forEach(e,(function(e){o=e.call(r,o,s.normalize(),t?t.status:void 0)})),s.normalize(),o}function me(e){return!(!e||!e.__CANCEL__)}function ye(e,t,r){L.call(this,null==e?"canceled":e,L.ERR_CANCELED,t,r),this.name="CanceledError"}F.inherits(ye,L,{__CANCEL__:!0});const be=ye,ge=re.isStandardBrowserEnv?{write:function(e,t,r,n,s,o){const i=[];i.push(e+"="+encodeURIComponent(t)),F.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),F.isString(n)&&i.push("path="+n),F.isString(s)&&i.push("domain="+s),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Re(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ee=re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=F.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0};function we(e,t){let r=0;const n=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s,o=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=n[i];s||(s=c),r[o]=a,n[o]=c;let l=i,h=0;for(;l!==o;)h+=r[l++],l%=e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-r,c=n(a);r=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&o<=i?(i-o)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Oe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){let n=e.data;const s=fe.from(e.headers).normalize(),o=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}F.isFormData(n)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}const u=Re(e.baseURL,e.url);function l(){if(!c)return;const n=fe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new L("Request failed with status code "+r.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}((function(e){t(e),a()}),(function(e){r(e),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:n,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),$(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(r(new L("Request aborted",L.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||X;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new L(t,n.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,c)),c=null},re.isStandardBrowserEnv){const t=(e.withCredentials||Ee(u))&&e.xsrfCookieName&&ge.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}void 0===n&&s.setContentType(null),"setRequestHeader"in c&&F.forEach(s.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),F.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",we(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(r(!t||t.type?new be(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const h=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);h&&-1===re.protocols.indexOf(h)?r(new L("Unsupported protocol "+h+":",L.ERR_BAD_REQUEST,e)):c.send(n||null)}))}};F.forEach(Oe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new be(null,e)}function ve(e){return Se(e),e.headers=fe.from(e.headers),e.data=pe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let s=0;s<t&&(r=e[s],!(n=F.isString(r)?Oe[r.toLowerCase()]:r));s++);if(!n){if(!1===n)throw new L(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(Oe,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!F.isFunction(n))throw new TypeError("adapter is not a function");return n})(e.adapter||ie.adapter)(e).then((function(t){return Se(e),t.data=pe.call(e,e.transformResponse,t),t.headers=fe.from(t.headers),t}),(function(t){return me(t)||(Se(e),t&&t.response&&(t.response.data=pe.call(e,e.transformResponse,t.response),t.response.headers=fe.from(t.response.headers))),Promise.reject(t)}))}const Te=e=>e instanceof fe?e.toJSON():e;function Ae(e,t){t=t||{};const r={};function n(e,t,r){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:r},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}function s(e,t,r){return F.isUndefined(t)?F.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function o(e,t){if(!F.isUndefined(t))return n(void 0,t)}function i(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,s,o){return o in t?n(r,s):o in e?n(void 0,r):void 0}const c={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>s(Te(e),Te(t),!0)};return F.forEach(Object.keys(e).concat(Object.keys(t)),(function(n){const o=c[n]||s,i=o(e[n],t[n],n);F.isUndefined(i)&&o!==a||(r[n]=i)})),r}const Ce={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const xe={};Ce.transitional=function(e,t,r){function n(e,t){return"[Axios v1.2.6] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,s,o)=>{if(!1===e)throw new L(n(s," has been removed"+(t?" in "+t:"")),L.ERR_DEPRECATED);return t&&!xe[s]&&(xe[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,s,o)}};const Pe={assertOptions:function(e,t,r){if("object"!=typeof e)throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const t=e[o],r=void 0===t||i(t,o,e);if(!0!==r)throw new L("option "+o+" must be "+r,L.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new L("Unknown option "+o,L.ERR_BAD_OPTION)}},validators:Ce},je=Pe.validators;class Ne{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ae(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:s}=t;let o;void 0!==r&&Pe.assertOptions(r,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean)},!1),void 0!==n&&Pe.assertOptions(n,{encode:je.function,serialize:je.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=s&&F.merge(s.common,s[t.method]),o&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete s[e]})),t.headers=fe.concat(o,s);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[ve.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);h<l;)u=u.then(e[h++],e[h++]);return u}l=i.length;let d=t;for(h=0;h<l;){const e=i[h++],t=i[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=ve.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(e){return $(Re((e=Ae(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(e){Ne.prototype[e]=function(t,r){return this.request(Ae(r||{},{method:e,url:t,data:(r||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,s){return this.request(Ae(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Ne.prototype[e]=t(),Ne.prototype[e+"Form"]=t(!0)}));const Ue=Ne;class Fe{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,s){r.reason||(r.reason=new be(e,n,s),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Fe((function(t){e=t})),cancel:e}}}const De=Fe,_e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_e).forEach((([e,t])=>{_e[t]=e}));const Be=_e,Le=function e(t){const r=new Ue(t),s=n(Ue.prototype.request,r);return F.extend(s,Ue.prototype,r,{allOwnKeys:!0}),F.extend(s,r,null,{allOwnKeys:!0}),s.create=function(r){return e(Ae(t,r))},s}(ie);Le.Axios=Ue,Le.CanceledError=be,Le.CancelToken=De,Le.isCancel=me,Le.VERSION="1.2.6",Le.toFormData=z,Le.AxiosError=L,Le.Cancel=Le.CanceledError,Le.all=function(e){return Promise.all(e)},Le.spread=function(e){return function(t){return e.apply(null,t)}},Le.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},Le.mergeConfig=Ae,Le.AxiosHeaders=fe,Le.formToJSON=e=>ne(F.isHTMLForm(e)?new FormData(e):e),Le.HttpStatusCode=Be,Le.default=Le;const ke=Le}}]);